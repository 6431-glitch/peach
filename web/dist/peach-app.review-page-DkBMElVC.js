(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bad4198e-1cdd-4835-8da4-504f016334c8", e._sentryDebugIdIdentifier = "sentry-dbid-bad4198e-1cdd-4835-8da4-504f016334c8");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as e, $b4f18e3395fe64d7$export$3e41faf802a29e71 as t, $b4f18e3395fe64d7$export$b2539bed5023c21c as n, $ea3928288112382f$export$439d29a4e110a164 as r, $fe21c36db05242bb$export$d7b12c4107be0d61 as i, Button as a, ButtonLink as o, Checkbox as s, CheckboxGlyph as c, Chip as l, CollapseChevron as u, CollapseRegion as d, DEFAULT_CATEGORY as f, ENTITY_REVIEW_KINDS as p, Ea as m, EmptyState as h, ExternalLink as ee, FIELDSET_FOOT as g, FilterGlassRows as _, Gg as v, InputBase as y, LinkButton as te, Note as b, REVIEW_CATEGORIES as x, REVIEW_DECISION_LABELS as ne, REVIEW_KEY as S, REVIEW_LABELS as C, REVIEW_QUEUES as re, REVIEW_QUEUE_LABELS as w, RadioDot as T, RadioGroup as E, Select as D, SelectItem as O, SelectionActions as k, SelectionDock as A, TextField as j, Wt as M, __toESM as N, avatarInner as ie, busyProps as P, canApprove as ae, cardClass as F, commonReviewSources as I, currentReviewRow as oe, cx as se, decisionPayload as ce, decisionReceipt as le, defaultChoice as ue, errorMessage as de, fetchReview as fe, filterReviewRows as pe, groupReviewRows as me, import_jsx_runtime as L, isReviewCategory as he, jsx as R, jsxs as z, l7 as ge, m7 as _e, mirrorText as ve, paginationRange as ye, pendingGenres as be, recordGenre as xe, reloadReview as Se, require_react as Ce, reviewGroupingOptions as we, reviewQueueData as Te, reviewQueueOf as Ee, reviewWindow as De, rowEvidence as B, rowFieldName as Oe, rowSubject as ke, rowTags as Ae, rowTitle as V, selectReviewRange as je, settleReviewRows as Me, spinnerHtml as H, submitDecision as Ne, useMutation as Pe, useOverlayScrollbar as Fe, useQuery as Ie, useViewGlide as Le } from "./peach-app.js";
import { Page as Re } from "./peach-app.page-CW3QRN2N.js";
import { LEGACY_AVATAR_IMG as ze } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as Be } from "./peach-app.pill-aria-tab-list-Byrq5vdA.js";
// src/react/review/bulk-toolbar.tsx
var U = /* @__PURE__ */ N(Ce(), 1);
function Ve(e) {
	let { groupOptions: t, groupBy: n, onGroupBy: r, groups: i, filter: o, onFilter: s, pageKeys: c, selected: l, onSelected: u, selectedRows: d, metadata: f, approvable: p, busy: m, feedback: h, onUnifySource: ee, onRun: g, queueView: v = "pending", queueCounts: y, onQueueChange: te, locked: b, fields: x, fieldFilter: ne, onFieldFilter: S } = e, C = c.filter((e) => l.has(e)), T = C.length > 0 && C.length === c.length, E = I(d), k = f && d.some((e) => (e.candidates?.length || 0) > 1), j = E.length ? "统一选择来源" : "所选项目无共同来源", M = (0, U.useRef)(null), N = (0, U.useRef)(null), ie = (0, U.useRef)(null), [P, ae] = (0, U.useState)(!1), F = Le(M, N, "[data-entity-state][aria-pressed=\"true\"]", v);
	return (0, U.useLayoutEffect)(() => {
		let e = N.current, t = ie.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => ae(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ z(L.Fragment, { children: [/* @__PURE__ */ R(_, {
		label: "复核筛选",
		topLabel: "处理状态",
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: c.length ? "min-h-12 max-w-full flex-none flex-wrap" : "hidden",
		bottomRef: ie,
		panes: /* @__PURE__ */ R("span", {
			ref: M,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ z("div", {
			ref: N,
			role: "group",
			"aria-label": "复核状态",
			"data-entity-states": "",
			onPointerLeave: F.leave,
			children: [re.map((e) => /* @__PURE__ */ z("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: m,
				"aria-pressed": v === e,
				onPointerEnter: F.hover,
				onClick: () => {
					e !== v && te(e);
				},
				children: [
					/* @__PURE__ */ R("span", {
						"data-copy-key": `review.queue.${e}`,
						children: w[e]
					}),
					" ",
					/* @__PURE__ */ R("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: y ? y[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ R("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: P ? void 0 : "invisible"
			})]
		}),
		bottom: c.length ? /* @__PURE__ */ z(L.Fragment, { children: [
			f && x.length ? /* @__PURE__ */ z(D, {
				"aria-label": "筛选资料字段",
				size: "sm",
				prefix: /* @__PURE__ */ R("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: "字段"
				}),
				selectedKey: ne || "*",
				isDisabled: m,
				onSelectionChange: (e) => {
					e !== null && S(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ R(O, {
					id: "*",
					children: "全部"
				}), x.map((e) => /* @__PURE__ */ R(O, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ R(D, {
				"aria-label": "筛选分组方式",
				size: "sm",
				selectedKey: n,
				onSelectionChange: (e) => {
					e !== null && r(String(e));
				},
				children: t.map(([e, t]) => /* @__PURE__ */ R(O, {
					id: e,
					children: t
				}, e))
			}),
			i.length > 1 ? /* @__PURE__ */ z(D, {
				"aria-label": n === "field" ? "筛选字段分类" : "筛选当前分类",
				size: "sm",
				prefix: "分类",
				selectedKey: o || "*",
				onSelectionChange: (e) => {
					e !== null && s(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ R(O, {
					id: "*",
					children: "全部"
				}), i.map((e) => /* @__PURE__ */ R(O, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			b ? null : /* @__PURE__ */ R(a, {
				variant: "secondary",
				size: "small",
				leadingIcon: ge,
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
	}), /* @__PURE__ */ z(A, {
		label: "复核所选项目",
		visible: !b && l.size > 0,
		count: `已选 ${l.size} 项`,
		children: [
			k && v !== "ignored" ? /* @__PURE__ */ z(D, {
				"aria-label": "统一选择来源",
				size: "sm",
				selectedKey: "",
				isDisabled: m || !E.length,
				onSelectionChange: (e) => {
					e !== null && e !== "" && ee(String(e));
				},
				children: [/* @__PURE__ */ R(O, {
					id: "",
					children: j
				}), E.map((e) => /* @__PURE__ */ R(O, {
					id: e,
					children: e
				}, e))]
			}) : null,
			v === "ignored" ? null : /* @__PURE__ */ R(a, {
				variant: "ghost",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("rejected"),
				children: "忽略所选"
			}),
			v === "pending" ? /* @__PURE__ */ R(a, {
				variant: "secondary",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("skipped"),
				children: "稍后处理所选"
			}) : /* @__PURE__ */ R(a, {
				variant: v === "ignored" ? "primary" : "secondary",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("restore"),
				children: "恢复所选"
			}),
			v === "ignored" ? null : /* @__PURE__ */ R(a, {
				variant: "primary",
				size: "small",
				disabled: m || !l.size || !p,
				onClick: () => g("approved"),
				children: "通过所选"
			}),
			/* @__PURE__ */ R(a, {
				variant: "ghost",
				size: "small",
				disabled: m,
				onClick: () => u(/* @__PURE__ */ new Set()),
				children: "取消选择"
			}),
			h ? /* @__PURE__ */ R("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-secondary",
				children: h
			}) : null
		]
	})] });
}
// src/react/boardui/components/base/radio/radio-card.tsx
function W({ className: e, title: t, description: n, ref: r, ...a }) {
	return /* @__PURE__ */ R(i, {
		ref: r,
		...a,
		className: (t) => se("group flex w-full items-center justify-between gap-3 rounded-2lg border border-border-button-default py-3 pe-5 ps-4 select-none", "transition-colors duration-150 ease", t.isHovered && !t.isDisabled ? "bg-background-primary-hover" : "bg-background-primary-default", t.isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", typeof e == "function" ? e(t) : e),
		children: (e) => /* @__PURE__ */ z(L.Fragment, { children: [/* @__PURE__ */ z("span", {
			className: "flex min-w-0 flex-col gap-0.5",
			children: [/* @__PURE__ */ R("span", {
				className: "truncate text-body-medium text-text-primary",
				children: t
			}), n != null && /* @__PURE__ */ R("span", {
				className: "truncate text-body-regular text-text-secondary",
				children: n
			})]
		}), /* @__PURE__ */ R("span", {
			className: "flex shrink-0 items-center py-1",
			children: /* @__PURE__ */ R(T, {
				size: "md",
				selected: e.isSelected,
				focusVisible: e.isFocusVisible
			})
		})] })
	});
}
// node_modules/diff/libesm/diff/base.js
var G = class {
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
}, K = new class extends G {}();
function He(e, t, n) {
	return K.diff(e, t, n);
}
// node_modules/diff/libesm/util/string.js
function Ue(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
	return e.slice(0, n);
}
function q(e, t) {
	let n;
	if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
	for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
	return e.slice(-n);
}
function We(e, t, n) {
	if (e.slice(0, t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);
	return n + e.slice(t.length);
}
function Ge(e, t, n) {
	if (!t) return e + n;
	if (e.slice(-t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);
	return e.slice(0, -t.length) + n;
}
function J(e, t) {
	return We(e, t, "");
}
function Y(e, t) {
	return Ge(e, t, "");
}
function X(e, t) {
	return t.slice(0, Ke(e, t));
}
function Ke(e, t) {
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
function qe(e, t) {
	let n = [];
	for (let r of Array.from(t.segment(e))) {
		let e = r.segment;
		n.length && /\s/.test(n[n.length - 1]) && /\s/.test(e) ? n[n.length - 1] += e : n.push(e);
	}
	return n;
}
function Je(e, t) {
	if (t) return Ye(e, t)[1];
	let n;
	for (n = e.length - 1; n >= 0 && e[n].match(/\s/); n--);
	return e.substring(n + 1);
}
function Z(e, t) {
	if (t) return Ye(e, t)[0];
	let n = e.match(/^\s*/);
	return n ? n[0] : "";
}
function Ye(e, t) {
	if (!t) return [Z(e), Je(e)];
	if (t.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
	let n = qe(e, t), r = n[0], i = n[n.length - 1];
	return [/\s/.test(r) ? r : "", /\s/.test(i) ? i : ""];
}
// node_modules/diff/libesm/diff/word.js
var Q = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", $ = RegExp(`[${Q}]+|\\s+|[^${Q}]`, "ug");
new class extends G {
	equals(e, t, n) {
		return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
	}
	tokenize(e, t = {}) {
		let n;
		if (t.intlSegmenter) {
			let r = t.intlSegmenter;
			if (r.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
			n = qe(e, r);
		} else n = e.match($) || [];
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
			e.added ? r = e : e.removed ? i = e : ((r || i) && Xe(n, i, r, e, t.intlSegmenter), n = e, r = null, i = null);
		}), (r || i) && Xe(n, i, r, null, t.intlSegmenter), e;
	}
}();
function Xe(e, t, n, r, i) {
	if (t && n) {
		let [a, o] = Ye(t.value, i), [s, c] = Ye(n.value, i);
		if (e) {
			let r = Ue(a, s);
			e.value = Ge(e.value, s, r), t.value = J(t.value, r), n.value = J(n.value, r);
		}
		if (r) {
			let e = q(o, c);
			r.value = We(r.value, c, e), t.value = Y(t.value, e), n.value = Y(n.value, e);
		}
	} else if (n) {
		if (e) {
			let e = Z(n.value, i);
			n.value = n.value.substring(e.length);
		}
		if (r) {
			let e = Z(r.value, i);
			r.value = r.value.substring(e.length);
		}
	} else if (e && r) {
		let n = Z(r.value, i), [a, o] = Ye(t.value, i), s = Ue(n, a);
		t.value = J(t.value, s);
		let c = q(J(n, s), o);
		t.value = Y(t.value, c), r.value = We(r.value, n, c), e.value = Ge(e.value, n, n.slice(0, n.length - c.length));
	} else if (r) {
		let e = Z(r.value, i), n = X(Je(t.value, i), e);
		t.value = Y(t.value, n);
	} else if (e) {
		let n = X(Je(e.value, i), Z(t.value, i));
		t.value = J(t.value, n);
	}
}
new class extends G {
	tokenize(e) {
		let t = RegExp(`(\\r?\\n)|[${Q}]+|[^\\S\\n\\r]+|[^${Q}]`, "ug");
		return e.match(t) || [];
	}
}(), new class extends G {
	constructor() {
		super(...arguments), this.tokenize = Ze;
	}
	equals(e, t, n) {
		return n.ignoreWhitespace ? (n.newlineIsToken && e.includes("\n") || (e = e.trim()), n.newlineIsToken && t.includes("\n") || (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith("\n") && (e = e.slice(0, -1)), t.endsWith("\n") && (t = t.slice(0, -1))), super.equals(e, t, n);
	}
}();
function Ze(e, t) {
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
function Qe(e) {
	return e == "." || e == "!" || e == "?";
}
new class extends G {
	tokenize(e) {
		let t = [], n = 0;
		for (let r = 0; r < e.length; r++) {
			if (r == e.length - 1) {
				t.push(e.slice(n));
				break;
			}
			if (Qe(e[r]) && e[r + 1].match(/\s/)) {
				for (t.push(e.slice(n, r + 1)), r = n = r + 1; e[r + 1]?.match(/\s/);) r++;
				t.push(e.slice(n, r + 1)), n = r + 1;
			}
		}
		return t;
	}
}(), new class extends G {
	tokenize(e) {
		return e.split(/([{}:;,]|\s+)/);
	}
}(), new class extends G {
	constructor() {
		super(...arguments), this.tokenize = Ze;
	}
	get useLongestToken() {
		return !0;
	}
	castInput(e, t) {
		let { undefinedReplacement: n, stringifyReplacer: r = (e, t) => t === void 0 ? n : t } = t;
		return typeof e == "string" ? e : JSON.stringify($e(e, null, null, r), null, "  ");
	}
	equals(e, t, n) {
		return super.equals(e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
	}
}();
function $e(e, t, n, r, i) {
	t ||= [], n ||= [], r && (e = r(i === void 0 ? "" : i, e));
	let a = 0;
	for (; a < t.length; a += 1) if (t[a] === e) return n[a];
	let o;
	if (Object.prototype.toString.call(e) === "[object Array]") {
		for (t.push(e), o = Array(e.length), n.push(o), a = 0; a < e.length; a += 1) o[a] = $e(e[a], t, n, r, String(a));
		return t.pop(), n.pop(), o;
	}
	if (e && e.toJSON && (e = e.toJSON()), typeof e == "object" && e) {
		t.push(e), o = {}, n.push(o);
		let i = [], s;
		for (s in e)
 /* istanbul ignore else */
		Object.prototype.hasOwnProperty.call(e, s) && i.push(s);
		for (i.sort(), a = 0; a < i.length; a += 1) s = i[a], o[s] = $e(e[s], t, n, r, s);
		t.pop(), n.pop();
	} else o = e;
	return o;
}
new class extends G {
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
function et({ value: e, reference: t }) {
	let n = (0, U.useMemo)(() => t ? He(t, e).filter((e) => !e.removed) : [{
		value: e,
		added: !1
	}], [e, t]);
	return /* @__PURE__ */ R(L.Fragment, { children: n.map((e, t) => e.added ? /* @__PURE__ */ R("mark", {
		"data-review-difference": "",
		className: "rounded-sm bg-status-yellow-background text-status-yellow-text",
		children: e.value
	}, t) : /* @__PURE__ */ R("span", { children: e.value }, t)) });
}
// src/react/review/candidate-form.tsx
var tt = {
	title: "标题",
	original_title: "原标题",
	runtime: "来源时长",
	director: "导演",
	label: "Label",
	poster_url: "海报",
	cover_url: "封面",
	screenshot_urls: "截图",
	trailer_url: "预告片"
}, nt = "reviewgenretags";
function rt({ tags: e }) {
	return e.length ? /* @__PURE__ */ R("datalist", {
		id: nt,
		children: e.map((e) => /* @__PURE__ */ R("option", { value: e }, e))
	}) : null;
}
function it({ candidate: e, row: t }) {
	let [n, r] = (0, U.useState)(!1), i = (0, U.useId)(), o = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return o.length ? /* @__PURE__ */ z("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ z(a, {
			variant: "secondary",
			size: "small",
			leadingIcon: u,
			"aria-expanded": n,
			"aria-controls": i,
			"aria-label": `${n ? "收起" : "展开"} ${e.source || "该来源"} 的来源依据`,
			onClick: () => r(!n),
			children: [/* @__PURE__ */ R("span", {
				"data-copy-key": "review.card.source_evidence",
				children: "来源依据"
			}), ` · ${o.length}`]
		}), /* @__PURE__ */ R(d, {
			id: i,
			open: n,
			children: /* @__PURE__ */ R("dl", {
				className: "flex min-w-0 flex-col gap-2 px-3 pt-2 pb-1",
				children: o.map(([n, r]) => /* @__PURE__ */ z("div", {
					className: "flex min-w-0 flex-wrap gap-x-2",
					children: [
						/* @__PURE__ */ R("dt", {
							className: "text-caption-1-regular text-text-tertiary",
							children: tt[n] || n
						}),
						/* @__PURE__ */ R("dd", {
							className: "min-w-0 text-body-2-regular break-words text-text-primary",
							children: /* @__PURE__ */ R(et, {
								value: r.display_value || "",
								reference: n === t.field && t.current_value ? t.current_value : t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[n]?.display_value)?.catalog_evidence?.[n]?.display_value
							})
						}),
						(r.warnings || []).map((e) => /* @__PURE__ */ R("small", {
							className: "w-full text-caption-1-regular text-status-yellow-text",
							children: e
						}, e))
					]
				}, n))
			})
		})]
	}) : null;
}
function at(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || "未标注来源"}${e.official ? " · 官方优先" : ""}${t ? ` · ID ${t}` : ""}`;
}
function ot({ candidate: e, reference: t }) {
	return /* @__PURE__ */ z("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ R("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ R(et, {
				value: e.display_value || "",
				reference: t
			})
		}), (e.warnings || []).map((e) => /* @__PURE__ */ R("span", {
			className: "text-body-2-regular text-status-yellow-text",
			children: e
		}, e))]
	});
}
function st({ row: e, fieldName: t, value: n, onChange: r, locked: i }) {
	let a = e.candidates || [];
	return a.length ? a.length === 1 ? /* @__PURE__ */ z("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ z("div", {
			className: "flex min-w-0 flex-col gap-2 rounded-2lg bg-background-primary-default px-4 py-3",
			children: [/* @__PURE__ */ R("p", {
				className: "text-body-medium text-text-primary",
				children: at(a[0])
			}), /* @__PURE__ */ R(ot, {
				candidate: a[0],
				reference: e.current_value || void 0
			})]
		}), /* @__PURE__ */ R(it, {
			candidate: a[0],
			row: e
		})]
	}) : /* @__PURE__ */ R(E, {
		"aria-label": `${t || "资料"}的来源`,
		value: n,
		isDisabled: i,
		onChange: r,
		children: /* @__PURE__ */ R("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: a.map((t) => /* @__PURE__ */ z("div", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ R(W, {
					value: t.candidate_key,
					className: "relative items-start",
					title: /* @__PURE__ */ R("span", {
						title: at(t),
						children: at(t)
					}),
					description: /* @__PURE__ */ R(ot, {
						candidate: t,
						reference: e.current_value || a.find((e) => e.candidate_key !== t.candidate_key)?.display_value
					})
				}), /* @__PURE__ */ R(it, {
					candidate: t,
					row: e
				})]
			}, t.candidate_key))
		})
	}) : null;
}
function ct({ genre: e, tags: t, locked: n, toast: r }) {
	let [i, o] = (0, U.useState)(""), [s, c] = (0, U.useState)(""), l = Pe({
		mutationFn: (t) => xe(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (r(n ? `已把「${e}」收录为标签「${n}」` : `已把「${e}」判为非内容标签`), await Se()) : c(t.error || "服务端拒绝了这次收录");
		},
		onError: (e) => c(de(e))
	}), u = () => {
		let e = i.trim();
		e ? (c(""), l.mutate(e)) : c("先给它一个中文标签");
	};
	return /* @__PURE__ */ z("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ R("b", {
				lang: "ja",
				className: "text-body-medium text-text-primary",
				children: e
			}),
			/* @__PURE__ */ R(j, {
				"aria-label": `「${e}」收录成的中文标签`,
				value: i,
				onChange: o,
				maxLength: 40,
				isDisabled: n || l.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ R(y, {
					size: "small",
					list: t.length ? nt : void 0,
					autoComplete: "off",
					placeholder: "中文标签",
					onKeyDown: (e) => {
						e.key !== "Enter" || e.nativeEvent.isComposing || (e.preventDefault(), u());
					}
				})
			}),
			/* @__PURE__ */ R(a, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: u,
				children: "收录"
			}),
			/* @__PURE__ */ R(a, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: () => {
					c(""), l.mutate("");
				},
				children: "不是内容"
			}),
			s ? /* @__PURE__ */ R("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function lt({ row: e, tags: t, locked: n, toast: r }) {
	let i = be(e);
	return i.length ? /* @__PURE__ */ z("div", {
		role: "group",
		"aria-label": "未收录 genre",
		className: "flex flex-col gap-2 border-t border-separator-border pt-4",
		children: [/* @__PURE__ */ R("h5", {
			className: "text-body-2-medium text-text-secondary",
			children: `未收录 genre · ${i.length}`
		}), /* @__PURE__ */ R("div", {
			role: "list",
			className: "flex flex-col",
			children: i.map((e, i) => /* @__PURE__ */ R("div", {
				role: "listitem",
				className: `py-3 first:pt-0 last:pb-0 ${i ? "border-t border-separator-border" : ""}`,
				children: /* @__PURE__ */ R(ct, {
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
var ut = (e = "") => /^https?:\/\//i.test(e) ? e : "", dt = (e = "") => ut(e) || (e.startsWith("/") && !e.startsWith("//") ? e : "");
function ft({ url: e }) {
	let t = dt(e || "");
	return /* @__PURE__ */ R(pt, { source: t }, t);
}
function pt({ source: e }) {
	let [t, n] = (0, U.useState)("idle");
	return (0, U.useEffect)(() => {
		if (t !== "loading") return;
		let e = setTimeout(() => n("failed"), 3e4);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ z("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [t === "loading" ? /* @__PURE__ */ z("span", {
			role: "status",
			className: "absolute flex items-center gap-2 text-body-2-regular text-text-secondary",
			children: [/* @__PURE__ */ R("span", { dangerouslySetInnerHTML: { __html: H("正在加载图片") } }), "正在加载图片"]
		}) : null, e && (t === "loading" || t === "ready") ? /* @__PURE__ */ R("img", {
			src: e,
			alt: "来源提供的备选图片",
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${t === "loading" ? "invisible" : ""}`,
			onLoad: () => n("ready"),
			onError: () => n("failed")
		}) : e ? /* @__PURE__ */ z("div", {
			className: "flex flex-col items-center gap-2",
			children: [t === "failed" ? /* @__PURE__ */ R("span", {
				className: "text-body-2-regular text-text-secondary",
				children: "未取得来源图片"
			}) : null, /* @__PURE__ */ R(a, {
				variant: "secondary",
				size: "small",
				"aria-label": t === "failed" ? "立即重试加载来源图片" : void 0,
				onClick: () => n("loading"),
				children: t === "failed" ? "立即重试" : "查看来源图片"
			})]
		}) : /* @__PURE__ */ R("span", {
			className: "text-body-2-regular text-text-secondary",
			children: "未取得来源图片"
		})]
	});
}
function mt({ asset: e, openItem: t }) {
	let n = e.name || "";
	return /* @__PURE__ */ z("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ z("button", {
			type: "button",
			onClick: () => t(e.id),
			className: "flex aspect-card-cover w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
			children: [e.preview_url ? /* @__PURE__ */ R("img", {
				src: e.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ R("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: "无封面"
			}), /* @__PURE__ */ R(r, { children: `打开原视频 ${n}` })]
		}), /* @__PURE__ */ z("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ R("b", {
				title: n,
				className: "w-full truncate text-body-medium text-text-primary",
				children: e.code || n || "原视频"
			}), /* @__PURE__ */ R(a, {
				variant: "secondary",
				size: "small",
				leadingIcon: v,
				onClick: () => t(e.id),
				children: "打开原视频"
			})]
		})]
	});
}
function ht({ kind: e, name: t, works: n, avatar: r, openEntity: i }) {
	return /* @__PURE__ */ z("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ R("button", {
			type: "button",
			"aria-label": `打开创作者页：${t}`,
			onClick: () => i(e, t),
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-background-secondary-default text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${ze}`,
			dangerouslySetInnerHTML: { __html: r }
		}), /* @__PURE__ */ z("div", {
			className: "flex min-w-0 flex-col items-start",
			children: [/* @__PURE__ */ R("button", {
				type: "button",
				onClick: () => i(e, t),
				className: "max-w-full cursor-pointer truncate text-body-medium text-text-primary underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: t
			}), n ? /* @__PURE__ */ R("small", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: `${n.toLocaleString()} 部作品`
			}) : null]
		})]
	});
}
function gt({ row: e, openItem: t, openEntity: n, onReveal: r, revealing: i, note: s }) {
	let c = ut(e.profile_url || ""), l = (e.preview_assets || []).slice(0, 6), u = Math.max(0, Number(e.video_count || e.videos || 0));
	return /* @__PURE__ */ z("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ R("h5", {
				className: "text-body-medium text-text-primary",
				children: `待确认人物：${e.babepedia_name || "未标注"}`
			}),
			/* @__PURE__ */ z("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ R(o, {
					variant: "secondary",
					size: "small",
					trailingIcon: M,
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					children: "来源资料"
				}) : null, /* @__PURE__ */ R(a, {
					variant: "secondary",
					size: "small",
					onClick: () => n("creator", e.creator || ""),
					children: `查看全部 ${u.toLocaleString()} 部作品`
				})]
			}),
			/* @__PURE__ */ R(ft, { url: e.preview_url }),
			/* @__PURE__ */ R("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "通过后记录身份判断。"
			}),
			l.length ? /* @__PURE__ */ z(L.Fragment, { children: [/* @__PURE__ */ R("h5", {
				className: "text-body-medium text-text-primary",
				children: "本地作品样本"
			}), /* @__PURE__ */ R("ul", {
				className: "flex flex-col gap-1",
				children: l.map((e) => /* @__PURE__ */ z("li", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ R(a, {
						variant: "ghost",
						size: "small",
						className: "min-w-0",
						onClick: () => t(e.id),
						children: /* @__PURE__ */ R("span", {
							title: e.name,
							className: "block max-w-full truncate",
							children: e.name
						})
					}), /* @__PURE__ */ R(a, {
						variant: "ghost",
						size: "small",
						"aria-label": `打开 ${e.name} 的文件位置`,
						...P(i === e.id),
						onClick: () => r(e.id),
						children: "文件位置"
					})]
				}, e.id))
			})] }) : /* @__PURE__ */ R("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "暂无本地作品样本，打开全部作品核对。"
			}),
			s ? /* @__PURE__ */ R("p", {
				role: "status",
				className: "text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function _t({ assets: e, picked: t, onPicked: n, locked: i }) {
	let [a, o] = (0, U.useState)(null), s = new Set(t), l = (t, r) => {
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
	return /* @__PURE__ */ z("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ R(k, {
			prefix: /* @__PURE__ */ R("span", {
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
		}), /* @__PURE__ */ R("div", {
			className: "review-asset-grid gap-1.5",
			children: e.map((e, t) => {
				let n = s.has(e.id);
				return /* @__PURE__ */ z("button", {
					type: "button",
					"aria-pressed": n,
					title: e.name,
					onClick: (e) => l(t, e.shiftKey),
					className: `relative aspect-card-cover cursor-pointer overflow-hidden rounded-surface bg-background-tertiary-default outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-border-focus-ring ${n ? "opacity-100 ring-2 ring-border-button-active ring-inset" : "opacity-50"}`,
					children: [
						/* @__PURE__ */ R("img", {
							src: `/poster?id=${e.id}&c=4`,
							alt: "",
							loading: "lazy",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ R("span", {
							className: "absolute top-1 right-1",
							children: /* @__PURE__ */ R(c, {
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
						/* @__PURE__ */ R(r, { children: `${n ? "已选" : "未选"} ${e.name || e.id}` })
					]
				}, e.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var vt = F({
	variant: "filled",
	padding: "none",
	bordered: "soft",
	className: "flex flex-col overflow-hidden"
}), yt = "flex min-h-6 min-w-0 items-center", bt = 2, xt = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function St(e) {
	let { category: t, row: n, choice: r, onChoice: i, selected: o, onSelect: c, locked: u, busy: d, problem: f, genreTags: ee, onDecide: _, handlers: v, queueView: y = "pending" } = e, b = (0, U.useRef)(!1), x = Fe(), S = t === "metadata_fields", C = p[t] || "", re = String(n.creator || "").trim(), w = !!C && !!re, T = V(t, n), E = Oe(t, n), D = ke(t, n), O = B(n), k = Ae(n), A = ae(t, n), j = n.comparison_assets || [], M = n.preview_assets || [], N = ne[n.decision || ""], F = j.length > 1 ? /* @__PURE__ */ z("div", {
		className: "flex flex-col gap-3",
		children: [j.slice(0, bt).map((e) => /* @__PURE__ */ R(mt, {
			asset: e,
			openItem: v.openItem
		}, e.id)), j.length > bt ? /* @__PURE__ */ R("p", {
			className: "text-body-2-regular text-text-secondary",
			children: `另有 ${(j.length - bt).toLocaleString()} 部对照作品`
		}) : null]
	}) : w ? /* @__PURE__ */ R(ht, {
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
	}) : n.asset_id ? /* @__PURE__ */ R(mt, {
		openItem: v.openItem,
		asset: {
			id: n.asset_id,
			name: n.asset_name,
			code: n.code,
			preview_url: n.asset_preview_url
		}
	}) : null, I = S ? /* @__PURE__ */ R(st, {
		row: n,
		fieldName: E,
		value: r.candidateKey,
		onChange: (e) => i({
			...r,
			candidateKey: e
		}),
		locked: u
	}) : t === "creator_tags" ? M.length ? /* @__PURE__ */ R(_t, {
		assets: M,
		picked: r.assets,
		locked: u,
		onPicked: (e) => i({
			...r,
			assets: e
		})
	}) : /* @__PURE__ */ R(h, {
		size: "compact",
		icon: m,
		title: "这批作品尚未抽帧",
		children: `${n.video_count || ""} 条作品还没有可用预览；批准后仍会按所选资料写入标签。`
	}) : t === "fc2_similarity" ? null : t === "western_identity" ? /* @__PURE__ */ R(gt, {
		row: n,
		openItem: v.openItem,
		openEntity: v.openEntity,
		onReveal: v.onReveal,
		revealing: v.revealing,
		note: v.revealNote
	}) : /* @__PURE__ */ R(ft, { url: n.preview_url }), oe = w ? F : E ? /* @__PURE__ */ z("h4", {
		className: se(yt, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ R("span", {
			title: E,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ R(l, {
				variant: "caption",
				color: "neutral",
				children: E
			})
		}), /* @__PURE__ */ R("span", {
			title: D,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: D
		})]
	}) : /* @__PURE__ */ R("h4", {
		className: yt,
		children: /* @__PURE__ */ R("span", {
			title: T,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: T
		})
	});
	return /* @__PURE__ */ z("section", {
		"aria-label": T,
		"data-review-key": n.item_key,
		className: se(vt, xt(t)),
		children: [
			/* @__PURE__ */ z("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					u ? null : /* @__PURE__ */ R("span", {
						className: se(yt, "shrink-0"),
						onPointerDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						children: /* @__PURE__ */ R(s, {
							isSelected: o,
							"aria-label": `选择 ${T}`,
							onChange: (e) => c(b.current, e)
						})
					}),
					/* @__PURE__ */ R("div", {
						className: "min-w-0 flex-1",
						children: oe
					}),
					N ? /* @__PURE__ */ R(l, {
						variant: "caption",
						color: "neutral",
						children: N
					}) : null
				]
			}),
			/* @__PURE__ */ R("div", {
				className: "relative mx-5 flex min-w-0 min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ z("div", {
					ref: x,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						n.source_name ? /* @__PURE__ */ R("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `来源写法：${n.source_name}`
						}) : null,
						!w && (n.board || n.assets) ? /* @__PURE__ */ R("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `对照文件：${Number(n.video_count || n.assets || 0).toLocaleString()}`
						}) : null,
						!w && F ? F : null,
						S && (O || n.current_value !== void 0) ? /* @__PURE__ */ z("div", {
							role: "region",
							"aria-label": "当前信息",
							className: "flex min-w-0 flex-col gap-1 border-b border-separator-border pb-4",
							children: [
								/* @__PURE__ */ z("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ R("h5", {
										"data-copy-key": "review.card.current_value",
										className: "text-caption-1-medium text-text-secondary",
										children: "当前值"
									}), n.current_owner?.startsWith("user:") || n.current_owner?.startsWith("review:") ? /* @__PURE__ */ R(l, {
										variant: "caption",
										color: "neutral",
										children: "人工确认"
									}) : null]
								}),
								/* @__PURE__ */ R("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: n.current_value === void 0 ? O : n.current_value ? /* @__PURE__ */ R(et, {
										value: n.current_value,
										reference: (n.candidates?.find((e) => e.candidate_key === r.candidateKey) || n.candidates?.[0])?.display_value
									}) : "尚无资料"
								}),
								n.videos === void 0 ? null : /* @__PURE__ */ R("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: `${Number(n.videos).toLocaleString()} 个${n.asset_path ? "匹配文件" : "同番号文件"}`
								})
							]
						}) : null,
						k.length || t === "creator_tags" ? /* @__PURE__ */ R("div", {
							className: "flex flex-wrap gap-1",
							children: k.length ? k.map((e) => /* @__PURE__ */ R(l, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ R("small", {
								className: "text-body-2-regular text-text-secondary",
								children: "暂无待确认标签"
							})
						}) : null,
						S ? /* @__PURE__ */ z("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ z("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ R("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: "候选来源"
								}), ` · ${n.candidates?.length || 0}`]
							}), n.current_value || (n.candidates?.length || 0) > 1 ? /* @__PURE__ */ R("span", {
								"data-copy-key": n.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: n.current_value ? "与当前值比较" : "来源间差异"
							}) : null]
						}) : null,
						I,
						/* @__PURE__ */ R(lt, {
							row: n,
							tags: ee,
							locked: u,
							toast: v.toast
						}),
						!S && O ? /* @__PURE__ */ R("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: O
						}) : null
					]
				})
			}),
			/* @__PURE__ */ z("footer", {
				className: se(g.stack, "shrink-0"),
				children: [
					y === "ignored" ? null : /* @__PURE__ */ R(te, {
						variant: "secondary",
						size: "small",
						className: "me-auto",
						disabled: u,
						...P(d),
						onClick: () => _("rejected"),
						children: "忽略"
					}),
					y === "pending" ? /* @__PURE__ */ R(a, {
						variant: "secondary",
						size: "small",
						disabled: u,
						...P(d),
						onClick: () => _("skipped"),
						children: "稍后处理"
					}) : /* @__PURE__ */ R(a, {
						variant: y === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: u,
						...P(d),
						onClick: () => _("restore"),
						children: "恢复待处理"
					}),
					y === "ignored" ? null : /* @__PURE__ */ R(a, {
						variant: "primary",
						size: "small",
						disabled: u || !A,
						...P(d),
						title: A ? void 0 : "没有可采用的资料，可先保留或忽略",
						onClick: () => _("approved"),
						children: A ? "通过" : "不可通过"
					}),
					f ? /* @__PURE__ */ R("p", {
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
var Ct = "flex cursor-pointer items-center justify-between gap-2";
function wt({ page: e, pages: t, onPage: n }) {
	return t <= 1 ? null : /* @__PURE__ */ z("nav", {
		"aria-label": "复核分页",
		"data-pagination-layout": "",
		className: "inline-grid w-full min-w-0 items-center gap-2",
		children: [
			/* @__PURE__ */ R(a, {
				variant: "secondary",
				size: "small",
				disabled: e <= 1,
				onClick: () => n(e - 1),
				children: "上一页"
			}),
			/* @__PURE__ */ R("ul", {
				className: "flex min-w-0 flex-wrap items-center justify-center gap-1",
				children: ye(e, t).map((t, r) => /* @__PURE__ */ R("li", { children: t === "…" ? /* @__PURE__ */ R("span", {
					"aria-hidden": !0,
					className: "px-1 text-body-2-regular text-text-tertiary",
					children: "…"
				}) : /* @__PURE__ */ R(a, {
					variant: t === e ? "secondary" : "ghost",
					size: "small",
					"aria-label": `第 ${t} 页`,
					"aria-current": t === e ? "page" : void 0,
					onClick: () => n(Number(t)),
					children: t
				}) }, t === "…" ? `dots-${r}` : t))
			}),
			/* @__PURE__ */ R(a, {
				variant: "secondary",
				size: "small",
				disabled: e >= t,
				onClick: () => n(e + 1),
				children: "下一页"
			})
		]
	});
}
function Tt(r) {
	let [i, o] = (0, U.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, U.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => o(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: s, openItem: c, openEntity: l, revealSource: u, toast: d, readOnly: p, readOnlyMessage: m, writerUrl: g } = r, [_, v] = (0, U.useState)(he(r.category) ? r.category : f), [y, te] = (0, U.useState)(() => Ee(r.queue)), [ne, T] = (0, U.useState)("candidates"), [E, D] = (0, U.useState)(""), [O, k] = (0, U.useState)(""), [A, j] = (0, U.useState)(1), [M, N] = (0, U.useState)(/* @__PURE__ */ new Set()), [ie, P] = (0, U.useState)(/* @__PURE__ */ new Map()), [F, I] = (0, U.useState)(/* @__PURE__ */ new Map()), [se, L] = (0, U.useState)(""), ge = (0, U.useRef)(null), [ye, be] = (0, U.useState)(0), [xe, Se] = (0, U.useState)(""), Ce = (0, U.useRef)(!0);
	(0, U.useEffect)(() => () => {
		Ce.current = !1;
	}, []);
	let B = Ie({
		queryKey: S,
		queryFn: ({ signal: e }) => fe(e)
	}), Oe = B.data || {
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
	}, ke = Te(Oe, y), Ae = B.data ? Object.fromEntries(re.map((e) => [e, x.reduce((t, n) => t + Number(Te(Oe, e).counts[n] || 0), 0)])) : void 0, V = ke.sections[_] || [], H = _ === "metadata_fields", Fe = p;
	(0, U.useEffect)(() => {
		let e = new Set(V.map((e) => e.item_key));
		N((t) => {
			let n = [...t].filter((t) => e.has(t));
			return n.length === t.size ? t : new Set(n);
		}), P((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		}), I((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		});
	}, [V]);
	let Le = (0, U.useMemo)(() => H ? me(V, "field") : [], [V, H]), ze = Le.some((e) => e.key === O) ? O : "", W = (0, U.useMemo)(() => H ? pe(V, "field", ze) : V, [
		V,
		H,
		ze
	]), G = (0, U.useMemo)(() => we(W, H), [W, H]), K = G.some(([e]) => e === ne) ? ne : "candidates", He = (0, U.useMemo)(() => me(W, K), [W, K]), Ue = He.some((e) => e.key === E) ? E : "", q = (0, U.useMemo)(() => De(pe(W, K, Ue), A), [
		W,
		K,
		Ue,
		A
	]), We = q.rows.map((e) => e.item_key), Ge = new Set(We), J = He.map((e) => ({
		...e,
		rows: e.rows.filter((e) => Ge.has(e.item_key))
	})).filter((e) => e.rows.length), Y = (e) => ie.get(e.item_key) || ue(e), X = (0, U.useMemo)(() => V.filter((e) => M.has(e.item_key)), [V, M]), Ke = (e) => {
		let t = new Set(e);
		N((e) => new Set([...e].filter((e) => !t.has(e)))), P((e) => new Map([...e].filter(([e]) => !t.has(e)))), I((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, qe = (e, t) => I((n) => new Map(n).set(e, t)), Je = () => {
		T("candidates"), D(""), k(""), j(1), N(/* @__PURE__ */ new Set()), P(/* @__PURE__ */ new Map()), I(/* @__PURE__ */ new Map()), L(""), ge.current = null;
	}, Z = (e) => {
		v(e), Je(), s({
			category: e === "metadata_fields" ? "" : e,
			queue: y === "pending" ? "" : y
		});
	}, Ye = (e) => {
		te(e), Je(), s({
			category: _ === "metadata_fields" ? "" : _,
			queue: e === "pending" ? "" : e
		});
	}, Q = Pe({
		mutationFn: ({ row: e, status: t, category: n }) => Ne(ce(n, oe(n, e), t, Y(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			e.ok ? (Me(r, [t.item_key], n), Ke([t.item_key]), d(le(n))) : qe(t.item_key, e.error || "服务端拒绝了这次判定");
		},
		onError: (e, { row: t }) => qe(t.item_key, de(e))
	}), $ = Pe({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!Ce.current) break;
				L(`正在处理 ${a} / ${n.length}`);
				try {
					let n = await Ne(ce(t, oe(t, o), e, Y(o)));
					if (!n.ok) throw Error(n.error || "服务端未采用该项");
					r.push(o.item_key);
				} catch (e) {
					i.push([o.item_key, de(e)]);
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
			Me(t, n, e), Ke(n), r.forEach(([e, t]) => qe(e, t)), L("");
			let i = {
				approved: "通过",
				rejected: "忽略",
				skipped: "移至稍后处理",
				restore: "恢复待处理"
			}[e];
			d(`已${i} ${n.length} 项` + (r.length ? `，${r.length} 项未完成` : ""));
		},
		onError: (e) => {
			L(de(e));
		}
	}), Xe = (e) => {
		!$.isPending && X.length && (e === "approved" && H && X.some((e) => !Y(e).candidateKey) ? L("请先为所选资料选择要采用的来源。") : (L(""), $.mutate({
			status: e,
			category: _,
			rows: X
		})));
	}, Ze = (e) => {
		P((t) => {
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
	}, Qe = async (e) => {
		if (ye) return;
		be(e), Se("");
		let t = await u(e);
		Ce.current && (be(0), Se(t));
	}, $e = ve(Oe.mirror, m), et = Oe.genre_tags || [], tt = {
		openItem: c,
		openEntity: l,
		onReveal: Qe,
		revealing: ye,
		revealNote: xe,
		toast: d
	};
	return /* @__PURE__ */ R(Re, { children: /* @__PURE__ */ z("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			Fe ? /* @__PURE__ */ R(b, {
				tone: "warning",
				title: "本机只能浏览",
				extra: g ? /* @__PURE__ */ R("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ R(ee, {
						href: g,
						children: "前往写入端复核"
					})
				}) : void 0,
				children: $e
			}) : null,
			/* @__PURE__ */ R(rt, { tags: et }),
			/* @__PURE__ */ z(n, {
				orientation: i ? "horizontal" : "vertical",
				selectedKey: _,
				onSelectionChange: (e) => {
					let t = String(e);
					he(t) && Z(t);
				},
				className: "flex flex-col gap-5 review-split:flex-row review-split:items-start review-split:gap-6",
				children: [/* @__PURE__ */ z("div", {
					"data-section-nav": !0,
					className: "w-full min-w-0 review-split:sticky review-split:top-topbar review-split:w-review-tabs review-split:shrink-0",
					children: [/* @__PURE__ */ R("h2", {
						id: "reviewcategories",
						children: "复核分类"
					}), /* @__PURE__ */ R(Be, {
						scrollable: i,
						"aria-labelledby": "reviewcategories",
						"data-section-items": !0,
						className: "flex review-split:flex-col review-split:items-stretch",
						children: x.map((e) => {
							let n = Number(ke.counts[e] || 0);
							return /* @__PURE__ */ z(t, {
								id: e,
								className: Ct,
								isDisabled: Q.isPending || $.isPending,
								"data-pill-selected": _ === e ? "" : void 0,
								"data-pill-variant": "gray",
								children: [C[e], n ? /* @__PURE__ */ R("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: n.toLocaleString()
								}) : null]
							}, e);
						})
					})]
				}), /* @__PURE__ */ z(e, {
					id: _,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ R(Ve, {
							queueView: y,
							queueCounts: Ae,
							onQueueChange: Ye,
							locked: Fe,
							fields: Le,
							fieldFilter: ze,
							onFieldFilter: (e) => {
								k(e), D(""), j(1);
							},
							groupOptions: G,
							groupBy: K,
							onGroupBy: (e) => {
								T(e), D(""), j(1);
							},
							groups: He,
							filter: Ue,
							onFilter: (e) => {
								D(e), j(1);
							},
							pageKeys: We,
							selected: M,
							onSelected: N,
							selectedRows: X,
							metadata: H,
							approvable: X.every((e) => ae(_, e)),
							busy: $.isPending || Q.isPending,
							feedback: se,
							onUnifySource: Ze,
							onRun: Xe
						}),
						q.rows.length ? J.map((e) => /* @__PURE__ */ z("section", {
							className: "flex flex-col gap-3",
							children: [J.length > 1 || K !== "candidates" ? /* @__PURE__ */ z("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ R("h3", {
									className: "text-body-medium text-text-primary",
									children: `${e.title} · ${e.rows.length}`
								}), Fe ? null : /* @__PURE__ */ R(a, {
									variant: "ghost",
									size: "small",
									onClick: () => {
										let t = e.rows.map((e) => e.item_key), n = t.every((e) => M.has(e)), r = new Set(M);
										for (let e of t) n ? r.delete(e) : r.add(e);
										N(r);
									},
									children: e.rows.every((e) => M.has(e.item_key)) ? "清空本组" : "全选本组"
								})]
							}) : null, /* @__PURE__ */ R("div", {
								className: "review-grid gap-5",
								children: e.rows.map((e) => /* @__PURE__ */ R(St, {
									category: _,
									row: e,
									queueView: y,
									choice: Y(e),
									onChoice: (t) => P((n) => new Map(n).set(e.item_key, t)),
									selected: M.has(e.item_key),
									onSelect: (t, n) => N((r) => {
										let i = new Set(r);
										return ge.current = je(i, We, ge.current, e.item_key, t, n), i;
									}),
									locked: Fe,
									busy: $.isPending || Q.isPending && Q.variables?.row.item_key === e.item_key,
									problem: F.get(e.item_key) || "",
									genreTags: et,
									onDecide: (t) => {
										Q.isPending || $.isPending || (I((t) => new Map([...t].filter(([t]) => t !== e.item_key))), Q.mutate({
											row: e,
											status: t,
											category: _
										}));
									},
									handlers: tt
								}, e.item_key))
							})]
						}, e.key)) : B.isError && !B.data ? /* @__PURE__ */ R(b, {
							tone: "error",
							title: "复核队列读取失败",
							action: /* @__PURE__ */ R(a, {
								variant: "secondary",
								size: "small",
								disabled: B.isFetching,
								onClick: () => void B.refetch(),
								children: "立即重试"
							}),
							children: de(B.error)
						}) : /* @__PURE__ */ R(h, {
							icon: _e,
							title: `此分类没有${w[y]}项目`,
							actions: x.some((e) => e !== _ && Number(ke.counts[e] || 0) > 0) ? /* @__PURE__ */ R(a, {
								size: "small",
								onClick: () => {
									let e = x.find((e) => e !== _ && Number(ke.counts[e] || 0) > 0);
									e && Z(e);
								},
								children: "查看其他分类"
							}) : void 0,
							children: y === "pending" ? "可切换分类查看其他待确认资料。" : `${w[y]}的资料会保留在这里，可恢复到待处理。`
						}),
						/* @__PURE__ */ R(wt, {
							page: q.page,
							pages: q.pages,
							onPage: j
						})
					]
				})]
			})
		]
	}) });
}
export { Tt as ReviewPage };

//# debugId=bad4198e-1cdd-4835-8da4-504f016334c8