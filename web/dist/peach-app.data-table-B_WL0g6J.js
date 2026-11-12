(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7846dc7c-ed9a-4da6-9ea7-5d8fc6d42dde", e._sentryDebugIdIdentifier = "sentry-dbid-7846dc7c-ed9a-4da6-9ea7-5d8fc6d42dde");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, Button as a, Checkbox as o, ChevronSortDown as s, DataTableFooter as c, DataTableFrame as l, DataTableSort as u, SelectionDock as d, Table as ee, TableColumnControls as f, TableColumnResizer as p, TableSelectionHeader as m, __toESM as h, cardClass as g, columnVisibilityFeature as _, createColumnHelper as v, flexRender as y, formatTranslation as te, import_jsx_runtime as b, jsx as x, jsxs as S, require_react as C, rowPaginationFeature as w, rowSelectionFeature as T, rowSortingFeature as E, tableFeatures as D, translate as O, useTable as k, useTablePreferences as A } from "./peach-app.js";
import { createPaginatedRowModel as j, createSortedRowModel as M, useTableSelection as N } from "./peach-app.use-table-selection-CnuGRvGn.js";
// src/react/components/data-table.tsx
var P = /* @__PURE__ */ h(C(), 1), F = D({
	rowSortingFeature: E,
	rowSelectionFeature: T,
	rowPaginationFeature: w,
	columnVisibilityFeature: _,
	sortedRowModel: M(),
	paginatedRowModel: j()
});
function I({ label: h, items: _, columns: C, rowId: w, rowLabel: T, selected: E, onSelected: D, actions: j, title: M = h, titleId: I, description: L, footerActions: R, toolbarActions: z, panel: B = !0, unit: V = "条记录" }) {
	let [H, U] = (0, P.useState)([]), W = (0, P.useMemo)(() => [{
		id: "select",
		label: "选择",
		width: 48,
		min: 48,
		max: 48,
		required: !0
	}, ...C.map((e, t) => ({
		...e,
		width: e.width ?? (t === 0 ? 320 : 160),
		min: e.min ?? (t === 0 ? 320 : 96),
		flex: e.flex ?? t === 0,
		required: t === 0
	}))], [C]), G = A(`data:${h}`, W), [K, q] = (0, P.useState)({
		pageIndex: 0,
		pageSize: 20
	}), J = N(() => D([])), Y = Math.max(1, Math.ceil(_.length / K.pageSize)), X = Math.min(K.pageIndex, Y - 1), Z = Object.fromEntries(E.map((e) => [e, !0])), ne = (0, P.useMemo)(() => {
		let e = v();
		return e.columns([e.display({
			id: "select",
			header: ({ table: e }) => /* @__PURE__ */ x(m, {
				table: e,
				label: `全选${h}`
			}),
			cell: ({ row: e }) => /* @__PURE__ */ x(o, {
				slot: null,
				"aria-label": `选择 ${T(e.original)}`,
				isSelected: e.getIsSelected(),
				onChange: (t) => e.toggleSelected(t)
			})
		}), ...C.map((t) => e.accessor((e) => t.value?.(e) ?? "", {
			id: t.id,
			header: t.label,
			enableSorting: !!t.value,
			sortFn: (e, n) => {
				let r = t.value(e.original), i = t.value(n.original);
				return typeof r == "number" && typeof i == "number" ? r - i : String(r).localeCompare(String(i), "zh-CN", { numeric: !0 });
			},
			cell: ({ row: e }) => t.render(e.original)
		}))]);
	}, [
		C,
		h,
		T
	]), Q = k({
		features: F,
		data: _,
		columns: ne,
		getRowId: w,
		state: {
			sorting: H,
			rowSelection: Z,
			pagination: {
				...K,
				pageIndex: X
			},
			columnVisibility: G.visibility
		},
		onColumnVisibilityChange: G.change,
		onSortingChange: (e) => {
			U(e), q((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: q,
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Z) : e;
			Object.values(t).some(Boolean) && J(), D(_.filter((e) => t[w(e)]).map(w));
		}
	}), $ = Q.getSelectedRowModel().rows.map((e) => e.original);
	return /* @__PURE__ */ S("div", {
		"data-data-table-panel": B || void 0,
		className: B ? g({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}) : "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ S("div", {
				"data-responsive-toolbar": "",
				role: "toolbar",
				"aria-label": `${h}工具栏`,
				children: [/* @__PURE__ */ S("div", {
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ x("h3", {
						id: I,
						className: "text-title-2-medium text-text-primary",
						children: M
					}), /* @__PURE__ */ x("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: `${_.length.toLocaleString()} ${O(V)}`
					})]
				}), /* @__PURE__ */ S("div", {
					"data-toolbar-actions": "",
					children: [
						z,
						/* @__PURE__ */ x(f, {
							preferences: G,
							label: h
						}),
						/* @__PURE__ */ x(u, {
							label: h,
							options: C.filter((e) => e.value).map((e) => ({
								id: e.id,
								label: e.label
							})),
							sorting: H,
							onChange: (e) => {
								U(e), q((e) => ({
									...e,
									pageIndex: 0
								}));
							}
						})
					]
				})]
			}),
			L ? /* @__PURE__ */ x("p", {
				className: "text-body-2-regular text-text-secondary",
				children: L
			}) : null,
			/* @__PURE__ */ S(d, {
				label: `${h}批量操作`,
				visible: $.length > 0,
				count: te("已选 {0} {1}", $.length.toLocaleString(), O(V)),
				children: [j($, () => D([])), /* @__PURE__ */ x(a, {
					variant: "ghost",
					size: "small",
					onClick: () => D([]),
					children: "取消选择"
				})]
			}),
			/* @__PURE__ */ x(l, {
				follow: !0,
				preferences: G,
				onRowClick: (e) => Q.getRow(e)?.toggleSelected(),
				children: /* @__PURE__ */ S(ee, {
					"aria-label": h,
					size: "sm",
					sortDescriptor: H[0] ? {
						column: H[0].id,
						direction: H[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Q.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
					children: [/* @__PURE__ */ S(i, { children: [Q.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ x(t, {
						id: e.id,
						isRowHeader: e.id === C[0].id,
						allowsSorting: e.column.getCanSort(),
						...G.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ S(b.Fragment, { children: [/* @__PURE__ */ S("span", {
							className: "flex items-center gap-0.5",
							children: [y(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ x("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ x(s, {})
							}) : null]
						}), /* @__PURE__ */ x(p, {
							preferences: G,
							id: e.id
						})] })
					}, e.id)), /* @__PURE__ */ x(t, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: G.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ x(e, {
						renderEmptyState: () => "没有记录",
						children: Q.getRowModel().rows.map((e) => /* @__PURE__ */ S(n, {
							id: e.id,
							"data-board-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ x(r, { children: y(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ x(r, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}),
			/* @__PURE__ */ x(c, {
				label: h,
				total: _.length,
				pagination: {
					...K,
					pageIndex: X
				},
				onChange: q,
				unit: V
			}),
			R ? /* @__PURE__ */ x("div", {
				className: "flex flex-wrap items-center justify-end gap-2 border-t border-separator-border pt-4",
				children: R
			}) : null
		]
	});
}
export { I as DataTable };

//# debugId=7846dc7c-ed9a-4da6-9ea7-5d8fc6d42dde