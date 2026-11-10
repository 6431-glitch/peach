(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d00d7f6c-de75-4de2-ad63-8d9670ad88dd", e._sentryDebugIdIdentifier = "sentry-dbid-d00d7f6c-de75-4de2-ad63-8d9670ad88dd");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, Button as a, Checkbox as o, ChevronSortDown as s, DataTableFooter as c, DataTableFrame as l, DataTableSort as u, SelectionDock as d, Table as f, TableColumnControls as p, TableColumnResizer as m, TableSelectionHeader as h, __toESM as g, cardClass as _, columnVisibilityFeature as v, createColumnHelper as y, flexRender as b, import_jsx_runtime as x, jsx as S, jsxs as C, require_react as w, rowPaginationFeature as T, rowSelectionFeature as E, rowSortingFeature as D, tableFeatures as O, useTable as k, useTablePreferences as A } from "./peach-app.js";
import { createPaginatedRowModel as j, createSortedRowModel as M, useTableSelection as ee } from "./peach-app.use-table-selection-CnuGRvGn.js";
// src/react/components/data-table.tsx
var N = /* @__PURE__ */ g(w(), 1), P = O({
	rowSortingFeature: D,
	rowSelectionFeature: E,
	rowPaginationFeature: T,
	columnVisibilityFeature: v,
	sortedRowModel: M(),
	paginatedRowModel: j()
});
function F({ label: g, items: v, columns: w, rowId: T, rowLabel: E, selected: D, onSelected: O, actions: j, title: M = g, titleId: F, description: I, footerActions: L, toolbarActions: R, panel: z = !0, unit: B = "条记录" }) {
	let [V, H] = (0, N.useState)([]), U = (0, N.useMemo)(() => [{
		id: "select",
		label: "选择",
		width: 48,
		min: 48,
		max: 48,
		required: !0
	}, ...w.map((e, t) => ({
		...e,
		width: e.width ?? (t === 0 ? 320 : 160),
		min: e.min ?? (t === 0 ? 320 : 96),
		flex: e.flex ?? t === 0,
		required: t === 0
	}))], [w]), W = A(`data:${g}`, U), [G, K] = (0, N.useState)({
		pageIndex: 0,
		pageSize: 20
	}), q = ee(() => O([])), J = Math.max(1, Math.ceil(v.length / G.pageSize)), Y = Math.min(G.pageIndex, J - 1), X = Object.fromEntries(D.map((e) => [e, !0])), Z = (0, N.useMemo)(() => {
		let e = y();
		return e.columns([e.display({
			id: "select",
			header: ({ table: e }) => /* @__PURE__ */ S(h, {
				table: e,
				label: `全选${g}`
			}),
			cell: ({ row: e }) => /* @__PURE__ */ S(o, {
				slot: null,
				"aria-label": `选择 ${E(e.original)}`,
				isSelected: e.getIsSelected(),
				onChange: (t) => e.toggleSelected(t)
			})
		}), ...w.map((t) => e.accessor((e) => t.value?.(e) ?? "", {
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
		w,
		g,
		E
	]), Q = k({
		features: P,
		data: v,
		columns: Z,
		getRowId: T,
		state: {
			sorting: V,
			rowSelection: X,
			pagination: {
				...G,
				pageIndex: Y
			},
			columnVisibility: W.visibility
		},
		onColumnVisibilityChange: W.change,
		onSortingChange: (e) => {
			H(e), K((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: K,
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(X) : e;
			Object.values(t).some(Boolean) && q(), O(v.filter((e) => t[T(e)]).map(T));
		}
	}), $ = Q.getSelectedRowModel().rows.map((e) => e.original);
	return /* @__PURE__ */ C("div", {
		"data-data-table-panel": z || void 0,
		className: z ? _({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}) : "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ C("div", {
				"data-responsive-toolbar": "",
				role: "toolbar",
				"aria-label": `${g}工具栏`,
				children: [/* @__PURE__ */ C("div", {
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ S("h3", {
						id: F,
						className: "text-title-2-medium text-text-primary",
						children: M
					}), /* @__PURE__ */ S("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: `${v.length.toLocaleString()} ${B}`
					})]
				}), /* @__PURE__ */ C("div", {
					"data-toolbar-actions": "",
					children: [
						R,
						/* @__PURE__ */ S(p, {
							preferences: W,
							label: g
						}),
						/* @__PURE__ */ S(u, {
							label: g,
							options: w.filter((e) => e.value).map((e) => ({
								id: e.id,
								label: e.label
							})),
							sorting: V,
							onChange: (e) => {
								H(e), K((e) => ({
									...e,
									pageIndex: 0
								}));
							}
						})
					]
				})]
			}),
			I ? /* @__PURE__ */ S("p", {
				className: "text-body-2-regular text-text-secondary",
				children: I
			}) : null,
			/* @__PURE__ */ C(d, {
				label: `${g}批量操作`,
				visible: $.length > 0,
				count: `已选 ${$.length.toLocaleString()} ${B}`,
				children: [j($, () => O([])), /* @__PURE__ */ S(a, {
					variant: "ghost",
					size: "small",
					onClick: () => O([]),
					children: "取消选择"
				})]
			}),
			/* @__PURE__ */ S(l, {
				follow: !0,
				preferences: W,
				onRowClick: (e) => Q.getRow(e)?.toggleSelected(),
				children: /* @__PURE__ */ C(f, {
					"aria-label": g,
					size: "sm",
					sortDescriptor: V[0] ? {
						column: V[0].id,
						direction: V[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Q.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
					children: [/* @__PURE__ */ C(i, { children: [Q.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ S(t, {
						id: e.id,
						isRowHeader: e.id === w[0].id,
						allowsSorting: e.column.getCanSort(),
						...W.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ C(x.Fragment, { children: [/* @__PURE__ */ C("span", {
							className: "flex items-center gap-0.5",
							children: [b(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ S("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ S(s, {})
							}) : null]
						}), /* @__PURE__ */ S(m, {
							preferences: W,
							id: e.id
						})] })
					}, e.id)), /* @__PURE__ */ S(t, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: W.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ S(e, {
						renderEmptyState: () => "没有记录",
						children: Q.getRowModel().rows.map((e) => /* @__PURE__ */ C(n, {
							id: e.id,
							"data-board-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ S(r, { children: b(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ S(r, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}),
			/* @__PURE__ */ S(c, {
				label: g,
				total: v.length,
				pagination: {
					...G,
					pageIndex: Y
				},
				onChange: K,
				unit: B
			}),
			L ? /* @__PURE__ */ S("div", {
				className: "flex flex-wrap items-center justify-end gap-2 border-t border-separator-border pt-4",
				children: L
			}) : null
		]
	});
}
export { F as DataTable };

//# debugId=d00d7f6c-de75-4de2-ad63-8d9670ad88dd