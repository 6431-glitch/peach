(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9062bf41-21dd-4f53-b6a5-46f3f08d0837", e._sentryDebugIdIdentifier = "sentry-dbid-9062bf41-21dd-4f53-b6a5-46f3f08d0837");
	} catch {}
})();
import { $542a13ca2fa5b484$export$5b6b19405a83ff9d as e, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as t, $b4f18e3395fe64d7$export$3e41faf802a29e71 as n, $b4f18e3395fe64d7$export$b2539bed5023c21c as r, Button as i, ButtonLink as a, Disclosure as o, E3 as s, EmptyState as c, FLOW_LABEL_X as l, FLOW_VIEWBOX as u, Gg as d, IDLE_POLL_MS as f, Input as p, M6 as m, MENU_ITEM as h, MENU_ITEM_INTERACTIVE as g, MENU_POPOVER_SURFACE as _, MenuDialog as v, Note as y, OV as b, Progress as x, Rf as S, SEGMENT as ee, SEGMENTED_TRACK as te, STAT_STRIP as ne, SegmentedTabList as re, Select$1 as ie, SelectItem as ae, StatCard as C, TASTE_REFRESH_KEY as oe, TASTE_WINDOWS as se, TaskProgress as ce, Wt as w, Xt as le, _8 as T, __toESM as ue, aB as de, avatarInner as fe, busyProps as E, cB as pe, cardClass as D, clsx as O, configureTasteBrowser as k, confirmModal as A, cx as me, errorMessage as j, f1 as M, fetchTaste as he, fetchTasteJob as ge, firstGrapheme as _e, flowGraph as ve, flowLabel as ye, fmtSize as be, g4 as xe, historySpan as Se, importTasteExport as Ce, import_jsx_runtime as N, jsx as P, jsxs as F, keepPreviousData as we, mM as Te, pv as I, queryClient as L, r2 as Ee, radarRows as De, rankDetail as Oe, rankShares as ke, removeTasteSource as Ae, require_react as je, siteMarkUrl as Me, startTasteRefresh as Ne, statCardClass as Pe, tasteDate as Fe, tasteDimensions as Ie, tasteHours as Le, tasteKey as R, tasteRefetchInterval as Re, tasteTime as ze, topScores as Be, uo as Ve, useBackgroundJob as He, useMutation as Ue, useQuery as We } from "./peach-app.js";
import { ActivityHeat as Ge, BAR_DOMAIN as Ke, ExpandableRanking as qe, PolarAngleAxis as Je, Polygon as Ye, barLabel as Xe, selectPolarAxisScale as Ze, selectPolarAxisTicks as z } from "./peach-app.expandable-ranking-CvP4aPgI.js";
import { LEGACY_AVATAR_IMG as Qe } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { Page as $e } from "./peach-app.page-CW3QRN2N.js";
import { ActivePoints as et, AnimatedItems as tt, CHART_CARD as nt, CHART_COLORS as rt, CartesianLabelListContextProvider as it, CategoryTick as at, ChartBackground as ot, ChartContainer as st, ChartHead as ct, ChartLegend as lt, ChartLegendContent as ut, ChartTip as dt, ChartTooltip as ft, ChartTooltipContent as pt, DefaultZIndexes as mt, Dots as ht, EvilBarChart as gt, LabelListFromLabelProp as _t, Layer as B, LoadingIndicator as vt, PolarChart as yt, PolarLabelContextProvider as bt, PolarLabelFromLabelProp as xt, RegisterGraphicalItemId as St, SetPolarGraphicalItem as Ct, SetPolarLegendPayload as wt, SetTooltipEntrySettings as Tt, Text as Et, ZIndexLayer as Dt, adaptEventsOfChild as Ot, addRadiusAxis as kt, arrayTooltipSearcher as At, categoryAxisWidth as jt, cn as Mt, createSelector as V, defaultPolarChartProps as Nt, defaultPolarRadiusAxisProps as Pt, fitLabel as Ft, getAxisTypeBasedOnLayout as It, getBandSizeOfAxis as Lt, getClassNameFromUnknown as Rt, getColorsCount as zt, getTooltipNameProp as Bt, getValueByDataKey as Vt, identity as Ht, interpolate as Ut, isArrayLike as Wt, isCategoricalAxis as Gt, isNullish as Kt, iteratee as qt, matchAnimationItems as Jt, matchByIndex as Yt, noop as Xt, polarToCartesian as H, removeRadiusAxis as Zt, resolveDefaultProps as Qt, selectAngleAxis as $t, selectChartDataAndAlwaysIgnoreIndexes as en, selectChartLayout as tn, selectPolarViewBox as nn, selectRadiusAxis as rn, selectUnfilteredPolarItems as an, svgPropertiesAndEvents as on, svgPropertiesNoEvents as U, svgPropertiesNoEventsFromUnknown as sn, tone as cn, useAnimationCallbacks as ln, useAnimationStartSnapshot as un, useAppDispatch as dn, useAppSelector as W, useIsPanorama as fn, usePolarChartLayout as pn } from "./peach-app.chart-tip-BGeaXdeB.js";
import { BrowserIcon as mn } from "./peach-app.browser-icon-0SscXvQB.js";
var hn = V([(e, t) => z(e, "angleAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), gn = V([(e, t) => z(e, "radiusAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), G = /* @__PURE__ */ ue(je()), _n = [
	"gridType",
	"radialLines",
	"angleAxisId",
	"radiusAxisId",
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"polarAngles",
	"polarRadius",
	"zIndex"
];
function vn(e, t) {
	if (e == null) return {};
	var n, r, i = yn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function yn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function bn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function xn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? bn(Object(n), !0).forEach(function(t) {
			Sn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Sn(e, t, n) {
	return (t = Cn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Cn(e) {
	var t = wn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function wn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Tn = (e, t, n, r) => {
	var i = "";
	return r.forEach((r, a) => {
		var o = H(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, En = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = xn({}, U(e));
	return /*#__PURE__*/ G.createElement("g", { className: "recharts-polar-grid-angle" }, a.map((e) => {
		var a = H(t, n, r, e), o = H(t, n, i, e);
		return /*#__PURE__*/ G.createElement("line", K({ key: `line-${e}` }, s, {
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, Dn = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = xn({}, U(e));
	return /*#__PURE__*/ G.createElement("circle", K({}, i, {
		className: O("recharts-polar-grid-concentric-circle", e.className),
		cx: t,
		cy: n,
		r
	}));
}, On = (e) => {
	var t = e.radius, n = xn({}, U(e));
	return /*#__PURE__*/ G.createElement("path", K({}, n, {
		className: O("recharts-polar-grid-concentric-polygon", e.className),
		d: Tn(t, e.cx, e.cy, e.polarAngles)
	}));
}, kn = (e) => {
	var t = e.polarRadius, n = e.gridType;
	if (!t || !t.length) return null;
	var r = Math.max(...t), i = e.fill && e.fill !== "none";
	return /*#__PURE__*/ G.createElement("g", { className: "recharts-polar-grid-concentric" }, i && n === "circle" && /*#__PURE__*/ G.createElement(Dn, K({}, e, { radius: r })), i && n !== "circle" && /*#__PURE__*/ G.createElement(On, K({}, e, { radius: r })), t.map((t, r) => {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ G.createElement(Dn, K({ key: i }, e, {
			fill: "none",
			radius: t
		})) : /*#__PURE__*/ G.createElement(On, K({ key: i }, e, {
			fill: "none",
			radius: t
		}));
	}));
}, An = {
	angleAxisId: 0,
	radiusAxisId: 0,
	gridType: "polygon",
	radialLines: !0,
	zIndex: mt.grid,
	stroke: "#ccc",
	strokeWidth: 1,
	fill: "none"
}, jn = (e) => {
	var t = Qt(e, An), n = t.gridType, r = t.radialLines, i = t.angleAxisId, a = t.radiusAxisId, o = t.cx, s = t.cy, c = t.innerRadius, l = t.outerRadius, u = t.polarAngles, d = t.polarRadius, f = t.zIndex, p = vn(t, _n), m = W(nn), h = W((e) => hn(e, i)), g = W((e) => gn(e, a)), _ = Array.isArray(u) ? u : h, v = Array.isArray(d) ? d : g;
	if (_ == null || v == null) return null;
	var y = xn({
		cx: m?.cx ?? o ?? 0,
		cy: m?.cy ?? s ?? 0,
		innerRadius: m?.innerRadius ?? c ?? 0,
		outerRadius: m?.outerRadius ?? l ?? 0,
		polarAngles: _,
		polarRadius: v,
		zIndex: f
	}, p);
	return y.outerRadius <= 0 ? null : /*#__PURE__*/ G.createElement(Dt, { zIndex: y.zIndex }, /*#__PURE__*/ G.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ G.createElement(kn, K({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	})), /*#__PURE__*/ G.createElement(En, K({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	}))));
};
jn.displayName = "PolarGrid";
// node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function Mn(e) {
	return Array.isArray(e) ? e : Array.from(e);
}
// node_modules/es-toolkit/dist/compat/math/maxBy.mjs
function Nn(e, t = Ht) {
	if (e == null) return;
	let n = Mn(e);
	if (n.length === 0) return;
	let r = qt(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o > a) && (a = o, i = t);
	}
	return i;
}
// node_modules/es-toolkit/dist/compat/math/minBy.mjs
function Pn(e, t = Ht) {
	if (e == null) return;
	let n = Mn(e);
	if (n.length === 0) return;
	let r = qt(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o < a) && (a = o, i = t);
	}
	return i;
}
// node_modules/recharts/es6/polar/PolarRadiusAxis.js
var Fn = ["type"], In = [
	"cx",
	"cy",
	"angle",
	"axisLine"
], Ln = [
	"angle",
	"tickFormatter",
	"stroke",
	"tick"
];
function q() {
	return q = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, q.apply(null, arguments);
}
function Rn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function J(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Rn(Object(n), !0).forEach(function(t) {
			zn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function zn(e, t, n) {
	return (t = Bn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Bn(e) {
	var t = Vn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Vn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Hn(e, t) {
	if (e == null) return {};
	var n, r, i = Un(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Un(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Wn = "radiusAxis";
function Gn(e) {
	var t = dn(), n = pn(), r = (0, G.useMemo)(() => {
		var t = e.type, r = Hn(e, Fn), i = It(n, "radiusAxis", t);
		if (i != null) return J(J({}, r), {}, { type: i });
	}, [e, n]);
	return (0, G.useEffect)(() => r == null ? Xt : (t(kt(r)), () => {
		t(Zt(r));
	}), [t, r]), null;
}
var Kn = (e, t, n, r) => {
	var i = e.coordinate;
	return H(n, r, i, t);
}, qn = (e) => {
	var t;
	switch (e) {
		case "left":
			t = "end";
			break;
		case "right":
			t = "start";
			break;
		default: t = "middle";
	}
	return t;
}, Jn = (e, t, n, r) => {
	var i = Nn(r, (e) => e.coordinate || 0);
	return {
		cx: t,
		cy: n,
		startAngle: e,
		endAngle: e,
		innerRadius: Pn(r, (e) => e.coordinate || 0)?.coordinate || 0,
		outerRadius: i?.coordinate || 0,
		clockWise: !1
	};
}, Yn = (e, t) => {
	var n = e.cx, r = e.cy, i = e.angle, a = e.axisLine, o = Hn(e, In), s = t.reduce((e, t) => [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)], [Infinity, -Infinity]), c = H(n, r, s[0], i), l = H(n, r, s[1], i), u = J(J(J({}, U(o)), {}, { fill: "none" }, U(a)), {}, {
		x1: c.x,
		y1: c.y,
		x2: l.x,
		y2: l.y
	});
	return /*#__PURE__*/ G.createElement("line", q({ className: "recharts-polar-radius-axis-line" }, u));
}, Xn = (e, t, n) => /*#__PURE__*/ G.isValidElement(e) ? /*#__PURE__*/ G.cloneElement(e, t) : typeof e == "function" ? e(t) : /*#__PURE__*/ G.createElement(Et, q({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n), Zn = (e, t) => {
	var n = e.angle, r = e.tickFormatter, i = e.stroke, a = e.tick, o = Hn(e, Ln), s = qn(e.orientation), c = U(o), l = sn(a), u = t.map((t, o) => {
		var u = Kn(t, e.angle, e.cx, e.cy), d = J(J(J(J({
			textAnchor: s,
			transform: `rotate(${90 - n}, ${u.x}, ${u.y})`
		}, c), {}, {
			stroke: "none",
			fill: i
		}, l), {}, { index: o }, u), {}, { payload: t });
		return /*#__PURE__*/ G.createElement(B, q({
			className: O("recharts-polar-radius-axis-tick", Rt(a)),
			key: `tick-${t.coordinate}`
		}, Ot(e, t, o)), Xn(a, d, r ? r(t.value, o) : t.value));
	});
	return /*#__PURE__*/ G.createElement(B, { className: "recharts-polar-radius-axis-ticks" }, u);
}, Qn = (e) => {
	var t = e.radiusAxisId, n = W(nn), r = W((e) => Ze(e, "radiusAxis", t)), i = W((e) => z(e, "radiusAxis", t, !1));
	if (n == null || !i || !i.length || r == null) return null;
	var a = J(J({}, e), {}, { scale: r }, n), o = a.tick, s = a.axisLine;
	return /*#__PURE__*/ G.createElement(Dt, { zIndex: a.zIndex }, /*#__PURE__*/ G.createElement(B, { className: O("recharts-polar-radius-axis", Wn, a.className) }, s && Yn(a, i), o && Zn(a, i), /*#__PURE__*/ G.createElement(bt, Jn(a.angle, a.cx, a.cy, i), /*#__PURE__*/ G.createElement(xt, { label: a.label }), a.children)));
};
function $n(e) {
	var t = Qt(e, Pt);
	return /*#__PURE__*/ G.createElement(G.Fragment, null, /*#__PURE__*/ G.createElement(Gn, {
		domain: t.domain,
		id: t.radiusAxisId,
		scale: t.scale,
		type: t.type,
		dataKey: t.dataKey,
		unit: void 0,
		name: t.name,
		allowDuplicatedCategory: t.allowDuplicatedCategory,
		allowDataOverflow: t.allowDataOverflow,
		reversed: t.reversed,
		includeHidden: t.includeHidden,
		allowDecimals: t.allowDecimals,
		niceTicks: t.niceTicks ?? "auto",
		ticks: t.ticks,
		tickCount: t.tickCount,
		tick: t.tick
	}), /*#__PURE__*/ G.createElement(Qn, t));
}
$n.displayName = "PolarRadiusAxis";
// node_modules/es-toolkit/dist/array/last.mjs
function er(e) {
	return e[e.length - 1];
}
// node_modules/es-toolkit/dist/compat/array/last.mjs
function tr(e) {
	if (Wt(e) && e.length !== 0) return er(Mn(e));
}
// node_modules/recharts/es6/state/selectors/radarSelectors.js
function nr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function rr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? nr(Object(n), !0).forEach(function(t) {
			ir(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ir(e, t, n) {
	return (t = ar(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ar(e) {
	var t = or(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function or(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var sr = (e, t) => Ze(e, "radiusAxis", t), cr = V([sr], (e) => {
	if (e != null) return { scale: e };
}), lr = V([rn, sr], (e, t) => {
	if (e != null && t != null) return rr(rr({}, e), {}, { scale: t });
}), ur = (e, t, n, r) => z(e, "radiusAxis", t, r), dr = (e, t, n) => $t(e, n), fr = (e, t, n) => Ze(e, "angleAxis", n), pr = V([dr, fr], (e, t) => {
	if (e != null && t != null) return rr(rr({}, e), {}, { scale: t });
}), mr = (e, t, n, r) => z(e, "angleAxis", n, r), hr = V([
	dr,
	fr,
	nn
], (e, t, n) => {
	if (n != null && t != null) return {
		scale: t,
		type: e.type,
		dataKey: e.dataKey,
		cx: n.cx,
		cy: n.cy
	};
}), gr = (e, t, n, r, i) => i, _r = V([
	tn,
	lr,
	ur,
	pr,
	mr
], (e, t, n, r, i) => Gt(e, "radiusAxis") ? Lt(t, n, !1) : Lt(r, i, !1)), vr = V([an, gr], (e, t) => {
	if (e != null) return e.find((e) => e.type === "radar" && t === e.id)?.dataKey;
}), yr = V([
	cr,
	hr,
	en,
	vr,
	_r
], (e, t, n, r, i) => {
	var a = n.chartData, o = n.dataStartIndex, s = n.dataEndIndex;
	if (e != null && t != null && a != null && i != null && r != null) return jr({
		radiusAxis: e,
		angleAxis: t,
		displayedData: a.slice(o, s + 1),
		dataKey: r,
		bandSize: i
	});
}), br = ["id"];
function Y() {
	return Y = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Y.apply(null, arguments);
}
function xr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function X(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? xr(Object(n), !0).forEach(function(t) {
			Sr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Sr(e, t, n) {
	return (t = Cr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Cr(e) {
	var t = wr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function wr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Tr(e, t) {
	if (e == null) return {};
	var n, r, i = Er(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Er(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Dr(e, t) {
	return e && e !== "none" ? e : t;
}
var Or = (e) => {
	var t = e.dataKey, n = e.name, r = e.stroke, i = e.fill, a = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: a,
		color: Dr(r, i),
		value: Bt(n, t),
		payload: e
	}];
}, kr = /*#__PURE__*/ G.memo((e) => {
	var t = e.dataKey, n = e.stroke, r = e.strokeWidth, i = e.fill, a = e.name, o = e.hide, s = e.tooltipType, c = e.id, l = {
		dataDefinedOnItem: void 0,
		getPosition: Xt,
		settings: {
			stroke: n,
			strokeWidth: r,
			fill: i,
			nameKey: void 0,
			dataKey: t,
			name: Bt(a, t),
			hide: o,
			type: s,
			color: Dr(n, i),
			unit: "",
			graphicalItemId: c
		}
	};
	return /*#__PURE__*/ G.createElement(Tt, { tooltipEntrySettings: l });
});
function Ar(e) {
	var t = e.points, n = e.props, r = n.dot, i = n.dataKey;
	n.id;
	var a = Tr(n, br), o = U(a);
	return /*#__PURE__*/ G.createElement(ht, {
		points: t,
		dot: r,
		className: "recharts-radar-dots",
		dotClassName: "recharts-radar-dot",
		dataKey: i,
		baseProps: o
	});
}
function jr(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach((e, r) => {
		var a = Vt(e, n.dataKey, r), d = Vt(e, i), f = (n.scale.map(a) ?? 0) + u, p = Array.isArray(d) ? tr(d) : d, m = Kt(p) ? 0 : t.scale.map(p) ?? 0;
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push(X(X({}, H(o, s, m, f)), {}, {
			name: a,
			value: d,
			cx: o,
			cy: s,
			radius: m,
			angle: f,
			payload: e
		}));
	});
	var d = [];
	return c && l.forEach((e) => {
		if (Array.isArray(e.value)) {
			var n = e.value[0], r = Kt(n) ? 0 : t.scale.map(n) ?? 0;
			d.push(X(X({}, e), {}, { radius: r }, H(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
}
function Mr(e) {
	var t = e.showLabels, n = e.points, r = e.children, i = n.map((e) => {
		var t = {
			x: e.x,
			y: e.y,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return X(X({}, t), {}, {
			value: e.value ?? "",
			payload: e.payload,
			parentViewBox: void 0,
			viewBox: t,
			fill: void 0
		});
	});
	return /*#__PURE__*/ G.createElement(it, { value: t ? i : void 0 }, r);
}
function Nr(e) {
	var t = e.points, n = e.baseLinePoints, r = e.props;
	if (t == null) return null;
	var i = r.shape, a = r.isRange, o = r.connectNulls, s = /*#__PURE__*/ G.isValidElement(i) ? /*#__PURE__*/ G.cloneElement(i, X(X({}, r), {}, { points: t })) : typeof i == "function" ? i(X(X({}, r), {}, { points: t })) : /*#__PURE__*/ G.createElement(Ye, Y({}, on(r), {
		onMouseEnter: (e) => {
			var t = r.onMouseEnter;
			t && t(r, e);
		},
		onMouseLeave: (e) => {
			var t = r.onMouseLeave;
			t && t(r, e);
		},
		points: t,
		baseLinePoints: a ? n : void 0,
		connectNulls: o
	}));
	return /*#__PURE__*/ G.createElement(B, { className: "recharts-radar-polygon" }, s, /*#__PURE__*/ G.createElement(Ar, {
		props: r,
		points: t
	}));
}
var Pr = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [X(X({}, e.next), {}, {
	x: Ut(e.prev.x, e.next.x, t),
	y: Ut(e.prev.y, e.next.y, t)
})] : [X(X({}, e.next), {}, {
	x: Ut(e.next.cx, e.next.x, t),
	y: Ut(e.next.cy, e.next.y, t)
})]);
function Fr(e) {
	var t = e.props, n = e.previousPointsRef, r = e.previousBaseLinePointsRef, i = t.points, a = t.baseLinePoints, o = t.isAnimationActive, s = t.animationBegin, c = t.animationDuration, l = t.animationEasing, u = t.animationMatchBy, d = t.animationInterpolateFn, f = t.onAnimationStart, p = t.onAnimationEnd, m = un(t, r), h = m.startValue, g = Jt(h ?? null, a, u), _ = ln(f, p), v = _.isAnimating, y = _.handleAnimationStart, b = _.handleAnimationEnd, x = pn();
	return x == null ? null : /*#__PURE__*/ G.createElement(Mr, {
		showLabels: !v,
		points: i
	}, /*#__PURE__*/ G.createElement(tt, {
		animationInput: t,
		animationIdPrefix: "recharts-radar-",
		items: i,
		previousItemsRef: n,
		isAnimationActive: o,
		animationBegin: s,
		animationDuration: c,
		animationEasing: l,
		onAnimationStart: y,
		onAnimationEnd: b,
		animationInterpolateFn: d,
		animationMatchBy: u,
		layout: x
	}, (e, n) => {
		var r = n === 1 ? a : d(g, n, x);
		return m.syncStepValue(r, n), /*#__PURE__*/ G.createElement(Nr, {
			points: e,
			baseLinePoints: r,
			props: t
		});
	}), /*#__PURE__*/ G.createElement(_t, { label: t.label }), t.children);
}
function Ir(e) {
	var t = (0, G.useRef)(void 0), n = (0, G.useRef)(void 0);
	return /*#__PURE__*/ G.createElement(Fr, {
		props: e,
		previousPointsRef: t,
		previousBaseLinePointsRef: n
	});
}
var Lr = {
	activeDot: !0,
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: Yt,
	animationInterpolateFn: Pr,
	dot: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	radiusAxisId: 0,
	zIndex: mt.area
};
function Rr(e) {
	var t = e.hide, n = e.className, r = e.points;
	if (t) return null;
	var i = O("recharts-radar", n);
	return /*#__PURE__*/ G.createElement(Dt, { zIndex: e.zIndex }, /*#__PURE__*/ G.createElement(B, { className: i }, /*#__PURE__*/ G.createElement(Ir, e)), /*#__PURE__*/ G.createElement(et, {
		points: r,
		mainColor: Dr(e.stroke, e.fill),
		itemDataKey: e.dataKey,
		activeDot: e.activeDot
	}));
}
function zr(e) {
	var t = fn(), n = W((n) => yr(n, e.radiusAxisId, e.angleAxisId, t, e.id));
	return n?.points == null ? null : /*#__PURE__*/ G.createElement(Rr, Y({}, e, {
		points: n?.points,
		baseLinePoints: n?.baseLinePoints,
		isRange: n?.isRange
	}));
}
function Br(e) {
	var t = Qt(e, Lr);
	return /*#__PURE__*/ G.createElement(St, {
		id: t.id,
		type: "radar"
	}, (e) => /*#__PURE__*/ G.createElement(G.Fragment, null, /*#__PURE__*/ G.createElement(Ct, {
		type: "radar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide,
		angleAxisId: t.angleAxisId,
		radiusAxisId: t.radiusAxisId
	}), /*#__PURE__*/ G.createElement(wt, { legendPayload: Or(t) }), /*#__PURE__*/ G.createElement(kr, {
		dataKey: t.dataKey,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ G.createElement(zr, Y({}, t, { id: e }))));
}
Br.displayName = "Radar";
// node_modules/recharts/es6/chart/RadarChart.js
function Vr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Hr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Vr(Object(n), !0).forEach(function(t) {
			Ur(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ur(e, t, n) {
	return (t = Wr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Wr(e) {
	var t = Gr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Gr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Kr = ["axis"], qr = Hr(Hr({}, Nt), {}, {
	layout: "centric",
	startAngle: 90,
	endAngle: -270
}), Jr = /*#__PURE__*/ (0, G.forwardRef)((e, t) => {
	var n = Qt(e, qr);
	return /*#__PURE__*/ G.createElement(yt, {
		chartName: "RadarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Kr,
		tooltipPayloadSearcher: At,
		categoricalChartProps: n,
		ref: t
	});
}), Yr = G.memo(function({ cx: e, cy: t, dataKey: n, chartId: r, className: i, fillOpacity: a = 1, type: o = "default", maskId: s }) {
	let c = G.useId().replace(/:/g, ""), l = `url(#${r}-colors-${String(n)})`;
	if (e === void 0 || t === void 0) return null;
	switch (o) {
		case "border": return /* @__PURE__ */ P(Zr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		case "colored-border": return /* @__PURE__ */ P(Qr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		default: return /* @__PURE__ */ P(Xr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
	}
}), Xr = G.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ F("g", {
	className: a,
	mask: o ? `url(#${o})` : void 0,
	children: [/* @__PURE__ */ P("defs", { children: /* @__PURE__ */ P("clipPath", {
		id: `dot-clip-${n}`,
		children: /* @__PURE__ */ P("circle", {
			cx: e,
			cy: t,
			r: 3
		})
	}) }), /* @__PURE__ */ P("rect", {
		x: "0",
		y: t - 3,
		width: "100%",
		height: 6,
		fill: i,
		fillOpacity: r,
		clipPath: `url(#dot-clip-${n})`
	})]
}));
Xr.displayName = "DefaultDot";
var Zr = G.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ F("g", {
	className: Mt(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ P("defs", { children: /* @__PURE__ */ P("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ P("circle", {
				cx: e,
				cy: t,
				r: 6
			})
		}) }),
		/* @__PURE__ */ P("circle", {
			cx: e,
			cy: t,
			r: 6,
			fill: "currentColor"
		}),
		/* @__PURE__ */ P("rect", {
			x: "0",
			y: t - (6 - 5 / 2),
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-inner-${n})`
		}),
		/* @__PURE__ */ P("defs", { children: /* @__PURE__ */ P("clipPath", {
			id: `dot-clip-inner-${n}`,
			children: /* @__PURE__ */ P("circle", {
				cx: e,
				cy: t,
				r: 6 - 5 / 2
			})
		}) })
	]
}));
Zr.displayName = "PrimaryBorderDot";
var Qr = G.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ F("g", {
	className: Mt(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ P("defs", { children: /* @__PURE__ */ P("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ P("circle", {
				cx: e,
				cy: t,
				r: 3.5
			})
		}) }),
		/* @__PURE__ */ P("rect", {
			x: "0",
			y: t - 3 - 1 / 2,
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-${n})`
		}),
		/* @__PURE__ */ P("circle", {
			cx: e,
			cy: t,
			r: 3 - 1 / 2,
			fill: "currentColor"
		})
	]
}));
Qr.displayName = "ColoredBorderDot";
// src/react/evilcharts/registry/charts/recharts-radar-chart.tsx
var $r = 1, ei = .3, ti = 6, ni = 1500, ri = "value", ii = (0, G.createContext)(null);
function Z() {
	let e = (0, G.use)(ii);
	if (!e) throw Error("Radar chart parts (<Radar />, <PolarAngleAxis />, …) must be used within <EvilRadarChart />");
	return e;
}
function Q({ config: e, data: t, children: n, className: r, chartProps: i, backgroundVariant: a, defaultSelectedDataKey: o = null, onSelectionChange: s, isLoading: c = !1, loadingPoints: l }) {
	let u = (0, G.useId)().replace(/:/g, ""), [d, f] = (0, G.useState)(o), p = bi(c, l), m = (0, G.useCallback)((e) => {
		f(e), s?.(e);
	}, [s]), h = (0, G.useMemo)(() => ({
		config: e,
		isLoading: c,
		selectedDataKey: d,
		selectDataKey: m
	}), [
		e,
		c,
		d,
		m
	]);
	return /* @__PURE__ */ P(ii, {
		value: h,
		children: /* @__PURE__ */ F(st, {
			className: r,
			config: e,
			children: [/* @__PURE__ */ P(vt, { isLoading: c }), /* @__PURE__ */ F(Jr, {
				id: u,
				data: c ? p : t,
				...i,
				children: [
					a && /* @__PURE__ */ P(ot, { variant: a }),
					n,
					c && /* @__PURE__ */ P(xi, {})
				]
			})]
		})
	});
}
function ai({ dataKey: e, variant: t = "filled", fillOpacity: n = ei, isGlowing: r = !1, isClickable: i = !1, children: a, radarProps: o }) {
	let { config: s, isLoading: c, selectedDataKey: l, selectDataKey: u } = Z(), d = (0, G.useId)().replace(/:/g, "");
	if (c) return null;
	let f = i && l !== null && l !== e, p = {
		stroke: f ? .2 : 1,
		fill: f ? .1 : 1,
		dot: f ? .2 : 1
	}, m = t === "filled", { dot: h, activeDot: g } = pi(a, d, e, p.dot);
	return /* @__PURE__ */ F(N.Fragment, { children: [/* @__PURE__ */ P(Br, {
		dataKey: e,
		stroke: `url(#${d}-radar-stroke-${e})`,
		strokeOpacity: p.stroke,
		strokeWidth: $r,
		fill: m ? `url(#${d}-radar-fill-${e})` : "none",
		fillOpacity: m ? n * p.fill : 0,
		dot: h,
		activeDot: g,
		filter: r ? `url(#${d}-radar-glow-${e})` : void 0,
		className: "transition-opacity duration-200",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: () => {
			i && u(l === e ? null : e);
		},
		...o
	}), /* @__PURE__ */ F("defs", { children: [
		/* @__PURE__ */ P(hi, {
			id: d,
			dataKey: e,
			config: s
		}),
		/* @__PURE__ */ P(gi, {
			id: d,
			dataKey: e,
			config: s
		}),
		m && /* @__PURE__ */ P(_i, {
			id: d,
			dataKey: e,
			config: s
		}),
		r && /* @__PURE__ */ P(vi, {
			id: d,
			dataKey: e
		})
	] })] });
}
var oi = () => null, si = () => null;
function ci({ gridType: e = "polygon", stroke: t = "currentColor", strokeOpacity: n = .2, strokeDasharray: r = "3 4", ...i }) {
	return /* @__PURE__ */ P(jn, {
		gridType: e,
		stroke: t,
		strokeOpacity: n,
		strokeDasharray: r,
		...i
	});
}
function li({ tick: e = {
	fill: "currentColor",
	fontSize: 12
}, tickLine: t = !1, ...n }) {
	let { isLoading: r } = Z();
	return r ? null : /* @__PURE__ */ P(Je, {
		tick: e,
		tickLine: t,
		...n
	});
}
function ui({ tick: e = {
	fill: "currentColor",
	fontSize: 10
}, tickLine: t = !1, axisLine: n = !1, ...r }) {
	let { isLoading: i } = Z();
	return i ? null : /* @__PURE__ */ P($n, {
		tick: e,
		tickLine: t,
		axisLine: n,
		...r
	});
}
function di({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, selectedDataKey: i } = Z();
	return r ? null : /* @__PURE__ */ P(ft, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ P(pt, {
			selected: i,
			roundness: t,
			variant: e
		})
	});
}
function fi({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { isLoading: i, selectedDataKey: a, selectDataKey: o } = Z();
	return i ? null : /* @__PURE__ */ P(lt, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ P(ut, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			variant: e
		})
	});
}
var pi = (e, t, n, r) => {
	let i = !1, a = !1;
	return G.Children.forEach(e, (e) => {
		if ((0, G.isValidElement)(e)) {
			if (e.type === oi) {
				let { variant: a } = e.props;
				i = /* @__PURE__ */ P(Yr, {
					type: a,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
			if (e.type === si) {
				let { variant: i } = e.props;
				a = /* @__PURE__ */ P(Yr, {
					type: i,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
		}
	}), {
		dot: i,
		activeDot: a
	};
}, mi = ({ dataKey: e, colorsCount: t, opacities: n }) => t === 1 ? /* @__PURE__ */ F(N.Fragment, { children: [/* @__PURE__ */ P("stop", {
	offset: "0%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[0]
}), /* @__PURE__ */ P("stop", {
	offset: "100%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[n.length - 1]
})] }) : /* @__PURE__ */ P(N.Fragment, { children: Array.from({ length: t }, (r, i) => {
	let a = `${i / (t - 1) * 100}%`;
	return /* @__PURE__ */ P("stop", {
		offset: a,
		stopColor: `var(--color-${e}-${i}, var(--color-${e}-0))`,
		stopOpacity: n?.[i]
	}, a);
}) }), hi = ({ id: e, dataKey: t, config: n }) => {
	let r = zt(n[t] ?? {});
	return /* @__PURE__ */ P("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "0",
		children: /* @__PURE__ */ P(mi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, gi = ({ id: e, dataKey: t, config: n }) => {
	let r = zt(n[t] ?? {});
	return /* @__PURE__ */ P("linearGradient", {
		id: `${e}-radar-stroke-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: /* @__PURE__ */ P(mi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, _i = ({ id: e, dataKey: t, config: n }) => {
	let r = zt(n[t] ?? {}), i = r === 1 ? [.8, .3] : Array.from({ length: r }, (e, t) => t === 0 ? .8 : .3);
	return /* @__PURE__ */ P("radialGradient", {
		id: `${e}-radar-fill-${t}`,
		cx: "50%",
		cy: "50%",
		r: "50%",
		children: /* @__PURE__ */ P(mi, {
			dataKey: t,
			colorsCount: r,
			opacities: i
		})
	});
}, vi = ({ id: e, dataKey: t }) => /* @__PURE__ */ F("filter", {
	id: `${e}-radar-glow-${t}`,
	x: "-50%",
	y: "-50%",
	width: "200%",
	height: "200%",
	children: [
		/* @__PURE__ */ P("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "4",
			result: "blur"
		}),
		/* @__PURE__ */ P("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0",
			result: "glow"
		}),
		/* @__PURE__ */ F("feMerge", { children: [/* @__PURE__ */ P("feMergeNode", { in: "glow" }), /* @__PURE__ */ P("feMergeNode", { in: "SourceGraphic" })] })
	]
}), yi = (e) => [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
].slice(0, e).map((e) => ({
	skill: e,
	[ri]: 30 + Math.random() * 70
}));
function bi(e, t = ti) {
	let [n, r] = (0, G.useState)(0);
	return (0, G.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			r((e) => e + 1);
		}, ni);
		return () => clearInterval(t);
	}, [e]), (0, G.useMemo)(() => yi(t), [t, n]);
}
var xi = () => /* @__PURE__ */ P(Br, {
	dataKey: ri,
	stroke: "currentColor",
	strokeOpacity: .3,
	strokeWidth: 2,
	fill: "currentColor",
	fillOpacity: .1,
	dot: !1,
	isAnimationActive: !0,
	animationDuration: ni,
	animationEasing: "ease-in-out"
});
Q.Radar = ai, Q.Dot = oi, Q.ActiveDot = si, Q.PolarGrid = ci, Q.PolarAngleAxis = li, Q.PolarRadiusAxis = ui, Q.Tooltip = di, Q.Legend = fi;
// src/react/taste/charts.tsx
function Si(e) {
	let { x: t = 0, cx: n, textAnchor: r, payload: i, ...a } = e, o = String(i?.value ?? ""), s = typeof n == "number" ? n * 2 : 0, c = s ? r === "start" ? s - t : r === "end" ? t : 2 * Math.min(t, s - t) : 56;
	return /* @__PURE__ */ F("g", { children: [/* @__PURE__ */ P("title", { children: o }), /* @__PURE__ */ P(Et, {
		...a,
		x: t,
		textAnchor: r,
		fill: "currentColor",
		fontSize: 12,
		children: Ft(o, c - 4)
	})] });
}
var Ci = [
	"stroke-chart-1",
	"stroke-chart-2",
	"stroke-chart-3",
	"stroke-chart-4",
	"stroke-chart-5",
	"stroke-chart-6"
], wi = [
	"fill-chart-1",
	"fill-chart-2",
	"fill-chart-3",
	"fill-chart-4",
	"fill-chart-5",
	"fill-chart-6"
], Ti = { value: {
	label: "标签出现次数",
	colors: cn(rt[3])
} }, Ei = [
	"min-h-24",
	"min-h-24",
	"min-h-24",
	"min-h-32",
	"min-h-40",
	"min-h-48",
	"min-h-52",
	"min-h-60",
	"min-h-64"
], Di = 26, Oi = { radius: Ti.value }, ki = (e, t) => Math.sqrt(e / t);
function Ai({ rows: e, label: t }) {
	let n = De(e);
	if (!n.length) return null;
	let r = n[0].value, i = n.map((e) => ({
		...e,
		radius: ki(e.value, r)
	}));
	return /* @__PURE__ */ P("div", {
		role: "img",
		"aria-label": `${t}：${i.map((e) => e.name).join("，")}`,
		children: /* @__PURE__ */ F(Q, {
			data: i,
			config: Oi,
			chartProps: { outerRadius: "58%" },
			className: "aspect-auto h-70 text-text-secondary",
			children: [
				/* @__PURE__ */ P(Q.PolarGrid, {}),
				/* @__PURE__ */ P(Q.PolarAngleAxis, {
					dataKey: "name",
					tick: /* @__PURE__ */ P(Si, {})
				}),
				/* @__PURE__ */ P(Q.PolarRadiusAxis, {
					domain: [0, 1],
					allowDecimals: !0,
					tick: !1
				}),
				/* @__PURE__ */ P(Q.Radar, { dataKey: "radius" }),
				/* @__PURE__ */ P(dt, { valueKey: "value" })
			]
		})
	});
}
function ji({ rows: e, label: t }) {
	let n = Be(e, 8);
	return n.length ? /* @__PURE__ */ P("section", {
		"aria-label": t,
		className: `flex grow flex-col ${Ei[n.length]}`,
		children: /* @__PURE__ */ F(gt, {
			data: n,
			config: Ti,
			layout: "horizontal",
			barRadius: 4,
			chartProps: {
				maxBarSize: Di,
				margin: {
					top: 5,
					right: 56,
					bottom: 5,
					left: 5
				}
			},
			className: "aspect-auto text-text-secondary",
			children: [
				/* @__PURE__ */ P(gt.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ P(at, { along: "y" }),
					width: jt(n.map((e) => e.name))
				}),
				/* @__PURE__ */ P(gt.XAxis, {
					hide: !0,
					domain: Ke
				}),
				/* @__PURE__ */ P(gt.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: Xe("right")
					}
				}),
				/* @__PURE__ */ P(dt, {})
			]
		})
	}) : null;
}
function Mi({ flows: e }) {
	let [t, n] = (0, G.useState)(null), r = ve(e);
	if (!r) return null;
	let i = t?.node ?? null, a = (e, n) => t ? i === null ? t.label === n : e.source === i || e.target === i : !0;
	return /* @__PURE__ */ F("section", {
		className: nt,
		children: [
			/* @__PURE__ */ P(ct, {
				title: "创作者线索来源",
				figure: (t ? t.value : r.total).toLocaleString(),
				note: t ? t.label : "条线索"
			}),
			/* @__PURE__ */ P("ol", {
				"aria-label": "来源网站与创作者线索",
				className: "flex flex-col sm:hidden",
				children: [...r.links].sort((e, t) => t.value - e.value).map((e) => /* @__PURE__ */ F("li", {
					className: "flex items-baseline justify-between gap-3 border-b border-separator-border py-2 text-body-2-regular text-text-primary last:border-b-0",
					children: [/* @__PURE__ */ P("span", {
						className: "min-w-0 wrap-anywhere",
						children: e.label
					}), /* @__PURE__ */ P("b", {
						className: "shrink-0 tabular-nums",
						children: e.value.toLocaleString()
					})]
				}, e.key))
			}),
			/* @__PURE__ */ P("div", {
				className: "min-w-0 max-sm:hidden",
				children: /* @__PURE__ */ F("svg", {
					viewBox: `0 0 ${u.width} ${r.height}`,
					fill: "none",
					role: "img",
					"aria-label": "来源网站与创作者线索",
					className: "block h-auto w-full",
					onPointerLeave: () => n(null),
					children: [/* @__PURE__ */ P("g", { children: r.links.map((e) => /* @__PURE__ */ P("path", {
						d: e.d,
						strokeWidth: e.width,
						tabIndex: 0,
						role: "img",
						"aria-label": `${e.label}：${e.value} 条线索`,
						fillOpacity: 0,
						strokeOpacity: a(e, e.label) ? .55 : .08,
						className: `outline-none transition-opacity ${Ci[e.color]}`,
						onPointerEnter: () => n({
							value: e.value,
							label: e.label,
							node: null
						}),
						onFocus: () => n({
							value: e.value,
							label: e.label,
							node: null
						}),
						onBlur: () => n(null)
					}, e.key)) }), /* @__PURE__ */ P("g", { children: r.nodes.map((e) => /* @__PURE__ */ F("g", {
						tabIndex: 0,
						role: "img",
						"aria-label": `${e.name}：${e.value} 条线索`,
						className: "outline-none focus-visible:opacity-100",
						onPointerEnter: () => n({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onFocus: () => n({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onBlur: () => n(null),
						children: [/* @__PURE__ */ P("rect", {
							x: e.x,
							y: e.y,
							width: 10,
							height: e.height,
							rx: 5,
							className: e.side === "source" ? wi[e.color] : "fill-text-secondary"
						}), /* @__PURE__ */ F("text", {
							x: l[e.side],
							y: e.y + e.height / 2,
							textAnchor: e.side === "source" ? "end" : "start",
							dominantBaseline: "middle",
							className: "fill-text-secondary text-caption-1-regular",
							children: [ye(e.name), /* @__PURE__ */ P("tspan", {
								x: l[e.side],
								dy: 15,
								children: e.side === "source" ? e.value.toLocaleString() : `${e.share.toFixed(1)}%`
							})]
						})]
					}, e.id)) })]
				})
			}),
			/* @__PURE__ */ F("footer", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary max-sm:hidden",
				children: [/* @__PURE__ */ P("span", { children: "来源网站" }), /* @__PURE__ */ P("span", { children: "创作者 · 线索占比" })]
			})
		]
	});
}
// src/react/taste/browser-sources.tsx
var Ni = "flex min-w-0 items-center gap-3 rounded-xl bg-background-primary-default p-3";
function Pi({ browsers: e, sources: t, range: n, children: r }) {
	let [a, o] = (0, G.useState)(!1), [s, c] = (0, G.useState)(""), [l, u] = (0, G.useState)(""), f = Ue({
		mutationFn: (e) => k(e, n),
		onSuccess: (e) => {
			L.setQueryData(R(n), e.dashboard), o(!1), c(""), u("");
		}
	});
	return /* @__PURE__ */ F("section", {
		className: `${D()} flex flex-col gap-4`,
		"aria-label": "数据源",
		children: [
			/* @__PURE__ */ F("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ P("h3", {
					className: "text-title-2-medium text-text-primary",
					children: "数据源"
				}), /* @__PURE__ */ P(i, {
					variant: "secondary",
					onClick: () => o(!0),
					disabled: a,
					children: "添加浏览器"
				})]
			}),
			f.error ? /* @__PURE__ */ P(y, {
				tone: "error",
				children: j(f.error)
			}) : null,
			a ? /* @__PURE__ */ F("form", {
				className: "flex flex-col gap-3",
				onSubmit: (e) => {
					e.preventDefault(), f.isPending || f.mutate({
						operation: "add",
						name: s,
						path: l
					});
				},
				children: [
					/* @__PURE__ */ P(p, {
						label: "浏览器名称",
						value: s,
						onChange: c,
						maxLength: 80,
						isRequired: !0,
						isDisabled: f.isPending
					}),
					/* @__PURE__ */ P(p, {
						label: "资料目录或历史文件",
						value: l,
						onChange: u,
						maxLength: 1024,
						isRequired: !0,
						isDisabled: f.isPending,
						hint: "请选择运行 Peach 的电脑上的浏览器资料。"
					}),
					/* @__PURE__ */ F("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ P(i, {
							variant: "ghost",
							disabled: f.isPending,
							onClick: () => {
								o(!1), f.reset();
							},
							children: "取消"
						}), /* @__PURE__ */ P(i, {
							type: "submit",
							variant: "secondary",
							disabled: !s.trim() || !l.trim(),
							...E(f.isPending),
							children: "添加"
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ F("div", {
				className: "inline-grid w-full min-w-0 gap-2 sm:grid-cols-2",
				children: [r, e.map((e) => {
					let n = t.filter((t) => e.source_keys?.includes(t.source_key)), r = n.reduce((e, t) => e + (t.visits || 0), 0), a = n.reduce((e, t) => e + (t.bookmarks || 0), 0);
					return /* @__PURE__ */ F("div", {
						"data-taste-source": "browser",
						className: Ni,
						children: [
							/* @__PURE__ */ P("span", {
								className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
								children: /* @__PURE__ */ P(mn, { name: e.name })
							}),
							/* @__PURE__ */ F("div", {
								className: "flex min-w-0 grow flex-col gap-0.5",
								children: [
									/* @__PURE__ */ P("b", {
										className: "text-body-2-medium break-words text-text-primary",
										children: e.name
									}),
									/* @__PURE__ */ P("span", {
										className: "break-all text-caption-1-regular text-text-secondary",
										children: e.path
									}),
									/* @__PURE__ */ P("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: e.enabled ? e.available ? `历史与书签 · ${e.profiles} 个资料` : "资料目录不可用" : "已停止读取"
									}),
									n.length ? /* @__PURE__ */ F("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: [
											r.toLocaleString(),
											" 条历史 · ",
											a.toLocaleString(),
											" 枚书签"
										]
									}) : null
								]
							}),
							/* @__PURE__ */ F("span", {
								className: "flex shrink-0 gap-1",
								children: [/* @__PURE__ */ P(i, {
									variant: "secondary",
									size: "small",
									...E(f.isPending),
									iconOnly: !0,
									leadingIcon: e.enabled ? b : d,
									"aria-label": `${e.enabled ? "停止读取" : "启用"} ${e.name}`,
									onClick: () => {
										e.enabled ? A({
											title: `停止读取 ${e.name}`,
											body: "已导入的历史与书签仍用于口味分析。",
											confirmLabel: "停止读取",
											onConfirm: () => f.mutateAsync({
												operation: "disable",
												id: e.id
											})
										}) : f.mutate({
											operation: "enable",
											id: e.id
										});
									}
								}), /* @__PURE__ */ P(i, {
									variant: "secondary",
									size: "small",
									iconOnly: !0,
									leadingIcon: m,
									...E(f.isPending),
									"aria-label": `删除 ${e.name}`,
									onClick: () => {
										A({
											title: `删除 ${e.name}`,
											body: "移除该浏览器的读取配置和已导入历史、书签，浏览器原文件保留。可以通过添加浏览器重新接入。",
											confirmLabel: "删除浏览器来源",
											danger: !0,
											onConfirm: () => f.mutateAsync({
												operation: "delete_browser",
												id: e.id
											})
										});
									}
								})]
							})
						]
					}, e.id);
				})]
			})
		]
	});
}
// src/react/taste/taste-page.tsx
var Fi = 10, Ii = me(h, g, "text-body-2-medium"), Li = `${D()} flex flex-col gap-4`, Ri = "rounded-xl bg-background-primary-default p-3", zi = "读取运行 Peach 的这台电脑上的浏览历史与书签", Bi = "导入或读取浏览记录后，这里会列出记录来自哪些设备。", Vi = "馆藏中暂时没有与你浏览过的内容相符的标签。", Hi = "读取浏览记录后，这里会按类别汇总你浏览过的内容。", Ui = "这些标签出现在浏览记录中，Peach 的观看或评价记录中尚未出现这些标签", Wi = "采集浏览记录后，这里会列出浏览过的标签。", Gi = "采集浏览记录后，这里会列出浏览过的创作者。", Ki = "采集浏览记录后，这里会列出常访问的网站。", qi = "在 Peach 里播放或评价作品后，这里会列出对应的标签。", Ji = "在 Peach 里播放或评价作品后，这里会列出对应的创作者。", Yi = "在 Peach 里播放或评价作品后，这里会列出对应的女优。", Xi = "在运行 Peach 的电脑上使用浏览器：点上面的「读取浏览器记录」。", Zi = "记录在其他设备上：导出文件后，选择「导入历史文件」或「导入书签文件」。书签支持浏览器导出的 HTML 文件和 Chromium Bookmarks JSON 文件。", Qi = "需要刷新时再次读取或导入；数据源可在页面底部移除。", $i = "删除这个来源的已导入记录，原始文件保留。若浏览器仍启用，下次读取会再次导入。", ea = "peach-taste-guide-dismissed", ta = (0, G.createContext)(/* @__PURE__ */ P(a, {
	size: "small",
	href: "/",
	children: "浏览馆藏"
}));
function na() {
	return (0, G.useContext)(ta);
}
function $({ icon: e, term: t, figure: n, detail: r, detailTitle: i, accent: a }) {
	return /* @__PURE__ */ P("div", {
		className: Pe(),
		children: /* @__PURE__ */ P(C, {
			label: t,
			icon: e,
			accent: a,
			figure: n,
			footer: /* @__PURE__ */ P("span", {
				className: "block min-w-0 truncate",
				title: i || r,
				children: r ?? ""
			})
		})
	});
}
function ra({ name: e, domain: t }) {
	return /* @__PURE__ */ F("span", {
		className: "relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-background-tertiary-default text-caption-1-medium text-text-secondary",
		children: [_e(e).toUpperCase(), /* @__PURE__ */ P("img", {
			src: Me({ domain: t }),
			alt: "",
			loading: "lazy",
			width: 20,
			height: 20,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute size-5 object-contain"
		})]
	});
}
function ia({ html: e }) {
	return /* @__PURE__ */ P("span", {
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-medium text-text-secondary ${Qe}`,
		dangerouslySetInnerHTML: { __html: e }
	});
}
function aa({ rows: e, kind: t, visual: n, empty: r, onSignal: i }) {
	if (!e.length) return /* @__PURE__ */ P(c, {
		size: "compact",
		icon: I,
		title: "记录还不够",
		actions: /* @__PURE__ */ P(na, {}),
		children: r
	});
	let a = ke(e);
	return /* @__PURE__ */ P(qe, {
		previewCount: Fi,
		className: "inline-grid w-full gap-x-7 gap-y-2 sm:grid-cols-2",
		children: e.map((e, r) => {
			let o = !!t && !!e.peach_items, s = String(e.source_domain || ""), c = /* @__PURE__ */ F(N.Fragment, { children: [
				/* @__PURE__ */ P("svg", {
					viewBox: "0 0 100 1",
					preserveAspectRatio: "none",
					"aria-hidden": !0,
					className: "absolute inset-0 -z-10 size-full overflow-hidden rounded-lg opacity-15",
					children: /* @__PURE__ */ P("rect", {
						width: a[r],
						height: 1,
						className: "fill-chart-4"
					})
				}),
				/* @__PURE__ */ P("span", {
					className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
					children: r + 1
				}),
				n === "domain" ? /* @__PURE__ */ P(ra, {
					name: e.name,
					domain: e.name
				}) : null,
				n === "creator" && !e.entity_id && !e.has_avatar && s ? /* @__PURE__ */ P(ra, {
					name: e.name,
					domain: s
				}) : null,
				n !== "none" && n !== "domain" && (e.entity_id || e.has_avatar || !s) ? /* @__PURE__ */ P(ia, { html: fe(e.name, e.entity_id ? {
					id: e.entity_id,
					has_image: !!e.has_image,
					image_version: e.image_version,
					avatar_focus: e.avatar_focus,
					avatar_stand_in: e.avatar_stand_in
				} : null, e.has_avatar ? e.representative_asset_id ?? null : null, n === "creator" ? "creator" : t || "performer") }) : null,
				/* @__PURE__ */ F("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ P("b", {
						className: "min-w-0 text-body-medium break-words text-text-primary",
						children: e.name
					}), /* @__PURE__ */ P("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: Oe(e)
					})]
				}),
				o ? /* @__PURE__ */ P(Ee, {
					"aria-hidden": !0,
					className: "size-4 shrink-0 text-text-tertiary"
				}) : null
			] }), l = "relative isolate flex min-h-11 w-full min-w-0 items-center gap-2.5 rounded-lg px-3 py-2 text-left";
			return /* @__PURE__ */ P("li", {
				className: "min-w-0",
				children: o ? /* @__PURE__ */ P("button", {
					type: "button",
					onClick: () => i(t, e.name),
					className: `${l} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: c
				}) : /* @__PURE__ */ P("div", {
					className: l,
					children: c
				})
			}, `${e.name}:${r}`);
		})
	});
}
function oa({ label: e, panels: i, onSignal: a }) {
	return /* @__PURE__ */ F(r, {
		className: `${D({ padding: "none" })} flex flex-col`,
		children: [/* @__PURE__ */ P("div", {
			className: "px-4 pt-3",
			children: /* @__PURE__ */ P(re, {
				"aria-label": e,
				className: te,
				children: i.map((e) => /* @__PURE__ */ P(n, {
					id: e.id,
					className: ee,
					children: e.name
				}, e.id))
			})
		}), i.map((e) => /* @__PURE__ */ P(t, {
			id: e.id,
			className: "px-4 pt-3.5 pb-4",
			children: /* @__PURE__ */ P(aa, {
				...e.props,
				onSignal: a
			})
		}, e.id))]
	});
}
function sa({ data: e, onSignal: t, navigate: n }) {
	let r = e.analysis;
	if (!r?.headline) return null;
	let i = r.confidence || {}, o = [...(r.explore || []).map((e) => ({
		key: `tag:${e.tag}`,
		title: e.title,
		detail: e.detail,
		act: () => t("tag", e.tag)
	})), ...(r.next_steps || []).map((e) => ({
		key: `route:${e.route}`,
		title: e.title,
		detail: e.detail,
		act: () => n(e.route)
	}))];
	return /* @__PURE__ */ F("section", {
		className: Li,
		"aria-label": "口味总结",
		children: [
			/* @__PURE__ */ F("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ P("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "口味总结"
					}),
					/* @__PURE__ */ P("p", {
						className: "max-w-prose text-title-2-regular wrap-anywhere text-text-primary",
						children: r.headline
					}),
					/* @__PURE__ */ F("p", {
						className: "flex flex-wrap items-center gap-2 text-body-2-regular text-text-secondary",
						children: [/* @__PURE__ */ P("i", {
							"aria-hidden": !0,
							className: `size-2 shrink-0 rounded-full ${i.level === "high" ? "bg-status-lime-text" : i.level === "medium" ? "bg-status-yellow-text" : "bg-text-tertiary"}`
						}), /* @__PURE__ */ P("span", {
							className: "min-w-0 wrap-anywhere",
							children: i.label || "仍在学习"
						})]
					})
				]
			}),
			r.points?.length ? /* @__PURE__ */ P("div", {
				className: "inline-grid w-full gap-3 sm:grid-cols-2",
				children: r.points.map((e) => /* @__PURE__ */ F("div", {
					className: `flex min-w-0 flex-col gap-1 ${Ri}`,
					children: [/* @__PURE__ */ P("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: e.label
					}), /* @__PURE__ */ P("b", {
						className: "text-body-2-medium break-words text-text-primary",
						children: e.text
					})]
				}, e.label))
			}) : null,
			o.length ? /* @__PURE__ */ P("div", {
				className: "flex flex-col gap-2",
				children: o.map((e) => /* @__PURE__ */ F("button", {
					type: "button",
					onClick: e.act,
					className: `flex w-full min-w-0 cursor-pointer items-center gap-3 ${Ri} text-left outline-none hover:bg-background-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: [/* @__PURE__ */ F("span", {
						className: "flex min-w-0 grow flex-col gap-1",
						children: [/* @__PURE__ */ P("b", {
							className: "text-body-2-medium wrap-anywhere text-text-primary",
							children: e.title
						}), /* @__PURE__ */ P("small", {
							className: "text-caption-1-regular wrap-anywhere text-text-secondary",
							children: e.detail
						})]
					}), /* @__PURE__ */ P(Ee, {
						"aria-hidden": !0,
						className: "size-4 shrink-0 text-text-tertiary"
					})]
				}, e.key))
			}) : /* @__PURE__ */ P(c, {
				size: "compact",
				icon: I,
				title: "还没有可探索的入口",
				actions: /* @__PURE__ */ P(a, {
					size: "small",
					href: "/",
					children: "浏览馆藏"
				}),
				children: Vi
			})
		]
	});
}
function ca({ onboarding: e, done: t }) {
	let [n, r] = (0, G.useState)(() => {
		try {
			return localStorage.getItem(ea) === "1";
		} catch {
			return !1;
		}
	});
	return t || n ? null : /* @__PURE__ */ P("div", {
		className: D({
			padding: "none",
			className: "p-4"
		}),
		children: /* @__PURE__ */ F(o, {
			summary: "浏览器历史记录导入指南",
			defaultOpen: e,
			children: [
				/* @__PURE__ */ P("p", {
					className: "text-body-2-regular text-text-secondary",
					children: Xi
				}),
				/* @__PURE__ */ P("p", {
					className: "text-body-2-regular text-text-secondary",
					children: Zi
				}),
				/* @__PURE__ */ F("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [/* @__PURE__ */ F("li", { children: [
						"Chrome：在 ",
						/* @__PURE__ */ F("a", {
							href: "https://takeout.google.com/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-text-primary underline-offset-4 hover:underline",
							children: ["Google Takeout", /* @__PURE__ */ P(w, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})]
						}),
						" ",
						"选择 Chrome 历史记录，下载 ZIP 后直接导入。"
					] }), /* @__PURE__ */ F("li", { children: [
						"其他浏览器：用 ",
						/* @__PURE__ */ F("a", {
							href: "https://github.com/purarue/browserexport",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-text-primary underline-offset-4 hover:underline",
							children: ["browserexport", /* @__PURE__ */ P(w, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})]
						}),
						" ",
						"导出历史记录，再导入导出文件。"
					] })]
				}),
				/* @__PURE__ */ P("p", {
					className: "text-body-2-regular text-text-secondary",
					children: Qi
				}),
				/* @__PURE__ */ P("span", {
					className: "self-start",
					children: /* @__PURE__ */ P(i, {
						variant: "secondary",
						size: "small",
						onClick: () => {
							try {
								localStorage.setItem(ea, "1");
							} catch {}
							r(!0);
						},
						children: "跳过"
					})
				})
			]
		})
	});
}
function la({ busy: t, onRefresh: n, onImport: r, onImportBookmarks: a }) {
	let o = (0, G.useRef)(null), [c, l] = (0, G.useState)(!1), u = (e) => {
		l(!1), e();
	};
	return /* @__PURE__ */ F(N.Fragment, { children: [/* @__PURE__ */ F("span", {
		"data-guide-target": "history-import",
		"data-button-group": !0,
		"data-split-button": !0,
		"data-variant": "primary",
		children: [/* @__PURE__ */ P(i, {
			leadingIcon: s,
			title: zi,
			onClick: n,
			...E(t),
			children: "读取浏览器记录"
		}), /* @__PURE__ */ P(i, {
			ref: o,
			iconOnly: !0,
			leadingIcon: M,
			"aria-label": "更多取得浏览记录的方式",
			"aria-haspopup": "dialog",
			"aria-expanded": c,
			...E(t),
			onClick: () => {
				t || l(!0);
			}
		})]
	}), /* @__PURE__ */ P(e, {
		triggerRef: o,
		isOpen: c,
		onOpenChange: l,
		placement: "bottom end",
		offset: 4,
		className: _,
		children: /* @__PURE__ */ F(v, {
			"aria-label": "更多取得浏览记录的方式",
			className: "flex w-52 flex-col gap-1 outline-none",
			children: [
				/* @__PURE__ */ F("button", {
					type: "button",
					className: Ii,
					onClick: () => u(n),
					children: [/* @__PURE__ */ P(s, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "读取浏览器记录"]
				}),
				/* @__PURE__ */ F("button", {
					type: "button",
					className: Ii,
					onClick: () => u(r),
					children: [/* @__PURE__ */ P(S, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "导入历史文件"]
				}),
				/* @__PURE__ */ F("button", {
					type: "button",
					className: Ii,
					onClick: () => u(a),
					children: [/* @__PURE__ */ P(xe, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "导入书签文件"]
				})
			]
		})
	})] });
}
function ua({ sources: e, browsers: t, window: n, toast: r, emptyActions: a }) {
	let o = Ue({
		mutationFn: (e) => Ae(e, n),
		onSuccess: (e) => {
			L.setQueryData(R(n), e.dashboard), r("已移除口味数据源");
		}
	});
	return /* @__PURE__ */ F(Pi, {
		browsers: t,
		sources: e,
		range: n,
		children: [o.error ? /* @__PURE__ */ P("div", {
			className: "sm:col-span-2",
			children: /* @__PURE__ */ P(y, {
				tone: "error",
				children: j(o.error)
			})
		}) : null, e.length ? /* @__PURE__ */ P(N.Fragment, { children: e.filter((e) => !t.some((t) => t.source_keys?.includes(e.source_key))).map((e) => /* @__PURE__ */ F("div", {
			"data-taste-source": "import",
			className: Ni,
			children: [
				/* @__PURE__ */ P("span", {
					className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
					children: e.browser === "browserexport" ? /* @__PURE__ */ P(S, {
						"aria-hidden": !0,
						className: "size-4"
					}) : /* @__PURE__ */ P(T, {
						"aria-hidden": !0,
						className: "size-4"
					})
				}),
				/* @__PURE__ */ F("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ P("b", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.profile
					}), /* @__PURE__ */ P("small", {
						className: "min-w-0 text-caption-1-regular break-words text-text-secondary",
						children: `导入文件 · ${e.host} · ${Number(e.visits || e.bookmarks || 0).toLocaleString()} ${e.bookmarks ? "枚书签" : "条历史"}`
					})]
				}),
				/* @__PURE__ */ P(i, {
					variant: "secondary",
					size: "small",
					"aria-label": `移除 ${e.profile}`,
					className: "shrink-0",
					iconOnly: !0,
					leadingIcon: m,
					...E(o.isPending),
					onClick: () => {
						o.isPending || A({
							title: "移除口味数据源",
							body: $i,
							confirmLabel: "移除口味数据源",
							onConfirm: () => o.mutateAsync(e.source_key)
						});
					}
				})
			]
		}, e.source_key)) }) : t.length ? null : /* @__PURE__ */ P(c, {
			size: "compact",
			icon: T,
			title: "还没有数据源",
			actions: a,
			children: Bi
		})]
	});
}
function da(e) {
	let { onSignal: o, navigate: s, toast: l, onboarding: u } = e, [d, p] = (0, G.useState)("all"), [m, h] = (0, G.useState)("browser"), g = (0, G.useRef)(null), _ = (0, G.useRef)(null), v = We({
		queryKey: R(d),
		queryFn: ({ signal: e }) => he(d, e),
		placeholderData: we,
		refetchInterval: (e) => Re(e.state.data)
	}), { job: b, running: x, outcome: S, start: C } = He({
		queryKey: oe,
		queryFn: ({ signal: e }) => ge(e),
		start: () => Ne(d),
		idlePollMs: f,
		onFinish: (e) => {
			e.status !== "failed" && (L.invalidateQueries({ queryKey: ["taste"] }), l(e.warnings?.length ? "部分浏览记录未取得" : "已更新口味分析"));
		}
	}), w = Ue({
		mutationFn: (e) => he(e, void 0, !0),
		onSuccess: (e, t) => {
			L.setQueryData(R(t), e);
		}
	}), T = Ue({
		mutationFn: (e) => Ce(e),
		onSuccess: (e) => {
			L.setQueryData(R("all"), e.dashboard), p("all"), l("已导入口味数据");
		}
	}), ue = (e) => {
		let t = e.currentTarget.files?.[0];
		e.currentTarget.value = "", t && !T.isPending && (T.reset(), T.mutate(t));
	}, fe = () => {
		x || C.isPending || (C.reset(), C.mutate());
	}, D = v.data;
	if (!D) return /* @__PURE__ */ P($e, { children: /* @__PURE__ */ P(y, {
		tone: "error",
		title: "口味分析读取失败",
		children: v.error ? j(v.error) : "读取口味分析失败"
	}) });
	let O = D.summary || {}, k = D.coverage || {}, A = D.rankings || {}, me = D.storage || {}, M = Ie(A.browser_categories || []), _e = De(M).length > 0, ve = D.gaps || [], ye = k.tagged || 0, N = k.identified || 0, Ee = C.error ? j(C.error) : T.error ? j(T.error) : w.error ? j(w.error) : S?.status === "failed" ? S.error || "读取未取得" : "", Oe = /* @__PURE__ */ F("div", {
		className: "flex flex-wrap justify-center gap-2",
		children: [/* @__PURE__ */ P(i, {
			variant: "secondary",
			...E(x || C.isPending || T.isPending),
			onClick: fe,
			children: "读取浏览器记录"
		}), /* @__PURE__ */ P(i, {
			variant: "secondary",
			...E(T.isPending),
			onClick: () => g.current?.click(),
			children: "导入历史文件"
		})]
	});
	return /* @__PURE__ */ P($e, { children: /* @__PURE__ */ F(ta, {
		value: d === "all" ? m === "peach" ? /* @__PURE__ */ P(a, {
			size: "small",
			variant: "secondary",
			href: "/",
			children: "浏览馆藏"
		}) : Oe : /* @__PURE__ */ P(i, {
			size: "small",
			variant: "secondary",
			onClick: () => p("all"),
			children: "查看全部时间"
		}),
		children: [
			/* @__PURE__ */ F(r, {
				selectedKey: m,
				onSelectionChange: (e) => h(String(e)),
				className: "flex flex-col gap-5",
				children: [
					/* @__PURE__ */ F("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ F(re, {
							"aria-label": "口味分析的数据来源",
							className: te,
							children: [/* @__PURE__ */ P(n, {
								id: "peach",
								className: ee,
								children: "Peach 观看与评价"
							}), /* @__PURE__ */ P(n, {
								id: "browser",
								className: ee,
								children: "浏览器记录"
							})]
						}), /* @__PURE__ */ F("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ P(ie, {
									"aria-label": "分析范围",
									selectedKey: d,
									onSelectionChange: (e) => {
										e !== null && p(String(e));
									},
									children: se.map(([e, t]) => /* @__PURE__ */ P(ae, {
										id: e,
										children: t
									}, e))
								}),
								/* @__PURE__ */ P(la, {
									busy: x || C.isPending || T.isPending,
									onRefresh: fe,
									onImport: () => g.current?.click(),
									onImportBookmarks: () => _.current?.click()
								}),
								/* @__PURE__ */ P("input", {
									ref: g,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: ue
								}),
								/* @__PURE__ */ P("input", {
									ref: _,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									"data-bookmark-import": !0,
									onChange: ue
								})
							]
						})]
					}),
					/* @__PURE__ */ P(ca, {
						onboarding: u,
						done: !!(O.history_sources || D.updated_at)
					}),
					/* @__PURE__ */ F("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-3 empty:hidden",
						children: [
							x ? /* @__PURE__ */ P(ce, {
								label: b?.message || "正在读取浏览记录并更新口味分析",
								value: b?.checked,
								total: b?.total
							}) : null,
							T.isPending ? /* @__PURE__ */ P(ce, { label: "正在导入口味数据" }) : null,
							D.stale && D.error ? /* @__PURE__ */ P(y, {
								tone: "error",
								action: /* @__PURE__ */ P(i, {
									variant: "secondary",
									size: "small",
									...E(w.isPending),
									onClick: () => w.mutate(d),
									children: "立即重试"
								}),
								children: `口味分析更新失败，当前显示 ${ze(D.computed_at)} 的结果。${D.error}`
							}) : D.stale ? /* @__PURE__ */ P(ce, { label: `正在更新口味分析，当前显示 ${ze(D.computed_at)} 的结果` }) : null,
							Ee ? /* @__PURE__ */ P(y, {
								tone: "error",
								children: Ee
							}) : null,
							S?.warnings?.length ? /* @__PURE__ */ P(y, {
								tone: "warning",
								children: S.warnings.join("；")
							}) : null
						]
					}),
					/* @__PURE__ */ F(t, {
						id: "browser",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ F("div", {
								className: ne,
								children: [
									/* @__PURE__ */ P($, {
										accent: 0,
										icon: Ve,
										term: "浏览记录",
										figure: Number(O.history_visits || 0).toLocaleString(),
										detail: Se(O),
										detailTitle: `${Fe(O.range_start)}—${Fe(O.range_end)}`
									}),
									/* @__PURE__ */ P($, {
										accent: 1,
										icon: Te,
										term: "口味维度",
										figure: M.length.toLocaleString(),
										detail: M[0]?.name || "尚无主维度"
									}),
									/* @__PURE__ */ P($, {
										accent: 2,
										icon: I,
										term: "浏览线索",
										figure: ve.length.toLocaleString()
									}),
									/* @__PURE__ */ P($, {
										accent: 3,
										icon: xe,
										term: "浏览器书签",
										figure: Number(O.bookmarks || 0).toLocaleString(),
										detail: `${Number(me.exports || 0).toLocaleString()} 份私有导出 · ${be(me.bytes || 0)}`
									})
								]
							}),
							/* @__PURE__ */ F("section", {
								className: _e ? `${Li} md:flex-row md:gap-6` : Li,
								"aria-label": "浏览器画像",
								children: [/* @__PURE__ */ F("div", {
									className: _e ? "flex shrink-0 flex-col gap-2 pb-5 md:w-80 md:pr-6 md:pb-0" : "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
									children: [
										/* @__PURE__ */ P("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: "浏览器画像"
										}),
										_e ? /* @__PURE__ */ P(Ai, {
											rows: M,
											label: "主要口味维度"
										}) : null,
										/* @__PURE__ */ P("small", {
											className: "text-caption-1-regular text-text-secondary",
											children: D.updated_at ? `更新于 ${Fe(D.updated_at)}` : "尚未采集浏览记录"
										})
									]
								}), /* @__PURE__ */ P("div", {
									className: "flex min-w-0 grow flex-col",
									children: M.length ? /* @__PURE__ */ P(ji, {
										rows: M,
										label: "口味维度排名"
									}) : /* @__PURE__ */ P(c, {
										size: "compact",
										icon: I,
										title: "暂无口味维度",
										actions: /* @__PURE__ */ P(na, {}),
										children: Hi
									})
								})]
							}),
							/* @__PURE__ */ P(Ge, {
								activity: D.activity,
								title: "浏览活跃时间",
								dailyTitle: "每日活跃",
								words: {
									unit: "口味网站访问",
									series: "访问",
									cellUnit: "次访问"
								},
								tone: 4,
								empty: "还没有可用于分析的口味网站访问记录。"
							}),
							/* @__PURE__ */ P(Mi, { flows: D.creator_flows }),
							/* @__PURE__ */ P(oa, {
								label: "浏览器口味维度",
								onSignal: o,
								panels: [
									{
										id: "tags",
										name: "标签",
										props: {
											rows: A.browser_tags || [],
											kind: "tag",
											visual: "none",
											empty: Wi
										}
									},
									{
										id: "creators",
										name: "创作者",
										props: {
											rows: A.browser_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Gi
										}
									},
									{
										id: "performers",
										name: "女优",
										props: {
											rows: A.browser_performers || [],
											kind: "performer",
											visual: "entity",
											empty: "还没有与已建档女优关联的浏览记录。"
										}
									},
									{
										id: "domains",
										name: "常访问网站",
										props: {
											rows: A.domains || [],
											kind: "",
											visual: "domain",
											empty: Ki
										}
									},
									{
										id: "gaps",
										name: "浏览线索",
										props: {
											rows: ve,
											kind: "",
											visual: "none",
											empty: Ui
										}
									}
								]
							})
						]
					}),
					/* @__PURE__ */ F(t, {
						id: "peach",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ F("div", {
								className: ne,
								children: [
									/* @__PURE__ */ P($, {
										accent: 0,
										icon: le,
										term: "Peach 看过",
										figure: Number(O.peach_items || 0).toLocaleString(),
										detail: Le(O.peach_seconds || 0)
									}),
									/* @__PURE__ */ P($, {
										accent: 1,
										icon: de,
										term: "喜欢",
										figure: Number(O.liked || 0).toLocaleString()
									}),
									/* @__PURE__ */ P($, {
										accent: 2,
										icon: pe,
										term: "不合口味",
										figure: Number(O.disliked || 0).toLocaleString()
									}),
									/* @__PURE__ */ P($, {
										accent: 3,
										icon: Te,
										term: "有标签",
										figure: ye.toLocaleString()
									})
								]
							}),
							/* @__PURE__ */ F("section", {
								className: `${Li} md:flex-row md:gap-6`,
								"aria-label": "Peach 观看",
								children: [/* @__PURE__ */ F("div", {
									className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-72 md:pr-6 md:pb-0",
									children: [
										/* @__PURE__ */ P("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: "Peach 观看"
										}),
										/* @__PURE__ */ P("b", {
											className: "text-display-4-medium tabular-nums text-text-primary",
											children: Number(O.peach_items || 0).toLocaleString()
										}),
										/* @__PURE__ */ P("span", {
											className: "text-body-2-regular text-text-secondary",
											children: "部作品有观看或评价记录"
										})
									]
								}), /* @__PURE__ */ F("div", {
									className: "flex min-w-0 grow flex-col",
									children: [/* @__PURE__ */ P(fa, {
										term: "有标签",
										value: ye,
										rest: k.untagged || 0
									}), /* @__PURE__ */ P(fa, {
										term: "有身份",
										value: N,
										rest: k.unidentified || 0
									})]
								})]
							}),
							/* @__PURE__ */ P(oa, {
								label: "Peach 口味维度",
								onSignal: o,
								panels: [
									{
										id: "tags",
										name: "标签",
										props: {
											rows: A.peach_tags || [],
											kind: "tag",
											visual: "none",
											empty: qi
										}
									},
									{
										id: "creators",
										name: "创作者",
										props: {
											rows: A.peach_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Ji
										}
									},
									{
										id: "performers",
										name: "女优",
										props: {
											rows: A.peach_performers || [],
											kind: "performer",
											visual: "entity",
											empty: Yi
										}
									}
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ P(sa, {
				data: D,
				onSignal: o,
				navigate: s
			}),
			/* @__PURE__ */ P(ua, {
				sources: D.sources || [],
				browsers: D.browsers || [],
				window: d,
				toast: l,
				emptyActions: Oe
			})
		]
	}) });
}
function fa({ term: e, value: t, rest: n }) {
	let r = Math.max(t + n, 1);
	return /* @__PURE__ */ F("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ F("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ P("span", { children: e }), /* @__PURE__ */ F("b", {
				className: "tabular-nums",
				children: [t.toLocaleString(), /* @__PURE__ */ P("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: `${n.toLocaleString()} 项待补`
				})]
			})]
		}), /* @__PURE__ */ P(x, {
			meter: !0,
			label: `${e}：${t.toLocaleString()} / ${r.toLocaleString()}`,
			value: t,
			max: r
		})]
	});
}
export { ea as TASTE_GUIDE_KEY, da as TastePage };

//# debugId=9062bf41-21dd-4f53-b6a5-46f3f08d0837