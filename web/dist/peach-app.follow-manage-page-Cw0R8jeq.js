(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "092e3ac8-daaa-40b5-a018-a9e4b22f423c", e._sentryDebugIdIdentifier = "sentry-dbid-092e3ac8-daaa-40b5-a018-a9e4b22f423c");
	} catch {}
})();
import { createPaginatedRowModel as e, createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as u, $b4f18e3395fe64d7$export$3e41faf802a29e71 as d, $b4f18e3395fe64d7$export$b2539bed5023c21c as f, $ea3928288112382f$export$439d29a4e110a164 as p, $l as m, Button as h, ButtonLink as g, Bx as _, COLUMN_SORT as v, Checkbox as y, ChevronSortDown as ee, Chip as b, CollapseChevron as x, CollapseRegion as S, DataTableFooter as te, DataTableFrame as C, DataTableSort as w, EmptyFocusButton as T, EmptyState as E, ErrorText as D, ExternalLink as O, FEEDS_KEY as k, FOLLOW_CHECK_KEY as A, FOLLOW_CREDENTIALS_KEY as j, FOLLOW_MANAGE_KEY as M, FOLLOW_MANAGE_NAV as N, FOLLOW_RESOLVE_KEY as P, FieldLabel as F, Help as I, Input as L, LAYOUTS as ne, LoadingDots as R, M6 as re, MENU_ITEM as z, MENU_ITEM_INTERACTIVE as B, MENU_POPOVER_SURFACE as V, ModalFrame as H, Note as U, P7 as W, SORT_DEFAULT_DIR as ie, SORT_OPTIONS as ae, STAT_STRIP_SIX as G, Select as oe, SelectItem as se, SelectionDock as ce, SelectionPopover as K, SiteLabel as le, SortDirectionIcon as ue, Switch as de, Table as fe, TableColumnControls as pe, TableColumnResizer as me, TableSelectionHeader as he, TagManager as ge, TaskProgress as _e, Un as ve, Wt as ye, Xf as be, __toESM as xe, addAlias as Se, addSource as Ce, authorGroups as we, authorName as Te, avatarInner as Ee, busyProps as q, cardClass as De, checkEvidenceGap as Oe, checkFailures as ke, checkFeeds as Ae, checkReceipt as je, checkSummary as Me, checkedText as Ne, clickedBlank as Pe, columnVisibilityFeature as J, composingKey as Fe, confirmModal as Ie, createColumnHelper as Le, credentialDone as Re, cx as ze, dZ as Be, dropSources as Ve, du as He, errorHeadline as Ue, errorMessage as Y, feedIntervalText as We, fetchCheckJob as Ge, fetchCredentials as Ke, fetchFeeds as qe, fetchFollow as Je, fetchPending as Ye, fetchResolveJob as Xe, fetchSuggestions as Ze, flexRender as Qe, followFeedByName as $e, followFeedEntity as et, followSuggestKey as tt, groupByAuthor as nt, isBroken as rt, isLayout as it, keepSelected as at, l7 as ot, localTime as st, lookupFeedActor as ct, mapLimit as lt, markItem as ut, pageSizeOf as dt, pageWindow as ft, patchSource as pt, pv as mt, queryClient as ht, reloadFollowManage as gt, removeAlias as _t, removeFeed as vt, removeSource as yt, renameAliasGroup as bt, require_jsx_runtime as xt, require_react as St, resolveFollowSort as Ct, rowPaginationFeature as wt, rowSelectionFeature as Tt, rowSortingFeature as Et, selectionState as Dt, setFeedEnabled as Ot, setSourceEnabled as kt, sortLabel as At, startCheck as jt, startResolve as Mt, tableFeatures as Nt, tableRows as Pt, toggleGroup as Ft, useAction as It, useBackgroundJob as Lt, useMutation as Rt, useQuery as zt, useTable as Bt, useTablePreferences as Vt } from "./peach-app.js";
import { Page as Ht } from "./peach-app.page-QAncjzM1.js";
import { LEGACY_AVATAR_IMG as Ut } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as Wt } from "./peach-app.pill-aria-tab-list-BMY1ZEv1.js";
import { AuthorAvatar as Gt, ErrorLine as Kt, SourceIcon as qt, SourceLink as Jt, StatusBadge as Yt } from "./peach-app.source-view-DalWfDkm.js";
// src/react/follow-manage/add-source.tsx
var X = /* @__PURE__ */ xe(St(), 1), Z = xt(), Xt = ze(z, B, "text-body-2-medium"), Zt = "粘贴来源链接，或输入创作者名、id…", Qt = "添加创作者关注", $t = "查找中（首次按名字查要下载创作者索引，可能几十秒）", en = "识别中", tn = "站内没有查到来源", nn = "/settings/subscriptions", rn = (e, t) => `${e}:${t.url}`;
function an({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
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
		className: ze(V, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Z.jsx)(R, { label: "正在查找建议" })
		}) : null, n.map((e, t) => /* @__PURE__ */ (0, Z.jsxs)(X.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Z.jsxs)("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? ze(Xt, "bg-background-secondary-default") : Xt,
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
function on({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ (0, Z.jsx)(K, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: m,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)(qt, { provider: e.provider }), e.provider_label]
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
				href: nn
			}
		]
	});
}
function sn({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Z.jsx)(U, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: De({
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
				let n = rn(t, e);
				return /* @__PURE__ */ (0, Z.jsx)(y, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(qt, { provider: e.provider }),
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
			}) : /* @__PURE__ */ (0, Z.jsx)(I, { children: tn }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, Z.jsx)(O, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Z.jsx)(I, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function cn({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, X.useState)(""), [o, s] = (0, X.useState)(!1), [c, l] = (0, X.useState)(""), [u, d] = (0, X.useState)(""), [f, p] = (0, X.useState)(!1), [m, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(-1), y = (0, X.useRef)(null), ee = (0, X.useRef)(null), [b, x] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, te] = (0, X.useState)(/* @__PURE__ */ new Set()), [C, w] = (0, X.useState)(""), [T, E] = (0, X.useState)(0);
	(0, X.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let D = zt({
		queryKey: tt(u),
		queryFn: ({ signal: e }) => Ze(u, e),
		enabled: u.length > 0 && f && !o && m !== i
	}), O = (0, X.useMemo)(() => (D.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [D.data]), { job: k, running: A, outcome: j, start: M, dismiss: N } = Lt({
		queryKey: P,
		queryFn: ({ signal: e }) => Xe(e),
		start: (e) => Mt([e]),
		onStarted: () => te(/* @__PURE__ */ new Set()),
		onError: (e) => w(Y(e)),
		onFinish: (e) => {
			e.status === "failed" && w(e.error || "查找失败");
		}
	}), I = (e) => {
		let t = e.trim();
		!t || n || o || A || M.isPending || (w(""), v(-1), l(t), a(t), d(""), g(t), M.mutate(t));
	}, ne = D.isFetching, R = f && !o && m !== i && (O.length > 0 || ne), re = () => {
		v(-1), g(i);
	}, z = (e) => {
		if (!(o || Fe(e.nativeEvent))) {
			if (e.key === "Escape" && R) re();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!O.length) return;
				if (e.preventDefault(), !R) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? O.length - 1 : n >= O.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), I(O[_]?.value || i));
		}
	}, B = j?.results || [], V = B.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !b.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: rn(t, e)
	})).filter((e) => !S.has(e.key))), H = Rt({
		mutationFn: async (e) => {
			let t = [], n = [];
			E(0);
			for (let r of e) {
				try {
					let e = await Ce(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${Y(e)}`);
				}
				E((e) => e + 1);
			}
			if (n.length) try {
				await jt(n);
			} catch (e) {
				t.push(Y(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			gt(), e.failures.length ? w(e.failures.join("；")) : (w(""), N(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => w(Y(e))
	}), W = e.suggestions || [], ie = !c.includes("/");
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Qt,
		className: De({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Qt
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						ref: y,
						className: "min-w-64 grow",
						onFocus: () => p(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !ee.current?.contains(t) && p(!1);
						},
						children: [/* @__PURE__ */ (0, Z.jsx)(L, {
							"aria-label": "来源链接、名字或 id",
							placeholder: Zt,
							value: i,
							leadingIcon: mt,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), v(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: z
						}), R ? /* @__PURE__ */ (0, Z.jsx)(an, {
							field: y,
							menu: ee,
							options: O,
							active: _,
							busy: ne,
							onPick: I,
							onClose: re
						}) : null]
					}),
					/* @__PURE__ */ (0, Z.jsx)(on, {
						credentials: t,
						hidden: b,
						onHidden: x
					}),
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "primary",
						disabled: n || !i.trim(),
						...q(A || M.isPending),
						onClick: () => I(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [A || M.isPending ? /* @__PURE__ */ (0, Z.jsx)(_e, {
					embedded: !0,
					label: k?.message || (k?.total ? `查找中：${k.checked || 0}/${k.total}` : ie ? $t : en),
					value: k?.checked,
					total: k?.total
				}) : null, C ? /* @__PURE__ */ (0, Z.jsx)(U, {
					tone: "error",
					title: "这一次没有完成",
					children: C
				}) : null]
			}),
			B.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Z.jsx)(F, { children: "查找结果" }),
					B.map((e, t) => /* @__PURE__ */ (0, Z.jsx)(sn, {
						row: e,
						at: t,
						hidden: b,
						unpicked: S,
						onPick: (e, t) => {
							let n = new Set(S);
							t ? n.delete(e) : n.add(e), te(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(h, {
								variant: "secondary",
								size: "small",
								onClick: () => N(),
								children: "关闭"
							}),
							/* @__PURE__ */ (0, Z.jsx)(h, {
								variant: "primary",
								size: "small",
								disabled: n || !V.length,
								...q(H.isPending),
								onClick: () => H.mutate(V),
								children: `添加选中（${V.length}）`
							}),
							H.isPending ? /* @__PURE__ */ (0, Z.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${T}/${V.length}`
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
				}), W.map((e) => /* @__PURE__ */ (0, Z.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: `浏览历史里出现 ${e.visits} 次${e.origin ? ` · ${e.origin}` : ""}`,
					onClick: () => I(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var ln = "输入女优名，到 JavDB 找她的演员页", un = "添加 JAV 订阅";
function dn(e, t) {
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
function fn({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(y, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ (0, Z.jsx)(b, {
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
		}), /* @__PURE__ */ (0, Z.jsx)(O, {
			href: e.url,
			children: e.id
		})]
	});
}
function pn({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, X.useState)(""), [a, o] = (0, X.useState)(null), [s, c] = (0, X.useState)(/* @__PURE__ */ new Set()), l = It(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => ct(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !Fe(e.nativeEvent) && (e.preventDefault(), u());
	}, f = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, p = () => {
		a && l.run("follow", (e) => $e(a.q, [...s], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), i(""), f(), n();
		});
	}, m = () => {
		let e = a?.known;
		e && l.run("known", (t) => et(e.id, t), () => {
			t(`已订阅「${e.name}」的新作`), i(""), f(), n();
		});
	}, g = a ? dn(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": un,
		className: De({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: un
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Z.jsx)(L, {
						"aria-label": "女优名",
						placeholder: ln,
						value: r,
						leadingIcon: mt,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ (0, Z.jsx)(h, {
					variant: "primary",
					disabled: e || !r.trim(),
					...q(l.busy === "lookup"),
					onClick: u,
					children: "查找"
				})]
			}),
			l.error ? /* @__PURE__ */ (0, Z.jsx)(U, {
				tone: "error",
				title: "这一次没有完成",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, Z.jsx)(U, {
						tone: "warning",
						title: "JavDB 这一次没有搜成",
						children: a.unavailable
					}) : null,
					/* @__PURE__ */ (0, Z.jsx)(F, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Z.jsx)(fn, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Z.jsx)(I, { children: a.unavailable ? "这一次没有拿到演员卡。" : "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(I, {
						role: "status",
						children: s.size ? g.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					_ ? /* @__PURE__ */ (0, Z.jsx)(I, {
						role: "status",
						children: _.following ? `数据库里的「${_.name}」已经在订阅新作。` : `数据库里的「${_.name}」已有 JavDB 或 DMM 编号，可以直接订阅。`
					}) : null,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(h, {
								variant: "secondary",
								size: "small",
								onClick: f,
								children: "关闭"
							}),
							a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(h, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...q(l.busy === "follow"),
								onClick: p,
								children: `添加订阅（${s.size}）`
							}) : null,
							_ && !_.following ? /* @__PURE__ */ (0, Z.jsx)(h, {
								variant: "primary",
								size: "small",
								disabled: e,
								...q(l.busy === "known"),
								onClick: m,
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
function mn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Z.jsx)(H, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ (0, Z.jsx)(hn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function hn({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, X.useState)(e.canonical_name), o = It();
	return /* @__PURE__ */ (0, Z.jsxs)("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => bt(e.canonical_key, i.trim(), t), () => {
				gt(), n(`已把统一名称改为 ${i.trim()}`), t();
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
			/* @__PURE__ */ (0, Z.jsx)(L, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(F, { children: "选择已有别名" }), /* @__PURE__ */ (0, Z.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ (0, Z.jsx)(h, {
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
			o.error ? /* @__PURE__ */ (0, Z.jsx)(U, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(h, {
					variant: "secondary",
					onClick: t,
					children: "取消"
				}), /* @__PURE__ */ (0, Z.jsx)(h, {
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
var gn = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, _n = Nt({
	rowSelectionFeature: Tt,
	rowSortingFeature: Et,
	rowPaginationFeature: wt,
	columnVisibilityFeature: J,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), vn = _n, yn = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, bn = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, xn = [
	yn,
	bn,
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
], Sn = [
	yn,
	bn,
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
], Cn = (e) => e.alias;
function wn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Tn({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(Gt, {
			group: wn(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Z.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function En({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = Vt("alias-suggestions", xn), f = Vt("alias-saved", Sn), [p, m] = (0, X.useState)(null), [g, _] = (0, X.useState)({}), [v, b] = (0, X.useState)({}), x = n(() => _({})), S = n(() => b({})), [O, k] = (0, X.useState)([]), [A, j] = (0, X.useState)([]), [M, N] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [P, I] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), ne = {
		...M,
		pageIndex: Math.min(M.pageIndex, Math.max(0, Math.ceil(t.length / M.pageSize) - 1))
	}, R = {
		...P,
		pageIndex: Math.min(P.pageIndex, Math.max(0, Math.ceil(e.length / P.pageSize) - 1))
	}, [re, z] = (0, X.useState)(""), [B, V] = (0, X.useState)(""), [H, U] = (0, X.useState)(""), ie = Rt({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await Se(n.canonical, n.alias);
				} catch (n) {
					throw t && gt(), Error(`${Y(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			z(""), _({}), gt(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => z(Y(e))
	}), ae = Rt({
		mutationFn: (e) => Se(e.canonical, e.alias),
		onSuccess: () => {
			z(""), V(""), U(""), gt(), u("已保存创作者别名");
		},
		onError: (e) => z(Y(e))
	}), G = Rt({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await _t(e), n += 1;
			} catch (e) {
				throw Error(`${Y(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				gt();
			}
		},
		onSuccess: () => {
			z(""), b({}), u("已移除创作者别名");
		},
		onError: (e) => z(Y(e))
	}), oe = (e, t) => {
		e.length && Ie({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => ie.mutateAsync(e)
		});
	}, se = (e) => void Ie({
		title: "移除创作者别名",
		body: gn(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => G.mutateAsync(e)
	}), K = (0, X.useRef)({
		sources: r,
		readOnly: i,
		merging: ie.isPending,
		removing: G.isPending,
		merge: oe,
		remove: se,
		rename: m
	});
	K.current = {
		sources: r,
		readOnly: i,
		merging: ie.isPending,
		removing: G.isPending,
		merge: oe,
		remove: se,
		rename: m
	};
	let le = (0, X.useMemo)(() => {
		let e = Le();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(he, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(y, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Tn, {
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
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: K.current.readOnly,
					...q(K.current.merging),
					onClick: () => K.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), ue = (0, X.useMemo)(() => {
		let e = Le();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Z.jsx)(he, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(y, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Tn, {
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
						children: [e.name, /* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: W,
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
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: K.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => K.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), de = Bt({
		features: _n,
		data: t,
		columns: le,
		getRowId: Cn,
		state: {
			rowSelection: g,
			sorting: O,
			pagination: ne,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			x(), _(e);
		},
		onSortingChange: (e) => {
			k(e), N((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: N,
		enableRowSelection: !0
	}), ge = Bt({
		features: vn,
		data: e,
		columns: ue,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: v,
			sorting: A,
			pagination: R,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			S(), b(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			j(e), I((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: I
	}), _e = de.getSelectedRowModel().rows.map((e) => e.original), ve = ge.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), ye = q(ie.isPending);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: De({
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
				children: [/* @__PURE__ */ (0, Z.jsx)(F, { children: "手动添加别名" }), /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(L, {
							"aria-label": "统一名称",
							placeholder: "在 Peach 中统一显示的名称",
							value: B,
							onChange: V,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(L, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: H,
							onChange: U,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "primary",
							disabled: i || !B.trim() || !H.trim(),
							...q(ae.isPending),
							onClick: () => ae.mutate({
								canonical: B.trim(),
								alias: H.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			re ? /* @__PURE__ */ (0, Z.jsx)(D, { children: re }) : null,
			t.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(F, { children: "待合并" }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} 组`
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Z.jsx)(h, {
									variant: "primary",
									size: "small",
									disabled: i,
									...ye,
									onClick: () => oe(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ (0, Z.jsx)(w, {
									label: "待合并创作者别名",
									sorting: O,
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
										k(e), N((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Z.jsx)(pe, {
									preferences: d,
									label: "待合并创作者别名"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(ce, {
						label: "待合并别名批量操作",
						visible: _e.length > 0,
						count: `已选 ${_e.length} 组`,
						children: [/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...ye,
							onClick: () => oe(_e, !1),
							children: `合并所选（${_e.length}）`
						}), /* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => _({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(C, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => de.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(fe, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: O[0] ? {
								column: O[0].id,
								direction: O[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => de.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(l, { children: [de.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Qe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(ee, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(me, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(a, { children: de.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(c, { children: Qe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(te, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: ne,
						onChange: N
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
							children: [/* @__PURE__ */ (0, Z.jsx)(F, { children: "已保存别名" }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(w, {
								label: "已保存创作者别名",
								sorting: A,
								options: [{
									id: "canonical",
									label: "统一名称"
								}, {
									id: "aliases",
									label: "平台别名"
								}],
								onChange: (e) => {
									j(e), I((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Z.jsx)(pe, {
								preferences: f,
								label: "已保存创作者别名"
							})]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(ce, {
						label: "已保存别名批量操作",
						visible: ve.length > 0,
						count: `已选 ${ve.length} 个别名`,
						children: [/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...q(G.isPending),
							onClick: () => void Ie({
								title: "移除所选创作者别名",
								body: `将移除以下 ${ve.length} 个别名，对应来源恢复为独立创作者组。`,
								items: ve,
								confirmLabel: "移除所选别名",
								onConfirm: () => G.mutateAsync(ve)
							}),
							children: `移除所选别名（${ve.length}）`
						}), /* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => b({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(C, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => ge.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(fe, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: A[0] ? {
								column: A[0].id,
								direction: A[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ge.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(l, { children: [ge.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Qe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(ee, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(me, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(a, { children: ge.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(c, { children: Qe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Z.jsx)(te, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: R,
						onChange: I
					})] }) : /* @__PURE__ */ (0, Z.jsx)(E, {
						size: "compact",
						icon: be,
						title: "还没有保存创作者别名",
						actions: i ? void 0 : /* @__PURE__ */ (0, Z.jsx)(T, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsx)(mn, {
				group: p,
				close: () => m(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Dn = Nt({
	rowPaginationFeature: wt,
	rowSelectionFeature: Tt,
	rowSortingFeature: Et,
	columnVisibilityFeature: J,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), On = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, kn = /* @__PURE__ */ new Set(["actions"]), An = Object.entries(On).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), jn = () => ht.invalidateQueries({
	queryKey: k,
	exact: !0
}), Mn = (e) => e.name || e.url;
function Nn(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Pn({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Z.jsx)(b, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Z.jsx)(b, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ (0, Z.jsx)(b, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ (0, Z.jsx)(b, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function Fn({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Z.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Ut}`,
		dangerouslySetInnerHTML: { __html: Ee(Mn(e), t, null, "performer") }
	});
}
var In = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function Ln(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function Rn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Ie({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${Mn(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function zn({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = zt({
		queryKey: k,
		queryFn: ({ signal: e }) => qe(e)
	}), u = It(), d = Vt("jav-feeds", An), f = i.data, m = (0, X.useMemo)(() => f?.sources ?? [], [f]), [g, v] = (0, X.useState)(/* @__PURE__ */ new Set()), b = r?.ids ?? g, x = r?.onChange ?? v, [S, T] = (0, X.useState)(1), [O, A] = (0, X.useState)(20), [j, M] = (0, X.useState)([]), N = ft(m.length, O, S);
	(0, X.useEffect)(() => {
		T((e) => Math.min(e, N.pages));
	}, [N.pages]), (0, X.useEffect)(() => {
		x((e) => {
			let t = new Set(m.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [m, x]);
	let P = Rt({
		mutationFn: async (e) => {
			let t = await lt(e.ids, 4, async (t) => {
				e.action === "remove" ? await vt(t) : await Ot(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (x(/* @__PURE__ */ new Set()), jn(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				u.setError(`${n.length} 条没有写入：${e.ok ? "" : Y(e.error)}`);
			}
		},
		onError: (e) => u.setError(Y(e))
	}), F = (0, X.useMemo)(() => Ln(m), [m]), L = (0, X.useRef)({
		readOnly: e,
		shared: F,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	L.current = {
		readOnly: e,
		shared: F,
		busy: u.busy,
		toggle: (e, t) => void u.run(`enabled-${e.id}`, (n) => Ot(e.id, t, n), () => void jn()),
		fetch: (e) => void u.run(`check-${e.id}`, (t) => Ae(t, [e.id]), () => void jn()),
		remove: (e) => void Rn([e], async () => {
			await vt(e.id), t(`已移除订阅源「${Mn(e)}」`), jn();
		})
	};
	let ne = (0, X.useMemo)(() => {
		let e = Le(), t = (e) => () => On[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(he, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(y, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${Mn(e.row.original)}`
				})
			}),
			e.accessor(Mn, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = In(e.row.original, L.current.shared);
					return /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Fn, { source: e.row.original }),
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
					children: [/* @__PURE__ */ (0, Z.jsx)(le, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : Nn(e.getValue()),
						label: Nn(e.getValue())
					}), /* @__PURE__ */ (0, Z.jsx)(ye, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Pn, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: We(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? st(e.row.original.last_fetched_at) : "还没拉过"
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
						/* @__PURE__ */ (0, Z.jsx)(de, {
							"aria-label": `启用 ${Mn(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: L.current.readOnly,
							onChange: (t) => L.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Be,
							"aria-label": `拉取 ${Mn(e.row.original)}`,
							disabled: L.current.readOnly,
							...q(L.current.busy === `check-${e.row.original.id}`),
							onClick: () => L.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: re,
							"aria-label": `移除 ${Mn(e.row.original)}`,
							disabled: L.current.readOnly,
							onClick: () => L.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), R = (0, X.useMemo)(() => Object.fromEntries([...b].map((e) => [String(e), !0])), [b]), z = Bt({
		features: Dn,
		data: m,
		columns: ne,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: R,
			sorting: j,
			pagination: {
				pageIndex: N.page - 1,
				pageSize: O
			},
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onSortingChange: (e) => {
			M(e), T(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(R) : e;
			x(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!f) return i.error ? /* @__PURE__ */ (0, Z.jsx)(U, {
		tone: "error",
		title: "打不开订阅源",
		children: Y(i.error)
	}) : /* @__PURE__ */ (0, Z.jsx)(I, { children: "正在读订阅源。" });
	let B = () => void u.run("check", (e) => Ae(e), () => void jn()), V = (e) => {
		r?.onActivate(), x((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, H = m.filter((e) => b.has(e.id)), W = m.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Z.jsxs)("section", {
			"aria-label": "JAV 订阅列表",
			className: De({
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
							children: `${m.length.toLocaleString()} 个订阅源 · ${(Number(f.unread) || 0).toLocaleString()} 条未看`
						})]
					}), /* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(h, {
								onClick: B,
								disabled: e,
								...q(u.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ (0, Z.jsx)(pe, {
								preferences: d,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ (0, Z.jsx)(w, {
								label: "JAV 订阅源",
								sorting: j,
								onChange: (e) => {
									M(e), T(1);
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
									label: On[e]
								}))
							})
						]
					})]
				}),
				W.length || u.error ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [W.length ? /* @__PURE__ */ (0, Z.jsx)(U, {
						tone: "error",
						title: `${W.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: W.map((e) => /* @__PURE__ */ (0, Z.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${Mn(e)}：${Ue(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, u.error ? /* @__PURE__ */ (0, Z.jsx)(D, { children: u.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Z.jsxs)(ce, {
					visible: H.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${H.length} 条订阅源`,
					children: [
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(P.isPending),
							onClick: () => P.mutate({
								ids: H.map((e) => e.id),
								action: "enabled"
							}),
							children: "启用"
						}),
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...q(P.isPending),
							onClick: () => P.mutate({
								ids: H.map((e) => e.id),
								action: "paused"
							}),
							children: "暂停"
						}),
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "danger",
							size: "small",
							disabled: e,
							...q(P.isPending),
							onClick: () => void Rn(H, () => P.mutateAsync({
								ids: H.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => x(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				m.length ? /* @__PURE__ */ (0, Z.jsx)(C, {
					follow: !0,
					preferences: d,
					onRowClick: (e) => V(Number(e)),
					children: /* @__PURE__ */ (0, Z.jsxs)(fe, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: j[0] ? {
							column: j[0].id,
							direction: j[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => z.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Z.jsxs)(l, { children: [z.getHeaderGroups()[0].headers.map((e) => {
							let t = Qe(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Z.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [kn.has(e.column.id) ? /* @__PURE__ */ (0, Z.jsx)(p, { children: t }) : /* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(ee, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(me, {
									preferences: d,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Z.jsx)(o, {
							id: "remaining-space",
							"aria-label": "行空白区域",
							"data-table-space": "",
							width: d.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Z.jsx)(a, { children: z.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(c, { children: Qe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Z.jsx)(E, {
					icon: _,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "secondary",
						onClick: n,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				m.length ? /* @__PURE__ */ (0, Z.jsx)(te, {
					label: "JAV 订阅",
					total: N.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: N.page - 1,
						pageSize: O
					},
					onChange: (e) => {
						A(e.pageSize), T(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Z.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Z.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${(Number(f.unread) || 0).toLocaleString()} · 已启用 ${m.filter((e) => e.enabled).length.toLocaleString()} / ${m.length.toLocaleString()}`
					})
				})
			]
		})
	});
}
// src/react/follow-manage/source-list.tsx
var Bn = Nt({
	rowPaginationFeature: wt,
	rowSelectionFeature: Tt,
	rowSortingFeature: Et,
	columnVisibilityFeature: J,
	paginatedRowModel: e()
}), Vn = (e) => (Number(e) || 0).toLocaleString(), Hn = Object.fromEntries(Object.entries(v).map(([e, t]) => [t, e])), Un = 740;
function Wn() {
	let [e, t] = (0, X.useState)(!1), n = (0, X.useRef)(null), r = (0, X.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Un));
		r.observe(e), n.current = r, t(e.clientWidth < Un);
	}, []);
	return (0, X.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Gn = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, Kn = Object.entries(Gn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function qn({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			Pe(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ (0, Z.jsx)(y, {
				isSelected: t,
				onChange: n,
				"aria-label": `选择 ${e.label}`
			}),
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, Z.jsx)(qt, { provider: e.provider })
				}), /* @__PURE__ */ (0, Z.jsx)(Jt, { source: e })]
			}),
			/* @__PURE__ */ (0, Z.jsx)(p, { children: e.provider_label }),
			/* @__PURE__ */ (0, Z.jsx)(Yt, { source: e }),
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
						children: /* @__PURE__ */ (0, Z.jsx)(Kt, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Ne(e)
					}),
					/* @__PURE__ */ (0, Z.jsx)(de, {
						"aria-label": `启用 ${e.label}`,
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Be,
							"aria-label": `检查 ${e.label} 的更新`,
							disabled: !e.enabled || r.readOnly,
							...q(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: re,
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
function Jn({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: s }) {
	let c = e.map((e) => e.id), l = e.filter((e) => e.enabled).map((e) => e.id), u = e.filter(rt).length, d = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), f = `follow-author-${e[0].id}`, m = Dt(r, c);
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": `${t} 的关注来源`,
		className: De({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Gt, {
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
						title: d,
						children: [
							e.map((e) => /* @__PURE__ */ (0, Z.jsx)(qt, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, Z.jsx)(p, { children: `来源：${d}` }),
							u ? /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: `${u} 个失败`
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, Z.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: Be,
						"aria-label": `检查 ${t} 的全部来源`,
						disabled: !l.length || i.readOnly,
						...q(i.busy),
						onClick: () => i.check(l)
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							leadingIcon: ot,
							"aria-pressed": m.all ? "true" : m.some ? "mixed" : "false",
							"aria-label": `${m.all ? "取消全选" : "全选"} ${t} 的来源`,
							onClick: () => o(!m.all),
							children: m.all ? "取消全选" : "全选"
						}), /* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": f,
							leadingIcon: x,
							"aria-label": `${n ? "收起" : "展开"} ${t} 的来源`,
							onClick: () => a(!n),
							children: n ? "收起" : "展开"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, Z.jsx)(S, {
			id: f,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, Z.jsx)(qn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => s(e.id, t)
			}, e.id))
		})]
	});
}
function Yn(e) {
	let { data: t, sort: n, dir: r, page: i, layout: u, pageSize: d, selected: f, readOnly: m, onSort: g, onPage: b, onLayout: S, onPageSize: w, onSelected: T, toast: D, openFollow: O, onAdd: k } = e, j = t.sources, M = (0, X.useMemo)(() => t.author_aliases || [], [t.author_aliases]), N = t.counts || {}, [P, F] = (0, X.useState)(/* @__PURE__ */ new Set()), [I, L] = Wn(), [R, z] = (0, X.useState)(""), B = (0, X.useMemo)(() => we(j, n, r, M), [
		j,
		n,
		r,
		M
	]), V = (0, X.useMemo)(() => Pt(B, n, r, M), [
		B,
		n,
		r,
		M
	]), { job: H, running: W, outcome: G, start: K } = Lt({
		queryKey: A,
		queryFn: ({ signal: e }) => Ge(e),
		start: (e) => jt(e),
		onError: (e) => z(Y(e)),
		onFinish: (e) => {
			gt(), D(e.status === "failed" ? e.error || "检查失败" : je(e));
		}
	}), le = (e) => {
		W || K.isPending || (z(""), K.mutate(e));
	}, ge = (e, t) => T(Ft(f, [e], t)), ye = (e, t) => T(Ft(f, e, t)), be = Rt({
		mutationFn: (e) => yt(e),
		onSuccess: (e, t) => {
			Ve([t]), T(Ft(f, [t], !1)), D("已取消关注来源");
		},
		onError: (e) => z(Y(e))
	}), xe = Rt({
		mutationFn: (e) => kt(e.id, e.enabled),
		onSuccess: (e, t) => {
			pt(t.id, { enabled: t.enabled }), z("");
		},
		onError: (e) => z(Y(e))
	}), Se = (e) => void Ie({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => be.mutateAsync(e.id)
	}), Ce = Rt({
		mutationFn: async (e) => {
			let t = await lt(e.ids, 4, async (t) => {
				e.action === "remove" ? await yt(t) : await kt(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Ve(e.done);
			else for (let t of e.done) pt(t, { enabled: e.action === "enabled" });
			T(Ft(f, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				z(`${t.length}/${e.ids.length} 个来源未更新：${Y(t[0]?.error)}`);
				return;
			}
			z("");
			let n = e.action === "remove" ? "删除" : e.action === "enabled" ? "启用" : "暂停";
			D(`已${n} ${e.done.length} 个关注来源`);
		},
		onError: (e) => z(Y(e))
	}), Ee = Rt({
		mutationFn: async (e) => {
			let t = ((await Ye()).groups || []).flatMap((e) => [
				e.primary,
				...e.variants,
				...e.duplicates
			]).filter((e) => e.status === "new").map((e) => e.id);
			return {
				ids: t,
				failed: (await lt(t, 6, (t) => ut(t, e))).filter((e) => !e.ok)
			};
		},
		onSuccess: (e) => {
			gt(), e.failed.length ? z(`批量更新 ${e.failed.length}/${e.ids.length} 项未完成`) : (z(""), D(`已批量标记 ${e.ids.length} 项`));
		},
		onError: (e) => z(Y(e))
	}), Ae = (e, t) => xe.mutate({
		id: e.id,
		enabled: t
	}), Pe = (0, X.useRef)({
		check: le,
		toggle: Ae,
		remove: Se,
		busy: !1,
		readOnly: m
	});
	Pe.current = {
		check: le,
		toggle: Ae,
		remove: Se,
		busy: W || K.isPending,
		readOnly: m
	};
	let J = Pe.current, Fe = (0, X.useMemo)(() => {
		let e = Le(), t = (e) => () => Gn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(he, {
					table: e.table,
					label: "全选本页来源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(y, {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(Gt, {
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
					children: [/* @__PURE__ */ (0, Z.jsx)(Jt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Z.jsx)(Kt, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(qt, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Yt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Ne(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(de, {
							"aria-label": `启用 ${e.row.original.source.label}`,
							isSelected: e.row.original.source.enabled,
							isDisabled: J.readOnly,
							onChange: (t) => Pe.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Be,
							"aria-label": `检查 ${e.row.original.source.label} 的更新`,
							disabled: !e.row.original.source.enabled || J.readOnly,
							...q(J.busy),
							onClick: () => Pe.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: re,
							"aria-label": `移除 ${e.row.original.source.label}`,
							disabled: J.readOnly,
							onClick: () => Pe.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [J]), Re = (0, X.useMemo)(() => {
		let e = Hn[n];
		return e ? [{
			id: e,
			desc: r === "desc"
		}] : [];
	}, [n, r]), ze = (0, X.useMemo)(() => Object.fromEntries([...f].map((e) => [String(e), !0])), [f]), We = u === "table", Ke = Vt("follow-sources", Kn), qe = ft(We ? V.length : B.length, d, i), Je = Bt({
		features: Bn,
		data: V,
		columns: Fe,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: Re,
			rowSelection: ze,
			pagination: {
				pageIndex: qe.page - 1,
				pageSize: d
			},
			columnVisibility: Ke.visibility
		},
		onColumnVisibilityChange: Ke.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(Re) : e)[0];
			if (!t) return;
			let n = v[t.id];
			n && g(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(ze) : e;
			T(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: qe.page - 1,
				pageSize: d
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === d ? n.pageIndex !== t.pageIndex && b(n.pageIndex + 1) : w(n.pageSize);
		}
	}), Xe = Je.getRowModel().rows, Ze = We ? Xe.map((e) => e.original.source.id) : B.slice(qe.start, qe.end).flatMap((e) => e.map((e) => e.id)), $e = Dt(f, Ze), et = [...f], tt = ke(G), nt = j.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), rt = Oe(G), it = B.length > 0 && P.size >= B.length;
	return j.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: De({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				ref: I,
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
						children: `${j.length.toLocaleString()} 个来源${N.new ? ` · ${Vn(N.new)} 条未看` : ""}`
					})]
				}), /* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						nt.length ? /* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "secondary",
							disabled: m,
							...q(J.busy),
							onClick: () => le(nt),
							children: "检查失败项"
						}) : null,
						/* @__PURE__ */ (0, Z.jsx)(h, {
							variant: "primary",
							leadingIcon: Be,
							disabled: m,
							"aria-label": "检查全部",
							iconOnly: L,
							...q(J.busy),
							onClick: () => le([]),
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
									children: [/* @__PURE__ */ (0, Z.jsx)(h, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ve,
										"aria-label": ne[0][1],
										"aria-pressed": !We,
										onClick: () => S("default")
									}), /* @__PURE__ */ (0, Z.jsx)(h, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: He,
										"aria-label": ne[1][1],
										"aria-pressed": We,
										onClick: () => S("table")
									})]
								}),
								We ? /* @__PURE__ */ (0, Z.jsx)(pe, {
									preferences: Ke,
									label: "关注来源"
								}) : null,
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Z.jsx)(oe, {
										"aria-label": "关注列表排序",
										prefix: "排序",
										selectedKey: n,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											g(t, ie[t]);
										},
										children: ae.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(se, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Z.jsx)(h, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: ue,
										"data-icon-state": r === "asc" ? "a" : "b",
										"aria-label": At(n, r),
										onClick: () => g(n, r === "asc" ? "desc" : "asc")
									})]
								}),
								We ? null : /* @__PURE__ */ (0, Z.jsx)(h, {
									variant: "secondary",
									iconOnly: L,
									leadingIcon: x,
									"aria-expanded": !it,
									"aria-label": it ? "全部展开" : "全部收起",
									onClick: () => F(it ? /* @__PURE__ */ new Set() : new Set(B.map((e) => String(e[0].author_key || e[0].id)))),
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
					W ? /* @__PURE__ */ (0, Z.jsx)(_e, {
						embedded: !0,
						label: H?.message || (H?.total ? `${H.older ? "抓取历史" : "检查更新"}：已完成 ${H.checked || 0}/${H.total} 个来源` : "正在准备检查任务"),
						value: H?.checked,
						total: H?.total
					}) : null,
					R ? /* @__PURE__ */ (0, Z.jsx)(U, {
						tone: "error",
						title: "操作未完成",
						children: R
					}) : null,
					!W && G?.results?.length ? /* @__PURE__ */ (0, Z.jsx)(U, {
						tone: "neutral",
						title: "检查结果",
						children: Me(G)
					}) : null,
					tt.length ? /* @__PURE__ */ (0, Z.jsx)(U, {
						tone: "error",
						title: `${tt.length} 个来源检查失败`,
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: tt.map((e, t) => /* @__PURE__ */ (0, Z.jsx)("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${Ue(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: "这些来源这一轮没有取到更新。"
					}) : null,
					rt ? /* @__PURE__ */ (0, Z.jsx)(U, {
						tone: "warning",
						children: `条目已保存，但这次未保存来源的原始响应：${rt}`
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)(ce, {
				label: "关注来源批量操作",
				visible: et.length > 0,
				count: `已选 ${et.length} 个来源`,
				children: [
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...q(J.busy),
						onClick: () => le(et),
						children: "检查所选"
					}),
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...q(Ce.isPending),
						onClick: () => Ce.mutate({
							ids: et,
							action: "enabled"
						}),
						children: "启用"
					}),
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...q(Ce.isPending),
						onClick: () => Ce.mutate({
							ids: et,
							action: "paused"
						}),
						children: "暂停"
					}),
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "danger",
						size: "small",
						disabled: m,
						...q(Ce.isPending),
						onClick: () => void Ie({
							title: `删除 ${et.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => Ce.mutateAsync({
								ids: et,
								action: "remove"
							})
						}),
						children: "删除"
					}),
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "ghost",
						size: "small",
						onClick: () => T(/* @__PURE__ */ new Set()),
						children: "取消选择"
					})
				]
			}),
			We ? /* @__PURE__ */ (0, Z.jsx)(C, {
				follow: !0,
				preferences: Ke,
				onRowClick: (e) => ge(Number(e), !f.has(Number(e))),
				children: /* @__PURE__ */ (0, Z.jsxs)(fe, {
					"aria-label": "关注来源",
					size: "sm",
					sortDescriptor: Re[0] ? {
						column: Re[0].id,
						direction: Re[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Je.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, Z.jsxs)(l, { children: [Je.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in v, n = Qe(e.column.columnDef.header, e.getContext());
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
									children: /* @__PURE__ */ (0, Z.jsx)(ee, {})
								})]
							}) : /* @__PURE__ */ (0, Z.jsx)(p, { children: n }), /* @__PURE__ */ (0, Z.jsx)(me, {
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
						children: Xe.map((e) => /* @__PURE__ */ (0, Z.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(c, { children: Qe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(c, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(y, {
				isSelected: $e.all,
				isIndeterminate: $e.some,
				onChange: (e) => ye(Ze, e),
				"aria-label": "全选本页来源",
				children: "全选本页"
			}), /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "flex flex-col gap-3",
				children: B.slice(qe.start, qe.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, Z.jsx)(Jn, {
						group: e,
						name: Te(e, M),
						handlers: J,
						selected: f,
						open: !P.has(t),
						onOpen: (e) => {
							let n = new Set(P);
							e ? n.delete(t) : n.add(t), F(n);
						},
						onToggleGroup: (t) => ye(e.map((e) => e.id), t),
						onToggle: ge
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, Z.jsx)(te, {
				label: "关注列表",
				total: qe.total,
				pagination: {
					pageIndex: qe.page - 1,
					pageSize: d
				},
				unit: We ? "个来源" : "位创作者",
				pageUnit: We ? "条" : "位",
				onChange: (e) => {
					e.pageSize === d ? Je.setPageIndex(e.pageIndex) : Je.setPageSize(e.pageSize);
				}
			}),
			N.new ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${Vn(N.new)} · 已看 ${Vn(N.seen)} · 已保存 ${Vn(N.saved)} · 已忽略 ${Vn(N.ignored)}`
					}),
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "secondary",
						size: "small",
						onClick: O,
						children: "去看更新"
					}),
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...q(Ee.isPending),
						onClick: () => void Ie({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => Ee.mutateAsync("seen")
						}),
						children: "全部标记已看"
					}),
					/* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...q(Ee.isPending),
						onClick: () => void Ie({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => Ee.mutateAsync("ignored")
						}),
						children: "全部忽略"
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, Z.jsx)(E, {
		icon: _,
		title: "还没有关注来源",
		actions: /* @__PURE__ */ (0, Z.jsx)(h, {
			variant: "primary",
			size: "small",
			onClick: k,
			children: "添加关注"
		}),
		children: "关注来源及其检查状态会显示在这里。"
	});
}
// node_modules/skullet/dist/index.mjs
var Xn = "skullet-reveal", Zn = "skullet-pane", Qn = "skullet-loading", $n = "skullet-ghost", er = "skullet-snapshot", tr = "skullet-layer", nr = "skullet-rect", rr = "skullet-bar", ir = "skullet-inactive", ar = "skullet-exiting", or = "skullet-covered", sr = "skullet-own", cr = "skullet-block", lr = Symbol.for("skullet.ghost"), ur = Symbol.for("skullet.uncover"), dr = "skullet-status", fr = "skullet-xray", pr = "var(--skullet-base, rgb(128 128 128 / 0.2))", mr = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", hr = 280, gr = 1e4, _r = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, vr = [
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
], yr = [
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
], br = yr.join(", "), xr = `
[${Xn}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${Zn}] {
  display: block;
}

[${Qn}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${ir}] {
  display: none !important;
}

[${tr}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${rr}] {
  display: block;
  background-color: ${pr};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${Qn}]) to ([${sr}], [${tr}]) {
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
  :scope :is(${vr.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${br}, [${or}], [${cr}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${pr} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${br}, [${cr}]):not(svg *) {
      visibility: visible !important;
      background: ${pr} !important;
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
[${dr}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${fr}] [${Qn}] [${$n}],
[${fr}] [${Qn}] [${$n}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, Sr = null, Cr = 0, wr;
function Tr() {
	Cr++, !Sr && (wr ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !wr && (Sr = document.createElement("style"), Sr.dataset.skullet = "true", Sr.textContent = xr, document.head.appendChild(Sr)));
}
function Er() {
	Cr--, !(Cr > 0 || !Sr) && (Sr.remove(), Sr = null);
}
var Dr = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", Or = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...Or });
function kr(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? Or[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var Ar = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function jr({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = kr(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${Ar(o)} }`), a === "system") {
		let t = kr({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${Ar(t)} } }`);
	}
	return s.join("\n");
}
var Mr = /* @__PURE__ */ new Map(), Nr, Q = null, Pr = 0;
function Fr() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var Ir = () => Nr ??= typeof window < "u" && Fr(), Lr = (e) => Ir() || !!e?.closest("[skullet-debug]");
function Rr(e) {
	Nr = e, e ? Ur() : Wr();
}
function zr(e, t) {
	!e || !Lr(e) || (Mr.set(e, {
		state: "loading",
		source: t
	}), Vr());
}
function Br(e, t) {
	!e || !Lr(e) || (Mr.set(e, {
		...Mr.get(e),
		state: "shown",
		moved: t
	}), Vr());
}
function Vr() {
	Ur(), cancelAnimationFrame(Pr), Kr();
}
var Hr = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function Ur() {
	if (typeof document > "u") return;
	if (!Q?.isConnected) {
		Q = document.createElement("div"), Q.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = Q.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${Hr}</style><div class="boxes"></div>`, document.body.append(Q);
	}
	let e = Q.shadowRoot;
	if (Nr && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(fr, e.target.checked);
		}), e.append(t);
	}
	Pr ||= requestAnimationFrame(Kr);
}
function Wr() {
	Q?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(fr), ![...Mr.keys()].some((e) => Lr(e)) && (cancelAnimationFrame(Pr), Pr = 0, Q?.remove(), Q = null);
}
var Gr = ({ state: e, source: t, moved: n }) => {
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
function Kr() {
	if (Pr = 0, !Q?.shadowRoot) return;
	let e = Q.shadowRoot.querySelector(".boxes");
	for (let e of Mr.keys()) e.isConnected && Lr(e) || Mr.delete(e);
	let t = [...Mr];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = Gr(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (Nr || Mr.size) && (Pr = requestAnimationFrame(Kr));
}
var qr, Jr = () => qr ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), Yr = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, Xr = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], Zr = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function Qr(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function $r(e, t, n) {
	let r = Yr(e, t), i = Qr(n, t), a = e ? Xr(e) : [], o = Xr(t), s = Xr(r).map((t, n) => Zr(t, o[n]) ? i[n] : e && Zr(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function ei(e, t, n, r) {
	if (!e) return n;
	let i = Xr(e), a = Xr(t).map((t, n) => e.corners[n] > 0 && Zr(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = Qr(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var ti = (e, t) => {
	let n = Yr(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, ni = {
	top: "ascender",
	bottom: "descender"
}, ri = /* @__PURE__ */ new Map(), ii = (e) => [...e.getClientRects?.() ?? []];
function ai(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (ri.has(t)) return ri.get(t);
	let n = Jr(), r = null;
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
	return ri.set(t, r), r;
}
var oi = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, si = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function ci(e, t, n) {
	let r = ai(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = si(t, "--skullet-text-top", Object.keys(oi), ni.top), a = si(t, "--skullet-text-bottom", ["baseline", "descender"], ni.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[oi[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var li = new Set(yr), ui = new Set(vr), di = .4, fi = /[,/]\s*0\)$/, pi = (e, t) => e !== "" && e !== t, mi = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], hi = (e) => mi.every((t) => pi(e[`border${t}Style`], "none") && pi(e[`border${t}Width`], "0px")), gi = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, _i = (e) => pi(e, "none") && !e.split(/,(?![^(]*\))/).every(gi), vi = (e) => pi(e.backgroundColor, "transparent") && !fi.test(e.backgroundColor) || pi(e.backgroundImage, "none") || _i(e.boxShadow) || hi(e), yi = (e) => li.has(e.localName), bi = (e) => ui.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), xi = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(ii(n).filter((e) => e.width || e.height));
		} else bi(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * di, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, Si = (e, t) => e.hasAttribute("skullet-block") || yi(e) || vi(t) && xi(e) <= 1;
function Ci(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function wi(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * di;
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
function Ti(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = ti(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...ci(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of ii(d)) f(e, r, t);
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
			if (Si(e, r)) {
				let n = ti(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: ei(t, n, Ci(e, r), r)
					});
				}
				yi(e) || u.add(e);
				continue;
			}
			if (bi(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? $r(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...wi(l)];
	for (let t of e.querySelectorAll(`[${or}]`)) u.has(t) || t.removeAttribute(or);
	for (let e of u) e.hasAttribute(or) || e.setAttribute(or, "");
	return [...c, ...wi(l)];
}
var Ei = (e) => typeof matchMedia < "u" && matchMedia(e).matches, Di = () => typeof Element < "u" && typeof Element.prototype.animate == "function", Oi = () => !Di() || Ei("(prefers-reduced-motion: reduce)"), ki = () => Ei("(prefers-reduced-transparency: reduce)"), Ai = (e) => e.getAnimations?.() ?? [], ji = .7, Mi = 1280, Ni = 320, Pi = 2.5, Fi = .45, Ii = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function Li(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", Ii, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: _r[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var Ri = 20, zi = Math.sin(Ri * Math.PI / 180), Bi = Math.cos(Ri * Math.PI / 180), Vi = zi / Bi, Hi = Bi, Ui = `${90 + Ri}deg`, Wi = .85, $ = 12, Gi = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function Ki(e) {
	let t = e * Pi, n = (t, n) => `color-mix(in srgb, ${mr} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= $; e++) r.push(n(e / $ * Wi, Gi(e / $)));
	for (let e = 1; e <= $; e++) r.push(n(Wi + e / $ * (1 - Wi), Gi(1 - e / $)));
	return {
		width: t / Bi,
		image: `repeating-linear-gradient(${Ui}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function qi(e, t, n = Li(e)) {
	for (let t of Ai(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", Oi() || typeof e.animate != "function" || n.animation === "none") return;
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
				opacity: Fi,
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
	}, { width: s, image: c } = Ki(Math.min(Math.max(o.width * .4, 80), Ni)), l = a - o.left + (i.top - o.top) * Vi, u = n.duration * ji / (Mi + Ni);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function Ji(e) {
	if (Oi()) return null;
	let t = Li(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * ji / (Mi + Ni);
}
var Yi = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), Xi = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function Zi(e, t) {
	let n = Yi(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = Li(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute("skullet-rect", ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${pr};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, qi(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var Qi = 120, $i = 72, ea = 3, ta = 60, na = 150, ra = 400, ia = 1.5, aa = 1e3, oa = 1e3, sa = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), ca = -1 / 0, la = !1;
function ua() {
	if (!(la || typeof addEventListener > "u")) {
		la = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => ca = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var da = /* @__PURE__ */ new WeakMap();
function fa(e, { served: t, refetch: n }) {
	ua();
	let r = da.get(e)?.since ?? performance.now();
	da.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function pa(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function ma(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var ha = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function ga(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${ar}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var _a = (e, t) => Math.min(Math.max(e, 0), t), va = -1 / 0;
function ya(e, t, n, r, i) {
	let a = performance.now();
	a - va > na && (va = a);
	let o = a - va, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of pa(e)) {
		let n = ma(t, e), r = c.get(n);
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
		return t === null ? null : _a(t, aa) + Math.max(r.delay ?? 0, 0);
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
			let t = [...c.values()].find((t) => ha(t.rect, e));
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
function ba(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) sa.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function xa(e, t, n, r = () => {}) {
	let i = da.get(t);
	da.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - ca < ra,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: pa(e).length
			})
		};
	}
	let o = _a(a.duration ?? 200, oa);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, aa)
	}, !o) return { kind: "instant" };
	let s = ba(a.enter, r);
	if (a.wipe) {
		let e = ga(t);
		if (e.width * e.height <= innerWidth * innerHeight * ia) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return ya(e, t, a.order, {
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
var Sa = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return _a(n * .8 + r * .2, 1) * 320;
}, Ca = (e) => e.bottom > 0 && e.top < innerHeight, wa = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return Ca(e) ? 0 : null;
	if (!Ca(t)) return null;
	let i = _a(t.top / innerHeight, 1) * 320;
	return Math.max(i - r, 0) + (n ? ta : 0);
}, Ta = { duration: 0 }, Ea = { order: "together" }, Da = { order: Sa }, Oa = (e) => e.input || e.waited < 150 ? Ta : e.refetch ? {
	order: "together",
	duration: Qi
} : null, ka = (e) => e.height < $i || e.pieces <= ea ? Ea : { order: wa }, Aa = {
	hold: 150,
	choose: (e) => Oa(e) ?? ka(e)
}, ja = new Set(yr), Ma = "script, noscript, template, base, meta, link", Na = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), Pa = /* @__PURE__ */ new Set([
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
	or
]), Fa = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function Ia(e, t) {
	let n = Fa(t.data);
	t.data = n;
	let r = e.parentElement, i = Jr();
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
function La(e) {
	for (let t of e.querySelectorAll(Ma)) t.remove();
	for (let t of e.querySelectorAll("*")) if (Na.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || Pa.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function Ra(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (ja.has(e.localName) || Na.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) Ia(e, t);
	return La(n), n.innerHTML;
}
function za(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, La(t.content), t.content;
}
var Ba = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${Ba(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), Va = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function Ha(e) {
	let t = Ba(e, 2);
	return t ? `${location.pathname}|${Va(t)}` : null;
}
var Ua = !1;
try {
	Ua = !1;
} catch {
	Ua = !1;
}
var Wa = Ua, Ga = /* @__PURE__ */ new Set();
function Ka(e, t) {
	!Wa || Ga.has(e) || (Ga.add(e), console.warn(`[skullet] ${t}`));
}
var qa = /^(https?:|\/|data:|blob:)/;
function Ja(e) {
	return typeof e == "string" ? qa.test(e) ? "" : Fa(e) : Array.isArray(e) ? e.map(Ja) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ja(t)])) : e;
}
var Ya = "skullet:shapes", Xa = 2, Za = 50, Qa = 2e4, $a = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map();
function to(e, t) {
	return eo.has(e) || eo.set(e, /* @__PURE__ */ new Set()), eo.get(e).add(t), () => eo.get(e)?.delete(t);
}
function no(e) {
	for (let t of eo.get(e) ?? []) t();
}
function ro() {
	try {
		let e = JSON.parse(localStorage.getItem(Ya) ?? "null");
		return e?.v === Xa ? e.shapes : {};
	} catch {
		return {};
	}
}
function io(e) {
	try {
		localStorage.setItem(Ya, JSON.stringify({
			v: Xa,
			shapes: e
		}));
	} catch {}
}
function ao(e, t) {
	$a.set(e, Ra(t, !1));
	let n = Ra(t, !0);
	if (n.length > Qa) return;
	let r = ro();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - Za)) delete r[e];
	io(r);
}
function oo(e) {
	return $a.get(e) ?? ro()[e] ?? null;
}
var so = [
	100,
	90,
	60
].map((e) => `<div ${cr} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), co = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${Qn}]`)), lo = /* @__PURE__ */ new WeakMap();
function uo(e) {
	if (!e) return;
	let t = lo.get(e);
	return lo.delete(e), t;
}
function fo(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var po = (e) => !!e.firstElementChild || !!e.textContent?.trim(), mo = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, Tr(), e[lr] = !0, e.setAttribute(Qn, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = fo(e, $n), this.snapshot = fo(e, er), this.layer = fo(e, tr), this.hadContent = po(this.ghost);
		let n = e.closest(`[${Xn}]`);
		n && fa(n, {
			served: co.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[ur]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
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
		this.root.closest(`[${ar}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = po(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || co.has(this.root), r = !!this.ghost.querySelector(`[${sr}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? Ha(this.ghost);
			n && (no(n), t = oo(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(za(t)) : e === "fallback" ? (this.snapshot.innerHTML = so, Ka(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(ir, e !== "ghost"), this.snapshot.toggleAttribute(ir, e === "ghost"), this.source = e, zr(this.root.closest(`[${Xn}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : co.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		Zi(this.layer, Ti(e, this.layer));
		let t = this.root.closest(`[${Xn}]`);
		t && lo.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), Er();
	}
}, ho = 250, go = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? Ha(e), this.untrack = this.key ? to(this.key, () => this.save()) : () => {}, (Wa || Lr(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
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
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), ho);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && ao(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${Xn}]`), o = uo(a);
		if (!o) return;
		o.guessed && n && !r && e != null && Ka(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(Ja(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (Br(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? Ka(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : Ka(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, _o = () => {}, vo = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, yo = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !vo(e));
function bo(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(_o, _o), new Promise((e) => setTimeout(e, gr))]);
}
var xo = 360, So = 2, Co = 600, wo = 40, To = wo / Hi, Eo = 320, Do = 120, Oo = .45, ko = (e) => e.left + e.top * Vi, Ao = (e) => e.width + e.height * Vi, jo = (e, t) => ko(t) - To + (Ao(t) + 2 * To) * e, Mo = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function No(e) {
	let t = e.querySelector(`:scope > [${ar}] [${tr}]`), n = t && Ji(t);
	if (!n) return null;
	let r = ga(e);
	if (r.width * r.height > innerWidth * innerHeight * ia) return null;
	let i = ko(r), a = i + Ao(r), o = performance.now(), s = o - Mo.start;
	s <= na && (i - Mo.origin) / Mo.speed >= s && (a - Mo.origin) / Mo.speed - s <= Co || (Mo = {
		start: o,
		origin: i,
		speed: Math.max(So / n, (a - i) / xo)
	});
	let { start: c, origin: l, speed: u } = Mo;
	return {
		delay: (i - To - l) / u - (o - c),
		duration: (a - i + 2 * To) / u
	};
}
var Po = (e) => (t, { rect: n, reveal: r }) => {
	let i = (jo(t, r) - ko(n)) * Hi;
	return `linear-gradient(${Ui}, ${Array.from({ length: $ + 1 }, (t, n) => {
		let r = e ? 1 - Gi(n / $) : Gi(n / $), a = -wo + 2 * wo * n / $;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, Fo = "http://www.w3.org/2000/svg", Io = null, Lo = 0;
function Ro() {
	return Io?.isConnected || (Io = document.createElementNS(Fo, "svg"), Io.setAttribute("aria-hidden", "true"), Io.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(Io)), Io;
}
var zo = (e, t) => {
	let n = document.createElementNS(Fo, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, Bo = {
	mask: Po(!0),
	out: Po(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (ki()) return;
		let i = ko(t), a = Ao(t), o = Eo / 2 / Hi, s = () => jo(r(), n) - i - Do / Hi;
		if (s() - o > a) return;
		let c = 2 * o + t.height * Vi, l = c / 2, u = t.height / 2, d = Eo / 2 * Hi, f = Eo / 2 * Vi * Hi, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= $; e++) {
			let t = e / $;
			h.addColorStop(t, `rgb(255 255 255 / ${Gi(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++Lo}`, _ = zo("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = zo("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(zo(`feFunc${e}`, {
			type: "linear",
			slope: 1 - Oo,
			intercept: Oo
		}));
		let y = zo("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, zo("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), zo("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), Ro().append(_), e.style.filter = `url(#${g})`;
		let ee = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * Vi) / t.width).toFixed(4)), requestAnimationFrame(ee));
		};
		ee();
	}
}, Vo = {
	together: Ea,
	sequence: Da,
	smart: Aa,
	sweep: {
		hold: 150,
		choose: (e) => {
			let t = Oa(e);
			if (t) return t;
			let n = No(e.reveal);
			return n ? {
				wipe: Bo,
				...n
			} : ka(e);
		}
	}
}, Ho = (e = "smart") => typeof e == "string" ? Vo[e] : e, Uo = () => {}, Wo = (e) => e.finished.then(Uo, Uo), Go = /* @__PURE__ */ new WeakMap();
function Ko(e, t = 0, n = 200, r = 0, i) {
	return Oi() ? Promise.resolve() : Wo(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var qo = (e) => !!e.querySelector(`[${tr}], [${$n}], :scope > [${sr}]`), Jo = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, Yo = /* @__PURE__ */ new WeakMap();
function Xo(e) {
	for (let t of Yo.get(e) ?? []) t.remove();
	Yo.delete(e);
}
function Zo(e, t) {
	let n = yo(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && qo(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${ar}] [${tr}]`)].flatMap(Xi), a = Yo.get(t) ?? /* @__PURE__ */ new Set();
			Yo.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => Jo(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute(nr, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: pr,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), qi(c), bo(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", Ko(e), Oi()) return c.remove();
						Wo(c.animate([{ opacity: 1 }, { opacity: 0 }], {
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
function Qo(e, t) {
	return Oi() ? Promise.resolve() : Promise.all(pa(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return Ko(e, n, t.duration, 0, t.enter);
	})).then(Uo);
}
function $o(e) {
	for (let t of e.querySelectorAll(`:scope > [${ar}]`)) {
		for (let e of Ai(t)) e.finish();
		t.style.opacity = "0";
	}
}
function es(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${ar}]`)) if (!qo(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of Ai(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function ts(e, t = "smart", { initial: n = !1 } = {}) {
	let r = ns.get(e);
	return r || (r = rs(e, t, n), ns.set(e, r)), r;
}
var ns = /* @__PURE__ */ new WeakMap();
function rs(e, t, n) {
	let r = e.parentElement, i = Ho(t);
	if (qo(e)) {
		r && Xo(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && Go.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : Ko(e, t)) : (r && Go.delete(r), n ? Promise.resolve() : Ko(e));
	}
	if (n || !r) return Promise.resolve();
	let a = es(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return Go.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), Ko(e, 0, t, a);
	}
	Zo(e, r);
	let o = xa(e, r, i, (e) => Ka(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return Go.set(r, o), o.kind === "instant" ? ($o(r), Promise.resolve()) : o.kind === "sequence" ? Qo(e, o) : o.kind === "wipe" ? gs(e, o, !0) : Ko(e, o.delay, o.duration, 0, o.enter);
}
function is(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function as(e, t = is(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(ar, ""), t;
}
var os = /* @__PURE__ */ new WeakMap();
function ss(e, t) {
	let n = e.querySelector(`:scope > [${Zn}]:not([${ar}])`);
	if (!n) return;
	let r = os.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && cs(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: hr,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	os.set(e, u), Wo(l).then(() => {
		os.get(e) === u && cs(e, u);
	});
}
function cs(e, { overflow: t, boxSizing: n }) {
	os.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function ls(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of Ai(e)) t.cancel();
	hs(e), e.style.filter = "";
	let i = e.parentElement;
	i && !qo(e) && Xo(i);
	let a = as(e, t), o = (t, n) => Di() ? Wo(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && Go.get(i), n = Oi() || t?.kind === "instant";
		if (i && !n && ss(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && qo(e) ? us(e, t) : t?.kind === "wipe" && qo(e) ? gs(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function us(e, t) {
	for (let t of e.querySelectorAll(`[${$n}], [${er}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${$n}] [${sr}]`)].filter((e) => !e.parentElement?.closest(`[${sr}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${tr}]`)].flatMap(Xi), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => Wo(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(Uo);
}
var ds = 100, fs = /* @__PURE__ */ new WeakMap();
function ps(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function ms(e, t) {
	ps(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function hs(e) {
	fs.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function gs(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? ps(e, i(t, r)) : a ? ps(e, a(t, r)) : ms(e, i(t, r));
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
			if (e - i > ds && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), fs.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + ds);
		fs.set(e, l), c();
	}).then((t) => {
		if (hs(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? Ko(e, 0, r, t) : Wo(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var _s = X.createContext({}), vs = X.createContext(null), ys = () => X.useContext(_s), bs = () => X.useContext(vs), xs = () => ys().reveal;
function Ss({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = jr({
		theme: r,
		mode: i,
		text: a
	}), [c] = X.useState(() => ({ sent: !1 }));
	return X.useEffect(() => {
		n !== void 0 && Rr(n);
	}, [n]), (0, Z.jsx)(_s.Provider, {
		value: t,
		children: (0, Z.jsxs)(vs.Provider, {
			value: c,
			children: [s && (0, Z.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var Cs = typeof window > "u" ? X.useEffect : X.useLayoutEffect, ws = () => X.useInsertionEffect(() => (Tr(), Er), []), Ts = Number("19.3.1".split(".")[0]) >= 19, Es = () => {
	let { nonce: e } = ys();
	return Ts ? (0, Z.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: xr
	}) : null;
}, Ds = Ts ? { inert: !0 } : { inert: "" }, Os = (e) => X.Children.map(e, (e) => {
	if (!X.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, Z.jsx)("span", {
		[sr]: "",
		children: (0, Z.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? X.cloneElement(e, void 0, Os(e.props.children)) : e;
}), ks = () => () => {}, As = () => X.useSyncExternalStore(ks, () => !1, () => !0), js = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = X.useRef(null), { nonce: o } = ys(), s = bs(), c = As(), l = Dr;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), Cs(() => {
		if (!a.current) return;
		let e = new mo(a.current, {
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
			[Qn]: "",
			"aria-hidden": !0,
			...Ds,
			children: [
				(0, Z.jsx)("div", {
					[$n]: "",
					children: Os(e)
				}),
				(0, Z.jsx)("div", { [er]: "" }),
				(0, Z.jsx)("div", { [tr]: "" })
			]
		}),
		c && (0, Z.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, Ms = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = X.useRef(null), l = xs();
	return Cs(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), ts(c.current, l, { initial: !r }).then(s), o && (e.memory = new go(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), Cs(() => {
		!i || !c.current || ls(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, Z.jsx)("div", {
		ref: c,
		[Zn]: "",
		children: e
	});
}, Ns = class extends X.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = is(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Ps(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	ws();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = X.useRef(null);
	Cs(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, Z.jsx)("div", {
			[sr]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, Z.jsx)(js, {
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
	let [y, ee] = X.useState({
		id: 0,
		key: g
	}), [b, x] = X.useState([]), S = X.useRef(/* @__PURE__ */ new Map()).current, te = X.useRef(_);
	if (Cs(() => {
		te.current = _;
	}), y.key !== g) {
		let e = {
			id: y.id,
			node: te.current
		};
		x((t) => t.some((t) => t.id === e.id) ? t : [...t, e]), ee({
			id: y.id + 1,
			key: g,
			from: y.key
		});
	}
	let C = X.useRef(e.onReveal);
	Cs(() => {
		C.current = e.onReveal;
	});
	let w = y.key === "content" && y.from === "skeleton" ? () => C.current?.() : void 0, T = (e) => x((t) => t.filter((t) => t.id !== e)), E = [...b.map((e) => (0, Z.jsx)(Ms, {
		id: e.id,
		registry: S,
		enter: !1,
		exiting: !0,
		onExited: () => T(e.id),
		children: e.node
	}, e.id)), (0, Z.jsx)(Ms, {
		id: y.id,
		registry: S,
		enter: y.id > 0,
		exiting: !1,
		onExited: () => {},
		memory: v,
		onEntered: w,
		children: _
	}, y.id)];
	return (0, Z.jsxs)("div", {
		[Xn]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, Z.jsx)(Es, {}), (0, Z.jsx)(Ns, {
			exiting: b.map((e) => e.id),
			registry: S,
			children: E
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var Fs = {
	creators: ["关注创作者", "位"],
	enabled: ["启用来源", ""],
	failed: ["检查失败", "个来源"],
	updates: ["未看更新", "条"],
	subscriptions: ["JAV 订阅", "位"],
	releases: ["未看新作", "条"]
}, Is = {
	duration: 0,
	delay: 0,
	hold: 150
}, Ls;
function Rs() {
	return Ls || (Ls = new CSSStyleSheet(), Ls.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), Ls;
}
function zs({ figure: e, unit: t }) {
	return /* @__PURE__ */ (0, Z.jsxs)("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: e.toLocaleString() }), /* @__PURE__ */ (0, Z.jsx)("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function Bs({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = Fs[e], o = (0, X.useRef)(null);
	return (0, X.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = Rs();
		for (let n of e) n.adoptedStyleSheets = [...n.adoptedStyleSheets, t];
		return () => {
			for (let n of e) n.adoptedStyleSheets = n.adoptedStyleSheets.filter((e) => e !== t);
		};
	}, [t, r]), /* @__PURE__ */ (0, Z.jsxs)("div", {
		ref: o,
		"data-measured-reading": e,
		className: De({
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
		}) : /* @__PURE__ */ (0, Z.jsx)(Ss, {
			reveal: Is,
			children: /* @__PURE__ */ (0, Z.jsx)(Ps, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: `正在读取${i}`,
				children: (t) => /* @__PURE__ */ (0, Z.jsx)(zs, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Vs = (e) => N.some(([t]) => t === e);
function Hs(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, X.useState)(Vs(e.tab) ? e.tab : "list"), [p, m] = (0, X.useState)(Math.max(1, Math.floor(e.page) || 1)), [h, _] = (0, X.useState)(() => Ct(e.sort, e.dir).sort), [v, y] = (0, X.useState)(() => Ct(e.sort, e.dir).dir), [ee, b] = (0, X.useState)(it(e.layout) ? e.layout : "default"), [x, S] = (0, X.useState)(dt(e.pageSize)), [te, C] = (0, X.useState)(/* @__PURE__ */ new Set()), [w, T] = (0, X.useState)(/* @__PURE__ */ new Set()), E = zt({
		queryKey: M,
		queryFn: ({ signal: e }) => Je(e)
	}), D = zt({
		queryKey: j,
		queryFn: ({ signal: e }) => Ke(e)
	}), A = zt({
		queryKey: k,
		queryFn: ({ signal: e }) => qe(e)
	}), P = E.data || { sources: [] }, F = D.data || {
		root: "",
		providers: []
	}, I = P.sources;
	(0, X.useEffect)(() => {
		C((e) => {
			let t = at(e, I);
			return t.size === e.size ? e : t;
		});
	}, [I]);
	let L = (e) => {
		let n = e.sort ?? h, r = e.dir ?? v;
		t({
			tab: e.tab ?? c,
			page: e.page ?? p,
			sort: n === "checked" ? "" : n,
			dir: r === ie[n] ? "" : r
		});
	}, ne = nt(I), R = I.filter(rt).length, re = I.filter((e) => e.enabled).length, z = (F.providers || []).filter((e) => e.requirement === "required" && !Re(e)).length, B = new Set((A.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Z.jsxs)(Ht, { children: [
		a ? /* @__PURE__ */ (0, Z.jsx)(U, {
			tone: "warning",
			title: "本机只能浏览",
			extra: s ? /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Z.jsx)(O, {
					href: s,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: G,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "creators",
					figure: E.data ? ne.length : void 0,
					failed: E.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "enabled",
					figure: E.data ? re : void 0,
					total: I.length,
					failed: E.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "failed",
					figure: E.data ? R : void 0,
					failed: E.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "updates",
					figure: E.data ? P.counts?.new || 0 : void 0,
					failed: E.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "subscriptions",
					figure: A.data ? B : void 0,
					failed: A.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "releases",
					figure: A.data ? A.data.unread || 0 : void 0,
					failed: A.isError
				})
			]
		}),
		/* @__PURE__ */ (0, Z.jsxs)(f, {
			selectedKey: c,
			onSelectionChange: (e) => {
				let t = String(e);
				Vs(t) && (C(/* @__PURE__ */ new Set()), T(/* @__PURE__ */ new Set()), l(t), L({ tab: t }));
			},
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Wt, {
					"aria-label": "关注管理区域",
					"data-section-nav": !0,
					"data-section-items": !0,
					className: "flex max-w-full flex-nowrap overflow-x-auto",
					children: N.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(d, {
						id: e,
						"data-pill-selected": c === e ? "" : void 0,
						"data-pill-variant": "gray",
						className: "cursor-pointer whitespace-nowrap",
						children: t
					}, e))
				}),
				/* @__PURE__ */ (0, Z.jsxs)(u, {
					id: "list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Z.jsx)(zn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), L({ tab: "add" });
						},
						selection: {
							ids: w,
							onChange: T,
							onActivate: () => C(/* @__PURE__ */ new Set())
						}
					}), E.data ? /* @__PURE__ */ (0, Z.jsx)(Yn, {
						data: P,
						sort: h,
						dir: v,
						page: p,
						layout: ee,
						pageSize: x,
						selected: te,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), L({ tab: "add" });
						},
						onSort: (e, t) => {
							_(e), y(t), m(1), L({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							m(e), L({ page: e });
						},
						onSelected: (e) => {
							C(e), T(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							b(e), m(1), n({ layout: e }), L({ page: 1 });
						},
						onPageSize: (e) => {
							S(e), m(1), n({ pageSize: e }), L({ page: 1 });
						}
					}) : E.isError ? /* @__PURE__ */ (0, Z.jsx)(U, {
						tone: "error",
						children: "关注列表未取得"
					}) : /* @__PURE__ */ (0, Z.jsx)("div", {
						role: "status",
						"aria-label": "正在读取关注列表",
						"data-skeleton": "",
						className: "skeleton-sheen h-32 rounded-lg"
					})]
				}),
				/* @__PURE__ */ (0, Z.jsxs)(u, {
					id: "add",
					className: "flex flex-col gap-8",
					children: [
						D.data && E.data ? /* @__PURE__ */ (0, Z.jsx)(cn, {
							data: P,
							credentials: F,
							readOnly: a,
							toast: r
						}) : D.isError || E.isError ? /* @__PURE__ */ (0, Z.jsx)(U, {
							tone: "error",
							children: "关注或凭据状态未取得"
						}) : /* @__PURE__ */ (0, Z.jsx)("div", {
							role: "status",
							"aria-label": "正在读取关注凭据",
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ (0, Z.jsx)(pn, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								A.refetch(), l("list"), L({ tab: "list" });
							}
						}),
						E.data ? /* @__PURE__ */ (0, Z.jsx)(En, {
							groups: P.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: P.alias_suggestions || [],
							sources: P.sources
						}) : null
					]
				}),
				/* @__PURE__ */ (0, Z.jsx)(u, {
					id: "tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Z.jsx)(ge, { scope: "online" })
				})
			]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsxs)(g, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", z ? `（${z}）` : ""]
		}) })
	] });
}
export { Hs as FollowManagePage };

//# debugId=092e3ac8-daaa-40b5-a018-a9e4b22f423c