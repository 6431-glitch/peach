(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "444fc67b-03a8-457d-98e9-3315e475ec57", e._sentryDebugIdIdentifier = "sentry-dbid-444fc67b-03a8-457d-98e9-3315e475ec57");
	} catch {}
})();
import { Button as e, Chip as t, Disclosure as n, DownloadsPanel as r, EmptyState as i, LinkButton as a, LoadingDots as o, Note as s, Progress as c, TASKS_KEY as l, TRIGGER_LABELS as u, __toESM as d, apiGet as f, apiSend as p, busyProps as m, cardClass as h, elapsedText as g, errorMessage as _, f1 as ee, fetchEarlier as v, fetchTasks as te, foldByKind as ne, foldRoutine as re, followupDetail as y, followupTally as b, groupFollowups as x, hasResultProblems as S, i2 as C, import_jsx_runtime as ie, isActive as w, isRoutine as ae, jsx as T, jsxs as E, latestOfKind as oe, mergeFinished as D, momentText as O, pollInterval as se, problemDestination as k, progressText as A, require_react as j, statusLabel as M, summaryItems as N, taskIssues as P, uo as ce, useMutation as F, useQuery as I, useQueryClient as L } from "./peach-app.js";
import { CodeBlock as R } from "./peach-app.code-block-BbD0jQqq.js";
import { Page as z } from "./peach-app.page-CW3QRN2N.js";
import { ErrorDetails as B, ErrorExcerpt as V } from "./peach-app.error-excerpt-CmCsvvvN.js";
// src/react/activity/background-issues.tsx
var H = /* @__PURE__ */ d(j(), 1), U = ["background-issues"];
function le() {
	let e = (0, H.useId)(), t = I({
		queryKey: U,
		queryFn: ({ signal: e }) => f("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ E("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ T("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: "需要处理"
		}), /* @__PURE__ */ T("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ T("li", { children: /* @__PURE__ */ T(W, { issue: e }) }, e.key))
		})]
	}) : null;
}
function W({ issue: t }) {
	let n = L(), r = F({
		mutationFn: () => p(t.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: U });
		}
	}), i = t.since ? `自 ${O(t.since)} 起` : `发现于 ${O(t.noticed_at)}`;
	return /* @__PURE__ */ T(s, {
		tone: "error",
		title: t.title,
		action: /* @__PURE__ */ E("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ T(a, {
				href: t.href,
				size: "small",
				trailingIcon: C,
				children: t.link_label
			}), t.retry ? /* @__PURE__ */ T(e, {
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
var G = 50, ue = /* @__PURE__ */ new Set(["upgrade-repairs"]), K = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "neutral",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
};
function q({ run: e }) {
	let n = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", r = n || e.status === "succeeded" && S(e);
	return /* @__PURE__ */ T(t, {
		color: r ? "yellow" : K[e.status] ?? "neutral",
		children: n ? "部分项目需处理" : r ? "发现问题" : M(e.status)
	});
}
function J({ rows: e }) {
	return /* @__PURE__ */ T("ul", {
		className: "flex min-w-0 flex-col",
		children: e.map((e) => {
			let t = y(e);
			return /* @__PURE__ */ E("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 border-t border-separator-border px-5 py-2.5",
				children: [
					/* @__PURE__ */ T("span", {
						className: "min-w-0 break-words text-caption-1-regular text-text-primary",
						children: e.task_label
					}),
					/* @__PURE__ */ T(q, { run: e }),
					t ? /* @__PURE__ */ T("span", {
						className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
						children: t
					}) : null,
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ T("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ T(n, {
							summary: "技术详情",
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ T(R, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: `${e.task_label}技术详情`
							})
						})
					}) : null
				]
			}, e.id);
		})
	});
}
function Y({ run: e, meta: t, children: r, footer: i, followups: a, followupTotal: o = 0, badge: s }) {
	let c = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), l = a ? [...a].sort((e, t) => c(t) - c(e) || t.id - e.id).slice(0, G) : [], u = l.length, d = Math.max(a?.length || 0, o);
	return /* @__PURE__ */ E("li", {
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
			/* @__PURE__ */ E("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ E("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ T("strong", {
							className: "min-w-0 break-words text-title-3-medium text-text-primary",
							children: e.task_label
						}), s ?? /* @__PURE__ */ T(q, { run: e })]
					}),
					/* @__PURE__ */ T("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					r
				]
			}),
			u ? /* @__PURE__ */ T("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ E(n, {
					summary: `任务明细 · ${d.toLocaleString()} 项`,
					contentClassName: "pb-2.5",
					defaultOpen: l.some((e) => w(e)),
					children: [u < d ? /* @__PURE__ */ E("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: [
							"列出其中 ",
							u.toLocaleString(),
							" 项，正在处理的排在前面"
						]
					}) : null, /* @__PURE__ */ T(J, { rows: l })]
				})
			}) : null,
			Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ T("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ T(n, {
					summary: "技术详情",
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ T(R, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: `${e.task_label}技术详情`
					})
				})
			}) : null,
			i ? /* @__PURE__ */ T("div", {
				className: "flex min-h-14 flex-col justify-center rounded-b-2xl border-t border-separator-border bg-card-footer px-5 py-3",
				children: /* @__PURE__ */ T(V, {
					text: i,
					className: "text-caption-1-regular text-text-secondary"
				})
			}) : null
		]
	});
}
function de({ run: e, followups: t }) {
	let n = e.progress_total || 0, r = e.progress_current || 0, i = e.progress_label || "正在进行", a = g(e.elapsed_seconds), s = [u[e.trigger] || e.trigger, a && `已跑 ${a}`].filter(Boolean).join(" · ");
	return /* @__PURE__ */ T(Y, {
		run: e,
		meta: s,
		followups: t,
		children: n > 0 ? /* @__PURE__ */ E("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ T(c, {
				label: i,
				value: Math.min(r, n),
				max: n
			}), /* @__PURE__ */ E("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					i,
					" · ",
					A(r, n),
					" 项"
				]
			})]
		}) : /* @__PURE__ */ T(o, { label: i })
	});
}
function X({ run: e, followups: r, runs: i, latest: o, followupTotal: s, followupFailed: c = 0 }) {
	let l = !!(i && i.length > 1 && s), d = l ? [`共处理 ${s.toLocaleString()} 项`, c ? `其中 ${c.toLocaleString()} 项失败` : ""].filter(Boolean) : N(e.result_summary).filter((t) => t !== e.error), f = P(e), p = k(e, o), m = g(e.elapsed_seconds), h = i && i.length > 1 ? i[i.length - 1] : void 0, _ = (h ? [
		u[e.trigger] || e.trigger,
		`近 ${i.length} 轮`,
		`${O(h.finished_at)} – ${O(e.finished_at)}`
	] : [
		u[e.trigger] || e.trigger,
		O(e.finished_at),
		m && `用时 ${m}`
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ E(Y, {
		run: e,
		meta: _,
		footer: e.error,
		followups: r,
		followupTotal: s,
		badge: l && c ? /* @__PURE__ */ T(t, {
			color: "yellow",
			children: "发现问题"
		}) : void 0,
		children: [
			d.length === 1 ? /* @__PURE__ */ T("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d[0]
			}) : d.length ? /* @__PURE__ */ T("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d.map((e, t) => /* @__PURE__ */ T("li", { children: e }, t))
			}) : null,
			f.length ? /* @__PURE__ */ T(n, {
				summary: `问题详情 · ${f.length} 项`,
				contentClassName: "pt-2",
				children: /* @__PURE__ */ T(B, {
					label: "任务问题详情",
					children: /* @__PURE__ */ T("ul", {
						className: "flex min-w-0 flex-col gap-3",
						"data-task-issues": "",
						children: f.map((e, t) => /* @__PURE__ */ E("li", {
							className: "flex min-w-0 flex-col gap-1 text-body-2-regular wrap-anywhere",
							children: [/* @__PURE__ */ T("p", {
								className: "text-body-regular text-text-primary",
								children: [
									e.label,
									e.provider,
									e.kind
								].filter(Boolean).join(" · ")
							}), /* @__PURE__ */ T(V, {
								text: e.error,
								className: "text-text-primary"
							})]
						}, `${e.source}-${t}`))
					})
				})
			}) : S(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ T("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得本轮逐项详情，可到来源列表查看检查结果。"
			}) : null,
			p ? /* @__PURE__ */ T(a, {
				href: p.href,
				size: "small",
				trailingIcon: C,
				className: "self-start",
				children: p.label
			}) : null
		]
	});
}
function fe({ runs: e, followups: n, counts: r }) {
	let i = e[0], a = e[e.length - 1], o = b(r, e), s = Math.max(o.total, n.length), l = o.total ? o.settled : n.filter((e) => !w(e)).length, d = o.total ? o.failed : n.filter((e) => e.status === "failed" || e.status === "interrupted").length, f = [
		u[i.trigger] || i.trigger,
		e.length > 1 ? `${e.length} 批` : "",
		`${O(a.started_at || a.finished_at)} 开始`
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ T(Y, {
		run: i,
		meta: f,
		followups: n,
		followupTotal: s,
		badge: /* @__PURE__ */ T(t, {
			color: "blue",
			children: "进行中"
		}),
		children: /* @__PURE__ */ E("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ T(c, {
				label: `${i.task_label}进度`,
				value: l,
				max: s
			}), /* @__PURE__ */ E("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"已处理 ",
					A(l, s),
					" 项",
					d ? ` · 其中 ${d.toLocaleString()} 项失败` : ""
				]
			})]
		})
	});
}
function Z({ title: e, children: t }) {
	let n = (0, H.useId)();
	return /* @__PURE__ */ E("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ T("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function Q({ live: e = !1, children: t }) {
	return /* @__PURE__ */ T("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t
	});
}
function $() {
	let t = I({
		queryKey: l,
		queryFn: ({ signal: e }) => te(e),
		refetchInterval: (e) => se(e.state.data)
	}), n = t.data, a = n?.finished, [o, c] = (0, H.useState)([]), [u, d] = (0, H.useState)(!1), [f, p] = (0, H.useState)({}), [h, g] = (0, H.useState)(a);
	a !== h && (g(a), o.length && h && c(D(o, h)));
	let y = F({
		mutationFn: ({ oldest: e }) => v(e),
		onSuccess: (e, { shown: t }) => {
			c((n) => D(n, t, e.finished || [])), d(!!e.finished_has_more), p((t) => ({
				...t,
				...e.followup_counts
			}));
		}
	}), C = t.error ? _(t.error) : "";
	if (!n) return /* @__PURE__ */ T(z, { children: /* @__PURE__ */ T(s, {
		tone: "error",
		children: C || "读取任务中心失败"
	}) });
	let O = D(n.finished || [], o), k = n.working_parents || [], A = [
		...n.running || [],
		...n.skipped || [],
		...O,
		...k
	], j = x(A), M = new Set(A.map((e) => e.id)), N = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && M.has(e.parent_run_id))), P = N(O), L = P[P.length - 1], R = !!L && (o.length ? u : !!n.finished_has_more), B = () => {
		!y.isPending && L && y.mutate({
			oldest: L,
			shown: O
		});
	}, V = {
		...f,
		...n.followup_counts
	}, U = (e) => e.flatMap((e) => j.get(e.id) || []), W = [...P, ...N(k)].filter((e) => b(V, [e]).active > 0 || j.get(e.id)?.some(w)).sort((e, t) => t.id - e.id), G = N(n.running || []), K = N(n.skipped || []), q = P.filter((e) => !W.includes(e) && !K.some((t) => t.id === e.id)), J = (e) => (j.get(e.id) || []).every((e) => e.status === "succeeded" && !S(e)) && b(V, [e]).failed === 0, Y = re(q, (e) => ae(e) && (J(e) || ue.has(e.task_key))), $ = oe(A), pe = !G.length && !W.length && !K.length && !q.length;
	return /* @__PURE__ */ E(z, { children: [
		C ? /* @__PURE__ */ T(s, {
			tone: "error",
			children: C
		}) : null,
		n.available === !1 ? /* @__PURE__ */ T(s, {
			tone: "warning",
			children: n.message || "数据库尚未准备好任务记录表"
		}) : null,
		/* @__PURE__ */ T(le, {}),
		pe ? /* @__PURE__ */ T(i, {
			icon: ce,
			title: "还没有任务记录",
			children: "扫描、追更检查、批量操作和命令行批处理跑起来之后，这里会显示它们的进度与结果。"
		}) : /* @__PURE__ */ E(ie.Fragment, { children: [
			/* @__PURE__ */ T(Z, {
				title: "正在进行",
				children: G.length || W.length ? /* @__PURE__ */ E(Q, {
					live: !0,
					children: [G.map((e) => /* @__PURE__ */ T(de, {
						run: e,
						followups: j.get(e.id)
					}, e.id)), ne(W).map(({ run: e, runs: t }) => /* @__PURE__ */ T(fe, {
						runs: t,
						followups: U(t),
						counts: V
					}, e.id))]
				}) : /* @__PURE__ */ T(s, {
					tone: "neutral",
					children: "没有任务在跑。"
				})
			}),
			K.length ? /* @__PURE__ */ T(Z, {
				title: "本次未执行",
				children: /* @__PURE__ */ T(Q, { children: K.map((e) => /* @__PURE__ */ T(X, {
					run: e,
					latest: $.has(e.id),
					followups: j.get(e.id)
				}, e.id)) })
			}) : null,
			q.length || R ? /* @__PURE__ */ E(Z, {
				title: "最近完成",
				children: [
					q.length ? /* @__PURE__ */ T(Q, { children: Y.map(({ run: e, runs: t }) => {
						let n = b(V, t);
						return /* @__PURE__ */ T(X, {
							run: e,
							runs: t,
							latest: $.has(e.id),
							followups: U(t),
							followupTotal: n.total,
							followupFailed: n.failed
						}, e.id);
					}) }) : null,
					y.error ? /* @__PURE__ */ T(s, {
						tone: "error",
						children: _(y.error)
					}) : null,
					R ? /* @__PURE__ */ T(e, {
						variant: "secondary",
						size: "small",
						leadingIcon: ee,
						className: "self-start",
						...m(y.isPending),
						onClick: B,
						children: "加载更早"
					}) : null
				]
			}) : null
		] }),
		/* @__PURE__ */ T(r, {})
	] });
}
export { $ as ActivityPage };

//# debugId=444fc67b-03a8-457d-98e9-3315e475ec57