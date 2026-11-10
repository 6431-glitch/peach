(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "16e48467-7d15-4599-a241-bd8f3f7b30fe", e._sentryDebugIdIdentifier = "sentry-dbid-16e48467-7d15-4599-a241-bd8f3f7b30fe");
	} catch {}
})();
import { $ea3928288112382f$export$439d29a4e110a164 as e, $fe21c36db05242bb$export$d7b12c4107be0d61 as t, Button as n, ButtonLink as r, Checkbox as i, CheckboxGlyph as a, Chip as o, CollapseChevron as s, CollapseRegion as c, DEFAULT_CATEGORY as l, DataTableFooter as u, ENTITY_REVIEW_KINDS as d, Ea as f, EmptyState as p, ExternalLink as m, FIELDSET_FOOT as h, FilterGlassRows as ee, Gg as g, InputBase as _, LinkButton as v, Note as y, REVIEW_CATEGORIES as b, REVIEW_DECISION_LABELS as te, REVIEW_KEY as x, REVIEW_LABELS as ne, REVIEW_QUEUES as S, REVIEW_QUEUE_LABELS as re, RadioDot as C, RadioGroup as w, Select as T, SelectItem as E, SelectionActions as D, SelectionDock as O, SortableBoardTabs as k, TextField as A, Wt as j, __toESM as M, apiGet as N, apiSend as P, avatarInner as F, busyProps as I, canApprove as ie, cardClass as L, commonReviewSources as ae, composingKey as oe, confirmModal as se, currentReviewRow as ce, cx as R, decisionPayload as le, decisionReceipt as ue, defaultChoice as de, errorMessage as z, fetchReview as fe, filterReviewRows as pe, groupReviewRows as me, import_jsx_runtime as B, isReviewCategory as he, jsx as V, jsxs as H, l7 as ge, localTime as _e, m7 as ve, mirrorText as ye, pendingGenres as be, queryClient as xe, recordGenre as Se, reloadReview as U, require_react as Ce, reviewGroupingOptions as we, reviewQueueData as Te, reviewQueueOf as Ee, reviewWindow as De, rowEvidence as Oe, rowFieldName as ke, rowSubject as W, rowTags as G, rowTitle as Ae, selectReviewRange as je, settleReviewRows as Me, spinnerHtml as Ne, submitDecision as Pe, useMutation as Fe, useNavigationOrder as Ie, useOverlayScrollbar as Le, useQuery as Re, useViewGlide as K } from "./peach-app.js";
import { Page as ze } from "./peach-app.page-CW3QRN2N.js";
import { DataTable as Be } from "./peach-app.data-table-DJ-wOupc.js";
import { LEGACY_AVATAR_IMG as q } from "./peach-app.legacy-avatar-NSITxLRS.js";
// src/react/review/auto-landings.ts
var J = /* @__PURE__ */ M(Ce(), 1), Ve = "/api/review/auto-landings", He = "/api/review/auto-landings/revert", Ue = ["review", "auto-landings"], We = (e) => N(Ve, e), Ge = (e) => N(`${Ve}?items=${encodeURIComponent(e.join("\n"))}`), Ke = (e, t) => P(He, {
	items: e,
	token: t
}), qe = (e) => e.at === null ? "" : _e((/* @__PURE__ */ new Date(e.at * 1e3)).toISOString()), Y = (e) => e.code || e.name || (e.asset_id ? `#${e.asset_id}` : "未知作品"), X = (e) => e ? `「${e}」` : "空", Je = (e) => e.tags.length ? e.tags.join("、") : e.value, Ye = (e) => e.tags.length ? "原有标签保留" : `原为 ${e.previous.length ? e.previous.map(X).join("、") : "空"}`;
function Xe(e) {
	return [
		...e.restores.map((e) => `${Y(e)} ${e.field}：${X(e.current)} 改回 ${X(e.previous)}`),
		...e.tags.map((e) => `${Y(e)} 删除标签「${e.tag}」`),
		...e.changed.map((e) => e.gone ? `${Y(e)} ${e.field}：作品已不在账本中，跳过` : `${Y(e)} ${e.field}：之后已被修改，保留现值`)
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
var Z = "资料处理按确定判据自动写入的标题、发行日期与标签，一行一条。撤回会把覆盖的值改回写入前、删掉补上的标签；写入后又被修改过的作品保留现值。";
function Q({ item: t, openItem: n }) {
	let r = t.asset_id && !t.gone ? () => n(t.asset_id) : void 0;
	return /* @__PURE__ */ H("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ H("button", {
			type: "button",
			disabled: !r,
			onClick: r,
			className: "flex aspect-card-cover w-16 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring disabled:cursor-default",
			children: [t.preview_url ? /* @__PURE__ */ V("img", {
				src: t.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ V("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: "无封面"
			}), /* @__PURE__ */ V(e, { children: `打开作品 ${Y(t)}` })]
		}), /* @__PURE__ */ H("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ H("span", {
				className: "truncate text-body-medium text-text-primary",
				children: [Y(t), t.assets > 1 ? /* @__PURE__ */ V("small", {
					className: "ml-1 text-caption-1-regular text-text-secondary",
					children: `${t.assets} 个文件`
				}) : null]
			}), /* @__PURE__ */ V("small", {
				title: t.name,
				className: "truncate text-caption-1-regular text-text-secondary",
				children: t.gone ? "作品已不在账本中" : t.name
			})]
		})]
	});
}
function $e({ item: e }) {
	return /* @__PURE__ */ H("span", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [/* @__PURE__ */ H("span", {
			title: Je(e),
			className: "truncate text-body-regular text-text-primary",
			children: [/* @__PURE__ */ V("span", {
				className: "text-text-secondary",
				children: `${e.field}：`
			}), Je(e)]
		}), /* @__PURE__ */ V("small", {
			title: Ye(e),
			className: "truncate text-caption-1-regular text-text-secondary",
			children: Ye(e)
		})]
	});
}
function et({ locked: e, openItem: t, toast: r }) {
	let [i, a] = (0, J.useState)([]), [o, s] = (0, J.useState)(null), c = Re({
		queryKey: Ue,
		queryFn: ({ signal: e }) => We(e)
	}), l = c.data?.items ?? [], u = Fe({
		mutationFn: async (e) => {
			let t = await Ge(e), { confirmed: n, result: r } = await se({
				title: "撤回自动写入",
				body: Ze(t),
				items: Xe(t),
				confirmLabel: "撤回",
				onConfirm: () => Ke(t.items, t.token)
			});
			return n ? r : null;
		},
		onSuccess: (e) => {
			e && (s(e), a([]), r(Qe(e)), xe.invalidateQueries({ queryKey: x }));
		},
		onError: (e) => r(z(e))
	});
	return !l.length && !o && !c.isError ? null : /* @__PURE__ */ H("section", {
		"aria-labelledby": "auto-landings-title",
		className: "flex flex-col gap-4",
		children: [o ? /* @__PURE__ */ H(y, {
			tone: "success",
			title: Qe(o),
			children: [/* @__PURE__ */ V("p", {
				className: "text-body-2-regular",
				children: `撤回前的账本已备份为 ${o.backup}。`
			}), o.changed.length ? /* @__PURE__ */ H("p", {
				className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-body-2-regular",
				children: [`${o.changed.length} 条资料写入后被修改过或作品已删除，未改动：`, o.changed.map((e) => e.gone ? /* @__PURE__ */ V("span", {
					className: "text-text-secondary",
					children: `#${e.asset_id}（已删除）`
				}, `${e.asset_id}:${e.field}`) : /* @__PURE__ */ V(v, {
					size: "small",
					onClick: () => t(e.asset_id),
					children: Y(e)
				}, `${e.asset_id}:${e.field}`))]
			}) : null]
		}) : null, c.isError ? /* @__PURE__ */ V(y, {
			tone: "error",
			title: "读取自动写入的资料失败",
			children: z(c.error)
		}) : l.length ? /* @__PURE__ */ V(Be, {
			label: "自动写入的资料",
			items: l,
			columns: [
				{
					id: "work",
					label: "作品",
					width: 300,
					min: 240,
					value: (e) => Y(e),
					render: (e) => /* @__PURE__ */ V(Q, {
						item: e,
						openItem: t
					})
				},
				{
					id: "written",
					label: "写入",
					width: 320,
					min: 220,
					value: (e) => `${e.field}${Je(e)}`,
					render: (e) => /* @__PURE__ */ V($e, { item: e })
				},
				{
					id: "rule",
					label: "规则与时间",
					width: 176,
					min: 144,
					value: (e) => e.at ?? 0,
					render: (e) => /* @__PURE__ */ H("span", {
						title: e.batch,
						className: "flex min-w-0 flex-col gap-0.5 text-text-secondary",
						children: [/* @__PURE__ */ V("span", {
							className: "truncate text-body-2-regular",
							children: e.label
						}), /* @__PURE__ */ V("small", {
							className: "tabular-nums text-caption-1-regular",
							children: qe(e) || "时间未知"
						})]
					})
				}
			],
			title: "自动写入的资料",
			titleId: "auto-landings-title",
			unit: "条",
			description: Z,
			rowId: (e) => e.item_key,
			rowLabel: (e) => `${Y(e)} ${e.field}`,
			selected: i,
			onSelected: a,
			actions: (t) => /* @__PURE__ */ V(n, {
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
function tt(e) {
	let { groupOptions: t, groupBy: r, onGroupBy: i, groups: a, filter: o, onFilter: s, pageKeys: c, selected: l, onSelected: u, selectedRows: d, metadata: f, approvable: p, busy: m, feedback: h, onUnifySource: g, onRun: _, queueView: v = "pending", queueCounts: y, onQueueChange: b, locked: te, fields: x, fieldFilter: ne, onFieldFilter: C } = e, w = c.filter((e) => l.has(e)), D = w.length > 0 && w.length === c.length, k = ae(d), A = f && d.some((e) => (e.candidates?.length || 0) > 1), j = k.length ? "统一选择来源" : "所选项目无共同来源", M = (0, J.useRef)(null), N = (0, J.useRef)(null), P = (0, J.useRef)(null), [F, I] = (0, J.useState)(!1), ie = K(M, N, "[data-entity-state][aria-pressed=\"true\"]", v);
	return (0, J.useLayoutEffect)(() => {
		let e = N.current, t = P.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => I(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ H(B.Fragment, { children: [/* @__PURE__ */ V(ee, {
		label: "复核筛选",
		topLabel: "处理状态",
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: c.length ? "min-h-12 max-w-full flex-none flex-wrap" : "hidden",
		bottomRef: P,
		panes: /* @__PURE__ */ V("span", {
			ref: M,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ H("div", {
			ref: N,
			role: "group",
			"aria-label": "复核状态",
			"data-entity-states": "",
			onPointerLeave: ie.leave,
			children: [S.map((e) => /* @__PURE__ */ H("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: m,
				"aria-pressed": v === e,
				onPointerEnter: ie.hover,
				onClick: () => {
					e !== v && b(e);
				},
				children: [
					/* @__PURE__ */ V("span", {
						"data-copy-key": `review.queue.${e}`,
						children: re[e]
					}),
					" ",
					/* @__PURE__ */ V("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: y ? y[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ V("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: F ? void 0 : "invisible"
			})]
		}),
		bottom: c.length ? /* @__PURE__ */ H(B.Fragment, { children: [
			f && x.length ? /* @__PURE__ */ H(T, {
				"aria-label": "筛选资料字段",
				size: "sm",
				prefix: /* @__PURE__ */ V("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: "字段"
				}),
				selectedKey: ne || "*",
				isDisabled: m,
				onSelectionChange: (e) => {
					e !== null && C(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ V(E, {
					id: "*",
					children: "全部"
				}), x.map((e) => /* @__PURE__ */ V(E, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ V(T, {
				"aria-label": "筛选分组方式",
				size: "sm",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(String(e));
				},
				children: t.map(([e, t]) => /* @__PURE__ */ V(E, {
					id: e,
					children: t
				}, e))
			}),
			a.length > 1 ? /* @__PURE__ */ H(T, {
				"aria-label": r === "field" ? "筛选字段分类" : "筛选当前分类",
				size: "sm",
				prefix: "分类",
				selectedKey: o || "*",
				onSelectionChange: (e) => {
					e !== null && s(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ V(E, {
					id: "*",
					children: "全部"
				}), a.map((e) => /* @__PURE__ */ V(E, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			te ? null : /* @__PURE__ */ V(n, {
				variant: "secondary",
				size: "small",
				leadingIcon: ge,
				"aria-pressed": D,
				disabled: m,
				onClick: () => {
					let e = new Set(l);
					for (let t of c) D ? e.delete(t) : e.add(t);
					u(e);
				},
				children: D ? "清空当前选择" : o ? "全选当前分类" : "全选本页"
			})
		] }) : null
	}), /* @__PURE__ */ H(O, {
		label: "复核所选项目",
		visible: !te && l.size > 0,
		count: `已选 ${l.size} 项`,
		children: [
			A && v !== "ignored" ? /* @__PURE__ */ H(T, {
				"aria-label": "统一选择来源",
				size: "sm",
				selectedKey: "",
				isDisabled: m || !k.length,
				onSelectionChange: (e) => {
					e !== null && e !== "" && g(String(e));
				},
				children: [/* @__PURE__ */ V(E, {
					id: "",
					children: j
				}), k.map((e) => /* @__PURE__ */ V(E, {
					id: e,
					children: e
				}, e))]
			}) : null,
			v === "ignored" ? null : /* @__PURE__ */ V(n, {
				variant: "ghost",
				size: "small",
				disabled: m || !l.size,
				onClick: () => _("rejected"),
				children: "忽略所选"
			}),
			v === "pending" ? /* @__PURE__ */ V(n, {
				variant: "secondary",
				size: "small",
				disabled: m || !l.size,
				onClick: () => _("skipped"),
				children: "稍后处理所选"
			}) : /* @__PURE__ */ V(n, {
				variant: v === "ignored" ? "primary" : "secondary",
				size: "small",
				disabled: m || !l.size,
				onClick: () => _("restore"),
				children: "恢复所选"
			}),
			v === "ignored" ? null : /* @__PURE__ */ V(n, {
				variant: "primary",
				size: "small",
				disabled: m || !l.size || !p,
				onClick: () => _("approved"),
				children: "通过所选"
			}),
			/* @__PURE__ */ V(n, {
				variant: "ghost",
				size: "small",
				disabled: m,
				onClick: () => u(/* @__PURE__ */ new Set()),
				children: "取消选择"
			}),
			h ? /* @__PURE__ */ V("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-secondary",
				children: h
			}) : null
		]
	})] });
}
// src/react/boardui/components/base/radio/radio-card.tsx
function nt({ className: e, title: n, description: r, ref: i, ...a }) {
	return /* @__PURE__ */ V(t, {
		ref: i,
		...a,
		className: (t) => R("group flex w-full items-center justify-between gap-3 rounded-2lg border border-border-button-default py-3 pe-5 ps-4 select-none", "transition-colors duration-150 ease", t.isHovered && !t.isDisabled ? "bg-background-primary-hover" : "bg-background-primary-default", t.isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", typeof e == "function" ? e(t) : e),
		children: (e) => /* @__PURE__ */ H(B.Fragment, { children: [/* @__PURE__ */ H("span", {
			className: "flex min-w-0 flex-col gap-0.5",
			children: [/* @__PURE__ */ V("span", {
				className: "truncate text-body-medium text-text-primary",
				children: n
			}), r != null && /* @__PURE__ */ V("span", {
				className: "truncate text-body-regular text-text-secondary",
				children: r
			})]
		}), /* @__PURE__ */ V("span", {
			className: "flex shrink-0 items-center py-1",
			children: /* @__PURE__ */ V(C, {
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
}, rt = new class extends $ {}();
function it(e, t, n) {
	return rt.diff(e, t, n);
}
// node_modules/diff/libesm/util/string.js
function at(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
	return e.slice(0, n);
}
function ot(e, t) {
	let n;
	if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
	for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
	return e.slice(-n);
}
function st(e, t, n) {
	if (e.slice(0, t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);
	return n + e.slice(t.length);
}
function ct(e, t, n) {
	if (!t) return e + n;
	if (e.slice(-t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);
	return e.slice(0, -t.length) + n;
}
function lt(e, t) {
	return st(e, t, "");
}
function ut(e, t) {
	return ct(e, t, "");
}
function dt(e, t) {
	return t.slice(0, ft(e, t));
}
function ft(e, t) {
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
function pt(e, t) {
	let n = [];
	for (let r of Array.from(t.segment(e))) {
		let e = r.segment;
		n.length && /\s/.test(n[n.length - 1]) && /\s/.test(e) ? n[n.length - 1] += e : n.push(e);
	}
	return n;
}
function mt(e, t) {
	if (t) return gt(e, t)[1];
	let n;
	for (n = e.length - 1; n >= 0 && e[n].match(/\s/); n--);
	return e.substring(n + 1);
}
function ht(e, t) {
	if (t) return gt(e, t)[0];
	let n = e.match(/^\s*/);
	return n ? n[0] : "";
}
function gt(e, t) {
	if (!t) return [ht(e), mt(e)];
	if (t.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
	let n = pt(e, t), r = n[0], i = n[n.length - 1];
	return [/\s/.test(r) ? r : "", /\s/.test(i) ? i : ""];
}
// node_modules/diff/libesm/diff/word.js
var _t = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", vt = RegExp(`[${_t}]+|\\s+|[^${_t}]`, "ug");
new class extends $ {
	equals(e, t, n) {
		return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
	}
	tokenize(e, t = {}) {
		let n;
		if (t.intlSegmenter) {
			let r = t.intlSegmenter;
			if (r.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
			n = pt(e, r);
		} else n = e.match(vt) || [];
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
			e.added ? r = e : e.removed ? i = e : ((r || i) && yt(n, i, r, e, t.intlSegmenter), n = e, r = null, i = null);
		}), (r || i) && yt(n, i, r, null, t.intlSegmenter), e;
	}
}();
function yt(e, t, n, r, i) {
	if (t && n) {
		let [a, o] = gt(t.value, i), [s, c] = gt(n.value, i);
		if (e) {
			let r = at(a, s);
			e.value = ct(e.value, s, r), t.value = lt(t.value, r), n.value = lt(n.value, r);
		}
		if (r) {
			let e = ot(o, c);
			r.value = st(r.value, c, e), t.value = ut(t.value, e), n.value = ut(n.value, e);
		}
	} else if (n) {
		if (e) {
			let e = ht(n.value, i);
			n.value = n.value.substring(e.length);
		}
		if (r) {
			let e = ht(r.value, i);
			r.value = r.value.substring(e.length);
		}
	} else if (e && r) {
		let n = ht(r.value, i), [a, o] = gt(t.value, i), s = at(n, a);
		t.value = lt(t.value, s);
		let c = ot(lt(n, s), o);
		t.value = ut(t.value, c), r.value = st(r.value, n, c), e.value = ct(e.value, n, n.slice(0, n.length - c.length));
	} else if (r) {
		let e = ht(r.value, i), n = dt(mt(t.value, i), e);
		t.value = ut(t.value, n);
	} else if (e) {
		let n = dt(mt(e.value, i), ht(t.value, i));
		t.value = lt(t.value, n);
	}
}
new class extends $ {
	tokenize(e) {
		let t = RegExp(`(\\r?\\n)|[${_t}]+|[^\\S\\n\\r]+|[^${_t}]`, "ug");
		return e.match(t) || [];
	}
}(), new class extends $ {
	constructor() {
		super(...arguments), this.tokenize = bt;
	}
	equals(e, t, n) {
		return n.ignoreWhitespace ? (n.newlineIsToken && e.includes("\n") || (e = e.trim()), n.newlineIsToken && t.includes("\n") || (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith("\n") && (e = e.slice(0, -1)), t.endsWith("\n") && (t = t.slice(0, -1))), super.equals(e, t, n);
	}
}();
function bt(e, t) {
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
function xt(e) {
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
			if (xt(e[r]) && e[r + 1].match(/\s/)) {
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
		super(...arguments), this.tokenize = bt;
	}
	get useLongestToken() {
		return !0;
	}
	castInput(e, t) {
		let { undefinedReplacement: n, stringifyReplacer: r = (e, t) => t === void 0 ? n : t } = t;
		return typeof e == "string" ? e : JSON.stringify(St(e, null, null, r), null, "  ");
	}
	equals(e, t, n) {
		return super.equals(e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
	}
}();
function St(e, t, n, r, i) {
	t ||= [], n ||= [], r && (e = r(i === void 0 ? "" : i, e));
	let a = 0;
	for (; a < t.length; a += 1) if (t[a] === e) return n[a];
	let o;
	if (Object.prototype.toString.call(e) === "[object Array]") {
		for (t.push(e), o = Array(e.length), n.push(o), a = 0; a < e.length; a += 1) o[a] = St(e[a], t, n, r, String(a));
		return t.pop(), n.pop(), o;
	}
	if (e && e.toJSON && (e = e.toJSON()), typeof e == "object" && e) {
		t.push(e), o = {}, n.push(o);
		let i = [], s;
		for (s in e)
 /* istanbul ignore else */
		Object.prototype.hasOwnProperty.call(e, s) && i.push(s);
		for (i.sort(), a = 0; a < i.length; a += 1) s = i[a], o[s] = St(e[s], t, n, r, s);
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
function Ct({ value: e, reference: t }) {
	let n = (0, J.useMemo)(() => t ? it(t, e).filter((e) => !e.removed) : [{
		value: e,
		added: !1
	}], [e, t]);
	return /* @__PURE__ */ V(B.Fragment, { children: n.map((e, t) => e.added ? /* @__PURE__ */ V("mark", {
		"data-review-difference": "",
		className: "rounded-sm bg-status-yellow-background text-status-yellow-text",
		children: e.value
	}, t) : /* @__PURE__ */ V("span", { children: e.value }, t)) });
}
// src/react/review/candidate-form.tsx
var wt = {
	title: "标题",
	original_title: "原标题",
	runtime: "来源时长",
	director: "导演",
	label: "Label",
	poster_url: "海报",
	cover_url: "封面",
	screenshot_urls: "截图",
	trailer_url: "预告片"
}, Tt = "reviewgenretags";
function Et({ tags: e }) {
	return e.length ? /* @__PURE__ */ V("datalist", {
		id: Tt,
		children: e.map((e) => /* @__PURE__ */ V("option", { value: e }, e))
	}) : null;
}
function Dt({ candidate: e, row: t }) {
	let [r, i] = (0, J.useState)(!1), a = (0, J.useId)(), o = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return o.length ? /* @__PURE__ */ H("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ H(n, {
			variant: "secondary",
			size: "small",
			leadingIcon: s,
			"aria-expanded": r,
			"aria-controls": a,
			"aria-label": `${r ? "收起" : "展开"} ${e.source || "该来源"} 的来源依据`,
			onClick: () => i(!r),
			children: [/* @__PURE__ */ V("span", {
				"data-copy-key": "review.card.source_evidence",
				children: "来源依据"
			}), ` · ${o.length}`]
		}), /* @__PURE__ */ V(c, {
			id: a,
			open: r,
			children: /* @__PURE__ */ V("dl", {
				className: "flex min-w-0 flex-col gap-2 px-3 pt-2 pb-1",
				children: o.map(([n, r]) => /* @__PURE__ */ H("div", {
					className: "flex min-w-0 flex-wrap gap-x-2",
					children: [
						/* @__PURE__ */ V("dt", {
							className: "text-caption-1-regular text-text-tertiary",
							children: wt[n] || n
						}),
						/* @__PURE__ */ V("dd", {
							className: "min-w-0 text-body-2-regular break-words text-text-primary",
							children: /* @__PURE__ */ V(Ct, {
								value: r.display_value || "",
								reference: n === t.field && t.current_value ? t.current_value : t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[n]?.display_value)?.catalog_evidence?.[n]?.display_value
							})
						}),
						(r.warnings || []).map((e) => /* @__PURE__ */ V("small", {
							className: "w-full text-caption-1-regular text-status-yellow-text",
							children: e
						}, e))
					]
				}, n))
			})
		})]
	}) : null;
}
function Ot(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || "未标注来源"}${e.official ? " · 官方优先" : ""}${t ? ` · ID ${t}` : ""}`;
}
function kt({ candidate: e, reference: t }) {
	return /* @__PURE__ */ H("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ V("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ V(Ct, {
				value: e.display_value || "",
				reference: t
			})
		}), (e.warnings || []).map((e) => /* @__PURE__ */ V("span", {
			className: "text-body-2-regular text-status-yellow-text",
			children: e
		}, e))]
	});
}
function At({ row: e, fieldName: t, value: n, onChange: r, locked: i }) {
	let a = e.candidates || [];
	return a.length ? a.length === 1 ? /* @__PURE__ */ H("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ H("div", {
			className: "flex min-w-0 flex-col gap-2 rounded-2lg bg-background-primary-default px-4 py-3",
			children: [/* @__PURE__ */ V("p", {
				className: "text-body-medium text-text-primary",
				children: Ot(a[0])
			}), /* @__PURE__ */ V(kt, {
				candidate: a[0],
				reference: e.current_value || void 0
			})]
		}), /* @__PURE__ */ V(Dt, {
			candidate: a[0],
			row: e
		})]
	}) : /* @__PURE__ */ V(w, {
		"aria-label": `${t || "资料"}的来源`,
		value: n,
		isDisabled: i,
		onChange: r,
		children: /* @__PURE__ */ V("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: a.map((t) => /* @__PURE__ */ H("div", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ V(nt, {
					value: t.candidate_key,
					className: "relative items-start",
					title: /* @__PURE__ */ V("span", {
						title: Ot(t),
						children: Ot(t)
					}),
					description: /* @__PURE__ */ V(kt, {
						candidate: t,
						reference: e.current_value || a.find((e) => e.candidate_key !== t.candidate_key)?.display_value
					})
				}), /* @__PURE__ */ V(Dt, {
					candidate: t,
					row: e
				})]
			}, t.candidate_key))
		})
	}) : null;
}
function jt({ genre: e, tags: t, locked: r, toast: i }) {
	let [a, o] = (0, J.useState)(""), [s, c] = (0, J.useState)(""), l = Fe({
		mutationFn: (t) => Se(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (i(n ? `已把「${e}」收录为标签「${n}」` : `已把「${e}」判为非内容标签`), await U()) : c(t.error || "服务端拒绝了这次收录");
		},
		onError: (e) => c(z(e))
	}), u = () => {
		let e = a.trim();
		e ? (c(""), l.mutate(e)) : c("先给它一个中文标签");
	};
	return /* @__PURE__ */ H("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ V("b", {
				lang: "ja",
				className: "text-body-medium text-text-primary",
				children: e
			}),
			/* @__PURE__ */ V(A, {
				"aria-label": `「${e}」收录成的中文标签`,
				value: a,
				onChange: o,
				maxLength: 40,
				isDisabled: r || l.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ V(_, {
					size: "small",
					list: t.length ? Tt : void 0,
					autoComplete: "off",
					placeholder: "中文标签",
					onKeyDown: (e) => {
						e.key !== "Enter" || oe(e.nativeEvent) || (e.preventDefault(), u());
					}
				})
			}),
			/* @__PURE__ */ V(n, {
				variant: "secondary",
				size: "small",
				disabled: r || l.isPending,
				onClick: u,
				children: "收录"
			}),
			/* @__PURE__ */ V(n, {
				variant: "secondary",
				size: "small",
				disabled: r || l.isPending,
				onClick: () => {
					c(""), l.mutate("");
				},
				children: "不是内容"
			}),
			s ? /* @__PURE__ */ V("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function Mt({ row: e, tags: t, locked: n, toast: r }) {
	let i = be(e);
	return i.length ? /* @__PURE__ */ H("div", {
		role: "group",
		"aria-label": "未收录 genre",
		className: "flex flex-col gap-2 border-t border-separator-border pt-4",
		children: [/* @__PURE__ */ V("h5", {
			className: "text-body-2-medium text-text-secondary",
			children: `未收录 genre · ${i.length}`
		}), /* @__PURE__ */ V("div", {
			role: "list",
			className: "flex flex-col",
			children: i.map((e, i) => /* @__PURE__ */ V("div", {
				role: "listitem",
				className: `py-3 first:pt-0 last:pb-0 ${i ? "border-t border-separator-border" : ""}`,
				children: /* @__PURE__ */ V(jt, {
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
var Nt = (e = "") => /^https?:\/\//i.test(e) ? e : "", Pt = (e = "") => Nt(e) || (e.startsWith("/") && !e.startsWith("//") ? e : "");
function Ft({ url: e }) {
	let t = Pt(e || "");
	return /* @__PURE__ */ V(It, { source: t }, t);
}
function It({ source: e }) {
	let [t, r] = (0, J.useState)("idle");
	return (0, J.useEffect)(() => {
		if (t !== "loading") return;
		let e = setTimeout(() => r("failed"), 3e4);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ H("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [t === "loading" ? /* @__PURE__ */ H("span", {
			role: "status",
			className: "absolute flex items-center gap-2 text-body-2-regular text-text-secondary",
			children: [/* @__PURE__ */ V("span", { dangerouslySetInnerHTML: { __html: Ne("正在加载图片") } }), "正在加载图片"]
		}) : null, e && (t === "loading" || t === "ready") ? /* @__PURE__ */ V("img", {
			src: e,
			alt: "来源提供的备选图片",
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${t === "loading" ? "invisible" : ""}`,
			onLoad: () => r("ready"),
			onError: () => r("failed")
		}) : e ? /* @__PURE__ */ H("div", {
			className: "flex flex-col items-center gap-2",
			children: [t === "failed" ? /* @__PURE__ */ V("span", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得来源图片"
			}) : null, /* @__PURE__ */ V(n, {
				variant: "secondary",
				size: "small",
				"aria-label": t === "failed" ? "立即重试加载来源图片" : void 0,
				onClick: () => r("loading"),
				children: t === "failed" ? "立即重试" : "查看来源图片"
			})]
		}) : /* @__PURE__ */ V("span", {
			className: "text-body-2-regular text-text-secondary",
			children: "未取得来源图片"
		})]
	});
}
function Lt({ asset: t, openItem: r }) {
	let i = t.name || "";
	return /* @__PURE__ */ H("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ H("button", {
			type: "button",
			onClick: () => r(t.id),
			className: "flex aspect-card-cover w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
			children: [t.preview_url ? /* @__PURE__ */ V("img", {
				src: t.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ V("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: "无封面"
			}), /* @__PURE__ */ V(e, { children: `打开原视频 ${i}` })]
		}), /* @__PURE__ */ H("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ V("b", {
				title: i,
				className: "w-full truncate text-body-medium text-text-primary",
				children: t.code || i || "原视频"
			}), /* @__PURE__ */ V(n, {
				variant: "secondary",
				size: "small",
				leadingIcon: g,
				onClick: () => r(t.id),
				children: "打开原视频"
			})]
		})]
	});
}
function Rt({ kind: e, name: t, works: n, avatar: r, openEntity: i }) {
	return /* @__PURE__ */ H("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			"aria-label": `打开创作者页：${t}`,
			onClick: () => i(e, t),
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-background-secondary-default text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${q}`,
			dangerouslySetInnerHTML: { __html: r }
		}), /* @__PURE__ */ H("div", {
			className: "flex min-w-0 flex-col items-start",
			children: [/* @__PURE__ */ V("button", {
				type: "button",
				onClick: () => i(e, t),
				className: "max-w-full cursor-pointer truncate text-body-medium text-text-primary underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: t
			}), n ? /* @__PURE__ */ V("small", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: `${n.toLocaleString()} 部作品`
			}) : null]
		})]
	});
}
function zt({ row: e, openItem: t, openEntity: i, onReveal: a, revealing: o, note: s }) {
	let c = Nt(e.profile_url || ""), l = (e.preview_assets || []).slice(0, 6), u = Math.max(0, Number(e.video_count || e.videos || 0));
	return /* @__PURE__ */ H("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ V("h5", {
				className: "text-body-medium text-text-primary",
				children: `待确认人物：${e.babepedia_name || "未标注"}`
			}),
			/* @__PURE__ */ H("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ V(r, {
					variant: "secondary",
					size: "small",
					trailingIcon: j,
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					children: "来源资料"
				}) : null, /* @__PURE__ */ V(n, {
					variant: "secondary",
					size: "small",
					onClick: () => i("creator", e.creator || ""),
					children: `查看全部 ${u.toLocaleString()} 部作品`
				})]
			}),
			/* @__PURE__ */ V(Ft, { url: e.preview_url }),
			l.length ? /* @__PURE__ */ H(B.Fragment, { children: [/* @__PURE__ */ V("h5", {
				className: "text-body-medium text-text-primary",
				children: "本地作品样本"
			}), /* @__PURE__ */ V("ul", {
				className: "flex flex-col gap-1",
				children: l.map((e) => /* @__PURE__ */ H("li", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ V(n, {
						variant: "ghost",
						size: "small",
						className: "min-w-0",
						onClick: () => t(e.id),
						children: /* @__PURE__ */ V("span", {
							title: e.name,
							className: "block max-w-full truncate",
							children: e.name
						})
					}), /* @__PURE__ */ V(n, {
						variant: "ghost",
						size: "small",
						"aria-label": `打开 ${e.name} 的文件位置`,
						...I(o === e.id),
						onClick: () => a(e.id),
						children: "文件位置"
					})]
				}, e.id))
			})] }) : /* @__PURE__ */ V("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "暂无本地作品样本，打开全部作品核对。"
			}),
			s ? /* @__PURE__ */ V("p", {
				role: "status",
				className: "text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function Bt({ assets: t, picked: n, onPicked: r, locked: i }) {
	let [o, s] = (0, J.useState)(null), c = new Set(n), l = (e, n) => {
		if (i) return;
		let a = new Set(c);
		if (n && o !== null) {
			let [n, r] = [Math.min(o, e), Math.max(o, e)];
			for (let e = n; e <= r; e++) a.add(t[e].id);
		} else {
			let n = t[e].id;
			a.has(n) ? a.delete(n) : a.add(n);
		}
		s(e), r(t.filter((e) => a.has(e.id)).map((e) => e.id));
	};
	return /* @__PURE__ */ H("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ V(D, {
			prefix: /* @__PURE__ */ V("span", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: `已选 ${c.size} / ${t.length}`
			}),
			actions: [{
				label: "全选",
				disabled: i,
				onPress: () => r(t.map((e) => e.id))
			}, {
				label: "清空",
				disabled: i,
				onPress: () => r([])
			}]
		}), /* @__PURE__ */ V("div", {
			className: "review-asset-grid gap-1.5",
			children: t.map((t, n) => {
				let r = c.has(t.id);
				return /* @__PURE__ */ H("button", {
					type: "button",
					"aria-pressed": r,
					title: t.name,
					onClick: (e) => l(n, e.shiftKey),
					className: `relative aspect-card-cover cursor-pointer overflow-hidden rounded-surface bg-background-tertiary-default outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-border-focus-ring ${r ? "opacity-100 ring-2 ring-border-button-active ring-inset" : "opacity-50"}`,
					children: [
						/* @__PURE__ */ V("img", {
							src: `/poster?id=${t.id}&c=4`,
							alt: "",
							loading: "lazy",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ V("span", {
							className: "absolute top-1 right-1",
							children: /* @__PURE__ */ V(a, {
								size: "sm",
								state: {
									isSelected: r,
									isIndeterminate: !1,
									isFocusVisible: !1,
									isDisabled: i,
									isHovered: !1
								}
							})
						}),
						/* @__PURE__ */ V(e, { children: `${r ? "已选" : "未选"} ${t.name || t.id}` })
					]
				}, t.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var Vt = L({
	variant: "filled",
	padding: "none",
	className: "flex flex-col overflow-hidden"
}), Ht = "flex min-h-6 min-w-0 items-center", Ut = 2, Wt = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function Gt(e) {
	let { category: t, row: r, choice: a, onChoice: s, selected: c, onSelect: l, locked: u, busy: m, problem: ee, genreTags: g, onDecide: _, handlers: y, queueView: b = "pending" } = e, x = (0, J.useRef)(!1), ne = Le(), S = t === "metadata_fields", re = d[t] || "", C = String(r.creator || "").trim(), w = !!re && !!C, T = Ae(t, r), E = ke(t, r), D = W(t, r), O = Oe(r), k = G(r), A = ie(t, r), j = r.comparison_assets || [], M = r.preview_assets || [], N = te[r.decision || ""], P = j.length > 1 ? /* @__PURE__ */ H("div", {
		className: "flex flex-col gap-3",
		children: [j.slice(0, Ut).map((e) => /* @__PURE__ */ V(Lt, {
			asset: e,
			openItem: y.openItem
		}, e.id)), j.length > Ut ? /* @__PURE__ */ V("p", {
			className: "text-body-2-regular text-text-secondary",
			children: `另有 ${(j.length - Ut).toLocaleString()} 部对照作品`
		}) : null]
	}) : w ? /* @__PURE__ */ V(Rt, {
		kind: re,
		name: C,
		works: Number(r.video_count || r.videos || 0),
		openEntity: y.openEntity,
		avatar: F(C, r.entity_id ? {
			id: r.entity_id,
			has_image: !!r.has_image,
			image_version: r.image_version,
			avatar_focus: r.avatar_focus
		} : null, null, re)
	}) : r.asset_id ? /* @__PURE__ */ V(Lt, {
		openItem: y.openItem,
		asset: {
			id: r.asset_id,
			name: r.asset_name,
			code: r.code,
			preview_url: r.asset_preview_url
		}
	}) : null, L = S ? /* @__PURE__ */ V(At, {
		row: r,
		fieldName: E,
		value: a.candidateKey,
		onChange: (e) => s({
			...a,
			candidateKey: e
		}),
		locked: u
	}) : t === "creator_tags" ? M.length ? /* @__PURE__ */ V(Bt, {
		assets: M,
		picked: a.assets,
		locked: u,
		onPicked: (e) => s({
			...a,
			assets: e
		})
	}) : /* @__PURE__ */ V(p, {
		size: "compact",
		icon: f,
		title: "这批作品尚未抽帧",
		children: `${r.video_count || ""} 条作品还没有可用预览；批准后仍会按所选资料写入标签。`
	}) : t === "fc2_similarity" ? null : t === "western_identity" ? /* @__PURE__ */ V(zt, {
		row: r,
		openItem: y.openItem,
		openEntity: y.openEntity,
		onReveal: y.onReveal,
		revealing: y.revealing,
		note: y.revealNote
	}) : /* @__PURE__ */ V(Ft, { url: r.preview_url }), ae = w ? P : E ? /* @__PURE__ */ H("h4", {
		className: R(Ht, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ V("span", {
			title: E,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ V(o, {
				variant: "caption",
				color: "neutral",
				children: E
			})
		}), /* @__PURE__ */ V("span", {
			title: D,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: D
		})]
	}) : /* @__PURE__ */ V("h4", {
		className: Ht,
		children: /* @__PURE__ */ V("span", {
			title: T,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: T
		})
	});
	return /* @__PURE__ */ H("section", {
		"aria-label": T,
		"data-review-key": r.item_key,
		className: R(Vt, Wt(t)),
		children: [
			/* @__PURE__ */ H("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					u ? null : /* @__PURE__ */ V("span", {
						className: R(Ht, "shrink-0"),
						onPointerDownCapture: (e) => {
							x.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							x.current = e.shiftKey;
						},
						children: /* @__PURE__ */ V(i, {
							isSelected: c,
							"aria-label": `选择 ${T}`,
							onChange: (e) => l(x.current, e)
						})
					}),
					/* @__PURE__ */ V("div", {
						className: "min-w-0 flex-1",
						children: ae
					}),
					N ? /* @__PURE__ */ V(o, {
						variant: "caption",
						color: "neutral",
						children: N
					}) : null
				]
			}),
			/* @__PURE__ */ V("div", {
				className: "relative mx-5 flex min-w-0 min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ H("div", {
					ref: ne,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						r.source_name ? /* @__PURE__ */ V("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `来源写法：${r.source_name}`
						}) : null,
						!w && (r.board || r.assets) ? /* @__PURE__ */ V("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `对照文件：${Number(r.video_count || r.assets || 0).toLocaleString()}`
						}) : null,
						!w && P ? P : null,
						S && (O || r.current_value !== void 0) ? /* @__PURE__ */ H("div", {
							role: "region",
							"aria-label": "当前信息",
							className: "flex min-w-0 flex-col gap-1 border-b border-separator-border pb-4",
							children: [
								/* @__PURE__ */ H("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ V("h5", {
										"data-copy-key": "review.card.current_value",
										className: "text-caption-1-medium text-text-secondary",
										children: "当前值"
									}), r.current_owner?.startsWith("user:") || r.current_owner?.startsWith("review:") ? /* @__PURE__ */ V(o, {
										variant: "caption",
										color: "neutral",
										children: "人工确认"
									}) : null]
								}),
								/* @__PURE__ */ V("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: r.current_value === void 0 ? O : r.current_value ? /* @__PURE__ */ V(Ct, {
										value: r.current_value,
										reference: (r.candidates?.find((e) => e.candidate_key === a.candidateKey) || r.candidates?.[0])?.display_value
									}) : "尚无资料"
								}),
								r.videos === void 0 ? null : /* @__PURE__ */ V("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: `${Number(r.videos).toLocaleString()} 个${r.asset_path ? "匹配文件" : "同番号文件"}`
								})
							]
						}) : null,
						k.length || t === "creator_tags" ? /* @__PURE__ */ V("div", {
							className: "flex flex-wrap gap-1",
							children: k.length ? k.map((e) => /* @__PURE__ */ V(o, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ V("small", {
								className: "text-body-2-regular text-text-secondary",
								children: "暂无待确认标签"
							})
						}) : null,
						S ? /* @__PURE__ */ H("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ H("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ V("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: "候选来源"
								}), ` · ${r.candidates?.length || 0}`]
							}), r.current_value || (r.candidates?.length || 0) > 1 ? /* @__PURE__ */ V("span", {
								"data-copy-key": r.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: r.current_value ? "与当前值比较" : "来源间差异"
							}) : null]
						}) : null,
						L,
						/* @__PURE__ */ V(Mt, {
							row: r,
							tags: g,
							locked: u,
							toast: y.toast
						}),
						!S && O ? /* @__PURE__ */ V("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: O
						}) : null
					]
				})
			}),
			/* @__PURE__ */ H("footer", {
				className: R(h.stack, "shrink-0"),
				children: [
					b === "ignored" ? null : /* @__PURE__ */ V(v, {
						variant: "secondary",
						size: "small",
						className: "me-auto",
						disabled: u,
						...I(m),
						onClick: () => _("rejected"),
						children: "忽略"
					}),
					b === "pending" ? /* @__PURE__ */ V(n, {
						variant: "secondary",
						size: "small",
						disabled: u,
						...I(m),
						onClick: () => _("skipped"),
						children: "稍后处理"
					}) : /* @__PURE__ */ V(n, {
						variant: b === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: u,
						...I(m),
						onClick: () => _("restore"),
						children: "恢复待处理"
					}),
					b === "ignored" ? null : /* @__PURE__ */ V(n, {
						variant: "primary",
						size: "small",
						disabled: u || !A,
						...I(m),
						title: A ? void 0 : "没有可采用的资料，可先保留或忽略",
						onClick: () => _("approved"),
						children: A ? "通过" : "不可通过"
					}),
					ee ? /* @__PURE__ */ V("p", {
						role: "status",
						className: "w-full text-body-2-regular text-text-error-primary",
						children: ee
					}) : null
				]
			})
		]
	});
}
// src/react/review/review-page.tsx
var Kt = "flex cursor-pointer items-center justify-between gap-2";
function qt(e) {
	let t = Ie("review").keys.filter(he), [r, i] = (0, J.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, J.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => i(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: a, openItem: o, openEntity: s, revealSource: c, toast: d, readOnly: f, readOnlyMessage: h, writerUrl: ee } = e, [g, _] = (0, J.useState)(he(e.category) ? e.category : l), [v, te] = (0, J.useState)(() => Ee(e.queue)), [C, w] = (0, J.useState)("candidates"), [T, E] = (0, J.useState)(""), [D, O] = (0, J.useState)(""), [A, j] = (0, J.useState)(1), [M, N] = (0, J.useState)(20), [P, F] = (0, J.useState)(/* @__PURE__ */ new Set()), [I, L] = (0, J.useState)(/* @__PURE__ */ new Map()), [ae, oe] = (0, J.useState)(/* @__PURE__ */ new Map()), [se, R] = (0, J.useState)(""), B = (0, J.useRef)(null), [ge, _e] = (0, J.useState)(0), [be, xe] = (0, J.useState)(""), Se = (0, J.useRef)(!0);
	(0, J.useEffect)(() => () => {
		Se.current = !1;
	}, []);
	let U = Re({
		queryKey: x,
		queryFn: ({ signal: e }) => fe(e)
	}), Ce = U.data || {
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
	}, Oe = Te(Ce, v), ke = U.data ? Object.fromEntries(S.map((e) => [e, b.reduce((t, n) => t + Number(Te(Ce, e).counts[n] || 0), 0)])) : void 0, W = Oe.sections[g] || [], G = g === "metadata_fields", Ae = f;
	(0, J.useEffect)(() => {
		let e = new Set(W.map((e) => e.item_key));
		F((t) => {
			let n = [...t].filter((t) => e.has(t));
			return n.length === t.size ? t : new Set(n);
		}), L((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		}), oe((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		});
	}, [W]);
	let Ne = (0, J.useMemo)(() => G ? me(W, "field") : [], [W, G]), Le = Ne.some((e) => e.key === D) ? D : "", K = (0, J.useMemo)(() => G ? pe(W, "field", Le) : W, [
		W,
		G,
		Le
	]), Be = (0, J.useMemo)(() => we(K, G), [K, G]), q = Be.some(([e]) => e === C) ? C : "candidates", Ve = (0, J.useMemo)(() => me(K, q), [K, q]), He = Ve.some((e) => e.key === T) ? T : "", Ue = (0, J.useMemo)(() => pe(K, q, He), [
		K,
		q,
		He
	]), We = (0, J.useMemo)(() => De(Ue, A, M), [
		Ue,
		A,
		M
	]), Ge = We.rows.map((e) => e.item_key), Ke = new Set(Ge), qe = Ve.map((e) => ({
		...e,
		rows: e.rows.filter((e) => Ke.has(e.item_key))
	})).filter((e) => e.rows.length), Y = (e) => I.get(e.item_key) || de(e), X = (0, J.useMemo)(() => W.filter((e) => P.has(e.item_key)), [W, P]), Je = (e) => {
		let t = new Set(e);
		F((e) => new Set([...e].filter((e) => !t.has(e)))), L((e) => new Map([...e].filter(([e]) => !t.has(e)))), oe((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, Ye = (e, t) => oe((n) => new Map(n).set(e, t)), Xe = () => {
		w("candidates"), E(""), O(""), j(1), F(/* @__PURE__ */ new Set()), L(/* @__PURE__ */ new Map()), oe(/* @__PURE__ */ new Map()), R(""), B.current = null;
	}, Ze = (e) => {
		_(e), Xe(), a({
			category: e === "metadata_fields" ? "" : e,
			queue: v === "pending" ? "" : v
		});
	}, Qe = (e) => {
		te(e), Xe(), a({
			category: g === "metadata_fields" ? "" : g,
			queue: e === "pending" ? "" : e
		});
	}, Z = Fe({
		mutationFn: ({ row: e, status: t, category: n }) => Pe(le(n, ce(n, e), t, Y(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			e.ok ? (Me(r, [t.item_key], n), Je([t.item_key]), d(ue(n))) : Ye(t.item_key, e.error || "服务端拒绝了这次判定");
		},
		onError: (e, { row: t }) => Ye(t.item_key, z(e))
	}), Q = Fe({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!Se.current) break;
				R(`正在处理 ${a} / ${n.length}`);
				try {
					let n = await Pe(le(t, ce(t, o), e, Y(o)));
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
			Me(t, n, e), Je(n), r.forEach(([e, t]) => Ye(e, t)), R("");
			let i = {
				approved: "通过",
				rejected: "忽略",
				skipped: "移至稍后处理",
				restore: "恢复待处理"
			}[e];
			d(`已${i} ${n.length} 项` + (r.length ? `，${r.length} 项未完成` : ""));
		},
		onError: (e) => {
			R(z(e));
		}
	}), $e = (e) => {
		!Q.isPending && X.length && (e === "approved" && G && X.some((e) => !Y(e).candidateKey) ? R("请先为所选资料选择要采用的来源。") : (R(""), Q.mutate({
			status: e,
			category: g,
			rows: X
		})));
	}, nt = (e) => {
		L((t) => {
			let n = new Map(t);
			for (let t of X) {
				let r = t.candidates?.find((t) => t.source === e);
				r && n.set(t.item_key, {
					...Y(t),
					candidateKey: r.candidate_key
				});
			}
			return n;
		}), R(`已选择 ${e}，点击通过所选采用。`);
	}, $ = async (e) => {
		if (ge) return;
		_e(e), xe("");
		let t = await c(e);
		Se.current && (_e(0), xe(t));
	}, rt = ye(Ce.mirror, h), it = Ce.genre_tags || [], at = {
		openItem: o,
		openEntity: s,
		onReveal: $,
		revealing: ge,
		revealNote: be,
		toast: d
	};
	return /* @__PURE__ */ V(ze, { children: /* @__PURE__ */ H("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			Ae ? /* @__PURE__ */ V(y, {
				tone: "warning",
				title: "本机只能浏览",
				extra: ee ? /* @__PURE__ */ V("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ V(m, {
						href: ee,
						children: "前往写入端复核"
					})
				}) : void 0,
				children: rt
			}) : null,
			/* @__PURE__ */ V(Et, { tags: it }),
			/* @__PURE__ */ H("div", {
				className: "flex flex-col gap-5 review-split:flex-row review-split:items-start review-split:gap-6",
				children: [/* @__PURE__ */ H("div", {
					"data-section-nav": !0,
					className: "w-full min-w-0 review-split:sticky review-split:top-topbar review-split:w-review-tabs review-split:shrink-0",
					children: [/* @__PURE__ */ V("h2", {
						id: "reviewcategories",
						children: "复核分类"
					}), /* @__PURE__ */ V(k, {
						group: "review",
						label: "复核分类",
						value: g,
						onChange: Ze,
						orientation: r ? "horizontal" : "vertical",
						panelPrefix: "review",
						sectionItems: !0,
						className: "",
						itemClassName: Kt,
						disabled: Z.isPending || Q.isPending,
						tabs: b.map((e) => {
							let t = Number(Oe.counts[e] || 0);
							return {
								value: e,
								label: ne[e],
								badge: t ? /* @__PURE__ */ V("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: t.toLocaleString()
								}) : null
							};
						})
					})]
				}), /* @__PURE__ */ H("div", {
					role: "tabpanel",
					id: `review-panel-${g}`,
					"aria-labelledby": `review-tab-${g}`,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ V(tt, {
							queueView: v,
							queueCounts: ke,
							onQueueChange: Qe,
							locked: Ae,
							fields: Ne,
							fieldFilter: Le,
							onFieldFilter: (e) => {
								O(e), E(""), j(1);
							},
							groupOptions: Be,
							groupBy: q,
							onGroupBy: (e) => {
								w(e), E(""), j(1);
							},
							groups: Ve,
							filter: He,
							onFilter: (e) => {
								E(e), j(1);
							},
							pageKeys: Ge,
							selected: P,
							onSelected: F,
							selectedRows: X,
							metadata: G,
							approvable: X.every((e) => ie(g, e)),
							busy: Q.isPending || Z.isPending,
							feedback: se,
							onUnifySource: nt,
							onRun: $e
						}),
						We.rows.length ? qe.map((e) => /* @__PURE__ */ H("section", {
							className: "flex flex-col gap-3",
							children: [qe.length > 1 || q !== "candidates" ? /* @__PURE__ */ H("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ V("h3", {
									className: "text-body-medium text-text-primary",
									children: `${e.title} · ${e.rows.length}`
								}), Ae ? null : /* @__PURE__ */ V(n, {
									variant: "ghost",
									size: "small",
									onClick: () => {
										let t = e.rows.map((e) => e.item_key), n = t.every((e) => P.has(e)), r = new Set(P);
										for (let e of t) n ? r.delete(e) : r.add(e);
										F(r);
									},
									children: e.rows.every((e) => P.has(e.item_key)) ? "清空本组" : "全选本组"
								})]
							}) : null, /* @__PURE__ */ V("div", {
								className: "review-grid gap-5",
								children: e.rows.map((e) => /* @__PURE__ */ V(Gt, {
									category: g,
									row: e,
									queueView: v,
									choice: Y(e),
									onChoice: (t) => L((n) => new Map(n).set(e.item_key, t)),
									selected: P.has(e.item_key),
									onSelect: (t, n) => F((r) => {
										let i = new Set(r);
										return B.current = je(i, Ge, B.current, e.item_key, t, n), i;
									}),
									locked: Ae,
									busy: Q.isPending || Z.isPending && Z.variables?.row.item_key === e.item_key,
									problem: ae.get(e.item_key) || "",
									genreTags: it,
									onDecide: (t) => {
										Z.isPending || Q.isPending || (oe((t) => new Map([...t].filter(([t]) => t !== e.item_key))), Z.mutate({
											row: e,
											status: t,
											category: g
										}));
									},
									handlers: at
								}, e.item_key))
							})]
						}, e.key)) : U.isError && !U.data ? /* @__PURE__ */ V(y, {
							tone: "error",
							title: "复核队列读取失败",
							action: /* @__PURE__ */ V(n, {
								variant: "secondary",
								size: "small",
								disabled: U.isFetching,
								onClick: () => void U.refetch(),
								children: "立即重试"
							}),
							children: z(U.error)
						}) : /* @__PURE__ */ V(p, {
							icon: ve,
							title: `此分类没有${re[v]}项目`,
							actions: b.some((e) => e !== g && Number(Oe.counts[e] || 0) > 0) ? /* @__PURE__ */ V(n, {
								size: "small",
								onClick: () => {
									let e = t.find((e) => e !== g && Number(Oe.counts[e] || 0) > 0);
									e && Ze(e);
								},
								children: "查看其他分类"
							}) : void 0,
							children: v === "pending" ? "可切换分类查看其他待确认资料。" : `${re[v]}的资料会保留在这里，可恢复到待处理。`
						}),
						Ue.length ? /* @__PURE__ */ V(u, {
							label: "复核",
							total: Ue.length,
							pagination: {
								pageIndex: We.page - 1,
								pageSize: M
							},
							onChange: (e) => {
								j(e.pageIndex + 1), N(e.pageSize);
							}
						}) : null,
						G && v === "pending" ? /* @__PURE__ */ V(et, {
							locked: Ae,
							openItem: o,
							toast: d
						}) : null
					]
				})]
			})
		]
	}) });
}
export { qt as ReviewPage };

//# debugId=16e48467-7d15-4599-a241-bd8f3f7b30fe