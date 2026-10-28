(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "43902a66-b081-429f-85c2-a48cda58a21b", e._sentryDebugIdIdentifier = "sentry-dbid-43902a66-b081-429f-85c2-a48cda58a21b");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { $76d00c5a4edb230a$export$76ccd210b9029917 as r, $76d00c5a4edb230a$export$816b5d811295e6bc as i, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as a, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as o, $76d00c5a4edb230a$export$f850895b287ef28e as s, Button as c, Checkbox as l, ChevronSortDown as u, DataTableFooter as d, DataTableFrame as f, DataTableSort as p, SelectionDock as m, Table as h, TableColumnControls as g, TableColumnResizer as _, TableSelectionHeader as v, __toESM as y, cardClass as b, columnVisibilityFeature as x, createColumnHelper as S, flexRender as C, import_jsx_runtime as w, jsx as T, jsxs as E, require_react as D, rowPaginationFeature as O, rowSelectionFeature as k, rowSortingFeature as A, tableFeatures as j, useTable as M, useTablePreferences as N } from "./peach-app.js";
// src/react/components/data-table.tsx
var P = /* @__PURE__ */ y(D(), 1), F = j({
	rowSortingFeature: A,
	rowSelectionFeature: k,
	rowPaginationFeature: O,
	columnVisibilityFeature: x,
	sortedRowModel: t(),
	paginatedRowModel: e()
});
function I({ label: e, items: t, columns: y, rowId: x, rowLabel: D, selected: O, onSelected: k, actions: A, title: j = e, titleId: I, description: L, footerActions: R, panel: z = !0, unit: B = "条记录" }) {
	let [V, H] = (0, P.useState)([]), U = (0, P.useMemo)(() => [{
		id: "select",
		label: "选择",
		width: 48,
		min: 48,
		max: 48,
		required: !0
	}, ...y.map((e, t) => ({
		...e,
		width: e.width ?? (t === 0 ? 320 : 160),
		min: e.min ?? (t === 0 ? 320 : 96),
		flex: e.flex ?? t === 0,
		required: t === 0
	}))], [y]), W = N(`data:${e}`, U), [G, K] = (0, P.useState)({
		pageIndex: 0,
		pageSize: 20
	}), q = n(() => k([])), J = Math.max(1, Math.ceil(t.length / G.pageSize)), Y = Math.min(G.pageIndex, J - 1), X = Object.fromEntries(O.map((e) => [e, !0])), Z = (0, P.useMemo)(() => {
		let t = S();
		return t.columns([t.display({
			id: "select",
			header: ({ table: t }) => /* @__PURE__ */ T(v, {
				table: t,
				label: `全选${e}`
			}),
			cell: ({ row: e }) => /* @__PURE__ */ T(l, {
				slot: null,
				"aria-label": `选择 ${D(e.original)}`,
				isSelected: e.getIsSelected(),
				onChange: (t) => e.toggleSelected(t)
			})
		}), ...y.map((e) => t.accessor((t) => e.value?.(t) ?? "", {
			id: e.id,
			header: e.label,
			enableSorting: !!e.value,
			sortFn: (t, n) => {
				let r = e.value(t.original), i = e.value(n.original);
				return typeof r == "number" && typeof i == "number" ? r - i : String(r).localeCompare(String(i), "zh-CN", { numeric: !0 });
			},
			cell: ({ row: t }) => e.render(t.original)
		}))]);
	}, [
		y,
		e,
		D
	]), Q = M({
		features: F,
		data: t,
		columns: Z,
		getRowId: x,
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
			let n = typeof e == "function" ? e(X) : e;
			Object.values(n).some(Boolean) && q(), k(t.filter((e) => n[x(e)]).map(x));
		}
	}), $ = Q.getSelectedRowModel().rows.map((e) => e.original);
	return /* @__PURE__ */ E("div", {
		"data-data-table-panel": z || void 0,
		className: z ? b({
			padding: "none",
			bordered: "line",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}) : "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ E("div", {
				"data-responsive-toolbar": "",
				role: "toolbar",
				"aria-label": `${e}工具栏`,
				children: [/* @__PURE__ */ E("div", {
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ T("h3", {
						id: I,
						className: "text-title-2-medium text-text-primary",
						children: j
					}), /* @__PURE__ */ T("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: `${t.length.toLocaleString()} ${B}`
					})]
				}), /* @__PURE__ */ E("div", {
					"data-toolbar-actions": "",
					children: [/* @__PURE__ */ T(g, {
						preferences: W,
						label: e
					}), /* @__PURE__ */ T(p, {
						label: e,
						options: y.filter((e) => e.value).map((e) => ({
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
					})]
				})]
			}),
			L ? /* @__PURE__ */ T("p", {
				className: "text-body-2-regular text-text-secondary",
				children: L
			}) : null,
			/* @__PURE__ */ E(m, {
				label: `${e}批量操作`,
				visible: $.length > 0,
				count: `已选 ${$.length.toLocaleString()} ${B}`,
				children: [A($, () => k([])), /* @__PURE__ */ T(c, {
					variant: "ghost",
					size: "small",
					onClick: () => k([]),
					children: "取消选择"
				})]
			}),
			/* @__PURE__ */ T(f, {
				follow: !0,
				preferences: W,
				onRowClick: (e) => Q.getRow(e)?.toggleSelected(),
				children: /* @__PURE__ */ E(h, {
					"aria-label": e,
					size: "sm",
					sortDescriptor: V[0] ? {
						column: V[0].id,
						direction: V[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Q.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
					children: [/* @__PURE__ */ E(s, { children: [Q.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ T(i, {
						id: e.id,
						isRowHeader: e.id === y[0].id,
						allowsSorting: e.column.getCanSort(),
						...W.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ E(w.Fragment, { children: [/* @__PURE__ */ E("span", {
							className: "flex items-center gap-0.5",
							children: [C(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ T("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ T(u, {})
							}) : null]
						}), /* @__PURE__ */ T(_, {
							preferences: W,
							id: e.id
						})] })
					}, e.id)), /* @__PURE__ */ T(i, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: W.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ T(r, {
						renderEmptyState: () => "没有记录",
						children: Q.getRowModel().rows.map((e) => /* @__PURE__ */ E(a, {
							id: e.id,
							"data-board-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ T(o, { children: C(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ T(o, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}),
			/* @__PURE__ */ T(d, {
				label: e,
				total: t.length,
				pagination: {
					...G,
					pageIndex: Y
				},
				onChange: K,
				unit: B
			}),
			R ? /* @__PURE__ */ T("div", {
				className: "flex flex-wrap items-center justify-end gap-2 border-t border-separator-border pt-4",
				children: R
			}) : null
		]
	});
}
export { I as DataTable };

//# debugId=43902a66-b081-429f-85c2-a48cda58a21b