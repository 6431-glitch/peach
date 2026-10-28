(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd76b2f4-d87b-4729-90a1-cbc86c958fe7", e._sentryDebugIdIdentifier = "sentry-dbid-bd76b2f4-d87b-4729-90a1-cbc86c958fe7");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { $76d00c5a4edb230a$export$76ccd210b9029917 as t, $76d00c5a4edb230a$export$816b5d811295e6bc as n, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as r, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as i, $76d00c5a4edb230a$export$f850895b287ef28e as ee, $ea3928288112382f$export$439d29a4e110a164 as te, Button as a, Bx as ne, COLUMN_SORT as o, Checkbox as s, ChevronSortDown as c, CollapseChevron as re, CollapseRegion as l, DataTableFooter as ie, DataTableFrame as ae, EmptyState as oe, FOLLOW_CHECK_KEY as u, LAYOUTS as se, M6 as ce, Note as d, SORT_DEFAULT_DIR as le, SORT_OPTIONS as ue, Select as de, SelectItem as fe, SelectionDock as pe, SortDirectionIcon as me, Switch as he, Table as ge, TableColumnControls as _e, TableColumnResizer as ve, TableSelectionHeader as ye, TaskProgress as be, Un as xe, __toESM as f, authorGroups as Se, authorName as Ce, busyProps as p, cardClass as we, checkEvidenceGap as Te, checkFailures as Ee, checkReceipt as De, checkSummary as Oe, checkedText as ke, clickedBlank as m, columnVisibilityFeature as Ae, confirmModal as h, createColumnHelper as je, dZ as g, dropSources as Me, du as Ne, errorHeadline as Pe, errorMessage as _, fetchCheckJob as Fe, fetchPending as Ie, flexRender as Le, import_jsx_runtime as Re, isBroken as ze, jsx as v, jsxs as y, l7 as b, mapLimit as Be, markItem as Ve, pageWindow as He, patchSource as Ue, reloadFollowManage as We, removeSource as Ge, require_react as x, rowPaginationFeature as S, rowSelectionFeature as C, rowSortingFeature as Ke, selectionState as qe, setSourceEnabled as Je, sortLabel as Ye, startCheck as Xe, tableFeatures as Ze, tableRows as Qe, toggleGroup as w, useBackgroundJob as $e, useMutation as T, useTable as et, useTablePreferences as tt } from "./peach-app.js";
import { AuthorAvatar as nt, ErrorLine as rt, SourceIcon as E, SourceLink as it, StatusBadge as at } from "./peach-app.source-view-CRZESleF.js";
// src/react/follow-manage/source-list.tsx
var D = /* @__PURE__ */ f(x(), 1), ot = Ze({
	rowPaginationFeature: S,
	rowSelectionFeature: C,
	rowSortingFeature: Ke,
	columnVisibilityFeature: Ae,
	paginatedRowModel: e()
}), O = (e) => (Number(e) || 0).toLocaleString(), st = Object.fromEntries(Object.entries(o).map(([e, t]) => [t, e])), k = 740;
function ct() {
	let [e, t] = (0, D.useState)(!1), n = (0, D.useRef)(null), r = (0, D.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < k));
		r.observe(e), n.current = r, t(e.clientWidth < k);
	}, []);
	return (0, D.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var lt = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, ut = Object.entries(lt).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function A({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ y("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			m(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ v(s, {
				isSelected: t,
				onChange: n,
				"aria-label": `选择 ${e.label}`
			}),
			/* @__PURE__ */ y("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ v("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ v(E, { provider: e.provider })
				}), /* @__PURE__ */ v(it, { source: e })]
			}),
			/* @__PURE__ */ v(te, { children: e.provider_label }),
			/* @__PURE__ */ v(at, { source: e }),
			e.last_error ? /* @__PURE__ */ y("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ v("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ y("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ v("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ v("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ v(rt, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ y("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ v("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: ke(e)
					}),
					/* @__PURE__ */ v(he, {
						"aria-label": `启用 ${e.label}`,
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ y("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ v(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: g,
							"aria-label": `检查 ${e.label} 的更新`,
							disabled: !e.enabled || r.readOnly,
							...p(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ v(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ce,
							"aria-label": `移除 ${e.label}`,
							disabled: r.readOnly,
							onClick: () => r.remove(e)
						})]
					})
				]
			})
		]
	});
}
function dt({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: ee, onToggleGroup: ne, onToggle: o }) {
	let s = e.map((e) => e.id), c = e.filter((e) => e.enabled).map((e) => e.id), ie = e.filter(ze).length, ae = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), oe = `follow-author-${e[0].id}`, u = qe(r, s);
	return /* @__PURE__ */ y("section", {
		"aria-label": `${t} 的关注来源`,
		className: we({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ y("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ v(nt, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ y("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ v("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ y("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: ae,
						children: [
							e.map((e) => /* @__PURE__ */ v(E, { provider: e.provider }, e.id)),
							/* @__PURE__ */ v(te, { children: `来源：${ae}` }),
							ie ? /* @__PURE__ */ v("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: `${ie} 个失败`
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ y("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ v(a, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: g,
						"aria-label": `检查 ${t} 的全部来源`,
						disabled: !c.length || i.readOnly,
						...p(i.busy),
						onClick: () => i.check(c)
					}), /* @__PURE__ */ y("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ v(a, {
							variant: "secondary",
							size: "small",
							leadingIcon: b,
							"aria-pressed": u.all ? "true" : u.some ? "mixed" : "false",
							"aria-label": `${u.all ? "取消全选" : "全选"} ${t} 的来源`,
							onClick: () => ne(!u.all),
							children: u.all ? "取消全选" : "全选"
						}), /* @__PURE__ */ v(a, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": oe,
							leadingIcon: re,
							"aria-label": `${n ? "收起" : "展开"} ${t} 的来源`,
							onClick: () => ee(!n),
							children: n ? "收起" : "展开"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ v(l, {
			id: oe,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ v(A, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => o(e.id, t)
			}, e.id))
		})]
	});
}
function j(e) {
	let { data: l, sort: f, dir: m, page: Ae, layout: ze, pageSize: b, selected: x, readOnly: S, onSort: C, onPage: Ke, onLayout: Ze, onPageSize: k, onSelected: A, toast: j, openFollow: ft, onAdd: pt } = e, M = l.sources, N = (0, D.useMemo)(() => l.author_aliases || [], [l.author_aliases]), P = l.counts || {}, [F, mt] = (0, D.useState)(/* @__PURE__ */ new Set()), [ht, gt] = ct(), [_t, I] = (0, D.useState)(""), L = (0, D.useMemo)(() => Se(M, f, m, N), [
		M,
		f,
		m,
		N
	]), vt = (0, D.useMemo)(() => Qe(L, f, m, N), [
		L,
		f,
		m,
		N
	]), { job: R, running: z, outcome: B, start: V } = $e({
		queryKey: u,
		queryFn: ({ signal: e }) => Fe(e),
		start: (e) => Xe(e),
		onError: (e) => I(_(e)),
		onFinish: (e) => {
			We(), j(e.status === "failed" ? e.error || "检查失败" : De(e));
		}
	}), H = (e) => {
		z || V.isPending || (I(""), V.mutate(e));
	}, yt = (e, t) => A(w(x, [e], t)), bt = (e, t) => A(w(x, e, t)), xt = T({
		mutationFn: (e) => Ge(e),
		onSuccess: (e, t) => {
			Me([t]), A(w(x, [t], !1)), j("已取消关注来源");
		},
		onError: (e) => I(_(e))
	}), St = T({
		mutationFn: (e) => Je(e.id, e.enabled),
		onSuccess: (e, t) => {
			Ue(t.id, { enabled: t.enabled }), I("");
		},
		onError: (e) => I(_(e))
	}), Ct = (e) => void h({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => xt.mutateAsync(e.id)
	}), U = T({
		mutationFn: async (e) => {
			let t = await Be(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ge(t) : await Je(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Me(e.done);
			else for (let t of e.done) Ue(t, { enabled: e.action === "enabled" });
			A(w(x, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				I(`${t.length}/${e.ids.length} 个来源未更新：${_(t[0]?.error)}`);
				return;
			}
			I("");
			let n = e.action === "remove" ? "删除" : e.action === "enabled" ? "启用" : "暂停";
			j(`已${n} ${e.done.length} 个关注来源`);
		},
		onError: (e) => I(_(e))
	}), W = T({
		mutationFn: async (e) => {
			let t = ((await Ie()).groups || []).flatMap((e) => [
				e.primary,
				...e.variants,
				...e.duplicates
			]).filter((e) => e.status === "new").map((e) => e.id);
			return {
				ids: t,
				failed: (await Be(t, 6, (t) => Ve(t, e))).filter((e) => !e.ok)
			};
		},
		onSuccess: (e) => {
			We(), e.failed.length ? I(`批量更新 ${e.failed.length}/${e.ids.length} 项未完成`) : (I(""), j(`已批量标记 ${e.ids.length} 项`));
		},
		onError: (e) => I(_(e))
	}), wt = (e, t) => St.mutate({
		id: e.id,
		enabled: t
	}), G = (0, D.useRef)({
		check: H,
		toggle: wt,
		remove: Ct,
		busy: !1,
		readOnly: S
	});
	G.current = {
		check: H,
		toggle: wt,
		remove: Ct,
		busy: z || V.isPending,
		readOnly: S
	};
	let K = G.current, Tt = (0, D.useMemo)(() => {
		let e = je(), t = (e) => () => lt[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ v(ye, {
					table: e.table,
					label: "全选本页来源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ v(s, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${e.row.original.source.label}`
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ y("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ v(nt, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ v("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ y("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ v(it, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ v(rt, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ y("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ v(E, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ v(at, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => ke(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ y("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ v(he, {
							"aria-label": `启用 ${e.row.original.source.label}`,
							isSelected: e.row.original.source.enabled,
							isDisabled: K.readOnly,
							onChange: (t) => G.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ v(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: g,
							"aria-label": `检查 ${e.row.original.source.label} 的更新`,
							disabled: !e.row.original.source.enabled || K.readOnly,
							...p(K.busy),
							onClick: () => G.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ v(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ce,
							"aria-label": `移除 ${e.row.original.source.label}`,
							disabled: K.readOnly,
							onClick: () => G.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [K]), q = (0, D.useMemo)(() => {
		let e = st[f];
		return e ? [{
			id: e,
			desc: m === "desc"
		}] : [];
	}, [f, m]), Et = (0, D.useMemo)(() => Object.fromEntries([...x].map((e) => [String(e), !0])), [x]), J = ze === "table", Y = tt("follow-sources", ut), X = He(J ? vt.length : L.length, b, Ae), Z = et({
		features: ot,
		data: vt,
		columns: Tt,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: q,
			rowSelection: Et,
			pagination: {
				pageIndex: X.page - 1,
				pageSize: b
			},
			columnVisibility: Y.visibility
		},
		onColumnVisibilityChange: Y.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(q) : e)[0];
			if (!t) return;
			let n = o[t.id];
			n && C(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Et) : e;
			A(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: X.page - 1,
				pageSize: b
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === b ? n.pageIndex !== t.pageIndex && Ke(n.pageIndex + 1) : k(n.pageSize);
		}
	}), Dt = Z.getRowModel().rows, Ot = J ? Dt.map((e) => e.original.source.id) : L.slice(X.start, X.end).flatMap((e) => e.map((e) => e.id)), kt = qe(x, Ot), Q = [...x], At = Ee(B), jt = M.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), Mt = Te(B), $ = L.length > 0 && F.size >= L.length;
	return M.length ? /* @__PURE__ */ y("div", {
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ y("div", {
				ref: ht,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ y("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ v("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "关注列表"
					}), /* @__PURE__ */ v("span", {
						className: "text-body-2-regular text-text-secondary",
						children: `${M.length.toLocaleString()} 个来源${P.new ? ` · ${O(P.new)} 条未看` : ""}`
					})]
				}), /* @__PURE__ */ y("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						jt.length ? /* @__PURE__ */ v(a, {
							variant: "secondary",
							disabled: S,
							...p(K.busy),
							onClick: () => H(jt),
							children: "检查失败项"
						}) : null,
						/* @__PURE__ */ v(a, {
							variant: "primary",
							leadingIcon: g,
							disabled: S,
							"aria-label": "检查全部",
							iconOnly: gt,
							...p(K.busy),
							onClick: () => H([]),
							children: "检查全部"
						}),
						/* @__PURE__ */ y("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ y("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": "关注列表版式",
									children: [/* @__PURE__ */ v(a, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: xe,
										"aria-label": se[0][1],
										"aria-pressed": !J,
										onClick: () => Ze("default")
									}), /* @__PURE__ */ v(a, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Ne,
										"aria-label": se[1][1],
										"aria-pressed": J,
										onClick: () => Ze("table")
									})]
								}),
								J ? /* @__PURE__ */ v(_e, {
									preferences: Y,
									label: "关注来源"
								}) : null,
								/* @__PURE__ */ y("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ v(de, {
										"aria-label": "关注列表排序",
										prefix: "排序",
										selectedKey: f,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											C(t, le[t]);
										},
										children: ue.map(([e, t]) => /* @__PURE__ */ v(fe, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ v(a, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: me,
										"data-icon-state": m === "asc" ? "a" : "b",
										"aria-label": Ye(f, m),
										onClick: () => C(f, m === "asc" ? "desc" : "asc")
									})]
								}),
								J ? null : /* @__PURE__ */ v(a, {
									variant: "secondary",
									iconOnly: gt,
									leadingIcon: re,
									"aria-expanded": !$,
									"aria-label": $ ? "全部展开" : "全部收起",
									onClick: () => mt($ ? /* @__PURE__ */ new Set() : new Set(L.map((e) => String(e[0].author_key || e[0].id)))),
									children: $ ? "全部展开" : "全部收起"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ y("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					z ? /* @__PURE__ */ v(be, {
						embedded: !0,
						label: R?.message || (R?.total ? `${R.older ? "抓取历史" : "检查更新"}：已完成 ${R.checked || 0}/${R.total} 个来源` : "正在准备检查任务"),
						value: R?.checked,
						total: R?.total
					}) : null,
					_t ? /* @__PURE__ */ v(d, {
						tone: "error",
						title: "操作未完成",
						children: _t
					}) : null,
					!z && B?.results?.length ? /* @__PURE__ */ v(d, {
						tone: "neutral",
						title: "检查结果",
						children: Oe(B)
					}) : null,
					At.length ? /* @__PURE__ */ v(d, {
						tone: "error",
						title: `${At.length} 个来源检查失败`,
						extra: /* @__PURE__ */ v("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: At.map((e, t) => /* @__PURE__ */ v("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${Pe(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: "这些来源这一轮没有取到更新。"
					}) : null,
					Mt ? /* @__PURE__ */ v(d, {
						tone: "warning",
						children: `条目已保存，但这次未保存来源的原始响应：${Mt}`
					}) : null
				]
			}),
			/* @__PURE__ */ y(pe, {
				label: "关注来源批量操作",
				visible: Q.length > 0,
				count: `已选 ${Q.length} 个来源`,
				children: [
					/* @__PURE__ */ v(a, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...p(K.busy),
						onClick: () => H(Q),
						children: "检查所选"
					}),
					/* @__PURE__ */ v(a, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...p(U.isPending),
						onClick: () => U.mutate({
							ids: Q,
							action: "enabled"
						}),
						children: "启用"
					}),
					/* @__PURE__ */ v(a, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...p(U.isPending),
						onClick: () => U.mutate({
							ids: Q,
							action: "paused"
						}),
						children: "暂停"
					}),
					/* @__PURE__ */ v(a, {
						variant: "danger",
						size: "small",
						disabled: S,
						...p(U.isPending),
						onClick: () => void h({
							title: `删除 ${Q.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => U.mutateAsync({
								ids: Q,
								action: "remove"
							})
						}),
						children: "删除"
					}),
					/* @__PURE__ */ v(a, {
						variant: "ghost",
						size: "small",
						onClick: () => A(/* @__PURE__ */ new Set()),
						children: "取消选择"
					})
				]
			}),
			J ? /* @__PURE__ */ v(ae, {
				follow: !0,
				preferences: Y,
				onRowClick: (e) => yt(Number(e), !x.has(Number(e))),
				children: /* @__PURE__ */ y(ge, {
					"aria-label": "关注来源",
					size: "sm",
					sortDescriptor: q[0] ? {
						column: q[0].id,
						direction: q[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Z.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ y(ee, { children: [Z.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in o, r = Le(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ v(n, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Y.columnProps(e.id),
							children: ({ sortDirection: n }) => /* @__PURE__ */ y(Re.Fragment, { children: [e.id === "select" ? r : t ? /* @__PURE__ */ y("span", {
								className: "flex items-center gap-0.5",
								children: [r, /* @__PURE__ */ v("span", {
									"data-sort-indicator": !0,
									"data-direction": n || void 0,
									children: /* @__PURE__ */ v(c, {})
								})]
							}) : /* @__PURE__ */ v(te, { children: r }), /* @__PURE__ */ v(ve, {
								preferences: Y,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ v(n, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: Y.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ v(t, {
						renderEmptyState: () => "这一页没有来源",
						children: Dt.map((e) => /* @__PURE__ */ y(r, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ v(i, { children: Le(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ v(i, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ y(Re.Fragment, { children: [/* @__PURE__ */ v(s, {
				isSelected: kt.all,
				isIndeterminate: kt.some,
				onChange: (e) => bt(Ot, e),
				"aria-label": "全选本页来源",
				children: "全选本页"
			}), /* @__PURE__ */ v("div", {
				className: "flex flex-col gap-3",
				children: L.slice(X.start, X.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ v(dt, {
						group: e,
						name: Ce(e, N),
						handlers: K,
						selected: x,
						open: !F.has(t),
						onOpen: (e) => {
							let n = new Set(F);
							e ? n.delete(t) : n.add(t), mt(n);
						},
						onToggleGroup: (t) => bt(e.map((e) => e.id), t),
						onToggle: yt
					}, t);
				})
			})] }),
			/* @__PURE__ */ v(ie, {
				label: "关注列表",
				total: X.total,
				pagination: {
					pageIndex: X.page - 1,
					pageSize: b
				},
				unit: J ? "个来源" : "位创作者",
				pageUnit: J ? "条" : "位",
				onChange: (e) => {
					e.pageSize === b ? Z.setPageIndex(e.pageIndex) : Z.setPageSize(e.pageSize);
				}
			}),
			P.new ? /* @__PURE__ */ y("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ v("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${O(P.new)} · 已看 ${O(P.seen)} · 已保存 ${O(P.saved)} · 已忽略 ${O(P.ignored)}`
					}),
					/* @__PURE__ */ v(a, {
						variant: "secondary",
						size: "small",
						onClick: ft,
						children: "去看更新"
					}),
					/* @__PURE__ */ v(a, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...p(W.isPending),
						onClick: () => void h({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => W.mutateAsync("seen")
						}),
						children: "全部标记已看"
					}),
					/* @__PURE__ */ v(a, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...p(W.isPending),
						onClick: () => void h({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => W.mutateAsync("ignored")
						}),
						children: "全部忽略"
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ v(oe, {
		icon: ne,
		title: "还没有关注来源",
		actions: /* @__PURE__ */ v(a, {
			variant: "primary",
			size: "small",
			onClick: pt,
			children: "添加关注"
		}),
		children: "关注来源及其检查状态会显示在这里。"
	});
}
export { j as SourceList };

//# debugId=bd76b2f4-d87b-4729-90a1-cbc86c958fe7