(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e6f84356-eefe-4afa-89e9-b61eebac2465", e._sentryDebugIdIdentifier = "sentry-dbid-e6f84356-eefe-4afa-89e9-b61eebac2465");
	} catch {}
})();
import { Button as e, LinkButton as t, Note as n, Progress as r, REPAIRS_KEY as i, REPAIR_CENTER_INTRO as a, RESULT_PANEL as o, RESULT_SECTION as s, SectionHeading as c, StatusLabel as l, apiSend as u, confirmModal as d, fetchRepairs as f, fmtSize as p, i2 as m, queryClient as h, repairCenterPanelSkeleton as g, require_jsx_runtime as _, useAction as v, useQuery as y } from "./peach-app.js";
import { Page as b } from "./peach-app.page-QAncjzM1.js";
// src/react/settings/repair-center.tsx
var x = _(), S = {
	done: ["已完成", "success"],
	succeeded: ["已完成", "success"],
	complete: ["已完成", "success"],
	running: ["进行中", "progress"],
	pending: ["等待执行", "neutral"],
	waiting: ["等你确认", "warning"],
	failed: ["需要重试", "error"],
	none: ["无需处理", "neutral"]
}, C = (e = 0) => e.toLocaleString(), w = (e) => (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("zh-CN", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit"
}), T = (e) => `${C(e.files)} 个文件 · ${p(e.bytes || 0)}`, E = (e) => e.state === "running" && !!e.total, D = (e) => !!e.estimating || e.state === "running";
function O(e) {
	return e.estimating ? "正在统计" : e.state === "failed" && e.error ? e.error : e.files ? `可回收 ${p(e.bytes || 0)}` : e.state === "waiting" ? e.pending ? `${C(e.pending)} 部待补测` : "" : E(e) ? "" : e.total ? `${C(e.done)} / ${C(e.total)}` : e.mode === "confirm" ? "" : e.changed ? `改动 ${C(e.changed)} 项` : "";
}
function k({ title: e, description: t, progress: n, children: r }) {
	return /* @__PURE__ */ (0, x.jsxs)("div", {
		className: `${s} flex flex-wrap items-center justify-between gap-x-4 gap-y-2`,
		children: [/* @__PURE__ */ (0, x.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [
				/* @__PURE__ */ (0, x.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: e
				}),
				/* @__PURE__ */ (0, x.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: t
				}),
				n ? /* @__PURE__ */ (0, x.jsx)("div", {
					className: "pt-2",
					children: n
				}) : null
			]
		}), /* @__PURE__ */ (0, x.jsx)("div", {
			className: "flex shrink-0 items-center gap-3",
			children: r
		})]
	});
}
function A({ item: e }) {
	return /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, x.jsx)("div", {
			className: "min-w-0 flex-1",
			children: /* @__PURE__ */ (0, x.jsx)(r, {
				label: `${e.title}进度`,
				value: e.done || 0,
				max: e.total
			})
		}), /* @__PURE__ */ (0, x.jsxs)("span", {
			className: "shrink-0 text-caption-1-regular text-text-secondary tabular-nums",
			children: [
				C(e.done),
				" / ",
				C(e.total)
			]
		})]
	});
}
function j() {
	let r = y({
		queryKey: i,
		queryFn: ({ signal: e }) => f(e),
		refetchInterval: ({ state: e }) => e.data?.items.some(D) ? 2e3 : !1
	}), s = r.data, p = v(), _ = (e) => h.setQueryData(i, e), j = (e, t) => u(`/api/configuration/repairs/${e.id}`, {}, "POST", t), M = (e) => e.files === void 0 ? void p.run(e.id, (t) => j(e, t), _) : void d({
		title: `删除${e.title}`,
		body: `将删除 ${T(e)}，删除后不能恢复。每个关注来源最近 3 份快照和条目引用的快照会保留。`,
		confirmLabel: "删除快照",
		danger: !0,
		onConfirm: async () => _(await j(e))
	}), N = (e) => e.backups.length ? e.backups.some((e) => e.exists) ? /* @__PURE__ */ (0, x.jsx)(t, {
		href: "/settings/maintenance#ledgerBackups",
		size: "small",
		trailingIcon: m,
		children: "修复前的账本备份"
	}) : /* @__PURE__ */ (0, x.jsx)("span", {
		className: "text-body-2-regular text-text-tertiary",
		children: "修复前的备份已清理"
	}) : null, P = p.error || (r.error ? r.error.message : "");
	return /* @__PURE__ */ (0, x.jsxs)(b, { children: [
		/* @__PURE__ */ (0, x.jsx)("p", {
			className: "text-body-regular text-text-secondary",
			children: a
		}),
		P ? /* @__PURE__ */ (0, x.jsx)(n, {
			tone: "error",
			children: P
		}) : null,
		/* @__PURE__ */ (0, x.jsxs)("section", {
			"aria-labelledby": "repair-items",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, x.jsx)(c, {
				id: "repair-items",
				children: "修复项目"
			}), s ? s.items.length ? /* @__PURE__ */ (0, x.jsx)("div", {
				className: o,
				children: s.items.map((t) => {
					let [n, r] = S[t.state] || S.none, i = O(t);
					return /* @__PURE__ */ (0, x.jsxs)(k, {
						title: t.title,
						description: t.summary,
						progress: E(t) ? /* @__PURE__ */ (0, x.jsx)(A, { item: t }) : null,
						children: [i ? /* @__PURE__ */ (0, x.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: i
						}) : null, t.mode === "confirm" && t.state === "waiting" ? /* @__PURE__ */ (0, x.jsx)(e, {
							size: "small",
							disabled: !s.available || !!p.busy || t.estimating,
							onClick: () => M(t),
							children: "开始"
						}) : /* @__PURE__ */ (0, x.jsx)(l, {
							tone: r,
							children: n
						})]
					}, t.id);
				})
			}) : /* @__PURE__ */ (0, x.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "这台机器上没有要修复或迁移的内容。"
			}) : /* @__PURE__ */ (0, x.jsx)("div", {
				className: "contents",
				"data-skeleton": "",
				"aria-busy": "true",
				"aria-label": "正在读取修复项目",
				dangerouslySetInnerHTML: { __html: g() }
			})]
		}),
		s?.history.length ? /* @__PURE__ */ (0, x.jsxs)("section", {
			"aria-labelledby": "repair-history",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, x.jsx)(c, {
				id: "repair-history",
				children: "历史记录"
			}), /* @__PURE__ */ (0, x.jsx)("div", {
				className: o,
				children: s.history.map((e) => /* @__PURE__ */ (0, x.jsx)(k, {
					title: e.title,
					description: `${w(e.at)} · ${e.changed ? `改动 ${C(e.changed)} 项` : "无改动"}`,
					children: N(e)
				}, e.id))
			})]
		}) : null
	] });
}
export { j as RepairCenterPage };

//# debugId=e6f84356-eefe-4afa-89e9-b61eebac2465