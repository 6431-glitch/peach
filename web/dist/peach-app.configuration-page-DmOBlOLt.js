(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "291b0207-ad40-4fe7-a5a3-8833eac94686", e._sentryDebugIdIdentifier = "sentry-dbid-291b0207-ad40-4fe7-a5a3-8833eac94686");
	} catch {}
})();
import { AnimatedItems as e, Cell as t, ChartBackground as n, ChartContainer as r, ChartLegend as i, ChartLegendContent as a, ChartTip as o, ChartTooltip as s, ChartTooltipContent as c, Curve as l, DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME as u, DATA_ITEM_INDEX_ATTRIBUTE_NAME as d, DefaultZIndexes as f, EvilBarChart as p, LabelList as m, LabelListFromLabelProp as h, Layer as g, LoadingIndicator as _, PolarChart as v, PolarLabelContextProvider as y, PolarLabelListContextProvider as b, RegisterGraphicalItemId as x, Sector as S, SetPolarGraphicalItem as C, SetPolarLegendPayload as w, SetTooltipEntrySettings as T, Shape as ee, TIP_SWATCH as te, Text as ne, ZIndexLayer as re, adaptEventsOfChild as ie, arrayTooltipSearcher as ae, createSelector as oe, defaultPolarChartProps as se, findAllByType as ce, get as le, getClassNameFromUnknown as ue, getColorsCount as de, getMaxRadius as fe, getPercentValue as pe, getTooltipNameProp as me, getValueByDataKey as he, interpolate as ge, isNumber as _e, matchAppend as ve, mathSign as ye, polarToCartesian as be, resolveDefaultProps as xe, selectActiveTooltipDataKey as Se, selectActiveTooltipGraphicalItemId as Ce, selectActiveTooltipIndex as we, selectChartDataAndAlwaysIgnoreIndexes as Te, selectChartOffsetInternal as Ee, selectUnfilteredPolarItems as De, svgPropertiesNoEvents as Oe, svgPropertiesNoEventsFromUnknown as ke, tone as Ae, useAnimationCallbacks as je, useAppSelector as Me, useMouseClickItemDispatch as Ne, useMouseEnterItemDispatch as Pe, useMouseLeaveItemDispatch as Fe, usePolarChartLayout as Ie } from "./peach-app.chart-tip-CRxYp6KT.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as Le, $3a442827418ebe87$export$eb2fcfdbd7ba97d4 as Re, $542a13ca2fa5b484$export$5b6b19405a83ff9d as ze, $72abaeab4d80592f$export$78efe591171d7d45 as Be, $bd263d78e9bf3c56$export$f5c9f3c2c4054eec as Ve, $ea3928288112382f$export$439d29a4e110a164 as He, $f2ff30fde7b014be$export$3ddf2d174ce01153 as Ue, $fe21c36db05242bb$export$a98f0dcb43a68a25 as We, $fe21c36db05242bb$export$d7b12c4107be0d61 as Ge, ACCENTS as Ke, ApiError as qe, Button as E, ButtonLink as Je, CLOUD_LOCATIONS as Ye, CLOUD_PROXY_HELP as Xe, CONFIGURATION_KEY as Ze, CONFIGURATION_URL as Qe, CREDENTIAL_STATE as $e, Checkbox as D, Chip as et, CommandSteps as tt, Disclosure as O, ENTRY_LINKS_HELP as nt, ENTRY_LINKS_HINT as rt, EmptyState as it, ErrorText as k, Eu as at, ExternalLink as A, FEED_SCHEDULE_KEY as ot, FOLLOW_CREDENTIALS_KEY as st, FOLLOW_INITIAL_RANGE_OPTIONS as ct, FOLLOW_SCHEDULE_KEY as lt, Fact as j, FactList as ut, FieldLabel as dt, Footer as M, Help as N, HintText as ft, Input as P, L1 as pt, LIBRARY_FOLDER_HELP as mt, LIBRARY_PROCESSING_KEY as ht, Label as gt, LinkButton as _t, LoadingDots as vt, M6 as yt, MEDIA_PROCESSING_KEY as bt, MEDIA_PROCESSING_URL as xt, MEDIA_SOURCE_ICONS as St, MENU_POPOVER_SURFACE as Ct, Note as F, PICK_FOLDER_URL as wt, POLICY_COLUMNS as Tt, POLICY_COVER_NOTE as Et, POLICY_MATRIX as Dt, POLICY_SUMMARY as Ot, PathLine as kt, PillTabList as At, Progress as jt, Rows as I, SEGMENT as Mt, SEGMENTED_TRACK as Nt, SETTINGS_KEY as Pt, SETTINGS_URL as Ft, Section as L, SectionSkeleton as It, SegmentedRadioGroup as Lt, Select as Rt, Select$1 as R, SelectItem as z, SettingsCard as zt, SettingsRow as B, SiteLabel as Bt, SourceLabel as Vt, SourceMark as Ht, Stack as V, StatusLabel as H, Switch as U, THUMBNAIL_JOBS_KEY as Ut, TaskCenterLink as Wt, TextField as Gt, TextFieldContext as Kt, Uz as qt, __toESM as Jt, _p as Yt, animate as Xt, apiGet as W, apiSend as G, appSettingsStore as Zt, boundedPreference as Qt, busyProps as K, cardClass as $t, cloudProxySkeleton as en, clsx as tn, cn as nn, confirmModal as rn, credentialDone as an, credentialsSkeleton as on, cx as sn, d6 as cn, devicesSkeleton as ln, errorMessage as q, fetchConfiguration as un, fetchCredentials as dn, fetchFeedSchedule as fn, fetchFollowSchedule as pn, fetchLibraryProcessing as mn, fetchMediaProcessing as hn, fetchSettings as gn, fetchThumbnailJobs as _n, fmtSize as J, indexersSkeleton as vn, javBrowserSkeleton as yn, l1 as bn, momentText as xn, motion as Sn, overlayHost as Cn, peachHistory$1 as wn, previewLibraryColor as Tn, processingActive as En, providerIcon as Dn, queryClient as On, randomId as kn, rememberShape as An, require_jsx_runtime as jn, require_react as Mn, restartEffectText as Nn, saveCredential as Pn, schedulePollInterval as Fn, settingsPath as In, shellNavigate as Ln, sortCx as Rn, sourceDefaultCost as zn, useAction as Y, useClientUpdates as Bn, useLibraryTints as Vn, useMutation as Hn, useQuery as X, useReducedMotion as Un, useRunSchedule as Wn, useSaveFollowSchedule as Gn, useSaveSettings as Kn, useSaveThumbnailMode as qn, z3 as Jn } from "./peach-app.js";
import { CodeBlock as Yn } from "./peach-app.code-block-CyDva4Ms.js";
import { FolderField as Xn, FolderFieldLine as Zn, FolderRow as Qn, MEDIA_SOURCES as $n, MediaReadPolicy as er, MediaReadPolicyHelp as tr, SourceSelect as nr, isCloudSource as rr, sourceMark as ir, useFolderRows as ar } from "./peach-app.folder-rows-BWBfTyUD.js";
import { ConnectionStatus as or } from "./peach-app.connection-status-DI6kgn3i.js";
import { SourceIcon as sr } from "./peach-app.source-view-DalWfDkm.js";
import { BrowserIcon as cr, browserIconId as lr } from "./peach-app.browser-icon-N9Od-bAf.js";
// src/react/settings/configuration-panel.ts
var Z = /* @__PURE__ */ Jt(Mn(), 1), ur = "flex flex-col gap-6";
function dr(e) {
	return e ? {
		className: e.active ? `${ur} ui-board-group-active` : ur,
========
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0cbc915c-23a0-4243-9174-f396365068ce", e._sentryDebugIdIdentifier = "sentry-dbid-0cbc915c-23a0-4243-9174-f396365068ce");
	} catch {}
})();
import { AnimatedItems as e, Cell as t, ChartBackground as n, ChartContainer as r, ChartLegend as i, ChartLegendContent as a, ChartTip as o, ChartTooltip as s, ChartTooltipContent as c, Curve as l, DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME as u, DATA_ITEM_INDEX_ATTRIBUTE_NAME as d, DefaultZIndexes as f, EvilBarChart as p, LabelList as m, LabelListFromLabelProp as h, Layer as g, LoadingIndicator as _, PolarChart as v, PolarLabelContextProvider as y, PolarLabelListContextProvider as b, RegisterGraphicalItemId as x, Sector as S, SetPolarGraphicalItem as C, SetPolarLegendPayload as w, SetTooltipEntrySettings as T, Shape as ee, TIP_SWATCH as te, Text as ne, ZIndexLayer as re, adaptEventsOfChild as ie, arrayTooltipSearcher as ae, createSelector as oe, defaultPolarChartProps as se, findAllByType as ce, get as le, getClassNameFromUnknown as ue, getColorsCount as de, getMaxRadius as fe, getPercentValue as pe, getTooltipNameProp as me, getValueByDataKey as he, interpolate as ge, isNumber as _e, matchAppend as ve, mathSign as ye, polarToCartesian as be, resolveDefaultProps as xe, selectActiveTooltipDataKey as Se, selectActiveTooltipGraphicalItemId as Ce, selectActiveTooltipIndex as we, selectChartDataAndAlwaysIgnoreIndexes as Te, selectChartOffsetInternal as Ee, selectUnfilteredPolarItems as De, svgPropertiesNoEvents as Oe, svgPropertiesNoEventsFromUnknown as ke, tone as Ae, useAnimationCallbacks as je, useAppSelector as Me, useMouseClickItemDispatch as Ne, useMouseEnterItemDispatch as Pe, useMouseLeaveItemDispatch as Fe, usePolarChartLayout as Ie } from "./peach-app.chart-tip-CRxYp6KT.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as Le, $3a442827418ebe87$export$eb2fcfdbd7ba97d4 as Re, $542a13ca2fa5b484$export$5b6b19405a83ff9d as ze, $72abaeab4d80592f$export$78efe591171d7d45 as Be, $bd263d78e9bf3c56$export$f5c9f3c2c4054eec as Ve, $ea3928288112382f$export$439d29a4e110a164 as He, $f2ff30fde7b014be$export$3ddf2d174ce01153 as Ue, $fe21c36db05242bb$export$a98f0dcb43a68a25 as We, $fe21c36db05242bb$export$d7b12c4107be0d61 as Ge, ACCENTS as Ke, ApiError as qe, Button as E, ButtonLink as Je, CLOUD_LOCATIONS as Ye, CLOUD_PROXY_HELP as Xe, CONFIGURATION_KEY as Ze, CONFIGURATION_URL as Qe, CREDENTIAL_STATE as $e, Checkbox as D, Chip as et, Disclosure as O, ENTRY_LINKS_HELP as tt, ENTRY_LINKS_HINT as nt, EmptyState as rt, ErrorText as k, Eu as it, ExternalLink as A, FEED_SCHEDULE_KEY as at, FOLLOW_CREDENTIALS_KEY as ot, FOLLOW_INITIAL_RANGE_OPTIONS as st, FOLLOW_SCHEDULE_KEY as ct, Fact as j, FactList as lt, FieldLabel as ut, Footer as M, Help as N, HintText as dt, Input as P, L1 as ft, LIBRARY_FOLDER_HELP as pt, LIBRARY_PROCESSING_KEY as mt, Label as ht, LinkButton as gt, LoadingDots as _t, M6 as vt, MEDIA_PROCESSING_KEY as yt, MEDIA_PROCESSING_URL as bt, MEDIA_SOURCE_ICONS as xt, MENU_POPOVER_SURFACE as St, Note as F, PICK_FOLDER_URL as Ct, POLICY_COLUMNS as wt, POLICY_COVER_NOTE as Tt, POLICY_MATRIX as Et, POLICY_SUMMARY as Dt, PathLine as Ot, PillTabList as kt, Progress as At, Rows as I, SEGMENT as jt, SEGMENTED_TRACK as Mt, SETTINGS_KEY as Nt, SETTINGS_URL as Pt, Section as L, SectionSkeleton as Ft, SegmentedRadioGroup as It, Select as Lt, Select$1 as R, SelectItem as z, SettingsCard as Rt, SettingsRow as B, SiteLabel as zt, SourceLabel as Bt, SourceMark as Vt, Stack as V, StatusLabel as H, Switch as U, THUMBNAIL_JOBS_KEY as Ht, TaskCenterLink as Ut, TextField as Wt, TextFieldContext as Gt, Uz as Kt, __toESM as qt, _p as Jt, animate as Yt, apiGet as W, apiSend as G, appSettingsStore as Xt, boundedPreference as Zt, busyProps as K, cardClass as Qt, cloudProxySkeleton as $t, clsx as en, cn as tn, confirmModal as nn, credentialDone as rn, credentialsSkeleton as an, cx as on, d6 as sn, devicesSkeleton as cn, errorMessage as q, fetchConfiguration as ln, fetchCredentials as un, fetchFeedSchedule as dn, fetchFollowSchedule as fn, fetchLibraryProcessing as pn, fetchMediaProcessing as mn, fetchSettings as hn, fetchThumbnailJobs as gn, fmtSize as J, indexersSkeleton as _n, javBrowserSkeleton as vn, l1 as yn, momentText as bn, motion as xn, overlayHost as Sn, peachHistory$1 as Cn, previewLibraryColor as wn, processingActive as Tn, providerIcon as En, queryClient as Dn, randomId as On, rememberShape as kn, require_jsx_runtime as An, require_react as jn, restartEffectText as Mn, saveCredential as Nn, schedulePollInterval as Pn, settingsPath as Fn, shellNavigate as In, sortCx as Ln, sourceDefaultCost as Rn, useAction as Y, useClientUpdates as zn, useLibraryTints as Bn, useMutation as Vn, useQuery as X, useQueryClient as Hn, useReducedMotion as Un, useRunSchedule as Wn, useSaveFollowSchedule as Gn, useSaveSettings as Kn, useSaveThumbnailMode as qn, we as Jn, z3 as Yn } from "./peach-app.js";
import { CodeBlock as Xn } from "./peach-app.code-block-CyDva4Ms.js";
import { FolderField as Zn, FolderFieldLine as Qn, FolderRow as $n, MEDIA_SOURCES as er, MediaReadPolicy as tr, MediaReadPolicyHelp as nr, SourceSelect as rr, isCloudSource as ir, sourceMark as ar, useFolderRows as or } from "./peach-app.folder-rows-BWBfTyUD.js";
import { ConnectionStatus as sr } from "./peach-app.connection-status-DI6kgn3i.js";
import { SourceIcon as cr } from "./peach-app.source-view-DalWfDkm.js";
import { BrowserIcon as lr, browserIconId as ur } from "./peach-app.browser-icon-N9Od-bAf.js";
// src/react/settings/configuration-panel.ts
var Z = /* @__PURE__ */ qt(jn(), 1), dr = "flex flex-col gap-6";
function fr(e) {
	return e ? {
		className: e.active ? `${dr} ui-board-group-active` : dr,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		"data-board-group": String(e.index),
		id: e.id,
		role: "tabpanel",
		"aria-labelledby": e.labelledBy
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	} : { className: ur };
}
// src/react/settings/userscript-probe.ts
function fr() {
========
	} : { className: dr };
}
// src/react/settings/userscript-probe.ts
function pr() {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let e = (0, Z.useRef)(null), [t, n] = (0, Z.useState)(0), [r, i] = (0, Z.useState)("checking");
	return (0, Z.useEffect)(() => {
		let t = kn(), n = !1, r = e.current, a, o = () => {
			n = !0, clearInterval(u), i("missing");
		}, s = () => {
			n || (clearTimeout(a), a = setTimeout(o, 3e3), c());
		}, c = () => e.current?.contentWindow?.postMessage({
			type: "peach-userscript:probe",
			nonce: t
		}, window.location.origin), l = (r) => {
			!n && r.source === e.current?.contentWindow && r.origin === window.location.origin && r.data?.type === "peach-userscript:ready" && r.data.nonce === t && r.data.protocol === 1 && typeof r.data.version == "string" && /^\d{1,5}\.\d{1,5}\.\d{1,5}$/.test(r.data.version) && typeof r.data.paired == "boolean" && (n = !0, clearInterval(u), clearTimeout(a), i({
				version: r.data.version,
				paired: r.data.paired
			}));
		};
		window.addEventListener("message", l);
		let u = setInterval(c, 250);
		return a = setTimeout(o, 15e3), r?.addEventListener("load", s), r?.contentDocument?.readyState === "complete" && r.contentDocument.URL !== "about:blank" && s(), c(), () => {
			clearInterval(u), clearTimeout(a), r?.removeEventListener("load", s), window.removeEventListener("message", l);
		};
	}, [t]), {
		frame: e,
		attempt: t,
		status: r,
		retry: () => {
			r !== "checking" && (i("checking"), n((e) => e + 1));
		}
	};
}
// src/react/settings/userscript-status.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Q = jn();
function pr(e, t) {
========
var Q = An();
function mr(e, t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let n = e.split(".").map(Number), r = t.split(".").map(Number);
	for (let e = 0; e < 3; e++) if (n[e] !== r[e]) return n[e] > r[e];
	return !0;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function mr({ enabled: e, release: t }) {
	let { frame: n, attempt: r, status: i, retry: a } = fr(), o = typeof i == "object", s = o && !pr(i.version, t.minimum_version), c = o && !pr(i.version, t.version), l = i === "checking" ? "progress" : i === "missing" ? "neutral" : s || c || !i.paired ? "warning" : "success", u = i === "checking" ? "检测中" : i === "missing" ? "未检测到" : s ? "需更新" : c ? "可更新" : i.paired ? "已连接" : "待配对", d = i === "checking" ? "checking" : i === "missing" ? "missing" : s ? "required" : c ? "available" : i.paired ? e ? "enabled" : "disabled" : "unpaired";
========
function hr({ enabled: e, release: t }) {
	let { frame: n, attempt: r, status: i, retry: a } = pr(), o = typeof i == "object", s = o && !mr(i.version, t.minimum_version), c = o && !mr(i.version, t.version), l = i === "checking" ? "progress" : i === "missing" ? "neutral" : s || c || !i.paired ? "warning" : "success", u = i === "checking" ? "检测中" : i === "missing" ? "未检测到" : s ? "需更新" : c ? "可更新" : i.paired ? "已连接" : "待配对", d = i === "checking" ? "checking" : i === "missing" ? "missing" : s ? "required" : c ? "available" : i.paired ? e ? "enabled" : "disabled" : "unpaired";
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("iframe", {
		ref: n,
		title: "Peach 用户脚本检测",
		hidden: !0,
		src: "/integrations/peach-userscript-bridge"
	}, r), /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		"data-userscript-status": "",
		className: $t({
			variant: "raised",
			bordered: "line",
			className: "flex flex-col gap-3"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: "Peach 用户脚本"
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				}), /* @__PURE__ */ (0, Q.jsx)(or, {
========
				}), /* @__PURE__ */ (0, Q.jsx)(sr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					tone: l,
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						"data-copy-key": `userscript.${d}.status`,
						children: u
					})
				})]
			}),
			o ? /* @__PURE__ */ (0, Q.jsxs)("p", {
				"data-copy-key": "userscript.installed.version",
				className: "text-body-regular text-text-secondary",
				children: ["用户脚本 v", i.version]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: "浏览器添加"
				}), /* @__PURE__ */ (0, Q.jsx)(H, {
					tone: e ? "success" : "neutral",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						"data-copy-key": `userscript.adding.${e ? "enabled" : "disabled"}`,
						children: e ? "已启用" : "未启用"
					})
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				"data-copy-key": `userscript.${d}.message`,
				className: "text-caption-1-regular text-text-secondary",
				children: i === "checking" ? "正在检测当前浏览器的用户脚本。" : i === "missing" ? "确认脚本已启用并更新至最新版。Chrome 还需在 Tampermonkey 扩展详情中开启「允许用户脚本」或开发者模式，并允许访问当前 Peach 站点；刷新页面后重新检测。" : s ? `请更新至 v${t.minimum_version} 或更高版本。` : c ? `用户脚本 v${t.version} 可更新。` : i.paired ? e ? "可在支持的站点直接加入 Peach 馆藏。" : "启用浏览器添加后，可在支持的站点直接加入 Peach 馆藏。" : "生成令牌后复制配对信息，在用户脚本设置中粘贴并保存。"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					i === "missing" || s || c ? /* @__PURE__ */ (0, Q.jsx)(A, {
						href: t.install_url,
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-copy-key": `userscript.${i === "missing" ? "install" : "update"}.action`,
							children: s || c ? "更新用户脚本" : "安装 Peach 用户脚本"
						})
					}) : null,
					i === "missing" ? /* @__PURE__ */ (0, Q.jsx)(A, {
						href: "https://www.tampermonkey.net/faq.php#Q209",
						children: "Tampermonkey 权限设置说明"
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						type: "button",
						...K(i === "checking"),
						onClick: a,
						children: "重新检测"
					})
				]
			})
		]
	})] });
}
// src/react/settings/jav-browser-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var hr = "/api/configuration/jav-browser";
function gr({ receipt: e, refreshKey: t }) {
	let n = X({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => W(hr, e),
========
var gr = "/api/configuration/jav-browser";
function _r({ receipt: e, refreshKey: t }) {
	let n = X({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => W(gr, e),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		refetchOnMount: "always",
		refetchOnWindowFocus: "always"
	});
	return n.error && !n.data ? /* @__PURE__ */ (0, Q.jsx)(k, { children: q(n.error) }) : n.isFetching && !n.data ? /* @__PURE__ */ (0, Q.jsx)(It, {
		label: "正在读取浏览器添加设置",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		html: yn
	}) : n.data ? /* @__PURE__ */ (0, Q.jsx)(_r, {
========
		html: vn
	}) : n.data ? /* @__PURE__ */ (0, Q.jsx)(vr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		initial: n.data,
		receipt: e
	}) : null;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function _r({ initial: e, receipt: t }) {
========
function vr({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.provider), [o, s] = (0, Z.useState)(""), c = Y();
	(0, Z.useEffect)(() => {
		An("javBrowser", {
			enabled: e.enabled,
			ready: e.providers.some((t) => t.key === e.provider && t.configured && t.target)
		}), r(e), a((t) => e.providers.some((e) => e.key === t) ? t : e.provider), e.enabled || s("");
	}, [e]);
	let l = (e) => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		c.run(e, (t) => G(hr, {
========
		c.run(e, (t) => G(gr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			action: e,
			provider: i
		}, "POST", t), (n) => {
			let { token: i = "", ...o } = n;
			r(o), a(o.provider), s(i), t(e === "disable" ? "已关闭浏览器添加" : "已生成专用令牌");
		});
	}, u = n.providers.some((e) => e.key === i && e.configured && e.target);
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "browser",
		title: "浏览器添加 JAV",
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				/* @__PURE__ */ (0, Q.jsx)(mr, {
========
				/* @__PURE__ */ (0, Q.jsx)(hr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					enabled: n.enabled,
					release: n.userscript
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(dt, { children: "浏览器添加的下载渠道" }), /* @__PURE__ */ (0, Q.jsx)(R, {
						"aria-label": "浏览器添加的下载渠道",
						selectedKey: i || null,
						placeholder: "暂无可用渠道",
						onSelectionChange: (e) => {
							e !== null && a(String(e));
						},
						isDisabled: !n.providers.length || !!c.busy,
						children: n.providers.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
							id: e.key,
							textValue: e.label,
							children: /* @__PURE__ */ (0, Q.jsx)(Vt, {
								source: e.key,
								label: e.label
							})
						}, e.key))
					})]
				}),
				u ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: "请在媒体库中添加支持云下载的网盘，并配置账号与目标目录。" }),
				n.problems?.map((e) => /* @__PURE__ */ (0, Q.jsx)(N, { children: e }, e)),
				n.enabled && n.active_provider && !n.providers.some((e) => e.key === n.active_provider) ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "已启用的下载渠道不可用，请选择渠道并更新令牌。" }) : null,
				/* @__PURE__ */ (0, Q.jsx)(P, {
					label: "Peach 地址",
					value: window.location.origin,
					isReadOnly: !0,
					autoComplete: "off"
				}),
				o ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					/* @__PURE__ */ (0, Q.jsx)(P, {
						label: "浏览器添加专用令牌",
						type: "password",
						value: o,
						isReadOnly: !0,
						autoComplete: "new-password"
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						type: "button",
						onClick: () => {
							c.run("copy", async () => navigator.clipboard.writeText(JSON.stringify({
								peach_pairing: 1,
								base: window.location.origin,
								token: o
							})), () => t("已复制配对信息"));
						},
						...K(c.busy === "copy"),
						children: "复制配对信息"
					}) }),
					/* @__PURE__ */ (0, Q.jsx)(N, { children: "在用户脚本设置的「Peach 地址」中粘贴配对信息，即可填好地址与令牌。" })
				] }) : null
			]
		}), c.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: c.error }) : null] }), /* @__PURE__ */ (0, Q.jsxs)(M, { children: [n.enabled ? /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			type: "button",
			disabled: !!c.busy,
			onClick: () => l("disable"),
			children: "关闭浏览器添加"
		}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "button",
			disabled: !n.available || !u || !!c.busy,
			onClick: () => l(n.enabled ? "rotate" : "enable"),
			...K(c.busy === "enable" || c.busy === "rotate"),
			children: n.enabled ? "更新渠道与令牌" : "启用并生成令牌"
		})] })]
	});
}
// src/react/settings/download-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var vr = "/api/configuration/downloads", yr = "/api/configuration/downloads/check", br = "/api/configuration/downloads/folder", xr = "/api/configuration/downloads/pikpak/login", Sr = "/api/configuration/downloads/pikpak/logout", Cr = "/api/configuration/downloads/pikpak/browser-login", wr = 2e3, Tr = Dn("pikpak");
function Er({ initial: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...dr(n),
		children: [r, e ? /* @__PURE__ */ (0, Q.jsx)(Dr, {
========
var yr = "/api/configuration/downloads", br = "/api/configuration/downloads/check", xr = "/api/configuration/downloads/folder", Sr = "/api/configuration/downloads/pikpak/login", Cr = "/api/configuration/downloads/pikpak/logout", wr = "/api/configuration/downloads/pikpak/browser-login", Tr = 2e3, Er = En("pikpak");
function Dr({ initial: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...fr(n),
		children: [r, e ? /* @__PURE__ */ (0, Q.jsx)(Or, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			initial: e,
			receipt: t
		}) : null]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Dr({ initial: e, receipt: t }) {
========
function Or({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		r((t) => ({
			...t,
			media_sources: e.media_sources,
			pikpak_roots: e.pikpak_roots
		}));
	}, [e.media_sources, e.pikpak_roots]);
	let o = n.media_sources ?? [], s = o.includes("pikpak"), c = o.some((e) => Ye.includes(e)), l = s && (n.pikpak.logged_in || !!i.trim());
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		c ? /* @__PURE__ */ (0, Q.jsx)(Or, {
========
		c ? /* @__PURE__ */ (0, Q.jsx)(kr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			state: n,
			settle: r,
			receipt: t,
			pikpakAccount: l
		}) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		s ? /* @__PURE__ */ (0, Q.jsx)(jr, {
========
		s ? /* @__PURE__ */ (0, Q.jsx)(Mr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			state: n,
			settle: r,
			receipt: t,
			username: i,
			setUsername: a
		}) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		/* @__PURE__ */ (0, Q.jsx)(gr, {
========
		/* @__PURE__ */ (0, Q.jsx)(_r, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			receipt: t,
			refreshKey: JSON.stringify([
				n.media_sources,
				n.config,
				n.token_set,
				n.pikpak.logged_in
			])
		})
	] });
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Or({ state: e, settle: t, receipt: n, pikpakAccount: r }) {
	let [i, a] = (0, Z.useState)(e.config), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(String(e.config.wait_hours)), [u, d] = (0, Z.useState)(null), [f, p] = (0, Z.useState)(""), [m, h] = (0, Z.useState)(kr), [g, _] = (0, Z.useState)(""), [v, y] = (0, Z.useState)(!1), b = Y(), x = e.media_sources ?? [], S = x.includes("115"), C = x.includes("pikpak"), w = (e) => i.targets[e] ?? "", T = (e, t) => a({
========
function kr({ state: e, settle: t, receipt: n, pikpakAccount: r }) {
	let [i, a] = (0, Z.useState)(e.config), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(String(e.config.wait_hours)), [u, d] = (0, Z.useState)(null), [f, p] = (0, Z.useState)(""), [m, h] = (0, Z.useState)(Ar), [g, _] = (0, Z.useState)(""), [v, y] = (0, Z.useState)(!1), b = Y(), x = e.media_sources ?? [], S = x.includes("115"), C = x.includes("pikpak"), w = (e) => i.targets[e] ?? "", T = (e, t) => a({
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		...i,
		targets: {
			...i.targets,
			[e]: t
		}
	}), ee = S && !(!m.target || m.target.exists || w("115") !== m.target.path), te = (e, t, n = "") => {
		let r = t.target ? e.suggested_target : null, i = !!(r && n && r.path === n), o = t.root ? e.suggested_pikpak_root : "";
		a((n) => ({
			...n,
			clouddrive_address: t.address && e.address ? e.address : n.clouddrive_address,
			targets: r && !i ? {
				...n.targets,
				115: r.path
			} : n.targets,
			pikpak_root: o || n.pikpak_root
		})), d(e), p(t.address ? e.address : ""), h({
			target: r,
			root: o,
			saved: i
		}), y(!1), _("");
	};
	return (0, Z.useEffect)(() => {
		if (!e.available || !e.config.clouddrive_address || !e.token_set) return;
		let t = {
			address: !1,
			target: !e.config.targets[115],
			root: !e.config.pikpak_root
		};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		b.run("auto", (e) => W(yr, e), (e) => te(e, t), (e) => _(q(e)));
========
		b.run("auto", (e) => W(br, e), (e) => te(e, t), (e) => _(q(e)));
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	}, []), /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "download",
		title: "云下载",
		onSubmit: (e) => {
			if (e.preventDefault(), ee) {
				y(!0);
				return;
			}
			let u = !w("115").trim(), f = {
				...i,
				wait_hours: c,
				token: o,
				pikpak_account: r
			};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			b.run("save", (e) => G(vr, f, "POST", e), (e) => {
========
			b.run("save", (e) => G(yr, f, "POST", e), (e) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				let { report: r, ...i } = e;
				t(i), a(i.config), l(String(i.config.wait_hours)), s(""), r ? te(r, {
					address: !i.config.clouddrive_address,
					target: u,
					root: !i.config.pikpak_root
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				}, i.config.targets[115] ?? "") : (d(null), p(""), h(kr), y(!1), _("")), n("已保存配置");
========
				}, i.config.targets[115] ?? "") : (d(null), p(""), h(Ar), y(!1), _("")), n("已保存配置");
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			}, (e) => _(q(e)));
		},
		children: [
			e.problems?.length ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "云下载配置需要检查",
				children: e.problems.join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
				/* @__PURE__ */ (0, Q.jsx)(P, {
					label: "CloudDrive2 地址",
					placeholder: "留空自动查找",
					autoComplete: "off",
					maxLength: 200,
					value: i.clouddrive_address,
					isDisabled: !e.available,
					onChange: (e) => a({
						...i,
						clouddrive_address: e
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(P, {
					label: "CloudDrive2 API 令牌",
					type: "password",
					autoComplete: "off",
					maxLength: 400,
					placeholder: e.token_set ? "已保存，留空不改" : "在 CloudDrive2「设置 → API 令牌」中生成",
					hint: "需要离线任务权限。",
					value: o,
					isDisabled: !e.available,
					onChange: s
				}),
				S ? /* @__PURE__ */ (0, Q.jsx)(P, {
					label: /* @__PURE__ */ (0, Q.jsx)(Vt, {
						source: "115",
						label: "115 目标目录"
					}),
					placeholder: "留空时根据媒体库目录自动填写",
					autoComplete: "off",
					maxLength: 300,
					validationBehavior: "aria",
					isInvalid: ee,
					hint: ee ? v ? "先新建这个目录，或填写已有目录。" : "这个目录不存在。" : "应位于自动入库的云端路径前缀内。",
					value: w("115"),
					isDisabled: !e.available,
					onChange: (e) => T("115", e)
				}) : null,
				C ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(P, {
					label: /* @__PURE__ */ (0, Q.jsx)(Vt, {
						source: "pikpak",
						label: "PikPak 目标目录"
					}),
					placeholder: "以 / 开头的网盘路径",
					autoComplete: "off",
					maxLength: 300,
					hint: "目录要已经存在。",
					value: w("pikpak"),
					isDisabled: !e.available,
					onChange: (e) => T("pikpak", e)
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(dt, { children: /* @__PURE__ */ (0, Q.jsx)(Vt, {
						source: "pikpak",
						label: "PikPak 根目录对应的媒体目录"
					}) }), e.pikpak_roots.length ? /* @__PURE__ */ (0, Q.jsx)(R, {
						"aria-label": "PikPak 根目录对应的媒体目录",
						selectedKey: i.pikpak_root || null,
						isDisabled: !e.available,
						placeholder: "检查时根据媒体库目录选择",
						onSelectionChange: (e) => a({
							...i,
							pikpak_root: e === null ? "" : String(e)
						}),
						children: e.pikpak_roots.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
							id: e,
							children: e
						}, e))
					}) : /* @__PURE__ */ (0, Q.jsx)(N, { children: "先在「媒体库与入库」添加 PikPak 挂载文件夹。" })]
				})] }) : null,
				/* @__PURE__ */ (0, Q.jsx)(P, {
					label: "等待上限（小时）",
					type: "number",
					inputMode: "numeric",
					autoComplete: "off",
					hint: `超时标为停滞；可填 1–${e.max_wait_hours} 小时。`,
					value: c,
					isDisabled: !e.available,
					onChange: l
				})
			] }),
			b.busy === "auto" ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(vt, { label: "正在检查 CloudDrive2" })
			}) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			u ? /* @__PURE__ */ (0, Q.jsx)(Ar, {
========
			u ? /* @__PURE__ */ (0, Q.jsx)(jr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				report: u,
				detected: f,
				suggested: m,
				create: e.available ? (e) => {
					let t = {
						clouddrive_address: i.clouddrive_address,
						token: o,
						path: e,
						pikpak_root: i.pikpak_root,
						pikpak_account: r
					};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					b.run("folder", (e) => G(br, t, "POST", e), (t) => {
========
					b.run("folder", (e) => G(xr, t, "POST", e), (t) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						d(t), h((t) => ({
							...t,
							target: {
								path: e,
								exists: !0
							}
						})), y(!1), _(""), n("已新建目录");
					}, (e) => _(q(e)));
				} : void 0,
				creating: b.busy === "folder"
			}) : null,
			g || b.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: g || b.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(M, {
				status: e.available ? void 0 : "云下载只在允许修改数据库的设备上可用。",
				children: [/* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: () => {
						let e = {
							address: !i.clouddrive_address.trim(),
							target: !w("115").trim(),
							root: !i.pikpak_root
						}, t = {
							clouddrive_address: i.clouddrive_address,
							token: o,
							target: w("115"),
							pikpak_root: i.pikpak_root,
							pikpak_account: r
						};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
						b.run("check", (e) => G(yr, t, "POST", e), (t) => te(t, e), (e) => _(q(e)));
========
						b.run("check", (e) => G(br, t, "POST", e), (t) => te(t, e), (e) => _(q(e)));
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					},
					disabled: !e.available,
					...K(b.busy === "check"),
					children: "检查连接"
				}), /* @__PURE__ */ (0, Q.jsx)(E, {
					type: "submit",
					disabled: !e.available,
					...K(b.busy === "save"),
					children: "保存配置"
				})]
			})
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var kr = {
========
var Ar = {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	target: null,
	root: "",
	saved: !1
};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ar({ report: e, detected: t, suggested: n, create: r, creating: i }) {
========
function jr({ report: e, detected: t, suggested: n, create: r, creating: i }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let a = n.target, o = !!(t || a || n.root || e.permissions.length || e.folder || e.quota);
	return !o && !e.problems.length ? null : /* @__PURE__ */ (0, Q.jsxs)(V, {
		divided: !0,
		children: [o ? /* @__PURE__ */ (0, Q.jsxs)(ut, { children: [
			t ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "CloudDrive2 地址",
				children: `探测到 ${t}，保存配置后生效`
			}) : null,
			a?.exists ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Vt, {
					source: "115",
					label: "115 目标目录"
				}),
				children: n.saved ? `已根据媒体库目录填入 ${a.path}` : `根据媒体库目录填入 ${a.path}，保存配置后生效`
			}) : null,
			a && !a.exists ? /* @__PURE__ */ (0, Q.jsxs)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Vt, {
					source: "115",
					label: "115 目标目录"
				}),
				children: [`${a.path} 不存在`, r ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					size: "small",
					onClick: () => r(a.path),
					...K(i),
					children: "新建这个目录"
				}) : null]
			}) : null,
			n.root ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Vt, {
					source: "pikpak",
					label: "PikPak 根目录"
				}),
				children: `根据媒体库目录填入 ${n.root}，保存配置后生效`
			}) : null,
			e.permissions.length ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "离线权限",
				children: e.missing.length ? e.missing.map((e) => /* @__PURE__ */ (0, Q.jsx)(et, {
					variant: "caption",
					color: "yellow",
					children: `缺 ${e}`
				}, e)) : /* @__PURE__ */ (0, Q.jsx)(et, {
					variant: "caption",
					color: "lime",
					children: "齐全"
				})
			}) : null,
			e.folder ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "目标目录",
				children: e.folder.can_offline ? `${e.folder.path} 可以离线下载` : `${e.folder.path} 不支持离线下载`
			}) : null,
			e.quota ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Vt, {
					source: "115",
					label: "115 离线配额"
				}),
				children: `本月还剩 ${e.quota.left} 条，共 ${e.quota.total} 条`
			}) : null
		] }) : null, e.problems.map((e) => /* @__PURE__ */ (0, Q.jsx)(k, { children: e }, e))]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function jr({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
========
function Mr({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(!1), [l, u] = (0, Z.useState)(""), [d, f] = (0, Z.useState)(""), [p, m] = (0, Z.useState)(""), h = Y(), g = e.pikpak, _ = e.pikpak_browser, v = _.state === "waiting";
	(0, Z.useEffect)(() => {
		if (!v) return;
		let e = new AbortController(), r, i = async () => {
			try {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				let r = await W(Cr, e.signal);
========
				let r = await W(wr, e.signal);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				if (e.signal.aborted || (t(r), r.pikpak_browser.state === "done" ? n("已登录 PikPak") : r.pikpak_browser.state !== "waiting" && m(r.pikpak_browser.message), r.pikpak_browser.state !== "waiting")) return;
			} catch (t) {
				if (e.signal.aborted) return;
				f(q(t));
			}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			r = setTimeout(i, wr);
		};
		return r = setTimeout(i, wr), () => {
========
			r = setTimeout(i, Tr);
		};
		return r = setTimeout(i, Tr), () => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			e.abort(), clearTimeout(r);
		};
	}, [v]);
	let y = () => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		m(""), h.run("browser", (e) => G(Cr, {}, "POST", e), (e) => {
			t(e), f("");
		}, (e) => f(q(e)));
	}, b = () => {
		h.run("cancel", (e) => G(`${Cr}/cancel`, {}, "POST", e), (e) => {
========
		m(""), h.run("browser", (e) => G(wr, {}, "POST", e), (e) => {
			t(e), f("");
		}, (e) => f(q(e)));
	}, b = () => {
		h.run("cancel", (e) => G(`${wr}/cancel`, {}, "POST", e), (e) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			t(e), f(""), m(e.pikpak_browser.message);
		}, (e) => f(q(e)));
	}, x = (e) => {
		if (e.preventDefault(), g.logged_in) return;
		let i = {
			username: r,
			password: a,
			remember: s
		};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		h.run("login", (e) => G(xr, i, "POST", e), (e) => {
			t(e.settings), f(""), e.ok ? (u(""), o(""), n("已登录 PikPak")) : u(e.captcha_url ?? "");
		}, (e) => f(q(e)));
	}, S = () => {
		h.run("logout", (e) => G(Sr, {}, "POST", e), (e) => {
========
		h.run("login", (e) => G(Sr, i, "POST", e), (e) => {
			t(e.settings), f(""), e.ok ? (u(""), o(""), n("已登录 PikPak")) : u(e.captcha_url ?? "");
		}, (e) => f(q(e)));
	}, S = () => {
		h.run("logout", (e) => G(Cr, {}, "POST", e), (e) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			t(e), f(""), n("已登出 PikPak");
		}, (e) => f(q(e)));
	}, C = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(P, {
			label: "账号",
			placeholder: "邮箱或手机号",
			autoComplete: "username",
			maxLength: 200,
			value: r,
			isDisabled: !e.available,
			onChange: i
		}),
		/* @__PURE__ */ (0, Q.jsx)(P, {
			label: "密码",
			type: "password",
			autoComplete: "current-password",
			maxLength: 200,
			value: a,
			isDisabled: !e.available,
			onChange: o
		}),
		/* @__PURE__ */ (0, Q.jsx)(D, {
			isSelected: s,
			isDisabled: !e.available,
			onChange: c,
			children: "保存密码，登录过期时自动重新登录"
		}),
		l ? /* @__PURE__ */ (0, Q.jsx)(F, {
			tone: "warning",
			title: "需要人机验证",
			extra: /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, Q.jsx)(A, {
					href: l,
					children: "打开 PikPak 验证页"
				})
			}),
			children: "在浏览器里完成验证后，回到这里再点一次「登录」。"
		}) : null
	] }), w = /* @__PURE__ */ (0, Q.jsx)(E, {
		type: "submit",
		variant: "primary",
		disabled: !e.available || v,
		...K(h.busy === "login"),
		children: "登录"
	}), T = _.state === "timeout" || _.state === "failed";
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "pikpak",
		title: "PikPak 账号",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		icon: /* @__PURE__ */ (0, Q.jsx)(Tr, {}),
========
		icon: /* @__PURE__ */ (0, Q.jsx)(Er, {}),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		onSubmit: x,
		aside: /* @__PURE__ */ (0, Q.jsx)(H, {
			tone: g.logged_in ? "success" : v ? "progress" : T ? "error" : "neutral",
			children: g.logged_in ? "已登录" : v ? "等待登录" : T ? "登录未完成" : "待登录"
		}),
		children: [
			g.logged_in ? /* @__PURE__ */ (0, Q.jsxs)(ut, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
				term: "账号",
				children: g.username || "已登录"
			}), g.method === "browser" ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "登录方式",
				children: "浏览器登录，由 Peach 续期"
			}) : /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "密码",
				children: g.remember ? "已保存，登录过期时自动重新登录" : "未保存，登录过期后需要回到这里重新登录"
			})] }) : /* @__PURE__ */ (0, Q.jsxs)(V, { children: [p ? T ? /* @__PURE__ */ (0, Q.jsx)(k, { children: p }) : /* @__PURE__ */ (0, Q.jsx)(N, {
				role: "status",
				children: p
			}) : null, C] }),
			d || h.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: d || h.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, {
				status: !g.logged_in && v ? /* @__PURE__ */ (0, Q.jsx)(vt, { label: _.message || "等你在浏览器窗口里登录 PikPak" }) : null,
				children: g.logged_in ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: S,
					disabled: !e.available,
					...K(h.busy === "logout"),
					children: "登出"
				}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [_.available ? v ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					type: "button",
					onClick: b,
					...K(h.busy === "cancel"),
					children: "取消"
				}) : /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					type: "button",
					onClick: y,
					disabled: !e.available,
					...K(h.busy === "browser"),
					children: "用浏览器登录"
				}) : null, w] })
			})
		]
	});
}
// src/react/settings/ledger-backup-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Mr = "/api/configuration/ledger-backups", Nr = 1500, Pr = (e) => (/* @__PURE__ */ new Date(e.modified_at * 1e3)).toLocaleString();
function Fr(e) {
	return [e.source === "manual" ? "手动" : `自动 · ${e.purpose}`, J(e.bytes)].join(" · ");
}
function Ir({ job: e, label: t }) {
========
var Nr = "/api/configuration/ledger-backups", Pr = 1500, Fr = (e) => (/* @__PURE__ */ new Date(e.modified_at * 1e3)).toLocaleString();
function Ir(e) {
	return [e.source === "manual" ? "手动" : `自动 · ${e.purpose}`, J(e.bytes)].join(" · ");
}
function Lr({ job: e, label: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [
			e.total ? /* @__PURE__ */ (0, Q.jsx)(jt, {
				label: t,
				value: e.done || 0,
				max: e.total
			}) : /* @__PURE__ */ (0, Q.jsx)(vt, { label: t }),
			/* @__PURE__ */ (0, Q.jsx)(N, { children: e.stage || t }),
			/* @__PURE__ */ (0, Q.jsx)(Wt, {})
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Lr({ receipt: e }) {
========
function Rr({ receipt: e }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(""), a = Y(), o = t?.backup.status === "running", s = t?.restore.status === "running", c = o || s, l = (0, Z.useRef)({
		backup: !1,
		restore: !1
	});
	if ((0, Z.useEffect)(() => {
		let e = new AbortController();
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		return W(Mr, e.signal).then(n, (t) => {
========
		return W(Nr, e.signal).then(n, (t) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			e.signal.aborted || i(String(t?.message || t));
		}), () => e.abort();
	}, []), (0, Z.useEffect)(() => {
		if (!c) return;
		let e = new AbortController(), t = setTimeout(() => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			W(Mr, e.signal).then(n, () => {
				e.signal.aborted || n((e) => e && { ...e });
			});
		}, Nr);
========
			W(Nr, e.signal).then(n, () => {
				e.signal.aborted || n((e) => e && { ...e });
			});
		}, Pr);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		return () => {
			e.abort(), clearTimeout(t);
		};
	}, [t]), (0, Z.useEffect)(() => {
		if (t) for (let n of ["backup", "restore"]) {
			let r = t[n];
			r.status === "running" ? l.current[n] = !0 : l.current[n] && (l.current[n] = !1, r.status === "complete" && e(n === "backup" ? `已备份账本：${r.name}` : `已从备份恢复账本，恢复前的账本另存为 ${r.saved}。刷新页面查看恢复后的资料`));
		}
	}, [t]), !t) return /* @__PURE__ */ (0, Q.jsx)(L, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: "账本备份",
		children: /* @__PURE__ */ (0, Q.jsx)(V, { children: r ? /* @__PURE__ */ (0, Q.jsx)(k, { children: r }) : /* @__PURE__ */ (0, Q.jsx)(vt, { label: "正在读取备份列表" }) })
	});
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	let u = () => void a.run("backup", (e) => G(`${Mr}/backup`, {}, "POST", e), n), d = (e) => void rn({
		title: "从备份恢复账本",
		danger: !0,
		body: `将用 ${Pr(e)} 的备份（${Fr(e)}）替换当前账本，此后的资料、观看记录与复核结论回到备份时的状态。替换前先把当前账本另存为一份备份；恢复期间不能启动新任务。`,
		confirmLabel: "替换当前账本",
		onConfirm: async () => {
			l.current.restore = !0, n(await G(`${Mr}/restore`, {
========
	let u = () => void a.run("backup", (e) => G(`${Nr}/backup`, {}, "POST", e), n), d = (e) => void nn({
		title: "从备份恢复账本",
		danger: !0,
		body: `将用 ${Fr(e)} 的备份（${Ir(e)}）替换当前账本，此后的资料、观看记录与复核结论回到备份时的状态。替换前先把当前账本另存为一份备份；恢复期间不能启动新任务。`,
		confirmLabel: "替换当前账本",
		onConfirm: async () => {
			l.current.restore = !0, n(await G(`${Nr}/restore`, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				id: e.id,
				confirm: !0
			}));
		}
	}), f = [t.backup, t.restore].find((e) => e.status === "failed"), p = t.last_restore, m = o ? "正在备份…" : s ? "正在恢复…" : t.backups.length ? `共 ${t.backups.length} 份可恢复的备份` : "还没有备份";
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "ledgerBackups",
		guide: "ledger-backups",
		title: "账本备份",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
				/* @__PURE__ */ (0, Q.jsx)(N, { children: "账本保存全部资料、观看记录与复核结论。手动备份与写入前的自动备份放在一起，保留最近 5 份和 24 小时内的备份。" }),
				t.writer ? null : /* @__PURE__ */ (0, Q.jsxs)(N, { children: ["这台电脑不是账本写入端，只能在写入端恢复：", t.writer_reason] }),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				o ? /* @__PURE__ */ (0, Q.jsx)(Ir, {
					job: t.backup,
					label: "备份进度"
				}) : null,
				s ? /* @__PURE__ */ (0, Q.jsx)(Ir, {
========
				o ? /* @__PURE__ */ (0, Q.jsx)(Lr, {
					job: t.backup,
					label: "备份进度"
				}) : null,
				s ? /* @__PURE__ */ (0, Q.jsx)(Lr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					job: t.restore,
					label: "恢复进度"
				}) : null,
				f ? /* @__PURE__ */ (0, Q.jsx)(k, { children: f.error || "任务没有完成" }) : null,
				p ? p.outcome === "kept" || p.outcome === "completed" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: p.message }) : /* @__PURE__ */ (0, Q.jsx)(k, { children: p.message }) : null,
				a.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: a.error }) : null
			] }),
			t.backups.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "border-t border-separator-border",
				"data-ledger-backups": "",
				children: /* @__PURE__ */ (0, Q.jsx)(I, { children: t.backups.map((e) => /* @__PURE__ */ (0, Q.jsx)(B, {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					label: Pr(e),
					description: Fr(e),
========
					label: Fr(e),
					description: Ir(e),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					children: /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: !t.writer || c,
						onClick: () => d(e),
						children: "恢复"
					})
				}, e.id)) })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, {
				status: /* @__PURE__ */ (0, Q.jsx)("p", { children: m }),
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					disabled: c,
					onClick: u,
					...K(a.busy === "backup" || o),
					children: "立即备份"
				})
			})
		]
	});
}
// src/react/settings/library-sharing-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Rr({ initial: e, receipt: t }) {
========
function zr({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(null), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(!1), u = (0, Z.useMemo)(() => i ? JSON.stringify(i.data, null, 2) : "", [i]), d = Y(), f = (e) => void d.run("save", (t) => G("/api/configuration/library-sharing", {
		enabled: e,
		schema: n.schema,
		consent: c,
		preview_token: i?.token
	}, "POST", t), (e) => {
		r(e), a(null), l(!1), s(!1), t("已保存馆藏与口味上传选项");
	}), p = () => {
		let e = URL.createObjectURL(new Blob([u], { type: "application/json" })), t = document.createElement("a");
		t.href = e, t.download = "peach-library-taste-preview.json", document.body.append(t);
		try {
			t.click();
		} finally {
			t.remove(), setTimeout(() => URL.revokeObjectURL(e), 1e3);
		}
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
			label: "上传馆藏与口味明细",
			description: n.notice,
			children: /* @__PURE__ */ (0, Q.jsx)(U, {
				"aria-label": "上传馆藏与口味明细",
				isSelected: n.enabled,
				onChange: (e) => e ? s(!0) : f(!1),
				...K(d.busy === "save")
			})
		}) }),
		n.available ? null : /* @__PURE__ */ (0, Q.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(H, { children: "上传服务未配置" })
			})
		}),
		n.enabled && n.last_attempt?.status === "failed" ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(H, {
					tone: n.last_attempt.attempted ? "error" : "warning",
					children: n.last_attempt.attempted ? "上传失败" : "待重新准备"
				})
			}), /* @__PURE__ */ (0, Q.jsx)(k, { children: n.last_attempt.attempted ? "馆藏与口味上传失败，本周不再发送。" : "馆藏与口味上传未完成，将自动重新准备。" })]
		}) : null,
		n.enabled && n.last_attempt?.status === "waiting-data" ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(H, { children: "等待数据" })
			}), /* @__PURE__ */ (0, Q.jsx)(N, { children: "等待可分析的馆藏或偏好数据。" })]
		}) : null,
		n.enabled && n.last_attempt?.status === "unknown" ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(H, {
					tone: "warning",
					children: "结果未取得"
				})
			}), /* @__PURE__ */ (0, Q.jsx)(N, { children: "未取得上传结果，本周不再发送。" })]
		}) : null,
		i ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [
				/* @__PURE__ */ (0, Q.jsxs)(N, { children: [
					"当前预览包含 ",
					i.data.library.length,
					" 部有编号作品、",
					i.data.coverage.uncoded_items,
					" 条无编号馆藏的汇总，约 ",
					(i.bytes / 1024).toFixed(1),
					" KiB。不含账号、设备、文件路径和浏览器历史记录等个人数据。"
				] }),
				/* @__PURE__ */ (0, Q.jsx)(O, {
					summary: "上传数据预览",
					defaultOpen: !0,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					children: /* @__PURE__ */ (0, Q.jsx)(Yn, {
========
					children: /* @__PURE__ */ (0, Q.jsx)(Xn, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						code: u,
						language: "json",
						label: "馆藏与口味上传预览",
						maxCharacters: 24e3
					})
				}),
				u.length > 24e3 ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "显示前 24,000 个字符，下载可查看完整内容。" }) : null,
				/* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: p,
					children: "下载完整预览"
				}),
				n.enabled ? null : /* @__PURE__ */ (0, Q.jsx)(D, {
					isSelected: c,
					onChange: l,
					children: "我已查看上传预览，同意上传馆藏与口味明细"
				})
			]
		}) : null,
		d.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(k, { children: d.error })
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)(M, { children: [
			o && !n.enabled ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => {
					s(!1), a(null), l(!1);
				},
				children: "取消"
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => {
					s(!0), d.run("preview", (e) => W("/api/configuration/library-sharing/preview", e), (e) => {
						a(e), l(!1);
					});
				},
				...K(d.busy === "preview"),
				children: "预览上传内容"
			}),
			!n.enabled && i ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "primary",
				disabled: !c,
				onClick: () => f(!0),
				...K(d.busy === "save"),
				children: "同意并开启上传"
			}) : null
		] })
	] });
}
// src/react/settings/remote-reporting-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function zr({ value: e, onChange: t, busy: n = !1 }) {
========
function Br({ value: e, onChange: t, busy: n = !1 }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
		label: "发送版本统计与错误诊断（推荐）",
		description: "上传版本、系统信息、故障类型、代码位置与发生次数。",
		children: /* @__PURE__ */ (0, Q.jsx)(U, {
			"aria-label": "发送版本统计与错误诊断（推荐）",
			isSelected: e.usage && e.errors,
			onChange: (n) => t({
				...e,
				usage: n,
				errors: n
			}),
			...K(n)
		})
	}) }), e.available ? null : /* @__PURE__ */ (0, Q.jsx)(V, {
		divided: !0,
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "self-start",
			children: /* @__PURE__ */ (0, Q.jsx)(H, { children: "上传服务未配置" })
		})
	})] });
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Br({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), i = Y();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(zr, {
========
function Vr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), i = Y();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Br, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		value: n,
		busy: i.busy === "save",
		onChange: (e) => {
			i.run("save", (t) => G("/api/configuration/remote-reporting", {
				usage: e.usage,
				errors: e.errors
			}, "POST", t), (e) => {
				r(e), t("已保存诊断选项");
			});
		}
	}), i.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
		divided: !0,
		children: /* @__PURE__ */ (0, Q.jsx)(k, { children: i.error })
	}) : null] });
}
// src/react/components/animated-number.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Vr = .6;
function Hr({ value: e, format: t = (e) => Math.round(e).toLocaleString(), className: n }) {
========
var Hr = .6;
function Ur({ value: e, format: t = (e) => Math.round(e).toLocaleString(), className: n }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let r = Un(), [i, a] = (0, Z.useState)(e), o = (0, Z.useRef)(e);
	return (0, Z.useEffect)(() => {
		if (r || o.current === e) {
			o.current = e, a(e);
			return;
		}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		let t = Xt(o.current, e, {
			duration: Vr,
========
		let t = Yt(o.current, e, {
			duration: Hr,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			ease: "easeOut",
			onUpdate: (e) => {
				o.current = e, a(e);
			}
		});
		return () => t.stop();
	}, [e, r]), /* @__PURE__ */ (0, Q.jsx)("span", {
		className: n ? `tabular-nums ${n}` : "tabular-nums",
		children: t(i)
	});
}
// node_modules/recharts/es6/state/selectors/pieSelectors.js
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ur(e, t) {
========
function Wr(e, t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Wr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ur(Object(n), !0).forEach(function(t) {
			Gr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ur(Object(n)).forEach(function(t) {
========
function Gr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wr(Object(n), !0).forEach(function(t) {
			Kr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wr(Object(n)).forEach(function(t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Gr(e, t, n) {
	return (t = Kr(t)) in e ? Object.defineProperty(e, t, {
========
function Kr(e, t, n) {
	return (t = qr(t)) in e ? Object.defineProperty(e, t, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Kr(e) {
	var t = qr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qr(e, t) {
========
function qr(e) {
	var t = Jr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Jr(e, t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Jr = oe([De, (e, t) => t], (e, t) => e.filter((e) => e.type === "pie").find((e) => e.id === t)), Yr = [], Xr = (e, t, n) => n?.length === 0 ? Yr : n, Zr = oe([
	Te,
	Jr,
	Xr
========
var Yr = oe([De, (e, t) => t], (e, t) => e.filter((e) => e.type === "pie").find((e) => e.id === t)), Xr = [], Zr = (e, t, n) => n?.length === 0 ? Xr : n, Qr = oe([
	Te,
	Yr,
	Zr
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
], (e, t, n) => {
	var r = e.chartData;
	if (t != null) {
		var i = t?.data != null && t.data.length > 0 ? t.data : r;
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		if (i && i.length || n == null || (i = n.map((e) => Wr(Wr({}, t.presentationProps), e.props))), i != null) return i;
	}
}), Qr = oe([
	Zr,
	Jr,
	Xr
========
		if (i && i.length || n == null || (i = n.map((e) => Gr(Gr({}, t.presentationProps), e.props))), i != null) return i;
	}
}), $r = oe([
	Qr,
	Yr,
	Zr
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
], (e, t, n) => {
	if (e != null && t != null) return e.map((e, r) => {
		var i, a = he(e, t.nameKey, t.name), o = n != null && (i = n[r]) != null && (i = i.props) != null && i.fill ? n[r].props.fill : typeof e == "object" && e && "fill" in e ? e.fill : t.fill;
		return {
			value: me(a, t.dataKey),
			dataKey: t.dataKey,
			color: o,
			payload: e,
			type: t.legendType
		};
	});
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}), $r = oe([
	Zr,
	Jr,
	Xr,
	Ee
], (e, t, n, r) => {
	if (t != null && e != null) return wi({
========
}), ei = oe([
	Qr,
	Yr,
	Zr,
	Ee
], (e, t, n, r) => {
	if (t != null && e != null) return Ti({
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		offset: r,
		pieSettings: t,
		displayedData: e,
		cells: n
	});
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}), ei = ["key"], ti = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], ni = ["id"], ri = ["id"];
function ii() {
	return ii = Object.assign ? Object.assign.bind() : function(e) {
========
}), ti = ["key"], ni = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], ri = ["id"], ii = ["id"];
function ai() {
	return ai = Object.assign ? Object.assign.bind() : function(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	}, ii.apply(null, arguments);
}
function ai(e, t) {
	if (e == null) return {};
	var n, r, i = oi(e, t);
========
	}, ai.apply(null, arguments);
}
function oi(e, t) {
	if (e == null) return {};
	var n, r, i = si(e, t);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function oi(e, t) {
========
function si(e, t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function si(e, t) {
========
function ci(e, t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		t % 2 ? si(Object(n), !0).forEach(function(t) {
			ci(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : si(Object(n)).forEach(function(t) {
========
		t % 2 ? ci(Object(n), !0).forEach(function(t) {
			li(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ci(Object(n)).forEach(function(t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ci(e, t, n) {
	return (t = li(t)) in e ? Object.defineProperty(e, t, {
========
function li(e, t, n) {
	return (t = ui(t)) in e ? Object.defineProperty(e, t, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function li(e) {
	var t = ui(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ui(e, t) {
========
function ui(e) {
	var t = di(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function di(e, t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var di = S;
function fi(e) {
	var n = (0, Z.useMemo)(() => ce(e.children, t), [e.children]), r = Me((t) => Qr(t, e.id, n));
	return r == null ? null : /*#__PURE__*/ Z.createElement(w, { legendPayload: r });
}
function pi(e) {
========
var fi = S;
function pi(e) {
	var n = (0, Z.useMemo)(() => ce(e.children, t), [e.children]), r = Me((t) => $r(t, e.id, n));
	return r == null ? null : /*#__PURE__*/ Z.createElement(w, { legendPayload: r });
}
function mi(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (e != null && typeof e != "boolean" && typeof e != "function") {
		if (/*#__PURE__*/ Z.isValidElement(e)) {
			var t = e.props?.fill;
			return typeof t == "string" ? t : void 0;
		}
		var n = e.fill;
		return typeof n == "string" ? n : void 0;
	}
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var mi = /*#__PURE__*/ Z.memo((e) => {
	var t = e.dataKey, n = e.nameKey, r = e.sectors, i = e.stroke, a = e.strokeWidth, o = e.fill, s = e.name, c = e.hide, l = e.tooltipType, u = e.formatter, d = e.id, f = e.activeShape, p = pi(f), m = {
========
var hi = /*#__PURE__*/ Z.memo((e) => {
	var t = e.dataKey, n = e.nameKey, r = e.sectors, i = e.stroke, a = e.strokeWidth, o = e.fill, s = e.name, c = e.hide, l = e.tooltipType, u = e.formatter, d = e.id, f = e.activeShape, p = mi(f), m = {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		dataDefinedOnItem: r.map((e) => {
			var t = e.tooltipPayload;
			return p == null || t == null ? t : t.map((e) => $($({}, e), {}, {
				color: p,
				fill: p
			}));
		}),
		getPosition: (e) => r[Number(e)]?.tooltipPosition,
		settings: {
			stroke: i,
			strokeWidth: a,
			fill: o,
			dataKey: t,
			nameKey: n,
			name: me(s, t),
			hide: c,
			type: l,
			color: o,
			unit: "",
			formatter: u,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ Z.createElement(T, { tooltipEntrySettings: m });
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}), hi = (e, t) => e > t ? "start" : e < t ? "end" : "middle", gi = (e, t, n) => pe(typeof t == "function" ? t(e) : t, n, n * .8), _i = (e, t, n) => {
========
}), gi = (e, t) => e > t ? "start" : e < t ? "end" : "middle", _i = (e, t, n) => pe(typeof t == "function" ? t(e) : t, n, n * .8), vi = (e, t, n) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	var r = t.top, i = t.left, a = t.width, o = t.height, s = fe(a, o);
	return {
		cx: i + pe(e.cx, a, a / 2),
		cy: r + pe(e.cy, o, o / 2),
		innerRadius: pe(e.innerRadius, s, 0),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		outerRadius: gi(n, e.outerRadius, s),
		maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2
	};
}, vi = (e, t) => ye(t - e) * Math.min(Math.abs(t - e), 360), yi = (e, t) => {
========
		outerRadius: _i(n, e.outerRadius, s),
		maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2
	};
}, yi = (e, t) => ye(t - e) * Math.min(Math.abs(t - e), 360), bi = (e, t) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	if (typeof e == "function") return e(t);
	var n = tn("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
	t.key;
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	var r = ai(t, ei);
	return /*#__PURE__*/ Z.createElement(l, ii({}, r, {
		type: "linear",
		className: n
	}));
}, bi = (e, t, n) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	var r = n;
	if (typeof e == "function" && (r = e(t), /*#__PURE__*/ Z.isValidElement(r))) return r;
	var i = tn("recharts-pie-label-text", ue(e));
	return /*#__PURE__*/ Z.createElement(ne, ii({}, t, {
========
	var r = oi(t, ti);
	return /*#__PURE__*/ Z.createElement(l, ai({}, r, {
		type: "linear",
		className: n
	}));
}, xi = (e, t, n) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	var r = n;
	if (typeof e == "function" && (r = e(t), /*#__PURE__*/ Z.isValidElement(r))) return r;
	var i = en("recharts-pie-label-text", ue(e));
	return /*#__PURE__*/ Z.createElement(ne, ai({}, t, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		alignmentBaseline: "middle",
		className: i
	}), r);
};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function xi(e) {
========
function Si(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label, a = n.labelLine, o = n.dataKey;
	if (!r || !i || !t) return null;
	var s = Oe(n), c = ke(i), l = ke(a), u = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, d = t.map((e, t) => {
		var n = (e.startAngle + e.endAngle) / 2, r = be(e.cx, e.cy, e.outerRadius + u, n), d = $($($($({}, s), e), {}, { stroke: "none" }, c), {}, {
			index: t,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			textAnchor: hi(r.x, e.cx)
========
			textAnchor: gi(r.x, e.cx)
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		}, r), p = $($($($({}, s), e), {}, {
			fill: "none",
			stroke: e.fill
		}, l), {}, {
			index: t,
			points: [be(e.cx, e.cy, e.outerRadius, n), r],
			key: "line"
		});
		return /*#__PURE__*/ Z.createElement(re, {
			zIndex: f.label,
			key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}`
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		}, /*#__PURE__*/ Z.createElement(g, null, a && yi(a, p), bi(i, d, he(e, o))));
	});
	return /*#__PURE__*/ Z.createElement(g, { className: "recharts-pie-labels" }, d);
}
function Si(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label;
	return typeof i == "object" && i && "position" in i ? /*#__PURE__*/ Z.createElement(h, { label: i }) : /*#__PURE__*/ Z.createElement(xi, {
========
		}, /*#__PURE__*/ Z.createElement(g, null, a && bi(a, p), xi(i, d, he(e, o))));
	});
	return /*#__PURE__*/ Z.createElement(g, { className: "recharts-pie-labels" }, d);
}
function Ci(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label;
	return typeof i == "object" && i && "position" in i ? /*#__PURE__*/ Z.createElement(h, { label: i }) : /*#__PURE__*/ Z.createElement(Si, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		sectors: t,
		props: n,
		showLabels: r
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ci(e) {
	var t = e.sectors, n = e.activeShape, r = e.inactiveShape, i = e.allOtherPieProps, a = e.shape, o = e.id, s = e.animationElapsedTime, c = e.isAnimating, l = e.isEntrance, f = Me(we), p = Me(Se), m = Me(Ce), h = i.onMouseEnter, _ = i.onClick, v = i.onMouseLeave, y = ai(i, ti), b = Pe(h, i.dataKey, o), x = Fe(v), S = Ne(_, i.dataKey, o);
========
function wi(e) {
	var t = e.sectors, n = e.activeShape, r = e.inactiveShape, i = e.allOtherPieProps, a = e.shape, o = e.id, s = e.animationElapsedTime, c = e.isAnimating, l = e.isEntrance, f = Me(we), p = Me(Se), m = Me(Ce), h = i.onMouseEnter, _ = i.onClick, v = i.onMouseLeave, y = oi(i, ni), b = Pe(h, i.dataKey, o), x = Fe(v), S = Ne(_, i.dataKey, o);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return t == null || t.length === 0 ? null : /*#__PURE__*/ Z.createElement(Z.Fragment, null, t.map((e, h) => {
		if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1) return null;
		var _ = m == null || m === o, v = String(h) === f && (p == null || i.dataKey === p) && _, C = n && v ? n : f ? r : null, w = $($({}, e), {}, {
			stroke: e.stroke,
			tabIndex: -1,
			index: h,
			isActive: v,
			animationElapsedTime: s,
			isAnimating: c,
			isEntrance: l,
			[d]: h,
			[u]: o
		});
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		return /*#__PURE__*/ Z.createElement(g, ii({
========
		return /*#__PURE__*/ Z.createElement(g, ai({
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${h}`,
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, ie(y, e, h), {
			onMouseEnter: b(e, h),
			onMouseLeave: x(e, h),
			onClick: S(e, h)
		}), /*#__PURE__*/ Z.createElement(ee, {
			option: C ?? a,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			DefaultShape: di,
========
			DefaultShape: fi,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			shapeProps: w
		}));
	}));
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function wi(e) {
	var t = e.pieSettings, n = e.displayedData, r = e.cells, i = e.offset, a = t.cornerRadius, o = t.startAngle, s = t.endAngle, c = t.dataKey, l = t.nameKey, u = t.tooltipType, d = Math.abs(t.minAngle), f = vi(o, s), p = Math.abs(f), m = n.length <= 1 ? 0 : t.paddingAngle ?? 0, h = n.filter((e) => he(e, c, 0) !== 0).length, g = (p >= 360 ? h : h - 1) * m, _ = n.reduce((e, t) => {
========
function Ti(e) {
	var t = e.pieSettings, n = e.displayedData, r = e.cells, i = e.offset, a = t.cornerRadius, o = t.startAngle, s = t.endAngle, c = t.dataKey, l = t.nameKey, u = t.tooltipType, d = Math.abs(t.minAngle), f = yi(o, s), p = Math.abs(f), m = n.length <= 1 ? 0 : t.paddingAngle ?? 0, h = n.filter((e) => he(e, c, 0) !== 0).length, g = (p >= 360 ? h : h - 1) * m, _ = n.reduce((e, t) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		var n = he(t, c, 0);
		return e + (_e(n) ? n : 0);
	}, 0), v = d > 0 && _ > 0 && n.some((e) => {
		var t = he(e, c, 0), n = (_e(t) ? t : 0) / _;
		return t !== 0 && n * p < d;
	}) ? d : 0, y = p - h * v - g, b;
	if (_ > 0) {
		var x;
		b = n.map((e, n) => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			var s = he(e, c, 0), d = he(e, l, n), p = _i(t, i, e), h = (_e(s) ? s : 0) / _, g, b = $($({}, e), r && r[n] && r[n].props), S = b != null && "fill" in b && typeof b.fill == "string" ? b.fill : t.fill;
========
			var s = he(e, c, 0), d = he(e, l, n), p = vi(t, i, e), h = (_e(s) ? s : 0) / _, g, b = $($({}, e), r && r[n] && r[n].props), S = b != null && "fill" in b && typeof b.fill == "string" ? b.fill : t.fill;
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			g = n ? x.endAngle + ye(f) * m * (s === 0 ? 0 : 1) : o;
			var C = g + ye(f) * ((s === 0 ? 0 : v) + h * y), w = (g + C) / 2, T = (p.innerRadius + p.outerRadius) / 2, ee = [{
				name: d,
				value: s,
				payload: b,
				dataKey: c,
				type: u,
				color: S,
				fill: S,
				graphicalItemId: t.id
			}], te = be(p.cx, p.cy, T, w);
			return x = $($($($({}, t.presentationProps), {}, {
				percent: h,
				cornerRadius: typeof a == "string" ? parseFloat(a) : a,
				name: d,
				tooltipPayload: ee,
				midAngle: w,
				middleRadius: T,
				tooltipPosition: te
			}, b), p), {}, {
				value: s,
				dataKey: c,
				startAngle: g,
				endAngle: C,
				payload: b,
				paddingAngle: s === 0 ? 0 : ye(f) * m
			}), x;
		});
	}
	return b;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ti(e) {
========
function Ei(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	var t = e.showLabels, n = e.sectors, r = e.children, i = (0, Z.useMemo)(() => !t || !n ? [] : n.map((e) => ({
		value: e.value,
		payload: e.payload,
		clockWise: !1,
		parentViewBox: void 0,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	})), [n, t]);
	return /*#__PURE__*/ Z.createElement(b, { value: t ? i : void 0 }, r);
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Ei = (e, t) => {
========
var Di = (e, t) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (e == null) return [];
	var n = [], r = e.find((e) => e.status !== "removed"), i = r ? r.next.startAngle : 0;
	return e.forEach((e, r) => {
		if (e.status !== "removed") {
			var a = r > 0 ? le(e.next, "paddingAngle", 0) : 0;
			if (e.status === "matched") {
				var o = ge(e.prev.endAngle - e.prev.startAngle, e.next.endAngle - e.next.startAngle, t), s = $($({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + o + a
				});
				n.push(s), i = s.endAngle;
			} else {
				var c = ge(0, e.next.endAngle - e.next.startAngle, t), l = $($({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + c + a
				});
				n.push(l), i = l.endAngle;
			}
		}
	}), n;
};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Di(t) {
	var n = t.props, r = t.previousSectorsRef, i = t.id, a = n.sectors, o = n.activeShape, s = n.inactiveShape, c = n.animationInterpolateFn, l = je(n.onAnimationStart, n.onAnimationEnd), u = l.isAnimating, d = l.handleAnimationStart, f = l.handleAnimationEnd, p = Ie();
	if (p == null) return null;
	var m = a[0];
	return /*#__PURE__*/ Z.createElement(Ti, {
========
function Oi(t) {
	var n = t.props, r = t.previousSectorsRef, i = t.id, a = n.sectors, o = n.activeShape, s = n.inactiveShape, c = n.animationInterpolateFn, l = je(n.onAnimationStart, n.onAnimationEnd), u = l.isAnimating, d = l.handleAnimationStart, f = l.handleAnimationEnd, p = Ie();
	if (p == null) return null;
	var m = a[0];
	return /*#__PURE__*/ Z.createElement(Ei, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		showLabels: !u,
		sectors: a
	}, /*#__PURE__*/ Z.createElement(e, {
		animationInput: n,
		animationIdPrefix: "recharts-pie-",
		items: a,
		previousItemsRef: r,
		isAnimationActive: n.isAnimationActive,
		animationBegin: n.animationBegin,
		animationDuration: n.animationDuration,
		animationEasing: n.animationEasing,
		onAnimationStart: d,
		onAnimationEnd: f,
		animationInterpolateFn: c,
		animationMatchBy: n.animationMatchBy,
		layout: p
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	}, (e, t, r) => /*#__PURE__*/ Z.createElement(g, null, /*#__PURE__*/ Z.createElement(Ci, {
========
	}, (e, t, r) => /*#__PURE__*/ Z.createElement(g, null, /*#__PURE__*/ Z.createElement(wi, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		sectors: e,
		activeShape: o,
		inactiveShape: s,
		allOtherPieProps: n,
		shape: n.shape,
		id: i,
		animationElapsedTime: t,
		isAnimating: u || t < 1,
		isEntrance: r
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	}))), /*#__PURE__*/ Z.createElement(Si, {
========
	}))), /*#__PURE__*/ Z.createElement(Ci, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		showLabels: !u,
		sectors: a,
		props: n
	}), /*#__PURE__*/ Z.createElement(y, {
		cx: m?.cx ?? 0,
		cy: m?.cy ?? 0,
		innerRadius: m?.innerRadius ?? 0,
		outerRadius: m?.outerRadius ?? 0,
		startAngle: n.startAngle,
		endAngle: n.endAngle,
		clockWise: !1
	}, n.children));
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Oi = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: Ei,
========
var ki = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: Di,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	animationMatchBy: ve,
	cx: "50%",
	cy: "50%",
	dataKey: "value",
	endAngle: 360,
	fill: "#808080",
	hide: !1,
	innerRadius: 0,
	isAnimationActive: "auto",
	label: !1,
	labelLine: !0,
	legendType: "rect",
	minAngle: 0,
	nameKey: "name",
	outerRadius: "80%",
	paddingAngle: 0,
	rootTabIndex: 0,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	shape: di,
========
	shape: fi,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	startAngle: 0,
	stroke: "#fff",
	zIndex: f.area
};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ki(e) {
	var n = e.id, r = ai(e, ni), i = e.hide, a = e.className, o = e.rootTabIndex, s = (0, Z.useMemo)(() => ce(e.children, t), [e.children]), c = Me((e) => $r(e, n, s)), l = (0, Z.useRef)(null), u = tn("recharts-pie", a);
	return i || c == null ? (l.current = null, /*#__PURE__*/ Z.createElement(g, {
		tabIndex: o,
		className: u
	})) : /*#__PURE__*/ Z.createElement(re, { zIndex: e.zIndex }, /*#__PURE__*/ Z.createElement(mi, {
========
function Ai(e) {
	var n = e.id, r = oi(e, ri), i = e.hide, a = e.className, o = e.rootTabIndex, s = (0, Z.useMemo)(() => ce(e.children, t), [e.children]), c = Me((e) => ei(e, n, s)), l = (0, Z.useRef)(null), u = en("recharts-pie", a);
	return i || c == null ? (l.current = null, /*#__PURE__*/ Z.createElement(g, {
		tabIndex: o,
		className: u
	})) : /*#__PURE__*/ Z.createElement(re, { zIndex: e.zIndex }, /*#__PURE__*/ Z.createElement(hi, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		dataKey: e.dataKey,
		nameKey: e.nameKey,
		sectors: c,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		fill: e.fill,
		name: e.name,
		hide: e.hide,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: n,
		activeShape: e.activeShape
	}), /*#__PURE__*/ Z.createElement(g, {
		tabIndex: o,
		className: u
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	}, /*#__PURE__*/ Z.createElement(Di, {
========
	}, /*#__PURE__*/ Z.createElement(Oi, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		props: $($({}, r), {}, { sectors: c }),
		previousSectorsRef: l,
		id: n
	})));
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ai(e) {
	var t = xe(e, Oi), n = t.id, r = ai(t, ri), i = Oe(r);
========
function ji(e) {
	var t = xe(e, ki), n = t.id, r = oi(t, ii), i = Oe(r);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /*#__PURE__*/ Z.createElement(x, {
		id: n,
		type: "pie"
	}, (e) => /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement(C, {
		type: "pie",
		id: e,
		data: r.data,
		dataKey: r.dataKey,
		hide: r.hide,
		angleAxisId: 0,
		radiusAxisId: 0,
		name: r.name,
		nameKey: r.nameKey,
		tooltipType: r.tooltipType,
		legendType: r.legendType,
		fill: r.fill,
		cx: r.cx,
		cy: r.cy,
		startAngle: r.startAngle,
		endAngle: r.endAngle,
		paddingAngle: r.paddingAngle,
		minAngle: r.minAngle,
		innerRadius: r.innerRadius,
		outerRadius: r.outerRadius,
		cornerRadius: r.cornerRadius,
		presentationProps: i,
		maxRadius: t.maxRadius
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	}), /*#__PURE__*/ Z.createElement(fi, ii({}, r, { id: e })), /*#__PURE__*/ Z.createElement(ki, ii({}, r, { id: e }))));
}
var ji = Ai;
ji.displayName = "Pie";
// node_modules/recharts/es6/chart/PieChart.js
function Mi(e, t) {
========
	}), /*#__PURE__*/ Z.createElement(pi, ai({}, r, { id: e })), /*#__PURE__*/ Z.createElement(Ai, ai({}, r, { id: e }))));
}
var Mi = ji;
Mi.displayName = "Pie";
// node_modules/recharts/es6/chart/PieChart.js
function Ni(e, t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ni(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Mi(Object(n), !0).forEach(function(t) {
			Pi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mi(Object(n)).forEach(function(t) {
========
function Pi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ni(Object(n), !0).forEach(function(t) {
			Fi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ni(Object(n)).forEach(function(t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Pi(e, t, n) {
	return (t = Fi(t)) in e ? Object.defineProperty(e, t, {
========
function Fi(e, t, n) {
	return (t = Ii(t)) in e ? Object.defineProperty(e, t, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Fi(e) {
	var t = Ii(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ii(e, t) {
========
function Ii(e) {
	var t = Li(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Li(e, t) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Li = ["item"], Ri = Ni(Ni({}, se), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
}), zi = /*#__PURE__*/ (0, Z.forwardRef)((e, t) => {
	var n = xe(e, Ri);
	return /*#__PURE__*/ Z.createElement(v, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: Li,
========
var Ri = ["item"], zi = Pi(Pi({}, se), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
}), Bi = /*#__PURE__*/ (0, Z.forwardRef)((e, t) => {
	var n = xe(e, zi);
	return /*#__PURE__*/ Z.createElement(v, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: Ri,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		tooltipPayloadSearcher: ae,
		categoricalChartProps: n,
		ref: t
	});
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}), Bi = 5, Vi = 2e3, Hi = 0, Ui = "80%", Wi = 0, Gi = 0, Ki = 0, qi = 360, Ji = [], Yi = (0, Z.createContext)(null);
function Xi() {
	let e = (0, Z.use)(Yi);
	if (!e) throw Error("Pie chart parts (<Pie />, <Tooltip />, …) must be used within <EvilPieChart />");
	return e;
}
function Zi({ config: e, data: t, dataKey: n, nameKey: i, children: a, className: o, chartProps: s, defaultSelectedSector: c = null, onSelectionChange: l, isLoading: u = !1 }) {
========
}), Vi = 5, Hi = 2e3, Ui = 0, Wi = "80%", Gi = 0, Ki = 0, qi = 0, Ji = 360, Yi = [], Xi = (0, Z.createContext)(null);
function Zi() {
	let e = (0, Z.use)(Xi);
	if (!e) throw Error("Pie chart parts (<Pie />, <Tooltip />, …) must be used within <EvilPieChart />");
	return e;
}
function Qi({ config: e, data: t, dataKey: n, nameKey: i, children: a, className: o, chartProps: s, defaultSelectedSector: c = null, onSelectionChange: l, isLoading: u = !1 }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [d, f] = (0, Z.useState)(c), p = (0, Z.useCallback)((e) => {
		if (f(e), e === null) {
			l?.(null);
			return;
		}
		let r = t.find((t) => t[i] === e);
		r && l?.({
			dataKey: e,
			value: r[n]
		});
	}, [
		t,
		n,
		i,
		l
	]), m = (0, Z.useMemo)(() => ({
		config: e,
		data: t,
		dataKey: n,
		nameKey: i,
		isLoading: u,
		selectedSector: d,
		selectSector: p
	}), [
		e,
		t,
		n,
		i,
		u,
		d,
		p
	]);
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	return /* @__PURE__ */ (0, Q.jsx)(Yi, {
========
	return /* @__PURE__ */ (0, Q.jsx)(Xi, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		value: m,
		children: /* @__PURE__ */ (0, Q.jsxs)(r, {
			className: o,
			config: e,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			children: [/* @__PURE__ */ (0, Q.jsx)(_, { isLoading: u }), /* @__PURE__ */ (0, Q.jsx)(zi, {
========
			children: [/* @__PURE__ */ (0, Q.jsx)(_, { isLoading: u }), /* @__PURE__ */ (0, Q.jsx)(Bi, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				id: "evil-charts-pie-chart",
				accessibilityLayer: !0,
				...s,
				children: a
			})]
		})
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Qi({ variant: e = "gradient", innerRadius: t = Hi, outerRadius: n = Ui, cornerRadius: r = Wi, paddingAngle: i = Gi, startAngle: a = Ki, endAngle: o = qi, isClickable: s = !1, glowingSectors: c = Ji, children: l, pieProps: u }) {
	let { config: d, data: f, dataKey: p, nameKey: m, isLoading: h, selectedSector: g, selectSector: _ } = Xi(), v = (0, Z.useId)().replace(/:/g, "");
	if (h) return /* @__PURE__ */ (0, Q.jsx)(ji, {
		data: oa,
========
function $i({ variant: e = "gradient", innerRadius: t = Ui, outerRadius: n = Wi, cornerRadius: r = Gi, paddingAngle: i = Ki, startAngle: a = qi, endAngle: o = Ji, isClickable: s = !1, glowingSectors: c = Yi, children: l, pieProps: u }) {
	let { config: d, data: f, dataKey: p, nameKey: m, isLoading: h, selectedSector: g, selectSector: _ } = Zi(), v = (0, Z.useId)().replace(/:/g, "");
	if (h) return /* @__PURE__ */ (0, Q.jsx)(Mi, {
		data: sa,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		dataKey: "value",
		nameKey: "name",
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !1,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		shape: (e) => /* @__PURE__ */ (0, Q.jsx)(sa, { ...e })
	});
	let y = ra(l, p), b = f.map((e) => ({
		...e,
		fill: `url(#${v}-colors-${e[m]})`
	}));
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ji, {
========
		shape: (e) => /* @__PURE__ */ (0, Q.jsx)(ca, { ...e })
	});
	let y = ia(l, p), b = f.map((e) => ({
		...e,
		fill: `url(#${v}-colors-${e[m]})`
	}));
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Mi, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		data: b,
		dataKey: p,
		nameKey: m,
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !0,
		style: s ? { cursor: "pointer" } : void 0,
		onClick: (e, t) => {
			if (!s) return;
			let n = f[t]?.[m];
			_(g === n ? null : n);
		},
		shape: (e) => {
			let t = f[e.index ?? 0]?.[m], n = c.includes(t), r = s && g !== null && g !== t;
			return /* @__PURE__ */ (0, Q.jsx)(S, {
				...e,
				fill: `url(#${v}-colors-${t})`,
				filter: n ? `url(#${v}-glow-${t})` : void 0,
				stroke: i < 0 ? "var(--background)" : "none",
				strokeWidth: i < 0 ? 5 : 0,
				opacity: r ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...u,
		children: y
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	}), /* @__PURE__ */ (0, Q.jsxs)("defs", { children: [/* @__PURE__ */ (0, Q.jsx)(ia, {
		id: v,
		config: d,
		variant: e
	}), c.length > 0 && /* @__PURE__ */ (0, Q.jsx)(aa, {
========
	}), /* @__PURE__ */ (0, Q.jsxs)("defs", { children: [/* @__PURE__ */ (0, Q.jsx)(aa, {
		id: v,
		config: d,
		variant: e
	}), c.length > 0 && /* @__PURE__ */ (0, Q.jsx)(oa, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		id: v,
		glowingSectors: c
	})] })] });
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var $i = () => null;
function ea({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, nameKey: i } = Xi();
========
var ea = () => null;
function ta({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, nameKey: i } = Zi();
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return r ? null : /* @__PURE__ */ (0, Q.jsx)(s, {
		defaultIndex: n,
		content: /* @__PURE__ */ (0, Q.jsx)(c, {
			nameKey: i,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ta({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: o, selectedSector: s, selectSector: c } = Xi();
========
function na({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: o, selectedSector: s, selectSector: c } = Zi();
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsx)(i, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Q.jsx)(a, {
			selected: s,
			onSelectChange: c,
			isClickable: r,
			nameKey: o,
			variant: e
		})
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function na({ variant: e = "dots" }) {
	return /* @__PURE__ */ (0, Q.jsx)(n, { variant: e });
}
var ra = (e, t) => {
	let n = null;
	return Z.Children.forEach(e, (e) => {
		if (!(0, Z.isValidElement)(e) || e.type !== $i) return;
========
function ra({ variant: e = "dots" }) {
	return /* @__PURE__ */ (0, Q.jsx)(n, { variant: e });
}
var ia = (e, t) => {
	let n = null;
	return Z.Children.forEach(e, (e) => {
		if (!(0, Z.isValidElement)(e) || e.type !== ea) return;
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		let { dataKey: r, labelListProps: i } = e.props;
		n = /* @__PURE__ */ (0, Q.jsx)(m, {
			dataKey: r ?? t,
			stroke: "none",
			fontSize: 12,
			fontWeight: 500,
			fill: "currentColor",
			className: "fill-background",
			...i
		});
	}), n;
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}, ia = ({ id: e, config: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: Object.entries(t).map(([t, n]) => {
========
}, aa = ({ id: e, config: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: Object.entries(t).map(([t, n]) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let r = de(n);
	return /* @__PURE__ */ (0, Q.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${t}-0)`
		}), /* @__PURE__ */ (0, Q.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${t}-0)`
		})] }) : Array.from({ length: r }, (e, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, Q.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
			}, i);
		})
	}, `${e}-colors-${t}`);
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}) }), aa = ({ id: e, glowingSectors: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => /* @__PURE__ */ (0, Q.jsxs)("filter", {
========
}) }), oa = ({ id: e, glowingSectors: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => /* @__PURE__ */ (0, Q.jsxs)("filter", {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	id: `${e}-glow-${t}`,
	x: "-100%",
	y: "-100%",
	width: "300%",
	height: "300%",
	children: [
		/* @__PURE__ */ (0, Q.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "8",
			result: "blur"
		}),
		/* @__PURE__ */ (0, Q.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, Q.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, Q.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, Q.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}, `${e}-glow-${t}`)) }), oa = Array.from({ length: Bi }, (e, t) => ({
	name: `loading${t}`,
	value: 100 / Bi
})), sa = (e) => {
	let { index: t = 0, ...n } = e, r = t / Bi * (Vi / 1e3);
	return /* @__PURE__ */ (0, Q.jsx)(Sn.g, {
========
}, `${e}-glow-${t}`)) }), sa = Array.from({ length: Vi }, (e, t) => ({
	name: `loading${t}`,
	value: 100 / Vi
})), ca = (e) => {
	let { index: t = 0, ...n } = e, r = t / Vi * (Hi / 1e3);
	return /* @__PURE__ */ (0, Q.jsx)(xn.g, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		initial: { opacity: .15 },
		animate: { opacity: [
			.15,
			.5,
			.15
		] },
		transition: {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			duration: Vi / 1e3,
========
			duration: Hi / 1e3,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			delay: r,
			repeat: Infinity,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ (0, Q.jsx)(S, {
			...n,
			fill: "currentColor"
		})
	});
};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
Zi.Pie = Qi, Zi.Label = $i, Zi.Tooltip = ea, Zi.Legend = ta, Zi.Background = na;
// src/react/settings/storage-charts.tsx
var ca = {
========
Qi.Pie = $i, Qi.Label = ea, Qi.Tooltip = ta, Qi.Legend = na, Qi.Background = ra;
// src/react/settings/storage-charts.tsx
var la = {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	database: "var(--color-chart-1)",
	backups: "var(--color-chart-2)",
	playback: "var(--color-chart-3)",
	thumbnails: "var(--color-chart-4)",
	previews: "var(--color-chart-5)",
	downloads: "var(--color-chart-6)",
	sources: "var(--color-chart-7)",
	records: "var(--color-chart-8)",
	tools: "var(--color-chart-9)"
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}, la = "var(--color-text-tertiary)", ua = {
========
}, ua = "var(--color-text-tertiary)", da = {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	database: "bg-chart-1",
	backups: "bg-chart-2",
	playback: "bg-chart-3",
	thumbnails: "bg-chart-4",
	previews: "bg-chart-5",
	downloads: "bg-chart-6",
	sources: "bg-chart-7",
	records: "bg-chart-8",
	tools: "bg-chart-9"
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}, da = (e) => J(e);
function fa(e) {
	let t = e.filter((e) => ca[e.key] && e.bytes > 0).map((e) => ({
		key: e.key,
		label: e.label,
		bytes: e.bytes,
		color: ca[e.key]
	})), n = e.filter((e) => !ca[e.key]).reduce((e, t) => e + t.bytes, 0);
========
}, fa = (e) => J(e);
function pa(e) {
	let t = e.filter((e) => la[e.key] && e.bytes > 0).map((e) => ({
		key: e.key,
		label: e.label,
		bytes: e.bytes,
		color: la[e.key]
	})), n = e.filter((e) => !la[e.key]).reduce((e, t) => e + t.bytes, 0);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return n > 0 ? [...t, {
		key: "rest",
		label: "其余",
		bytes: n,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		color: la
	}] : t;
}
function pa({ storage: e }) {
	let t = e.usage, n = fa(t.categories), r = Object.fromEntries(n.map((e) => [e.key, {
========
		color: ua
	}] : t;
}
function ma({ storage: e }) {
	let t = e.usage, n = pa(t.categories), r = Object.fromEntries(n.map((e) => [e.key, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		label: e.label,
		colors: Ae(e.color)
	}])), i = n.map((e) => ({
		slice: e.key,
		value: e.bytes
	}));
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-5 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "relative mx-auto size-48 flex-none",
			role: "img",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			"aria-label": `数据目录共 ${da(t.total_bytes)}，各类占比`,
			children: [/* @__PURE__ */ (0, Q.jsxs)(Zi, {
========
			"aria-label": `数据目录共 ${fa(t.total_bytes)}，各类占比`,
			children: [/* @__PURE__ */ (0, Q.jsxs)(Qi, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				data: i,
				dataKey: "value",
				nameKey: "slice",
				config: r,
				className: "aspect-square size-48 flex-none",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: [/* @__PURE__ */ (0, Q.jsx)(Zi.Pie, {
========
				children: [/* @__PURE__ */ (0, Q.jsx)(Qi.Pie, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					innerRadius: "68%",
					outerRadius: "100%",
					paddingAngle: 1,
					cornerRadius: 3
				}), /* @__PURE__ */ (0, Q.jsx)(o, {
					nameKey: "slice",
					hideLabel: !0,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					format: da
========
					format: fa
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				})]
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, Q.jsx)("b", {
					className: "text-title-2-medium tabular-nums text-text-primary",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					children: da(t.total_bytes)
========
					children: fa(t.total_bytes)
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				}), /* @__PURE__ */ (0, Q.jsxs)("small", {
					className: "text-caption-1-regular tabular-nums text-text-secondary",
					children: [t.total_files.toLocaleString(), " 个文件"]
				})]
			})]
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)("ul", {
				className: "flex flex-wrap gap-x-4 gap-y-1.5",
				"aria-label": "图例",
				children: n.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
					className: "flex items-center gap-1.5 text-caption-1-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("i", {
							"aria-hidden": !0,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
							className: `${te} ${ua[e.key] || "bg-text-tertiary"}`
========
							className: `${te} ${da[e.key] || "bg-text-tertiary"}`
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						}),
						e.label,
						/* @__PURE__ */ (0, Q.jsx)("span", {
							className: "tabular-nums text-text-primary",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
							children: da(e.bytes)
						})
					]
				}, e.key))
			}), /* @__PURE__ */ (0, Q.jsx)(ma, { storage: e })]
		})]
	});
}
function ma({ storage: e }) {
========
							children: fa(e.bytes)
						})
					]
				}, e.key))
			}), /* @__PURE__ */ (0, Q.jsx)(ha, { storage: e })]
		})]
	});
}
function ha({ storage: e }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (e.total_bytes === null || e.free_bytes === null || !e.usage) return null;
	let t = Math.min(e.usage.total_bytes, e.total_bytes), n = e.free_bytes, r = Math.max(0, e.total_bytes - n - t), i = {
		peach: {
			label: "Peach 数据",
			colors: Ae("var(--color-border-focus-ring)")
		},
		others: {
			label: "其他文件",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			colors: Ae(la)
========
			colors: Ae(ua)
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		},
		free: {
			label: "可用",
			colors: Ae("var(--color-background-tertiary-default)")
		}
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: [
				"所在磁盘共 ",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				da(e.total_bytes),
========
				fa(e.total_bytes),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				e.system_drive ? "（系统盘）" : "",
				"，Peach 占 ",
				((t) => {
					let n = t / e.total_bytes * 100;
					return n < .1 ? "不到 0.1%" : `${n.toFixed(+(n < 10))}%`;
				})(t),
				"， 可用 ",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				da(n)
========
				fa(n)
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			]
		}), /* @__PURE__ */ (0, Q.jsxs)(p, {
			data: [{
				disk: "磁盘",
				peach: t,
				others: r,
				free: n
			}],
			config: i,
			layout: "horizontal",
			stackType: "percent",
			barRadius: 4,
			chartProps: { margin: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			} },
			className: "aspect-auto h-6 flex-none",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(p.YAxis, {
					dataKey: "disk",
					hide: !0
				}),
				/* @__PURE__ */ (0, Q.jsx)(p.XAxis, { hide: !0 }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "peach" }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "others" }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "free" }),
				/* @__PURE__ */ (0, Q.jsx)(o, {
					hideLabel: !0,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					format: da
========
					format: fa
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				})
			]
		})]
	});
}
// src/react/settings/storage-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var ha = "/api/configuration/storage", ga = 1500, _a = 864e5, va = (e) => e instanceof qe && e.body?.errors?.target || q(e);
function ya(e) {
========
var ga = "/api/configuration/storage", _a = 1500, va = 864e5, ya = (e) => e instanceof qe && e.body?.errors?.target || q(e);
function ba(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if (e.free_bytes === null || e.total_bytes === null) return "未取得";
	let t = `${J(e.free_bytes)} 可用，共 ${J(e.total_bytes)}`;
	return e.system_drive ? `${t}（系统盘）` : t;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var ba = (e) => e.cleanable && e.reclaimable > 0;
function xa({ job: e }) {
	let t = e.files || 0, n = e.expected_files || 0, r = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		"已统计 ",
		/* @__PURE__ */ (0, Q.jsx)(Hr, { value: t }),
		" 个文件 · ",
		/* @__PURE__ */ (0, Q.jsx)(Hr, {
========
var xa = (e) => e.cleanable && e.reclaimable > 0;
function Sa({ job: e }) {
	let t = e.files || 0, n = e.expected_files || 0, r = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		"已统计 ",
		/* @__PURE__ */ (0, Q.jsx)(Ur, { value: t }),
		" 个文件 · ",
		/* @__PURE__ */ (0, Q.jsx)(Ur, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			value: e.bytes || 0,
			format: J
		})
	] });
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(jt, {
			label: "统计进度",
			value: Math.min(t, n * .99),
			max: n
		}), /* @__PURE__ */ (0, Q.jsxs)(N, { children: [
			r,
			"，上次共 ",
			n.toLocaleString(),
			" 个"
		] })] }) : /* @__PURE__ */ (0, Q.jsx)(vt, { label: "正在统计占用空间" }), n ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: r })]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Sa({ category: e, selected: t, disabled: n, onToggle: r }) {
	let i = ba(e), a = e.cleanable ? e.reclaimable > 0 ? `清理后${e.note}` : "没有可以清理的文件" : `不能清理：${e.note}`;
========
function Ca({ category: e, selected: t, disabled: n, onToggle: r }) {
	let i = xa(e), a = e.cleanable ? e.reclaimable > 0 ? `清理后${e.note}` : "没有可以清理的文件" : `不能清理：${e.note}`;
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-category": e.key,
		className: "flex min-h-13 w-full items-start gap-3 border-b border-separator-border py-2.5 pr-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(D, {
				"aria-label": `清理${e.label}`,
				isSelected: t,
				isDisabled: !i || n,
				onChange: r,
				className: "mt-0.5"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-0.5",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						className: "flex items-center gap-2 text-body-regular text-text-primary",
						children: [/* @__PURE__ */ (0, Q.jsx)("i", {
							"aria-hidden": !0,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
							className: `size-2.5 shrink-0 rounded-xs ${ua[e.key] || "bg-text-tertiary"}`
========
							className: `size-2.5 shrink-0 rounded-xs ${da[e.key] || "bg-text-tertiary"}`
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						}), e.label]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.description
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular text-text-tertiary",
						children: a
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-0.5 text-right",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: [/* @__PURE__ */ (0, Q.jsx)(Hr, {
========
				children: [/* @__PURE__ */ (0, Q.jsx)(Ur, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					value: e.bytes,
					format: J,
					className: "text-body-regular text-text-primary"
				}), i ? /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: ["可释放 ", J(e.reclaimable)]
				}) : null]
			})
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ca({ initial: e, receipt: t }) {
========
function wa({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(/* @__PURE__ */ new Set()), c = Y(), l = n.job.state !== "idle", u = (0, Z.useRef)(l);
	(0, Z.useEffect)(() => {
		if (!l) return;
		let e = new AbortController(), t = setTimeout(() => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			W(ha, e.signal).then(r, () => {
				e.signal.aborted || r((e) => ({ ...e }));
			});
		}, ga);
========
			W(ga, e.signal).then(r, () => {
				e.signal.aborted || r((e) => ({ ...e }));
			});
		}, _a);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		return () => {
			e.abort(), clearTimeout(t);
		};
	}, [n]), (0, Z.useEffect)(() => {
		l ? u.current = !0 : u.current && (u.current = !1, s(/* @__PURE__ */ new Set()), n.job.error || t(n.job.message || "已统计占用空间"));
	}, [l]);
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	let d = () => void c.run("measure", (e) => G(`${ha}/measure`, {}, "POST", e), r), f = n.usage, p = f?.categories.filter(ba) ?? [], m = p.filter((e) => o.has(e.key)), h = (e, t) => {
========
	let d = () => void c.run("measure", (e) => G(`${ga}/measure`, {}, "POST", e), r), f = n.usage, p = f?.categories.filter(xa) ?? [], m = p.filter((e) => o.has(e.key)), h = (e, t) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		if (!e.length) return;
		let n = e.reduce((e, t) => e + t.reclaimable, 0);
		rn({
			title: t,
			body: `将删除 ${J(n)}：${e.map((e) => `${e.label} ${J(e.reclaimable)}（清理后${e.note}）`).join("；")}。`,
			confirmLabel: `清理 ${J(n)}`,
			danger: e.some((e) => e.key === "backups"),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			onConfirm: async () => r(await G(`${ha}/clean`, { categories: e.map((e) => e.key) }))
========
			onConfirm: async () => r(await G(`${ga}/clean`, { categories: e.map((e) => e.key) }))
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		});
	}, g = () => void c.run("relocate", async (e) => {
		let t = (await G(wt, { initial: n.data_root }, "POST", e)).path;
		if (!t) return;
		let r = n.usage ? J(n.usage.total_bytes) : "";
		await rn({
			title: "迁移数据目录",
			body: `将 ${r} 数据从 ${n.data_root} 移到 ${t}。迁移期间 Peach 会退出，完成后自动重新打开；原位置的数据在新位置核对无误后删除。`,
			confirmLabel: "迁移数据目录",
			onConfirm: async () => {
				try {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					a((await G(`${ha}/relocate`, { target: t })).message);
				} catch (e) {
					throw Error(va(e));
				}
			}
		});
	}, () => void 0), _ = n.relocation.last, v = _ && (_.state === "error" || (_.notes?.length ?? 0) > 0 || Date.now() - _.finished_at * 1e3 < _a), y = f?.categories.find((e) => e.key === n.job.category)?.label, b = i || (n.job.state === "cleaning" ? `正在清理${y || ""}…` : n.job.state === "measuring" ? "正在统计占用空间…" : m.length ? `已选 ${m.length} 类，可释放 ${J(m.reduce((e, t) => e + t.reclaimable, 0))}` : f ? `统计于 ${(/* @__PURE__ */ new Date(f.measured_at * 1e3)).toLocaleString()}` : ""), x = l || !!i, S = (e) => (t) => s((n) => {
========
					a((await G(`${ga}/relocate`, { target: t })).message);
				} catch (e) {
					throw Error(ya(e));
				}
			}
		});
	}, () => void 0), _ = n.relocation.last, v = _ && (_.state === "error" || (_.notes?.length ?? 0) > 0 || Date.now() - _.finished_at * 1e3 < va), y = f?.categories.find((e) => e.key === n.job.category)?.label, b = i || (n.job.state === "cleaning" ? `正在清理${y || ""}…` : n.job.state === "measuring" ? "正在统计占用空间…" : m.length ? `已选 ${m.length} 类，可释放 ${J(m.reduce((e, t) => e + t.reclaimable, 0))}` : f ? `统计于 ${(/* @__PURE__ */ new Date(f.measured_at * 1e3)).toLocaleString()}` : ""), x = l || !!i, S = (e) => (t) => s((n) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		let r = new Set(n);
		return t ? r.add(e) : r.delete(e), r;
	});
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "storageSettings",
		guide: "storage",
		title: "存储空间",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(ut, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
				term: "数据目录",
				children: /* @__PURE__ */ (0, Q.jsx)(kt, {
					path: n.data_root,
					className: "text-body-regular text-text-primary",
					onRevealed: t
				})
			}), /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "所在磁盘",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: ya(n)
========
				children: ba(n)
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			})] }),
			/* @__PURE__ */ (0, Q.jsxs)(V, {
				divided: !0,
				children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					n.job.state === "measuring" ? /* @__PURE__ */ (0, Q.jsx)(xa, { job: n.job }) : null,
========
					n.job.state === "measuring" ? /* @__PURE__ */ (0, Q.jsx)(Sa, { job: n.job }) : null,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					f ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-storage-result": "",
						className: $t({
							variant: "outlined",
							padding: "none",
							className: "flex flex-col"
						}),
						children: [/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "border-b border-separator-border p-4",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
							children: /* @__PURE__ */ (0, Q.jsx)(pa, { storage: n })
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-col pl-4",
							children: f.categories.map((e) => /* @__PURE__ */ (0, Q.jsx)(Sa, {
========
							children: /* @__PURE__ */ (0, Q.jsx)(ma, { storage: n })
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-col pl-4",
							children: f.categories.map((e) => /* @__PURE__ */ (0, Q.jsx)(Ca, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
								category: e,
								selected: o.has(e.key),
								disabled: x,
								onToggle: S(e.key)
							}, e.key))
						})]
					}) : n.job.state === "measuring" ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: "统计后显示各类数据的占用，并可清理缓存与旧备份。" }),
					n.relocation.available ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: n.relocation.message }),
					!n.relocation.available && n.relocation.steps?.length ? /* @__PURE__ */ (0, Q.jsx)(tt, {
						label: "在宿主机上迁移",
						steps: n.relocation.steps
					}) : null,
					n.job.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: n.job.message }) : null,
					c.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: c.error }) : null,
					v && _ ? _.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(k, { children: _.message }) : /* @__PURE__ */ (0, Q.jsx)(N, { children: [_.message, ..._.notes ?? []].join("；") }) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(M, {
				status: b ? /* @__PURE__ */ (0, Q.jsx)("p", {
					role: i ? "status" : void 0,
					children: b
				}) : null,
				children: [
					f ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: x || !m.length,
						...K(n.job.state === "cleaning" && m.length > 0),
						onClick: () => h(m, "清理所选数据"),
						children: "清理所选"
					}), /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: x || !p.length,
						onClick: () => h(p, "清理全部可清理的数据"),
						children: "全部清理"
					})] }) : null,
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: x || !n.relocation.available || !f,
						onClick: g,
						...K(c.busy === "relocate"),
						children: "更改位置"
					}),
					/* @__PURE__ */ (0, Q.jsx)(E, {
						disabled: !!i || n.job.state === "cleaning",
						onClick: d,
						...K(c.busy === "measure" || n.job.state === "measuring"),
						children: f ? "重新统计" : "统计占用"
					})
				]
			})
		]
	});
}
// src/react/settings/maintenance-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var wa = [
========
var Ta = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	["6", "每 6 小时"],
	["24", "每天"],
	["168", "每周"]
];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ta({ data: e, receipt: t, reopenTutorial: n, panel: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...dr(r),
		children: [
			e.storage ? /* @__PURE__ */ (0, Q.jsx)(Ca, {
				initial: e.storage,
				receipt: t
			}) : null,
			e.storage ? /* @__PURE__ */ (0, Q.jsx)(Lr, { receipt: t }) : null,
========
function Ea({ data: e, receipt: t, reopenTutorial: n, panel: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...fr(r),
		children: [
			e.storage ? /* @__PURE__ */ (0, Q.jsx)(wa, {
				initial: e.storage,
				receipt: t
			}) : null,
			e.storage ? /* @__PURE__ */ (0, Q.jsx)(Rr, { receipt: t }) : null,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			e.remote_reporting || e.library_sharing ? /* @__PURE__ */ (0, Q.jsxs)(L, {
				id: "librarySharing",
				guide: "reporting",
				title: "数据上传",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: [e.remote_reporting ? /* @__PURE__ */ (0, Q.jsx)(Br, {
========
				children: [e.remote_reporting ? /* @__PURE__ */ (0, Q.jsx)(Vr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					initial: e.remote_reporting,
					receipt: t
				}) : null, e.library_sharing ? /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "border-t border-separator-border",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					children: /* @__PURE__ */ (0, Q.jsx)(Rr, {
========
					children: /* @__PURE__ */ (0, Q.jsx)(zr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						initial: e.library_sharing,
						receipt: t
					})
				}) : null]
			}) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(Oa, { facts: e.facts }),
			/* @__PURE__ */ (0, Q.jsx)(Ea, {
				receipt: t,
				reopenTutorial: n
			}),
			e.uninstall ? /* @__PURE__ */ (0, Q.jsx)(ka, {
========
			/* @__PURE__ */ (0, Q.jsx)(ka, { facts: e.facts }),
			/* @__PURE__ */ (0, Q.jsx)(Da, {
				receipt: t,
				reopenTutorial: n
			}),
			e.uninstall ? /* @__PURE__ */ (0, Q.jsx)(Aa, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				uninstall: e.uninstall,
				receipt: t
			}) : null
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ea({ reopenTutorial: e }) {
========
function Da({ reopenTutorial: e }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsx)("section", {
		"aria-label": "新手教程",
		className: "w-full",
		children: /* @__PURE__ */ (0, Q.jsx)(zt, { children: /* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
			label: "新手教程",
			description: "在所有设备上恢复右上角教程入口，保留已读进度",
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => void e(),
				children: "重新打开"
			})
		}) }) })
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Da({ initial: e, receipt: t }) {
========
function Oa({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e.mode), [i, a] = (0, Z.useState)(e.interval_hours), o = Y(e.error), s = (r) => {
		r.preventDefault(), e.available && o.run("save", (e) => G("/api/configuration/automatic-updates", {
			mode: n,
			interval_hours: i
		}, "POST", e), () => t("已保存配置"));
	}, c = e.available ? e.download_available ? "下载完成后在这里确认重启安装。" : void 0 : "自动更新需要由托盘管理的服务。";
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "automaticUpdates",
		guide: "automatic-updates",
		title: "自动更新",
		onSubmit: s,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(I, { children: [
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "自动检查新版本",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "自动检查新版本",
						isSelected: n !== "off",
						isDisabled: !e.available,
						onChange: (e) => r(e ? "check" : "off")
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "自动下载更新",
					description: "发现新版本后先下载，重启安装前会询问。",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "自动下载更新",
						isSelected: n === "download",
						isDisabled: !e.available || !e.download_available || n === "off",
						onChange: (e) => r(e ? "download" : "check")
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "检查频率",
					description: c,
					children: /* @__PURE__ */ (0, Q.jsx)(R, {
						"aria-label": "检查频率",
						selectedKey: String(i),
						isDisabled: !e.available,
						onSelectionChange: (e) => {
							e !== null && a(Number(e));
						},
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
						children: wa.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
========
						children: Ta.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
							id: e,
							children: t
						}, e))
					})
				})
			] }),
			o.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: o.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !e.available,
				...K(o.busy === "save"),
				children: "保存配置"
			}) })
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Oa({ facts: e }) {
========
function ka({ facts: e }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsx)(L, {
		guide: "facts",
		title: "运行信息",
		children: /* @__PURE__ */ (0, Q.jsx)(ut, { children: e.map((e) => /* @__PURE__ */ (0, Q.jsxs)(j, {
			term: e.term,
			children: [e.value, e.download_url ? /* @__PURE__ */ (0, Q.jsx)(A, {
				href: e.download_url,
				children: e.download_label
			}) : null]
		}, e.term)) })
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ka({ uninstall: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(!1), [i, a] = (0, Z.useState)(""), o = () => void rn({
========
function Aa({ uninstall: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(!1), [i, a] = (0, Z.useState)(""), o = () => void nn({
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		title: "卸载 Peach",
		danger: !0,
		body: n ? "将退出 Peach，移除程序、开机自启、桌面图标、设置、本地数据库、观看记录、凭据和缓存。原始媒体文件保留。" : "将退出 Peach 并移除程序、开机自启和桌面图标。设置、本地数据库、观看记录与缓存保留。",
		confirmLabel: "卸载 Peach",
		onConfirm: async () => {
			let e = await G("/api/configuration/uninstall", {
				delete_data: n,
				confirmation: "卸载 Peach"
			});
			a(e.message);
		}
	}), s = i || e.message, c = [.../* @__PURE__ */ new Set([e.data_root, ...e.directories])];
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "uninstallPeach",
		guide: "uninstall",
		title: "卸载 Peach",
		children: [
			e.available ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, { children: "卸载移除 Peach 程序本身，原始媒体文件保留。" }) }) : null,
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "完全卸载",
				description: "同时删除设置、本地数据库、观看记录、凭据和缓存",
				children: /* @__PURE__ */ (0, Q.jsx)(U, {
					"aria-label": "完全卸载",
					isSelected: n,
					isDisabled: !e.full_available || !!i,
					onChange: r
				})
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, {
					summary: "数据目录",
					children: c.map((e) => /* @__PURE__ */ (0, Q.jsx)(kt, {
						path: e,
						className: "text-body-2-regular text-text-secondary",
						onRevealed: t
					}, e))
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(M, {
				status: s ? /* @__PURE__ */ (0, Q.jsx)("p", {
					role: i ? "status" : void 0,
					children: s
				}) : null,
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "danger",
					disabled: !e.available || !!i,
					onClick: o,
					children: "卸载 Peach"
				})
			})
		]
	});
}
// src/react/settings/docker-update.tsx
var Aa = 3e3, ja = 9e5;
function Ma(e) {
	let [t, n] = (0, Z.useState)({ state: "idle" }), r = Y(), i = (0, Z.useRef)(0);
	return (0, Z.useEffect)(() => {
		if (t.state !== "updating") return;
		let r = new AbortController(), a, o = async () => {
			try {
				let t = (await W("/api/client-updates", r.signal)).runtime?.version;
				if (!r.signal.aborted && t && t !== e) {
					n({
						state: "done",
						version: t
					});
					return;
				}
			} catch {}
			r.signal.aborted || (Date.now() - i.current > ja ? n({ state: "timeout" }) : a = setTimeout(o, Aa));
		};
		return a = setTimeout(o, Aa), () => {
			r.abort(), clearTimeout(a);
		};
	}, [t.state, e]), {
		job: t,
		run: () => r.run("docker-update", (e) => G("/api/configuration/docker-update", {}, "POST", e), () => {
			i.current = Date.now(), n({ state: "updating" });
		}),
		busy: r.busy === "docker-update",
		error: r.error
	};
}
function Na({ job: e }) {
	return e.state === "updating" ? /* @__PURE__ */ (0, Q.jsx)(N, {
		role: "status",
		children: "Watchtower 正在拉取新镜像并重建容器。期间 Peach 会断开一会儿，新版本启动后这里会提示刷新。"
	}) : e.state === "done" ? /* @__PURE__ */ (0, Q.jsxs)(N, {
		role: "status",
		children: [
			"已更新到 Peach ",
			e.version,
			"，刷新页面即可使用。"
		]
	}) : e.state === "timeout" ? /* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(k, { children: "15 分钟内没有看到新版本启动。在 compose.yaml 所在目录查看 Watchtower 与 Peach 的日志：" }), /* @__PURE__ */ (0, Q.jsx)(tt, {
		label: "查看更新日志",
		steps: [{
			text: "Watchtower 的拉取与重建记录",
			command: "docker compose logs watchtower"
		}, {
			text: "Peach 的启动与数据库迁移记录",
			command: "docker compose logs peach"
		}]
	})] }) : null;
}
// src/react/settings/release-updates.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Pa = /* @__PURE__ */ new Set([
========
var ja = /* @__PURE__ */ new Set([
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	"downloading",
	"verifying",
	"extracting",
	"preparing",
	"restarting",
	"installing"
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
]), Fa = [
	65,
	75,
	90
], Ia = 120, La = "https://github.com/peach-mitao/peach/releases";
function Ra({ initial: e, initialJob: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(t || {
		state: "idle",
		progress: 0
	}), [o, s] = (0, Z.useState)(""), c = Y(), l = (0, Z.useRef)(!1), u = (0, Z.useRef)(!0), d = Pa.has(i.state), f = Ma(e.current_version), p = n.state === "available" && !!n.one_click?.available, m = f.job.state === "updating", h = () => void rn({
		title: "一键更新",
		body: `Watchtower 会拉取 Peach ${n.latest_version || ""} 的镜像并重建容器，/data 数据卷保留。重建期间 Peach 暂时断开，进行中的任务在启动后续跑；有待执行的数据库迁移时，启动前先备份再迁移。`,
		confirmLabel: "开始更新",
		cancelLabel: "取消",
		onConfirm: f.run
	});
========
]), Ma = [
	65,
	75,
	90
], Na = 120, Pa = "https://github.com/peach-mitao/peach/releases";
function Fa({ initial: e, initialJob: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(t || {
		state: "idle",
		progress: 0
	}), [o, s] = (0, Z.useState)(""), c = Y(), l = (0, Z.useRef)(!1), u = (0, Z.useRef)(!0), d = ja.has(i.state);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	(0, Z.useEffect)(() => (u.current = !0, () => {
		u.current = !1;
	}), []);
	let g = async () => {
		let e = await G("/api/configuration/update-restart", {});
		u.current && a(e);
	}, _ = () => void rn({
		title: "更新已准备好",
		body: `Peach ${i.version || ""} 将在重启后安装。`,
		confirmLabel: "立即重启",
		cancelLabel: "稍后",
		onConfirm: g
	});
	(0, Z.useEffect)(() => {
		i.state !== "ready" || l.current || (l.current = !0, _());
	}, [i.state]), (0, Z.useEffect)(() => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		let e = new AbortController(), t = Pa.has(i.state) ? 1e3 : 3e4, n, o = 0, c = async () => {
========
		let e = new AbortController(), t = ja.has(i.state) ? 1e3 : 3e4, n, o = 0, c = async () => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			try {
				let t = await W("/api/configuration/update-status", e.signal);
				if (e.signal.aborted) return;
				a(t), o = 0, t.state === "complete" && r((e) => ({
					...e,
					current_version: t.version || e.current_version,
					state: "current",
					message: "已是最新测试版。"
				}));
				let n = await W("/api/configuration/automatic-updates", e.signal);
				!e.signal.aborted && n.result && r(n.result);
			} catch {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				o += 1, o >= Ia && !e.signal.aborted && s("尚未连接到 Peach，请检查托盘后刷新页面。");
			}
			!e.signal.aborted && o < Ia && (n = setTimeout(c, t));
========
				o += 1, o >= Na && !e.signal.aborted && s("尚未连接到 Peach，请检查托盘后刷新页面。");
			}
			!e.signal.aborted && o < Na && (n = setTimeout(c, t));
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		};
		return n = setTimeout(c, t), () => {
			e.abort(), clearTimeout(n);
		};
	}, [i.state]);
	let v = () => {
		d || (l.current = !1, s(""), c.run("download", (e) => G("/api/configuration/update", {}, "POST", e), a));
	}, y = () => void c.run("check", (e) => W("/api/configuration/updates", e), r, (t) => {
		r({
			...e,
			state: "error"
		}), c.setError(q(t));
	}), b = c.error || o || f.error, x = i.state === "downloading" && i.total ? `${((i.downloaded || 0) / 1048576).toFixed(1)} / ${(i.total / 1048576).toFixed(1)} MB` : `${i.progress}%`;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "releaseUpdates",
		guide: "updates",
		title: "检查更新",
		aside: /* @__PURE__ */ (0, Q.jsx)(H, {
			tone: b || n.state === "error" || i.state === "error" || f.job.state === "timeout" ? "error" : d || m ? "progress" : f.job.state === "done" ? "success" : n.state === "available" ? "warning" : n.state === "unchecked" ? "neutral" : "success",
			children: b || n.state === "error" || i.state === "error" ? "检查未完成" : f.job.state === "timeout" ? "更新未完成" : d ? "准备更新中" : m ? "正在更新" : f.job.state === "done" ? "已更新" : i.state === "ready" ? "可安装" : n.state === "available" ? "有可用更新" : n.state === "unchecked" ? "尚未检查" : "检查完成"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(ut, { children: [
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "当前版本",
					children: f.job.state === "done" ? f.job.version : n.current_version
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "安装方式",
					children: n.installation
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "更新通道",
					children: n.channel
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "最新版本",
					children: n.latest_version || "未取得"
				}),
				n.package_kind ? /* @__PURE__ */ (0, Q.jsxs)(j, {
					term: "下载内容",
					children: [n.package_kind === "update" ? "应用更新包" : n.package_kind === "installer" ? "macOS 安装镜像" : "应用与工具", n.asset_size ? ` · ${(n.asset_size / 1048576).toFixed(1)} MB` : ""]
				}) : null
			] }),
			n.package_kind === "update" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "应用更新包复用已安装工具；工具缺失、损坏或版本变化时会另行下载所需工具包。" }) : n.package_kind === "full" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "本次更新包含媒体工具。" }) : n.package_kind === "installer" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "下载后打开镜像，把 Peach 拖入「应用程序」替换旧版本，数据目录与设置保留；提示已损坏时按发布页说明移除隔离标记。" }) : null,
			n.state === "unchecked" && !n.checked_at && !b && i.state === "idle" ? null : /* @__PURE__ */ (0, Q.jsxs)(V, {
				divided: !0,
				children: [
					n.checked_at ? /* @__PURE__ */ (0, Q.jsxs)(N, { children: ["检查于 ", (/* @__PURE__ */ new Date(n.checked_at * 1e3)).toLocaleString()] }) : null,
					f.job.state === "done" ? null : n.state === "available" && !b ? /* @__PURE__ */ (0, Q.jsx)(F, {
						tone: "info",
						title: "有可用更新",
						children: n.message
					}) : b || n.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(k, { children: b || n.message }) : n.state === "unchecked" ? null : /* @__PURE__ */ (0, Q.jsx)(N, {
						role: "status",
						children: n.message
					}),
					n.state === "available" && !b && !p && f.job.state === "idle" && n.steps?.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(tt, {
						label: "在宿主机上更新",
						steps: n.steps
					}), /* @__PURE__ */ (0, Q.jsx)(N, { children: n.one_click?.reason || "用 compose 的 watchtower profile 启动 Watchtower 后，可以在这里一键更新，启用前先读 Docker 部署说明。" })] }) : null,
					/* @__PURE__ */ (0, Q.jsx)(Na, { job: f.job }),
					i.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(k, { children: i.message }) : null,
					i.state !== "idle" && i.state !== "error" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(jt, {
								label: "更新准备进度",
								value: i.progress,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
								stops: Fa
========
								stops: Ma
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
							}),
							/* @__PURE__ */ (0, Q.jsxs)(N, { children: ["下载 → 校验 → 解压 → 准备安装 · ", i.message] }),
							/* @__PURE__ */ (0, Q.jsx)(N, { children: x })
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(M, {
				status: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(A, {
							href: "https://peach.video/#download",
							children: "官网"
						}),
						/* @__PURE__ */ (0, Q.jsx)(A, {
							href: "https://github.com/peach-mitao/peach",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, Q.jsx)(A, {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
							href: n.release_url || La,
========
							href: n.release_url || Pa,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
							children: "查看发布页"
						})
					]
				}),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: i.state === "ready" || p || n.state === "available" && n.installation === "独立测试包" ? "secondary" : "primary",
						disabled: d || m,
						onClick: y,
						...K(c.busy === "check"),
						children: "检查更新"
					}),
					f.job.state === "done" ? /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "primary",
						onClick: () => window.location.reload(),
						children: "刷新页面"
					}) : p ? /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "primary",
						onClick: h,
						...K(m || f.busy),
						children: "一键更新"
					}) : null,
					n.state === "available" && n.in_app_update && i.state !== "ready" ? /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "primary",
						onClick: v,
						...K(d || c.busy === "download"),
						children: "下载并安装"
					}) : n.state === "available" && n.installation === "独立测试包" && n.asset_url ? /* @__PURE__ */ (0, Q.jsx)(Je, {
						variant: "primary",
						href: n.asset_url,
						children: "下载新版本"
					}) : null,
					i.state === "ready" ? /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "primary",
						onClick: _,
						children: "重启安装"
					}) : null
				]
			})
		]
	});
}
// src/react/settings/upgrade-repairs.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var za = {
========
var Ia = {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	pending: "等待修复",
	running: "正在修复",
	failed: "需要重试",
	review: "需要复核",
	complete: "已完成",
	unavailable: "当前部署未启用"
};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ba() {
	let { snapshot: e } = Bn(), [t, n] = (0, Z.useState)(null), r = Y();
========
function La() {
	let { snapshot: e } = zn(), [t, n] = (0, Z.useState)(null), r = Y();
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	(0, Z.useEffect)(() => n(null), [e]);
	let i = t ?? e?.repairs, a = i?.state || "pending", o = i?.items.reduce((e, t) => e + (t.pending || 0), 0) || 0, s = i?.items.reduce((e, t) => e + (t.failed || 0), 0) || 0, c = i?.items.reduce((e, t) => e + (t.review_count || 0), 0) || 0;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "upgradeRepairs",
		title: "自动修复",
		aside: /* @__PURE__ */ (0, Q.jsx)(H, {
			tone: a === "failed" ? "error" : a === "running" ? "progress" : a === "review" ? "warning" : a === "complete" ? "success" : "neutral",
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-copy-key": `upgradeRepairs.${a}.status`,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: za[a] || "未取得"
========
				children: Ia[a] || "未取得"
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			}, a)
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, { children: "升级后自动修正资料、更新缓存。" }) }),
			/* @__PURE__ */ (0, Q.jsxs)(ut, { children: [
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "待完成",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Hr, { value: o }), " 项"] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "失败",
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Hr, { value: s }), " 项"] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "待复核",
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Hr, { value: c }), " 项"] })
========
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Ur, { value: o }), " 项"] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "失败",
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Ur, { value: s }), " 项"] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "待复核",
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Ur, { value: c }), " 项"] })
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				})
			] }),
			i?.message || r.error ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: r.error || i?.message }) }) : null,
			a === "running" ? /* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: "资料与预览正在后台补全。" }), /* @__PURE__ */ (0, Q.jsx)(Wt, {})] }) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, {
				status: c ? /* @__PURE__ */ (0, Q.jsx)(A, {
					href: "/api/configuration/upgrade-repairs/review",
					children: "下载复核记录"
				}) : void 0,
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					size: "small",
					variant: "secondary",
					disabled: !i?.available || a === "running" || !!r.busy || !s && a !== "failed",
					onClick: () => void r.run("retry", (e) => G("/api/configuration/upgrade-repairs/retry", {}, "POST", e), (e) => {
						n(e), document.dispatchEvent(new Event("peach:client-updates"));
					}),
					children: "重试失败项"
				})
			})
		]
	});
}
// src/react/settings/general-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Va({ data: e, receipt: t, panel: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...dr(n),
		children: [
			e.updates ? /* @__PURE__ */ (0, Q.jsx)(Ra, {
				initial: e.updates,
				initialJob: e.update_job
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(Ba, {}),
			e.automatic_updates ? /* @__PURE__ */ (0, Q.jsx)(Da, {
				initial: e.automatic_updates,
				receipt: t
			}) : null,
			e.startup ? /* @__PURE__ */ (0, Q.jsx)(Ha, {
========
function Ra({ data: e, receipt: t, panel: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...fr(n),
		children: [
			e.updates ? /* @__PURE__ */ (0, Q.jsx)(Fa, {
				initial: e.updates,
				initialJob: e.update_job
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(La, {}),
			e.automatic_updates ? /* @__PURE__ */ (0, Q.jsx)(Oa, {
				initial: e.automatic_updates,
				receipt: t
			}) : null,
			e.startup ? /* @__PURE__ */ (0, Q.jsx)(za, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				startup: e.startup,
				receipt: t
			}) : null
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ha({ startup: e, receipt: t }) {
========
function za({ startup: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e.enabled), [i, a] = (0, Z.useState)(e.silent), [o, s] = (0, Z.useState)(e.desktop), c = Y(), l = e.available && !e.desktop_message;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "startup",
		title: "开机自启",
		onSubmit: (r) => {
			r.preventDefault(), e.available && c.run("save", (e) => G("/api/configuration/startup", {
				enabled: n,
				silent: i,
				desktop: o
			}, "POST", e), () => t("已保存配置"));
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(I, { children: [
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "开机后启动 Peach",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "开机后启动 Peach",
						isSelected: n,
						isDisabled: !e.available,
						onChange: r
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "只启动托盘，不打开网页",
					description: "开机后在后台运行，需要时从托盘打开页面。",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "只启动托盘，不打开网页",
						isSelected: i,
						isDisabled: !e.available || !n,
						onChange: a
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "在桌面创建快捷方式",
					description: e.desktop_message || void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "在桌面创建快捷方式",
						isSelected: o,
						isDisabled: !l,
						onChange: s
					})
				})
			] }),
			e.message || c.error ? /* @__PURE__ */ (0, Q.jsxs)(V, {
				divided: !0,
				children: [e.message ? /* @__PURE__ */ (0, Q.jsx)(N, { children: e.message }) : null, c.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: c.error }) : null]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !e.available,
				...K(c.busy === "save"),
				children: "保存配置"
			}) })
		]
	});
}
// src/react/restart-redirect.ts
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Ua = 8e3, Wa = [
========
var Ba = 8e3, Va = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	{
		name: "机械硬盘，或内存 8 GB 以内",
		cache: "10–20 GiB",
		read: "256 / 128 KB",
		task: "1 个"
	},
	{
		name: "SATA SSD，内存 8–16 GB",
		cache: "20–50 GiB",
		read: "256 / 128 KB",
		task: "1–2 个"
	},
	{
		name: "NVMe SSD，内存 16 GB 以上",
		cache: "50–100 GiB",
		read: "256 / 128 KB",
		task: "2 个起步"
	}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
], Ga = [
========
], Ha = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	["cache", "缓存上限"],
	["read", "读取长度（默认 / 最小）"],
	["task", "同时处理视频"]
];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ka() {
========
function Ua() {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "@container flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)(O, {
			summary: "CloudDrive 设置帮助",
			children: [
				/* @__PURE__ */ (0, Q.jsxs)(N, { children: ["先将 CloudDrive2 或 OpenList 中的网盘挂载为本机文件夹，再在这里选择。", /* @__PURE__ */ (0, Q.jsx)(A, {
					href: "https://www.clouddrive2.com/help.html",
					children: "挂载帮助"
				})] }),
				/* @__PURE__ */ (0, Q.jsx)(N, { children: "缓存按所在硬盘和可用内存选起步值，再根据播放表现调整。" }),
				/* @__PURE__ */ (0, Q.jsx)(N, { children: "文件操作需要挂载工具和网盘账号授予写入权限。光鸭云盘的上传、建文件夹、改名和移动需要 CloudDrive2 v1.1.0 或更高版本，删除和复制暂不支持。" }),
				/* @__PURE__ */ (0, Q.jsx)("ul", {
					"aria-label": "按缓存所在硬盘分档",
					className: "flex flex-col gap-2",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					children: Wa.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
========
					children: Va.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						className: "flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
						children: [/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-body-medium text-text-primary",
							children: e.name
						}), /* @__PURE__ */ (0, Q.jsx)("dl", {
							className: "inline-grid grid-cols-1 gap-2 @md:grid-cols-3",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
							children: Ga.map(([t, n]) => /* @__PURE__ */ (0, Q.jsxs)("div", {
========
							children: Ha.map(([t, n]) => /* @__PURE__ */ (0, Q.jsxs)("div", {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, Q.jsx)("dt", {
									className: "text-caption-1-regular text-text-secondary",
									children: n
								}), /* @__PURE__ */ (0, Q.jsx)("dd", {
									className: "text-body-regular text-text-primary",
									children: e[t]
								})]
							}, t))
						})]
					}, e.name))
				}),
				/* @__PURE__ */ (0, Q.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("li", { children: "缓存上限和清理方式填在 CloudDrive「设置」里，清理方式选 LRU。上限不要填 0，系统盘至少留 40 GiB；填完重开设置页确认存住了。" }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: "读取长度和下载线程填在每个网盘各自的下载设置里，线程都从 2 开始。" }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: "Buffer Cache 占内存，磁盘缓存和文件夹缓存占硬盘，改一个管不住另外两个。" })
					]
				}),
				/* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(A, {
					href: "https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md",
					children: "完整配置与调优说明"
				}) })
			]
		})
	});
}
// src/react/settings/cloud-proxy-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var qa = "/api/configuration/cloud-proxies", Ja = [
========
var Wa = "/api/configuration/cloud-proxies", Ga = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	["direct", "直连"],
	["system", "跟随系统"],
	["http", "HTTP 代理"],
	["socks5", "SOCKS5 代理"]
];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ya({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(!0), a = (0, Z.useRef)(/* @__PURE__ */ new Set()), o = (0, Z.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, Z.useState)(!1), l = (0, Z.useRef)(() => void 0), u = Y(), d = () => {
		o.current.size || u.run("refresh", (e) => W(qa, e), (e) => {
========
function Ka({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(!0), a = (0, Z.useRef)(/* @__PURE__ */ new Set()), o = (0, Z.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, Z.useState)(!1), l = (0, Z.useRef)(() => void 0), u = Y(), d = () => {
		o.current.size || u.run("refresh", (e) => W(Wa, e), (e) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			a.current.clear(), n(e), i(!1);
		}, (e) => {
			i(!1), u.setError(e instanceof Error ? e.message : "无法读取网盘代理");
		});
	};
	return l.current = d, (0, Z.useEffect)(() => {
		l.current();
		let e = () => {
			a.current.size || l.current();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, []), (0, Z.useEffect)(() => {
		if (!t) return;
		let e = (e) => e.mode === "http" || e.mode === "socks5";
		An("cloudProxy", {
			configured: t.configured !== !1,
			unlinked: t.unlinked?.length ?? 0,
			accounts: t.accounts.map((t) => [e(t.data), e(t.api)])
		});
	}, [t]), r ? /* @__PURE__ */ (0, Q.jsx)(It, {
		label: "正在读取网盘代理",
		html: en
	}) : /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "cloud-proxy",
		title: "CloudDrive 代理",
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: Xe }), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				u.error ? /* @__PURE__ */ (0, Q.jsxs)(F, {
					tone: "error",
					title: "没有读取配置",
					children: [
						u.error,
						" ",
						/* @__PURE__ */ (0, Q.jsx)(_t, {
							href: "/settings/downloads",
							size: "small",
							children: "下载设置"
						})
					]
				}) : null,
				t?.configured === !1 ? /* @__PURE__ */ (0, Q.jsxs)(N, { children: ["填写 CloudDrive2 地址和 API 令牌后，在这里设置各网盘账号的代理。 ", /* @__PURE__ */ (0, Q.jsx)(_t, {
					href: "/settings/downloads",
					size: "small",
					children: "下载设置"
				})] }) : t?.accounts.length === 0 && !t.unlinked?.length ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "还没有使用 CloudDrive 的媒体库。" }) : null,
				t?.unlinked?.map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(dt, { children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-2",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
						children: [/* @__PURE__ */ (0, Q.jsx)(Ht, { mark: ir(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, Q.jsx)(N, { children: "尚未匹配 CloudDrive 账号" })]
				}, e.root)),
				t?.accounts.map((t) => /* @__PURE__ */ (0, Q.jsx)(Xa, {
========
						children: [/* @__PURE__ */ (0, Q.jsx)(Vt, { mark: ar(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, Q.jsx)(N, { children: "尚未匹配 CloudDrive 账号" })]
				}, e.root)),
				t?.accounts.map((t) => /* @__PURE__ */ (0, Q.jsx)(qa, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					initial: t,
					receipt: e,
					onDirty: () => a.current.add(t.id),
					onSaving: (e) => {
						e ? o.current.add(t.id) : o.current.delete(t.id), c(!!o.current.size);
					},
					onSaved: (e) => {
						a.current.delete(e.id), n((t) => t && {
							...t,
							accounts: t.accounts.map((t) => t.id === e.id ? e : t)
						});
					}
				}, t.id + t.revision))
			]
		})] }), /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			disabled: s,
			onClick: d,
			...K(u.busy === "refresh"),
			children: "重新读取"
		}) })]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Xa({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
========
function qa({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)([]), l = a.libraries?.map((e) => e.name).join("、") || a.name, u = Y(), d = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), c((t) => t.includes(e) ? t : [...t, e]), n();
	};
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		"aria-label": `${l} 代理`,
		onSubmit: (e) => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			e.preventDefault(), i(!0), u.run("save", (e) => G(qa, {
========
			e.preventDefault(), i(!0), u.run("save", (e) => G(Wa, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				id: a.id,
				revision: a.revision,
				...s.includes("api") ? { api: a.api } : {},
				...s.includes("data") ? { data: a.data } : {}
			}, "POST", e), (e) => {
				o(e), c([]), r(e), t("已保存 CloudDrive 代理");
			}).finally(() => i(!1));
		},
		className: "flex min-w-0 flex-col gap-4 border-t border-separator-border pt-4",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(dt, { children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "inline-flex items-center gap-2",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: [/* @__PURE__ */ (0, Q.jsx)(Ht, { mark: ir(a.libraries?.[0]?.location || (a.cloud === "115open" ? "115" : a.cloud.toLowerCase())) }), l]
========
				children: [/* @__PURE__ */ (0, Q.jsx)(Vt, { mark: ar(a.libraries?.[0]?.location || (a.cloud === "115open" ? "115" : a.cloud.toLowerCase())) }), l]
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			}) }),
			/* @__PURE__ */ (0, Q.jsxs)(N, { children: [
				a.name,
				" · ",
				a.path
			] }),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(Za, {
========
			/* @__PURE__ */ (0, Q.jsx)(Ja, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				label: "数据代理",
				value: a.data,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("data", e)
			}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(Za, {
========
			/* @__PURE__ */ (0, Q.jsx)(Ja, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				label: "API 代理",
				value: a.api,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("api", e)
			}),
			a.writable ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: "API 令牌需要“修改云盘”权限才能保存。" }),
			u.error ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "没有保存",
				children: u.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					type: "submit",
					disabled: !a.writable || !s.length,
					...K(u.busy === "save"),
					children: "保存配置"
				})
			})
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Za({ label: e, value: t, disabled: n, onChange: r }) {
========
function Ja({ label: e, value: t, disabled: n, onChange: r }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let i = t.mode === "http" || t.mode === "socks5";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(dt, { children: e }),
			/* @__PURE__ */ (0, Q.jsxs)(R, {
				"aria-label": e,
				selectedKey: t.mode,
				isDisabled: n,
				onSelectionChange: (e) => {
					e && r({
						...t,
						mode: String(e)
					});
				},
				children: [t.mode === "unknown" ? /* @__PURE__ */ (0, Q.jsx)(z, {
					id: "unknown",
					children: "无法识别的代理类型"
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				}) : null, Ja.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
========
				}) : null, Ga.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					id: e,
					children: t
				}, e))]
			}),
			i ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)(P, {
					className: "min-w-40 flex-1",
					label: `${e}地址`,
					value: t.host,
					autoComplete: "off",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						host: e
					})
				}), /* @__PURE__ */ (0, Q.jsx)(P, {
					className: "w-full sm:w-28",
					label: `${e}端口`,
					value: t.port ? String(t.port) : "",
					inputMode: "numeric",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						port: Number(e)
					})
				})]
			}), /* @__PURE__ */ (0, Q.jsxs)(O, {
				summary: "代理认证",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(P, {
						label: `${e}用户名`,
						value: t.username,
						autoComplete: "off",
						isDisabled: n,
						onChange: (e) => r({
							...t,
							username: e
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(P, {
						label: `${e}密码`,
						type: "password",
						value: t.password || "",
						autoComplete: "new-password",
						isDisabled: n,
						placeholder: t.password_set ? "已保存，留空不改" : "可选",
						onChange: (e) => r({
							...t,
							password: e
						})
					}),
					t.password_set ? /* @__PURE__ */ (0, Q.jsx)(D, {
						isSelected: !!t.clear_password,
						isDisabled: n,
						onChange: (e) => r({
							...t,
							clear_password: e
						}),
						children: "清除已保存的密码"
					}) : null
				]
			})] }) : null
		]
	});
}
// src/react/settings/library-icon-picker.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Qa = [
========
var Ya = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	["", "自动识别"],
	["hard-drive", "磁盘"],
	["database", "资料库"],
	["heart", "心动"],
	["heart-hand", "亲密"],
	["flame", "热情"],
	["cherry", "樱桃"],
	["lollipop", "甜心"],
	["candy", "糖果"],
	["banana", "香蕉"],
	["droplets", "湿润"],
	["venus", "女性"],
	["mars", "男性"],
	["venus-and-mars", "情侣"],
	["gem", "精选"],
	["crown", "女王"],
	["ribbon", "丝带"],
	["shirt", "制服"],
	["graduation-cap", "学生"],
	["stethoscope", "护士"],
	["glasses", "眼镜"],
	["footprints", "足迹"],
	["hand", "手部"],
	["flower", "花朵"],
	["venetian-mask", "角色扮演"],
	["rabbit", "兔女郎"],
	["paw-print", "兽耳"],
	["dumbbell", "健身"],
	["bed-double", "卧室"],
	["bath", "浴室"],
	["key-round", "私密"],
	["wine", "微醺"],
	["cigarette", "烟"],
	["moon", "夜色"],
	["sparkles", "幻想"],
	["camera", "写真"],
	["video", "影片"],
	["film", "电影"],
	["image", "图集"],
	["gamepad-2", "游戏"],
	["star", "收藏"],
	["tags", "主题"]
];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function $a(e) {
	let t = e === "local" ? "" : St[e];
	return t ? [t, "自动识别"] : ["hard-drive", "默认"];
}
var eo = "auto";
function to({ value: e, label: t, kind: n = "local", onChange: r }) {
	let i = (0, Z.useRef)(null), [a, o] = (0, Z.useState)(!1), [s, c] = (0, Z.useState)(e), [l, u] = $a(n);
========
function Xa(e) {
	let t = e === "local" ? "" : xt[e];
	return t ? [t, "自动识别"] : ["hard-drive", "默认"];
}
var Za = "auto";
function Qa({ value: e, label: t, kind: n = "local", onChange: r }) {
	let i = (0, Z.useRef)(null), [a, o] = (0, Z.useState)(!1), [s, c] = (0, Z.useState)(e), [l, u] = Xa(n);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
		ref: i,
		variant: "secondary",
		className: "self-start",
		"aria-label": t,
		"aria-haspopup": "dialog",
		"aria-expanded": a,
		onClick: () => {
			c(e), o(!0);
		},
		children: /* @__PURE__ */ (0, Q.jsxs)("span", {
			"data-icon-choice": !0,
			className: "flex items-center gap-2",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			children: [/* @__PURE__ */ (0, Q.jsx)(Ht, { mark: e || l }), ((e) => e && Qa.find(([t]) => t === e)?.[1] || u)(e)]
========
			children: [/* @__PURE__ */ (0, Q.jsx)(Vt, { mark: e || l }), ((e) => e && Ya.find(([t]) => t === e)?.[1] || u)(e)]
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		})
	}), /* @__PURE__ */ (0, Q.jsx)(ze, {
		triggerRef: i,
		isOpen: a,
		onOpenChange: o,
		placement: "bottom start",
		offset: 4,
		className: Ct,
		children: /* @__PURE__ */ (0, Q.jsxs)(Ue, {
			"aria-label": `${t}可选图标`,
			className: "flex w-72 flex-col gap-3 outline-none",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(Le, {
					slot: "title",
					className: "px-1 text-body-medium text-text-primary",
					children: "选择媒体库图标"
				}),
				/* @__PURE__ */ (0, Q.jsx)(We, {
					"aria-label": "可选图标",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					value: s || eo,
					onChange: (e) => c(e === eo ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: Qa.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
						value: e || eo,
						"aria-label": e ? t : u,
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, Q.jsx)(Ht, { mark: e || l })
					}, e || eo))
========
					value: s || Za,
					onChange: (e) => c(e === Za ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: Ya.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
						value: e || Za,
						"aria-label": e ? t : u,
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, Q.jsx)(Vt, { mark: e || l })
					}, e || Za))
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-separator-border pt-2.5",
					children: [/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						onClick: () => o(!1),
						children: "取消"
					}), /* @__PURE__ */ (0, Q.jsx)(E, {
						disabled: s === e,
						onClick: () => {
							r(s), o(!1);
						},
						children: "应用"
					})]
				})
			]
		})
	})] });
}
// src/react/settings/library-policy-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var no = [
========
var $a = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	["probe", "读取视频信息"],
	["metadata", "联网补资料"],
	["cover", "联网补封面"],
	["people", "联网补人物图片"],
	["preview", "生成九宫格预览"]
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
], ro = [
========
], eo = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	"probe",
	"metadata",
	"cover",
	"people",
	"preview"
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
], io = [
========
], to = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	[
		"auto",
		"自动补全",
		"缺什么联网补什么"
	],
	[
		"local",
		"仅使用本地资料",
		"不联网，只用本地 NFO 和图片"
	],
	[
		"custom",
		"自定义",
		"逐项选择要做的步骤"
	]
];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ao() {
========
function no() {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-policy-legend": "",
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: Ot }), /* @__PURE__ */ (0, Q.jsxs)(O, {
			summary: "三种处理方式对比",
			children: [/* @__PURE__ */ (0, Q.jsxs)("table", {
				"data-policy-matrix": "",
				className: "text-body-2-regular",
				children: [/* @__PURE__ */ (0, Q.jsx)("thead", { children: /* @__PURE__ */ (0, Q.jsxs)("tr", { children: [/* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "col",
					children: /* @__PURE__ */ (0, Q.jsx)(He, { children: "步骤" })
				}), Tt.map((e) => /* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "col",
					children: e
				}, e))] }) }), /* @__PURE__ */ (0, Q.jsx)("tbody", { children: Dt.map(([e, ...t]) => /* @__PURE__ */ (0, Q.jsxs)("tr", { children: [/* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "row",
					children: e
				}), t.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("td", {
					"data-policy-cell": e === "✓" ? "on" : e === "—" ? "off" : "choice",
					children: e === "✓" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-label": "做",
						children: "✓"
					}) : e === "—" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-label": "不做",
						children: "—"
					}) : e
				}, Tt[t]))] }, e)) })]
			}), /* @__PURE__ */ (0, Q.jsx)(N, { children: Et })]
		})]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function oo({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(Rt, {
========
function ro({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(Lt, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		"data-guide-target": "library-policy",
		className: "w-full",
		"aria-label": `${e} 处理方式`,
		selectedKey: t,
		prefix: "处理方式",
		renderValue: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "truncate",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			children: io.find(([e]) => e === t)?.[1]
		}),
		onSelectionChange: (e) => n(String(e)),
		children: io.map(([e, t, n]) => /* @__PURE__ */ (0, Q.jsx)(z, {
========
			children: to.find(([e]) => e === t)?.[1]
		}),
		onSelectionChange: (e) => n(String(e)),
		children: to.map(([e, t, n]) => /* @__PURE__ */ (0, Q.jsx)(z, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			id: e,
			textValue: t,
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: t }), /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary whitespace-normal",
					children: n
				})]
			})
		}, e))
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function so({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(O, {
		defaultOpen: !0,
		summary: `${e} 的处理步骤（${t.length}/${no.length}）`,
========
function io({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(O, {
		defaultOpen: !0,
		summary: `${e} 的处理步骤（${t.length}/${$a.length}）`,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-wrap gap-x-6 gap-y-2",
			role: "group",
			"aria-label": `${e} 处理步骤`,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			children: no.map(([e, r]) => /* @__PURE__ */ (0, Q.jsx)(D, {
========
			children: $a.map(([e, r]) => /* @__PURE__ */ (0, Q.jsx)(D, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				isSelected: t.includes(e),
				onChange: (r) => n(r ? [...t, e] : t.filter((t) => t !== e)),
				children: r
			}, e))
		})
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function co({ id: e, name: t, value: n, onChange: r }) {
========
function ao({ id: e, name: t, value: n, onChange: r }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let i = (0, Z.useRef)(null), [a, o] = (0, Z.useState)(!1), s = Ke.find(([e]) => e === n)?.[1] || "无颜色", c = (t) => {
		r(t), Tn(e, t), o(!1);
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
		ref: i,
		type: "button",
		className: "text-body-medium",
		"data-glow-chip": "",
		"data-library-color-trigger": "",
		"aria-haspopup": "dialog",
		"aria-expanded": a,
		"aria-label": `${t || "未命名媒体库"} 来源色：${s}`,
		title: s,
		onClick: () => o(!0),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				"aria-hidden": !0,
				className: "text-text-tertiary",
				children: "来源色"
			}),
			n ? /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-glow-ball": "",
				"aria-hidden": "true",
				"data-accent-ball": n
			}) : /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-glow-ball": "",
				"data-library-none": "",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", { children: s })
		]
	}), /* @__PURE__ */ (0, Q.jsx)(Be, {
		getContainer: () => Cn(i.current),
		children: /* @__PURE__ */ (0, Q.jsx)(ze, {
			triggerRef: i,
			isOpen: a,
			onOpenChange: o,
			placement: "bottom start",
			offset: 8,
			containerPadding: 12,
			className: Ct,
			children: /* @__PURE__ */ (0, Q.jsxs)(Ue, {
				"aria-label": `${t || "未命名媒体库"} 来源色`,
				className: "outline-none",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "px-1 pb-2 text-body-medium text-text-primary",
					children: "选择来源色"
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-accent-grid": "",
					"data-library-colors": "",
					role: "group",
					children: [/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": !n,
						title: "无颜色",
						"aria-label": "无颜色",
						onClick: () => c(""),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-glow-ball": "",
							"data-library-none": "",
							"aria-hidden": "true"
						})
					}), Ke.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": e === n,
						title: t,
						"aria-label": t,
						onClick: () => c(e),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-glow-ball": "",
							"aria-hidden": "true",
							"data-accent-ball": e
						})
					}, e))]
				})]
			})
		})
	})] });
}
// src/react/settings/push-discovery-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var lo = "/api/configuration/push-discovery", uo = "/api/configuration/push-discovery/secret";
function fo({ initial: e, receipt: t }) {
========
var oo = "/api/configuration/push-discovery", so = "/api/configuration/push-discovery/secret";
function co({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.prefixes), [o, s] = (0, Z.useState)(""), c = Y(), l = n.media_roots, [u, d] = (0, Z.useState)(e), f = (e, n) => {
		r(e), d(e), a(e.prefixes), s(""), t(n);
	}, p = (e, t) => a((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), m = (e) => {
		e.preventDefault();
		let t = {
			enabled: n.enabled,
			watch_local: n.watch_local,
			cloud: n.cloud,
			prefixes: i
		};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		c.run("save", (e) => G(lo, t, "POST", e), (e) => f(e, "已保存配置"), (e) => s(q(e)));
	}, h = () => {
		c.run("secret", (e) => G(uo, {}, "POST", e), (e) => f(e, "已更换共享密钥"), (e) => s(q(e)));
========
		c.run("save", (e) => G(oo, t, "POST", e), (e) => f(e, "已保存配置"), (e) => s(q(e)));
	}, h = () => {
		c.run("secret", (e) => G(so, {}, "POST", e), (e) => f(e, "已更换共享密钥"), (e) => s(q(e)));
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	}, g = `已入库 ${u.queue.ingested} 个文件` + (u.queue.failed ? `，${u.queue.failed} 个入库失败` : "") + (u.queue.pending ? `，队列里还有 ${u.queue.pending} 条` : ""), _ = u.local_running ? `正在监视 ${u.local_roots.join("、")}` : u.local_message || "没有运行";
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "pushDiscovery",
		guide: "discovery",
		title: "自动发现新文件",
		onSubmit: m,
		children: [
			/* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: "本机监视"
				}), /* @__PURE__ */ (0, Q.jsx)(H, {
					tone: !u.enabled || !u.watch_local ? "neutral" : u.local_running ? "progress" : "warning",
					children: !u.enabled || !u.watch_local ? "未启用" : u.local_running ? "运行中" : "未运行"
				})]
			}) }),
			/* @__PURE__ */ (0, Q.jsxs)(I, { children: [
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "发现新文件后自动入库",
					description: u.enabled ? g : void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "发现新文件后自动入库",
						isSelected: n.enabled,
						isDisabled: !n.available,
						onChange: (e) => r({
							...n,
							enabled: e
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "监视本机文件夹",
					description: u.enabled && u.watch_local ? _ : void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "监视本机文件夹",
						isSelected: n.watch_local,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							watch_local: e
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "接收 CloudDrive2 通知",
					description: "网盘目录有变化时由 CloudDrive2 推送过来。",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "接收 CloudDrive2 通知",
						isSelected: n.cloud,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							cloud: e
						})
					})
				}),
				u.enabled && u.cloud ? /* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Webhook 配置",
					description: u.config_toml ? "贴进 CloudDrive2「设置 → Webhooks」，需要会员；更换密钥后要重贴。" : u.origin ? "还没有共享密钥，保存配置后生成。" : "要先有 CloudDrive2 能访问的局域网地址才能生成。"
				}) : null
			] }),
			u.enabled && u.queue.last_error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(F, {
					tone: "error",
					title: "最近一次入库失败",
					children: u.queue.last_error
				})
			}) : null,
			u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-col gap-3",
					children: /* @__PURE__ */ (0, Q.jsxs)(O, {
						summary: "查看配置",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
						children: [/* @__PURE__ */ (0, Q.jsx)(Yn, {
========
						children: [/* @__PURE__ */ (0, Q.jsx)(Xn, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
							code: u.config_toml,
							language: "toml",
							label: "CloudDrive2 配置",
							bounded: !1,
							copyLabel: "复制配置",
							onCopy: () => t("已复制 CloudDrive2 配置")
						}), /* @__PURE__ */ (0, Q.jsx)(N, { children: "Windows 桌面版粘贴后显示「无效」时，把这段存成 .toml 文件，放进 %LOCALAPPDATA%\\CloudDrive.WinUI\\webhooks\\ 目录。" })]
					})
				})
			}) : null,
			n.enabled && n.cloud ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(dt, { children: "云端路径前缀" }),
						/* @__PURE__ */ (0, Q.jsx)("div", {
							role: "group",
							"aria-label": "云端路径前缀",
							className: "flex flex-col gap-3",
							children: i.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(P, {
										className: "min-w-0 flex-1",
										"aria-label": `云端路径前缀 ${t + 1}`,
										placeholder: "/115",
										autoComplete: "off",
										maxLength: 200,
										value: e.prefix,
										onChange: (e) => p(t, { prefix: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(Rt, {
										"aria-label": `前缀 ${t + 1} 对应的媒体根`,
										prefix: "对应目录",
										selectedKey: e.root,
										onSelectionChange: (e) => {
											e !== null && p(t, { root: String(e) });
										},
										children: l.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
											id: e,
											children: e
										}, e))
									}),
									/* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "danger",
										iconOnly: !0,
										leadingIcon: yt,
										"aria-label": "移除这一条",
										onClick: () => a((e) => e.filter((e, n) => n !== t))
									})
								]
							}, t))
						}),
						/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(E, {
							variant: "secondary",
							onClick: () => a((e) => [...e, {
								prefix: "",
								root: l[0] ?? ""
							}]),
							children: "添加前缀"
						}) })
					]
				})
			}) : null,
			o || c.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: o || c.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(M, { children: [u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: h,
				disabled: !n.available,
				...K(c.busy === "secret"),
				children: "更换密钥"
			}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !n.available,
				...K(c.busy === "save"),
				children: "保存配置"
			})] })
		]
	});
}
// src/react/settings/media-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
async function po(e) {
========
async function lo(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let t;
	try {
		t = await mn();
	} catch {
		return !0;
	}
	if (!En(t)) return !0;
	let { confirmed: n } = await rn({
		title: "扫描与采集正在进行",
		body: Nn(t, e),
		confirmLabel: "仍然保存"
	});
	return n;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var mo = (e) => $n.find(([t]) => t === e)?.[1] ?? e, ho = [...$n, ["smb", "SMB 共享"]], go = (e) => e.library_icon || $a(e.transport === "smb" ? "smb" : e.location)[0], _o = async (e) => (await G(wt, { initial: e })).path, vo = (e) => ({
========
var uo = (e) => er.find(([t]) => t === e)?.[1] ?? e, fo = [...er, ["smb", "SMB 共享"]], po = (e) => e.library_icon || Xa(e.transport === "smb" ? "smb" : e.location)[0], mo = async (e) => (await G(Ct, { initial: e })).path, ho = (e) => ({
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	library_id: e.library_id,
	library: e.library,
	library_icon: e.library_icon,
	library_color: e.library_color,
	library_policy: e.library_policy,
	library_stages: e.library_stages
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}), yo = (e) => e.library_stages ? ro.filter((t) => e.library_stages.split(",").includes(t)) : [], bo = (e = "") => ({
========
}), go = (e) => e.library_stages ? eo.filter((t) => e.library_stages.split(",").includes(t)) : [], _o = (e = "") => ({
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	path: e,
	transport: e.startsWith("smb://") ? "smb" : "filesystem",
	location: "local",
	root: "",
	library_id: kn(),
	library: "",
	library_icon: "",
	library_color: "",
	library_policy: "auto",
	library_stages: "",
	cost: "free"
});
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function xo(e) {
	let t = e.media_sources?.filter((e) => $n.some(([t]) => t === e.location));
========
function vo(e) {
	let t = e.media_sources?.filter((e) => er.some(([t]) => t === e.location));
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return t?.length ? t.map((e) => ({
		transport: e.transport === "smb" || e.path.startsWith("smb://") ? "smb" : "filesystem",
		smb_username: e.smb_username,
		smb_password: "",
		smb_encrypt: e.smb_encrypt,
		smb_password_saved: e.smb_password_saved,
		path: e.path,
		location: e.location,
		root: e.root,
		library: e.library || "",
		library_icon: e.library_icon || "",
		library_color: e.library_color || "",
		library_policy: e.library_policy || "auto",
		library_stages: e.library_stages || "",
		root_id: e.root_id,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		library_id: e.library_id || kn(),
		cost: e.cost ?? zn(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => bo(e));
}
var So = (e) => !(e instanceof qe) || e.status !== 400 ? null : e.body?.errors ?? null;
function Co({ data: e, receipt: t, panel: n }) {
	let r = !!e.media_sources?.some((e) => rr(e.location));
	return (0, Z.useEffect)(() => {
		if (e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of xo(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			An("media", {
========
		library_id: e.library_id || On(),
		cost: e.cost ?? Rn(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => _o(e));
}
var yo = (e) => !(e instanceof qe) || e.status !== 400 ? null : e.body?.errors ?? null;
function bo({ data: e, receipt: t, panel: n }) {
	let r = !!e.media_sources?.some((e) => ir(e.location));
	return (0, Z.useEffect)(() => {
		if (e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of vo(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			kn("media", {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				folders: [...t.values()],
				cloud: r
			});
		}
		let t = e.push_discovery;
		t && An("discovery", {
			enabled: t.enabled,
			watchLocal: t.watch_local,
			cloud: t.cloud,
			webhook: t.enabled && t.cloud && !!t.config_toml,
			prefixes: t.prefixes.length
		});
	}, [e, r]), /* @__PURE__ */ (0, Q.jsxs)("div", {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		...dr(n),
		children: [
			e.editable ? /* @__PURE__ */ (0, Q.jsx)(wo, {
========
		...fr(n),
		children: [
			e.editable ? /* @__PURE__ */ (0, Q.jsx)(xo, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				data: e,
				receipt: t
			}) : /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "neutral",
				title: "只读",
				children: e.notice
			}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			e.editable ? null : /* @__PURE__ */ (0, Q.jsx)(Eo, { data: e }),
			r ? /* @__PURE__ */ (0, Q.jsx)(Ya, { receipt: t }) : null,
			e.push_discovery ? /* @__PURE__ */ (0, Q.jsx)(fo, {
========
			e.editable ? null : /* @__PURE__ */ (0, Q.jsx)(Co, { data: e }),
			r ? /* @__PURE__ */ (0, Q.jsx)(Ka, { receipt: t }) : null,
			e.push_discovery ? /* @__PURE__ */ (0, Q.jsx)(co, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				initial: e.push_discovery,
				receipt: t
			}) : null
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function wo({ data: e, receipt: t }) {
	let { rows: n, edit: r, add: i, remove: a, errors: o, setErrors: s, picking: c, pick: l, inputRef: u } = ar({
		initial: () => xo(e),
		blank: () => bo(),
		pickFolder: _o,
========
function xo({ data: e, receipt: t }) {
	let { rows: n, edit: r, add: i, remove: a, errors: o, setErrors: s, picking: c, pick: l, inputRef: u } = or({
		initial: () => vo(e),
		blank: () => _o(),
		pickFolder: mo,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		describe: q
	}), [d, f] = (0, Z.useState)(!1), [p, m] = (0, Z.useState)(!1), [h, g] = (0, Z.useState)(""), [_, v] = (0, Z.useState)({}), [y, b] = (0, Z.useState)(null), x = (0, Z.useRef)(e.revision), S = (0, Z.useRef)(!1), C = Y();
	Vn();
	let w = (e, t) => {
		n.forEach((i, a) => {
			i.library_id === n[e].library_id && r(a, t);
		});
	}, T = [...n.reduce((e, t) => e.has(t.library_id) ? e : e.set(t.library_id, t), /* @__PURE__ */ new Map()).values()], [ee, te] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		if (!ee) return;
		let e = document.querySelector(`[data-library-key="${CSS.escape(ee)}"] [data-library-head] input`);
		e?.scrollIntoView({ block: "center" }), e?.focus(), te(null);
	}, [ee]);
	let ne = (e, t) => {
		let i = n.find((e) => e.library_id === t);
		if (i) {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			r(e, vo(i));
========
			r(e, ho(i));
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			return;
		}
		let a = kn();
		r(e, {
			library_id: a,
			library: "",
			library_icon: "",
			library_color: "",
			library_policy: "auto",
			library_stages: ""
		}), te(a);
	};
	(0, Z.useEffect)(() => {
		if (!y) return;
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		let e = setTimeout(() => location.assign(y.url), Ua);
========
		let e = setTimeout(() => location.assign(y.url), Ba);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		return () => clearTimeout(e);
	}, [y]);
	let re = (e) => {
		e.preventDefault();
		let t = n.findIndex((e) => !e.cost);
		if (t >= 0) {
			m(!0);
			let n = e.currentTarget;
			requestAnimationFrame(() => n.querySelector(`[data-media-read-policy="${t}"] button`)?.focus());
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		} else C.busy || S.current || (g(""), S.current = !0, po(d).then((e) => {
========
		} else C.busy || S.current || (g(""), S.current = !0, lo(d).then((e) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			S.current = !1, e && ie();
		}));
	}, ie = () => {
		C.run("save", (t) => G(Qe, {
			revision: x.current,
			media_dirs: n.map((e) => e.path),
			...e.media_sources ? { media_sources: n } : {},
			port: String(e.port),
			scan_now: d
		}, "POST", t), (e) => {
			x.current = e.revision, s([]), t("已保存配置"), b(e);
		}, (e) => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			let t = So(e);
========
			let t = yo(e);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			s(t?.media_dirs ?? []), (!t || t.port) && g(t?.port || q(e));
		});
	};
	if (y) return /* @__PURE__ */ (0, Q.jsx)(L, {
		guide: "media",
		title: "媒体库与目录",
		children: /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsxs)(F, {
			tone: "success",
			title: "配置已保存",
			children: [
				"Peach 正在重新启动。稍后自动跳转，或点击",
				/* @__PURE__ */ (0, Q.jsx)(_t, {
					href: y.url,
					size: "small",
					children: "进入馆藏"
				}),
				"。"
			]
		}) })
	});
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	let ae = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), oe = n.some((e) => rr(e.location)), se = oe ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
========
	let ae = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), oe = n.some((e) => ir(e.location)), se = oe ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "media",
		title: "媒体库与目录",
		onSubmit: re,
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(ao, {}),
========
			/* @__PURE__ */ (0, Q.jsx)(no, {}),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			/* @__PURE__ */ (0, Q.jsx)("div", {
				role: "group",
				"aria-label": "媒体库与目录",
				className: "flex flex-col gap-4",
				children: T.map((e) => {
					let t = n.findIndex((t) => t.library_id === e.library_id), s = n.map((e, t) => ({
						row: e,
						index: t
					})).filter(({ row: t }) => t.library_id === e.library_id), d = e.library_policy, f = e.library || "未命名媒体库";
					return /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-library-block": "",
						"data-library-key": e.library_id,
						className: $t({
							variant: "raised",
							padding: "none",
							className: "flex flex-col p-2"
						}),
						"data-library": e.library_color ? e.library_id : void 0,
						children: [
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-library-head": "",
								children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
									/* @__PURE__ */ (0, Q.jsx)(to, {
========
									/* @__PURE__ */ (0, Q.jsx)(Qa, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
										label: `${f} 图标`,
										value: e.library_icon,
										kind: e.transport === "smb" ? "smb" : e.location,
										onChange: (e) => w(t, { library_icon: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(P, {
										className: "w-full",
										"aria-label": `${f} 名称`,
										maxLength: 80,
										placeholder: "媒体库名称",
										value: e.library,
										onChange: (e) => w(t, { library: e })
									}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
									/* @__PURE__ */ (0, Q.jsx)(co, {
========
									/* @__PURE__ */ (0, Q.jsx)(ao, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
										id: e.library_id,
										name: e.library,
										value: e.library_color,
										onChange: (e) => w(t, { library_color: e })
									}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
									/* @__PURE__ */ (0, Q.jsx)(oo, {
========
									/* @__PURE__ */ (0, Q.jsx)(ro, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
										name: f,
										value: d,
										onChange: (n) => w(t, {
											library_policy: n,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
											library_stages: n === "custom" ? e.library_stages || ro.join(",") : ""
========
											library_stages: n === "custom" ? e.library_stages || eo.join(",") : ""
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
										})
									})
								]
							}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
							d === "custom" ? /* @__PURE__ */ (0, Q.jsx)(so, {
								name: f,
								value: yo(e),
								onChange: (e) => w(t, { library_stages: ro.filter((t) => e.includes(t)).join(",") })
========
							d === "custom" ? /* @__PURE__ */ (0, Q.jsx)(io, {
								name: f,
								value: go(e),
								onChange: (e) => w(t, { library_stages: eo.filter((t) => e.includes(t)).join(",") })
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
							}) : null,
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-library-folders": "",
								role: "group",
								"aria-label": `${f} 的文件夹`,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
								children: [s.map(({ row: t, index: i }) => /* @__PURE__ */ (0, Q.jsxs)(Qn, {
========
								children: [s.map(({ row: t, index: i }) => /* @__PURE__ */ (0, Q.jsxs)($n, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
									label: `媒体目录 ${i + 1}`,
									path: t.path,
									onPath: (e) => r(i, {
										path: e,
										transport: e.startsWith("smb://") ? "smb" : t.transport
									}),
									error: o[i],
									inputRef: u(i),
									picking: c === i,
									onPick: () => void l(i),
									onRemove: n.length > 1 ? () => a(i) : void 0,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
									status: ae(t) ? /* @__PURE__ */ (0, Q.jsx)(To, { online: ae(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, Q.jsxs)(Zn, { children: [
										/* @__PURE__ */ (0, Q.jsx)(nr, {
											index: i,
											value: t.transport === "smb" ? "smb" : t.location,
											options: ho,
========
									status: ae(t) ? /* @__PURE__ */ (0, Q.jsx)(So, { online: ae(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, Q.jsxs)(Qn, { children: [
										/* @__PURE__ */ (0, Q.jsx)(rr, {
											index: i,
											value: t.transport === "smb" ? "smb" : t.location,
											options: fo,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
											onChange: (e) => {
												let n = e === "smb";
												r(i, {
													transport: n ? "smb" : "filesystem",
													location: n ? "local" : e,
													cost: n || e === "local" ? "free" : "",
													path: n ? t.path.startsWith("smb://") ? t.path : "smb://" : t.path.startsWith("smb://") ? "" : t.path
												}), v((e) => {
													let t = { ...e };
													return delete t[i], t;
												});
											}
										}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
										/* @__PURE__ */ (0, Q.jsx)(er, {
========
										/* @__PURE__ */ (0, Q.jsx)(tr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
											index: i,
											cost: t.cost,
											onChange: (e) => r(i, { cost: e }),
											error: p && !t.cost ? "请选择媒体读取策略" : void 0
										}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
										t.root_id && !ae(t) ? /* @__PURE__ */ (0, Q.jsx)(Xn, {
========
										t.root_id && !ae(t) ? /* @__PURE__ */ (0, Q.jsx)(Zn, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
											label: "变更方式",
											className: "w-full @lg:w-auto @lg:flex-1",
											children: /* @__PURE__ */ (0, Q.jsxs)(R, {
												className: "w-full",
												"aria-label": `目录变更方式 ${i + 1}`,
												placeholder: "选择目录变更方式",
												selectedKey: t.change_mode || null,
												onSelectionChange: (e) => {
													e === "add" ? r(i, {
														root_id: void 0,
														root: "",
														change_mode: ""
													}) : r(i, { change_mode: "relocate" });
												},
												children: [/* @__PURE__ */ (0, Q.jsx)(z, {
													id: "relocate",
													children: "重定位此目录，保留文件记录"
												}), /* @__PURE__ */ (0, Q.jsx)(z, {
													id: "add",
													children: "添加另一目录"
												})]
											})
										}) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
										T.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(Xn, {
========
										T.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(Zn, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
											label: "移到媒体库",
											className: "w-full @lg:w-48",
											children: /* @__PURE__ */ (0, Q.jsxs)(R, {
												className: "w-full",
												"aria-label": `目录所属媒体库 ${i + 1}`,
												selectedKey: t.library_id,
												renderValue: /* @__PURE__ */ (0, Q.jsxs)("span", {
													className: "flex min-w-0 items-center gap-2",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
													children: [/* @__PURE__ */ (0, Q.jsx)(Ht, { mark: go(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
========
													children: [/* @__PURE__ */ (0, Q.jsx)(Vt, { mark: po(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
														className: "truncate",
														children: f
													})]
												}),
												onSelectionChange: (e) => {
													e && ne(i, String(e));
												},
												children: [T.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
													id: e.library_id,
													textValue: e.library || "未命名媒体库",
													children: /* @__PURE__ */ (0, Q.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
														children: [/* @__PURE__ */ (0, Q.jsx)(Ht, { mark: go(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
========
														children: [/* @__PURE__ */ (0, Q.jsx)(Vt, { mark: po(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
															className: "truncate",
															children: e.library || "未命名媒体库"
														})]
													})
												}, e.library_id)), s.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(z, {
													id: "new",
													textValue: "新建媒体库",
													children: /* @__PURE__ */ (0, Q.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, Q.jsx)(Ht, { mark: "plus" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "新建媒体库" })]
													})
												}) : null]
											})
										}) : null
									] }), t.transport === "smb" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
										className: "flex w-full flex-col gap-2",
										children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
											/* @__PURE__ */ (0, Q.jsxs)(Zn, { children: [/* @__PURE__ */ (0, Q.jsx)(Xn, {
========
											/* @__PURE__ */ (0, Q.jsxs)(Qn, { children: [/* @__PURE__ */ (0, Q.jsx)(Zn, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
												label: "SMB 账号",
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, Q.jsx)(P, {
													"aria-label": `SMB 账号 ${i + 1}`,
													value: t.smb_username || "",
													autoComplete: "off",
													onChange: (e) => r(i, { smb_username: e })
												})
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
											}), /* @__PURE__ */ (0, Q.jsx)(Xn, {
========
											}), /* @__PURE__ */ (0, Q.jsx)(Zn, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
												label: "SMB 密码",
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, Q.jsx)(P, {
													"aria-label": `SMB 密码 ${i + 1}`,
													type: "password",
													value: t.smb_password || "",
													autoComplete: "new-password",
													placeholder: t.smb_password_saved ? "留空保留已保存密码" : "",
													onChange: (e) => r(i, { smb_password: e })
												})
											})] }),
											/* @__PURE__ */ (0, Q.jsx)(D, {
												isSelected: t.smb_encrypt || !1,
												onChange: (e) => r(i, { smb_encrypt: e }),
												children: "要求 SMB 加密"
											}),
											/* @__PURE__ */ (0, Q.jsx)(D, {
												isSelected: t.smb_clear || !1,
												onChange: (e) => r(i, { smb_clear: e }),
												children: "移除已保存的 SMB 账号"
											}),
											/* @__PURE__ */ (0, Q.jsx)(E, {
												className: "self-start",
												variant: "secondary",
												...K(C.busy === `smb-${i}`),
												onClick: () => void C.run(`smb-${i}`, (e) => G("/api/configuration/smb/test", t, "POST", e), (e) => v((t) => ({
													...t,
													[i]: {
														message: "共享目录可读取",
														directories: e.directories
													}
												})), (e) => v((t) => ({
													...t,
													[i]: {
														message: q(e),
														directories: []
													}
												}))),
												children: "测试连接"
											}),
											_[i] ? /* @__PURE__ */ (0, Q.jsx)(N, { children: _[i].message }) : null,
											_[i]?.directories.length ? /* @__PURE__ */ (0, Q.jsx)(R, {
												"aria-label": `SMB 子目录 ${i + 1}`,
												placeholder: "进入子目录",
												selectedKey: null,
												onSelectionChange: (e) => {
													e && (r(i, { path: t.path.replace(/\/$/, "") + "/" + encodeURIComponent(String(e)) }), v((e) => ({
														...e,
														[i]: {
															message: "请测试此子目录",
															directories: []
														}
													})));
												},
												children: _[i].directories.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
													id: e,
													children: e
												}, e))
											}) : null,
											/* @__PURE__ */ (0, Q.jsx)(N, { children: "地址填写 smb://服务器/共享/目录。按共享账号权限读写；整理和删除由对应操作触发，资料和预览保存在 Peach 数据目录。" })
										]
									}) : null]
								}, i)), /* @__PURE__ */ (0, Q.jsx)("div", {
									className: "flex",
									children: /* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "secondary",
										"aria-label": `给 ${f} 添加文件夹`,
										onClick: () => {
											i(), r(n.length, {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
												...vo(e),
========
												...ho(e),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
												location: e.location,
												cost: e.cost
											});
										},
										children: "添加文件夹"
									})
								})]
							})
						]
					}, e.library_id);
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				className: "self-start",
				onClick: i,
				children: "添加媒体库"
			}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(N, { children: mt }),
			oe ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(tr, {}), /* @__PURE__ */ (0, Q.jsx)(Ka, {})] }) : null,
========
			/* @__PURE__ */ (0, Q.jsx)(N, { children: pt }),
			oe ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(nr, {}), /* @__PURE__ */ (0, Q.jsx)(Ua, {})] }) : null,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			se.map((e) => /* @__PURE__ */ (0, Q.jsxs)(N, { children: [
				"未检测到 ",
				e.name,
				"。",
				/* @__PURE__ */ (0, Q.jsxs)(A, {
					href: e.download_url,
					children: ["下载 ", e.name]
				})
			] }, e.name)),
			/* @__PURE__ */ (0, Q.jsx)(D, {
				isSelected: d,
				onChange: f,
				children: "保存后扫描并补全资料"
			}),
			h ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "没有保存",
				children: h
			}) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(M, {
			status: "保存后 Peach 会重新启动。",
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(C.busy === "save"),
				children: "保存配置"
			})
		})]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function To({ online: e }) {
	return /* @__PURE__ */ (0, Q.jsx)(or, { online: e });
}
function Eo({ data: e }) {
========
function So({ online: e }) {
	return /* @__PURE__ */ (0, Q.jsx)(sr, { online: e });
}
function Co({ data: e }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let t = e.media_sources, n = Y();
	return t ? /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "mounts",
		title: "挂载状态",
		children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(ut, { children: t.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(j, {
				term: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Ht, { mark: ir(e.location) }), mo(e.location)] }),
				children: [e.path || "未配置挂载点", /* @__PURE__ */ (0, Q.jsx)(To, { online: e.online })]
========
			/* @__PURE__ */ (0, Q.jsx)(lt, { children: t.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(j, {
				term: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Vt, { mark: ar(e.location) }), uo(e.location)] }),
				children: [e.path || "未配置挂载点", /* @__PURE__ */ (0, Q.jsx)(So, { online: e.online })]
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			}, t)) }),
			n.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: n.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => void n.run("refresh", (e) => un(e), (e) => On.setQueryData(Ze, e)),
				...K(n.busy === "refresh"),
				children: "刷新挂载状态"
			}) })
		]
	}) : null;
}
// src/react/settings/service-preferences.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Do = [
========
var wo = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	["off", "关闭"],
	["precise", "每 10 秒一张"],
	["coarse", "每 30 秒一张"]
];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Oo({ epoch: e = 0, disabled: t = !1 }) {
========
function To({ epoch: e = 0, disabled: t = !1 }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let n = X({
		queryKey: Ut,
		queryFn: ({ signal: e }) => _n(e),
		refetchOnMount: "always"
	}), r = qn(), i = r.reset;
	(0, Z.useEffect)(() => {
		i();
	}, [e, i]);
	let a = n.data, o = r.error || n.error;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
			label: "时间轴预览",
			description: "按所选间隔抽帧，仅处理本机磁盘上的视频。",
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "videoThumbnailSetting",
				children: /* @__PURE__ */ (0, Q.jsx)(R, {
					"aria-label": "缩略图采集间隔",
					selectedKey: a?.mode || "off",
					isDisabled: t || !a || n.isFetching || r.isPending,
					onSelectionChange: (e) => {
						e !== null && r.mutate(String(e));
					},
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					children: Do.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
========
					children: wo.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						id: e,
						children: t
					}, e))
				})
			})
		}) }),
		r.isPending || a?.status === "running" ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)(N, {
				role: "status",
				children: r.isPending ? "正在保存…" : "正在采集。"
			}), r.isPending ? null : /* @__PURE__ */ (0, Q.jsx)(Wt, {})]
		}) : null,
		o ? /* @__PURE__ */ (0, Q.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(k, { children: q(o) })
		}) : null
	] });
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ko({ receipt: e }) {
	let t = Zt();
========
function Eo({ receipt: e }) {
	let t = Xt();
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	(0, Z.useSyncExternalStore)(t.subscribe, t.version);
	let n = X({
		queryKey: Pt,
		queryFn: ({ signal: e }) => gn(e),
		refetchOnMount: "always"
	}), r = Kn(), i = n.data?.followInitialDays ?? t.value.followInitialDays, a = r.error || n.error;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "follow-options",
		title: "关注采集",
		children: [/* @__PURE__ */ (0, Q.jsxs)(I, { children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(Ao, {}),
			/* @__PURE__ */ (0, Q.jsx)(jo, {}),
========
			/* @__PURE__ */ (0, Q.jsx)(Do, {}),
			/* @__PURE__ */ (0, Q.jsx)(Oo, {}),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			/* @__PURE__ */ (0, Q.jsx)(B, {
				label: "首次采集范围",
				description: "新关注的来源第一次回看多久以前的内容。",
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "followInitialDaysSetting",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, Q.jsx)(R, {
						"aria-label": "首次采集范围",
						selectedKey: String(i),
						isDisabled: n.isFetching || r.isPending,
						onSelectionChange: (n) => {
							n !== null && r.mutate({ followInitialDays: Number(n) }, { onSuccess: (n) => {
								typeof n.followInitialDays == "number" && (t.value.followInitialDays = n.followInitialDays), t.save(), e("已保存首次采集范围");
							} });
						},
						children: ct.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
							id: e,
							children: t
						}, e))
					})
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(B, {
				label: "头像刷新",
				description: "重新获取关注创作者的头像。",
				children: /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0",
					children: "每 3 个月"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(B, {
				label: "favicon 刷新",
				description: "重新获取来源站点的图标。",
				children: /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0",
					children: "每年"
				})
			})
		] }), a ? /* @__PURE__ */ (0, Q.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(k, { children: q(a) })
		}) : null]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ao() {
========
function Do() {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let e = X({
		queryKey: lt,
		queryFn: ({ signal: e }) => pn(e),
		refetchOnMount: "always",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		refetchInterval: (e) => Fn(e.state.data)
	}), t = Gn(), n = e.data, r = (0, Z.useRef)(Qt(Number(localStorage.getItem("peach.number.followScheduleSetting")), 15, 10080, 60)), [i, a] = (0, Z.useState)("60"), [o, s] = (0, Z.useState)(!1);
========
		refetchInterval: (e) => Pn(e.state.data)
	}), t = Gn(), n = e.data, r = (0, Z.useRef)(Zt(Number(localStorage.getItem("peach.number.followScheduleSetting")), 15, 10080, 60)), [i, a] = (0, Z.useState)("60"), [o, s] = (0, Z.useState)(!1);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	(0, Z.useEffect)(() => {
		n?.enabled && (r.current = n.interval_minutes, a(String(n.interval_minutes)));
	}, [n]);
	let c = !n?.available || e.isFetching || t.isPending, l = () => {
		let e = Number(i);
		!Number.isInteger(e) || e < 15 || e > 10080 ? s(!0) : (s(!1), n?.enabled && !c && e !== n.interval_minutes && (r.current = e, localStorage.setItem("peach.number.followScheduleSetting", String(e)), t.mutate(e)));
	}, u = t.error || e.error;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(B, {
			label: "自动检查更新",
			description: "近 7 天有更新的来源按这个间隔检查，久未更新的逐级放慢，最长一天一次",
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				id: "followScheduleSetting",
				className: "flex min-h-9 shrink-0 flex-wrap items-center justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(U, {
					"aria-label": "自动检查更新",
					isSelected: n?.enabled === !0,
					isDisabled: c,
					onChange: (e) => {
						localStorage.setItem("peach.number.followScheduleSetting", String(r.current)), t.mutate(e ? r.current : 0);
					}
				}), n?.enabled ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, Q.jsx)(P, {
						type: "number",
						inputMode: "numeric",
						name: "follow-interval",
						autoComplete: "off",
						"aria-label": "自动检查间隔",
						className: "w-21 sm:w-24",
						value: i,
						onChange: (e) => {
							a(e), s(!1);
						},
						onBlur: l,
						onKeyDown: (e) => {
							e.key === "Enter" && (e.preventDefault(), l());
						},
						isDisabled: c,
						isInvalid: o
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: "分钟"
					})]
				}) : null]
			})
		}),
		o ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: "请输入 15–10080 的整数（分钟）。" }) }) : null,
		t.isPending || n?.running ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, {
			role: "status",
			children: t.isPending ? "正在保存…" : "正在检查来源更新…"
		}) }) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		/* @__PURE__ */ (0, Q.jsx)(Mo, {
========
		/* @__PURE__ */ (0, Q.jsx)(ko, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			kind: "follow",
			status: n,
			title: "上次自动检查失败"
		}),
		u ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: q(u) }) }) : null
	] });
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function jo() {
========
function Oo() {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let e = X({
		queryKey: ot,
		queryFn: ({ signal: e }) => fn(e),
		refetchOnMount: "always",
		refetchInterval: (e) => Fn(e.state.data)
	}), t = e.data;
	if (!t) return e.isPending ? /* @__PURE__ */ (0, Q.jsx)(B, {
		label: "订阅源拉取",
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			"data-skeleton": !0,
			"aria-busy": "true",
			"aria-label": "正在读取订阅源拉取间隔",
			className: "block h-4 w-16 rounded-2lg bg-background-tertiary-default"
		})
	}) : null;
	let n = t.interval_minutes, r = n % 60 ? `每 ${n} 分钟` : `每 ${n / 60} 小时`;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(B, {
			label: "订阅源拉取",
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				id: "feedScheduleSetting",
				children: t.available ? t.enabled ? r : "已关闭" : "只在写入端可用"
			})
		}),
		t.running ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, {
			role: "status",
			children: "正在拉取订阅源…"
		}) }) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		/* @__PURE__ */ (0, Q.jsx)(Mo, {
========
		/* @__PURE__ */ (0, Q.jsx)(ko, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			kind: "feed",
			status: t,
			title: "上次自动拉取失败"
		})
	] });
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Mo({ kind: e, status: t, title: n }) {
========
function ko({ kind: e, status: t, title: n }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let r = Wn(e);
	if (!t?.enabled || t.running || !t.last_error) return null;
	let i = t.consecutive_failures ?? 0, a = xn(t.next_run_at), o = [i > 1 ? `已连续失败 ${i} 次` : "", a ? `下一轮 ${a}` : ""].filter(Boolean).join("，"), s = [
		t.last_error,
		o,
		r.error ? `没有重试：${q(r.error)}` : ""
	].filter(Boolean).join("\n");
	return /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(F, {
		tone: "error",
		title: n,
		action: /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			size: "small",
			disabled: !t.available,
			...K(r.isPending),
			onClick: () => r.mutate(),
			children: "立即重试"
		}),
		children: s
	}) });
}
// src/react/settings/media-processing-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function No({ receipt: e }) {
========
function Ao({ receipt: e }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let t = X({
		queryKey: bt,
		queryFn: ({ signal: e }) => hn(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "preview",
		title: "视频预览",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "生成视频预览",
				description: "为本地视频生成九宫格与时间轴预览；关闭后仍按入库规则探测时长与分辨率。",
				children: /* @__PURE__ */ (0, Q.jsx)(U, {
					"aria-label": "生成视频预览",
					isSelected: !!t.data && !t.data.metadata_only,
					isDisabled: i,
					onChange: (t) => void n.run("save", (e) => G(xt, { metadata_only: !t }, "POST", e), (t) => {
						On.setQueryData(bt, t), On.invalidateQueries({ queryKey: Ut }), On.invalidateQueries({ queryKey: ht }), e(t.metadata_only ? "已关闭视频预览生成" : "已开启视频预览生成");
					})
				})
			}) }),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(Oo, { disabled: !t.data || t.data.metadata_only || !!n.busy }),
========
			/* @__PURE__ */ (0, Q.jsx)(To, { disabled: !t.data || t.data.metadata_only || !!n.busy }),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "抽帧解码方式",
				description: "用于生成封面、九宫格和时间轴。",
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "previewAccelerationSetting",
					children: /* @__PURE__ */ (0, Q.jsxs)(R, {
						"aria-label": "抽帧解码方式",
						selectedKey: t.data?.preview_acceleration || "auto",
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("preview_acceleration", (e) => G(xt, { preview_acceleration: String(t) }, "POST", e), (t) => {
								On.setQueryData(bt, t), e("已保存抽帧解码方式");
							});
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(z, {
							id: "auto",
							children: "自动（硬件优先）"
						}), /* @__PURE__ */ (0, Q.jsx)(z, {
							id: "software",
							children: "软件解码"
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(N, {
					role: "status",
					children: "正在保存…"
				})
			}) : null,
			r ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: r })
			}) : null
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Po({ receipt: e }) {
========
function jo({ receipt: e }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let t = X({
		queryKey: bt,
		queryFn: ({ signal: e }) => hn(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "transcode",
		title: "视频播放",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "转码方式",
				description: "用于播放时的视频转码。",
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "playbackAccelerationSetting",
					children: /* @__PURE__ */ (0, Q.jsxs)(R, {
						"aria-label": "转码方式",
						selectedKey: t.data?.playback_acceleration || "auto",
						isDisabled: !t.data || t.isFetching || !!n.busy,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_acceleration", (e) => G(xt, { playback_acceleration: String(t) }, "POST", e), (t) => {
								On.setQueryData(bt, t), e("已保存转码方式");
							});
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(z, {
							id: "auto",
							children: "自动（硬件优先）"
						}), /* @__PURE__ */ (0, Q.jsx)(z, {
							id: "software",
							children: "软件编解码"
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(N, {
					role: "status",
					children: "正在保存…"
				})
			}) : null,
			r ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: r })
			}) : null
		]
	});
}
// src/react/boardui/components/base/textarea/textarea.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Fo = Rn({
========
var Mo = Ln({
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	field: "relative flex w-full flex-col rounded-2lg bg-background-tertiary-default text-foreground-icon-tertiary ring-2 ring-inset ring-transparent transition-[background-color,box-shadow,color] duration-[var(--input-transition-ms)] ease",
	fieldSize: {
		medium: "p-2",
		small: "px-1.5 py-2"
	},
	textarea: "block w-full min-w-0 bg-transparent border-0 outline-none m-0 p-0 px-1 font-sans text-body-regular text-text-primary placeholder:text-text-tertiary focus:placeholder:text-text-primary disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text disabled:cursor-not-allowed aria-invalid:placeholder:text-text-error-placeholder",
	resize: {
		none: "resize-none",
		vertical: "resize-y"
	},
	footer: "flex w-full items-start justify-between gap-3",
	count: "ms-auto shrink-0 pt-px text-caption-1-medium text-text-tertiary tabular-nums"
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
}), Io = 20;
function Lo({ size: e, rows: t = 3, autoResize: n = !1, maxRows: r, resize: i = "vertical", fieldClassName: a, className: o, ref: s, groupRef: c, onInput: l, ...u }) {
	let d = (0, Z.useContext)(Kt), f = e ?? d.size ?? "medium", p = (0, Z.useRef)(null), m = (e) => {
========
}), No = 20;
function Po({ size: e, rows: t = 3, autoResize: n = !1, maxRows: r, resize: i = "vertical", fieldClassName: a, className: o, ref: s, groupRef: c, onInput: l, ...u }) {
	let d = (0, Z.useContext)(Gt), f = e ?? d.size ?? "medium", p = (0, Z.useRef)(null), m = (e) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		p.current = e, typeof s == "function" ? s(e) : s && (s.current = e);
	}, h = () => {
		let e = p.current;
		if (!e) return;
		if (!n) {
			e.style.height = "", e.style.maxHeight = "", e.style.overflowY = "";
			return;
		}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		let i = parseFloat(window.getComputedStyle(e).lineHeight) || Io, a = r ? r * i : Infinity;
========
		let i = parseFloat(window.getComputedStyle(e).lineHeight) || No, a = r ? r * i : Infinity;
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		e.style.height = "0px";
		let o = Math.max(e.scrollHeight, t * i);
		e.style.height = `${Math.min(o, a)}px`, e.style.maxHeight = r ? `${a}px` : "", e.style.overflowY = o > a ? "auto" : "hidden";
	};
	return (0, Z.useLayoutEffect)(h), /* @__PURE__ */ (0, Q.jsx)(Re, {
		ref: c,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		className: ({ isFocusWithin: e, isHovered: t, isDisabled: n, isInvalid: r }) => sn(Fo.field, Fo.fieldSize[f], t && !e && !n && !r && "ring-border-button-hover", e && !n && !r && "ring-border-button-active", n && "bg-input-disabled-background text-input-disabled-foreground", r && "bg-background-tertiary-error text-foreground-icon-error", d.fieldClassName, a),
========
		className: ({ isFocusWithin: e, isHovered: t, isDisabled: n, isInvalid: r }) => on(Mo.field, Mo.fieldSize[f], t && !e && !n && !r && "ring-border-button-hover", e && !n && !r && "ring-border-button-active", n && "bg-input-disabled-background text-input-disabled-foreground", r && "bg-background-tertiary-error text-foreground-icon-error", d.fieldClassName, a),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
			ref: m,
			rows: t,
			...u,
			onInput: (e) => {
				h(), l?.(e);
			},
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			className: sn(Fo.textarea, Fo.resize[n ? "none" : i], d.inputClassName, o)
		})
	});
}
Lo.displayName = "TextareaBase";
function Ro({ label: e, hint: t, tooltip: n, placeholder: r, rows: i, autoResize: a, maxRows: o, resize: s, maxLength: c, showCount: l = !1, fieldClassName: u, ref: d, groupRef: f, className: p, value: m, defaultValue: h, onChange: g, ..._ }) {
========
			className: on(Mo.textarea, Mo.resize[n ? "none" : i], d.inputClassName, o)
		})
	});
}
Po.displayName = "TextareaBase";
function Fo({ label: e, hint: t, tooltip: n, placeholder: r, rows: i, autoResize: a, maxRows: o, resize: s, maxLength: c, showCount: l = !1, fieldClassName: u, ref: d, groupRef: f, className: p, value: m, defaultValue: h, onChange: g, ..._ }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [v, y] = (0, Z.useState)(() => (h ?? "").length), b = m === void 0 ? v : m.length;
	return /* @__PURE__ */ (0, Q.jsx)(Gt, {
		..._,
		value: m,
		defaultValue: h,
		onChange: (e) => {
			l && m === void 0 && y(e.length), g?.(e);
		},
		className: p,
		"aria-label": _["aria-label"] ?? (!e && typeof r == "string" ? r : void 0),
		children: ({ isRequired: p, isInvalid: m }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			e && /* @__PURE__ */ (0, Q.jsx)(gt, {
				isRequired: p,
				isInvalid: m,
				tooltip: n,
				children: e
			}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(Lo, {
========
			/* @__PURE__ */ (0, Q.jsx)(Po, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				ref: d,
				groupRef: f,
				placeholder: r,
				rows: i,
				autoResize: a,
				maxRows: o,
				resize: s,
				maxLength: c,
				fieldClassName: u
			}),
			(t || l) && /* @__PURE__ */ (0, Q.jsxs)("div", {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				className: Fo.footer,
				children: [t && /* @__PURE__ */ (0, Q.jsx)(ft, {
					isInvalid: m,
					children: t
				}), l && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: sn(Fo.count, m && "text-text-error-primary"),
========
				className: Mo.footer,
				children: [t && /* @__PURE__ */ (0, Q.jsx)(dt, {
					isInvalid: m,
					children: t
				}), l && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: on(Mo.count, m && "text-text-error-primary"),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					children: c ? `${b}/${c}` : b
				})]
			})
		] })
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
Ro.displayName = "Textarea";
// src/react/settings/code-pattern-settings.tsx
var zo = "^\\+{3}\\s*(?<code>FC2-PPV-\\d+)\n\\[(?<code>[A-Z]+-\\d+)\\]";
function Bo({ receipt: e }) {
========
Fo.displayName = "Textarea";
// src/react/settings/code-pattern-settings.tsx
var Io = "^\\+{3}\\s*(?<code>FC2-PPV-\\d+)\n\\[(?<code>[A-Z]+-\\d+)\\]";
function Lo({ receipt: e }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let t = X({
		queryKey: Pt,
		queryFn: ({ signal: e }) => gn(e)
	}), [n, r] = (0, Z.useState)(null), i = Y(), a = n ?? (t.data?.codePatterns ?? []).join("\n"), o = i.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "codes",
		title: "番号识别规则",
		onSubmit: (t) => {
			t.preventDefault();
			let n = a.split("\n").map((e) => e.trim()).filter(Boolean);
			i.run("save", (e) => G(Ft, { codePatterns: n }, "POST", e), (t) => {
				On.setQueryData(Pt, t), r(null), e("已保存配置");
			});
		},
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: "内置规则认不出番号时，按这里的规则从文件名里取。每行一条正则表达式，番号写在 (?<code>…) 里，没有命名组就取第一个括号。规则在下一次处理时对还没有番号的视频生效。" }), /* @__PURE__ */ (0, Q.jsx)(Ro, {
========
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: "内置规则认不出番号时，按这里的规则从文件名里取。每行一条正则表达式，番号写在 (?<code>…) 里，没有命名组就取第一个括号。规则在下一次处理时对还没有番号的视频生效。" }), /* @__PURE__ */ (0, Q.jsx)(Fo, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			id: "codePatternSetting",
			"aria-label": "番号识别规则",
			rows: 3,
			autoResize: !0,
			maxRows: 12,
			spellCheck: "false",
			autoComplete: "off",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			placeholder: zo,
========
			placeholder: Io,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			value: a,
			isDisabled: !t.data,
			isInvalid: !!o,
			hint: o || void 0,
			onChange: r
		})] }), /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...K(i.busy === "save"),
			children: "保存配置"
		}) })]
	});
}
// src/react/settings/password-pair.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Vo({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
========
function Ro({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(P, {
		id: "access-password",
		type: "password",
		label: e,
		autoComplete: "new-password",
		maxLength: 256,
		value: t,
		onChange: r,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && !!o,
		hint: a ? s : o || s
	}), /* @__PURE__ */ (0, Q.jsx)(P, {
		id: "access-confirm",
		type: "password",
		label: "确认访问密码",
		autoComplete: "new-password",
		maxLength: 256,
		value: n,
		onChange: i,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && (!!c || l),
		hint: a ? void 0 : c
	})] });
}
// src/react/settings/access-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Ho = {
========
var zo = {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	legacy: "当前使用系统生成的访问口令。改设自己的密码，或关闭登录要求。",
	locked: "访问设置无法读取，请在本机检查配置文件。",
	password: "已设置密码。新设备需要登录，登录时勾选「保持登录」可保持 30 天。"
};
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Uo({ initial: e, receipt: t, devices: n }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(""), [l, u] = (0, Z.useState)(""), [d, f] = (0, Z.useState)(!1), [p, m] = (0, Z.useState)({}), h = (0, Z.useRef)(null), g = Y(), _ = (e) => {
========
function Bo({ initial: e, receipt: t, devices: n, after: r }) {
	let [i, a] = (0, Z.useState)(e), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(""), [u, d] = (0, Z.useState)(""), [f, p] = (0, Z.useState)(!1), [m, h] = (0, Z.useState)({}), g = (0, Z.useRef)(null), _ = Y(), v = (e) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		e.preventDefault();
		let n = {};
		i.mode === "password" && !o && (n.current_password = "请输入当前访问密码"), f || ((c.length < 8 || c.length > 256) && (n.password = "访问密码需为 8–256 个字符"), c !== u && (n.confirmation = "两次输入的密码不一致")), h(n), Object.keys(n).length ? requestAnimationFrame(() => g.current?.querySelector("input[aria-invalid=\"true\"]")?.focus()) : _.run("save", (e) => G("/api/configuration/access", {
			revision: i.revision,
			action: f ? "disable" : "set",
			confirm_disable: f,
			current_password: o,
			password: f ? "" : c,
			confirmation: f ? "" : u
		}, "POST", e), (e) => {
			a(e), s(""), l(""), d(""), p(!1), h({}), t(e.mode === "open" ? "已关闭访问密码" : "已保存配置");
		}, (e) => {
			let t = e instanceof qe ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? h(n) : _.setError(q(e));
		});
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	}, v = Ho[r.mode], y = r.mode !== "locked";
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "access",
		title: "访问密码",
		onSubmit: _,
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			ref: h,
			children: /* @__PURE__ */ (0, Q.jsxs)(V, { children: [
				v ? /* @__PURE__ */ (0, Q.jsx)(N, { children: v }) : null,
				r.mode === "open" ? /* @__PURE__ */ (0, Q.jsx)(F, {
					tone: "warning",
					title: "未设置访问密码",
					children: "能连接到 Peach 的设备打开地址就能看馆藏，不需要登录。"
				}) : null,
				r.mode === "password" || r.mode === "legacy" ? /* @__PURE__ */ (0, Q.jsx)(D, {
					isSelected: d,
					onChange: f,
					children: "关闭访问密码"
				}) : null,
				r.mode === "password" ? /* @__PURE__ */ (0, Q.jsx)(P, {
					id: "access-current",
					type: "password",
					label: "当前访问密码",
					autoComplete: "current-password",
					maxLength: 256,
					value: a,
					onChange: o,
					isRequired: !0,
					validationBehavior: "aria",
					isInvalid: !!p.current_password,
					hint: p.current_password
				}) : null,
				y && !d ? /* @__PURE__ */ (0, Q.jsx)(Vo, {
					label: r.mode === "password" ? "新访问密码" : "设置访问密码",
					password: s,
					confirmation: l,
					onPassword: c,
					onConfirmation: u,
					passwordError: p.password,
					confirmationError: p.confirmation,
					passwordHint: "至少 8 个字符。保存后其他设备需要重新登录。"
				}) : null,
				d ? /* @__PURE__ */ (0, Q.jsx)(F, {
					tone: "warning",
					title: "访问范围",
					children: "保存后，能连接到 Peach 的设备将直接访问馆藏。"
				}) : null,
				g.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: g.error }) : null
			] })
		}), y ? /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...K(g.busy === "save"),
			children: "保存配置"
		}) }) : null]
	}), n && (r.mode === "password" || r.mode === "legacy") ? n(r) : null] });
}
// src/react/settings/device-sessions.tsx
var Wo = "/api/configuration/access/sessions", Go = (e) => e.device || "未识别的浏览器", Ko = {
	glyph: pt,
	brand: "apple"
}, qo = {
	glyph: bn,
	brand: "android"
}, Jo = {
	iPhone: {
		platform: Ko,
		terminal: Yt
	},
	iPad: {
		platform: Ko,
		terminal: at
	},
	Android: {
		platform: qo,
		terminal: Yt
	},
	"Android 平板": {
		platform: qo,
		terminal: at
	},
	ChromeOS: {
		platform: { browser: "chrome" },
		terminal: Jn
========
	}, y = zo[i.mode], b = i.mode !== "locked";
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsxs)(L, {
			guide: "access",
			title: "访问密码",
			onSubmit: v,
			children: [/* @__PURE__ */ (0, Q.jsx)("div", {
				ref: g,
				children: /* @__PURE__ */ (0, Q.jsxs)(V, { children: [
					y ? /* @__PURE__ */ (0, Q.jsx)(N, { children: y }) : null,
					i.mode === "open" ? /* @__PURE__ */ (0, Q.jsx)(F, {
						tone: "warning",
						title: "未设置访问密码",
						children: "能连接到 Peach 的设备打开地址就能看馆藏，不需要登录。"
					}) : null,
					i.mode === "password" || i.mode === "legacy" ? /* @__PURE__ */ (0, Q.jsx)(D, {
						isSelected: f,
						onChange: p,
						children: "关闭访问密码"
					}) : null,
					i.mode === "password" ? /* @__PURE__ */ (0, Q.jsx)(P, {
						id: "access-current",
						type: "password",
						label: "当前访问密码",
						autoComplete: "current-password",
						maxLength: 256,
						value: o,
						onChange: s,
						isRequired: !0,
						validationBehavior: "aria",
						isInvalid: !!m.current_password,
						hint: m.current_password
					}) : null,
					b && !f ? /* @__PURE__ */ (0, Q.jsx)(Ro, {
						label: i.mode === "password" ? "新访问密码" : "设置访问密码",
						password: c,
						confirmation: u,
						onPassword: l,
						onConfirmation: d,
						passwordError: m.password,
						confirmationError: m.confirmation,
						passwordHint: "至少 8 个字符。保存后其他设备需要重新登录。"
					}) : null,
					f ? /* @__PURE__ */ (0, Q.jsx)(F, {
						tone: "warning",
						title: "访问范围",
						children: "保存后，能连接到 Peach 的设备将直接访问馆藏。"
					}) : null,
					_.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: _.error }) : null
				] })
			}), b ? /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(_.busy === "save"),
				children: "保存配置"
			}) }) : null]
		}),
		n && (i.mode === "password" || i.mode === "legacy") ? n(i) : null,
		r ? r(i) : null
	] });
}
// src/react/settings/api-token-settings.tsx
var Vo = "/api/configuration/access/token/rotate";
function Ho(e, t) {
	let n = "用旧口令的脚本和 API 调用会立即失效。", r = e === "legacy" ? `其他浏览器现在用这串口令登录，会全部退出，需要输入新口令重新登录；本机保持登录。${n}` : e === "open" ? `浏览器不需要登录，不受影响。${n}` : `用访问密码登录的浏览器不受影响。${n}`;
	return t ? `${r}另一台电脑要换成同一份口令文件，两台之间才能继续互取复核结果。` : r;
}
function Uo({ initial: e, mode: t, receipt: n }) {
	let [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(null), s = Y(), c = Hn();
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "访问口令",
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
			/* @__PURE__ */ (0, Q.jsx)(N, { children: "脚本和 API 调用在 X-Token 请求头里携带访问口令。口令只存在这台电脑上，页面不显示。" }),
			a ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(P, {
							className: "min-w-0 flex-1",
							label: "新访问口令",
							value: a.token,
							isReadOnly: !0,
							autoComplete: "off"
						}), /* @__PURE__ */ (0, Q.jsx)(E, {
							variant: "secondary",
							"aria-label": "复制新访问口令",
							onClick: () => void s.run("copy", () => navigator.clipboard.writeText(a.token), () => n("已复制口令")),
							children: "复制口令"
						})]
					}),
					s.error ? /* @__PURE__ */ (0, Q.jsx)(N, {
						role: "status",
						children: "复制失败，请选中口令复制。"
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(F, {
						tone: "info",
						title: "新口令只显示这一次",
						children: "已经生效，不用重启。离开本页后不再显示，之后在终端运行 peach token 查看。"
					})
				]
			}) : null,
			a?.relogin ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "warning",
				title: "本机需要重新登录",
				children: "刷新页面后用新口令登录。"
			}) : null,
			r.rotatable ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: r.reason })
		] }), r.rotatable ? /* @__PURE__ */ (0, Q.jsx)(M, {
			status: "更换后立即生效。",
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => void nn({
					title: "更换访问口令",
					body: Ho(t, r.paired),
					confirmLabel: "更换口令",
					onConfirm: async () => {
						let e = await G(Vo, {});
						i(e), o(e), e.mode === "legacy" && c.invalidateQueries({ queryKey: ["access-sessions"] }), n(e.signed_out ? `已更换访问口令，${e.signed_out} 台设备需要重新登录` : "已更换访问口令");
					}
				}),
				children: "更换口令"
			})
		}) : null]
	});
}
// src/react/settings/certificate-trust.tsx
function Wo({ rows: e, label: t }) {
	let n = e.length + 8, r = e.flatMap((e, t) => [...e].flatMap((e, n) => e === "1" ? [`M${n + 4} ${t + 4}h1v1h-1z`] : [])).join("");
	return /* @__PURE__ */ (0, Q.jsx)("svg", {
		role: "img",
		"aria-label": t,
		viewBox: `0 0 ${n} ${n}`,
		shapeRendering: "crispEdges",
		className: "size-40 shrink-0 rounded-lg bg-white text-black",
		children: /* @__PURE__ */ (0, Q.jsx)("path", {
			d: r,
			fill: "currentColor"
		})
	});
}
var Go = [
	["iPhone／iPad", "用相机扫码，在 Safari 中允许下载描述文件；到「设置 → 通用 → VPN 与设备管理」安装它，再到「设置 → 通用 → 关于本机 → 证书信任设置」打开这张证书的完全信任。"],
	["Android", "扫码下载后，到「设置 → 安全 → 加密与凭据 → 安装证书 → CA 证书」选择下载的文件。菜单名称因厂商而异。"],
	["电脑", "点「下载证书」。Windows 双击文件，安装到「受信任的根证书颁发机构」；macOS 在「钥匙串访问」里把它设为「始终信任」。"]
];
function Ko({ initial: e }) {
	let t = X({
		queryKey: ["ca-certificate"],
		initialData: e,
		queryFn: ({ signal: e }) => W("/api/configuration/certificate", e),
		staleTime: Infinity,
		refetchInterval: Math.max(60, e.expires_in - 60) * 1e3
	}).data, n = t.fingerprint.split(":"), r = [
		0,
		8,
		16,
		24
	].map((e) => n.slice(e, e + 8).join(":"));
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "其他设备信任 HTTPS 证书",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: "手机、平板和其他电脑第一次打开 HTTPS 地址时会提示证书不受信任。在那台设备上安装并信任本机 CA 证书后不再提示。证书只含公开部分，不含私钥。" }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-wrap items-start gap-4",
				children: [/* @__PURE__ */ (0, Q.jsx)(Wo, {
					rows: t.qr,
					label: "手机扫码下载本机 CA 证书"
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex min-w-0 flex-1 basis-64 flex-col gap-2",
					children: [/* @__PURE__ */ (0, Q.jsxs)(lt, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
						term: "SHA-256 指纹",
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "flex max-w-sm flex-wrap justify-end gap-x-2 font-mono text-caption-1-regular",
							children: r.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "whitespace-nowrap",
								children: e
							}, t))
						})
					}), /* @__PURE__ */ (0, Q.jsx)(j, {
						term: "有效期至",
						children: t.not_after
					})] }), /* @__PURE__ */ (0, Q.jsx)(N, { children: "二维码 10 分钟内有效，页面开着时会自动更新。Android 打不开 .local 地址时，在这台电脑上改用局域网 IP 打开本页再扫码。" })]
				})]
			})] }),
			/* @__PURE__ */ (0, Q.jsx)(I, { children: Go.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(B, {
				label: e,
				description: t
			}, e)) }),
			/* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(N, { children: "装好后在设备的证书详情里核对 SHA-256 指纹，与上面一致才算装对。" })
			}),
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(Je, {
				href: t.download,
				download: "peach-local-ca.crt",
				leadingIcon: Jn,
				children: "下载证书"
			}) })
		]
	});
}
// src/react/settings/device-sessions.tsx
var qo = "/api/configuration/access/sessions", Jo = (e) => e.device || "未识别的浏览器", Yo = {
	glyph: ft,
	brand: "apple"
}, Xo = {
	glyph: yn,
	brand: "android"
}, Zo = {
	iPhone: {
		platform: Yo,
		terminal: Jt
	},
	iPad: {
		platform: Yo,
		terminal: it
	},
	Android: {
		platform: Xo,
		terminal: Jt
	},
	"Android 平板": {
		platform: Xo,
		terminal: it
	},
	ChromeOS: {
		platform: { browser: "chrome" },
		terminal: Yn
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	},
	Windows: {
		platform: {
			glyph: qt,
			brand: "windows"
		},
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		terminal: Jn
	},
	macOS: {
		platform: Ko,
		terminal: Jn
	},
	Linux: { terminal: Jn }
}, Yo = "inline size-4 -mt-0.5 mr-1 align-middle";
function Xo({ platform: e }) {
	if ("browser" in e) return /* @__PURE__ */ (0, Q.jsx)(cr, {
		name: e.browser,
		className: Yo
========
		terminal: Yn
	},
	macOS: {
		platform: Yo,
		terminal: Yn
	},
	Linux: { terminal: Yn }
}, Qo = "inline size-4 -mt-0.5 mr-1 align-middle";
function $o({ platform: e }) {
	if ("browser" in e) return /* @__PURE__ */ (0, Q.jsx)(lr, {
		name: e.browser,
		className: Qo
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	});
	let { glyph: t, brand: n } = e;
	return /* @__PURE__ */ (0, Q.jsx)(t, {
		"aria-hidden": !0,
		"data-platform-mark": n,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		className: Yo
	});
}
function Zo({ row: e }) {
	if (!e.device) return Go(e);
	let t = e.device.split(" · "), n = Jo[t.at(-1) ?? ""] ? t.pop() : "", r = t.join(" · "), i = n ? Jo[n].platform : void 0;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [lr(r) ? /* @__PURE__ */ (0, Q.jsx)(cr, {
			name: r,
			className: Yo
		}) : null, r] }) : null,
		r && n ? " · " : null,
		n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [i ? /* @__PURE__ */ (0, Q.jsx)(Xo, { platform: i }) : null, n] }) : null
	] });
}
function Qo({ row: e }) {
	let t = Jo[e.device.split(" · ").at(-1) ?? ""]?.terminal ?? cn;
========
		className: Qo
	});
}
function es({ row: e }) {
	if (!e.device) return Jo(e);
	let t = e.device.split(" · "), n = Zo[t.at(-1) ?? ""] ? t.pop() : "", r = t.join(" · "), i = n ? Zo[n].platform : void 0;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [ur(r) ? /* @__PURE__ */ (0, Q.jsx)(lr, {
			name: r,
			className: Qo
		}) : null, r] }) : null,
		r && n ? " · " : null,
		n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [i ? /* @__PURE__ */ (0, Q.jsx)($o, { platform: i }) : null, n] }) : null
	] });
}
function ts({ row: e }) {
	let t = Zo[e.device.split(" · ").at(-1) ?? ""]?.terminal ?? sn;
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsx)(t, {
		"aria-hidden": !0,
		className: "size-5 shrink-0 text-foreground-icon-secondary"
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function $o({ row: e, children: t }) {
========
function ns({ row: e, children: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-h-13 w-full items-center justify-between gap-4 border-b border-separator-border py-2.5 pr-2.5 last:border-b-0",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			children: [/* @__PURE__ */ (0, Q.jsx)(Qo, { row: e }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-body-regular text-text-primary",
					children: /* @__PURE__ */ (0, Q.jsx)(Zo, { row: e })
				}), /* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ns(e)
========
			children: [/* @__PURE__ */ (0, Q.jsx)(ts, { row: e }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-body-regular text-text-primary",
					children: /* @__PURE__ */ (0, Q.jsx)(es, { row: e })
				}), /* @__PURE__ */ (0, Q.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: as(e)
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				})]
			})]
		}), t]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function es(e, t = Date.now() / 1e3) {
	let n = Math.max(0, t - e);
	return n < 60 ? "刚刚" : n < 3600 ? `${Math.floor(n / 60)} 分钟前` : n < 86400 ? `${Math.floor(n / 3600)} 小时前` : n < 2592e3 ? `${Math.floor(n / 86400)} 天前` : (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString("zh-CN");
}
function ts(e) {
	return e.network === "loopback" ? "运行 Peach 的电脑" : e.network ? e.remote ? `公网入口 · ${e.network}` : e.network : "";
}
var ns = (e) => [`最近活动 ${es(e.last_seen)}`, ts(e)].filter(Boolean).join(" · ");
function rs({ revision: e, receipt: t }) {
	let n = X({
		queryKey: ["access-sessions", e],
		refetchOnMount: "always",
		queryFn: ({ signal: e }) => W(Wo, e)
========
function rs(e, t = Date.now() / 1e3) {
	let n = Math.max(0, t - e);
	return n < 60 ? "刚刚" : n < 3600 ? `${Math.floor(n / 60)} 分钟前` : n < 86400 ? `${Math.floor(n / 3600)} 小时前` : n < 2592e3 ? `${Math.floor(n / 86400)} 天前` : (/* @__PURE__ */ new Date(e * 1e3)).toLocaleDateString("zh-CN");
}
function is(e) {
	return e.network === "loopback" ? "运行 Peach 的电脑" : e.network ? e.remote ? `公网入口 · ${e.network}` : e.network : "";
}
var as = (e) => [`最近活动 ${rs(e.last_seen)}`, is(e)].filter(Boolean).join(" · ");
function os({ revision: e, receipt: t }) {
	let n = X({
		queryKey: ["access-sessions", e],
		refetchOnMount: "always",
		queryFn: ({ signal: e }) => W(qo, e)
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	});
	return n.error ? /* @__PURE__ */ (0, Q.jsx)(L, {
		title: "已登录的设备",
		children: /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: q(n.error) }) })
	}) : n.isFetching || !n.data ? /* @__PURE__ */ (0, Q.jsx)(It, {
		label: "正在读取已登录的设备",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		html: ln
	}) : /* @__PURE__ */ (0, Q.jsx)(is, {
========
		html: cn
	}) : /* @__PURE__ */ (0, Q.jsx)(ss, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		initial: n.data,
		receipt: t
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function is({ initial: e, receipt: t }) {
========
function ss({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e);
	(0, Z.useEffect)(() => r(e), [e]);
	let i = n.sessions.filter((e) => !e.current);
	(0, Z.useEffect)(() => {
		An("devices", {
			rows: Math.min(n.sessions.length, 8),
			manageable: n.manageable && i.length > 0
		});
	}, [n, i.length]);
	let a = (e) => void rn({
		title: "撤销这台设备的登录",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		body: `${Go(e)}（${ns(e)}）下次打开 Peach 需要重新输入访问密码。`,
		confirmLabel: "撤销登录",
		onConfirm: async () => {
			r(await G(`${Wo}/revoke`, {
========
		body: `${Jo(e)}（${as(e)}）下次打开 Peach 需要重新输入访问密码。`,
		confirmLabel: "撤销登录",
		onConfirm: async () => {
			r(await G(`${qo}/revoke`, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				revision: n.revision,
				id: e.id
			})), t("已撤销登录");
		}
	});
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "已登录的设备",
		children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			n.sessions.length ? /* @__PURE__ */ (0, Q.jsx)(I, { children: n.sessions.map((e) => /* @__PURE__ */ (0, Q.jsx)($o, {
========
			n.sessions.length ? /* @__PURE__ */ (0, Q.jsx)(I, { children: n.sessions.map((e) => /* @__PURE__ */ (0, Q.jsx)(ns, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				row: e,
				children: e.current ? /* @__PURE__ */ (0, Q.jsx)(et, {
					color: "blue",
					variant: "caption",
					children: "本机"
				}) : n.manageable ? /* @__PURE__ */ (0, Q.jsx)(E, {
					size: "small",
					variant: "secondary",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					"aria-label": `撤销 ${Go(e)} 的登录`,
========
					"aria-label": `撤销 ${Jo(e)} 的登录`,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					onClick: () => a(e),
					children: "撤销"
				}) : null
			}, e.id)) }) : /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, { children: "还没有浏览器用访问密码登录过。" }) }),
			!n.manageable && i.length ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(N, { children: "在运行 Peach 的电脑上打开这一页才能撤销。" })
			}) : null,
			n.manageable && i.length ? /* @__PURE__ */ (0, Q.jsx)(M, {
				status: "修改访问密码会让全部设备退出。",
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: () => void rn({
						title: "撤销其他设备的登录",
						body: `除本机以外的 ${i.length} 台设备下次打开 Peach 需要重新输入访问密码。`,
						confirmLabel: "撤销登录",
						onConfirm: async () => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
							let e = await G(`${Wo}/revoke`, {
========
							let e = await G(`${qo}/revoke`, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
								revision: n.revision,
								scope: "others"
							});
							r(e), t(`已撤销 ${e.removed} 台设备的登录`);
						}
					}),
					children: "撤销其他设备"
				})
			}) : null
		]
	});
}
// src/react/components/configuration-fields.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function as({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: o, children: s }) {
========
function cs({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: o, children: s }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let c = `${e}-label`;
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(gt, {
				id: c,
				elementType: "span",
				children: t
			}),
			/* @__PURE__ */ (0, Q.jsx)(Lt, {
				id: e,
				"aria-labelledby": c,
				orientation: "horizontal",
				className: Nt,
				value: n,
				onChange: r,
				isDisabled: a,
				isInvalid: o,
				children: i.map((e) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
					value: e.value,
					className: Mt,
					children: e.label
				}, e.value))
			}),
			s
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function os({ prefix: e, suffix: t, ...n }) {
========
function ls({ prefix: e, suffix: t, ...n }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let r = () => /* @__PURE__ */ (0, Q.jsx)("span", {
		className: "shrink-0 pr-1 text-body-regular text-text-secondary",
		children: t
	});
	return /* @__PURE__ */ (0, Q.jsx)(P, {
		...n,
		leadingAddon: e ? /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "shrink-0 pl-1 text-body-regular text-text-secondary",
			children: e
		}) : void 0,
		trailingIcon: t ? r : void 0
	});
}
// src/react/settings/port-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var ss = [{
========
var us = [{
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	value: "0.0.0.0",
	label: "同一局域网的设备"
}, {
	value: "127.0.0.1",
	label: "只有这台电脑"
}];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function cs({ data: e, receipt: t }) {
	let n = e.network, r = n ? n.editable : e.editable && e.port_editable !== !1, [i, a] = (0, Z.useState)(n?.host ?? "127.0.0.1"), [o, s] = (0, Z.useState)(n?.mdns_name ?? "peach"), [c, l] = (0, Z.useState)(String(e.port)), [u, d] = (0, Z.useState)({}), [f, p] = (0, Z.useState)(null), m = Y();
	return (0, Z.useEffect)(() => {
		if (!f) return;
		let e = setTimeout(() => location.assign(f.url), Ua);
========
function ds({ data: e, receipt: t }) {
	let n = e.network, r = n ? n.editable : e.editable && e.port_editable !== !1, [i, a] = (0, Z.useState)(n?.host ?? "127.0.0.1"), [o, s] = (0, Z.useState)(n?.mdns_name ?? "peach"), [c, l] = (0, Z.useState)(String(e.port)), [u, d] = (0, Z.useState)({}), [f, p] = (0, Z.useState)(null), m = Y();
	return (0, Z.useEffect)(() => {
		if (!f) return;
		let e = setTimeout(() => location.assign(f.url), Ba);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		return () => clearTimeout(e);
	}, [f]), f ? /* @__PURE__ */ (0, Q.jsx)(L, {
		guide: "port",
		title: "访问地址",
		children: /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsxs)(F, {
			tone: "success",
			title: "配置已保存",
			children: ["Peach 正在重新启动。", /* @__PURE__ */ (0, Q.jsx)(_t, {
				href: f.url,
				size: "small",
				children: "返回网络与访问"
			})]
		}) })
	}) : /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "port",
		title: "访问地址",
		onSubmit: r ? (r) => {
			r.preventDefault(), d({}), m.run("save", (t) => G(Qe, {
				revision: e.revision,
				media_dirs: e.media_dirs,
				...e.media_sources ? { media_sources: e.media_sources } : {},
				port: c,
				scan_now: !1,
				...n?.editable ? {
					host: i,
					...i === "0.0.0.0" ? { mdns_name: o } : {}
				} : {}
			}, "POST", t), (e) => {
				p({ url: new URL("/settings/network", e.url).href }), t("已保存配置");
			}, (e) => {
				let t = e instanceof qe && e.status === 400 ? e.body?.errors : null;
				t && (t.port || t.host || t.mdns_name) ? d(t) : m.setError(q(e));
			});
		} : void 0,
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ls, {
========
			n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(fs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				label: "本机地址",
				value: n.local_url,
				receipt: t
			}), n.lan_url || n.ip_url ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				/* @__PURE__ */ (0, Q.jsx)(ls, {
========
				/* @__PURE__ */ (0, Q.jsx)(fs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					label: "手机连接地址",
					value: n.lan_url || n.ip_url,
					receipt: t
				}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				n.lan_url && n.ip_url ? /* @__PURE__ */ (0, Q.jsx)(ls, {
========
				n.lan_url && n.ip_url ? /* @__PURE__ */ (0, Q.jsx)(fs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					label: "备用 IP 地址",
					value: n.ip_url,
					receipt: t
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(N, { children: ["手机与电脑连接同一 Wi-Fi。", n.ip_url && n.lan_url ? "名称地址打不开时，可尝试备用 IP 地址。" : ""] })
			] }) : /* @__PURE__ */ (0, Q.jsx)(N, { children: n.scope === "local" ? "当前只允许这台电脑访问，手机无法连接。" : "局域网连接地址未取得，请检查电脑的网络连接和服务启动配置。" })] }) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [n?.editable ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(as, {
========
			r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [n?.editable ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(cs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				id: "configHost",
				label: "谁可以访问",
				value: i,
				onChange: a,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				options: ss,
				isDisabled: !!m.busy,
				isInvalid: !!u.host,
				children: u.host ? /* @__PURE__ */ (0, Q.jsx)(k, { children: u.host }) : null
			}), i === "0.0.0.0" ? /* @__PURE__ */ (0, Q.jsx)(os, {
========
				options: us,
				isDisabled: !!m.busy,
				isInvalid: !!u.host,
				children: u.host ? /* @__PURE__ */ (0, Q.jsx)(k, { children: u.host }) : null
			}), i === "0.0.0.0" ? /* @__PURE__ */ (0, Q.jsx)(ls, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				id: "configMdnsName",
				label: "局域网访问地址",
				value: o,
				onChange: s,
				prefix: n.local_url.startsWith("https:") ? "https://" : "http://",
				suffix: ".local",
				autoComplete: "off",
				spellCheck: "false",
				maxLength: 63,
				isDisabled: !!m.busy,
				validationBehavior: "aria",
				isInvalid: !!u.mdns_name,
				hint: u.mdns_name || void 0
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			}) : null] }) : null, /* @__PURE__ */ (0, Q.jsx)(os, {
========
			}) : null] }) : null, /* @__PURE__ */ (0, Q.jsx)(ls, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				id: "configPort",
				label: "端口",
				prefix: "localhost:",
				inputMode: "numeric",
				value: c,
				onChange: l,
				isDisabled: !!m.busy,
				validationBehavior: "aria",
				isInvalid: !!u.port,
				hint: u.port
			})] }) : /* @__PURE__ */ (0, Q.jsx)(N, { children: e.notice || "访问范围、名称与端口由服务启动配置管理。" }),
			n?.editable && i === "0.0.0.0" && n.scope === "local" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "保存并重启后显示手机连接地址。可在下方设置访问密码。" }) : null,
			m.error ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "没有保存",
				children: m.error
			}) : null
		] }), r ? /* @__PURE__ */ (0, Q.jsx)(M, {
			status: "保存后 Peach 会重启，并跳转到新地址。",
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(m.busy === "save"),
				children: "保存配置"
			})
		}) : null]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ls({ label: e, value: t, receipt: n }) {
========
function fs({ label: e, value: t, receipt: n }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let r = Y();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)(P, {
				className: "min-w-0 flex-1",
				label: e,
				value: t,
				isReadOnly: !0,
				autoComplete: "off"
			}), /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				"aria-label": `复制${e}`,
				onClick: () => void r.run("copy", () => navigator.clipboard.writeText(t), () => n("已复制地址")),
				children: "复制地址"
			})]
		}), r.error ? /* @__PURE__ */ (0, Q.jsx)(N, {
			role: "status",
			children: "复制失败，请选中地址复制。"
		}) : null]
	});
}
// src/react/settings/peach-proxy-fields.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var us = [
========
var ps = [
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	["environment", "跟随环境"],
	["direct", "直连"],
	["proxy", "自定义"]
];
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ds({ mode: e, onChange: t, labelledBy: n }) {
========
function ms({ mode: e, onChange: t, labelledBy: n }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsx)(R, {
		"aria-label": n ? void 0 : "连接方式",
		"aria-labelledby": n,
		selectedKey: e,
		onSelectionChange: (e) => {
			e !== null && t(String(e));
		},
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		children: us.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
========
		children: ps.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			id: e,
			children: t
		}, e))
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function fs({ id: e, value: t, onChange: n, saved: r = !1, error: i }) {
========
function hs({ id: e, value: t, onChange: n, saved: r = !1, error: i }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsx)(P, {
		id: e,
		type: "password",
		label: "代理地址",
		autoComplete: "off",
		spellCheck: "false",
		value: t,
		onChange: n,
		placeholder: r ? "已保存，留空保留" : "http://127.0.0.1:7890",
		validationBehavior: "aria",
		isInvalid: !!i,
		hint: i
	});
}
// src/react/settings/tunnel-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var ps = 2e3, ms = [["quick", "临时链接"], ["named", "命名隧道"]], hs = {
	quick: "临时预览用，地址随机，重启后会变。启动前要先设置访问密码。",
	named: "使用你在 Cloudflare 绑定的固定域名。启动前要先设置访问密码。"
};
function gs({ revision: e, initial: t, receipt: n }) {
========
var gs = 2e3, _s = [["quick", "临时链接"], ["named", "命名隧道"]], vs = {
	quick: "临时预览用，地址随机，重启后会变。启动前要先设置访问密码。",
	named: "使用你在 Cloudflare 绑定的固定域名。启动前要先设置访问密码。"
};
function ys({ revision: e, initial: t, receipt: n }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [r, i] = (0, Z.useState)(t), [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)(t.mode), [l, u] = (0, Z.useState)(t.hostname), [d, f] = (0, Z.useState)(""), [p, m] = (0, Z.useState)({}), h = Y(), g = r.state === "starting" || r.state === "running", _ = r.named_available && s === "named";
	(0, Z.useEffect)(() => {
		if (r.state !== "starting") return;
		let e = new AbortController(), t = window.setInterval(() => {
			un(e.signal).then((t) => {
				!e.signal.aborted && t.tunnel && (On.setQueryData(Ze, t), i(t.tunnel), o(t.revision));
			}).catch(() => void 0);
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		}, ps);
========
		}, gs);
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		return () => {
			e.abort(), window.clearInterval(t);
		};
	}, [r.state]);
	let v = (e, t, n) => {
		m({}), h.run(e, (e) => G("/api/configuration/tunnel", {
			revision: a,
			enabled: t,
			mode: s,
			hostname: l,
			token: d
		}, "POST", e), (e) => {
			i(e), o(e.revision), c(e.mode), u(e.hostname), f(""), n(e);
		}, (e) => {
			let t = e instanceof qe ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? m(n) : h.setError(q(e));
		});
	};
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "tunnel",
		guide: "tunnel",
		title: "Cloudflare 公网入口",
		onSubmit: (e) => {
			e.preventDefault(), v("save", g, () => n("已保存配置"));
		},
		aside: /* @__PURE__ */ (0, Q.jsx)(H, {
			tone: r.error ? "error" : g ? "progress" : "neutral",
			children: r.error ? "连接失败" : r.state === "running" ? "运行中" : r.state === "starting" ? "连接中" : "已停止"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
			r.named_available ? /* @__PURE__ */ (0, Q.jsx)(Lt, {
				"aria-label": "公网入口的形态（二选一）",
				value: s,
				isDisabled: g,
				onChange: (e) => c(e),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				className: Nt,
				children: ms.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
========
				className: Mt,
				children: _s.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					value: e,
					className: Mt,
					children: t
				}, e))
			}) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(N, { children: hs[_ ? "named" : "quick"] }),
========
			/* @__PURE__ */ (0, Q.jsx)(N, { children: vs[_ ? "named" : "quick"] }),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			_ ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(P, {
				id: "tunnel-hostname",
				label: "公开主机名",
				autoComplete: "off",
				maxLength: 253,
				value: l,
				onChange: u,
				isDisabled: g,
				validationBehavior: "aria",
				isInvalid: !!p.hostname,
				hint: p.hostname || "Cloudflare Zero Trust 里指向这台电脑的主机名。"
			}), /* @__PURE__ */ (0, Q.jsx)(P, {
				id: "tunnel-token",
				type: "password",
				label: "隧道令牌",
				autoComplete: "off",
				maxLength: 2048,
				value: d,
				onChange: f,
				isDisabled: g,
				validationBehavior: "aria",
				hint: r.token_set ? "已保存，留空不改。" : "在 Cloudflare Zero Trust 的隧道详情页复制。"
			})] }) : null,
			r.available ? null : /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "warning",
				title: "找不到 cloudflared",
				children: "安装官方 cloudflared，或用设置文件的 tunnel.binary 与 PEACH_CLOUDFLARED 指定路径。"
			}),
			r.state === "running" && r.url ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "info",
				title: "公网地址",
				children: /* @__PURE__ */ (0, Q.jsx)(A, {
					href: r.url,
					children: r.url
				})
			}) : null,
			r.state === "starting" ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "info",
				title: "正在连接",
				children: "正在等待 cloudflared 连上 Cloudflare 边缘。"
			}) : null,
			r.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: r.error }) : null,
			h.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: h.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsxs)(M, {
			status: r.enabled ? "Peach 重启后自动恢复。" : void 0,
			children: [/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: r.named_available ? "secondary" : "primary",
				onClick: () => v("toggle", !g, (e) => n(e.enabled ? "公网入口已启动" : "公网入口已停止")),
				...K(h.busy === "toggle"),
				children: g ? "停止公网入口" : "启动公网入口"
			}), r.named_available ? /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(h.busy === "save"),
				children: "保存配置"
			}) : null]
		})]
	});
}
// src/react/settings/network-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function _s({ data: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...dr(n),
		children: [
			r,
			e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources ? /* @__PURE__ */ (0, Q.jsx)(cs, {
				data: e,
				receipt: t
			}) : null,
			e.access ? /* @__PURE__ */ (0, Q.jsx)(Uo, {
				initial: e.access,
				receipt: t,
				devices: (e) => /* @__PURE__ */ (0, Q.jsx)(rs, {
========
function bs({ data: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...fr(n),
		children: [
			r,
			e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources ? /* @__PURE__ */ (0, Q.jsx)(ds, {
				data: e,
				receipt: t
			}) : null,
			e.access ? /* @__PURE__ */ (0, Q.jsx)(Bo, {
				initial: e.access,
				receipt: t,
				devices: (e) => /* @__PURE__ */ (0, Q.jsx)(os, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					revision: e.revision,
					receipt: t
				}),
				after: e.api_token ? (n) => /* @__PURE__ */ (0, Q.jsx)(Uo, {
					initial: e.api_token,
					mode: n.mode,
					receipt: t
				}) : void 0
			}) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			e.tunnel ? /* @__PURE__ */ (0, Q.jsx)(gs, {
========
			e.certificate ? /* @__PURE__ */ (0, Q.jsx)(Ko, { initial: e.certificate }) : null,
			e.tunnel ? /* @__PURE__ */ (0, Q.jsx)(ys, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				revision: e.revision,
				initial: e.tunnel,
				receipt: t
			}) : null,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			e.peach_proxy ? /* @__PURE__ */ (0, Q.jsx)(vs, {
========
			e.peach_proxy ? /* @__PURE__ */ (0, Q.jsx)(xs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				initial: e.peach_proxy,
				receipt: t
			}) : null
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function vs({ initial: e, receipt: t }) {
========
function xs({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.mode), [o, s] = (0, Z.useState)(""), c = Y();
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "peachProxy",
		guide: "proxy",
		title: "Peach 代理",
		onSubmit: (e) => {
			e.preventDefault(), c.run("save", (e) => G("/api/configuration/peach-proxy", {
				mode: i,
				proxy: o
			}, "POST", e), (e) => {
				r(e), s(""), t("已保存配置");
			});
		},
		children: [
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "连接方式",
				description: "Peach 访问外网和采集来源时使用。",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: /* @__PURE__ */ (0, Q.jsx)(ds, {
========
				children: /* @__PURE__ */ (0, Q.jsx)(ms, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					mode: i,
					onChange: a
				})
			}) }),
			i === "proxy" || n.needs_selection || c.error ? /* @__PURE__ */ (0, Q.jsxs)(V, {
				divided: !0,
				children: [
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					i === "proxy" ? /* @__PURE__ */ (0, Q.jsx)(fs, {
========
					i === "proxy" ? /* @__PURE__ */ (0, Q.jsx)(hs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						id: "peachProxyAddress",
						value: o,
						onChange: s,
						saved: n.proxy_saved
					}) : null,
					n.needs_selection ? /* @__PURE__ */ (0, Q.jsx)(F, {
						tone: "warning",
						title: "需要选择连接方式",
						children: "已有来源的代理地址不同，请选择公共连接方式。"
					}) : null,
					c.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: c.error }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(c.busy === "save"),
				children: "保存配置"
			}) })
		]
	});
}
// src/react/follow-manage/credentials.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var ys = "将清除这个来源在本机和共享副本中的登录凭据。", bs = "其他系统用户可以读取此凭据文件。请在运行 Peach 的 Mac 或 Linux 电脑上，将文件权限设为仅当前用户可读写（0600）。";
function xs(e, t) {
	return (e.shared_fields || []).includes(t) ? "来自共享，留空表示不改" : e.fields.includes(t) ? "已保存，留空表示不改" : "未填写";
}
function Ss({ row: e }) {
	if (an(e)) return /* @__PURE__ */ (0, Q.jsx)(et, {
========
var Ss = "将清除这个来源在本机和共享副本中的登录凭据。", Cs = "其他系统用户可以读取此凭据文件。请在运行 Peach 的 Mac 或 Linux 电脑上，将文件权限设为仅当前用户可读写（0600）。";
function ws(e, t) {
	return (e.shared_fields || []).includes(t) ? "来自共享，留空表示不改" : e.fields.includes(t) ? "已保存，留空表示不改" : "未填写";
}
function Ts({ row: e }) {
	if (rn(e)) return /* @__PURE__ */ (0, Q.jsx)(et, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		variant: "caption",
		color: "lime",
		children: "已配置"
	});
	let t = e.requirement === "required" ? "yellow" : e.requirement === "blocked" ? "rose" : "neutral";
	return /* @__PURE__ */ (0, Q.jsx)(et, {
		variant: "caption",
		color: t,
		children: $e[e.requirement] || ""
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Cs({ row: e, readOnly: t, toast: n }) {
	let [r, i] = (0, Z.useState)({}), [a, o] = (0, Z.useState)(""), s = an(e), c = Hn({
		mutationFn: (t) => Pn(e.provider, t),
========
function Es({ row: e, readOnly: t, toast: n }) {
	let [r, i] = (0, Z.useState)({}), [a, o] = (0, Z.useState)(""), s = rn(e), c = Vn({
		mutationFn: (t) => Nn(e.provider, t),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		onSuccess: (e, t) => {
			e.note ? o(e.note) : (o(""), i({}), On.invalidateQueries({
				queryKey: st,
				exact: !0
			}), n(Object.keys(t).length ? "已保存来源凭据" : "已清除来源凭据"));
		},
		onError: (e) => o(q(e))
	}), l = () => {
		let e = Object.fromEntries(Object.entries(r).map(([e, t]) => [e, t.trim()]).filter(([, e]) => e));
		Object.keys(e).length ? c.mutate(e) : o("没有填写内容");
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(N, { children: [e.why, e.where ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [" ", /* @__PURE__ */ (0, Q.jsx)(A, {
				href: e.where,
				children: "获取凭据"
			})] }) : null] }),
			e.howto ? /* @__PURE__ */ (0, Q.jsx)(N, { children: e.howto }) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex w-full flex-col gap-3",
				children: (e.needs || []).map((n) => /* @__PURE__ */ (0, Q.jsx)(P, {
					type: "password",
					label: n,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					placeholder: xs(e, n),
========
					placeholder: ws(e, n),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					autoComplete: "off",
					spellCheck: "false",
					isDisabled: t,
					value: r[n] || "",
					onChange: (e) => i({
						...r,
						[n]: e
					}),
					className: "w-full min-w-0"
				}, n))
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [s ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "danger",
					disabled: t,
					...K(c.isPending),
					onClick: () => void rn({
						title: "清除来源凭据",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
						body: ys,
========
						body: Ss,
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						confirmLabel: "清除来源凭据",
						danger: !0,
						onConfirm: () => c.mutateAsync({})
					}),
					children: "清除"
				}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "primary",
					disabled: t,
					...K(c.isPending),
					onClick: l,
					children: "保存配置"
				})]
			}),
			a ? /* @__PURE__ */ (0, Q.jsx)(k, { children: a }) : null,
			(e.shared_fields || []).length ? /* @__PURE__ */ (0, Q.jsx)(N, { children: `${e.shared_fields.join("、")} 使用共享副本中的登录信息，本机没有单独保存。清除时，本机和共享副本中的登录信息都会删除。` }) : null,
			e.path ? /* @__PURE__ */ (0, Q.jsx)(O, {
				summary: "凭据文件",
				children: /* @__PURE__ */ (0, Q.jsx)(kt, {
					path: e.path,
					className: "font-mono text-caption-1-regular text-text-tertiary",
					onRevealed: n
				})
			}) : null
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ws({ row: e, readOnly: t, toast: n }) {
========
function Ds({ row: e, readOnly: t, toast: n }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let r = /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "inline-flex size-3.5 shrink-0 items-center justify-center",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: /* @__PURE__ */ (0, Q.jsx)(sr, { provider: e.provider })
========
				children: /* @__PURE__ */ (0, Q.jsx)(cr, { provider: e.provider })
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			}),
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
				children: e.provider_label
			}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(Ss, { row: e }),
========
			/* @__PURE__ */ (0, Q.jsx)(Ts, { row: e }),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			e.missing.map((e) => /* @__PURE__ */ (0, Q.jsx)(et, {
				variant: "caption",
				color: "rose",
				children: `缺 ${e}`
			}, e))
		]
	});
	return e.requirement === "none" || e.requirement === "blocked" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [r, e.requirement === "blocked" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: e.why }) : null]
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [
			r,
			/* @__PURE__ */ (0, Q.jsx)(O, {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				summary: an(e) ? "修改凭据" : "填写凭据",
				defaultOpen: e.requirement === "required" && !an(e),
				children: /* @__PURE__ */ (0, Q.jsx)(Cs, {
========
				summary: rn(e) ? "修改凭据" : "填写凭据",
				defaultOpen: e.requirement === "required" && !rn(e),
				children: /* @__PURE__ */ (0, Q.jsx)(Es, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
					row: e,
					readOnly: t,
					toast: n
				})
			}),
			e.world_readable ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "凭据文件权限过宽",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				children: bs
========
				children: Cs
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
			}) : null
		]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ts({ data: e, readOnly: t, toast: n, embedded: r = !1 }) {
	let i = e.providers || [], a = i.filter((e) => e.requirement === "required" && !an(e));
========
function Os({ data: e, readOnly: t, toast: n, embedded: r = !1 }) {
	let i = e.providers || [], a = i.filter((e) => e.requirement === "required" && !rn(e));
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	if ((0, Z.useEffect)(() => {
		An("credentials", { done: i.filter(an).map((e) => e.provider) });
	}, [e]), !i.length) return /* @__PURE__ */ (0, Q.jsx)(it, {
		size: "compact",
		icon: nn,
		title: "没有可配置的来源",
		children: "已接入的站点及其凭据状态会显示在这里。"
	});
	let o = a.length ? /* @__PURE__ */ (0, Q.jsx)("span", {
		className: "text-body-2-regular text-text-error-primary",
		children: `${a.length} 个待配置`
	}) : null, s = /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: [
		{
			title: "可配置凭据",
			rows: i.filter((e) => e.requirement !== "none" && e.requirement !== "blocked")
		},
		{
			title: "不需要凭据",
			rows: i.filter((e) => e.requirement === "none")
		},
		{
			title: "暂不支持",
			rows: i.filter((e) => e.requirement === "blocked")
		}
	].filter((e) => e.rows.length).map((e) => /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": e.title,
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)("h4", {
			className: "text-body-medium text-text-secondary",
			children: e.title
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: $t({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			children: e.rows.map((e) => /* @__PURE__ */ (0, Q.jsx)(ws, {
========
			children: e.rows.map((e) => /* @__PURE__ */ (0, Q.jsx)(Ds, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				row: e,
				readOnly: t,
				toast: n
			}, e.provider))
		})]
	}, e.title)) });
	return r ? /* @__PURE__ */ (0, Q.jsx)(L, {
		guide: "credentials",
		title: "来源凭据",
		aside: o || void 0,
		children: /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-col gap-4",
			children: s
		}) })
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: $t({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "mr-auto text-title-2-medium text-text-primary",
				children: "来源凭据"
			}), o]
		}), s]
	});
}
// src/react/settings/entry-links-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Es({ initial: e, receipt: t }) {
========
function ks({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e.sites), i = Y(), a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		host: t
	} : n));
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "entry-links",
		title: "作品资料站点",
		onSubmit: (e) => {
			e.preventDefault();
			let a = { sites: Object.fromEntries(n.map((e) => [e.key, { host: e.host }])) };
			i.run("save", (e) => G("/api/configuration/entry-links", a, "POST", e), (e) => {
				r(e.sites), t("已保存配置");
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
			/* @__PURE__ */ (0, Q.jsx)(N, { children: nt }),
			n.map((e) => /* @__PURE__ */ (0, Q.jsx)(P, {
				id: `entry-link-${e.key}`,
				label: /* @__PURE__ */ (0, Q.jsx)(Bt, {
					site: e.key,
					label: `${e.label} 地址`
				}),
				autoComplete: "off",
				maxLength: 100,
				value: e.host,
				placeholder: e.default_host,
				onChange: (t) => a(e.key, t),
				validationBehavior: "aria",
				hint: rt
			}, e.key)),
			i.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: i.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...K(i.busy === "save"),
			children: "保存配置"
		}) })]
	});
}
// src/react/settings/indexer-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Ds = "/api/configuration/indexers";
function Os({ receipt: e }) {
	let t = X({
		queryKey: ["indexers"],
		queryFn: ({ signal: e }) => W(Ds, e),
========
var As = "/api/configuration/indexers";
function js({ receipt: e }) {
	let t = X({
		queryKey: ["indexers"],
		queryFn: ({ signal: e }) => W(As, e),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		refetchOnMount: "always"
	});
	return t.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: q(t.error) }) : t.isFetching ? /* @__PURE__ */ (0, Q.jsx)(It, {
		label: "正在读取资源搜索设置",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		html: vn
	}) : t.data ? /* @__PURE__ */ (0, Q.jsx)(js, {
========
		html: _n
	}) : t.data ? /* @__PURE__ */ (0, Q.jsx)(Ps, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		initial: t.data,
		receipt: e
	}) : null;
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function ks(e) {
========
function Ms(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	try {
		return new globalThis.URL(e).host;
	} catch {
		return e;
	}
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function As({ row: e, index: t }) {
	let n = [
		e.url ? ks(e.url) : "未填地址",
========
function Ns({ row: e, index: t }) {
	let n = [
		e.url ? Ms(e.url) : "未填地址",
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		e.enabled ? "已启用" : "已停用",
		e.api_key_set && !e.clear_api_key ? "已保存 API key" : e.api_key ? "API key 待保存" : "没有 API key"
	];
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-baseline gap-3",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "shrink-0 text-text-primary",
			children: e.name || `索引器 ${t + 1}`
		}), /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "truncate text-body-2-regular text-text-secondary",
			children: n.join(" · ")
		})]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function js({ initial: e, receipt: t }) {
========
function Ps({ initial: e, receipt: t }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let [n, r] = (0, Z.useState)(e.indexers), i = Y();
	(0, Z.useEffect)(() => {
		An("indexers", { open: e.indexers.map((e) => !e.url) });
	}, [e]);
	let a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		...t
	} : n));
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		guide: "indexers",
		title: "资源搜索",
		onSubmit: (e) => {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			e.preventDefault(), i.run("save", (e) => G(Ds, { indexers: n }, "POST", e), (e) => {
========
			e.preventDefault(), i.run("save", (e) => G(As, { indexers: n }, "POST", e), (e) => {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				r(e.indexers), t("已保存索引器");
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(O, {
				summary: "索引器连接帮助",
				children: /* @__PURE__ */ (0, Q.jsxs)(N, { children: [
					"填写 Prowlarr 或 Jackett 提供的 Torznab 地址和 API key。",
					" ",
					/* @__PURE__ */ (0, Q.jsx)(A, {
						href: "https://github.com/peach-mitao/peach/blob/master/docs/RESOURCE_SEARCH.md",
						children: "详细配置说明"
					})
				] })
			}), n.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "min-w-0 border-t border-separator-border pt-2",
				children: /* @__PURE__ */ (0, Q.jsx)(O, {
					defaultOpen: !e.url,
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					summary: /* @__PURE__ */ (0, Q.jsx)(As, {
========
					summary: /* @__PURE__ */ (0, Q.jsx)(Ns, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						row: e,
						index: t
					}),
					children: /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(P, {
								label: "名称",
								"aria-label": `索引器 ${t + 1} 名称`,
								value: e.name,
								maxLength: 80,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { name: t })
							}),
							/* @__PURE__ */ (0, Q.jsx)(P, {
								label: "Torznab 地址",
								"aria-label": `索引器 ${t + 1} Torznab 地址`,
								value: e.url,
								type: "url",
								autoComplete: "off",
								placeholder: "索引器提供的 API 地址",
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { url: t })
							}),
							/* @__PURE__ */ (0, Q.jsx)(P, {
								label: "API key",
								"aria-label": `索引器 ${t + 1} API key`,
								type: "password",
								autoComplete: "new-password",
								value: e.api_key || "",
								placeholder: e.api_key_set ? "已保存，留空不改" : void 0,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { api_key: t })
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-6 gap-y-2",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(D, {
										isSelected: e.enabled,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { enabled: t }),
										children: "启用"
									}),
									e.api_key_set ? /* @__PURE__ */ (0, Q.jsx)(D, {
										isSelected: !!e.clear_api_key,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { clear_api_key: t }),
										children: "清除已保存的 API key"
									}) : null,
									/* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "danger",
										type: "button",
										size: "small",
										disabled: !!i.busy,
										"aria-label": `移除索引器 ${t + 1}`,
										onClick: () => r(n.filter((t) => t.key !== e.key)),
										children: "移除"
									})
								]
							})
						]
					})
				})
			}, e.key))]
		}), i.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: i.error }) : null] }), /* @__PURE__ */ (0, Q.jsxs)(M, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			type: "button",
			disabled: !!i.busy || n.length >= e.max_indexers,
			onClick: () => r([...n, {
				key: kn(),
				name: "",
				url: "",
				enabled: !0,
				api_key_set: !1
			}]),
			children: "添加索引器"
		}), /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...K(i.busy === "save"),
			children: "保存配置"
		})] })]
	});
}
// src/react/settings/source-settings.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ms({ data: e, receipt: t, panel: n, issues: r }) {
========
function Fs({ data: e, receipt: t, panel: n, issues: r }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let i = X({
		queryKey: st,
		queryFn: ({ signal: e }) => dn(e),
		enabled: n?.active !== !1,
		refetchOnMount: "always"
	});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
		...dr(n),
========
		...fr(n),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		children: [
			r,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				"data-guide-target": "sources",
				children: /* @__PURE__ */ (0, Q.jsx)(Je, {
					href: "/sources",
					variant: "secondary",
					children: "采集来源与登录状态"
				})
			}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			i.data ? /* @__PURE__ */ (0, Q.jsx)(Ts, {
========
			i.data ? /* @__PURE__ */ (0, Q.jsx)(Os, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				data: i.data,
				readOnly: !!e.ledger_read_only,
				toast: t,
				embedded: !0
			}) : i.error ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "来源凭据未取得",
				children: q(i.error)
			}) : n?.active === !1 ? null : /* @__PURE__ */ (0, Q.jsx)(It, {
				label: "正在读取来源凭据",
				html: on
			}),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			/* @__PURE__ */ (0, Q.jsx)(ko, { receipt: t }),
			/* @__PURE__ */ (0, Q.jsx)(Os, { receipt: t }),
			e.entry_links ? /* @__PURE__ */ (0, Q.jsx)(Es, {
========
			/* @__PURE__ */ (0, Q.jsx)(Eo, { receipt: t }),
			/* @__PURE__ */ (0, Q.jsx)(js, { receipt: t }),
			e.entry_links ? /* @__PURE__ */ (0, Q.jsx)(ks, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				initial: e.entry_links,
				receipt: t
			}) : null
		]
	});
}
// src/react/settings/configuration-shape.ts
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ns(e) {
========
function Is(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let t = e.downloads;
	if (!t) return null;
	let n = t.media_sources ?? [];
	return {
		cloud: n.some((e) => Ye.includes(e)),
		has115: n.includes("115"),
		pikpak: n.includes("pikpak"),
		pikpakRoots: t.pikpak_roots.length > 0,
		pikpakLoggedIn: t.pikpak.logged_in,
		browserLogin: t.pikpak_browser.available
	};
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ps(e) {
========
function Ls(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let t = e.tunnel;
	return {
		port: !!(e.editable && e.port_editable !== !1),
		addresses: e.network ? 1 + Number(!!(e.network.lan_url || e.network.ip_url)) + Number(!!(e.network.lan_url && e.network.ip_url)) : 0,
		networkEditable: !!e.network?.editable,
		lan: e.network?.host === "0.0.0.0",
		proxyAddress: e.peach_proxy?.mode === "proxy" || !!e.peach_proxy?.needs_selection,
		access: e.access?.mode ?? "",
		tunnelNamed: !!t?.named_available,
		tunnelNamedMode: !!(t?.named_available && t.mode === "named"),
		tunnelNote: !!(t && (!t.available || t.state === "starting" || t.state === "running" && t.url))
	};
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Fs(e) {
========
function Rs(e) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let t = e.updates, n = e.update_job?.state ?? "idle", r = !t || t.state === "unchecked" && !t.checked_at && n === "idle", i = +!!t?.package_kind + (r ? 0 : +!!t?.checked_at + (t?.state === "unchecked" ? 0 : 1) + (n === "idle" ? 0 : 1)), a = e.automatic_updates, o = e.storage;
	return {
		releaseFacts: t?.package_kind ? 5 : 4,
		releaseNotes: i,
		autoUpdateHelp: !(!a || a.available && !a.download_available),
		startupNote: !!e.startup?.message,
		desktopNote: !!e.startup?.desktop_message,
		storageRows: o?.usage?.categories.length ?? 0,
		storageNotes: o && !o.relocation.available ? 1 : 0,
		reporting: !!e.remote_reporting,
		reportingIdle: !(!e.remote_reporting || e.remote_reporting.available),
		sharing: !!e.library_sharing,
		sharingNotice: !!e.library_sharing?.notice,
		sharingIdle: !(!e.library_sharing || e.library_sharing.available),
		facts: e.facts.map((e) => e.term),
		uninstall: !!e.uninstall,
		uninstallHelp: !!e.uninstall?.available
	};
}
// src/react/settings/configuration-page.tsx
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Is({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
========
function zs({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	let i = X({
		queryKey: Ze,
		queryFn: ({ signal: e }) => un(e)
	}), a = i.data;
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	return a ? /* @__PURE__ */ (0, Q.jsx)(zs, {
========
	return a ? /* @__PURE__ */ (0, Q.jsx)(Hs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		data: a,
		receipt: e,
		reopenTutorial: t,
		section: n,
		diagnostics: r,
		refreshing: i.isFetching,
		reload: () => {
			i.refetch({ cancelRefetch: !1 });
		}
	}) : /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "ui-configpage",
		children: /* @__PURE__ */ (0, Q.jsx)(F, {
			tone: "error",
			title: "配置读取失败",
			children: i.error ? q(i.error) : "未取得配置，请刷新页面重试。"
		})
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
function Ls({ data: e, sections: t, reload: n, refreshing: r }) {
========
function Bs({ data: e, sections: t, reload: n, refreshing: r }) {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	return /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => {
		let i = e.section_errors?.[t];
		return i ? /* @__PURE__ */ (0, Q.jsx)(F, {
			tone: "error",
			title: i.title,
			action: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				size: "small",
				onClick: n,
				...K(r),
				children: "重新读取"
			}),
			children: i.message
		}, t) : null;
	}) });
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
var Rs = 0;
function zs({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let [s] = (0, Z.useState)(() => `board-tabs-${++Rs}`), [c, l] = (0, Z.useState)(r), u = (0, Z.useRef)(null), d = (0, Z.useRef)(c);
	(0, Z.useEffect)(() => {
		l(r);
	}, [r]), (0, Z.useEffect)(() => {
		let t = Ns(e);
		t && An("downloads", t), An("network", Ps(e)), An("maintenance", Fs(e));
========
var Vs = 0;
function Hs({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let [s] = (0, Z.useState)(() => `board-tabs-${++Vs}`), [c, l] = (0, Z.useState)(r), u = (0, Z.useRef)(null), d = (0, Z.useRef)(c);
	(0, Z.useEffect)(() => {
		l(r);
	}, [r]), (0, Z.useEffect)(() => {
		let t = Is(e);
		t && kn("downloads", t), kn("network", Ls(e)), kn("maintenance", Rs(e));
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
	}, [e]), (0, Z.useLayoutEffect)(() => {
		if (d.current === c) return;
		d.current = c;
		let e = u.current?.querySelector("[role=\"tablist\"]"), t = u.current?.querySelector(".ui-board-group-active");
		if (!e || !t) return;
		let n = parseFloat(getComputedStyle(e).top);
		if (!Number.isFinite(n) || e.getBoundingClientRect().top > n + 1) return;
		let r = matchMedia("(max-width:900px)").matches ? e.getBoundingClientRect().bottom + 8 : n;
		window.scrollTo(0, Math.max(0, window.scrollY + t.getBoundingClientRect().top - r));
	}, [c]);
	let f = (e) => {
		l(e), Ln(In(e), {
			replace: !0,
			state: wn.navigation.location.state
		});
	}, [p, m] = (0, Z.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, Z.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => m(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let h = (0, Z.useRef)([]), g = {
		data: e,
		receipt: t
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
	}, _ = (t) => /* @__PURE__ */ (0, Q.jsx)(Ls, {
========
	}, _ = (t) => /* @__PURE__ */ (0, Q.jsx)(Bs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
		data: e,
		sections: t,
		reload: a,
		refreshing: o
	}), v = [
		"peach_proxy",
		"access",
		"tunnel",
		"push_discovery",
		...e.editable && e.port_editable !== !1 ? ["media_sources"] : []
	], y = !!(e.peach_proxy || e.access || e.tunnel || e.editable && e.port_editable !== !1 || v.some((t) => e.section_errors?.[t])), b = e.downloads, x = [
		{
			title: "媒体库与入库",
			body: (n) => /* @__PURE__ */ (0, Q.jsxs)("div", {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				...dr(n),
========
				...fr(n),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				children: [
					_([
						"media_sources",
						"library_count",
						"mount_dependencies"
					]),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					!e.section_errors?.media_sources && !e.section_errors?.library_count ? /* @__PURE__ */ (0, Q.jsx)(Co, { ...g }) : null,
					/* @__PURE__ */ (0, Q.jsx)(Bo, { receipt: t }),
					/* @__PURE__ */ (0, Q.jsx)(No, { receipt: t })
========
					!e.section_errors?.media_sources && !e.section_errors?.library_count ? /* @__PURE__ */ (0, Q.jsx)(bo, { ...g }) : null,
					/* @__PURE__ */ (0, Q.jsx)(Lo, { receipt: t }),
					/* @__PURE__ */ (0, Q.jsx)(Ao, { receipt: t })
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				]
			})
		},
		{
			title: "来源与订阅",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Ms, {
========
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Fs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				...g,
				panel: e,
				issues: _(["entry_links"])
			})
		},
		...b || e.section_errors?.downloads ? [{
			title: "下载渠道",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Er, {
========
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Dr, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				initial: b,
				receipt: t,
				panel: e,
				issues: _(["downloads"])
			})
		}] : [],
		...y ? [{
			title: "网络与访问",
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(_s, {
========
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(bs, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				...g,
				panel: e,
				issues: _(v)
			})
		}] : [],
		{
			title: "应用与维护",
			body: (e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				...dr(e),
========
				...fr(e),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				children: [
					_([
						"startup",
						"uninstall",
						"storage",
						"remote_reporting",
						"library_sharing",
						"updates",
						"update_job",
						"automatic_updates",
						"facts"
					]),
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
					/* @__PURE__ */ (0, Q.jsx)(Va, { ...g }),
					/* @__PURE__ */ (0, Q.jsx)(Po, { receipt: t }),
					/* @__PURE__ */ (0, Q.jsx)(Ta, {
========
					/* @__PURE__ */ (0, Q.jsx)(Ra, { ...g }),
					/* @__PURE__ */ (0, Q.jsx)(jo, { receipt: t }),
					/* @__PURE__ */ (0, Q.jsx)(Ea, {
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
						...g,
						reopenTutorial: n
					})
				]
			})
		},
		{
			title: "系统诊断",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)("div", {
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
				...dr(e),
========
				...fr(e),
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
				children: e.active ? i : null
			})
		}
	], S = Math.max(0, x.findIndex((e) => e.title === c)), C = (e, t) => {
		let n = x.length - 1, r;
		if (e.key === "ArrowRight" || e.key === "ArrowDown") r = t === n ? 0 : t + 1;
		else if (e.key === "ArrowLeft" || e.key === "ArrowUp") r = t === 0 ? n : t - 1;
		else if (e.key === "Home") r = 0;
		else if (e.key === "End") r = n;
		else return;
		e.preventDefault(), f(x[r].title), h.current[r]?.focus();
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		ref: u,
		className: "ui-configpage",
		children: [/* @__PURE__ */ (0, Q.jsx)(At, {
			className: "ui-board-local-nav",
			role: "tablist",
			"aria-label": "配置分区",
			"data-section-nav": "",
			"data-section-items": "",
			"data-pill-nav": "",
			"aria-orientation": p ? "horizontal" : "vertical",
			children: x.map(({ title: e }, t) => /* @__PURE__ */ (0, Q.jsx)("button", {
				ref: (e) => {
					h.current[t] = e;
				},
				type: "button",
				role: "tab",
				id: `${s}-tab-${t}`,
				"aria-controls": `${s}-panel-${t}-0`,
				"aria-selected": t === S,
				"data-pill-selected": t === S ? "" : void 0,
				"data-pill-variant": "gray",
				tabIndex: t === S ? 0 : -1,
				onClick: () => f(e),
				onKeyDown: (e) => C(e, t),
				children: e
			}, e))
		}), x.map(({ title: e, body: t }, n) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("h2", {
			className: "ui-configgroup",
			children: e
		}), t({
			index: n,
			id: `${s}-panel-${n}-0`,
			labelledBy: `${s}-tab-${n}`,
			active: n === S
		})] }, e))]
	});
}
<<<<<<<< HEAD:web/dist/peach-app.configuration-page-DnmSyP33.js
export { Is as ConfigurationPage };

//# debugId=291b0207-ad40-4fe7-a5a3-8833eac94686
========
export { zs as ConfigurationPage };

//# debugId=0cbc915c-23a0-4243-9174-f396365068ce
>>>>>>>> refs/heads/agent/claude/token-rotate-ca-trust:web/dist/peach-app.configuration-page-DmOBlOLt.js
