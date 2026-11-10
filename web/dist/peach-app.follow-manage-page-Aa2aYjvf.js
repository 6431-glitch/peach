(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fd2bc05b-5d42-4d35-8b34-f0145cb910a8", e._sentryDebugIdIdentifier = "sentry-dbid-fd2bc05b-5d42-4d35-8b34-f0145cb910a8");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $76d00c5a4edb230a$export$76ccd210b9029917 as n, $76d00c5a4edb230a$export$816b5d811295e6bc as r, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as i, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as a, $76d00c5a4edb230a$export$f850895b287ef28e as o, $ea3928288112382f$export$439d29a4e110a164 as s, $l as c, Button as l, ButtonLink as u, Bx as d, COLUMN_SORT as f, Checkbox as p, ChevronSortDown as m, Chip as h, CollapseChevron as g, CollapseRegion as _, DataTableFooter as v, DataTableFrame as y, DataTableSort as b, EmptyFocusButton as x, EmptyState as ee, ErrorText as S, ExternalLink as C, FEEDS_KEY as te, FOLLOW_CHECK_KEY as w, FOLLOW_CREDENTIALS_KEY as ne, FOLLOW_MANAGE_KEY as T, FOLLOW_MANAGE_NAV as E, FOLLOW_RESOLVE_KEY as D, FieldLabel as O, Help as k, Input as A, LAYOUTS as j, LoadingDots as M, M6 as N, MENU_ITEM as P, MENU_ITEM_INTERACTIVE as F, MENU_POPOVER_SURFACE as I, ModalFrame as L, Note as R, P7 as re, SORT_DEFAULT_DIR as z, SORT_OPTIONS as ie, STAT_STRIP_SIX as ae, Select as oe, SelectItem as B, SelectionDock as se, SelectionPopover as V, SiteLabel as H, SortDirectionIcon as ce, SortableBoardTabs as le, Switch as ue, Table as de, TableColumnControls as fe, TableColumnResizer as pe, TableSelectionHeader as me, TagManager as U, TaskProgress as he, Un as ge, Wt as W, Xf as _e, __toESM as ve, addAlias as ye, addSource as be, authorGroups as xe, authorName as Se, avatarInner as Ce, busyProps as G, cardClass as we, checkEvidenceGap as Te, checkFailures as Ee, checkFeeds as De, checkReceipt as Oe, checkSummary as ke, checkedText as Ae, clickedBlank as je, columnVisibilityFeature as Me, composingKey as Ne, confirmModal as Pe, createColumnHelper as Fe, credentialDone as Ie, cx as Le, dZ as Re, dropSources as ze, du as Be, errorHeadline as Ve, errorMessage as K, feedIntervalText as He, fetchCheckJob as Ue, fetchCredentials as q, fetchFeeds as We, fetchFollow as Ge, fetchResolveJob as Ke, fetchSuggestions as qe, flexRender as Je, followFeedByName as Ye, followFeedEntity as Xe, followSuggestKey as Ze, groupByAuthor as Qe, import_jsx_runtime as $e, isBroken as et, isLayout as tt, jsx as J, jsxs as Y, keepSelected as nt, l7 as rt, localTime as it, lookupFeedActor as at, mapLimit as ot, markAllPending as st, pageSizeOf as ct, pageWindow as lt, patchSource as ut, pv as dt, queryClient as ft, reloadFollowManage as pt, removeAlias as mt, removeFeed as ht, removeSource as gt, renameAliasGroup as _t, require_jsx_runtime as vt, require_react as yt, resolveFollowSort as bt, rowPaginationFeature as xt, rowSelectionFeature as St, rowSortingFeature as Ct, selectionState as wt, setFeedEnabled as Tt, setSourceEnabled as Et, sortLabel as Dt, startCheck as Ot, startResolve as kt, tableFeatures as At, tableRows as jt, toggleGroup as Mt, useAction as Nt, useBackgroundJob as Pt, useMutation as Ft, useQuery as It, useTable as Lt, useTablePreferences as Rt } from "./peach-app.js";
import { Page as zt } from "./peach-app.page-CW3QRN2N.js";
import { AuthorAvatar as Bt, ErrorLine as Vt, SourceIcon as Ht, SourceLink as Ut, StatusBadge as Wt } from "./peach-app.source-view-CRZESleF.js";
import { createPaginatedRowModel as Gt, createSortedRowModel as Kt, useTableSelection as qt } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { LEGACY_AVATAR_IMG as Jt } from "./peach-app.legacy-avatar-NSITxLRS.js";
// src/react/follow-manage/add-source.tsx
var X = /* @__PURE__ */ ve(yt(), 1), Yt = Le(P, F, "text-body-2-medium"), Xt = "粘贴来源链接，或输入创作者名、id…", Zt = "添加创作者关注", Qt = "查找中（首次按名字查要下载创作者索引，可能几十秒）", $t = "识别中", en = "站内没有查到来源", tn = "/settings/subscriptions", nn = (e, t) => `${e}:${t.url}`;
function rn({ field: e, menu: n, options: r, active: i, busy: a, onPick: o, onClose: s }) {
	return (0, X.useEffect)(() => {
		n.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [n, i]), /* @__PURE__ */ Y(t, {
		ref: n,
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
		className: Le(I, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !r.length ? /* @__PURE__ */ J("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ J(M, { label: "正在查找建议" })
		}) : null, r.map((e, t) => /* @__PURE__ */ Y(X.Fragment, { children: [e.group === r[t - 1]?.group ? null : /* @__PURE__ */ J("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ Y("button", {
			type: "button",
			"aria-current": t === i ? "true" : void 0,
			className: t === i ? Le(Yt, "bg-background-secondary-default") : Yt,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ J("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ J("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ J("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function an({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ J(V, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: c,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ Y("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ J(Ht, { provider: e.provider }), e.provider_label]
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
				href: tn
			}
		]
	});
}
function on({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ J(R, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ Y("div", {
		className: we({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ J("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = nn(t, e);
				return /* @__PURE__ */ J(p, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ Y("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ J(Ht, { provider: e.provider }),
							/* @__PURE__ */ J("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ J("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ J("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "已经关注" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ J(k, { children: en }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ Y("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ J("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ J(C, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ J(k, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function sn({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, X.useState)(""), [o, s] = (0, X.useState)(!1), [c, u] = (0, X.useState)(""), [d, f] = (0, X.useState)(""), [p, m] = (0, X.useState)(!1), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(-1), y = (0, X.useRef)(null), b = (0, X.useRef)(null), [x, ee] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, X.useState)(/* @__PURE__ */ new Set()), [te, w] = (0, X.useState)(""), [ne, T] = (0, X.useState)(0);
	(0, X.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			f("");
			return;
		}
		let t = setTimeout(() => f(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let E = It({
		queryKey: Ze(d),
		queryFn: ({ signal: e }) => qe(d, e),
		enabled: d.length > 0 && p && !o && h !== i
	}), k = (0, X.useMemo)(() => (E.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [E.data]), { job: j, running: M, outcome: N, start: P, dismiss: F } = Pt({
		queryKey: D,
		queryFn: ({ signal: e }) => Ke(e),
		start: (e) => kt([e]),
		onStarted: () => C(/* @__PURE__ */ new Set()),
		onError: (e) => w(K(e)),
		onFinish: (e) => {
			e.status === "failed" && w(e.error || "查找失败");
		}
	}), I = (e) => {
		let t = e.trim();
		!t || n || o || M || P.isPending || (w(""), v(-1), u(t), a(t), f(""), g(t), P.mutate(t));
	}, L = E.isFetching, re = p && !o && h !== i && (k.length > 0 || L), z = () => {
		v(-1), g(i);
	}, ie = (e) => {
		if (!(o || Ne(e.nativeEvent))) {
			if (e.key === "Escape" && re) z();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!k.length) return;
				if (e.preventDefault(), !re) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? k.length - 1 : n >= k.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), I(k[_]?.value || i));
		}
	}, ae = N?.results || [], oe = ae.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !x.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: nn(t, e)
	})).filter((e) => !S.has(e.key))), B = Ft({
		mutationFn: async (e) => {
			let t = [], n = [];
			T(0);
			for (let r of e) {
				try {
					let e = await be(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${K(e)}`);
				}
				T((e) => e + 1);
			}
			if (n.length) try {
				await Ot(n);
			} catch (e) {
				t.push(K(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			pt(), e.failures.length ? w(e.failures.join("；")) : (w(""), F(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => w(K(e))
	}), se = e.suggestions || [], V = !c.includes("/");
	return /* @__PURE__ */ Y("section", {
		"aria-label": Zt,
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ J("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Zt
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ Y("div", {
						ref: y,
						className: "min-w-64 grow",
						onFocus: () => m(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !b.current?.contains(t) && m(!1);
						},
						children: [/* @__PURE__ */ J(A, {
							"aria-label": "来源链接、名字或 id",
							placeholder: Xt,
							value: i,
							leadingIcon: dt,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), v(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: ie
						}), re ? /* @__PURE__ */ J(rn, {
							field: y,
							menu: b,
							options: k,
							active: _,
							busy: L,
							onPick: I,
							onClose: z
						}) : null]
					}),
					/* @__PURE__ */ J(an, {
						credentials: t,
						hidden: x,
						onHidden: ee
					}),
					/* @__PURE__ */ J(l, {
						variant: "primary",
						disabled: n || !i.trim(),
						...G(M || P.isPending),
						onClick: () => I(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ Y("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [M || P.isPending ? /* @__PURE__ */ J(he, {
					embedded: !0,
					label: j?.message || (j?.total ? `查找中：${j.checked || 0}/${j.total}` : V ? Qt : $t),
					value: j?.checked,
					total: j?.total
				}) : null, te ? /* @__PURE__ */ J(R, {
					tone: "error",
					title: "这一次没有完成",
					children: te
				}) : null]
			}),
			ae.length ? /* @__PURE__ */ Y("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ J(O, { children: "查找结果" }),
					ae.map((e, t) => /* @__PURE__ */ J(on, {
						row: e,
						at: t,
						hidden: x,
						unpicked: S,
						onPick: (e, t) => {
							let n = new Set(S);
							t ? n.delete(e) : n.add(e), C(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ Y("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ J(l, {
								variant: "secondary",
								size: "small",
								onClick: () => F(),
								children: "关闭"
							}),
							/* @__PURE__ */ J(l, {
								variant: "primary",
								size: "small",
								disabled: n || !oe.length,
								...G(B.isPending),
								onClick: () => B.mutate(oe),
								children: `添加选中（${oe.length}）`
							}),
							B.isPending ? /* @__PURE__ */ J("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${ne}/${oe.length}`
							}) : null
						]
					})
				]
			}) : null,
			se.length ? /* @__PURE__ */ Y("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ J("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "猜你喜欢"
				}), se.map((e) => /* @__PURE__ */ J(l, {
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
var cn = "输入女优名，到 JavDB 找她的演员页", ln = "添加 JAV 订阅";
function un(e, t) {
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
function dn({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ Y("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ J(p, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ Y("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ J("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ J(h, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ J("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `已在「${e.held_by.name}」名下`
					}) : null
				]
			})
		}), /* @__PURE__ */ J(C, {
			href: e.url,
			children: e.id
		})]
	});
}
function fn({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, X.useState)(""), [a, o] = (0, X.useState)(null), [s, c] = (0, X.useState)(/* @__PURE__ */ new Set()), u = Nt(), d = () => {
		let t = r.trim();
		t && !e && u.run("lookup", (e) => at(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, f = (e) => {
		e.key === "Enter" && !Ne(e.nativeEvent) && (e.preventDefault(), d());
	}, p = () => {
		o(null), c(/* @__PURE__ */ new Set()), u.setError("");
	}, m = () => {
		a && u.run("follow", (e) => Ye(a.q, [...s], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), i(""), p(), n();
		});
	}, h = () => {
		let e = a?.known;
		e && u.run("known", (t) => Xe(e.id, t), () => {
			t(`已订阅「${e.name}」的新作`), i(""), p(), n();
		});
	}, g = a ? un(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ Y("section", {
		"aria-label": ln,
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ J("h3", {
				className: "text-title-2-medium text-text-primary",
				children: ln
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ J("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ J(A, {
						"aria-label": "女优名",
						placeholder: cn,
						value: r,
						leadingIcon: dt,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: f
					})
				}), /* @__PURE__ */ J(l, {
					variant: "primary",
					disabled: e || !r.trim(),
					...G(u.busy === "lookup"),
					onClick: d,
					children: "查找"
				})]
			}),
			u.error ? /* @__PURE__ */ J(R, {
				tone: "error",
				title: "这一次没有完成",
				children: u.error
			}) : null,
			a ? /* @__PURE__ */ Y("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ J(R, {
						tone: "warning",
						title: "JavDB 这一次没有搜成",
						children: a.unavailable
					}) : null,
					/* @__PURE__ */ J(O, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ J(dn, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ J(k, { children: a.unavailable ? "这一次没有拿到演员卡。" : "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ J(k, {
						role: "status",
						children: s.size ? g.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					_ ? /* @__PURE__ */ J(k, {
						role: "status",
						children: _.following ? `数据库里的「${_.name}」已经在订阅新作。` : `数据库里的「${_.name}」已有 JavDB 或 DMM 编号，可以直接订阅。`
					}) : null,
					/* @__PURE__ */ Y("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ J(l, {
								variant: "secondary",
								size: "small",
								onClick: p,
								children: "关闭"
							}),
							a.candidates.length ? /* @__PURE__ */ J(l, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...G(u.busy === "follow"),
								onClick: m,
								children: `添加订阅（${s.size}）`
							}) : null,
							_ && !_.following ? /* @__PURE__ */ J(l, {
								variant: "primary",
								size: "small",
								disabled: e,
								...G(u.busy === "known"),
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
function pn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ J(L, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ J(mn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function mn({ group: t, close: n, receipt: r }) {
	let [i, a] = (0, X.useState)(t.canonical_name), o = Nt();
	return /* @__PURE__ */ Y("form", {
		onSubmit: (e) => {
			e.preventDefault(), i.trim() && i.trim() !== t.canonical_name && o.run("rename", (e) => _t(t.canonical_key, i.trim(), e), () => {
				pt(), r(`已把统一名称改为 ${i.trim()}`), n();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ J(e, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "修改统一名称"
			}),
			/* @__PURE__ */ Y("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["当前名称：", t.canonical_name]
			}),
			/* @__PURE__ */ J(A, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ J(O, { children: "选择已有别名" }), /* @__PURE__ */ J("div", {
					className: "flex flex-wrap gap-2",
					children: t.aliases.map((e) => /* @__PURE__ */ J(l, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ J("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "原名称保留为别名，关联档案和作品署名会同步更新。"
			}),
			o.error ? /* @__PURE__ */ J(R, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ Y("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ J(l, {
					variant: "secondary",
					onClick: n,
					children: "取消"
				}), /* @__PURE__ */ J(l, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === t.canonical_name,
					...G(!!o.busy),
					children: "修改统一名称"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var hn = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, gn = At({
	rowSelectionFeature: St,
	rowSortingFeature: Ct,
	rowPaginationFeature: xt,
	columnVisibilityFeature: Me,
	sortedRowModel: Kt(),
	paginatedRowModel: Gt()
}), _n = gn, vn = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, yn = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, bn = [
	vn,
	yn,
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
], xn = [
	vn,
	yn,
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
], Sn = (e) => e.alias;
function Cn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function wn({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ Y("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ J(Bt, {
			group: Cn(e, t, n),
			name: t
		}), /* @__PURE__ */ J("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Tn({ groups: e, suggestions: t, sources: s = [], readOnly: c, toast: u }) {
	let d = Rt("alias-suggestions", bn), f = Rt("alias-saved", xn), [h, g] = (0, X.useState)(null), [_, C] = (0, X.useState)({}), [te, w] = (0, X.useState)({}), ne = qt(() => C({})), T = qt(() => w({})), [E, D] = (0, X.useState)([]), [k, j] = (0, X.useState)([]), [M, N] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [P, F] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), I = {
		...M,
		pageIndex: Math.min(M.pageIndex, Math.max(0, Math.ceil(t.length / M.pageSize) - 1))
	}, L = {
		...P,
		pageIndex: Math.min(P.pageIndex, Math.max(0, Math.ceil(e.length / P.pageSize) - 1))
	}, [R, z] = (0, X.useState)(""), [ie, ae] = (0, X.useState)(""), [oe, B] = (0, X.useState)(""), V = Ft({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await ye(n.canonical, n.alias);
				} catch (n) {
					throw t && pt(), Error(`${K(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			z(""), C({}), pt(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => z(K(e))
	}), H = Ft({
		mutationFn: (e) => ye(e.canonical, e.alias),
		onSuccess: () => {
			z(""), ae(""), B(""), pt(), u("已保存创作者别名");
		},
		onError: (e) => z(K(e))
	}), ce = Ft({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await mt(e), n += 1;
			} catch (e) {
				throw Error(`${K(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				pt();
			}
		},
		onSuccess: () => {
			z(""), w({}), u("已移除创作者别名");
		},
		onError: (e) => z(K(e))
	}), le = (e, t) => {
		e.length && Pe({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => V.mutateAsync(e)
		});
	}, ue = (e) => void Pe({
		title: "移除创作者别名",
		body: hn(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => ce.mutateAsync(e)
	}), U = (0, X.useRef)({
		sources: s,
		readOnly: c,
		merging: V.isPending,
		removing: ce.isPending,
		merge: le,
		remove: ue,
		rename: g
	});
	U.current = {
		sources: s,
		readOnly: c,
		merging: V.isPending,
		removing: ce.isPending,
		merge: le,
		remove: ue,
		rename: g
	};
	let he = (0, X.useMemo)(() => {
		let e = Fe();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ J(me, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ J(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ J(wn, {
					sources: U.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "平台别名",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "依据",
				cell: (e) => /* @__PURE__ */ J("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: (e) => /* @__PURE__ */ J(l, {
					variant: "secondary",
					size: "small",
					disabled: U.current.readOnly,
					...G(U.current.merging),
					onClick: () => U.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), ge = (0, X.useMemo)(() => {
		let e = Fe();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ J(me, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ J(p, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ J(wn, {
					sources: U.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "平台别名",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ J("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ Y("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ J(l, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: re,
							"aria-label": `移除别名 ${e.name}`,
							disabled: U.current.readOnly,
							...G(U.current.removing),
							onClick: () => U.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: ({ row: e }) => /* @__PURE__ */ J(l, {
					variant: "secondary",
					size: "small",
					disabled: U.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => U.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), W = Lt({
		features: gn,
		data: t,
		columns: he,
		getRowId: Sn,
		state: {
			rowSelection: _,
			sorting: E,
			pagination: I,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			ne(), C(e);
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
		features: _n,
		data: e,
		columns: ge,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: te,
			sorting: k,
			pagination: L,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			T(), w(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			j(e), F((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: F
	}), be = W.getSelectedRowModel().rows.map((e) => e.original), xe = ve.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), Se = G(V.isPending);
	return /* @__PURE__ */ Y("div", {
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ J("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "创作者别名"
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ J(O, { children: "手动添加别名" }), /* @__PURE__ */ Y("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ J(A, {
							"aria-label": "统一名称",
							placeholder: "在 Peach 中统一显示的名称",
							value: ie,
							onChange: ae,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ J(A, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: oe,
							onChange: B,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ J(l, {
							variant: "primary",
							disabled: c || !ie.trim() || !oe.trim(),
							...G(H.isPending),
							onClick: () => H.mutate({
								canonical: ie.trim(),
								alias: oe.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			R ? /* @__PURE__ */ J(S, { children: R }) : null,
			t.length ? /* @__PURE__ */ Y("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ Y("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ Y("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ J(O, { children: "待合并" }), /* @__PURE__ */ J("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} 组`
							})]
						}), /* @__PURE__ */ Y("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ J(l, {
									variant: "primary",
									size: "small",
									disabled: c,
									...Se,
									onClick: () => le(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ J(b, {
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
								/* @__PURE__ */ J(fe, {
									preferences: d,
									label: "待合并创作者别名"
								})
							]
						})]
					}),
					/* @__PURE__ */ Y(se, {
						label: "待合并别名批量操作",
						visible: be.length > 0,
						count: `已选 ${be.length} 组`,
						children: [/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...Se,
							onClick: () => le(be, !1),
							children: `合并所选（${be.length}）`
						}), /* @__PURE__ */ J(l, {
							variant: "ghost",
							size: "small",
							onClick: () => C({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ J(y, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => W.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ Y(de, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: E[0] ? {
								column: E[0].id,
								direction: E[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => W.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ Y(o, { children: [W.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ J(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ Y($e.Fragment, { children: [/* @__PURE__ */ Y("span", {
									className: "flex items-center gap-0.5",
									children: [Je(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ J("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ J(m, {})
									}) : null]
								}), /* @__PURE__ */ J(pe, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ J(r, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ J(n, { children: W.getRowModel().rows.map((e) => /* @__PURE__ */ Y(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ J(a, { children: Je(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ J(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ J(v, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: I,
						onChange: N
					})
				]
			}) : null,
			/* @__PURE__ */ Y("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ Y("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ Y("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ J(O, { children: "已保存别名" }), /* @__PURE__ */ J("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ Y("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ J(b, {
								label: "已保存创作者别名",
								sorting: k,
								options: [{
									id: "canonical",
									label: "统一名称"
								}, {
									id: "aliases",
									label: "平台别名"
								}],
								onChange: (e) => {
									j(e), F((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ J(fe, {
								preferences: f,
								label: "已保存创作者别名"
							})]
						})]
					}),
					/* @__PURE__ */ Y(se, {
						label: "已保存别名批量操作",
						visible: xe.length > 0,
						count: `已选 ${xe.length} 个别名`,
						children: [/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...G(ce.isPending),
							onClick: () => void Pe({
								title: "移除所选创作者别名",
								body: `将移除以下 ${xe.length} 个别名，对应来源恢复为独立创作者组。`,
								items: xe,
								confirmLabel: "移除所选别名",
								onConfirm: () => ce.mutateAsync(xe)
							}),
							children: `移除所选别名（${xe.length}）`
						}), /* @__PURE__ */ J(l, {
							variant: "ghost",
							size: "small",
							onClick: () => w({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ Y($e.Fragment, { children: [/* @__PURE__ */ J(y, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => ve.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ Y(de, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => ve.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ Y(o, { children: [ve.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ J(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ Y($e.Fragment, { children: [/* @__PURE__ */ Y("span", {
									className: "flex items-center gap-0.5",
									children: [Je(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ J("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ J(m, {})
									}) : null]
								}), /* @__PURE__ */ J(pe, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ J(r, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ J(n, { children: ve.getRowModel().rows.map((e) => /* @__PURE__ */ Y(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ J(a, { children: Je(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ J(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ J(v, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: L,
						onChange: F
					})] }) : /* @__PURE__ */ J(ee, {
						size: "compact",
						icon: _e,
						title: "还没有保存创作者别名",
						actions: c ? void 0 : /* @__PURE__ */ J(x, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ J(pn, {
				group: h,
				close: () => g(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var En = At({
	rowPaginationFeature: xt,
	rowSelectionFeature: St,
	rowSortingFeature: Ct,
	columnVisibilityFeature: Me,
	sortedRowModel: Kt(),
	paginatedRowModel: Gt()
}), Dn = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, On = /* @__PURE__ */ new Set(["actions"]), kn = Object.entries(Dn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), An = () => ft.invalidateQueries({
	queryKey: te,
	exact: !0
}), jn = (e) => e.name || e.url;
function Mn(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Nn({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ J(h, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ J(h, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ J(h, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ J(h, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function Pn({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ J("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Jt}`,
		dangerouslySetInnerHTML: { __html: Ce(jn(e), t, null, "performer") }
	});
}
var Fn = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function In(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function Ln(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Pe({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${jn(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function Rn({ readOnly: e, toast: t, onAdd: c, selection: u }) {
	let f = It({
		queryKey: te,
		queryFn: ({ signal: e }) => We(e)
	}), h = Nt(), g = Rt("jav-feeds", kn), _ = f.data, x = (0, X.useMemo)(() => _?.sources ?? [], [_]), [C, w] = (0, X.useState)(/* @__PURE__ */ new Set()), ne = u?.ids ?? C, T = u?.onChange ?? w, [E, D] = (0, X.useState)(1), [O, A] = (0, X.useState)(20), [j, M] = (0, X.useState)([]), P = lt(x.length, O, E);
	(0, X.useEffect)(() => {
		D((e) => Math.min(e, P.pages));
	}, [P.pages]), (0, X.useEffect)(() => {
		T((e) => {
			let t = new Set(x.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [x, T]);
	let F = Ft({
		mutationFn: async (e) => {
			let t = await ot(e.ids, 4, async (t) => {
				e.action === "remove" ? await ht(t) : await Tt(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (T(/* @__PURE__ */ new Set()), An(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				h.setError(`${n.length} 条没有写入：${e.ok ? "" : K(e.error)}`);
			}
		},
		onError: (e) => h.setError(K(e))
	}), I = (0, X.useMemo)(() => In(x), [x]), L = (0, X.useRef)({
		readOnly: e,
		shared: I,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	L.current = {
		readOnly: e,
		shared: I,
		busy: h.busy,
		toggle: (e, t) => void h.run(`enabled-${e.id}`, (n) => Tt(e.id, t, n), () => void An()),
		fetch: (e) => void h.run(`check-${e.id}`, (t) => De(t, [e.id]), () => void An()),
		remove: (e) => void Ln([e], async () => {
			await ht(e.id), t(`已移除订阅源「${jn(e)}」`), An();
		})
	};
	let re = (0, X.useMemo)(() => {
		let e = Fe(), t = (e) => () => Dn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ J(me, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ J(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${jn(e.row.original)}`
				})
			}),
			e.accessor(jn, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = Fn(e.row.original, L.current.shared);
					return /* @__PURE__ */ Y("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ J(Pn, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ J("span", {
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
				cell: (e) => /* @__PURE__ */ J("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ Y("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: "打开来源页面",
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ J(H, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : Mn(e.getValue()),
						label: Mn(e.getValue())
					}), /* @__PURE__ */ J(W, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ J(Nn, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ J("span", {
					className: "whitespace-nowrap",
					children: He(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ J("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? it(e.row.original.last_fetched_at) : "还没拉过"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ J("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()} 条`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ Y("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ J(ue, {
							"aria-label": `启用 ${jn(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: L.current.readOnly,
							onChange: (t) => L.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Re,
							"aria-label": `拉取 ${jn(e.row.original)}`,
							disabled: L.current.readOnly,
							...G(L.current.busy === `check-${e.row.original.id}`),
							onClick: () => L.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: N,
							"aria-label": `移除 ${jn(e.row.original)}`,
							disabled: L.current.readOnly,
							onClick: () => L.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), z = (0, X.useMemo)(() => Object.fromEntries([...ne].map((e) => [String(e), !0])), [ne]), ie = Lt({
		features: En,
		data: x,
		columns: re,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: z,
			sorting: j,
			pagination: {
				pageIndex: P.page - 1,
				pageSize: O
			},
			columnVisibility: g.visibility
		},
		onColumnVisibilityChange: g.change,
		onSortingChange: (e) => {
			M(e), D(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			u?.onActivate();
			let t = typeof e == "function" ? e(z) : e;
			T(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!_) return f.error ? /* @__PURE__ */ J(R, {
		tone: "error",
		title: "打不开订阅源",
		children: K(f.error)
	}) : /* @__PURE__ */ J(k, { children: "正在读订阅源。" });
	let ae = () => void h.run("check", (e) => De(e), () => void An()), oe = (e) => {
		u?.onActivate(), T((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, B = x.filter((e) => ne.has(e.id)), V = x.filter((e) => e.last_error);
	return /* @__PURE__ */ J("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ Y("section", {
			"aria-label": "JAV 订阅列表",
			className: we({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ Y("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ Y("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ J("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV 订阅源"
						}), /* @__PURE__ */ J("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${x.length.toLocaleString()} 个订阅源 · ${(Number(_.unread) || 0).toLocaleString()} 条未看`
						})]
					}), /* @__PURE__ */ Y("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ J(l, {
								onClick: ae,
								disabled: e,
								...G(h.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ J(fe, {
								preferences: g,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ J(b, {
								label: "JAV 订阅源",
								sorting: j,
								onChange: (e) => {
									M(e), D(1);
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
									label: Dn[e]
								}))
							})
						]
					})]
				}),
				V.length || h.error ? /* @__PURE__ */ Y("div", {
					className: "flex flex-col gap-3",
					children: [V.length ? /* @__PURE__ */ J(R, {
						tone: "error",
						title: `${V.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ J("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: V.map((e) => /* @__PURE__ */ J("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${jn(e)}：${Ve(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, h.error ? /* @__PURE__ */ J(S, { children: h.error }) : null]
				}) : null,
				/* @__PURE__ */ Y(se, {
					visible: B.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${B.length} 条订阅源`,
					children: [
						/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...G(F.isPending),
							onClick: () => F.mutate({
								ids: B.map((e) => e.id),
								action: "enabled"
							}),
							children: "启用"
						}),
						/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...G(F.isPending),
							onClick: () => F.mutate({
								ids: B.map((e) => e.id),
								action: "paused"
							}),
							children: "暂停"
						}),
						/* @__PURE__ */ J(l, {
							variant: "danger",
							size: "small",
							disabled: e,
							...G(F.isPending),
							onClick: () => void Ln(B, () => F.mutateAsync({
								ids: B.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ J(l, {
							variant: "ghost",
							size: "small",
							onClick: () => T(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				x.length ? /* @__PURE__ */ J(y, {
					follow: !0,
					preferences: g,
					onRowClick: (e) => oe(Number(e)),
					children: /* @__PURE__ */ Y(de, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: j[0] ? {
							column: j[0].id,
							direction: j[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => ie.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ Y(o, { children: [ie.getHeaderGroups()[0].headers.map((e) => {
							let t = Je(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ J(r, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...g.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ Y($e.Fragment, { children: [On.has(e.column.id) ? /* @__PURE__ */ J(s, { children: t }) : /* @__PURE__ */ Y("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ J("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ J(m, {})
									}) : null]
								}), /* @__PURE__ */ J(pe, {
									preferences: g,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ J(r, {
							id: "remaining-space",
							"aria-label": "行空白区域",
							"data-table-space": "",
							width: g.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ J(n, { children: ie.getRowModel().rows.map((e) => /* @__PURE__ */ Y(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ J(a, { children: Je(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ J(a, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ J(ee, {
					icon: d,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ J(l, {
						variant: "secondary",
						onClick: c,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				x.length ? /* @__PURE__ */ J(v, {
					label: "JAV 订阅",
					total: P.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: P.page - 1,
						pageSize: O
					},
					onChange: (e) => {
						A(e.pageSize), D(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ J("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ J("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${(Number(_.unread) || 0).toLocaleString()} · 已启用 ${x.filter((e) => e.enabled).length.toLocaleString()} / ${x.length.toLocaleString()}`
					})
				})
			]
		})
	});
}
// src/react/follow-manage/source-list.tsx
var zn = At({
	rowPaginationFeature: xt,
	rowSelectionFeature: St,
	rowSortingFeature: Ct,
	columnVisibilityFeature: Me,
	paginatedRowModel: Gt()
}), Bn = (e) => (Number(e) || 0).toLocaleString(), Vn = Object.fromEntries(Object.entries(f).map(([e, t]) => [t, e])), Hn = 740;
function Un() {
	let [e, t] = (0, X.useState)(!1), n = (0, X.useRef)(null), r = (0, X.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Hn));
		r.observe(e), n.current = r, t(e.clientWidth < Hn);
	}, []);
	return (0, X.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Wn = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, Gn = Object.entries(Wn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function Kn({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ Y("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			je(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ J(p, {
				isSelected: t,
				onChange: n,
				"aria-label": `选择 ${e.label}`
			}),
			/* @__PURE__ */ Y("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ J("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ J(Ht, { provider: e.provider })
				}), /* @__PURE__ */ J(Ut, { source: e })]
			}),
			/* @__PURE__ */ J(s, { children: e.provider_label }),
			/* @__PURE__ */ J(Wt, { source: e }),
			e.last_error ? /* @__PURE__ */ Y("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ J("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ Y("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ J("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ J("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ J(Vt, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ Y("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ J("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Ae(e)
					}),
					/* @__PURE__ */ J(ue, {
						"aria-label": `启用 ${e.label}`,
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ Y("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Re,
							"aria-label": `检查 ${e.label} 的更新`,
							disabled: !e.enabled || r.readOnly,
							...G(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: N,
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
function qn({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: c }) {
	let u = e.map((e) => e.id), d = e.filter((e) => e.enabled).map((e) => e.id), f = e.filter(et).length, p = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), m = `follow-author-${e[0].id}`, h = wt(r, u);
	return /* @__PURE__ */ Y("section", {
		"aria-label": `${t} 的关注来源`,
		className: we({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ Y("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ J(Bt, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ Y("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ J("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ Y("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: p,
						children: [
							e.map((e) => /* @__PURE__ */ J(Ht, { provider: e.provider }, e.id)),
							/* @__PURE__ */ J(s, { children: `来源：${p}` }),
							f ? /* @__PURE__ */ J("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: `${f} 个失败`
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ Y("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ J(l, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: Re,
						"aria-label": `检查 ${t} 的全部来源`,
						disabled: !d.length || i.readOnly,
						...G(i.busy),
						onClick: () => i.check(d)
					}), /* @__PURE__ */ Y("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							leadingIcon: rt,
							"aria-pressed": h.all ? "true" : h.some ? "mixed" : "false",
							"aria-label": `${h.all ? "取消全选" : "全选"} ${t} 的来源`,
							onClick: () => o(!h.all),
							children: h.all ? "取消全选" : "全选"
						}), /* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": m,
							leadingIcon: g,
							"aria-label": `${n ? "收起" : "展开"} ${t} 的来源`,
							onClick: () => a(!n),
							children: n ? "收起" : "展开"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ J(_, {
			id: m,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ J(Kn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => c(e.id, t)
			}, e.id))
		})]
	});
}
function Jn(e) {
	let { data: t, sort: c, dir: u, page: h, layout: _, pageSize: b, selected: x, readOnly: S, onSort: C, onPage: te, onLayout: ne, onPageSize: T, onSelected: E, toast: D, openFollow: O, onAdd: k } = e, A = t.sources, M = (0, X.useMemo)(() => t.author_aliases || [], [t.author_aliases]), P = t.counts || {}, [F, I] = (0, X.useState)(/* @__PURE__ */ new Set()), [L, re] = Un(), [ae, V] = (0, X.useState)(""), H = (0, X.useMemo)(() => xe(A, c, u, M), [
		A,
		c,
		u,
		M
	]), le = (0, X.useMemo)(() => jt(H, c, u, M), [
		H,
		c,
		u,
		M
	]), { job: U, running: W, outcome: _e, start: ve } = Pt({
		queryKey: w,
		queryFn: ({ signal: e }) => Ue(e),
		start: (e) => Ot(e),
		onError: (e) => V(K(e)),
		onFinish: (e) => {
			pt(), D(e.status === "failed" ? e.error || "检查失败" : Oe(e));
		}
	}), ye = (e) => {
		W || ve.isPending || (V(""), ve.mutate(e));
	}, be = (e, t) => E(Mt(x, [e], t)), Ce = (e, t) => E(Mt(x, e, t)), De = Ft({
		mutationFn: (e) => gt(e),
		onSuccess: (e, t) => {
			ze([t]), E(Mt(x, [t], !1)), D("已取消关注来源");
		},
		onError: (e) => V(K(e))
	}), je = Ft({
		mutationFn: (e) => Et(e.id, e.enabled),
		onSuccess: (e, t) => {
			ut(t.id, { enabled: t.enabled }), V("");
		},
		onError: (e) => V(K(e))
	}), Me = (e) => void Pe({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => De.mutateAsync(e.id)
	}), Ne = Ft({
		mutationFn: async (e) => {
			let t = await ot(e.ids, 4, async (t) => {
				e.action === "remove" ? await gt(t) : await Et(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") ze(e.done);
			else for (let t of e.done) ut(t, { enabled: e.action === "enabled" });
			E(Mt(x, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				V(`${t.length}/${e.ids.length} 个来源未更新：${K(t[0]?.error)}`);
				return;
			}
			V("");
			let n = e.action === "remove" ? "删除" : e.action === "enabled" ? "启用" : "暂停";
			D(`已${n} ${e.done.length} 个关注来源`);
		},
		onError: (e) => V(K(e))
	}), Ie = Ft({
		mutationFn: st,
		onSuccess: (e) => {
			pt(), e.failed ? V(`批量更新 ${e.failed}/${e.total} 项未完成：${K(e.error)}`) : (V(""), D(`已批量标记 ${e.total} 项`));
		},
		onError: (e) => V(K(e))
	}), Le = (e, t) => je.mutate({
		id: e.id,
		enabled: t
	}), He = (0, X.useRef)({
		check: ye,
		toggle: Le,
		remove: Me,
		busy: !1,
		readOnly: S
	});
	He.current = {
		check: ye,
		toggle: Le,
		remove: Me,
		busy: W || ve.isPending,
		readOnly: S
	};
	let q = He.current, We = (0, X.useMemo)(() => {
		let e = Fe(), t = (e) => () => Wn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ J(me, {
					table: e.table,
					label: "全选本页来源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ J(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${e.row.original.source.label}`
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ Y("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ J(Bt, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ J("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ Y("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ J(Ut, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ J(Vt, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ Y("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ J(Ht, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ J(Wt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Ae(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ Y("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ J(ue, {
							"aria-label": `启用 ${e.row.original.source.label}`,
							isSelected: e.row.original.source.enabled,
							isDisabled: q.readOnly,
							onChange: (t) => He.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Re,
							"aria-label": `检查 ${e.row.original.source.label} 的更新`,
							disabled: !e.row.original.source.enabled || q.readOnly,
							...G(q.busy),
							onClick: () => He.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ J(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: N,
							"aria-label": `移除 ${e.row.original.source.label}`,
							disabled: q.readOnly,
							onClick: () => He.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [q]), Ge = (0, X.useMemo)(() => {
		let e = Vn[c];
		return e ? [{
			id: e,
			desc: u === "desc"
		}] : [];
	}, [c, u]), Ke = (0, X.useMemo)(() => Object.fromEntries([...x].map((e) => [String(e), !0])), [x]), qe = _ === "table", Ye = Rt("follow-sources", Gn), Xe = lt(qe ? le.length : H.length, b, h), Ze = Lt({
		features: zn,
		data: le,
		columns: We,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: Ge,
			rowSelection: Ke,
			pagination: {
				pageIndex: Xe.page - 1,
				pageSize: b
			},
			columnVisibility: Ye.visibility
		},
		onColumnVisibilityChange: Ye.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(Ge) : e)[0];
			if (!t) return;
			let n = f[t.id];
			n && C(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Ke) : e;
			E(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: Xe.page - 1,
				pageSize: b
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === b ? n.pageIndex !== t.pageIndex && te(n.pageIndex + 1) : T(n.pageSize);
		}
	}), Qe = Ze.getRowModel().rows, et = qe ? Qe.map((e) => e.original.source.id) : H.slice(Xe.start, Xe.end).flatMap((e) => e.map((e) => e.id)), tt = wt(x, et), nt = [...x], rt = Ee(_e), it = A.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), at = Te(_e), ct = H.length > 0 && F.size >= H.length;
	return A.length ? /* @__PURE__ */ Y("div", {
		className: we({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ Y("div", {
				ref: L,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ Y("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ J("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "关注列表"
					}), /* @__PURE__ */ J("span", {
						className: "text-body-2-regular text-text-secondary",
						children: `${A.length.toLocaleString()} 个来源${P.new ? ` · ${Bn(P.new)} 条未看` : ""}`
					})]
				}), /* @__PURE__ */ Y("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						it.length ? /* @__PURE__ */ J(l, {
							variant: "secondary",
							disabled: S,
							...G(q.busy),
							onClick: () => ye(it),
							children: "检查失败项"
						}) : null,
						/* @__PURE__ */ J(l, {
							variant: "primary",
							leadingIcon: Re,
							disabled: S,
							"aria-label": "检查全部",
							iconOnly: re,
							...G(q.busy),
							onClick: () => ye([]),
							children: "检查全部"
						}),
						/* @__PURE__ */ Y("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ Y("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": "关注列表版式",
									children: [/* @__PURE__ */ J(l, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ge,
										"aria-label": j[0][1],
										"aria-pressed": !qe,
										onClick: () => ne("default")
									}), /* @__PURE__ */ J(l, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Be,
										"aria-label": j[1][1],
										"aria-pressed": qe,
										onClick: () => ne("table")
									})]
								}),
								qe ? /* @__PURE__ */ J(fe, {
									preferences: Ye,
									label: "关注来源"
								}) : null,
								/* @__PURE__ */ Y("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ J(oe, {
										"aria-label": "关注列表排序",
										prefix: "排序",
										selectedKey: c,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											C(t, z[t]);
										},
										children: ie.map(([e, t]) => /* @__PURE__ */ J(B, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ J(l, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: ce,
										"data-icon-state": u === "asc" ? "a" : "b",
										"aria-label": Dt(c, u),
										onClick: () => C(c, u === "asc" ? "desc" : "asc")
									})]
								}),
								qe ? null : /* @__PURE__ */ J(l, {
									variant: "secondary",
									iconOnly: re,
									leadingIcon: g,
									"aria-expanded": !ct,
									"aria-label": ct ? "全部展开" : "全部收起",
									onClick: () => I(ct ? /* @__PURE__ */ new Set() : new Set(H.map((e) => String(e[0].author_key || e[0].id)))),
									children: ct ? "全部展开" : "全部收起"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ Y("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					W ? /* @__PURE__ */ J(he, {
						embedded: !0,
						label: U?.message || (U?.total ? `${U.older ? "抓取历史" : "检查更新"}：已完成 ${U.checked || 0}/${U.total} 个来源` : "正在准备检查任务"),
						value: U?.checked,
						total: U?.total
					}) : null,
					ae ? /* @__PURE__ */ J(R, {
						tone: "error",
						title: "操作未完成",
						children: ae
					}) : null,
					!W && _e?.results?.length ? /* @__PURE__ */ J(R, {
						tone: "neutral",
						title: "检查结果",
						children: ke(_e)
					}) : null,
					rt.length ? /* @__PURE__ */ J(R, {
						tone: "error",
						title: `${rt.length} 个来源检查失败`,
						extra: /* @__PURE__ */ J("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: rt.map((e, t) => /* @__PURE__ */ J("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${Ve(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: "这些来源这一轮没有取到更新。"
					}) : null,
					at ? /* @__PURE__ */ J(R, {
						tone: "warning",
						children: `条目已保存，但这次未保存来源的原始响应：${at}`
					}) : null
				]
			}),
			/* @__PURE__ */ Y(se, {
				label: "关注来源批量操作",
				visible: nt.length > 0,
				count: `已选 ${nt.length} 个来源`,
				children: [
					/* @__PURE__ */ J(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(q.busy),
						onClick: () => ye(nt),
						children: "检查所选"
					}),
					/* @__PURE__ */ J(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(Ne.isPending),
						onClick: () => Ne.mutate({
							ids: nt,
							action: "enabled"
						}),
						children: "启用"
					}),
					/* @__PURE__ */ J(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(Ne.isPending),
						onClick: () => Ne.mutate({
							ids: nt,
							action: "paused"
						}),
						children: "暂停"
					}),
					/* @__PURE__ */ J(l, {
						variant: "danger",
						size: "small",
						disabled: S,
						...G(Ne.isPending),
						onClick: () => void Pe({
							title: `删除 ${nt.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => Ne.mutateAsync({
								ids: nt,
								action: "remove"
							})
						}),
						children: "删除"
					}),
					/* @__PURE__ */ J(l, {
						variant: "ghost",
						size: "small",
						onClick: () => E(/* @__PURE__ */ new Set()),
						children: "取消选择"
					})
				]
			}),
			qe ? /* @__PURE__ */ J(y, {
				follow: !0,
				preferences: Ye,
				onRowClick: (e) => be(Number(e), !x.has(Number(e))),
				children: /* @__PURE__ */ Y(de, {
					"aria-label": "关注来源",
					size: "sm",
					sortDescriptor: Ge[0] ? {
						column: Ge[0].id,
						direction: Ge[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Ze.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ Y(o, { children: [Ze.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in f, n = Je(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ J(r, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Ye.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ Y($e.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ Y("span", {
								className: "flex items-center gap-0.5",
								children: [n, /* @__PURE__ */ J("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ J(m, {})
								})]
							}) : /* @__PURE__ */ J(s, { children: n }), /* @__PURE__ */ J(pe, {
								preferences: Ye,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ J(r, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: Ye.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ J(n, {
						renderEmptyState: () => "这一页没有来源",
						children: Qe.map((e) => /* @__PURE__ */ Y(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ J(a, { children: Je(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ J(a, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ Y($e.Fragment, { children: [/* @__PURE__ */ J(p, {
				isSelected: tt.all,
				isIndeterminate: tt.some,
				onChange: (e) => Ce(et, e),
				"aria-label": "全选本页来源",
				children: "全选本页"
			}), /* @__PURE__ */ J("div", {
				className: "flex flex-col gap-3",
				children: H.slice(Xe.start, Xe.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ J(qn, {
						group: e,
						name: Se(e, M),
						handlers: q,
						selected: x,
						open: !F.has(t),
						onOpen: (e) => {
							let n = new Set(F);
							e ? n.delete(t) : n.add(t), I(n);
						},
						onToggleGroup: (t) => Ce(e.map((e) => e.id), t),
						onToggle: be
					}, t);
				})
			})] }),
			/* @__PURE__ */ J(v, {
				label: "关注列表",
				total: Xe.total,
				pagination: {
					pageIndex: Xe.page - 1,
					pageSize: b
				},
				unit: qe ? "个来源" : "位创作者",
				pageUnit: qe ? "条" : "位",
				onChange: (e) => {
					e.pageSize === b ? Ze.setPageIndex(e.pageIndex) : Ze.setPageSize(e.pageSize);
				}
			}),
			P.new ? /* @__PURE__ */ Y("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ J("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${Bn(P.new)} · 已看 ${Bn(P.seen)} · 已保存 ${Bn(P.saved)} · 已忽略 ${Bn(P.ignored)}`
					}),
					/* @__PURE__ */ J(l, {
						variant: "secondary",
						size: "small",
						onClick: O,
						children: "去看更新"
					}),
					/* @__PURE__ */ J(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(Ie.isPending),
						onClick: () => void Pe({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => Ie.mutateAsync("seen")
						}),
						children: "全部标记已看"
					}),
					/* @__PURE__ */ J(l, {
						variant: "secondary",
						size: "small",
						disabled: S,
						...G(Ie.isPending),
						onClick: () => void Pe({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => Ie.mutateAsync("ignored")
						}),
						children: "全部忽略"
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ J(ee, {
		icon: d,
		title: "还没有关注来源",
		actions: /* @__PURE__ */ J(l, {
			variant: "primary",
			size: "small",
			onClick: k,
			children: "添加关注"
		}),
		children: "关注来源及其检查状态会显示在这里。"
	});
}
// node_modules/skullet/dist/index.mjs
var Yn = "skullet-reveal", Xn = "skullet-pane", Zn = "skullet-loading", Qn = "skullet-ghost", $n = "skullet-snapshot", er = "skullet-layer", tr = "skullet-rect", nr = "skullet-bar", rr = "skullet-inactive", ir = "skullet-exiting", ar = "skullet-covered", or = "skullet-own", sr = "skullet-block", cr = Symbol.for("skullet.ghost"), lr = Symbol.for("skullet.uncover"), ur = "skullet-status", dr = "skullet-xray", fr = "var(--skullet-base, rgb(128 128 128 / 0.2))", pr = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", mr = 280, hr = 1e4, gr = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, _r = [
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
], vr = [
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
], yr = vr.join(", "), br = `
[${Yn}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${Xn}] {
  display: block;
}

[${Zn}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${rr}] {
  display: none !important;
}

[${er}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${nr}] {
  display: block;
  background-color: ${fr};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${Zn}]) to ([${or}], [${er}]) {
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
  :scope :is(${_r.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${yr}, [${ar}], [${sr}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${fr} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${yr}, [${sr}]):not(svg *) {
      visibility: visible !important;
      background: ${fr} !important;
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
[${ur}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${dr}] [${Zn}] [${Qn}],
[${dr}] [${Zn}] [${Qn}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, xr = null, Sr = 0, Cr;
function wr() {
	Sr++, !xr && (Cr ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !Cr && (xr = document.createElement("style"), xr.dataset.skullet = "true", xr.textContent = br, document.head.appendChild(xr)));
}
function Tr() {
	Sr--, !(Sr > 0 || !xr) && (xr.remove(), xr = null);
}
var Er = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", Dr = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...Dr });
function Or(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? Dr[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var kr = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function Ar({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = Or(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${kr(o)} }`), a === "system") {
		let t = Or({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${kr(t)} } }`);
	}
	return s.join("\n");
}
var jr = /* @__PURE__ */ new Map(), Mr, Z = null, Nr = 0;
function Pr() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var Fr = () => Mr ??= typeof window < "u" && Pr(), Ir = (e) => Fr() || !!e?.closest("[skullet-debug]");
function Lr(e) {
	Mr = e, e ? Hr() : Ur();
}
function Rr(e, t) {
	!e || !Ir(e) || (jr.set(e, {
		state: "loading",
		source: t
	}), Br());
}
function zr(e, t) {
	!e || !Ir(e) || (jr.set(e, {
		...jr.get(e),
		state: "shown",
		moved: t
	}), Br());
}
function Br() {
	Hr(), cancelAnimationFrame(Nr), Gr();
}
var Vr = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function Hr() {
	if (typeof document > "u") return;
	if (!Z?.isConnected) {
		Z = document.createElement("div"), Z.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = Z.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${Vr}</style><div class="boxes"></div>`, document.body.append(Z);
	}
	let e = Z.shadowRoot;
	if (Mr && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(dr, e.target.checked);
		}), e.append(t);
	}
	Nr ||= requestAnimationFrame(Gr);
}
function Ur() {
	Z?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(dr), ![...jr.keys()].some((e) => Ir(e)) && (cancelAnimationFrame(Nr), Nr = 0, Z?.remove(), Z = null);
}
var Wr = ({ state: e, source: t, moved: n }) => {
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
function Gr() {
	if (Nr = 0, !Z?.shadowRoot) return;
	let e = Z.shadowRoot.querySelector(".boxes");
	for (let e of jr.keys()) e.isConnected && Ir(e) || jr.delete(e);
	let t = [...jr];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = Wr(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (Mr || jr.size) && (Nr = requestAnimationFrame(Gr));
}
var Kr, qr = () => Kr ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), Jr = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, Yr = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], Xr = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function Zr(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function Qr(e, t, n) {
	let r = Jr(e, t), i = Zr(n, t), a = e ? Yr(e) : [], o = Yr(t), s = Yr(r).map((t, n) => Xr(t, o[n]) ? i[n] : e && Xr(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function $r(e, t, n, r) {
	if (!e) return n;
	let i = Yr(e), a = Yr(t).map((t, n) => e.corners[n] > 0 && Xr(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = Zr(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var ei = (e, t) => {
	let n = Jr(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, ti = {
	top: "ascender",
	bottom: "descender"
}, ni = /* @__PURE__ */ new Map(), ri = (e) => [...e.getClientRects?.() ?? []];
function ii(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (ni.has(t)) return ni.get(t);
	let n = qr(), r = null;
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
	return ni.set(t, r), r;
}
var ai = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, oi = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function si(e, t, n) {
	let r = ii(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = oi(t, "--skullet-text-top", Object.keys(ai), ti.top), a = oi(t, "--skullet-text-bottom", ["baseline", "descender"], ti.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[ai[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var ci = new Set(vr), li = new Set(_r), ui = .4, di = /[,/]\s*0\)$/, fi = (e, t) => e !== "" && e !== t, pi = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], mi = (e) => pi.every((t) => fi(e[`border${t}Style`], "none") && fi(e[`border${t}Width`], "0px")), hi = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, gi = (e) => fi(e, "none") && !e.split(/,(?![^(]*\))/).every(hi), _i = (e) => fi(e.backgroundColor, "transparent") && !di.test(e.backgroundColor) || fi(e.backgroundImage, "none") || gi(e.boxShadow) || mi(e), vi = (e) => ci.has(e.localName), yi = (e) => li.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), bi = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(ri(n).filter((e) => e.width || e.height));
		} else yi(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * ui, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, xi = (e, t) => e.hasAttribute("skullet-block") || vi(e) || _i(t) && bi(e) <= 1;
function Si(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function Ci(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * ui;
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
function wi(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = ei(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...si(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of ri(d)) f(e, r, t);
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
			if (xi(e, r)) {
				let n = ei(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: $r(t, n, Si(e, r), r)
					});
				}
				vi(e) || u.add(e);
				continue;
			}
			if (yi(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? Qr(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...Ci(l)];
	for (let t of e.querySelectorAll(`[${ar}]`)) u.has(t) || t.removeAttribute(ar);
	for (let e of u) e.hasAttribute(ar) || e.setAttribute(ar, "");
	return [...c, ...Ci(l)];
}
var Ti = (e) => typeof matchMedia < "u" && matchMedia(e).matches, Ei = () => typeof Element < "u" && typeof Element.prototype.animate == "function", Di = () => !Ei() || Ti("(prefers-reduced-motion: reduce)"), Oi = () => Ti("(prefers-reduced-transparency: reduce)"), ki = (e) => e.getAnimations?.() ?? [], Ai = .7, ji = 1280, Mi = 320, Ni = 2.5, Pi = .45, Fi = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function Ii(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", Fi, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: gr[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var Li = 20, Ri = Math.sin(Li * Math.PI / 180), zi = Math.cos(Li * Math.PI / 180), Bi = Ri / zi, Vi = zi, Hi = `${90 + Li}deg`, Ui = .85, Q = 12, Wi = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function Gi(e) {
	let t = e * Ni, n = (t, n) => `color-mix(in srgb, ${pr} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= Q; e++) r.push(n(e / Q * Ui, Wi(e / Q)));
	for (let e = 1; e <= Q; e++) r.push(n(Ui + e / Q * (1 - Ui), Wi(1 - e / Q)));
	return {
		width: t / zi,
		image: `repeating-linear-gradient(${Hi}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function Ki(e, t, n = Ii(e)) {
	for (let t of ki(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", Di() || typeof e.animate != "function" || n.animation === "none") return;
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
				opacity: Pi,
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
	}, { width: s, image: c } = Gi(Math.min(Math.max(o.width * .4, 80), Mi)), l = a - o.left + (i.top - o.top) * Bi, u = n.duration * Ai / (ji + Mi);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function qi(e) {
	if (Di()) return null;
	let t = Ii(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * Ai / (ji + Mi);
}
var Ji = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), Yi = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function Xi(e, t) {
	let n = Ji(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = Ii(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute("skullet-rect", ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${fr};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, Ki(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var Zi = 120, Qi = 72, $i = 3, ea = 60, ta = 150, na = 400, ra = 1.5, ia = 1e3, aa = 1e3, oa = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), sa = -1 / 0, ca = !1;
function la() {
	if (!(ca || typeof addEventListener > "u")) {
		ca = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => sa = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var ua = /* @__PURE__ */ new WeakMap();
function da(e, { served: t, refetch: n }) {
	la();
	let r = ua.get(e)?.since ?? performance.now();
	ua.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function fa(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function pa(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var ma = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function ha(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${ir}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var ga = (e, t) => Math.min(Math.max(e, 0), t), _a = -1 / 0;
function va(e, t, n, r, i) {
	let a = performance.now();
	a - _a > ta && (_a = a);
	let o = a - _a, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of fa(e)) {
		let n = pa(t, e), r = c.get(n);
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
		return t === null ? null : ga(t, ia) + Math.max(r.delay ?? 0, 0);
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
			let t = [...c.values()].find((t) => ma(t.rect, e));
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
function ya(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) oa.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function ba(e, t, n, r = () => {}) {
	let i = ua.get(t);
	ua.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - sa < na,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: fa(e).length
			})
		};
	}
	let o = ga(a.duration ?? 200, aa);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, ia)
	}, !o) return { kind: "instant" };
	let s = ya(a.enter, r);
	if (a.wipe) {
		let e = ha(t);
		if (e.width * e.height <= innerWidth * innerHeight * ra) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return va(e, t, a.order, {
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
var xa = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return ga(n * .8 + r * .2, 1) * 320;
}, Sa = (e) => e.bottom > 0 && e.top < innerHeight, Ca = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return Sa(e) ? 0 : null;
	if (!Sa(t)) return null;
	let i = ga(t.top / innerHeight, 1) * 320;
	return Math.max(i - r, 0) + (n ? ea : 0);
}, wa = { duration: 0 }, Ta = { order: "together" }, Ea = { order: xa }, Da = (e) => e.input || e.waited < 150 ? wa : e.refetch ? {
	order: "together",
	duration: Zi
} : null, Oa = (e) => e.height < Qi || e.pieces <= $i ? Ta : { order: Ca }, ka = {
	hold: 150,
	choose: (e) => Da(e) ?? Oa(e)
}, Aa = new Set(vr), ja = "script, noscript, template, base, meta, link", Ma = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), Na = /* @__PURE__ */ new Set([
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
	ar
]), Pa = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function Fa(e, t) {
	let n = Pa(t.data);
	t.data = n;
	let r = e.parentElement, i = qr();
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
function Ia(e) {
	for (let t of e.querySelectorAll(ja)) t.remove();
	for (let t of e.querySelectorAll("*")) if (Ma.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || Na.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function La(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (Aa.has(e.localName) || Ma.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) Fa(e, t);
	return Ia(n), n.innerHTML;
}
function Ra(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, Ia(t.content), t.content;
}
var za = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${za(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), Ba = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function Va(e) {
	let t = za(e, 2);
	return t ? `${location.pathname}|${Ba(t)}` : null;
}
var Ha = !1;
try {
	Ha = !1;
} catch {
	Ha = !1;
}
var Ua = Ha, Wa = /* @__PURE__ */ new Set();
function Ga(e, t) {
	!Ua || Wa.has(e) || (Wa.add(e), console.warn(`[skullet] ${t}`));
}
var Ka = /^(https?:|\/|data:|blob:)/;
function qa(e) {
	return typeof e == "string" ? Ka.test(e) ? "" : Pa(e) : Array.isArray(e) ? e.map(qa) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, qa(t)])) : e;
}
var Ja = "skullet:shapes", Ya = 2, Xa = 50, Za = 2e4, Qa = /* @__PURE__ */ new Map(), $a = /* @__PURE__ */ new Map();
function eo(e, t) {
	return $a.has(e) || $a.set(e, /* @__PURE__ */ new Set()), $a.get(e).add(t), () => $a.get(e)?.delete(t);
}
function to(e) {
	for (let t of $a.get(e) ?? []) t();
}
function no() {
	try {
		let e = JSON.parse(localStorage.getItem(Ja) ?? "null");
		return e?.v === Ya ? e.shapes : {};
	} catch {
		return {};
	}
}
function ro(e) {
	try {
		localStorage.setItem(Ja, JSON.stringify({
			v: Ya,
			shapes: e
		}));
	} catch {}
}
function io(e, t) {
	Qa.set(e, La(t, !1));
	let n = La(t, !0);
	if (n.length > Za) return;
	let r = no();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - Xa)) delete r[e];
	ro(r);
}
function ao(e) {
	return Qa.get(e) ?? no()[e] ?? null;
}
var oo = [
	100,
	90,
	60
].map((e) => `<div ${sr} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), so = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${Zn}]`)), co = /* @__PURE__ */ new WeakMap();
function lo(e) {
	if (!e) return;
	let t = co.get(e);
	return co.delete(e), t;
}
function uo(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var fo = (e) => !!e.firstElementChild || !!e.textContent?.trim(), po = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, wr(), e[cr] = !0, e.setAttribute(Zn, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = uo(e, Qn), this.snapshot = uo(e, $n), this.layer = uo(e, er), this.hadContent = fo(this.ghost);
		let n = e.closest(`[${Yn}]`);
		n && da(n, {
			served: so.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[lr]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
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
		this.root.closest(`[${ir}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = fo(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || so.has(this.root), r = !!this.ghost.querySelector(`[${or}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? Va(this.ghost);
			n && (to(n), t = ao(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(Ra(t)) : e === "fallback" ? (this.snapshot.innerHTML = oo, Ga(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(rr, e !== "ghost"), this.snapshot.toggleAttribute(rr, e === "ghost"), this.source = e, Rr(this.root.closest(`[${Yn}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : so.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		Xi(this.layer, wi(e, this.layer));
		let t = this.root.closest(`[${Yn}]`);
		t && co.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), Tr();
	}
}, mo = 250, ho = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? Va(e), this.untrack = this.key ? eo(this.key, () => this.save()) : () => {}, (Ua || Ir(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
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
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), mo);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && io(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${Yn}]`), o = lo(a);
		if (!o) return;
		o.guessed && n && !r && e != null && Ga(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(qa(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (zr(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? Ga(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : Ga(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, go = () => {}, _o = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, vo = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !_o(e));
function yo(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(go, go), new Promise((e) => setTimeout(e, hr))]);
}
var bo = 360, xo = 2, So = 600, Co = 40, wo = Co / Vi, To = 320, Eo = 120, Do = .45, Oo = (e) => e.left + e.top * Bi, ko = (e) => e.width + e.height * Bi, Ao = (e, t) => Oo(t) - wo + (ko(t) + 2 * wo) * e, jo = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function Mo(e) {
	let t = e.querySelector(`:scope > [${ir}] [${er}]`), n = t && qi(t);
	if (!n) return null;
	let r = ha(e);
	if (r.width * r.height > innerWidth * innerHeight * ra) return null;
	let i = Oo(r), a = i + ko(r), o = performance.now(), s = o - jo.start;
	s <= ta && (i - jo.origin) / jo.speed >= s && (a - jo.origin) / jo.speed - s <= So || (jo = {
		start: o,
		origin: i,
		speed: Math.max(xo / n, (a - i) / bo)
	});
	let { start: c, origin: l, speed: u } = jo;
	return {
		delay: (i - wo - l) / u - (o - c),
		duration: (a - i + 2 * wo) / u
	};
}
var No = (e) => (t, { rect: n, reveal: r }) => {
	let i = (Ao(t, r) - Oo(n)) * Vi;
	return `linear-gradient(${Hi}, ${Array.from({ length: Q + 1 }, (t, n) => {
		let r = e ? 1 - Wi(n / Q) : Wi(n / Q), a = -Co + 2 * Co * n / Q;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, Po = "http://www.w3.org/2000/svg", Fo = null, Io = 0;
function Lo() {
	return Fo?.isConnected || (Fo = document.createElementNS(Po, "svg"), Fo.setAttribute("aria-hidden", "true"), Fo.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(Fo)), Fo;
}
var Ro = (e, t) => {
	let n = document.createElementNS(Po, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, zo = {
	mask: No(!0),
	out: No(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (Oi()) return;
		let i = Oo(t), a = ko(t), o = To / 2 / Vi, s = () => Ao(r(), n) - i - Eo / Vi;
		if (s() - o > a) return;
		let c = 2 * o + t.height * Bi, l = c / 2, u = t.height / 2, d = To / 2 * Vi, f = To / 2 * Bi * Vi, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= Q; e++) {
			let t = e / Q;
			h.addColorStop(t, `rgb(255 255 255 / ${Wi(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++Io}`, _ = Ro("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = Ro("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(Ro(`feFunc${e}`, {
			type: "linear",
			slope: 1 - Do,
			intercept: Do
		}));
		let y = Ro("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, Ro("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), Ro("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), Lo().append(_), e.style.filter = `url(#${g})`;
		let b = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * Bi) / t.width).toFixed(4)), requestAnimationFrame(b));
		};
		b();
	}
}, Bo = {
	together: Ta,
	sequence: Ea,
	smart: ka,
	sweep: {
		hold: 150,
		choose: (e) => {
			let t = Da(e);
			if (t) return t;
			let n = Mo(e.reveal);
			return n ? {
				wipe: zo,
				...n
			} : Oa(e);
		}
	}
}, Vo = (e = "smart") => typeof e == "string" ? Bo[e] : e, Ho = () => {}, Uo = (e) => e.finished.then(Ho, Ho), Wo = /* @__PURE__ */ new WeakMap();
function Go(e, t = 0, n = 200, r = 0, i) {
	return Di() ? Promise.resolve() : Uo(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var Ko = (e) => !!e.querySelector(`[${er}], [${Qn}], :scope > [${or}]`), qo = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, Jo = /* @__PURE__ */ new WeakMap();
function Yo(e) {
	for (let t of Jo.get(e) ?? []) t.remove();
	Jo.delete(e);
}
function Xo(e, t) {
	let n = vo(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && Ko(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${ir}] [${er}]`)].flatMap(Yi), a = Jo.get(t) ?? /* @__PURE__ */ new Set();
			Jo.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => qo(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute(tr, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: fr,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), Ki(c), yo(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", Go(e), Di()) return c.remove();
						Uo(c.animate([{ opacity: 1 }, { opacity: 0 }], {
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
function Zo(e, t) {
	return Di() ? Promise.resolve() : Promise.all(fa(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return Go(e, n, t.duration, 0, t.enter);
	})).then(Ho);
}
function Qo(e) {
	for (let t of e.querySelectorAll(`:scope > [${ir}]`)) {
		for (let e of ki(t)) e.finish();
		t.style.opacity = "0";
	}
}
function $o(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${ir}]`)) if (!Ko(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of ki(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function es(e, t = "smart", { initial: n = !1 } = {}) {
	let r = ts.get(e);
	return r || (r = ns(e, t, n), ts.set(e, r)), r;
}
var ts = /* @__PURE__ */ new WeakMap();
function ns(e, t, n) {
	let r = e.parentElement, i = Vo(t);
	if (Ko(e)) {
		r && Yo(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && Wo.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : Go(e, t)) : (r && Wo.delete(r), n ? Promise.resolve() : Go(e));
	}
	if (n || !r) return Promise.resolve();
	let a = $o(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return Wo.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), Go(e, 0, t, a);
	}
	Xo(e, r);
	let o = ba(e, r, i, (e) => Ga(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return Wo.set(r, o), o.kind === "instant" ? (Qo(r), Promise.resolve()) : o.kind === "sequence" ? Zo(e, o) : o.kind === "wipe" ? hs(e, o, !0) : Go(e, o.delay, o.duration, 0, o.enter);
}
function rs(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function is(e, t = rs(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(ir, ""), t;
}
var as = /* @__PURE__ */ new WeakMap();
function os(e, t) {
	let n = e.querySelector(`:scope > [${Xn}]:not([${ir}])`);
	if (!n) return;
	let r = as.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && ss(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: mr,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	as.set(e, u), Uo(l).then(() => {
		as.get(e) === u && ss(e, u);
	});
}
function ss(e, { overflow: t, boxSizing: n }) {
	as.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function cs(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of ki(e)) t.cancel();
	ms(e), e.style.filter = "";
	let i = e.parentElement;
	i && !Ko(e) && Yo(i);
	let a = is(e, t), o = (t, n) => Ei() ? Uo(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && Wo.get(i), n = Di() || t?.kind === "instant";
		if (i && !n && os(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && Ko(e) ? ls(e, t) : t?.kind === "wipe" && Ko(e) ? hs(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function ls(e, t) {
	for (let t of e.querySelectorAll(`[${Qn}], [${$n}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${Qn}] [${or}]`)].filter((e) => !e.parentElement?.closest(`[${or}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${er}]`)].flatMap(Yi), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => Uo(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(Ho);
}
var us = 100, ds = /* @__PURE__ */ new WeakMap();
function fs(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function ps(e, t) {
	fs(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function ms(e) {
	ds.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function hs(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? fs(e, i(t, r)) : a ? fs(e, a(t, r)) : ps(e, i(t, r));
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
			if (e - i > us && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), ds.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + us);
		ds.set(e, l), c();
	}).then((t) => {
		if (ms(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? Go(e, 0, r, t) : Uo(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var $ = vt(), gs = X.createContext({}), _s = X.createContext(null), vs = () => X.useContext(gs), ys = () => X.useContext(_s), bs = () => vs().reveal;
function xs({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = Ar({
		theme: r,
		mode: i,
		text: a
	}), [c] = X.useState(() => ({ sent: !1 }));
	return X.useEffect(() => {
		n !== void 0 && Lr(n);
	}, [n]), (0, $.jsx)(gs.Provider, {
		value: t,
		children: (0, $.jsxs)(_s.Provider, {
			value: c,
			children: [s && (0, $.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var Ss = typeof window > "u" ? X.useEffect : X.useLayoutEffect, Cs = () => X.useInsertionEffect(() => (wr(), Tr), []), ws = Number("19.3.1".split(".")[0]) >= 19, Ts = () => {
	let { nonce: e } = vs();
	return ws ? (0, $.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: br
	}) : null;
}, Es = ws ? { inert: !0 } : { inert: "" }, Ds = (e) => X.Children.map(e, (e) => {
	if (!X.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, $.jsx)("span", {
		[or]: "",
		children: (0, $.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? X.cloneElement(e, void 0, Ds(e.props.children)) : e;
}), Os = () => () => {}, ks = () => X.useSyncExternalStore(Os, () => !1, () => !0), As = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = X.useRef(null), { nonce: o } = vs(), s = ys(), c = ks(), l = Er;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), Ss(() => {
		if (!a.current) return;
		let e = new po(a.current, {
			id: t,
			exact: n,
			refetch: r
		});
		return () => e.destroy();
	}, [
		t,
		n,
		r
	]), (0, $.jsxs)($.Fragment, { children: [
		i && (0, $.jsx)("span", {
			"skullet-status": "",
			children: i
		}),
		(0, $.jsxs)("div", {
			ref: a,
			[Zn]: "",
			"aria-hidden": !0,
			...Es,
			children: [
				(0, $.jsx)("div", {
					[Qn]: "",
					children: Ds(e)
				}),
				(0, $.jsx)("div", { [$n]: "" }),
				(0, $.jsx)("div", { [er]: "" })
			]
		}),
		c && (0, $.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, js = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = X.useRef(null), l = bs();
	return Ss(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), es(c.current, l, { initial: !r }).then(s), o && (e.memory = new ho(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), Ss(() => {
		!i || !c.current || cs(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, $.jsx)("div", {
		ref: c,
		[Xn]: "",
		children: e
	});
}, Ms = class extends X.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = rs(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Ns(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	Cs();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = X.useRef(null);
	Ss(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, $.jsx)("div", {
			[or]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, $.jsx)(As, {
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
	}), [x, ee] = X.useState([]), S = X.useRef(/* @__PURE__ */ new Map()).current, C = X.useRef(_);
	if (Ss(() => {
		C.current = _;
	}), y.key !== g) {
		let e = {
			id: y.id,
			node: C.current
		};
		ee((t) => t.some((t) => t.id === e.id) ? t : [...t, e]), b({
			id: y.id + 1,
			key: g,
			from: y.key
		});
	}
	let te = X.useRef(e.onReveal);
	Ss(() => {
		te.current = e.onReveal;
	});
	let w = y.key === "content" && y.from === "skeleton" ? () => te.current?.() : void 0, ne = (e) => ee((t) => t.filter((t) => t.id !== e)), T = [...x.map((e) => (0, $.jsx)(js, {
		id: e.id,
		registry: S,
		enter: !1,
		exiting: !0,
		onExited: () => ne(e.id),
		children: e.node
	}, e.id)), (0, $.jsx)(js, {
		id: y.id,
		registry: S,
		enter: y.id > 0,
		exiting: !1,
		onExited: () => {},
		memory: v,
		onEntered: w,
		children: _
	}, y.id)];
	return (0, $.jsxs)("div", {
		[Yn]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, $.jsx)(Ts, {}), (0, $.jsx)(Ms, {
			exiting: x.map((e) => e.id),
			registry: S,
			children: T
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var Ps = {
	creators: ["关注创作者", "位"],
	enabled: ["启用来源", ""],
	failed: ["检查失败", "个来源"],
	updates: ["未看更新", "条"],
	subscriptions: ["JAV 订阅", "位"],
	releases: ["未看新作", "条"]
}, Fs = {
	duration: 0,
	delay: 0,
	hold: 150
}, Is;
function Ls() {
	return Is || (Is = new CSSStyleSheet(), Is.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), Is;
}
function Rs({ figure: e, unit: t }) {
	return /* @__PURE__ */ Y("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ J("span", { children: e.toLocaleString() }), /* @__PURE__ */ J("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function zs({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = Ps[e], o = (0, X.useRef)(null);
	return (0, X.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = Ls();
		for (let n of e) n.adoptedStyleSheets = [...n.adoptedStyleSheets, t];
		return () => {
			for (let n of e) n.adoptedStyleSheets = n.adoptedStyleSheets.filter((e) => e !== t);
		};
	}, [t, r]), /* @__PURE__ */ Y("div", {
		ref: o,
		"data-measured-reading": e,
		className: we({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ J("span", {
			className: "text-body-medium text-text-secondary",
			children: i
		}), t === void 0 && r ? /* @__PURE__ */ J("b", {
			"data-follow-reading": "",
			className: "text-title-1-medium text-text-primary",
			children: "未取得"
		}) : /* @__PURE__ */ J(xs, {
			reveal: Fs,
			children: /* @__PURE__ */ J(Ns, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: `正在读取${i}`,
				children: (t) => /* @__PURE__ */ J(Rs, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Bs = (e) => E.some(([t]) => t === e);
function Vs(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, X.useState)(Bs(e.tab) ? e.tab : "list"), [d, f] = (0, X.useState)(Math.max(1, Math.floor(e.page) || 1)), [p, m] = (0, X.useState)(() => bt(e.sort, e.dir).sort), [h, g] = (0, X.useState)(() => bt(e.sort, e.dir).dir), [_, v] = (0, X.useState)(tt(e.layout) ? e.layout : "default"), [y, b] = (0, X.useState)(ct(e.pageSize)), [x, ee] = (0, X.useState)(/* @__PURE__ */ new Set()), [S, w] = (0, X.useState)(/* @__PURE__ */ new Set()), D = It({
		queryKey: T,
		queryFn: ({ signal: e }) => Ge(e)
	}), O = It({
		queryKey: ne,
		queryFn: ({ signal: e }) => q(e)
	}), k = It({
		queryKey: te,
		queryFn: ({ signal: e }) => We(e)
	}), A = D.data || { sources: [] }, j = O.data || {
		root: "",
		providers: []
	}, M = A.sources;
	(0, X.useEffect)(() => {
		ee((e) => {
			let t = nt(e, M);
			return t.size === e.size ? e : t;
		});
	}, [M]);
	let N = (e) => {
		let n = e.sort ?? p, r = e.dir ?? h;
		t({
			tab: e.tab ?? c,
			page: e.page ?? d,
			sort: n === "checked" ? "" : n,
			dir: r === z[n] ? "" : r
		});
	}, P = Qe(M), F = M.filter(et).length, I = M.filter((e) => e.enabled).length, L = (j.providers || []).filter((e) => e.requirement === "required" && !Ie(e)).length, re = new Set((k.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ Y(zt, { children: [
		a ? /* @__PURE__ */ J(R, {
			tone: "warning",
			title: "本机只能浏览",
			extra: s ? /* @__PURE__ */ J("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ J(C, {
					href: s,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ Y("div", {
			className: ae,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ J(zs, {
					field: "creators",
					figure: D.data ? P.length : void 0,
					failed: D.isError
				}),
				/* @__PURE__ */ J(zs, {
					field: "enabled",
					figure: D.data ? I : void 0,
					total: M.length,
					failed: D.isError
				}),
				/* @__PURE__ */ J(zs, {
					field: "failed",
					figure: D.data ? F : void 0,
					failed: D.isError
				}),
				/* @__PURE__ */ J(zs, {
					field: "updates",
					figure: D.data ? A.counts?.new || 0 : void 0,
					failed: D.isError
				}),
				/* @__PURE__ */ J(zs, {
					field: "subscriptions",
					figure: k.data ? re : void 0,
					failed: k.isError
				}),
				/* @__PURE__ */ J(zs, {
					field: "releases",
					figure: k.data ? k.data.unread || 0 : void 0,
					failed: k.isError
				})
			]
		}),
		/* @__PURE__ */ Y("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ J("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ J(le, {
						group: "follow",
						label: "关注管理区域",
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: E.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							ee(/* @__PURE__ */ new Set()), w(/* @__PURE__ */ new Set()), l(e), N({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ Y("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ J(Rn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), N({ tab: "add" });
						},
						selection: {
							ids: S,
							onChange: w,
							onActivate: () => ee(/* @__PURE__ */ new Set())
						}
					}), D.data ? /* @__PURE__ */ J(Jn, {
						data: A,
						sort: p,
						dir: h,
						page: d,
						layout: _,
						pageSize: y,
						selected: x,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), N({ tab: "add" });
						},
						onSort: (e, t) => {
							m(e), g(t), f(1), N({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							f(e), N({ page: e });
						},
						onSelected: (e) => {
							ee(e), w(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							v(e), f(1), n({ layout: e }), N({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), f(1), n({ pageSize: e }), N({ page: 1 });
						}
					}) : D.isError ? /* @__PURE__ */ J(R, {
						tone: "error",
						children: "关注列表未取得"
					}) : /* @__PURE__ */ J("div", {
						role: "status",
						"aria-label": "正在读取关注列表",
						"data-skeleton": "",
						className: "skeleton-sheen h-32 rounded-lg"
					})]
				}) : null,
				c === "add" ? /* @__PURE__ */ Y("div", {
					role: "tabpanel",
					id: "follow-panel-add",
					"aria-labelledby": "follow-tab-add",
					className: "flex flex-col gap-8",
					children: [
						O.data && D.data ? /* @__PURE__ */ J(sn, {
							data: A,
							credentials: j,
							readOnly: a,
							toast: r
						}) : O.isError || D.isError ? /* @__PURE__ */ J(R, {
							tone: "error",
							children: "关注或凭据状态未取得"
						}) : /* @__PURE__ */ J("div", {
							role: "status",
							"aria-label": "正在读取关注凭据",
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ J(fn, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								k.refetch(), l("list"), N({ tab: "list" });
							}
						}),
						D.data ? /* @__PURE__ */ J(Tn, {
							groups: A.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: A.alias_suggestions || [],
							sources: A.sources
						}) : null
					]
				}) : null,
				c === "tags" ? /* @__PURE__ */ J("div", {
					role: "tabpanel",
					id: "follow-panel-tags",
					"aria-labelledby": "follow-tab-tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ J(U, { scope: "online" })
				}) : null
			]
		}),
		/* @__PURE__ */ J("div", { children: /* @__PURE__ */ Y(u, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", L ? `（${L}）` : ""]
		}) })
	] });
}
export { Vs as FollowManagePage };

//# debugId=fd2bc05b-5d42-4d35-8b34-f0145cb910a8