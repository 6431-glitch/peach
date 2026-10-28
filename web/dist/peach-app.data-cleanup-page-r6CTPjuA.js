(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2c57cb8b-6169-47fc-961e-15356830c3bd", e._sentryDebugIdIdentifier = "sentry-dbid-2c57cb8b-6169-47fc-961e-15356830c3bd");
	} catch {}
})();
import { Button as e, Chip as t, DIRECTORY_TEMPLATE_ERROR as n, DUPLICATES_KEY as r, Fieldset as i, FieldsetTitle as a, IDLE_REPAIR as o, IconButton as s, Input as c, JUNK_KEY as l, LINKS_KEY as u, LINK_CHECK_KEY as d, LINK_KINDS as f, LINK_PRUNE_KEY as p, LOC as m, LibraryProcessingCard as h, MEDIA_REPAIR_KEY as g, MEDIA_REPAIR_URL as _, MEDIA_SOURCES_KEY as v, MEDIA_SOURCE_ICONS as y, Note as b, ORGANIZE_KEY as x, ORPHAN_RECORDS_KEY as S, Progress as C, QUALITY_GOALS_KEY as w, REPAIR_CARD_TEXT as T, REPAIR_LIBRARIES_KEY as E, RESOURCE_APPLY_KEY as D, RESOURCE_SCAN_KEY as O, RESULT_PANEL as ee, RESULT_SECTION as te, REVIEW_COUNTS_KEY as k, SOURCE_LABELS as A, Select as ne, SelectItem as re, SourceMark as j, StatusLabel as M, TRASH_KEY as ie, TaskProgress as N, Wt as P, __toESM as ae, apiSend as oe, applyConfirmText as F, applyLeftovers as I, applyPlanText as L, applyText as se, attachOrphan as ce, baseName as R, busyProps as z, candidateText as le, checkLine as ue, confirmModal as B, entityFaceImg as de, entityPath as fe, errorMessage as V, esc as pe, fetchDuplicates as me, fetchJunkSummary as he, fetchLinkCheck as H, fetchLinkPrune as ge, fetchLinkStats as U, fetchMediaRepair as _e, fetchMediaSources as ve, fetchOrganize as ye, fetchOrganizeExample as be, fetchOrphanRecords as xe, fetchQualityGoals as Se, fetchRepairLibraries as Ce, fetchResourceApply as we, fetchResourceScan as Te, fetchReviewCounts as Ee, fetchTrashSummary as De, firstGrapheme as Oe, fmtSize as ke, hasChanges as Ae, hasResourceRoots as je, import_jsx_runtime as W, jsx as G, jsxs as K, junkBreakdown as Me, missingToolText as Ne, organizeOutcome as Pe, pickOrganizeFolder as Fe, planSummary as Ie, previewOrganize as Le, pruneText as Re, purgeCount as ze, purgeOrphan as Be, queryClient as q, recordsText as Ve, rememberTemplates as He, require_react as Ue, reviewSummary as We, scanLine as Ge, sourceMeta as Ke, spriteGlyph as J, startLinkCheck as qe, startLinkPrune as Je, startOrganize as Ye, startResourceApply as Xe, startResourceScan as Ze, statusLine as Qe, translate as Y, useAction as $e, useBackgroundJob as X, useMutation as et, useQuery as Z, withOrganizeJob as tt } from "./peach-app.js";
import { Page as nt } from "./peach-app.page-CW3QRN2N.js";
import { ErrorExcerpt as rt } from "./peach-app.error-excerpt-CmCsvvvN.js";
import { PLAIN_STAT_STRIP as it, PlainStat as at, plainStatClass as ot } from "./peach-app.stat-card-4sRHYGSD.js";
import { DataTable as st } from "./peach-app.data-table-x8xDebGs.js";
import { SiteMark as ct } from "./peach-app.site-mark-B3G3SZCA.js";
import { LEGACY_AVATAR_IMG as lt } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as ut } from "./peach-app.folder-rows-Dtg3TMSn.js";
import { ConnectionStatus as dt } from "./peach-app.connection-status-BjZE05sg.js";
// src/react/media-repair/media-repair-card.tsx
var Q = /* @__PURE__ */ ae(Ue(), 1), ft = (e) => y[e] || e, pt = (e) => q.setQueryData(g, e);
function mt({ toast: t = () => {} }) {
	let n = X({
		queryKey: g,
		queryFn: ({ signal: e }) => _e(e),
		start: (e) => oe(_, {
			library: e,
			restart: !0
		}),
		onFinish: (e) => {
			e.status === "complete" && !e.failed && !e.missing_tool && t(e.repaired ? `已修复 ${e.repaired.toLocaleString()} 部视频` : "已检查媒体库，没有需要修复的视频");
		}
	}), r = Z({
		queryKey: E,
		queryFn: ({ signal: e }) => Ce(e)
	}), [s, c] = (0, Q.useState)(""), l = $e(), u = n.job ?? o, d = r.data ?? [], f = u.status === "running", p = d.find((e) => e.id === (f ? u.library : s)) ?? d.find((e) => e.id === u.library) ?? d[0], m = () => {
		p && B({
			title: `修复媒体库「${p.name}」`,
			body: "缺时间戳表的片子另存一份修好的头，原文件不动；缺索引的片子重建后替换原文件，坏原件改名成同目录的隐藏文件（.文件名.peach-original）留着。" + (p.metered ? "这个库在计费来源上，每修一部都要把片子完整拉一遍。" : ""),
			confirmLabel: "修复媒体库",
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void l.run("stop", (e) => oe(_, { stop: !0 }, "POST", e), pt), v = n.outcome, y = Qe(f ? u : v ?? o), x = l.error || v?.error || (n.query.error ? "读不到媒体修复的状态" : "");
	return /* @__PURE__ */ K("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ G(i, {
			layout: "split",
			label: "媒体修复",
			footer: /* @__PURE__ */ K(W.Fragment, { children: [/* @__PURE__ */ G(ne, {
				"aria-label": "媒体库",
				prefix: "媒体库",
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !d.length,
				onSelectionChange: (e) => {
					e !== null && c(String(e));
				},
				children: d.map((e) => /* @__PURE__ */ K(re, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ G(j, { mark: ft(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ G(e, {
				onClick: h,
				...z(l.busy === "stop"),
				children: "停止"
			}) : /* @__PURE__ */ G(e, {
				onClick: m,
				disabled: !p,
				children: "开始修复"
			})] }),
			children: /* @__PURE__ */ K("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ G(a, { children: "媒体修复" }),
					/* @__PURE__ */ G("p", {
						className: "text-body-2-regular text-text-secondary",
						children: T
					}),
					f && u.total ? /* @__PURE__ */ G(C, {
						label: "修复进度",
						value: u.checked,
						max: u.total
					}) : null,
					y ? /* @__PURE__ */ G("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: y
					}) : null
				]
			})
		}), /* @__PURE__ */ K("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [v?.status === "complete" && v.missing_tool ? /* @__PURE__ */ G(b, {
				tone: "warning",
				title: "缺少 untrunc",
				action: /* @__PURE__ */ G(e, {
					variant: "ghost",
					size: "small",
					onClick: n.dismiss,
					children: "关闭提示"
				}),
				children: Ne(v)
			}) : null, x ? /* @__PURE__ */ G(b, {
				tone: "error",
				children: x
			}) : null]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function ht({ className: e }) {
	return /* @__PURE__ */ K("svg", {
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
			/* @__PURE__ */ G("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ G("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ K("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ G("path", { d: "M8 2v3" }),
					/* @__PURE__ */ G("path", { d: "M2 8h3" }),
					/* @__PURE__ */ G("path", { d: "M16 19v3" }),
					/* @__PURE__ */ G("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var gt = J("rotate-cw"), _t = "站点返回 404 或 410，确认这个地址不存在。", vt = "站点拒绝程序访问或一次临时故障都会落在这里。链接保留，可勾选后单独重试。", yt = "删除前会逐条重验一次；此操作不可撤销。", bt = "暂时无法读取进度，正在重新连接…", xt = (e) => Number(e || 0).toLocaleString();
function St({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ K("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ G("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ G("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ G("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function Ct({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	return t.length ? /* @__PURE__ */ G("div", {
		className: te,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ G(st, {
			label: e,
			items: t,
			columns: [
				{
					id: "entity",
					label: "Peach 资料",
					width: 180,
					min: 128,
					value: (e) => e.entity,
					render: (e) => /* @__PURE__ */ K("a", {
						className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
						href: e.entity_id && e.entity_kind ? fe(e.entity_kind, e.entity, e.entity_id) : void 0,
						"data-link-identity": "",
						children: [/* @__PURE__ */ G("span", {
							"data-link-avatar": "",
							className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${lt}`,
							"aria-hidden": !0,
							dangerouslySetInnerHTML: { __html: `<span>${pe(Oe(e.entity))}</span>` + de({
								kind: e.entity_kind,
								id: e.entity_id,
								hasImage: e.face?.has_image,
								version: e.face?.image_version,
								focus: e.face?.avatar_focus,
								thumb: !0,
								mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
							}) }
						}), /* @__PURE__ */ G("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.entity
						})]
					})
				},
				{
					id: "kind",
					label: "类型",
					width: 128,
					value: (e) => f[e.link_kind] || e.link_kind,
					render: (e) => f[e.link_kind] || e.link_kind
				},
				{
					id: "label",
					label: "链接名称",
					min: 128,
					value: (e) => e.label || "",
					render: (e) => /* @__PURE__ */ G("span", {
						className: "flex min-w-24 items-center gap-2",
						"data-link-name": "",
						children: /* @__PURE__ */ G("span", {
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
					render: (e) => /* @__PURE__ */ G("div", {
						className: "min-w-0 w-full",
						"data-link-result": s ? "gone" : "unclear",
						children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ G(M, {
							tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
							"data-link-code": "",
							children: e.note.trim()
						}) : /* @__PURE__ */ K("div", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ G(M, {
								tone: s ? "error" : "warning",
								children: s ? "地址已失效" : "未取得结论"
							}), /* @__PURE__ */ G(rt, {
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
					render: (e) => /* @__PURE__ */ K("a", {
						href: e.url,
						target: "_blank",
						rel: "noopener noreferrer",
						title: e.url,
						"data-link-address": "",
						className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
						children: [
							/* @__PURE__ */ G(ct, { linkId: e.id }),
							/* @__PURE__ */ G("span", {
								"data-middle-truncate": !0,
								className: "min-w-0 truncate",
								children: e.url
							}),
							/* @__PURE__ */ G(P, {
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
function wt() {
	let n = Z({
		queryKey: u,
		queryFn: ({ signal: e }) => U(e)
	}), [r, o] = (0, Q.useState)([]), [s, c] = (0, Q.useState)([]), l = X({
		queryKey: p,
		queryFn: ({ signal: e }) => ge(e),
		start: Je,
		onFinish: () => {
			q.invalidateQueries({
				queryKey: u,
				exact: !0
			}), q.invalidateQueries({
				queryKey: d,
				exact: !0
			});
		}
	}), m = X({
		queryKey: d,
		queryFn: ({ signal: e }) => H(e),
		start: qe,
		onStarted: () => {
			l.dismiss(), o([]), c([]);
		}
	}), h = m.job, g = h?.check_id ?? "";
	(0, Q.useEffect)(() => {
		o([]), c([]);
	}, [g]);
	let _ = m.running || m.start.isPending, v = l.running || l.start.isPending, y = h?.status === "complete", x = h?.gone ?? [], S = h?.unclear ?? [], C = y ? S : [], w = x.filter((e) => s.includes(e.id)).map((e) => e.id), T = C.filter((e) => r.includes(e.id)).map((e) => e.id), E = n.data, D = (E?.top_hosts ?? []).slice(0, 3), O = (e) => {
		_ || e && !e.length || m.start.mutate(e ? {
			retry: e,
			checkId: g
		} : {});
	}, k = (e) => {
		!v && x.length && B({
			title: "删除失效链接",
			body: `将删除 ${e?.length ?? x.length} 条失效链接。删除前会再次检查，删除后无法恢复。`,
			confirmLabel: "删除失效链接",
			danger: !0,
			onConfirm: () => l.start.mutateAsync({
				checkId: g,
				ids: e
			})
		});
	}, A = l.outcome, ne = m.start.error ?? l.start.error, re = null, j = null;
	if (A?.status === "failed") j = /* @__PURE__ */ G(b, {
		tone: "error",
		title: "链接清理未完成",
		children: A.error || "请查看任务记录，核对已处理的链接。"
	});
	else if (A && !x.length && !S.length) j = /* @__PURE__ */ G(b, {
		tone: "success",
		title: "完成",
		children: Re(A)
	});
	else if (ne) j = /* @__PURE__ */ G(b, {
		tone: "error",
		title: "检查失败",
		children: V(ne)
	});
	else if (m.query.isError && h) j = /* @__PURE__ */ G(b, {
		tone: "neutral",
		title: "任务状态",
		children: bt
	});
	else if (h?.status === "failed") j = /* @__PURE__ */ G(b, {
		tone: "error",
		title: "检查失败",
		children: h.error || "检查失败"
	});
	else if (h && h.status !== "idle") {
		re = /* @__PURE__ */ K(W.Fragment, { children: [h.status === "running" ? /* @__PURE__ */ G(N, {
			embedded: !0,
			label: ue(h),
			value: Math.min(h.checked || 0, h.total || 0),
			total: h.total
		}) : null, v ? /* @__PURE__ */ G(N, {
			embedded: !0,
			label: l.job?.message || "正在重验并删除失效链接",
			value: Math.min(l.job?.checked || 0, l.job?.total || 0),
			total: l.job?.total
		}) : null] });
		let t = `立即重试所选（${T.length}）`;
		j = y || x.length || S.length ? /* @__PURE__ */ K("div", {
			className: ee,
			children: [
				A?.status === "complete" ? /* @__PURE__ */ G(b, {
					tone: "success",
					title: "完成",
					children: Re(A)
				}) : null,
				/* @__PURE__ */ G(Ct, {
					title: "地址已失效",
					items: x,
					hint: _t,
					picked: s,
					onPick: c,
					confirmed: !0,
					footer: y && x.length ? /* @__PURE__ */ K(W.Fragment, { children: [/* @__PURE__ */ G("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: yt
					}), /* @__PURE__ */ G(e, {
						variant: "danger",
						...z(v),
						onClick: () => k(),
						children: `删除 ${x.length} 条失效链接`
					})] }) : null,
					children: /* @__PURE__ */ G(e, {
						variant: "danger",
						size: "small",
						disabled: !y || !w.length,
						...z(v),
						onClick: () => k(w),
						children: `删除所选（${w.length}）`
					})
				}),
				/* @__PURE__ */ G(Ct, {
					title: "本次未访问成功",
					items: S,
					hint: vt,
					picked: r,
					onPick: o,
					footer: C.length ? /* @__PURE__ */ G(e, {
						variant: "primary",
						leadingIcon: gt,
						...z(_),
						onClick: () => O(C.map((e) => e.id)),
						children: `立即重试全部（${C.length}）`
					}) : null,
					children: C.length ? /* @__PURE__ */ G(W.Fragment, { children: /* @__PURE__ */ G(e, {
						variant: "secondary",
						leadingIcon: gt,
						disabled: !T.length,
						...z(_),
						onClick: () => O(T),
						children: t
					}) }) : null
				}),
				y && !x.length && !S.length ? /* @__PURE__ */ G("p", {
					className: `${te} text-body-regular text-notification-success-foreground`,
					children: "全部链接均可访问。"
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ K("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ K(i, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ G(e, {
				"data-link-check": "",
				leadingIcon: ht,
				...z(_),
				onClick: () => O(),
				children: _ ? "检查中" : y ? "重新检查" : "检查死链"
			}),
			children: [
				/* @__PURE__ */ G(a, {
					id: "link-manager-title",
					gap: "small",
					children: "链接管理"
				}),
				n.isError ? /* @__PURE__ */ G(b, {
					tone: "error",
					title: "链接统计读取失败",
					children: V(n.error)
				}) : E ? /* @__PURE__ */ K(W.Fragment, { children: [/* @__PURE__ */ K("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ G(St, {
						label: "链接总数",
						value: xt(E.total),
						note: `分布在 ${xt(E.entities)} 个女优、厂牌与系列`
					}), Object.entries(E.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ G(St, {
						label: f[e] || e,
						value: xt(t)
					}, e))]
				}), D.length ? /* @__PURE__ */ K("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ G("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: "主要站点"
					}), /* @__PURE__ */ G("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: D.map(([e, n]) => /* @__PURE__ */ K("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ K("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ G(ct, { linkId: E.top_host_link_ids?.[e] }),
									/* @__PURE__ */ G("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ G(P, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ G(t, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ G("span", {
									className: "tabular-nums",
									children: xt(n)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ G("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: re
				})
			]
		}), /* @__PURE__ */ G("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: j
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Tt = (e, t) => `将整理「${e}」${t ? `的「${t}」及其子目录` : "上的文件名与目录"}，清理特殊符号与乱码，并按已填模板改名或移动。目标已存在的行会整行跳过。这一批可以从「回滚上一批」整批退回。`, Et = "将把上一批整理动过的文件退回整理前的名字与位置，数据库路径跟着退回。退回后这一批不再出现在这里。", Dt = 8;
function Ot({ plan: e }) {
	return /* @__PURE__ */ K(W.Fragment, { children: [/* @__PURE__ */ G("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Dt).map((e) => /* @__PURE__ */ K("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ G("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: R(e.current_path)
				}),
				/* @__PURE__ */ G("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ G("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: R(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Dt ? /* @__PURE__ */ G("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: "只列出前 8 行，完整计划在计划 CSV 里。"
	}) : null] });
}
function kt({ toast: t, failure: r }) {
	let o = Z({
		queryKey: x,
		queryFn: ({ signal: e }) => ye(e)
	}), l = o.data, u = l?.locations ?? [], [d, f] = (0, Q.useState)(""), p = u.some((e) => e.location === d) ? d : u[0]?.location ?? "", h = l?.templates?.[p], [g, _] = (0, Q.useState)(null), v = g?.location === p ? g : {
		location: p,
		file: h?.file ?? "",
		dir: h?.dir ?? ""
	}, S = (e) => {
		_({
			...v,
			...e
		}), F.reset();
	}, [C, w] = (0, Q.useState)({
		location: "",
		path: ""
	}), T = C.location === p ? C.path : "", E = (0, Q.useRef)({
		location: p,
		path: T
	});
	E.current = {
		location: p,
		path: T
	};
	let [D, O] = (0, Q.useState)(null), ee = (0, Q.useRef)(null), te = (0, Q.useRef)(null), k = (0, Q.useRef)(null), A = Z({
		queryKey: [
			"organize-example",
			v.file,
			v.dir
		],
		queryFn: ({ signal: e }) => be(v.file, v.dir, e),
		enabled: !!l
	}), [M, ie] = (0, Q.useState)("file"), P = (0, Q.useRef)(!1), ae = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = ae.current;
		if (!e) return;
		ae.current = null;
		let t = (e.field === "file" ? ee : te).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let oe = () => ({
		location: p,
		path: T.trim(),
		file_template: v.file.trim(),
		dir_template: v.dir.trim()
	}), F = et({
		mutationFn: Le,
		onError: (e) => {
			let t = /整理路径/.test(V(e)) ? "path" : n.test(V(e)) ? "dir" : "file";
			O(t), (t === "path" ? k : t === "dir" ? te : ee).current?.focus();
		}
	}), I = et({
		mutationFn: ({ initial: e }) => Fe(e),
		onSuccess: (e, t) => {
			e.path && t.location === E.current.location && t.path === E.current.path && (w({
				location: t.location,
				path: e.path
			}), O(null), F.reset(), k.current?.focus());
		}
	}), L = X({
		queryKey: x,
		queryFn: ({ signal: e }) => ye(e),
		start: Ye,
		jobOf: (e) => e,
		withJob: tt,
		onStarted: () => F.reset(),
		onFinish: (e) => {
			if (q.invalidateQueries({
				queryKey: x,
				exact: !0
			}), e.status !== "complete") return;
			let { text: n, failed: i } = Pe(e);
			i ? r("整理文件", /* @__PURE__ */ Error(`${i} 行未能处理`)) : t(n.replace(/。$/, ""));
		}
	}), se = L.running || L.start.isPending, ce = JSON.stringify(F.variables) === JSON.stringify(oe()), R = ce ? F.data : void 0, le = Number(R?.counts?.change || 0), ue = m[p] || p, de = (e) => {
		S(e), O(null), F.reset();
	}, fe = (e) => {
		let t = (M === "file" ? ee : te).current, n = v[M], r = P.current ? t?.selectionStart ?? n.length : n.length, i = P.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		ae.current = {
			field: M,
			caret: r + a.length
		}, de({ [M]: n.slice(0, r) + a + n.slice(i) });
	}, pe = () => {
		F.isPending || se || !p || (L.dismiss(), L.start.reset(), O(null), F.mutate(oe()));
	}, me = () => {
		let e = F.variables;
		e && R && le && B({
			title: "整理文件",
			body: Tt(ue, e.path),
			confirmLabel: "整理文件",
			onConfirm: async () => {
				await L.start.mutateAsync({
					kind: "apply",
					request: e
				}), He({
					...l?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, he = () => void B({
		title: "回滚上一批整理",
		body: Et,
		confirmLabel: "回滚整理",
		onConfirm: () => L.start.mutateAsync({ kind: "rollback" })
	}), H = null, ge = !!le && !se && !L.outcome, U = L.job, _e = L.outcome;
	if (U?.status === "running") {
		let e = U.message || U.stage || "正在整理文件";
		H = /* @__PURE__ */ G(N, {
			embedded: !0,
			label: e,
			value: Math.min(U.checked || 0, U.total || 0),
			total: U.total
		});
	} else if (_e?.status === "failed") H = /* @__PURE__ */ G(b, {
		tone: "error",
		title: "文件整理未完成",
		children: _e.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (_e) {
		let { text: e, failed: t } = Pe(_e);
		H = /* @__PURE__ */ G(b, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "整理结果",
			children: e
		});
	} else L.start.isError ? H = /* @__PURE__ */ G(b, {
		tone: "error",
		title: "整理失败",
		children: V(L.start.error)
	}) : F.isPending ? H = /* @__PURE__ */ G(N, {
		embedded: !0,
		label: "正在核对整理计划"
	}) : F.isError && ce ? H = /* @__PURE__ */ G(b, {
		tone: "error",
		title: "整理预览失败",
		children: V(F.error)
	}) : R && (H = /* @__PURE__ */ K(W.Fragment, { children: [/* @__PURE__ */ G(b, {
		tone: "neutral",
		title: "预览结果",
		children: Ie(R)
	}), le ? /* @__PURE__ */ G(Ot, { plan: R }) : null] }));
	return /* @__PURE__ */ K(i, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ K(W.Fragment, { children: [
			l?.last_batch ? /* @__PURE__ */ G(e, {
				variant: "secondary",
				...z(se),
				onClick: he,
				children: "回滚上一批"
			}) : null,
			/* @__PURE__ */ G(e, {
				variant: ge ? "secondary" : "primary",
				disabled: !u.length || se,
				...z(F.isPending),
				onClick: pe,
				children: "预览"
			}),
			ge ? /* @__PURE__ */ G(e, {
				variant: "primary",
				onClick: me,
				children: "执行整理"
			}) : null
		] }),
		children: [
			/* @__PURE__ */ G(a, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: "整理"
			}),
			/* @__PURE__ */ G("p", {
				className: "text-body-regular text-text-secondary",
				children: "清理文件名中的特殊符号与乱码，也可按模板改名并归入目录。先预览，确认后执行；执行过的一批可以整批退回。"
			}),
			o.isError ? /* @__PURE__ */ G("div", {
				className: "mt-3",
				children: /* @__PURE__ */ G(b, {
					tone: "error",
					title: "整理配置读取失败",
					children: V(o.error)
				})
			}) : null,
			/* @__PURE__ */ K("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ K("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [u.length ? /* @__PURE__ */ G(ne, {
							"aria-label": "整理哪个来源",
							prefix: "来源",
							className: "w-fit min-w-25",
							selectedKey: p || null,
							onSelectionChange: (e) => {
								e !== null && (f(String(e)), w({
									location: String(e),
									path: ""
								}), O(null), F.reset(), I.reset(), P.current = !1);
							},
							children: u.map((e) => /* @__PURE__ */ K(re, {
								id: e.location,
								textValue: m[e.location] || e.location,
								children: [/* @__PURE__ */ G(j, { mark: y[e.location] || "database" }), m[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ K("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ G(c, {
								"aria-label": "整理路径",
								className: "min-w-0 flex-1",
								placeholder: "留空整理整个来源",
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: T,
								ref: k,
								isInvalid: D === "path",
								onChange: (e) => {
									w({
										location: p,
										path: e
									}), O(null), F.reset(), I.reset();
								}
							}), /* @__PURE__ */ G(s, {
								icon: ut,
								"aria-label": "选择整理路径",
								...z(I.isPending),
								onClick: () => I.mutate({
									initial: T || u.find((e) => e.location === p)?.roots[0] || "",
									location: p,
									path: T
								})
							})]
						})]
					}),
					/* @__PURE__ */ G("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: "指定路径时包含子目录，目录模板以该路径为起点。模板均留空时只清理文件名。"
					}),
					I.isError ? /* @__PURE__ */ K(b, {
						tone: "error",
						title: "目录选择失败",
						children: [V(I.error), "；也可直接输入路径。"]
					}) : null,
					/* @__PURE__ */ G(c, {
						label: "文件名模板",
						placeholder: "{code}[ {title}]",
						value: v.file,
						ref: ee,
						spellCheck: "false",
						isInvalid: D === "file",
						onFocus: () => {
							ie("file"), P.current = !0;
						},
						onChange: (e) => de({ file: e })
					}),
					/* @__PURE__ */ G(c, {
						label: "目录模板",
						placeholder: "留空表示原地改名",
						value: v.dir,
						ref: te,
						spellCheck: "false",
						isInvalid: D === "dir",
						onFocus: () => {
							ie("dir"), P.current = !0;
						},
						onChange: (e) => de({ dir: e })
					}),
					l?.presets?.length ? /* @__PURE__ */ K("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Y("套用模板"),
						children: [/* @__PURE__ */ G("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: Y("套用模板")
						}), /* @__PURE__ */ G("div", {
							className: "flex flex-wrap gap-2",
							children: l.presets.map((t) => /* @__PURE__ */ G(e, {
								variant: "secondary",
								size: "small",
								title: t.example || t.label,
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									de({
										file: t.file,
										dir: t.dir
									}), P.current = !1;
								},
								children: /* @__PURE__ */ G("span", {
									className: "truncate",
									children: Y(t.label)
								})
							}, t.label))
						})]
					}) : null,
					/* @__PURE__ */ K("p", {
						"aria-live": "polite",
						"aria-busy": A.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [
							Y("路径示例："),
							" ",
							/* @__PURE__ */ G("code", {
								className: "wrap-anywhere",
								children: A.data?.example || A.data?.error || (A.isError ? V(A.error) : "正在预览…")
							})
						]
					}),
					l?.placeholders?.length ? /* @__PURE__ */ K("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Y("插入参数"),
						children: [/* @__PURE__ */ K("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ G("strong", {
									className: "text-caption-1-semibold text-text-primary",
									children: Y("插入参数")
								}),
								" (",
								Y(M === "file" ? "文件名模板" : "目录模板"),
								")"
							]
						}), /* @__PURE__ */ G("div", {
							className: "flex flex-wrap gap-1",
							children: l.placeholders.map((t) => /* @__PURE__ */ G(e, {
								variant: "ghost",
								size: "small",
								"aria-label": `${Y(t.label)} {${t.key}}`,
								onClick: () => fe(t.key),
								children: /* @__PURE__ */ K("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ G("code", { children: `{${t.key}}` }), /* @__PURE__ */ G("span", {
										className: "text-text-secondary",
										children: Y(t.label)
									})]
								})
							}, t.key))
						})]
					}) : null,
					/* @__PURE__ */ G("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: Y("点击参数插入光标处，选中文字可替换。方括号里的内容在字段为空时整段省略。")
					})
				]
			}),
			/* @__PURE__ */ G("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: H
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var At = J("play"), jt = () => q.invalidateQueries({
	queryKey: S,
	exact: !0
});
function Mt({ item: t, toast: n }) {
	let [r, i] = (0, Q.useState)(t.candidates[0]?.id ?? null), a = et({
		mutationFn: () => ce(t.id, Number(r)),
		onSuccess: () => {
			let e = t.candidates.find((e) => e.id === r);
			n(`已将「${t.name}」的个人记录转移到「${e?.name ?? "所选文件"}」`), jt();
		},
		onError: (e) => n(V(e))
	}), o = et({
		mutationFn: () => Be(t.id),
		onSuccess: (e) => {
			n(e.blocked.length ? `「${t.name}」的文件已恢复，记录未删除；下次扫描后恢复为在库状态` : `已删除「${t.name}」的作品记录及个人记录`), jt();
		}
	}), s = () => {
		B({
			title: "删除记录",
			body: `将删除「${t.name}」的作品记录${Ve(t.records) ? `及其个人记录（${Ve(t.records)}）` : ""}。此操作不可撤销。`,
			confirmLabel: "删除记录",
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ K("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ G(e, {
				variant: "danger",
				size: "small",
				...z(c),
				onClick: s,
				children: "删除记录"
			}),
			t.candidates.length ? /* @__PURE__ */ G(ne, {
				"aria-label": `选择接收 ${t.name} 个人记录的文件`,
				prefix: "接收",
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: t.candidates.map((e) => /* @__PURE__ */ G(re, {
					id: e.id,
					textValue: le(e),
					children: le(e)
				}, e.id))
			}) : null,
			t.candidates.length ? /* @__PURE__ */ G(e, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...z(c),
				onClick: () => a.mutate(),
				children: "转移记录"
			}) : null
		]
	});
}
function Nt({ item: e }) {
	return /* @__PURE__ */ K("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ K("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ G(At, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ G("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ K("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ G("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ G("small", {
				className: "truncate text-caption-1-regular text-text-secondary",
				children: [e.code, m[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function Pt({ toast: t }) {
	let [n, r] = (0, Q.useState)([]), o = Z({
		queryKey: S,
		queryFn: ({ signal: e }) => xe(e)
	}), s = o.data?.items ?? [], c = et({
		mutationFn: (e) => Be(e),
		onSuccess: (e) => {
			t(`已删除 ${e.purged} 条作品记录及其个人记录${e.blocked.length ? `；${e.blocked.length} 条文件已恢复，记录未删除` : ""}`), r([]), jt();
		}
	}), l = (e) => void B({
		title: "删除所选记录",
		body: `将删除以下 ${e.length} 条作品记录及其全部个人记录。此操作不可撤销。`,
		items: e.map((e) => e.name),
		confirmLabel: "删除所选记录",
		danger: !0,
		onConfirm: () => c.mutateAsync(e.map((e) => e.id))
	}), u = [
		{
			id: "item",
			label: "作品",
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ G(Nt, { item: e })
		},
		{
			id: "records",
			label: "个人记录",
			width: 176,
			min: 144,
			value: (e) => Ve(e.records),
			render: (e) => /* @__PURE__ */ G("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: Ve(e.records) || "无"
			})
		},
		{
			id: "target",
			label: "操作",
			width: s.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (e) => /* @__PURE__ */ G(Mt, {
				item: e,
				toast: t
			})
		}
	];
	return !o.isError && !s.length ? null : /* @__PURE__ */ G("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: o.isError ? /* @__PURE__ */ K(i, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ G(a, {
				id: "orphan-records-title",
				children: "文件已丢失的记录"
			}), /* @__PURE__ */ G(b, {
				tone: "error",
				title: "读取文件已丢失的记录失败",
				children: V(o.error)
			})]
		}) : /* @__PURE__ */ G(st, {
			label: "文件已消失的作品",
			items: s,
			columns: u,
			title: "文件已丢失的记录",
			titleId: "orphan-records-title",
			unit: "条作品",
			description: "这些作品的源文件已删除，喜欢、稍后看、播放列表与观看历史仍保留。选择替代文件后，这些记录会转移到该文件，旧作品记录随之删除。",
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (t) => /* @__PURE__ */ G(e, {
				variant: "danger",
				size: "small",
				disabled: !t.length,
				...z(c.isPending),
				onClick: () => l(t),
				children: `删除所选记录（${t.length}）`
			})
		})
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var Ft = J("git-compare"), It = J("rotate-cw"), Lt = "暂时无法读取进度，正在重新连接…", Rt = "清理失效条目", zt = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", $ = (e) => Number(e || 0).toLocaleString();
function Bt({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ K(W.Fragment, { children: [/* @__PURE__ */ G("div", {
		className: zt,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ K("article", {
			className: ot(),
			children: [/* @__PURE__ */ G(at, {
				label: A[e.location] || "媒体来源",
				mark: /* @__PURE__ */ G(j, { mark: y[e.location] ?? "database" }),
				aside: /* @__PURE__ */ G(dt, {
					online: e.online,
					children: e.online ? "可访问" : "离线"
				}),
				figure: e.online ? `${$(e.missing)} 项` : "—",
				meta: e.online ? Ke(e) : `${Ke(e)} · 本次已跳过`,
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ G("span", {
				className: "self-start",
				children: /* @__PURE__ */ K(M, {
					tone: "warning",
					children: [$(e.unreadable), " 个目录未读取"]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ K("div", {
		className: zt,
		children: [
			/* @__PURE__ */ G("article", {
				className: ot(),
				children: /* @__PURE__ */ G(at, {
					label: "待永久删除",
					figure: `${$(ze(e))} 项`,
					meta: "文件已不在盘上，含回收站"
				})
			}),
			/* @__PURE__ */ G("article", {
				className: ot(),
				children: /* @__PURE__ */ G(at, {
					label: "将标为已消失",
					figure: `${$(e.vanish)} 项`,
					meta: "带个人记录，记录留着"
				})
			}),
			/* @__PURE__ */ G("article", {
				className: ot(),
				children: /* @__PURE__ */ G(at, {
					label: "空文件夹",
					figure: `${$(e.empty)} 个`,
					meta: "保留来源根目录"
				})
			}),
			/* @__PURE__ */ G("article", {
				className: ot(),
				children: /* @__PURE__ */ G(at, {
					label: "可清理的缓存",
					figure: `${$(n.files)} 个`,
					meta: n.files ? ke(n.bytes) : ""
				})
			})
		]
	})] });
}
function Vt({ toast: t }) {
	let n = X({
		queryKey: D,
		queryFn: ({ signal: e }) => we(e),
		start: Xe,
		onFinish: (e) => {
			if (q.invalidateQueries({
				queryKey: ie,
				exact: !0
			}), q.invalidateQueries({
				queryKey: O,
				exact: !0
			}), e.status !== "complete") return;
			let { done: n, left: r } = I(e);
			r ? t(`已完成 ${$(n)} 项，${$(r)} 项没有处理`, { warning: !0 }) : t("已清理失效条目");
		}
	}), r = X({
		queryKey: O,
		queryFn: ({ signal: e }) => Te(e),
		start: Ze,
		onStarted: () => n.dismiss()
	}), o = r.job, s = r.running || r.start.isPending, c = n.running || n.start.isPending, l = o?.status === "complete" || o?.status === "failed", u = s ? "扫描中" : l ? "重新扫描" : "检查文件", d = (e) => void B({
		title: Rt,
		body: F(e),
		confirmLabel: Rt,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), f = n.outcome, p = (e) => {
		let t = I(e).left > 0;
		return /* @__PURE__ */ G(b, {
			tone: t ? "warning" : "success",
			title: t ? "部分完成" : "清理结果",
			children: se(e, ke)
		});
	}, m = null, h = null;
	if (f?.status === "failed") h = /* @__PURE__ */ G(b, {
		tone: "error",
		title: "资源清理未完成",
		children: f.error || "请查看任务记录，核对已处理的文件。"
	});
	else if (f) h = p(f);
	else if (n.running) m = /* @__PURE__ */ G(N, {
		embedded: !0,
		label: n.job?.message || "正在复核并清理失效条目"
	});
	else if (r.start.isError) h = /* @__PURE__ */ G(b, {
		tone: "error",
		title: "扫描失败",
		children: V(r.start.error)
	});
	else if (r.query.isError && o) h = /* @__PURE__ */ G(b, {
		tone: "neutral",
		title: "任务状态",
		children: Lt
	});
	else if (o?.status === "running") {
		let e = Ge(o);
		m = /* @__PURE__ */ G(N, {
			embedded: !0,
			label: e,
			value: o.completed_sources,
			total: o.total_sources
		}), o.sources?.length && (h = /* @__PURE__ */ G(Bt, {
			scan: o,
			partial: !0
		}));
	} else if (o?.status === "failed") h = /* @__PURE__ */ K(W.Fragment, { children: [o.sources?.length ? /* @__PURE__ */ G(Bt, {
		scan: o,
		partial: !0
	}) : null, /* @__PURE__ */ G(b, {
		tone: "error",
		title: "扫描失败",
		children: o.error || "后台扫描失败"
	})] });
	else if (o?.status === "complete" && o.applied) h = n.job?.status === "complete" ? p(n.job) : /* @__PURE__ */ G(b, {
		tone: "neutral",
		title: "清理结果",
		children: "这次检查的结果已经清理，重新扫描可再核对。"
	});
	else if (o?.status === "complete") {
		let t = Ae(o);
		h = /* @__PURE__ */ K(W.Fragment, { children: [/* @__PURE__ */ G(Bt, { scan: o }), t ? /* @__PURE__ */ G(b, {
			tone: "neutral",
			title: "清理内容",
			action: /* @__PURE__ */ G(e, {
				variant: "danger",
				...z(c),
				onClick: () => d(o),
				children: c ? "正在复核并清理…" : Rt
			}),
			children: L(o)
		}) : /* @__PURE__ */ G("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: "已检查可访问的来源，没有待清理的记录、空文件夹或缓存。"
		})] });
	}
	return n.start.isError && !f && (h = /* @__PURE__ */ K(W.Fragment, { children: [h, /* @__PURE__ */ G(b, {
		tone: "error",
		title: "清理失败",
		children: V(n.start.error)
	})] })), /* @__PURE__ */ K("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ K(i, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ G(e, {
				"data-resource-scan": !0,
				leadingIcon: l && !s ? It : Ft,
				...z(s),
				onClick: () => {
					s || r.start.mutate();
				},
				children: u
			}),
			children: [
				/* @__PURE__ */ G(a, {
					id: "resource-sync-title",
					gap: "small",
					children: "资源同步"
				}),
				/* @__PURE__ */ G("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: "按馆藏记录逐条查找本地磁盘与网盘上的文件，列出文件已不存在的记录、空文件夹，以及不再被引用的缓存。"
				}),
				/* @__PURE__ */ G("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: m
				})
			]
		}), /* @__PURE__ */ G("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: h
		})]
	});
}
// src/react/data-cleanup/data-cleanup-page.tsx
function Ht(e, t) {
	return e.data === void 0 ? { figure: e.isError ? "读取失败" : "—" } : t(e.data);
}
function Ut({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ G("button", {
		type: "button",
		className: ot({ interactive: !0 }),
		"data-cleanup-go": e,
		onClick: () => i(e),
		children: /* @__PURE__ */ G(at, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
var Wt = J("square-check-big"), Gt = J("sparkles"), Kt = J("file-stack"), qt = J("file-archive"), Jt = J("trash"), Yt = [
	k,
	w,
	r
], Xt = () => {
	for (let e of Yt) q.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function Zt({ toast: e, failure: t, open: n }) {
	let i = Z({
		queryKey: k,
		queryFn: ({ signal: e }) => Ee(e)
	}), a = Z({
		queryKey: w,
		queryFn: ({ signal: e }) => Se(e)
	}), o = Z({
		queryKey: r,
		queryFn: ({ signal: e }) => me(e)
	}), s = Z({
		queryKey: l,
		queryFn: ({ signal: e }) => he(e)
	}), c = Z({
		queryKey: ie,
		queryFn: ({ signal: e }) => De(e)
	}), u = Z({
		queryKey: v,
		queryFn: ({ signal: e }) => ve(e)
	}), d = (t) => e(t);
	return /* @__PURE__ */ K(nt, { children: [
		/* @__PURE__ */ K("div", {
			className: it,
			children: [
				/* @__PURE__ */ G(Ut, {
					section: "review",
					label: "人工复核",
					icon: Wt,
					open: n,
					value: Ht(i, We)
				}),
				/* @__PURE__ */ G(Ut, {
					section: "quality",
					label: "高清版",
					icon: Gt,
					open: n,
					value: Ht(a, (e) => ({ figure: `${Number(e.total || 0).toLocaleString()} 个待升级` }))
				}),
				/* @__PURE__ */ G(Ut, {
					section: "duplicates",
					label: "重复文件",
					icon: Kt,
					open: n,
					value: Ht(o, (e) => Number(e.total || 0) ? {
						figure: `${Number(e.total).toLocaleString()} 组 · ${Number(e.files || 0).toLocaleString()} 个文件`,
						meta: `可回收 ${ke(e.reclaimable || 0)}`
					} : { figure: "没有重复内容" })
				}),
				/* @__PURE__ */ G(Ut, {
					section: "ads",
					label: "垃圾文件",
					icon: qt,
					open: n,
					value: Ht(s, (e) => ({
						figure: `${Number(e.pending_total || 0).toLocaleString()} 个待判断`,
						meta: Me(e)
					}))
				}),
				/* @__PURE__ */ G(Ut, {
					section: "trash",
					label: "回收站",
					icon: Jt,
					open: n,
					value: Ht(c, (e) => ({
						figure: `${Number(e.total || 0).toLocaleString()} 项在回收站`,
						meta: e.total ? `占用 ${ke(e.bytes || 0)}` : ""
					}))
				})
			]
		}),
		/* @__PURE__ */ K("div", {
			className: "flex flex-col gap-4 max-cleanup-tight:gap-3",
			children: [
				/* @__PURE__ */ G("div", {
					id: "libraryProcessing",
					className: "scroll-mt-20",
					children: /* @__PURE__ */ G(h, {
						toast: d,
						monitor: !0,
						onComplete: Xt
					})
				}),
				/* @__PURE__ */ G("div", {
					id: "mediaRepair",
					children: /* @__PURE__ */ G(mt, { toast: d })
				}),
				/* @__PURE__ */ G(kt, {
					toast: d,
					failure: t
				})
			]
		}),
		/* @__PURE__ */ G(wt, {}),
		/* @__PURE__ */ G(Pt, { toast: d }),
		je(u.data) ? /* @__PURE__ */ G(Vt, { toast: e }) : null
	] });
}
export { Zt as DataCleanupPage };

//# debugId=2c57cb8b-6169-47fc-961e-15356830c3bd