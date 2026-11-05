(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1b402246-d2da-46ef-8a29-5bbdceaf59bf", e._sentryDebugIdIdentifier = "sentry-dbid-1b402246-d2da-46ef-8a29-5bbdceaf59bf");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as u, $b4f18e3395fe64d7$export$3e41faf802a29e71 as d, $b4f18e3395fe64d7$export$b2539bed5023c21c as f, $ea3928288112382f$export$439d29a4e110a164 as p, $l as m, Button as h, ButtonLink as g, Bx as _, Checkbox as v, ChevronSortDown as ee, Chip as y, DataTableFooter as b, DataTableFrame as te, DataTableSort as x, EmptyFocusButton as S, EmptyState as C, ErrorText as w, ExternalLink as T, FEEDS_KEY as ne, FOLLOW_CREDENTIALS_KEY as re, FOLLOW_MANAGE_KEY as E, FOLLOW_MANAGE_NAV as D, FOLLOW_RESOLVE_KEY as O, FieldLabel as k, Help as A, Input as j, LoadingDots as M, M6 as N, MENU_ITEM as P, MENU_ITEM_INTERACTIVE as F, MENU_POPOVER_SURFACE as I, ModalFrame as L, Note as R, P7 as ie, SORT_DEFAULT_DIR as z, STAT_STRIP_SIX as B, SelectionDock as V, SelectionPopover as H, SiteLabel as ae, Switch as oe, Table as se, TableColumnControls as ce, TableColumnResizer as le, TableSelectionHeader as ue, TagManager as U, TaskProgress as de, Wt as fe, Xf as pe, __toESM as me, addAlias as he, addSource as ge, avatarInner as W, busyProps as G, cardClass as _e, checkFeeds as ve, columnVisibilityFeature as ye, composingKey as K, confirmModal as be, createColumnHelper as xe, credentialDone as Se, cx as q, dZ as J, errorHeadline as Ce, errorMessage as Y, feedIntervalText as we, fetchCredentials as Te, fetchFeeds as Ee, fetchFollow as De, fetchResolveJob as Oe, fetchSuggestions as ke, flexRender as Ae, followFeedByName as je, followFeedEntity as Me, followSuggestKey as Ne, groupByAuthor as Pe, import_jsx_runtime as Fe, isBroken as Ie, isLayout as Le, jsx as X, jsxs as Z, keepSelected as Re, localTime as ze, lookupFeedActor as Be, mapLimit as Ve, pageSizeOf as He, pageWindow as Ue, pv as We, queryClient as Ge, reloadFollowManage as Ke, removeAlias as qe, removeFeed as Je, renameAliasGroup as Ye, require_react as Xe, resolveFollowSort as Ze, rowPaginationFeature as Qe, rowSelectionFeature as $e, rowSortingFeature as et, setFeedEnabled as tt, startCheck as nt, startResolve as rt, tableFeatures as it, useAction as at, useBackgroundJob as ot, useMutation as st, useQuery as ct, useTable as lt, useTablePreferences as ut } from "./peach-app.js";
import { Page as dt } from "./peach-app.page-CW3QRN2N.js";
import { LEGACY_AVATAR_IMG as ft } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as pt } from "./peach-app.pill-aria-tab-list-Byrq5vdA.js";
import { AuthorAvatar as mt, SourceIcon as ht } from "./peach-app.source-view-CRZESleF.js";
import { SourceList as gt } from "./peach-app.source-list-Dg_PaGs6.js";
// src/react/follow-manage/add-source.tsx
var Q = /* @__PURE__ */ me(Xe(), 1), _t = q(P, F, "text-body-2-medium"), vt = "粘贴来源链接，或输入创作者名、id…", yt = "添加创作者关注", bt = "查找中（首次按名字查要下载创作者索引，可能几十秒）", xt = "识别中", St = "站内没有查到来源", Ct = "/settings/subscriptions", wt = (e, t) => `${e}:${t.url}`;
function Tt({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
	return (0, Q.useEffect)(() => {
		t.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [t, r]), /* @__PURE__ */ Z(i, {
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
		className: q(I, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ X("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ X(M, { label: "正在查找建议" })
		}) : null, n.map((e, t) => /* @__PURE__ */ Z(Q.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ X("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ Z("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? q(_t, "bg-background-secondary-default") : _t,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ X("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ X("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ X("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function Et({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ X(H, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: m,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ Z("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ X(ht, { provider: e.provider }), e.provider_label]
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
				href: Ct
			}
		]
	});
}
function Dt({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ X(R, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ Z("div", {
		className: _e({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ X("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = wt(t, e);
				return /* @__PURE__ */ X(v, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ Z("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ X(ht, { provider: e.provider }),
							/* @__PURE__ */ X("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ X("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ X("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "已经关注" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ X(A, { children: St }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ Z("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ X("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ X(T, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ X(A, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function Ot({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(!1), [c, l] = (0, Q.useState)(""), [u, d] = (0, Q.useState)(""), [f, p] = (0, Q.useState)(!1), [m, g] = (0, Q.useState)(null), [_, v] = (0, Q.useState)(-1), ee = (0, Q.useRef)(null), y = (0, Q.useRef)(null), [b, te] = (0, Q.useState)(/* @__PURE__ */ new Set()), [x, S] = (0, Q.useState)(/* @__PURE__ */ new Set()), [C, w] = (0, Q.useState)(""), [T, ne] = (0, Q.useState)(0);
	(0, Q.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let re = ct({
		queryKey: Ne(u),
		queryFn: ({ signal: e }) => ke(u, e),
		enabled: u.length > 0 && f && !o && m !== i
	}), E = (0, Q.useMemo)(() => (re.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [re.data]), { job: D, running: A, outcome: M, start: N, dismiss: P } = ot({
		queryKey: O,
		queryFn: ({ signal: e }) => Oe(e),
		start: (e) => rt([e]),
		onStarted: () => S(/* @__PURE__ */ new Set()),
		onError: (e) => w(Y(e)),
		onFinish: (e) => {
			e.status === "failed" && w(e.error || "查找失败");
		}
	}), F = (e) => {
		let t = e.trim();
		!t || n || o || A || N.isPending || (w(""), v(-1), l(t), a(t), d(""), g(t), N.mutate(t));
	}, I = re.isFetching, L = f && !o && m !== i && (E.length > 0 || I), ie = () => {
		v(-1), g(i);
	}, z = (e) => {
		if (!(o || K(e.nativeEvent))) {
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
	}, B = M?.results || [], V = B.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !b.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: wt(t, e)
	})).filter((e) => !x.has(e.key))), H = st({
		mutationFn: async (e) => {
			let t = [], n = [];
			ne(0);
			for (let r of e) {
				try {
					let e = await ge(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${Y(e)}`);
				}
				ne((e) => e + 1);
			}
			if (n.length) try {
				await nt(n);
			} catch (e) {
				t.push(Y(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			Ke(), e.failures.length ? w(e.failures.join("；")) : (w(""), P(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => w(Y(e))
	}), ae = e.suggestions || [], oe = !c.includes("/");
	return /* @__PURE__ */ Z("section", {
		"aria-label": yt,
		className: _e({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ X("h3", {
				className: "text-title-2-medium text-text-primary",
				children: yt
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ Z("div", {
						ref: ee,
						className: "min-w-64 grow",
						onFocus: () => p(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !y.current?.contains(t) && p(!1);
						},
						children: [/* @__PURE__ */ X(j, {
							"aria-label": "来源链接、名字或 id",
							placeholder: vt,
							value: i,
							leadingIcon: We,
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
						}), L ? /* @__PURE__ */ X(Tt, {
							field: ee,
							menu: y,
							options: E,
							active: _,
							busy: I,
							onPick: F,
							onClose: ie
						}) : null]
					}),
					/* @__PURE__ */ X(Et, {
						credentials: t,
						hidden: b,
						onHidden: te
					}),
					/* @__PURE__ */ X(h, {
						variant: "primary",
						disabled: n || !i.trim(),
						...G(A || N.isPending),
						onClick: () => F(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ Z("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [A || N.isPending ? /* @__PURE__ */ X(de, {
					embedded: !0,
					label: D?.message || (D?.total ? `查找中：${D.checked || 0}/${D.total}` : oe ? bt : xt),
					value: D?.checked,
					total: D?.total
				}) : null, C ? /* @__PURE__ */ X(R, {
					tone: "error",
					title: "这一次没有完成",
					children: C
				}) : null]
			}),
			B.length ? /* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ X(k, { children: "查找结果" }),
					B.map((e, t) => /* @__PURE__ */ X(Dt, {
						row: e,
						at: t,
						hidden: b,
						unpicked: x,
						onPick: (e, t) => {
							let n = new Set(x);
							t ? n.delete(e) : n.add(e), S(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ Z("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ X(h, {
								variant: "secondary",
								size: "small",
								onClick: () => P(),
								children: "关闭"
							}),
							/* @__PURE__ */ X(h, {
								variant: "primary",
								size: "small",
								disabled: n || !V.length,
								...G(H.isPending),
								onClick: () => H.mutate(V),
								children: `添加选中（${V.length}）`
							}),
							H.isPending ? /* @__PURE__ */ X("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${T}/${V.length}`
							}) : null
						]
					})
				]
			}) : null,
			ae.length ? /* @__PURE__ */ Z("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ X("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "猜你喜欢"
				}), ae.map((e) => /* @__PURE__ */ X(h, {
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
var kt = "输入女优名，到 JavDB 找她的演员页", At = "添加 JAV 订阅";
function jt(e, t) {
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
function Mt({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ X(v, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ Z("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ X("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ X(y, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ X("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `已在「${e.held_by.name}」名下`
					}) : null
				]
			})
		}), /* @__PURE__ */ X(T, {
			href: e.url,
			children: e.id
		})]
	});
}
function Nt({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, Q.useState)(""), [a, o] = (0, Q.useState)(null), [s, c] = (0, Q.useState)(/* @__PURE__ */ new Set()), l = at(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => Be(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !K(e.nativeEvent) && (e.preventDefault(), u());
	}, f = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, p = () => {
		a && l.run("follow", (e) => je(a.q, [...s], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), i(""), f(), n();
		});
	}, m = () => {
		let e = a?.known;
		e && l.run("known", (t) => Me(e.id, t), () => {
			t(`已订阅「${e.name}」的新作`), i(""), f(), n();
		});
	}, g = a ? jt(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ Z("section", {
		"aria-label": At,
		className: _e({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ X("h3", {
				className: "text-title-2-medium text-text-primary",
				children: At
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ X("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ X(j, {
						"aria-label": "女优名",
						placeholder: kt,
						value: r,
						leadingIcon: We,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ X(h, {
					variant: "primary",
					disabled: e || !r.trim(),
					...G(l.busy === "lookup"),
					onClick: u,
					children: "查找"
				})]
			}),
			l.error ? /* @__PURE__ */ X(R, {
				tone: "error",
				title: "这一次没有完成",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ X(R, {
						tone: "warning",
						title: "JavDB 这一次没有搜成",
						children: a.unavailable
					}) : null,
					/* @__PURE__ */ X(k, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ X(Mt, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ X(A, { children: a.unavailable ? "这一次没有拿到演员卡。" : "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ X(A, {
						role: "status",
						children: s.size ? g.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					_ ? /* @__PURE__ */ X(A, {
						role: "status",
						children: _.following ? `数据库里的「${_.name}」已经在订阅新作。` : `数据库里的「${_.name}」已有 JavDB 或 DMM 编号，可以直接订阅。`
					}) : null,
					/* @__PURE__ */ Z("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ X(h, {
								variant: "secondary",
								size: "small",
								onClick: f,
								children: "关闭"
							}),
							a.candidates.length ? /* @__PURE__ */ X(h, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...G(l.busy === "follow"),
								onClick: p,
								children: `添加订阅（${s.size}）`
							}) : null,
							_ && !_.following ? /* @__PURE__ */ X(h, {
								variant: "primary",
								size: "small",
								disabled: e,
								...G(l.busy === "known"),
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
function Pt({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ X(L, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ X(Ft, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function Ft({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, Q.useState)(e.canonical_name), o = at();
	return /* @__PURE__ */ Z("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => Ye(e.canonical_key, i.trim(), t), () => {
				Ke(), n(`已把统一名称改为 ${i.trim()}`), t();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ X(r, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "修改统一名称"
			}),
			/* @__PURE__ */ Z("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["当前名称：", e.canonical_name]
			}),
			/* @__PURE__ */ X(j, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ X(k, { children: "选择已有别名" }), /* @__PURE__ */ X("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ X(h, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ X("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "原名称保留为别名，关联档案和作品署名会同步更新。"
			}),
			o.error ? /* @__PURE__ */ X(R, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ Z("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ X(h, {
					variant: "secondary",
					onClick: t,
					children: "取消"
				}), /* @__PURE__ */ X(h, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === e.canonical_name,
					...G(!!o.busy),
					children: "修改统一名称"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var It = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, Lt = it({
	rowSelectionFeature: $e,
	rowSortingFeature: et,
	rowPaginationFeature: Qe,
	columnVisibilityFeature: ye,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), Rt = Lt, zt = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Bt = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, Vt = [
	zt,
	Bt,
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
], Ht = [
	zt,
	Bt,
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
], Ut = (e) => e.alias;
function Wt(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Gt({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ Z("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ X(mt, {
			group: Wt(e, t, n),
			name: t
		}), /* @__PURE__ */ X("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Kt({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = ut("alias-suggestions", Vt), f = ut("alias-saved", Ht), [p, m] = (0, Q.useState)(null), [g, _] = (0, Q.useState)({}), [y, T] = (0, Q.useState)({}), ne = n(() => _({})), re = n(() => T({})), [E, D] = (0, Q.useState)([]), [O, A] = (0, Q.useState)([]), [M, N] = (0, Q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [P, F] = (0, Q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), I = {
		...M,
		pageIndex: Math.min(M.pageIndex, Math.max(0, Math.ceil(t.length / M.pageSize) - 1))
	}, L = {
		...P,
		pageIndex: Math.min(P.pageIndex, Math.max(0, Math.ceil(e.length / P.pageSize) - 1))
	}, [R, z] = (0, Q.useState)(""), [B, H] = (0, Q.useState)(""), [ae, oe] = (0, Q.useState)(""), U = st({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await he(n.canonical, n.alias);
				} catch (n) {
					throw t && Ke(), Error(`${Y(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			z(""), _({}), Ke(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => z(Y(e))
	}), de = st({
		mutationFn: (e) => he(e.canonical, e.alias),
		onSuccess: () => {
			z(""), H(""), oe(""), Ke(), u("已保存创作者别名");
		},
		onError: (e) => z(Y(e))
	}), fe = st({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await qe(e), n += 1;
			} catch (e) {
				throw Error(`${Y(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				Ke();
			}
		},
		onSuccess: () => {
			z(""), T({}), u("已移除创作者别名");
		},
		onError: (e) => z(Y(e))
	}), me = (e, t) => {
		e.length && be({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => U.mutateAsync(e)
		});
	}, ge = (e) => void be({
		title: "移除创作者别名",
		body: It(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => fe.mutateAsync(e)
	}), W = (0, Q.useRef)({
		sources: r,
		readOnly: i,
		merging: U.isPending,
		removing: fe.isPending,
		merge: me,
		remove: ge,
		rename: m
	});
	W.current = {
		sources: r,
		readOnly: i,
		merging: U.isPending,
		removing: fe.isPending,
		merge: me,
		remove: ge,
		rename: m
	};
	let ve = (0, Q.useMemo)(() => {
		let e = xe();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ X(ue, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ X(v, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ X(Gt, {
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
				cell: (e) => /* @__PURE__ */ X("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: (e) => /* @__PURE__ */ X(h, {
					variant: "secondary",
					size: "small",
					disabled: W.current.readOnly,
					...G(W.current.merging),
					onClick: () => W.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), ye = (0, Q.useMemo)(() => {
		let e = xe();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ X(ue, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ X(v, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ X(Gt, {
					sources: W.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "平台别名",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ X("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ Z("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ X(h, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: ie,
							"aria-label": `移除别名 ${e.name}`,
							disabled: W.current.readOnly,
							...G(W.current.removing),
							onClick: () => W.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: ({ row: e }) => /* @__PURE__ */ X(h, {
					variant: "secondary",
					size: "small",
					disabled: W.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => W.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), K = lt({
		features: Lt,
		data: t,
		columns: ve,
		getRowId: Ut,
		state: {
			rowSelection: g,
			sorting: E,
			pagination: I,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			ne(), _(e);
		},
		onSortingChange: (e) => {
			D(e), N((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: N,
		enableRowSelection: !0
	}), Se = lt({
		features: Rt,
		data: e,
		columns: ye,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: y,
			sorting: O,
			pagination: L,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			re(), T(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			A(e), F((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: F
	}), q = K.getSelectedRowModel().rows.map((e) => e.original), J = Se.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), Ce = G(U.isPending);
	return /* @__PURE__ */ Z("div", {
		className: _e({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ X("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "创作者别名"
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ X(k, { children: "手动添加别名" }), /* @__PURE__ */ Z("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ X(j, {
							"aria-label": "统一名称",
							placeholder: "在 Peach 中统一显示的名称",
							value: B,
							onChange: H,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ X(j, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: ae,
							onChange: oe,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ X(h, {
							variant: "primary",
							disabled: i || !B.trim() || !ae.trim(),
							...G(de.isPending),
							onClick: () => de.mutate({
								canonical: B.trim(),
								alias: ae.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			R ? /* @__PURE__ */ X(w, { children: R }) : null,
			t.length ? /* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ Z("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ Z("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ X(k, { children: "待合并" }), /* @__PURE__ */ X("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} 组`
							})]
						}), /* @__PURE__ */ Z("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ X(h, {
									variant: "primary",
									size: "small",
									disabled: i,
									...Ce,
									onClick: () => me(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ X(x, {
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
								/* @__PURE__ */ X(ce, {
									preferences: d,
									label: "待合并创作者别名"
								})
							]
						})]
					}),
					/* @__PURE__ */ Z(V, {
						label: "待合并别名批量操作",
						visible: q.length > 0,
						count: `已选 ${q.length} 组`,
						children: [/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...Ce,
							onClick: () => me(q, !1),
							children: `合并所选（${q.length}）`
						}), /* @__PURE__ */ X(h, {
							variant: "ghost",
							size: "small",
							onClick: () => _({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ X(te, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => K.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ Z(se, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: E[0] ? {
								column: E[0].id,
								direction: E[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => K.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ Z(l, { children: [K.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ X(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ Z(Fe.Fragment, { children: [/* @__PURE__ */ Z("span", {
									className: "flex items-center gap-0.5",
									children: [Ae(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ X("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ X(ee, {})
									}) : null]
								}), /* @__PURE__ */ X(le, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ X(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ X(a, { children: K.getRowModel().rows.map((e) => /* @__PURE__ */ Z(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ X(c, { children: Ae(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ X(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ X(b, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: I,
						onChange: N
					})
				]
			}) : null,
			/* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ Z("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ Z("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ X(k, { children: "已保存别名" }), /* @__PURE__ */ X("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ Z("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ X(x, {
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
									A(e), F((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ X(ce, {
								preferences: f,
								label: "已保存创作者别名"
							})]
						})]
					}),
					/* @__PURE__ */ Z(V, {
						label: "已保存别名批量操作",
						visible: J.length > 0,
						count: `已选 ${J.length} 个别名`,
						children: [/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...G(fe.isPending),
							onClick: () => void be({
								title: "移除所选创作者别名",
								body: `将移除以下 ${J.length} 个别名，对应来源恢复为独立创作者组。`,
								items: J,
								confirmLabel: "移除所选别名",
								onConfirm: () => fe.mutateAsync(J)
							}),
							children: `移除所选别名（${J.length}）`
						}), /* @__PURE__ */ X(h, {
							variant: "ghost",
							size: "small",
							onClick: () => T({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ Z(Fe.Fragment, { children: [/* @__PURE__ */ X(te, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => Se.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ Z(se, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: O[0] ? {
								column: O[0].id,
								direction: O[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => Se.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ Z(l, { children: [Se.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ X(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ Z(Fe.Fragment, { children: [/* @__PURE__ */ Z("span", {
									className: "flex items-center gap-0.5",
									children: [Ae(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ X("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ X(ee, {})
									}) : null]
								}), /* @__PURE__ */ X(le, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ X(o, {
								id: "remaining-space",
								"aria-label": "行空白区域",
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ X(a, { children: Se.getRowModel().rows.map((e) => /* @__PURE__ */ Z(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ X(c, { children: Ae(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ X(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ X(b, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: L,
						onChange: F
					})] }) : /* @__PURE__ */ X(C, {
						size: "compact",
						icon: pe,
						title: "还没有保存创作者别名",
						actions: i ? void 0 : /* @__PURE__ */ X(S, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ X(Pt, {
				group: p,
				close: () => m(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var qt = it({
	rowPaginationFeature: Qe,
	rowSelectionFeature: $e,
	rowSortingFeature: et,
	columnVisibilityFeature: ye,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), Jt = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, Yt = /* @__PURE__ */ new Set(["actions"]), Xt = Object.entries(Jt).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Zt = () => Ge.invalidateQueries({
	queryKey: ne,
	exact: !0
}), $ = (e) => e.name || e.url;
function Qt(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function $t({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ X(y, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ X(y, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ X(y, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ X(y, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function en({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ X("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${ft}`,
		dangerouslySetInnerHTML: { __html: W($(e), t, null, "performer") }
	});
}
var tn = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function nn(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function rn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return be({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${$(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function an({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = ct({
		queryKey: ne,
		queryFn: ({ signal: e }) => Ee(e)
	}), u = at(), d = ut("jav-feeds", Xt), f = i.data, m = (0, Q.useMemo)(() => f?.sources ?? [], [f]), [g, y] = (0, Q.useState)(/* @__PURE__ */ new Set()), S = r?.ids ?? g, T = r?.onChange ?? y, [re, E] = (0, Q.useState)(1), [D, O] = (0, Q.useState)(20), [k, j] = (0, Q.useState)([]), M = Ue(m.length, D, re);
	(0, Q.useEffect)(() => {
		E((e) => Math.min(e, M.pages));
	}, [M.pages]), (0, Q.useEffect)(() => {
		T((e) => {
			let t = new Set(m.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [m, T]);
	let P = st({
		mutationFn: async (e) => {
			let t = await Ve(e.ids, 4, async (t) => {
				e.action === "remove" ? await Je(t) : await tt(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (T(/* @__PURE__ */ new Set()), Zt(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				u.setError(`${n.length} 条没有写入：${e.ok ? "" : Y(e.error)}`);
			}
		},
		onError: (e) => u.setError(Y(e))
	}), F = (0, Q.useMemo)(() => nn(m), [m]), I = (0, Q.useRef)({
		readOnly: e,
		shared: F,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	I.current = {
		readOnly: e,
		shared: F,
		busy: u.busy,
		toggle: (e, t) => void u.run(`enabled-${e.id}`, (n) => tt(e.id, t, n), () => void Zt()),
		fetch: (e) => void u.run(`check-${e.id}`, (t) => ve(t, [e.id]), () => void Zt()),
		remove: (e) => void rn([e], async () => {
			await Je(e.id), t(`已移除订阅源「${$(e)}」`), Zt();
		})
	};
	let L = (0, Q.useMemo)(() => {
		let e = xe(), t = (e) => () => Jt[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ X(ue, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ X(v, {
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
					let t = tn(e.row.original, I.current.shared);
					return /* @__PURE__ */ Z("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ X(en, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ X("span", {
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
				cell: (e) => /* @__PURE__ */ X("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ Z("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: "打开来源页面",
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ X(ae, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : Qt(e.getValue()),
						label: Qt(e.getValue())
					}), /* @__PURE__ */ X(fe, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ X($t, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ X("span", {
					className: "whitespace-nowrap",
					children: we(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ X("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? ze(e.row.original.last_fetched_at) : "还没拉过"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ X("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()} 条`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ Z("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ X(oe, {
							"aria-label": `启用 ${$(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: I.current.readOnly,
							onChange: (t) => I.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: J,
							"aria-label": `拉取 ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							...G(I.current.busy === `check-${e.row.original.id}`),
							onClick: () => I.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: N,
							"aria-label": `移除 ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							onClick: () => I.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), ie = (0, Q.useMemo)(() => Object.fromEntries([...S].map((e) => [String(e), !0])), [S]), z = lt({
		features: qt,
		data: m,
		columns: L,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: ie,
			sorting: k,
			pagination: {
				pageIndex: M.page - 1,
				pageSize: D
			},
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onSortingChange: (e) => {
			j(e), E(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(ie) : e;
			T(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!f) return i.error ? /* @__PURE__ */ X(R, {
		tone: "error",
		title: "打不开订阅源",
		children: Y(i.error)
	}) : /* @__PURE__ */ X(A, { children: "正在读订阅源。" });
	let B = () => void u.run("check", (e) => ve(e), () => void Zt()), H = (e) => {
		r?.onActivate(), T((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, U = m.filter((e) => S.has(e.id)), de = m.filter((e) => e.last_error);
	return /* @__PURE__ */ X("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ Z("section", {
			"aria-label": "JAV 订阅列表",
			className: _e({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ Z("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ Z("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ X("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV 订阅源"
						}), /* @__PURE__ */ X("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${m.length.toLocaleString()} 个订阅源 · ${(Number(f.unread) || 0).toLocaleString()} 条未看`
						})]
					}), /* @__PURE__ */ Z("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ X(h, {
								onClick: B,
								disabled: e,
								...G(u.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ X(ce, {
								preferences: d,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ X(x, {
								label: "JAV 订阅源",
								sorting: k,
								onChange: (e) => {
									j(e), E(1);
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
									label: Jt[e]
								}))
							})
						]
					})]
				}),
				de.length || u.error ? /* @__PURE__ */ Z("div", {
					className: "flex flex-col gap-3",
					children: [de.length ? /* @__PURE__ */ X(R, {
						tone: "error",
						title: `${de.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ X("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: de.map((e) => /* @__PURE__ */ X("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${$(e)}：${Ce(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, u.error ? /* @__PURE__ */ X(w, { children: u.error }) : null]
				}) : null,
				/* @__PURE__ */ Z(V, {
					visible: U.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${U.length} 条订阅源`,
					children: [
						/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...G(P.isPending),
							onClick: () => P.mutate({
								ids: U.map((e) => e.id),
								action: "enabled"
							}),
							children: "启用"
						}),
						/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...G(P.isPending),
							onClick: () => P.mutate({
								ids: U.map((e) => e.id),
								action: "paused"
							}),
							children: "暂停"
						}),
						/* @__PURE__ */ X(h, {
							variant: "danger",
							size: "small",
							disabled: e,
							...G(P.isPending),
							onClick: () => void rn(U, () => P.mutateAsync({
								ids: U.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ X(h, {
							variant: "ghost",
							size: "small",
							onClick: () => T(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				m.length ? /* @__PURE__ */ X(te, {
					follow: !0,
					preferences: d,
					onRowClick: (e) => H(Number(e)),
					children: /* @__PURE__ */ Z(se, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: k[0] ? {
							column: k[0].id,
							direction: k[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => z.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ Z(l, { children: [z.getHeaderGroups()[0].headers.map((e) => {
							let t = Ae(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ X(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ Z(Fe.Fragment, { children: [Yt.has(e.column.id) ? /* @__PURE__ */ X(p, { children: t }) : /* @__PURE__ */ Z("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ X("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ X(ee, {})
									}) : null]
								}), /* @__PURE__ */ X(le, {
									preferences: d,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ X(o, {
							id: "remaining-space",
							"aria-label": "行空白区域",
							"data-table-space": "",
							width: d.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ X(a, { children: z.getRowModel().rows.map((e) => /* @__PURE__ */ Z(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ X(c, { children: Ae(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ X(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ X(C, {
					icon: _,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ X(h, {
						variant: "secondary",
						onClick: n,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				m.length ? /* @__PURE__ */ X(b, {
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
				/* @__PURE__ */ X("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ X("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `未看 ${(Number(f.unread) || 0).toLocaleString()} · 已启用 ${m.filter((e) => e.enabled).length.toLocaleString()} / ${m.length.toLocaleString()}`
					})
				})
			]
		})
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var on = (e) => D.some(([t]) => t === e);
function sn({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ Z("div", {
		className: _e({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ X("span", {
			className: "text-body-medium text-text-secondary",
			children: e
		}), /* @__PURE__ */ Z("b", {
			"data-follow-reading": "",
			className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${t >= 1e6 ? "text-headline-medium" : t >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
			children: [/* @__PURE__ */ X("span", {
				className: "min-w-0 wrap-anywhere",
				children: t.toLocaleString()
			}), /* @__PURE__ */ X("small", {
				className: "whitespace-nowrap text-body-2-regular text-text-secondary",
				children: ` ${n}`
			})]
		})]
	});
}
function cn(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, Q.useState)(on(e.tab) ? e.tab : "list"), [p, m] = (0, Q.useState)(Math.max(1, Math.floor(e.page) || 1)), [h, _] = (0, Q.useState)(() => Ze(e.sort, e.dir).sort), [v, ee] = (0, Q.useState)(() => Ze(e.sort, e.dir).dir), [y, b] = (0, Q.useState)(Le(e.layout) ? e.layout : "default"), [te, x] = (0, Q.useState)(He(e.pageSize)), [S, C] = (0, Q.useState)(/* @__PURE__ */ new Set()), [w, O] = (0, Q.useState)(/* @__PURE__ */ new Set()), k = ct({
		queryKey: E,
		queryFn: ({ signal: e }) => De(e)
	}), A = ct({
		queryKey: re,
		queryFn: ({ signal: e }) => Te(e)
	}), j = ct({
		queryKey: ne,
		queryFn: ({ signal: e }) => Ee(e)
	}), M = k.data || { sources: [] }, N = A.data || {
		root: "",
		providers: []
	}, P = M.sources;
	(0, Q.useEffect)(() => {
		C((e) => {
			let t = Re(e, P);
			return t.size === e.size ? e : t;
		});
	}, [P]);
	let F = (e) => {
		let n = e.sort ?? h, r = e.dir ?? v;
		t({
			tab: e.tab ?? c,
			page: e.page ?? p,
			sort: n === "checked" ? "" : n,
			dir: r === z[n] ? "" : r
		});
	}, I = Pe(P), L = P.filter(Ie).length, ie = P.filter((e) => e.enabled).length, V = (N.providers || []).filter((e) => e.requirement === "required" && !Se(e)).length, H = new Set((j.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ Z(dt, { children: [
		a ? /* @__PURE__ */ X(R, {
			tone: "warning",
			title: "本机只能浏览",
			extra: s ? /* @__PURE__ */ X("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ X(T, {
					href: s,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ Z("div", {
			className: B,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ X(sn, {
					term: "关注创作者",
					figure: I.length,
					unit: "位"
				}),
				/* @__PURE__ */ X(sn, {
					term: "启用来源",
					figure: ie,
					unit: `/ ${P.length}`
				}),
				/* @__PURE__ */ X(sn, {
					term: "检查失败",
					figure: L,
					unit: "个来源"
				}),
				/* @__PURE__ */ X(sn, {
					term: "未看更新",
					figure: M.counts?.new || 0,
					unit: "条"
				}),
				/* @__PURE__ */ X(sn, {
					term: "JAV 订阅",
					figure: H,
					unit: "位"
				}),
				/* @__PURE__ */ X(sn, {
					term: "未看新作",
					figure: j.data?.unread || 0,
					unit: "条"
				})
			]
		}),
		/* @__PURE__ */ Z(f, {
			selectedKey: c,
			onSelectionChange: (e) => {
				let t = String(e);
				on(t) && (C(/* @__PURE__ */ new Set()), O(/* @__PURE__ */ new Set()), l(t), F({ tab: t }));
			},
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ X(pt, {
					"aria-label": "关注管理区域",
					"data-section-nav": !0,
					"data-section-items": !0,
					className: "flex max-w-full flex-nowrap overflow-x-auto",
					children: D.map(([e, t]) => /* @__PURE__ */ X(d, {
						id: e,
						"data-pill-selected": c === e ? "" : void 0,
						"data-pill-variant": "gray",
						className: "cursor-pointer whitespace-nowrap",
						children: t
					}, e))
				}),
				/* @__PURE__ */ Z(u, {
					id: "list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ X(an, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), F({ tab: "add" });
						},
						selection: {
							ids: w,
							onChange: O,
							onActivate: () => C(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ X(gt, {
						data: M,
						sort: h,
						dir: v,
						page: p,
						layout: y,
						pageSize: te,
						selected: S,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), F({ tab: "add" });
						},
						onSort: (e, t) => {
							_(e), ee(t), m(1), F({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							m(e), F({ page: e });
						},
						onSelected: (e) => {
							C(e), O(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							b(e), m(1), n({ layout: e }), F({ page: 1 });
						},
						onPageSize: (e) => {
							x(e), m(1), n({ pageSize: e }), F({ page: 1 });
						}
					})]
				}),
				/* @__PURE__ */ Z(u, {
					id: "add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ X(Ot, {
							data: M,
							credentials: N,
							readOnly: a,
							toast: r
						}),
						/* @__PURE__ */ X(Nt, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								j.refetch(), l("list"), F({ tab: "list" });
							}
						}),
						/* @__PURE__ */ X(Kt, {
							groups: M.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: M.alias_suggestions || [],
							sources: M.sources
						})
					]
				}),
				/* @__PURE__ */ X(u, {
					id: "tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ X(U, { scope: "online" })
				})
			]
		}),
		/* @__PURE__ */ X("div", { children: /* @__PURE__ */ Z(g, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", V ? `（${V}）` : ""]
		}) })
	] });
}
export { cn as FollowManagePage };

//# debugId=1b402246-d2da-46ef-8a29-5bbdceaf59bf