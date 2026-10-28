(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "344ad2a5-8425-4f95-8b4a-8c3e932159cf", e._sentryDebugIdIdentifier = "sentry-dbid-344ad2a5-8425-4f95-8b4a-8c3e932159cf");
	} catch {}
})();
import { ApiError as e, Button as t, ButtonLink as n, Chip as r, DIAGNOSTICS_KEY as i, Disclosure as a, EmptyState as o, Fact as s, FactList as c, Fieldset as l, FieldsetTitle as u, Input as d, LOC as f, LinkButton as p, LoadingDots as m, Note as h, Progress as ee, Section as g, SettingsCard as _, SettingsSectionLabel as v, Stack as y, __toESM as b, apiGet as x, apiSend as S, busyProps as C, configurationSection as w, cx as T, diagnosticHeaders as E, diagnosticsSkeleton as D, errorMessage as O, fetchDiagnostics as k, fmtDur as A, fmtSize as j, jsx as M, jsxs as N, queryClient as te, require_react as ne, settingsPath as re, tl as P, useAction as F, useQuery as I } from "./peach-app.js";
import { ErrorExcerpt as L } from "./peach-app.error-excerpt-CmCsvvvN.js";
import { DataTable as R } from "./peach-app.data-table-x8xDebGs.js";
import { SiteMark as z } from "./peach-app.site-mark-B3G3SZCA.js";
// src/react/diagnostics/health-list.tsx
var B = /* @__PURE__ */ b(ne(), 1), V = (e) => e.title || e.name || e.code || `作品 #${e.id}`, H = (e) => [[
	"作品",
	"番号",
	"文件名",
	"媒体库",
	"路径",
	"时长（秒）",
	"大小（字节）"
], ...e.map((e) => [
	V(e),
	e.code ?? "",
	e.name,
	f[e.location] || e.location,
	e.path,
	e.duration ?? "",
	e.size ?? ""
])].map((e) => e.map((e) => String(e ?? "").replace(/[\t\r\n]+/g, " ")).join("	")).join("\n");
function U({ group: e, openItem: n, receipt: r }) {
	let i = F(), [s, c] = (0, B.useState)([]), l = (e) => void i.run("copy", () => navigator.clipboard.writeText(H(e)), () => r("已复制清单")), u = [
		{
			id: "title",
			label: "作品",
			value: V,
			render: (e) => /* @__PURE__ */ N("span", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ M(p, {
					variant: "primary",
					className: "justify-start whitespace-normal text-left",
					onClick: () => n(e.id),
					children: V(e)
				}), e.name && e.name !== V(e) ? /* @__PURE__ */ M("span", {
					"data-middle-truncate": !0,
					title: e.name,
					className: "block min-w-0 text-caption-1-regular text-text-secondary",
					children: e.name
				}) : null]
			})
		},
		{
			id: "code",
			label: "番号",
			width: 144,
			value: (e) => e.code || "",
			render: (e) => /* @__PURE__ */ M("span", {
				className: "whitespace-nowrap",
				children: e.code || "未识别"
			})
		},
		{
			id: "location",
			label: "媒体库",
			width: 128,
			value: (e) => f[e.location] || e.location,
			render: (e) => f[e.location] || e.location || "未取得"
		},
		{
			id: "path",
			label: "文件路径",
			width: 320,
			min: 180,
			value: (e) => e.path,
			render: (e) => /* @__PURE__ */ M("span", {
				"data-middle-truncate": !0,
				title: e.path,
				className: "block min-w-0 w-full text-body-2-regular text-text-secondary",
				children: e.path || "未取得"
			})
		},
		{
			id: "duration",
			label: "时长",
			width: 112,
			value: (e) => e.duration ?? 0,
			render: (e) => e.duration && e.duration > 0 ? A(e.duration) : "未取得"
		},
		{
			id: "size",
			label: "大小",
			width: 112,
			value: (e) => e.size ?? 0,
			render: (e) => e.size === null ? "未取得" : j(e.size)
		}
	];
	return /* @__PURE__ */ M(a, {
		summary: `${e.label} · ${e.count === null ? "未取得" : `${e.count.toLocaleString()} 项`}`,
		children: e.count === null ? /* @__PURE__ */ M(h, {
			tone: "neutral",
			children: "清单未取得，请重新检查。"
		}) : e.items.length ? /* @__PURE__ */ N(y, { children: [
			/* @__PURE__ */ N("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [e.truncated ? /* @__PURE__ */ N("span", {
					className: "text-body-2-regular text-text-secondary",
					children: [
						"已载入 ",
						e.items.length.toLocaleString(),
						" / ",
						e.count.toLocaleString(),
						" 项"
					]
				}) : null, /* @__PURE__ */ M(t, {
					size: "small",
					variant: "secondary",
					...C(i.busy === "copy"),
					onClick: () => l(e.items),
					children: "复制当前清单"
				})]
			}),
			i.error ? /* @__PURE__ */ M(h, {
				tone: "error",
				children: i.error
			}) : null,
			/* @__PURE__ */ M(R, {
				label: e.label,
				title: "作品清单",
				unit: "部作品",
				panel: !1,
				items: e.items,
				columns: u,
				rowId: (e) => String(e.id),
				rowLabel: V,
				selected: s,
				onSelected: c,
				actions: (e) => /* @__PURE__ */ M(t, {
					size: "small",
					variant: "secondary",
					...C(i.busy === "copy"),
					onClick: () => l(e),
					children: "复制所选"
				})
			})
		] }) : /* @__PURE__ */ M(o, {
			icon: P,
			title: "清单为空",
			size: "compact",
			children: "没有需要处理的作品。"
		})
	});
}
// src/react/diagnostics/scraping-export.tsx
var W = "/api/diagnostics/exports", G = ["diagnostic-export"];
function K({ kind: r, codes: i = "" }) {
	let a = F(), o = I({
		queryKey: G,
		queryFn: ({ signal: e }) => x(W, e),
		refetchInterval: (e) => ["running", "cancelling"].includes(e.state.data?.status || "") ? 1e3 : !1
	}), s = o.data, c = s?.kind === r, l = s?.status === "running" || s?.status === "cancelling", u = r === "support" ? "下载诊断报告" : "导出刮削记录", d = (e) => {
		te.setQueryData(G, e);
	}, f = () => void a.run("start", async (t) => {
		let n = await fetch(W, {
			method: "POST",
			signal: t,
			credentials: "same-origin",
			headers: {
				...await E(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				kind: r,
				codes: i
			})
		}), a = await n.json().catch(() => null);
		if (!n.ok) throw new e(a?.detail || a?.error || "诊断导出未启动", n.status, a);
		if (!a || !a.job_id) throw Error("导出任务状态未取得");
		return a;
	}, d), p = () => void a.run("cancel", (e) => S(`${W}/${s.job_id}/cancel`, {}, "POST", e), d);
	return /* @__PURE__ */ N("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ N("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ M(t, {
						type: "button",
						variant: "secondary",
						disabled: l,
						...C(a.busy === "start"),
						onClick: f,
						children: u
					}),
					c && l ? /* @__PURE__ */ M(t, {
						type: "button",
						variant: "secondary",
						disabled: s.status === "cancelling",
						...C(a.busy === "cancel"),
						onClick: p,
						children: "取消导出"
					}) : null,
					c && s.status === "complete" && s.download_url ? /* @__PURE__ */ M(n, {
						variant: "secondary",
						href: s.download_url,
						children: "下载已生成的文件"
					}) : null
				]
			}),
			c && l ? s.total && s.total > 0 ? /* @__PURE__ */ N("div", {
				className: "flex flex-col gap-2",
				role: "status",
				children: [/* @__PURE__ */ N("span", {
					className: "text-body-2-regular",
					children: [
						s.stage,
						" · ",
						s.done || 0,
						" / ",
						s.total,
						" 项"
					]
				}), /* @__PURE__ */ M(ee, {
					label: "导出进度",
					value: s.done || 0,
					max: s.total
				})]
			}) : /* @__PURE__ */ M(m, { label: `${s.stage || "准备导出"}${s.rows ? ` · ${s.rows} 条候选` : ""}${s.files ? ` · ${s.files} 个文件` : ""}` }) : null,
			c && s.status === "complete" ? /* @__PURE__ */ N("p", {
				role: "status",
				className: "text-body-2-regular text-text-secondary",
				children: [
					"导出已完成 · ",
					((s.bytes || 0) / 1024 / 1024).toFixed(2),
					" MiB"
				]
			}) : null,
			c && s.status === "cancelled" ? /* @__PURE__ */ M(h, {
				tone: "neutral",
				children: "导出已取消"
			}) : null,
			o.isError ? /* @__PURE__ */ M(h, {
				tone: "error",
				action: /* @__PURE__ */ M(t, {
					type: "button",
					variant: "secondary",
					...C(o.isFetching),
					onClick: () => {
						o.refetch();
					},
					children: "重新读取"
				}),
				children: "导出进度未取得"
			}) : null,
			a.error || c && s.status === "failed" ? /* @__PURE__ */ M(h, {
				tone: "error",
				children: a.error || s?.error
			}) : null
		]
	});
}
function q() {
	let [e, t] = (0, B.useState)("");
	return /* @__PURE__ */ M(l, {
		layout: "stack",
		labelledBy: "scraping-export-title",
		footer: /* @__PURE__ */ M(K, {
			kind: "scraping",
			codes: e
		}),
		children: /* @__PURE__ */ N("div", {
			className: "flex min-w-0 flex-col gap-4",
			"aria-label": "导出刮削记录",
			children: [
				/* @__PURE__ */ M(u, {
					id: "scraping-export-title",
					children: "刮削记录"
				}),
				/* @__PURE__ */ M("p", {
					className: "text-body-2-regular text-text-secondary",
					children: "导出作品资料、来源取值及演员、厂牌和系列归属，供排查刮削错误。"
				}),
				/* @__PURE__ */ M(d, {
					label: "问题番号（可选）",
					name: "scraping-codes",
					value: e,
					onChange: t,
					autoComplete: "off",
					spellCheck: "false",
					maxLength: 1300,
					placeholder: "例如 ABF-087、SYKH-145…",
					hint: "多个番号用逗号分隔，最多 20 个；留空导出近期作品。"
				})
			]
		})
	});
}
// src/react/diagnostics/diagnostics-page.tsx
var J = {
	ok: "正常",
	warning: "需检查",
	failed: "需处理",
	unknown: "未取得",
	disabled: "未配置",
	stale: "待复查",
	unchecked: "尚无记录"
}, Y = { "/tasks": "查看任务" }, ie = [
	["媒体库与挂载", ["media_mounts", "data_root"]],
	["数据库与迁移", ["database", "schema"]],
	["工具", ["ffmpeg"]],
	["配置与访问", [
		"configured",
		"security",
		"port",
		"version"
	]],
	["后台任务", ["tasks"]]
], X = (e) => new Date(e).toLocaleString();
function Z({ status: e }) {
	return /* @__PURE__ */ M(r, {
		variant: "caption",
		"data-diagnostic-status": e,
		color: e === "failed" ? "rose" : e === "ok" ? "lime" : e === "warning" || e === "stale" ? "yellow" : "neutral",
		children: J[e] ?? "未取得"
	});
}
function Q() {
	return /* @__PURE__ */ M(K, { kind: "support" });
}
function $({ name: e, check: t, compact: r = !1 }) {
	let i = t.target === "/settings/library" && (e === "security" || e === "port") ? re("网络与访问") : t.target, a = r ? "h4" : "h3";
	return /* @__PURE__ */ N("div", {
		"data-diagnostic-check": e,
		className: T("flex flex-col gap-4 border-b border-separator-border pr-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between", r ? "py-3" : "py-5"),
		children: [/* @__PURE__ */ N("div", {
			className: T("flex min-w-0 flex-1 flex-col", r ? "gap-1" : "gap-2"),
			children: [
				/* @__PURE__ */ N("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ M(a, {
						className: T("text-text-primary", r ? "text-body-2-medium" : "text-body-medium"),
						children: t.label
					}), /* @__PURE__ */ M(Z, { status: t.status })]
				}),
				/* @__PURE__ */ M("p", {
					"data-check-reason": !0,
					className: T("text-body-2-regular break-words", r ? "text-text-secondary" : "text-text-primary"),
					children: t.reason
				}),
				t.action ? /* @__PURE__ */ N("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ["处理建议：", t.action]
				}) : null
			]
		}), i ? /* @__PURE__ */ M("div", {
			className: "shrink-0 self-end sm:self-auto",
			children: /* @__PURE__ */ M(n, {
				size: "small",
				variant: "secondary",
				href: i,
				children: i.startsWith("/settings/") ? `打开${w(i)}` : Y[i] ?? "打开相关页面"
			})
		}) : null]
	});
}
function ae(e) {
	let r = I({
		queryKey: i,
		queryFn: ({ signal: e }) => k(e),
		staleTime: 1e4
	}), o = F(), [l, u] = (0, B.useState)(""), d = () => void o.run("refresh", async () => {
		let e = await r.refetch();
		if (e.error) throw e.error;
		return e.data;
	}, () => u(""), (e) => u(O(e))), f = r.data;
	if (!f && r.isPending) return /* @__PURE__ */ M("div", {
		role: "status",
		"aria-label": "正在读取系统诊断",
		dangerouslySetInnerHTML: { __html: D() }
	});
	if (!f) return /* @__PURE__ */ N("div", {
		className: "ui-configpage",
		children: [
			/* @__PURE__ */ M(Q, {}),
			/* @__PURE__ */ M(h, {
				tone: "error",
				title: "诊断读取失败",
				action: /* @__PURE__ */ M(t, {
					variant: "secondary",
					onClick: d,
					...C(o.busy === "refresh"),
					children: "重新检查"
				}),
				children: r.error ? O(r.error) : "诊断报告未取得。"
			}),
			/* @__PURE__ */ M(q, {})
		]
	});
	let p = Object.entries(f.checks).filter(([, e]) => [
		"warning",
		"failed",
		"unknown"
	].includes(e.status)), m = Object.entries(f.checks).filter(([, e]) => ![
		"warning",
		"failed",
		"unknown"
	].includes(e.status));
	return /* @__PURE__ */ N("div", {
		className: "flex min-w-0 flex-col gap-6",
		children: [
			/* @__PURE__ */ N("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ M(Q, {}), /* @__PURE__ */ M(t, {
					variant: "secondary",
					onClick: d,
					...C(o.busy === "refresh"),
					children: "重新检查"
				})]
			}),
			l ? /* @__PURE__ */ M(h, {
				tone: "error",
				children: l
			}) : null,
			p.length ? /* @__PURE__ */ M(g, {
				title: `需要关注 · ${p.length} 项`,
				children: p.map(([e, t]) => /* @__PURE__ */ M($, {
					name: e,
					check: t
				}, e))
			}) : null,
			/* @__PURE__ */ M(g, {
				title: "库健康",
				children: /* @__PURE__ */ N(y, { children: [f.library.issue_at ? /* @__PURE__ */ N("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ["处理记录 · ", X(f.library.issue_at)]
				}) : null, Object.entries(f.library.groups).map(([t, n]) => /* @__PURE__ */ M(U, {
					group: n,
					...e
				}, t))] })
			}),
			m.length ? /* @__PURE__ */ M("section", {
				"aria-label": "系统检查",
				children: /* @__PURE__ */ M(a, {
					summary: `其他检查 · ${m.length} 项`,
					contentClassName: "gap-5",
					children: ie.map(([e, t]) => {
						let n = m.filter(([e]) => t.some((t) => t === e));
						return n.length ? /* @__PURE__ */ N("section", {
							"aria-label": e,
							"data-diagnostic-group": "",
							className: "flex min-w-0 flex-col gap-2",
							children: [/* @__PURE__ */ N("h3", {
								className: "flex items-center gap-2 px-3 text-body-medium text-text-primary",
								children: [e, /* @__PURE__ */ N("span", {
									className: "text-caption-1-regular text-text-secondary",
									children: [n.length, " 项"]
								})]
							}), /* @__PURE__ */ M(_, { children: n.map(([e, t]) => /* @__PURE__ */ M($, {
								name: e,
								check: t,
								compact: !0
							}, e)) })]
						}, e) : null;
					})
				})
			}) : null,
			/* @__PURE__ */ M(q, {}),
			/* @__PURE__ */ N("section", {
				"aria-label": "来源会话",
				className: "flex min-w-0 flex-col gap-3",
				children: [
					/* @__PURE__ */ M(v, { children: "来源会话" }),
					f.sources.map((e) => /* @__PURE__ */ M("article", {
						"data-diagnostic-source": e.source,
						children: /* @__PURE__ */ M(_, { children: /* @__PURE__ */ N(y, { children: [
							/* @__PURE__ */ N("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ N("h3", {
									className: "flex min-w-0 items-center gap-2 text-body-medium text-text-primary",
									children: [/* @__PURE__ */ M(z, { source: e.source }), e.label]
								}), /* @__PURE__ */ M(Z, { status: e.status })]
							}),
							/* @__PURE__ */ M(L, {
								text: e.reason,
								className: "text-body-regular text-text-primary"
							}),
							/* @__PURE__ */ N(c, { children: [
								/* @__PURE__ */ M(s, {
									term: "上次解析成功",
									children: e.last_success_at ? X(e.last_success_at) : "尚无成功记录"
								}),
								e.last_check_at ? /* @__PURE__ */ N(s, {
									term: "上次检查",
									children: [X(e.last_check_at), e.elapsed_s !== void 0 && e.elapsed_s !== null ? ` · ${e.elapsed_s.toFixed(2)} 秒` : ""]
								}) : null,
								/* @__PURE__ */ M(s, {
									term: "暂停访问至",
									children: e.cooldown_until ? X(e.cooldown_until) : "未暂停"
								})
							] })
						] }) })
					}, e.source)),
					/* @__PURE__ */ M("div", { children: /* @__PURE__ */ M(n, {
						size: "small",
						variant: "secondary",
						href: "/sources",
						children: "打开来源和凭证"
					}) })
				]
			})
		]
	});
}
export { ae as DiagnosticsPage };

//# debugId=344ad2a5-8425-4f95-8b4a-8c3e932159cf