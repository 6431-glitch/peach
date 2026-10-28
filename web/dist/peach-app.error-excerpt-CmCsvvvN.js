(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8dc681c5-db2d-410c-bb16-07cf436fec82", e._sentryDebugIdIdentifier = "sentry-dbid-8dc681c5-db2d-410c-bb16-07cf436fec82");
	} catch {}
})();
import { Button as e, __toESM as t, cardClass as n, jsx as r, jsxs as i, readableErrorHeadline as a, require_react as o, useOverlayScrollbar as s } from "./peach-app.js";
// src/react/activity/error-excerpt.tsx
var c = /* @__PURE__ */ t(o(), 1);
function l({ children: e, label: t, id: i }) {
	let a = s();
	return /* @__PURE__ */ r("div", {
		"data-error-details": "",
		className: n({
			bordered: "soft",
			radius: "surface",
			padding: "none",
			className: "relative w-full min-w-0 overflow-hidden bg-background-tertiary-default"
		}),
		children: /* @__PURE__ */ r("div", {
			ref: a,
			id: i,
			role: "region",
			"aria-label": t,
			tabIndex: 0,
			className: "max-h-80 overflow-y-auto overscroll-contain p-3 text-body-2-regular whitespace-pre-line wrap-anywhere text-text-primary",
			children: e
		})
	});
}
function u({ text: t, className: n = "" }) {
	let [o, s] = (0, c.useState)(!1), u = (0, c.useId)(), d = String(t || "").trim(), f = a(d);
	if (!f) return null;
	let p = f !== d;
	return /* @__PURE__ */ i("div", {
		"data-error-excerpt": "",
		className: `flex min-w-0 max-w-full flex-col items-start gap-1 ${n}`,
		children: [o ? /* @__PURE__ */ r(l, {
			id: u,
			label: "完整错误详情",
			children: d
		}) : /* @__PURE__ */ r("p", {
			className: "w-full wrap-anywhere",
			children: f
		}), p ? /* @__PURE__ */ r(e, {
			variant: "ghost",
			size: "small",
			"data-error-details-toggle": "",
			className: "-ml-2",
			"aria-expanded": o,
			"aria-controls": o ? u : void 0,
			onClick: () => s(!o),
			children: o ? "收起详情" : "查看详情"
		}) : null]
	});
}
export { l as ErrorDetails, u as ErrorExcerpt };

//# debugId=8dc681c5-db2d-410c-bb16-07cf436fec82