(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "48b79bb1-910b-4cfe-8539-3cba30e0c65b", e._sentryDebugIdIdentifier = "sentry-dbid-48b79bb1-910b-4cfe-8539-3cba30e0c65b");
	} catch {}
})();
import { BP as e, Button as t, Chip as n, Disclosure as r, DownloadsPanel as i, EmptyState as a, Gg as o, HN as s, LinkButton as c, LoadingDots as l, Note as u, OV as d, Progress as f, TASKS_KEY as p, TRIGGER_LABELS as m, __toESM as h, apiGet as g, apiSend as _, busyProps as v, cardClass as y, confirmModal as b, controlTask as x, cx as S, elapsedText as C, errorMessage as w, f1 as ee, fetchEarlier as te, fetchTasks as ne, fmtSize as T, foldByKind as re, foldRoutine as ie, followupDetail as E, followupTally as D, groupFollowups as ae, hasResultProblems as O, i2 as k, isActive as A, isRoutine as oe, latestOfKind as se, mergeFinished as j, momentText as M, notifyManager as N, pollInterval as ce, problemDestination as P, progressText as F, replaceEqualDeep as I, require_jsx_runtime as L, require_react as R, statusLabel as z, summaryItems as B, taskIssues as V, taskSubject as H, uo as le, useMutation as U, useQuery as W, useQueryClient as G } from "./peach-app.js";
import { CodeBlock as K } from "./peach-app.code-block-CyDva4Ms.js";
import { Page as ue } from "./peach-app.page-QAncjzM1.js";
import { ErrorDetails as de, ErrorExcerpt as fe } from "./peach-app.error-excerpt-B8v2xEIP.js";
// node_modules/@tanstack/react-query/build/modern/useMutationState.js
var q = /* @__PURE__ */ h(R(), 1);
function pe() {
	let e;
	return (t, n) => {
		let r = [], i;
		return () => {
			let a = t.findAll(n.filters), o = a.flatMap((e) => [e, e.state]);
			return (!i || o.length !== r.length || o.some((e, t) => !Object.is(e, r[t]))) && (r = o, i = I(e, a.map((e) => n.select ? n.select(e) : e.state)), e = i), i;
		};
	};
}
function me(e = {}, t) {
	let n = G(t).getMutationCache(), [r] = q.useState(() => pe()), i = r(n, e);
	return q.useSyncExternalStore(q.useCallback((e) => n.subscribe(N.batchCalls(e)), [n]), i, i);
}
// src/react/activity/background-issues.tsx
var J = L(), he = ["background-issues"];
function ge() {
	let e = (0, q.useId)(), t = W({
		queryKey: he,
		queryFn: ({ signal: e }) => g("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ (0, J.jsxs)("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, J.jsx)("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: "需要处理"
		}), /* @__PURE__ */ (0, J.jsx)("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ (0, J.jsx)("li", { children: /* @__PURE__ */ (0, J.jsx)(_e, { issue: e }) }, e.key))
		})]
	}) : null;
}
function _e({ issue: e }) {
	let n = G(), r = U({
		mutationFn: () => _(e.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: he });
		}
	}), i = e.since ? `自 ${M(e.since)} 起` : `发现于 ${M(e.noticed_at)}`;
	return /* @__PURE__ */ (0, J.jsx)(u, {
		tone: "error",
		title: e.title,
		action: /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, J.jsx)(c, {
				href: e.href,
				size: "small",
				trailingIcon: k,
				children: e.link_label
			}), e.retry ? /* @__PURE__ */ (0, J.jsx)(t, {
				variant: "secondary",
				size: "small",
				disabled: !e.retry_available,
				...v(r.isPending),
				onClick: () => r.mutate(),
				children: "立即重试"
			}) : null]
		}),
		children: r.error ? `${i}\n没有重试：${w(r.error)}` : i
	});
}
// src/react/activity/task-controls.tsx
var Y = ["task-control"], ve = {
	pause: d,
	resume: o,
	cancel: s
}, ye = {
	pause: "暂停",
	resume: "继续",
	cancel: "取消"
}, be = {
	pause: "暂停后续任务",
	resume: "继续后续任务",
	cancel: "取消后续任务"
};
function xe() {
	let e = me({
		filters: { mutationKey: Y },
		select: (e) => ({
			id: e.mutationId,
			command: e.state.variables,
			status: e.state.status,
			error: e.state.error
		})
	}), t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.command;
		if (!e) continue;
		let r = t.get(e.id);
		(!r || r.id < n.id) && t.set(e.id, {
			...n,
			command: e
		});
	}
	let n = [...t.values()].filter((e) => e.status === "error");
	return n.length ? /* @__PURE__ */ (0, J.jsx)("div", {
		"data-task-control-feedback": "",
		className: "flex min-w-0 flex-col gap-2",
		children: n.map(({ command: e, error: t }) => /* @__PURE__ */ (0, J.jsx)(u, {
			tone: "error",
			title: `${e.label}：${(e.followups ? be : ye)[e.action]}未完成`,
			children: w(t)
		}, e.id))
	}) : null;
}
function Se({ run: e }) {
	let n = G(), r = (0, q.useRef)({
		change: !1,
		cancel: !1,
		confirmation: !1
	}), i = () => {
		n.invalidateQueries({ queryKey: p });
	}, a = (e) => x(e.id, e.action), o = U({
		mutationKey: [
			...Y,
			e.id,
			"change"
		],
		mutationFn: a,
		onSettled: () => {
			r.current.change = !1, i();
		}
	}), s = U({
		mutationKey: [
			...Y,
			e.id,
			"cancel"
		],
		mutationFn: a,
		onSettled: () => {
			r.current.cancel = !1, i();
		}
	}), c = e.control?.actions || [], l = !A(e), u = s.isPending || s.isSuccess;
	if (!c.length) return null;
	let d = (t) => {
		let n = {
			id: e.id,
			label: e.task_label,
			action: t,
			followups: l
		};
		if (t === "cancel") {
			if (r.current.cancel || r.current.confirmation || s.isSuccess) return;
			r.current.confirmation = !0, b({
				title: l ? `取消「${e.task_label}」的全部后续任务` : `取消任务「${e.task_label}」`,
				body: l ? "将停止这轮已派出的全部后续任务，包括正在处理和排队的项目。已保存的资料和结果会保留。这批后续任务取消后不能继续，需要时重新发起。" : "将停止这轮剩余的处理及其后续任务。已保存的资料和结果会保留。这轮任务取消后不能继续，需要时重新发起。",
				confirmLabel: l ? "取消后续任务" : "取消任务",
				danger: !0,
				onConfirm: async () => (r.current.cancel = !0, await s.mutateAsync(n))
			}).finally(() => {
				r.current.confirmation = !1;
			});
		} else {
			if (r.current.change || r.current.cancel || u) return;
			r.current.change = !0, o.mutate(n);
		}
	};
	return /* @__PURE__ */ (0, J.jsx)("div", {
		className: "ml-auto shrink-0",
		"data-task-controls": e.id,
		children: /* @__PURE__ */ (0, J.jsx)("div", {
			role: "group",
			"aria-label": `${e.task_label}${l ? "后续任务" : "任务"}控制`,
			className: "flex items-center justify-end gap-2",
			children: c.map((e) => {
				let n = (l ? be : ye)[e], r = e === "cancel" ? s.isPending : o.isPending && o.variables?.action === e, i = e === "cancel" ? u : o.isPending || u;
				return /* @__PURE__ */ (0, J.jsx)(t, {
					type: "button",
					variant: "secondary",
					size: "small",
					iconOnly: !0,
					leadingIcon: ve[e],
					"aria-label": n,
					title: n,
					...v(r),
					"aria-disabled": i || void 0,
					onClick: () => d(e),
					"data-tooltip-copy-key": `tasks.control.action.${l ? "followups." : ""}${e}`
				}, e);
			})
		})
	});
}
// src/react/activity/resource-chip.tsx
var Ce = {
	blue: "bg-status-blue-text text-background-primary-default",
	purple: "bg-status-purple-text text-background-primary-default",
	cyan: "bg-status-cyan-text text-background-primary-default"
};
function we({ color: e, high: t, ...r }) {
	return t ? /* @__PURE__ */ (0, J.jsx)("span", {
		...r,
		className: S("inline-flex items-center justify-center rounded-md px-1.5 py-1 whitespace-nowrap text-caption-1-medium", Ce[e])
	}) : /* @__PURE__ */ (0, J.jsx)(n, {
		variant: "caption",
		color: e,
		...r
	});
}
// src/react/activity/task-resources.tsx
var Te = {
	cpu: {
		name: "CPU",
		color: "blue",
		description: "CPU 使用率以执行端可用容量为 100%，容器按可见 CPU 配额计算。达到 50% 时加深显示。"
	},
	gpu: {
		name: "GPU",
		color: "purple",
		description: "GPU 使用率显示该任务最忙的 GPU 引擎。达到 50% 时加深显示。"
	},
	network: {
		name: "网络",
		color: "cyan",
		description: "网络速率显示该任务已观测的下载速度，达到 10 MiB/s 时加深显示。挂载盘或无法准确归属的传输显示未取得。"
	}
};
function Ee(e) {
	return e === "sampling" ? "采样中" : "未取得";
}
function De(e, t) {
	return t === 0 ? "未使用" : e === "network" ? `${T(t)}/s` : `${t.toLocaleString(void 0, { maximumFractionDigits: 1 })}%`;
}
function Oe({ run: e, active: t = A(e) || !!e.control }) {
	if (!t || !e.resources) return null;
	let n = e.resources;
	return /* @__PURE__ */ (0, J.jsx)("div", {
		"data-task-resources": e.id,
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			"cpu",
			"gpu",
			"network"
		].map((e) => {
			let t = n[e], r = Te[e], i = e === "network" ? n.network.bytes_per_second : n[e].percent, a = t.state === "ready" && i !== null, o = a && t.high, s = a ? De(e, i) : Ee(t.state), c = [
				t.reason,
				o ? "当前为高占用。" : "",
				r.description,
				n.detail
			].filter(Boolean).join("\n");
			return /* @__PURE__ */ (0, J.jsxs)(we, {
				color: r.color,
				high: o,
				tabIndex: 0,
				title: c,
				"data-task-resource": e,
				"data-resource-state": t.state,
				"data-resource-high": o || void 0,
				"data-resource-idle": a && i === 0 || void 0,
				"data-copy-ignore": "",
				"data-tooltip-copy-key": !t.reason && !n.detail && !o ? `tasks.resources.${e}.description` : void 0,
				children: [
					r.name,
					" ",
					s
				]
			}, e);
		})
	});
}
// src/react/activity/activity-page.tsx
var ke = 50, Ae = /* @__PURE__ */ new Set(["upgrade-repairs"]), je = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "rose",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
}, Me = {
	running: "进行中",
	pausing: "正在暂停",
	paused: "已暂停",
	cancelling: "正在取消"
};
function X({ run: e }) {
	let t = e.control?.state;
	if (t && (t !== "running" || !A(e))) return /* @__PURE__ */ (0, J.jsx)(n, {
		color: t === "running" ? "blue" : "neutral",
		children: /* @__PURE__ */ (0, J.jsx)("span", {
			"data-copy-key": `tasks.control.state.${t}`,
			children: Me[t]
		})
	});
	let r = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", i = r || e.status === "succeeded" && O(e);
	return /* @__PURE__ */ (0, J.jsx)(n, {
		color: i ? "yellow" : je[e.status] ?? "neutral",
		children: r ? "部分项目需处理" : i ? "发现问题" : z(e.status)
	});
}
function Ne({ rows: e }) {
	return /* @__PURE__ */ (0, J.jsx)("ul", {
		className: "-mr-5 flex min-w-0 flex-col",
		children: e.map((e) => {
			let t = E(e);
			return /* @__PURE__ */ (0, J.jsxs)("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-col gap-1 border-t border-separator-border py-2.5 pr-10 pl-5",
				children: [
					/* @__PURE__ */ (0, J.jsxs)("div", {
						className: "flex min-w-0 items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, J.jsxs)("div", {
							className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ (0, J.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-primary",
									children: e.task_label
								}),
								/* @__PURE__ */ (0, J.jsx)(X, { run: e }),
								t ? /* @__PURE__ */ (0, J.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
									children: t
								}) : null
							]
						}), /* @__PURE__ */ (0, J.jsx)(Se, { run: e })]
					}),
					/* @__PURE__ */ (0, J.jsx)(Oe, { run: e }),
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, J.jsx)("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ (0, J.jsx)(r, {
							summary: "技术详情",
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ (0, J.jsx)(K, {
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
function Z({ run: t, meta: n, children: i, footer: a, followups: o, followupTotal: s = 0, badge: l, resourceActive: u }) {
	let d = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), f = o ? [...o].sort((e, t) => d(t) - d(e) || t.id - e.id).slice(0, ke) : [], p = f.length, m = Math.max(o?.length || 0, s), h = H(t);
	return /* @__PURE__ */ (0, J.jsxs)("li", {
		id: `run-${t.id}`,
		"data-status": t.status,
		"data-task-key": t.task_key,
		"data-run-id": t.id,
		className: y({
			padding: "none",
			className: t.status === "failed" ? "flex flex-col border-border-error-default" : "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ (0, J.jsxs)("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, J.jsxs)("div", {
						className: "flex min-w-0 items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, J.jsxs)("div", {
							className: "flex min-w-0 flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, J.jsx)("strong", {
								className: "min-w-0 break-words text-title-3-medium text-text-primary",
								children: t.task_label
							}), l ?? /* @__PURE__ */ (0, J.jsx)(X, { run: t })]
						}), /* @__PURE__ */ (0, J.jsx)(Se, { run: t })]
					}),
					/* @__PURE__ */ (0, J.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: n
					}),
					/* @__PURE__ */ (0, J.jsx)(Oe, {
						run: t,
						active: u
					}),
					h ? /* @__PURE__ */ (0, J.jsx)(c, {
						href: h.href,
						size: "xs",
						leadingIcon: e,
						"data-task-subject": t.id,
						title: h.label,
						className: "min-w-0 max-w-full self-start justify-start [&>span]:min-w-0 [&>span]:truncate",
						children: h.label
					}) : null,
					i
				]
			}),
			p ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ (0, J.jsxs)(r, {
					summary: `任务明细 · ${m.toLocaleString()} 项`,
					contentClassName: "pb-2.5",
					defaultOpen: f.some((e) => A(e)),
					children: [p < m ? /* @__PURE__ */ (0, J.jsxs)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: [
							"列出其中 ",
							p.toLocaleString(),
							" 项，正在处理的排在前面"
						]
					}) : null, /* @__PURE__ */ (0, J.jsx)(Ne, { rows: f })]
				})
			}) : null,
			!A(t) && Object.keys(t.result_summary || {}).length ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ (0, J.jsx)(r, {
					summary: "技术详情",
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ (0, J.jsx)(K, {
						code: JSON.stringify(t.result_summary, null, 2),
						language: "json",
						label: `${t.task_label}技术详情`
					})
				})
			}) : null,
			a ? /* @__PURE__ */ (0, J.jsx)("div", {
				className: "flex min-h-14 flex-col justify-center rounded-b-2xl border-t border-separator-border bg-card-footer px-5 py-3",
				children: /* @__PURE__ */ (0, J.jsx)(fe, {
					text: a,
					className: "text-caption-1-regular text-text-secondary"
				})
			}) : null
		]
	});
}
function Pe({ run: e, followups: t }) {
	let n = e.progress_total || 0, r = e.progress_current || 0, i = e.control?.state, a = i && i !== "running", o = a ? Me[i] : e.progress_label || "正在进行", s = C(e.elapsed_seconds), c = [m[e.trigger] || e.trigger, s && `已跑 ${s}`].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsx)(Z, {
		run: e,
		meta: c,
		followups: t,
		children: n > 0 ? /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, J.jsx)(f, {
				label: o,
				value: Math.min(r, n),
				max: n
			}), /* @__PURE__ */ (0, J.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					o,
					" · ",
					F(r, n),
					" 项"
				]
			})]
		}) : a ? /* @__PURE__ */ (0, J.jsx)("p", {
			"data-copy-key": `tasks.control.state.${i}`,
			className: "text-caption-1-regular text-text-secondary",
			children: o
		}) : /* @__PURE__ */ (0, J.jsx)(l, { label: o })
	});
}
function Fe({ run: e, followups: t, runs: i, latest: a, followupTotal: o, followupFailed: s = 0, followupCancelled: l = 0 }) {
	let u = !!(i && i.length > 1 && o), d = u ? [`共处理 ${o.toLocaleString()} 项`, s ? `其中 ${s.toLocaleString()} 项失败` : ""].filter(Boolean) : B(H(e) ? {
		...e.result_summary,
		name: ""
	} : e.result_summary).filter((t) => t !== e.error), f = V(e), p = P(e, a), h = C(e.elapsed_seconds), g = i && i.length > 1 ? i[i.length - 1] : void 0, _ = (g ? [
		m[e.trigger] || e.trigger,
		`近 ${i.length} 轮`,
		`${M(g.finished_at)} – ${M(e.finished_at)}`
	] : [
		m[e.trigger] || e.trigger,
		M(e.finished_at),
		h && `用时 ${h}`
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsxs)(Z, {
		run: e,
		meta: _,
		footer: e.error,
		followups: t,
		followupTotal: o,
		badge: l && e.status === "succeeded" ? /* @__PURE__ */ (0, J.jsx)(n, {
			color: "rose",
			children: /* @__PURE__ */ (0, J.jsx)("span", {
				"data-copy-key": `tasks.followups.cancelled.${l === o ? "all" : "partial"}`,
				children: l === o ? "后续任务已取消" : "部分后续任务已取消"
			})
		}) : u && s ? /* @__PURE__ */ (0, J.jsx)(n, {
			color: "yellow",
			children: "发现问题"
		}) : void 0,
		children: [
			l ? /* @__PURE__ */ (0, J.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"后续任务已取消 ",
					l.toLocaleString(),
					" 项"
				]
			}) : null,
			d.length === 1 ? /* @__PURE__ */ (0, J.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d[0]
			}) : d.length ? /* @__PURE__ */ (0, J.jsx)("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d.map((e, t) => /* @__PURE__ */ (0, J.jsx)("li", { children: e }, t))
			}) : null,
			f.length ? /* @__PURE__ */ (0, J.jsx)(r, {
				summary: `问题详情 · ${f.length} 项`,
				contentClassName: "pt-2",
				children: /* @__PURE__ */ (0, J.jsx)(de, {
					label: "任务问题详情",
					children: /* @__PURE__ */ (0, J.jsx)("ul", {
						className: "flex min-w-0 flex-col gap-3",
						"data-task-issues": "",
						children: f.map((e, t) => /* @__PURE__ */ (0, J.jsxs)("li", {
							className: "flex min-w-0 flex-col gap-1 text-body-2-regular wrap-anywhere",
							children: [/* @__PURE__ */ (0, J.jsx)("p", {
								className: "text-body-regular text-text-primary",
								children: [
									e.label,
									e.provider,
									e.kind
								].filter(Boolean).join(" · ")
							}), /* @__PURE__ */ (0, J.jsx)(fe, {
								text: e.error,
								className: "text-text-primary"
							})]
						}, `${e.source}-${t}`))
					})
				})
			}) : O(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ (0, J.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得本轮逐项详情，可到来源列表查看检查结果。"
			}) : null,
			p ? /* @__PURE__ */ (0, J.jsx)(c, {
				href: p.href,
				size: "small",
				trailingIcon: k,
				className: "self-start",
				children: p.label
			}) : null
		]
	});
}
function Ie({ runs: e, followups: t, counts: r }) {
	let i = e[0], a = e[e.length - 1], o = D(r, e), s = Math.max(o.total, t.length), c = o.total ? o.settled : t.filter((e) => !A(e)).length, l = o.total ? o.failed : t.filter((e) => e.status === "failed" || e.status === "interrupted").length, u = [
		m[i.trigger] || i.trigger,
		e.length > 1 ? `${e.length} 批` : "",
		`${M(a.started_at || a.finished_at)} 开始`
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, J.jsx)(Z, {
		run: i,
		meta: u,
		followups: t,
		followupTotal: s,
		resourceActive: !0,
		badge: i.control ? /* @__PURE__ */ (0, J.jsx)(X, { run: i }) : /* @__PURE__ */ (0, J.jsx)(n, {
			color: "blue",
			children: "进行中"
		}),
		children: /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, J.jsx)(f, {
				label: `${i.task_label}进度`,
				value: c,
				max: s
			}), /* @__PURE__ */ (0, J.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"已处理 ",
					F(c, s),
					" 项",
					l ? ` · 其中 ${l.toLocaleString()} 项失败` : ""
				]
			})]
		})
	});
}
function Q({ title: e, children: t }) {
	let n = (0, q.useId)();
	return /* @__PURE__ */ (0, J.jsxs)("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, J.jsx)("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, children: t }) {
	return /* @__PURE__ */ (0, J.jsx)("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t
	});
}
function Le() {
	let e = W({
		queryKey: p,
		queryFn: ({ signal: e }) => ne(e),
		refetchInterval: (e) => ce(e.state.data)
	}), n = e.data, r = n?.finished, [o, s] = (0, q.useState)([]), [c, l] = (0, q.useState)(!1), [d, f] = (0, q.useState)({}), [m, h] = (0, q.useState)(r);
	r !== m && (h(r), o.length && m && s(j(o, m)));
	let g = U({
		mutationFn: ({ oldest: e }) => te(e),
		onSuccess: (e, { shown: t }) => {
			s((n) => j(n, t, e.finished || [])), l(!!e.finished_has_more), f((t) => ({
				...t,
				...e.followup_counts
			}));
		}
	}), _ = e.error ? w(e.error) : "";
	if (!n) return /* @__PURE__ */ (0, J.jsx)(ue, { children: /* @__PURE__ */ (0, J.jsx)(u, {
		tone: "error",
		children: _ || "读取任务中心失败"
	}) });
	let y = j(n.finished || [], o), b = n.working_parents || [], x = [
		...n.running || [],
		...n.skipped || [],
		...y,
		...b
	], S = ae(x), C = new Set(x.map((e) => e.id)), T = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && C.has(e.parent_run_id))), E = T(y), k = E[E.length - 1], M = !!k && (o.length ? c : !!n.finished_has_more), N = () => {
		!g.isPending && k && g.mutate({
			oldest: k,
			shown: y
		});
	}, P = {
		...d,
		...n.followup_counts
	}, F = (e) => e.flatMap((e) => S.get(e.id) || []), I = [...E, ...T(b)].filter((e) => D(P, [e]).active > 0 || S.get(e.id)?.some(A)).sort((e, t) => t.id - e.id), L = T(n.running || []), R = T(n.skipped || []), z = E.filter((e) => !I.includes(e) && !R.some((t) => t.id === e.id)), B = (e) => (S.get(e.id) || []).every((e) => e.status === "succeeded" && !O(e)) && D(P, [e]).failed === 0, V = ie(z, (e) => oe(e) && (B(e) || Ae.has(e.task_key))), H = [...re(I.filter((e) => !e.control)), ...I.filter((e) => e.control).map((e) => ({
		run: e,
		runs: [e]
	}))].sort((e, t) => t.run.id - e.run.id), G = se(x), K = !L.length && !I.length && !R.length && !z.length;
	return /* @__PURE__ */ (0, J.jsxs)(ue, { children: [
		_ ? /* @__PURE__ */ (0, J.jsx)(u, {
			tone: "error",
			children: _
		}) : null,
		/* @__PURE__ */ (0, J.jsx)(xe, {}),
		n.available === !1 ? /* @__PURE__ */ (0, J.jsx)(u, {
			tone: "warning",
			children: n.message || "数据库尚未准备好任务记录表"
		}) : null,
		/* @__PURE__ */ (0, J.jsx)(ge, {}),
		K ? /* @__PURE__ */ (0, J.jsx)(a, {
			icon: le,
			title: "还没有任务记录",
			children: "扫描、追更检查、批量操作和命令行批处理跑起来之后，这里会显示它们的进度与结果。"
		}) : /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
			/* @__PURE__ */ (0, J.jsx)(Q, {
				title: "正在进行",
				children: L.length || I.length ? /* @__PURE__ */ (0, J.jsxs)($, {
					live: !0,
					children: [L.map((e) => /* @__PURE__ */ (0, J.jsx)(Pe, {
						run: e,
						followups: S.get(e.id)
					}, e.id)), H.map(({ run: e, runs: t }) => /* @__PURE__ */ (0, J.jsx)(Ie, {
						runs: t,
						followups: F(t),
						counts: P
					}, e.id))]
				}) : /* @__PURE__ */ (0, J.jsx)(u, {
					tone: "neutral",
					children: "没有任务在跑。"
				})
			}),
			R.length ? /* @__PURE__ */ (0, J.jsx)(Q, {
				title: "本次未执行",
				children: /* @__PURE__ */ (0, J.jsx)($, { children: R.map((e) => /* @__PURE__ */ (0, J.jsx)(Fe, {
					run: e,
					latest: G.has(e.id),
					followups: S.get(e.id)
				}, e.id)) })
			}) : null,
			z.length || M ? /* @__PURE__ */ (0, J.jsxs)(Q, {
				title: "最近完成",
				children: [
					z.length ? /* @__PURE__ */ (0, J.jsx)($, { children: V.map(({ run: e, runs: t }) => {
						let n = D(P, t);
						return /* @__PURE__ */ (0, J.jsx)(Fe, {
							run: e,
							runs: t,
							latest: G.has(e.id),
							followups: F(t),
							followupTotal: n.total,
							followupFailed: n.failed,
							followupCancelled: n.cancelled
						}, e.id);
					}) }) : null,
					g.error ? /* @__PURE__ */ (0, J.jsx)(u, {
						tone: "error",
						children: w(g.error)
					}) : null,
					M ? /* @__PURE__ */ (0, J.jsx)(t, {
						variant: "secondary",
						size: "small",
						leadingIcon: ee,
						className: "self-start",
						...v(g.isPending),
						onClick: N,
						children: "加载更早"
					}) : null
				]
			}) : null
		] }),
		/* @__PURE__ */ (0, J.jsx)(i, {})
	] });
}
export { Le as ActivityPage };

//# debugId=48b79bb1-910b-4cfe-8539-3cba30e0c65b