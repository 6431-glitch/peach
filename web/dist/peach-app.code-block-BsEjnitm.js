(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e2f5c8c9-d6a9-464c-9293-badd09f4243a", e._sentryDebugIdIdentifier = "sentry-dbid-e2f5c8c9-d6a9-464c-9293-badd09f4243a");
	} catch {}
})();
import { Button as e, __toESM as t, cardClass as n, cx as r, jsx as i, jsxs as a, require_react as o, showToast$1 as s, useOverlayScrollbar as c } from "./peach-app.js";
// src/react/components/code-block.tsx
var l = /* @__PURE__ */ t(o(), 1);
function u({ code: t, language: o, label: u, maxCharacters: d, bounded: f = !0, copyLabel: p, onCopy: m }) {
	let h = c(), [g, _] = (0, l.useState)(""), [v, y] = (0, l.useState)(!1);
	(0, l.useEffect)(() => {
		_(""), y(!1);
	}, [t]);
	let b = d !== void 0 && t.length > d, x = async () => {
		try {
			await navigator.clipboard.writeText(t), y(!1), _("已复制"), m?.(), s("code-copy", {
				html: "已复制",
				alert: !1,
				timeout: 4e3,
				action: null
			});
		} catch {
			y(!0), _("复制失败，请选中文本复制。");
		}
	};
	return /* @__PURE__ */ a("div", {
		className: r(n({
			bordered: "soft",
			radius: "plain",
			padding: "none"
		}), "overflow-hidden bg-background-tertiary-default"),
		"data-code-block": !0,
		children: [
			/* @__PURE__ */ a("div", {
				className: "flex min-w-0 items-center justify-between gap-3 border-b border-separator-border px-3 py-2",
				children: [/* @__PURE__ */ i("span", {
					className: "text-caption-1-medium text-text-secondary",
					children: o.toUpperCase()
				}), /* @__PURE__ */ i(e, {
					variant: "secondary",
					size: "small",
					onClick: () => void x(),
					children: p || (b ? "复制完整内容" : "复制代码")
				})]
			}),
			/* @__PURE__ */ i("div", {
				className: "relative min-w-0",
				children: /* @__PURE__ */ i("pre", {
					ref: h,
					tabIndex: 0,
					"aria-label": u,
					className: r("m-0 overflow-auto overscroll-contain p-3 font-mono text-caption-1-regular whitespace-pre text-text-primary", f && "max-h-80"),
					children: /* @__PURE__ */ i("code", { children: d === void 0 ? t : t.slice(0, d) })
				})
			}),
			g ? /* @__PURE__ */ i("p", {
				role: v ? "alert" : "status",
				className: "m-0 px-3 pb-2 text-caption-1-regular text-text-secondary",
				children: g
			}) : null
		]
	});
}
export { u as CodeBlock };

//# debugId=e2f5c8c9-d6a9-464c-9293-badd09f4243a