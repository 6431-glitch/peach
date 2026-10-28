(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ce8c977b-131b-411f-b2e5-643bce691a66", e._sentryDebugIdIdentifier = "sentry-dbid-ce8c977b-131b-411f-b2e5-643bce691a66");
	} catch {}
})();
import { cx as e, jsx as t, jsxs as n, sortCx as r } from "./peach-app.js";
// src/react/boardui/components/base/badges/status-dot.tsx
var i = r({
	base: "inline-flex size-3 shrink-0 items-center justify-center rounded-full",
	halo: {
		green: "bg-status-dot-green-halo",
		yellow: "bg-status-dot-yellow-halo",
		indigo: "bg-status-dot-indigo-halo"
	},
	dot: {
		green: "bg-green-500",
		yellow: "bg-yellow-500",
		indigo: "bg-indigo-500"
	}
});
function a({ color: n = "green", className: r, ref: a, ...o }) {
	return /* @__PURE__ */ t("span", {
		ref: a,
		"aria-hidden": !0,
		className: e(i.base, i.halo[n], r),
		...o,
		children: /* @__PURE__ */ t("span", { className: e("size-1.5 rounded-full", i.dot[n]) })
	});
}
// src/react/components/connection-status.tsx
var o = {
	success: "text-green-700 dark:text-green-400",
	warning: "text-status-yellow-text",
	progress: "text-notification-information-foreground",
	neutral: "text-text-secondary",
	error: "text-text-error-primary"
};
function s({ online: r, tone: i, children: s }) {
	let c = i ?? (r === !0 ? "success" : r === !1 ? "warning" : "neutral");
	return /* @__PURE__ */ n("span", {
		"data-mount": r === !0 ? "online" : r === !1 ? "offline" : "unknown",
		"data-connection-tone": c,
		className: e("inline-flex items-center gap-1.5 whitespace-nowrap text-body-2-medium", o[c]),
		children: [/* @__PURE__ */ t(a, { color: c === "success" ? "green" : c === "warning" ? "yellow" : "indigo" }), s ?? (r === !0 ? "在线" : r === !1 ? "离线" : "未检测")]
	});
}
export { s as ConnectionStatus };

//# debugId=ce8c977b-131b-411f-b2e5-643bce691a66