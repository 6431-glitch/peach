(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd0e9226-9558-4b40-9cfe-591229b2a2a9", e._sentryDebugIdIdentifier = "sentry-dbid-bd0e9226-9558-4b40-9cfe-591229b2a2a9");
	} catch {}
})();
import { Button as e, CLEANUP_ENTRY as t, CLEANUP_ENTRY_GRID as n, CLEANUP_HASH_REDIRECTS as r, CLEANUP_TOOLS as i, Chip as a, DIRECTORY_TEMPLATE_ERROR as o, DUPLICATES_KEY as s, Fieldset as c, FieldsetTitle as l, IDLE_REPAIR as u, IconButton as d, IndexSearch as f, Input as p, JUNK_KEY as m, LINKS_KEY as h, LINK_CHECK_KEY as g, LINK_KINDS as _, LINK_PRUNE_KEY as ee, LOC as v, LibraryProcessingCard as y, MEDIA_REPAIR_KEY as b, MEDIA_REPAIR_URL as x, MEDIA_SOURCES_KEY as S, MEDIA_SOURCE_ICONS as C, Note as w, ORGANIZE_KEY as T, ORPHAN_RECORDS_KEY as E, PERFORMER_DELETE_KEY as D, PLAIN_STAT_STRIP as O, PlainStat as k, Progress as te, QUALITY_GOALS_KEY as A, REPAIR_CARD_TEXT as j, REPAIR_LIBRARIES_KEY as ne, RESOURCE_APPLY_KEY as M, RESOURCE_SCAN_KEY as re, RESULT_PANEL as ie, RESULT_SECTION as N, REVIEW_COUNTS_KEY as P, SOURCE_LABELS as F, SectionHeading as I, Select as ae, SelectItem as oe, SourceMark as se, StatusLabel as ce, TRASH_KEY as L, TaskProgress as R, Wt as le, __toESM as ue, apiSend as de, applyConfirmText as fe, applyLeftovers as pe, applyPlanText as me, applyText as he, attachOrphan as z, baseName as ge, busyProps as B, candidateText as V, checkLine as _e, confirmModal as H, cx as ve, deletePerformerVideos as ye, entityDisplayName as be, entityFaceImg as xe, entityPath as Se, errorMessage as U, esc as Ce, fetchDeletePerformers as we, fetchDeletePlan as Te, fetchDuplicates as Ee, fetchJunkSummary as De, fetchLinkCheck as Oe, fetchLinkPrune as ke, fetchLinkStats as Ae, fetchMediaRepair as je, fetchMediaSources as Me, fetchOrganize as Ne, fetchOrganizeExample as Pe, fetchOrphanRecords as Fe, fetchQualityGoals as Ie, fetchRepairLibraries as Le, fetchResourceApply as Re, fetchResourceScan as ze, fetchReviewCounts as Be, fetchTrashSummary as Ve, firstGrapheme as He, fmtSize as W, hasChanges as Ue, hasResourceRoots as We, import_jsx_runtime as G, jsx as K, jsxs as q, junkBreakdown as Ge, missingToolText as Ke, nameFallback as qe, organizeOutcome as Je, pickOrganizeFolder as Ye, plainStatClass as Xe, planSummary as Ze, previewOrganize as Qe, pruneText as $e, purgeCount as et, purgeOrphan as tt, queryClient as J, recordsText as nt, rememberTemplates as rt, require_react as it, reviewSummary as at, scanLine as ot, shellNavigate as st, sourceMeta as ct, spriteGlyph as Y, startLinkCheck as lt, startLinkPrune as ut, startOrganize as dt, startResourceApply as ft, startResourceScan as pt, statusLine as mt, translate as X, useAction as ht, useBackgroundJob as gt, useEntityNames as _t, useMutation as vt, useQuery as Z, withOrganizeJob as yt } from "./peach-app.js";
import { Page as bt } from "./peach-app.page-CW3QRN2N.js";
import { ErrorExcerpt as xt } from "./peach-app.error-excerpt-CmCsvvvN.js";
import { DataTable as St } from "./peach-app.data-table-CWlCaP-m.js";
import { SiteMark as Ct } from "./peach-app.site-mark-B3G3SZCA.js";
import { LEGACY_AVATAR_IMG as wt } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as Tt } from "./peach-app.folder-rows-Dtg3TMSn.js";
import { ConnectionStatus as Et } from "./peach-app.connection-status-BjZE05sg.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Q = /* @__PURE__ */ ue(it(), 1), Dt = Y("chevron-right");
function Ot({ label: e, icon: n, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ q("button", {
		type: "button",
		...o,
		className: t.face,
		onClick: s,
		"data-entry-state": a,
		"aria-busy": a === "loading" || void 0,
		children: [
			/* @__PURE__ */ K("span", {
				"aria-hidden": !0,
				className: t.icon,
				children: /* @__PURE__ */ K(n, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ q("span", {
				className: t.body,
				children: [
					/* @__PURE__ */ K("span", {
						className: t.title,
						children: e
					}),
					/* @__PURE__ */ K("span", {
						className: ve(t.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ K("span", {
						className: t.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ K(Dt, {
				"aria-hidden": !0,
				className: t.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var kt = (e) => C[e] || e, At = (e) => J.setQueryData(b, e);
function jt({ toast: t = () => {} }) {
	let n = gt({
		queryKey: b,
		queryFn: ({ signal: e }) => je(e),
		start: (e) => de(x, {
			library: e,
			restart: !0
		}),
		onFinish: (e) => {
			e.status === "complete" && !e.failed && !e.missing_tool && t(e.repaired ? `已修复 ${e.repaired.toLocaleString()} 部视频` : "已检查媒体库，没有需要修复的视频");
		}
	}), r = Z({
		queryKey: ne,
		queryFn: ({ signal: e }) => Le(e)
	}), [i, a] = (0, Q.useState)(""), o = ht(), s = n.job ?? u, d = r.data ?? [], f = s.status === "running", p = d.find((e) => e.id === (f ? s.library : i)) ?? d.find((e) => e.id === s.library) ?? d[0], m = () => {
		p && H({
			title: `修复媒体库「${p.name}」`,
			body: "缺时间戳表的片子另存一份修好的头，原文件不动；缺索引的片子重建后替换原文件，坏原件改名成同目录的隐藏文件（.文件名.peach-original）留着。" + (p.metered ? "这个库在计费来源上，每修一部都要把片子完整拉一遍。" : ""),
			confirmLabel: "修复媒体库",
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => de(x, { stop: !0 }, "POST", e), At), g = n.outcome, _ = mt(f ? s : g ?? u), ee = o.error || g?.error || (n.query.error ? "读不到媒体修复的状态" : "");
	return /* @__PURE__ */ q("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ K(c, {
			layout: "split",
			label: "媒体修复",
			footer: /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K(ae, {
				"aria-label": "媒体库",
				prefix: "媒体库",
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !d.length,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: d.map((e) => /* @__PURE__ */ q(oe, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ K(se, { mark: kt(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ K(e, {
				onClick: h,
				...B(o.busy === "stop"),
				children: "停止"
			}) : /* @__PURE__ */ K(e, {
				onClick: m,
				disabled: !p,
				children: "开始修复"
			})] }),
			children: /* @__PURE__ */ q("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ K(l, { children: "媒体修复" }),
					/* @__PURE__ */ K("p", {
						className: "text-body-2-regular text-text-secondary",
						children: j
					}),
					f && s.total ? /* @__PURE__ */ K(te, {
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
			children: [g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ K(w, {
				tone: "warning",
				title: "缺少 untrunc",
				action: /* @__PURE__ */ K(e, {
					variant: "ghost",
					size: "small",
					onClick: n.dismiss,
					children: "关闭提示"
				}),
				children: Ke(g)
			}) : null, ee ? /* @__PURE__ */ K(w, {
				tone: "error",
				children: ee
			}) : null]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function Mt({ className: e }) {
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
var Nt = Y("rotate-cw"), Pt = "站点返回 404 或 410，确认这个地址不存在。", Ft = "站点拒绝程序访问或一次临时故障都会落在这里。链接保留，可勾选后单独重试。", It = "删除前会逐条重验一次；此操作不可撤销。", Lt = "暂时无法读取进度，正在重新连接…", Rt = (e) => Number(e || 0).toLocaleString();
function zt({ label: e, value: t, note: n }) {
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
function Bt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	return t.length ? /* @__PURE__ */ K("div", {
		className: N,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ K(St, {
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
						href: e.entity_id && e.entity_kind ? Se(e.entity_kind, e.entity, e.entity_id) : void 0,
						"data-link-identity": "",
						children: [/* @__PURE__ */ K("span", {
							"data-link-avatar": "",
							className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${wt}`,
							"aria-hidden": !0,
							dangerouslySetInnerHTML: { __html: `<span>${Ce(He(e.entity))}</span>` + xe({
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
					value: (e) => _[e.link_kind] || e.link_kind,
					render: (e) => _[e.link_kind] || e.link_kind
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
						children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ K(ce, {
							tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
							"data-link-code": "",
							children: e.note.trim()
						}) : /* @__PURE__ */ q("div", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ K(ce, {
								tone: s ? "error" : "warning",
								children: s ? "地址已失效" : "未取得结论"
							}), /* @__PURE__ */ K(xt, {
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
							/* @__PURE__ */ K(Ct, { linkId: e.id }),
							/* @__PURE__ */ K("span", {
								"data-middle-truncate": !0,
								className: "min-w-0 truncate",
								children: e.url
							}),
							/* @__PURE__ */ K(le, {
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
function Vt() {
	let t = Z({
		queryKey: h,
		queryFn: ({ signal: e }) => Ae(e)
	}), [n, r] = (0, Q.useState)([]), [i, o] = (0, Q.useState)([]), s = gt({
		queryKey: ee,
		queryFn: ({ signal: e }) => ke(e),
		start: ut,
		onFinish: () => {
			J.invalidateQueries({
				queryKey: h,
				exact: !0
			}), J.invalidateQueries({
				queryKey: g,
				exact: !0
			});
		}
	}), u = gt({
		queryKey: g,
		queryFn: ({ signal: e }) => Oe(e),
		start: lt,
		onStarted: () => {
			s.dismiss(), r([]), o([]);
		}
	}), d = u.job, f = d?.check_id ?? "";
	(0, Q.useEffect)(() => {
		r([]), o([]);
	}, [f]);
	let p = u.running || u.start.isPending, m = s.running || s.start.isPending, v = d?.status === "complete", y = d?.gone ?? [], b = d?.unclear ?? [], x = v ? b : [], S = y.filter((e) => i.includes(e.id)).map((e) => e.id), C = x.filter((e) => n.includes(e.id)).map((e) => e.id), T = t.data, E = (T?.top_hosts ?? []).slice(0, 3), D = (e) => {
		p || e && !e.length || u.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, O = (e) => {
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
	}, k = s.outcome, te = u.start.error ?? s.start.error, A = null, j = null;
	if (k?.status === "failed") j = /* @__PURE__ */ K(w, {
		tone: "error",
		title: "链接清理未完成",
		children: k.error || "请查看任务记录，核对已处理的链接。"
	});
	else if (k && !y.length && !b.length) j = /* @__PURE__ */ K(w, {
		tone: "success",
		title: "完成",
		children: $e(k)
	});
	else if (te) j = /* @__PURE__ */ K(w, {
		tone: "error",
		title: "检查失败",
		children: U(te)
	});
	else if (u.query.isError && d) j = /* @__PURE__ */ K(w, {
		tone: "neutral",
		title: "任务状态",
		children: Lt
	});
	else if (d?.status === "failed") j = /* @__PURE__ */ K(w, {
		tone: "error",
		title: "检查失败",
		children: d.error || "检查失败"
	});
	else if (d && d.status !== "idle") {
		A = /* @__PURE__ */ q(G.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ K(R, {
			embedded: !0,
			label: _e(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ K(R, {
			embedded: !0,
			label: s.job?.message || "正在重验并删除失效链接",
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let t = `立即重试所选（${C.length}）`;
		j = v || y.length || b.length ? /* @__PURE__ */ q("div", {
			className: ie,
			children: [
				k?.status === "complete" ? /* @__PURE__ */ K(w, {
					tone: "success",
					title: "完成",
					children: $e(k)
				}) : null,
				/* @__PURE__ */ K(Bt, {
					title: "地址已失效",
					items: y,
					hint: Pt,
					picked: i,
					onPick: o,
					confirmed: !0,
					footer: v && y.length ? /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: It
					}), /* @__PURE__ */ K(e, {
						variant: "danger",
						...B(m),
						onClick: () => O(),
						children: `删除 ${y.length} 条失效链接`
					})] }) : null,
					children: /* @__PURE__ */ K(e, {
						variant: "danger",
						size: "small",
						disabled: !v || !S.length,
						...B(m),
						onClick: () => O(S),
						children: `删除所选（${S.length}）`
					})
				}),
				/* @__PURE__ */ K(Bt, {
					title: "本次未访问成功",
					items: b,
					hint: Ft,
					picked: n,
					onPick: r,
					footer: x.length ? /* @__PURE__ */ K(e, {
						variant: "primary",
						leadingIcon: Nt,
						...B(p),
						onClick: () => D(x.map((e) => e.id)),
						children: `立即重试全部（${x.length}）`
					}) : null,
					children: x.length ? /* @__PURE__ */ K(G.Fragment, { children: /* @__PURE__ */ K(e, {
						variant: "secondary",
						leadingIcon: Nt,
						disabled: !C.length,
						...B(p),
						onClick: () => D(C),
						children: t
					}) }) : null
				}),
				v && !y.length && !b.length ? /* @__PURE__ */ K("p", {
					className: `${N} text-body-regular text-notification-success-foreground`,
					children: "全部链接均可访问。"
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ q("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ q(c, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ K(e, {
				"data-link-check": "",
				leadingIcon: Mt,
				...B(p),
				onClick: () => D(),
				children: p ? "检查中" : v ? "重新检查" : "检查死链"
			}),
			children: [
				/* @__PURE__ */ K(l, {
					id: "link-manager-title",
					gap: "small",
					children: "链接管理"
				}),
				t.isError ? /* @__PURE__ */ K(w, {
					tone: "error",
					title: "链接统计读取失败",
					children: U(t.error)
				}) : T ? /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ q("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ K(zt, {
						label: "链接总数",
						value: Rt(T.total),
						note: `分布在 ${Rt(T.entities)} 个女优、厂牌与系列`
					}), Object.entries(T.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ K(zt, {
						label: _[e] || e,
						value: Rt(t)
					}, e))]
				}), E.length ? /* @__PURE__ */ q("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ K("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: "主要站点"
					}), /* @__PURE__ */ K("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: E.map(([e, t]) => /* @__PURE__ */ q("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ q("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ K(Ct, { linkId: T.top_host_link_ids?.[e] }),
									/* @__PURE__ */ K("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ K(le, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ K(a, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ K("span", {
									className: "tabular-nums",
									children: Rt(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ K("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: A
				})
			]
		}), /* @__PURE__ */ K("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: j
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Ht = (e, t) => `将整理「${e}」${t ? `的「${t}」及其子目录` : "上的文件名与目录"}，清理特殊符号与乱码，并按已填模板改名或移动。目标已存在的行会整行跳过。这一批可以从「回滚上一批」整批退回。`, Ut = "将把上一批整理动过的文件退回整理前的名字与位置，数据库路径跟着退回。退回后这一批不再出现在这里。", Wt = 8;
function Gt({ plan: e }) {
	return /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Wt).map((e) => /* @__PURE__ */ q("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ K("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: ge(e.current_path)
				}),
				/* @__PURE__ */ K("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ K("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: ge(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Wt ? /* @__PURE__ */ K("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: "只列出前 8 行，完整计划在计划 CSV 里。"
	}) : null] });
}
function Kt({ toast: t, failure: n }) {
	let r = Z({
		queryKey: T,
		queryFn: ({ signal: e }) => Ne(e)
	}), i = r.data, a = i?.locations ?? [], [s, u] = (0, Q.useState)(""), f = a.some((e) => e.location === s) ? s : a[0]?.location ?? "", m = i?.templates?.[f], [h, g] = (0, Q.useState)(null), _ = h?.location === f ? h : {
		location: f,
		file: m?.file ?? "",
		dir: m?.dir ?? ""
	}, ee = (e) => {
		g({
			..._,
			...e
		}), N.reset();
	}, [y, b] = (0, Q.useState)({
		location: "",
		path: ""
	}), x = y.location === f ? y.path : "", S = (0, Q.useRef)({
		location: f,
		path: x
	});
	S.current = {
		location: f,
		path: x
	};
	let [E, D] = (0, Q.useState)(null), O = (0, Q.useRef)(null), k = (0, Q.useRef)(null), te = (0, Q.useRef)(null), A = Z({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => Pe(_.file, _.dir, e),
		enabled: !!i
	}), [j, ne] = (0, Q.useState)("file"), M = (0, Q.useRef)(!1), re = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = re.current;
		if (!e) return;
		re.current = null;
		let t = (e.field === "file" ? O : k).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let ie = () => ({
		location: f,
		path: x.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim()
	}), N = vt({
		mutationFn: Qe,
		onError: (e) => {
			let t = /整理路径/.test(U(e)) ? "path" : o.test(U(e)) ? "dir" : "file";
			D(t), (t === "path" ? te : t === "dir" ? k : O).current?.focus();
		}
	}), P = vt({
		mutationFn: ({ initial: e }) => Ye(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (b({
				location: t.location,
				path: e.path
			}), D(null), N.reset(), te.current?.focus());
		}
	}), F = gt({
		queryKey: T,
		queryFn: ({ signal: e }) => Ne(e),
		start: dt,
		jobOf: (e) => e,
		withJob: yt,
		onStarted: () => N.reset(),
		onFinish: (e) => {
			if (J.invalidateQueries({
				queryKey: T,
				exact: !0
			}), e.status !== "complete") return;
			let { text: r, failed: i } = Je(e);
			i ? n("整理文件", /* @__PURE__ */ Error(`${i} 行未能处理`)) : t(r.replace(/。$/, ""));
		}
	}), I = F.running || F.start.isPending, ce = JSON.stringify(N.variables) === JSON.stringify(ie()), L = ce ? N.data : void 0, le = Number(L?.counts?.change || 0), ue = v[f] || f, de = (e) => {
		ee(e), D(null), N.reset();
	}, fe = (e) => {
		let t = (j === "file" ? O : k).current, n = _[j], r = M.current ? t?.selectionStart ?? n.length : n.length, i = M.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		re.current = {
			field: j,
			caret: r + a.length
		}, de({ [j]: n.slice(0, r) + a + n.slice(i) });
	}, pe = () => {
		N.isPending || I || !f || (F.dismiss(), F.start.reset(), D(null), N.mutate(ie()));
	}, me = () => {
		let e = N.variables;
		e && L && le && H({
			title: "整理文件",
			body: Ht(ue, e.path),
			confirmLabel: "整理文件",
			onConfirm: async () => {
				await F.start.mutateAsync({
					kind: "apply",
					request: e
				}), rt({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, he = () => void H({
		title: "回滚上一批整理",
		body: Ut,
		confirmLabel: "回滚整理",
		onConfirm: () => F.start.mutateAsync({ kind: "rollback" })
	}), z = null, ge = !!le && !I && !F.outcome, V = F.job, _e = F.outcome;
	if (V?.status === "running") {
		let e = V.message || V.stage || "正在整理文件";
		z = /* @__PURE__ */ K(R, {
			embedded: !0,
			label: e,
			value: Math.min(V.checked || 0, V.total || 0),
			total: V.total
		});
	} else if (_e?.status === "failed") z = /* @__PURE__ */ K(w, {
		tone: "error",
		title: "文件整理未完成",
		children: _e.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (_e) {
		let { text: e, failed: t } = Je(_e);
		z = /* @__PURE__ */ K(w, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "整理结果",
			children: e
		});
	} else F.start.isError ? z = /* @__PURE__ */ K(w, {
		tone: "error",
		title: "整理失败",
		children: U(F.start.error)
	}) : N.isPending ? z = /* @__PURE__ */ K(R, {
		embedded: !0,
		label: "正在核对整理计划"
	}) : N.isError && ce ? z = /* @__PURE__ */ K(w, {
		tone: "error",
		title: "整理预览失败",
		children: U(N.error)
	}) : L && (z = /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K(w, {
		tone: "neutral",
		title: "预览结果",
		children: Ze(L)
	}), le ? /* @__PURE__ */ K(Gt, { plan: L }) : null] }));
	return /* @__PURE__ */ q(c, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ q(G.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ K(e, {
				variant: "secondary",
				...B(I),
				onClick: he,
				children: "回滚上一批"
			}) : null,
			/* @__PURE__ */ K(e, {
				variant: ge ? "secondary" : "primary",
				disabled: !a.length || I,
				...B(N.isPending),
				onClick: pe,
				children: "预览"
			}),
			ge ? /* @__PURE__ */ K(e, {
				variant: "primary",
				onClick: me,
				children: "执行整理"
			}) : null
		] }),
		children: [
			/* @__PURE__ */ K(l, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: "整理"
			}),
			/* @__PURE__ */ K("p", {
				className: "text-body-regular text-text-secondary",
				children: "清理文件名中的特殊符号与乱码，也可按模板改名并归入目录。先预览，确认后执行；执行过的一批可以整批退回。"
			}),
			r.isError ? /* @__PURE__ */ K("div", {
				className: "mt-3",
				children: /* @__PURE__ */ K(w, {
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
						children: [a.length ? /* @__PURE__ */ K(ae, {
							"aria-label": "整理哪个来源",
							prefix: "来源",
							className: "w-fit min-w-25",
							selectedKey: f || null,
							onSelectionChange: (e) => {
								e !== null && (u(String(e)), b({
									location: String(e),
									path: ""
								}), D(null), N.reset(), P.reset(), M.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ q(oe, {
								id: e.location,
								textValue: v[e.location] || e.location,
								children: [/* @__PURE__ */ K(se, { mark: C[e.location] || "database" }), v[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ q("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ K(p, {
								"aria-label": "整理路径",
								className: "min-w-0 flex-1",
								placeholder: "留空整理整个来源",
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: te,
								isInvalid: E === "path",
								onChange: (e) => {
									b({
										location: f,
										path: e
									}), D(null), N.reset(), P.reset();
								}
							}), /* @__PURE__ */ K(d, {
								icon: Tt,
								"aria-label": "选择整理路径",
								...B(P.isPending),
								onClick: () => P.mutate({
									initial: x || a.find((e) => e.location === f)?.roots[0] || "",
									location: f,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ K("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: "指定路径时包含子目录，目录模板以该路径为起点。模板均留空时只清理文件名。"
					}),
					P.isError ? /* @__PURE__ */ q(w, {
						tone: "error",
						title: "目录选择失败",
						children: [U(P.error), "；也可直接输入路径。"]
					}) : null,
					/* @__PURE__ */ K(p, {
						label: "文件名模板",
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: O,
						spellCheck: "false",
						isInvalid: E === "file",
						onFocus: () => {
							ne("file"), M.current = !0;
						},
						onChange: (e) => de({ file: e })
					}),
					/* @__PURE__ */ K(p, {
						label: "目录模板",
						placeholder: "留空表示原地改名",
						value: _.dir,
						ref: k,
						spellCheck: "false",
						isInvalid: E === "dir",
						onFocus: () => {
							ne("dir"), M.current = !0;
						},
						onChange: (e) => de({ dir: e })
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
							children: i.presets.map((t) => /* @__PURE__ */ K(e, {
								variant: "secondary",
								size: "small",
								title: t.example || t.label,
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									de({
										file: t.file,
										dir: t.dir
									}), M.current = !1;
								},
								children: /* @__PURE__ */ K("span", {
									className: "truncate",
									children: X(t.label)
								})
							}, t.label))
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
							children: i.placeholders.map((t) => /* @__PURE__ */ K(e, {
								variant: "ghost",
								size: "small",
								"aria-label": `${X(t.label)} {${t.key}}`,
								onClick: () => fe(t.key),
								children: /* @__PURE__ */ q("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ K("code", { children: `{${t.key}}` }), /* @__PURE__ */ K("span", {
										className: "text-text-secondary",
										children: X(t.label)
									})]
								})
							}, t.key))
						})]
					}) : null,
					/* @__PURE__ */ K("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: X("点击参数插入光标处，选中文字可替换。方括号里的内容在字段为空时整段省略。")
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
var qt = Y("play"), Jt = () => J.invalidateQueries({
	queryKey: E,
	exact: !0
});
function Yt({ item: t, toast: n }) {
	let [r, i] = (0, Q.useState)(t.candidates[0]?.id ?? null), a = vt({
		mutationFn: () => z(t.id, Number(r)),
		onSuccess: () => {
			let e = t.candidates.find((e) => e.id === r);
			n(`已将「${t.name}」的个人记录转移到「${e?.name ?? "所选文件"}」`), Jt();
		},
		onError: (e) => n(U(e))
	}), o = vt({
		mutationFn: () => tt(t.id),
		onSuccess: (e) => {
			n(e.blocked.length ? `「${t.name}」的文件已恢复，记录未删除；下次扫描后恢复为在库状态` : `已删除「${t.name}」的作品记录及个人记录`), Jt();
		}
	}), s = () => {
		H({
			title: "删除记录",
			body: `将删除「${t.name}」的作品记录${nt(t.records) ? `及其个人记录（${nt(t.records)}）` : ""}。此操作不可撤销。`,
			confirmLabel: "删除记录",
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ q("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ K(e, {
				variant: "danger",
				size: "small",
				...B(c),
				onClick: s,
				children: "删除记录"
			}),
			t.candidates.length ? /* @__PURE__ */ K(ae, {
				"aria-label": `选择接收 ${t.name} 个人记录的文件`,
				prefix: "接收",
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: t.candidates.map((e) => /* @__PURE__ */ K(oe, {
					id: e.id,
					textValue: V(e),
					children: V(e)
				}, e.id))
			}) : null,
			t.candidates.length ? /* @__PURE__ */ K(e, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...B(c),
				onClick: () => a.mutate(),
				children: "转移记录"
			}) : null
		]
	});
}
function Xt({ item: e }) {
	return /* @__PURE__ */ q("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ q("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ K(qt, {
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
				children: [e.code, v[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function Zt({ toast: t }) {
	let [n, r] = (0, Q.useState)([]), i = Z({
		queryKey: E,
		queryFn: ({ signal: e }) => Fe(e)
	}), a = i.data?.items ?? [], o = vt({
		mutationFn: (e) => tt(e),
		onSuccess: (e) => {
			t(`已删除 ${e.purged} 条作品记录及其个人记录${e.blocked.length ? `；${e.blocked.length} 条文件已恢复，记录未删除` : ""}`), r([]), Jt();
		}
	}), s = (e) => void H({
		title: "删除所选记录",
		body: `将删除以下 ${e.length} 条作品记录及其全部个人记录。此操作不可撤销。`,
		items: e.map((e) => e.name),
		confirmLabel: "删除所选记录",
		danger: !0,
		onConfirm: () => o.mutateAsync(e.map((e) => e.id))
	}), u = [
		{
			id: "item",
			label: "作品",
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ K(Xt, { item: e })
		},
		{
			id: "records",
			label: "个人记录",
			width: 176,
			min: 144,
			value: (e) => nt(e.records),
			render: (e) => /* @__PURE__ */ K("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: nt(e.records) || "无"
			})
		},
		{
			id: "target",
			label: "操作",
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (e) => /* @__PURE__ */ K(Yt, {
				item: e,
				toast: t
			})
		}
	];
	return /* @__PURE__ */ K("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: i.isError ? /* @__PURE__ */ q(c, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ K(l, {
				id: "orphan-records-title",
				children: "文件已丢失的记录"
			}), /* @__PURE__ */ K(w, {
				tone: "error",
				title: "读取文件已丢失的记录失败",
				children: U(i.error)
			})]
		}) : /* @__PURE__ */ K(St, {
			label: "文件已消失的作品",
			items: a,
			columns: u,
			title: "文件已丢失的记录",
			titleId: "orphan-records-title",
			unit: "条作品",
			description: "这些作品的源文件已删除，喜欢、稍后看、播放列表与观看历史仍保留。选择替代文件后，这些记录会转移到该文件，旧作品记录随之删除。",
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (t) => /* @__PURE__ */ K(e, {
				variant: "danger",
				size: "small",
				disabled: !t.length,
				...B(o.isPending),
				onClick: () => s(t),
				children: `删除所选记录（${t.length}）`
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
var Qt = "勾选女优，永久删除她们在全部来源中的影片文件、影片资料和观看记录，包括回收站中的影片。女优档案和照片保留。共同出演的同一文件只删除一次。";
function $t({ person: e }) {
	let t = be("performer", e.k, e.entity_id), n = qe("performer", e.k, e.entity_id);
	return /* @__PURE__ */ q("a", {
		href: Se("performer", e.k, e.entity_id),
		title: n || t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ K("span", {
			"aria-hidden": !0,
			className: ve("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", wt),
			dangerouslySetInnerHTML: { __html: `<span>${Ce(He(t))}</span>` + xe({
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
function en({ toast: t }) {
	_t();
	let n = Z({
		queryKey: D,
		queryFn: ({ signal: e }) => we(e)
	}), [r, i] = (0, Q.useState)([]), [a, o] = (0, Q.useState)(""), [s, u] = (0, Q.useState)(!1), [d, p] = (0, Q.useState)(null), [m, h] = (0, Q.useState)(""), g = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => () => g.current?.abort(), []);
	let _ = (0, Q.useMemo)(() => [
		{
			id: "name",
			label: "女优",
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ K($t, { person: e })
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
	], []), ee = a.toLocaleLowerCase(), v = (n.data?.items || []).filter((e) => !ee || [
		e.k,
		be("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), y = async (e, n) => {
		if (s) return;
		u(!0), h("");
		let r = new AbortController();
		g.current = r;
		try {
			let i = await Te(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				t("所选女优没有可删除的影片");
				return;
			}
			let a = i.performers.map((e) => be("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await H({
				title: "删除所选女优的全部影片",
				body: `将永久删除 ${a.slice(0, 5).join("、")}${a.length > 5 ? `等 ${a.length} 位女优` : ""} 关联的 ${i.total} 个影片文件（登记大小 ${W(i.bytes)}）。范围包含全部来源和回收站，不受当前搜索、排序或分页影响。文件、影片资料和观看记录将永久删除，无法恢复；女优档案和照片保留。` + (i.shared ? `其中 ${i.shared} 个文件还关联了未勾选的女优，删除后也会从她们的作品中消失。` : "") + `涉及：${o.slice(0, 5).join("、")}${o.length > 5 ? `等 ${o.length} 部作品` : ""}。`,
				confirmLabel: "永久删除影片",
				danger: !0,
				onConfirm: () => ye(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			p(c), n(), await Promise.all([J.invalidateQueries({
				queryKey: D,
				exact: !0
			}), J.invalidateQueries({
				queryKey: L,
				exact: !0
			})]), t(`已永久删除 ${c.purged} 个影片文件${c.blocked.length ? `，${c.blocked.length} 个未删除` : ""}`);
		} catch (e) {
			r.signal.aborted || h(U(e));
		} finally {
			r.signal.aborted || u(!1);
		}
	}, b = d ? [
		...d.blocked,
		...d.cleanup_pending,
		...d.cache_blocked.map((e) => ({
			path: e.name,
			reason: e.reason
		}))
	] : [];
	return /* @__PURE__ */ q("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": "批量删除",
		children: [
			n.isPending || n.isError ? /* @__PURE__ */ q(c, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ K(l, {
					id: "batch-delete-title",
					children: "批量删除"
				}), n.isError ? /* @__PURE__ */ K(w, {
					tone: "error",
					title: "读取女优列表失败",
					action: /* @__PURE__ */ K(e, {
						variant: "secondary",
						size: "small",
						onClick: () => void n.refetch(),
						children: "重试"
					}),
					children: U(n.error)
				}) : /* @__PURE__ */ K("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: "正在读取女优列表…"
				})]
			}) : /* @__PURE__ */ K(St, {
				label: "女优影片",
				title: "批量删除",
				titleId: "batch-delete-title",
				unit: "位女优",
				description: Qt,
				items: v,
				columns: _,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => be("performer", e.k, e.entity_id),
				selected: r,
				onSelected: i,
				toolbarActions: /* @__PURE__ */ K(f, {
					label: "搜索女优姓名或别名",
					value: a,
					onQuery: (e) => {
						o(e), i([]);
					}
				}),
				actions: (t, n) => /* @__PURE__ */ K(e, {
					variant: "danger",
					size: "small",
					...B(s),
					onClick: () => void y(t, n),
					children: "删除所选女优影片"
				})
			}),
			m ? /* @__PURE__ */ K(w, {
				tone: "error",
				title: "未能读取删除清单",
				children: m
			}) : null,
			d ? /* @__PURE__ */ K(w, {
				tone: b.length ? "warning" : "info",
				title: `已永久删除 ${d.purged} 个影片文件`,
				extra: b.length ? /* @__PURE__ */ K("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: b.slice(0, 5).map((e, t) => /* @__PURE__ */ q("p", { children: [
						e.path,
						"（",
						e.reason,
						"）"
					] }, t))
				}) : null,
				children: b.length ? `${d.blocked.length} 个文件未能删除，馆藏记录仍保留；${d.cleanup_pending.length} 个隔离文件和 ${d.cache_blocked.length} 个缓存文件待清理。` : "所选影片及关联记录已删除，女优档案和照片保留。"
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var tn = Y("git-compare"), nn = Y("rotate-cw"), rn = "暂时无法读取进度，正在重新连接…", an = "清理失效条目", on = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", $ = (e) => Number(e || 0).toLocaleString();
function sn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K("div", {
		className: on,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ q("article", {
			className: Xe(),
			children: [/* @__PURE__ */ K(k, {
				label: F[e.location] || "媒体来源",
				mark: /* @__PURE__ */ K(se, { mark: C[e.location] ?? "database" }),
				aside: /* @__PURE__ */ K(Et, {
					online: e.online,
					children: e.online ? "可访问" : "离线"
				}),
				figure: e.online ? `${$(e.missing)} 项` : "—",
				meta: e.online ? ct(e) : `${ct(e)} · 本次已跳过`,
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ K("span", {
				className: "self-start",
				children: /* @__PURE__ */ q(ce, {
					tone: "warning",
					children: [$(e.unreadable), " 个目录未读取"]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ q("div", {
		className: on,
		children: [
			/* @__PURE__ */ K("article", {
				className: Xe(),
				children: /* @__PURE__ */ K(k, {
					label: "待永久删除",
					figure: `${$(et(e))} 项`,
					meta: "文件已不在盘上，含回收站"
				})
			}),
			/* @__PURE__ */ K("article", {
				className: Xe(),
				children: /* @__PURE__ */ K(k, {
					label: "将标为已消失",
					figure: `${$(e.vanish)} 项`,
					meta: "带个人记录，记录留着"
				})
			}),
			/* @__PURE__ */ K("article", {
				className: Xe(),
				children: /* @__PURE__ */ K(k, {
					label: "空文件夹",
					figure: `${$(e.empty)} 个`,
					meta: "保留来源根目录"
				})
			}),
			/* @__PURE__ */ K("article", {
				className: Xe(),
				children: /* @__PURE__ */ K(k, {
					label: "可清理的缓存",
					figure: `${$(n.files)} 个`,
					meta: n.files ? W(n.bytes) : ""
				})
			})
		]
	})] });
}
function cn({ toast: t }) {
	let n = gt({
		queryKey: M,
		queryFn: ({ signal: e }) => Re(e),
		start: ft,
		onFinish: (e) => {
			if (J.invalidateQueries({
				queryKey: L,
				exact: !0
			}), J.invalidateQueries({
				queryKey: re,
				exact: !0
			}), e.status !== "complete") return;
			let { done: n, left: r } = pe(e);
			r ? t(`已完成 ${$(n)} 项，${$(r)} 项没有处理`, { warning: !0 }) : t("已清理失效条目");
		}
	}), r = gt({
		queryKey: re,
		queryFn: ({ signal: e }) => ze(e),
		start: pt,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = i?.status === "complete" || i?.status === "failed", u = a ? "扫描中" : s ? "重新扫描" : "检查文件", d = (e) => void H({
		title: an,
		body: fe(e),
		confirmLabel: an,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), f = n.outcome, p = (e) => {
		let t = pe(e).left > 0;
		return /* @__PURE__ */ K(w, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "清理结果",
			children: he(e, W)
		});
	}, m = null, h = null;
	if (f?.status === "failed") h = /* @__PURE__ */ K(w, {
		tone: "error",
		title: "资源清理未完成",
		children: f.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (f) h = p(f);
	else if (n.running) m = /* @__PURE__ */ K(R, {
		embedded: !0,
		label: n.job?.message || "正在复核并清理失效条目"
	});
	else if (r.start.isError) h = /* @__PURE__ */ K(w, {
		tone: "error",
		title: "扫描失败",
		children: U(r.start.error)
	});
	else if (r.query.isError && i) h = /* @__PURE__ */ K(w, {
		tone: "neutral",
		title: "任务状态",
		children: rn
	});
	else if (i?.status === "running") {
		let e = ot(i);
		m = /* @__PURE__ */ K(R, {
			embedded: !0,
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (h = /* @__PURE__ */ K(sn, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") h = /* @__PURE__ */ q(G.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ K(sn, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ K(w, {
		tone: "error",
		title: "扫描失败",
		children: i.error || "后台扫描失败"
	})] });
	else if (i?.status === "complete" && i.applied) h = n.job?.status === "complete" ? p(n.job) : /* @__PURE__ */ K(w, {
		tone: "neutral",
		title: "清理结果",
		children: "这次检查的结果已经清理，重新扫描可再核对。"
	});
	else if (i?.status === "complete") {
		let t = Ue(i);
		h = /* @__PURE__ */ q(G.Fragment, { children: [/* @__PURE__ */ K(sn, { scan: i }), t ? /* @__PURE__ */ K(w, {
			tone: "neutral",
			title: "清理内容",
			action: /* @__PURE__ */ K(e, {
				variant: "danger",
				...B(o),
				onClick: () => d(i),
				children: o ? "正在复核并清理…" : an
			}),
			children: me(i)
		}) : /* @__PURE__ */ K("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: "已检查可访问的来源，没有待清理的记录、空文件夹或缓存。"
		})] });
	}
	return n.start.isError && !f && (h = /* @__PURE__ */ q(G.Fragment, { children: [h, /* @__PURE__ */ K(w, {
		tone: "error",
		title: "清理失败",
		children: U(n.start.error)
	})] })), /* @__PURE__ */ q("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ q(c, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ K(e, {
				"data-resource-scan": !0,
				leadingIcon: s && !a ? nn : tn,
				...B(a),
				onClick: () => {
					a || r.start.mutate();
				},
				children: u
			}),
			children: [
				/* @__PURE__ */ K(l, {
					id: "resource-sync-title",
					gap: "small",
					children: "资源同步"
				}),
				/* @__PURE__ */ K("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: "按馆藏记录逐条查找本地磁盘与网盘上的文件，列出文件已不存在的记录、空文件夹，以及不再被引用的缓存。"
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
function ln({ toast: e }) {
	let t = Z({
		queryKey: S,
		queryFn: ({ signal: e }) => Me(e)
	});
	return t.isError ? /* @__PURE__ */ K(w, {
		tone: "error",
		title: "读取媒体来源失败",
		children: U(t.error)
	}) : t.isPending ? /* @__PURE__ */ K("p", {
		role: "status",
		children: "正在读取媒体来源…"
	}) : We(t.data) ? /* @__PURE__ */ K(cn, { toast: e }) : /* @__PURE__ */ q(c, {
		layout: "stack",
		label: "资源同步",
		children: [
			/* @__PURE__ */ K(l, { children: "资源同步" }),
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
function un({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ K(Kt, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ K(ln, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ K(Zt, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ K(jt, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ K(Vt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ K(en, { toast: r });
	}
	return /* @__PURE__ */ K(bt, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function dn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: "读取失败",
		state: "error"
	} : {
		figure: "正在读取…",
		state: "loading"
	} : t(e.data);
}
function fn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ K("button", {
		type: "button",
		className: Xe({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ K(k, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function pn({ tool: e, navigate: t }) {
	let n = Y(e.icon);
	return /* @__PURE__ */ K(Ot, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var mn = Y("square-check-big"), hn = Y("sparkles"), gn = Y("file-stack"), _n = Y("file-archive"), vn = Y("trash"), yn = () => {
	for (let e of [
		P,
		A,
		s,
		m
	]) J.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function bn({ toast: e, open: t, navigate: a }) {
	let o = Z({
		queryKey: P,
		queryFn: ({ signal: e }) => Be(e)
	}), c = Z({
		queryKey: A,
		queryFn: ({ signal: e }) => Ie(e)
	}), l = Z({
		queryKey: s,
		queryFn: ({ signal: e }) => Ee(e)
	}), u = Z({
		queryKey: m,
		queryFn: ({ signal: e }) => De(e)
	}), d = Z({
		queryKey: L,
		queryFn: ({ signal: e }) => Ve(e)
	});
	return (0, Q.useEffect)(() => {
		let e = r[location.hash];
		e && st(e + location.search, { replace: !0 });
	}, []), /* @__PURE__ */ q(bt, { children: [
		/* @__PURE__ */ q("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ K(I, {
				id: "cleanup-pending",
				children: "待处理事项"
			}), /* @__PURE__ */ q("div", {
				className: O,
				children: [
					/* @__PURE__ */ K(fn, {
						section: "review",
						label: "人工复核",
						icon: mn,
						open: t,
						value: dn(o, at)
					}),
					/* @__PURE__ */ K(fn, {
						section: "duplicates",
						label: "重复文件",
						icon: gn,
						open: t,
						value: dn(l, (e) => Number(e.total || 0) ? {
							figure: `${Number(e.total).toLocaleString()} 组 · ${Number(e.files || 0).toLocaleString()} 个文件`,
							meta: `可回收 ${W(e.reclaimable || 0)}`
						} : { figure: "没有重复内容" })
					}),
					/* @__PURE__ */ K(fn, {
						section: "ads",
						label: "垃圾文件",
						icon: _n,
						open: t,
						value: dn(u, (e) => ({
							figure: `${Number(e.pending_total || 0).toLocaleString()} 个待判断`,
							meta: Ge(e)
						}))
					}),
					/* @__PURE__ */ K(fn, {
						section: "quality",
						label: "高清版",
						icon: hn,
						open: t,
						value: dn(c, (e) => ({ figure: `${Number(e.total || 0).toLocaleString()} 个待升级` }))
					}),
					/* @__PURE__ */ K(fn, {
						section: "trash",
						label: "回收站",
						icon: vn,
						open: t,
						value: dn(d, (e) => ({
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
			children: /* @__PURE__ */ K(y, {
				toast: (t) => e(t),
				monitor: !0,
				onComplete: yn
			})
		}),
		/* @__PURE__ */ q("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ K(I, {
				id: "cleanup-maintenance",
				children: "整理与维护"
			}), /* @__PURE__ */ K("div", {
				className: n,
				children: i.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ K(pn, {
					tool: e,
					navigate: a
				}, e.key))
			})]
		}),
		/* @__PURE__ */ q("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ K(I, {
				id: "cleanup-deletion",
				children: "清理与删除"
			}), /* @__PURE__ */ K("div", {
				className: n,
				children: i.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ K(pn, {
					tool: e,
					navigate: a
				}, e.key))
			})]
		})
	] });
}
export { bn as DataCleanupPage, un as DataCleanupToolPage };

//# debugId=bd0e9226-9558-4b40-9cfe-591229b2a2a9