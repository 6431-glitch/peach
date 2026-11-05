(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e0369d14-3751-4dd6-8e71-1709a1581d7f", e._sentryDebugIdIdentifier = "sentry-dbid-e0369d14-3751-4dd6-8e71-1709a1581d7f");
	} catch {}
})();
import { Button as e, Bx as t, Chip as n, Disclosure as r, DownloadsPanel as i, EmptyState as a, Gg as o, HN as s, IssueRow as c, LinkButton as l, Lo as u, LoadingDots as d, Ma as f, NameLink as p, Note as m, OV as h, Pf as g, Progress as _, RB as v, Rk as y, Su as b, TASKS_KEY as ee, TRIGGER_LABELS as x, Xl as S, __toESM as C, apiGet as w, apiSend as T, busyProps as E, cardClass as te, confirmModal as D, controlTask as O, cx as k, elapsedText as A, errorMessage as j, f1 as ne, fetchEarlier as re, fetchTasks as ie, fmtSize as M, foldByKind as ae, foldRoutine as oe, followupDetail as N, followupTally as P, groupFollowups as se, hasResultProblems as F, i2 as I, import_jsx_runtime as ce, isActive as L, isRoutine as le, jsx as R, jsxs as z, latestOfKind as ue, mergeFinished as B, momentText as V, notifyManager as H, oe as U, pollInterval as de, problemDestination as W, progressText as G, readableErrorHeadline as fe, replaceEqualDeep as pe, require_react as me, statusLabel as he, summaryItems as ge, taskIssues as _e, taskSubject as ve, um as ye, uo as be, useMutation as K, useQuery as xe, useQueryClient as q, vl as Se } from "./peach-app.js";
import { CodeBlock as Ce } from "./peach-app.code-block-BbD0jQqq.js";
import { Page as we } from "./peach-app.page-CW3QRN2N.js";
import { ErrorDetails as Te, ErrorExcerpt as Ee } from "./peach-app.error-excerpt-CmCsvvvN.js";
// node_modules/@tanstack/react-query/build/modern/useMutationState.js
var J = /* @__PURE__ */ C(me(), 1);
function De() {
	let e;
	return (t, n) => {
		let r = [], i;
		return () => {
			let a = t.findAll(n.filters), o = a.flatMap((e) => [e, e.state]);
			return (!i || o.length !== r.length || o.some((e, t) => !Object.is(e, r[t]))) && (r = o, i = pe(e, a.map((e) => n.select ? n.select(e) : e.state)), e = i), i;
		};
	};
}
function Oe(e = {}, t) {
	let n = q(t).getMutationCache(), [r] = J.useState(() => De()), i = r(n, e);
	return J.useSyncExternalStore(J.useCallback((e) => n.subscribe(H.batchCalls(e)), [n]), i, i);
}
var ke = ["background-issues"];
function Ae() {
	let e = (0, J.useId)(), t = xe({
		queryKey: ke,
		queryFn: ({ signal: e }) => w("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ z("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ R("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: "需要处理"
		}), /* @__PURE__ */ R("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ R("li", { children: /* @__PURE__ */ R(je, { issue: e }) }, e.key))
		})]
	}) : null;
}
function je({ issue: t }) {
	let n = q(), r = K({
		mutationFn: () => T(t.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: ke });
		}
	}), i = t.since ? `自 ${V(t.since)} 起` : `发现于 ${V(t.noticed_at)}`;
	return /* @__PURE__ */ R(m, {
		tone: "error",
		title: t.title,
		action: /* @__PURE__ */ z("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ R(l, {
				href: t.href,
				size: "small",
				trailingIcon: I,
				children: t.link_label
			}), t.retry ? /* @__PURE__ */ R(e, {
				variant: "secondary",
				size: "small",
				disabled: !t.retry_available,
				...E(r.isPending),
				onClick: () => r.mutate(),
				children: "立即重试"
			}) : null]
		}),
		children: r.error ? `${i}\n没有重试：${j(r.error)}` : i
	});
}
// src/react/activity/task-controls.tsx
var Y = ["task-control"], Me = {
	pause: h,
	resume: o,
	cancel: s
}, Ne = {
	pause: "暂停",
	resume: "继续",
	cancel: "取消"
}, Pe = {
	pause: "暂停后续任务",
	resume: "继续后续任务",
	cancel: "取消后续任务"
};
function Fe() {
	let e = Oe({
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
	return n.length ? /* @__PURE__ */ R("div", {
		"data-task-control-feedback": "",
		className: "flex min-w-0 flex-col gap-2",
		children: n.map(({ command: e, error: t }) => /* @__PURE__ */ R(m, {
			tone: "error",
			title: `${e.label}：${(e.followups ? Pe : Ne)[e.action]}未完成`,
			children: j(t)
		}, e.id))
	}) : null;
}
function Ie({ run: t }) {
	let n = q(), r = (0, J.useRef)({
		change: !1,
		cancel: !1,
		confirmation: !1
	}), i = () => {
		n.invalidateQueries({ queryKey: ee });
	}, a = (e) => O(e.id, e.action), o = K({
		mutationKey: [
			...Y,
			t.id,
			"change"
		],
		mutationFn: a,
		onSettled: () => {
			r.current.change = !1, i();
		}
	}), s = K({
		mutationKey: [
			...Y,
			t.id,
			"cancel"
		],
		mutationFn: a,
		onSettled: () => {
			r.current.cancel = !1, i();
		}
	}), c = t.control?.actions || [], l = !L(t), u = s.isPending || s.isSuccess;
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
			r.current.confirmation = !0, D({
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
	return /* @__PURE__ */ R("div", {
		className: "ml-auto shrink-0",
		"data-task-controls": t.id,
		children: /* @__PURE__ */ R("div", {
			role: "group",
			"aria-label": `${t.task_label}${l ? "后续任务" : "任务"}控制`,
			className: "flex items-center justify-end gap-2",
			children: c.map((t) => {
				let n = (l ? Pe : Ne)[t], r = t === "cancel" ? s.isPending : o.isPending && o.variables?.action === t, i = t === "cancel" ? u : o.isPending || u;
				return /* @__PURE__ */ R(e, {
					type: "button",
					variant: "secondary",
					size: "small",
					iconOnly: !0,
					leadingIcon: Me[t],
					"aria-label": n,
					title: n,
					...E(r),
					"aria-disabled": i || void 0,
					onClick: () => d(t),
					"data-tooltip-copy-key": `tasks.control.action.${l ? "followups." : ""}${t}`
				}, t);
			})
		})
	});
}
// src/react/activity/task-icon.tsx
var Le = new Map([
	[t, [
		"follow-check",
		"follow-resolve",
		"follow-creator",
		"feed-check",
		"feed-scrape",
		"feed-cover"
	]],
	[y, [
		"library-processing",
		"organize",
		"batch",
		"resource-scan",
		"resource-apply",
		"seed-import"
	]],
	[Se, [
		"scrape-codes",
		"jav-discovery-metadata",
		"want-scrape",
		"upgrade-library"
	]],
	[f, [
		"scraping-cover",
		"jav-covers",
		"code-samples",
		"timeline-thumbnails",
		"entity-avatar"
	]],
	[g, [
		"performer-profile",
		"performer-alias",
		"creator-identity",
		"studio-mark"
	]],
	[S, ["media-repair", "mp4-header-repair"]],
	[ye, ["link-check", "link-prune"]],
	[U, ["download-postprocess"]],
	[u, ["taste-refresh"]],
	[v, [
		"upgrade-repairs",
		"diagnostic-export",
		"amane-bridge",
		"face-models"
	]]
].flatMap(([e, t]) => t.map((t) => [t, e])));
function Re({ taskKey: e, className: t }) {
	let n = Le.get(e) ?? b;
	return /* @__PURE__ */ R(n, {
		className: t,
		"aria-hidden": !0
	});
}
// src/react/activity/resource-chip.tsx
var ze = {
	blue: "bg-status-blue-text text-background-primary-default",
	purple: "bg-status-purple-text text-background-primary-default",
	cyan: "bg-status-cyan-text text-background-primary-default"
};
function Be({ color: e, high: t, ...r }) {
	return t ? /* @__PURE__ */ R("span", {
		...r,
		className: k("inline-flex items-center justify-center rounded-md px-1.5 py-1 whitespace-nowrap text-caption-1-medium", ze[e])
	}) : /* @__PURE__ */ R(n, {
		variant: "caption",
		color: e,
		...r
	});
}
// src/react/activity/task-resources.tsx
var Ve = {
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
		description: "网络速率显示该任务已观测的下载速度，达到 10 MiB/s 时加深显示。从网盘挂载读取时显示网盘读取，SMB 或无法准确归属的传输显示未取得。"
	}
};
function He(e) {
	return e.state === "sampling" ? "采样中" : e.via === "cloud" ? "网盘读取" : "未取得";
}
function Ue(e, t) {
	return t === 0 ? "未使用" : e === "network" ? `${M(t)}/s` : `${t.toLocaleString(void 0, { maximumFractionDigits: 1 })}%`;
}
function We({ run: e, active: t = L(e) || !!e.control }) {
	if (!t || !e.resources) return null;
	let n = e.resources;
	return /* @__PURE__ */ R("div", {
		"data-task-resources": e.id,
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			"cpu",
			"gpu",
			"network"
		].map((e) => {
			let t = n[e], r = Ve[e], i = e === "network" ? n.network.bytes_per_second : n[e].percent, a = t.state === "ready" && i !== null, o = a && t.high, s = a ? Ue(e, i) : He(t), c = [
				t.reason,
				o ? "当前为高占用。" : "",
				r.description,
				n.detail
			].filter(Boolean).join("\n");
			return /* @__PURE__ */ z(Be, {
				color: r.color,
				high: o,
				tabIndex: 0,
				title: c,
				"data-task-resource": e,
				"data-resource-state": t.state,
				"data-resource-via": t.via,
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
var Ge = 50, Ke = /* @__PURE__ */ new Set(["upgrade-repairs"]), qe = /* @__PURE__ */ new Set(["asset_id", "name"]), Je = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "rose",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
}, Ye = {
	running: "进行中",
	pausing: "正在暂停",
	paused: "已暂停",
	cancelling: "正在取消"
};
function X({ run: e }) {
	let t = e.control?.state;
	if (t && (t !== "running" || !L(e))) return /* @__PURE__ */ R(n, {
		color: t === "running" ? "blue" : "neutral",
		children: /* @__PURE__ */ R("span", {
			"data-copy-key": `tasks.control.state.${t}`,
			children: Ye[t]
		})
	});
	let r = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", i = r || e.status === "succeeded" && F(e);
	return /* @__PURE__ */ R(n, {
		color: i ? "yellow" : Je[e.status] ?? "neutral",
		children: r ? "部分项目需处理" : i ? "发现问题" : he(e.status)
	});
}
function Xe({ rows: e }) {
	return /* @__PURE__ */ R("ul", {
		className: "-mr-5 flex min-w-0 flex-col",
		children: e.map((e) => {
			let t = N(e);
			return /* @__PURE__ */ z("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-col gap-1 border-t border-separator-border py-2.5 pr-10 pl-5",
				children: [
					/* @__PURE__ */ z("div", {
						className: "flex min-w-0 items-start justify-between gap-3",
						children: [/* @__PURE__ */ z("div", {
							className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ R(Re, {
									taskKey: e.task_key,
									className: "size-4 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ R("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-primary",
									children: e.task_label
								}),
								/* @__PURE__ */ R(X, { run: e }),
								t ? /* @__PURE__ */ R("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
									children: t
								}) : null
							]
						}), /* @__PURE__ */ R(Ie, { run: e })]
					}),
					/* @__PURE__ */ R(We, { run: e }),
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ R("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ R(r, {
							summary: "技术详情",
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ R(Ce, {
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
function Z({ run: e, meta: t, children: n, error: i, issues: a, followups: o, followupTotal: s = 0, badge: c, resourceActive: l }) {
	let u = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), d = o ? [...o].sort((e, t) => u(t) - u(e) || t.id - e.id).slice(0, Ge) : [], f = d.length, m = Math.max(o?.length || 0, s), h = ve(e), g = String(i || "").trim(), _ = fe(g);
	return /* @__PURE__ */ z("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: te({
			padding: "none",
			bordered: e.status === "failed" ? "error" : void 0,
			className: "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ z("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ z("div", {
						className: "flex min-w-0 items-start justify-between gap-3",
						children: [/* @__PURE__ */ z("div", {
							className: "flex min-w-0 flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ R(Re, {
									taskKey: e.task_key,
									className: "size-5 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ R("strong", {
									className: "min-w-0 break-words text-title-3-medium text-text-primary",
									children: e.task_label
								}),
								c ?? /* @__PURE__ */ R(X, { run: e })
							]
						}), /* @__PURE__ */ R(Ie, { run: e })]
					}),
					/* @__PURE__ */ R("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					/* @__PURE__ */ R(We, {
						run: e,
						active: l
					}),
					h ? /* @__PURE__ */ R(p, {
						href: h.href,
						"data-task-subject": e.id,
						title: h.label,
						className: "min-w-0 max-w-full self-start truncate text-text-primary",
						children: h.label
					}) : null,
					_ ? /* @__PURE__ */ R("p", {
						"data-task-error": "",
						className: "text-caption-1-regular text-text-secondary wrap-anywhere",
						children: _
					}) : null,
					n
				]
			}),
			a ? /* @__PURE__ */ R("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: a
			}) : null,
			_ && g !== _ ? /* @__PURE__ */ R("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ R(r, {
					summary: "错误详情",
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ R(Te, {
						label: `${e.task_label}错误详情`,
						children: g
					})
				})
			}) : null,
			f ? /* @__PURE__ */ R("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ z(r, {
					summary: `任务明细 · ${m.toLocaleString()} 项`,
					contentClassName: "pb-2.5",
					defaultOpen: d.some((e) => L(e)),
					children: [f < m ? /* @__PURE__ */ z("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: [
							"列出其中 ",
							f.toLocaleString(),
							" 项，正在处理的排在前面"
						]
					}) : null, /* @__PURE__ */ R(Xe, { rows: d })]
				})
			}) : null,
			Object.keys(e.result_summary || {}).some((e) => !(h && qe.has(e))) ? /* @__PURE__ */ R("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ R(r, {
					summary: "技术详情",
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ R(Ce, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: `${e.task_label}技术详情`
					})
				})
			}) : null
		]
	});
}
function Ze({ run: e, followups: t }) {
	let n = e.progress_total || 0, r = e.progress_current || 0, i = e.control?.state, a = i && i !== "running", o = a ? Ye[i] : e.progress_label || "正在进行", s = A(e.elapsed_seconds), c = [x[e.trigger] || e.trigger, s && `已跑 ${s}`].filter(Boolean).join(" · ");
	return /* @__PURE__ */ R(Z, {
		run: e,
		meta: c,
		followups: t,
		children: n > 0 ? /* @__PURE__ */ z("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ R(_, {
				label: o,
				value: Math.min(r, n),
				max: n
			}), /* @__PURE__ */ z("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					o,
					" · ",
					G(r, n),
					" 项"
				]
			})]
		}) : a ? /* @__PURE__ */ R("p", {
			"data-copy-key": `tasks.control.state.${i}`,
			className: "text-caption-1-regular text-text-secondary",
			children: o
		}) : /* @__PURE__ */ R(d, { label: o })
	});
}
function Qe({ run: e, followups: t, runs: i, latest: a, followupTotal: o, followupFailed: s = 0, followupCancelled: u = 0 }) {
	let d = !!(i && i.length > 1 && o), f = d ? [`共处理 ${o.toLocaleString()} 项`, s ? `其中 ${s.toLocaleString()} 项失败` : ""].filter(Boolean) : ge(ve(e) ? {
		...e.result_summary,
		name: ""
	} : e.result_summary).filter((t) => t !== e.error && t !== fe(e.error)), p = _e(e), m = W(e, a), h = A(e.elapsed_seconds), g = i && i.length > 1 ? i[i.length - 1] : void 0, _ = (g ? [
		x[e.trigger] || e.trigger,
		`近 ${i.length} 轮`,
		`${V(g.finished_at)} – ${V(e.finished_at)}`
	] : [
		x[e.trigger] || e.trigger,
		V(e.finished_at),
		h && `用时 ${h}`
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ z(Z, {
		run: e,
		meta: _,
		error: e.error,
		followups: t,
		followupTotal: o,
		issues: p.length ? /* @__PURE__ */ R(r, {
			summary: `问题详情 · ${p.length} 项`,
			contentClassName: "pb-2.5",
			children: /* @__PURE__ */ R(Te, {
				label: "任务问题详情",
				children: /* @__PURE__ */ R("ul", {
					className: "flex min-w-0 flex-col whitespace-normal",
					"data-task-issues": "",
					children: p.map((e, t) => /* @__PURE__ */ R(c, {
						title: /* @__PURE__ */ z(ce.Fragment, { children: [e.label, e.provider || e.kind ? /* @__PURE__ */ z("span", {
							className: "text-body-2-regular text-text-secondary",
							children: [" · ", [e.provider, e.kind].filter(Boolean).join(" · ")]
						}) : null] }),
						children: /* @__PURE__ */ R(Ee, {
							text: e.error,
							className: "text-caption-1-regular text-text-secondary"
						})
					}, `${e.source}-${t}`))
				})
			})
		}) : void 0,
		badge: u && e.status === "succeeded" ? /* @__PURE__ */ R(n, {
			color: "rose",
			children: /* @__PURE__ */ R("span", {
				"data-copy-key": `tasks.followups.cancelled.${u === o ? "all" : "partial"}`,
				children: u === o ? "后续任务已取消" : "部分后续任务已取消"
			})
		}) : d && s ? /* @__PURE__ */ R(n, {
			color: "yellow",
			children: "发现问题"
		}) : void 0,
		children: [
			u ? /* @__PURE__ */ z("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"后续任务已取消 ",
					u.toLocaleString(),
					" 项"
				]
			}) : null,
			f.length === 1 ? /* @__PURE__ */ R("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f[0]
			}) : f.length ? /* @__PURE__ */ R("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f.map((e, t) => /* @__PURE__ */ R("li", { children: e }, t))
			}) : null,
			!p.length && F(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ R("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得本轮逐项详情，可到来源列表查看检查结果。"
			}) : null,
			m ? /* @__PURE__ */ R(l, {
				href: m.href,
				size: "small",
				trailingIcon: I,
				className: "self-start",
				children: m.label
			}) : null
		]
	});
}
function $e({ runs: e, followups: t, counts: r }) {
	let i = e[0], a = e[e.length - 1], o = P(r, e), s = Math.max(o.total, t.length), c = o.total ? o.settled : t.filter((e) => !L(e)).length, l = o.total ? o.failed : t.filter((e) => e.status === "failed" || e.status === "interrupted").length, u = [
		x[i.trigger] || i.trigger,
		e.length > 1 ? `${e.length} 批` : "",
		`${V(a.started_at || a.finished_at)} 开始`
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ R(Z, {
		run: i,
		meta: u,
		followups: t,
		followupTotal: s,
		resourceActive: !0,
		badge: i.control ? /* @__PURE__ */ R(X, { run: i }) : /* @__PURE__ */ R(n, {
			color: "blue",
			children: "进行中"
		}),
		children: /* @__PURE__ */ z("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ R(_, {
				label: `${i.task_label}进度`,
				value: c,
				max: s
			}), /* @__PURE__ */ z("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"已处理 ",
					G(c, s),
					" 项",
					l ? ` · 其中 ${l.toLocaleString()} 项失败` : ""
				]
			})]
		})
	});
}
function Q({ title: e, children: t }) {
	let n = (0, J.useId)();
	return /* @__PURE__ */ z("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ R("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, children: t }) {
	return /* @__PURE__ */ R("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t
	});
}
function et() {
	let t = xe({
		queryKey: ee,
		queryFn: ({ signal: e }) => ie(e),
		refetchInterval: (e) => de(e.state.data)
	}), n = t.data, r = n?.finished, [o, s] = (0, J.useState)([]), [c, l] = (0, J.useState)(!1), [u, d] = (0, J.useState)({}), [f, p] = (0, J.useState)(r);
	r !== f && (p(r), o.length && f && s(B(o, f)));
	let h = K({
		mutationFn: ({ oldest: e }) => re(e),
		onSuccess: (e, { shown: t }) => {
			s((n) => B(n, t, e.finished || [])), l(!!e.finished_has_more), d((t) => ({
				...t,
				...e.followup_counts
			}));
		}
	}), g = t.error ? j(t.error) : "";
	if (!n) return /* @__PURE__ */ R(we, { children: /* @__PURE__ */ R(m, {
		tone: "error",
		children: g || "读取任务中心失败"
	}) });
	let _ = B(n.finished || [], o), v = n.working_parents || [], y = [
		...n.running || [],
		...n.skipped || [],
		..._,
		...v
	], b = se(y), x = new Set(y.map((e) => e.id)), S = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && x.has(e.parent_run_id))), C = S(_), w = C[C.length - 1], T = !!w && (o.length ? c : !!n.finished_has_more), te = () => {
		!h.isPending && w && h.mutate({
			oldest: w,
			shown: _
		});
	}, D = {
		...u,
		...n.followup_counts
	}, O = (e) => e.flatMap((e) => b.get(e.id) || []), k = [...C, ...S(v)].filter((e) => P(D, [e]).active > 0 || b.get(e.id)?.some(L)).sort((e, t) => t.id - e.id), A = S(n.running || []), M = S(n.skipped || []), N = C.filter((e) => !k.includes(e) && !M.some((t) => t.id === e.id)), I = (e) => (b.get(e.id) || []).every((e) => e.status === "succeeded" && !F(e)) && P(D, [e]).failed === 0, V = oe(N, (e) => le(e) && (I(e) || Ke.has(e.task_key))), H = [...ae(k.filter((e) => !e.control)), ...k.filter((e) => e.control).map((e) => ({
		run: e,
		runs: [e]
	}))].sort((e, t) => t.run.id - e.run.id), U = ue(y), W = !A.length && !k.length && !M.length && !N.length;
	return /* @__PURE__ */ z(we, { children: [
		g ? /* @__PURE__ */ R(m, {
			tone: "error",
			children: g
		}) : null,
		/* @__PURE__ */ R(Fe, {}),
		n.available === !1 ? /* @__PURE__ */ R(m, {
			tone: "warning",
			children: n.message || "数据库尚未准备好任务记录表"
		}) : null,
		/* @__PURE__ */ R(Ae, {}),
		W ? /* @__PURE__ */ R(a, {
			icon: be,
			title: "还没有任务记录",
			children: "扫描、追更检查、批量操作和命令行批处理跑起来之后，这里会显示它们的进度与结果。"
		}) : /* @__PURE__ */ z(ce.Fragment, { children: [
			/* @__PURE__ */ R(Q, {
				title: "正在进行",
				children: A.length || k.length ? /* @__PURE__ */ z($, {
					live: !0,
					children: [A.map((e) => /* @__PURE__ */ R(Ze, {
						run: e,
						followups: b.get(e.id)
					}, e.id)), H.map(({ run: e, runs: t }) => /* @__PURE__ */ R($e, {
						runs: t,
						followups: O(t),
						counts: D
					}, e.id))]
				}) : /* @__PURE__ */ R(m, {
					tone: "neutral",
					children: "没有任务在跑。"
				})
			}),
			M.length ? /* @__PURE__ */ R(Q, {
				title: "本次未执行",
				children: /* @__PURE__ */ R($, { children: M.map((e) => /* @__PURE__ */ R(Qe, {
					run: e,
					latest: U.has(e.id),
					followups: b.get(e.id)
				}, e.id)) })
			}) : null,
			N.length || T ? /* @__PURE__ */ z(Q, {
				title: "最近完成",
				children: [
					N.length ? /* @__PURE__ */ R($, { children: V.map(({ run: e, runs: t }) => {
						let n = P(D, t);
						return /* @__PURE__ */ R(Qe, {
							run: e,
							runs: t,
							latest: U.has(e.id),
							followups: O(t),
							followupTotal: n.total,
							followupFailed: n.failed,
							followupCancelled: n.cancelled
						}, e.id);
					}) }) : null,
					h.error ? /* @__PURE__ */ R(m, {
						tone: "error",
						children: j(h.error)
					}) : null,
					T ? /* @__PURE__ */ R(e, {
						variant: "secondary",
						size: "small",
						leadingIcon: ne,
						className: "self-start",
						...E(h.isPending),
						onClick: te,
						children: "加载更早"
					}) : null
				]
			}) : null
		] }),
		/* @__PURE__ */ R(i, {})
	] });
}
export { et as ActivityPage };

//# debugId=e0369d14-3751-4dd6-8e71-1709a1581d7f