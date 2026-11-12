(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4ca14ed3-dffb-4e2b-b3b1-0924afc02212", e._sentryDebugIdIdentifier = "sentry-dbid-4ca14ed3-dffb-4e2b-b3b1-0924afc02212");
	} catch {}
})();
import { $ea3928288112382f$export$439d29a4e110a164 as e, $fe21c36db05242bb$export$d7b12c4107be0d61 as t, Button as n, ButtonLink as r, Checkbox as i, CheckboxGlyph as a, Chip as o, CollapseChevron as s, CollapseRegion as c, DEFAULT_CATEGORY as l, DataTableFooter as u, ENTITY_REVIEW_KINDS as d, Ea as f, EmptyState as ee, ExternalLink as p, FIELDSET_FOOT as m, FilterGlassRows as te, Gg as h, InputBase as g, LinkButton as _, Note as v, REVIEW_CATEGORIES as y, REVIEW_DECISION_LABELS as ne, REVIEW_KEY as b, REVIEW_LABELS as re, REVIEW_QUEUES as ie, REVIEW_QUEUE_LABELS as ae, RadioDot as x, RadioGroup as S, Select as C, SelectItem as w, SelectionActions as T, SelectionDock as E, SortableBoardTabs as D, TextField as O, Wt as k, __toESM as A, apiGet as j, apiSend as M, avatarInner as N, busyProps as P, canApprove as oe, cardClass as F, commonReviewSources as se, composingKey as I, confirmModal as ce, currentReviewRow as le, cx as L, decisionPayload as ue, decisionReceipt as de, defaultChoice as fe, errorMessage as R, fetchReview as pe, filterReviewRows as me, groupReviewRows as he, import_jsx_runtime as z, isReviewCategory as ge, jsx as B, jsxs as V, l7 as _e, localTime as ve, m7 as ye, mirrorText as be, pendingGenres as xe, queryClient as Se, recordGenre as Ce, reloadReview as H, require_react as we, reviewGroupingOptions as Te, reviewQueueData as Ee, reviewQueueOf as De, reviewWindow as Oe, rowEvidence as ke, rowFieldName as Ae, rowSubject as U, rowTags as W, rowTitle as G, selectReviewRange as je, settleReviewRows as Me, spinnerHtml as Ne, submitDecision as Pe, translate as Fe, useMutation as Ie, useNavigationOrder as Le, useOverlayScrollbar as Re, useQuery as ze, useViewGlide as K } from "./peach-app.js";
import { Page as Be } from "./peach-app.page-CW3QRN2N.js";
import { DataTable as Ve } from "./peach-app.data-table-DJ-wOupc.js";
import { LEGACY_AVATAR_IMG as q } from "./peach-app.legacy-avatar-NSITxLRS.js";
// src/react/review/auto-landings.ts
var J = /* @__PURE__ */ A(we(), 1), He = "/api/review/auto-landings", Ue = "/api/review/auto-landings/revert", We = ["review", "auto-landings"], Ge = (e) => j(He, e), Ke = (e) => j(`${He}?items=${encodeURIComponent(e.join("\n"))}`), qe = (e, t) => M(Ue, {
	items: e,
	token: t
}), Je = (e) => e.at === null ? "" : ve((/* @__PURE__ */ new Date(e.at * 1e3)).toISOString()), Y = (e) => e.code || e.name || (e.asset_id ? `#${e.asset_id}` : "未知作品"), X = (e) => e ? `「${e}」` : "空", Ye = (e) => e.tags.length ? e.tags.join("、") : e.value, Xe = (e) => e.tags.length ? "原有标签保留" : `原为 ${e.previous.length ? e.previous.map(X).join("、") : "空"}`;
function Ze(e) {
	return [
		...e.restores.map((e) => `${Y(e)} ${e.field}：${X(e.current)} 改回 ${X(e.previous)}`),
		...e.tags.map((e) => `${Y(e)} 删除标签「${e.tag}」`),
		...e.changed.map((e) => e.gone ? `${Y(e)} ${e.field}：作品已不在账本中，跳过` : `${Y(e)} ${e.field}：之后已被修改，保留现值`)
	];
}
function Qe(e) {
	let t = [e.restores.length ? `改回 ${e.restores.length} 条资料` : "", e.tags.length ? `删除 ${e.tags.length} 个自动补上的标签` : ""].filter(Boolean);
	return [
		`将撤回 ${e.decisions} 条自动写入：${t.join("，") || "没有要改的资料"}。`,
		e.changed.length ? `${e.changed.length} 条资料写入后被修改过或作品已删除，不改动。` : "",
		"撤回前会自动备份账本。下一轮资料处理仍按同一判据判断，可能再次写入。"
	].filter(Boolean).join("");
}
function $e(e) {
	let t = [e.restored ? `改回 ${e.restored} 条资料` : "", e.removed_tags ? `删除 ${e.removed_tags} 个标签` : ""].filter(Boolean);
	return `已撤回 ${e.decisions} 条自动写入${t.length ? `：${t.join("，")}` : ""}`;
}
// src/react/review/auto-landings-card.tsx
var Z = "资料处理按确定判据自动写入的标题、发行日期与标签，一行一条。撤回会把覆盖的值改回写入前、删掉补上的标签；写入后又被修改过的作品保留现值。";
function Q({ item: t, openItem: n }) {
	let r = t.asset_id && !t.gone ? () => n(t.asset_id) : void 0;
	return /* @__PURE__ */ V("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			disabled: !r,
			onClick: r,
			className: "flex aspect-card-cover w-16 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring disabled:cursor-default",
			children: [t.preview_url ? /* @__PURE__ */ B("img", {
				src: t.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ B("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: "无封面"
			}), /* @__PURE__ */ B(e, { children: `打开作品 ${Y(t)}` })]
		}), /* @__PURE__ */ V("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ V("span", {
				className: "truncate text-body-medium text-text-primary",
				children: [Y(t), t.assets > 1 ? /* @__PURE__ */ B("small", {
					className: "ml-1 text-caption-1-regular text-text-secondary",
					children: `${t.assets} 个文件`
				}) : null]
			}), /* @__PURE__ */ B("small", {
				title: t.name,
				className: "truncate text-caption-1-regular text-text-secondary",
				children: t.gone ? "作品已不在账本中" : t.name
			})]
		})]
	});
}
function et({ item: e }) {
	return /* @__PURE__ */ V("span", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [/* @__PURE__ */ V("span", {
			title: Ye(e),
			className: "truncate text-body-regular text-text-primary",
			children: [/* @__PURE__ */ B("span", {
				className: "text-text-secondary",
				children: `${e.field}：`
			}), Ye(e)]
		}), /* @__PURE__ */ B("small", {
			title: Xe(e),
			className: "truncate text-caption-1-regular text-text-secondary",
			children: Xe(e)
		})]
	});
}
function tt({ locked: e, openItem: t, toast: r }) {
	let [i, a] = (0, J.useState)([]), [o, s] = (0, J.useState)(null), c = ze({
		queryKey: We,
		queryFn: ({ signal: e }) => Ge(e)
	}), l = c.data?.items ?? [], u = Ie({
		mutationFn: async (e) => {
			let t = await Ke(e), { confirmed: n, result: r } = await ce({
				title: "撤回自动写入",
				body: Qe(t),
				items: Ze(t),
				confirmLabel: "撤回",
				onConfirm: () => qe(t.items, t.token)
			});
			return n ? r : null;
		},
		onSuccess: (e) => {
			e && (s(e), a([]), r($e(e)), Se.invalidateQueries({ queryKey: b }));
		},
		onError: (e) => r(R(e))
	});
	return !l.length && !o && !c.isError ? null : /* @__PURE__ */ V("section", {
		"aria-labelledby": "auto-landings-title",
		className: "flex flex-col gap-4",
		children: [o ? /* @__PURE__ */ V(v, {
			tone: "success",
			title: $e(o),
			children: [/* @__PURE__ */ B("p", {
				className: "text-body-2-regular",
				children: `撤回前的账本已备份为 ${o.backup}。`
			}), o.changed.length ? /* @__PURE__ */ V("p", {
				className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-body-2-regular",
				children: [`${o.changed.length} 条资料写入后被修改过或作品已删除，未改动：`, o.changed.map((e) => e.gone ? /* @__PURE__ */ B("span", {
					className: "text-text-secondary",
					children: `#${e.asset_id}（已删除）`
				}, `${e.asset_id}:${e.field}`) : /* @__PURE__ */ B(_, {
					size: "small",
					onClick: () => t(e.asset_id),
					children: Y(e)
				}, `${e.asset_id}:${e.field}`))]
			}) : null]
		}) : null, c.isError ? /* @__PURE__ */ B(v, {
			tone: "error",
			title: "读取自动写入的资料失败",
			children: R(c.error)
		}) : l.length ? /* @__PURE__ */ B(Ve, {
			label: "自动写入的资料",
			items: l,
			columns: [
				{
					id: "work",
					label: "作品",
					width: 300,
					min: 240,
					value: (e) => Y(e),
					render: (e) => /* @__PURE__ */ B(Q, {
						item: e,
						openItem: t
					})
				},
				{
					id: "written",
					label: "写入",
					width: 320,
					min: 220,
					value: (e) => `${e.field}${Ye(e)}`,
					render: (e) => /* @__PURE__ */ B(et, { item: e })
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
			description: Z,
			rowId: (e) => e.item_key,
			rowLabel: (e) => `${Y(e)} ${e.field}`,
			selected: i,
			onSelected: a,
			actions: (t) => /* @__PURE__ */ B(n, {
				variant: "secondary",
				size: "small",
				disabled: e || !t.length,
				...P(u.isPending),
				onClick: () => u.mutate(t.map((e) => e.item_key)),
				children: `撤回所选（${t.length}）`
			})
		}) : null]
	});
}
// src/react/review/bulk-toolbar.tsx
function nt(e) {
	let { groupOptions: t, groupBy: r, onGroupBy: i, groups: a, filter: o, onFilter: s, pageKeys: c, selected: l, onSelected: u, selectedRows: d, metadata: f, approvable: ee, busy: p, feedback: m, onUnifySource: h, onRun: g, queueView: _ = "pending", queueCounts: v, onQueueChange: y, locked: ne, fields: b, fieldFilter: re, onFieldFilter: x } = e, S = c.filter((e) => l.has(e)), T = S.length > 0 && S.length === c.length, D = se(d), O = f && d.some((e) => (e.candidates?.length || 0) > 1), k = D.length ? "统一选择来源" : "所选项目无共同来源", A = (0, J.useRef)(null), j = (0, J.useRef)(null), M = (0, J.useRef)(null), [N, P] = (0, J.useState)(!1), oe = K(A, j, "[data-entity-state][aria-pressed=\"true\"]", _);
	return (0, J.useLayoutEffect)(() => {
		let e = j.current, t = M.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => P(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ V(z.Fragment, { children: [/* @__PURE__ */ B(te, {
		label: "复核筛选",
		topLabel: "处理状态",
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: c.length ? "min-h-12 max-w-full flex-none flex-wrap" : "hidden",
		bottomRef: M,
		panes: /* @__PURE__ */ B("span", {
			ref: A,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ V("div", {
			ref: j,
			role: "group",
			"aria-label": "复核状态",
			"data-entity-states": "",
			onPointerLeave: oe.leave,
			children: [ie.map((e) => /* @__PURE__ */ V("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: p,
				"aria-pressed": _ === e,
				onPointerEnter: oe.hover,
				onClick: () => {
					e !== _ && y(e);
				},
				children: [
					/* @__PURE__ */ B("span", {
						"data-copy-key": `review.queue.${e}`,
						children: ae[e]
					}),
					" ",
					/* @__PURE__ */ B("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: v ? v[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ B("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: N ? void 0 : "invisible"
			})]
		}),
		bottom: c.length ? /* @__PURE__ */ V(z.Fragment, { children: [
			f && b.length ? /* @__PURE__ */ V(C, {
				"aria-label": "筛选资料字段",
				size: "sm",
				prefix: /* @__PURE__ */ B("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: "字段"
				}),
				selectedKey: re || "*",
				isDisabled: p,
				onSelectionChange: (e) => {
					e !== null && x(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ B(w, {
					id: "*",
					children: "全部"
				}), b.map((e) => /* @__PURE__ */ B(w, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ B(C, {
				"aria-label": "筛选分组方式",
				size: "sm",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(String(e));
				},
				children: t.map(([e, t]) => /* @__PURE__ */ B(w, {
					id: e,
					children: t
				}, e))
			}),
			a.length > 1 ? /* @__PURE__ */ V(C, {
				"aria-label": r === "field" ? "筛选字段分类" : "筛选当前分类",
				size: "sm",
				prefix: "分类",
				selectedKey: o || "*",
				onSelectionChange: (e) => {
					e !== null && s(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ B(w, {
					id: "*",
					children: "全部"
				}), a.map((e) => /* @__PURE__ */ B(w, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			ne ? null : /* @__PURE__ */ B(n, {
				variant: "secondary",
				size: "small",
				leadingIcon: _e,
				"aria-pressed": T,
				disabled: p,
				onClick: () => {
					let e = new Set(l);
					for (let t of c) T ? e.delete(t) : e.add(t);
					u(e);
				},
				children: T ? "清空当前选择" : o ? "全选当前分类" : "全选本页"
			})
		] }) : null
	}), /* @__PURE__ */ V(E, {
		label: "复核所选项目",
		visible: !ne && l.size > 0,
		count: `已选 ${l.size} 项`,
		children: [
			O && _ !== "ignored" ? /* @__PURE__ */ V(C, {
				"aria-label": "统一选择来源",
				size: "sm",
				selectedKey: "",
				isDisabled: p || !D.length,
				onSelectionChange: (e) => {
					e !== null && e !== "" && h(String(e));
				},
				children: [/* @__PURE__ */ B(w, {
					id: "",
					children: k
				}), D.map((e) => /* @__PURE__ */ B(w, {
					id: e,
					children: e
				}, e))]
			}) : null,
			_ === "ignored" ? null : /* @__PURE__ */ B(n, {
				variant: "ghost",
				size: "small",
				disabled: p || !l.size,
				onClick: () => g("rejected"),
				children: "忽略所选"
			}),
			_ === "pending" ? /* @__PURE__ */ B(n, {
				variant: "secondary",
				size: "small",
				disabled: p || !l.size,
				onClick: () => g("skipped"),
				children: "稍后处理所选"
			}) : /* @__PURE__ */ B(n, {
				variant: _ === "ignored" ? "primary" : "secondary",
				size: "small",
				disabled: p || !l.size,
				onClick: () => g("restore"),
				children: "恢复所选"
			}),
			_ === "ignored" ? null : /* @__PURE__ */ B(n, {
				variant: "primary",
				size: "small",
				disabled: p || !l.size || !ee,
				onClick: () => g("approved"),
				children: "通过所选"
			}),
			/* @__PURE__ */ B(n, {
				variant: "ghost",
				size: "small",
				disabled: p,
				onClick: () => u(/* @__PURE__ */ new Set()),
				children: "取消选择"
			}),
			m ? /* @__PURE__ */ B("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-secondary",
				children: m
			}) : null
		]
	})] });
}
// src/react/boardui/components/base/radio/radio-card.tsx
function rt({ className: e, title: n, description: r, ref: i, ...a }) {
	return /* @__PURE__ */ B(t, {
		ref: i,
		...a,
		className: (t) => L("group flex w-full items-center justify-between gap-3 rounded-2lg border border-border-button-default py-3 pe-5 ps-4 select-none", "transition-colors duration-150 ease", t.isHovered && !t.isDisabled ? "bg-background-primary-hover" : "bg-background-primary-default", t.isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", typeof e == "function" ? e(t) : e),
		children: (e) => /* @__PURE__ */ V(z.Fragment, { children: [/* @__PURE__ */ V("span", {
			className: "flex min-w-0 flex-col gap-0.5",
			children: [/* @__PURE__ */ B("span", {
				className: "truncate text-body-medium text-text-primary",
				children: n
			}), r != null && /* @__PURE__ */ B("span", {
				className: "truncate text-body-regular text-text-secondary",
				children: r
			})]
		}), /* @__PURE__ */ B("span", {
			className: "flex shrink-0 items-center py-1",
			children: /* @__PURE__ */ B(x, {
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
		let ee = -Infinity, p = Infinity, m = () => {
			for (let r = Math.max(ee, -s); r <= Math.min(p, s); r += 2) {
				let s, c = d[r - 1], l = d[r + 1];
				c && (d[r - 1] = void 0);
				let u = !1;
				if (l) {
					let e = l.oldPos - r;
					u = l && 0 <= e && e < a;
				}
				let m = c && c.oldPos + 1 < o;
				if (!u && !m) d[r] = void 0;
				else {
					if (s = !m || u && c.oldPos < l.oldPos ? this.addToPath(l, !0, !1, 0, n) : this.addToPath(c, !1, !0, 1, n), f = this.extractCommon(s, t, e, r, n), s.oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(s.lastComponent, t, e)) || !0;
					d[r] = s, s.oldPos + 1 >= o && (p = Math.min(p, r - 1)), f + 1 >= a && (ee = Math.max(ee, r + 1));
				}
			}
			s++;
		};
		if (r) (function e() {
			setTimeout(function() {
				if (s > c || Date.now() > u) return r(void 0);
				m() || e();
			}, 0);
		})();
		else for (; s <= c && Date.now() <= u;) {
			let e = m();
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
}, it = new class extends $ {}();
function at(e, t, n) {
	return it.diff(e, t, n);
}
// node_modules/diff/libesm/util/string.js
function ot(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
	return e.slice(0, n);
}
function st(e, t) {
	let n;
	if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
	for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
	return e.slice(-n);
}
function ct(e, t, n) {
	if (e.slice(0, t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);
	return n + e.slice(t.length);
}
function lt(e, t, n) {
	if (!t) return e + n;
	if (e.slice(-t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);
	return e.slice(0, -t.length) + n;
}
function ut(e, t) {
	return ct(e, t, "");
}
function dt(e, t) {
	return lt(e, t, "");
}
function ft(e, t) {
	return t.slice(0, pt(e, t));
}
function pt(e, t) {
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
function mt(e, t) {
	let n = [];
	for (let r of Array.from(t.segment(e))) {
		let e = r.segment;
		n.length && /\s/.test(n[n.length - 1]) && /\s/.test(e) ? n[n.length - 1] += e : n.push(e);
	}
	return n;
}
function ht(e, t) {
	if (t) return _t(e, t)[1];
	let n;
	for (n = e.length - 1; n >= 0 && e[n].match(/\s/); n--);
	return e.substring(n + 1);
}
function gt(e, t) {
	if (t) return _t(e, t)[0];
	let n = e.match(/^\s*/);
	return n ? n[0] : "";
}
function _t(e, t) {
	if (!t) return [gt(e), ht(e)];
	if (t.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
	let n = mt(e, t), r = n[0], i = n[n.length - 1];
	return [/\s/.test(r) ? r : "", /\s/.test(i) ? i : ""];
}
// node_modules/diff/libesm/diff/word.js
var vt = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", yt = RegExp(`[${vt}]+|\\s+|[^${vt}]`, "ug");
new class extends $ {
	equals(e, t, n) {
		return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
	}
	tokenize(e, t = {}) {
		let n;
		if (t.intlSegmenter) {
			let r = t.intlSegmenter;
			if (r.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
			n = mt(e, r);
		} else n = e.match(yt) || [];
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
			e.added ? r = e : e.removed ? i = e : ((r || i) && bt(n, i, r, e, t.intlSegmenter), n = e, r = null, i = null);
		}), (r || i) && bt(n, i, r, null, t.intlSegmenter), e;
	}
}();
function bt(e, t, n, r, i) {
	if (t && n) {
		let [a, o] = _t(t.value, i), [s, c] = _t(n.value, i);
		if (e) {
			let r = ot(a, s);
			e.value = lt(e.value, s, r), t.value = ut(t.value, r), n.value = ut(n.value, r);
		}
		if (r) {
			let e = st(o, c);
			r.value = ct(r.value, c, e), t.value = dt(t.value, e), n.value = dt(n.value, e);
		}
	} else if (n) {
		if (e) {
			let e = gt(n.value, i);
			n.value = n.value.substring(e.length);
		}
		if (r) {
			let e = gt(r.value, i);
			r.value = r.value.substring(e.length);
		}
	} else if (e && r) {
		let n = gt(r.value, i), [a, o] = _t(t.value, i), s = ot(n, a);
		t.value = ut(t.value, s);
		let c = st(ut(n, s), o);
		t.value = dt(t.value, c), r.value = ct(r.value, n, c), e.value = lt(e.value, n, n.slice(0, n.length - c.length));
	} else if (r) {
		let e = gt(r.value, i), n = ft(ht(t.value, i), e);
		t.value = dt(t.value, n);
	} else if (e) {
		let n = ft(ht(e.value, i), gt(t.value, i));
		t.value = ut(t.value, n);
	}
}
new class extends $ {
	tokenize(e) {
		let t = RegExp(`(\\r?\\n)|[${vt}]+|[^\\S\\n\\r]+|[^${vt}]`, "ug");
		return e.match(t) || [];
	}
}(), new class extends $ {
	constructor() {
		super(...arguments), this.tokenize = xt;
	}
	equals(e, t, n) {
		return n.ignoreWhitespace ? (n.newlineIsToken && e.includes("\n") || (e = e.trim()), n.newlineIsToken && t.includes("\n") || (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith("\n") && (e = e.slice(0, -1)), t.endsWith("\n") && (t = t.slice(0, -1))), super.equals(e, t, n);
	}
}();
function xt(e, t) {
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
function St(e) {
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
			if (St(e[r]) && e[r + 1].match(/\s/)) {
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
		super(...arguments), this.tokenize = xt;
	}
	get useLongestToken() {
		return !0;
	}
	castInput(e, t) {
		let { undefinedReplacement: n, stringifyReplacer: r = (e, t) => t === void 0 ? n : t } = t;
		return typeof e == "string" ? e : JSON.stringify(Ct(e, null, null, r), null, "  ");
	}
	equals(e, t, n) {
		return super.equals(e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
	}
}();
function Ct(e, t, n, r, i) {
	t ||= [], n ||= [], r && (e = r(i === void 0 ? "" : i, e));
	let a = 0;
	for (; a < t.length; a += 1) if (t[a] === e) return n[a];
	let o;
	if (Object.prototype.toString.call(e) === "[object Array]") {
		for (t.push(e), o = Array(e.length), n.push(o), a = 0; a < e.length; a += 1) o[a] = Ct(e[a], t, n, r, String(a));
		return t.pop(), n.pop(), o;
	}
	if (e && e.toJSON && (e = e.toJSON()), typeof e == "object" && e) {
		t.push(e), o = {}, n.push(o);
		let i = [], s;
		for (s in e)
 /* istanbul ignore else */
		Object.prototype.hasOwnProperty.call(e, s) && i.push(s);
		for (i.sort(), a = 0; a < i.length; a += 1) s = i[a], o[s] = Ct(e[s], t, n, r, s);
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
function wt({ value: e, reference: t }) {
	let n = (0, J.useMemo)(() => t ? at(t, e).filter((e) => !e.removed) : [{
		value: e,
		added: !1
	}], [e, t]);
	return /* @__PURE__ */ B(z.Fragment, { children: n.map((e, t) => e.added ? /* @__PURE__ */ B("mark", {
		"data-review-difference": "",
		className: "rounded-sm bg-status-yellow-background text-status-yellow-text",
		children: e.value
	}, t) : /* @__PURE__ */ B("span", { children: e.value }, t)) });
}
// src/react/review/candidate-form.tsx
function Tt(e) {
	if (typeof e != "string") return null;
	try {
		let t = new URL(e);
		return (t.protocol === "https:" || t.protocol === "http:") && !t.username && !t.password ? t : null;
	} catch {
		return null;
	}
}
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
	let [r, i] = (0, J.useState)(!1), a = (0, J.useId)(), o = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return o.length ? /* @__PURE__ */ V("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ V(n, {
			variant: "secondary",
			size: "small",
			leadingIcon: s,
			"aria-expanded": r,
			"aria-controls": a,
			"aria-label": `${r ? "收起" : "展开"} ${e.source || "该来源"} 的来源依据`,
			onClick: () => i(!r),
			children: [/* @__PURE__ */ B("span", {
				"data-copy-key": "review.card.source_evidence",
				children: "来源依据"
			}), ` · ${o.length}`]
		}), /* @__PURE__ */ B(c, {
			id: a,
			open: r,
			children: /* @__PURE__ */ B("dl", {
				className: "flex min-w-0 flex-col gap-2 px-3 pt-2 pb-1",
				children: o.map(([n, r]) => {
					let i = n === "cover_url" || n === "poster_url" ? Tt(r.value) : null;
					return /* @__PURE__ */ V("div", {
						className: "flex min-w-0 flex-wrap gap-x-2",
						children: [
							/* @__PURE__ */ B("dt", {
								className: "text-caption-1-regular text-text-tertiary",
								children: Et[n] || n
							}),
							/* @__PURE__ */ B("dd", {
								className: "min-w-0 text-body-2-regular break-words text-text-primary",
								children: i ? /* @__PURE__ */ V("a", {
									href: i.href,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-brand-secondary hover:underline",
									children: [
										Fe(Et[n] || n),
										" (",
										i.hostname,
										")"
									]
								}) : /* @__PURE__ */ B(wt, {
									value: r.display_value || "",
									reference: n === t.field && t.current_value ? t.current_value : t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[n]?.display_value)?.catalog_evidence?.[n]?.display_value
								})
							}),
							(r.warnings || []).map((e) => /* @__PURE__ */ B("small", {
								className: "w-full text-caption-1-regular text-status-yellow-text",
								children: e
							}, e))
						]
					}, n);
				})
			})
		})]
	}) : null;
}
function At(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || Fe("未标注来源")}${e.official ? ` · ${Fe("官方优先")}` : ""}${t ? ` · ID ${t}` : ""}`;
}
function jt({ candidate: e, reference: t }) {
	return /* @__PURE__ */ V("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ B("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ B(wt, {
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
	}) : /* @__PURE__ */ B(S, {
		"aria-label": `${t || "资料"}的来源`,
		value: n,
		isDisabled: i,
		onChange: r,
		children: /* @__PURE__ */ B("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: a.map((t) => /* @__PURE__ */ V("div", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ B(rt, {
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
function Nt({ genre: e, tags: t, locked: r, toast: i }) {
	let [a, o] = (0, J.useState)(""), [s, c] = (0, J.useState)(""), l = Ie({
		mutationFn: (t) => Ce(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (i(n ? `已把「${e}」收录为标签「${n}」` : `已把「${e}」判为非内容标签`), await H()) : c(t.error || "服务端拒绝了这次收录");
		},
		onError: (e) => c(R(e))
	}), u = () => {
		let e = a.trim();
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
			/* @__PURE__ */ B(O, {
				"aria-label": `「${e}」收录成的中文标签`,
				value: a,
				onChange: o,
				maxLength: 40,
				isDisabled: r || l.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ B(g, {
					size: "small",
					list: t.length ? Dt : void 0,
					autoComplete: "off",
					placeholder: "中文标签",
					onKeyDown: (e) => {
						e.key !== "Enter" || I(e.nativeEvent) || (e.preventDefault(), u());
					}
				})
			}),
			/* @__PURE__ */ B(n, {
				variant: "secondary",
				size: "small",
				disabled: r || l.isPending,
				onClick: u,
				children: "收录"
			}),
			/* @__PURE__ */ B(n, {
				variant: "secondary",
				size: "small",
				disabled: r || l.isPending,
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
	let i = xe(e);
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
	let [t, r] = (0, J.useState)("idle");
	return (0, J.useEffect)(() => {
		if (t !== "loading") return;
		let e = setTimeout(() => r("failed"), 3e4);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ V("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [t === "loading" ? /* @__PURE__ */ V("span", {
			role: "status",
			className: "absolute flex items-center gap-2 text-body-2-regular text-text-secondary",
			children: [/* @__PURE__ */ B("span", { dangerouslySetInnerHTML: { __html: Ne("正在加载图片") } }), "正在加载图片"]
		}) : null, e && (t === "loading" || t === "ready") ? /* @__PURE__ */ B("img", {
			src: e,
			alt: "来源提供的备选图片",
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${t === "loading" ? "invisible" : ""}`,
			onLoad: () => r("ready"),
			onError: () => r("failed")
		}) : e ? /* @__PURE__ */ V("div", {
			className: "flex flex-col items-center gap-2",
			children: [t === "failed" ? /* @__PURE__ */ B("span", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得来源图片"
			}) : null, /* @__PURE__ */ B(n, {
				variant: "secondary",
				size: "small",
				"aria-label": t === "failed" ? "立即重试加载来源图片" : void 0,
				onClick: () => r("loading"),
				children: t === "failed" ? "立即重试" : "查看来源图片"
			})]
		}) : /* @__PURE__ */ B("span", {
			className: "text-body-2-regular text-text-secondary",
			children: "未取得来源图片"
		})]
	});
}
function zt({ asset: t, openItem: r }) {
	let i = t.name || "";
	return /* @__PURE__ */ V("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ V("button", {
			type: "button",
			onClick: () => r(t.id),
			className: "flex aspect-card-cover w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
			children: [t.preview_url ? /* @__PURE__ */ B("img", {
				src: t.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ B("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: "无封面"
			}), /* @__PURE__ */ B(e, { children: `打开原视频 ${i}` })]
		}), /* @__PURE__ */ V("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ B("b", {
				title: i,
				className: "w-full truncate text-body-medium text-text-primary",
				children: t.code || i || "原视频"
			}), /* @__PURE__ */ B(n, {
				variant: "secondary",
				size: "small",
				leadingIcon: h,
				onClick: () => r(t.id),
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
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-background-secondary-default text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${q}`,
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
function Vt({ row: e, openItem: t, openEntity: i, onReveal: a, revealing: o, note: s }) {
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
				children: [c ? /* @__PURE__ */ B(r, {
					variant: "secondary",
					size: "small",
					trailingIcon: k,
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					children: "来源资料"
				}) : null, /* @__PURE__ */ B(n, {
					variant: "secondary",
					size: "small",
					onClick: () => i("creator", e.creator || ""),
					children: `查看全部 ${u.toLocaleString()} 部作品`
				})]
			}),
			/* @__PURE__ */ B(Lt, { url: e.preview_url }),
			l.length ? /* @__PURE__ */ V(z.Fragment, { children: [/* @__PURE__ */ B("h5", {
				className: "text-body-medium text-text-primary",
				children: "本地作品样本"
			}), /* @__PURE__ */ B("ul", {
				className: "flex flex-col gap-1",
				children: l.map((e) => /* @__PURE__ */ V("li", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ B(n, {
						variant: "ghost",
						size: "small",
						className: "min-w-0",
						onClick: () => t(e.id),
						children: /* @__PURE__ */ B("span", {
							title: e.name,
							className: "block max-w-full truncate",
							children: e.name
						})
					}), /* @__PURE__ */ B(n, {
						variant: "ghost",
						size: "small",
						"aria-label": `打开 ${e.name} 的文件位置`,
						...P(o === e.id),
						onClick: () => a(e.id),
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
function Ht({ assets: t, picked: n, onPicked: r, locked: i }) {
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
	return /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ B(T, {
			prefix: /* @__PURE__ */ B("span", {
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
		}), /* @__PURE__ */ B("div", {
			className: "review-asset-grid gap-1.5",
			children: t.map((t, n) => {
				let r = c.has(t.id);
				return /* @__PURE__ */ V("button", {
					type: "button",
					"aria-pressed": r,
					title: t.name,
					onClick: (e) => l(n, e.shiftKey),
					className: `relative aspect-card-cover cursor-pointer overflow-hidden rounded-surface bg-background-tertiary-default outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-border-focus-ring ${r ? "opacity-100 ring-2 ring-border-button-active ring-inset" : "opacity-50"}`,
					children: [
						/* @__PURE__ */ B("img", {
							src: `/poster?id=${t.id}&c=4`,
							alt: "",
							loading: "lazy",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ B("span", {
							className: "absolute top-1 right-1",
							children: /* @__PURE__ */ B(a, {
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
						/* @__PURE__ */ B(e, { children: `${r ? "已选" : "未选"} ${t.name || t.id}` })
					]
				}, t.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var Ut = F({
	variant: "filled",
	padding: "none",
	className: "flex flex-col overflow-hidden"
}), Wt = "flex min-h-6 min-w-0 items-center", Gt = 2, Kt = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function qt(e) {
	let { category: t, row: r, choice: a, onChoice: s, selected: c, onSelect: l, locked: u, busy: p, problem: te, genreTags: h, onDecide: g, handlers: v, queueView: y = "pending" } = e, b = (0, J.useRef)(!1), re = Re(), ie = t === "metadata_fields", ae = d[t] || "", x = String(r.creator || "").trim(), S = !!ae && !!x, C = G(t, r), w = Ae(t, r), T = U(t, r), E = ke(r), D = W(r), O = oe(t, r), k = r.comparison_assets || [], A = r.preview_assets || [], j = ne[r.decision || ""], M = k.length > 1 ? /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-3",
		children: [k.slice(0, Gt).map((e) => /* @__PURE__ */ B(zt, {
			asset: e,
			openItem: v.openItem
		}, e.id)), k.length > Gt ? /* @__PURE__ */ B("p", {
			className: "text-body-2-regular text-text-secondary",
			children: `另有 ${(k.length - Gt).toLocaleString()} 部对照作品`
		}) : null]
	}) : S ? /* @__PURE__ */ B(Bt, {
		kind: ae,
		name: x,
		works: Number(r.video_count || r.videos || 0),
		openEntity: v.openEntity,
		avatar: N(x, r.entity_id ? {
			id: r.entity_id,
			has_image: !!r.has_image,
			image_version: r.image_version,
			avatar_focus: r.avatar_focus
		} : null, null, ae)
	}) : r.asset_id ? /* @__PURE__ */ B(zt, {
		openItem: v.openItem,
		asset: {
			id: r.asset_id,
			name: r.asset_name,
			code: r.code,
			preview_url: r.asset_preview_url
		}
	}) : null, F = ie ? /* @__PURE__ */ B(Mt, {
		row: r,
		fieldName: w,
		value: a.candidateKey,
		onChange: (e) => s({
			...a,
			candidateKey: e
		}),
		locked: u
	}) : t === "creator_tags" ? A.length ? /* @__PURE__ */ B(Ht, {
		assets: A,
		picked: a.assets,
		locked: u,
		onPicked: (e) => s({
			...a,
			assets: e
		})
	}) : /* @__PURE__ */ B(ee, {
		size: "compact",
		icon: f,
		title: "这批作品尚未抽帧",
		children: `${r.video_count || ""} 条作品还没有可用预览；批准后仍会按所选资料写入标签。`
	}) : t === "fc2_similarity" ? null : t === "western_identity" ? /* @__PURE__ */ B(Vt, {
		row: r,
		openItem: v.openItem,
		openEntity: v.openEntity,
		onReveal: v.onReveal,
		revealing: v.revealing,
		note: v.revealNote
	}) : /* @__PURE__ */ B(Lt, { url: r.preview_url }), se = S ? M : w ? /* @__PURE__ */ V("h4", {
		className: L(Wt, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ B("span", {
			title: w,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ B(o, {
				variant: "caption",
				color: "neutral",
				children: w
			})
		}), /* @__PURE__ */ B("span", {
			title: T,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: T
		})]
	}) : /* @__PURE__ */ B("h4", {
		className: Wt,
		children: /* @__PURE__ */ B("span", {
			title: C,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: C
		})
	});
	return /* @__PURE__ */ V("section", {
		"aria-label": C,
		"data-review-key": r.item_key,
		className: L(Ut, Kt(t)),
		children: [
			/* @__PURE__ */ V("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					u ? null : /* @__PURE__ */ B("span", {
						className: L(Wt, "shrink-0"),
						onPointerDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						children: /* @__PURE__ */ B(i, {
							isSelected: c,
							"aria-label": `选择 ${C}`,
							onChange: (e) => l(b.current, e)
						})
					}),
					/* @__PURE__ */ B("div", {
						className: "min-w-0 flex-1",
						children: se
					}),
					j ? /* @__PURE__ */ B(o, {
						variant: "caption",
						color: "neutral",
						children: j
					}) : null
				]
			}),
			/* @__PURE__ */ B("div", {
				className: "relative mx-5 flex min-w-0 min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ V("div", {
					ref: re,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						r.source_name ? /* @__PURE__ */ B("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `来源写法：${r.source_name}`
						}) : null,
						!S && (r.board || r.assets) ? /* @__PURE__ */ B("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `对照文件：${Number(r.video_count || r.assets || 0).toLocaleString()}`
						}) : null,
						!S && M ? M : null,
						ie && (E || r.current_value !== void 0) ? /* @__PURE__ */ V("div", {
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
									}), r.current_owner?.startsWith("user:") || r.current_owner?.startsWith("review:") ? /* @__PURE__ */ B(o, {
										variant: "caption",
										color: "neutral",
										children: "人工确认"
									}) : null]
								}),
								/* @__PURE__ */ B("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: r.current_value === void 0 ? E : r.current_value ? /* @__PURE__ */ B(wt, {
										value: r.current_value,
										reference: (r.candidates?.find((e) => e.candidate_key === a.candidateKey) || r.candidates?.[0])?.display_value
									}) : "尚无资料"
								}),
								r.videos === void 0 ? null : /* @__PURE__ */ B("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: `${Number(r.videos).toLocaleString()} 个${r.asset_path ? "匹配文件" : "同番号文件"}`
								})
							]
						}) : null,
						D.length || t === "creator_tags" ? /* @__PURE__ */ B("div", {
							className: "flex flex-wrap gap-1",
							children: D.length ? D.map((e) => /* @__PURE__ */ B(o, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ B("small", {
								className: "text-body-2-regular text-text-secondary",
								children: "暂无待确认标签"
							})
						}) : null,
						ie ? /* @__PURE__ */ V("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ V("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ B("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: "候选来源"
								}), ` · ${r.candidates?.length || 0}`]
							}), r.current_value || (r.candidates?.length || 0) > 1 ? /* @__PURE__ */ B("span", {
								"data-copy-key": r.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: r.current_value ? "与当前值比较" : "来源间差异"
							}) : null]
						}) : null,
						F,
						/* @__PURE__ */ B(Pt, {
							row: r,
							tags: h,
							locked: u,
							toast: v.toast
						}),
						!ie && E ? /* @__PURE__ */ B("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: E
						}) : null
					]
				})
			}),
			/* @__PURE__ */ V("footer", {
				className: L(m.stack, "shrink-0"),
				children: [
					y === "ignored" ? null : /* @__PURE__ */ B(_, {
						variant: "secondary",
						size: "small",
						className: "me-auto",
						disabled: u,
						...P(p),
						onClick: () => g("rejected"),
						children: "忽略"
					}),
					y === "pending" ? /* @__PURE__ */ B(n, {
						variant: "secondary",
						size: "small",
						disabled: u,
						...P(p),
						onClick: () => g("skipped"),
						children: "稍后处理"
					}) : /* @__PURE__ */ B(n, {
						variant: y === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: u,
						...P(p),
						onClick: () => g("restore"),
						children: "恢复待处理"
					}),
					y === "ignored" ? null : /* @__PURE__ */ B(n, {
						variant: "primary",
						size: "small",
						disabled: u || !O,
						...P(p),
						title: O ? void 0 : "没有可采用的资料，可先保留或忽略",
						onClick: () => g("approved"),
						children: O ? "通过" : "不可通过"
					}),
					te ? /* @__PURE__ */ B("p", {
						role: "status",
						className: "w-full text-body-2-regular text-text-error-primary",
						children: te
					}) : null
				]
			})
		]
	});
}
// src/react/review/review-page.tsx
var Jt = "flex cursor-pointer items-center justify-between gap-2";
function Yt(e) {
	let t = Le("review").keys.filter(ge), [r, i] = (0, J.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, J.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => i(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: a, openItem: o, openEntity: s, revealSource: c, toast: d, readOnly: f, readOnlyMessage: m, writerUrl: te } = e, [h, g] = (0, J.useState)(ge(e.category) ? e.category : l), [_, ne] = (0, J.useState)(() => De(e.queue)), [x, S] = (0, J.useState)("candidates"), [C, w] = (0, J.useState)(""), [T, E] = (0, J.useState)(""), [O, k] = (0, J.useState)(1), [A, j] = (0, J.useState)(20), [M, N] = (0, J.useState)(/* @__PURE__ */ new Set()), [P, F] = (0, J.useState)(/* @__PURE__ */ new Map()), [se, I] = (0, J.useState)(/* @__PURE__ */ new Map()), [ce, L] = (0, J.useState)(""), z = (0, J.useRef)(null), [_e, ve] = (0, J.useState)(0), [xe, Se] = (0, J.useState)(""), Ce = (0, J.useRef)(!0);
	(0, J.useEffect)(() => () => {
		Ce.current = !1;
	}, []);
	let H = ze({
		queryKey: b,
		queryFn: ({ signal: e }) => pe(e)
	}), we = H.data || {
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
	}, ke = Ee(we, _), Ae = H.data ? Object.fromEntries(ie.map((e) => [e, y.reduce((t, n) => t + Number(Ee(we, e).counts[n] || 0), 0)])) : void 0, U = ke.sections[h] || [], W = h === "metadata_fields", G = f;
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
	let Ne = (0, J.useMemo)(() => W ? he(U, "field") : [], [U, W]), Re = Ne.some((e) => e.key === T) ? T : "", K = (0, J.useMemo)(() => W ? me(U, "field", Re) : U, [
		U,
		W,
		Re
	]), Ve = (0, J.useMemo)(() => Te(K, W), [K, W]), q = Ve.some(([e]) => e === x) ? x : "candidates", He = (0, J.useMemo)(() => he(K, q), [K, q]), Ue = He.some((e) => e.key === C) ? C : "", We = (0, J.useMemo)(() => me(K, q, Ue), [
		K,
		q,
		Ue
	]), Ge = (0, J.useMemo)(() => Oe(We, O, A), [
		We,
		O,
		A
	]), Ke = Ge.rows.map((e) => e.item_key), qe = new Set(Ke), Je = He.map((e) => ({
		...e,
		rows: e.rows.filter((e) => qe.has(e.item_key))
	})).filter((e) => e.rows.length), Y = (e) => P.get(e.item_key) || fe(e), X = (0, J.useMemo)(() => U.filter((e) => M.has(e.item_key)), [U, M]), Ye = (e) => {
		let t = new Set(e);
		N((e) => new Set([...e].filter((e) => !t.has(e)))), F((e) => new Map([...e].filter(([e]) => !t.has(e)))), I((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, Xe = (e, t) => I((n) => new Map(n).set(e, t)), Ze = () => {
		S("candidates"), w(""), E(""), k(1), N(/* @__PURE__ */ new Set()), F(/* @__PURE__ */ new Map()), I(/* @__PURE__ */ new Map()), L(""), z.current = null;
	}, Qe = (e) => {
		g(e), Ze(), a({
			category: e === "metadata_fields" ? "" : e,
			queue: _ === "pending" ? "" : _
		});
	}, $e = (e) => {
		ne(e), Ze(), a({
			category: h === "metadata_fields" ? "" : h,
			queue: e === "pending" ? "" : e
		});
	}, Z = Ie({
		mutationFn: ({ row: e, status: t, category: n }) => Pe(ue(n, le(n, e), t, Y(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			e.ok ? (Me(r, [t.item_key], n), Ye([t.item_key]), d(de(n))) : Xe(t.item_key, e.error || "服务端拒绝了这次判定");
		},
		onError: (e, { row: t }) => Xe(t.item_key, R(e))
	}), Q = Ie({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!Ce.current) break;
				L(`正在处理 ${a} / ${n.length}`);
				try {
					let n = await Pe(ue(t, le(t, o), e, Y(o)));
					if (!n.ok) throw Error(n.error || "服务端未采用该项");
					r.push(o.item_key);
				} catch (e) {
					i.push([o.item_key, R(e)]);
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
			Me(t, n, e), Ye(n), r.forEach(([e, t]) => Xe(e, t)), L("");
			let i = {
				approved: "通过",
				rejected: "忽略",
				skipped: "移至稍后处理",
				restore: "恢复待处理"
			}[e];
			d(`已${i} ${n.length} 项` + (r.length ? `，${r.length} 项未完成` : ""));
		},
		onError: (e) => {
			L(R(e));
		}
	}), et = (e) => {
		!Q.isPending && X.length && (e === "approved" && W && X.some((e) => !Y(e).candidateKey) ? L("请先为所选资料选择要采用的来源。") : (L(""), Q.mutate({
			status: e,
			category: h,
			rows: X
		})));
	}, rt = (e) => {
		F((t) => {
			let n = new Map(t);
			for (let t of X) {
				let r = t.candidates?.find((t) => t.source === e);
				r && n.set(t.item_key, {
					...Y(t),
					candidateKey: r.candidate_key
				});
			}
			return n;
		}), L(`已选择 ${e}，点击通过所选采用。`);
	}, $ = async (e) => {
		if (_e) return;
		ve(e), Se("");
		let t = await c(e);
		Ce.current && (ve(0), Se(t));
	}, it = be(we.mirror, m), at = we.genre_tags || [], ot = {
		openItem: o,
		openEntity: s,
		onReveal: $,
		revealing: _e,
		revealNote: xe,
		toast: d
	};
	return /* @__PURE__ */ B(Be, { children: /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			G ? /* @__PURE__ */ B(v, {
				tone: "warning",
				title: "本机只能浏览",
				extra: te ? /* @__PURE__ */ B("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ B(p, {
						href: te,
						children: "前往写入端复核"
					})
				}) : void 0,
				children: it
			}) : null,
			/* @__PURE__ */ B(Ot, { tags: at }),
			/* @__PURE__ */ V("div", {
				className: "flex flex-col gap-5 review-split:flex-row review-split:items-start review-split:gap-6",
				children: [/* @__PURE__ */ V("div", {
					"data-section-nav": !0,
					className: "w-full min-w-0 review-split:sticky review-split:top-topbar review-split:w-review-tabs review-split:shrink-0",
					children: [/* @__PURE__ */ B("h2", {
						id: "reviewcategories",
						children: "复核分类"
					}), /* @__PURE__ */ B(D, {
						group: "review",
						label: "复核分类",
						value: h,
						onChange: Qe,
						orientation: r ? "horizontal" : "vertical",
						panelPrefix: "review",
						sectionItems: !0,
						className: "",
						itemClassName: Jt,
						disabled: Z.isPending || Q.isPending,
						tabs: y.map((e) => {
							let t = Number(ke.counts[e] || 0);
							return {
								value: e,
								label: re[e],
								badge: t ? /* @__PURE__ */ B("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: t.toLocaleString()
								}) : null
							};
						})
					})]
				}), /* @__PURE__ */ V("div", {
					role: "tabpanel",
					id: `review-panel-${h}`,
					"aria-labelledby": `review-tab-${h}`,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ B(nt, {
							queueView: _,
							queueCounts: Ae,
							onQueueChange: $e,
							locked: G,
							fields: Ne,
							fieldFilter: Re,
							onFieldFilter: (e) => {
								E(e), w(""), k(1);
							},
							groupOptions: Ve,
							groupBy: q,
							onGroupBy: (e) => {
								S(e), w(""), k(1);
							},
							groups: He,
							filter: Ue,
							onFilter: (e) => {
								w(e), k(1);
							},
							pageKeys: Ke,
							selected: M,
							onSelected: N,
							selectedRows: X,
							metadata: W,
							approvable: X.every((e) => oe(h, e)),
							busy: Q.isPending || Z.isPending,
							feedback: ce,
							onUnifySource: rt,
							onRun: et
						}),
						Ge.rows.length ? Je.map((e) => /* @__PURE__ */ V("section", {
							className: "flex flex-col gap-3",
							children: [Je.length > 1 || q !== "candidates" ? /* @__PURE__ */ V("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ B("h3", {
									className: "text-body-medium text-text-primary",
									children: `${Fe(e.title)} · ${e.rows.length}`
								}), G ? null : /* @__PURE__ */ B(n, {
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
									category: h,
									row: e,
									queueView: _,
									choice: Y(e),
									onChoice: (t) => {
										F((n) => new Map(n).set(e.item_key, t)), I((t) => {
											let n = new Map(t);
											return n.delete(e.item_key), n;
										});
									},
									selected: M.has(e.item_key),
									onSelect: (t, n) => N((r) => {
										let i = new Set(r);
										return z.current = je(i, Ke, z.current, e.item_key, t, n), i;
									}),
									locked: G,
									busy: Q.isPending || Z.isPending && Z.variables?.row.item_key === e.item_key,
									problem: se.get(e.item_key) || "",
									genreTags: at,
									onDecide: (t) => {
										Z.isPending || Q.isPending || (I((t) => new Map([...t].filter(([t]) => t !== e.item_key))), t === "approved" && h === "metadata_fields" && !Y(e).candidateKey ? Xe(e.item_key, "批准资料字段时，请先选择要采用的来源") : Z.mutate({
											row: e,
											status: t,
											category: h
										}));
									},
									handlers: ot
								}, e.item_key))
							})]
						}, e.key)) : H.isError && !H.data ? /* @__PURE__ */ B(v, {
							tone: "error",
							title: "复核队列读取失败",
							action: /* @__PURE__ */ B(n, {
								variant: "secondary",
								size: "small",
								disabled: H.isFetching,
								onClick: () => void H.refetch(),
								children: "立即重试"
							}),
							children: R(H.error)
						}) : /* @__PURE__ */ B(ee, {
							icon: ye,
							title: `此分类没有${ae[_]}项目`,
							actions: y.some((e) => e !== h && Number(ke.counts[e] || 0) > 0) ? /* @__PURE__ */ B(n, {
								size: "small",
								onClick: () => {
									let e = t.find((e) => e !== h && Number(ke.counts[e] || 0) > 0);
									e && Qe(e);
								},
								children: "查看其他分类"
							}) : void 0,
							children: _ === "pending" ? "可切换分类查看其他待确认资料。" : `${ae[_]}的资料会保留在这里，可恢复到待处理。`
						}),
						We.length ? /* @__PURE__ */ B(u, {
							label: "复核",
							total: We.length,
							pagination: {
								pageIndex: Ge.page - 1,
								pageSize: A
							},
							onChange: (e) => {
								k(e.pageIndex + 1), j(e.pageSize);
							}
						}) : null,
						W && _ === "pending" ? /* @__PURE__ */ B(tt, {
							locked: G,
							openItem: o,
							toast: d
						}) : null
					]
				})]
			})
		]
	}) });
}
export { Yt as ReviewPage };

//# debugId=4ca14ed3-dffb-4e2b-b3b1-0924afc02212