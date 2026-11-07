(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "611abe0a-3d81-49e6-9320-e40a71893ab9", e._sentryDebugIdIdentifier = "sentry-dbid-611abe0a-3d81-49e6-9320-e40a71893ab9");
	} catch {}
})();
import { createPaginatedRowModel as e, createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $ea3928288112382f$export$439d29a4e110a164 as u, $l as d, Button as f, ButtonLink as p, Bx as m, COLUMN_SORT as h, Checkbox as g, ChevronSortDown as _, Chip as v, CollapseChevron as y, CollapseRegion as b, DataTableFooter as ee, DataTableFrame as te, DataTableSort as x, EmptyFocusButton as S, EmptyState as ne, ErrorText as C, ExternalLink as w, FEEDS_KEY as T, FOLLOW_CHECK_KEY as re, FOLLOW_CREDENTIALS_KEY as E, FOLLOW_MANAGE_KEY as D, FOLLOW_MANAGE_NAV as O, FOLLOW_RESOLVE_KEY as k, FieldLabel as A, Help as j, Input as M, LAYOUTS as N, LoadingDots as P, M6 as F, MENU_ITEM as I, MENU_ITEM_INTERACTIVE as L, MENU_POPOVER_SURFACE as ie, ModalFrame as R, Note as z, P7 as B, SORT_DEFAULT_DIR as ae, SORT_OPTIONS as V, STAT_STRIP_SIX as H, Select as oe, SelectItem as se, SelectionDock as ce, SelectionPopover as U, SiteLabel as le, SortDirectionIcon as ue, SortableBoardTabs as W, Switch as de, Table as fe, TableColumnControls as pe, TableColumnResizer as me, TableSelectionHeader as he, TagManager as ge, TaskProgress as _e, Un as ve, Wt as G, Xf as ye, __toESM as be, addAlias as xe, addSource as Se, authorGroups as Ce, authorName as we, avatarInner as Te, busyProps as K, cardClass as Ee, checkEvidenceGap as De, checkFailures as Oe, checkFeeds as ke, checkReceipt as Ae, checkSummary as je, checkedText as Me, clickedBlank as Ne, columnVisibilityFeature as Pe, composingKey as Fe, confirmModal as Ie, createColumnHelper as Le, credentialDone as q, cx as Re, dZ as ze, dropSources as Be, du as Ve, errorHeadline as He, errorMessage as J, feedIntervalText as Ue, fetchCheckJob as We, fetchCredentials as Ge, fetchFeeds as Y, fetchFollow as Ke, fetchPending as qe, fetchResolveJob as Je, fetchSuggestions as Ye, flexRender as Xe, followFeedByName as Ze, followFeedEntity as Qe, followSuggestKey as $e, groupByAuthor as et, isBroken as tt, isLayout as nt, keepSelected as rt, l7 as it, localTime as at, lookupFeedActor as ot, mapLimit as st, markItem as ct, pageSizeOf as lt, pageWindow as ut, patchSource as dt, pv as ft, queryClient as pt, reloadFollowManage as mt, removeAlias as ht, removeFeed as gt, removeSource as _t, renameAliasGroup as vt, require_jsx_runtime as yt, require_react as bt, resolveFollowSort as xt, rowPaginationFeature as St, rowSelectionFeature as Ct, rowSortingFeature as wt, selectionState as Tt, setFeedEnabled as Et, setSourceEnabled as Dt, sortLabel as Ot, startCheck as kt, startResolve as At, tableFeatures as jt, tableRows as Mt, toggleGroup as Nt, useAction as Pt, useBackgroundJob as Ft, useMutation as X, useQuery as It, useTable as Lt, useTablePreferences as Rt } from "./peach-app.js";
import { Page as zt } from "./peach-app.page-QAncjzM1.js";
import { LEGACY_AVATAR_IMG as Bt } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { AuthorAvatar as Vt, ErrorLine as Ht, SourceIcon as Ut, SourceLink as Wt, StatusBadge as Gt } from "./peach-app.source-view-DalWfDkm.js";
// src/react/follow-manage/add-source.tsx
var Z = /* @__PURE__ */ be(bt(), 1), Q = yt(), Kt = Re(I, L, "text-body-2-medium"), qt = "粘贴来源链接，或输入创作者名、id…", Jt = "添加创作者关注", Yt = "查找中（首次按名字查要下载创作者索引，可能几十秒）", Xt = "识别中", Zt = "站内没有查到来源", Qt = "/settings/subscriptions", $t = (e, t) => `${e}:${t.url}`;
function en({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
	return (0, Z.useEffect)(() => {
		t.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [t, r]), /* @__PURE__ */ (0, Q.jsxs)(i, {
		ref: t,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		onOpenChange: (e) => {
			e || s();
		},
		placement: "bottom start",
		offset: 4,
		"aria-label": "来源建议",
		className: Re(ie, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Q.jsx)(P, { label: "正在查找建议" })
		}) : null, n.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Q.jsxs)("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? Re(Kt, "bg-background-secondary-default") : Kt,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function tn({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ (0, Q.jsx)(U, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: d,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Q.jsx)(Ut, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: "全选",
				disabled: !r.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: "全不选",
				disabled: !r.length,
				onPress: () => n(new Set(r.map((e) => e.provider_label)))
			},
			{
				label: "凭据设置",
				href: Qt
			}
		]
	});
}
function nn({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Q.jsx)(z, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Ee({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = $t(t, e);
				return /* @__PURE__ */ (0, Q.jsx)(g, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Ut, { provider: e.provider }),
							/* @__PURE__ */ (0, Q.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, Q.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "已经关注" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Q.jsx)(j, { children: Zt }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, Q.jsx)(w, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Q.jsx)(j, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function rn({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(""), [u, d] = (0, Z.useState)(""), [p, m] = (0, Z.useState)(!1), [h, g] = (0, Z.useState)(null), [_, v] = (0, Z.useState)(-1), y = (0, Z.useRef)(null), b = (0, Z.useRef)(null), [ee, te] = (0, Z.useState)(/* @__PURE__ */ new Set()), [x, S] = (0, Z.useState)(/* @__PURE__ */ new Set()), [ne, C] = (0, Z.useState)(""), [w, T] = (0, Z.useState)(0);
	(0, Z.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let re = It({
		queryKey: $e(u),
		queryFn: ({ signal: e }) => Ye(u, e),
		enabled: u.length > 0 && p && !o && h !== i
	}), E = (0, Z.useMemo)(() => (re.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [re.data]), { job: D, running: O, outcome: j, start: N, dismiss: P } = Ft({
		queryKey: k,
		queryFn: ({ signal: e }) => Je(e),
		start: (e) => At([e]),
		onStarted: () => S(/* @__PURE__ */ new Set()),
		onError: (e) => C(J(e)),
		onFinish: (e) => {
			e.status === "failed" && C(e.error || "查找失败");
		}
	}), F = (e) => {
		let t = e.trim();
		!t || n || o || O || N.isPending || (C(""), v(-1), l(t), a(t), d(""), g(t), N.mutate(t));
	}, I = re.isFetching, L = p && !o && h !== i && (E.length > 0 || I), ie = () => {
		v(-1), g(i);
	}, R = (e) => {
		if (!(o || Fe(e.nativeEvent))) {
			if (e.key === "Escape" && L) ie();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!E.length) return;
				if (e.preventDefault(), !L) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? E.length - 1 : n >= E.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), F(E[_]?.value || i));
		}
	}, B = j?.results || [], ae = B.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !ee.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: $t(t, e)
	})).filter((e) => !x.has(e.key))), V = X({
		mutationFn: async (e) => {
			let t = [], n = [];
			T(0);
			for (let r of e) {
				try {
					let e = await Se(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${J(e)}`);
				}
				T((e) => e + 1);
			}
			if (n.length) try {
				await kt(n);
			} catch (e) {
				t.push(J(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			mt(), e.failures.length ? C(e.failures.join("；")) : (C(""), P(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => C(J(e))
	}), H = e.suggestions || [], oe = !c.includes("/");
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": Jt,
		className: Ee({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Jt
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						ref: y,
						className: "min-w-64 grow",
						onFocus: () => m(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !b.current?.contains(t) && m(!1);
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(M, {
							"aria-label": "来源链接、名字或 id",
							placeholder: qt,
							value: i,
							leadingIcon: ft,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), v(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: R
						}), L ? /* @__PURE__ */ (0, Q.jsx)(en, {
							field: y,
							menu: b,
							options: E,
							active: _,
							busy: I,
							onPick: F,
							onClose: ie
						}) : null]
					}),
					/* @__PURE__ */ (0, Q.jsx)(tn, {
						credentials: t,
						hidden: ee,
						onHidden: te
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "primary",
						disabled: n || !i.trim(),
						...K(O || N.isPending),
						onClick: () => F(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [O || N.isPending ? /* @__PURE__ */ (0, Q.jsx)(_e, {
					embedded: !0,
					label: D?.message || (D?.total ? `查找中：${D.checked || 0}/${D.total}` : oe ? Yt : Xt),
					value: D?.checked,
					total: D?.total
				}) : null, ne ? /* @__PURE__ */ (0, Q.jsx)(z, {
					tone: "error",
					title: "这一次没有完成",
					children: ne
				}) : null]
			}),
			B.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(A, { children: "查找结果" }),
					B.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(nn, {
						row: e,
						at: t,
						hidden: ee,
						unpicked: x,
						onPick: (e, t) => {
							let n = new Set(x);
							t ? n.delete(e) : n.add(e), S(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(f, {
								variant: "secondary",
								size: "small",
								onClick: () => P(),
								children: "关闭"
							}),
							/* @__PURE__ */ (0, Q.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: n || !ae.length,
								...K(V.isPending),
								onClick: () => V.mutate(ae),
								children: `添加选中（${ae.length}）`
							}),
							V.isPending ? /* @__PURE__ */ (0, Q.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${w}/${ae.length}`
							}) : null
						]
					})
				]
			}) : null,
			H.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "猜你喜欢"
				}), H.map((e) => /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: `浏览历史里出现 ${e.visits} 次${e.origin ? ` · ${e.origin}` : ""}`,
					onClick: () => F(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var an = "输入女优名，到 JavDB 找她的演员页", on = "添加 JAV 订阅";
function sn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: `所勾的卡分属数据库里不同的人：${[...n.values()].join("、")}，先去合并再订`,
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: `会登记到「${r}」名下`,
		blocked: !1
	} : e.known ? {
		text: `会登记到数据库里的「${e.known.name}」名下`,
		blocked: !1
	} : {
		text: `数据库里还没有「${e.q}」，会新建一位`,
		blocked: !1
	};
}
function cn({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(g, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ (0, Q.jsx)(v, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, Q.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `已在「${e.held_by.name}」名下`
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsx)(w, {
			href: e.url,
			children: e.id
		})]
	});
}
function ln({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, Z.useState)(""), [a, o] = (0, Z.useState)(null), [s, c] = (0, Z.useState)(/* @__PURE__ */ new Set()), l = Pt(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => ot(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !Fe(e.nativeEvent) && (e.preventDefault(), u());
	}, p = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, m = () => {
		a && l.run("follow", (e) => Ze(a.q, [...s], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), i(""), p(), n();
		});
	}, h = () => {
		let e = a?.known;
		e && l.run("known", (t) => Qe(e.id, t), () => {
			t(`已订阅「${e.name}」的新作`), i(""), p(), n();
		});
	}, g = a ? sn(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": on,
		className: Ee({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: on
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Q.jsx)(M, {
						"aria-label": "女优名",
						placeholder: an,
						value: r,
						leadingIcon: ft,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "primary",
					disabled: e || !r.trim(),
					...K(l.busy === "lookup"),
					onClick: u,
					children: "查找"
				})]
			}),
			l.error ? /* @__PURE__ */ (0, Q.jsx)(z, {
				tone: "error",
				title: "这一次没有完成",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, Q.jsx)(z, {
						tone: "warning",
						title: "JavDB 这一次没有搜成",
						children: a.unavailable
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(A, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(cn, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Q.jsx)(j, { children: a.unavailable ? "这一次没有拿到演员卡。" : "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(j, {
						role: "status",
						children: s.size ? g.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					_ ? /* @__PURE__ */ (0, Q.jsx)(j, {
						role: "status",
						children: _.following ? `数据库里的「${_.name}」已经在订阅新作。` : `数据库里的「${_.name}」已有 JavDB 或 DMM 编号，可以直接订阅。`
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(f, {
								variant: "secondary",
								size: "small",
								onClick: p,
								children: "关闭"
							}),
							a.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...K(l.busy === "follow"),
								onClick: m,
								children: `添加订阅（${s.size}）`
							}) : null,
							_ && !_.following ? /* @__PURE__ */ (0, Q.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: e,
								...K(l.busy === "known"),
								onClick: h,
								children: `订阅「${_.name}」`
							}) : null
						]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function un({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(R, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ (0, Q.jsx)(dn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function dn({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, Z.useState)(e.canonical_name), o = Pt();
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => vt(e.canonical_key, i.trim(), t), () => {
				mt(), n(`已把统一名称改为 ${i.trim()}`), t();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(r, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "修改统一名称"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["当前名称：", e.canonical_name]
			}),
			/* @__PURE__ */ (0, Q.jsx)(M, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(A, { children: "选择已有别名" }), /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "原名称保留为别名，关联档案和作品署名会同步更新。"
			}),
			o.error ? /* @__PURE__ */ (0, Q.jsx)(z, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					onClick: t,
					children: "取消"
				}), /* @__PURE__ */ (0, Q.jsx)(f, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === e.canonical_name,
					...K(!!o.busy),
					children: "修改统一名称"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var fn = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, pn = jt({
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	rowPaginationFeature: St,
	columnVisibilityFeature: Pe,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), mn = pn, hn = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, gn = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, _n = [
	hn,
	gn,
	{
		id: "alias",
		label: "平台别名",
		width: 240
	},
	{
		id: "evidence",
		label: "依据",
		width: 320
	},
	{
		id: "actions",
		label: "操作",
		width: 112
	}
], vn = [
	hn,
	gn,
	{
		id: "aliases",
		label: "平台别名",
		width: 400
	},
	{
		id: "actions",
		label: "操作",
		width: 184,
		min: 168
	}
], yn = (e) => e.alias;
function bn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function xn({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(Vt, {
			group: bn(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Q.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Sn({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = Rt("alias-suggestions", _n), p = Rt("alias-saved", vn), [m, h] = (0, Z.useState)(null), [v, y] = (0, Z.useState)({}), [b, w] = (0, Z.useState)({}), T = n(() => y({})), re = n(() => w({})), [E, D] = (0, Z.useState)([]), [O, k] = (0, Z.useState)([]), [j, N] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [P, F] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), I = {
		...j,
		pageIndex: Math.min(j.pageIndex, Math.max(0, Math.ceil(t.length / j.pageSize) - 1))
	}, L = {
		...P,
		pageIndex: Math.min(P.pageIndex, Math.max(0, Math.ceil(e.length / P.pageSize) - 1))
	}, [ie, R] = (0, Z.useState)(""), [z, ae] = (0, Z.useState)(""), [V, H] = (0, Z.useState)(""), oe = X({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await xe(n.canonical, n.alias);
				} catch (n) {
					throw t && mt(), Error(`${J(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			R(""), y({}), mt(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => R(J(e))
	}), se = X({
		mutationFn: (e) => xe(e.canonical, e.alias),
		onSuccess: () => {
			R(""), ae(""), H(""), mt(), u("已保存创作者别名");
		},
		onError: (e) => R(J(e))
	}), U = X({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await ht(e), n += 1;
			} catch (e) {
				throw Error(`${J(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				mt();
			}
		},
		onSuccess: () => {
			R(""), w({}), u("已移除创作者别名");
		},
		onError: (e) => R(J(e))
	}), le = (e, t) => {
		e.length && Ie({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => oe.mutateAsync(e)
		});
	}, ue = (e) => void Ie({
		title: "移除创作者别名",
		body: fn(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => U.mutateAsync(e)
	}), W = (0, Z.useRef)({
		sources: r,
		readOnly: i,
		merging: oe.isPending,
		removing: U.isPending,
		merge: le,
		remove: ue,
		rename: h
	});
	W.current = {
		sources: r,
		readOnly: i,
		merging: oe.isPending,
		removing: U.isPending,
		merge: le,
		remove: ue,
		rename: h
	};
	let de = (0, Z.useMemo)(() => {
		let e = Le();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(he, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(g, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(xn, {
					sources: W.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "平台别名",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "依据",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: W.current.readOnly,
					...K(W.current.merging),
					onClick: () => W.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), ge = (0, Z.useMemo)(() => {
		let e = Le();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Q.jsx)(he, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(g, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(xn, {
					sources: W.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "平台别名",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: B,
							"aria-label": `移除别名 ${e.name}`,
							disabled: W.current.readOnly,
							...K(W.current.removing),
							onClick: () => W.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: W.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => W.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), _e = Lt({
		features: pn,
		data: t,
		columns: de,
		getRowId: yn,
		state: {
			rowSelection: v,
			sorting: E,
			pagination: I,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			T(), y(e);
		},
		onSortingChange: (e) => {
			D(e), N((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: N,
		enableRowSelection: !0
	}), ve = Lt({
		features: mn,
		data: e,
		columns: ge,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: b,
			sorting: O,
			pagination: L,
			columnVisibility: p.visibility
		},
		onColumnVisibilityChange: p.change,
		onRowSelectionChange: (e) => {
			re(), w(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			k(e), F((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: F
	}), G = _e.getSelectedRowModel().rows.map((e) => e.original), be = ve.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), Se = K(oe.isPending);
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Ee({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "创作者别名"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(A, { children: "手动添加别名" }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(M, {
							"aria-label": "统一名称",
							placeholder: "在 Peach 中统一显示的名称",
							value: z,
							onChange: ae,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(M, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: V,
							onChange: H,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "primary",
							disabled: i || !z.trim() || !V.trim(),
							...K(se.isPending),
							onClick: () => se.mutate({
								canonical: z.trim(),
								alias: V.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			ie ? /* @__PURE__ */ (0, Q.jsx)(C, { children: ie }) : null,
			t.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(A, { children: "待合并" }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} 组`
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Q.jsx)(f, {
									variant: "primary",
									size: "small",
									disabled: i,
									...Se,
									onClick: () => le(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ (0, Q.jsx)(x, {
									label: "待合并创作者别名",
									sorting: E,
									options: [
										{
											id: "canonical",
											label: "统一名称"
										},
										{
											id: "alias",
											label: "平台别名"
										},
										{
											id: "evidence",
											label: "依据"
										}
									],
									onChange: (e) => {
										D(e), N((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Q.jsx)(pe, {
									preferences: d,
									label: "待合并创作者别名"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(ce, {
						label: "待合并别名批量操作",
						visible: G.length > 0,
						count: `已选 ${G.length} 组`,
						children: [/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...Se,
							onClick: () => le(G, !1),
							children: `合并所选（${G.length}）`
						}), /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => y({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)(te, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => _e.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(fe, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: E[0] ? {
								column: E[0].id,
								direction: E[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => _e.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [_e.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Xe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(_, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(me, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: _e.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(ee, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: I,
						onChange: N
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(A, { children: "已保存别名" }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(x, {
								label: "已保存创作者别名",
								sorting: O,
								options: [{
									id: "canonical",
									label: "统一名称"
								}, {
									id: "aliases",
									label: "平台别名"
								}],
								onChange: (e) => {
									k(e), F((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Q.jsx)(pe, {
								preferences: p,
								label: "已保存创作者别名"
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(ce, {
						label: "已保存别名批量操作",
						visible: be.length > 0,
						count: `已选 ${be.length} 个别名`,
						children: [/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...K(U.isPending),
							onClick: () => void Ie({
								title: "移除所选创作者别名",
								body: `将移除以下 ${be.length} 个别名，对应来源恢复为独立创作者组。`,
								items: be,
								confirmLabel: "移除所选别名",
								onConfirm: () => U.mutateAsync(be)
							}),
							children: `移除所选别名（${be.length}）`
						}), /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => w({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(te, {
						follow: !0,
						preferences: p,
						onRowClick: (e) => ve.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(fe, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: O[0] ? {
								column: O[0].id,
								direction: O[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ve.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [ve.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...p.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Xe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(_, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(me, {
									preferences: p,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: p.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: ve.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Q.jsx)(ee, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: L,
						onChange: F
					})] }) : /* @__PURE__ */ (0, Q.jsx)(ne, {
						size: "compact",
						icon: ye,
						title: "还没有保存创作者别名",
						actions: i ? void 0 : /* @__PURE__ */ (0, Q.jsx)(S, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(un, {
				group: m,
				close: () => h(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Cn = jt({
	rowPaginationFeature: St,
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	columnVisibilityFeature: Pe,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), wn = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, Tn = /* @__PURE__ */ new Set(["actions"]), En = Object.entries(wn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Dn = () => pt.invalidateQueries({
	queryKey: T,
	exact: !0
}), $ = (e) => e.name || e.url;
function On(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function kn({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Q.jsx)(v, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Q.jsx)(v, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ (0, Q.jsx)(v, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ (0, Q.jsx)(v, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function An({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Q.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Bt}`,
		dangerouslySetInnerHTML: { __html: Te($(e), t, null, "performer") }
	});
}
var jn = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function Mn(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function Nn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Ie({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${$(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function Pn({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = It({
		queryKey: T,
		queryFn: ({ signal: e }) => Y(e)
	}), d = Pt(), p = Rt("jav-feeds", En), h = i.data, v = (0, Z.useMemo)(() => h?.sources ?? [], [h]), [y, b] = (0, Z.useState)(/* @__PURE__ */ new Set()), S = r?.ids ?? y, w = r?.onChange ?? b, [re, E] = (0, Z.useState)(1), [D, O] = (0, Z.useState)(20), [k, A] = (0, Z.useState)([]), M = ut(v.length, D, re);
	(0, Z.useEffect)(() => {
		E((e) => Math.min(e, M.pages));
	}, [M.pages]), (0, Z.useEffect)(() => {
		w((e) => {
			let t = new Set(v.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [v, w]);
	let N = X({
		mutationFn: async (e) => {
			let t = await st(e.ids, 4, async (t) => {
				e.action === "remove" ? await gt(t) : await Et(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (w(/* @__PURE__ */ new Set()), Dn(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				d.setError(`${n.length} 条没有写入：${e.ok ? "" : J(e.error)}`);
			}
		},
		onError: (e) => d.setError(J(e))
	}), P = (0, Z.useMemo)(() => Mn(v), [v]), I = (0, Z.useRef)({
		readOnly: e,
		shared: P,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	I.current = {
		readOnly: e,
		shared: P,
		busy: d.busy,
		toggle: (e, t) => void d.run(`enabled-${e.id}`, (n) => Et(e.id, t, n), () => void Dn()),
		fetch: (e) => void d.run(`check-${e.id}`, (t) => ke(t, [e.id]), () => void Dn()),
		remove: (e) => void Nn([e], async () => {
			await gt(e.id), t(`已移除订阅源「${$(e)}」`), Dn();
		})
	};
	let L = (0, Z.useMemo)(() => {
		let e = Le(), t = (e) => () => wn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(he, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(g, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${$(e.row.original)}`
				})
			}),
			e.accessor($, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = jn(e.row.original, I.current.shared);
					return /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(An, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								title: `站上这一页挂在「${t}」名下`,
								children: t
							}) : null
						]
					});
				}
			}),
			e.accessor((e) => e.kind_label, {
				id: "kind",
				header: t("kind"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: "打开来源页面",
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Q.jsx)(le, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : On(e.getValue()),
						label: On(e.getValue())
					}), /* @__PURE__ */ (0, Q.jsx)(G, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(kn, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: Ue(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? at(e.row.original.last_fetched_at) : "还没拉过"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()} 条`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(de, {
							"aria-label": `启用 ${$(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: I.current.readOnly,
							onChange: (t) => I.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": `拉取 ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							...K(I.current.busy === `check-${e.row.original.id}`),
							onClick: () => I.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: F,
							"aria-label": `移除 ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							onClick: () => I.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), ie = (0, Z.useMemo)(() => Object.fromEntries([...S].map((e) => [String(e), !0])), [S]), R = Lt({
		features: Cn,
		data: v,
		columns: L,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: ie,
			sorting: k,
			pagination: {
				pageIndex: M.page - 1,
				pageSize: D
			},
			columnVisibility: p.visibility
		},
		onColumnVisibilityChange: p.change,
		onSortingChange: (e) => {
			A(e), E(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(ie) : e;
			w(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!h) return i.error ? /* @__PURE__ */ (0, Q.jsx)(z, {
		tone: "error",
		title: "打不开订阅源",
		children: J(i.error)
	}) : /* @__PURE__ */ (0, Q.jsx)(j, { children: "正在读订阅源。" });
	let B = () => void d.run("check", (e) => ke(e), () => void Dn()), ae = (e) => {
		r?.onActivate(), w((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, V = v.filter((e) => S.has(e.id)), H = v.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-label": "JAV 订阅列表",
			className: Ee({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV 订阅源"
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${v.length.toLocaleString()} 个订阅源 · ${(Number(h.unread) || 0).toLocaleString()} 条未看`
						})]
					}), /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(f, {
								onClick: B,
								disabled: e,
								...K(d.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ (0, Q.jsx)(pe, {
								preferences: p,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ (0, Q.jsx)(x, {
								label: "JAV 订阅源",
								sorting: k,
								onChange: (e) => {
									A(e), E(1);
								},
								options: [
									"name",
									"kind",
									"origin",
									"status",
									"interval",
									"fetched",
									"fresh"
								].map((e) => ({
									id: e,
									label: wn[e]
								}))
							})
						]
					})]
				}),
				H.length || d.error ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [H.length ? /* @__PURE__ */ (0, Q.jsx)(z, {
						tone: "error",
						title: `${H.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ (0, Q.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: H.map((e) => /* @__PURE__ */ (0, Q.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${$(e)}：${He(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, d.error ? /* @__PURE__ */ (0, Q.jsx)(C, { children: d.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(ce, {
					visible: V.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${V.length} 条订阅源`,
					children: [
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...K(N.isPending),
							onClick: () => N.mutate({
								ids: V.map((e) => e.id),
								action: "enabled"
							}),
							children: "启用"
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...K(N.isPending),
							onClick: () => N.mutate({
								ids: V.map((e) => e.id),
								action: "paused"
							}),
							children: "暂停"
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "danger",
							size: "small",
							disabled: e,
							...K(N.isPending),
							onClick: () => void Nn(V, () => N.mutateAsync({
								ids: V.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => w(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				v.length ? /* @__PURE__ */ (0, Q.jsx)(te, {
					follow: !0,
					preferences: p,
					onRowClick: (e) => ae(Number(e)),
					children: /* @__PURE__ */ (0, Q.jsxs)(fe, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: k[0] ? {
							column: k[0].id,
							direction: k[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => R.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [R.getHeaderGroups()[0].headers.map((e) => {
							let t = Xe(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...p.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [Tn.has(e.column.id) ? /* @__PURE__ */ (0, Q.jsx)(u, { children: t }) : /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(_, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(me, {
									preferences: p,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Q.jsx)(o, {
							id: "remaining-space",
							"aria-label": "行空白区域",
							"data-table-space": "",
							width: p.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: R.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Q.jsx)(ne, {
					icon: m,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						onClick: n,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				v.length ? /* @__PURE__ */ (0, Q.jsx)(ee, {
					label: "JAV 订阅",
					total: M.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: M.page - 1,
						pageSize: D
					},
					onChange: (e) => {
						O(e.pageSize), E(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${(Number(h.unread) || 0).toLocaleString()} · 已启用 ${v.filter((e) => e.enabled).length.toLocaleString()} / ${v.length.toLocaleString()}`
					})
				})
			]
		})
	});
}
// src/react/follow-manage/source-list.tsx
var Fn = jt({
	rowPaginationFeature: St,
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	columnVisibilityFeature: Pe,
	paginatedRowModel: e()
}), In = (e) => (Number(e) || 0).toLocaleString(), Ln = Object.fromEntries(Object.entries(h).map(([e, t]) => [t, e])), Rn = 740;
function zn() {
	let [e, t] = (0, Z.useState)(!1), n = (0, Z.useRef)(null), r = (0, Z.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Rn));
		r.observe(e), n.current = r, t(e.clientWidth < Rn);
	}, []);
	return (0, Z.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Bn = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, Vn = Object.entries(Bn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function Hn({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			Ne(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ (0, Q.jsx)(g, {
				isSelected: t,
				onChange: n,
				"aria-label": `选择 ${e.label}`
			}),
			/* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, Q.jsx)(Ut, { provider: e.provider })
				}), /* @__PURE__ */ (0, Q.jsx)(Wt, { source: e })]
			}),
			/* @__PURE__ */ (0, Q.jsx)(u, { children: e.provider_label }),
			/* @__PURE__ */ (0, Q.jsx)(Gt, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, Q.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, Q.jsx)(Ht, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Me(e)
					}),
					/* @__PURE__ */ (0, Q.jsx)(de, {
						"aria-label": `启用 ${e.label}`,
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": `检查 ${e.label} 的更新`,
							disabled: !e.enabled || r.readOnly,
							...K(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: F,
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
function Un({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: s }) {
	let c = e.map((e) => e.id), l = e.filter((e) => e.enabled).map((e) => e.id), d = e.filter(tt).length, p = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), m = `follow-author-${e[0].id}`, h = Tt(r, c);
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": `${t} 的关注来源`,
		className: Ee({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(Vt, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, Q.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: p,
						children: [
							e.map((e) => /* @__PURE__ */ (0, Q.jsx)(Ut, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, Q.jsx)(u, { children: `来源：${p}` }),
							d ? /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: `${d} 个失败`
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: ze,
						"aria-label": `检查 ${t} 的全部来源`,
						disabled: !l.length || i.readOnly,
						...K(i.busy),
						onClick: () => i.check(l)
					}), /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							leadingIcon: it,
							"aria-pressed": h.all ? "true" : h.some ? "mixed" : "false",
							"aria-label": `${h.all ? "取消全选" : "全选"} ${t} 的来源`,
							onClick: () => o(!h.all),
							children: h.all ? "取消全选" : "全选"
						}), /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": m,
							leadingIcon: y,
							"aria-label": `${n ? "收起" : "展开"} ${t} 的来源`,
							onClick: () => a(!n),
							children: n ? "收起" : "展开"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)(b, {
			id: m,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, Q.jsx)(Hn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => s(e.id, t)
			}, e.id))
		})]
	});
}
function Wn(e) {
	let { data: t, sort: n, dir: r, page: i, layout: d, pageSize: p, selected: v, readOnly: b, onSort: x, onPage: S, onLayout: C, onPageSize: w, onSelected: T, toast: E, openFollow: D, onAdd: O } = e, k = t.sources, A = (0, Z.useMemo)(() => t.author_aliases || [], [t.author_aliases]), j = t.counts || {}, [M, P] = (0, Z.useState)(/* @__PURE__ */ new Set()), [I, L] = zn(), [ie, R] = (0, Z.useState)(""), B = (0, Z.useMemo)(() => Ce(k, n, r, A), [
		k,
		n,
		r,
		A
	]), H = (0, Z.useMemo)(() => Mt(B, n, r, A), [
		B,
		n,
		r,
		A
	]), { job: U, running: le, outcome: W, start: ge } = Ft({
		queryKey: re,
		queryFn: ({ signal: e }) => We(e),
		start: (e) => kt(e),
		onError: (e) => R(J(e)),
		onFinish: (e) => {
			mt(), E(e.status === "failed" ? e.error || "检查失败" : Ae(e));
		}
	}), G = (e) => {
		le || ge.isPending || (R(""), ge.mutate(e));
	}, ye = (e, t) => T(Nt(v, [e], t)), be = (e, t) => T(Nt(v, e, t)), xe = X({
		mutationFn: (e) => _t(e),
		onSuccess: (e, t) => {
			Be([t]), T(Nt(v, [t], !1)), E("已取消关注来源");
		},
		onError: (e) => R(J(e))
	}), Se = X({
		mutationFn: (e) => Dt(e.id, e.enabled),
		onSuccess: (e, t) => {
			dt(t.id, { enabled: t.enabled }), R("");
		},
		onError: (e) => R(J(e))
	}), Te = (e) => void Ie({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => xe.mutateAsync(e.id)
	}), ke = X({
		mutationFn: async (e) => {
			let t = await st(e.ids, 4, async (t) => {
				e.action === "remove" ? await _t(t) : await Dt(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Be(e.done);
			else for (let t of e.done) dt(t, { enabled: e.action === "enabled" });
			T(Nt(v, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				R(`${t.length}/${e.ids.length} 个来源未更新：${J(t[0]?.error)}`);
				return;
			}
			R("");
			let n = e.action === "remove" ? "删除" : e.action === "enabled" ? "启用" : "暂停";
			E(`已${n} ${e.done.length} 个关注来源`);
		},
		onError: (e) => R(J(e))
	}), Ne = X({
		mutationFn: async (e) => {
			let t = ((await qe()).groups || []).flatMap((e) => [
				e.primary,
				...e.variants,
				...e.duplicates
			]).filter((e) => e.status === "new").map((e) => e.id);
			return {
				ids: t,
				failed: (await st(t, 6, (t) => ct(t, e))).filter((e) => !e.ok)
			};
		},
		onSuccess: (e) => {
			mt(), e.failed.length ? R(`批量更新 ${e.failed.length}/${e.ids.length} 项未完成`) : (R(""), E(`已批量标记 ${e.ids.length} 项`));
		},
		onError: (e) => R(J(e))
	}), Pe = (e, t) => Se.mutate({
		id: e.id,
		enabled: t
	}), Fe = (0, Z.useRef)({
		check: G,
		toggle: Pe,
		remove: Te,
		busy: !1,
		readOnly: b
	});
	Fe.current = {
		check: G,
		toggle: Pe,
		remove: Te,
		busy: le || ge.isPending,
		readOnly: b
	};
	let q = Fe.current, Re = (0, Z.useMemo)(() => {
		let e = Le(), t = (e) => () => Bn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(he, {
					table: e.table,
					label: "全选本页来源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(g, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${e.row.original.source.label}`
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, Q.jsx)(Vt, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Q.jsx)(Wt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Q.jsx)(Ht, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Q.jsx)(Ut, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Gt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Me(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(de, {
							"aria-label": `启用 ${e.row.original.source.label}`,
							isSelected: e.row.original.source.enabled,
							isDisabled: q.readOnly,
							onChange: (t) => Fe.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": `检查 ${e.row.original.source.label} 的更新`,
							disabled: !e.row.original.source.enabled || q.readOnly,
							...K(q.busy),
							onClick: () => Fe.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: F,
							"aria-label": `移除 ${e.row.original.source.label}`,
							disabled: q.readOnly,
							onClick: () => Fe.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [q]), Ue = (0, Z.useMemo)(() => {
		let e = Ln[n];
		return e ? [{
			id: e,
			desc: r === "desc"
		}] : [];
	}, [n, r]), Ge = (0, Z.useMemo)(() => Object.fromEntries([...v].map((e) => [String(e), !0])), [v]), Y = d === "table", Ke = Rt("follow-sources", Vn), Je = ut(Y ? H.length : B.length, p, i), Ye = Lt({
		features: Fn,
		data: H,
		columns: Re,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: Ue,
			rowSelection: Ge,
			pagination: {
				pageIndex: Je.page - 1,
				pageSize: p
			},
			columnVisibility: Ke.visibility
		},
		onColumnVisibilityChange: Ke.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(Ue) : e)[0];
			if (!t) return;
			let n = h[t.id];
			n && x(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Ge) : e;
			T(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: Je.page - 1,
				pageSize: p
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === p ? n.pageIndex !== t.pageIndex && S(n.pageIndex + 1) : w(n.pageSize);
		}
	}), Ze = Ye.getRowModel().rows, Qe = Y ? Ze.map((e) => e.original.source.id) : B.slice(Je.start, Je.end).flatMap((e) => e.map((e) => e.id)), $e = Tt(v, Qe), et = [...v], tt = Oe(W), nt = k.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), rt = De(W), it = B.length > 0 && M.size >= B.length;
	return k.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Ee({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				ref: I,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "关注列表"
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: `${k.length.toLocaleString()} 个来源${j.new ? ` · ${In(j.new)} 条未看` : ""}`
					})]
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						nt.length ? /* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "secondary",
							disabled: b,
							...K(q.busy),
							onClick: () => G(nt),
							children: "检查失败项"
						}) : null,
						/* @__PURE__ */ (0, Q.jsx)(f, {
							variant: "primary",
							leadingIcon: ze,
							disabled: b,
							"aria-label": "检查全部",
							iconOnly: L,
							...K(q.busy),
							onClick: () => G([]),
							children: "检查全部"
						}),
						/* @__PURE__ */ (0, Q.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, Q.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": "关注列表版式",
									children: [/* @__PURE__ */ (0, Q.jsx)(f, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ve,
										"aria-label": N[0][1],
										"aria-pressed": !Y,
										onClick: () => C("default")
									}), /* @__PURE__ */ (0, Q.jsx)(f, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Ve,
										"aria-label": N[1][1],
										"aria-pressed": Y,
										onClick: () => C("table")
									})]
								}),
								Y ? /* @__PURE__ */ (0, Q.jsx)(pe, {
									preferences: Ke,
									label: "关注来源"
								}) : null,
								/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Q.jsx)(oe, {
										"aria-label": "关注列表排序",
										prefix: "排序",
										selectedKey: n,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											x(t, ae[t]);
										},
										children: V.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(se, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Q.jsx)(f, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: ue,
										"data-icon-state": r === "asc" ? "a" : "b",
										"aria-label": Ot(n, r),
										onClick: () => x(n, r === "asc" ? "desc" : "asc")
									})]
								}),
								Y ? null : /* @__PURE__ */ (0, Q.jsx)(f, {
									variant: "secondary",
									iconOnly: L,
									leadingIcon: y,
									"aria-expanded": !it,
									"aria-label": it ? "全部展开" : "全部收起",
									onClick: () => P(it ? /* @__PURE__ */ new Set() : new Set(B.map((e) => String(e[0].author_key || e[0].id)))),
									children: it ? "全部展开" : "全部收起"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					le ? /* @__PURE__ */ (0, Q.jsx)(_e, {
						embedded: !0,
						label: U?.message || (U?.total ? `${U.older ? "抓取历史" : "检查更新"}：已完成 ${U.checked || 0}/${U.total} 个来源` : "正在准备检查任务"),
						value: U?.checked,
						total: U?.total
					}) : null,
					ie ? /* @__PURE__ */ (0, Q.jsx)(z, {
						tone: "error",
						title: "操作未完成",
						children: ie
					}) : null,
					!le && W?.results?.length ? /* @__PURE__ */ (0, Q.jsx)(z, {
						tone: "neutral",
						title: "检查结果",
						children: je(W)
					}) : null,
					tt.length ? /* @__PURE__ */ (0, Q.jsx)(z, {
						tone: "error",
						title: `${tt.length} 个来源检查失败`,
						extra: /* @__PURE__ */ (0, Q.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: tt.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${He(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: "这些来源这一轮没有取到更新。"
					}) : null,
					rt ? /* @__PURE__ */ (0, Q.jsx)(z, {
						tone: "warning",
						children: `条目已保存，但这次未保存来源的原始响应：${rt}`
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(ce, {
				label: "关注来源批量操作",
				visible: et.length > 0,
				count: `已选 ${et.length} 个来源`,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...K(q.busy),
						onClick: () => G(et),
						children: "检查所选"
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...K(ke.isPending),
						onClick: () => ke.mutate({
							ids: et,
							action: "enabled"
						}),
						children: "启用"
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...K(ke.isPending),
						onClick: () => ke.mutate({
							ids: et,
							action: "paused"
						}),
						children: "暂停"
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "danger",
						size: "small",
						disabled: b,
						...K(ke.isPending),
						onClick: () => void Ie({
							title: `删除 ${et.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => ke.mutateAsync({
								ids: et,
								action: "remove"
							})
						}),
						children: "删除"
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "ghost",
						size: "small",
						onClick: () => T(/* @__PURE__ */ new Set()),
						children: "取消选择"
					})
				]
			}),
			Y ? /* @__PURE__ */ (0, Q.jsx)(te, {
				follow: !0,
				preferences: Ke,
				onRowClick: (e) => ye(Number(e), !v.has(Number(e))),
				children: /* @__PURE__ */ (0, Q.jsxs)(fe, {
					"aria-label": "关注来源",
					size: "sm",
					sortDescriptor: Ue[0] ? {
						column: Ue[0].id,
						direction: Ue[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Ye.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [Ye.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in h, n = Xe(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, Q.jsx)(o, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Ke.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, Q.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [n, /* @__PURE__ */ (0, Q.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, Q.jsx)(_, {})
								})]
							}) : /* @__PURE__ */ (0, Q.jsx)(u, { children: n }), /* @__PURE__ */ (0, Q.jsx)(me, {
								preferences: Ke,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, Q.jsx)(o, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: Ke.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, Q.jsx)(a, {
						renderEmptyState: () => "这一页没有来源",
						children: Ze.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(g, {
				isSelected: $e.all,
				isIndeterminate: $e.some,
				onChange: (e) => be(Qe, e),
				"aria-label": "全选本页来源",
				children: "全选本页"
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex flex-col gap-3",
				children: B.slice(Je.start, Je.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, Q.jsx)(Un, {
						group: e,
						name: we(e, A),
						handlers: q,
						selected: v,
						open: !M.has(t),
						onOpen: (e) => {
							let n = new Set(M);
							e ? n.delete(t) : n.add(t), P(n);
						},
						onToggleGroup: (t) => be(e.map((e) => e.id), t),
						onToggle: ye
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, Q.jsx)(ee, {
				label: "关注列表",
				total: Je.total,
				pagination: {
					pageIndex: Je.page - 1,
					pageSize: p
				},
				unit: Y ? "个来源" : "位创作者",
				pageUnit: Y ? "条" : "位",
				onChange: (e) => {
					e.pageSize === p ? Ye.setPageIndex(e.pageIndex) : Ye.setPageSize(e.pageSize);
				}
			}),
			j.new ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${In(j.new)} · 已看 ${In(j.seen)} · 已保存 ${In(j.saved)} · 已忽略 ${In(j.ignored)}`
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						onClick: D,
						children: "去看更新"
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...K(Ne.isPending),
						onClick: () => void Ie({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => Ne.mutateAsync("seen")
						}),
						children: "全部标记已看"
					}),
					/* @__PURE__ */ (0, Q.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...K(Ne.isPending),
						onClick: () => void Ie({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => Ne.mutateAsync("ignored")
						}),
						children: "全部忽略"
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, Q.jsx)(ne, {
		icon: m,
		title: "还没有关注来源",
		actions: /* @__PURE__ */ (0, Q.jsx)(f, {
			variant: "primary",
			size: "small",
			onClick: O,
			children: "添加关注"
		}),
		children: "关注来源及其检查状态会显示在这里。"
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Gn = (e) => O.some(([t]) => t === e);
function Kn({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Ee({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, Q.jsxs)("b", {
			"data-follow-reading": "",
			className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${t >= 1e6 ? "text-headline-medium" : t >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "min-w-0 wrap-anywhere",
				children: t.toLocaleString()
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "whitespace-nowrap text-body-2-regular text-text-secondary",
				children: ` ${n}`
			})]
		})]
	});
}
function qn(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, Z.useState)(Gn(e.tab) ? e.tab : "list"), [u, d] = (0, Z.useState)(Math.max(1, Math.floor(e.page) || 1)), [f, m] = (0, Z.useState)(() => xt(e.sort, e.dir).sort), [h, g] = (0, Z.useState)(() => xt(e.sort, e.dir).dir), [_, v] = (0, Z.useState)(nt(e.layout) ? e.layout : "default"), [y, b] = (0, Z.useState)(lt(e.pageSize)), [ee, te] = (0, Z.useState)(/* @__PURE__ */ new Set()), [x, S] = (0, Z.useState)(/* @__PURE__ */ new Set()), ne = It({
		queryKey: D,
		queryFn: ({ signal: e }) => Ke(e)
	}), C = It({
		queryKey: E,
		queryFn: ({ signal: e }) => Ge(e)
	}), re = It({
		queryKey: T,
		queryFn: ({ signal: e }) => Y(e)
	}), k = ne.data || { sources: [] }, A = C.data || {
		root: "",
		providers: []
	}, j = k.sources;
	(0, Z.useEffect)(() => {
		te((e) => {
			let t = rt(e, j);
			return t.size === e.size ? e : t;
		});
	}, [j]);
	let M = (e) => {
		let n = e.sort ?? f, r = e.dir ?? h;
		t({
			tab: e.tab ?? c,
			page: e.page ?? u,
			sort: n === "checked" ? "" : n,
			dir: r === ae[n] ? "" : r
		});
	}, N = et(j), P = j.filter(tt).length, F = j.filter((e) => e.enabled).length, I = (A.providers || []).filter((e) => e.requirement === "required" && !q(e)).length, L = new Set((re.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Q.jsxs)(zt, { children: [
		a ? /* @__PURE__ */ (0, Q.jsx)(z, {
			tone: "warning",
			title: "本机只能浏览",
			extra: s ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Q.jsx)(w, {
					href: s,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: H,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(Kn, {
					term: "关注创作者",
					figure: N.length,
					unit: "位"
				}),
				/* @__PURE__ */ (0, Q.jsx)(Kn, {
					term: "启用来源",
					figure: F,
					unit: `/ ${j.length}`
				}),
				/* @__PURE__ */ (0, Q.jsx)(Kn, {
					term: "检查失败",
					figure: P,
					unit: "个来源"
				}),
				/* @__PURE__ */ (0, Q.jsx)(Kn, {
					term: "未看更新",
					figure: k.counts?.new || 0,
					unit: "条"
				}),
				/* @__PURE__ */ (0, Q.jsx)(Kn, {
					term: "JAV 订阅",
					figure: L,
					unit: "位"
				}),
				/* @__PURE__ */ (0, Q.jsx)(Kn, {
					term: "未看新作",
					figure: re.data?.unread || 0,
					unit: "条"
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ (0, Q.jsx)(W, {
						group: "follow",
						label: "关注管理区域",
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: O.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							te(/* @__PURE__ */ new Set()), S(/* @__PURE__ */ new Set()), l(e), M({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Q.jsx)(Pn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), M({ tab: "add" });
						},
						selection: {
							ids: x,
							onChange: S,
							onActivate: () => te(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ (0, Q.jsx)(Wn, {
						data: k,
						sort: f,
						dir: h,
						page: u,
						layout: _,
						pageSize: y,
						selected: ee,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), M({ tab: "add" });
						},
						onSort: (e, t) => {
							m(e), g(t), d(1), M({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							d(e), M({ page: e });
						},
						onSelected: (e) => {
							te(e), S(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							v(e), d(1), n({ layout: e }), M({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), d(1), n({ pageSize: e }), M({ page: 1 });
						}
					})]
				}) : null,
				c === "add" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-add",
					"aria-labelledby": "follow-tab-add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(rn, {
							data: k,
							credentials: A,
							readOnly: a,
							toast: r
						}),
						/* @__PURE__ */ (0, Q.jsx)(ln, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								re.refetch(), l("list"), M({ tab: "list" });
							}
						}),
						/* @__PURE__ */ (0, Q.jsx)(Sn, {
							groups: k.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: k.alias_suggestions || [],
							sources: k.sources
						})
					]
				}) : null,
				c === "tags" ? /* @__PURE__ */ (0, Q.jsx)("div", {
					role: "tabpanel",
					id: "follow-panel-tags",
					"aria-labelledby": "follow-tab-tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Q.jsx)(ge, { scope: "online" })
				}) : null
			]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsxs)(p, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", I ? `（${I}）` : ""]
		}) })
	] });
}
export { qn as FollowManagePage };

//# debugId=611abe0a-3d81-49e6-9320-e40a71893ab9