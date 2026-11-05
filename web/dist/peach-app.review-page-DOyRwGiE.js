(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e5861e65-3055-49bf-b685-a1cc1f3b9263", e._sentryDebugIdIdentifier = "sentry-dbid-e5861e65-3055-49bf-b685-a1cc1f3b9263");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as e, $b4f18e3395fe64d7$export$3e41faf802a29e71 as t, $b4f18e3395fe64d7$export$b2539bed5023c21c as n, $ea3928288112382f$export$439d29a4e110a164 as r, $fe21c36db05242bb$export$d7b12c4107be0d61 as i, Button as a, ButtonLink as o, Checkbox as s, CheckboxGlyph as c, Chip as l, CollapseChevron as u, CollapseRegion as d, DEFAULT_CATEGORY as f, ENTITY_REVIEW_KINDS as p, Ea as m, EmptyState as h, ExternalLink as ee, FIELDSET_FOOT as g, FilterGlassRows as _, Gg as v, InputBase as y, LinkButton as te, Note as b, REVIEW_CATEGORIES as x, REVIEW_DECISION_LABELS as ne, REVIEW_KEY as S, REVIEW_LABELS as C, REVIEW_QUEUES as re, REVIEW_QUEUE_LABELS as w, RadioDot as T, RadioGroup as E, Select as D, SelectItem as O, SelectionActions as k, SelectionDock as A, TextField as j, Wt as M, __toESM as N, apiGet as P, apiSend as F, avatarInner as ie, busyProps as I, canApprove as ae, cardClass as oe, commonReviewSources as L, composingKey as se, confirmModal as ce, currentReviewRow as le, cx as R, decisionPayload as ue, decisionReceipt as de, defaultChoice as fe, errorMessage as z, fetchReview as pe, filterReviewRows as me, groupReviewRows as he, import_jsx_runtime as ge, isReviewCategory as _e, jsx as B, jsxs as V, l7 as ve, localTime as ye, m7 as be, mirrorText as xe, paginationRange as H, pendingGenres as Se, queryClient as Ce, recordGenre as we, reloadReview as U, require_react as W, reviewGroupingOptions as Te, reviewQueueData as Ee, reviewQueueOf as De, reviewWindow as Oe, rowEvidence as G, rowFieldName as ke, rowSubject as Ae, rowTags as K, rowTitle as je, selectReviewRange as Me, settleReviewRows as Ne, spinnerHtml as q, submitDecision as Pe, useMutation as Fe, useOverlayScrollbar as Ie, useQuery as Le, useViewGlide as Re } from "./peach-app.js";
import { Page as ze } from "./peach-app.page-CW3QRN2N.js";
import { DataTable as Be } from "./peach-app.data-table-D4P7HkPU.js";
import { LEGACY_AVATAR_IMG as Ve } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as He } from "./peach-app.pill-aria-tab-list-Byrq5vdA.js";
// src/react/review/auto-landings.ts
var J = /* @__PURE__ */ N(W(), 1), Ue = "/api/review/auto-landings", We = "/api/review/auto-landings/revert", Ge = ["review", "auto-landings"], Y = (e) => P(Ue, e), Ke = (e) => P(`${Ue}?items=${encodeURIComponent(e.join("\n"))}`), qe = (e, t) => F(We, {
	items: e,
	token: t
}), Je = (e) => e.at === null ? "" : ye((/* @__PURE__ */ new Date(e.at * 1e3)).toISOString()), X = (e) => e.code || e.name || (e.asset_id ? `#${e.asset_id}` : "未知作品"), Ye = (e) => e ? `「${e}」` : "空", Z = (e) => e.tags.length ? e.tags.join("、") : e.value, Q = (e) => e.tags.length ? "原有标签保留" : `原为 ${e.previous.length ? e.previous.map(Ye).join("、") : "空"}`;
function Xe(e) {
	return [
		...e.restores.map((e) => `${X(e)} ${e.field}：${Ye(e.current)} 改回 ${Ye(e.previous)}`),
		...e.tags.map((e) => `${X(e)} 删除标签「${e.tag}」`),
		...e.changed.map((e) => e.gone ? `${X(e)} ${e.field}：作品已不在账本中，跳过` : `${X(e)} ${e.field}：之后已被修改，保留现值`)
	];
}
function Ze(e) {
	let t = [e.restores.length ? `改回 ${e.restores.length} 条资料` : "", e.tags.length ? `删除 ${e.tags.length} 个自动补上的标签` : ""].filter(Boolean);
	return [
		`将撤回 ${e.decisions} 条自动写入：${t.join("，") || "没有要改的资料"}。`,
		e.changed.length ? `${e.changed.length} 条资料写入后被修改过或作品已删除，不改动。` : "",
		"撤回前会自动备份账本。下一轮资料处理仍按同一判据判断，可能再次写入。"
	].filter(Boolean).join("");
}
function Qe(e) {
	let t = [e.restored ? `改回 ${e.restored} 条资料` : "", e.removed_tags ? `删除 ${e.removed_tags} 个标签` : ""].filter(Boolean);
	return `已撤回 ${e.decisions} 条自动写入${t.length ? `：${t.join("，")}` : ""}`;
}
// src/react/review/auto-landings-card.tsx
var $e = "资料处理按确定判据自动写入的标题、发行日期与标签，一行一条。撤回会把覆盖的值改回写入前、删掉补上的标签；写入后又被修改过的作品保留现值。";
function et({ item: e, openItem: t }) {
	let n = e.asset_id && !e.gone ? () => t(e.asset_id) : void 0;
	return /* @__PURE__ */ V("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			disabled: !n,
			onClick: n,
			className: "flex aspect-card-cover w-16 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring disabled:cursor-default",
			children: [e.preview_url ? /* @__PURE__ */ B("img", {
				src: e.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ B("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: "无封面"
			}), /* @__PURE__ */ B(r, { children: `打开作品 ${X(e)}` })]
		}), /* @__PURE__ */ V("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ V("span", {
				className: "truncate text-body-medium text-text-primary",
				children: [X(e), e.assets > 1 ? /* @__PURE__ */ B("small", {
					className: "ml-1 text-caption-1-regular text-text-secondary",
					children: `${e.assets} 个文件`
				}) : null]
			}), /* @__PURE__ */ B("small", {
				title: e.name,
				className: "truncate text-caption-1-regular text-text-secondary",
				children: e.gone ? "作品已不在账本中" : e.name
			})]
		})]
	});
}
function tt({ item: e }) {
	return /* @__PURE__ */ V("span", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [/* @__PURE__ */ V("span", {
			title: Z(e),
			className: "truncate text-body-regular text-text-primary",
			children: [/* @__PURE__ */ B("span", {
				className: "text-text-secondary",
				children: `${e.field}：`
			}), Z(e)]
		}), /* @__PURE__ */ B("small", {
			title: Q(e),
			className: "truncate text-caption-1-regular text-text-secondary",
			children: Q(e)
		})]
	});
}
function nt({ locked: e, openItem: t, toast: n }) {
	let [r, i] = (0, J.useState)([]), [o, s] = (0, J.useState)(null), c = Le({
		queryKey: Ge,
		queryFn: ({ signal: e }) => Y(e)
	}), l = c.data?.items ?? [], u = Fe({
		mutationFn: async (e) => {
			let t = await Ke(e), { confirmed: n, result: r } = await ce({
				title: "撤回自动写入",
				body: Ze(t),
				items: Xe(t),
				confirmLabel: "撤回",
				onConfirm: () => qe(t.items, t.token)
			});
			return n ? r : null;
		},
		onSuccess: (e) => {
			e && (s(e), i([]), n(Qe(e)), Ce.invalidateQueries({ queryKey: S }));
		},
		onError: (e) => n(z(e))
	});
	return !l.length && !o && !c.isError ? null : /* @__PURE__ */ V("section", {
		"aria-labelledby": "auto-landings-title",
		className: "flex flex-col gap-4",
		children: [o ? /* @__PURE__ */ V(b, {
			tone: "success",
			title: Qe(o),
			children: [/* @__PURE__ */ B("p", {
				className: "text-body-2-regular",
				children: `撤回前的账本已备份为 ${o.backup}。`
			}), o.changed.length ? /* @__PURE__ */ V("p", {
				className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-body-2-regular",
				children: [`${o.changed.length} 条资料写入后被修改过或作品已删除，未改动：`, o.changed.map((e) => e.gone ? /* @__PURE__ */ B("span", {
					className: "text-text-secondary",
					children: `#${e.asset_id}（已删除）`
				}, `${e.asset_id}:${e.field}`) : /* @__PURE__ */ B(te, {
					size: "small",
					onClick: () => t(e.asset_id),
					children: X(e)
				}, `${e.asset_id}:${e.field}`))]
			}) : null]
		}) : null, c.isError ? /* @__PURE__ */ B(b, {
			tone: "error",
			title: "读取自动写入的资料失败",
			children: z(c.error)
		}) : l.length ? /* @__PURE__ */ B(Be, {
			label: "自动写入的资料",
			items: l,
			columns: [
				{
					id: "work",
					label: "作品",
					width: 300,
					min: 240,
					value: (e) => X(e),
					render: (e) => /* @__PURE__ */ B(et, {
						item: e,
						openItem: t
					})
				},
				{
					id: "written",
					label: "写入",
					width: 320,
					min: 220,
					value: (e) => `${e.field}${Z(e)}`,
					render: (e) => /* @__PURE__ */ B(tt, { item: e })
				},
				{
					id: "rule",
					label: "规则与时间",
					width: 176,
					min: 144,
					value: (e) => e.at ?? 0,
					render: (e) => /* @__PURE__ */ V("span", {
						title: e.batch,
						className: "flex min-w-0 flex-col gap-0.5 text-text-secondary",
						children: [/* @__PURE__ */ B("span", {
							className: "truncate text-body-2-regular",
							children: e.label
						}), /* @__PURE__ */ B("small", {
							className: "tabular-nums text-caption-1-regular",
							children: Je(e) || "时间未知"
						})]
					})
				}
			],
			title: "自动写入的资料",
			titleId: "auto-landings-title",
			unit: "条",
			description: $e,
			rowId: (e) => e.item_key,
			rowLabel: (e) => `${X(e)} ${e.field}`,
			selected: r,
			onSelected: i,
			actions: (t) => /* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				disabled: e || !t.length,
				...I(u.isPending),
				onClick: () => u.mutate(t.map((e) => e.item_key)),
				children: `撤回所选（${t.length}）`
			})
		}) : null]
	});
}
// src/react/review/bulk-toolbar.tsx
function rt(e) {
	let { groupOptions: t, groupBy: n, onGroupBy: r, groups: i, filter: o, onFilter: s, pageKeys: c, selected: l, onSelected: u, selectedRows: d, metadata: f, approvable: p, busy: m, feedback: h, onUnifySource: ee, onRun: g, queueView: v = "pending", queueCounts: y, onQueueChange: te, locked: b, fields: x, fieldFilter: ne, onFieldFilter: S } = e, C = c.filter((e) => l.has(e)), T = C.length > 0 && C.length === c.length, E = L(d), k = f && d.some((e) => (e.candidates?.length || 0) > 1), j = E.length ? "统一选择来源" : "所选项目无共同来源", M = (0, J.useRef)(null), N = (0, J.useRef)(null), P = (0, J.useRef)(null), [F, ie] = (0, J.useState)(!1), I = Re(M, N, "[data-entity-state][aria-pressed=\"true\"]", v);
	return (0, J.useLayoutEffect)(() => {
		let e = N.current, t = P.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => ie(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ V(ge.Fragment, { children: [/* @__PURE__ */ B(_, {
		label: "复核筛选",
		topLabel: "处理状态",
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: c.length ? "min-h-12 max-w-full flex-none flex-wrap" : "hidden",
		bottomRef: P,
		panes: /* @__PURE__ */ B("span", {
			ref: M,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ V("div", {
			ref: N,
			role: "group",
			"aria-label": "复核状态",
			"data-entity-states": "",
			onPointerLeave: I.leave,
			children: [re.map((e) => /* @__PURE__ */ V("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: m,
				"aria-pressed": v === e,
				onPointerEnter: I.hover,
				onClick: () => {
					e !== v && te(e);
				},
				children: [
					/* @__PURE__ */ B("span", {
						"data-copy-key": `review.queue.${e}`,
						children: w[e]
					}),
					" ",
					/* @__PURE__ */ B("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: y ? y[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ B("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: F ? void 0 : "invisible"
			})]
		}),
		bottom: c.length ? /* @__PURE__ */ V(ge.Fragment, { children: [
			f && x.length ? /* @__PURE__ */ V(D, {
				"aria-label": "筛选资料字段",
				size: "sm",
				prefix: /* @__PURE__ */ B("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: "字段"
				}),
				selectedKey: ne || "*",
				isDisabled: m,
				onSelectionChange: (e) => {
					e !== null && S(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ B(O, {
					id: "*",
					children: "全部"
				}), x.map((e) => /* @__PURE__ */ B(O, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ B(D, {
				"aria-label": "筛选分组方式",
				size: "sm",
				selectedKey: n,
				onSelectionChange: (e) => {
					e !== null && r(String(e));
				},
				children: t.map(([e, t]) => /* @__PURE__ */ B(O, {
					id: e,
					children: t
				}, e))
			}),
			i.length > 1 ? /* @__PURE__ */ V(D, {
				"aria-label": n === "field" ? "筛选字段分类" : "筛选当前分类",
				size: "sm",
				prefix: "分类",
				selectedKey: o || "*",
				onSelectionChange: (e) => {
					e !== null && s(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ B(O, {
					id: "*",
					children: "全部"
				}), i.map((e) => /* @__PURE__ */ B(O, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			b ? null : /* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				leadingIcon: ve,
				"aria-pressed": T,
				disabled: m,
				onClick: () => {
					let e = new Set(l);
					for (let t of c) T ? e.delete(t) : e.add(t);
					u(e);
				},
				children: T ? "清空当前选择" : o ? "全选当前分类" : "全选本页"
			})
		] }) : null
	}), /* @__PURE__ */ V(A, {
		label: "复核所选项目",
		visible: !b && l.size > 0,
		count: `已选 ${l.size} 项`,
		children: [
			k && v !== "ignored" ? /* @__PURE__ */ V(D, {
				"aria-label": "统一选择来源",
				size: "sm",
				selectedKey: "",
				isDisabled: m || !E.length,
				onSelectionChange: (e) => {
					e !== null && e !== "" && ee(String(e));
				},
				children: [/* @__PURE__ */ B(O, {
					id: "",
					children: j
				}), E.map((e) => /* @__PURE__ */ B(O, {
					id: e,
					children: e
				}, e))]
			}) : null,
			v === "ignored" ? null : /* @__PURE__ */ B(a, {
				variant: "ghost",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("rejected"),
				children: "忽略所选"
			}),
			v === "pending" ? /* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("skipped"),
				children: "稍后处理所选"
			}) : /* @__PURE__ */ B(a, {
				variant: v === "ignored" ? "primary" : "secondary",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("restore"),
				children: "恢复所选"
			}),
			v === "ignored" ? null : /* @__PURE__ */ B(a, {
				variant: "primary",
				size: "small",
				disabled: m || !l.size || !p,
				onClick: () => g("approved"),
				children: "通过所选"
			}),
			/* @__PURE__ */ B(a, {
				variant: "ghost",
				size: "small",
				disabled: m,
				onClick: () => u(/* @__PURE__ */ new Set()),
				children: "取消选择"
			}),
			h ? /* @__PURE__ */ B("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-secondary",
				children: h
			}) : null
		]
	})] });
}
// src/react/boardui/components/base/radio/radio-card.tsx
function it({ className: e, title: t, description: n, ref: r, ...a }) {
	return /* @__PURE__ */ B(i, {
		ref: r,
		...a,
		className: (t) => R("group flex w-full items-center justify-between gap-3 rounded-2lg border border-border-button-default py-3 pe-5 ps-4 select-none", "transition-colors duration-150 ease", t.isHovered && !t.isDisabled ? "bg-background-primary-hover" : "bg-background-primary-default", t.isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", typeof e == "function" ? e(t) : e),
		children: (e) => /* @__PURE__ */ V(ge.Fragment, { children: [/* @__PURE__ */ V("span", {
			className: "flex min-w-0 flex-col gap-0.5",
			children: [/* @__PURE__ */ B("span", {
				className: "truncate text-body-medium text-text-primary",
				children: t
			}), n != null && /* @__PURE__ */ B("span", {
				className: "truncate text-body-regular text-text-secondary",
				children: n
			})]
		}), /* @__PURE__ */ B("span", {
			className: "flex shrink-0 items-center py-1",
			children: /* @__PURE__ */ B(T, {
				size: "md",
				selected: e.isSelected,
				focusVisible: e.isFocusVisible
			})
		})] })
	});
}
// node_modules/diff/libesm/diff/base.js
var $ = class {
	diff(e, t, n = {}) {
		let r;
		typeof n == "function" ? (r = n, n = {}) : "callback" in n && (r = n.callback);
		let i = this.castInput(e, n), a = this.castInput(t, n), o = this.removeEmpty(this.tokenize(i, n)), s = this.removeEmpty(this.tokenize(a, n));
		return this.diffWithOptionsObj(o, s, n, r);
	}
	diffWithOptionsObj(e, t, n, r) {
		let i = (e) => {
			if (e = this.postProcess(e, n), r) setTimeout(function() {
				r(e);
			}, 0);
			else return e;
		}, a = t.length, o = e.length, s = 1, c = a + o;
		n.maxEditLength != null && (c = Math.min(c, n.maxEditLength));
		let l = n.timeout ?? Infinity, u = Date.now() + l, d = [{
			oldPos: -1,
			lastComponent: void 0
		}], f = this.extractCommon(d[0], t, e, 0, n);
		if (d[0].oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(d[0].lastComponent, t, e));
		let p = -Infinity, m = Infinity, h = () => {
			for (let r = Math.max(p, -s); r <= Math.min(m, s); r += 2) {
				let s, c = d[r - 1], l = d[r + 1];
				c && (d[r - 1] = void 0);
				let u = !1;
				if (l) {
					let e = l.oldPos - r;
					u = l && 0 <= e && e < a;
				}
				let h = c && c.oldPos + 1 < o;
				if (!u && !h) d[r] = void 0;
				else {
					if (s = !h || u && c.oldPos < l.oldPos ? this.addToPath(l, !0, !1, 0, n) : this.addToPath(c, !1, !0, 1, n), f = this.extractCommon(s, t, e, r, n), s.oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(s.lastComponent, t, e)) || !0;
					d[r] = s, s.oldPos + 1 >= o && (m = Math.min(m, r - 1)), f + 1 >= a && (p = Math.max(p, r + 1));
				}
			}
			s++;
		};
		if (r) (function e() {
			setTimeout(function() {
				if (s > c || Date.now() > u) return r(void 0);
				h() || e();
			}, 0);
		})();
		else for (; s <= c && Date.now() <= u;) {
			let e = h();
			if (e) return e;
		}
	}
	addToPath(e, t, n, r, i) {
		let a = e.lastComponent;
		return a && !i.oneChangePerToken && a.added === t && a.removed === n ? {
			oldPos: e.oldPos + r,
			lastComponent: {
				count: a.count + 1,
				added: t,
				removed: n,
				previousComponent: a.previousComponent
			}
		} : {
			oldPos: e.oldPos + r,
			lastComponent: {
				count: 1,
				added: t,
				removed: n,
				previousComponent: a
			}
		};
	}
	extractCommon(e, t, n, r, i) {
		let a = t.length, o = n.length, s = e.oldPos, c = s - r, l = 0;
		for (; c + 1 < a && s + 1 < o && this.equals(n[s + 1], t[c + 1], i);) c++, s++, l++, i.oneChangePerToken && (e.lastComponent = {
			count: 1,
			previousComponent: e.lastComponent,
			added: !1,
			removed: !1
		});
		return l && !i.oneChangePerToken && (e.lastComponent = {
			count: l,
			previousComponent: e.lastComponent,
			added: !1,
			removed: !1
		}), e.oldPos = s, c;
	}
	equals(e, t, n) {
		return n.comparator ? n.comparator(e, t) : e === t || !!n.ignoreCase && e.toLowerCase() === t.toLowerCase();
	}
	removeEmpty(e) {
		let t = [];
		for (let n = 0; n < e.length; n++) e[n] && t.push(e[n]);
		return t;
	}
	castInput(e, t) {
		return e;
	}
	tokenize(e, t) {
		return Array.from(e);
	}
	join(e) {
		return e.join("");
	}
	postProcess(e, t) {
		return e;
	}
	get useLongestToken() {
		return !1;
	}
	buildValues(e, t, n) {
		let r = [], i;
		for (; e;) r.push(e), i = e.previousComponent, delete e.previousComponent, e = i;
		r.reverse();
		let a = r.length, o = 0, s = 0, c = 0;
		for (; o < a; o++) {
			let e = r[o];
			if (e.removed) e.value = this.join(n.slice(c, c + e.count)), c += e.count;
			else {
				if (!e.added && this.useLongestToken) {
					let r = t.slice(s, s + e.count);
					r = r.map(function(e, t) {
						let r = n[c + t];
						return r.length > e.length ? r : e;
					}), e.value = this.join(r);
				} else e.value = this.join(t.slice(s, s + e.count));
				s += e.count, e.added || (c += e.count);
			}
		}
		return r;
	}
}, at = new class extends $ {}();
function ot(e, t, n) {
	return at.diff(e, t, n);
}
// node_modules/diff/libesm/util/string.js
function st(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
	return e.slice(0, n);
}
function ct(e, t) {
	let n;
	if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
	for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
	return e.slice(-n);
}
function lt(e, t, n) {
	if (e.slice(0, t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);
	return n + e.slice(t.length);
}
function ut(e, t, n) {
	if (!t) return e + n;
	if (e.slice(-t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);
	return e.slice(0, -t.length) + n;
}
function dt(e, t) {
	return lt(e, t, "");
}
function ft(e, t) {
	return ut(e, t, "");
}
function pt(e, t) {
	return t.slice(0, mt(e, t));
}
function mt(e, t) {
	let n = 0;
	e.length > t.length && (n = e.length - t.length);
	let r = t.length;
	e.length < t.length && (r = e.length);
	let i = Array(r), a = 0;
	i[0] = 0;
	for (let e = 1; e < r; e++) {
		for (t[e] == t[a] ? i[e] = i[a] : i[e] = a; a > 0 && t[e] != t[a];) a = i[a];
		t[e] == t[a] && a++;
	}
	a = 0;
	for (let r = n; r < e.length; r++) {
		for (; a > 0 && e[r] != t[a];) a = i[a];
		e[r] == t[a] && a++;
	}
	return a;
}
function ht(e, t) {
	let n = [];
	for (let r of Array.from(t.segment(e))) {
		let e = r.segment;
		n.length && /\s/.test(n[n.length - 1]) && /\s/.test(e) ? n[n.length - 1] += e : n.push(e);
	}
	return n;
}
function gt(e, t) {
	if (t) return vt(e, t)[1];
	let n;
	for (n = e.length - 1; n >= 0 && e[n].match(/\s/); n--);
	return e.substring(n + 1);
}
function _t(e, t) {
	if (t) return vt(e, t)[0];
	let n = e.match(/^\s*/);
	return n ? n[0] : "";
}
function vt(e, t) {
	if (!t) return [_t(e), gt(e)];
	if (t.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
	let n = ht(e, t), r = n[0], i = n[n.length - 1];
	return [/\s/.test(r) ? r : "", /\s/.test(i) ? i : ""];
}
// node_modules/diff/libesm/diff/word.js
var yt = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", bt = RegExp(`[${yt}]+|\\s+|[^${yt}]`, "ug");
new class extends $ {
	equals(e, t, n) {
		return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
	}
	tokenize(e, t = {}) {
		let n;
		if (t.intlSegmenter) {
			let r = t.intlSegmenter;
			if (r.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
			n = ht(e, r);
		} else n = e.match(bt) || [];
		let r = [], i = null;
		return n.forEach((e) => {
			/\s/.test(e) ? i == null ? r.push(e) : r.push(r.pop() + e) : i != null && /\s/.test(i) ? r[r.length - 1] == i ? r.push(r.pop() + e) : r.push(i + e) : r.push(e), i = e;
		}), r;
	}
	join(e) {
		return e.map((e, t) => t == 0 ? e : e.replace(/^\s+/, "")).join("");
	}
	postProcess(e, t) {
		if (!e || t.oneChangePerToken) return e;
		let n = null, r = null, i = null;
		return e.forEach((e) => {
			e.added ? r = e : e.removed ? i = e : ((r || i) && xt(n, i, r, e, t.intlSegmenter), n = e, r = null, i = null);
		}), (r || i) && xt(n, i, r, null, t.intlSegmenter), e;
	}
}();
function xt(e, t, n, r, i) {
	if (t && n) {
		let [a, o] = vt(t.value, i), [s, c] = vt(n.value, i);
		if (e) {
			let r = st(a, s);
			e.value = ut(e.value, s, r), t.value = dt(t.value, r), n.value = dt(n.value, r);
		}
		if (r) {
			let e = ct(o, c);
			r.value = lt(r.value, c, e), t.value = ft(t.value, e), n.value = ft(n.value, e);
		}
	} else if (n) {
		if (e) {
			let e = _t(n.value, i);
			n.value = n.value.substring(e.length);
		}
		if (r) {
			let e = _t(r.value, i);
			r.value = r.value.substring(e.length);
		}
	} else if (e && r) {
		let n = _t(r.value, i), [a, o] = vt(t.value, i), s = st(n, a);
		t.value = dt(t.value, s);
		let c = ct(dt(n, s), o);
		t.value = ft(t.value, c), r.value = lt(r.value, n, c), e.value = ut(e.value, n, n.slice(0, n.length - c.length));
	} else if (r) {
		let e = _t(r.value, i), n = pt(gt(t.value, i), e);
		t.value = ft(t.value, n);
	} else if (e) {
		let n = pt(gt(e.value, i), _t(t.value, i));
		t.value = dt(t.value, n);
	}
}
new class extends $ {
	tokenize(e) {
		let t = RegExp(`(\\r?\\n)|[${yt}]+|[^\\S\\n\\r]+|[^${yt}]`, "ug");
		return e.match(t) || [];
	}
}(), new class extends $ {
	constructor() {
		super(...arguments), this.tokenize = St;
	}
	equals(e, t, n) {
		return n.ignoreWhitespace ? (n.newlineIsToken && e.includes("\n") || (e = e.trim()), n.newlineIsToken && t.includes("\n") || (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith("\n") && (e = e.slice(0, -1)), t.endsWith("\n") && (t = t.slice(0, -1))), super.equals(e, t, n);
	}
}();
function St(e, t) {
	t.stripTrailingCr && (e = e.replace(/\r\n/g, "\n"));
	let n = [], r = e.split(/(\n|\r\n)/);
	r[r.length - 1] || r.pop();
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		e % 2 && !t.newlineIsToken ? n[n.length - 1] += i : n.push(i);
	}
	return n;
}
// node_modules/diff/libesm/diff/sentence.js
function Ct(e) {
	return e == "." || e == "!" || e == "?";
}
new class extends $ {
	tokenize(e) {
		let t = [], n = 0;
		for (let r = 0; r < e.length; r++) {
			if (r == e.length - 1) {
				t.push(e.slice(n));
				break;
			}
			if (Ct(e[r]) && e[r + 1].match(/\s/)) {
				for (t.push(e.slice(n, r + 1)), r = n = r + 1; e[r + 1]?.match(/\s/);) r++;
				t.push(e.slice(n, r + 1)), n = r + 1;
			}
		}
		return t;
	}
}(), new class extends $ {
	tokenize(e) {
		return e.split(/([{}:;,]|\s+)/);
	}
}(), new class extends $ {
	constructor() {
		super(...arguments), this.tokenize = St;
	}
	get useLongestToken() {
		return !0;
	}
	castInput(e, t) {
		let { undefinedReplacement: n, stringifyReplacer: r = (e, t) => t === void 0 ? n : t } = t;
		return typeof e == "string" ? e : JSON.stringify(wt(e, null, null, r), null, "  ");
	}
	equals(e, t, n) {
		return super.equals(e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
	}
}();
function wt(e, t, n, r, i) {
	t ||= [], n ||= [], r && (e = r(i === void 0 ? "" : i, e));
	let a = 0;
	for (; a < t.length; a += 1) if (t[a] === e) return n[a];
	let o;
	if (Object.prototype.toString.call(e) === "[object Array]") {
		for (t.push(e), o = Array(e.length), n.push(o), a = 0; a < e.length; a += 1) o[a] = wt(e[a], t, n, r, String(a));
		return t.pop(), n.pop(), o;
	}
	if (e && e.toJSON && (e = e.toJSON()), typeof e == "object" && e) {
		t.push(e), o = {}, n.push(o);
		let i = [], s;
		for (s in e)
 /* istanbul ignore else */
		Object.prototype.hasOwnProperty.call(e, s) && i.push(s);
		for (i.sort(), a = 0; a < i.length; a += 1) s = i[a], o[s] = wt(e[s], t, n, r, s);
		t.pop(), n.pop();
	} else o = e;
	return o;
}
new class extends $ {
	tokenize(e) {
		return e.slice();
	}
	join(e) {
		return e;
	}
	removeEmpty(e) {
		return e;
	}
}();
// src/react/review/comparison-text.tsx
function Tt({ value: e, reference: t }) {
	let n = (0, J.useMemo)(() => t ? ot(t, e).filter((e) => !e.removed) : [{
		value: e,
		added: !1
	}], [e, t]);
	return /* @__PURE__ */ B(ge.Fragment, { children: n.map((e, t) => e.added ? /* @__PURE__ */ B("mark", {
		"data-review-difference": "",
		className: "rounded-sm bg-status-yellow-background text-status-yellow-text",
		children: e.value
	}, t) : /* @__PURE__ */ B("span", { children: e.value }, t)) });
}
// src/react/review/candidate-form.tsx
var Et = {
	title: "标题",
	original_title: "原标题",
	runtime: "来源时长",
	director: "导演",
	label: "Label",
	poster_url: "海报",
	cover_url: "封面",
	screenshot_urls: "截图",
	trailer_url: "预告片"
}, Dt = "reviewgenretags";
function Ot({ tags: e }) {
	return e.length ? /* @__PURE__ */ B("datalist", {
		id: Dt,
		children: e.map((e) => /* @__PURE__ */ B("option", { value: e }, e))
	}) : null;
}
function kt({ candidate: e, row: t }) {
	let [n, r] = (0, J.useState)(!1), i = (0, J.useId)(), o = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return o.length ? /* @__PURE__ */ V("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ V(a, {
			variant: "secondary",
			size: "small",
			leadingIcon: u,
			"aria-expanded": n,
			"aria-controls": i,
			"aria-label": `${n ? "收起" : "展开"} ${e.source || "该来源"} 的来源依据`,
			onClick: () => r(!n),
			children: [/* @__PURE__ */ B("span", {
				"data-copy-key": "review.card.source_evidence",
				children: "来源依据"
			}), ` · ${o.length}`]
		}), /* @__PURE__ */ B(d, {
			id: i,
			open: n,
			children: /* @__PURE__ */ B("dl", {
				className: "flex min-w-0 flex-col gap-2 px-3 pt-2 pb-1",
				children: o.map(([n, r]) => /* @__PURE__ */ V("div", {
					className: "flex min-w-0 flex-wrap gap-x-2",
					children: [
						/* @__PURE__ */ B("dt", {
							className: "text-caption-1-regular text-text-tertiary",
							children: Et[n] || n
						}),
						/* @__PURE__ */ B("dd", {
							className: "min-w-0 text-body-2-regular break-words text-text-primary",
							children: /* @__PURE__ */ B(Tt, {
								value: r.display_value || "",
								reference: n === t.field && t.current_value ? t.current_value : t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[n]?.display_value)?.catalog_evidence?.[n]?.display_value
							})
						}),
						(r.warnings || []).map((e) => /* @__PURE__ */ B("small", {
							className: "w-full text-caption-1-regular text-status-yellow-text",
							children: e
						}, e))
					]
				}, n))
			})
		})]
	}) : null;
}
function At(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || "未标注来源"}${e.official ? " · 官方优先" : ""}${t ? ` · ID ${t}` : ""}`;
}
function jt({ candidate: e, reference: t }) {
	return /* @__PURE__ */ V("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ B("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ B(Tt, {
				value: e.display_value || "",
				reference: t
			})
		}), (e.warnings || []).map((e) => /* @__PURE__ */ B("span", {
			className: "text-body-2-regular text-status-yellow-text",
			children: e
		}, e))]
	});
}
function Mt({ row: e, fieldName: t, value: n, onChange: r, locked: i }) {
	let a = e.candidates || [];
	return a.length ? a.length === 1 ? /* @__PURE__ */ V("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ V("div", {
			className: "flex min-w-0 flex-col gap-2 rounded-2lg bg-background-primary-default px-4 py-3",
			children: [/* @__PURE__ */ B("p", {
				className: "text-body-medium text-text-primary",
				children: At(a[0])
			}), /* @__PURE__ */ B(jt, {
				candidate: a[0],
				reference: e.current_value || void 0
			})]
		}), /* @__PURE__ */ B(kt, {
			candidate: a[0],
			row: e
		})]
	}) : /* @__PURE__ */ B(E, {
		"aria-label": `${t || "资料"}的来源`,
		value: n,
		isDisabled: i,
		onChange: r,
		children: /* @__PURE__ */ B("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: a.map((t) => /* @__PURE__ */ V("div", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ B(it, {
					value: t.candidate_key,
					className: "relative items-start",
					title: /* @__PURE__ */ B("span", {
						title: At(t),
						children: At(t)
					}),
					description: /* @__PURE__ */ B(jt, {
						candidate: t,
						reference: e.current_value || a.find((e) => e.candidate_key !== t.candidate_key)?.display_value
					})
				}), /* @__PURE__ */ B(kt, {
					candidate: t,
					row: e
				})]
			}, t.candidate_key))
		})
	}) : null;
}
function Nt({ genre: e, tags: t, locked: n, toast: r }) {
	let [i, o] = (0, J.useState)(""), [s, c] = (0, J.useState)(""), l = Fe({
		mutationFn: (t) => we(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (r(n ? `已把「${e}」收录为标签「${n}」` : `已把「${e}」判为非内容标签`), await U()) : c(t.error || "服务端拒绝了这次收录");
		},
		onError: (e) => c(z(e))
	}), u = () => {
		let e = i.trim();
		e ? (c(""), l.mutate(e)) : c("先给它一个中文标签");
	};
	return /* @__PURE__ */ V("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ B("b", {
				lang: "ja",
				className: "text-body-medium text-text-primary",
				children: e
			}),
			/* @__PURE__ */ B(j, {
				"aria-label": `「${e}」收录成的中文标签`,
				value: i,
				onChange: o,
				maxLength: 40,
				isDisabled: n || l.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ B(y, {
					size: "small",
					list: t.length ? Dt : void 0,
					autoComplete: "off",
					placeholder: "中文标签",
					onKeyDown: (e) => {
						e.key !== "Enter" || se(e.nativeEvent) || (e.preventDefault(), u());
					}
				})
			}),
			/* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: u,
				children: "收录"
			}),
			/* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: () => {
					c(""), l.mutate("");
				},
				children: "不是内容"
			}),
			s ? /* @__PURE__ */ B("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function Pt({ row: e, tags: t, locked: n, toast: r }) {
	let i = Se(e);
	return i.length ? /* @__PURE__ */ V("div", {
		role: "group",
		"aria-label": "未收录 genre",
		className: "flex flex-col gap-2 border-t border-separator-border pt-4",
		children: [/* @__PURE__ */ B("h5", {
			className: "text-body-2-medium text-text-secondary",
			children: `未收录 genre · ${i.length}`
		}), /* @__PURE__ */ B("div", {
			role: "list",
			className: "flex flex-col",
			children: i.map((e, i) => /* @__PURE__ */ B("div", {
				role: "listitem",
				className: `py-3 first:pt-0 last:pb-0 ${i ? "border-t border-separator-border" : ""}`,
				children: /* @__PURE__ */ B(Nt, {
					genre: e,
					tags: t,
					locked: n,
					toast: r
				})
			}, e))
		})]
	}) : null;
}
// src/react/review/review-evidence.tsx
var Ft = (e = "") => /^https?:\/\//i.test(e) ? e : "", It = (e = "") => Ft(e) || (e.startsWith("/") && !e.startsWith("//") ? e : "");
function Lt({ url: e }) {
	let t = It(e || "");
	return /* @__PURE__ */ B(Rt, { source: t }, t);
}
function Rt({ source: e }) {
	let [t, n] = (0, J.useState)("idle");
	return (0, J.useEffect)(() => {
		if (t !== "loading") return;
		let e = setTimeout(() => n("failed"), 3e4);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ V("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [t === "loading" ? /* @__PURE__ */ V("span", {
			role: "status",
			className: "absolute flex items-center gap-2 text-body-2-regular text-text-secondary",
			children: [/* @__PURE__ */ B("span", { dangerouslySetInnerHTML: { __html: q("正在加载图片") } }), "正在加载图片"]
		}) : null, e && (t === "loading" || t === "ready") ? /* @__PURE__ */ B("img", {
			src: e,
			alt: "来源提供的备选图片",
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${t === "loading" ? "invisible" : ""}`,
			onLoad: () => n("ready"),
			onError: () => n("failed")
		}) : e ? /* @__PURE__ */ V("div", {
			className: "flex flex-col items-center gap-2",
			children: [t === "failed" ? /* @__PURE__ */ B("span", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得来源图片"
			}) : null, /* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				"aria-label": t === "failed" ? "立即重试加载来源图片" : void 0,
				onClick: () => n("loading"),
				children: t === "failed" ? "立即重试" : "查看来源图片"
			})]
		}) : /* @__PURE__ */ B("span", {
			className: "text-body-2-regular text-text-secondary",
			children: "未取得来源图片"
		})]
	});
}
function zt({ asset: e, openItem: t }) {
	let n = e.name || "";
	return /* @__PURE__ */ V("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			onClick: () => t(e.id),
			className: "flex aspect-card-cover w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
			children: [e.preview_url ? /* @__PURE__ */ B("img", {
				src: e.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ B("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: "无封面"
			}), /* @__PURE__ */ B(r, { children: `打开原视频 ${n}` })]
		}), /* @__PURE__ */ V("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ B("b", {
				title: n,
				className: "w-full truncate text-body-medium text-text-primary",
				children: e.code || n || "原视频"
			}), /* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				leadingIcon: v,
				onClick: () => t(e.id),
				children: "打开原视频"
			})]
		})]
	});
}
function Bt({ kind: e, name: t, works: n, avatar: r, openEntity: i }) {
	return /* @__PURE__ */ V("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ B("button", {
			type: "button",
			"aria-label": `打开创作者页：${t}`,
			onClick: () => i(e, t),
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-background-secondary-default text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${Ve}`,
			dangerouslySetInnerHTML: { __html: r }
		}), /* @__PURE__ */ V("div", {
			className: "flex min-w-0 flex-col items-start",
			children: [/* @__PURE__ */ B("button", {
				type: "button",
				onClick: () => i(e, t),
				className: "max-w-full cursor-pointer truncate text-body-medium text-text-primary underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: t
			}), n ? /* @__PURE__ */ B("small", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: `${n.toLocaleString()} 部作品`
			}) : null]
		})]
	});
}
function Vt({ row: e, openItem: t, openEntity: n, onReveal: r, revealing: i, note: s }) {
	let c = Ft(e.profile_url || ""), l = (e.preview_assets || []).slice(0, 6), u = Math.max(0, Number(e.video_count || e.videos || 0));
	return /* @__PURE__ */ V("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ B("h5", {
				className: "text-body-medium text-text-primary",
				children: `待确认人物：${e.babepedia_name || "未标注"}`
			}),
			/* @__PURE__ */ V("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ B(o, {
					variant: "secondary",
					size: "small",
					trailingIcon: M,
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					children: "来源资料"
				}) : null, /* @__PURE__ */ B(a, {
					variant: "secondary",
					size: "small",
					onClick: () => n("creator", e.creator || ""),
					children: `查看全部 ${u.toLocaleString()} 部作品`
				})]
			}),
			/* @__PURE__ */ B(Lt, { url: e.preview_url }),
			/* @__PURE__ */ B("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "通过后记录身份判断。"
			}),
			l.length ? /* @__PURE__ */ V(ge.Fragment, { children: [/* @__PURE__ */ B("h5", {
				className: "text-body-medium text-text-primary",
				children: "本地作品样本"
			}), /* @__PURE__ */ B("ul", {
				className: "flex flex-col gap-1",
				children: l.map((e) => /* @__PURE__ */ V("li", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ B(a, {
						variant: "ghost",
						size: "small",
						className: "min-w-0",
						onClick: () => t(e.id),
						children: /* @__PURE__ */ B("span", {
							title: e.name,
							className: "block max-w-full truncate",
							children: e.name
						})
					}), /* @__PURE__ */ B(a, {
						variant: "ghost",
						size: "small",
						"aria-label": `打开 ${e.name} 的文件位置`,
						...I(i === e.id),
						onClick: () => r(e.id),
						children: "文件位置"
					})]
				}, e.id))
			})] }) : /* @__PURE__ */ B("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "暂无本地作品样本，打开全部作品核对。"
			}),
			s ? /* @__PURE__ */ B("p", {
				role: "status",
				className: "text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function Ht({ assets: e, picked: t, onPicked: n, locked: i }) {
	let [a, o] = (0, J.useState)(null), s = new Set(t), l = (t, r) => {
		if (i) return;
		let c = new Set(s);
		if (r && a !== null) {
			let [n, r] = [Math.min(a, t), Math.max(a, t)];
			for (let t = n; t <= r; t++) c.add(e[t].id);
		} else {
			let n = e[t].id;
			c.has(n) ? c.delete(n) : c.add(n);
		}
		o(t), n(e.filter((e) => c.has(e.id)).map((e) => e.id));
	};
	return /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ B(k, {
			prefix: /* @__PURE__ */ B("span", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: `已选 ${s.size} / ${e.length}`
			}),
			actions: [{
				label: "全选",
				disabled: i,
				onPress: () => n(e.map((e) => e.id))
			}, {
				label: "清空",
				disabled: i,
				onPress: () => n([])
			}]
		}), /* @__PURE__ */ B("div", {
			className: "review-asset-grid gap-1.5",
			children: e.map((e, t) => {
				let n = s.has(e.id);
				return /* @__PURE__ */ V("button", {
					type: "button",
					"aria-pressed": n,
					title: e.name,
					onClick: (e) => l(t, e.shiftKey),
					className: `relative aspect-card-cover cursor-pointer overflow-hidden rounded-surface bg-background-tertiary-default outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-border-focus-ring ${n ? "opacity-100 ring-2 ring-border-button-active ring-inset" : "opacity-50"}`,
					children: [
						/* @__PURE__ */ B("img", {
							src: `/poster?id=${e.id}&c=4`,
							alt: "",
							loading: "lazy",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ B("span", {
							className: "absolute top-1 right-1",
							children: /* @__PURE__ */ B(c, {
								size: "sm",
								state: {
									isSelected: n,
									isIndeterminate: !1,
									isFocusVisible: !1,
									isDisabled: i,
									isHovered: !1
								}
							})
						}),
						/* @__PURE__ */ B(r, { children: `${n ? "已选" : "未选"} ${e.name || e.id}` })
					]
				}, e.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var Ut = oe({
	variant: "filled",
	padding: "none",
	className: "flex flex-col overflow-hidden"
}), Wt = "flex min-h-6 min-w-0 items-center", Gt = 2, Kt = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function qt(e) {
	let { category: t, row: n, choice: r, onChoice: i, selected: o, onSelect: c, locked: u, busy: d, problem: f, genreTags: ee, onDecide: _, handlers: v, queueView: y = "pending" } = e, b = (0, J.useRef)(!1), x = Ie(), S = t === "metadata_fields", C = p[t] || "", re = String(n.creator || "").trim(), w = !!C && !!re, T = je(t, n), E = ke(t, n), D = Ae(t, n), O = G(n), k = K(n), A = ae(t, n), j = n.comparison_assets || [], M = n.preview_assets || [], N = ne[n.decision || ""], P = j.length > 1 ? /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-3",
		children: [j.slice(0, Gt).map((e) => /* @__PURE__ */ B(zt, {
			asset: e,
			openItem: v.openItem
		}, e.id)), j.length > Gt ? /* @__PURE__ */ B("p", {
			className: "text-body-2-regular text-text-secondary",
			children: `另有 ${(j.length - Gt).toLocaleString()} 部对照作品`
		}) : null]
	}) : w ? /* @__PURE__ */ B(Bt, {
		kind: C,
		name: re,
		works: Number(n.video_count || n.videos || 0),
		openEntity: v.openEntity,
		avatar: ie(re, n.entity_id ? {
			id: n.entity_id,
			has_image: !!n.has_image,
			image_version: n.image_version,
			avatar_focus: n.avatar_focus
		} : null, null, C)
	}) : n.asset_id ? /* @__PURE__ */ B(zt, {
		openItem: v.openItem,
		asset: {
			id: n.asset_id,
			name: n.asset_name,
			code: n.code,
			preview_url: n.asset_preview_url
		}
	}) : null, F = S ? /* @__PURE__ */ B(Mt, {
		row: n,
		fieldName: E,
		value: r.candidateKey,
		onChange: (e) => i({
			...r,
			candidateKey: e
		}),
		locked: u
	}) : t === "creator_tags" ? M.length ? /* @__PURE__ */ B(Ht, {
		assets: M,
		picked: r.assets,
		locked: u,
		onPicked: (e) => i({
			...r,
			assets: e
		})
	}) : /* @__PURE__ */ B(h, {
		size: "compact",
		icon: m,
		title: "这批作品尚未抽帧",
		children: `${n.video_count || ""} 条作品还没有可用预览；批准后仍会按所选资料写入标签。`
	}) : t === "fc2_similarity" ? null : t === "western_identity" ? /* @__PURE__ */ B(Vt, {
		row: n,
		openItem: v.openItem,
		openEntity: v.openEntity,
		onReveal: v.onReveal,
		revealing: v.revealing,
		note: v.revealNote
	}) : /* @__PURE__ */ B(Lt, { url: n.preview_url }), oe = w ? P : E ? /* @__PURE__ */ V("h4", {
		className: R(Wt, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ B("span", {
			title: E,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ B(l, {
				variant: "caption",
				color: "neutral",
				children: E
			})
		}), /* @__PURE__ */ B("span", {
			title: D,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: D
		})]
	}) : /* @__PURE__ */ B("h4", {
		className: Wt,
		children: /* @__PURE__ */ B("span", {
			title: T,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: T
		})
	});
	return /* @__PURE__ */ V("section", {
		"aria-label": T,
		"data-review-key": n.item_key,
		className: R(Ut, Kt(t)),
		children: [
			/* @__PURE__ */ V("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					u ? null : /* @__PURE__ */ B("span", {
						className: R(Wt, "shrink-0"),
						onPointerDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						children: /* @__PURE__ */ B(s, {
							isSelected: o,
							"aria-label": `选择 ${T}`,
							onChange: (e) => c(b.current, e)
						})
					}),
					/* @__PURE__ */ B("div", {
						className: "min-w-0 flex-1",
						children: oe
					}),
					N ? /* @__PURE__ */ B(l, {
						variant: "caption",
						color: "neutral",
						children: N
					}) : null
				]
			}),
			/* @__PURE__ */ B("div", {
				className: "relative mx-5 flex min-w-0 min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ V("div", {
					ref: x,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						n.source_name ? /* @__PURE__ */ B("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `来源写法：${n.source_name}`
						}) : null,
						!w && (n.board || n.assets) ? /* @__PURE__ */ B("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `对照文件：${Number(n.video_count || n.assets || 0).toLocaleString()}`
						}) : null,
						!w && P ? P : null,
						S && (O || n.current_value !== void 0) ? /* @__PURE__ */ V("div", {
							role: "region",
							"aria-label": "当前信息",
							className: "flex min-w-0 flex-col gap-1 border-b border-separator-border pb-4",
							children: [
								/* @__PURE__ */ V("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ B("h5", {
										"data-copy-key": "review.card.current_value",
										className: "text-caption-1-medium text-text-secondary",
										children: "当前值"
									}), n.current_owner?.startsWith("user:") || n.current_owner?.startsWith("review:") ? /* @__PURE__ */ B(l, {
										variant: "caption",
										color: "neutral",
										children: "人工确认"
									}) : null]
								}),
								/* @__PURE__ */ B("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: n.current_value === void 0 ? O : n.current_value ? /* @__PURE__ */ B(Tt, {
										value: n.current_value,
										reference: (n.candidates?.find((e) => e.candidate_key === r.candidateKey) || n.candidates?.[0])?.display_value
									}) : "尚无资料"
								}),
								n.videos === void 0 ? null : /* @__PURE__ */ B("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: `${Number(n.videos).toLocaleString()} 个${n.asset_path ? "匹配文件" : "同番号文件"}`
								})
							]
						}) : null,
						k.length || t === "creator_tags" ? /* @__PURE__ */ B("div", {
							className: "flex flex-wrap gap-1",
							children: k.length ? k.map((e) => /* @__PURE__ */ B(l, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ B("small", {
								className: "text-body-2-regular text-text-secondary",
								children: "暂无待确认标签"
							})
						}) : null,
						S ? /* @__PURE__ */ V("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ V("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ B("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: "候选来源"
								}), ` · ${n.candidates?.length || 0}`]
							}), n.current_value || (n.candidates?.length || 0) > 1 ? /* @__PURE__ */ B("span", {
								"data-copy-key": n.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: n.current_value ? "与当前值比较" : "来源间差异"
							}) : null]
						}) : null,
						F,
						/* @__PURE__ */ B(Pt, {
							row: n,
							tags: ee,
							locked: u,
							toast: v.toast
						}),
						!S && O ? /* @__PURE__ */ B("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: O
						}) : null
					]
				})
			}),
			/* @__PURE__ */ V("footer", {
				className: R(g.stack, "shrink-0"),
				children: [
					y === "ignored" ? null : /* @__PURE__ */ B(te, {
						variant: "secondary",
						size: "small",
						className: "me-auto",
						disabled: u,
						...I(d),
						onClick: () => _("rejected"),
						children: "忽略"
					}),
					y === "pending" ? /* @__PURE__ */ B(a, {
						variant: "secondary",
						size: "small",
						disabled: u,
						...I(d),
						onClick: () => _("skipped"),
						children: "稍后处理"
					}) : /* @__PURE__ */ B(a, {
						variant: y === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: u,
						...I(d),
						onClick: () => _("restore"),
						children: "恢复待处理"
					}),
					y === "ignored" ? null : /* @__PURE__ */ B(a, {
						variant: "primary",
						size: "small",
						disabled: u || !A,
						...I(d),
						title: A ? void 0 : "没有可采用的资料，可先保留或忽略",
						onClick: () => _("approved"),
						children: A ? "通过" : "不可通过"
					}),
					f ? /* @__PURE__ */ B("p", {
						role: "status",
						className: "w-full text-body-2-regular text-text-error-primary",
						children: f
					}) : null
				]
			})
		]
	});
}
// src/react/review/review-page.tsx
var Jt = "flex cursor-pointer items-center justify-between gap-2";
function Yt({ page: e, pages: t, onPage: n }) {
	return t <= 1 ? null : /* @__PURE__ */ V("nav", {
		"aria-label": "复核分页",
		"data-pagination-layout": "",
		className: "inline-grid w-full min-w-0 items-center gap-2",
		children: [
			/* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				disabled: e <= 1,
				onClick: () => n(e - 1),
				children: "上一页"
			}),
			/* @__PURE__ */ B("ul", {
				className: "flex min-w-0 flex-wrap items-center justify-center gap-1",
				children: H(e, t).map((t, r) => /* @__PURE__ */ B("li", { children: t === "…" ? /* @__PURE__ */ B("span", {
					"aria-hidden": !0,
					className: "px-1 text-body-2-regular text-text-tertiary",
					children: "…"
				}) : /* @__PURE__ */ B(a, {
					variant: t === e ? "secondary" : "ghost",
					size: "small",
					"aria-label": `第 ${t} 页`,
					"aria-current": t === e ? "page" : void 0,
					onClick: () => n(Number(t)),
					children: t
				}) }, t === "…" ? `dots-${r}` : t))
			}),
			/* @__PURE__ */ B(a, {
				variant: "secondary",
				size: "small",
				disabled: e >= t,
				onClick: () => n(e + 1),
				children: "下一页"
			})
		]
	});
}
function Xt(r) {
	let [i, o] = (0, J.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, J.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => o(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: s, openItem: c, openEntity: l, revealSource: u, toast: d, readOnly: p, readOnlyMessage: m, writerUrl: g } = r, [_, v] = (0, J.useState)(_e(r.category) ? r.category : f), [y, te] = (0, J.useState)(() => De(r.queue)), [ne, T] = (0, J.useState)("candidates"), [E, D] = (0, J.useState)(""), [O, k] = (0, J.useState)(""), [A, j] = (0, J.useState)(1), [M, N] = (0, J.useState)(/* @__PURE__ */ new Set()), [P, F] = (0, J.useState)(/* @__PURE__ */ new Map()), [ie, I] = (0, J.useState)(/* @__PURE__ */ new Map()), [oe, L] = (0, J.useState)(""), se = (0, J.useRef)(null), [ce, R] = (0, J.useState)(0), [ge, ve] = (0, J.useState)(""), ye = (0, J.useRef)(!0);
	(0, J.useEffect)(() => () => {
		ye.current = !1;
	}, []);
	let H = Le({
		queryKey: S,
		queryFn: ({ signal: e }) => pe(e)
	}), Se = H.data || {
		sections: {},
		counts: {},
		queues: {
			later: {
				sections: {},
				counts: {}
			},
			ignored: {
				sections: {},
				counts: {}
			}
		}
	}, Ce = Ee(Se, y), we = H.data ? Object.fromEntries(re.map((e) => [e, x.reduce((t, n) => t + Number(Ee(Se, e).counts[n] || 0), 0)])) : void 0, U = Ce.sections[_] || [], W = _ === "metadata_fields", G = p;
	(0, J.useEffect)(() => {
		let e = new Set(U.map((e) => e.item_key));
		N((t) => {
			let n = [...t].filter((t) => e.has(t));
			return n.length === t.size ? t : new Set(n);
		}), F((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		}), I((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		});
	}, [U]);
	let ke = (0, J.useMemo)(() => W ? he(U, "field") : [], [U, W]), Ae = ke.some((e) => e.key === O) ? O : "", K = (0, J.useMemo)(() => W ? me(U, "field", Ae) : U, [
		U,
		W,
		Ae
	]), je = (0, J.useMemo)(() => Te(K, W), [K, W]), q = je.some(([e]) => e === ne) ? ne : "candidates", Ie = (0, J.useMemo)(() => he(K, q), [K, q]), Re = Ie.some((e) => e.key === E) ? E : "", Be = (0, J.useMemo)(() => Oe(me(K, q, Re), A), [
		K,
		q,
		Re,
		A
	]), Ve = Be.rows.map((e) => e.item_key), Ue = new Set(Ve), We = Ie.map((e) => ({
		...e,
		rows: e.rows.filter((e) => Ue.has(e.item_key))
	})).filter((e) => e.rows.length), Ge = (e) => P.get(e.item_key) || fe(e), Y = (0, J.useMemo)(() => U.filter((e) => M.has(e.item_key)), [U, M]), Ke = (e) => {
		let t = new Set(e);
		N((e) => new Set([...e].filter((e) => !t.has(e)))), F((e) => new Map([...e].filter(([e]) => !t.has(e)))), I((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, qe = (e, t) => I((n) => new Map(n).set(e, t)), Je = () => {
		T("candidates"), D(""), k(""), j(1), N(/* @__PURE__ */ new Set()), F(/* @__PURE__ */ new Map()), I(/* @__PURE__ */ new Map()), L(""), se.current = null;
	}, X = (e) => {
		v(e), Je(), s({
			category: e === "metadata_fields" ? "" : e,
			queue: y === "pending" ? "" : y
		});
	}, Ye = (e) => {
		te(e), Je(), s({
			category: _ === "metadata_fields" ? "" : _,
			queue: e === "pending" ? "" : e
		});
	}, Z = Fe({
		mutationFn: ({ row: e, status: t, category: n }) => Pe(ue(n, le(n, e), t, Ge(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			e.ok ? (Ne(r, [t.item_key], n), Ke([t.item_key]), d(de(n))) : qe(t.item_key, e.error || "服务端拒绝了这次判定");
		},
		onError: (e, { row: t }) => qe(t.item_key, z(e))
	}), Q = Fe({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!ye.current) break;
				L(`正在处理 ${a} / ${n.length}`);
				try {
					let n = await Pe(ue(t, le(t, o), e, Ge(o)));
					if (!n.ok) throw Error(n.error || "服务端未采用该项");
					r.push(o.item_key);
				} catch (e) {
					i.push([o.item_key, z(e)]);
				}
			}
			return {
				status: e,
				category: t,
				done: r,
				failures: i
			};
		},
		onSuccess: ({ status: e, category: t, done: n, failures: r }) => {
			Ne(t, n, e), Ke(n), r.forEach(([e, t]) => qe(e, t)), L("");
			let i = {
				approved: "通过",
				rejected: "忽略",
				skipped: "移至稍后处理",
				restore: "恢复待处理"
			}[e];
			d(`已${i} ${n.length} 项` + (r.length ? `，${r.length} 项未完成` : ""));
		},
		onError: (e) => {
			L(z(e));
		}
	}), Xe = (e) => {
		!Q.isPending && Y.length && (e === "approved" && W && Y.some((e) => !Ge(e).candidateKey) ? L("请先为所选资料选择要采用的来源。") : (L(""), Q.mutate({
			status: e,
			category: _,
			rows: Y
		})));
	}, Ze = (e) => {
		F((t) => {
			let n = new Map(t);
			for (let t of Y) {
				let r = t.candidates?.find((t) => t.source === e);
				r && n.set(t.item_key, {
					...Ge(t),
					candidateKey: r.candidate_key
				});
			}
			return n;
		}), L(`已选择 ${e}，点击通过所选采用。`);
	}, Qe = async (e) => {
		if (ce) return;
		R(e), ve("");
		let t = await u(e);
		ye.current && (R(0), ve(t));
	}, $e = xe(Se.mirror, m), et = Se.genre_tags || [], tt = {
		openItem: c,
		openEntity: l,
		onReveal: Qe,
		revealing: ce,
		revealNote: ge,
		toast: d
	};
	return /* @__PURE__ */ B(ze, { children: /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			G ? /* @__PURE__ */ B(b, {
				tone: "warning",
				title: "本机只能浏览",
				extra: g ? /* @__PURE__ */ B("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ B(ee, {
						href: g,
						children: "前往写入端复核"
					})
				}) : void 0,
				children: $e
			}) : null,
			/* @__PURE__ */ B(Ot, { tags: et }),
			/* @__PURE__ */ V(n, {
				orientation: i ? "horizontal" : "vertical",
				selectedKey: _,
				onSelectionChange: (e) => {
					let t = String(e);
					_e(t) && X(t);
				},
				className: "flex flex-col gap-5 review-split:flex-row review-split:items-start review-split:gap-6",
				children: [/* @__PURE__ */ V("div", {
					"data-section-nav": !0,
					className: "w-full min-w-0 review-split:sticky review-split:top-topbar review-split:w-review-tabs review-split:shrink-0",
					children: [/* @__PURE__ */ B("h2", {
						id: "reviewcategories",
						children: "复核分类"
					}), /* @__PURE__ */ B(He, {
						scrollable: i,
						"aria-labelledby": "reviewcategories",
						"data-section-items": !0,
						className: "flex review-split:flex-col review-split:items-stretch",
						children: x.map((e) => {
							let n = Number(Ce.counts[e] || 0);
							return /* @__PURE__ */ V(t, {
								id: e,
								className: Jt,
								isDisabled: Z.isPending || Q.isPending,
								"data-pill-selected": _ === e ? "" : void 0,
								"data-pill-variant": "gray",
								children: [C[e], n ? /* @__PURE__ */ B("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: n.toLocaleString()
								}) : null]
							}, e);
						})
					})]
				}), /* @__PURE__ */ V(e, {
					id: _,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ B(rt, {
							queueView: y,
							queueCounts: we,
							onQueueChange: Ye,
							locked: G,
							fields: ke,
							fieldFilter: Ae,
							onFieldFilter: (e) => {
								k(e), D(""), j(1);
							},
							groupOptions: je,
							groupBy: q,
							onGroupBy: (e) => {
								T(e), D(""), j(1);
							},
							groups: Ie,
							filter: Re,
							onFilter: (e) => {
								D(e), j(1);
							},
							pageKeys: Ve,
							selected: M,
							onSelected: N,
							selectedRows: Y,
							metadata: W,
							approvable: Y.every((e) => ae(_, e)),
							busy: Q.isPending || Z.isPending,
							feedback: oe,
							onUnifySource: Ze,
							onRun: Xe
						}),
						Be.rows.length ? We.map((e) => /* @__PURE__ */ V("section", {
							className: "flex flex-col gap-3",
							children: [We.length > 1 || q !== "candidates" ? /* @__PURE__ */ V("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ B("h3", {
									className: "text-body-medium text-text-primary",
									children: `${e.title} · ${e.rows.length}`
								}), G ? null : /* @__PURE__ */ B(a, {
									variant: "ghost",
									size: "small",
									onClick: () => {
										let t = e.rows.map((e) => e.item_key), n = t.every((e) => M.has(e)), r = new Set(M);
										for (let e of t) n ? r.delete(e) : r.add(e);
										N(r);
									},
									children: e.rows.every((e) => M.has(e.item_key)) ? "清空本组" : "全选本组"
								})]
							}) : null, /* @__PURE__ */ B("div", {
								className: "review-grid gap-5",
								children: e.rows.map((e) => /* @__PURE__ */ B(qt, {
									category: _,
									row: e,
									queueView: y,
									choice: Ge(e),
									onChoice: (t) => F((n) => new Map(n).set(e.item_key, t)),
									selected: M.has(e.item_key),
									onSelect: (t, n) => N((r) => {
										let i = new Set(r);
										return se.current = Me(i, Ve, se.current, e.item_key, t, n), i;
									}),
									locked: G,
									busy: Q.isPending || Z.isPending && Z.variables?.row.item_key === e.item_key,
									problem: ie.get(e.item_key) || "",
									genreTags: et,
									onDecide: (t) => {
										Z.isPending || Q.isPending || (I((t) => new Map([...t].filter(([t]) => t !== e.item_key))), Z.mutate({
											row: e,
											status: t,
											category: _
										}));
									},
									handlers: tt
								}, e.item_key))
							})]
						}, e.key)) : H.isError && !H.data ? /* @__PURE__ */ B(b, {
							tone: "error",
							title: "复核队列读取失败",
							action: /* @__PURE__ */ B(a, {
								variant: "secondary",
								size: "small",
								disabled: H.isFetching,
								onClick: () => void H.refetch(),
								children: "立即重试"
							}),
							children: z(H.error)
						}) : /* @__PURE__ */ B(h, {
							icon: be,
							title: `此分类没有${w[y]}项目`,
							actions: x.some((e) => e !== _ && Number(Ce.counts[e] || 0) > 0) ? /* @__PURE__ */ B(a, {
								size: "small",
								onClick: () => {
									let e = x.find((e) => e !== _ && Number(Ce.counts[e] || 0) > 0);
									e && X(e);
								},
								children: "查看其他分类"
							}) : void 0,
							children: y === "pending" ? "可切换分类查看其他待确认资料。" : `${w[y]}的资料会保留在这里，可恢复到待处理。`
						}),
						/* @__PURE__ */ B(Yt, {
							page: Be.page,
							pages: Be.pages,
							onPage: j
						}),
						W && y === "pending" ? /* @__PURE__ */ B(nt, {
							locked: G,
							openItem: c,
							toast: d
						}) : null
					]
				})]
			})
		]
	}) });
}
export { Xt as ReviewPage };

//# debugId=e5861e65-3055-49bf-b685-a1cc1f3b9263