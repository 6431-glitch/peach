(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6fc208aa-db0c-473c-8620-58e94c6ebe00", e._sentryDebugIdIdentifier = "sentry-dbid-6fc208aa-db0c-473c-8620-58e94c6ebe00");
	} catch {}
})();
import { Button as e, CLOUD_LOCATIONS as t, ErrorText as n, Help as r, IconButton as i, Input as a, Label as o, M6 as s, MEDIA_SOURCE_ICONS as c, MEDIA_SOURCE_OPTIONS as l, Select$1 as u, SelectItem as d, SourceMark as f, __toESM as p, busyProps as m, cx as h, jsx as g, jsxs as _, require_react as v } from "./peach-app.js";
// src/react/settings/folder-rows.tsx
var y = /* @__PURE__ */ p(v(), 1);
function b({ className: e }) {
	return /* @__PURE__ */ g("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		children: /* @__PURE__ */ g("use", { href: "#i-folder-search" })
	});
}
var x = l, S = (e) => c[e] || "database", C = (e) => t.includes(e);
function w({ label: e, className: t, children: n }) {
	return /* @__PURE__ */ _("div", {
		className: h("flex min-w-0 flex-col gap-1", t),
		children: [/* @__PURE__ */ g(o, {
			elementType: "span",
			"aria-hidden": !0,
			children: e
		}), n]
	});
}
function T({ children: e }) {
	return /* @__PURE__ */ g("div", {
		className: "flex w-full flex-wrap items-start gap-2",
		children: e
	});
}
function E({ index: e, cost: t, error: r, onChange: i }) {
	return /* @__PURE__ */ _("div", {
		"data-media-read-policy": e,
		className: "flex w-full flex-col gap-1 @lg:w-32",
		children: [
			/* @__PURE__ */ g(o, {
				elementType: "span",
				"aria-hidden": !0,
				children: "读取策略"
			}),
			/* @__PURE__ */ _(u, {
				"aria-label": `媒体读取策略 ${e + 1}`,
				placeholder: "选择读取策略",
				isRequired: !0,
				validationBehavior: "aria",
				isInvalid: !!r,
				selectedKey: t || null,
				onSelectionChange: (e) => {
					(e === "free" || e === "metered") && i(e);
				},
				children: [/* @__PURE__ */ g(d, {
					id: "free",
					children: "正常读取"
				}), /* @__PURE__ */ g(d, {
					id: "metered",
					children: "代理保护"
				})]
			}),
			r ? /* @__PURE__ */ g(n, { children: r }) : null
		]
	});
}
function D() {
	return /* @__PURE__ */ g(r, { children: "读取策略选「代理保护」时，会限制自动读取视频。" });
}
function O({ initial: e, blank: t, pickFolder: n, describe: r, focusAfterPick: i = !1 }) {
	let [a, o] = (0, y.useState)(e), [s, c] = (0, y.useState)([]), [l, u] = (0, y.useState)(null), [d, f] = (0, y.useState)(null), p = (0, y.useRef)(!1), m = (0, y.useRef)([]);
	(0, y.useLayoutEffect)(() => {
		l !== null && (m.current[l]?.focus(), u(null));
	}, [l]);
	let h = (e, t) => o((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), g = (e, t) => c((n) => {
		let r = [...n];
		for (; r.length <= e;) r.push("");
		return r[e] = t, r;
	});
	return {
		rows: a,
		edit: h,
		add: () => {
			u(a.length), o((e) => [...e, t()]);
		},
		remove: (e) => {
			o((t) => t.filter((t, n) => n !== e)), c((t) => t.filter((t, n) => n !== e));
		},
		errors: s,
		setErrors: c,
		picking: d,
		pick: async (e) => {
			if (!p.current) {
				p.current = !0, f(e);
				try {
					let t = await n(a[e]?.path ?? "");
					t && (h(e, { path: t }), g(e, "")), i && u(e);
				} catch (t) {
					g(e, r(t));
				} finally {
					p.current = !1, f(null);
				}
			}
		},
		inputRef: (e) => (t) => {
			m.current[e] = t;
		}
	};
}
function k({ label: t, path: n, onPath: r, error: o, inputRef: c, picking: l, onPick: u, onRemove: d, status: f, children: p }) {
	let h = (0, y.useRef)(null), v = () => {
		let e = h.current;
		e && e.ownerDocument.activeElement !== e && (e.scrollLeft = e.scrollWidth);
	};
	return (0, y.useLayoutEffect)(() => {
		h.current && (h.current.title = n), v();
	}, [n]), /* @__PURE__ */ _("div", {
		"data-folder-row": !0,
		className: "@container flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
		children: [/* @__PURE__ */ _("div", {
			className: "flex items-start gap-2",
			children: [
				/* @__PURE__ */ g(a, {
					className: "min-w-0 flex-1",
					"aria-label": t,
					placeholder: "媒体目录路径",
					value: n,
					onChange: r,
					ref: (e) => {
						h.current = e, c(e);
					},
					onBlur: () => requestAnimationFrame(v),
					validationBehavior: "aria",
					isInvalid: !!o,
					hint: o || void 0
				}),
				f ? /* @__PURE__ */ g("div", {
					className: "flex h-9 shrink-0 items-center",
					children: f
				}) : null,
				/* @__PURE__ */ g(i, {
					icon: b,
					"aria-label": "选择文件夹",
					onClick: u,
					...m(l)
				}),
				d ? /* @__PURE__ */ g(e, {
					variant: "danger",
					iconOnly: !0,
					leadingIcon: s,
					"aria-label": "移除这个文件夹",
					onClick: d
				}) : null
			]
		}), /* @__PURE__ */ g("div", {
			className: "flex flex-wrap items-end gap-2",
			children: p
		})]
	});
}
function A({ index: e, value: t, onChange: n, options: r = x }) {
	return /* @__PURE__ */ g(w, {
		label: "来源",
		className: "w-full @lg:w-60",
		children: /* @__PURE__ */ g(u, {
			className: "w-full",
			"aria-label": `媒体来源 ${e + 1}`,
			selectedKey: t,
			onSelectionChange: (e) => {
				e !== null && n(String(e));
			},
			children: r.map(([e, t]) => /* @__PURE__ */ _(d, {
				id: e,
				textValue: t,
				children: [/* @__PURE__ */ g(f, { mark: S(e) }), t]
			}, e))
		})
	});
}
export { w as FolderField, T as FolderFieldLine, k as FolderRow, b as FolderSearchIcon, x as MEDIA_SOURCES, E as MediaReadPolicy, D as MediaReadPolicyHelp, A as SourceSelect, C as isCloudSource, S as sourceMark, O as useFolderRows };

//# debugId=6fc208aa-db0c-473c-8620-58e94c6ebe00