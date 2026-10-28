(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ee2f9df2-a41f-49e9-82ea-448189c95d7d", e._sentryDebugIdIdentifier = "sentry-dbid-ee2f9df2-a41f-49e9-82ea-448189c95d7d");
	} catch {}
})();
import { Button as e, __toESM as t, cardClass as n, cx as r, jsx as i, jsxs as a, require_react as o, useOverlayScrollbar as s } from "./peach-app.js";
// src/react/components/code-block.tsx
var c = /* @__PURE__ */ t(o(), 1);
function l({ code: t, language: o, label: l, maxCharacters: u, bounded: d = !0, copyLabel: f, onCopy: p }) {
	let m = s(), [h, g] = (0, c.useState)(""), [_, v] = (0, c.useState)(!1);
	(0, c.useEffect)(() => {
		g(""), v(!1);
	}, [t]);
	let y = u !== void 0 && t.length > u, b = async () => {
		try {
			await navigator.clipboard.writeText(t), v(!1), g("已复制"), p?.();
		} catch {
			v(!0), g("复制失败，请选中文本复制。");
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
					onClick: () => void b(),
					children: f || (y ? "复制完整内容" : "复制代码")
				})]
			}),
			/* @__PURE__ */ i("div", {
				className: "relative min-w-0",
				children: /* @__PURE__ */ i("pre", {
					ref: m,
					tabIndex: 0,
					"aria-label": l,
					className: r("m-0 overflow-auto overscroll-contain p-3 font-mono text-caption-1-regular whitespace-pre text-text-primary", d && "max-h-80"),
					children: /* @__PURE__ */ i("code", { children: u === void 0 ? t : t.slice(0, u) })
				})
			}),
			h ? /* @__PURE__ */ i("p", {
				role: _ ? "alert" : "status",
				className: "m-0 px-3 pb-2 text-caption-1-regular text-text-secondary",
				children: h
			}) : null
		]
	});
}
export { l as CodeBlock };

//# debugId=ee2f9df2-a41f-49e9-82ea-448189c95d7d