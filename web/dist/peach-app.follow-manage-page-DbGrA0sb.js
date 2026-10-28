(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1cb56f0e-0ec6-4284-8e6d-97713fbbf0ed", e._sentryDebugIdIdentifier = "sentry-dbid-1cb56f0e-0ec6-4284-8e6d-97713fbbf0ed");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as u, $b4f18e3395fe64d7$export$3e41faf802a29e71 as d, $b4f18e3395fe64d7$export$b2539bed5023c21c as f, $ea3928288112382f$export$439d29a4e110a164 as p, $l as m, Button as h, ButtonLink as ee, Bx as g, Checkbox as _, ChevronSortDown as te, Chip as v, DataTableFooter as y, DataTableFrame as ne, DataTableSort as b, EmptyFocusButton as x, EmptyState as S, ErrorText as C, ExternalLink as w, FEEDS_KEY as re, FOLLOW_CREDENTIALS_KEY as ie, FOLLOW_MANAGE_KEY as T, FOLLOW_MANAGE_NAV as E, FOLLOW_RESOLVE_KEY as D, FieldLabel as O, Help as k, Input as A, LoadingDots as j, M6 as M, MENU_ITEM as N, MENU_ITEM_INTERACTIVE as P, MENU_POPOVER_SURFACE as F, ModalFrame as I, Note as L, P7 as ae, SORT_DEFAULT_DIR as R, SelectionDock as z, SelectionPopover as B, SiteLabel as V, Switch as oe, Table as se, TableColumnControls as ce, TableColumnResizer as le, TableSelectionHeader as ue, TagManager as de, TaskProgress as H, Wt as fe, Xf as pe, __toESM as U, addAlias as me, addSource as he, avatarInner as ge, busyProps as W, cardClass as G, checkFeeds as K, columnVisibilityFeature as _e, confirmModal as ve, createColumnHelper as ye, credentialDone as be, cx as q, dZ as xe, errorHeadline as Se, errorMessage as J, feedIntervalText as Y, fetchCredentials as Ce, fetchFeeds as we, fetchFollow as Te, fetchResolveJob as Ee, fetchSuggestions as De, flexRender as Oe, followFeedByName as ke, followSuggestKey as Ae, groupByAuthor as je, import_jsx_runtime as Me, isBroken as Ne, isLayout as Pe, jsx as X, jsxs as Z, keepSelected as Fe, localTime as Ie, lookupFeedActor as Le, mapLimit as Re, pageSizeOf as ze, pageWindow as Be, pv as Ve, queryClient as He, reloadFollowManage as Ue, removeAlias as We, removeFeed as Ge, renameAliasGroup as Ke, require_react as qe, resolveFollowSort as Je, rowPaginationFeature as Ye, rowSelectionFeature as Xe, rowSortingFeature as Ze, setFeedEnabled as Qe, startCheck as $e, startResolve as et, tableFeatures as tt, useAction as nt, useBackgroundJob as rt, useMutation as it, useQuery as at, useTable as ot, useTablePreferences as st } from "./peach-app.js";
import { Page as ct } from "./peach-app.page-CW3QRN2N.js";
import { STAT_STRIP_SIX as lt } from "./peach-app.stat-card-4sRHYGSD.js";
import { LEGACY_AVATAR_IMG as ut } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as dt } from "./peach-app.pill-aria-tab-list-Byrq5vdA.js";
import { AuthorAvatar as ft, SourceIcon as pt } from "./peach-app.source-view-CRZESleF.js";
import { SourceList as mt } from "./peach-app.source-list-Dg_PaGs6.js";
// src/react/follow-manage/add-source.tsx
var Q = /* @__PURE__ */ U(qe(), 1), ht = q(N, P, "text-body-2-medium"), gt = "粘贴来源链接，或输入创作者名、id…", _t = "添加创作者关注", vt = "查找中（首次按名字查要下载创作者索引，可能几十秒）", yt = "识别中", bt = "站内没有查到来源", xt = "/settings/subscriptions", St = (e, t) => `${e}:${t.url}`;
function Ct({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
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
		className: q(F, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ X("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ X(j, { label: "正在查找建议" })
		}) : null, n.map((e, t) => /* @__PURE__ */ Z(Q.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ X("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ Z("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? q(ht, "bg-background-secondary-default") : ht,
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
function wt({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "全部来源" : `${i}/${r.length} 个来源`;
	return /* @__PURE__ */ X(B, {
		label: "来源筛选",
		triggerLabel: a,
		leadingIcon: m,
		empty: "暂无可用来源",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ Z("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ X(pt, { provider: e.provider }), e.provider_label]
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
				href: xt
			}
		]
	});
}
function Tt({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ X(L, {
		tone: "error",
		title: e.line,
		children: e.error || "查找失败"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ Z("div", {
		className: G({
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
				let n = St(t, e);
				return /* @__PURE__ */ X(_, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ Z("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ X(pt, { provider: e.provider }),
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
			}) : /* @__PURE__ */ X(k, { children: bt }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ Z("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ X("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ X(w, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ X(k, { children: o.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function Et({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(!1), [c, l] = (0, Q.useState)(""), [u, d] = (0, Q.useState)(""), [f, p] = (0, Q.useState)(!1), [m, ee] = (0, Q.useState)(null), [g, _] = (0, Q.useState)(-1), te = (0, Q.useRef)(null), v = (0, Q.useRef)(null), [y, ne] = (0, Q.useState)(/* @__PURE__ */ new Set()), [b, x] = (0, Q.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, Q.useState)(""), [w, re] = (0, Q.useState)(0);
	(0, Q.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let ie = at({
		queryKey: Ae(u),
		queryFn: ({ signal: e }) => De(u, e),
		enabled: u.length > 0 && f && !o && m !== i
	}), T = (0, Q.useMemo)(() => (ie.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [ie.data]), { job: E, running: k, outcome: j, start: M, dismiss: N } = rt({
		queryKey: D,
		queryFn: ({ signal: e }) => Ee(e),
		start: (e) => et([e]),
		onStarted: () => x(/* @__PURE__ */ new Set()),
		onError: (e) => C(J(e)),
		onFinish: (e) => {
			e.status === "failed" && C(e.error || "查找失败");
		}
	}), P = (e) => {
		let t = e.trim();
		!t || n || o || k || M.isPending || (C(""), _(-1), l(t), a(t), d(""), ee(t), M.mutate(t));
	}, F = ie.isFetching, I = f && !o && m !== i && (T.length > 0 || F), ae = () => {
		_(-1), ee(i);
	}, R = (e) => {
		if (!(o || e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229)) {
			if (e.key === "Escape" && I) ae();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!T.length) return;
				if (e.preventDefault(), !I) {
					ee(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				_((e) => {
					let n = e + t;
					return n < 0 ? T.length - 1 : n >= T.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), P(T[g]?.value || i));
		}
	}, z = j?.results || [], B = z.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !y.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: St(t, e)
	})).filter((e) => !b.has(e.key))), V = it({
		mutationFn: async (e) => {
			let t = [], n = [];
			re(0);
			for (let r of e) {
				try {
					let e = await he(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${J(e)}`);
				}
				re((e) => e + 1);
			}
			if (n.length) try {
				await $e(n);
			} catch (e) {
				t.push(J(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			Ue(), e.failures.length ? C(e.failures.join("；")) : (C(""), N(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => C(J(e))
	}), oe = e.suggestions || [], se = !c.includes("/");
	return /* @__PURE__ */ Z("section", {
		"aria-label": _t,
		className: G({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ X("h3", {
				className: "text-title-2-medium text-text-primary",
				children: _t
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ Z("div", {
						ref: te,
						className: "min-w-64 grow",
						onFocus: () => p(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !v.current?.contains(t) && p(!1);
						},
						children: [/* @__PURE__ */ X(A, {
							"aria-label": "来源链接、名字或 id",
							placeholder: gt,
							value: i,
							leadingIcon: Ve,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), _(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: R
						}), I ? /* @__PURE__ */ X(Ct, {
							field: te,
							menu: v,
							options: T,
							active: g,
							busy: F,
							onPick: P,
							onClose: ae
						}) : null]
					}),
					/* @__PURE__ */ X(wt, {
						credentials: t,
						hidden: y,
						onHidden: ne
					}),
					/* @__PURE__ */ X(h, {
						variant: "primary",
						disabled: n || !i.trim(),
						...W(k || M.isPending),
						onClick: () => P(i),
						children: "查找"
					})
				]
			}),
			/* @__PURE__ */ Z("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [k || M.isPending ? /* @__PURE__ */ X(H, {
					embedded: !0,
					label: E?.message || (E?.total ? `查找中：${E.checked || 0}/${E.total}` : se ? vt : yt),
					value: E?.checked,
					total: E?.total
				}) : null, S ? /* @__PURE__ */ X(L, {
					tone: "error",
					title: "这一次没有完成",
					children: S
				}) : null]
			}),
			z.length ? /* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ X(O, { children: "查找结果" }),
					z.map((e, t) => /* @__PURE__ */ X(Tt, {
						row: e,
						at: t,
						hidden: y,
						unpicked: b,
						onPick: (e, t) => {
							let n = new Set(b);
							t ? n.delete(e) : n.add(e), x(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ Z("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ X(h, {
								variant: "secondary",
								size: "small",
								onClick: () => N(),
								children: "关闭"
							}),
							/* @__PURE__ */ X(h, {
								variant: "primary",
								size: "small",
								disabled: n || !B.length,
								...W(V.isPending),
								onClick: () => V.mutate(B),
								children: `添加选中（${B.length}）`
							}),
							V.isPending ? /* @__PURE__ */ X("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `添加中… ${w}/${B.length}`
							}) : null
						]
					})
				]
			}) : null,
			oe.length ? /* @__PURE__ */ Z("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ X("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "猜你喜欢"
				}), oe.map((e) => /* @__PURE__ */ X(h, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: `浏览历史里出现 ${e.visits} 次${e.origin ? ` · ${e.origin}` : ""}`,
					onClick: () => P(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var Dt = "输入女优名，到 JavDB 找她的演员页", Ot = "添加 JAV 订阅";
function kt(e, t) {
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
function At({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ Z("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ X(_, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ Z("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ X("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ X(v, {
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
		}), /* @__PURE__ */ X(w, {
			href: e.url,
			children: e.id
		})]
	});
}
function jt({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, Q.useState)(""), [a, o] = (0, Q.useState)(null), [s, c] = (0, Q.useState)(/* @__PURE__ */ new Set()), l = nt(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => Le(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), u());
	}, f = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, p = () => {
		a && l.run("follow", (e) => ke(a.q, [...s], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), i(""), f(), n();
		});
	}, m = a ? kt(a, s) : null;
	return /* @__PURE__ */ Z("section", {
		"aria-label": Ot,
		className: G({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ X("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Ot
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ X("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ X(A, {
						"aria-label": "女优名",
						placeholder: Dt,
						value: r,
						leadingIcon: Ve,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ X(h, {
					variant: "primary",
					disabled: e || !r.trim(),
					...W(l.busy === "lookup"),
					onClick: u,
					children: "查找"
				})]
			}),
			l.error ? /* @__PURE__ */ X(L, {
				tone: "error",
				title: "这一次没有完成",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ X(O, { children: "JavDB 上的演员卡" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ X(At, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ X(k, { children: "JavDB 上没有搜到这个名字。" }),
					a.candidates.length ? /* @__PURE__ */ X(k, {
						role: "status",
						children: s.size ? m.text : "勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。"
					}) : null,
					/* @__PURE__ */ Z("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							onClick: f,
							children: "关闭"
						}), a.candidates.length ? /* @__PURE__ */ X(h, {
							variant: "primary",
							size: "small",
							disabled: e || !s.size || m.blocked,
							...W(l.busy === "follow"),
							onClick: p,
							children: `添加订阅（${s.size}）`
						}) : null]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function Mt({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ X(I, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "修改统一名称",
		children: e ? /* @__PURE__ */ X(Nt, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function Nt({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, Q.useState)(e.canonical_name), o = nt();
	return /* @__PURE__ */ Z("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => Ke(e.canonical_key, i.trim(), t), () => {
				Ue(), n(`已把统一名称改为 ${i.trim()}`), t();
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
			/* @__PURE__ */ X(A, {
				"aria-label": "统一名称",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ X(O, { children: "选择已有别名" }), /* @__PURE__ */ X("div", {
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
			o.error ? /* @__PURE__ */ X(L, {
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
					...W(!!o.busy),
					children: "修改统一名称"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var Pt = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, Ft = tt({
	rowSelectionFeature: Xe,
	rowSortingFeature: Ze,
	rowPaginationFeature: Ye,
	columnVisibilityFeature: _e,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), It = Ft, Lt = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Rt = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, zt = [
	Lt,
	Rt,
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
], Bt = [
	Lt,
	Rt,
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
], Vt = (e) => e.alias;
function Ht(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Ut({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ Z("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ X(ft, {
			group: Ht(e, t, n),
			name: t
		}), /* @__PURE__ */ X("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Wt({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = st("alias-suggestions", zt), f = st("alias-saved", Bt), [p, m] = (0, Q.useState)(null), [ee, g] = (0, Q.useState)({}), [v, w] = (0, Q.useState)({}), re = n(() => g({})), ie = n(() => w({})), [T, E] = (0, Q.useState)([]), [D, k] = (0, Q.useState)([]), [j, M] = (0, Q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [N, P] = (0, Q.useState)({
		pageIndex: 0,
		pageSize: 20
	}), F = {
		...j,
		pageIndex: Math.min(j.pageIndex, Math.max(0, Math.ceil(t.length / j.pageSize) - 1))
	}, I = {
		...N,
		pageIndex: Math.min(N.pageIndex, Math.max(0, Math.ceil(e.length / N.pageSize) - 1))
	}, [L, R] = (0, Q.useState)(""), [B, V] = (0, Q.useState)(""), [oe, de] = (0, Q.useState)(""), H = it({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await me(n.canonical, n.alias);
				} catch (n) {
					throw t && Ue(), Error(`${J(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			R(""), g({}), Ue(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => R(J(e))
	}), fe = it({
		mutationFn: (e) => me(e.canonical, e.alias),
		onSuccess: () => {
			R(""), V(""), de(""), Ue(), u("已保存创作者别名");
		},
		onError: (e) => R(J(e))
	}), U = it({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await We(e), n += 1;
			} catch (e) {
				throw Error(`${J(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				Ue();
			}
		},
		onSuccess: () => {
			R(""), w({}), u("已移除创作者别名");
		},
		onError: (e) => R(J(e))
	}), he = (e, t) => {
		e.length && ve({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => H.mutateAsync(e)
		});
	}, ge = (e) => void ve({
		title: "移除创作者别名",
		body: Pt(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => U.mutateAsync(e)
	}), K = (0, Q.useRef)({
		sources: r,
		readOnly: i,
		merging: H.isPending,
		removing: U.isPending,
		merge: he,
		remove: ge,
		rename: m
	});
	K.current = {
		sources: r,
		readOnly: i,
		merging: H.isPending,
		removing: U.isPending,
		merge: he,
		remove: ge,
		rename: m
	};
	let _e = (0, Q.useMemo)(() => {
		let e = ye();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ X(ue, {
					table: e.table,
					label: "全选待合并别名"
				}),
				cell: (e) => /* @__PURE__ */ X(_, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `选择别名 ${e.row.original.alias}，归入 ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ X(Ut, {
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
					disabled: K.current.readOnly,
					...W(K.current.merging),
					onClick: () => K.current.merge([e.row.original], !1),
					children: "合并"
				})
			})
		]);
	}, []), be = (0, Q.useMemo)(() => {
		let e = ye();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ X(ue, {
					table: e,
					label: "全选已保存别名"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ X(_, {
					slot: null,
					"aria-label": `选择已保存别名 ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ X(Ut, {
					sources: K.current.sources,
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
							leadingIcon: ae,
							"aria-label": `移除别名 ${e.name}`,
							disabled: K.current.readOnly,
							...W(K.current.removing),
							onClick: () => K.current.remove(e.name)
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
					disabled: K.current.readOnly,
					"aria-label": `修改 ${e.original.canonical_name} 的统一名称`,
					onClick: () => K.current.rename(e.original),
					children: "修改统一名称"
				})
			})
		]);
	}, []), q = ot({
		features: Ft,
		data: t,
		columns: _e,
		getRowId: Vt,
		state: {
			rowSelection: ee,
			sorting: T,
			pagination: F,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			re(), g(e);
		},
		onSortingChange: (e) => {
			E(e), M((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: M,
		enableRowSelection: !0
	}), xe = ot({
		features: It,
		data: e,
		columns: be,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: v,
			sorting: D,
			pagination: I,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			ie(), w(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			k(e), P((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: P
	}), Se = q.getSelectedRowModel().rows.map((e) => e.original), Y = xe.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), Ce = W(H.isPending);
	return /* @__PURE__ */ Z("div", {
		className: G({
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
				children: [/* @__PURE__ */ X(O, { children: "手动添加别名" }), /* @__PURE__ */ Z("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ X(A, {
							"aria-label": "统一名称",
							placeholder: "在 Peach 中统一显示的名称",
							value: B,
							onChange: V,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ X(A, {
							"aria-label": "平台别名",
							placeholder: "平台别名",
							value: oe,
							onChange: de,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ X(h, {
							variant: "primary",
							disabled: i || !B.trim() || !oe.trim(),
							...W(fe.isPending),
							onClick: () => fe.mutate({
								canonical: B.trim(),
								alias: oe.trim()
							}),
							children: "保存别名"
						})
					]
				})]
			}),
			L ? /* @__PURE__ */ X(C, { children: L }) : null,
			t.length ? /* @__PURE__ */ Z("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ Z("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ Z("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ X(O, { children: "待合并" }), /* @__PURE__ */ X("span", {
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
									onClick: () => he(t, !0),
									children: `全部合并（${t.length}）`
								}),
								/* @__PURE__ */ X(b, {
									label: "待合并创作者别名",
									sorting: T,
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
										E(e), M((e) => ({
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
					/* @__PURE__ */ Z(z, {
						label: "待合并别名批量操作",
						visible: Se.length > 0,
						count: `已选 ${Se.length} 组`,
						children: [/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...Ce,
							onClick: () => he(Se, !1),
							children: `合并所选（${Se.length}）`
						}), /* @__PURE__ */ X(h, {
							variant: "ghost",
							size: "small",
							onClick: () => g({}),
							children: "取消选择"
						})]
					}),
					/* @__PURE__ */ X(ne, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => q.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ Z(se, {
							"aria-label": "待合并创作者别名",
							size: "sm",
							sortDescriptor: T[0] ? {
								column: T[0].id,
								direction: T[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => q.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ Z(l, { children: [q.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ X(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ Z(Me.Fragment, { children: [/* @__PURE__ */ Z("span", {
									className: "flex items-center gap-0.5",
									children: [Oe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ X("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ X(te, {})
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
							})] }), /* @__PURE__ */ X(a, { children: q.getRowModel().rows.map((e) => /* @__PURE__ */ Z(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ X(c, { children: Oe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ X(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ X(y, {
						label: "待合并创作者别名",
						unit: "组",
						total: t.length,
						pagination: F,
						onChange: M
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
							children: [/* @__PURE__ */ X(O, { children: "已保存别名" }), /* @__PURE__ */ X("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} 组`
							})]
						}), /* @__PURE__ */ Z("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ X(b, {
								label: "已保存创作者别名",
								sorting: D,
								options: [{
									id: "canonical",
									label: "统一名称"
								}, {
									id: "aliases",
									label: "平台别名"
								}],
								onChange: (e) => {
									k(e), P((e) => ({
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
					/* @__PURE__ */ Z(z, {
						label: "已保存别名批量操作",
						visible: Y.length > 0,
						count: `已选 ${Y.length} 个别名`,
						children: [/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...W(U.isPending),
							onClick: () => void ve({
								title: "移除所选创作者别名",
								body: `将移除以下 ${Y.length} 个别名，对应来源恢复为独立创作者组。`,
								items: Y,
								confirmLabel: "移除所选别名",
								onConfirm: () => U.mutateAsync(Y)
							}),
							children: `移除所选别名（${Y.length}）`
						}), /* @__PURE__ */ X(h, {
							variant: "ghost",
							size: "small",
							onClick: () => w({}),
							children: "取消选择"
						})]
					}),
					e.length ? /* @__PURE__ */ Z(Me.Fragment, { children: [/* @__PURE__ */ X(ne, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => xe.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ Z(se, {
							"aria-label": "已保存创作者别名",
							size: "sm",
							sortDescriptor: D[0] ? {
								column: D[0].id,
								direction: D[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => xe.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ Z(l, { children: [xe.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ X(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ Z(Me.Fragment, { children: [/* @__PURE__ */ Z("span", {
									className: "flex items-center gap-0.5",
									children: [Oe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ X("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ X(te, {})
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
							})] }), /* @__PURE__ */ X(a, { children: xe.getRowModel().rows.map((e) => /* @__PURE__ */ Z(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ X(c, { children: Oe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ X(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ X(y, {
						label: "已保存创作者别名",
						unit: "组",
						total: e.length,
						pagination: I,
						onChange: P
					})] }) : /* @__PURE__ */ X(S, {
						size: "compact",
						icon: pe,
						title: "还没有保存创作者别名",
						actions: i ? void 0 : /* @__PURE__ */ X(x, {
							target: "input[aria-label=\"统一名称\"]",
							children: "添加别名"
						}),
						children: "填写统一名称，以及该创作者在其他平台使用的名字。"
					})
				]
			}),
			/* @__PURE__ */ X(Mt, {
				group: p,
				close: () => m(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Gt = tt({
	rowPaginationFeature: Ye,
	rowSelectionFeature: Xe,
	rowSortingFeature: Ze,
	columnVisibilityFeature: _e,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), Kt = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, qt = /* @__PURE__ */ new Set(["actions"]), Jt = Object.entries(Kt).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Yt = () => He.invalidateQueries({
	queryKey: re,
	exact: !0
}), $ = (e) => e.name || e.url;
function Xt(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Zt({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ X(v, {
		variant: "caption",
		color: "rose",
		children: "拉取失败"
	}) : e.last_fetched_at ? /* @__PURE__ */ X(v, {
		variant: "caption",
		color: "lime",
		children: "正常"
	}) : /* @__PURE__ */ X(v, {
		variant: "caption",
		color: "gray",
		children: "未检查"
	}) : /* @__PURE__ */ X(v, {
		variant: "caption",
		color: "gray",
		children: "已暂停"
	});
}
function Qt({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ X("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${ut}`,
		dangerouslySetInnerHTML: { __html: ge($(e), t, null, "performer") }
	});
}
var $t = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function en(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function tn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return ve({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${$(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function nn({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = at({
		queryKey: re,
		queryFn: ({ signal: e }) => we(e)
	}), u = nt(), d = st("jav-feeds", Jt), f = i.data, m = (0, Q.useMemo)(() => f?.sources ?? [], [f]), [ee, v] = (0, Q.useState)(/* @__PURE__ */ new Set()), x = r?.ids ?? ee, w = r?.onChange ?? v, [ie, T] = (0, Q.useState)(1), [E, D] = (0, Q.useState)(20), [O, A] = (0, Q.useState)([]), j = Be(m.length, E, ie);
	(0, Q.useEffect)(() => {
		T((e) => Math.min(e, j.pages));
	}, [j.pages]), (0, Q.useEffect)(() => {
		w((e) => {
			let t = new Set(m.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [m, w]);
	let N = it({
		mutationFn: async (e) => {
			let t = await Re(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ge(t) : await Qe(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (w(/* @__PURE__ */ new Set()), Yt(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				u.setError(`${n.length} 条没有写入：${e.ok ? "" : J(e.error)}`);
			}
		},
		onError: (e) => u.setError(J(e))
	}), P = (0, Q.useMemo)(() => en(m), [m]), F = (0, Q.useRef)({
		readOnly: e,
		shared: P,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	F.current = {
		readOnly: e,
		shared: P,
		busy: u.busy,
		toggle: (e, t) => void u.run(`enabled-${e.id}`, (n) => Qe(e.id, t, n), () => void Yt()),
		fetch: (e) => void u.run(`check-${e.id}`, (t) => K(t, [e.id]), () => void Yt()),
		remove: (e) => void tn([e], async () => {
			await Ge(e.id), t(`已移除订阅源「${$(e)}」`), Yt();
		})
	};
	let I = (0, Q.useMemo)(() => {
		let e = ye(), t = (e) => () => Kt[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ X(ue, {
					table: e.table,
					label: "全选本页订阅源",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ X(_, {
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
					let t = $t(e.row.original, F.current.shared);
					return /* @__PURE__ */ Z("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ X(Qt, { source: e.row.original }),
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
					className: "text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ X(V, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : Xt(e.getValue()),
						label: Xt(e.getValue())
					}), /* @__PURE__ */ X(fe, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ X(Zt, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ X("span", {
					className: "whitespace-nowrap",
					children: Y(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ X("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? Ie(e.row.original.last_fetched_at) : "还没拉过"
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
							isDisabled: F.current.readOnly,
							onChange: (t) => F.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: xe,
							"aria-label": `拉取 ${$(e.row.original)}`,
							disabled: F.current.readOnly,
							...W(F.current.busy === `check-${e.row.original.id}`),
							onClick: () => F.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: M,
							"aria-label": `移除 ${$(e.row.original)}`,
							disabled: F.current.readOnly,
							onClick: () => F.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), ae = (0, Q.useMemo)(() => Object.fromEntries([...x].map((e) => [String(e), !0])), [x]), R = ot({
		features: Gt,
		data: m,
		columns: I,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: ae,
			sorting: O,
			pagination: {
				pageIndex: j.page - 1,
				pageSize: E
			},
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onSortingChange: (e) => {
			A(e), T(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(ae) : e;
			w(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!f) return i.error ? /* @__PURE__ */ X(L, {
		tone: "error",
		title: "打不开订阅源",
		children: J(i.error)
	}) : /* @__PURE__ */ X(k, { children: "正在读订阅源。" });
	let B = () => void u.run("check", (e) => K(e), () => void Yt()), de = (e) => {
		r?.onActivate(), w((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, H = m.filter((e) => x.has(e.id)), pe = m.filter((e) => e.last_error);
	return /* @__PURE__ */ X("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ Z("section", {
			"aria-label": "JAV 订阅列表",
			className: G({
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
								...W(u.busy === "check"),
								children: "立即拉取"
							}),
							/* @__PURE__ */ X(ce, {
								preferences: d,
								label: "JAV 订阅源"
							}),
							/* @__PURE__ */ X(b, {
								label: "JAV 订阅源",
								sorting: O,
								onChange: (e) => {
									A(e), T(1);
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
									label: Kt[e]
								}))
							})
						]
					})]
				}),
				pe.length || u.error ? /* @__PURE__ */ Z("div", {
					className: "flex flex-col gap-3",
					children: [pe.length ? /* @__PURE__ */ X(L, {
						tone: "error",
						title: `${pe.length.toLocaleString()} 条订阅源拉取失败`,
						extra: /* @__PURE__ */ X("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: pe.map((e) => /* @__PURE__ */ X("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${$(e)}：${Se(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: "这些订阅源这一轮没有取到新条目。"
					}) : null, u.error ? /* @__PURE__ */ X(C, { children: u.error }) : null]
				}) : null,
				/* @__PURE__ */ Z(z, {
					visible: H.length > 0,
					label: "订阅源批量操作",
					count: `已选 ${H.length} 条订阅源`,
					children: [
						/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...W(N.isPending),
							onClick: () => N.mutate({
								ids: H.map((e) => e.id),
								action: "enabled"
							}),
							children: "启用"
						}),
						/* @__PURE__ */ X(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...W(N.isPending),
							onClick: () => N.mutate({
								ids: H.map((e) => e.id),
								action: "paused"
							}),
							children: "暂停"
						}),
						/* @__PURE__ */ X(h, {
							variant: "danger",
							size: "small",
							disabled: e,
							...W(N.isPending),
							onClick: () => void tn(H, () => N.mutateAsync({
								ids: H.map((e) => e.id),
								action: "remove"
							})),
							children: "移除"
						}),
						/* @__PURE__ */ X(h, {
							variant: "ghost",
							size: "small",
							onClick: () => w(/* @__PURE__ */ new Set()),
							children: "取消选择"
						})
					]
				}),
				m.length ? /* @__PURE__ */ X(ne, {
					follow: !0,
					preferences: d,
					onRowClick: (e) => de(Number(e)),
					children: /* @__PURE__ */ Z(se, {
						"aria-label": "JAV 订阅源",
						size: "sm",
						sortDescriptor: O[0] ? {
							column: O[0].id,
							direction: O[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => R.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ Z(l, { children: [R.getHeaderGroups()[0].headers.map((e) => {
							let t = Oe(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ X(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ Z(Me.Fragment, { children: [qt.has(e.column.id) ? /* @__PURE__ */ X(p, { children: t }) : /* @__PURE__ */ Z("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ X("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ X(te, {})
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
						})] }), /* @__PURE__ */ X(a, { children: R.getRowModel().rows.map((e) => /* @__PURE__ */ Z(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ X(c, { children: Oe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ X(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ X(S, {
					icon: g,
					title: "还没有订阅源",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ X(h, {
						variant: "secondary",
						onClick: n,
						children: "添加订阅"
					}),
					children: "在「添加关注」按女优名添加，或在人物页点「订阅新作」。"
				}),
				m.length ? /* @__PURE__ */ X(y, {
					label: "JAV 订阅",
					total: j.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: j.page - 1,
						pageSize: E
					},
					onChange: (e) => {
						D(e.pageSize), T(e.pageIndex + 1);
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
var rn = (e) => E.some(([t]) => t === e);
function an({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ Z("div", {
		className: G({
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
function on(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, Q.useState)(rn(e.tab) ? e.tab : "list"), [p, m] = (0, Q.useState)(Math.max(1, Math.floor(e.page) || 1)), [h, g] = (0, Q.useState)(() => Je(e.sort, e.dir).sort), [_, te] = (0, Q.useState)(() => Je(e.sort, e.dir).dir), [v, y] = (0, Q.useState)(Pe(e.layout) ? e.layout : "default"), [ne, b] = (0, Q.useState)(ze(e.pageSize)), [x, S] = (0, Q.useState)(/* @__PURE__ */ new Set()), [C, D] = (0, Q.useState)(/* @__PURE__ */ new Set()), O = at({
		queryKey: T,
		queryFn: ({ signal: e }) => Te(e)
	}), k = at({
		queryKey: ie,
		queryFn: ({ signal: e }) => Ce(e)
	}), A = at({
		queryKey: re,
		queryFn: ({ signal: e }) => we(e)
	}), j = O.data || { sources: [] }, M = k.data || {
		root: "",
		providers: []
	}, N = j.sources;
	(0, Q.useEffect)(() => {
		S((e) => {
			let t = Fe(e, N);
			return t.size === e.size ? e : t;
		});
	}, [N]);
	let P = (e) => {
		let n = e.sort ?? h, r = e.dir ?? _;
		t({
			tab: e.tab ?? c,
			page: e.page ?? p,
			sort: n === "checked" ? "" : n,
			dir: r === R[n] ? "" : r
		});
	}, F = je(N), I = N.filter(Ne).length, ae = N.filter((e) => e.enabled).length, z = (M.providers || []).filter((e) => e.requirement === "required" && !be(e)).length, B = new Set((A.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ Z(ct, { children: [
		a ? /* @__PURE__ */ X(L, {
			tone: "warning",
			title: "本机只能浏览",
			extra: s ? /* @__PURE__ */ X("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ X(w, {
					href: s,
					children: "前往写入端管理关注"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ Z("div", {
			className: lt,
			"aria-label": "关注概览",
			children: [
				/* @__PURE__ */ X(an, {
					term: "关注创作者",
					figure: F.length,
					unit: "位"
				}),
				/* @__PURE__ */ X(an, {
					term: "启用来源",
					figure: ae,
					unit: `/ ${N.length}`
				}),
				/* @__PURE__ */ X(an, {
					term: "检查失败",
					figure: I,
					unit: "个来源"
				}),
				/* @__PURE__ */ X(an, {
					term: "未看更新",
					figure: j.counts?.new || 0,
					unit: "条"
				}),
				/* @__PURE__ */ X(an, {
					term: "JAV 订阅",
					figure: B,
					unit: "位"
				}),
				/* @__PURE__ */ X(an, {
					term: "未看新作",
					figure: A.data?.unread || 0,
					unit: "条"
				})
			]
		}),
		/* @__PURE__ */ Z(f, {
			selectedKey: c,
			onSelectionChange: (e) => {
				let t = String(e);
				rn(t) && (S(/* @__PURE__ */ new Set()), D(/* @__PURE__ */ new Set()), l(t), P({ tab: t }));
			},
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ X(dt, {
					"aria-label": "关注管理区域",
					"data-section-nav": !0,
					"data-section-items": !0,
					className: "flex max-w-full flex-nowrap overflow-x-auto",
					children: E.map(([e, t]) => /* @__PURE__ */ X(d, {
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
					children: [/* @__PURE__ */ X(nn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), P({ tab: "add" });
						},
						selection: {
							ids: C,
							onChange: D,
							onActivate: () => S(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ X(mt, {
						data: j,
						sort: h,
						dir: _,
						page: p,
						layout: v,
						pageSize: ne,
						selected: x,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), P({ tab: "add" });
						},
						onSort: (e, t) => {
							g(e), te(t), m(1), P({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							m(e), P({ page: e });
						},
						onSelected: (e) => {
							S(e), D(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							y(e), m(1), n({ layout: e }), P({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), m(1), n({ pageSize: e }), P({ page: 1 });
						}
					})]
				}),
				/* @__PURE__ */ Z(u, {
					id: "add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ X(Et, {
							data: j,
							credentials: M,
							readOnly: a,
							toast: r
						}),
						/* @__PURE__ */ X(jt, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								A.refetch(), l("list"), P({ tab: "list" });
							}
						}),
						/* @__PURE__ */ X(Wt, {
							groups: j.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: j.alias_suggestions || [],
							sources: j.sources
						})
					]
				}),
				/* @__PURE__ */ X(u, {
					id: "tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ X(de, { scope: "online" })
				})
			]
		}),
		/* @__PURE__ */ X("div", { children: /* @__PURE__ */ Z(ee, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["来源与订阅设置", z ? `（${z}）` : ""]
		}) })
	] });
}
export { on as FollowManagePage };

//# debugId=1cb56f0e-0ec6-4284-8e6d-97713fbbf0ed