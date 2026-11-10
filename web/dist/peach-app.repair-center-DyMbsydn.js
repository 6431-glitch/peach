(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd7bf3c5-4996-4bf2-a78b-1306f20c083c", e._sentryDebugIdIdentifier = "sentry-dbid-cd7bf3c5-4996-4bf2-a78b-1306f20c083c");
	} catch {}
})();
import { Button as e, LinkButton as t, Note as n, Progress as r, REPAIRS_KEY as i, RESULT_PANEL as a, RESULT_SECTION as o, SectionHeading as s, StatusLabel as c, apiSend as l, confirmModal as u, fetchRepairs as d, fmtSize as f, i2 as p, jsx as m, jsxs as h, queryClient as g, repairCenterPanelSkeleton as _, useAction as v, useQuery as y } from "./peach-app.js";
import { Page as b } from "./peach-app.page-CW3QRN2N.js";
// src/react/settings/repair-center.tsx
var x = {
	done: ["已完成", "success"],
	succeeded: ["已完成", "success"],
	complete: ["已完成", "success"],
	running: ["进行中", "progress"],
	pending: ["等待执行", "neutral"],
	waiting: ["等你确认", "warning"],
	failed: ["需要重试", "error"],
	none: ["无需处理", "neutral"]
}, S = (e = 0) => e.toLocaleString(), C = (e) => (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("zh-CN", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit"
}), w = (e) => `${S(e.files)} 个文件 · ${f(e.bytes || 0)}`, T = (e) => e.state === "running" && !!e.total, E = (e) => !!e.estimating || e.state === "running";
function D(e) {
	return e.estimating ? "正在统计" : e.state === "failed" && e.error ? e.error : e.files ? `可回收 ${f(e.bytes || 0)}` : e.state === "waiting" ? e.pending ? `${S(e.pending)} 部待补测` : "" : T(e) ? "" : e.total ? `${S(e.done)} / ${S(e.total)}` : e.mode === "confirm" ? "" : e.changed ? `改动 ${S(e.changed)} 项` : "";
}
function O({ title: e, description: t, progress: n, children: r }) {
	return /* @__PURE__ */ h("div", {
		className: `${o} flex flex-wrap items-center justify-between gap-x-4 gap-y-2`,
		children: [/* @__PURE__ */ h("div", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [
				/* @__PURE__ */ m("span", {
					className: "text-body-medium text-text-primary",
					children: e
				}),
				/* @__PURE__ */ m("span", {
					className: "text-body-2-regular text-text-secondary",
					children: t
				}),
				n ? /* @__PURE__ */ m("div", {
					className: "pt-2",
					children: n
				}) : null
			]
		}), /* @__PURE__ */ m("div", {
			className: "flex shrink-0 items-center gap-3",
			children: r
		})]
	});
}
function k({ item: e }) {
	return /* @__PURE__ */ h("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ m("div", {
			className: "min-w-0 flex-1",
			children: /* @__PURE__ */ m(r, {
				label: `${e.title}进度`,
				value: e.done || 0,
				max: e.total
			})
		}), /* @__PURE__ */ h("span", {
			className: "shrink-0 text-caption-1-regular text-text-secondary tabular-nums",
			children: [
				S(e.done),
				" / ",
				S(e.total)
			]
		})]
	});
}
function A() {
	let r = y({
		queryKey: i,
		queryFn: ({ signal: e }) => d(e),
		refetchInterval: ({ state: e }) => e.data?.items.some(E) ? 2e3 : !1
	}), o = r.data, f = v(), A = (e) => g.setQueryData(i, e), j = (e, t) => l(`/api/configuration/repairs/${e.id}`, {}, "POST", t), M = (e) => e.files === void 0 ? void f.run(e.id, (t) => j(e, t), A) : void u({
		title: `删除${e.title}`,
		body: `将删除 ${w(e)}，删除后不能恢复。每个关注来源最近 3 份快照和条目引用的快照会保留。`,
		confirmLabel: "删除快照",
		danger: !0,
		onConfirm: async () => A(await j(e))
	}), N = (e) => e.backups.length ? e.backups.some((e) => e.exists) ? /* @__PURE__ */ m(t, {
		href: "/settings/maintenance#ledgerBackups",
		size: "small",
		trailingIcon: p,
		children: "修复前的账本备份"
	}) : /* @__PURE__ */ m("span", {
		className: "text-body-2-regular text-text-tertiary",
		children: "修复前的备份已清理"
	}) : null, P = f.error || (r.error ? r.error.message : "");
	return /* @__PURE__ */ h(b, { children: [
		P ? /* @__PURE__ */ m(n, {
			tone: "error",
			children: P
		}) : null,
		/* @__PURE__ */ h("section", {
			"aria-labelledby": "repair-items",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ m(s, {
				id: "repair-items",
				children: "修复项目"
			}), o ? o.items.length ? /* @__PURE__ */ m("div", {
				className: a,
				children: o.items.map((t) => {
					let [n, r] = x[t.state] || x.none, i = D(t);
					return /* @__PURE__ */ h(O, {
						title: t.title,
						description: t.summary,
						progress: T(t) ? /* @__PURE__ */ m(k, { item: t }) : null,
						children: [i ? /* @__PURE__ */ m("span", {
							className: "text-body-2-regular text-text-secondary",
							children: i
						}) : null, t.mode === "confirm" && t.state === "waiting" ? /* @__PURE__ */ m(e, {
							size: "small",
							disabled: !o.available || !!f.busy || t.estimating,
							onClick: () => M(t),
							children: "开始"
						}) : /* @__PURE__ */ m(c, {
							tone: r,
							children: n
						})]
					}, t.id);
				})
			}) : /* @__PURE__ */ m("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "这台机器上没有要修复或迁移的内容。"
			}) : /* @__PURE__ */ m("div", {
				className: "contents",
				"data-skeleton": "",
				"aria-busy": "true",
				"aria-label": "正在读取修复项目",
				dangerouslySetInnerHTML: { __html: _() }
			})]
		}),
		o?.history.length ? /* @__PURE__ */ h("section", {
			"aria-labelledby": "repair-history",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ m(s, {
				id: "repair-history",
				children: "历史记录"
			}), /* @__PURE__ */ m("div", {
				className: a,
				children: o.history.map((e) => /* @__PURE__ */ m(O, {
					title: e.title,
					description: `${C(e.at)} · ${e.changed ? `改动 ${S(e.changed)} 项` : "无改动"}`,
					children: N(e)
				}, e.id))
			})]
		}) : null
	] });
}
export { A as RepairCenterPage };

//# debugId=cd7bf3c5-4996-4bf2-a78b-1306f20c083c