(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "df2167eb-7557-43eb-a13a-eaef0223a6dd", e._sentryDebugIdIdentifier = "sentry-dbid-df2167eb-7557-43eb-a13a-eaef0223a6dd");
	} catch {}
})();
import { Button as e, Chip as t, Disclosure as n, DownloadsPanel as r, EmptyState as i, LinkButton as a, LoadingDots as o, Note as s, Progress as c, TASKS_KEY as l, TRIGGER_LABELS as u, __toESM as d, apiGet as f, apiSend as p, busyProps as m, cardClass as h, elapsedText as g, errorMessage as _, f1 as v, fetchEarlier as ee, fetchTasks as te, foldRoutine as y, followupDetail as b, groupFollowups as x, hasResultProblems as S, i2 as C, import_jsx_runtime as ne, isActive as w, isRoutine as T, jsx as E, jsxs as D, latestOfKind as O, mergeFinished as k, momentText as A, pollInterval as j, problemDestination as M, progressText as N, require_react as P, statusLabel as F, summaryItems as I, taskIssues as L, uo as R, useMutation as z, useQuery as B, useQueryClient as V } from "./peach-app.js";
import { CodeBlock as H } from "./peach-app.code-block-BbD0jQqq.js";
import { Page as U } from "./peach-app.page-CW3QRN2N.js";
import { ErrorDetails as W, ErrorExcerpt as G } from "./peach-app.error-excerpt-CmCsvvvN.js";
// src/react/activity/background-issues.tsx
var K = /* @__PURE__ */ d(P(), 1), q = ["background-issues"];
function re() {
	let e = (0, K.useId)(), t = B({
		queryKey: q,
		queryFn: ({ signal: e }) => f("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ D("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ E("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: "需要处理"
		}), /* @__PURE__ */ E("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ E("li", { children: /* @__PURE__ */ E(J, { issue: e }) }, e.key))
		})]
	}) : null;
}
function J({ issue: t }) {
	let n = V(), r = z({
		mutationFn: () => p(t.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: q });
		}
	}), i = t.since ? `自 ${A(t.since)} 起` : `发现于 ${A(t.noticed_at)}`;
	return /* @__PURE__ */ E(s, {
		tone: "error",
		title: t.title,
		action: /* @__PURE__ */ D("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ E(a, {
				href: t.href,
				size: "small",
				trailingIcon: C,
				children: t.link_label
			}), t.retry ? /* @__PURE__ */ E(e, {
				variant: "secondary",
				size: "small",
				disabled: !t.retry_available,
				...m(r.isPending),
				onClick: () => r.mutate(),
				children: "立即重试"
			}) : null]
		}),
		children: r.error ? `${i}\n没有重试：${_(r.error)}` : i
	});
}
// src/react/activity/activity-page.tsx
var ie = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "neutral",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
};
function Y({ run: e }) {
	let n = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", r = n || e.status === "succeeded" && S(e);
	return /* @__PURE__ */ E(t, {
		color: r ? "yellow" : ie[e.status] ?? "neutral",
		children: n ? "部分项目需处理" : r ? "发现问题" : F(e.status)
	});
}
function ae({ rows: e }) {
	return /* @__PURE__ */ E("ul", {
		className: "flex min-w-0 flex-col",
		children: e.map((e) => {
			let t = b(e);
			return /* @__PURE__ */ D("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 border-t border-separator-border px-5 py-2.5",
				children: [
					/* @__PURE__ */ E("span", {
						className: "min-w-0 break-words text-caption-1-regular text-text-primary",
						children: e.task_label
					}),
					/* @__PURE__ */ E(Y, { run: e }),
					t ? /* @__PURE__ */ E("span", {
						className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
						children: t
					}) : null,
					/* @__PURE__ */ E("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ E(n, {
							summary: "技术详情",
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ E(H, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: `${e.task_label}技术详情`
							})
						})
					})
				]
			}, e.id);
		})
	});
}
function X({ run: e, meta: t, children: r, footer: i, followups: a }) {
	return /* @__PURE__ */ D("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: h({
			padding: "none",
			bordered: "line",
			className: e.status === "failed" ? "flex flex-col border-border-error-default" : "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ D("div", {
				className: "flex flex-col gap-1.5 px-5 pt-5 pb-4",
				children: [
					/* @__PURE__ */ D("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ E("strong", {
							className: "min-w-0 break-words text-title-1-medium text-text-primary",
							children: e.task_label
						}), /* @__PURE__ */ E(Y, { run: e })]
					}),
					/* @__PURE__ */ E("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					r
				]
			}),
			a?.length ? /* @__PURE__ */ E("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ E(n, {
					summary: `任务明细 · ${a.length} 项`,
					contentClassName: "pb-2.5",
					defaultOpen: a.some((e) => w(e)),
					children: /* @__PURE__ */ E(ae, { rows: a })
				})
			}) : null,
			Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ E("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ E(n, {
					summary: "技术详情",
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ E(H, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: `${e.task_label}技术详情`
					})
				})
			}) : null,
			i ? /* @__PURE__ */ E("div", {
				className: "flex min-h-14 flex-col justify-center rounded-b-2xl border-t border-separator-border bg-card-footer px-5 py-3",
				children: /* @__PURE__ */ E(G, {
					text: i,
					className: "text-caption-1-regular text-text-secondary"
				})
			}) : null
		]
	});
}
function oe({ run: e, followups: t }) {
	let n = e.progress_total || 0, r = e.progress_current || 0, i = e.progress_label || "正在进行", a = g(e.elapsed_seconds), s = [u[e.trigger] || e.trigger, a && `已跑 ${a}`].filter(Boolean).join(" · ");
	return /* @__PURE__ */ E(X, {
		run: e,
		meta: s,
		followups: t,
		children: n > 0 ? /* @__PURE__ */ D("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ E(c, {
				label: i,
				value: Math.min(r, n),
				max: n
			}), /* @__PURE__ */ D("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					i,
					" · ",
					N(r, n),
					" 项"
				]
			})]
		}) : /* @__PURE__ */ E(o, { label: i })
	});
}
function Z({ run: e, followups: t, runs: r, latest: i }) {
	let o = I(e.result_summary).filter((t) => t !== e.error), s = L(e), c = M(e, i), l = g(e.elapsed_seconds), d = r && r.length > 1 ? r[r.length - 1] : void 0, f = (d ? [
		u[e.trigger] || e.trigger,
		`近 ${r.length} 轮`,
		`${A(d.finished_at)} – ${A(e.finished_at)}`
	] : [
		u[e.trigger] || e.trigger,
		A(e.finished_at),
		l && `用时 ${l}`
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ D(X, {
		run: e,
		meta: f,
		footer: e.error,
		followups: t,
		children: [
			o.length ? /* @__PURE__ */ E("ul", {
				className: "list-disc space-y-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: o.map((e, t) => /* @__PURE__ */ E("li", { children: e }, t))
			}) : null,
			s.length ? /* @__PURE__ */ E(n, {
				summary: `问题详情 · ${s.length} 项`,
				contentClassName: "pt-2",
				children: /* @__PURE__ */ E(W, {
					label: "任务问题详情",
					children: /* @__PURE__ */ E("ul", {
						className: "flex min-w-0 flex-col gap-3",
						"data-task-issues": "",
						children: s.map((e, t) => /* @__PURE__ */ D("li", {
							className: "flex min-w-0 flex-col gap-1 text-body-2-regular wrap-anywhere",
							children: [/* @__PURE__ */ E("p", {
								className: "text-body-regular text-text-primary",
								children: [
									e.label,
									e.provider,
									e.kind
								].filter(Boolean).join(" · ")
							}), /* @__PURE__ */ E(G, {
								text: e.error,
								className: "text-text-primary"
							})]
						}, `${e.source}-${t}`))
					})
				})
			}) : S(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ E("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得本轮逐项详情，可到来源列表查看检查结果。"
			}) : null,
			c ? /* @__PURE__ */ E(a, {
				href: c.href,
				size: "small",
				trailingIcon: C,
				className: "self-start",
				children: c.label
			}) : null
		]
	});
}
function Q({ title: e, children: t }) {
	let n = (0, K.useId)();
	return /* @__PURE__ */ D("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ E("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, children: t }) {
	return /* @__PURE__ */ E("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t
	});
}
function se() {
	let t = B({
		queryKey: l,
		queryFn: ({ signal: e }) => te(e),
		refetchInterval: (e) => j(e.state.data)
	}), n = t.data, a = n?.finished, [o, c] = (0, K.useState)([]), [u, d] = (0, K.useState)(!1), [f, p] = (0, K.useState)(a);
	a !== f && (p(a), o.length && f && c(k(o, f)));
	let h = z({
		mutationFn: ({ oldest: e }) => ee(e),
		onSuccess: (e, { shown: t }) => {
			c((n) => k(n, t, e.finished || [])), d(!!e.finished_has_more);
		}
	}), g = t.error ? _(t.error) : "";
	if (!n) return /* @__PURE__ */ E(U, { children: /* @__PURE__ */ E(s, {
		tone: "error",
		children: g || "读取任务中心失败"
	}) });
	let b = k(n.finished || [], o), S = [
		...n.running || [],
		...n.skipped || [],
		...b
	], C = x(S), A = new Set(S.map((e) => e.id)), M = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && A.has(e.parent_run_id))), N = M(b), P = N[N.length - 1], F = !!P && (o.length ? u : !!n.finished_has_more), I = () => {
		!h.isPending && P && h.mutate({
			oldest: P,
			shown: b
		});
	}, L = N.filter((e) => C.get(e.id)?.some(w)), V = M(n.running || []), H = M(n.skipped || []), W = N.filter((e) => !L.includes(e) && !H.some((t) => t.id === e.id)), G = y(W, (e) => T(e) && !C.get(e.id)?.length), q = O(S), J = !V.length && !L.length && !H.length && !W.length;
	return /* @__PURE__ */ D(U, { children: [
		g ? /* @__PURE__ */ E(s, {
			tone: "error",
			children: g
		}) : null,
		n.available === !1 ? /* @__PURE__ */ E(s, {
			tone: "warning",
			children: n.message || "数据库尚未准备好任务记录表"
		}) : null,
		/* @__PURE__ */ E(re, {}),
		J ? /* @__PURE__ */ E(i, {
			icon: R,
			title: "还没有任务记录",
			children: "扫描、追更检查、批量操作和命令行批处理跑起来之后，这里会显示它们的进度与结果。"
		}) : /* @__PURE__ */ D(ne.Fragment, { children: [
			/* @__PURE__ */ E(Q, {
				title: "正在进行",
				children: V.length || L.length ? /* @__PURE__ */ D($, {
					live: !0,
					children: [V.map((e) => /* @__PURE__ */ E(oe, {
						run: e,
						followups: C.get(e.id)
					}, e.id)), L.map((e) => /* @__PURE__ */ E(Z, {
						run: e,
						latest: q.has(e.id),
						followups: C.get(e.id)
					}, e.id))]
				}) : /* @__PURE__ */ E(s, {
					tone: "neutral",
					children: "没有任务在跑。"
				})
			}),
			H.length ? /* @__PURE__ */ E(Q, {
				title: "本次未执行",
				children: /* @__PURE__ */ E($, { children: H.map((e) => /* @__PURE__ */ E(Z, {
					run: e,
					latest: q.has(e.id),
					followups: C.get(e.id)
				}, e.id)) })
			}) : null,
			W.length || F ? /* @__PURE__ */ D(Q, {
				title: "最近完成",
				children: [
					W.length ? /* @__PURE__ */ E($, { children: G.map(({ run: e, runs: t }) => /* @__PURE__ */ E(Z, {
						run: e,
						runs: t,
						latest: q.has(e.id),
						followups: C.get(e.id)
					}, e.id)) }) : null,
					h.error ? /* @__PURE__ */ E(s, {
						tone: "error",
						children: _(h.error)
					}) : null,
					F ? /* @__PURE__ */ E(e, {
						variant: "secondary",
						size: "small",
						leadingIcon: v,
						className: "self-start",
						...m(h.isPending),
						onClick: I,
						children: "加载更早"
					}) : null
				]
			}) : null
		] }),
		/* @__PURE__ */ E(r, {})
	] });
}
export { se as ActivityPage };

//# debugId=df2167eb-7557-43eb-a13a-eaef0223a6dd