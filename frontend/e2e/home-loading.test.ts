import assert from 'node:assert/strict';
import {after,before,describe,it} from 'node:test';
import type {Browser} from 'playwright-core';
import {expectBody,launch,requiredEnv,VIEWPORTS} from './harness.ts';

describe('首页加载结构',()=>{
 let browser:Browser;
 before(async()=>{browser=await launch()});
 after(async()=>{await browser?.close()});
 for(const viewport of VIEWPORTS)for(const hasFeed of [true,false]){
  it(`${viewport.name} 新作区 ${hasFeed?'有内容':'为空'}`,{timeout:60000},async()=>{
   const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height}});
   let release:()=>void=()=>{};
   try{
    await context.addInitScript(({hasFeed})=>{
     localStorage.setItem('peach.settings.v1',JSON.stringify({detailAutoplay:false,homeLayout:hasFeed?'big':'small'}));
     const seen=new WeakSet<Element>();
     (window as any).__catalogSkeletons=0;
     (window as any).__catalogRatios=[];
     new MutationObserver(()=>{document.querySelectorAll('#grid .catalog-skeleton').forEach(node=>{
      if(node.closest('[data-content-skeleton][aria-hidden="true"]')||getComputedStyle(node).visibility==='hidden')return;
      if(!seen.has(node)){seen.add(node);(window as any).__catalogSkeletons++;
       (window as any).__catalogRatios.push(Number((node.querySelector('[style]') as HTMLElement)?.style.getPropertyValue('--skeleton-card-ratio')))}
     });
      if(!(window as any).__firstCard){
       const card=document.querySelector('#grid [data-media-card]');
       if(card){(window as any).__firstCard=card;(window as any).__firstTier=document.querySelector('[data-catalog-tier]')}
      }
     }).observe(document,{childList:true,subtree:true});
    },{hasFeed});
    const page=await context.newPage();
    const problems:string[]=[];
    page.on('pageerror',error=>problems.push(error.message));
    page.on('console',message=>{if(message.type()==='error')problems.push(message.text())});
    page.setDefaultTimeout(8000);
    const scopes:string[]=[];
    await page.route('**/api/sources',route=>route.fulfill({json:{ok:true,sources:[{location:'local',online:true},{location:'115',online:false}]}}));
    await page.route(/\/api\/facets\?/,async route=>{
     scopes.push(new URL(route.request().url()).searchParams.get('loc')||'');
     await route.continue();
    });
    await page.route(/\/api\/tops\?/,async route=>{
     const first=!(Number(new URL(route.request().url()).searchParams.get('page'))>0);
     await route.fulfill({json:{performers:first?[{id:90001,k:'示例演员',n:1,has_image:false,has_avatar:false}]:[],studios:[]}});
    });
    await page.route('**/api/entity/shapes',async route=>{
     const response=await route.fetch(),data=await response.json();
     await route.fulfill({json:{...data,home:{feed:hasFeed}}});
    });
    await page.route('**/api/settings',async route=>{
     if(route.request().method()!=='GET'){await route.continue();return}
     await new Promise(resolve=>setTimeout(resolve,650));
     await route.fulfill({json:{sidebarOrder:['','jav','follow','performers','tags','studios','flagged','manage']}});
    });
    const held=new Promise<void>(resolve=>{release=resolve});
    await page.route(/\/api\/feeds\/discoveries\?/,async route=>{
     await held;
     await route.fulfill({json:{ok:true,items:hasFeed?[{id:1,code:'EXM-001',title:'示例新作',has_cover:false}]:[]}});
    });
    await page.goto(requiredEnv('PEACH_E2E_ORIGIN')+'/',{waitUntil:'load'});
    const card=page.locator('#grid [data-media-card]').first();
    await expectBody(page,'首页目录',[card],problems);
    await page.waitForTimeout(1100);
    const before=(await card.boundingBox())!;
    const first=await card.elementHandle();
    const tiers=await page.locator('[data-catalog-tier]').first().elementHandle();
    assert.equal(await page.locator('#feedNew .feednewskeleton').count()>0,hasFeed);
    if(hasFeed){
     assert.equal(await page.locator('#feedNew .feednewrow').evaluate(node=>getComputedStyle(node).scrollbarWidth),'none','新作骨架不显示原生横向滚动条');
     assert.equal(await page.locator('#feedNew > .ovtrack.ov-x:visible').count(),0,'新作骨架不显示外层横向轨道');
     const colors=await page.locator('#feedNew .feednewskeleton .pic').first().evaluate(node=>{
      const probe=document.createElement('i');probe.style.background='var(--hover)';node.append(probe);
      const expected=getComputedStyle(probe).backgroundColor,actual=getComputedStyle(node).backgroundColor;
      probe.remove();return {expected,actual};
     });
     assert.equal(colors.actual,colors.expected,'骨架圆角底色与占位层一致');
    }
    assert.equal(await page.evaluate(()=>(window as any).__catalogSkeletons),1,'目录骨架只展示一轮');
    assert.deepEqual(await page.evaluate(()=>(window as any).__catalogRatios),[hasFeed?3/4:16/9]);
    release();
    if(hasFeed)await page.locator('#feedNew [data-feed-id]').first().waitFor({state:'visible'});
    await page.waitForTimeout(1400);
    const after=(await card.boundingBox())!;
    assert.ok(Math.abs(after.y-before.y)<=1,`新作加载影响网格位置：${before.y} → ${after.y}`);
    assert.equal(await first!.evaluate(node=>node.isConnected),true);
    assert.equal(await tiers!.evaluate(node=>node.isConnected),true);
    assert.equal(await page.evaluate(()=>(window as any).__firstCard?.isConnected&&(window as any).__firstTier?.isConnected),true);
    assert.equal(await page.locator('#feedNew [data-skeleton]').count(),0);
    assert.equal(await page.locator('#feedNew').getAttribute('aria-label'),'未入库的新作');
    assert.ok(scopes.length>0);
    assert.deepEqual([...new Set(scopes)],['local'],'默认筛选始终排除离线来源');
   }finally{release();await context.close()}
  });
 }
 for(const path of ['/', '/?jav=1']) for(const viewport of VIEWPORTS){
  it(`${viewport.name} ${path} 图片一直等待或失败时作品文字与操作仍可用`,{timeout:60000},async()=>{
   const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height}});
   let release:()=>void=()=>{};
   const held=new Promise<void>(resolve=>{release=resolve});
   let imageRequests=0;
   try{
    await context.addInitScript(()=>{
     localStorage.setItem('peach.settings.v1',JSON.stringify({detailAutoplay:false}));
    });
    const page=await context.newPage();
    const failures:string[]=[];
    const firstPages:URLSearchParams[]=[];
    let shapeRequests=0;
    page.on('pageerror',error=>failures.push(error.message));
    await page.route('**/api/entity/shapes',async route=>{
     shapeRequests++;
     await held;
     await route.continue();
    });
    await page.route(/\/api\/items\?/,async route=>{
     const url=new URL(route.request().url());
     if(!url.searchParams.has('summary_only')&&!url.searchParams.has('orient')&&url.searchParams.get('offset')==='0')firstPages.push(url.searchParams);
     // 演示库是风景作品；JAV 布局复用同一批合成媒体，不依赖正式馆藏。
     if(url.searchParams.get('jav')==='1'){
      url.searchParams.delete('jav');
      const response=await route.fetch({url:url.href});
      const data=await response.json();
      await route.fulfill({json:{...data,items:data.items?.map((item:{id:number})=>({...item,is_jav:true,code:`ABC-${String(item.id).padStart(3,'0')}`}))}});
     }else await route.continue();
    });
    await page.route(/\/(poster|thumb|cover|entity-image|avatar)(\?|$)/,async route=>{
     imageRequests++;
     await held;
     await route.abort('failed');
    });
    const imageRequested=page.waitForRequest(request=>request.resourceType()==='image'
     &&/\/(poster|thumb|cover|entity-image|avatar)(\?|$)/.test(request.url()));
    void imageRequested.catch(()=>{});
    await page.goto(requiredEnv('PEACH_E2E_ORIGIN')+path,{waitUntil:'domcontentloaded'});
    const card=page.locator('#grid [data-media-card]').first();
    const title=card.locator('[data-media-title]');
    await title.waitFor({state:'visible'});
    await card.scrollIntoViewIfNeeded();
    await imageRequested;
    assert.ok((await title.innerText()).trim(),'图片未取得也应显示片名');
    assert.ok(firstPages.length>0&&firstPages.every(params=>params.get('count')==='0'),'首屏不等待整库统计');
    assert.ok(shapeRequests>0,'实体索引仍在等待时首屏已可用');
    assert.ok(imageRequests>0,'确实拦住了卡片图片请求');
    const open=card.locator('[data-media-open]');
    assert.equal(await open.isEnabled(),true);
    const picture=card.locator('[data-media-pic]');
    const before=await picture.evaluate(node=>({width:node.getBoundingClientRect().width,height:node.getBoundingClientRect().height}));
    assert.ok(before.width>0&&before.height>0,'图片等待时保留画面位置');
    await title.click();
    await page.locator('#stage[open] [data-item-side]').waitFor({state:'visible'});
    assert.ok(imageRequests>0,'封面请求仍被拦住时详情已能打开');
    await page.locator('#closeStage').click();
    const imageFailed=page.waitForEvent('requestfailed',{predicate:request=>request.resourceType()==='image'});
    release();
    await imageFailed;
    assert.equal(await title.isVisible(),true,'图片失败后片名仍可见');
    assert.equal(await open.isEnabled(),true,'图片失败后仍可打开作品');
    const after=await picture.evaluate(node=>({width:node.getBoundingClientRect().width,height:node.getBoundingClientRect().height}));
    assert.ok(Math.abs(after.width-before.width)<=1&&Math.abs(after.height-before.height)<=1,'图片失败不挤动卡片');
    assert.deepEqual(failures,[]);
   }finally{release();await context.close()}
  });
 }
});
