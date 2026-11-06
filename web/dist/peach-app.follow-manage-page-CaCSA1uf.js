(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d73059a-d68c-48be-a9be-0e9c2ebba927", e._sentryDebugIdIdentifier = "sentry-dbid-7d73059a-d68c-48be-a9be-0e9c2ebba927");
	} catch {}
})();
import { createPaginatedRowModel as e, createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as u, $b4f18e3395fe64d7$export$3e41faf802a29e71 as d, $b4f18e3395fe64d7$export$b2539bed5023c21c as f, $ea3928288112382f$export$439d29a4e110a164 as p, $l as m, Button as h, ButtonLink as g, Bx as _, COLUMN_SORT as v, Checkbox as y, ChevronSortDown as ee, Chip as b, CollapseChevron as x, CollapseRegion as S, DataTableFooter as te, DataTableFrame as C, DataTableSort as w, EmptyFocusButton as T, EmptyState as ne, ErrorText as E, ExternalLink as D, FEEDS_KEY as O, FOLLOW_CHECK_KEY as k, FOLLOW_CREDENTIALS_KEY as A, FOLLOW_MANAGE_KEY as j, FOLLOW_MANAGE_NAV as M, FOLLOW_RESOLVE_KEY as N, FieldLabel as P, Help as F, Input as I, LAYOUTS as re, LoadingDots as L, M6 as ie, MENU_ITEM as R, MENU_ITEM_INTERACTIVE as z, MENU_POPOVER_SURFACE as B, ModalFrame as V, Note as H, P7 as U, SORT_DEFAULT_DIR as ae, SORT_OPTIONS as oe, STAT_STRIP_SIX as W, Select as se, SelectItem as ce, SelectionDock as le, SelectionPopover as G, SiteLabel as ue, SortDirectionIcon as de, Switch as fe, Table as pe, TableColumnControls as me, TableColumnResizer as he, TableSelectionHeader as ge, TagManager as _e, TaskProgress as ve, Un as ye, Wt as be, Xf as xe, __toESM as Se, addAlias as Ce, addSource as we, authorGroups as Te, authorName as Ee, avatarInner as De, busyProps as K, cardClass as Oe, checkEvidenceGap as ke, checkFailures as Ae, checkFeeds as je, checkReceipt as Me, checkSummary as Ne, checkedText as Pe, clickedBlank as Fe, columnVisibilityFeature as q, composingKey as Ie, confirmModal as Le, createColumnHelper as Re, credentialDone as ze, cx as Be, dZ as Ve, dropSources as He, du as Ue, errorHeadline as We, errorMessage as J, feedIntervalText as Y, fetchCheckJob as Ge, fetchCredentials as Ke, fetchFeeds as X, fetchFollow as qe, fetchPending as Je, fetchResolveJob as Ye, fetchSuggestions as Xe, flexRender as Ze, followFeedByName as Qe, followFeedEntity as $e, followSuggestKey as et, groupByAuthor as tt, isBroken as nt, isLayout as rt, keepSelected as it, l7 as at, localTime as ot, lookupFeedActor as st, mapLimit as ct, markItem as lt, pageSizeOf as ut, pageWindow as dt, patchSource as ft, pv as pt, queryClient as mt, reloadFollowManage as ht, removeAlias as gt, removeFeed as _t, removeSource as vt, renameAliasGroup as yt, require_jsx_runtime as bt, require_react as xt, resolveFollowSort as St, rowPaginationFeature as Ct, rowSelectionFeature as wt, rowSortingFeature as Tt, selectionState as Et, setFeedEnabled as Dt, setSourceEnabled as Ot, sortLabel as kt, startCheck as At, startResolve as jt, tableFeatures as Mt, tableRows as Nt, toggleGroup as Pt, useAction as Ft, useBackgroundJob as It, useMutation as Z, useQuery as Lt, useTable as Rt, useTablePreferences as zt } from "./peach-app.js";
import { Page as Bt } from "./peach-app.page-QAncjzM1.js";
import { LEGACY_AVATAR_IMG as Vt } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as Ht } from "./peach-app.pill-aria-tab-list-BMY1ZEv1.js";
import { AuthorAvatar as Ut, ErrorLine as Wt, SourceIcon as Gt, SourceLink as Kt, StatusBadge as qt } from "./peach-app.source-view-DalWfDkm.js";
// src/react/follow-manage/add-source.tsx
var Q = /* @__PURE__ */ Se(xt(), 1), $ = bt(), Jt = Be(R, z, "text-body-2-medium"), Yt = "粘贴来源链接，或输入创作者名、id…", Xt = "添加创作者关注", Zt = "查找中（首次按名字查要下载创作者索引，可能几十秒）", Qt = "识别中", $t = "站内没有查到来源", en = "/settings/subscriptions", tn = (e, t) => `${e}:${t.url}`;
function nn({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
	return (0, Q.useEffect)(() => {
		t.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [t, r]), /* @__PURE__ */ (0, $.jsxs)(i, {
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
		className: Be(B, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ (0, $.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, $.jsx)(L, { label: "正在查找建议" })
		}) : null, n.map((e, t) => /* @__PURE__ */ (0, $.jsxs)(Q.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ (0, $.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, $.jsxs)("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? Be(Jt, "bg-background-secondary-default") : Jt,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, $.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, $.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function rn({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ (0, $.jsx)(G, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: m,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.provider }), e.provider_label]
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
				href: en
			}
		]
	});
}
function an({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, $.jsx)(H, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Oe({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = tn(t, e);
				return /* @__PURE__ */ (0, $.jsx)(y, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.provider }),
							/* @__PURE__ */ (0, $.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, $.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, $.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "已经关注" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, $.jsx)(F, { children: $t }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, $.jsx)(D, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, $.jsx)(F, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function on({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(!1), [c, l] = (0, Q.useState)(""), [u, d] = (0, Q.useState)(""), [f, p] = (0, Q.useState)(!1), [m, g] = (0, Q.useState)(null), [_, v] = (0, Q.useState)(-1), y = (0, Q.useRef)(null), ee = (0, Q.useRef)(null), [b, x] = (0, Q.useState)(/* @__PURE__ */ new Set()), [S, te] = (0, Q.useState)(/* @__PURE__ */ new Set()), [C, w] = (0, Q.useState)(""), [T, ne] = (0, Q.useState)(0);
	(0, Q.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let E = Lt({
		queryKey: et(u),
		queryFn: ({ signal: e }) => Xe(u, e),
		enabled: u.length > 0 && f && !o && m !== i
	}), D = (0, Q.useMemo)(() => (E.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [E.data]), { job: O, running: k, outcome: A, start: j, dismiss: M } = It({
		queryKey: N,
		queryFn: ({ signal: e }) => Ye(e),
		start: (e) => jt([e]),
		onStarted: () => te(/* @__PURE__ */ new Set()),
		onError: (e) => w(J(e)),
		onFinish: (e) => {
			e.status === "failed" && w(e.error || "查找失败");
		}
	}), F = (e) => {
		let t = e.trim();
		!t || n || o || k || j.isPending || (w(""), v(-1), l(t), a(t), d(""), g(t), j.mutate(t));
	}, re = E.isFetching, L = f && !o && m !== i && (D.length > 0 || re), ie = () => {
		v(-1), g(i);
	}, R = (e) => {
		if (!(o || Ie(e.nativeEvent))) {
			if (e.key === "Escape" && L) ie();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!D.length) return;
				if (e.preventDefault(), !L) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? D.length - 1 : n >= D.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), F(D[_]?.value || i));
		}
	}, z = A?.results || [], B = z.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !b.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: tn(t, e)
	})).filter((e) => !S.has(e.key))), V = Z({
		mutationFn: async (e) => {
			let t = [], n = [];
			ne(0);
			for (let r of e) {
				try {
					let e = await we(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${J(e)}`);
				}
				ne((e) => e + 1);
			}
			if (n.length) try {
				await At(n);
			} catch (e) {
				t.push(J(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			ht(), e.failures.length ? w(e.failures.join("；")) : (w(""), M(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => w(J(e))
	}), U = e.suggestions || [], ae = !c.includes("/");
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": Xt,
		className: Oe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Xt
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						ref: y,
						className: "min-w-64 grow",
						onFocus: () => p(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !ee.current?.contains(t) && p(!1);
						},
						children: [/* @__PURE__ */ (0, $.jsx)(I, {
							"aria-label": "来源链接、名字或 id",
							placeholder: Yt,
							value: i,
							leadingIcon: pt,
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
						}), L ? /* @__PURE__ */ (0, $.jsx)(nn, {
							field: y,
							menu: ee,
							options: D,
							active: _,
							busy: re,
							onPick: F,
							onClose: ie
						}) : null]
					}),
					/* @__PURE__ */ (0, $.jsx)(rn, {
						credentials: t,
						hidden: b,
						onHidden: x
					}),
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "primary",
						disabled: n || !i.trim(),
						...K(k || j.isPending),
						onClick: () => F(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [k || j.isPending ? /* @__PURE__ */ (0, $.jsx)(ve, {
					embedded: !0,
					label: O?.message || (O?.total ? `查找中：${O.checked || 0}/${O.total}` : ae ? Zt : Qt),
					value: O?.checked,
					total: O?.total
				}) : null, C ? /* @__PURE__ */ (0, $.jsx)(H, {
					tone: "error",
					title: "这一次没有完成",
					children: C
				}) : null]
			}),
			z.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, $.jsx)(P, { children: "查找结果" }),
					z.map((e, t) => /* @__PURE__ */ (0, $.jsx)(an, {
						row: e,
						at: t,
						hidden: b,
						unpicked: S,
						onPick: (e, t) => {
							let n = new Set(S);
							t ? n.delete(e) : n.add(e), te(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, $.jsx)(h, {
								variant: "secondary",
								size: "small",
								onClick: () => M(),
								children: "关闭"
							}),
							/* @__PURE__ */ (0, $.jsx)(h, {
								variant: "primary",
								size: "small",
								disabled: n || !B.length,
								...K(V.isPending),
								onClick: () => V.mutate(B),
								children: `添加选中（${B.length}）`
							}),
							V.isPending ? /* @__PURE__ */ (0, $.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${T}/${B.length}`
							}) : null
						]
					})
				]
			}) : null,
			U.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "猜你喜欢"
				}), U.map((e) => /* @__PURE__ */ (0, $.jsx)(h, {
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
var sn = "输入女优名，到 JavDB 找她的演员页", cn = "添加 JAV 订阅";
function ln(e, t) {
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
function un({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)(y, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ (0, $.jsx)(b, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, $.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `已在「${e.held_by.name}」名下`
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, $.jsx)(D, {
			href: e.url,
			children: e.id
		})]
	});
}
function dn({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, Q.useState)(""), [a, o] = (0, Q.useState)(null), [s, c] = (0, Q.useState)(/* @__PURE__ */ new Set()), l = Ft(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => st(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !Ie(e.nativeEvent) && (e.preventDefault(), u());
	}, f = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, p = () => {
		a && l.run("follow", (e) => Qe(a.q, [...s], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), i(""), f(), n();
		});
	}, m = () => {
		let e = a?.known;
		e && l.run("known", (t) => $e(e.id, t), () => {
			t(`已订阅「${e.name}」的新作`), i(""), f(), n();
		});
	}, g = a ? ln(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": cn,
		className: Oe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: cn
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, $.jsx)(I, {
						"aria-label": "女优名",
						placeholder: sn,
						value: r,
						leadingIcon: pt,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ (0, $.jsx)(h, {
					variant: "primary",
					disabled: e || !r.trim(),
					...K(l.busy === "lookup"),
					onClick: u,
					children: "查找"
				})]
			}),
			l.error ? /* @__PURE__ */ (0, $.jsx)(H, {
				tone: "error",
				title: "这一次没有完成",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, $.jsx)(H, {
						tone: "warning",
						title: "JavDB 这一次没有搜成",
						children: a.unavailable
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(P, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, $.jsx)(un, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, $.jsx)(F, { children: a.unavailable ? "这一次没有拿到演员卡。" : "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ (0, $.jsx)(F, {
						role: "status",
						children: s.size ? g.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					_ ? /* @__PURE__ */ (0, $.jsx)(F, {
						role: "status",
						children: _.following ? `数据库里的「${_.name}」已经在订阅新作。` : `数据库里的「${_.name}」已有 JavDB 或 DMM 编号，可以直接订阅。`
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, $.jsx)(h, {
								variant: "secondary",
								size: "small",
								onClick: f,
								children: "关闭"
							}),
							a.candidates.length ? /* @__PURE__ */ (0, $.jsx)(h, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...K(l.busy === "follow"),
								onClick: p,
								children: `添加订阅（${s.size}）`
							}) : null,
							_ && !_.following ? /* @__PURE__ */ (0, $.jsx)(h, {
								variant: "primary",
								size: "small",
								disabled: e,
								...K(l.busy === "known"),
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
function fn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, $.jsx)(V, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ (0, $.jsx)(pn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function pn({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, Q.useState)(e.canonical_name), o = Ft();
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => yt(e.canonical_key, i.trim(), t), () => {
				ht(), n(`已把统一名称改为 ${i.trim()}`), t();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, $.jsx)(r, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "修改统一名称"
			}),
			/* @__PURE__ */ (0, $.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["当前名称：", e.canonical_name]
			}),
			/* @__PURE__ */ (0, $.jsx)(I, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(P, { children: "选择已有别名" }), /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "原名称保留为别名，关联档案和作品署名会同步更新。"
			}),
			o.error ? /* @__PURE__ */ (0, $.jsx)(H, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(h, {
					variant: "secondary",
					onClick: t,
					children: "取消"
				}), /* @__PURE__ */ (0, $.jsx)(h, {
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
var mn = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, hn = Mt({
	rowSelectionFeature: wt,
	rowSortingFeature: Tt,
	rowPaginationFeature: Ct,
	columnVisibilityFeature: q,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), gn = hn, _n = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, vn = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, yn = [
	_n,
	vn,
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
], bn = [
	_n,
	vn,
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
], xn = (e) => e.alias;
function Sn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Cn({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)(Ut, {
			group: Sn(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, $.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function wn({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = zt("alias-suggestions", yn), f = zt("alias-saved", bn), [p, m] = (0, Q.useState)(null), [g, _] = (0, Q.useState)({}), [v, b] = (0, Q.useState)({}), x = n(() => _({})), S = n(() => b({})), [D, O] = (0, Q.useState)([]), [k, A] = (0, Q.useState)([]), [j, M] = (0, Q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [N, F] = (0, Q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), re = {
		...j,
		pageIndex: Math.min(j.pageIndex, Math.max(0, Math.ceil(t.length / j.pageSize) - 1))
	}, L = {
		...N,
		pageIndex: Math.min(N.pageIndex, Math.max(0, Math.ceil(e.length / N.pageSize) - 1))
	}, [ie, R] = (0, Q.useState)(""), [z, B] = (0, Q.useState)(""), [V, H] = (0, Q.useState)(""), ae = Z({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await Ce(n.canonical, n.alias);
				} catch (n) {
					throw t && ht(), Error(`${J(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			R(""), _({}), ht(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => R(J(e))
	}), oe = Z({
		mutationFn: (e) => Ce(e.canonical, e.alias),
		onSuccess: () => {
			R(""), B(""), H(""), ht(), u("已保存创作者别名");
		},
		onError: (e) => R(J(e))
	}), W = Z({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await gt(e), n += 1;
			} catch (e) {
				throw Error(`${J(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				ht();
			}
		},
		onSuccess: () => {
			R(""), b({}), u("已移除创作者别名");
		},
		onError: (e) => R(J(e))
	}), se = (e, t) => {
		e.length && Le({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => ae.mutateAsync(e)
		});
	}, ce = (e) => void Le({
		title: "移除创作者别名",
		body: mn(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => W.mutateAsync(e)
	}), G = (0, Q.useRef)({
		sources: r,
		readOnly: i,
		merging: ae.isPending,
		removing: W.isPending,
		merge: se,
		remove: ce,
		rename: m
	});
	G.current = {
		sources: r,
		readOnly: i,
		merging: ae.isPending,
		removing: W.isPending,
		merge: se,
		remove: ce,
		rename: m
	};
	let ue = (0, Q.useMemo)(() => {
		let e = Re();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, $.jsx)(ge, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(y, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(Cn, {
					sources: G.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "平台别名",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "依据",
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: G.current.readOnly,
					...K(G.current.merging),
					onClick: () => G.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), de = (0, Q.useMemo)(() => {
		let e = Re();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, $.jsx)(ge, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, $.jsx)(y, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(Cn, {
					sources: G.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "平台别名",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, $.jsx)(h, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: U,
							"aria-label": `移除别名 ${e.name}`,
							disabled: G.current.readOnly,
							...K(G.current.removing),
							onClick: () => G.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: ({ row: e }) => /* @__PURE__ */ (0, $.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: G.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => G.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), fe = Rt({
		features: hn,
		data: t,
		columns: ue,
		getRowId: xn,
		state: {
			rowSelection: g,
			sorting: D,
			pagination: re,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			x(), _(e);
		},
		onSortingChange: (e) => {
			O(e), M((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: M,
		enableRowSelection: !0
	}), _e = Rt({
		features: gn,
		data: e,
		columns: de,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: v,
			sorting: k,
			pagination: L,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			S(), b(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			A(e), F((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: F
	}), ve = fe.getSelectedRowModel().rows.map((e) => e.original), ye = _e.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), be = K(ae.isPending);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Oe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "创作者别名"
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(P, { children: "手动添加别名" }), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, $.jsx)(I, {
							"aria-label": "统一名称",
							placeholder: "在 Peach 中统一显示的名称",
							value: z,
							onChange: B,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, $.jsx)(I, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: V,
							onChange: H,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "primary",
							disabled: i || !z.trim() || !V.trim(),
							...K(oe.isPending),
							onClick: () => oe.mutate({
								canonical: z.trim(),
								alias: V.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			ie ? /* @__PURE__ */ (0, $.jsx)(E, { children: ie }) : null,
			t.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, $.jsx)(P, { children: "待合并" }), /* @__PURE__ */ (0, $.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} 组`
							})]
						}), /* @__PURE__ */ (0, $.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, $.jsx)(h, {
									variant: "primary",
									size: "small",
									disabled: i,
									...be,
									onClick: () => se(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ (0, $.jsx)(w, {
									label: "待合并创作者别名",
									sorting: D,
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
										O(e), M((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, $.jsx)(me, {
									preferences: d,
									label: "待合并创作者别名"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, $.jsxs)(le, {
						label: "待合并别名批量操作",
						visible: ve.length > 0,
						count: `已选 ${ve.length} 组`,
						children: [/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...be,
							onClick: () => se(ve, !1),
							children: `合并所选（${ve.length}）`
						}), /* @__PURE__ */ (0, $.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => _({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)(C, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => fe.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, $.jsxs)(pe, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: D[0] ? {
								column: D[0].id,
								direction: D[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => fe.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, $.jsxs)(l, { children: [fe.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, $.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Ze(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, $.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, $.jsx)(ee, {})
									}) : null]
								}), /* @__PURE__ */ (0, $.jsx)(he, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, $.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, $.jsx)(a, { children: fe.getRowModel().rows.map((e) => /* @__PURE__ */ (0, $.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, $.jsx)(c, { children: Ze(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, $.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, $.jsx)(te, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: re,
						onChange: M
					})
				]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, $.jsx)(P, { children: "已保存别名" }), /* @__PURE__ */ (0, $.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ (0, $.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, $.jsx)(w, {
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
									A(e), F((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, $.jsx)(me, {
								preferences: f,
								label: "已保存创作者别名"
							})]
						})]
					}),
					/* @__PURE__ */ (0, $.jsxs)(le, {
						label: "已保存别名批量操作",
						visible: ye.length > 0,
						count: `已选 ${ye.length} 个别名`,
						children: [/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...K(W.isPending),
							onClick: () => void Le({
								title: "移除所选创作者别名",
								body: `将移除以下 ${ye.length} 个别名，对应来源恢复为独立创作者组。`,
								items: ye,
								confirmLabel: "移除所选别名",
								onConfirm: () => W.mutateAsync(ye)
							}),
							children: `移除所选别名（${ye.length}）`
						}), /* @__PURE__ */ (0, $.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => b({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(C, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => _e.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, $.jsxs)(pe, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: k[0] ? {
								column: k[0].id,
								direction: k[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => _e.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, $.jsxs)(l, { children: [_e.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, $.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Ze(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, $.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, $.jsx)(ee, {})
									}) : null]
								}), /* @__PURE__ */ (0, $.jsx)(he, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, $.jsx)(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, $.jsx)(a, { children: _e.getRowModel().rows.map((e) => /* @__PURE__ */ (0, $.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, $.jsx)(c, { children: Ze(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, $.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, $.jsx)(te, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: L,
						onChange: F
					})] }) : /* @__PURE__ */ (0, $.jsx)(ne, {
						size: "compact",
						icon: xe,
						title: "还没有保存创作者别名",
						actions: i ? void 0 : /* @__PURE__ */ (0, $.jsx)(T, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(fn, {
				group: p,
				close: () => m(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Tn = Mt({
	rowPaginationFeature: Ct,
	rowSelectionFeature: wt,
	rowSortingFeature: Tt,
	columnVisibilityFeature: q,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), En = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, Dn = /* @__PURE__ */ new Set(["actions"]), On = Object.entries(En).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), kn = () => mt.invalidateQueries({
	queryKey: O,
	exact: !0
}), An = (e) => e.name || e.url;
function jn(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Mn({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, $.jsx)(b, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, $.jsx)(b, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ (0, $.jsx)(b, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ (0, $.jsx)(b, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function Nn({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Vt}`,
		dangerouslySetInnerHTML: { __html: De(An(e), t, null, "performer") }
	});
}
var Pn = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function Fn(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function In(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Le({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${An(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function Ln({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = Lt({
		queryKey: O,
		queryFn: ({ signal: e }) => X(e)
	}), u = Ft(), d = zt("jav-feeds", On), f = i.data, m = (0, Q.useMemo)(() => f?.sources ?? [], [f]), [g, v] = (0, Q.useState)(/* @__PURE__ */ new Set()), b = r?.ids ?? g, x = r?.onChange ?? v, [S, T] = (0, Q.useState)(1), [D, k] = (0, Q.useState)(20), [A, j] = (0, Q.useState)([]), M = dt(m.length, D, S);
	(0, Q.useEffect)(() => {
		T((e) => Math.min(e, M.pages));
	}, [M.pages]), (0, Q.useEffect)(() => {
		x((e) => {
			let t = new Set(m.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [m, x]);
	let N = Z({
		mutationFn: async (e) => {
			let t = await ct(e.ids, 4, async (t) => {
				e.action === "remove" ? await _t(t) : await Dt(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (x(/* @__PURE__ */ new Set()), kn(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				u.setError(`${n.length} 条没有写入：${e.ok ? "" : J(e.error)}`);
			}
		},
		onError: (e) => u.setError(J(e))
	}), P = (0, Q.useMemo)(() => Fn(m), [m]), I = (0, Q.useRef)({
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
		busy: u.busy,
		toggle: (e, t) => void u.run(`enabled-${e.id}`, (n) => Dt(e.id, t, n), () => void kn()),
		fetch: (e) => void u.run(`check-${e.id}`, (t) => je(t, [e.id]), () => void kn()),
		remove: (e) => void In([e], async () => {
			await _t(e.id), t(`已移除订阅源「${An(e)}」`), kn();
		})
	};
	let re = (0, Q.useMemo)(() => {
		let e = Re(), t = (e) => () => En[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, $.jsx)(ge, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(y, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${An(e.row.original)}`
				})
			}),
			e.accessor(An, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = Pn(e.row.original, I.current.shared);
					return /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, $.jsx)(Nn, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, $.jsx)("span", {
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
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: "打开来源页面",
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, $.jsx)(ue, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : jn(e.getValue()),
						label: jn(e.getValue())
					}), /* @__PURE__ */ (0, $.jsx)(be, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(Mn, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "whitespace-nowrap",
					children: Y(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? ot(e.row.original.last_fetched_at) : "还没拉过"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()} 条`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)(fe, {
							"aria-label": `启用 ${An(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: I.current.readOnly,
							onChange: (t) => I.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ve,
							"aria-label": `拉取 ${An(e.row.original)}`,
							disabled: I.current.readOnly,
							...K(I.current.busy === `check-${e.row.original.id}`),
							onClick: () => I.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ie,
							"aria-label": `移除 ${An(e.row.original)}`,
							disabled: I.current.readOnly,
							onClick: () => I.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), L = (0, Q.useMemo)(() => Object.fromEntries([...b].map((e) => [String(e), !0])), [b]), R = Rt({
		features: Tn,
		data: m,
		columns: re,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: L,
			sorting: A,
			pagination: {
				pageIndex: M.page - 1,
				pageSize: D
			},
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onSortingChange: (e) => {
			j(e), T(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(L) : e;
			x(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!f) return i.error ? /* @__PURE__ */ (0, $.jsx)(H, {
		tone: "error",
		title: "打不开订阅源",
		children: J(i.error)
	}) : /* @__PURE__ */ (0, $.jsx)(F, { children: "正在读订阅源。" });
	let z = () => void u.run("check", (e) => je(e), () => void kn()), B = (e) => {
		r?.onActivate(), x((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, V = m.filter((e) => b.has(e.id)), U = m.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-label": "JAV 订阅列表",
			className: Oe({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, $.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, $.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV 订阅源"
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${m.length.toLocaleString()} 个订阅源 · ${(Number(f.unread) || 0).toLocaleString()} 条未看`
						})]
					}), /* @__PURE__ */ (0, $.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(h, {
								onClick: z,
								disabled: e,
								...K(u.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ (0, $.jsx)(me, {
								preferences: d,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ (0, $.jsx)(w, {
								label: "JAV 订阅源",
								sorting: A,
								onChange: (e) => {
									j(e), T(1);
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
									label: En[e]
								}))
							})
						]
					})]
				}),
				U.length || u.error ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [U.length ? /* @__PURE__ */ (0, $.jsx)(H, {
						tone: "error",
						title: `${U.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ (0, $.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: U.map((e) => /* @__PURE__ */ (0, $.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${An(e)}：${We(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, u.error ? /* @__PURE__ */ (0, $.jsx)(E, { children: u.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, $.jsxs)(le, {
					visible: V.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${V.length} 条订阅源`,
					children: [
						/* @__PURE__ */ (0, $.jsx)(h, {
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
						/* @__PURE__ */ (0, $.jsx)(h, {
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
						/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "danger",
							size: "small",
							disabled: e,
							...K(N.isPending),
							onClick: () => void In(V, () => N.mutateAsync({
								ids: V.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => x(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				m.length ? /* @__PURE__ */ (0, $.jsx)(C, {
					follow: !0,
					preferences: d,
					onRowClick: (e) => B(Number(e)),
					children: /* @__PURE__ */ (0, $.jsxs)(pe, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: A[0] ? {
							column: A[0].id,
							direction: A[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => R.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, $.jsxs)(l, { children: [R.getHeaderGroups()[0].headers.map((e) => {
							let t = Ze(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, $.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [Dn.has(e.column.id) ? /* @__PURE__ */ (0, $.jsx)(p, { children: t }) : /* @__PURE__ */ (0, $.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, $.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, $.jsx)(ee, {})
									}) : null]
								}), /* @__PURE__ */ (0, $.jsx)(he, {
									preferences: d,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, $.jsx)(o, {
							id: "remaining-space",
							"aria-label": "行空白区域",
							"data-table-space": "",
							width: d.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, $.jsx)(a, { children: R.getRowModel().rows.map((e) => /* @__PURE__ */ (0, $.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, $.jsx)(c, { children: Ze(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, $.jsx)(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, $.jsx)(ne, {
					icon: _,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						onClick: n,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				m.length ? /* @__PURE__ */ (0, $.jsx)(te, {
					label: "JAV 订阅",
					total: M.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: M.page - 1,
						pageSize: D
					},
					onChange: (e) => {
						k(e.pageSize), T(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, $.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, $.jsx)("span", {
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
var Rn = Mt({
	rowPaginationFeature: Ct,
	rowSelectionFeature: wt,
	rowSortingFeature: Tt,
	columnVisibilityFeature: q,
	paginatedRowModel: e()
}), zn = (e) => (Number(e) || 0).toLocaleString(), Bn = Object.fromEntries(Object.entries(v).map(([e, t]) => [t, e])), Vn = 740;
function Hn() {
	let [e, t] = (0, Q.useState)(!1), n = (0, Q.useRef)(null), r = (0, Q.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Vn));
		r.observe(e), n.current = r, t(e.clientWidth < Vn);
	}, []);
	return (0, Q.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Un = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, Wn = Object.entries(Un).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function Gn({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			Fe(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)(y, {
				isSelected: t,
				onChange: n,
				"aria-label": `选择 ${e.label}`
			}),
			/* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.provider })
				}), /* @__PURE__ */ (0, $.jsx)(Kt, { source: e })]
			}),
			/* @__PURE__ */ (0, $.jsx)(p, { children: e.provider_label }),
			/* @__PURE__ */ (0, $.jsx)(qt, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, $.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, $.jsx)(Wt, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Pe(e)
					}),
					/* @__PURE__ */ (0, $.jsx)(fe, {
						"aria-label": `启用 ${e.label}`,
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ve,
							"aria-label": `检查 ${e.label} 的更新`,
							disabled: !e.enabled || r.readOnly,
							...K(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ie,
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
function Kn({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: s }) {
	let c = e.map((e) => e.id), l = e.filter((e) => e.enabled).map((e) => e.id), u = e.filter(nt).length, d = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), f = `follow-author-${e[0].id}`, m = Et(r, c);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": `${t} 的关注来源`,
		className: Oe({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, $.jsx)(Ut, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, $.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: d,
						children: [
							e.map((e) => /* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, $.jsx)(p, { children: `来源：${d}` }),
							u ? /* @__PURE__ */ (0, $.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: `${u} 个失败`
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: Ve,
						"aria-label": `检查 ${t} 的全部来源`,
						disabled: !l.length || i.readOnly,
						...K(i.busy),
						onClick: () => i.check(l)
					}), /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							leadingIcon: at,
							"aria-pressed": m.all ? "true" : m.some ? "mixed" : "false",
							"aria-label": `${m.all ? "取消全选" : "全选"} ${t} 的来源`,
							onClick: () => o(!m.all),
							children: m.all ? "取消全选" : "全选"
						}), /* @__PURE__ */ (0, $.jsx)(h, {
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
		}), /* @__PURE__ */ (0, $.jsx)(S, {
			id: f,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, $.jsx)(Gn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => s(e.id, t)
			}, e.id))
		})]
	});
}
function qn(e) {
	let { data: t, sort: n, dir: r, page: i, layout: u, pageSize: d, selected: f, readOnly: m, onSort: g, onPage: b, onLayout: S, onPageSize: w, onSelected: T, toast: E, openFollow: D, onAdd: O } = e, A = t.sources, j = (0, Q.useMemo)(() => t.author_aliases || [], [t.author_aliases]), M = t.counts || {}, [N, P] = (0, Q.useState)(/* @__PURE__ */ new Set()), [F, I] = Hn(), [L, R] = (0, Q.useState)(""), z = (0, Q.useMemo)(() => Te(A, n, r, j), [
		A,
		n,
		r,
		j
	]), B = (0, Q.useMemo)(() => Nt(z, n, r, j), [
		z,
		n,
		r,
		j
	]), { job: V, running: U, outcome: W, start: G } = It({
		queryKey: k,
		queryFn: ({ signal: e }) => Ge(e),
		start: (e) => At(e),
		onError: (e) => R(J(e)),
		onFinish: (e) => {
			ht(), E(e.status === "failed" ? e.error || "检查失败" : Me(e));
		}
	}), ue = (e) => {
		U || G.isPending || (R(""), G.mutate(e));
	}, _e = (e, t) => T(Pt(f, [e], t)), be = (e, t) => T(Pt(f, e, t)), xe = Z({
		mutationFn: (e) => vt(e),
		onSuccess: (e, t) => {
			He([t]), T(Pt(f, [t], !1)), E("已取消关注来源");
		},
		onError: (e) => R(J(e))
	}), Se = Z({
		mutationFn: (e) => Ot(e.id, e.enabled),
		onSuccess: (e, t) => {
			ft(t.id, { enabled: t.enabled }), R("");
		},
		onError: (e) => R(J(e))
	}), Ce = (e) => void Le({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => xe.mutateAsync(e.id)
	}), we = Z({
		mutationFn: async (e) => {
			let t = await ct(e.ids, 4, async (t) => {
				e.action === "remove" ? await vt(t) : await Ot(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") He(e.done);
			else for (let t of e.done) ft(t, { enabled: e.action === "enabled" });
			T(Pt(f, e.done, !1));
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
	}), De = Z({
		mutationFn: async (e) => {
			let t = ((await Je()).groups || []).flatMap((e) => [
				e.primary,
				...e.variants,
				...e.duplicates
			]).filter((e) => e.status === "new").map((e) => e.id);
			return {
				ids: t,
				failed: (await ct(t, 6, (t) => lt(t, e))).filter((e) => !e.ok)
			};
		},
		onSuccess: (e) => {
			ht(), e.failed.length ? R(`批量更新 ${e.failed.length}/${e.ids.length} 项未完成`) : (R(""), E(`已批量标记 ${e.ids.length} 项`));
		},
		onError: (e) => R(J(e))
	}), je = (e, t) => Se.mutate({
		id: e.id,
		enabled: t
	}), Fe = (0, Q.useRef)({
		check: ue,
		toggle: je,
		remove: Ce,
		busy: !1,
		readOnly: m
	});
	Fe.current = {
		check: ue,
		toggle: je,
		remove: Ce,
		busy: U || G.isPending,
		readOnly: m
	};
	let q = Fe.current, Ie = (0, Q.useMemo)(() => {
		let e = Re(), t = (e) => () => Un[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, $.jsx)(ge, {
					table: e.table,
					label: "全选本页来源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(y, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `选择 ${e.row.original.source.label}`
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, $.jsx)(Ut, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, $.jsx)(Kt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, $.jsx)(Wt, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, $.jsx)(Gt, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, $.jsx)(qt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Pe(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, $.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)(fe, {
							"aria-label": `启用 ${e.row.original.source.label}`,
							isSelected: e.row.original.source.enabled,
							isDisabled: q.readOnly,
							onChange: (t) => Fe.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Ve,
							"aria-label": `检查 ${e.row.original.source.label} 的更新`,
							disabled: !e.row.original.source.enabled || q.readOnly,
							...K(q.busy),
							onClick: () => Fe.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: ie,
							"aria-label": `移除 ${e.row.original.source.label}`,
							disabled: q.readOnly,
							onClick: () => Fe.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [q]), ze = (0, Q.useMemo)(() => {
		let e = Bn[n];
		return e ? [{
			id: e,
			desc: r === "desc"
		}] : [];
	}, [n, r]), Be = (0, Q.useMemo)(() => Object.fromEntries([...f].map((e) => [String(e), !0])), [f]), Y = u === "table", Ke = zt("follow-sources", Wn), X = dt(Y ? B.length : z.length, d, i), qe = Rt({
		features: Rn,
		data: B,
		columns: Ie,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: ze,
			rowSelection: Be,
			pagination: {
				pageIndex: X.page - 1,
				pageSize: d
			},
			columnVisibility: Ke.visibility
		},
		onColumnVisibilityChange: Ke.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(ze) : e)[0];
			if (!t) return;
			let n = v[t.id];
			n && g(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Be) : e;
			T(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: X.page - 1,
				pageSize: d
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === d ? n.pageIndex !== t.pageIndex && b(n.pageIndex + 1) : w(n.pageSize);
		}
	}), Ye = qe.getRowModel().rows, Xe = Y ? Ye.map((e) => e.original.source.id) : z.slice(X.start, X.end).flatMap((e) => e.map((e) => e.id)), Qe = Et(f, Xe), $e = [...f], et = Ae(W), tt = A.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), nt = ke(W), rt = z.length > 0 && N.size >= z.length;
	return A.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Oe({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				ref: F,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, $.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "关注列表"
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: `${A.length.toLocaleString()} 个来源${M.new ? ` · ${zn(M.new)} 条未看` : ""}`
					})]
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						tt.length ? /* @__PURE__ */ (0, $.jsx)(h, {
							variant: "secondary",
							disabled: m,
							...K(q.busy),
							onClick: () => ue(tt),
							children: "检查失败项"
						}) : null,
						/* @__PURE__ */ (0, $.jsx)(h, {
							variant: "primary",
							leadingIcon: Ve,
							disabled: m,
							"aria-label": "检查全部",
							iconOnly: I,
							...K(q.busy),
							onClick: () => ue([]),
							children: "检查全部"
						}),
						/* @__PURE__ */ (0, $.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, $.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": "关注列表版式",
									children: [/* @__PURE__ */ (0, $.jsx)(h, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ye,
										"aria-label": re[0][1],
										"aria-pressed": !Y,
										onClick: () => S("default")
									}), /* @__PURE__ */ (0, $.jsx)(h, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Ue,
										"aria-label": re[1][1],
										"aria-pressed": Y,
										onClick: () => S("table")
									})]
								}),
								Y ? /* @__PURE__ */ (0, $.jsx)(me, {
									preferences: Ke,
									label: "关注来源"
								}) : null,
								/* @__PURE__ */ (0, $.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, $.jsx)(se, {
										"aria-label": "关注列表排序",
										prefix: "排序",
										selectedKey: n,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											g(t, ae[t]);
										},
										children: oe.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(ce, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, $.jsx)(h, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: de,
										"data-icon-state": r === "asc" ? "a" : "b",
										"aria-label": kt(n, r),
										onClick: () => g(n, r === "asc" ? "desc" : "asc")
									})]
								}),
								Y ? null : /* @__PURE__ */ (0, $.jsx)(h, {
									variant: "secondary",
									iconOnly: I,
									leadingIcon: x,
									"aria-expanded": !rt,
									"aria-label": rt ? "全部展开" : "全部收起",
									onClick: () => P(rt ? /* @__PURE__ */ new Set() : new Set(z.map((e) => String(e[0].author_key || e[0].id)))),
									children: rt ? "全部展开" : "全部收起"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					U ? /* @__PURE__ */ (0, $.jsx)(ve, {
						embedded: !0,
						label: V?.message || (V?.total ? `${V.older ? "抓取历史" : "检查更新"}：已完成 ${V.checked || 0}/${V.total} 个来源` : "正在准备检查任务"),
						value: V?.checked,
						total: V?.total
					}) : null,
					L ? /* @__PURE__ */ (0, $.jsx)(H, {
						tone: "error",
						title: "操作未完成",
						children: L
					}) : null,
					!U && W?.results?.length ? /* @__PURE__ */ (0, $.jsx)(H, {
						tone: "neutral",
						title: "检查结果",
						children: Ne(W)
					}) : null,
					et.length ? /* @__PURE__ */ (0, $.jsx)(H, {
						tone: "error",
						title: `${et.length} 个来源检查失败`,
						extra: /* @__PURE__ */ (0, $.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: et.map((e, t) => /* @__PURE__ */ (0, $.jsx)("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${We(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: "这些来源这一轮没有取到更新。"
					}) : null,
					nt ? /* @__PURE__ */ (0, $.jsx)(H, {
						tone: "warning",
						children: `条目已保存，但这次未保存来源的原始响应：${nt}`
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(le, {
				label: "关注来源批量操作",
				visible: $e.length > 0,
				count: `已选 ${$e.length} 个来源`,
				children: [
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...K(q.busy),
						onClick: () => ue($e),
						children: "检查所选"
					}),
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...K(we.isPending),
						onClick: () => we.mutate({
							ids: $e,
							action: "enabled"
						}),
						children: "启用"
					}),
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...K(we.isPending),
						onClick: () => we.mutate({
							ids: $e,
							action: "paused"
						}),
						children: "暂停"
					}),
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "danger",
						size: "small",
						disabled: m,
						...K(we.isPending),
						onClick: () => void Le({
							title: `删除 ${$e.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => we.mutateAsync({
								ids: $e,
								action: "remove"
							})
						}),
						children: "删除"
					}),
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "ghost",
						size: "small",
						onClick: () => T(/* @__PURE__ */ new Set()),
						children: "取消选择"
					})
				]
			}),
			Y ? /* @__PURE__ */ (0, $.jsx)(C, {
				follow: !0,
				preferences: Ke,
				onRowClick: (e) => _e(Number(e), !f.has(Number(e))),
				children: /* @__PURE__ */ (0, $.jsxs)(pe, {
					"aria-label": "关注来源",
					size: "sm",
					sortDescriptor: ze[0] ? {
						column: ze[0].id,
						direction: ze[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => qe.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, $.jsxs)(l, { children: [qe.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in v, n = Ze(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, $.jsx)(o, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Ke.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, $.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [n, /* @__PURE__ */ (0, $.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, $.jsx)(ee, {})
								})]
							}) : /* @__PURE__ */ (0, $.jsx)(p, { children: n }), /* @__PURE__ */ (0, $.jsx)(he, {
								preferences: Ke,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, $.jsx)(o, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: Ke.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, $.jsx)(a, {
						renderEmptyState: () => "这一页没有来源",
						children: Ye.map((e) => /* @__PURE__ */ (0, $.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, $.jsx)(c, { children: Ze(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, $.jsx)(c, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(y, {
				isSelected: Qe.all,
				isIndeterminate: Qe.some,
				onChange: (e) => be(Xe, e),
				"aria-label": "全选本页来源",
				children: "全选本页"
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex flex-col gap-3",
				children: z.slice(X.start, X.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, $.jsx)(Kn, {
						group: e,
						name: Ee(e, j),
						handlers: q,
						selected: f,
						open: !N.has(t),
						onOpen: (e) => {
							let n = new Set(N);
							e ? n.delete(t) : n.add(t), P(n);
						},
						onToggleGroup: (t) => be(e.map((e) => e.id), t),
						onToggle: _e
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, $.jsx)(te, {
				label: "关注列表",
				total: X.total,
				pagination: {
					pageIndex: X.page - 1,
					pageSize: d
				},
				unit: Y ? "个来源" : "位创作者",
				pageUnit: Y ? "条" : "位",
				onChange: (e) => {
					e.pageSize === d ? qe.setPageIndex(e.pageIndex) : qe.setPageSize(e.pageSize);
				}
			}),
			M.new ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${zn(M.new)} · 已看 ${zn(M.seen)} · 已保存 ${zn(M.saved)} · 已忽略 ${zn(M.ignored)}`
					}),
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						size: "small",
						onClick: D,
						children: "去看更新"
					}),
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...K(De.isPending),
						onClick: () => void Le({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => De.mutateAsync("seen")
						}),
						children: "全部标记已看"
					}),
					/* @__PURE__ */ (0, $.jsx)(h, {
						variant: "secondary",
						size: "small",
						disabled: m,
						...K(De.isPending),
						onClick: () => void Le({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => De.mutateAsync("ignored")
						}),
						children: "全部忽略"
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, $.jsx)(ne, {
		icon: _,
		title: "还没有关注来源",
		actions: /* @__PURE__ */ (0, $.jsx)(h, {
			variant: "primary",
			size: "small",
			onClick: O,
			children: "添加关注"
		}),
		children: "关注来源及其检查状态会显示在这里。"
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Jn = (e) => M.some(([t]) => t === e);
function Yn({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Oe({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, $.jsxs)("b", {
			"data-follow-reading": "",
			className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${t >= 1e6 ? "text-headline-medium" : t >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "min-w-0 wrap-anywhere",
				children: t.toLocaleString()
			}), /* @__PURE__ */ (0, $.jsx)("small", {
				className: "whitespace-nowrap text-body-2-regular text-text-secondary",
				children: ` ${n}`
			})]
		})]
	});
}
function Xn(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, Q.useState)(Jn(e.tab) ? e.tab : "list"), [p, m] = (0, Q.useState)(Math.max(1, Math.floor(e.page) || 1)), [h, _] = (0, Q.useState)(() => St(e.sort, e.dir).sort), [v, y] = (0, Q.useState)(() => St(e.sort, e.dir).dir), [ee, b] = (0, Q.useState)(rt(e.layout) ? e.layout : "default"), [x, S] = (0, Q.useState)(ut(e.pageSize)), [te, C] = (0, Q.useState)(/* @__PURE__ */ new Set()), [w, T] = (0, Q.useState)(/* @__PURE__ */ new Set()), ne = Lt({
		queryKey: j,
		queryFn: ({ signal: e }) => qe(e)
	}), E = Lt({
		queryKey: A,
		queryFn: ({ signal: e }) => Ke(e)
	}), k = Lt({
		queryKey: O,
		queryFn: ({ signal: e }) => X(e)
	}), N = ne.data || { sources: [] }, P = E.data || {
		root: "",
		providers: []
	}, F = N.sources;
	(0, Q.useEffect)(() => {
		C((e) => {
			let t = it(e, F);
			return t.size === e.size ? e : t;
		});
	}, [F]);
	let I = (e) => {
		let n = e.sort ?? h, r = e.dir ?? v;
		t({
			tab: e.tab ?? c,
			page: e.page ?? p,
			sort: n === "checked" ? "" : n,
			dir: r === ae[n] ? "" : r
		});
	}, re = tt(F), L = F.filter(nt).length, ie = F.filter((e) => e.enabled).length, R = (P.providers || []).filter((e) => e.requirement === "required" && !ze(e)).length, z = new Set((k.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, $.jsxs)(Bt, { children: [
		a ? /* @__PURE__ */ (0, $.jsx)(H, {
			tone: "warning",
			title: "本机只能浏览",
			extra: s ? /* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, $.jsx)(D, {
					href: s,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, $.jsxs)("div", {
			className: W,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ (0, $.jsx)(Yn, {
					term: "关注创作者",
					figure: re.length,
					unit: "位"
				}),
				/* @__PURE__ */ (0, $.jsx)(Yn, {
					term: "启用来源",
					figure: ie,
					unit: `/ ${F.length}`
				}),
				/* @__PURE__ */ (0, $.jsx)(Yn, {
					term: "检查失败",
					figure: L,
					unit: "个来源"
				}),
				/* @__PURE__ */ (0, $.jsx)(Yn, {
					term: "未看更新",
					figure: N.counts?.new || 0,
					unit: "条"
				}),
				/* @__PURE__ */ (0, $.jsx)(Yn, {
					term: "JAV 订阅",
					figure: z,
					unit: "位"
				}),
				/* @__PURE__ */ (0, $.jsx)(Yn, {
					term: "未看新作",
					figure: k.data?.unread || 0,
					unit: "条"
				})
			]
		}),
		/* @__PURE__ */ (0, $.jsxs)(f, {
			selectedKey: c,
			onSelectionChange: (e) => {
				let t = String(e);
				Jn(t) && (C(/* @__PURE__ */ new Set()), T(/* @__PURE__ */ new Set()), l(t), I({ tab: t }));
			},
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, $.jsx)(Ht, {
					"aria-label": "关注管理区域",
					"data-section-nav": !0,
					"data-section-items": !0,
					className: "flex max-w-full flex-nowrap overflow-x-auto",
					children: M.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(d, {
						id: e,
						"data-pill-selected": c === e ? "" : void 0,
						"data-pill-variant": "gray",
						className: "cursor-pointer whitespace-nowrap",
						children: t
					}, e))
				}),
				/* @__PURE__ */ (0, $.jsxs)(u, {
					id: "list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, $.jsx)(Ln, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), I({ tab: "add" });
						},
						selection: {
							ids: w,
							onChange: T,
							onActivate: () => C(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ (0, $.jsx)(qn, {
						data: N,
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
							l("add"), I({ tab: "add" });
						},
						onSort: (e, t) => {
							_(e), y(t), m(1), I({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							m(e), I({ page: e });
						},
						onSelected: (e) => {
							C(e), T(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							b(e), m(1), n({ layout: e }), I({ page: 1 });
						},
						onPageSize: (e) => {
							S(e), m(1), n({ pageSize: e }), I({ page: 1 });
						}
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(u, {
					id: "add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, $.jsx)(on, {
							data: N,
							credentials: P,
							readOnly: a,
							toast: r
						}),
						/* @__PURE__ */ (0, $.jsx)(dn, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								k.refetch(), l("list"), I({ tab: "list" });
							}
						}),
						/* @__PURE__ */ (0, $.jsx)(wn, {
							groups: N.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: N.alias_suggestions || [],
							sources: N.sources
						})
					]
				}),
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, $.jsx)(_e, { scope: "online" })
				})
			]
		}),
		/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsxs)(g, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", R ? `（${R}）` : ""]
		}) })
	] });
}
export { Xn as FollowManagePage };

//# debugId=7d73059a-d68c-48be-a9be-0e9c2ebba927