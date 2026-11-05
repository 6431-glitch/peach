(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1aaa3aeb-b254-4a6f-a93f-57e50ddd6237", e._sentryDebugIdIdentifier = "sentry-dbid-1aaa3aeb-b254-4a6f-a93f-57e50ddd6237");
	} catch {}
})();
import { BATCH_DELETE_TEXT as e, Button as t, CLEANUP_ENTRY as n, CLEANUP_ENTRY_GRID as r, CLEANUP_HASH_REDIRECTS as i, CLEANUP_TOOLS as a, Chip as o, DIRECTORY_TEMPLATE_ERROR as s, DUPLICATES_KEY as c, Fieldset as l, FieldsetTitle as u, IDLE_REPAIR as d, IconButton as f, IndexSearch as p, Input as m, JUNK_KEY as h, LINKS_KEY as g, LINK_CHECK_KEY as _, LINK_KINDS as v, LINK_PRUNE_KEY as ee, LOC as y, LibraryProcessingCard as b, MEDIA_REPAIR_KEY as x, MEDIA_REPAIR_URL as S, MEDIA_SOURCES_KEY as C, MEDIA_SOURCE_ICONS as w, Note as T, ORGANIZE_KEY as te, ORGANIZE_PARAMETER_HINT as ne, ORGANIZE_SCOPE_HINT as re, ORGANIZE_TEXT as E, ORPHAN_RECORDS_KEY as D, ORPHAN_RECORDS_TEXT as O, PERFORMER_DELETE_KEY as k, PLAIN_STAT_STRIP as ie, PlainStat as A, Progress as j, QUALITY_GOALS_KEY as ae, REPAIR_CARD_TEXT as M, REPAIR_LIBRARIES_KEY as oe, RESOURCE_APPLY_KEY as se, RESOURCE_SCAN_KEY as N, RESOURCE_SYNC_TEXT as P, RESULT_PANEL as F, RESULT_SECTION as I, REVIEW_COUNTS_KEY as ce, SOURCE_LABELS as le, SectionHeading as ue, Select as de, SelectItem as fe, SourceMark as pe, StatusLabel as me, TRASH_KEY as L, TaskProgress as R, Wt as he, __toESM as ge, apiSend as _e, applyConfirmText as ve, applyLeftovers as z, applyPlanText as ye, applyText as B, attachOrphan as be, baseName as xe, busyProps as V, candidateText as Se, checkLine as Ce, confirmModal as H, cx as we, deletePerformerVideos as Te, entityDisplayName as Ee, entityFaceImg as De, entityPath as Oe, errorMessage as U, esc as ke, fetchDeletePerformers as Ae, fetchDeletePlan as je, fetchDuplicates as Me, fetchJunkSummary as Ne, fetchLinkCheck as Pe, fetchLinkPrune as Fe, fetchLinkStats as Ie, fetchMediaRepair as Le, fetchMediaSources as Re, fetchOrganize as ze, fetchOrganizeExample as Be, fetchOrphanRecords as Ve, fetchQualityGoals as He, fetchRepairLibraries as Ue, fetchResourceApply as We, fetchResourceScan as Ge, fetchReviewCounts as Ke, fetchTrashSummary as qe, firstGrapheme as Je, fmtSize as W, hasChanges as Ye, hasResourceRoots as Xe, import_jsx_runtime as G, jsx as K, jsxs as q, junkBreakdown as Ze, missingToolText as Qe, nameFallback as $e, organizeOutcome as et, pickOrganizeFolder as tt, plainStatClass as nt, planSummary as rt, previewOrganize as it, pruneText as at, purgeCount as ot, purgeOrphan as st, queryClient as J, recordsText as ct, rememberTemplates as lt, require_react as ut, reviewSummary as dt, scanLine as ft, shellNavigate as pt, sourceMeta as mt, spriteGlyph as Y, startLinkCheck as ht, startLinkPrune as gt, startOrganize as _t, startResourceApply as vt, startResourceScan as yt, statusLine as bt, translate as X, useAction as xt, useBackgroundJob as St, useEntityNames as Ct, useMutation as wt, useQuery as Z, withOrganizeJob as Tt } from "./peach-app.js";
import { Page as Et } from "./peach-app.page-CW3QRN2N.js";
import { ErrorExcerpt as Dt } from "./peach-app.error-excerpt-CmCsvvvN.js";
import { DataTable as Ot } from "./peach-app.data-table-D4P7HkPU.js";
import { SiteMark as kt } from "./peach-app.site-mark-B3G3SZCA.js";
import { LEGACY_AVATAR_IMG as At } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as jt } from "./peach-app.folder-rows-Dtg3TMSn.js";
import { ConnectionStatus as Mt } from "./peach-app.connection-status-BjZE05sg.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Q = /* @__PURE__ */ ge(ut(), 1), Nt = Y("chevron-right");
function Pt({ label: e, icon: t, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ q("button", {
		type: "button",
		...o,
		className: n.face,
		onClick: s,
		"data-entry-state": a,
		"aria-busy": a === "loading" || void 0,
		children: [
			/* @__PURE__ */ K("span", {
				"aria-hidden": !0,
				className: n.icon,
				children: /* @__PURE__ */ K(t, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ q("span", {
				className: n.body,
				children: [
					/* @__PURE__ */ K("span", {
						className: n.title,
						children: e
					}),
					/* @__PURE__ */ K("span", {
						className: we(n.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ K("span", {
						className: n.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ K(Nt, {
				"aria-hidden": !0,
				className: n.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Ft = (e) => w[e] || e, It = (e) => J.setQueryData(x, e);
function Lt({ toast: e = () => {} }) {
	let n = St({
		queryKey: x,
		queryFn: ({ signal: e }) => Le(e),
		start: (e) => _e(S, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? `已修复 ${t.repaired.toLocaleString()} 部视频` : "已检查媒体库，没有需要修复的视频");
		}
	}), r = Z({
		queryKey: oe,
		queryFn: ({ signal: e }) => Ue(e)
	}), [i, a] = (0, Q.useState)(""), o = xt(), s = n.job ?? d, c = r.data ?? [], f = s.status === "running", p = c.find((e) => e.id === (f ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], m = () => {
		p && H({
			title: `修复媒体库「${p.name}」`,
			body: "缺时间戳表的片子另存一份修好的头，原文件不动；缺索引的片子重建后替换原文件，坏原件改名成同目录的隐藏文件（.文件名.peach-original）留着。" + (p.metered ? "这个库在计费来源上，每修一部都要把片子完整拉一遍。" : ""),
			confirmLabel: "修复媒体库",
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => _e(S, { stop: !0 }, "POST", e), It), g = n.outcome, _ = bt(f ? s : g ?? d), v = o.error || g?.error || (n.query.error ? "读不到媒体修复的状态" : "");
	return /* @__PURE__ */ q("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ K(l, {
			layout: "split",
			label: "媒体修复",
			footer: /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K(de, {
				"aria-label": "媒体库",
				prefix: "媒体库",
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !c.length,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ q(fe, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ K(pe, { mark: Ft(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ K(t, {
				onClick: h,
				...V(o.busy === "stop"),
				children: "停止"
			}) : /* @__PURE__ */ K(t, {
				onClick: m,
				disabled: !p,
				children: "开始修复"
			})] }),
			children: /* @__PURE__ */ q("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ K(u, { children: "媒体修复" }),
					/* @__PURE__ */ K("p", {
						className: "text-body-2-regular text-text-secondary",
						children: M
					}),
					f && s.total ? /* @__PURE__ */ K(j, {
						label: "修复进度",
						value: s.checked,
						max: s.total
					}) : null,
					_ ? /* @__PURE__ */ K("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: _
					}) : null
				]
			})
		}), /* @__PURE__ */ q("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ K(T, {
				tone: "warning",
				title: "缺少 untrunc",
				action: /* @__PURE__ */ K(t, {
					variant: "ghost",
					size: "small",
					onClick: n.dismiss,
					children: "关闭提示"
				}),
				children: Qe(g)
			}) : null, v ? /* @__PURE__ */ K(T, {
				tone: "error",
				children: v
			}) : null]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function Rt({ className: e }) {
	return /* @__PURE__ */ q("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		"data-link-check-icon": "",
		children: [
			/* @__PURE__ */ K("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ K("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ q("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ K("path", { d: "M8 2v3" }),
					/* @__PURE__ */ K("path", { d: "M2 8h3" }),
					/* @__PURE__ */ K("path", { d: "M16 19v3" }),
					/* @__PURE__ */ K("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var zt = Y("rotate-cw"), Bt = "站点返回 404 或 410，确认这个地址不存在。", Vt = "站点拒绝程序访问或一次临时故障都会落在这里。链接保留，可勾选后单独重试。", Ht = "删除前会逐条重验一次；此操作不可撤销。", Ut = "暂时无法读取进度，正在重新连接…", Wt = (e) => Number(e || 0).toLocaleString();
function Gt({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ q("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ K("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ K("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ K("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function Kt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	return t.length ? /* @__PURE__ */ K("div", {
		className: I,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ K(Ot, {
			label: e,
			items: t,
			columns: [
				{
					id: "entity",
					label: "Peach 资料",
					width: 180,
					min: 128,
					value: (e) => e.entity,
					render: (e) => /* @__PURE__ */ q("a", {
						className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
						href: e.entity_id && e.entity_kind ? Oe(e.entity_kind, e.entity, e.entity_id) : void 0,
						"data-link-identity": "",
						children: [/* @__PURE__ */ K("span", {
							"data-link-avatar": "",
							className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${At}`,
							"aria-hidden": !0,
							dangerouslySetInnerHTML: { __html: `<span>${ke(Je(e.entity))}</span>` + De({
								kind: e.entity_kind,
								id: e.entity_id,
								hasImage: e.face?.has_image,
								version: e.face?.image_version,
								focus: e.face?.avatar_focus,
								thumb: !0,
								mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
							}) }
						}), /* @__PURE__ */ K("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.entity
						})]
					})
				},
				{
					id: "kind",
					label: "类型",
					width: 128,
					value: (e) => v[e.link_kind] || e.link_kind,
					render: (e) => v[e.link_kind] || e.link_kind
				},
				{
					id: "label",
					label: "链接名称",
					min: 128,
					value: (e) => e.label || "",
					render: (e) => /* @__PURE__ */ K("span", {
						className: "flex min-w-24 items-center gap-2",
						"data-link-name": "",
						children: /* @__PURE__ */ K("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.label || new URL(e.url).hostname
						})
					})
				},
				{
					id: "note",
					label: "结果",
					width: 320,
					min: 192,
					value: (e) => e.note,
					render: (e) => /* @__PURE__ */ K("div", {
						className: "min-w-0 w-full",
						"data-link-result": s ? "gone" : "unclear",
						children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ K(me, {
							tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
							"data-link-code": "",
							children: e.note.trim()
						}) : /* @__PURE__ */ q("div", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ K(me, {
								tone: s ? "error" : "warning",
								children: s ? "地址已失效" : "未取得结论"
							}), /* @__PURE__ */ K(Dt, {
								text: e.note,
								className: "tabular-nums text-text-secondary"
							})]
						})
					})
				},
				{
					id: "url",
					label: "地址",
					width: 360,
					min: 180,
					value: (e) => e.url,
					render: (e) => /* @__PURE__ */ q("a", {
						href: e.url,
						target: "_blank",
						rel: "noopener noreferrer",
						title: e.url,
						"data-link-address": "",
						className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
						children: [
							/* @__PURE__ */ K(kt, { linkId: e.id }),
							/* @__PURE__ */ K("span", {
								"data-middle-truncate": !0,
								className: "min-w-0 truncate",
								children: e.url
							}),
							/* @__PURE__ */ K(he, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})
						]
					})
				}
			],
			rowId: (e) => String(e.id),
			description: n,
			unit: "条链接",
			panel: !1,
			footerActions: o,
			rowLabel: (e) => `${e.entity} 的${e.label || e.url}`,
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	}) : null;
}
function qt() {
	let e = Z({
		queryKey: g,
		queryFn: ({ signal: e }) => Ie(e)
	}), [n, r] = (0, Q.useState)([]), [i, a] = (0, Q.useState)([]), s = St({
		queryKey: ee,
		queryFn: ({ signal: e }) => Fe(e),
		start: gt,
		onFinish: () => {
			J.invalidateQueries({
				queryKey: g,
				exact: !0
			}), J.invalidateQueries({
				queryKey: _,
				exact: !0
			});
		}
	}), c = St({
		queryKey: _,
		queryFn: ({ signal: e }) => Pe(e),
		start: ht,
		onStarted: () => {
			s.dismiss(), r([]), a([]);
		}
	}), d = c.job, f = d?.check_id ?? "";
	(0, Q.useEffect)(() => {
		r([]), a([]);
	}, [f]);
	let p = c.running || c.start.isPending, m = s.running || s.start.isPending, h = d?.status === "complete", y = d?.gone ?? [], b = d?.unclear ?? [], x = h ? b : [], S = y.filter((e) => i.includes(e.id)).map((e) => e.id), C = x.filter((e) => n.includes(e.id)).map((e) => e.id), w = e.data, te = (w?.top_hosts ?? []).slice(0, 3), ne = (e) => {
		p || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, re = (e) => {
		!m && y.length && H({
			title: "删除失效链接",
			body: `将删除 ${e?.length ?? y.length} 条失效链接。删除前会再次检查，删除后无法恢复。`,
			confirmLabel: "删除失效链接",
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, E = s.outcome, D = c.start.error ?? s.start.error, O = null, k = null;
	if (E?.status === "failed") k = /* @__PURE__ */ K(T, {
		tone: "error",
		title: "链接清理未完成",
		children: E.error || "请查看任务记录，核对已处理的链接。"
	});
	else if (E && !y.length && !b.length) k = /* @__PURE__ */ K(T, {
		tone: "success",
		title: "完成",
		children: at(E)
	});
	else if (D) k = /* @__PURE__ */ K(T, {
		tone: "error",
		title: "检查失败",
		children: U(D)
	});
	else if (c.query.isError && d) k = /* @__PURE__ */ K(T, {
		tone: "neutral",
		title: "任务状态",
		children: Ut
	});
	else if (d?.status === "failed") k = /* @__PURE__ */ K(T, {
		tone: "error",
		title: "检查失败",
		children: d.error || "检查失败"
	});
	else if (d && d.status !== "idle") {
		O = /* @__PURE__ */ q(G.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ K(R, {
			embedded: !0,
			label: Ce(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ K(R, {
			embedded: !0,
			label: s.job?.message || "正在重验并删除失效链接",
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let e = `立即重试所选（${C.length}）`;
		k = h || y.length || b.length ? /* @__PURE__ */ q("div", {
			className: F,
			children: [
				E?.status === "complete" ? /* @__PURE__ */ K(T, {
					tone: "success",
					title: "完成",
					children: at(E)
				}) : null,
				/* @__PURE__ */ K(Kt, {
					title: "地址已失效",
					items: y,
					hint: Bt,
					picked: i,
					onPick: a,
					confirmed: !0,
					footer: h && y.length ? /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: Ht
					}), /* @__PURE__ */ K(t, {
						variant: "danger",
						...V(m),
						onClick: () => re(),
						children: `删除 ${y.length} 条失效链接`
					})] }) : null,
					children: /* @__PURE__ */ K(t, {
						variant: "danger",
						size: "small",
						disabled: !h || !S.length,
						...V(m),
						onClick: () => re(S),
						children: `删除所选（${S.length}）`
					})
				}),
				/* @__PURE__ */ K(Kt, {
					title: "本次未访问成功",
					items: b,
					hint: Vt,
					picked: n,
					onPick: r,
					footer: x.length ? /* @__PURE__ */ K(t, {
						variant: "primary",
						leadingIcon: zt,
						...V(p),
						onClick: () => ne(x.map((e) => e.id)),
						children: `立即重试全部（${x.length}）`
					}) : null,
					children: x.length ? /* @__PURE__ */ K(G.Fragment, { children: /* @__PURE__ */ K(t, {
						variant: "secondary",
						leadingIcon: zt,
						disabled: !C.length,
						...V(p),
						onClick: () => ne(C),
						children: e
					}) }) : null
				}),
				h && !y.length && !b.length ? /* @__PURE__ */ K("p", {
					className: `${I} text-body-regular text-notification-success-foreground`,
					children: "全部链接均可访问。"
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ q("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ q(l, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ K(t, {
				"data-link-check": "",
				leadingIcon: Rt,
				...V(p),
				onClick: () => ne(),
				children: p ? "检查中" : h ? "重新检查" : "检查死链"
			}),
			children: [
				/* @__PURE__ */ K(u, {
					id: "link-manager-title",
					gap: "small",
					children: "链接管理"
				}),
				e.isError ? /* @__PURE__ */ K(T, {
					tone: "error",
					title: "链接统计读取失败",
					children: U(e.error)
				}) : w ? /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ q("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ K(Gt, {
						label: "链接总数",
						value: Wt(w.total),
						note: `分布在 ${Wt(w.entities)} 个女优、厂牌与系列`
					}), Object.entries(w.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ K(Gt, {
						label: v[e] || e,
						value: Wt(t)
					}, e))]
				}), te.length ? /* @__PURE__ */ q("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ K("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: "主要站点"
					}), /* @__PURE__ */ K("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: te.map(([e, t]) => /* @__PURE__ */ q("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ q("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ K(kt, { linkId: w.top_host_link_ids?.[e] }),
									/* @__PURE__ */ K("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ K(he, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ K(o, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ K("span", {
									className: "tabular-nums",
									children: Wt(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ K("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: O
				})
			]
		}), /* @__PURE__ */ K("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: k
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Jt = (e, t) => `将整理「${e}」${t ? `的「${t}」及其子目录` : "上的文件名与目录"}，清理特殊符号与乱码，并按已填模板改名或移动。目标已存在的行会整行跳过。这一批可以从「回滚上一批」整批退回。`, Yt = "将把上一批整理动过的文件退回整理前的名字与位置，数据库路径跟着退回。退回后这一批不再出现在这里。", Xt = 8;
function Zt({ plan: e }) {
	return /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Xt).map((e) => /* @__PURE__ */ q("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ K("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: xe(e.current_path)
				}),
				/* @__PURE__ */ K("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ K("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: xe(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Xt ? /* @__PURE__ */ K("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: "只列出前 8 行，完整计划在计划 CSV 里。"
	}) : null] });
}
function Qt({ toast: e, failure: n }) {
	let r = Z({
		queryKey: te,
		queryFn: ({ signal: e }) => ze(e)
	}), i = r.data, a = i?.locations ?? [], [o, c] = (0, Q.useState)(""), d = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", p = i?.templates?.[d], [h, g] = (0, Q.useState)(null), _ = h?.location === d ? h : {
		location: d,
		file: p?.file ?? "",
		dir: p?.dir ?? ""
	}, v = (e) => {
		g({
			..._,
			...e
		}), N.reset();
	}, [ee, b] = (0, Q.useState)({
		location: "",
		path: ""
	}), x = ee.location === d ? ee.path : "", S = (0, Q.useRef)({
		location: d,
		path: x
	});
	S.current = {
		location: d,
		path: x
	};
	let [C, D] = (0, Q.useState)(null), O = (0, Q.useRef)(null), k = (0, Q.useRef)(null), ie = (0, Q.useRef)(null), A = Z({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => Be(_.file, _.dir, e),
		enabled: !!i
	}), [j, ae] = (0, Q.useState)("file"), M = (0, Q.useRef)(!1), oe = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = oe.current;
		if (!e) return;
		oe.current = null;
		let t = (e.field === "file" ? O : k).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let se = () => ({
		location: d,
		path: x.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim()
	}), N = wt({
		mutationFn: it,
		onError: (e) => {
			let t = /整理路径/.test(U(e)) ? "path" : s.test(U(e)) ? "dir" : "file";
			D(t), (t === "path" ? ie : t === "dir" ? k : O).current?.focus();
		}
	}), P = wt({
		mutationFn: ({ initial: e }) => tt(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (b({
				location: t.location,
				path: e.path
			}), D(null), N.reset(), ie.current?.focus());
		}
	}), F = St({
		queryKey: te,
		queryFn: ({ signal: e }) => ze(e),
		start: _t,
		jobOf: (e) => e,
		withJob: Tt,
		onStarted: () => N.reset(),
		onFinish: (t) => {
			if (J.invalidateQueries({
				queryKey: te,
				exact: !0
			}), t.status !== "complete") return;
			let { text: r, failed: i } = et(t);
			i ? n("整理文件", /* @__PURE__ */ Error(`${i} 行未能处理`)) : e(r.replace(/。$/, ""));
		}
	}), I = F.running || F.start.isPending, ce = JSON.stringify(N.variables) === JSON.stringify(se()), le = ce ? N.data : void 0, ue = Number(le?.counts?.change || 0), me = y[d] || d, L = (e) => {
		v(e), D(null), N.reset();
	}, he = (e) => {
		let t = (j === "file" ? O : k).current, n = _[j], r = M.current ? t?.selectionStart ?? n.length : n.length, i = M.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		oe.current = {
			field: j,
			caret: r + a.length
		}, L({ [j]: n.slice(0, r) + a + n.slice(i) });
	}, ge = () => {
		N.isPending || I || !d || (F.dismiss(), F.start.reset(), D(null), N.mutate(se()));
	}, _e = () => {
		let e = N.variables;
		e && le && ue && H({
			title: "整理文件",
			body: Jt(me, e.path),
			confirmLabel: "整理文件",
			onConfirm: async () => {
				await F.start.mutateAsync({
					kind: "apply",
					request: e
				}), lt({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, ve = () => void H({
		title: "回滚上一批整理",
		body: Yt,
		confirmLabel: "回滚整理",
		onConfirm: () => F.start.mutateAsync({ kind: "rollback" })
	}), z = null, ye = !!ue && !I && !F.outcome, B = F.job, be = F.outcome;
	if (B?.status === "running") {
		let e = B.message || B.stage || "正在整理文件";
		z = /* @__PURE__ */ K(R, {
			embedded: !0,
			label: e,
			value: Math.min(B.checked || 0, B.total || 0),
			total: B.total
		});
	} else if (be?.status === "failed") z = /* @__PURE__ */ K(T, {
		tone: "error",
		title: "文件整理未完成",
		children: be.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (be) {
		let { text: e, failed: t } = et(be);
		z = /* @__PURE__ */ K(T, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "整理结果",
			children: e
		});
	} else F.start.isError ? z = /* @__PURE__ */ K(T, {
		tone: "error",
		title: "整理失败",
		children: U(F.start.error)
	}) : N.isPending ? z = /* @__PURE__ */ K(R, {
		embedded: !0,
		label: "正在核对整理计划"
	}) : N.isError && ce ? z = /* @__PURE__ */ K(T, {
		tone: "error",
		title: "整理预览失败",
		children: U(N.error)
	}) : le && (z = /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K(T, {
		tone: "neutral",
		title: "预览结果",
		children: rt(le)
	}), ue ? /* @__PURE__ */ K(Zt, { plan: le }) : null] }));
	return /* @__PURE__ */ q(l, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ q(G.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ K(t, {
				variant: "secondary",
				...V(I),
				onClick: ve,
				children: "回滚上一批"
			}) : null,
			/* @__PURE__ */ K(t, {
				variant: ye ? "secondary" : "primary",
				disabled: !a.length || I,
				...V(N.isPending),
				onClick: ge,
				children: "预览"
			}),
			ye ? /* @__PURE__ */ K(t, {
				variant: "primary",
				onClick: _e,
				children: "执行整理"
			}) : null
		] }),
		children: [
			/* @__PURE__ */ K(u, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: "整理"
			}),
			/* @__PURE__ */ K("p", {
				className: "text-body-regular text-text-secondary",
				children: E
			}),
			r.isError ? /* @__PURE__ */ K("div", {
				className: "mt-3",
				children: /* @__PURE__ */ K(T, {
					tone: "error",
					title: "整理配置读取失败",
					children: U(r.error)
				})
			}) : null,
			/* @__PURE__ */ q("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ q("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ K(de, {
							"aria-label": "整理哪个来源",
							prefix: "来源",
							className: "w-fit min-w-25",
							selectedKey: d || null,
							onSelectionChange: (e) => {
								e !== null && (c(String(e)), b({
									location: String(e),
									path: ""
								}), D(null), N.reset(), P.reset(), M.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ q(fe, {
								id: e.location,
								textValue: y[e.location] || e.location,
								children: [/* @__PURE__ */ K(pe, { mark: w[e.location] || "database" }), y[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ q("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ K(m, {
								"aria-label": "整理路径",
								className: "min-w-0 flex-1",
								placeholder: "留空整理整个来源",
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: ie,
								isInvalid: C === "path",
								onChange: (e) => {
									b({
										location: d,
										path: e
									}), D(null), N.reset(), P.reset();
								}
							}), /* @__PURE__ */ K(f, {
								icon: jt,
								"aria-label": "选择整理路径",
								...V(P.isPending),
								onClick: () => P.mutate({
									initial: x || a.find((e) => e.location === d)?.roots[0] || "",
									location: d,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ K("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: re
					}),
					P.isError ? /* @__PURE__ */ q(T, {
						tone: "error",
						title: "目录选择失败",
						children: [U(P.error), "；也可直接输入路径。"]
					}) : null,
					/* @__PURE__ */ K(m, {
						label: "文件名模板",
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: O,
						spellCheck: "false",
						isInvalid: C === "file",
						onFocus: () => {
							ae("file"), M.current = !0;
						},
						onChange: (e) => L({ file: e })
					}),
					/* @__PURE__ */ K(m, {
						label: "目录模板",
						placeholder: "留空表示原地改名",
						value: _.dir,
						ref: k,
						spellCheck: "false",
						isInvalid: C === "dir",
						onFocus: () => {
							ae("dir"), M.current = !0;
						},
						onChange: (e) => L({ dir: e })
					}),
					i?.presets?.length ? /* @__PURE__ */ q("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": X("套用模板"),
						children: [/* @__PURE__ */ K("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: X("套用模板")
						}), /* @__PURE__ */ K("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((e) => /* @__PURE__ */ K(t, {
								variant: "secondary",
								size: "small",
								title: e.example || e.label,
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									L({
										file: e.file,
										dir: e.dir
									}), M.current = !1;
								},
								children: /* @__PURE__ */ K("span", {
									className: "truncate",
									children: X(e.label)
								})
							}, e.label))
						})]
					}) : null,
					/* @__PURE__ */ q("p", {
						"aria-live": "polite",
						"aria-busy": A.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [
							X("路径示例："),
							" ",
							/* @__PURE__ */ K("code", {
								className: "wrap-anywhere",
								children: A.data?.example || A.data?.error || (A.isError ? U(A.error) : "正在预览…")
							})
						]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ q("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": X("插入参数"),
						children: [/* @__PURE__ */ q("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ K("strong", {
									className: "text-caption-1-semibold text-text-primary",
									children: X("插入参数")
								}),
								" (",
								X(j === "file" ? "文件名模板" : "目录模板"),
								")"
							]
						}), /* @__PURE__ */ K("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => /* @__PURE__ */ K(t, {
								variant: "ghost",
								size: "small",
								"aria-label": `${X(e.label)} {${e.key}}`,
								onClick: () => he(e.key),
								children: /* @__PURE__ */ q("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ K("code", { children: `{${e.key}}` }), /* @__PURE__ */ K("span", {
										className: "text-text-secondary",
										children: X(e.label)
									})]
								})
							}, e.key))
						})]
					}) : null,
					/* @__PURE__ */ K("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: X(ne)
					})
				]
			}),
			/* @__PURE__ */ K("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: z
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var $t = Y("play"), en = () => J.invalidateQueries({
	queryKey: D,
	exact: !0
});
function tn({ item: e, toast: n }) {
	let [r, i] = (0, Q.useState)(e.candidates[0]?.id ?? null), a = wt({
		mutationFn: () => be(e.id, Number(r)),
		onSuccess: () => {
			let t = e.candidates.find((e) => e.id === r);
			n(`已将「${e.name}」的个人记录转移到「${t?.name ?? "所选文件"}」`), en();
		},
		onError: (e) => n(U(e))
	}), o = wt({
		mutationFn: () => st(e.id),
		onSuccess: (t) => {
			n(t.blocked.length ? `「${e.name}」的文件已恢复，记录未删除；下次扫描后恢复为在库状态` : `已删除「${e.name}」的作品记录及个人记录`), en();
		}
	}), s = () => {
		H({
			title: "删除记录",
			body: `将删除「${e.name}」的作品记录${ct(e.records) ? `及其个人记录（${ct(e.records)}）` : ""}。此操作不可撤销。`,
			confirmLabel: "删除记录",
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ q("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ K(t, {
				variant: "danger",
				size: "small",
				...V(c),
				onClick: s,
				children: "删除记录"
			}),
			e.candidates.length ? /* @__PURE__ */ K(de, {
				"aria-label": `选择接收 ${e.name} 个人记录的文件`,
				prefix: "接收",
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ K(fe, {
					id: e.id,
					textValue: Se(e),
					children: Se(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ K(t, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...V(c),
				onClick: () => a.mutate(),
				children: "转移记录"
			}) : null
		]
	});
}
function nn({ item: e }) {
	return /* @__PURE__ */ q("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ q("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ K($t, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ K("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ q("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ K("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ K("small", {
				className: "truncate text-caption-1-regular text-text-secondary",
				children: [e.code, y[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function rn({ toast: e }) {
	let [n, r] = (0, Q.useState)([]), i = Z({
		queryKey: D,
		queryFn: ({ signal: e }) => Ve(e)
	}), a = i.data?.items ?? [], o = wt({
		mutationFn: (e) => st(e),
		onSuccess: (t) => {
			e(`已删除 ${t.purged} 条作品记录及其个人记录${t.blocked.length ? `；${t.blocked.length} 条文件已恢复，记录未删除` : ""}`), r([]), en();
		}
	}), s = (e) => void H({
		title: "删除所选记录",
		body: `将删除以下 ${e.length} 条作品记录及其全部个人记录。此操作不可撤销。`,
		items: e.map((e) => e.name),
		confirmLabel: "删除所选记录",
		danger: !0,
		onConfirm: () => o.mutateAsync(e.map((e) => e.id))
	}), c = [
		{
			id: "item",
			label: "作品",
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ K(nn, { item: e })
		},
		{
			id: "records",
			label: "个人记录",
			width: 176,
			min: 144,
			value: (e) => ct(e.records),
			render: (e) => /* @__PURE__ */ K("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: ct(e.records) || "无"
			})
		},
		{
			id: "target",
			label: "操作",
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ K(tn, {
				item: t,
				toast: e
			})
		}
	];
	return /* @__PURE__ */ K("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: i.isError ? /* @__PURE__ */ q(l, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ K(u, {
				id: "orphan-records-title",
				children: "文件已丢失的记录"
			}), /* @__PURE__ */ K(T, {
				tone: "error",
				title: "读取文件已丢失的记录失败",
				children: U(i.error)
			})]
		}) : /* @__PURE__ */ K(Ot, {
			label: "文件已消失的作品",
			items: a,
			columns: c,
			title: "文件已丢失的记录",
			titleId: "orphan-records-title",
			unit: "条作品",
			description: O,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (e) => /* @__PURE__ */ K(t, {
				variant: "danger",
				size: "small",
				disabled: !e.length,
				...V(o.isPending),
				onClick: () => s(e),
				children: `删除所选记录（${e.length}）`
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function an({ person: e }) {
	let t = Ee("performer", e.k, e.entity_id), n = $e("performer", e.k, e.entity_id);
	return /* @__PURE__ */ q("a", {
		href: Oe("performer", e.k, e.entity_id),
		title: n || t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ K("span", {
			"aria-hidden": !0,
			className: we("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", At),
			dangerouslySetInnerHTML: { __html: `<span>${ke(Je(t))}</span>` + De({
				kind: "performer",
				id: e.entity_id,
				hasImage: e.has_image,
				version: e.image_version,
				focus: e.avatar_focus,
				thumb: !0
			}) }
		}), /* @__PURE__ */ K("span", {
			className: "min-w-0 wrap-anywhere",
			children: t
		})]
	});
}
function on({ toast: n }) {
	Ct();
	let r = Z({
		queryKey: k,
		queryFn: ({ signal: e }) => Ae(e)
	}), [i, a] = (0, Q.useState)([]), [o, s] = (0, Q.useState)(""), [c, d] = (0, Q.useState)(!1), [f, m] = (0, Q.useState)(null), [h, g] = (0, Q.useState)(""), _ = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => () => _.current?.abort(), []);
	let v = (0, Q.useMemo)(() => [
		{
			id: "name",
			label: "女优",
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ K(an, { person: e })
		},
		{
			id: "works",
			label: "影片",
			width: 104,
			min: 80,
			value: (e) => e.n,
			render: (e) => `${e.n.toLocaleString()} 部`
		},
		{
			id: "files",
			label: "文件",
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			render: (e) => `${e.file_count.toLocaleString()} 个`
		},
		{
			id: "bytes",
			label: "登记大小",
			width: 136,
			min: 104,
			value: (e) => e.bytes,
			render: (e) => W(e.bytes)
		}
	], []), ee = o.toLocaleLowerCase(), y = (r.data?.items || []).filter((e) => !ee || [
		e.k,
		Ee("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), b = async (e, t) => {
		if (c) return;
		d(!0), g("");
		let r = new AbortController();
		_.current = r;
		try {
			let i = await je(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				n("所选女优没有可删除的影片");
				return;
			}
			let a = i.performers.map((e) => Ee("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await H({
				title: "删除所选女优的全部影片",
				body: `将永久删除 ${a.slice(0, 5).join("、")}${a.length > 5 ? `等 ${a.length} 位女优` : ""} 关联的 ${i.total} 个影片文件（登记大小 ${W(i.bytes)}）。范围包含全部来源和回收站，不受当前搜索、排序或分页影响。文件、影片资料和观看记录将永久删除，无法恢复；女优档案和照片保留。` + (i.shared ? `其中 ${i.shared} 个文件还关联了未勾选的女优，删除后也会从她们的作品中消失。` : "") + `涉及：${o.slice(0, 5).join("、")}${o.length > 5 ? `等 ${o.length} 部作品` : ""}。`,
				confirmLabel: "永久删除影片",
				danger: !0,
				onConfirm: () => Te(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			m(c), t(), await Promise.all([J.invalidateQueries({
				queryKey: k,
				exact: !0
			}), J.invalidateQueries({
				queryKey: L,
				exact: !0
			})]), n(`已永久删除 ${c.purged} 个影片文件${c.blocked.length ? `，${c.blocked.length} 个未删除` : ""}`);
		} catch (e) {
			r.signal.aborted || g(U(e));
		} finally {
			r.signal.aborted || d(!1);
		}
	}, x = f ? [
		...f.blocked,
		...f.cleanup_pending,
		...f.cache_blocked.map((e) => ({
			path: e.name,
			reason: e.reason
		}))
	] : [];
	return /* @__PURE__ */ q("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": "批量删除",
		children: [
			r.isPending || r.isError ? /* @__PURE__ */ q(l, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ K(u, {
					id: "batch-delete-title",
					children: "批量删除"
				}), r.isError ? /* @__PURE__ */ K(T, {
					tone: "error",
					title: "读取女优列表失败",
					action: /* @__PURE__ */ K(t, {
						variant: "secondary",
						size: "small",
						onClick: () => void r.refetch(),
						children: "重试"
					}),
					children: U(r.error)
				}) : /* @__PURE__ */ K("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: "正在读取女优列表…"
				})]
			}) : /* @__PURE__ */ K(Ot, {
				label: "女优影片",
				title: "批量删除",
				titleId: "batch-delete-title",
				unit: "位女优",
				description: e,
				items: y,
				columns: v,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => Ee("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ K(p, {
					label: "搜索女优姓名或别名",
					value: o,
					onQuery: (e) => {
						s(e), a([]);
					}
				}),
				actions: (e, n) => /* @__PURE__ */ K(t, {
					variant: "danger",
					size: "small",
					...V(c),
					onClick: () => void b(e, n),
					children: "删除所选女优影片"
				})
			}),
			h ? /* @__PURE__ */ K(T, {
				tone: "error",
				title: "未能读取删除清单",
				children: h
			}) : null,
			f ? /* @__PURE__ */ K(T, {
				tone: x.length ? "warning" : "info",
				title: `已永久删除 ${f.purged} 个影片文件`,
				extra: x.length ? /* @__PURE__ */ K("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: x.slice(0, 5).map((e, t) => /* @__PURE__ */ q("p", { children: [
						e.path,
						"（",
						e.reason,
						"）"
					] }, t))
				}) : null,
				children: x.length ? `${f.blocked.length} 个文件未能删除，馆藏记录仍保留；${f.cleanup_pending.length} 个隔离文件和 ${f.cache_blocked.length} 个缓存文件待清理。` : "所选影片及关联记录已删除，女优档案和照片保留。"
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var sn = Y("git-compare"), cn = Y("rotate-cw"), ln = "暂时无法读取进度，正在重新连接…", un = "清理失效条目", dn = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", $ = (e) => Number(e || 0).toLocaleString();
function fn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K("div", {
		className: dn,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ q("article", {
			className: nt(),
			children: [/* @__PURE__ */ K(A, {
				label: le[e.location] || "媒体来源",
				mark: /* @__PURE__ */ K(pe, { mark: w[e.location] ?? "database" }),
				aside: /* @__PURE__ */ K(Mt, {
					online: e.online,
					children: e.online ? "可访问" : "离线"
				}),
				figure: e.online ? `${$(e.missing)} 项` : "—",
				meta: e.online ? mt(e) : `${mt(e)} · 本次已跳过`,
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ K("span", {
				className: "self-start",
				children: /* @__PURE__ */ q(me, {
					tone: "warning",
					children: [$(e.unreadable), " 个目录未读取"]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ q("div", {
		className: dn,
		children: [
			/* @__PURE__ */ K("article", {
				className: nt(),
				children: /* @__PURE__ */ K(A, {
					label: "待永久删除",
					figure: `${$(ot(e))} 项`,
					meta: "文件已不在盘上，含回收站"
				})
			}),
			/* @__PURE__ */ K("article", {
				className: nt(),
				children: /* @__PURE__ */ K(A, {
					label: "将标为已消失",
					figure: `${$(e.vanish)} 项`,
					meta: "带个人记录，记录留着"
				})
			}),
			/* @__PURE__ */ K("article", {
				className: nt(),
				children: /* @__PURE__ */ K(A, {
					label: "空文件夹",
					figure: `${$(e.empty)} 个`,
					meta: "保留来源根目录"
				})
			}),
			/* @__PURE__ */ K("article", {
				className: nt(),
				children: /* @__PURE__ */ K(A, {
					label: "可清理的缓存",
					figure: `${$(n.files)} 个`,
					meta: n.files ? W(n.bytes) : ""
				})
			})
		]
	})] });
}
function pn({ toast: e }) {
	let n = St({
		queryKey: se,
		queryFn: ({ signal: e }) => We(e),
		start: vt,
		onFinish: (t) => {
			if (J.invalidateQueries({
				queryKey: L,
				exact: !0
			}), J.invalidateQueries({
				queryKey: N,
				exact: !0
			}), t.status !== "complete") return;
			let { done: n, left: r } = z(t);
			r ? e(`已完成 ${$(n)} 项，${$(r)} 项没有处理`, { warning: !0 }) : e("已清理失效条目");
		}
	}), r = St({
		queryKey: N,
		queryFn: ({ signal: e }) => Ge(e),
		start: yt,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = i?.status === "complete" || i?.status === "failed", c = a ? "扫描中" : s ? "重新扫描" : "检查文件", d = (e) => void H({
		title: un,
		body: ve(e),
		confirmLabel: un,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), f = n.outcome, p = (e) => {
		let t = z(e).left > 0;
		return /* @__PURE__ */ K(T, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "清理结果",
			children: B(e, W)
		});
	}, m = null, h = null;
	if (f?.status === "failed") h = /* @__PURE__ */ K(T, {
		tone: "error",
		title: "资源清理未完成",
		children: f.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (f) h = p(f);
	else if (n.running) m = /* @__PURE__ */ K(R, {
		embedded: !0,
		label: n.job?.message || "正在复核并清理失效条目"
	});
	else if (r.start.isError) h = /* @__PURE__ */ K(T, {
		tone: "error",
		title: "扫描失败",
		children: U(r.start.error)
	});
	else if (r.query.isError && i) h = /* @__PURE__ */ K(T, {
		tone: "neutral",
		title: "任务状态",
		children: ln
	});
	else if (i?.status === "running") {
		let e = ft(i);
		m = /* @__PURE__ */ K(R, {
			embedded: !0,
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (h = /* @__PURE__ */ K(fn, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") h = /* @__PURE__ */ q(G.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ K(fn, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ K(T, {
		tone: "error",
		title: "扫描失败",
		children: i.error || "后台扫描失败"
	})] });
	else if (i?.status === "complete" && i.applied) h = n.job?.status === "complete" ? p(n.job) : /* @__PURE__ */ K(T, {
		tone: "neutral",
		title: "清理结果",
		children: "这次检查的结果已经清理，重新扫描可再核对。"
	});
	else if (i?.status === "complete") {
		let e = Ye(i);
		h = /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K(fn, { scan: i }), e ? /* @__PURE__ */ K(T, {
			tone: "neutral",
			title: "清理内容",
			action: /* @__PURE__ */ K(t, {
				variant: "danger",
				...V(o),
				onClick: () => d(i),
				children: o ? "正在复核并清理…" : un
			}),
			children: ye(i)
		}) : /* @__PURE__ */ K("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: "已检查可访问的来源，没有待清理的记录、空文件夹或缓存。"
		})] });
	}
	return n.start.isError && !f && (h = /* @__PURE__ */ q(G.Fragment, { children: [h, /* @__PURE__ */ K(T, {
		tone: "error",
		title: "清理失败",
		children: U(n.start.error)
	})] })), /* @__PURE__ */ q("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ q(l, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ K(t, {
				"data-resource-scan": !0,
				leadingIcon: s && !a ? cn : sn,
				...V(a),
				onClick: () => {
					a || r.start.mutate();
				},
				children: c
			}),
			children: [
				/* @__PURE__ */ K(u, {
					id: "resource-sync-title",
					gap: "small",
					children: "资源同步"
				}),
				/* @__PURE__ */ K("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: P
				}),
				/* @__PURE__ */ K("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: m
				})
			]
		}), /* @__PURE__ */ K("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: h
		})]
	});
}
// src/react/data-cleanup/data-cleanup-tool-page.tsx
function mn({ toast: e }) {
	let t = Z({
		queryKey: C,
		queryFn: ({ signal: e }) => Re(e)
	});
	return t.isError ? /* @__PURE__ */ K(T, {
		tone: "error",
		title: "读取媒体来源失败",
		children: U(t.error)
	}) : t.isPending ? /* @__PURE__ */ K("p", {
		role: "status",
		children: "正在读取媒体来源…"
	}) : Xe(t.data) ? /* @__PURE__ */ K(pn, { toast: e }) : /* @__PURE__ */ q(l, {
		layout: "stack",
		label: "资源同步",
		children: [
			/* @__PURE__ */ K(u, { children: "资源同步" }),
			/* @__PURE__ */ K("p", {
				className: "text-body-regular text-text-secondary",
				children: "尚未配置可核对的媒体目录。"
			}),
			/* @__PURE__ */ K("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: "配置媒体库"
			})
		]
	});
}
function hn({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ K(Qt, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ K(mn, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ K(rn, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ K(Lt, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ K(qt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ K(on, { toast: r });
	}
	return /* @__PURE__ */ K(Et, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function gn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: "读取失败",
		state: "error"
	} : {
		figure: "正在读取…",
		state: "loading"
	} : t(e.data);
}
function _n({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ K("button", {
		type: "button",
		className: nt({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ K(A, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function vn({ tool: e, navigate: t }) {
	let n = Y(e.icon);
	return /* @__PURE__ */ K(Pt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var yn = Y("square-check-big"), bn = Y("sparkles"), xn = Y("file-stack"), Sn = Y("file-archive"), Cn = Y("trash"), wn = () => {
	for (let e of [
		ce,
		ae,
		c,
		h
	]) J.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function Tn({ toast: e, open: t, navigate: n }) {
	let o = Z({
		queryKey: ce,
		queryFn: ({ signal: e }) => Ke(e)
	}), s = Z({
		queryKey: ae,
		queryFn: ({ signal: e }) => He(e)
	}), l = Z({
		queryKey: c,
		queryFn: ({ signal: e }) => Me(e)
	}), u = Z({
		queryKey: h,
		queryFn: ({ signal: e }) => Ne(e)
	}), d = Z({
		queryKey: L,
		queryFn: ({ signal: e }) => qe(e)
	});
	return (0, Q.useEffect)(() => {
		let e = i[location.hash];
		e && pt(e + location.search, { replace: !0 });
	}, []), /* @__PURE__ */ q(Et, { children: [
		/* @__PURE__ */ q("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ K(ue, {
				id: "cleanup-pending",
				children: "待处理事项"
			}), /* @__PURE__ */ q("div", {
				className: ie,
				children: [
					/* @__PURE__ */ K(_n, {
						section: "review",
						label: "人工复核",
						icon: yn,
						open: t,
						value: gn(o, dt)
					}),
					/* @__PURE__ */ K(_n, {
						section: "duplicates",
						label: "重复文件",
						icon: xn,
						open: t,
						value: gn(l, (e) => Number(e.total || 0) ? {
							figure: `${Number(e.total).toLocaleString()} 组 · ${Number(e.files || 0).toLocaleString()} 个文件`,
							meta: `可回收 ${W(e.reclaimable || 0)}`
						} : { figure: "没有重复内容" })
					}),
					/* @__PURE__ */ K(_n, {
						section: "ads",
						label: "垃圾文件",
						icon: Sn,
						open: t,
						value: gn(u, (e) => ({
							figure: `${Number(e.pending_total || 0).toLocaleString()} 个待判断`,
							meta: Ze(e)
						}))
					}),
					/* @__PURE__ */ K(_n, {
						section: "quality",
						label: "高清版",
						icon: bn,
						open: t,
						value: gn(s, (e) => ({ figure: `${Number(e.total || 0).toLocaleString()} 个待升级` }))
					}),
					/* @__PURE__ */ K(_n, {
						section: "trash",
						label: "回收站",
						icon: Cn,
						open: t,
						value: gn(d, (e) => ({
							figure: `${Number(e.total || 0).toLocaleString()} 项在回收站`,
							meta: e.total ? `占用 ${W(e.bytes || 0)}` : "查看和还原已移入回收站的内容"
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ K("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ K(b, {
				toast: (t) => e(t),
				monitor: !0,
				onComplete: wn
			})
		}),
		/* @__PURE__ */ q("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ K(ue, {
				id: "cleanup-maintenance",
				children: "整理与维护"
			}), /* @__PURE__ */ K("div", {
				className: r,
				children: a.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ K(vn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ q("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ K(ue, {
				id: "cleanup-deletion",
				children: "清理与删除"
			}), /* @__PURE__ */ K("div", {
				className: r,
				children: a.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ K(vn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { Tn as DataCleanupPage, hn as DataCleanupToolPage };

//# debugId=1aaa3aeb-b254-4a6f-a93f-57e50ddd6237