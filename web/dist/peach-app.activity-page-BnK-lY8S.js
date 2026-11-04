(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "94f5cfb3-48d5-443c-bbf9-217bf3f34bf7", e._sentryDebugIdIdentifier = "sentry-dbid-94f5cfb3-48d5-443c-bbf9-217bf3f34bf7");
	} catch {}
})();
import { Button as e, Chip as t, Disclosure as n, DownloadsPanel as r, EmptyState as i, Gg as a, HN as o, LinkButton as s, LoadingDots as c, Note as l, OV as u, Progress as d, TASKS_KEY as f, TRIGGER_LABELS as p, __toESM as m, apiGet as h, apiSend as g, busyProps as _, cardClass as v, confirmModal as y, controlTask as b, cx as x, elapsedText as S, errorMessage as C, f1 as ee, fetchEarlier as te, fetchTasks as ne, fmtSize as w, foldByKind as re, foldRoutine as ie, followupDetail as T, followupTally as E, groupFollowups as ae, hasResultProblems as D, i2 as O, import_jsx_runtime as oe, isActive as k, isRoutine as se, jsx as A, jsxs as j, latestOfKind as ce, mergeFinished as M, momentText as N, notifyManager as P, pollInterval as le, problemDestination as F, progressText as I, replaceEqualDeep as L, require_react as R, statusLabel as z, summaryItems as B, taskIssues as V, uo as ue, useMutation as H, useQuery as U, useQueryClient as W } from "./peach-app.js";
import { CodeBlock as G } from "./peach-app.code-block-BbD0jQqq.js";
import { Page as K } from "./peach-app.page-CW3QRN2N.js";
import { ErrorDetails as de, ErrorExcerpt as q } from "./peach-app.error-excerpt-CmCsvvvN.js";
// node_modules/@tanstack/react-query/build/modern/useMutationState.js
var J = /* @__PURE__ */ m(R(), 1);
function fe() {
	let e;
	return (t, n) => {
		let r = [], i;
		return () => {
			let a = t.findAll(n.filters), o = a.flatMap((e) => [e, e.state]);
			return (!i || o.length !== r.length || o.some((e, t) => !Object.is(e, r[t]))) && (r = o, i = L(e, a.map((e) => n.select ? n.select(e) : e.state)), e = i), i;
		};
	};
}
function pe(e = {}, t) {
	let n = W(t).getMutationCache(), [r] = J.useState(() => fe()), i = r(n, e);
	return J.useSyncExternalStore(J.useCallback((e) => n.subscribe(P.batchCalls(e)), [n]), i, i);
}
var me = ["background-issues"];
function he() {
	let e = (0, J.useId)(), t = U({
		queryKey: me,
		queryFn: ({ signal: e }) => h("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ j("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ A("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: "需要处理"
		}), /* @__PURE__ */ A("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ A("li", { children: /* @__PURE__ */ A(ge, { issue: e }) }, e.key))
		})]
	}) : null;
}
function ge({ issue: t }) {
	let n = W(), r = H({
		mutationFn: () => g(t.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: me });
		}
	}), i = t.since ? `自 ${N(t.since)} 起` : `发现于 ${N(t.noticed_at)}`;
	return /* @__PURE__ */ A(l, {
		tone: "error",
		title: t.title,
		action: /* @__PURE__ */ j("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ A(s, {
				href: t.href,
				size: "small",
				trailingIcon: O,
				children: t.link_label
			}), t.retry ? /* @__PURE__ */ A(e, {
				variant: "secondary",
				size: "small",
				disabled: !t.retry_available,
				..._(r.isPending),
				onClick: () => r.mutate(),
				children: "立即重试"
			}) : null]
		}),
		children: r.error ? `${i}\n没有重试：${C(r.error)}` : i
	});
}
// src/react/activity/task-controls.tsx
var Y = ["task-control"], _e = {
	pause: u,
	resume: a,
	cancel: o
}, ve = {
	pause: "暂停",
	resume: "继续",
	cancel: "取消"
}, ye = {
	pause: "暂停后续任务",
	resume: "继续后续任务",
	cancel: "取消后续任务"
};
function be() {
	let e = pe({
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
	return n.length ? /* @__PURE__ */ A("div", {
		"data-task-control-feedback": "",
		className: "flex min-w-0 flex-col gap-2",
		children: n.map(({ command: e, error: t }) => /* @__PURE__ */ A(l, {
			tone: "error",
			title: `${e.label}：${(e.followups ? ye : ve)[e.action]}未完成`,
			children: C(t)
		}, e.id))
	}) : null;
}
function xe({ run: t }) {
	let n = W(), r = (0, J.useRef)({
		change: !1,
		cancel: !1,
		confirmation: !1
	}), i = () => {
		n.invalidateQueries({ queryKey: f });
	}, a = (e) => b(e.id, e.action), o = H({
		mutationKey: [
			...Y,
			t.id,
			"change"
		],
		mutationFn: a,
		onSettled: () => {
			r.current.change = !1, i();
		}
	}), s = H({
		mutationKey: [
			...Y,
			t.id,
			"cancel"
		],
		mutationFn: a,
		onSettled: () => {
			r.current.cancel = !1, i();
		}
	}), c = t.control?.actions || [], l = !k(t), u = s.isPending || s.isSuccess;
	if (!c.length) return null;
	let d = (e) => {
		let n = {
			id: t.id,
			label: t.task_label,
			action: e,
			followups: l
		};
		if (e === "cancel") {
			if (r.current.cancel || r.current.confirmation || s.isSuccess) return;
			r.current.confirmation = !0, y({
				title: l ? `取消「${t.task_label}」的全部后续任务` : `取消任务「${t.task_label}」`,
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
	return /* @__PURE__ */ A("div", {
		className: "ml-auto shrink-0",
		"data-task-controls": t.id,
		children: /* @__PURE__ */ A("div", {
			role: "group",
			"aria-label": `${t.task_label}${l ? "后续任务" : "任务"}控制`,
			className: "flex items-center justify-end gap-2",
			children: c.map((t) => {
				let n = (l ? ye : ve)[t], r = t === "cancel" ? s.isPending : o.isPending && o.variables?.action === t, i = t === "cancel" ? u : o.isPending || u;
				return /* @__PURE__ */ A(e, {
					type: "button",
					variant: "secondary",
					size: "small",
					iconOnly: !0,
					leadingIcon: _e[t],
					"aria-label": n,
					title: n,
					..._(r),
					"aria-disabled": i || void 0,
					onClick: () => d(t),
					"data-tooltip-copy-key": `tasks.control.action.${l ? "followups." : ""}${t}`
				}, t);
			})
		})
	});
}
// src/react/activity/resource-chip.tsx
var Se = {
	blue: "bg-status-blue-text text-background-primary-default",
	purple: "bg-status-purple-text text-background-primary-default",
	cyan: "bg-status-cyan-text text-background-primary-default"
};
function Ce({ color: e, high: n, ...r }) {
	return n ? /* @__PURE__ */ A("span", {
		...r,
		className: x("inline-flex items-center justify-center rounded-md px-1.5 py-1 whitespace-nowrap text-caption-1-medium", Se[e])
	}) : /* @__PURE__ */ A(t, {
		variant: "caption",
		color: e,
		...r
	});
}
// src/react/activity/task-resources.tsx
var we = {
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
function Te(e) {
	return e === "sampling" ? "采样中" : "未取得";
}
function Ee({ run: e, active: t = k(e) || !!e.control }) {
	if (!t || !e.resources) return null;
	let n = e.resources;
	return /* @__PURE__ */ A("div", {
		"data-task-resources": e.id,
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			"cpu",
			"gpu",
			"network"
		].map((e) => {
			let t = n[e], r = we[e], i = e === "network" ? n.network.bytes_per_second : n[e].percent, a = t.state === "ready" && i !== null, o = a && t.high, s = a ? e === "network" ? `${w(i)}/s` : `${i.toLocaleString(void 0, { maximumFractionDigits: 1 })}%` : Te(t.state), c = [
				t.reason,
				o ? "当前为高占用。" : "",
				r.description,
				n.detail
			].filter(Boolean).join("\n");
			return /* @__PURE__ */ j(Ce, {
				color: r.color,
				high: o,
				tabIndex: 0,
				title: c,
				"data-task-resource": e,
				"data-resource-state": t.state,
				"data-resource-high": o || void 0,
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
var De = 50, Oe = /* @__PURE__ */ new Set(["upgrade-repairs"]), ke = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "rose",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
}, Ae = {
	running: "进行中",
	pausing: "正在暂停",
	paused: "已暂停",
	cancelling: "正在取消"
};
function X({ run: e }) {
	let n = e.control?.state;
	if (n && (n !== "running" || !k(e))) return /* @__PURE__ */ A(t, {
		color: n === "running" ? "blue" : "neutral",
		children: /* @__PURE__ */ A("span", {
			"data-copy-key": `tasks.control.state.${n}`,
			children: Ae[n]
		})
	});
	let r = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", i = r || e.status === "succeeded" && D(e);
	return /* @__PURE__ */ A(t, {
		color: i ? "yellow" : ke[e.status] ?? "neutral",
		children: r ? "部分项目需处理" : i ? "发现问题" : z(e.status)
	});
}
function je({ rows: e }) {
	return /* @__PURE__ */ A("ul", {
		className: "flex min-w-0 flex-col",
		children: e.map((e) => {
			let t = T(e);
			return /* @__PURE__ */ j("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-col gap-1 border-t border-separator-border px-5 py-2.5",
				children: [
					/* @__PURE__ */ j("div", {
						className: "flex min-w-0 items-start justify-between gap-3",
						children: [/* @__PURE__ */ j("div", {
							className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ A("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-primary",
									children: e.task_label
								}),
								/* @__PURE__ */ A(X, { run: e }),
								t ? /* @__PURE__ */ A("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
									children: t
								}) : null
							]
						}), /* @__PURE__ */ A(xe, { run: e })]
					}),
					/* @__PURE__ */ A(Ee, { run: e }),
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ A("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ A(n, {
							summary: "技术详情",
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ A(G, {
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
function Z({ run: e, meta: t, children: r, footer: i, followups: a, followupTotal: o = 0, badge: s, resourceActive: c }) {
	let l = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), u = a ? [...a].sort((e, t) => l(t) - l(e) || t.id - e.id).slice(0, De) : [], d = u.length, f = Math.max(a?.length || 0, o);
	return /* @__PURE__ */ j("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: v({
			padding: "none",
			bordered: "line",
			className: e.status === "failed" ? "flex flex-col border-border-error-default" : "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ j("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ j("div", {
						className: "flex min-w-0 items-start justify-between gap-3",
						children: [/* @__PURE__ */ j("div", {
							className: "flex min-w-0 flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ A("strong", {
								className: "min-w-0 break-words text-title-3-medium text-text-primary",
								children: e.task_label
							}), s ?? /* @__PURE__ */ A(X, { run: e })]
						}), /* @__PURE__ */ A(xe, { run: e })]
					}),
					/* @__PURE__ */ A("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					/* @__PURE__ */ A(Ee, {
						run: e,
						active: c
					}),
					r
				]
			}),
			d ? /* @__PURE__ */ A("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ j(n, {
					summary: `任务明细 · ${f.toLocaleString()} 项`,
					contentClassName: "pb-2.5",
					defaultOpen: u.some((e) => k(e)),
					children: [d < f ? /* @__PURE__ */ j("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: [
							"列出其中 ",
							d.toLocaleString(),
							" 项，正在处理的排在前面"
						]
					}) : null, /* @__PURE__ */ A(je, { rows: u })]
				})
			}) : null,
			Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ A("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ A(n, {
					summary: "技术详情",
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ A(G, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: `${e.task_label}技术详情`
					})
				})
			}) : null,
			i ? /* @__PURE__ */ A("div", {
				className: "flex min-h-14 flex-col justify-center rounded-b-2xl border-t border-separator-border bg-card-footer px-5 py-3",
				children: /* @__PURE__ */ A(q, {
					text: i,
					className: "text-caption-1-regular text-text-secondary"
				})
			}) : null
		]
	});
}
function Me({ run: e, followups: t }) {
	let n = e.progress_total || 0, r = e.progress_current || 0, i = e.control?.state, a = i && i !== "running", o = a ? Ae[i] : e.progress_label || "正在进行", s = S(e.elapsed_seconds), l = [p[e.trigger] || e.trigger, s && `已跑 ${s}`].filter(Boolean).join(" · ");
	return /* @__PURE__ */ A(Z, {
		run: e,
		meta: l,
		followups: t,
		children: n > 0 ? /* @__PURE__ */ j("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ A(d, {
				label: o,
				value: Math.min(r, n),
				max: n
			}), /* @__PURE__ */ j("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					o,
					" · ",
					I(r, n),
					" 项"
				]
			})]
		}) : a ? /* @__PURE__ */ A("p", {
			"data-copy-key": `tasks.control.state.${i}`,
			className: "text-caption-1-regular text-text-secondary",
			children: o
		}) : /* @__PURE__ */ A(c, { label: o })
	});
}
function Ne({ run: e, followups: r, runs: i, latest: a, followupTotal: o, followupFailed: c = 0, followupCancelled: l = 0 }) {
	let u = !!(i && i.length > 1 && o), d = u ? [`共处理 ${o.toLocaleString()} 项`, c ? `其中 ${c.toLocaleString()} 项失败` : ""].filter(Boolean) : B(e.result_summary).filter((t) => t !== e.error), f = V(e), m = F(e, a), h = S(e.elapsed_seconds), g = i && i.length > 1 ? i[i.length - 1] : void 0, _ = (g ? [
		p[e.trigger] || e.trigger,
		`近 ${i.length} 轮`,
		`${N(g.finished_at)} – ${N(e.finished_at)}`
	] : [
		p[e.trigger] || e.trigger,
		N(e.finished_at),
		h && `用时 ${h}`
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ j(Z, {
		run: e,
		meta: _,
		footer: e.error,
		followups: r,
		followupTotal: o,
		badge: l && e.status === "succeeded" ? /* @__PURE__ */ A(t, {
			color: "rose",
			children: /* @__PURE__ */ A("span", {
				"data-copy-key": `tasks.followups.cancelled.${l === o ? "all" : "partial"}`,
				children: l === o ? "后续任务已取消" : "部分后续任务已取消"
			})
		}) : u && c ? /* @__PURE__ */ A(t, {
			color: "yellow",
			children: "发现问题"
		}) : void 0,
		children: [
			l ? /* @__PURE__ */ j("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"后续任务已取消 ",
					l.toLocaleString(),
					" 项"
				]
			}) : null,
			d.length === 1 ? /* @__PURE__ */ A("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d[0]
			}) : d.length ? /* @__PURE__ */ A("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d.map((e, t) => /* @__PURE__ */ A("li", { children: e }, t))
			}) : null,
			f.length ? /* @__PURE__ */ A(n, {
				summary: `问题详情 · ${f.length} 项`,
				contentClassName: "pt-2",
				children: /* @__PURE__ */ A(de, {
					label: "任务问题详情",
					children: /* @__PURE__ */ A("ul", {
						className: "flex min-w-0 flex-col gap-3",
						"data-task-issues": "",
						children: f.map((e, t) => /* @__PURE__ */ j("li", {
							className: "flex min-w-0 flex-col gap-1 text-body-2-regular wrap-anywhere",
							children: [/* @__PURE__ */ A("p", {
								className: "text-body-regular text-text-primary",
								children: [
									e.label,
									e.provider,
									e.kind
								].filter(Boolean).join(" · ")
							}), /* @__PURE__ */ A(q, {
								text: e.error,
								className: "text-text-primary"
							})]
						}, `${e.source}-${t}`))
					})
				})
			}) : D(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ A("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得本轮逐项详情，可到来源列表查看检查结果。"
			}) : null,
			m ? /* @__PURE__ */ A(s, {
				href: m.href,
				size: "small",
				trailingIcon: O,
				className: "self-start",
				children: m.label
			}) : null
		]
	});
}
function Pe({ runs: e, followups: n, counts: r }) {
	let i = e[0], a = e[e.length - 1], o = E(r, e), s = Math.max(o.total, n.length), c = o.total ? o.settled : n.filter((e) => !k(e)).length, l = o.total ? o.failed : n.filter((e) => e.status === "failed" || e.status === "interrupted").length, u = [
		p[i.trigger] || i.trigger,
		e.length > 1 ? `${e.length} 批` : "",
		`${N(a.started_at || a.finished_at)} 开始`
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ A(Z, {
		run: i,
		meta: u,
		followups: n,
		followupTotal: s,
		resourceActive: !0,
		badge: i.control ? /* @__PURE__ */ A(X, { run: i }) : /* @__PURE__ */ A(t, {
			color: "blue",
			children: "进行中"
		}),
		children: /* @__PURE__ */ j("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ A(d, {
				label: `${i.task_label}进度`,
				value: c,
				max: s
			}), /* @__PURE__ */ j("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"已处理 ",
					I(c, s),
					" 项",
					l ? ` · 其中 ${l.toLocaleString()} 项失败` : ""
				]
			})]
		})
	});
}
function Q({ title: e, children: t }) {
	let n = (0, J.useId)();
	return /* @__PURE__ */ j("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ A("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, children: t }) {
	return /* @__PURE__ */ A("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t
	});
}
function Fe() {
	let t = U({
		queryKey: f,
		queryFn: ({ signal: e }) => ne(e),
		refetchInterval: (e) => le(e.state.data)
	}), n = t.data, a = n?.finished, [o, s] = (0, J.useState)([]), [c, u] = (0, J.useState)(!1), [d, p] = (0, J.useState)({}), [m, h] = (0, J.useState)(a);
	a !== m && (h(a), o.length && m && s(M(o, m)));
	let g = H({
		mutationFn: ({ oldest: e }) => te(e),
		onSuccess: (e, { shown: t }) => {
			s((n) => M(n, t, e.finished || [])), u(!!e.finished_has_more), p((t) => ({
				...t,
				...e.followup_counts
			}));
		}
	}), v = t.error ? C(t.error) : "";
	if (!n) return /* @__PURE__ */ A(K, { children: /* @__PURE__ */ A(l, {
		tone: "error",
		children: v || "读取任务中心失败"
	}) });
	let y = M(n.finished || [], o), b = n.working_parents || [], x = [
		...n.running || [],
		...n.skipped || [],
		...y,
		...b
	], S = ae(x), w = new Set(x.map((e) => e.id)), T = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && w.has(e.parent_run_id))), O = T(y), N = O[O.length - 1], P = !!N && (o.length ? c : !!n.finished_has_more), F = () => {
		!g.isPending && N && g.mutate({
			oldest: N,
			shown: y
		});
	}, I = {
		...d,
		...n.followup_counts
	}, L = (e) => e.flatMap((e) => S.get(e.id) || []), R = [...O, ...T(b)].filter((e) => E(I, [e]).active > 0 || S.get(e.id)?.some(k)).sort((e, t) => t.id - e.id), z = T(n.running || []), B = T(n.skipped || []), V = O.filter((e) => !R.includes(e) && !B.some((t) => t.id === e.id)), W = (e) => (S.get(e.id) || []).every((e) => e.status === "succeeded" && !D(e)) && E(I, [e]).failed === 0, G = ie(V, (e) => se(e) && (W(e) || Oe.has(e.task_key))), de = [...re(R.filter((e) => !e.control)), ...R.filter((e) => e.control).map((e) => ({
		run: e,
		runs: [e]
	}))].sort((e, t) => t.run.id - e.run.id), q = ce(x), fe = !z.length && !R.length && !B.length && !V.length;
	return /* @__PURE__ */ j(K, { children: [
		v ? /* @__PURE__ */ A(l, {
			tone: "error",
			children: v
		}) : null,
		/* @__PURE__ */ A(be, {}),
		n.available === !1 ? /* @__PURE__ */ A(l, {
			tone: "warning",
			children: n.message || "数据库尚未准备好任务记录表"
		}) : null,
		/* @__PURE__ */ A(he, {}),
		fe ? /* @__PURE__ */ A(i, {
			icon: ue,
			title: "还没有任务记录",
			children: "扫描、追更检查、批量操作和命令行批处理跑起来之后，这里会显示它们的进度与结果。"
		}) : /* @__PURE__ */ j(oe.Fragment, { children: [
			/* @__PURE__ */ A(Q, {
				title: "正在进行",
				children: z.length || R.length ? /* @__PURE__ */ j($, {
					live: !0,
					children: [z.map((e) => /* @__PURE__ */ A(Me, {
						run: e,
						followups: S.get(e.id)
					}, e.id)), de.map(({ run: e, runs: t }) => /* @__PURE__ */ A(Pe, {
						runs: t,
						followups: L(t),
						counts: I
					}, e.id))]
				}) : /* @__PURE__ */ A(l, {
					tone: "neutral",
					children: "没有任务在跑。"
				})
			}),
			B.length ? /* @__PURE__ */ A(Q, {
				title: "本次未执行",
				children: /* @__PURE__ */ A($, { children: B.map((e) => /* @__PURE__ */ A(Ne, {
					run: e,
					latest: q.has(e.id),
					followups: S.get(e.id)
				}, e.id)) })
			}) : null,
			V.length || P ? /* @__PURE__ */ j(Q, {
				title: "最近完成",
				children: [
					V.length ? /* @__PURE__ */ A($, { children: G.map(({ run: e, runs: t }) => {
						let n = E(I, t);
						return /* @__PURE__ */ A(Ne, {
							run: e,
							runs: t,
							latest: q.has(e.id),
							followups: L(t),
							followupTotal: n.total,
							followupFailed: n.failed,
							followupCancelled: n.cancelled
						}, e.id);
					}) }) : null,
					g.error ? /* @__PURE__ */ A(l, {
						tone: "error",
						children: C(g.error)
					}) : null,
					P ? /* @__PURE__ */ A(e, {
						variant: "secondary",
						size: "small",
						leadingIcon: ee,
						className: "self-start",
						..._(g.isPending),
						onClick: F,
						children: "加载更早"
					}) : null
				]
			}) : null
		] }),
		/* @__PURE__ */ A(r, {})
	] });
}
export { Fe as ActivityPage };

//# debugId=94f5cfb3-48d5-443c-bbf9-217bf3f34bf7