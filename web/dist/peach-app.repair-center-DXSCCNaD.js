(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ef9eb6d9-926d-4a8d-9a06-51837602900c", e._sentryDebugIdIdentifier = "sentry-dbid-ef9eb6d9-926d-4a8d-9a06-51837602900c");
	} catch {}
})();
import { Button as e, LinkButton as t, Note as n, RESULT_PANEL as r, RESULT_SECTION as i, SectionHeading as a, StatusLabel as o, __toESM as s, apiGet as c, apiSend as l, i2 as u, require_jsx_runtime as d, require_react as f, useAction as p } from "./peach-app.js";
import { Page as m } from "./peach-app.page-QAncjzM1.js";
// src/react/settings/repair-center.tsx
var h = /* @__PURE__ */ s(f(), 1), g = d(), _ = {
	done: ["已完成", "success"],
	succeeded: ["已完成", "success"],
	complete: ["已完成", "success"],
	running: ["进行中", "progress"],
	pending: ["等待执行", "neutral"],
	waiting: ["等你确认", "warning"],
	failed: ["需要重试", "error"],
	none: ["无需处理", "neutral"]
}, v = (e = 0) => e.toLocaleString(), y = (e) => (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("zh-CN", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit"
});
function b(e) {
	return e.mode === "confirm" ? e.pending ? `${v(e.pending)} 部待补测` : "" : e.total ? `${v(e.done)} / ${v(e.total)}` : e.changed ? `改动 ${v(e.changed)} 项` : "";
}
function x({ title: e, description: t, children: n }) {
	return /* @__PURE__ */ (0, g.jsxs)("div", {
		className: `${i} flex flex-wrap items-center justify-between gap-x-4 gap-y-2`,
		children: [/* @__PURE__ */ (0, g.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, g.jsx)("span", {
				className: "text-body-medium text-text-primary",
				children: e
			}), /* @__PURE__ */ (0, g.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: t
			})]
		}), /* @__PURE__ */ (0, g.jsx)("div", {
			className: "flex shrink-0 items-center gap-3",
			children: n
		})]
	});
}
function S() {
	let [i, s] = (0, h.useState)(null), [d, f] = (0, h.useState)(""), S = p();
	(0, h.useEffect)(() => {
		c("/api/configuration/repairs").then(s).catch((e) => f(e.message));
	}, []);
	let C = (e) => void S.run(e.id, (t) => l(`/api/configuration/repairs/${e.id}`, {}, "POST", t), s), w = (e) => e.backups.length ? e.backups.some((e) => e.exists) ? /* @__PURE__ */ (0, g.jsx)(t, {
		href: "/settings/maintenance#ledgerBackups",
		size: "small",
		trailingIcon: u,
		children: "修复前的账本备份"
	}) : /* @__PURE__ */ (0, g.jsx)("span", {
		className: "text-body-2-regular text-text-tertiary",
		children: "修复前的备份已清理"
	}) : null;
	return /* @__PURE__ */ (0, g.jsxs)(m, { children: [
		/* @__PURE__ */ (0, g.jsx)("p", {
			className: "text-body-regular text-text-secondary",
			children: "开销小、只改自动写入资料的修复自动执行，你手动改过的不动；开销大或可能改错的等你确认。"
		}),
		d || S.error ? /* @__PURE__ */ (0, g.jsx)(n, {
			tone: "error",
			children: S.error || d
		}) : null,
		/* @__PURE__ */ (0, g.jsxs)("section", {
			"aria-labelledby": "repair-items",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, g.jsx)(a, {
				id: "repair-items",
				children: "修复项目"
			}), i && !i.items.length ? /* @__PURE__ */ (0, g.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "这台机器上没有要修复或迁移的内容。"
			}) : /* @__PURE__ */ (0, g.jsx)("div", {
				className: r,
				"aria-busy": !i || void 0,
				children: (i?.items || []).map((t) => {
					let [n, r] = _[t.state] || _.none;
					return /* @__PURE__ */ (0, g.jsxs)(x, {
						title: t.title,
						description: t.summary,
						children: [b(t) ? /* @__PURE__ */ (0, g.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: b(t)
						}) : null, t.mode === "confirm" && t.state === "waiting" ? /* @__PURE__ */ (0, g.jsx)(e, {
							size: "small",
							disabled: !i?.available || !!S.busy,
							onClick: () => C(t),
							children: "开始"
						}) : /* @__PURE__ */ (0, g.jsx)(o, {
							tone: r,
							children: n
						})]
					}, t.id);
				})
			})]
		}),
		i?.history.length ? /* @__PURE__ */ (0, g.jsxs)("section", {
			"aria-labelledby": "repair-history",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, g.jsx)(a, {
				id: "repair-history",
				children: "历史记录"
			}), /* @__PURE__ */ (0, g.jsx)("div", {
				className: r,
				children: i.history.map((e) => /* @__PURE__ */ (0, g.jsx)(x, {
					title: e.title,
					description: `${y(e.at)} · ${e.changed ? `改动 ${v(e.changed)} 项` : "无改动"}`,
					children: w(e)
				}, e.id))
			})]
		}) : null
	] });
}
export { S as RepairCenterPage };

//# debugId=ef9eb6d9-926d-4a8d-9a06-51837602900c