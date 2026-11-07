(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "742256b8-c749-4afc-add1-a817c24d6775", e._sentryDebugIdIdentifier = "sentry-dbid-742256b8-c749-4afc-add1-a817c24d6775");
	} catch {}
})();
import { createPaginatedRowModel as e, createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $ea3928288112382f$export$439d29a4e110a164 as u, $l as d, Button as f, ButtonLink as p, Bx as m, COLUMN_SORT as h, Checkbox as g, ChevronSortDown as _, Chip as v, CollapseChevron as y, CollapseRegion as b, DataTableFooter as ee, DataTableFrame as x, DataTableSort as S, EmptyFocusButton as C, EmptyState as w, ErrorText as T, ExternalLink as E, FEEDS_KEY as D, FOLLOW_CHECK_KEY as O, FOLLOW_CREDENTIALS_KEY as k, FOLLOW_MANAGE_KEY as A, FOLLOW_MANAGE_NAV as j, FOLLOW_RESOLVE_KEY as M, FieldLabel as N, Help as P, Input as F, LAYOUTS as I, LoadingDots as L, M6 as R, MENU_ITEM as z, MENU_ITEM_INTERACTIVE as te, MENU_POPOVER_SURFACE as ne, ModalFrame as B, Note as V, P7 as H, SORT_DEFAULT_DIR as re, SORT_OPTIONS as U, STAT_STRIP_SIX as W, Select as ie, SelectItem as ae, SelectionDock as oe, SelectionPopover as G, SiteLabel as se, SortDirectionIcon as ce, SortableBoardTabs as K, Switch as le, Table as ue, TableColumnControls as de, TableColumnResizer as fe, TableSelectionHeader as pe, TagManager as me, TaskProgress as he, Un as ge, Wt as _e, Xf as ve, __toESM as ye, addAlias as be, addSource as xe, authorGroups as Se, authorName as Ce, avatarInner as we, busyProps as q, cardClass as Te, checkEvidenceGap as Ee, checkFailures as De, checkFeeds as Oe, checkReceipt as ke, checkSummary as Ae, checkedText as je, clickedBlank as Me, columnVisibilityFeature as Ne, composingKey as Pe, confirmModal as Fe, createColumnHelper as Ie, credentialDone as Le, cx as Re, dZ as ze, dropSources as Be, du as Ve, errorHeadline as He, errorMessage as J, feedIntervalText as Ue, fetchCheckJob as We, fetchCredentials as Ge, fetchFeeds as Y, fetchFollow as Ke, fetchPending as qe, fetchResolveJob as Je, fetchSuggestions as Ye, flexRender as Xe, followFeedByName as Ze, followFeedEntity as Qe, followSuggestKey as $e, groupByAuthor as et, isBroken as tt, isLayout as nt, keepSelected as rt, l7 as it, localTime as at, lookupFeedActor as ot, mapLimit as st, markItem as ct, pageSizeOf as lt, pageWindow as ut, patchSource as dt, pv as ft, queryClient as pt, reloadFollowManage as mt, removeAlias as ht, removeFeed as gt, removeSource as _t, renameAliasGroup as vt, require_jsx_runtime as yt, require_react as bt, resolveFollowSort as xt, rowPaginationFeature as St, rowSelectionFeature as Ct, rowSortingFeature as wt, selectionState as Tt, setFeedEnabled as Et, setSourceEnabled as Dt, sortLabel as Ot, startCheck as kt, startResolve as At, tableFeatures as jt, tableRows as Mt, toggleGroup as Nt, useAction as Pt, useBackgroundJob as Ft, useMutation as It, useQuery as Lt, useTable as Rt, useTablePreferences as zt } from "./peach-app.js";
import { Page as Bt } from "./peach-app.page-QAncjzM1.js";
import { LEGACY_AVATAR_IMG as Vt } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { AuthorAvatar as Ht, ErrorLine as Ut, SourceIcon as Wt, SourceLink as Gt, StatusBadge as Kt } from "./peach-app.source-view-DalWfDkm.js";
// src/react/follow-manage/add-source.tsx
var X = /* @__PURE__ */ ye(bt(), 1), Z = yt(), qt = Re(z, te, "text-body-2-medium"), Jt = "粘贴来源链接，或输入创作者名、id…", Yt = "添加创作者关注", Xt = "查找中（首次按名字查要下载创作者索引，可能几十秒）", Zt = "识别中", Qt = "站内没有查到来源", $t = "/settings/subscriptions", en = (e, t) => `${e}:${t.url}`;
function tn({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
	return (0, X.useEffect)(() => {
		t.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [t, r]), /* @__PURE__ */ (0, Z.jsxs)(i, {
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
		className: Re(ne, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Z.jsx)(L, { label: "正在查找建议" })
		}) : null, n.map((e, t) => /* @__PURE__ */ (0, Z.jsxs)(X.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Z.jsxs)("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? Re(qt, "bg-background-secondary-default") : qt,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function nn({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ (0, Z.jsx)(G, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: d,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.provider }), e.provider_label]
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
				href: $t
			}
		]
	});
}
function rn({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Z.jsx)(V, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: Te({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = en(t, e);
				return /* @__PURE__ */ (0, Z.jsx)(g, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.provider }),
							/* @__PURE__ */ (0, Z.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Z.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, Z.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "已经关注" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Z.jsx)(P, { children: Qt }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, Z.jsx)(E, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Z.jsx)(P, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function an({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, X.useState)(""), [o, s] = (0, X.useState)(!1), [c, l] = (0, X.useState)(""), [u, d] = (0, X.useState)(""), [p, m] = (0, X.useState)(!1), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(-1), y = (0, X.useRef)(null), b = (0, X.useRef)(null), [ee, x] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, X.useState)(/* @__PURE__ */ new Set()), [w, T] = (0, X.useState)(""), [E, D] = (0, X.useState)(0);
	(0, X.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let O = Lt({
		queryKey: $e(u),
		queryFn: ({ signal: e }) => Ye(u, e),
		enabled: u.length > 0 && p && !o && h !== i
	}), k = (0, X.useMemo)(() => (O.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [O.data]), { job: A, running: j, outcome: P, start: I, dismiss: L } = Ft({
		queryKey: M,
		queryFn: ({ signal: e }) => Je(e),
		start: (e) => At([e]),
		onStarted: () => C(/* @__PURE__ */ new Set()),
		onError: (e) => T(J(e)),
		onFinish: (e) => {
			e.status === "failed" && T(e.error || "查找失败");
		}
	}), R = (e) => {
		let t = e.trim();
		!t || n || o || j || I.isPending || (T(""), v(-1), l(t), a(t), d(""), g(t), I.mutate(t));
	}, z = O.isFetching, te = p && !o && h !== i && (k.length > 0 || z), ne = () => {
		v(-1), g(i);
	}, B = (e) => {
		if (!(o || Pe(e.nativeEvent))) {
			if (e.key === "Escape" && te) ne();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!k.length) return;
				if (e.preventDefault(), !te) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? k.length - 1 : n >= k.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), R(k[_]?.value || i));
		}
	}, H = P?.results || [], re = H.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !ee.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: en(t, e)
	})).filter((e) => !S.has(e.key))), U = It({
		mutationFn: async (e) => {
			let t = [], n = [];
			D(0);
			for (let r of e) {
				try {
					let e = await xe(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${J(e)}`);
				}
				D((e) => e + 1);
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
			mt(), e.failures.length ? T(e.failures.join("；")) : (T(""), L(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => T(J(e))
	}), W = e.suggestions || [], ie = !c.includes("/");
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Yt,
		className: Te({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Yt
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						ref: y,
						className: "min-w-64 grow",
						onFocus: () => m(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !b.current?.contains(t) && m(!1);
						},
						children: [/* @__PURE__ */ (0, Z.jsx)(F, {
							"aria-label": "来源链接、名字或 id",
							placeholder: Jt,
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
							onKeyDown: B
						}), te ? /* @__PURE__ */ (0, Z.jsx)(tn, {
							field: y,
							menu: b,
							options: k,
							active: _,
							busy: z,
							onPick: R,
							onClose: ne
						}) : null]
					}),
					/* @__PURE__ */ (0, Z.jsx)(nn, {
						credentials: t,
						hidden: ee,
						onHidden: x
					}),
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "primary",
						disabled: n || !i.trim(),
						...q(j || I.isPending),
						onClick: () => R(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [j || I.isPending ? /* @__PURE__ */ (0, Z.jsx)(he, {
					embedded: !0,
					label: A?.message || (A?.total ? `查找中：${A.checked || 0}/${A.total}` : ie ? Xt : Zt),
					value: A?.checked,
					total: A?.total
				}) : null, w ? /* @__PURE__ */ (0, Z.jsx)(V, {
					tone: "error",
					title: "这一次没有完成",
					children: w
				}) : null]
			}),
			H.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Z.jsx)(N, { children: "查找结果" }),
					H.map((e, t) => /* @__PURE__ */ (0, Z.jsx)(rn, {
						row: e,
						at: t,
						hidden: ee,
						unpicked: S,
						onPick: (e, t) => {
							let n = new Set(S);
							t ? n.delete(e) : n.add(e), C(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(f, {
								variant: "secondary",
								size: "small",
								onClick: () => L(),
								children: "关闭"
							}),
							/* @__PURE__ */ (0, Z.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: n || !re.length,
								...q(U.isPending),
								onClick: () => U.mutate(re),
								children: `添加选中（${re.length}）`
							}),
							U.isPending ? /* @__PURE__ */ (0, Z.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${E}/${re.length}`
							}) : null
						]
					})
				]
			}) : null,
			W.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "猜你喜欢"
				}), W.map((e) => /* @__PURE__ */ (0, Z.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: `浏览历史里出现 ${e.visits} 次${e.origin ? ` · ${e.origin}` : ""}`,
					onClick: () => R(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var on = "输入女优名，到 JavDB 找她的演员页", sn = "添加 JAV 订阅";
function cn(e, t) {
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
function ln({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(g, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ (0, Z.jsx)(v, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, Z.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `已在「${e.held_by.name}」名下`
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Z.jsx)(E, {
			href: e.url,
			children: e.id
		})]
	});
}
function un({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, X.useState)(""), [a, o] = (0, X.useState)(null), [s, c] = (0, X.useState)(/* @__PURE__ */ new Set()), l = Pt(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => ot(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !Pe(e.nativeEvent) && (e.preventDefault(), u());
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
	}, g = a ? cn(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": sn,
		className: Te({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: sn
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Z.jsx)(F, {
						"aria-label": "女优名",
						placeholder: on,
						value: r,
						leadingIcon: ft,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ (0, Z.jsx)(f, {
					variant: "primary",
					disabled: e || !r.trim(),
					...q(l.busy === "lookup"),
					onClick: u,
					children: "查找"
				})]
			}),
			l.error ? /* @__PURE__ */ (0, Z.jsx)(V, {
				tone: "error",
				title: "这一次没有完成",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "warning",
						title: "JavDB 这一次没有搜成",
						children: a.unavailable
					}) : null,
					/* @__PURE__ */ (0, Z.jsx)(N, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Z.jsx)(ln, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Z.jsx)(P, { children: a.unavailable ? "这一次没有拿到演员卡。" : "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(P, {
						role: "status",
						children: s.size ? g.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					_ ? /* @__PURE__ */ (0, Z.jsx)(P, {
						role: "status",
						children: _.following ? `数据库里的「${_.name}」已经在订阅新作。` : `数据库里的「${_.name}」已有 JavDB 或 DMM 编号，可以直接订阅。`
					}) : null,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(f, {
								variant: "secondary",
								size: "small",
								onClick: p,
								children: "关闭"
							}),
							a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...q(l.busy === "follow"),
								onClick: m,
								children: `添加订阅（${s.size}）`
							}) : null,
							_ && !_.following ? /* @__PURE__ */ (0, Z.jsx)(f, {
								variant: "primary",
								size: "small",
								disabled: e,
								...q(l.busy === "known"),
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
function dn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Z.jsx)(B, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ (0, Z.jsx)(fn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function fn({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, X.useState)(e.canonical_name), o = Pt();
	return /* @__PURE__ */ (0, Z.jsxs)("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => vt(e.canonical_key, i.trim(), t), () => {
				mt(), n(`已把统一名称改为 ${i.trim()}`), t();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Z.jsx)(r, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "修改统一名称"
			}),
			/* @__PURE__ */ (0, Z.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["当前名称：", e.canonical_name]
			}),
			/* @__PURE__ */ (0, Z.jsx)(F, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(N, { children: "选择已有别名" }), /* @__PURE__ */ (0, Z.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "原名称保留为别名，关联档案和作品署名会同步更新。"
			}),
			o.error ? /* @__PURE__ */ (0, Z.jsx)(V, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(f, {
					variant: "secondary",
					onClick: t,
					children: "取消"
				}), /* @__PURE__ */ (0, Z.jsx)(f, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === e.canonical_name,
					...q(!!o.busy),
					children: "修改统一名称"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var pn = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, mn = jt({
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	rowPaginationFeature: St,
	columnVisibilityFeature: Ne,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), hn = mn, gn = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, _n = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, vn = [
	gn,
	_n,
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
], yn = [
	gn,
	_n,
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
], bn = (e) => e.alias;
function xn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Sn({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(Ht, {
			group: xn(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Z.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Cn({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = zt("alias-suggestions", vn), p = zt("alias-saved", yn), [m, h] = (0, X.useState)(null), [v, y] = (0, X.useState)({}), [b, E] = (0, X.useState)({}), D = n(() => y({})), O = n(() => E({})), [k, A] = (0, X.useState)([]), [j, M] = (0, X.useState)([]), [P, I] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [L, R] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), z = {
		...P,
		pageIndex: Math.min(P.pageIndex, Math.max(0, Math.ceil(t.length / P.pageSize) - 1))
	}, te = {
		...L,
		pageIndex: Math.min(L.pageIndex, Math.max(0, Math.ceil(e.length / L.pageSize) - 1))
	}, [ne, B] = (0, X.useState)(""), [V, re] = (0, X.useState)(""), [U, W] = (0, X.useState)(""), ie = It({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await be(n.canonical, n.alias);
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
			B(""), y({}), mt(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => B(J(e))
	}), ae = It({
		mutationFn: (e) => be(e.canonical, e.alias),
		onSuccess: () => {
			B(""), re(""), W(""), mt(), u("已保存创作者别名");
		},
		onError: (e) => B(J(e))
	}), G = It({
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
			B(""), E({}), u("已移除创作者别名");
		},
		onError: (e) => B(J(e))
	}), se = (e, t) => {
		e.length && Fe({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => ie.mutateAsync(e)
		});
	}, ce = (e) => void Fe({
		title: "移除创作者别名",
		body: pn(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => G.mutateAsync(e)
	}), K = (0, X.useRef)({
		sources: r,
		readOnly: i,
		merging: ie.isPending,
		removing: G.isPending,
		merge: se,
		remove: ce,
		rename: h
	});
	K.current = {
		sources: r,
		readOnly: i,
		merging: ie.isPending,
		removing: G.isPending,
		merge: se,
		remove: ce,
		rename: h
	};
	let le = (0, X.useMemo)(() => {
		let e = Ie();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(pe, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(g, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Sn, {
					sources: K.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "平台别名",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "依据",
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: K.current.readOnly,
					...q(K.current.merging),
					onClick: () => K.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), me = (0, X.useMemo)(() => {
		let e = Ie();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Z.jsx)(pe, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(g, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Sn, {
					sources: K.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "平台别名",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: H,
							"aria-label": `移除别名 ${e.name}`,
							disabled: K.current.readOnly,
							...q(K.current.removing),
							onClick: () => K.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(f, {
					variant: "secondary",
					size: "small",
					disabled: K.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => K.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), he = Rt({
		features: mn,
		data: t,
		columns: le,
		getRowId: bn,
		state: {
			rowSelection: v,
			sorting: k,
			pagination: z,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			D(), y(e);
		},
		onSortingChange: (e) => {
			A(e), I((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: I,
		enableRowSelection: !0
	}), ge = Rt({
		features: hn,
		data: e,
		columns: me,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: b,
			sorting: j,
			pagination: te,
			columnVisibility: p.visibility
		},
		onColumnVisibilityChange: p.change,
		onRowSelectionChange: (e) => {
			O(), E(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			M(e), R((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: R
	}), _e = he.getSelectedRowModel().rows.map((e) => e.original), ye = ge.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), xe = q(ie.isPending);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: Te({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "创作者别名"
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(N, { children: "手动添加别名" }), /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(F, {
							"aria-label": "统一名称",
							placeholder: "在 Peach 中统一显示的名称",
							value: V,
							onChange: re,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(F, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: U,
							onChange: W,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "primary",
							disabled: i || !V.trim() || !U.trim(),
							...q(ae.isPending),
							onClick: () => ae.mutate({
								canonical: V.trim(),
								alias: U.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			ne ? /* @__PURE__ */ (0, Z.jsx)(T, { children: ne }) : null,
			t.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(N, { children: "待合并" }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} 组`
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Z.jsx)(f, {
									variant: "primary",
									size: "small",
									disabled: i,
									...xe,
									onClick: () => se(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ (0, Z.jsx)(S, {
									label: "待合并创作者别名",
									sorting: k,
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
										A(e), I((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Z.jsx)(de, {
									preferences: d,
									label: "待合并创作者别名"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(oe, {
						label: "待合并别名批量操作",
						visible: _e.length > 0,
						count: `已选 ${_e.length} 组`,
						children: [/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...xe,
							onClick: () => se(_e, !1),
							children: `合并所选（${_e.length}）`
						}), /* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => y({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(x, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => he.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(ue, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => he.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(l, { children: [he.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Xe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(_, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(fe, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(a, { children: he.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(ee, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: z,
						onChange: I
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(N, { children: "已保存别名" }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(S, {
								label: "已保存创作者别名",
								sorting: j,
								options: [{
									id: "canonical",
									label: "统一名称"
								}, {
									id: "aliases",
									label: "平台别名"
								}],
								onChange: (e) => {
									M(e), R((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Z.jsx)(de, {
								preferences: p,
								label: "已保存创作者别名"
							})]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(oe, {
						label: "已保存别名批量操作",
						visible: ye.length > 0,
						count: `已选 ${ye.length} 个别名`,
						children: [/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...q(G.isPending),
							onClick: () => void Fe({
								title: "移除所选创作者别名",
								body: `将移除以下 ${ye.length} 个别名，对应来源恢复为独立创作者组。`,
								items: ye,
								confirmLabel: "移除所选别名",
								onConfirm: () => G.mutateAsync(ye)
							}),
							children: `移除所选别名（${ye.length}）`
						}), /* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => E({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(x, {
						follow: !0,
						preferences: p,
						onRowClick: (e) => ge.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(ue, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: j[0] ? {
								column: j[0].id,
								direction: j[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ge.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(l, { children: [ge.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...p.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Xe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(_, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(fe, {
									preferences: p,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: p.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(a, { children: ge.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Z.jsx)(ee, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: te,
						onChange: R
					})] }) : /* @__PURE__ */ (0, Z.jsx)(w, {
						size: "compact",
						icon: ve,
						title: "还没有保存创作者别名",
						actions: i ? void 0 : /* @__PURE__ */ (0, Z.jsx)(C, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsx)(dn, {
				group: m,
				close: () => h(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var wn = jt({
	rowPaginationFeature: St,
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	columnVisibilityFeature: Ne,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), Tn = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, En = /* @__PURE__ */ new Set(["actions"]), Dn = Object.entries(Tn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), On = () => pt.invalidateQueries({
	queryKey: D,
	exact: !0
}), kn = (e) => e.name || e.url;
function An(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function jn({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Z.jsx)(v, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Z.jsx)(v, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ (0, Z.jsx)(v, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ (0, Z.jsx)(v, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function Mn({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Z.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Vt}`,
		dangerouslySetInnerHTML: { __html: we(kn(e), t, null, "performer") }
	});
}
var Nn = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function Pn(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function Fn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Fe({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${kn(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function In({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = Lt({
		queryKey: D,
		queryFn: ({ signal: e }) => Y(e)
	}), d = Pt(), p = zt("jav-feeds", Dn), h = i.data, v = (0, X.useMemo)(() => h?.sources ?? [], [h]), [y, b] = (0, X.useState)(/* @__PURE__ */ new Set()), C = r?.ids ?? y, E = r?.onChange ?? b, [O, k] = (0, X.useState)(1), [A, j] = (0, X.useState)(20), [M, N] = (0, X.useState)([]), F = ut(v.length, A, O);
	(0, X.useEffect)(() => {
		k((e) => Math.min(e, F.pages));
	}, [F.pages]), (0, X.useEffect)(() => {
		E((e) => {
			let t = new Set(v.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [v, E]);
	let I = It({
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
			if (E(/* @__PURE__ */ new Set()), On(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				d.setError(`${n.length} 条没有写入：${e.ok ? "" : J(e.error)}`);
			}
		},
		onError: (e) => d.setError(J(e))
	}), L = (0, X.useMemo)(() => Pn(v), [v]), z = (0, X.useRef)({
		readOnly: e,
		shared: L,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	z.current = {
		readOnly: e,
		shared: L,
		busy: d.busy,
		toggle: (e, t) => void d.run(`enabled-${e.id}`, (n) => Et(e.id, t, n), () => void On()),
		fetch: (e) => void d.run(`check-${e.id}`, (t) => Oe(t, [e.id]), () => void On()),
		remove: (e) => void Fn([e], async () => {
			await gt(e.id), t(`已移除订阅源「${kn(e)}」`), On();
		})
	};
	let te = (0, X.useMemo)(() => {
		let e = Ie(), t = (e) => () => Tn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(pe, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(g, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${kn(e.row.original)}`
				})
			}),
			e.accessor(kn, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = Nn(e.row.original, z.current.shared);
					return /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Mn, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Z.jsx)("span", {
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
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: "打开来源页面",
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Z.jsx)(se, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : An(e.getValue()),
						label: An(e.getValue())
					}), /* @__PURE__ */ (0, Z.jsx)(_e, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(jn, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: Ue(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? at(e.row.original.last_fetched_at) : "还没拉过"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()} 条`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(le, {
							"aria-label": `启用 ${kn(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: z.current.readOnly,
							onChange: (t) => z.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": `拉取 ${kn(e.row.original)}`,
							disabled: z.current.readOnly,
							...q(z.current.busy === `check-${e.row.original.id}`),
							onClick: () => z.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: R,
							"aria-label": `移除 ${kn(e.row.original)}`,
							disabled: z.current.readOnly,
							onClick: () => z.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), ne = (0, X.useMemo)(() => Object.fromEntries([...C].map((e) => [String(e), !0])), [C]), B = Rt({
		features: wn,
		data: v,
		columns: te,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: ne,
			sorting: M,
			pagination: {
				pageIndex: F.page - 1,
				pageSize: A
			},
			columnVisibility: p.visibility
		},
		onColumnVisibilityChange: p.change,
		onSortingChange: (e) => {
			N(e), k(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(ne) : e;
			E(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!h) return i.error ? /* @__PURE__ */ (0, Z.jsx)(V, {
		tone: "error",
		title: "打不开订阅源",
		children: J(i.error)
	}) : /* @__PURE__ */ (0, Z.jsx)(P, { children: "正在读订阅源。" });
	let H = () => void d.run("check", (e) => Oe(e), () => void On()), re = (e) => {
		r?.onActivate(), E((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, U = v.filter((e) => C.has(e.id)), W = v.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Z.jsxs)("section", {
			"aria-label": "JAV 订阅列表",
			className: Te({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Z.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV 订阅源"
						}), /* @__PURE__ */ (0, Z.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${v.length.toLocaleString()} 个订阅源 · ${(Number(h.unread) || 0).toLocaleString()} 条未看`
						})]
					}), /* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(f, {
								onClick: H,
								disabled: e,
								...q(d.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ (0, Z.jsx)(de, {
								preferences: p,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ (0, Z.jsx)(S, {
								label: "JAV 订阅源",
								sorting: M,
								onChange: (e) => {
									N(e), k(1);
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
									label: Tn[e]
								}))
							})
						]
					})]
				}),
				W.length || d.error ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [W.length ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "error",
						title: `${W.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: W.map((e) => /* @__PURE__ */ (0, Z.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${kn(e)}：${He(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, d.error ? /* @__PURE__ */ (0, Z.jsx)(T, { children: d.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Z.jsxs)(oe, {
					visible: U.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${U.length} 条订阅源`,
					children: [
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(I.isPending),
							onClick: () => I.mutate({
								ids: U.map((e) => e.id),
								action: "enabled"
							}),
							children: "启用"
						}),
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(I.isPending),
							onClick: () => I.mutate({
								ids: U.map((e) => e.id),
								action: "paused"
							}),
							children: "暂停"
						}),
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "danger",
							size: "small",
							disabled: e,
							...q(I.isPending),
							onClick: () => void Fn(U, () => I.mutateAsync({
								ids: U.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "ghost",
							size: "small",
							onClick: () => E(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				v.length ? /* @__PURE__ */ (0, Z.jsx)(x, {
					follow: !0,
					preferences: p,
					onRowClick: (e) => re(Number(e)),
					children: /* @__PURE__ */ (0, Z.jsxs)(ue, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: M[0] ? {
							column: M[0].id,
							direction: M[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => B.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Z.jsxs)(l, { children: [B.getHeaderGroups()[0].headers.map((e) => {
							let t = Xe(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Z.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...p.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [En.has(e.column.id) ? /* @__PURE__ */ (0, Z.jsx)(u, { children: t }) : /* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(_, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(fe, {
									preferences: p,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Z.jsx)(o, {
							id: "remaining-space",
							"aria-label": "行空白区域",
							"data-table-space": "",
							width: p.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Z.jsx)(a, { children: B.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Z.jsx)(w, {
					icon: m,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						onClick: n,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				v.length ? /* @__PURE__ */ (0, Z.jsx)(ee, {
					label: "JAV 订阅",
					total: F.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: F.page - 1,
						pageSize: A
					},
					onChange: (e) => {
						j(e.pageSize), k(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Z.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Z.jsx)("span", {
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
var Ln = jt({
	rowPaginationFeature: St,
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	columnVisibilityFeature: Ne,
	paginatedRowModel: e()
}), Rn = (e) => (Number(e) || 0).toLocaleString(), zn = Object.fromEntries(Object.entries(h).map(([e, t]) => [t, e])), Bn = 740;
function Vn() {
	let [e, t] = (0, X.useState)(!1), n = (0, X.useRef)(null), r = (0, X.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Bn));
		r.observe(e), n.current = r, t(e.clientWidth < Bn);
	}, []);
	return (0, X.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Hn = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, Un = Object.entries(Hn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function Wn({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			Me(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ (0, Z.jsx)(g, {
				isSelected: t,
				onChange: n,
				"aria-label": `选择 ${e.label}`
			}),
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.provider })
				}), /* @__PURE__ */ (0, Z.jsx)(Gt, { source: e })]
			}),
			/* @__PURE__ */ (0, Z.jsx)(u, { children: e.provider_label }),
			/* @__PURE__ */ (0, Z.jsx)(Kt, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, Z.jsx)(Ut, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: je(e)
					}),
					/* @__PURE__ */ (0, Z.jsx)(le, {
						"aria-label": `启用 ${e.label}`,
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": `检查 ${e.label} 的更新`,
							disabled: !e.enabled || r.readOnly,
							...q(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: R,
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
function Gn({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: s }) {
	let c = e.map((e) => e.id), l = e.filter((e) => e.enabled).map((e) => e.id), d = e.filter(tt).length, p = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), m = `follow-author-${e[0].id}`, h = Tt(r, c);
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": `${t} 的关注来源`,
		className: Te({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Ht, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Z.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: p,
						children: [
							e.map((e) => /* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, Z.jsx)(u, { children: `来源：${p}` }),
							d ? /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: `${d} 个失败`
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, Z.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: ze,
						"aria-label": `检查 ${t} 的全部来源`,
						disabled: !l.length || i.readOnly,
						...q(i.busy),
						onClick: () => i.check(l)
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							leadingIcon: it,
							"aria-pressed": h.all ? "true" : h.some ? "mixed" : "false",
							"aria-label": `${h.all ? "取消全选" : "全选"} ${t} 的来源`,
							onClick: () => o(!h.all),
							children: h.all ? "取消全选" : "全选"
						}), /* @__PURE__ */ (0, Z.jsx)(f, {
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
		}), /* @__PURE__ */ (0, Z.jsx)(b, {
			id: m,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, Z.jsx)(Wn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => s(e.id, t)
			}, e.id))
		})]
	});
}
function Kn(e) {
	let { data: t, sort: n, dir: r, page: i, layout: d, pageSize: p, selected: v, readOnly: b, onSort: S, onPage: C, onLayout: T, onPageSize: E, onSelected: D, toast: k, openFollow: A, onAdd: j } = e, M = t.sources, N = (0, X.useMemo)(() => t.author_aliases || [], [t.author_aliases]), P = t.counts || {}, [F, L] = (0, X.useState)(/* @__PURE__ */ new Set()), [z, te] = Vn(), [ne, B] = (0, X.useState)(""), H = (0, X.useMemo)(() => Se(M, n, r, N), [
		M,
		n,
		r,
		N
	]), W = (0, X.useMemo)(() => Mt(H, n, r, N), [
		H,
		n,
		r,
		N
	]), { job: G, running: se, outcome: K, start: me } = Ft({
		queryKey: O,
		queryFn: ({ signal: e }) => We(e),
		start: (e) => kt(e),
		onError: (e) => B(J(e)),
		onFinish: (e) => {
			mt(), k(e.status === "failed" ? e.error || "检查失败" : ke(e));
		}
	}), _e = (e) => {
		se || me.isPending || (B(""), me.mutate(e));
	}, ve = (e, t) => D(Nt(v, [e], t)), ye = (e, t) => D(Nt(v, e, t)), be = It({
		mutationFn: (e) => _t(e),
		onSuccess: (e, t) => {
			Be([t]), D(Nt(v, [t], !1)), k("已取消关注来源");
		},
		onError: (e) => B(J(e))
	}), xe = It({
		mutationFn: (e) => Dt(e.id, e.enabled),
		onSuccess: (e, t) => {
			dt(t.id, { enabled: t.enabled }), B("");
		},
		onError: (e) => B(J(e))
	}), we = (e) => void Fe({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => be.mutateAsync(e.id)
	}), Oe = It({
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
			D(Nt(v, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				B(`${t.length}/${e.ids.length} 个来源未更新：${J(t[0]?.error)}`);
				return;
			}
			B("");
			let n = e.action === "remove" ? "删除" : e.action === "enabled" ? "启用" : "暂停";
			k(`已${n} ${e.done.length} 个关注来源`);
		},
		onError: (e) => B(J(e))
	}), Me = It({
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
			mt(), e.failed.length ? B(`批量更新 ${e.failed.length}/${e.ids.length} 项未完成`) : (B(""), k(`已批量标记 ${e.ids.length} 项`));
		},
		onError: (e) => B(J(e))
	}), Ne = (e, t) => xe.mutate({
		id: e.id,
		enabled: t
	}), Pe = (0, X.useRef)({
		check: _e,
		toggle: Ne,
		remove: we,
		busy: !1,
		readOnly: b
	});
	Pe.current = {
		check: _e,
		toggle: Ne,
		remove: we,
		busy: se || me.isPending,
		readOnly: b
	};
	let Le = Pe.current, Re = (0, X.useMemo)(() => {
		let e = Ie(), t = (e) => () => Hn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(pe, {
					table: e.table,
					label: "全选本页来源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(g, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${e.row.original.source.label}`
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, Z.jsx)(Ht, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(Gt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Z.jsx)(Ut, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Kt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => je(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(le, {
							"aria-label": `启用 ${e.row.original.source.label}`,
							isSelected: e.row.original.source.enabled,
							isDisabled: Le.readOnly,
							onChange: (t) => Pe.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ze,
							"aria-label": `检查 ${e.row.original.source.label} 的更新`,
							disabled: !e.row.original.source.enabled || Le.readOnly,
							...q(Le.busy),
							onClick: () => Pe.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: R,
							"aria-label": `移除 ${e.row.original.source.label}`,
							disabled: Le.readOnly,
							onClick: () => Pe.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [Le]), Ue = (0, X.useMemo)(() => {
		let e = zn[n];
		return e ? [{
			id: e,
			desc: r === "desc"
		}] : [];
	}, [n, r]), Ge = (0, X.useMemo)(() => Object.fromEntries([...v].map((e) => [String(e), !0])), [v]), Y = d === "table", Ke = zt("follow-sources", Un), Je = ut(Y ? W.length : H.length, p, i), Ye = Rt({
		features: Ln,
		data: W,
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
			n && S(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Ge) : e;
			D(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: Je.page - 1,
				pageSize: p
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === p ? n.pageIndex !== t.pageIndex && C(n.pageIndex + 1) : E(n.pageSize);
		}
	}), Ze = Ye.getRowModel().rows, Qe = Y ? Ze.map((e) => e.original.source.id) : H.slice(Je.start, Je.end).flatMap((e) => e.map((e) => e.id)), $e = Tt(v, Qe), et = [...v], tt = De(K), nt = M.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), rt = Ee(K), it = H.length > 0 && F.size >= H.length;
	return M.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: Te({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				ref: z,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, Z.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "关注列表"
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: `${M.length.toLocaleString()} 个来源${P.new ? ` · ${Rn(P.new)} 条未看` : ""}`
					})]
				}), /* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						nt.length ? /* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "secondary",
							disabled: b,
							...q(Le.busy),
							onClick: () => _e(nt),
							children: "检查失败项"
						}) : null,
						/* @__PURE__ */ (0, Z.jsx)(f, {
							variant: "primary",
							leadingIcon: ze,
							disabled: b,
							"aria-label": "检查全部",
							iconOnly: te,
							...q(Le.busy),
							onClick: () => _e([]),
							children: "检查全部"
						}),
						/* @__PURE__ */ (0, Z.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": "关注列表版式",
									children: [/* @__PURE__ */ (0, Z.jsx)(f, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ge,
										"aria-label": I[0][1],
										"aria-pressed": !Y,
										onClick: () => T("default")
									}), /* @__PURE__ */ (0, Z.jsx)(f, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Ve,
										"aria-label": I[1][1],
										"aria-pressed": Y,
										onClick: () => T("table")
									})]
								}),
								Y ? /* @__PURE__ */ (0, Z.jsx)(de, {
									preferences: Ke,
									label: "关注来源"
								}) : null,
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Z.jsx)(ie, {
										"aria-label": "关注列表排序",
										prefix: "排序",
										selectedKey: n,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											S(t, re[t]);
										},
										children: U.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(ae, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Z.jsx)(f, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: ce,
										"data-icon-state": r === "asc" ? "a" : "b",
										"aria-label": Ot(n, r),
										onClick: () => S(n, r === "asc" ? "desc" : "asc")
									})]
								}),
								Y ? null : /* @__PURE__ */ (0, Z.jsx)(f, {
									variant: "secondary",
									iconOnly: te,
									leadingIcon: y,
									"aria-expanded": !it,
									"aria-label": it ? "全部展开" : "全部收起",
									onClick: () => L(it ? /* @__PURE__ */ new Set() : new Set(H.map((e) => String(e[0].author_key || e[0].id)))),
									children: it ? "全部展开" : "全部收起"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					se ? /* @__PURE__ */ (0, Z.jsx)(he, {
						embedded: !0,
						label: G?.message || (G?.total ? `${G.older ? "抓取历史" : "检查更新"}：已完成 ${G.checked || 0}/${G.total} 个来源` : "正在准备检查任务"),
						value: G?.checked,
						total: G?.total
					}) : null,
					ne ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "error",
						title: "操作未完成",
						children: ne
					}) : null,
					!se && K?.results?.length ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "neutral",
						title: "检查结果",
						children: Ae(K)
					}) : null,
					tt.length ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "error",
						title: `${tt.length} 个来源检查失败`,
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: tt.map((e, t) => /* @__PURE__ */ (0, Z.jsx)("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${He(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: "这些来源这一轮没有取到更新。"
					}) : null,
					rt ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "warning",
						children: `条目已保存，但这次未保存来源的原始响应：${rt}`
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)(oe, {
				label: "关注来源批量操作",
				visible: et.length > 0,
				count: `已选 ${et.length} 个来源`,
				children: [
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...q(Le.busy),
						onClick: () => _e(et),
						children: "检查所选"
					}),
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...q(Oe.isPending),
						onClick: () => Oe.mutate({
							ids: et,
							action: "enabled"
						}),
						children: "启用"
					}),
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...q(Oe.isPending),
						onClick: () => Oe.mutate({
							ids: et,
							action: "paused"
						}),
						children: "暂停"
					}),
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "danger",
						size: "small",
						disabled: b,
						...q(Oe.isPending),
						onClick: () => void Fe({
							title: `删除 ${et.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => Oe.mutateAsync({
								ids: et,
								action: "remove"
							})
						}),
						children: "删除"
					}),
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "ghost",
						size: "small",
						onClick: () => D(/* @__PURE__ */ new Set()),
						children: "取消选择"
					})
				]
			}),
			Y ? /* @__PURE__ */ (0, Z.jsx)(x, {
				follow: !0,
				preferences: Ke,
				onRowClick: (e) => ve(Number(e), !v.has(Number(e))),
				children: /* @__PURE__ */ (0, Z.jsxs)(ue, {
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
					children: [/* @__PURE__ */ (0, Z.jsxs)(l, { children: [Ye.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in h, n = Xe(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, Z.jsx)(o, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Ke.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, Z.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [n, /* @__PURE__ */ (0, Z.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, Z.jsx)(_, {})
								})]
							}) : /* @__PURE__ */ (0, Z.jsx)(u, { children: n }), /* @__PURE__ */ (0, Z.jsx)(fe, {
								preferences: Ke,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, Z.jsx)(o, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: Ke.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, Z.jsx)(a, {
						renderEmptyState: () => "这一页没有来源",
						children: Ze.map((e) => /* @__PURE__ */ (0, Z.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(c, { children: Xe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(c, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(g, {
				isSelected: $e.all,
				isIndeterminate: $e.some,
				onChange: (e) => ye(Qe, e),
				"aria-label": "全选本页来源",
				children: "全选本页"
			}), /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "flex flex-col gap-3",
				children: H.slice(Je.start, Je.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, Z.jsx)(Gn, {
						group: e,
						name: Ce(e, N),
						handlers: Le,
						selected: v,
						open: !F.has(t),
						onOpen: (e) => {
							let n = new Set(F);
							e ? n.delete(t) : n.add(t), L(n);
						},
						onToggleGroup: (t) => ye(e.map((e) => e.id), t),
						onToggle: ve
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, Z.jsx)(ee, {
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
			P.new ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${Rn(P.new)} · 已看 ${Rn(P.seen)} · 已保存 ${Rn(P.saved)} · 已忽略 ${Rn(P.ignored)}`
					}),
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						size: "small",
						onClick: A,
						children: "去看更新"
					}),
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...q(Me.isPending),
						onClick: () => void Fe({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => Me.mutateAsync("seen")
						}),
						children: "全部标记已看"
					}),
					/* @__PURE__ */ (0, Z.jsx)(f, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...q(Me.isPending),
						onClick: () => void Fe({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => Me.mutateAsync("ignored")
						}),
						children: "全部忽略"
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, Z.jsx)(w, {
		icon: m,
		title: "还没有关注来源",
		actions: /* @__PURE__ */ (0, Z.jsx)(f, {
			variant: "primary",
			size: "small",
			onClick: j,
			children: "添加关注"
		}),
		children: "关注来源及其检查状态会显示在这里。"
	});
}
// node_modules/skullet/dist/index.mjs
var qn = "skullet-reveal", Jn = "skullet-pane", Yn = "skullet-loading", Xn = "skullet-ghost", Zn = "skullet-snapshot", Qn = "skullet-layer", $n = "skullet-rect", er = "skullet-bar", tr = "skullet-inactive", nr = "skullet-exiting", rr = "skullet-covered", ir = "skullet-own", ar = "skullet-block", or = Symbol.for("skullet.ghost"), sr = Symbol.for("skullet.uncover"), cr = "skullet-status", lr = "skullet-xray", ur = "var(--skullet-base, rgb(128 128 128 / 0.2))", dr = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", fr = 280, pr = 1e4, mr = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, hr = [
	"a",
	"b",
	"code",
	"dd",
	"dt",
	"em",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"i",
	"label",
	"li",
	"p",
	"small",
	"span",
	"strong",
	"td",
	"th",
	"time"
], gr = [
	"audio",
	"canvas",
	"embed",
	"iframe",
	"img",
	"input",
	"object",
	"picture",
	"select",
	"svg",
	"textarea",
	"video"
], _r = gr.join(", "), vr = `
[${qn}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${Jn}] {
  display: block;
}

[${Yn}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${tr}] {
  display: none !important;
}

[${Qn}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${er}] {
  display: block;
  background-color: ${ur};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${Yn}]) to ([${ir}], [${Qn}]) {
  :scope,
  :scope * {
    color: transparent !important;
    -webkit-text-fill-color: transparent !important;
    text-shadow: none !important;
    text-decoration-color: transparent !important;
  }

  :scope ::placeholder {
    color: transparent !important;
  }

  /* A line to measure in empty text; content only, never a size, or a dot-sized span would grow round it */
  :scope :is(${hr.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${_r}, [${rr}], [${ar}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${ur} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${_r}, [${ar}]):not(svg *) {
      visibility: visible !important;
      background: ${ur} !important;
    }

    :scope svg * {
      fill: transparent !important;
      stroke: transparent !important;
    }

    :scope :is(img, video) {
      object-position: -100vw 0;
    }
  }
}

/* Read by screen readers in the skeleton's place, never seen */
[${cr}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${lr}] [${Yn}] [${Xn}],
[${lr}] [${Yn}] [${Xn}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, yr = null, br = 0, xr;
function Sr() {
	br++, !yr && (xr ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !xr && (yr = document.createElement("style"), yr.dataset.skullet = "true", yr.textContent = vr, document.head.appendChild(yr)));
}
function Cr() {
	br--, !(br > 0 || !yr) && (yr.remove(), yr = null);
}
var wr = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", Tr = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...Tr });
function Er(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? Tr[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var Dr = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function Or({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = Er(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${Dr(o)} }`), a === "system") {
		let t = Er({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${Dr(t)} } }`);
	}
	return s.join("\n");
}
var kr = /* @__PURE__ */ new Map(), Ar, Q = null, jr = 0;
function Mr() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var Nr = () => Ar ??= typeof window < "u" && Mr(), Pr = (e) => Nr() || !!e?.closest("[skullet-debug]");
function Fr(e) {
	Ar = e, e ? Br() : Vr();
}
function Ir(e, t) {
	!e || !Pr(e) || (kr.set(e, {
		state: "loading",
		source: t
	}), Rr());
}
function Lr(e, t) {
	!e || !Pr(e) || (kr.set(e, {
		...kr.get(e),
		state: "shown",
		moved: t
	}), Rr());
}
function Rr() {
	Br(), cancelAnimationFrame(jr), Ur();
}
var zr = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function Br() {
	if (typeof document > "u") return;
	if (!Q?.isConnected) {
		Q = document.createElement("div"), Q.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = Q.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${zr}</style><div class="boxes"></div>`, document.body.append(Q);
	}
	let e = Q.shadowRoot;
	if (Ar && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(lr, e.target.checked);
		}), e.append(t);
	}
	jr ||= requestAnimationFrame(Ur);
}
function Vr() {
	Q?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(lr), ![...kr.keys()].some((e) => Pr(e)) && (cancelAnimationFrame(jr), jr = 0, Q?.remove(), Q = null);
}
var Hr = ({ state: e, source: t, moved: n }) => {
	let r = t ? ` \xB7 ${t}` : "";
	return e === "loading" ? {
		kind: "loading",
		text: `skeleton${r}`
	} : !n || n.width === 0 && n.height === 0 ? {
		kind: "still",
		text: `\u2713 no movement${r}`
	} : {
		kind: "moved",
		text: `\u2717 moved ${n.width}\xD7${n.height}px${r}`
	};
};
function Ur() {
	if (jr = 0, !Q?.shadowRoot) return;
	let e = Q.shadowRoot.querySelector(".boxes");
	for (let e of kr.keys()) e.isConnected && Pr(e) || kr.delete(e);
	let t = [...kr];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = Hr(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (Ar || kr.size) && (jr = requestAnimationFrame(Ur));
}
var Wr, Gr = () => Wr ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), Kr = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, qr = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], Jr = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function Yr(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function Xr(e, t, n) {
	let r = Kr(e, t), i = Yr(n, t), a = e ? qr(e) : [], o = qr(t), s = qr(r).map((t, n) => Jr(t, o[n]) ? i[n] : e && Jr(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function Zr(e, t, n, r) {
	if (!e) return n;
	let i = qr(e), a = qr(t).map((t, n) => e.corners[n] > 0 && Jr(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = Yr(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var Qr = (e, t) => {
	let n = Kr(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, $r = {
	top: "ascender",
	bottom: "descender"
}, ei = /* @__PURE__ */ new Map(), ti = (e) => [...e.getClientRects?.() ?? []];
function ni(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (ei.has(t)) return ei.get(t);
	let n = Gr(), r = null;
	if (n) {
		n.font = t;
		let e = n.measureText("H"), i = (e) => n.measureText(e).actualBoundingBoxAscent;
		r = {
			ascent: e.fontBoundingBoxAscent,
			descent: e.fontBoundingBoxDescent,
			ascender: i("bdfhkl"),
			capHeight: e.actualBoundingBoxAscent,
			xHeight: i("xz"),
			descender: n.measureText("gjpqy").actualBoundingBoxDescent
		};
	}
	return ei.set(t, r), r;
}
var ri = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, ii = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function ai(e, t, n) {
	let r = ni(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = ii(t, "--skullet-text-top", Object.keys(ri), $r.top), a = ii(t, "--skullet-text-bottom", ["baseline", "descender"], $r.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[ri[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var oi = new Set(gr), si = new Set(hr), ci = .4, li = /[,/]\s*0\)$/, ui = (e, t) => e !== "" && e !== t, di = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], fi = (e) => di.every((t) => ui(e[`border${t}Style`], "none") && ui(e[`border${t}Width`], "0px")), pi = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, mi = (e) => ui(e, "none") && !e.split(/,(?![^(]*\))/).every(pi), hi = (e) => ui(e.backgroundColor, "transparent") && !li.test(e.backgroundColor) || ui(e.backgroundImage, "none") || mi(e.boxShadow) || fi(e), gi = (e) => oi.has(e.localName), _i = (e) => si.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), vi = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(ti(n).filter((e) => e.width || e.height));
		} else _i(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * ci, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, yi = (e, t) => e.hasAttribute("skullet-block") || gi(e) || hi(t) && vi(e) <= 1;
function bi(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function xi(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * ci;
		});
		e ? (e.left = Math.min(e.left, n.left), e.right = Math.max(e.right, n.right), e.top = Math.min(e.top, n.top), e.bottom = Math.max(e.bottom, n.bottom), e.fontSize = Math.max(e.fontSize, n.fontSize), e.barTop = Math.min(e.barTop, n.barTop), e.barBottom = Math.max(e.barBottom, n.barBottom)) : t.push({ ...n });
	}
	return t.map((e) => {
		let t = e.barBottom - e.barTop;
		return {
			x: e.left,
			y: e.barTop,
			width: e.right - e.left,
			height: t,
			radius: e.radius || `${Math.round(t / 3)}px`
		};
	});
}
function Si(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = Qr(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...ai(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of ti(d)) f(e, r, t);
	}, m = (e, t) => {
		for (let n of e.childNodes) {
			if (n.nodeType === Node.TEXT_NODE) {
				p(n, t);
				continue;
			}
			if (n.nodeType !== Node.ELEMENT_NODE) continue;
			let e = n;
			if (e.hasAttribute("skullet-ignore") || e.hasAttribute("skullet-own")) continue;
			let r = getComputedStyle(e);
			if (r.display === "none") continue;
			if (yi(e, r)) {
				let n = Qr(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: Zr(t, n, bi(e, r), r)
					});
				}
				gi(e) || u.add(e);
				continue;
			}
			if (_i(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? Xr(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...xi(l)];
	for (let t of e.querySelectorAll(`[${rr}]`)) u.has(t) || t.removeAttribute(rr);
	for (let e of u) e.hasAttribute(rr) || e.setAttribute(rr, "");
	return [...c, ...xi(l)];
}
var Ci = (e) => typeof matchMedia < "u" && matchMedia(e).matches, wi = () => typeof Element < "u" && typeof Element.prototype.animate == "function", Ti = () => !wi() || Ci("(prefers-reduced-motion: reduce)"), Ei = () => Ci("(prefers-reduced-transparency: reduce)"), Di = (e) => e.getAnimations?.() ?? [], Oi = .7, ki = 1280, Ai = 320, ji = 2.5, Mi = .45, Ni = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function Pi(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", Ni, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: mr[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var Fi = 20, Ii = Math.sin(Fi * Math.PI / 180), Li = Math.cos(Fi * Math.PI / 180), Ri = Ii / Li, zi = Li, Bi = `${90 + Fi}deg`, Vi = .85, $ = 12, Hi = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function Ui(e) {
	let t = e * ji, n = (t, n) => `color-mix(in srgb, ${dr} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= $; e++) r.push(n(e / $ * Vi, Hi(e / $)));
	for (let e = 1; e <= $; e++) r.push(n(Vi + e / $ * (1 - Vi), Hi(1 - e / $)));
	return {
		width: t / Li,
		image: `repeating-linear-gradient(${Bi}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function Wi(e, t, n = Pi(e)) {
	for (let t of Di(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", Ti() || typeof e.animate != "function" || n.animation === "none") return;
	let r = {
		duration: n.duration,
		iterations: 1 / 0
	};
	if (n.animation === "pulse") {
		e.animate([
			{
				opacity: 1,
				easing: "ease-in-out"
			},
			{
				opacity: Mi,
				easing: "ease-in-out"
			},
			{ opacity: 1 }
		], r).startTime = 0;
		return;
	}
	let i = e.getBoundingClientRect(), a = i.left + scrollX, o = n.animation === "group-shimmer" ? t ?? {
		left: a,
		top: i.top,
		width: i.width,
		height: i.height
	} : {
		left: 0,
		top: 0,
		width: document.documentElement.clientWidth || innerWidth
	}, { width: s, image: c } = Ui(Math.min(Math.max(o.width * .4, 80), Ai)), l = a - o.left + (i.top - o.top) * Ri, u = n.duration * Oi / (ki + Ai);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function Gi(e) {
	if (Ti()) return null;
	let t = Pi(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * Oi / (ki + Ai);
}
var Ki = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), qi = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function Ji(e, t) {
	let n = Ki(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = Pi(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute("skullet-rect", ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${ur};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, Wi(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var Yi = 120, Xi = 72, Zi = 3, Qi = 60, $i = 150, ea = 400, ta = 1.5, na = 1e3, ra = 1e3, ia = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), aa = -1 / 0, oa = !1;
function sa() {
	if (!(oa || typeof addEventListener > "u")) {
		oa = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => aa = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var ca = /* @__PURE__ */ new WeakMap();
function la(e, { served: t, refetch: n }) {
	sa();
	let r = ca.get(e)?.since ?? performance.now();
	ca.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function ua(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function da(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var fa = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function pa(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${nr}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var ma = (e, t) => Math.min(Math.max(e, 0), t), ha = -1 / 0;
function ga(e, t, n, r, i) {
	let a = performance.now();
	a - ha > $i && (ha = a);
	let o = a - ha, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of ua(e)) {
		let n = da(t, e), r = c.get(n);
		r || (r = {
			rect: n.getBoundingClientRect(),
			size: 0
		}, c.set(n, r));
		let i = u(t);
		r.size = Math.max(r.size, i), l.set(t, {
			unit: r,
			size: i
		});
	}
	let d = (e) => {
		let t = n(e);
		return t === null ? null : ma(t, na) + Math.max(r.delay ?? 0, 0);
	};
	return {
		kind: "sequence",
		duration: i,
		enter: r.enter,
		pieceDelay: (e) => {
			let t = l.get(e);
			return t ? d({
				rect: e.getBoundingClientRect(),
				unit: t.unit.rect,
				secondary: t.size < t.unit.size,
				reveal: s,
				late: o
			}) : null;
		},
		boneDelay: (e) => {
			let t = [...c.values()].find((t) => fa(t.rect, e));
			return d({
				rect: e,
				unit: t?.rect ?? null,
				secondary: !!t && e.height < t.size * .8,
				reveal: s,
				late: o
			});
		}
	};
}
function _a(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) ia.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function va(e, t, n, r = () => {}) {
	let i = ca.get(t);
	ca.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - aa < ea,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: ua(e).length
			})
		};
	}
	let o = ma(a.duration ?? 200, ra);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, na)
	}, !o) return { kind: "instant" };
	let s = _a(a.enter, r);
	if (a.wipe) {
		let e = pa(t);
		if (e.width * e.height <= innerWidth * innerHeight * ta) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return ga(e, t, a.order, {
		...a,
		enter: s
	}, o);
	return {
		kind: "together",
		delay: Math.max(a.delay ?? 0, 0),
		duration: o,
		enter: s
	};
}
var ya = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return ma(n * .8 + r * .2, 1) * 320;
}, ba = (e) => e.bottom > 0 && e.top < innerHeight, xa = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return ba(e) ? 0 : null;
	if (!ba(t)) return null;
	let i = ma(t.top / innerHeight, 1) * 320;
	return Math.max(i - r, 0) + (n ? Qi : 0);
}, Sa = { duration: 0 }, Ca = { order: "together" }, wa = { order: ya }, Ta = (e) => e.input || e.waited < 150 ? Sa : e.refetch ? {
	order: "together",
	duration: Yi
} : null, Ea = (e) => e.height < Xi || e.pieces <= Zi ? Ca : { order: xa }, Da = {
	hold: 150,
	choose: (e) => Ta(e) ?? Ea(e)
}, Oa = new Set(gr), ka = "script, noscript, template, base, meta, link", Aa = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), ja = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"sizes",
	"poster",
	"data",
	"srcdoc",
	"action",
	"formaction",
	"value",
	"alt",
	rr
]), Ma = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function Na(e, t) {
	let n = Ma(t.data);
	t.data = n;
	let r = e.parentElement, i = Gr();
	if (!r || !i || !n.trim()) return;
	let a = getComputedStyle(r);
	i.font = `${a.fontStyle} ${a.fontWeight} ${a.fontSize} ${a.fontFamily}`;
	let o = (e) => {
		let t = e.replace(/\s+/g, " ");
		return a.textTransform === "uppercase" ? t.toUpperCase() : a.textTransform === "lowercase" ? t.toLowerCase() : t;
	}, s = (i.measureText(o(e.data)).width - i.measureText(o(n)).width) / o(n).length;
	if (Math.abs(s) < .01) return;
	let c = document.createElement("span");
	c.style.letterSpacing = `${(parseFloat(a.letterSpacing) || 0) + s}px`, t.replaceWith(c), c.append(t);
}
function Pa(e) {
	for (let t of e.querySelectorAll(ka)) t.remove();
	for (let t of e.querySelectorAll("*")) if (Aa.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || ja.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function Fa(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (Oa.has(e.localName) || Aa.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) Na(e, t);
	return Pa(n), n.innerHTML;
}
function Ia(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, Pa(t.content), t.content;
}
var La = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${La(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), Ra = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function za(e) {
	let t = La(e, 2);
	return t ? `${location.pathname}|${Ra(t)}` : null;
}
var Ba = !1;
try {
	Ba = !1;
} catch {
	Ba = !1;
}
var Va = Ba, Ha = /* @__PURE__ */ new Set();
function Ua(e, t) {
	!Va || Ha.has(e) || (Ha.add(e), console.warn(`[skullet] ${t}`));
}
var Wa = /^(https?:|\/|data:|blob:)/;
function Ga(e) {
	return typeof e == "string" ? Wa.test(e) ? "" : Ma(e) : Array.isArray(e) ? e.map(Ga) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ga(t)])) : e;
}
var Ka = "skullet:shapes", qa = 2, Ja = 50, Ya = 2e4, Xa = /* @__PURE__ */ new Map(), Za = /* @__PURE__ */ new Map();
function Qa(e, t) {
	return Za.has(e) || Za.set(e, /* @__PURE__ */ new Set()), Za.get(e).add(t), () => Za.get(e)?.delete(t);
}
function $a(e) {
	for (let t of Za.get(e) ?? []) t();
}
function eo() {
	try {
		let e = JSON.parse(localStorage.getItem(Ka) ?? "null");
		return e?.v === qa ? e.shapes : {};
	} catch {
		return {};
	}
}
function to(e) {
	try {
		localStorage.setItem(Ka, JSON.stringify({
			v: qa,
			shapes: e
		}));
	} catch {}
}
function no(e, t) {
	Xa.set(e, Fa(t, !1));
	let n = Fa(t, !0);
	if (n.length > Ya) return;
	let r = eo();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - Ja)) delete r[e];
	to(r);
}
function ro(e) {
	return Xa.get(e) ?? eo()[e] ?? null;
}
var io = [
	100,
	90,
	60
].map((e) => `<div ${ar} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), ao = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${Yn}]`)), oo = /* @__PURE__ */ new WeakMap();
function so(e) {
	if (!e) return;
	let t = oo.get(e);
	return oo.delete(e), t;
}
function co(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var lo = (e) => !!e.firstElementChild || !!e.textContent?.trim(), uo = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, Sr(), e[or] = !0, e.setAttribute(Yn, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = co(e, Xn), this.snapshot = co(e, Zn), this.layer = co(e, Qn), this.hadContent = lo(this.ghost);
		let n = e.closest(`[${qn}]`);
		n && la(n, {
			served: ao.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[sr]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
			childList: !0,
			subtree: !0,
			characterData: !0,
			attributes: !0
		}), this.resize = typeof ResizeObserver > "u" ? null : new ResizeObserver(this.schedule), this.resize?.observe(e), e.addEventListener("load", this.schedule, !0), addEventListener("resize", this.schedule), document.fonts?.ready.then(this.schedule);
	}
	root;
	options;
	ghost;
	snapshot;
	layer;
	source = null;
	hadContent = !1;
	frame = 0;
	mutations;
	resize;
	schedule = () => {
		this.root.closest(`[${nr}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = lo(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || ao.has(this.root), r = !!this.ghost.querySelector(`[${ir}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? za(this.ghost);
			n && ($a(n), t = ro(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(Ia(t)) : e === "fallback" ? (this.snapshot.innerHTML = io, Ua(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(tr, e !== "ghost"), this.snapshot.toggleAttribute(tr, e === "ghost"), this.source = e, Ir(this.root.closest(`[${qn}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : ao.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		Ji(this.layer, Si(e, this.layer));
		let t = this.root.closest(`[${qn}]`);
		t && oo.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), Cr();
	}
}, fo = 250, po = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? za(e), this.untrack = this.key ? Qa(this.key, () => this.save()) : () => {}, (Va || Pr(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), this.resize = typeof ResizeObserver > "u" ? null : new ResizeObserver(this.schedule), this.resize?.observe(e), e.addEventListener("load", this.schedule, !0);
	}
	element;
	options;
	key;
	timer;
	mutations;
	resize;
	untrack;
	schedule = () => {
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), fo);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && no(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${qn}]`), o = so(a);
		if (!o) return;
		o.guessed && n && !r && e != null && Ua(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(Ga(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (Lr(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? Ua(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : Ua(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, mo = () => {}, ho = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, go = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !ho(e));
function _o(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(mo, mo), new Promise((e) => setTimeout(e, pr))]);
}
var vo = 360, yo = 2, bo = 600, xo = 40, So = xo / zi, Co = 320, wo = 120, To = .45, Eo = (e) => e.left + e.top * Ri, Do = (e) => e.width + e.height * Ri, Oo = (e, t) => Eo(t) - So + (Do(t) + 2 * So) * e, ko = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function Ao(e) {
	let t = e.querySelector(`:scope > [${nr}] [${Qn}]`), n = t && Gi(t);
	if (!n) return null;
	let r = pa(e);
	if (r.width * r.height > innerWidth * innerHeight * ta) return null;
	let i = Eo(r), a = i + Do(r), o = performance.now(), s = o - ko.start;
	s <= $i && (i - ko.origin) / ko.speed >= s && (a - ko.origin) / ko.speed - s <= bo || (ko = {
		start: o,
		origin: i,
		speed: Math.max(yo / n, (a - i) / vo)
	});
	let { start: c, origin: l, speed: u } = ko;
	return {
		delay: (i - So - l) / u - (o - c),
		duration: (a - i + 2 * So) / u
	};
}
var jo = (e) => (t, { rect: n, reveal: r }) => {
	let i = (Oo(t, r) - Eo(n)) * zi;
	return `linear-gradient(${Bi}, ${Array.from({ length: $ + 1 }, (t, n) => {
		let r = e ? 1 - Hi(n / $) : Hi(n / $), a = -xo + 2 * xo * n / $;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, Mo = "http://www.w3.org/2000/svg", No = null, Po = 0;
function Fo() {
	return No?.isConnected || (No = document.createElementNS(Mo, "svg"), No.setAttribute("aria-hidden", "true"), No.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(No)), No;
}
var Io = (e, t) => {
	let n = document.createElementNS(Mo, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, Lo = {
	mask: jo(!0),
	out: jo(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (Ei()) return;
		let i = Eo(t), a = Do(t), o = Co / 2 / zi, s = () => Oo(r(), n) - i - wo / zi;
		if (s() - o > a) return;
		let c = 2 * o + t.height * Ri, l = c / 2, u = t.height / 2, d = Co / 2 * zi, f = Co / 2 * Ri * zi, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= $; e++) {
			let t = e / $;
			h.addColorStop(t, `rgb(255 255 255 / ${Hi(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++Po}`, _ = Io("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = Io("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(Io(`feFunc${e}`, {
			type: "linear",
			slope: 1 - To,
			intercept: To
		}));
		let y = Io("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, Io("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), Io("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), Fo().append(_), e.style.filter = `url(#${g})`;
		let b = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * Ri) / t.width).toFixed(4)), requestAnimationFrame(b));
		};
		b();
	}
}, Ro = {
	together: Ca,
	sequence: wa,
	smart: Da,
	sweep: {
		hold: 150,
		choose: (e) => {
			let t = Ta(e);
			if (t) return t;
			let n = Ao(e.reveal);
			return n ? {
				wipe: Lo,
				...n
			} : Ea(e);
		}
	}
}, zo = (e = "smart") => typeof e == "string" ? Ro[e] : e, Bo = () => {}, Vo = (e) => e.finished.then(Bo, Bo), Ho = /* @__PURE__ */ new WeakMap();
function Uo(e, t = 0, n = 200, r = 0, i) {
	return Ti() ? Promise.resolve() : Vo(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var Wo = (e) => !!e.querySelector(`[${Qn}], [${Xn}], :scope > [${ir}]`), Go = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, Ko = /* @__PURE__ */ new WeakMap();
function qo(e) {
	for (let t of Ko.get(e) ?? []) t.remove();
	Ko.delete(e);
}
function Jo(e, t) {
	let n = go(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && Wo(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${nr}] [${Qn}]`)].flatMap(qi), a = Ko.get(t) ?? /* @__PURE__ */ new Set();
			Ko.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => Go(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute($n, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: ur,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), Wi(c), _o(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", Uo(e), Ti()) return c.remove();
						Vo(c.animate([{ opacity: 1 }, { opacity: 0 }], {
							duration: 200,
							easing: "ease",
							fill: "forwards"
						})).then(() => c.remove());
					}
				});
			}
		});
	}
}
function Yo(e, t) {
	return Ti() ? Promise.resolve() : Promise.all(ua(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return Uo(e, n, t.duration, 0, t.enter);
	})).then(Bo);
}
function Xo(e) {
	for (let t of e.querySelectorAll(`:scope > [${nr}]`)) {
		for (let e of Di(t)) e.finish();
		t.style.opacity = "0";
	}
}
function Zo(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${nr}]`)) if (!Wo(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of Di(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function Qo(e, t = "smart", { initial: n = !1 } = {}) {
	let r = $o.get(e);
	return r || (r = es(e, t, n), $o.set(e, r)), r;
}
var $o = /* @__PURE__ */ new WeakMap();
function es(e, t, n) {
	let r = e.parentElement, i = zo(t);
	if (Wo(e)) {
		r && qo(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && Ho.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : Uo(e, t)) : (r && Ho.delete(r), n ? Promise.resolve() : Uo(e));
	}
	if (n || !r) return Promise.resolve();
	let a = Zo(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return Ho.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), Uo(e, 0, t, a);
	}
	Jo(e, r);
	let o = va(e, r, i, (e) => Ua(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return Ho.set(r, o), o.kind === "instant" ? (Xo(r), Promise.resolve()) : o.kind === "sequence" ? Yo(e, o) : o.kind === "wipe" ? ps(e, o, !0) : Uo(e, o.delay, o.duration, 0, o.enter);
}
function ts(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function ns(e, t = ts(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(nr, ""), t;
}
var rs = /* @__PURE__ */ new WeakMap();
function is(e, t) {
	let n = e.querySelector(`:scope > [${Jn}]:not([${nr}])`);
	if (!n) return;
	let r = rs.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && as(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: fr,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	rs.set(e, u), Vo(l).then(() => {
		rs.get(e) === u && as(e, u);
	});
}
function as(e, { overflow: t, boxSizing: n }) {
	rs.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function os(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of Di(e)) t.cancel();
	fs(e), e.style.filter = "";
	let i = e.parentElement;
	i && !Wo(e) && qo(i);
	let a = ns(e, t), o = (t, n) => wi() ? Vo(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && Ho.get(i), n = Ti() || t?.kind === "instant";
		if (i && !n && is(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && Wo(e) ? ss(e, t) : t?.kind === "wipe" && Wo(e) ? ps(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function ss(e, t) {
	for (let t of e.querySelectorAll(`[${Xn}], [${Zn}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${Xn}] [${ir}]`)].filter((e) => !e.parentElement?.closest(`[${ir}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${Qn}]`)].flatMap(qi), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => Vo(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(Bo);
}
var cs = 100, ls = /* @__PURE__ */ new WeakMap();
function us(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function ds(e, t) {
	us(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function fs(e) {
	ls.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function ps(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? us(e, i(t, r)) : a ? us(e, a(t, r)) : ds(e, i(t, r));
	}, s = () => (performance.now() - t.start) / t.duration;
	return s() >= 1 ? (n || (e.style.opacity = "0"), Promise.resolve()) : (n && (t.wipe.effect?.(e, {
		...r,
		progress: s
	}), t.enter && e.animate([t.enter, {}], {
		duration: t.duration,
		delay: Math.max(t.start - performance.now(), 0),
		easing: "ease",
		fill: "backwards"
	})), new Promise((n) => {
		let r = 0, i = performance.now(), a = 0, c = () => {
			let e = performance.now();
			if (e - i > cs && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), ls.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + cs);
		ls.set(e, l), c();
	}).then((t) => {
		if (fs(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? Uo(e, 0, r, t) : Vo(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var ms = X.createContext({}), hs = X.createContext(null), gs = () => X.useContext(ms), _s = () => X.useContext(hs), vs = () => gs().reveal;
function ys({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = Or({
		theme: r,
		mode: i,
		text: a
	}), [c] = X.useState(() => ({ sent: !1 }));
	return X.useEffect(() => {
		n !== void 0 && Fr(n);
	}, [n]), (0, Z.jsx)(ms.Provider, {
		value: t,
		children: (0, Z.jsxs)(hs.Provider, {
			value: c,
			children: [s && (0, Z.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var bs = typeof window > "u" ? X.useEffect : X.useLayoutEffect, xs = () => X.useInsertionEffect(() => (Sr(), Cr), []), Ss = Number("19.3.1".split(".")[0]) >= 19, Cs = () => {
	let { nonce: e } = gs();
	return Ss ? (0, Z.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: vr
	}) : null;
}, ws = Ss ? { inert: !0 } : { inert: "" }, Ts = (e) => X.Children.map(e, (e) => {
	if (!X.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, Z.jsx)("span", {
		[ir]: "",
		children: (0, Z.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? X.cloneElement(e, void 0, Ts(e.props.children)) : e;
}), Es = () => () => {}, Ds = () => X.useSyncExternalStore(Es, () => !1, () => !0), Os = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = X.useRef(null), { nonce: o } = gs(), s = _s(), c = Ds(), l = wr;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), bs(() => {
		if (!a.current) return;
		let e = new uo(a.current, {
			id: t,
			exact: n,
			refetch: r
		});
		return () => e.destroy();
	}, [
		t,
		n,
		r
	]), (0, Z.jsxs)(Z.Fragment, { children: [
		i && (0, Z.jsx)("span", {
			"skullet-status": "",
			children: i
		}),
		(0, Z.jsxs)("div", {
			ref: a,
			[Yn]: "",
			"aria-hidden": !0,
			...ws,
			children: [
				(0, Z.jsx)("div", {
					[Xn]: "",
					children: Ts(e)
				}),
				(0, Z.jsx)("div", { [Zn]: "" }),
				(0, Z.jsx)("div", { [Qn]: "" })
			]
		}),
		c && (0, Z.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, ks = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = X.useRef(null), l = vs();
	return bs(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), Qo(c.current, l, { initial: !r }).then(s), o && (e.memory = new po(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), bs(() => {
		!i || !c.current || os(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, Z.jsx)("div", {
		ref: c,
		[Jn]: "",
		children: e
	});
}, As = class extends X.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = ts(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function js(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	xs();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = X.useRef(null);
	bs(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, Z.jsx)("div", {
			[ir]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, Z.jsx)(Os, {
			id: t,
			exact: i != null,
			refetch: u != null,
			label: n,
			children: m(i ?? d)
		});
	} else o ? (g = "error", _ = o) : i ? (g = "empty", _ = a ?? m(u)) : (g = "content", _ = m(u), v = {
		id: t,
		data: u,
		rendered: !!l,
		sample: d !== void 0
	});
	let [y, b] = X.useState({
		id: 0,
		key: g
	}), [ee, x] = X.useState([]), S = X.useRef(/* @__PURE__ */ new Map()).current, C = X.useRef(_);
	if (bs(() => {
		C.current = _;
	}), y.key !== g) {
		let e = {
			id: y.id,
			node: C.current
		};
		x((t) => t.some((t) => t.id === e.id) ? t : [...t, e]), b({
			id: y.id + 1,
			key: g,
			from: y.key
		});
	}
	let w = X.useRef(e.onReveal);
	bs(() => {
		w.current = e.onReveal;
	});
	let T = y.key === "content" && y.from === "skeleton" ? () => w.current?.() : void 0, E = (e) => x((t) => t.filter((t) => t.id !== e)), D = [...ee.map((e) => (0, Z.jsx)(ks, {
		id: e.id,
		registry: S,
		enter: !1,
		exiting: !0,
		onExited: () => E(e.id),
		children: e.node
	}, e.id)), (0, Z.jsx)(ks, {
		id: y.id,
		registry: S,
		enter: y.id > 0,
		exiting: !1,
		onExited: () => {},
		memory: v,
		onEntered: T,
		children: _
	}, y.id)];
	return (0, Z.jsxs)("div", {
		[qn]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, Z.jsx)(Cs, {}), (0, Z.jsx)(As, {
			exiting: ee.map((e) => e.id),
			registry: S,
			children: D
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var Ms = {
	creators: ["关注创作者", "位"],
	enabled: ["启用来源", ""],
	failed: ["检查失败", "个来源"],
	updates: ["未看更新", "条"],
	subscriptions: ["JAV 订阅", "位"],
	releases: ["未看新作", "条"]
}, Ns = {
	duration: 0,
	delay: 0,
	hold: 150
}, Ps;
function Fs() {
	return Ps || (Ps = new CSSStyleSheet(), Ps.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), Ps;
}
function Is({ figure: e, unit: t }) {
	return /* @__PURE__ */ (0, Z.jsxs)("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: e.toLocaleString() }), /* @__PURE__ */ (0, Z.jsx)("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function Ls({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = Ms[e], o = (0, X.useRef)(null);
	return (0, X.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = Fs();
		for (let n of e) n.adoptedStyleSheets = [...n.adoptedStyleSheets, t];
		return () => {
			for (let n of e) n.adoptedStyleSheets = n.adoptedStyleSheets.filter((e) => e !== t);
		};
	}, [t, r]), /* @__PURE__ */ (0, Z.jsxs)("div", {
		ref: o,
		"data-measured-reading": e,
		className: Te({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Z.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: i
		}), t === void 0 && r ? /* @__PURE__ */ (0, Z.jsx)("b", {
			"data-follow-reading": "",
			className: "text-title-1-medium text-text-primary",
			children: "未取得"
		}) : /* @__PURE__ */ (0, Z.jsx)(ys, {
			reveal: Ns,
			children: /* @__PURE__ */ (0, Z.jsx)(js, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: `正在读取${i}`,
				children: (t) => /* @__PURE__ */ (0, Z.jsx)(Is, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Rs = (e) => j.some(([t]) => t === e);
function zs(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, X.useState)(Rs(e.tab) ? e.tab : "list"), [u, d] = (0, X.useState)(Math.max(1, Math.floor(e.page) || 1)), [f, m] = (0, X.useState)(() => xt(e.sort, e.dir).sort), [h, g] = (0, X.useState)(() => xt(e.sort, e.dir).dir), [_, v] = (0, X.useState)(nt(e.layout) ? e.layout : "default"), [y, b] = (0, X.useState)(lt(e.pageSize)), [ee, x] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, X.useState)(/* @__PURE__ */ new Set()), w = Lt({
		queryKey: A,
		queryFn: ({ signal: e }) => Ke(e)
	}), T = Lt({
		queryKey: k,
		queryFn: ({ signal: e }) => Ge(e)
	}), O = Lt({
		queryKey: D,
		queryFn: ({ signal: e }) => Y(e)
	}), M = w.data || { sources: [] }, N = T.data || {
		root: "",
		providers: []
	}, P = M.sources;
	(0, X.useEffect)(() => {
		x((e) => {
			let t = rt(e, P);
			return t.size === e.size ? e : t;
		});
	}, [P]);
	let F = (e) => {
		let n = e.sort ?? f, r = e.dir ?? h;
		t({
			tab: e.tab ?? c,
			page: e.page ?? u,
			sort: n === "checked" ? "" : n,
			dir: r === re[n] ? "" : r
		});
	}, I = et(P), L = P.filter(tt).length, R = P.filter((e) => e.enabled).length, z = (N.providers || []).filter((e) => e.requirement === "required" && !Le(e)).length, te = new Set((O.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Z.jsxs)(Bt, { children: [
		a ? /* @__PURE__ */ (0, Z.jsx)(V, {
			tone: "warning",
			title: "本机只能浏览",
			extra: s ? /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Z.jsx)(E, {
					href: s,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: W,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Ls, {
					field: "creators",
					figure: w.data ? I.length : void 0,
					failed: w.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Ls, {
					field: "enabled",
					figure: w.data ? R : void 0,
					total: P.length,
					failed: w.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Ls, {
					field: "failed",
					figure: w.data ? L : void 0,
					failed: w.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Ls, {
					field: "updates",
					figure: w.data ? M.counts?.new || 0 : void 0,
					failed: w.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Ls, {
					field: "subscriptions",
					figure: O.data ? te : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Ls, {
					field: "releases",
					figure: O.data ? O.data.unread || 0 : void 0,
					failed: O.isError
				})
			]
		}),
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Z.jsx)("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ (0, Z.jsx)(K, {
						group: "follow",
						label: "关注管理区域",
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: j.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							x(/* @__PURE__ */ new Set()), C(/* @__PURE__ */ new Set()), l(e), F({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Z.jsx)(In, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), F({ tab: "add" });
						},
						selection: {
							ids: S,
							onChange: C,
							onActivate: () => x(/* @__PURE__ */ new Set())
						}
					}), w.data ? /* @__PURE__ */ (0, Z.jsx)(Kn, {
						data: M,
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
							l("add"), F({ tab: "add" });
						},
						onSort: (e, t) => {
							m(e), g(t), d(1), F({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							d(e), F({ page: e });
						},
						onSelected: (e) => {
							x(e), C(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							v(e), d(1), n({ layout: e }), F({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), d(1), n({ pageSize: e }), F({ page: 1 });
						}
					}) : w.isError ? /* @__PURE__ */ (0, Z.jsx)(V, {
						tone: "error",
						children: "关注列表未取得"
					}) : /* @__PURE__ */ (0, Z.jsx)("div", {
						role: "status",
						"aria-label": "正在读取关注列表",
						"data-skeleton": "",
						className: "skeleton-sheen h-32 rounded-lg"
					})]
				}) : null,
				c === "add" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-add",
					"aria-labelledby": "follow-tab-add",
					className: "flex flex-col gap-8",
					children: [
						T.data && w.data ? /* @__PURE__ */ (0, Z.jsx)(an, {
							data: M,
							credentials: N,
							readOnly: a,
							toast: r
						}) : T.isError || w.isError ? /* @__PURE__ */ (0, Z.jsx)(V, {
							tone: "error",
							children: "关注或凭据状态未取得"
						}) : /* @__PURE__ */ (0, Z.jsx)("div", {
							role: "status",
							"aria-label": "正在读取关注凭据",
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ (0, Z.jsx)(un, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								O.refetch(), l("list"), F({ tab: "list" });
							}
						}),
						w.data ? /* @__PURE__ */ (0, Z.jsx)(Cn, {
							groups: M.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: M.alias_suggestions || [],
							sources: M.sources
						}) : null
					]
				}) : null,
				c === "tags" ? /* @__PURE__ */ (0, Z.jsx)("div", {
					role: "tabpanel",
					id: "follow-panel-tags",
					"aria-labelledby": "follow-tab-tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Z.jsx)(me, { scope: "online" })
				}) : null
			]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsxs)(p, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", z ? `（${z}）` : ""]
		}) })
	] });
}
export { zs as FollowManagePage };

//# debugId=742256b8-c749-4afc-add1-a817c24d6775