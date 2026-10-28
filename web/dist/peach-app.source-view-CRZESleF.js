(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5c315c44-7ef8-48e1-8665-f198105bddab", e._sentryDebugIdIdentifier = "sentry-dbid-5c315c44-7ef8-48e1-8665-f198105bddab");
	} catch {}
})();
import { Button as e, Chip as t, Wt as n, __toESM as r, authorAvatar as i, authorInitial as a, errorHeadline as o, isBroken as s, jsx as c, jsxs as l, require_react as u, sourceIconUrl as d, statusText as f } from "./peach-app.js";
import { MarkImage as p } from "./peach-app.site-mark-B3G3SZCA.js";
// src/react/follow-manage/source-view.tsx
var m = /* @__PURE__ */ r(u(), 1);
function h({ provider: e }) {
	return /* @__PURE__ */ c(p, { src: d(e) });
}
function g({ group: e, name: t }) {
	let { src: n, fallback: r } = i(e), [o, s] = (0, m.useState)(0), l = [n, r].filter(Boolean)[o];
	return l ? /* @__PURE__ */ c("img", {
		src: l,
		alt: "",
		width: 32,
		height: 32,
		loading: "lazy",
		referrerPolicy: "no-referrer",
		onError: () => s(o + 1),
		className: "size-8 shrink-0 rounded-full bg-background-tertiary-default object-cover"
	}) : /* @__PURE__ */ c("span", {
		title: "没有可用头像",
		className: "inline-grid size-8 shrink-0 place-items-center rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary",
		children: a(t)
	});
}
function _({ source: e }) {
	let n = !e.enabled || e.history_exhausted ? "gray" : s(e) ? "rose" : e.enabled && e.last_status === "ok" ? "lime" : e.enabled ? "yellow" : "gray";
	return /* @__PURE__ */ c(t, {
		variant: "caption",
		color: n,
		children: f(e)
	});
}
function v({ source: e }) {
	return /* @__PURE__ */ l("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener noreferrer",
		title: "打开原来源",
		className: "max-w-full min-w-0 self-start text-body-medium wrap-anywhere text-text-primary underline-offset-2 hover:underline",
		children: [e.label, /* @__PURE__ */ c(n, {
			"aria-hidden": !0,
			className: "size-(--icon-inline) shrink-0"
		})]
	});
}
function y({ text: t, prefix: n = "", tone: r = "error" }) {
	let i = (0, m.useRef)(null), [a, s] = (0, m.useState)(!1), [u, d] = (0, m.useState)(!1), f = o(t);
	(0, m.useLayoutEffect)(() => {
		let e = i.current;
		if (!e || a) return;
		let t = () => d(e.scrollWidth > e.clientWidth + 1);
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [f, a]);
	let p = u || f !== String(t || "").trim();
	return /* @__PURE__ */ l("span", {
		className: "flex min-w-0 max-w-full flex-col items-start gap-0.5",
		children: [/* @__PURE__ */ l("small", {
			ref: i,
			"data-error-line": "",
			className: `max-w-full text-caption-1-regular ${r === "error" ? "text-text-error-primary" : "text-text-secondary"} ${a ? "whitespace-pre-line wrap-anywhere" : "block truncate"}`,
			children: [n, a ? t : f]
		}), p ? /* @__PURE__ */ c(e, {
			variant: "ghost",
			size: "small",
			"data-error-line-toggle": "",
			"data-error-details-toggle": "",
			"aria-expanded": a,
			className: "-ml-2",
			onClick: () => s(!a),
			children: a ? "收起详情" : "查看详情"
		}) : null]
	});
}
export { g as AuthorAvatar, y as ErrorLine, h as SourceIcon, v as SourceLink, _ as StatusBadge };

//# debugId=5c315c44-7ef8-48e1-8665-f198105bddab