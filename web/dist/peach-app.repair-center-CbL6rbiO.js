(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5604c659-dbab-45b6-b662-48ca68c8aa88", e._sentryDebugIdIdentifier = "sentry-dbid-5604c659-dbab-45b6-b662-48ca68c8aa88");
	} catch {}
})();
import { Button as e, LinkButton as t, Note as n, RESULT_PANEL as r, RESULT_SECTION as i, SectionHeading as a, StatusLabel as o, __toESM as s, apiGet as c, apiSend as l, confirmModal as u, fmtSize as d, i2 as f, require_jsx_runtime as p, require_react as m, useAction as h } from "./peach-app.js";
import { Page as g } from "./peach-app.page-QAncjzM1.js";
// src/react/settings/repair-center.tsx
var _ = /* @__PURE__ */ s(m(), 1), v = p(), y = {
	done: ["已完成", "success"],
	succeeded: ["已完成", "success"],
	complete: ["已完成", "success"],
	running: ["进行中", "progress"],
	pending: ["等待执行", "neutral"],
	waiting: ["等你确认", "warning"],
	failed: ["需要重试", "error"],
	none: ["无需处理", "neutral"]
}, b = (e = 0) => e.toLocaleString(), x = (e) => (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("zh-CN", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit"
}), S = (e) => `${b(e.files)} 个文件 · ${d(e.bytes || 0)}`, C = (e) => !!e.estimating || e.state === "running" && e.id === "follow-evidence";
function w(e) {
	return e.estimating ? "正在统计" : e.state === "failed" && e.error ? e.error : e.files ? `可回收 ${d(e.bytes || 0)}` : e.total ? `${b(e.done)} / ${b(e.total)}` : e.mode === "confirm" ? e.pending ? `${b(e.pending)} 部待补测` : "" : e.changed ? `改动 ${b(e.changed)} 项` : "";
}
function T({ title: e, description: t, children: n }) {
	return /* @__PURE__ */ (0, v.jsxs)("div", {
		className: `${i} flex flex-wrap items-center justify-between gap-x-4 gap-y-2`,
		children: [/* @__PURE__ */ (0, v.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, v.jsx)("span", {
				className: "text-body-medium text-text-primary",
				children: e
			}), /* @__PURE__ */ (0, v.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: t
			})]
		}), /* @__PURE__ */ (0, v.jsx)("div", {
			className: "flex shrink-0 items-center gap-3",
			children: n
		})]
	});
}
function E() {
	let [i, s] = (0, _.useState)(null), [d, p] = (0, _.useState)(""), m = h(), E = !!i?.items.some(C);
	(0, _.useEffect)(() => {
		let e = 0, t = () => c("/api/configuration/repairs").then(s).catch((e) => p(e.message));
		return E ? e = window.setTimeout(t, 2e3) : i || t(), () => window.clearTimeout(e);
	}, [i, E]);
	let D = (e, t) => l(`/api/configuration/repairs/${e.id}`, {}, "POST", t), O = (e) => e.files === void 0 ? void m.run(e.id, (t) => D(e, t), s) : void u({
		title: `删除${e.title}`,
		body: `将删除 ${S(e)}，删除后不能恢复。每个关注来源最近 3 份快照和条目引用的快照会保留。`,
		confirmLabel: "删除快照",
		danger: !0,
		onConfirm: async () => s(await D(e))
	}), k = (e) => e.backups.length ? e.backups.some((e) => e.exists) ? /* @__PURE__ */ (0, v.jsx)(t, {
		href: "/settings/maintenance#ledgerBackups",
		size: "small",
		trailingIcon: f,
		children: "修复前的账本备份"
	}) : /* @__PURE__ */ (0, v.jsx)("span", {
		className: "text-body-2-regular text-text-tertiary",
		children: "修复前的备份已清理"
	}) : null;
	return /* @__PURE__ */ (0, v.jsxs)(g, { children: [
		/* @__PURE__ */ (0, v.jsx)("p", {
			className: "text-body-regular text-text-secondary",
			children: "开销小、只改自动写入资料的修复自动执行，你手动改过的不动；开销大或可能改错的等你确认。"
		}),
		d || m.error ? /* @__PURE__ */ (0, v.jsx)(n, {
			tone: "error",
			children: m.error || d
		}) : null,
		/* @__PURE__ */ (0, v.jsxs)("section", {
			"aria-labelledby": "repair-items",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, v.jsx)(a, {
				id: "repair-items",
				children: "修复项目"
			}), i && !i.items.length ? /* @__PURE__ */ (0, v.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "这台机器上没有要修复或迁移的内容。"
			}) : /* @__PURE__ */ (0, v.jsx)("div", {
				className: r,
				"aria-busy": !i || void 0,
				children: (i?.items || []).map((t) => {
					let [n, r] = y[t.state] || y.none;
					return /* @__PURE__ */ (0, v.jsxs)(T, {
						title: t.title,
						description: t.summary,
						children: [w(t) ? /* @__PURE__ */ (0, v.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: w(t)
						}) : null, t.mode === "confirm" && t.state === "waiting" ? /* @__PURE__ */ (0, v.jsx)(e, {
							size: "small",
							disabled: !i?.available || !!m.busy || t.estimating,
							onClick: () => O(t),
							children: "开始"
						}) : /* @__PURE__ */ (0, v.jsx)(o, {
							tone: r,
							children: n
						})]
					}, t.id);
				})
			})]
		}),
		i?.history.length ? /* @__PURE__ */ (0, v.jsxs)("section", {
			"aria-labelledby": "repair-history",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, v.jsx)(a, {
				id: "repair-history",
				children: "历史记录"
			}), /* @__PURE__ */ (0, v.jsx)("div", {
				className: r,
				children: i.history.map((e) => /* @__PURE__ */ (0, v.jsx)(T, {
					title: e.title,
					description: `${x(e.at)} · ${e.changed ? `改动 ${b(e.changed)} 项` : "无改动"}`,
					children: k(e)
				}, e.id))
			})]
		}) : null
	] });
}
export { E as RepairCenterPage };

//# debugId=5604c659-dbab-45b6-b662-48ca68c8aa88