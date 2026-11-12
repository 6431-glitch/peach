(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "aa557df9-6eb3-42ac-8248-977f91e4b20c", e._sentryDebugIdIdentifier = "sentry-dbid-aa557df9-6eb3-42ac-8248-977f91e4b20c");
	} catch {}
})();
import { Button as e, LinkButton as t, Note as n, Progress as r, REPAIRS_KEY as i, RESULT_PANEL as a, RESULT_SECTION as o, SectionHeading as s, StatusLabel as c, apiSend as l, confirmModal as u, fetchRepairs as d, fmtSize as f, formatTranslation as p, i2 as m, jsx as h, jsxs as g, queryClient as _, repairCenterPanelSkeleton as v, translate as y, useAction as b, useQuery as x } from "./peach-app.js";
import { Page as S } from "./peach-app.page-CW3QRN2N.js";
// src/react/settings/repair-center.tsx
var C = {
	done: ["已完成", "success"],
	succeeded: ["已完成", "success"],
	complete: ["已完成", "success"],
	running: ["进行中", "progress"],
	pending: ["等待执行", "neutral"],
	waiting: ["等你确认", "warning"],
	failed: ["需要重试", "error"],
	none: ["无需处理", "neutral"]
}, w = (e = 0) => e.toLocaleString(), T = (e) => (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("zh-CN", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit"
}), E = (e) => `${w(e.files)} 个文件 · ${f(e.bytes || 0)}`, D = (e) => e.state === "running" && !!e.total, O = (e) => !!e.estimating || e.state === "running";
function k(e) {
	return e.estimating ? "正在统计" : e.state === "failed" && e.error ? e.error : e.files ? `可回收 ${f(e.bytes || 0)}` : e.state === "waiting" ? e.pending ? `${w(e.pending)} 部待补测` : "" : D(e) ? "" : e.total ? `${w(e.done)} / ${w(e.total)}` : e.mode === "confirm" ? "" : e.changed ? `改动 ${w(e.changed)} 项` : "";
}
function A({ title: e, description: t, progress: n, children: r }) {
	return /* @__PURE__ */ g("div", {
		className: `${o} flex flex-wrap items-center justify-between gap-x-4 gap-y-2`,
		children: [/* @__PURE__ */ g("div", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [
				/* @__PURE__ */ h("span", {
					className: "text-body-medium text-text-primary",
					children: y(e)
				}),
				/* @__PURE__ */ h("span", {
					className: "text-body-2-regular text-text-secondary",
					children: y(t)
				}),
				n ? /* @__PURE__ */ h("div", {
					className: "pt-2",
					children: n
				}) : null
			]
		}), /* @__PURE__ */ h("div", {
			className: "flex shrink-0 items-center gap-3",
			children: r
		})]
	});
}
function j({ item: e }) {
	return /* @__PURE__ */ g("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ h("div", {
			className: "min-w-0 flex-1",
			children: /* @__PURE__ */ h(r, {
				label: `${e.title}进度`,
				value: e.done || 0,
				max: e.total
			})
		}), /* @__PURE__ */ g("span", {
			className: "shrink-0 text-caption-1-regular text-text-secondary tabular-nums",
			children: [
				w(e.done),
				" / ",
				w(e.total)
			]
		})]
	});
}
function M() {
	let r = x({
		queryKey: i,
		queryFn: ({ signal: e }) => d(e),
		refetchInterval: ({ state: e }) => e.data?.items.some(O) ? 2e3 : !1
	}), o = r.data, f = b(), M = (e) => _.setQueryData(i, e), N = (e, t) => l(`/api/configuration/repairs/${e.id}`, {}, "POST", t), P = (e) => e.files === void 0 ? void f.run(e.id, (t) => N(e, t), M) : void u({
		title: `删除${e.title}`,
		body: `将删除 ${E(e)}，删除后不能恢复。每个关注来源最近 3 份快照和条目引用的快照会保留。`,
		confirmLabel: "删除快照",
		danger: !0,
		onConfirm: async () => M(await N(e))
	}), F = (e) => e.backups.length ? e.backups.some((e) => e.exists) ? /* @__PURE__ */ h(t, {
		href: "/settings/maintenance#ledgerBackups",
		size: "small",
		trailingIcon: m,
		children: "修复前的账本备份"
	}) : /* @__PURE__ */ h("span", {
		className: "text-body-2-regular text-text-tertiary",
		children: "修复前的备份已清理"
	}) : null, I = f.error || (r.error ? r.error.message : "");
	return /* @__PURE__ */ g(S, { children: [
		I ? /* @__PURE__ */ h(n, {
			tone: "error",
			children: I
		}) : null,
		/* @__PURE__ */ g("section", {
			"aria-labelledby": "repair-items",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ h(s, {
				id: "repair-items",
				children: "修复项目"
			}), o ? o.items.length ? /* @__PURE__ */ h("div", {
				className: a,
				children: o.items.map((t) => {
					let [n, r] = C[t.state] || C.none, i = k(t);
					return /* @__PURE__ */ g(A, {
						title: t.title,
						description: t.summary,
						progress: D(t) ? /* @__PURE__ */ h(j, { item: t }) : null,
						children: [i ? /* @__PURE__ */ h("span", {
							className: "text-body-2-regular text-text-secondary",
							children: i
						}) : null, t.mode === "confirm" && t.state === "waiting" ? /* @__PURE__ */ h(e, {
							size: "small",
							disabled: !o.available || !!f.busy || t.estimating,
							onClick: () => P(t),
							children: "开始"
						}) : /* @__PURE__ */ h(c, {
							tone: r,
							children: n
						})]
					}, t.id);
				})
			}) : /* @__PURE__ */ h("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "这台机器上没有要修复或迁移的内容。"
			}) : /* @__PURE__ */ h("div", {
				className: "contents",
				"data-skeleton": "",
				"aria-busy": "true",
				"aria-label": "正在读取修复项目",
				dangerouslySetInnerHTML: { __html: v() }
			})]
		}),
		o?.history.length ? /* @__PURE__ */ g("section", {
			"aria-labelledby": "repair-history",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ h(s, {
				id: "repair-history",
				children: "历史记录"
			}), /* @__PURE__ */ h("div", {
				className: a,
				children: o.history.map((e) => /* @__PURE__ */ h(A, {
					title: e.title,
					description: `${T(e.at)} · ${e.changed ? p("改动 {0} 项", w(e.changed)) : y("无改动")}`,
					children: F(e)
				}, e.id))
			})]
		}) : null
	] });
}
export { M as RepairCenterPage };

//# debugId=aa557df9-6eb3-42ac-8248-977f91e4b20c