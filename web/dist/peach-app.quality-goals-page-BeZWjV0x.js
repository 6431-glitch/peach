(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e119031d-bd4c-43a2-afa8-5619e4cc34e3", e._sentryDebugIdIdentifier = "sentry-dbid-e119031d-bd4c-43a2-afa8-5619e4cc34e3");
	} catch {}
})();
import { Button as e, CloudDownloadDialog as t, CollectionSummary as n, EmptyState as r, LOC as i, Note as a, OA as o, QUALITY_GOALS_KEY as s, __toESM as c, cardClass as l, errorMessage as u, fetchQualityGoals as d, fmtDur as f, fmtSize as p, jsx as m, jsxs as h, previewUrl as g, require_react as _, useQuery as v } from "./peach-app.js";
import { Page as y } from "./peach-app.page-CW3QRN2N.js";
// src/react/quality-goals/quality-goals-page.tsx
var b = /* @__PURE__ */ c(_(), 1);
function x({ item: t, openItem: n, searchResources: r, javTitleHtml: a, javDisplayName: o, srcBadge: s }) {
	let c = () => n(t.id);
	return /* @__PURE__ */ h("li", {
		"data-goal-id": t.id,
		className: l({
			padding: "none",
			bordered: "soft",
			className: "flex flex-col gap-3 p-3"
		}),
		children: [/* @__PURE__ */ h("div", {
			className: "flex min-w-0 gap-4",
			children: [/* @__PURE__ */ h("button", {
				type: "button",
				onClick: c,
				"aria-label": `打开 ${o(t)}`,
				className: "relative inline-grid w-card-cover shrink-0 self-start aspect-card-cover cursor-pointer place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default",
				children: [/* @__PURE__ */ m("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: "暂无预览"
				}), /* @__PURE__ */ m("img", {
					src: g(t),
					alt: "",
					loading: "lazy",
					onError: (e) => e.currentTarget.remove(),
					className: "absolute inset-0 size-full object-contain"
				})]
			}), /* @__PURE__ */ h("div", {
				className: "flex min-w-0 flex-col gap-1.5",
				children: [
					/* @__PURE__ */ m("h3", {
						className: "text-headline-medium text-text-primary",
						children: /* @__PURE__ */ m("button", {
							type: "button",
							onClick: c,
							title: o(t),
							className: "line-clamp-2 w-full cursor-pointer text-left wrap-anywhere",
							dangerouslySetInnerHTML: { __html: a(t) }
						})
					}),
					/* @__PURE__ */ h("p", {
						className: "flex flex-wrap items-center gap-2 text-body-2-regular text-text-secondary",
						children: [
							/* @__PURE__ */ m("span", {
								className: "contents",
								dangerouslySetInnerHTML: { __html: s(t.location, t.cost) }
							}),
							/* @__PURE__ */ m("span", { children: i[t.location] ?? t.location }),
							/* @__PURE__ */ m("span", { children: f(t.duration) }),
							/* @__PURE__ */ m("span", { children: Number(t.size) > 0 ? p(Number(t.size)) : "大小未知" })
						]
					}),
					t.reason ? /* @__PURE__ */ m("p", {
						className: "border-t border-separator-border pt-3 text-body-2-regular text-text-secondary wrap-anywhere",
						children: t.reason
					}) : null
				]
			})]
		}), /* @__PURE__ */ h("footer", {
			className: "flex flex-wrap justify-end gap-2",
			children: [t.code ? /* @__PURE__ */ m(e, {
				variant: "secondary",
				size: "small",
				onClick: () => r({
					code: t.code,
					title: o(t),
					origin: `asset:${t.id}`,
					searchReason: t.reason || "",
					duration: t.duration,
					cover: g(t)
				}),
				children: "查找资源"
			}) : null, /* @__PURE__ */ m(e, {
				variant: "secondary",
				size: "small",
				onClick: c,
				children: "查看版本"
			})]
		})]
	});
}
function S({ toast: e, ...i }) {
	let [c, l] = (0, b.useState)(null), f = v({
		queryKey: s,
		queryFn: ({ signal: e }) => d(e)
	}), p = f.data;
	if (!p) return /* @__PURE__ */ m(y, { children: /* @__PURE__ */ m(a, {
		tone: "error",
		title: "高清版目标读取失败",
		children: f.error ? u(f.error) : "未取得高清版目标，请刷新页面重试。"
	}) });
	let g = p.items || [];
	return g.length ? /* @__PURE__ */ h(y, { children: [
		/* @__PURE__ */ m(n, {
			label: "待升级",
			figure: `${Number(p.total || 0).toLocaleString()} 部作品`,
			flush: !0
		}),
		/* @__PURE__ */ m("ul", {
			className: "card-grid-cover gap-5",
			children: g.map((e) => /* @__PURE__ */ m(x, {
				item: e,
				...i,
				searchResources: l
			}, e.id))
		}),
		Number(p.total || 0) > g.length ? /* @__PURE__ */ m("p", {
			className: "mt-6 text-center text-caption-1-regular text-text-secondary",
			children: `显示前 ${g.length.toLocaleString()} 部，共 ${Number(p.total).toLocaleString()} 部。`
		}) : null,
		/* @__PURE__ */ m(t, {
			prefill: c,
			close: () => l(null),
			receipt: e
		})
	] }) : /* @__PURE__ */ m(y, { children: /* @__PURE__ */ m(r, {
		icon: o,
		title: "没有标记中的高清版目标",
		children: "现有版本都已满足条件，或还没有加入追踪。"
	}) });
}
export { S as QualityGoalsPage };

//# debugId=e119031d-bd4c-43a2-afa8-5619e4cc34e3