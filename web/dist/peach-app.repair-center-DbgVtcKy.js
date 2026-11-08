(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e125920f-99dd-4268-947e-1f074632326b", e._sentryDebugIdIdentifier = "sentry-dbid-e125920f-99dd-4268-947e-1f074632326b");
	} catch {}
})();
import { Button as e, LinkButton as t, Note as n, Progress as r, RESULT_PANEL as i, RESULT_SECTION as a, SectionHeading as o, StatusLabel as s, __toESM as c, apiGet as l, apiSend as u, confirmModal as d, fmtSize as f, i2 as p, require_jsx_runtime as m, require_react as h, useAction as g } from "./peach-app.js";
import { Page as _ } from "./peach-app.page-QAncjzM1.js";
// src/react/settings/repair-center.tsx
var v = /* @__PURE__ */ c(h(), 1), y = m(), b = {
	done: ["已完成", "success"],
	succeeded: ["已完成", "success"],
	complete: ["已完成", "success"],
	running: ["进行中", "progress"],
	pending: ["等待执行", "neutral"],
	waiting: ["等你确认", "warning"],
	failed: ["需要重试", "error"],
	none: ["无需处理", "neutral"]
}, x = (e = 0) => e.toLocaleString(), S = (e) => (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("zh-CN", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit"
}), C = (e) => `${x(e.files)} 个文件 · ${f(e.bytes || 0)}`, w = (e) => !!e.estimating || e.state === "running";
function T(e) {
	return e.estimating ? "正在统计" : e.state === "failed" && e.error ? e.error : e.files ? `可回收 ${f(e.bytes || 0)}` : e.state === "waiting" && e.pending ? `${x(e.pending)} 部待补测` : e.total ? `${x(e.done)} / ${x(e.total)}` : e.mode === "confirm" ? "" : e.changed ? `改动 ${x(e.changed)} 项` : "";
}
function E({ title: e, description: t, progress: n, children: r }) {
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: `${a} flex flex-wrap items-center justify-between gap-x-4 gap-y-2`,
		children: [/* @__PURE__ */ (0, y.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [
				/* @__PURE__ */ (0, y.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: e
				}),
				/* @__PURE__ */ (0, y.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: t
				}),
				n ? /* @__PURE__ */ (0, y.jsx)("div", {
					className: "pt-2",
					children: n
				}) : null
			]
		}), /* @__PURE__ */ (0, y.jsx)("div", {
			className: "flex shrink-0 items-center gap-3",
			children: r
		})]
	});
}
function D() {
	let [a, c] = (0, v.useState)(null), [f, m] = (0, v.useState)(""), h = g(), D = !!a?.items.some(w);
	(0, v.useEffect)(() => {
		let e = 0, t = () => l("/api/configuration/repairs").then(c).catch((e) => m(e.message));
		return D ? e = window.setTimeout(t, 2e3) : a || t(), () => window.clearTimeout(e);
	}, [a, D]);
	let O = (e, t) => u(`/api/configuration/repairs/${e.id}`, {}, "POST", t), k = (e) => e.files === void 0 ? void h.run(e.id, (t) => O(e, t), c) : void d({
		title: `删除${e.title}`,
		body: `将删除 ${C(e)}，删除后不能恢复。每个关注来源最近 3 份快照和条目引用的快照会保留。`,
		confirmLabel: "删除快照",
		danger: !0,
		onConfirm: async () => c(await O(e))
	}), A = (e) => e.backups.length ? e.backups.some((e) => e.exists) ? /* @__PURE__ */ (0, y.jsx)(t, {
		href: "/settings/maintenance#ledgerBackups",
		size: "small",
		trailingIcon: p,
		children: "修复前的账本备份"
	}) : /* @__PURE__ */ (0, y.jsx)("span", {
		className: "text-body-2-regular text-text-tertiary",
		children: "修复前的备份已清理"
	}) : null;
	return /* @__PURE__ */ (0, y.jsxs)(_, { children: [
		/* @__PURE__ */ (0, y.jsx)("p", {
			className: "text-body-regular text-text-secondary",
			children: "开销小、只改自动写入资料的修复自动执行，你手动改过的不动；开销大或可能改错的等你确认。"
		}),
		f || h.error ? /* @__PURE__ */ (0, y.jsx)(n, {
			tone: "error",
			children: h.error || f
		}) : null,
		/* @__PURE__ */ (0, y.jsxs)("section", {
			"aria-labelledby": "repair-items",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, y.jsx)(o, {
				id: "repair-items",
				children: "修复项目"
			}), a && !a.items.length ? /* @__PURE__ */ (0, y.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "这台机器上没有要修复或迁移的内容。"
			}) : /* @__PURE__ */ (0, y.jsx)("div", {
				className: i,
				"aria-busy": !a || void 0,
				children: (a?.items || []).map((t) => {
					let [n, i] = b[t.state] || b.none;
					return /* @__PURE__ */ (0, y.jsxs)(E, {
						title: t.title,
						description: t.summary,
						progress: t.state === "running" && t.total ? /* @__PURE__ */ (0, y.jsx)(r, {
							label: `${t.title}进度`,
							value: t.done || 0,
							max: t.total
						}) : null,
						children: [T(t) ? /* @__PURE__ */ (0, y.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: T(t)
						}) : null, t.mode === "confirm" && t.state === "waiting" ? /* @__PURE__ */ (0, y.jsx)(e, {
							size: "small",
							disabled: !a?.available || !!h.busy || t.estimating,
							onClick: () => k(t),
							children: "开始"
						}) : /* @__PURE__ */ (0, y.jsx)(s, {
							tone: i,
							children: n
						})]
					}, t.id);
				})
			})]
		}),
		a?.history.length ? /* @__PURE__ */ (0, y.jsxs)("section", {
			"aria-labelledby": "repair-history",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, y.jsx)(o, {
				id: "repair-history",
				children: "历史记录"
			}), /* @__PURE__ */ (0, y.jsx)("div", {
				className: i,
				children: a.history.map((e) => /* @__PURE__ */ (0, y.jsx)(E, {
					title: e.title,
					description: `${S(e.at)} · ${e.changed ? `改动 ${x(e.changed)} 项` : "无改动"}`,
					children: A(e)
				}, e.id))
			})]
		}) : null
	] });
}
export { D as RepairCenterPage };

//# debugId=e125920f-99dd-4268-947e-1f074632326b