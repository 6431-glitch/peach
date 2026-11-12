(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fff04a69-5726-49d7-b24a-a62aa2d5c5ff", e._sentryDebugIdIdentifier = "sentry-dbid-fff04a69-5726-49d7-b24a-a62aa2d5c5ff");
	} catch {}
})();
import { BATCH_DELETE_TEXT as e, Button as t, CLEANUP_ENTRY as n, CLEANUP_ENTRY_GRID as r, CLEANUP_HASH_REDIRECTS as i, CLEANUP_TOOLS as a, Chip as o, DIRECTORY_TEMPLATE_ERROR as s, DUPLICATES_KEY as c, Fieldset as l, FieldsetTitle as u, IDLE_REPAIR as d, IconButton as f, IndexSearch as p, Input as m, JUNK_KEY as h, LINKS_KEY as g, LINK_CHECK_KEY as _, LINK_KINDS as v, LINK_PRUNE_KEY as ee, LOC as y, LibraryProcessingCard as b, MEDIA_REPAIR_KEY as x, MEDIA_REPAIR_URL as S, MEDIA_SOURCES_KEY as te, MEDIA_SOURCE_ICONS as C, Note as w, ORGANIZE_KEY as T, ORGANIZE_PARAMETER_HINT as ne, ORGANIZE_SCOPE_HINT as re, ORGANIZE_TEXT as ie, ORPHAN_RECORDS_KEY as E, ORPHAN_RECORDS_TEXT as D, PERFORMER_DELETE_KEY as O, PLAIN_STAT_STRIP as k, PlainStat as A, Progress as ae, QUALITY_GOALS_KEY as oe, REPAIR_CARD_TEXT as j, REPAIR_LIBRARIES_KEY as se, RESOURCE_APPLY_KEY as ce, RESOURCE_SCAN_KEY as M, RESOURCE_SYNC_TEXT as le, RESULT_PANEL as ue, RESULT_SECTION as N, REVIEW_COUNTS_KEY as P, SOURCE_LABELS as F, SectionHeading as I, Select as de, SelectItem as fe, SourceMark as pe, StatusLabel as me, TRASH_KEY as L, TaskProgress as R, Wt as he, __toESM as ge, apiSend as z, applyConfirmText as _e, applyLeftovers as ve, applyPlanText as ye, applyText as be, attachOrphan as B, baseName as xe, busyProps as V, candidateText as H, checkLine as Se, confirmModal as U, cx as Ce, deletePerformerVideos as we, entityDisplayName as Te, entityFaceImg as Ee, entityPath as De, errorMessage as W, esc as Oe, fetchDeletePerformers as ke, fetchDeletePlan as Ae, fetchDuplicates as je, fetchJunkSummary as Me, fetchLinkCheck as Ne, fetchLinkPrune as Pe, fetchLinkStats as Fe, fetchMediaRepair as Ie, fetchMediaSources as Le, fetchOrganize as Re, fetchOrganizeExample as ze, fetchOrphanRecords as Be, fetchQualityGoals as Ve, fetchRepairLibraries as He, fetchResourceApply as Ue, fetchResourceScan as We, fetchReviewCounts as Ge, fetchTrashSummary as Ke, firstGrapheme as qe, fmtSize as G, hasChanges as Je, hasResourceRoots as Ye, import_jsx_runtime as K, jsx as q, jsxs as J, junkBreakdown as Xe, missingToolText as Ze, organizeOutcome as Qe, peachHistory$1 as $e, pickOrganizeFolder as et, plainStatClass as tt, planSummary as nt, previewOrganize as rt, pruneText as it, purgeCount as at, purgeOrphan as ot, queryClient as Y, recordsText as st, rememberTemplates as ct, require_react as lt, reviewSummary as ut, scanLine as dt, sourceMeta as ft, spriteGlyph as X, startLinkCheck as pt, startLinkPrune as mt, startOrganize as ht, startResourceApply as gt, startResourceScan as _t, statusLine as vt, t as Z, translate as yt, useAction as bt, useBackgroundJob as xt, useEntityNames as St, useMutation as Ct, useOrderedLibraries as wt, useQuery as Q, withOrganizeJob as Tt } from "./peach-app.js";
import { Page as Et } from "./peach-app.page-CW3QRN2N.js";
import { ErrorExcerpt as Dt } from "./peach-app.error-excerpt-CmCsvvvN.js";
import { DataTable as Ot } from "./peach-app.data-table-B_WL0g6J.js";
import { SiteMark as kt } from "./peach-app.site-mark-B3G3SZCA.js";
import { LEGACY_AVATAR_IMG as At } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as jt } from "./peach-app.folder-rows-Dtg3TMSn.js";
import { ConnectionStatus as Mt } from "./peach-app.connection-status-BjZE05sg.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var $ = /* @__PURE__ */ ge(lt(), 1), Nt = X("chevron-right");
function Pt({ label: e, icon: t, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ J("button", {
		type: "button",
		...o,
		className: n.face,
		onClick: s,
		"data-entry-state": a,
		"aria-busy": a === "loading" || void 0,
		children: [
			/* @__PURE__ */ q("span", {
				"aria-hidden": !0,
				className: n.icon,
				children: /* @__PURE__ */ q(t, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ J("span", {
				className: n.body,
				children: [
					/* @__PURE__ */ q("span", {
						className: n.title,
						children: e
					}),
					/* @__PURE__ */ q("span", {
						className: Ce(n.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ q("span", {
						className: n.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ q(Nt, {
				"aria-hidden": !0,
				className: n.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Ft = (e) => C[e] || e, It = (e) => Y.setQueryData(x, e);
function Lt({ toast: e = () => {} }) {
	let n = xt({
		queryKey: x,
		queryFn: ({ signal: e }) => Ie(e),
		start: (e) => z(S, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? Z("cleanup:mediaRepair.repaired", { count: t.repaired }) : Z("cleanup:mediaRepair.nothingToRepair"));
		}
	}), r = Q({
		queryKey: se,
		queryFn: ({ signal: e }) => He(e)
	}), [i, a] = (0, $.useState)(""), o = bt(), s = n.job ?? d, c = wt(r.data ?? [], (e) => e.id), f = s.status === "running", p = c.find((e) => e.id === (f ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], m = () => {
		p && U({
			title: Z("cleanup:mediaRepair.confirmTitle", { name: p.name }),
			body: [Z("cleanup:mediaRepair.body"), ...p.metered ? [Z("cleanup:mediaRepair.meteredWarning")] : []].join(Z("cleanup:shared.sentenceGap")),
			confirmLabel: Z("cleanup:mediaRepair.confirm"),
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => z(S, { stop: !0 }, "POST", e), It), g = n.outcome, _ = vt(f ? s : g ?? d), v = o.error || g?.error || (n.query.error ? Z("cleanup:mediaRepair.statusUnavailable") : "");
	return /* @__PURE__ */ J("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ q(l, {
			layout: "split",
			label: Z("cleanup:tools.mediaRepair"),
			footer: /* @__PURE__ */ J(K.Fragment, { children: [/* @__PURE__ */ q(de, {
				"aria-label": Z("cleanup:mediaRepair.library"),
				prefix: Z("cleanup:mediaRepair.library"),
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !c.length,
				"aria-busy": r.isPending || void 0,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ J(fe, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ q(pe, { mark: Ft(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ q(t, {
				onClick: h,
				...V(o.busy === "stop"),
				children: Z("cleanup:shared.stop")
			}) : /* @__PURE__ */ q(t, {
				onClick: m,
				disabled: !p,
				children: Z("cleanup:mediaRepair.start")
			})] }),
			children: /* @__PURE__ */ J("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ q(u, { children: Z("cleanup:tools.mediaRepair") }),
					/* @__PURE__ */ q("p", {
						className: "text-body-2-regular text-text-secondary",
						children: j
					}),
					f && s.total ? /* @__PURE__ */ q(ae, {
						label: Z("cleanup:mediaRepair.progress"),
						value: s.checked,
						max: s.total
					}) : null,
					_ ? /* @__PURE__ */ q("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: _
					}) : null
				]
			})
		}), /* @__PURE__ */ J("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [
				g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ q(w, {
					tone: "warning",
					title: Z("cleanup:mediaRepair.missingTool"),
					action: /* @__PURE__ */ q(t, {
						variant: "ghost",
						size: "small",
						onClick: n.dismiss,
						children: Z("cleanup:mediaRepair.dismiss")
					}),
					children: Ze(g)
				}) : null,
				r.isError ? /* @__PURE__ */ q(w, {
					tone: "error",
					children: Z("cleanup:mediaRepair.librariesUnavailable")
				}) : null,
				v ? /* @__PURE__ */ q(w, {
					tone: "error",
					children: v
				}) : null
			]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function Rt({ className: e }) {
	return /* @__PURE__ */ J("svg", {
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
			/* @__PURE__ */ q("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ q("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ J("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ q("path", { d: "M8 2v3" }),
					/* @__PURE__ */ q("path", { d: "M2 8h3" }),
					/* @__PURE__ */ q("path", { d: "M16 19v3" }),
					/* @__PURE__ */ q("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var zt = X("rotate-cw"), Bt = Z("cleanup:links.goneHint"), Vt = Z("cleanup:links.unclearHint"), Ht = Z("cleanup:links.pruneHint"), Ut = Z("cleanup:shared.reconnecting"), Wt = (e) => Number(e || 0).toLocaleString();
function Gt({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ J("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ q("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ q("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ q("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function Kt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	if (!t.length) return null;
	let c = [
		{
			id: "entity",
			label: Z("cleanup:links.columnEntry"),
			width: 180,
			min: 128,
			value: (e) => e.entity,
			render: (e) => /* @__PURE__ */ J("a", {
				className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
				href: e.entity_id && e.entity_kind ? De(e.entity_kind, e.entity, e.entity_id) : void 0,
				"data-link-identity": "",
				children: [/* @__PURE__ */ q("span", {
					"data-link-avatar": "",
					className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${At}`,
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
				}), /* @__PURE__ */ q("span", {
					className: "min-w-0 wrap-anywhere",
					children: e.entity
				})]
			})
		},
		{
			id: "kind",
			label: Z("cleanup:shared.type"),
			width: 128,
			value: (e) => v[e.link_kind] || e.link_kind,
			render: (e) => v[e.link_kind] || e.link_kind
		},
		{
			id: "label",
			label: Z("cleanup:links.columnName"),
			min: 128,
			value: (e) => e.label || "",
			render: (e) => /* @__PURE__ */ q("span", {
				className: "flex min-w-24 items-center gap-2",
				"data-link-name": "",
				children: /* @__PURE__ */ q("span", {
					className: "min-w-0 wrap-anywhere",
					children: e.label || new URL(e.url).hostname
				})
			})
		},
		{
			id: "note",
			label: Z("cleanup:links.columnResult"),
			width: 320,
			min: 192,
			value: (e) => e.note,
			render: (e) => /* @__PURE__ */ q("div", {
				className: "min-w-0 w-full",
				"data-link-result": s ? "gone" : "unclear",
				children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ q(me, {
					tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
					"data-link-code": "",
					children: e.note.trim()
				}) : /* @__PURE__ */ J("div", {
					className: "flex flex-col items-start gap-1",
					children: [/* @__PURE__ */ q(me, {
						tone: s ? "error" : "warning",
						children: Z(s ? "cleanup:links.dead" : "cleanup:links.inconclusive")
					}), /* @__PURE__ */ q(Dt, {
						text: e.note,
						className: "tabular-nums text-text-secondary"
					})]
				})
			})
		},
		{
			id: "url",
			label: Z("cleanup:links.columnUrl"),
			width: 360,
			min: 180,
			value: (e) => e.url,
			render: (e) => /* @__PURE__ */ J("a", {
				href: e.url,
				target: "_blank",
				rel: "noopener noreferrer",
				title: e.url,
				"data-link-address": "",
				className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
				children: [
					/* @__PURE__ */ q(kt, { linkId: e.id }),
					/* @__PURE__ */ q("span", {
						"data-middle-truncate": !0,
						className: "min-w-0 truncate",
						children: e.url
					}),
					/* @__PURE__ */ q(he, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})
				]
			})
		}
	];
	return /* @__PURE__ */ q("div", {
		className: N,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ q(Ot, {
			label: e,
			items: t,
			columns: c,
			rowId: (e) => String(e.id),
			description: n,
			unit: Z("cleanup:links.unit"),
			panel: !1,
			footerActions: o,
			rowLabel: (e) => Z("cleanup:links.rowLabel", {
				entity: e.entity,
				link: e.label || e.url
			}),
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	});
}
function qt() {
	let e = Q({
		queryKey: g,
		queryFn: ({ signal: e }) => Fe(e)
	}), [n, r] = (0, $.useState)([]), [i, a] = (0, $.useState)([]), s = xt({
		queryKey: ee,
		queryFn: ({ signal: e }) => Pe(e),
		start: mt,
		onFinish: () => {
			Y.invalidateQueries({
				queryKey: g,
				exact: !0
			}), Y.invalidateQueries({
				queryKey: _,
				exact: !0
			});
		}
	}), c = xt({
		queryKey: _,
		queryFn: ({ signal: e }) => Ne(e),
		start: pt,
		onStarted: () => {
			s.dismiss(), r([]), a([]);
		}
	}), d = c.job, f = d?.check_id ?? "";
	(0, $.useEffect)(() => {
		r([]), a([]);
	}, [f]);
	let p = c.running || c.start.isPending, m = s.running || s.start.isPending, h = !!c.job && !!s.job, y = d?.status === "complete", b = d?.gone ?? [], x = d?.unclear ?? [], S = y ? x : [], te = b.filter((e) => i.includes(e.id)).map((e) => e.id), C = S.filter((e) => n.includes(e.id)).map((e) => e.id), T = e.data, ne = (T?.top_hosts ?? []).slice(0, 3), re = (e) => {
		!h || p || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, ie = (e) => {
		h && !m && b.length && U({
			title: Z("cleanup:links.deleteDead"),
			body: Z("cleanup:links.deleteDeadBody", { count: e?.length ?? b.length }),
			confirmLabel: Z("cleanup:links.deleteDead"),
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, E = s.outcome, D = c.start.error ?? s.start.error, O = null, k = null;
	if (E?.status === "failed") k = /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:links.pruneIncomplete"),
		children: E.error || Z("cleanup:links.checkTaskLog")
	});
	else if (E && !b.length && !x.length) k = /* @__PURE__ */ q(w, {
		tone: "success",
		title: Z("cleanup:links.pruneDone"),
		children: it(E)
	});
	else if (D) k = /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:links.checkFailed"),
		children: W(D)
	});
	else if (c.query.isError && d) k = /* @__PURE__ */ q(w, {
		tone: "neutral",
		title: Z("cleanup:shared.taskStatus"),
		children: Ut
	});
	else if (d?.status === "failed") k = /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:links.checkFailed"),
		children: d.error || Z("cleanup:links.checkFailed")
	});
	else if (d && d.status !== "idle") {
		O = /* @__PURE__ */ J(K.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ q(R, {
			embedded: !0,
			label: Se(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ q(R, {
			embedded: !0,
			label: s.job?.message || Z("cleanup:links.pruning"),
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let e = Z("cleanup:links.retrySelected", { count: C.length });
		k = y || b.length || x.length ? /* @__PURE__ */ J("div", {
			className: ue,
			children: [
				E?.status === "complete" ? /* @__PURE__ */ q(w, {
					tone: "success",
					title: Z("cleanup:links.pruneDone"),
					children: it(E)
				}) : null,
				/* @__PURE__ */ q(Kt, {
					title: Z("cleanup:links.dead"),
					items: b,
					hint: Bt,
					picked: i,
					onPick: a,
					confirmed: !0,
					footer: y && b.length ? /* @__PURE__ */ J(K.Fragment, { children: [/* @__PURE__ */ q("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: Ht
					}), /* @__PURE__ */ q(t, {
						variant: "danger",
						...V(m),
						onClick: () => ie(),
						children: Z("cleanup:links.deleteDeadCount", { count: b.length })
					})] }) : null,
					children: /* @__PURE__ */ q(t, {
						variant: "danger",
						size: "small",
						disabled: !y || !te.length,
						...V(m),
						onClick: () => ie(te),
						children: Z("cleanup:links.deleteSelected", { count: te.length })
					})
				}),
				/* @__PURE__ */ q(Kt, {
					title: Z("cleanup:links.unreached"),
					items: x,
					hint: Vt,
					picked: n,
					onPick: r,
					footer: S.length ? /* @__PURE__ */ q(t, {
						variant: "primary",
						leadingIcon: zt,
						...V(p),
						onClick: () => re(S.map((e) => e.id)),
						children: Z("cleanup:links.retryAll", { count: S.length })
					}) : null,
					children: S.length ? /* @__PURE__ */ q(K.Fragment, { children: /* @__PURE__ */ q(t, {
						variant: "secondary",
						leadingIcon: zt,
						disabled: !C.length,
						...V(p),
						onClick: () => re(C),
						children: e
					}) }) : null
				}),
				y && !b.length && !x.length ? /* @__PURE__ */ q("p", {
					className: `${N} text-body-regular text-notification-success-foreground`,
					children: Z("cleanup:links.allReachable")
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ J("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ J(l, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ q(t, {
				"data-link-check": "",
				leadingIcon: Rt,
				disabled: !h,
				...V(p),
				onClick: () => re(),
				children: Z(p ? "cleanup:links.checking" : y ? "cleanup:links.checkAgain" : "cleanup:links.checkLinks")
			}),
			children: [
				/* @__PURE__ */ q(u, {
					id: "link-manager-title",
					gap: "small",
					children: Z("cleanup:tools.links")
				}),
				e.isError ? /* @__PURE__ */ q(w, {
					tone: "error",
					title: Z("cleanup:links.statsLoadFailed"),
					children: W(e.error)
				}) : T ? /* @__PURE__ */ J(K.Fragment, { children: [/* @__PURE__ */ J("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ q(Gt, {
						label: Z("cleanup:links.totalLinks"),
						value: Wt(T.total),
						note: Z("cleanup:links.entitySpread", { count: Number(T.entities || 0) })
					}), Object.entries(T.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ q(Gt, {
						label: v[e] || e,
						value: Wt(t)
					}, e))]
				}), ne.length ? /* @__PURE__ */ J("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ q("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: Z("cleanup:links.topSites")
					}), /* @__PURE__ */ q("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: ne.map(([e, t]) => /* @__PURE__ */ J("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ J("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ q(kt, { linkId: T.top_host_link_ids?.[e] }),
									/* @__PURE__ */ q("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ q(he, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ q(o, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ q("span", {
									className: "tabular-nums",
									children: Wt(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ q("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: O
				})
			]
		}), /* @__PURE__ */ q("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: k
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Jt = (e, t) => t ? Z("cleanup:organize.applyBodyPath", {
	name: e,
	path: t
}) : Z("cleanup:organize.applyBodyAll", { name: e }), Yt = Z("cleanup:organize.rollbackBody"), Xt = 8;
function Zt({ plan: e }) {
	return /* @__PURE__ */ J(K.Fragment, { children: [/* @__PURE__ */ q("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Xt).map((e) => /* @__PURE__ */ J("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ q("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: xe(e.current_path)
				}),
				/* @__PURE__ */ q("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ q("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: xe(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Xt ? /* @__PURE__ */ q("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: Z("cleanup:organize.planTruncated")
	}) : null] });
}
function Qt({ toast: e, failure: n }) {
	let r = Q({
		queryKey: T,
		queryFn: ({ signal: e }) => Re(e)
	}), i = r.data, a = i?.locations ?? [], [o, c] = (0, $.useState)(""), d = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", p = i?.templates?.[d], [h, g] = (0, $.useState)(null), _ = h?.location === d ? h : {
		location: d,
		file: p?.file ?? "",
		dir: p?.dir ?? ""
	}, v = (e) => {
		g({
			..._,
			...e
		}), N.reset();
	}, [ee, b] = (0, $.useState)({
		location: "",
		path: ""
	}), x = ee.location === d ? ee.path : "", [S, te] = (0, $.useState)({
		location: "",
		path: ""
	}), E = S.location === d ? S.path : "", D = (0, $.useRef)({
		location: d,
		path: x
	});
	D.current = {
		location: d,
		path: x
	};
	let [O, k] = (0, $.useState)(null), A = (0, $.useRef)(null), ae = (0, $.useRef)(null), oe = (0, $.useRef)(null), j = Q({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => ze(_.file, _.dir, e),
		enabled: !!i
	}), [se, ce] = (0, $.useState)("file"), M = (0, $.useRef)(!1), le = (0, $.useRef)(null);
	(0, $.useLayoutEffect)(() => {
		let e = le.current;
		if (!e) return;
		le.current = null;
		let t = (e.field === "file" ? A : ae).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let ue = () => ({
		location: d,
		path: x.trim(),
		...E.trim() ? { destination: E.trim() } : {},
		file_template: _.file.trim(),
		dir_template: _.dir.trim()
	}), N = Ct({
		mutationFn: rt,
		onError: (e) => {
			let t = /整理路径/.test(W(e)) ? "path" : s.test(W(e)) ? "dir" : "file";
			k(t), (t === "path" ? oe : t === "dir" ? ae : A).current?.focus();
		}
	}), P = Ct({
		mutationFn: ({ initial: e }) => et(e),
		onSuccess: (e, t) => {
			e.path && t.location === D.current.location && t.path === D.current.path && (b({
				location: t.location,
				path: e.path
			}), k(null), N.reset(), oe.current?.focus());
		}
	}), F = xt({
		queryKey: T,
		queryFn: ({ signal: e }) => Re(e),
		start: ht,
		jobOf: (e) => e,
		withJob: Tt,
		onStarted: () => N.reset(),
		onFinish: (t) => {
			if (Y.invalidateQueries({
				queryKey: T,
				exact: !0
			}), t.status !== "complete") return;
			let { text: r, failed: i } = Qe(t);
			i ? n(Z("cleanup:tools.organize"), Error(Z("cleanup:organize.rowsFailed", { count: i }))) : e(r.replace(/。$/, ""));
		}
	}), I = F.running || F.start.isPending, me = JSON.stringify(N.variables) === JSON.stringify(ue()), L = me ? N.data : void 0, he = Number(L?.counts?.change || 0), ge = y[d] || d, z = (e) => {
		v(e), k(null), N.reset();
	}, _e = (e) => {
		let t = (se === "file" ? A : ae).current, n = _[se], r = M.current ? t?.selectionStart ?? n.length : n.length, i = M.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		le.current = {
			field: se,
			caret: r + a.length
		}, z({ [se]: n.slice(0, r) + a + n.slice(i) });
	}, ve = () => {
		N.isPending || I || !d || (F.dismiss(), F.start.reset(), k(null), N.mutate(ue()));
	}, ye = () => {
		let e = N.variables;
		e && L && he && U({
			title: Z("cleanup:tools.organize"),
			body: Jt(ge, e.path) + (e.destination ? ` ${Z("cleanup:organize.destinationConfirm", { path: e.destination })}` : ""),
			confirmLabel: Z("cleanup:tools.organize"),
			onConfirm: async () => {
				await F.start.mutateAsync({
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
	}, be = () => void U({
		title: Z("cleanup:organize.rollbackTitle"),
		body: Yt,
		confirmLabel: Z("cleanup:organize.rollbackConfirm"),
		onConfirm: () => F.start.mutateAsync({ kind: "rollback" })
	}), B = null, xe = !!he && !I && !F.outcome, H = F.job, Se = F.outcome;
	if (H?.status === "running") {
		let e = H.message || H.stage || Z("cleanup:organize.running");
		B = /* @__PURE__ */ q(R, {
			embedded: !0,
			label: e,
			value: Math.min(H.checked || 0, H.total || 0),
			total: H.total
		});
	} else if (Se?.status === "failed") B = /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:organize.incomplete"),
		children: Se.error || Z("cleanup:shared.checkTaskLogFiles")
	});
	else if (Se) {
		let { text: e, failed: t } = Qe(Se);
		B = /* @__PURE__ */ q(w, {
			tone: t ? "warning" : "success",
			title: Z(t ? "cleanup:shared.partiallyCompleted" : "cleanup:organize.result"),
			children: e
		});
	} else F.start.isError ? B = /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:organize.failed"),
		children: W(F.start.error)
	}) : N.isPending ? B = /* @__PURE__ */ q(R, {
		embedded: !0,
		label: Z("cleanup:organize.checkingPlan")
	}) : N.isError && me ? B = /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:organize.previewFailed"),
		children: W(N.error)
	}) : L && (B = /* @__PURE__ */ J(K.Fragment, { children: [/* @__PURE__ */ q(w, {
		tone: "neutral",
		title: Z("cleanup:organize.previewResult"),
		children: nt(L)
	}), he ? /* @__PURE__ */ q(Zt, { plan: L }) : null] }));
	return /* @__PURE__ */ J(l, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ J(K.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ q(t, {
				variant: "secondary",
				...V(I),
				onClick: be,
				children: Z("cleanup:organize.rollbackLastBatch")
			}) : null,
			/* @__PURE__ */ q(t, {
				variant: xe ? "secondary" : "primary",
				disabled: !a.length || I,
				...V(N.isPending),
				onClick: ve,
				children: Z("cleanup:organize.preview")
			}),
			xe ? /* @__PURE__ */ q(t, {
				variant: "primary",
				onClick: ye,
				children: Z("cleanup:organize.apply")
			}) : null
		] }),
		children: [
			/* @__PURE__ */ q(u, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: Z("cleanup:organize.title")
			}),
			/* @__PURE__ */ q("p", {
				className: "text-body-regular text-text-secondary",
				children: ie
			}),
			r.isError ? /* @__PURE__ */ q("div", {
				className: "mt-3",
				children: /* @__PURE__ */ q(w, {
					tone: "error",
					title: Z("cleanup:organize.settingsLoadFailed"),
					children: W(r.error)
				})
			}) : null,
			/* @__PURE__ */ J("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ J("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ q(de, {
							"aria-label": Z("cleanup:organize.storageLabel"),
							prefix: Z("cleanup:organize.storagePrefix"),
							className: "w-fit min-w-25",
							selectedKey: d || null,
							onSelectionChange: (e) => {
								e !== null && (c(String(e)), b({
									location: String(e),
									path: ""
								}), k(null), N.reset(), P.reset(), M.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ J(fe, {
								id: e.location,
								textValue: y[e.location] || e.location,
								children: [/* @__PURE__ */ q(pe, { mark: C[e.location] || "database" }), y[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ J("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ q(m, {
								"aria-label": Z("cleanup:organize.pathLabel"),
								className: "min-w-0 flex-1",
								placeholder: Z("cleanup:organize.pathPlaceholder"),
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: oe,
								isInvalid: O === "path",
								onChange: (e) => {
									b({
										location: d,
										path: e
									}), k(null), N.reset(), P.reset();
								}
							}), /* @__PURE__ */ q(f, {
								icon: jt,
								"aria-label": Z("cleanup:organize.choosePath"),
								...V(P.isPending),
								onClick: () => P.mutate({
									initial: x || a.find((e) => e.location === d)?.roots[0] || "",
									location: d,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ q("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: re
					}),
					/* @__PURE__ */ q(m, {
						label: Z("cleanup:organize.destinationLabel"),
						placeholder: Z("cleanup:organize.destinationPlaceholder"),
						value: E,
						autoComplete: "off",
						spellCheck: "false",
						onChange: (e) => {
							te({
								location: d,
								path: e
							}), N.reset();
						}
					}),
					P.isError ? /* @__PURE__ */ J(w, {
						tone: "error",
						title: Z("cleanup:organize.pickerFailed"),
						children: [W(P.error), Z("cleanup:organize.pickerFallback")]
					}) : null,
					/* @__PURE__ */ q(m, {
						label: Z("cleanup:organize.fileTemplate"),
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: A,
						spellCheck: "false",
						isInvalid: O === "file",
						onFocus: () => {
							ce("file"), M.current = !0;
						},
						onChange: (e) => z({ file: e })
					}),
					/* @__PURE__ */ q(m, {
						label: Z("cleanup:organize.dirTemplate"),
						placeholder: Z("cleanup:organize.dirTemplatePlaceholder"),
						value: _.dir,
						ref: ae,
						spellCheck: "false",
						isInvalid: O === "dir",
						onFocus: () => {
							ce("dir"), M.current = !0;
						},
						onChange: (e) => z({ dir: e })
					}),
					i?.presets?.length ? /* @__PURE__ */ J("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Z("cleanup:organize.applyPreset"),
						children: [/* @__PURE__ */ q("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: Z("cleanup:organize.applyPreset")
						}), /* @__PURE__ */ q("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((e) => /* @__PURE__ */ q(t, {
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
								children: /* @__PURE__ */ q("span", {
									className: "truncate",
									children: yt(e.label)
								})
							}, e.label))
						})]
					}) : null,
					/* @__PURE__ */ J("p", {
						"aria-live": "polite",
						"aria-busy": j.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [Z("cleanup:organize.examplePath"), /* @__PURE__ */ q("code", {
							className: "wrap-anywhere",
							children: j.data?.example || j.data?.error || (j.isError ? W(j.error) : Z("cleanup:organize.previewLoading"))
						})]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ J("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Z("cleanup:organize.insertParameter"),
						children: [/* @__PURE__ */ J("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [/* @__PURE__ */ q("strong", {
								className: "text-caption-1-semibold text-text-primary",
								children: Z("cleanup:organize.insertParameter")
							}), Z("cleanup:organize.insertTarget", { target: Z(se === "file" ? "cleanup:organize.fileTemplate" : "cleanup:organize.dirTemplate") })]
						}), /* @__PURE__ */ q("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => /* @__PURE__ */ q(t, {
								variant: "ghost",
								size: "small",
								"aria-label": `${yt(e.label)} {${e.key}}`,
								onClick: () => _e(e.key),
								children: /* @__PURE__ */ J("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ q("code", { children: `{${e.key}}` }), /* @__PURE__ */ q("span", {
										className: "text-text-secondary",
										children: yt(e.label)
									})]
								})
							}, e.key))
						})]
					}) : null,
					/* @__PURE__ */ q("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: yt(ne)
					})
				]
			}),
			/* @__PURE__ */ q("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: B
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var $t = X("play"), en = () => Y.invalidateQueries({
	queryKey: E,
	exact: !0
});
function tn({ item: e, toast: n }) {
	let [r, i] = (0, $.useState)(e.candidates[0]?.id ?? null), a = Ct({
		mutationFn: () => B(e.id, Number(r)),
		onSuccess: () => {
			let t = e.candidates.find((e) => e.id === r);
			n(Z("cleanup:orphans.attached", {
				name: e.name,
				target: t?.name ?? Z("cleanup:orphans.selectedFile")
			})), en();
		},
		onError: (e) => n(W(e))
	}), o = Ct({
		mutationFn: () => ot(e.id),
		onSuccess: (t) => {
			n(t.blocked.length ? Z("cleanup:orphans.fileRestored", { name: e.name }) : Z("cleanup:orphans.recordDeleted", { name: e.name })), en();
		}
	}), s = () => {
		U({
			title: Z("cleanup:orphans.deleteRecord"),
			body: st(e.records) ? Z("cleanup:orphans.deleteBodyWithActivity", {
				name: e.name,
				records: st(e.records)
			}) : Z("cleanup:orphans.deleteBody", { name: e.name }),
			confirmLabel: Z("cleanup:orphans.deleteRecord"),
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ J("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ q(t, {
				variant: "danger",
				size: "small",
				...V(c),
				onClick: s,
				children: Z("cleanup:orphans.deleteRecord")
			}),
			e.candidates.length ? /* @__PURE__ */ q(de, {
				"aria-label": Z("cleanup:orphans.targetLabel", { name: e.name }),
				prefix: Z("cleanup:orphans.targetPrefix"),
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ q(fe, {
					id: e.id,
					textValue: H(e),
					children: H(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ q(t, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...V(c),
				onClick: () => a.mutate(),
				children: Z("cleanup:orphans.moveActivity")
			}) : null
		]
	});
}
function nn({ item: e }) {
	return /* @__PURE__ */ J("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ J("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ q($t, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ q("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ J("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ q("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ q("small", {
				className: "truncate text-caption-1-regular text-text-secondary",
				children: [e.code, y[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function rn({ toast: e }) {
	let [n, r] = (0, $.useState)([]), i = Q({
		queryKey: E,
		queryFn: ({ signal: e }) => Be(e)
	}), a = i.data?.items ?? [], o = Ct({
		mutationFn: (e) => ot(e),
		onSuccess: (t) => {
			e(Z("cleanup:orphans.purged", { count: t.purged }) + (t.blocked.length ? Z("cleanup:orphans.purgedBlocked", { count: t.blocked.length }) : "")), r([]), en();
		}
	}), s = (e) => void U({
		title: Z("cleanup:orphans.deleteSelectedTitle"),
		body: Z("cleanup:orphans.deleteSelectedBody", { count: e.length }),
		items: e.map((e) => e.name),
		confirmLabel: Z("cleanup:orphans.deleteSelectedTitle"),
		danger: !0,
		onConfirm: () => o.mutateAsync(e.map((e) => e.id))
	}), c = [
		{
			id: "item",
			label: Z("cleanup:shared.video"),
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ q(nn, { item: e })
		},
		{
			id: "records",
			label: Z("cleanup:orphans.columnActivity"),
			width: 176,
			min: 144,
			value: (e) => st(e.records),
			render: (e) => /* @__PURE__ */ q("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: st(e.records) || Z("cleanup:shared.none")
			})
		},
		{
			id: "target",
			label: Z("cleanup:shared.actions"),
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ q(tn, {
				item: t,
				toast: e
			})
		}
	];
	return /* @__PURE__ */ q("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: i.isError ? /* @__PURE__ */ J(l, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ q(u, {
				id: "orphan-records-title",
				children: Z("cleanup:tools.orphanRecords")
			}), /* @__PURE__ */ q(w, {
				tone: "error",
				title: Z("cleanup:orphans.loadFailed"),
				children: W(i.error)
			})]
		}) : /* @__PURE__ */ q(Ot, {
			label: Z("cleanup:orphans.tableLabel"),
			items: a,
			columns: c,
			title: Z("cleanup:tools.orphanRecords"),
			titleId: "orphan-records-title",
			unit: Z("cleanup:orphans.unit"),
			description: D,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (e) => /* @__PURE__ */ q(t, {
				variant: "danger",
				size: "small",
				disabled: !e.length,
				...V(o.isPending),
				onClick: () => s(e),
				children: Z("cleanup:orphans.deleteSelectedCount", { count: e.length })
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function an({ person: e }) {
	let t = Te("performer", e.k, e.entity_id);
	return /* @__PURE__ */ J("a", {
		href: De("performer", e.k, e.entity_id),
		title: t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ q("span", {
			"aria-hidden": !0,
			className: Ce("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", At),
			dangerouslySetInnerHTML: { __html: `<span>${Oe(qe(t))}</span>` + Ee({
				kind: "performer",
				id: e.entity_id,
				hasImage: e.has_image,
				version: e.image_version,
				focus: e.avatar_focus,
				thumb: !0
			}) }
		}), /* @__PURE__ */ q("span", {
			className: "min-w-0 wrap-anywhere",
			children: t
		})]
	});
}
function on(e, t, n) {
	let r = (e) => e.slice(0, 5).join(Z("cleanup:shared.listSeparator")), i = e.length > 5 ? Z("cleanup:performerDelete.moreNames", {
		names: r(e),
		total: e.length
	}) : r(e), a = t.length > 5 ? Z("cleanup:performerDelete.moreExamples", {
		examples: r(t),
		total: t.length
	}) : r(t);
	return [
		Z("cleanup:performerDelete.bodyScope", {
			names: i,
			count: n.total,
			size: G(n.bytes)
		}),
		Z("cleanup:performerDelete.bodyWarning"),
		...n.shared ? [Z("cleanup:performerDelete.sharedFiles", { count: n.shared })] : [],
		Z("cleanup:performerDelete.bodyExamples", { examples: a })
	].join(Z("cleanup:shared.sentenceGap"));
}
function sn({ toast: n }) {
	St();
	let r = Q({
		queryKey: O,
		queryFn: ({ signal: e }) => ke(e)
	}), [i, a] = (0, $.useState)([]), [o, s] = (0, $.useState)(""), [c, d] = (0, $.useState)(!1), [f, m] = (0, $.useState)(null), [h, g] = (0, $.useState)(""), _ = (0, $.useRef)(null);
	(0, $.useEffect)(() => () => _.current?.abort(), []);
	let v = (0, $.useMemo)(() => [
		{
			id: "name",
			label: Z("cleanup:shared.actress"),
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ q(an, { person: e })
		},
		{
			id: "works",
			label: Z("cleanup:shared.videos"),
			width: 104,
			min: 80,
			value: (e) => e.n,
			render: (e) => Z("cleanup:performerDelete.videoCount", { count: e.n })
		},
		{
			id: "files",
			label: Z("cleanup:shared.files"),
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			render: (e) => Z("cleanup:performerDelete.fileCount", { count: e.file_count })
		},
		{
			id: "bytes",
			label: Z("cleanup:performerDelete.columnSize"),
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
				n(Z("cleanup:performerDelete.nothingToDelete"));
				return;
			}
			let a = i.performers.map((e) => Te("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await U({
				title: Z("cleanup:performerDelete.confirmTitle"),
				body: on(a, o, i),
				confirmLabel: Z("cleanup:performerDelete.confirm"),
				danger: !0,
				onConfirm: () => we(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			m(c), t(), await Promise.all([Y.invalidateQueries({
				queryKey: O,
				exact: !0
			}), Y.invalidateQueries({
				queryKey: L,
				exact: !0
			})]), n(Z("cleanup:performerDelete.purged", { count: c.purged }) + (c.blocked.length ? Z("cleanup:performerDelete.doneBlocked", { count: c.blocked.length }) : ""));
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
	return /* @__PURE__ */ J("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": Z("cleanup:tools.bulkDelete"),
		children: [
			r.isPending || r.isError ? /* @__PURE__ */ J(l, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ q(u, {
					id: "batch-delete-title",
					children: Z("cleanup:tools.bulkDelete")
				}), r.isError ? /* @__PURE__ */ q(w, {
					tone: "error",
					title: Z("cleanup:performerDelete.loadFailed"),
					action: /* @__PURE__ */ q(t, {
						variant: "secondary",
						size: "small",
						onClick: () => void r.refetch(),
						children: Z("cleanup:shared.retry")
					}),
					children: W(r.error)
				}) : /* @__PURE__ */ q("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: Z("cleanup:performerDelete.loading")
				})]
			}) : /* @__PURE__ */ q(Ot, {
				label: Z("cleanup:performerDelete.tableLabel"),
				title: Z("cleanup:tools.bulkDelete"),
				titleId: "batch-delete-title",
				unit: Z("cleanup:performerDelete.unit"),
				description: e,
				items: y,
				columns: v,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => Te("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ q(p, {
					label: Z("cleanup:performerDelete.search"),
					value: o,
					onQuery: (e) => {
						s(e), a([]);
					}
				}),
				actions: (e, n) => /* @__PURE__ */ q(t, {
					variant: "danger",
					size: "small",
					...V(c),
					onClick: () => void b(e, n),
					children: Z("cleanup:performerDelete.deleteSelected")
				})
			}),
			h ? /* @__PURE__ */ q(w, {
				tone: "error",
				title: Z("cleanup:performerDelete.planFailed"),
				children: h
			}) : null,
			f ? /* @__PURE__ */ q(w, {
				tone: x.length ? "warning" : "info",
				title: Z("cleanup:performerDelete.purged", { count: f.purged }),
				extra: x.length ? /* @__PURE__ */ q("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: x.slice(0, 5).map((e, t) => /* @__PURE__ */ J("p", { children: [
						e.path,
						"（",
						e.reason,
						"）"
					] }, t))
				}) : null,
				children: x.length ? Z("cleanup:performerDelete.partialFailure", {
					count: f.blocked.length,
					quarantined: f.cleanup_pending.length,
					cacheFiles: f.cache_blocked.length
				}) : Z("cleanup:performerDelete.done")
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var cn = X("git-compare"), ln = X("rotate-cw"), un = Z("cleanup:shared.reconnecting"), dn = Z("cleanup:resourceSync.cleanUpDead"), fn = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", pn = (e) => Number(e || 0).toLocaleString();
function mn({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ J(K.Fragment, { children: [/* @__PURE__ */ q("div", {
		className: fn,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ J("article", {
			className: tt(),
			children: [/* @__PURE__ */ q(A, {
				label: F[e.location] || Z("cleanup:resourceSync.storageFallback"),
				mark: /* @__PURE__ */ q(pe, { mark: C[e.location] ?? "database" }),
				aside: /* @__PURE__ */ q(Mt, {
					online: e.online,
					children: e.online ? Z("cleanup:resourceSync.online") : Z("cleanup:resourceSync.offline")
				}),
				figure: e.online ? Z("cleanup:resourceSync.missingCount", { count: Number(e.missing || 0) }) : "—",
				meta: e.online ? ft(e) : Z("cleanup:resourceSync.skipped", { summary: ft(e) }),
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ q("span", {
				className: "self-start",
				children: /* @__PURE__ */ J(me, {
					tone: "warning",
					children: [
						pn(e.unreadable),
						" ",
						Z("cleanup:resourceSync.unreadableDirs")
					]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ J("div", {
		className: fn,
		children: [
			/* @__PURE__ */ q("article", {
				className: tt(),
				children: /* @__PURE__ */ q(A, {
					label: Z("cleanup:resourceSync.toPurge"),
					figure: Z("cleanup:resourceSync.purgeCount", { count: Number(at(e) || 0) }),
					meta: Z("cleanup:resourceSync.purgeHint")
				})
			}),
			/* @__PURE__ */ q("article", {
				className: tt(),
				children: /* @__PURE__ */ q(A, {
					label: Z("cleanup:resourceSync.toVanish"),
					figure: Z("cleanup:resourceSync.vanishCount", { count: Number(e.vanish || 0) }),
					meta: Z("cleanup:resourceSync.vanishHint")
				})
			}),
			/* @__PURE__ */ q("article", {
				className: tt(),
				children: /* @__PURE__ */ q(A, {
					label: Z("cleanup:resourceSync.emptyDirs"),
					figure: Z("cleanup:resourceSync.emptyDirCount", { count: Number(e.empty || 0) }),
					meta: Z("cleanup:resourceSync.emptyDirsHint")
				})
			}),
			/* @__PURE__ */ q("article", {
				className: tt(),
				children: /* @__PURE__ */ q(A, {
					label: Z("cleanup:resourceSync.cache"),
					figure: Z("cleanup:resourceSync.cacheCount", { count: Number(n.files || 0) }),
					meta: n.files ? G(n.bytes) : ""
				})
			})
		]
	})] });
}
function hn({ toast: e }) {
	let n = xt({
		queryKey: ce,
		queryFn: ({ signal: e }) => Ue(e),
		start: gt,
		onFinish: (t) => {
			if (Y.invalidateQueries({
				queryKey: L,
				exact: !0
			}), Y.invalidateQueries({
				queryKey: M,
				exact: !0
			}), t.status !== "complete") return;
			let { done: n, left: r } = ve(t);
			r ? e(Z("cleanup:resourceSync.applyLeftovers", {
				done: pn(n),
				count: Number(r || 0)
			}), { warning: !0 }) : e(Z("cleanup:resourceSync.cleaned"));
		}
	}), r = xt({
		queryKey: M,
		queryFn: ({ signal: e }) => We(e),
		start: _t,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = !!r.job && !!n.job, c = i?.status === "complete" || i?.status === "failed", d = Z(a ? "cleanup:resourceSync.scanning" : c ? "cleanup:resourceSync.scanAgain" : "cleanup:resourceSync.checkFiles"), f = (e) => void U({
		title: dn,
		body: _e(e),
		confirmLabel: dn,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), p = n.outcome, m = (e) => {
		let t = ve(e).left > 0;
		return /* @__PURE__ */ q(w, {
			tone: t ? "warning" : "success",
			title: Z(t ? "cleanup:shared.partiallyCompleted" : "cleanup:resourceSync.cleanupResult"),
			children: be(e, G)
		});
	}, h = null, g = null;
	if (p?.status === "failed") g = /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:resourceSync.cleanupIncomplete"),
		children: p.error || Z("cleanup:shared.checkTaskLogFiles")
	});
	else if (p) g = m(p);
	else if (n.running) h = /* @__PURE__ */ q(R, {
		embedded: !0,
		label: n.job?.message || Z("cleanup:resourceSync.applying")
	});
	else if (r.start.isError) g = /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:resourceSync.scanFailed"),
		children: W(r.start.error)
	});
	else if (r.query.isError && i) g = /* @__PURE__ */ q(w, {
		tone: "neutral",
		title: Z("cleanup:shared.taskStatus"),
		children: un
	});
	else if (i?.status === "running") {
		let e = dt(i);
		h = /* @__PURE__ */ q(R, {
			embedded: !0,
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (g = /* @__PURE__ */ q(mn, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") g = /* @__PURE__ */ J(K.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ q(mn, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:resourceSync.scanFailed"),
		children: i.error || Z("cleanup:resourceSync.backgroundScanFailed")
	})] });
	else if (i?.status === "complete" && i.applied) g = n.job?.status === "complete" ? m(n.job) : /* @__PURE__ */ q(w, {
		tone: "neutral",
		title: Z("cleanup:resourceSync.cleanupResult"),
		children: Z("cleanup:resourceSync.alreadyCleaned")
	});
	else if (i?.status === "complete") {
		let e = Je(i);
		g = /* @__PURE__ */ J(K.Fragment, { children: [/* @__PURE__ */ q(mn, { scan: i }), e ? /* @__PURE__ */ q(w, {
			tone: "neutral",
			title: Z("cleanup:resourceSync.toClean"),
			action: /* @__PURE__ */ q(t, {
				variant: "danger",
				disabled: !s,
				...V(o),
				onClick: () => {
					s && f(i);
				},
				children: o ? Z("cleanup:resourceSync.applyingButton") : dn
			}),
			children: ye(i)
		}) : /* @__PURE__ */ q("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: Z("cleanup:resourceSync.nothingToClean")
		})] });
	}
	return n.start.isError && !p && (g = /* @__PURE__ */ J(K.Fragment, { children: [g, /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:resourceSync.cleanupFailed"),
		children: W(n.start.error)
	})] })), /* @__PURE__ */ J("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ J(l, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ q(t, {
				"data-resource-scan": !0,
				leadingIcon: c && !a ? ln : cn,
				disabled: !s,
				...V(a),
				onClick: () => {
					s && !a && r.start.mutate();
				},
				children: d
			}),
			children: [
				/* @__PURE__ */ q(u, {
					id: "resource-sync-title",
					gap: "small",
					children: Z("cleanup:tools.resourceSync")
				}),
				r.query.isPending || n.query.isPending ? /* @__PURE__ */ q("div", {
					role: "status",
					"aria-label": Z("cleanup:resourceSync.statusLoading"),
					"data-skeleton": "",
					className: "skeleton-sheen h-6 rounded-md"
				}) : null,
				!r.job && r.query.isError ? /* @__PURE__ */ q(w, {
					tone: "error",
					children: Z("cleanup:resourceSync.scanStatusUnavailable")
				}) : null,
				!n.job && n.query.isError ? /* @__PURE__ */ q(w, {
					tone: "error",
					children: Z("cleanup:resourceSync.applyStatusUnavailable")
				}) : null,
				/* @__PURE__ */ q("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: le
				}),
				/* @__PURE__ */ q("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: h
				})
			]
		}), /* @__PURE__ */ q("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: g
		})]
	});
}
// src/react/data-cleanup/data-cleanup-tool-page.tsx
function gn({ toast: e }) {
	let t = Q({
		queryKey: te,
		queryFn: ({ signal: e }) => Le(e)
	});
	return t.isError ? /* @__PURE__ */ q(w, {
		tone: "error",
		title: Z("cleanup:resourceSync.storageLoadFailed"),
		children: W(t.error)
	}) : t.isPending ? /* @__PURE__ */ q("p", {
		role: "status",
		children: Z("cleanup:resourceSync.storageLoading")
	}) : Ye(t.data) ? /* @__PURE__ */ q(hn, { toast: e }) : /* @__PURE__ */ J(l, {
		layout: "stack",
		label: Z("cleanup:tools.resourceSync"),
		children: [
			/* @__PURE__ */ q(u, { children: Z("cleanup:tools.resourceSync") }),
			/* @__PURE__ */ q("p", {
				className: "text-body-regular text-text-secondary",
				children: Z("cleanup:resourceSync.noDirectories")
			}),
			/* @__PURE__ */ q("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: Z("cleanup:resourceSync.setUpLibrary")
			})
		]
	});
}
function _n({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ q(Qt, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ q(gn, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ q(rn, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ q(Lt, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ q(qt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ q(sn, { toast: r });
	}
	return /* @__PURE__ */ q(Et, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function vn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: Z("cleanup:overview.loadFailed"),
		state: "error"
	} : {
		figure: Z("cleanup:overview.loading"),
		state: "loading"
	} : t(e.data);
}
function yn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ q("button", {
		type: "button",
		className: tt({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ q(A, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function bn({ tool: e, navigate: t }) {
	let n = X(e.icon);
	return /* @__PURE__ */ q(Pt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var xn = X("square-check-big"), Sn = X("sparkles"), Cn = X("file-stack"), wn = X("file-archive"), Tn = X("trash"), En = () => {
	for (let e of [
		P,
		oe,
		c,
		h
	]) Y.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function Dn({ toast: e, open: t, navigate: n }) {
	let o = Q({
		queryKey: P,
		queryFn: ({ signal: e }) => Ge(e)
	}), s = Q({
		queryKey: oe,
		queryFn: ({ signal: e }) => Ve(e)
	}), l = Q({
		queryKey: c,
		queryFn: ({ signal: e }) => je(e)
	}), u = Q({
		queryKey: h,
		queryFn: ({ signal: e }) => Me(e)
	}), d = Q({
		queryKey: L,
		queryFn: ({ signal: e }) => Ke(e)
	});
	return (0, $.useEffect)(() => {
		let e = i[location.hash];
		e && $e.replace(e + location.search);
	}, []), /* @__PURE__ */ J(Et, { children: [
		/* @__PURE__ */ J("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ q(I, {
				id: "cleanup-pending",
				children: Z("cleanup:overview.needsAttention")
			}), /* @__PURE__ */ J("div", {
				className: k,
				children: [
					/* @__PURE__ */ q(yn, {
						section: "review",
						label: Z("cleanup:overview.review"),
						icon: xn,
						open: t,
						value: vn(o, ut)
					}),
					/* @__PURE__ */ q(yn, {
						section: "duplicates",
						label: Z("cleanup:overview.duplicates"),
						icon: Cn,
						open: t,
						value: vn(l, (e) => Number(e.total || 0) ? {
							figure: Z("cleanup:overview.duplicateGroups", {
								count: Number(e.total),
								files: Number(e.files || 0).toLocaleString()
							}),
							meta: Z("cleanup:overview.reclaimable", { size: G(e.reclaimable || 0) })
						} : { figure: Z("cleanup:overview.noDuplicates") })
					}),
					/* @__PURE__ */ q(yn, {
						section: "ads",
						label: Z("cleanup:overview.junkFiles"),
						icon: wn,
						open: t,
						value: vn(u, (e) => ({
							figure: Z("cleanup:overview.junkUndecided", { count: Number(e.pending_total || 0) }),
							meta: Xe(e)
						}))
					}),
					/* @__PURE__ */ q(yn, {
						section: "quality",
						label: Z("cleanup:overview.hdUpgrades"),
						icon: Sn,
						open: t,
						value: vn(s, (e) => ({ figure: Z("cleanup:overview.upgradesPending", { count: Number(e.total || 0) }) }))
					}),
					/* @__PURE__ */ q(yn, {
						section: "trash",
						label: Z("cleanup:overview.trash"),
						icon: Tn,
						open: t,
						value: vn(d, (e) => ({
							figure: Z("cleanup:overview.trashCount", { count: Number(e.total || 0) }),
							meta: e.total ? Z("cleanup:overview.trashSize", { size: G(e.bytes || 0) }) : Z("cleanup:overview.trashEmptyHint")
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ q("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ q(b, {
				toast: (t) => e(t),
				monitor: !0,
				onComplete: En
			})
		}),
		/* @__PURE__ */ J("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ q(I, {
				id: "cleanup-maintenance",
				children: Z("cleanup:overview.maintenanceSection")
			}), /* @__PURE__ */ q("div", {
				className: r,
				children: a.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ q(bn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ J("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ q(I, {
				id: "cleanup-deletion",
				children: Z("cleanup:overview.deletionSection")
			}), /* @__PURE__ */ q("div", {
				className: r,
				children: a.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ q(bn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { Dn as DataCleanupPage, _n as DataCleanupToolPage };

//# debugId=fff04a69-5726-49d7-b24a-a62aa2d5c5ff