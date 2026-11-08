(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7beaff67-4391-4d66-9ab4-77ba5403633f", e._sentryDebugIdIdentifier = "sentry-dbid-7beaff67-4391-4d66-9ab4-77ba5403633f");
	} catch {}
})();
import { BATCH_DELETE_TEXT as e, Button as t, CLEANUP_ENTRY as n, CLEANUP_ENTRY_GRID as r, CLEANUP_HASH_REDIRECTS as i, CLEANUP_TOOLS as a, Chip as o, DIRECTORY_TEMPLATE_ERROR as s, DUPLICATES_KEY as c, Fieldset as l, FieldsetTitle as u, IDLE_REPAIR as d, IconButton as f, IndexSearch as p, Input as m, JUNK_KEY as h, LINKS_KEY as g, LINK_CHECK_KEY as _, LINK_KINDS as v, LINK_PRUNE_KEY as ee, LOC as y, LibraryProcessingCard as b, MEDIA_REPAIR_KEY as x, MEDIA_REPAIR_URL as S, MEDIA_SOURCES_KEY as C, MEDIA_SOURCE_ICONS as te, Note as w, ORGANIZE_KEY as T, ORGANIZE_PARAMETER_HINT as ne, ORGANIZE_SCOPE_HINT as re, ORGANIZE_TEXT as ie, ORPHAN_RECORDS_KEY as E, ORPHAN_RECORDS_TEXT as D, PERFORMER_DELETE_KEY as O, PLAIN_STAT_STRIP as k, PlainStat as A, Progress as j, QUALITY_GOALS_KEY as ae, REPAIR_CARD_TEXT as M, REPAIR_LIBRARIES_KEY as oe, RESOURCE_APPLY_KEY as se, RESOURCE_SCAN_KEY as N, RESOURCE_SYNC_TEXT as P, RESULT_PANEL as F, RESULT_SECTION as I, REVIEW_COUNTS_KEY as ce, SOURCE_LABELS as L, SectionHeading as R, Select as le, SelectItem as ue, SourceMark as de, StatusLabel as fe, TRASH_KEY as z, TaskProgress as B, Wt as pe, __toESM as me, apiSend as he, applyConfirmText as ge, applyLeftovers as V, applyPlanText as _e, applyText as H, attachOrphan as ve, baseName as ye, busyProps as U, candidateText as be, checkLine as xe, confirmModal as W, cx as Se, deletePerformerVideos as Ce, entityDisplayName as we, entityFaceImg as Te, entityPath as Ee, errorMessage as G, esc as De, fetchDeletePerformers as Oe, fetchDeletePlan as ke, fetchDuplicates as Ae, fetchJunkSummary as je, fetchLinkCheck as Me, fetchLinkPrune as Ne, fetchLinkStats as Pe, fetchMediaRepair as Fe, fetchMediaSources as Ie, fetchOrganize as Le, fetchOrganizeExample as Re, fetchOrphanRecords as ze, fetchQualityGoals as Be, fetchRepairLibraries as Ve, fetchResourceApply as He, fetchResourceScan as Ue, fetchReviewCounts as We, fetchTrashSummary as Ge, firstGrapheme as Ke, fmtSize as K, hasChanges as qe, hasResourceRoots as Je, junkBreakdown as Ye, missingToolText as Xe, organizeOutcome as Ze, peachHistory$1 as Qe, pickOrganizeFolder as $e, plainStatClass as q, planSummary as et, previewOrganize as tt, pruneText as nt, purgeCount as rt, purgeOrphan as it, queryClient as J, recordsText as at, rememberTemplates as ot, require_jsx_runtime as st, require_react as ct, reviewSummary as lt, scanLine as ut, sourceMeta as dt, spriteGlyph as Y, startLinkCheck as ft, startLinkPrune as pt, startOrganize as mt, startResourceApply as ht, startResourceScan as gt, statusLine as _t, useAction as vt, useBackgroundJob as yt, useEntityNames as bt, useMutation as xt, useOrderedLibraries as St, useQuery as X, withOrganizeJob as Ct } from "./peach-app.js";
import { Page as wt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as Tt } from "./peach-app.error-excerpt-B8v2xEIP.js";
import { DataTable as Et } from "./peach-app.data-table-BRJ5A5Cl.js";
import { SiteMark as Dt } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as Ot } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as kt } from "./peach-app.folder-rows-BWBfTyUD.js";
import { ConnectionStatus as At } from "./peach-app.connection-status-DI6kgn3i.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Z = /* @__PURE__ */ me(ct(), 1), Q = st(), jt = Y("chevron-right");
function Mt({ label: e, icon: t, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
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
						className: Se(n.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ (0, Q.jsx)("span", {
						className: n.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(jt, {
				"aria-hidden": !0,
				className: n.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Nt = (e) => te[e] || e, Pt = (e) => J.setQueryData(x, e);
function Ft({ toast: e = () => {} }) {
	let n = yt({
		queryKey: x,
		queryFn: ({ signal: e }) => Fe(e),
		start: (e) => he(S, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? `已修复 ${t.repaired.toLocaleString()} 部视频` : "已检查媒体库，没有需要修复的视频");
		}
	}), r = X({
		queryKey: oe,
		queryFn: ({ signal: e }) => Ve(e)
	}), [i, a] = (0, Z.useState)(""), o = vt(), s = n.job ?? d, c = St(r.data ?? [], (e) => e.id), f = s.status === "running", p = c.find((e) => e.id === (f ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], m = () => {
		p && W({
			title: `修复媒体库「${p.name}」`,
			body: "缺时间戳表的片子另存一份修好的头，原文件不动；缺索引的片子重建后替换原文件，坏原件改名成同目录的隐藏文件（.文件名.peach-original）留着。" + (p.metered ? "这个库在计费来源上，每修一部都要把片子完整拉一遍。" : ""),
			confirmLabel: "修复媒体库",
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => he(S, { stop: !0 }, "POST", e), Pt), g = n.outcome, _ = _t(f ? s : g ?? d), v = o.error || g?.error || (n.query.error ? "读不到媒体修复的状态" : "");
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsx)(l, {
			layout: "split",
			label: "媒体修复",
			footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(le, {
				"aria-label": "媒体库",
				prefix: "媒体库",
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !c.length,
				"aria-busy": r.isPending || void 0,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ (0, Q.jsxs)(ue, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ (0, Q.jsx)(de, { mark: Nt(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ (0, Q.jsx)(t, {
				onClick: h,
				...U(o.busy === "stop"),
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
						children: M
					}),
					f && s.total ? /* @__PURE__ */ (0, Q.jsx)(j, {
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
				g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "warning",
					title: "缺少 untrunc",
					action: /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "ghost",
						size: "small",
						onClick: n.dismiss,
						children: "关闭提示"
					}),
					children: Xe(g)
				}) : null,
				r.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					children: "媒体库列表未取得"
				}) : null,
				v ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					children: v
				}) : null
			]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function It({ className: e }) {
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
var Lt = Y("rotate-cw"), Rt = "站点返回 404 或 410，确认这个地址不存在。", zt = "站点拒绝程序访问或一次临时故障都会落在这里。链接保留，可勾选后单独重试。", Bt = "删除前会逐条重验一次；此操作不可撤销。", Vt = "暂时无法读取进度，正在重新连接…", Ht = (e) => Number(e || 0).toLocaleString();
function Ut({ label: e, value: t, note: n }) {
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
function Wt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	return t.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
		className: I,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, Q.jsx)(Et, {
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
						href: e.entity_id && e.entity_kind ? Ee(e.entity_kind, e.entity, e.entity_id) : void 0,
						"data-link-identity": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("span", {
							"data-link-avatar": "",
							className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${Ot}`,
							"aria-hidden": !0,
							dangerouslySetInnerHTML: { __html: `<span>${De(Ke(e.entity))}</span>` + Te({
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
						children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, Q.jsx)(fe, {
							tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
							"data-link-code": "",
							children: e.note.trim()
						}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, Q.jsx)(fe, {
								tone: s ? "error" : "warning",
								children: s ? "地址已失效" : "未取得结论"
							}), /* @__PURE__ */ (0, Q.jsx)(Tt, {
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
							/* @__PURE__ */ (0, Q.jsx)(Dt, { linkId: e.id }),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								"data-middle-truncate": !0,
								className: "min-w-0 truncate",
								children: e.url
							}),
							/* @__PURE__ */ (0, Q.jsx)(pe, {
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
function Gt() {
	let e = X({
		queryKey: g,
		queryFn: ({ signal: e }) => Pe(e)
	}), [n, r] = (0, Z.useState)([]), [i, a] = (0, Z.useState)([]), s = yt({
		queryKey: ee,
		queryFn: ({ signal: e }) => Ne(e),
		start: pt,
		onFinish: () => {
			J.invalidateQueries({
				queryKey: g,
				exact: !0
			}), J.invalidateQueries({
				queryKey: _,
				exact: !0
			});
		}
	}), c = yt({
		queryKey: _,
		queryFn: ({ signal: e }) => Me(e),
		start: ft,
		onStarted: () => {
			s.dismiss(), r([]), a([]);
		}
	}), d = c.job, f = d?.check_id ?? "";
	(0, Z.useEffect)(() => {
		r([]), a([]);
	}, [f]);
	let p = c.running || c.start.isPending, m = s.running || s.start.isPending, h = !!c.job && !!s.job, y = d?.status === "complete", b = d?.gone ?? [], x = d?.unclear ?? [], S = y ? x : [], C = b.filter((e) => i.includes(e.id)).map((e) => e.id), te = S.filter((e) => n.includes(e.id)).map((e) => e.id), T = e.data, ne = (T?.top_hosts ?? []).slice(0, 3), re = (e) => {
		!h || p || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, ie = (e) => {
		h && !m && b.length && W({
			title: "删除失效链接",
			body: `将删除 ${e?.length ?? b.length} 条失效链接。删除前会再次检查，删除后无法恢复。`,
			confirmLabel: "删除失效链接",
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, E = s.outcome, D = c.start.error ?? s.start.error, O = null, k = null;
	if (E?.status === "failed") k = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "链接清理未完成",
		children: E.error || "请查看任务记录，核对已处理的链接。"
	});
	else if (E && !b.length && !x.length) k = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "success",
		title: "完成",
		children: nt(E)
	});
	else if (D) k = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "检查失败",
		children: G(D)
	});
	else if (c.query.isError && d) k = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "neutral",
		title: "任务状态",
		children: Vt
	});
	else if (d?.status === "failed") k = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "检查失败",
		children: d.error || "检查失败"
	});
	else if (d && d.status !== "idle") {
		O = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ (0, Q.jsx)(B, {
			embedded: !0,
			label: xe(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ (0, Q.jsx)(B, {
			embedded: !0,
			label: s.job?.message || "正在重验并删除失效链接",
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let e = `立即重试所选（${te.length}）`;
		k = y || b.length || x.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: F,
			children: [
				E?.status === "complete" ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "success",
					title: "完成",
					children: nt(E)
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(Wt, {
					title: "地址已失效",
					items: b,
					hint: Rt,
					picked: i,
					onPick: a,
					confirmed: !0,
					footer: y && b.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: Bt
					}), /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "danger",
						...U(m),
						onClick: () => ie(),
						children: `删除 ${b.length} 条失效链接`
					})] }) : null,
					children: /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "danger",
						size: "small",
						disabled: !y || !C.length,
						...U(m),
						onClick: () => ie(C),
						children: `删除所选（${C.length}）`
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(Wt, {
					title: "本次未访问成功",
					items: x,
					hint: zt,
					picked: n,
					onPick: r,
					footer: S.length ? /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "primary",
						leadingIcon: Lt,
						...U(p),
						onClick: () => re(S.map((e) => e.id)),
						children: `立即重试全部（${S.length}）`
					}) : null,
					children: S.length ? /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "secondary",
						leadingIcon: Lt,
						disabled: !te.length,
						...U(p),
						onClick: () => re(te),
						children: e
					}) }) : null
				}),
				y && !b.length && !x.length ? /* @__PURE__ */ (0, Q.jsx)("p", {
					className: `${I} text-body-regular text-notification-success-foreground`,
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
				leadingIcon: It,
				disabled: !h,
				...U(p),
				onClick: () => re(),
				children: p ? "检查中" : y ? "重新检查" : "检查死链"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(u, {
					id: "link-manager-title",
					gap: "small",
					children: "链接管理"
				}),
				e.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					title: "链接统计读取失败",
					children: G(e.error)
				}) : T ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, Q.jsx)(Ut, {
						label: "链接总数",
						value: Ht(T.total),
						note: `分布在 ${Ht(T.entities)} 个女优、厂牌与系列`
					}), Object.entries(T.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ut, {
						label: v[e] || e,
						value: Ht(t)
					}, e))]
				}), ne.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: "主要站点"
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: ne.map(([e, t]) => /* @__PURE__ */ (0, Q.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, Q.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(Dt, { linkId: T.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, Q.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, Q.jsx)(pe, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, Q.jsx)(o, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "tabular-nums",
									children: Ht(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: O
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: k
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Kt = (e, t) => `将整理「${e}」${t ? `的「${t}」及其子目录` : "上的文件名与目录"}，清理特殊符号与乱码，并按已填模板改名或移动。目标已存在的行会整行跳过。这一批可以从「回滚上一批」整批退回。`, qt = "将把上一批整理动过的文件退回整理前的名字与位置，数据库路径跟着退回。退回后这一批不再出现在这里。", Jt = 8;
function Yt({ plan: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Jt).map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: ye(e.current_path)
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: ye(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Jt ? /* @__PURE__ */ (0, Q.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: "只列出前 8 行，完整计划在计划 CSV 里。"
	}) : null] });
}
function Xt({ toast: e, failure: n }) {
	let r = X({
		queryKey: T,
		queryFn: ({ signal: e }) => Le(e)
	}), i = r.data, a = i?.locations ?? [], [o, c] = (0, Z.useState)(""), d = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", p = i?.templates?.[d], [h, g] = (0, Z.useState)(null), _ = h?.location === d ? h : {
		location: d,
		file: p?.file ?? "",
		dir: p?.dir ?? ""
	}, v = (e) => {
		g({
			..._,
			...e
		}), N.reset();
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
	let [C, E] = (0, Z.useState)(null), D = (0, Z.useRef)(null), O = (0, Z.useRef)(null), k = (0, Z.useRef)(null), A = X({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => Re(_.file, _.dir, e),
		enabled: !!i
	}), [j, ae] = (0, Z.useState)("file"), M = (0, Z.useRef)(!1), oe = (0, Z.useRef)(null);
	(0, Z.useLayoutEffect)(() => {
		let e = oe.current;
		if (!e) return;
		oe.current = null;
		let t = (e.field === "file" ? D : O).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let se = () => ({
		location: d,
		path: x.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim()
	}), N = xt({
		mutationFn: tt,
		onError: (e) => {
			let t = /整理路径/.test(G(e)) ? "path" : s.test(G(e)) ? "dir" : "file";
			E(t), (t === "path" ? k : t === "dir" ? O : D).current?.focus();
		}
	}), P = xt({
		mutationFn: ({ initial: e }) => $e(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (b({
				location: t.location,
				path: e.path
			}), E(null), N.reset(), k.current?.focus());
		}
	}), F = yt({
		queryKey: T,
		queryFn: ({ signal: e }) => Le(e),
		start: mt,
		jobOf: (e) => e,
		withJob: Ct,
		onStarted: () => N.reset(),
		onFinish: (t) => {
			if (J.invalidateQueries({
				queryKey: T,
				exact: !0
			}), t.status !== "complete") return;
			let { text: r, failed: i } = Ze(t);
			i ? n("整理文件", /* @__PURE__ */ Error(`${i} 行未能处理`)) : e(r.replace(/。$/, ""));
		}
	}), I = F.running || F.start.isPending, ce = JSON.stringify(N.variables) === JSON.stringify(se()), L = ce ? N.data : void 0, R = Number(L?.counts?.change || 0), fe = y[d] || d, z = (e) => {
		v(e), E(null), N.reset();
	}, pe = (e) => {
		let t = (j === "file" ? D : O).current, n = _[j], r = M.current ? t?.selectionStart ?? n.length : n.length, i = M.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		oe.current = {
			field: j,
			caret: r + a.length
		}, z({ [j]: n.slice(0, r) + a + n.slice(i) });
	}, me = () => {
		N.isPending || I || !d || (F.dismiss(), F.start.reset(), E(null), N.mutate(se()));
	}, he = () => {
		let e = N.variables;
		e && L && R && W({
			title: "整理文件",
			body: Kt(fe, e.path),
			confirmLabel: "整理文件",
			onConfirm: async () => {
				await F.start.mutateAsync({
					kind: "apply",
					request: e
				}), ot({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, ge = () => void W({
		title: "回滚上一批整理",
		body: qt,
		confirmLabel: "回滚整理",
		onConfirm: () => F.start.mutateAsync({ kind: "rollback" })
	}), V = null, _e = !!R && !I && !F.outcome, H = F.job, ve = F.outcome;
	if (H?.status === "running") {
		let e = H.message || H.stage || "正在整理文件";
		V = /* @__PURE__ */ (0, Q.jsx)(B, {
			embedded: !0,
			label: e,
			value: Math.min(H.checked || 0, H.total || 0),
			total: H.total
		});
	} else if (ve?.status === "failed") V = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "文件整理未完成",
		children: ve.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (ve) {
		let { text: e, failed: t } = Ze(ve);
		V = /* @__PURE__ */ (0, Q.jsx)(w, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "整理结果",
			children: e
		});
	} else F.start.isError ? V = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "整理失败",
		children: G(F.start.error)
	}) : N.isPending ? V = /* @__PURE__ */ (0, Q.jsx)(B, {
		embedded: !0,
		label: "正在核对整理计划"
	}) : N.isError && ce ? V = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "整理预览失败",
		children: G(N.error)
	}) : L && (V = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "neutral",
		title: "预览结果",
		children: et(L)
	}), R ? /* @__PURE__ */ (0, Q.jsx)(Yt, { plan: L }) : null] }));
	return /* @__PURE__ */ (0, Q.jsxs)(l, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "secondary",
				...U(I),
				onClick: ge,
				children: "回滚上一批"
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(t, {
				variant: _e ? "secondary" : "primary",
				disabled: !a.length || I,
				...U(N.isPending),
				onClick: me,
				children: "预览"
			}),
			_e ? /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "primary",
				onClick: he,
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
				children: ie
			}),
			r.isError ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					title: "整理配置读取失败",
					children: G(r.error)
				})
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ (0, Q.jsx)(le, {
							"aria-label": "整理哪个来源",
							prefix: "来源",
							className: "w-fit min-w-25",
							selectedKey: d || null,
							onSelectionChange: (e) => {
								e !== null && (c(String(e)), b({
									location: String(e),
									path: ""
								}), E(null), N.reset(), P.reset(), M.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, Q.jsxs)(ue, {
								id: e.location,
								textValue: y[e.location] || e.location,
								children: [/* @__PURE__ */ (0, Q.jsx)(de, { mark: te[e.location] || "database" }), y[e.location] || e.location]
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
								ref: k,
								isInvalid: C === "path",
								onChange: (e) => {
									b({
										location: d,
										path: e
									}), E(null), N.reset(), P.reset();
								}
							}), /* @__PURE__ */ (0, Q.jsx)(f, {
								icon: kt,
								"aria-label": "选择整理路径",
								...U(P.isPending),
								onClick: () => P.mutate({
									initial: x || a.find((e) => e.location === d)?.roots[0] || "",
									location: d,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: re
					}),
					P.isError ? /* @__PURE__ */ (0, Q.jsxs)(w, {
						tone: "error",
						title: "目录选择失败",
						children: [G(P.error), "；也可直接输入路径。"]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(m, {
						label: "文件名模板",
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: D,
						spellCheck: "false",
						isInvalid: C === "file",
						onFocus: () => {
							ae("file"), M.current = !0;
						},
						onChange: (e) => z({ file: e })
					}),
					/* @__PURE__ */ (0, Q.jsx)(m, {
						label: "目录模板",
						placeholder: "留空表示原地改名",
						value: _.dir,
						ref: O,
						spellCheck: "false",
						isInvalid: C === "dir",
						onFocus: () => {
							ae("dir"), M.current = !0;
						},
						onChange: (e) => z({ dir: e })
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
									z({
										file: e.file,
										dir: e.dir
									}), M.current = !1;
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
						"aria-busy": A.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: ["路径示例：", /* @__PURE__ */ (0, Q.jsx)("code", {
							className: "wrap-anywhere",
							children: A.data?.example || A.data?.error || (A.isError ? G(A.error) : "正在预览…")
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
								j === "file" ? "文件名模板" : "目录模板",
								"）"
							]
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => /* @__PURE__ */ (0, Q.jsx)(t, {
								variant: "ghost",
								size: "small",
								"aria-label": `${e.label} {${e.key}}`,
								onClick: () => pe(e.key),
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
						children: ne
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: V
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var Zt = Y("play"), Qt = () => J.invalidateQueries({
	queryKey: E,
	exact: !0
});
function $t({ item: e, toast: n }) {
	let [r, i] = (0, Z.useState)(e.candidates[0]?.id ?? null), a = xt({
		mutationFn: () => ve(e.id, Number(r)),
		onSuccess: () => {
			let t = e.candidates.find((e) => e.id === r);
			n(`已将「${e.name}」的个人记录转移到「${t?.name ?? "所选文件"}」`), Qt();
		},
		onError: (e) => n(G(e))
	}), o = xt({
		mutationFn: () => it(e.id),
		onSuccess: (t) => {
			n(t.blocked.length ? `「${e.name}」的文件已恢复，记录未删除；下次扫描后恢复为在库状态` : `已删除「${e.name}」的作品记录及个人记录`), Qt();
		}
	}), s = () => {
		W({
			title: "删除记录",
			body: `将删除「${e.name}」的作品记录${at(e.records) ? `及其个人记录（${at(e.records)}）` : ""}。此操作不可撤销。`,
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
				...U(c),
				onClick: s,
				children: "删除记录"
			}),
			e.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(le, {
				"aria-label": `选择接收 ${e.name} 个人记录的文件`,
				prefix: "接收",
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(ue, {
					id: e.id,
					textValue: be(e),
					children: be(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...U(c),
				onClick: () => a.mutate(),
				children: "转移记录"
			}) : null
		]
	});
}
function en({ item: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, Q.jsx)(Zt, {
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
function tn({ toast: e }) {
	let [n, r] = (0, Z.useState)([]), i = X({
		queryKey: E,
		queryFn: ({ signal: e }) => ze(e)
	}), a = i.data?.items ?? [], o = xt({
		mutationFn: (e) => it(e),
		onSuccess: (t) => {
			e(`已删除 ${t.purged} 条作品记录及其个人记录${t.blocked.length ? `；${t.blocked.length} 条文件已恢复，记录未删除` : ""}`), r([]), Qt();
		}
	}), s = (e) => void W({
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
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(en, { item: e })
		},
		{
			id: "records",
			label: "个人记录",
			width: 176,
			min: 144,
			value: (e) => at(e.records),
			render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: at(e.records) || "无"
			})
		},
		{
			id: "target",
			label: "操作",
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ (0, Q.jsx)($t, {
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
			}), /* @__PURE__ */ (0, Q.jsx)(w, {
				tone: "error",
				title: "读取文件已丢失的记录失败",
				children: G(i.error)
			})]
		}) : /* @__PURE__ */ (0, Q.jsx)(Et, {
			label: "文件已消失的作品",
			items: a,
			columns: c,
			title: "文件已丢失的记录",
			titleId: "orphan-records-title",
			unit: "条作品",
			description: D,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (e) => /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "danger",
				size: "small",
				disabled: !e.length,
				...U(o.isPending),
				onClick: () => s(e),
				children: `删除所选记录（${e.length}）`
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function nn({ person: e }) {
	let t = we("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, Q.jsxs)("a", {
		href: Ee("performer", e.k, e.entity_id),
		title: t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			"aria-hidden": !0,
			className: Se("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", Ot),
			dangerouslySetInnerHTML: { __html: `<span>${De(Ke(t))}</span>` + Te({
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
function rn({ toast: n }) {
	bt();
	let r = X({
		queryKey: O,
		queryFn: ({ signal: e }) => Oe(e)
	}), [i, a] = (0, Z.useState)([]), [o, s] = (0, Z.useState)(""), [c, d] = (0, Z.useState)(!1), [f, m] = (0, Z.useState)(null), [h, g] = (0, Z.useState)(""), _ = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => () => _.current?.abort(), []);
	let v = (0, Z.useMemo)(() => [
		{
			id: "name",
			label: "女优",
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(nn, { person: e })
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
			render: (e) => K(e.bytes)
		}
	], []), ee = o.toLocaleLowerCase(), y = (r.data?.items || []).filter((e) => !ee || [
		e.k,
		we("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), b = async (e, t) => {
		if (c) return;
		d(!0), g("");
		let r = new AbortController();
		_.current = r;
		try {
			let i = await ke(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				n("所选女优没有可删除的影片");
				return;
			}
			let a = i.performers.map((e) => we("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await W({
				title: "删除所选女优的全部影片",
				body: `将永久删除 ${a.slice(0, 5).join("、")}${a.length > 5 ? `等 ${a.length} 位女优` : ""} 关联的 ${i.total} 个影片文件（登记大小 ${K(i.bytes)}）。范围包含全部来源和回收站，不受当前搜索、排序或分页影响。文件、影片资料和观看记录将永久删除，无法恢复；女优档案和照片保留。` + (i.shared ? `其中 ${i.shared} 个文件还关联了未勾选的女优，删除后也会从她们的作品中消失。` : "") + `涉及：${o.slice(0, 5).join("、")}${o.length > 5 ? `等 ${o.length} 部作品` : ""}。`,
				confirmLabel: "永久删除影片",
				danger: !0,
				onConfirm: () => Ce(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			m(c), t(), await Promise.all([J.invalidateQueries({
				queryKey: O,
				exact: !0
			}), J.invalidateQueries({
				queryKey: z,
				exact: !0
			})]), n(`已永久删除 ${c.purged} 个影片文件${c.blocked.length ? `，${c.blocked.length} 个未删除` : ""}`);
		} catch (e) {
			r.signal.aborted || g(G(e));
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
				}), r.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					title: "读取女优列表失败",
					action: /* @__PURE__ */ (0, Q.jsx)(t, {
						variant: "secondary",
						size: "small",
						onClick: () => void r.refetch(),
						children: "重试"
					}),
					children: G(r.error)
				}) : /* @__PURE__ */ (0, Q.jsx)("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: "正在读取女优列表…"
				})]
			}) : /* @__PURE__ */ (0, Q.jsx)(Et, {
				label: "女优影片",
				title: "批量删除",
				titleId: "batch-delete-title",
				unit: "位女优",
				description: e,
				items: y,
				columns: v,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => we("performer", e.k, e.entity_id),
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
					...U(c),
					onClick: () => void b(e, n),
					children: "删除所选女优影片"
				})
			}),
			h ? /* @__PURE__ */ (0, Q.jsx)(w, {
				tone: "error",
				title: "未能读取删除清单",
				children: h
			}) : null,
			f ? /* @__PURE__ */ (0, Q.jsx)(w, {
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
var an = Y("git-compare"), on = Y("rotate-cw"), sn = "暂时无法读取进度，正在重新连接…", cn = "清理失效条目", ln = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", $ = (e) => Number(e || 0).toLocaleString();
function un({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("div", {
		className: ln,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("article", {
			className: q(),
			children: [/* @__PURE__ */ (0, Q.jsx)(A, {
				label: L[e.location] || "媒体来源",
				mark: /* @__PURE__ */ (0, Q.jsx)(de, { mark: te[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, Q.jsx)(At, {
					online: e.online,
					children: e.online ? "可访问" : "离线"
				}),
				figure: e.online ? `${$(e.missing)} 项` : "—",
				meta: e.online ? dt(e) : `${dt(e)} · 本次已跳过`,
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsxs)(fe, {
					tone: "warning",
					children: [$(e.unreadable), " 个目录未读取"]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: ln,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: q(),
				children: /* @__PURE__ */ (0, Q.jsx)(A, {
					label: "待永久删除",
					figure: `${$(rt(e))} 项`,
					meta: "文件已不在盘上，含回收站"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: q(),
				children: /* @__PURE__ */ (0, Q.jsx)(A, {
					label: "将标为已消失",
					figure: `${$(e.vanish)} 项`,
					meta: "带个人记录，记录留着"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: q(),
				children: /* @__PURE__ */ (0, Q.jsx)(A, {
					label: "空文件夹",
					figure: `${$(e.empty)} 个`,
					meta: "保留来源根目录"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: q(),
				children: /* @__PURE__ */ (0, Q.jsx)(A, {
					label: "可清理的缓存",
					figure: `${$(n.files)} 个`,
					meta: n.files ? K(n.bytes) : ""
				})
			})
		]
	})] });
}
function dn({ toast: e }) {
	let n = yt({
		queryKey: se,
		queryFn: ({ signal: e }) => He(e),
		start: ht,
		onFinish: (t) => {
			if (J.invalidateQueries({
				queryKey: z,
				exact: !0
			}), J.invalidateQueries({
				queryKey: N,
				exact: !0
			}), t.status !== "complete") return;
			let { done: n, left: r } = V(t);
			r ? e(`已完成 ${$(n)} 项，${$(r)} 项没有处理`, { warning: !0 }) : e("已清理失效条目");
		}
	}), r = yt({
		queryKey: N,
		queryFn: ({ signal: e }) => Ue(e),
		start: gt,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = !!r.job && !!n.job, c = i?.status === "complete" || i?.status === "failed", d = a ? "扫描中" : c ? "重新扫描" : "检查文件", f = (e) => void W({
		title: cn,
		body: ge(e),
		confirmLabel: cn,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), p = n.outcome, m = (e) => {
		let t = V(e).left > 0;
		return /* @__PURE__ */ (0, Q.jsx)(w, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "清理结果",
			children: H(e, K)
		});
	}, h = null, g = null;
	if (p?.status === "failed") g = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "资源清理未完成",
		children: p.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (p) g = m(p);
	else if (n.running) h = /* @__PURE__ */ (0, Q.jsx)(B, {
		embedded: !0,
		label: n.job?.message || "正在复核并清理失效条目"
	});
	else if (r.start.isError) g = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "扫描失败",
		children: G(r.start.error)
	});
	else if (r.query.isError && i) g = /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "neutral",
		title: "任务状态",
		children: sn
	});
	else if (i?.status === "running") {
		let e = ut(i);
		h = /* @__PURE__ */ (0, Q.jsx)(B, {
			embedded: !0,
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (g = /* @__PURE__ */ (0, Q.jsx)(un, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ (0, Q.jsx)(un, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "扫描失败",
		children: i.error || "后台扫描失败"
	})] });
	else if (i?.status === "complete" && i.applied) g = n.job?.status === "complete" ? m(n.job) : /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "neutral",
		title: "清理结果",
		children: "这次检查的结果已经清理，重新扫描可再核对。"
	});
	else if (i?.status === "complete") {
		let e = qe(i);
		g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(un, { scan: i }), e ? /* @__PURE__ */ (0, Q.jsx)(w, {
			tone: "neutral",
			title: "清理内容",
			action: /* @__PURE__ */ (0, Q.jsx)(t, {
				variant: "danger",
				disabled: !s,
				...U(o),
				onClick: () => {
					s && f(i);
				},
				children: o ? "正在复核并清理…" : cn
			}),
			children: _e(i)
		}) : /* @__PURE__ */ (0, Q.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: "已检查可访问的来源，没有待清理的记录、空文件夹或缓存。"
		})] });
	}
	return n.start.isError && !p && (g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [g, /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "清理失败",
		children: G(n.start.error)
	})] })), /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(l, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(t, {
				"data-resource-scan": !0,
				leadingIcon: c && !a ? on : an,
				disabled: !s,
				...U(a),
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
				!r.job && r.query.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					children: "检查状态未取得"
				}) : null,
				!n.job && n.query.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
					tone: "error",
					children: "清理状态未取得"
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: P
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
function fn({ toast: e }) {
	let t = X({
		queryKey: C,
		queryFn: ({ signal: e }) => Ie(e)
	});
	return t.isError ? /* @__PURE__ */ (0, Q.jsx)(w, {
		tone: "error",
		title: "读取媒体来源失败",
		children: G(t.error)
	}) : t.isPending ? /* @__PURE__ */ (0, Q.jsx)("p", {
		role: "status",
		children: "正在读取媒体来源…"
	}) : Je(t.data) ? /* @__PURE__ */ (0, Q.jsx)(dn, { toast: e }) : /* @__PURE__ */ (0, Q.jsxs)(l, {
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
function pn({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ (0, Q.jsx)(Xt, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ (0, Q.jsx)(fn, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ (0, Q.jsx)(tn, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ (0, Q.jsx)(Ft, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ (0, Q.jsx)(Gt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ (0, Q.jsx)(rn, { toast: r });
	}
	return /* @__PURE__ */ (0, Q.jsx)(wt, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function mn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: "读取失败",
		state: "error"
	} : {
		figure: "正在读取…",
		state: "loading"
	} : t(e.data);
}
function hn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, Q.jsx)("button", {
		type: "button",
		className: q({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, Q.jsx)(A, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function gn({ tool: e, navigate: t }) {
	let n = Y(e.icon);
	return /* @__PURE__ */ (0, Q.jsx)(Mt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var _n = Y("square-check-big"), vn = Y("sparkles"), yn = Y("file-stack"), bn = Y("file-archive"), xn = Y("trash"), Sn = () => {
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
function Cn({ toast: e, open: t, navigate: n }) {
	let o = X({
		queryKey: ce,
		queryFn: ({ signal: e }) => We(e)
	}), s = X({
		queryKey: ae,
		queryFn: ({ signal: e }) => Be(e)
	}), l = X({
		queryKey: c,
		queryFn: ({ signal: e }) => Ae(e)
	}), u = X({
		queryKey: h,
		queryFn: ({ signal: e }) => je(e)
	}), d = X({
		queryKey: z,
		queryFn: ({ signal: e }) => Ge(e)
	});
	return (0, Z.useEffect)(() => {
		let e = i[location.hash];
		e && Qe.replace(e + location.search);
	}, []), /* @__PURE__ */ (0, Q.jsxs)(wt, { children: [
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(R, {
				id: "cleanup-pending",
				children: "待处理事项"
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: k,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(hn, {
						section: "review",
						label: "人工复核",
						icon: _n,
						open: t,
						value: mn(o, lt)
					}),
					/* @__PURE__ */ (0, Q.jsx)(hn, {
						section: "duplicates",
						label: "重复文件",
						icon: yn,
						open: t,
						value: mn(l, (e) => Number(e.total || 0) ? {
							figure: `${Number(e.total).toLocaleString()} 组 · ${Number(e.files || 0).toLocaleString()} 个文件`,
							meta: `可回收 ${K(e.reclaimable || 0)}`
						} : { figure: "没有重复内容" })
					}),
					/* @__PURE__ */ (0, Q.jsx)(hn, {
						section: "ads",
						label: "垃圾文件",
						icon: bn,
						open: t,
						value: mn(u, (e) => ({
							figure: `${Number(e.pending_total || 0).toLocaleString()} 个待判断`,
							meta: Ye(e)
						}))
					}),
					/* @__PURE__ */ (0, Q.jsx)(hn, {
						section: "quality",
						label: "高清版",
						icon: vn,
						open: t,
						value: mn(s, (e) => ({ figure: `${Number(e.total || 0).toLocaleString()} 个待升级` }))
					}),
					/* @__PURE__ */ (0, Q.jsx)(hn, {
						section: "trash",
						label: "回收站",
						icon: xn,
						open: t,
						value: mn(d, (e) => ({
							figure: `${Number(e.total || 0).toLocaleString()} 项在回收站`,
							meta: e.total ? `占用 ${K(e.bytes || 0)}` : "查看和还原已移入回收站的内容"
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
				onComplete: Sn
			})
		}),
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(R, {
				id: "cleanup-maintenance",
				children: "整理与维护"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, Q.jsx)(gn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(R, {
				id: "cleanup-deletion",
				children: "清理与删除"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, Q.jsx)(gn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { Cn as DataCleanupPage, pn as DataCleanupToolPage };

//# debugId=7beaff67-4391-4d66-9ab4-77ba5403633f