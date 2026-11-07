(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "94ef0a6a-8046-4eb3-9328-c6a927e28652", e._sentryDebugIdIdentifier = "sentry-dbid-94ef0a6a-8046-4eb3-9328-c6a927e28652");
	} catch {}
})();
import { BATCH_DELETE_TEXT as e, Button as t, CLEANUP_ENTRY as n, CLEANUP_ENTRY_GRID as r, CLEANUP_HASH_REDIRECTS as i, CLEANUP_TOOLS as a, Chip as o, DIRECTORY_TEMPLATE_ERROR as s, DUPLICATES_KEY as c, Fieldset as l, FieldsetTitle as u, IDLE_REPAIR as d, IconButton as f, IndexSearch as p, Input as m, JUNK_KEY as h, LINKS_KEY as g, LINK_CHECK_KEY as _, LINK_KINDS as v, LINK_PRUNE_KEY as ee, LOC as y, LibraryProcessingCard as b, MEDIA_REPAIR_KEY as x, MEDIA_REPAIR_URL as S, MEDIA_SOURCES_KEY as C, MEDIA_SOURCE_ICONS as w, Note as T, ORGANIZE_KEY as E, ORGANIZE_PARAMETER_HINT as te, ORGANIZE_SCOPE_HINT as ne, ORGANIZE_TEXT as re, ORPHAN_RECORDS_KEY as D, ORPHAN_RECORDS_TEXT as O, PERFORMER_DELETE_KEY as k, PLAIN_STAT_STRIP as A, PlainStat as j, Progress as M, QUALITY_GOALS_KEY as ie, REPAIR_CARD_TEXT as N, REPAIR_LIBRARIES_KEY as ae, RESOURCE_APPLY_KEY as oe, RESOURCE_SCAN_KEY as P, RESOURCE_SYNC_TEXT as F, RESULT_PANEL as I, RESULT_SECTION as L, REVIEW_COUNTS_KEY as se, SOURCE_LABELS as ce, SectionHeading as le, Select as ue, SelectItem as de, SourceMark as fe, StatusLabel as pe, TRASH_KEY as R, TaskProgress as z, Wt as me, __toESM as he, apiSend as ge, applyConfirmText as _e, applyLeftovers as B, applyPlanText as ve, applyText as V, attachOrphan as ye, baseName as be, busyProps as H, candidateText as xe, checkLine as Se, confirmModal as U, cx as Ce, deletePerformerVideos as we, entityDisplayName as Te, entityFaceImg as Ee, entityPath as De, errorMessage as W, esc as Oe, fetchDeletePerformers as ke, fetchDeletePlan as Ae, fetchDuplicates as je, fetchJunkSummary as Me, fetchLinkCheck as Ne, fetchLinkPrune as Pe, fetchLinkStats as Fe, fetchMediaRepair as Ie, fetchMediaSources as Le, fetchOrganize as Re, fetchOrganizeExample as ze, fetchOrphanRecords as Be, fetchQualityGoals as Ve, fetchRepairLibraries as He, fetchResourceApply as Ue, fetchResourceScan as We, fetchReviewCounts as Ge, fetchTrashSummary as Ke, firstGrapheme as qe, fmtSize as G, hasChanges as Je, hasResourceRoots as Ye, junkBreakdown as Xe, missingToolText as Ze, nameFallback as Qe, organizeOutcome as $e, peachHistory$1 as et, pickOrganizeFolder as tt, plainStatClass as K, planSummary as nt, previewOrganize as rt, pruneText as it, purgeCount as at, purgeOrphan as ot, queryClient as q, recordsText as st, rememberTemplates as ct, require_jsx_runtime as lt, require_react as ut, reviewSummary as dt, scanLine as ft, sourceMeta as pt, spriteGlyph as J, startLinkCheck as mt, startLinkPrune as ht, startOrganize as gt, startResourceApply as _t, startResourceScan as vt, statusLine as yt, useAction as bt, useBackgroundJob as Y, useEntityNames as xt, useMutation as St, useOrderedLibraries as Ct, useQuery as X, withOrganizeJob as wt } from "./peach-app.js";
import { Page as Tt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as Et } from "./peach-app.error-excerpt-B8v2xEIP.js";
import { DataTable as Dt } from "./peach-app.data-table-BRJ5A5Cl.js";
import { SiteMark as Ot } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as kt } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as At } from "./peach-app.folder-rows-BWBfTyUD.js";
import { ConnectionStatus as jt } from "./peach-app.connection-status-DI6kgn3i.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Z = /* @__PURE__ */ he(ut(), 1), Q = lt(), Mt = J("chevron-right");
function Nt({ label: e, icon: t, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ (0, Q.jsxs)("button", {
		type: "button",
		...o,
		className: n.face,
		onClick: s,
		"data-entry-state": a,
		"aria-busy": a === "loading" || void 0,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				"aria-hidden": !0,
				className: n.icon,
				children: /* @__PURE__ */ (0, Q.jsx)(t, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ (0, Q.jsxs)("span", {
				className: n.body,
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: n.title,
						children: e
					}),
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: Ce(n.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: n.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(Mt, {
				"aria-hidden": !0,
				className: n.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Pt = (e) => w[e] || e, Ft = (e) => q.setQueryData(x, e);
function It({ toast: e = () => {} }) {
	let n = Y({
		queryKey: x,
		queryFn: ({ signal: e }) => Ie(e),
		start: (e) => ge(S, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? `已修复 ${t.repaired.toLocaleString()} 部视频` : "已检查媒体库，没有需要修复的视频");
		}
	}), r = X({
		queryKey: ae,
		queryFn: ({ signal: e }) => He(e)
	}), [i, a] = (0, Z.useState)(""), o = bt(), s = n.job ?? d, c = Ct(r.data ?? [], (e) => e.id), f = s.status === "running", p = c.find((e) => e.id === (f ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], m = () => {
		p && U({
			title: `修复媒体库「${p.name}」`,
			body: "缺时间戳表的片子另存一份修好的头，原文件不动；缺索引的片子重建后替换原文件，坏原件改名成同目录的隐藏文件（.文件名.peach-original）留着。" + (p.metered ? "这个库在计费来源上，每修一部都要把片子完整拉一遍。" : ""),
			confirmLabel: "修复媒体库",
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => ge(S, { stop: !0 }, "POST", e), Ft), g = n.outcome, _ = yt(f ? s : g ?? d), v = o.error || g?.error || (n.query.error ? "读不到媒体修复的状态" : "");
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsx)(l, {
			layout: "split",
			label: "媒体修复",
			footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ue, {
				"aria-label": "媒体库",
				prefix: "媒体库",
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !c.length,
				"aria-busy": r.isPending || void 0,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ (0, Q.jsxs)(de, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ (0, Q.jsx)(fe, { mark: Pt(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ (0, Q.jsx)(t, {
				onClick: h,
				...H(o.busy === "stop"),
				children: "停止"
			}) : /* @__PURE__ */ (0, Q.jsx)(t, {
				onClick: m,
				disabled: !p,
				children: "开始修复"
			})] }),
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(u, { children: "媒体修复" }),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: N
					}),
					f && s.total ? /* @__PURE__ */ (0, Q.jsx)(M, {
						label: "修复进度",
						value: s.checked,
						max: s.total
					}) : null,
					_ ? /* @__PURE__ */ (0, Q.jsx)("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: _
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [
				g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "warning",
					title: "缺少 untrunc",
					action: /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "ghost",
						size: "small",
						onClick: n.dismiss,
						children: "关闭提示"
					}),
					children: Ze(g)
				}) : null,
				r.isError ? /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "error",
					children: "媒体库列表未取得"
				}) : null,
				v ? /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "error",
					children: v
				}) : null
			]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function Lt({ className: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("svg", {
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
			/* @__PURE__ */ (0, Q.jsx)("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ (0, Q.jsx)("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ (0, Q.jsxs)("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M8 2v3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M2 8h3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M16 19v3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var Rt = J("rotate-cw"), zt = "站点返回 404 或 410，确认这个地址不存在。", Bt = "站点拒绝程序访问或一次临时故障都会落在这里。链接保留，可勾选后单独重试。", Vt = "删除前会逐条重验一次；此操作不可撤销。", Ht = "暂时无法读取进度，正在重新连接…", Ut = (e) => Number(e || 0).toLocaleString();
function Wt({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function Gt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	return t.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
		className: L,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, Q.jsx)(Dt, {
			label: e,
			items: t,
			columns: [
				{
					id: "entity",
					label: "Peach 资料",
					width: 180,
					min: 128,
					value: (e) => e.entity,
					render: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
						className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
						href: e.entity_id && e.entity_kind ? De(e.entity_kind, e.entity, e.entity_id) : void 0,
						"data-link-identity": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("span", {
							"data-link-avatar": "",
							className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${kt}`,
							"aria-hidden": !0,
							dangerouslySetInnerHTML: { __html: `<span>${Oe(qe(e.entity))}</span>` + Ee({
								kind: e.entity_kind,
								id: e.entity_id,
								hasImage: e.face?.has_image,
								version: e.face?.image_version,
								focus: e.face?.avatar_focus,
								thumb: !0,
								mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
							}) }
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
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
					render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "flex min-w-24 items-center gap-2",
						"data-link-name": "",
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
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
					render: (e) => /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "min-w-0 w-full",
						"data-link-result": s ? "gone" : "unclear",
						children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, Q.jsx)(pe, {
							tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
							"data-link-code": "",
							children: e.note.trim()
						}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, Q.jsx)(pe, {
								tone: s ? "error" : "warning",
								children: s ? "地址已失效" : "未取得结论"
							}), /* @__PURE__ */ (0, Q.jsx)(Et, {
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
					render: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
						href: e.url,
						target: "_blank",
						rel: "noopener noreferrer",
						title: e.url,
						"data-link-address": "",
						className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Ot, { linkId: e.id }),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								"data-middle-truncate": !0,
								className: "min-w-0 truncate",
								children: e.url
							}),
							/* @__PURE__ */ (0, Q.jsx)(me, {
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
function Kt() {
	let e = X({
		queryKey: g,
		queryFn: ({ signal: e }) => Fe(e)
	}), [n, r] = (0, Z.useState)([]), [i, a] = (0, Z.useState)([]), s = Y({
		queryKey: ee,
		queryFn: ({ signal: e }) => Pe(e),
		start: ht,
		onFinish: () => {
			q.invalidateQueries({
				queryKey: g,
				exact: !0
			}), q.invalidateQueries({
				queryKey: _,
				exact: !0
			});
		}
	}), c = Y({
		queryKey: _,
		queryFn: ({ signal: e }) => Ne(e),
		start: mt,
		onStarted: () => {
			s.dismiss(), r([]), a([]);
		}
	}), d = c.job, f = d?.check_id ?? "";
	(0, Z.useEffect)(() => {
		r([]), a([]);
	}, [f]);
	let p = c.running || c.start.isPending, m = s.running || s.start.isPending, h = !!c.job && !!s.job, y = d?.status === "complete", b = d?.gone ?? [], x = d?.unclear ?? [], S = y ? x : [], C = b.filter((e) => i.includes(e.id)).map((e) => e.id), w = S.filter((e) => n.includes(e.id)).map((e) => e.id), E = e.data, te = (E?.top_hosts ?? []).slice(0, 3), ne = (e) => {
		!h || p || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, re = (e) => {
		h && !m && b.length && U({
			title: "删除失效链接",
			body: `将删除 ${e?.length ?? b.length} 条失效链接。删除前会再次检查，删除后无法恢复。`,
			confirmLabel: "删除失效链接",
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, D = s.outcome, O = c.start.error ?? s.start.error, k = null, A = null;
	if (D?.status === "failed") A = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "链接清理未完成",
		children: D.error || "请查看任务记录，核对已处理的链接。"
	});
	else if (D && !b.length && !x.length) A = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "success",
		title: "完成",
		children: it(D)
	});
	else if (O) A = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "检查失败",
		children: W(O)
	});
	else if (c.query.isError && d) A = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "neutral",
		title: "任务状态",
		children: Ht
	});
	else if (d?.status === "failed") A = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "检查失败",
		children: d.error || "检查失败"
	});
	else if (d && d.status !== "idle") {
		k = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ (0, Q.jsx)(z, {
			embedded: !0,
			label: Se(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ (0, Q.jsx)(z, {
			embedded: !0,
			label: s.job?.message || "正在重验并删除失效链接",
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let e = `立即重试所选（${w.length}）`;
		A = y || b.length || x.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: I,
			children: [
				D?.status === "complete" ? /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "success",
					title: "完成",
					children: it(D)
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(Gt, {
					title: "地址已失效",
					items: b,
					hint: zt,
					picked: i,
					onPick: a,
					confirmed: !0,
					footer: y && b.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: Vt
					}), /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "danger",
						...H(m),
						onClick: () => re(),
						children: `删除 ${b.length} 条失效链接`
					})] }) : null,
					children: /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "danger",
						size: "small",
						disabled: !y || !C.length,
						...H(m),
						onClick: () => re(C),
						children: `删除所选（${C.length}）`
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(Gt, {
					title: "本次未访问成功",
					items: x,
					hint: Bt,
					picked: n,
					onPick: r,
					footer: S.length ? /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "primary",
						leadingIcon: Rt,
						...H(p),
						onClick: () => ne(S.map((e) => e.id)),
						children: `立即重试全部（${S.length}）`
					}) : null,
					children: S.length ? /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "secondary",
						leadingIcon: Rt,
						disabled: !w.length,
						...H(p),
						onClick: () => ne(w),
						children: e
					}) }) : null
				}),
				y && !b.length && !x.length ? /* @__PURE__ */ (0, Q.jsx)("p", {
					className: `${L} text-body-regular text-notification-success-foreground`,
					children: "全部链接均可访问。"
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(l, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(t, {
				"data-link-check": "",
				leadingIcon: Lt,
				disabled: !h,
				...H(p),
				onClick: () => ne(),
				children: p ? "检查中" : y ? "重新检查" : "检查死链"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(u, {
					id: "link-manager-title",
					gap: "small",
					children: "链接管理"
				}),
				e.isError ? /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "error",
					title: "链接统计读取失败",
					children: W(e.error)
				}) : E ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, Q.jsx)(Wt, {
						label: "链接总数",
						value: Ut(E.total),
						note: `分布在 ${Ut(E.entities)} 个女优、厂牌与系列`
					}), Object.entries(E.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Wt, {
						label: v[e] || e,
						value: Ut(t)
					}, e))]
				}), te.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: "主要站点"
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: te.map(([e, t]) => /* @__PURE__ */ (0, Q.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, Q.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(Ot, { linkId: E.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, Q.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, Q.jsx)(me, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, Q.jsx)(o, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "tabular-nums",
									children: Ut(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: k
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: A
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var qt = (e, t) => `将整理「${e}」${t ? `的「${t}」及其子目录` : "上的文件名与目录"}，清理特殊符号与乱码，并按已填模板改名或移动。目标已存在的行会整行跳过。这一批可以从「回滚上一批」整批退回。`, Jt = "将把上一批整理动过的文件退回整理前的名字与位置，数据库路径跟着退回。退回后这一批不再出现在这里。", Yt = 8;
function Xt({ plan: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Yt).map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: be(e.current_path)
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: be(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Yt ? /* @__PURE__ */ (0, Q.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: "只列出前 8 行，完整计划在计划 CSV 里。"
	}) : null] });
}
function Zt({ toast: e, failure: n }) {
	let r = X({
		queryKey: E,
		queryFn: ({ signal: e }) => Re(e)
	}), i = r.data, a = i?.locations ?? [], [o, c] = (0, Z.useState)(""), d = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", p = i?.templates?.[d], [h, g] = (0, Z.useState)(null), _ = h?.location === d ? h : {
		location: d,
		file: p?.file ?? "",
		dir: p?.dir ?? ""
	}, v = (e) => {
		g({
			..._,
			...e
		}), P.reset();
	}, [ee, b] = (0, Z.useState)({
		location: "",
		path: ""
	}), x = ee.location === d ? ee.path : "", S = (0, Z.useRef)({
		location: d,
		path: x
	});
	S.current = {
		location: d,
		path: x
	};
	let [C, D] = (0, Z.useState)(null), O = (0, Z.useRef)(null), k = (0, Z.useRef)(null), A = (0, Z.useRef)(null), j = X({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => ze(_.file, _.dir, e),
		enabled: !!i
	}), [M, ie] = (0, Z.useState)("file"), N = (0, Z.useRef)(!1), ae = (0, Z.useRef)(null);
	(0, Z.useLayoutEffect)(() => {
		let e = ae.current;
		if (!e) return;
		ae.current = null;
		let t = (e.field === "file" ? O : k).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let oe = () => ({
		location: d,
		path: x.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim()
	}), P = St({
		mutationFn: rt,
		onError: (e) => {
			let t = /整理路径/.test(W(e)) ? "path" : s.test(W(e)) ? "dir" : "file";
			D(t), (t === "path" ? A : t === "dir" ? k : O).current?.focus();
		}
	}), F = St({
		mutationFn: ({ initial: e }) => tt(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (b({
				location: t.location,
				path: e.path
			}), D(null), P.reset(), A.current?.focus());
		}
	}), I = Y({
		queryKey: E,
		queryFn: ({ signal: e }) => Re(e),
		start: gt,
		jobOf: (e) => e,
		withJob: wt,
		onStarted: () => P.reset(),
		onFinish: (t) => {
			if (q.invalidateQueries({
				queryKey: E,
				exact: !0
			}), t.status !== "complete") return;
			let { text: r, failed: i } = $e(t);
			i ? n("整理文件", /* @__PURE__ */ Error(`${i} 行未能处理`)) : e(r.replace(/。$/, ""));
		}
	}), L = I.running || I.start.isPending, se = JSON.stringify(P.variables) === JSON.stringify(oe()), ce = se ? P.data : void 0, le = Number(ce?.counts?.change || 0), pe = y[d] || d, R = (e) => {
		v(e), D(null), P.reset();
	}, me = (e) => {
		let t = (M === "file" ? O : k).current, n = _[M], r = N.current ? t?.selectionStart ?? n.length : n.length, i = N.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		ae.current = {
			field: M,
			caret: r + a.length
		}, R({ [M]: n.slice(0, r) + a + n.slice(i) });
	}, he = () => {
		P.isPending || L || !d || (I.dismiss(), I.start.reset(), D(null), P.mutate(oe()));
	}, ge = () => {
		let e = P.variables;
		e && ce && le && U({
			title: "整理文件",
			body: qt(pe, e.path),
			confirmLabel: "整理文件",
			onConfirm: async () => {
				await I.start.mutateAsync({
					kind: "apply",
					request: e
				}), ct({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, _e = () => void U({
		title: "回滚上一批整理",
		body: Jt,
		confirmLabel: "回滚整理",
		onConfirm: () => I.start.mutateAsync({ kind: "rollback" })
	}), B = null, ve = !!le && !L && !I.outcome, V = I.job, ye = I.outcome;
	if (V?.status === "running") {
		let e = V.message || V.stage || "正在整理文件";
		B = /* @__PURE__ */ (0, Q.jsx)(z, {
			embedded: !0,
			label: e,
			value: Math.min(V.checked || 0, V.total || 0),
			total: V.total
		});
	} else if (ye?.status === "failed") B = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "文件整理未完成",
		children: ye.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (ye) {
		let { text: e, failed: t } = $e(ye);
		B = /* @__PURE__ */ (0, Q.jsx)(T, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "整理结果",
			children: e
		});
	} else I.start.isError ? B = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "整理失败",
		children: W(I.start.error)
	}) : P.isPending ? B = /* @__PURE__ */ (0, Q.jsx)(z, {
		embedded: !0,
		label: "正在核对整理计划"
	}) : P.isError && se ? B = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "整理预览失败",
		children: W(P.error)
	}) : ce && (B = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "neutral",
		title: "预览结果",
		children: nt(ce)
	}), le ? /* @__PURE__ */ (0, Q.jsx)(Xt, { plan: ce }) : null] }));
	return /* @__PURE__ */ (0, Q.jsxs)(l, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "secondary",
				...H(L),
				onClick: _e,
				children: "回滚上一批"
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(t, {
				variant: ve ? "secondary" : "primary",
				disabled: !a.length || L,
				...H(P.isPending),
				onClick: he,
				children: "预览"
			}),
			ve ? /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "primary",
				onClick: ge,
				children: "执行整理"
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(u, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: "整理"
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: re
			}),
			r.isError ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "error",
					title: "整理配置读取失败",
					children: W(r.error)
				})
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ (0, Q.jsx)(ue, {
							"aria-label": "整理哪个来源",
							prefix: "来源",
							className: "w-fit min-w-25",
							selectedKey: d || null,
							onSelectionChange: (e) => {
								e !== null && (c(String(e)), b({
									location: String(e),
									path: ""
								}), D(null), P.reset(), F.reset(), N.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, Q.jsxs)(de, {
								id: e.location,
								textValue: y[e.location] || e.location,
								children: [/* @__PURE__ */ (0, Q.jsx)(fe, { mark: w[e.location] || "database" }), y[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, Q.jsx)(m, {
								"aria-label": "整理路径",
								className: "min-w-0 flex-1",
								placeholder: "留空整理整个来源",
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: A,
								isInvalid: C === "path",
								onChange: (e) => {
									b({
										location: d,
										path: e
									}), D(null), P.reset(), F.reset();
								}
							}), /* @__PURE__ */ (0, Q.jsx)(f, {
								icon: At,
								"aria-label": "选择整理路径",
								...H(F.isPending),
								onClick: () => F.mutate({
									initial: x || a.find((e) => e.location === d)?.roots[0] || "",
									location: d,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: ne
					}),
					F.isError ? /* @__PURE__ */ (0, Q.jsxs)(T, {
						tone: "error",
						title: "目录选择失败",
						children: [W(F.error), "；也可直接输入路径。"]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(m, {
						label: "文件名模板",
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: O,
						spellCheck: "false",
						isInvalid: C === "file",
						onFocus: () => {
							ie("file"), N.current = !0;
						},
						onChange: (e) => R({ file: e })
					}),
					/* @__PURE__ */ (0, Q.jsx)(m, {
						label: "目录模板",
						placeholder: "留空表示原地改名",
						value: _.dir,
						ref: k,
						spellCheck: "false",
						isInvalid: C === "dir",
						onFocus: () => {
							ie("dir"), N.current = !0;
						},
						onChange: (e) => R({ dir: e })
					}),
					i?.presets?.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": "套用模板",
						children: [/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: "套用模板"
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((e) => /* @__PURE__ */ (0, Q.jsx)(t, {
								variant: "secondary",
								size: "small",
								title: e.example || e.label,
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									R({
										file: e.file,
										dir: e.dir
									}), N.current = !1;
								},
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "truncate",
									children: e.label
								})
							}, e.label))
						})]
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": j.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: ["路径示例：", /* @__PURE__ */ (0, Q.jsx)("code", {
							className: "wrap-anywhere",
							children: j.data?.example || j.data?.error || (j.isError ? W(j.error) : "正在预览…")
						})]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": "插入参数",
						children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, Q.jsx)("strong", {
									className: "text-caption-1-semibold text-text-primary",
									children: "插入参数"
								}),
								"（到",
								M === "file" ? "文件名模板" : "目录模板",
								"）"
							]
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => /* @__PURE__ */ (0, Q.jsx)(t, {
								variant: "ghost",
								size: "small",
								"aria-label": `${e.label} {${e.key}}`,
								onClick: () => me(e.key),
								children: /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ (0, Q.jsx)("code", { children: `{${e.key}}` }), /* @__PURE__ */ (0, Q.jsx)("span", {
										className: "text-text-secondary",
										children: e.label
									})]
								})
							}, e.key))
						})]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: te
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: B
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var Qt = J("play"), $t = () => q.invalidateQueries({
	queryKey: D,
	exact: !0
});
function en({ item: e, toast: n }) {
	let [r, i] = (0, Z.useState)(e.candidates[0]?.id ?? null), a = St({
		mutationFn: () => ye(e.id, Number(r)),
		onSuccess: () => {
			let t = e.candidates.find((e) => e.id === r);
			n(`已将「${e.name}」的个人记录转移到「${t?.name ?? "所选文件"}」`), $t();
		},
		onError: (e) => n(W(e))
	}), o = St({
		mutationFn: () => ot(e.id),
		onSuccess: (t) => {
			n(t.blocked.length ? `「${e.name}」的文件已恢复，记录未删除；下次扫描后恢复为在库状态` : `已删除「${e.name}」的作品记录及个人记录`), $t();
		}
	}), s = () => {
		U({
			title: "删除记录",
			body: `将删除「${e.name}」的作品记录${st(e.records) ? `及其个人记录（${st(e.records)}）` : ""}。此操作不可撤销。`,
			confirmLabel: "删除记录",
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "danger",
				size: "small",
				...H(c),
				onClick: s,
				children: "删除记录"
			}),
			e.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(ue, {
				"aria-label": `选择接收 ${e.name} 个人记录的文件`,
				prefix: "接收",
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(de, {
					id: e.id,
					textValue: xe(e),
					children: xe(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...H(c),
				onClick: () => a.mutate(),
				children: "转移记录"
			}) : null
		]
	});
}
function tn({ item: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, Q.jsx)(Qt, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ (0, Q.jsx)("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "truncate text-caption-1-regular text-text-secondary",
				children: [e.code, y[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function nn({ toast: e }) {
	let [n, r] = (0, Z.useState)([]), i = X({
		queryKey: D,
		queryFn: ({ signal: e }) => Be(e)
	}), a = i.data?.items ?? [], o = St({
		mutationFn: (e) => ot(e),
		onSuccess: (t) => {
			e(`已删除 ${t.purged} 条作品记录及其个人记录${t.blocked.length ? `；${t.blocked.length} 条文件已恢复，记录未删除` : ""}`), r([]), $t();
		}
	}), s = (e) => void U({
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
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(tn, { item: e })
		},
		{
			id: "records",
			label: "个人记录",
			width: 176,
			min: 144,
			value: (e) => st(e.records),
			render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: st(e.records) || "无"
			})
		},
		{
			id: "target",
			label: "操作",
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ (0, Q.jsx)(en, {
				item: t,
				toast: e
			})
		}
	];
	return /* @__PURE__ */ (0, Q.jsx)("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: i.isError ? /* @__PURE__ */ (0, Q.jsxs)(l, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ (0, Q.jsx)(u, {
				id: "orphan-records-title",
				children: "文件已丢失的记录"
			}), /* @__PURE__ */ (0, Q.jsx)(T, {
				tone: "error",
				title: "读取文件已丢失的记录失败",
				children: W(i.error)
			})]
		}) : /* @__PURE__ */ (0, Q.jsx)(Dt, {
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
			actions: (e) => /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "danger",
				size: "small",
				disabled: !e.length,
				...H(o.isPending),
				onClick: () => s(e),
				children: `删除所选记录（${e.length}）`
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function rn({ person: e }) {
	let t = Te("performer", e.k, e.entity_id), n = Qe("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, Q.jsxs)("a", {
		href: De("performer", e.k, e.entity_id),
		title: n || t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			"aria-hidden": !0,
			className: Ce("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", kt),
			dangerouslySetInnerHTML: { __html: `<span>${Oe(qe(t))}</span>` + Ee({
				kind: "performer",
				id: e.entity_id,
				hasImage: e.has_image,
				version: e.image_version,
				focus: e.avatar_focus,
				thumb: !0
			}) }
		}), /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "min-w-0 wrap-anywhere",
			children: t
		})]
	});
}
function an({ toast: n }) {
	xt();
	let r = X({
		queryKey: k,
		queryFn: ({ signal: e }) => ke(e)
	}), [i, a] = (0, Z.useState)([]), [o, s] = (0, Z.useState)(""), [c, d] = (0, Z.useState)(!1), [f, m] = (0, Z.useState)(null), [h, g] = (0, Z.useState)(""), _ = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => () => _.current?.abort(), []);
	let v = (0, Z.useMemo)(() => [
		{
			id: "name",
			label: "女优",
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(rn, { person: e })
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
			render: (e) => G(e.bytes)
		}
	], []), ee = o.toLocaleLowerCase(), y = (r.data?.items || []).filter((e) => !ee || [
		e.k,
		Te("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), b = async (e, t) => {
		if (c) return;
		d(!0), g("");
		let r = new AbortController();
		_.current = r;
		try {
			let i = await Ae(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				n("所选女优没有可删除的影片");
				return;
			}
			let a = i.performers.map((e) => Te("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await U({
				title: "删除所选女优的全部影片",
				body: `将永久删除 ${a.slice(0, 5).join("、")}${a.length > 5 ? `等 ${a.length} 位女优` : ""} 关联的 ${i.total} 个影片文件（登记大小 ${G(i.bytes)}）。范围包含全部来源和回收站，不受当前搜索、排序或分页影响。文件、影片资料和观看记录将永久删除，无法恢复；女优档案和照片保留。` + (i.shared ? `其中 ${i.shared} 个文件还关联了未勾选的女优，删除后也会从她们的作品中消失。` : "") + `涉及：${o.slice(0, 5).join("、")}${o.length > 5 ? `等 ${o.length} 部作品` : ""}。`,
				confirmLabel: "永久删除影片",
				danger: !0,
				onConfirm: () => we(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			m(c), t(), await Promise.all([q.invalidateQueries({
				queryKey: k,
				exact: !0
			}), q.invalidateQueries({
				queryKey: R,
				exact: !0
			})]), n(`已永久删除 ${c.purged} 个影片文件${c.blocked.length ? `，${c.blocked.length} 个未删除` : ""}`);
		} catch (e) {
			r.signal.aborted || g(W(e));
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
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": "批量删除",
		children: [
			r.isPending || r.isError ? /* @__PURE__ */ (0, Q.jsxs)(l, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ (0, Q.jsx)(u, {
					id: "batch-delete-title",
					children: "批量删除"
				}), r.isError ? /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "error",
					title: "读取女优列表失败",
					action: /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "secondary",
						size: "small",
						onClick: () => void r.refetch(),
						children: "重试"
					}),
					children: W(r.error)
				}) : /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: "正在读取女优列表…"
				})]
			}) : /* @__PURE__ */ (0, Q.jsx)(Dt, {
				label: "女优影片",
				title: "批量删除",
				titleId: "batch-delete-title",
				unit: "位女优",
				description: e,
				items: y,
				columns: v,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => Te("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ (0, Q.jsx)(p, {
					label: "搜索女优姓名或别名",
					value: o,
					onQuery: (e) => {
						s(e), a([]);
					}
				}),
				actions: (e, n) => /* @__PURE__ */ (0, Q.jsx)(t, {
					variant: "danger",
					size: "small",
					...H(c),
					onClick: () => void b(e, n),
					children: "删除所选女优影片"
				})
			}),
			h ? /* @__PURE__ */ (0, Q.jsx)(T, {
				tone: "error",
				title: "未能读取删除清单",
				children: h
			}) : null,
			f ? /* @__PURE__ */ (0, Q.jsx)(T, {
				tone: x.length ? "warning" : "info",
				title: `已永久删除 ${f.purged} 个影片文件`,
				extra: x.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: x.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("p", { children: [
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
var on = J("git-compare"), sn = J("rotate-cw"), cn = "暂时无法读取进度，正在重新连接…", ln = "清理失效条目", un = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", $ = (e) => Number(e || 0).toLocaleString();
function dn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("div", {
		className: un,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("article", {
			className: K(),
			children: [/* @__PURE__ */ (0, Q.jsx)(j, {
				label: ce[e.location] || "媒体来源",
				mark: /* @__PURE__ */ (0, Q.jsx)(fe, { mark: w[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, Q.jsx)(jt, {
					online: e.online,
					children: e.online ? "可访问" : "离线"
				}),
				figure: e.online ? `${$(e.missing)} 项` : "—",
				meta: e.online ? pt(e) : `${pt(e)} · 本次已跳过`,
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsxs)(pe, {
					tone: "warning",
					children: [$(e.unreadable), " 个目录未读取"]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: un,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, Q.jsx)(j, {
					label: "待永久删除",
					figure: `${$(at(e))} 项`,
					meta: "文件已不在盘上，含回收站"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, Q.jsx)(j, {
					label: "将标为已消失",
					figure: `${$(e.vanish)} 项`,
					meta: "带个人记录，记录留着"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, Q.jsx)(j, {
					label: "空文件夹",
					figure: `${$(e.empty)} 个`,
					meta: "保留来源根目录"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, Q.jsx)(j, {
					label: "可清理的缓存",
					figure: `${$(n.files)} 个`,
					meta: n.files ? G(n.bytes) : ""
				})
			})
		]
	})] });
}
function fn({ toast: e }) {
	let n = Y({
		queryKey: oe,
		queryFn: ({ signal: e }) => Ue(e),
		start: _t,
		onFinish: (t) => {
			if (q.invalidateQueries({
				queryKey: R,
				exact: !0
			}), q.invalidateQueries({
				queryKey: P,
				exact: !0
			}), t.status !== "complete") return;
			let { done: n, left: r } = B(t);
			r ? e(`已完成 ${$(n)} 项，${$(r)} 项没有处理`, { warning: !0 }) : e("已清理失效条目");
		}
	}), r = Y({
		queryKey: P,
		queryFn: ({ signal: e }) => We(e),
		start: vt,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = !!r.job && !!n.job, c = i?.status === "complete" || i?.status === "failed", d = a ? "扫描中" : c ? "重新扫描" : "检查文件", f = (e) => void U({
		title: ln,
		body: _e(e),
		confirmLabel: ln,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), p = n.outcome, m = (e) => {
		let t = B(e).left > 0;
		return /* @__PURE__ */ (0, Q.jsx)(T, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "清理结果",
			children: V(e, G)
		});
	}, h = null, g = null;
	if (p?.status === "failed") g = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "资源清理未完成",
		children: p.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (p) g = m(p);
	else if (n.running) h = /* @__PURE__ */ (0, Q.jsx)(z, {
		embedded: !0,
		label: n.job?.message || "正在复核并清理失效条目"
	});
	else if (r.start.isError) g = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "扫描失败",
		children: W(r.start.error)
	});
	else if (r.query.isError && i) g = /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "neutral",
		title: "任务状态",
		children: cn
	});
	else if (i?.status === "running") {
		let e = ft(i);
		h = /* @__PURE__ */ (0, Q.jsx)(z, {
			embedded: !0,
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (g = /* @__PURE__ */ (0, Q.jsx)(dn, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ (0, Q.jsx)(dn, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "扫描失败",
		children: i.error || "后台扫描失败"
	})] });
	else if (i?.status === "complete" && i.applied) g = n.job?.status === "complete" ? m(n.job) : /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "neutral",
		title: "清理结果",
		children: "这次检查的结果已经清理，重新扫描可再核对。"
	});
	else if (i?.status === "complete") {
		let e = Je(i);
		g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(dn, { scan: i }), e ? /* @__PURE__ */ (0, Q.jsx)(T, {
			tone: "neutral",
			title: "清理内容",
			action: /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "danger",
				disabled: !s,
				...H(o),
				onClick: () => {
					s && f(i);
				},
				children: o ? "正在复核并清理…" : ln
			}),
			children: ve(i)
		}) : /* @__PURE__ */ (0, Q.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: "已检查可访问的来源，没有待清理的记录、空文件夹或缓存。"
		})] });
	}
	return n.start.isError && !p && (g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [g, /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "清理失败",
		children: W(n.start.error)
	})] })), /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(l, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(t, {
				"data-resource-scan": !0,
				leadingIcon: c && !a ? sn : on,
				disabled: !s,
				...H(a),
				onClick: () => {
					s && !a && r.start.mutate();
				},
				children: d
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(u, {
					id: "resource-sync-title",
					gap: "small",
					children: "资源同步"
				}),
				r.query.isPending || n.query.isPending ? /* @__PURE__ */ (0, Q.jsx)("div", {
					role: "status",
					"aria-label": "正在读取资源同步状态",
					"data-skeleton": "",
					className: "skeleton-sheen h-6 rounded-md"
				}) : null,
				!r.job && r.query.isError ? /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "error",
					children: "检查状态未取得"
				}) : null,
				!n.job && n.query.isError ? /* @__PURE__ */ (0, Q.jsx)(T, {
					tone: "error",
					children: "清理状态未取得"
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: F
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: h
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: g
		})]
	});
}
// src/react/data-cleanup/data-cleanup-tool-page.tsx
function pn({ toast: e }) {
	let t = X({
		queryKey: C,
		queryFn: ({ signal: e }) => Le(e)
	});
	return t.isError ? /* @__PURE__ */ (0, Q.jsx)(T, {
		tone: "error",
		title: "读取媒体来源失败",
		children: W(t.error)
	}) : t.isPending ? /* @__PURE__ */ (0, Q.jsx)("p", {
		role: "status",
		children: "正在读取媒体来源…"
	}) : Ye(t.data) ? /* @__PURE__ */ (0, Q.jsx)(fn, { toast: e }) : /* @__PURE__ */ (0, Q.jsxs)(l, {
		layout: "stack",
		label: "资源同步",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(u, { children: "资源同步" }),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: "尚未配置可核对的媒体目录。"
			}),
			/* @__PURE__ */ (0, Q.jsx)("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: "配置媒体库"
			})
		]
	});
}
function mn({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ (0, Q.jsx)(Zt, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ (0, Q.jsx)(pn, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ (0, Q.jsx)(nn, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ (0, Q.jsx)(It, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ (0, Q.jsx)(Kt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ (0, Q.jsx)(an, { toast: r });
	}
	return /* @__PURE__ */ (0, Q.jsx)(Tt, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function hn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: "读取失败",
		state: "error"
	} : {
		figure: "正在读取…",
		state: "loading"
	} : t(e.data);
}
function gn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, Q.jsx)("button", {
		type: "button",
		className: K({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, Q.jsx)(j, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function _n({ tool: e, navigate: t }) {
	let n = J(e.icon);
	return /* @__PURE__ */ (0, Q.jsx)(Nt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var vn = J("square-check-big"), yn = J("sparkles"), bn = J("file-stack"), xn = J("file-archive"), Sn = J("trash"), Cn = () => {
	for (let e of [
		se,
		ie,
		c,
		h
	]) q.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function wn({ toast: e, open: t, navigate: n }) {
	let o = X({
		queryKey: se,
		queryFn: ({ signal: e }) => Ge(e)
	}), s = X({
		queryKey: ie,
		queryFn: ({ signal: e }) => Ve(e)
	}), l = X({
		queryKey: c,
		queryFn: ({ signal: e }) => je(e)
	}), u = X({
		queryKey: h,
		queryFn: ({ signal: e }) => Me(e)
	}), d = X({
		queryKey: R,
		queryFn: ({ signal: e }) => Ke(e)
	});
	return (0, Z.useEffect)(() => {
		let e = i[location.hash];
		e && et.replace(e + location.search);
	}, []), /* @__PURE__ */ (0, Q.jsxs)(Tt, { children: [
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(le, {
				id: "cleanup-pending",
				children: "待处理事项"
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: A,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(gn, {
						section: "review",
						label: "人工复核",
						icon: vn,
						open: t,
						value: hn(o, dt)
					}),
					/* @__PURE__ */ (0, Q.jsx)(gn, {
						section: "duplicates",
						label: "重复文件",
						icon: bn,
						open: t,
						value: hn(l, (e) => Number(e.total || 0) ? {
							figure: `${Number(e.total).toLocaleString()} 组 · ${Number(e.files || 0).toLocaleString()} 个文件`,
							meta: `可回收 ${G(e.reclaimable || 0)}`
						} : { figure: "没有重复内容" })
					}),
					/* @__PURE__ */ (0, Q.jsx)(gn, {
						section: "ads",
						label: "垃圾文件",
						icon: xn,
						open: t,
						value: hn(u, (e) => ({
							figure: `${Number(e.pending_total || 0).toLocaleString()} 个待判断`,
							meta: Xe(e)
						}))
					}),
					/* @__PURE__ */ (0, Q.jsx)(gn, {
						section: "quality",
						label: "高清版",
						icon: yn,
						open: t,
						value: hn(s, (e) => ({ figure: `${Number(e.total || 0).toLocaleString()} 个待升级` }))
					}),
					/* @__PURE__ */ (0, Q.jsx)(gn, {
						section: "trash",
						label: "回收站",
						icon: Sn,
						open: t,
						value: hn(d, (e) => ({
							figure: `${Number(e.total || 0).toLocaleString()} 项在回收站`,
							meta: e.total ? `占用 ${G(e.bytes || 0)}` : "查看和还原已移入回收站的内容"
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ (0, Q.jsx)(b, {
				toast: (t) => e(t),
				monitor: !0,
				onComplete: Cn
			})
		}),
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(le, {
				id: "cleanup-maintenance",
				children: "整理与维护"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, Q.jsx)(_n, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(le, {
				id: "cleanup-deletion",
				children: "清理与删除"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, Q.jsx)(_n, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { wn as DataCleanupPage, mn as DataCleanupToolPage };

//# debugId=94ef0a6a-8046-4eb3-9328-c6a927e28652