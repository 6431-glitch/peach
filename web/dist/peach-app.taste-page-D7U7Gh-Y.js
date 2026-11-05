(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "72e68bfe-f622-4a92-ad68-e3ac9ed7f8f1", e._sentryDebugIdIdentifier = "sentry-dbid-72e68bfe-f622-4a92-ad68-e3ac9ed7f8f1");
	} catch {}
})();
import { ActivePoints as e, AnimatedItems as t, CHART_CARD as n, CHART_COLORS as r, CartesianLabelListContextProvider as i, CategoryTick as a, ChartBackground as o, ChartContainer as s, ChartHead as c, ChartLegend as l, ChartLegendContent as u, ChartTip as d, ChartTooltip as f, ChartTooltipContent as p, DefaultZIndexes as m, Dots as h, EvilBarChart as g, LabelListFromLabelProp as _, Layer as v, LoadingIndicator as y, PolarChart as b, PolarLabelContextProvider as x, PolarLabelFromLabelProp as S, RegisterGraphicalItemId as C, SetPolarGraphicalItem as ee, SetPolarLegendPayload as w, SetTooltipEntrySettings as T, Text as te, ZIndexLayer as E, adaptEventsOfChild as ne, addRadiusAxis as re, arrayTooltipSearcher as ie, categoryAxisWidth as ae, cn as oe, createSelector as D, defaultPolarChartProps as se, defaultPolarRadiusAxisProps as ce, fitLabel as le, getAxisTypeBasedOnLayout as ue, getBandSizeOfAxis as de, getClassNameFromUnknown as fe, getColorsCount as pe, getTooltipNameProp as me, getValueByDataKey as he, identity as ge, interpolate as _e, isArrayLike as ve, isCategoricalAxis as ye, isNullish as be, iteratee as xe, matchAnimationItems as Se, matchByIndex as Ce, noop as we, polarToCartesian as O, removeRadiusAxis as Te, resolveDefaultProps as Ee, selectAngleAxis as De, selectChartDataAndAlwaysIgnoreIndexes as Oe, selectChartLayout as ke, selectPolarViewBox as Ae, selectRadiusAxis as je, selectUnfilteredPolarItems as Me, svgPropertiesAndEvents as Ne, svgPropertiesNoEvents as k, svgPropertiesNoEventsFromUnknown as Pe, tone as Fe, useAnimationCallbacks as Ie, useAnimationStartSnapshot as Le, useAppDispatch as Re, useAppSelector as A, useIsPanorama as ze, usePolarChartLayout as Be } from "./peach-app.chart-tip-BGeaXdeB.js";
import { $542a13ca2fa5b484$export$5b6b19405a83ff9d as Ve, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as He, $b4f18e3395fe64d7$export$3e41faf802a29e71 as Ue, $b4f18e3395fe64d7$export$b2539bed5023c21c as We, Button as j, ButtonLink as Ge, Disclosure as Ke, E3 as qe, EmptyState as M, FLOW_LABEL_X as Je, FLOW_VIEWBOX as Ye, Gg as Xe, IDLE_POLL_MS as Ze, Input as Qe, M6 as $e, MENU_ITEM as et, MENU_ITEM_INTERACTIVE as tt, MENU_POPOVER_SURFACE as nt, MenuDialog as rt, Note as N, OV as it, Progress as at, Rf as ot, SEGMENT as st, SEGMENTED_TRACK as ct, STAT_STRIP as lt, SegmentedTabList as ut, Select$1 as dt, SelectItem as ft, StatCard as pt, TASTE_REFRESH_KEY as mt, TASTE_WINDOWS as ht, TaskProgress as gt, Wt as _t, Xt as vt, _8 as yt, __toESM as bt, aB as xt, avatarInner as St, busyProps as P, cB as Ct, cardClass as F, clsx as I, configureTasteBrowser as wt, confirmModal as Tt, cx as Et, errorMessage as L, f1 as Dt, fetchTaste as Ot, fetchTasteJob as kt, firstGrapheme as At, flowGraph as jt, flowLabel as Mt, fmtSize as Nt, g4 as Pt, historySpan as Ft, importTasteExport as It, import_jsx_runtime as R, jsx as z, jsxs as B, keepPreviousData as Lt, mM as Rt, pv as zt, queryClient as V, r2 as Bt, radarRows as Vt, rankDetail as Ht, rankShares as Ut, removeTasteSource as Wt, require_react as Gt, siteMarkUrl as Kt, startTasteRefresh as qt, statCardClass as Jt, tasteDate as Yt, tasteDimensions as Xt, tasteHours as Zt, tasteKey as H, tasteRefetchInterval as Qt, tasteTime as $t, topScores as en, uo as tn, useBackgroundJob as nn, useMutation as rn, useQuery as an } from "./peach-app.js";
import { Page as on } from "./peach-app.page-CW3QRN2N.js";
import { LEGACY_AVATAR_IMG as sn } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { ActivityHeat as cn, BAR_DOMAIN as ln, ExpandableRanking as un, PolarAngleAxis as dn, Polygon as fn, barLabel as pn, selectPolarAxisScale as mn, selectPolarAxisTicks as U } from "./peach-app.expandable-ranking-n68THy7Y.js";
import { BrowserIcon as hn } from "./peach-app.browser-icon-0SscXvQB.js";
var gn = D([(e, t) => U(e, "angleAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), _n = D([(e, t) => U(e, "radiusAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), W = /* @__PURE__ */ bt(Gt()), vn = [
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
function yn(e, t) {
	if (e == null) return {};
	var n, r, i = bn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function bn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function G() {
	return G = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, G.apply(null, arguments);
}
function xn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Sn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? xn(Object(n), !0).forEach(function(t) {
			Cn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Cn(e, t, n) {
	return (t = wn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function wn(e) {
	var t = Tn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Tn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var En = (e, t, n, r) => {
	var i = "";
	return r.forEach((r, a) => {
		var o = O(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, Dn = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = Sn({}, k(e));
	return /*#__PURE__*/ W.createElement("g", { className: "recharts-polar-grid-angle" }, a.map((e) => {
		var a = O(t, n, r, e), o = O(t, n, i, e);
		return /*#__PURE__*/ W.createElement("line", G({ key: `line-${e}` }, s, {
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, On = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = Sn({}, k(e));
	return /*#__PURE__*/ W.createElement("circle", G({}, i, {
		className: I("recharts-polar-grid-concentric-circle", e.className),
		cx: t,
		cy: n,
		r
	}));
}, kn = (e) => {
	var t = e.radius, n = Sn({}, k(e));
	return /*#__PURE__*/ W.createElement("path", G({}, n, {
		className: I("recharts-polar-grid-concentric-polygon", e.className),
		d: En(t, e.cx, e.cy, e.polarAngles)
	}));
}, An = (e) => {
	var t = e.polarRadius, n = e.gridType;
	if (!t || !t.length) return null;
	var r = Math.max(...t), i = e.fill && e.fill !== "none";
	return /*#__PURE__*/ W.createElement("g", { className: "recharts-polar-grid-concentric" }, i && n === "circle" && /*#__PURE__*/ W.createElement(On, G({}, e, { radius: r })), i && n !== "circle" && /*#__PURE__*/ W.createElement(kn, G({}, e, { radius: r })), t.map((t, r) => {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ W.createElement(On, G({ key: i }, e, {
			fill: "none",
			radius: t
		})) : /*#__PURE__*/ W.createElement(kn, G({ key: i }, e, {
			fill: "none",
			radius: t
		}));
	}));
}, jn = {
	angleAxisId: 0,
	radiusAxisId: 0,
	gridType: "polygon",
	radialLines: !0,
	zIndex: m.grid,
	stroke: "#ccc",
	strokeWidth: 1,
	fill: "none"
}, Mn = (e) => {
	var t = Ee(e, jn), n = t.gridType, r = t.radialLines, i = t.angleAxisId, a = t.radiusAxisId, o = t.cx, s = t.cy, c = t.innerRadius, l = t.outerRadius, u = t.polarAngles, d = t.polarRadius, f = t.zIndex, p = yn(t, vn), m = A(Ae), h = A((e) => gn(e, i)), g = A((e) => _n(e, a)), _ = Array.isArray(u) ? u : h, v = Array.isArray(d) ? d : g;
	if (_ == null || v == null) return null;
	var y = Sn({
		cx: m?.cx ?? o ?? 0,
		cy: m?.cy ?? s ?? 0,
		innerRadius: m?.innerRadius ?? c ?? 0,
		outerRadius: m?.outerRadius ?? l ?? 0,
		polarAngles: _,
		polarRadius: v,
		zIndex: f
	}, p);
	return y.outerRadius <= 0 ? null : /*#__PURE__*/ W.createElement(E, { zIndex: y.zIndex }, /*#__PURE__*/ W.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ W.createElement(An, G({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	})), /*#__PURE__*/ W.createElement(Dn, G({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	}))));
};
Mn.displayName = "PolarGrid";
// node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function Nn(e) {
	return Array.isArray(e) ? e : Array.from(e);
}
// node_modules/es-toolkit/dist/compat/math/maxBy.mjs
function Pn(e, t = ge) {
	if (e == null) return;
	let n = Nn(e);
	if (n.length === 0) return;
	let r = xe(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o > a) && (a = o, i = t);
	}
	return i;
}
// node_modules/es-toolkit/dist/compat/math/minBy.mjs
function Fn(e, t = ge) {
	if (e == null) return;
	let n = Nn(e);
	if (n.length === 0) return;
	let r = xe(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o < a) && (a = o, i = t);
	}
	return i;
}
// node_modules/recharts/es6/polar/PolarRadiusAxis.js
var In = ["type"], Ln = [
	"cx",
	"cy",
	"angle",
	"axisLine"
], Rn = [
	"angle",
	"tickFormatter",
	"stroke",
	"tick"
];
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function zn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? zn(Object(n), !0).forEach(function(t) {
			Bn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Bn(e, t, n) {
	return (t = Vn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Vn(e) {
	var t = Hn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Hn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Un(e, t) {
	if (e == null) return {};
	var n, r, i = Wn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Wn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Gn = "radiusAxis";
function Kn(e) {
	var t = Re(), n = Be(), r = (0, W.useMemo)(() => {
		var t = e.type, r = Un(e, In), i = ue(n, "radiusAxis", t);
		if (i != null) return q(q({}, r), {}, { type: i });
	}, [e, n]);
	return (0, W.useEffect)(() => r == null ? we : (t(re(r)), () => {
		t(Te(r));
	}), [t, r]), null;
}
var qn = (e, t, n, r) => {
	var i = e.coordinate;
	return O(n, r, i, t);
}, Jn = (e) => {
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
}, Yn = (e, t, n, r) => {
	var i = Pn(r, (e) => e.coordinate || 0);
	return {
		cx: t,
		cy: n,
		startAngle: e,
		endAngle: e,
		innerRadius: Fn(r, (e) => e.coordinate || 0)?.coordinate || 0,
		outerRadius: i?.coordinate || 0,
		clockWise: !1
	};
}, Xn = (e, t) => {
	var n = e.cx, r = e.cy, i = e.angle, a = e.axisLine, o = Un(e, Ln), s = t.reduce((e, t) => [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)], [Infinity, -Infinity]), c = O(n, r, s[0], i), l = O(n, r, s[1], i), u = q(q(q({}, k(o)), {}, { fill: "none" }, k(a)), {}, {
		x1: c.x,
		y1: c.y,
		x2: l.x,
		y2: l.y
	});
	return /*#__PURE__*/ W.createElement("line", K({ className: "recharts-polar-radius-axis-line" }, u));
}, Zn = (e, t, n) => /*#__PURE__*/ W.isValidElement(e) ? /*#__PURE__*/ W.cloneElement(e, t) : typeof e == "function" ? e(t) : /*#__PURE__*/ W.createElement(te, K({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n), Qn = (e, t) => {
	var n = e.angle, r = e.tickFormatter, i = e.stroke, a = e.tick, o = Un(e, Rn), s = Jn(e.orientation), c = k(o), l = Pe(a), u = t.map((t, o) => {
		var u = qn(t, e.angle, e.cx, e.cy), d = q(q(q(q({
			textAnchor: s,
			transform: `rotate(${90 - n}, ${u.x}, ${u.y})`
		}, c), {}, {
			stroke: "none",
			fill: i
		}, l), {}, { index: o }, u), {}, { payload: t });
		return /*#__PURE__*/ W.createElement(v, K({
			className: I("recharts-polar-radius-axis-tick", fe(a)),
			key: `tick-${t.coordinate}`
		}, ne(e, t, o)), Zn(a, d, r ? r(t.value, o) : t.value));
	});
	return /*#__PURE__*/ W.createElement(v, { className: "recharts-polar-radius-axis-ticks" }, u);
}, $n = (e) => {
	var t = e.radiusAxisId, n = A(Ae), r = A((e) => mn(e, "radiusAxis", t)), i = A((e) => U(e, "radiusAxis", t, !1));
	if (n == null || !i || !i.length || r == null) return null;
	var a = q(q({}, e), {}, { scale: r }, n), o = a.tick, s = a.axisLine;
	return /*#__PURE__*/ W.createElement(E, { zIndex: a.zIndex }, /*#__PURE__*/ W.createElement(v, { className: I("recharts-polar-radius-axis", Gn, a.className) }, s && Xn(a, i), o && Qn(a, i), /*#__PURE__*/ W.createElement(x, Yn(a.angle, a.cx, a.cy, i), /*#__PURE__*/ W.createElement(S, { label: a.label }), a.children)));
};
function er(e) {
	var t = Ee(e, ce);
	return /*#__PURE__*/ W.createElement(W.Fragment, null, /*#__PURE__*/ W.createElement(Kn, {
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
	}), /*#__PURE__*/ W.createElement($n, t));
}
er.displayName = "PolarRadiusAxis";
// node_modules/es-toolkit/dist/array/last.mjs
function tr(e) {
	return e[e.length - 1];
}
// node_modules/es-toolkit/dist/compat/array/last.mjs
function nr(e) {
	if (ve(e) && e.length !== 0) return tr(Nn(e));
}
// node_modules/recharts/es6/state/selectors/radarSelectors.js
function rr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ir(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? rr(Object(n), !0).forEach(function(t) {
			ar(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ar(e, t, n) {
	return (t = or(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function or(e) {
	var t = sr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function sr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var cr = (e, t) => mn(e, "radiusAxis", t), lr = D([cr], (e) => {
	if (e != null) return { scale: e };
}), ur = D([je, cr], (e, t) => {
	if (e != null && t != null) return ir(ir({}, e), {}, { scale: t });
}), dr = (e, t, n, r) => U(e, "radiusAxis", t, r), fr = (e, t, n) => De(e, n), pr = (e, t, n) => mn(e, "angleAxis", n), mr = D([fr, pr], (e, t) => {
	if (e != null && t != null) return ir(ir({}, e), {}, { scale: t });
}), hr = (e, t, n, r) => U(e, "angleAxis", n, r), gr = D([
	fr,
	pr,
	Ae
], (e, t, n) => {
	if (n != null && t != null) return {
		scale: t,
		type: e.type,
		dataKey: e.dataKey,
		cx: n.cx,
		cy: n.cy
	};
}), _r = (e, t, n, r, i) => i, vr = D([
	ke,
	ur,
	dr,
	mr,
	hr
], (e, t, n, r, i) => ye(e, "radiusAxis") ? de(t, n, !1) : de(r, i, !1)), yr = D([Me, _r], (e, t) => {
	if (e != null) return e.find((e) => e.type === "radar" && t === e.id)?.dataKey;
}), br = D([
	lr,
	gr,
	Oe,
	yr,
	vr
], (e, t, n, r, i) => {
	var a = n.chartData, o = n.dataStartIndex, s = n.dataEndIndex;
	if (e != null && t != null && a != null && i != null && r != null) return Mr({
		radiusAxis: e,
		angleAxis: t,
		displayedData: a.slice(o, s + 1),
		dataKey: r,
		bandSize: i
	});
}), xr = ["id"];
function J() {
	return J = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, J.apply(null, arguments);
}
function Sr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Y(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Sr(Object(n), !0).forEach(function(t) {
			Cr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Cr(e, t, n) {
	return (t = wr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function wr(e) {
	var t = Tr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Tr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Er(e, t) {
	if (e == null) return {};
	var n, r, i = Dr(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Dr(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Or(e, t) {
	return e && e !== "none" ? e : t;
}
var kr = (e) => {
	var t = e.dataKey, n = e.name, r = e.stroke, i = e.fill, a = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: a,
		color: Or(r, i),
		value: me(n, t),
		payload: e
	}];
}, Ar = /*#__PURE__*/ W.memo((e) => {
	var t = e.dataKey, n = e.stroke, r = e.strokeWidth, i = e.fill, a = e.name, o = e.hide, s = e.tooltipType, c = e.id, l = {
		dataDefinedOnItem: void 0,
		getPosition: we,
		settings: {
			stroke: n,
			strokeWidth: r,
			fill: i,
			nameKey: void 0,
			dataKey: t,
			name: me(a, t),
			hide: o,
			type: s,
			color: Or(n, i),
			unit: "",
			graphicalItemId: c
		}
	};
	return /*#__PURE__*/ W.createElement(T, { tooltipEntrySettings: l });
});
function jr(e) {
	var t = e.points, n = e.props, r = n.dot, i = n.dataKey;
	n.id;
	var a = Er(n, xr), o = k(a);
	return /*#__PURE__*/ W.createElement(h, {
		points: t,
		dot: r,
		className: "recharts-radar-dots",
		dotClassName: "recharts-radar-dot",
		dataKey: i,
		baseProps: o
	});
}
function Mr(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach((e, r) => {
		var a = he(e, n.dataKey, r), d = he(e, i), f = (n.scale.map(a) ?? 0) + u, p = Array.isArray(d) ? nr(d) : d, m = be(p) ? 0 : t.scale.map(p) ?? 0;
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push(Y(Y({}, O(o, s, m, f)), {}, {
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
			var n = e.value[0], r = be(n) ? 0 : t.scale.map(n) ?? 0;
			d.push(Y(Y({}, e), {}, { radius: r }, O(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
}
function Nr(e) {
	var t = e.showLabels, n = e.points, r = e.children, a = n.map((e) => {
		var t = {
			x: e.x,
			y: e.y,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return Y(Y({}, t), {}, {
			value: e.value ?? "",
			payload: e.payload,
			parentViewBox: void 0,
			viewBox: t,
			fill: void 0
		});
	});
	return /*#__PURE__*/ W.createElement(i, { value: t ? a : void 0 }, r);
}
function Pr(e) {
	var t = e.points, n = e.baseLinePoints, r = e.props;
	if (t == null) return null;
	var i = r.shape, a = r.isRange, o = r.connectNulls, s = /*#__PURE__*/ W.isValidElement(i) ? /*#__PURE__*/ W.cloneElement(i, Y(Y({}, r), {}, { points: t })) : typeof i == "function" ? i(Y(Y({}, r), {}, { points: t })) : /*#__PURE__*/ W.createElement(fn, J({}, Ne(r), {
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
	return /*#__PURE__*/ W.createElement(v, { className: "recharts-radar-polygon" }, s, /*#__PURE__*/ W.createElement(jr, {
		props: r,
		points: t
	}));
}
var Fr = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [Y(Y({}, e.next), {}, {
	x: _e(e.prev.x, e.next.x, t),
	y: _e(e.prev.y, e.next.y, t)
})] : [Y(Y({}, e.next), {}, {
	x: _e(e.next.cx, e.next.x, t),
	y: _e(e.next.cy, e.next.y, t)
})]);
function Ir(e) {
	var n = e.props, r = e.previousPointsRef, i = e.previousBaseLinePointsRef, a = n.points, o = n.baseLinePoints, s = n.isAnimationActive, c = n.animationBegin, l = n.animationDuration, u = n.animationEasing, d = n.animationMatchBy, f = n.animationInterpolateFn, p = n.onAnimationStart, m = n.onAnimationEnd, h = Le(n, i), g = h.startValue, v = Se(g ?? null, o, d), y = Ie(p, m), b = y.isAnimating, x = y.handleAnimationStart, S = y.handleAnimationEnd, C = Be();
	return C == null ? null : /*#__PURE__*/ W.createElement(Nr, {
		showLabels: !b,
		points: a
	}, /*#__PURE__*/ W.createElement(t, {
		animationInput: n,
		animationIdPrefix: "recharts-radar-",
		items: a,
		previousItemsRef: r,
		isAnimationActive: s,
		animationBegin: c,
		animationDuration: l,
		animationEasing: u,
		onAnimationStart: x,
		onAnimationEnd: S,
		animationInterpolateFn: f,
		animationMatchBy: d,
		layout: C
	}, (e, t) => {
		var r = t === 1 ? o : f(v, t, C);
		return h.syncStepValue(r, t), /*#__PURE__*/ W.createElement(Pr, {
			points: e,
			baseLinePoints: r,
			props: n
		});
	}), /*#__PURE__*/ W.createElement(_, { label: n.label }), n.children);
}
function Lr(e) {
	var t = (0, W.useRef)(void 0), n = (0, W.useRef)(void 0);
	return /*#__PURE__*/ W.createElement(Ir, {
		props: e,
		previousPointsRef: t,
		previousBaseLinePointsRef: n
	});
}
var Rr = {
	activeDot: !0,
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: Ce,
	animationInterpolateFn: Fr,
	dot: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	radiusAxisId: 0,
	zIndex: m.area
};
function zr(t) {
	var n = t.hide, r = t.className, i = t.points;
	if (n) return null;
	var a = I("recharts-radar", r);
	return /*#__PURE__*/ W.createElement(E, { zIndex: t.zIndex }, /*#__PURE__*/ W.createElement(v, { className: a }, /*#__PURE__*/ W.createElement(Lr, t)), /*#__PURE__*/ W.createElement(e, {
		points: i,
		mainColor: Or(t.stroke, t.fill),
		itemDataKey: t.dataKey,
		activeDot: t.activeDot
	}));
}
function Br(e) {
	var t = ze(), n = A((n) => br(n, e.radiusAxisId, e.angleAxisId, t, e.id));
	return n?.points == null ? null : /*#__PURE__*/ W.createElement(zr, J({}, e, {
		points: n?.points,
		baseLinePoints: n?.baseLinePoints,
		isRange: n?.isRange
	}));
}
function Vr(e) {
	var t = Ee(e, Rr);
	return /*#__PURE__*/ W.createElement(C, {
		id: t.id,
		type: "radar"
	}, (e) => /*#__PURE__*/ W.createElement(W.Fragment, null, /*#__PURE__*/ W.createElement(ee, {
		type: "radar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide,
		angleAxisId: t.angleAxisId,
		radiusAxisId: t.radiusAxisId
	}), /*#__PURE__*/ W.createElement(w, { legendPayload: kr(t) }), /*#__PURE__*/ W.createElement(Ar, {
		dataKey: t.dataKey,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ W.createElement(Br, J({}, t, { id: e }))));
}
Vr.displayName = "Radar";
// node_modules/recharts/es6/chart/RadarChart.js
function Hr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ur(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Hr(Object(n), !0).forEach(function(t) {
			Wr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Wr(e, t, n) {
	return (t = Gr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Gr(e) {
	var t = Kr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Kr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var qr = ["axis"], Jr = Ur(Ur({}, se), {}, {
	layout: "centric",
	startAngle: 90,
	endAngle: -270
}), Yr = /*#__PURE__*/ (0, W.forwardRef)((e, t) => {
	var n = Ee(e, Jr);
	return /*#__PURE__*/ W.createElement(b, {
		chartName: "RadarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: qr,
		tooltipPayloadSearcher: ie,
		categoricalChartProps: n,
		ref: t
	});
}), Xr = W.memo(function({ cx: e, cy: t, dataKey: n, chartId: r, className: i, fillOpacity: a = 1, type: o = "default", maskId: s }) {
	let c = W.useId().replace(/:/g, ""), l = `url(#${r}-colors-${String(n)})`;
	if (e === void 0 || t === void 0) return null;
	switch (o) {
		case "border": return /* @__PURE__ */ z(Qr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		case "colored-border": return /* @__PURE__ */ z($r, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		default: return /* @__PURE__ */ z(Zr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
	}
}), Zr = W.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ B("g", {
	className: a,
	mask: o ? `url(#${o})` : void 0,
	children: [/* @__PURE__ */ z("defs", { children: /* @__PURE__ */ z("clipPath", {
		id: `dot-clip-${n}`,
		children: /* @__PURE__ */ z("circle", {
			cx: e,
			cy: t,
			r: 3
		})
	}) }), /* @__PURE__ */ z("rect", {
		x: "0",
		y: t - 3,
		width: "100%",
		height: 6,
		fill: i,
		fillOpacity: r,
		clipPath: `url(#dot-clip-${n})`
	})]
}));
Zr.displayName = "DefaultDot";
var Qr = W.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ B("g", {
	className: oe(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ z("defs", { children: /* @__PURE__ */ z("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ z("circle", {
				cx: e,
				cy: t,
				r: 6
			})
		}) }),
		/* @__PURE__ */ z("circle", {
			cx: e,
			cy: t,
			r: 6,
			fill: "currentColor"
		}),
		/* @__PURE__ */ z("rect", {
			x: "0",
			y: t - (6 - 5 / 2),
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-inner-${n})`
		}),
		/* @__PURE__ */ z("defs", { children: /* @__PURE__ */ z("clipPath", {
			id: `dot-clip-inner-${n}`,
			children: /* @__PURE__ */ z("circle", {
				cx: e,
				cy: t,
				r: 6 - 5 / 2
			})
		}) })
	]
}));
Qr.displayName = "PrimaryBorderDot";
var $r = W.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ B("g", {
	className: oe(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ z("defs", { children: /* @__PURE__ */ z("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ z("circle", {
				cx: e,
				cy: t,
				r: 3.5
			})
		}) }),
		/* @__PURE__ */ z("rect", {
			x: "0",
			y: t - 3 - 1 / 2,
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-${n})`
		}),
		/* @__PURE__ */ z("circle", {
			cx: e,
			cy: t,
			r: 3 - 1 / 2,
			fill: "currentColor"
		})
	]
}));
$r.displayName = "ColoredBorderDot";
// src/react/evilcharts/registry/charts/recharts-radar-chart.tsx
var ei = 1, ti = .3, ni = 6, ri = 1500, ii = "value", ai = (0, W.createContext)(null);
function X() {
	let e = (0, W.use)(ai);
	if (!e) throw Error("Radar chart parts (<Radar />, <PolarAngleAxis />, …) must be used within <EvilRadarChart />");
	return e;
}
function Z({ config: e, data: t, children: n, className: r, chartProps: i, backgroundVariant: a, defaultSelectedDataKey: c = null, onSelectionChange: l, isLoading: u = !1, loadingPoints: d }) {
	let f = (0, W.useId)().replace(/:/g, ""), [p, m] = (0, W.useState)(c), h = xi(u, d), g = (0, W.useCallback)((e) => {
		m(e), l?.(e);
	}, [l]), _ = (0, W.useMemo)(() => ({
		config: e,
		isLoading: u,
		selectedDataKey: p,
		selectDataKey: g
	}), [
		e,
		u,
		p,
		g
	]);
	return /* @__PURE__ */ z(ai, {
		value: _,
		children: /* @__PURE__ */ B(s, {
			className: r,
			config: e,
			children: [/* @__PURE__ */ z(y, { isLoading: u }), /* @__PURE__ */ B(Yr, {
				id: f,
				data: u ? h : t,
				...i,
				children: [
					a && /* @__PURE__ */ z(o, { variant: a }),
					n,
					u && /* @__PURE__ */ z(Si, {})
				]
			})]
		})
	});
}
function oi({ dataKey: e, variant: t = "filled", fillOpacity: n = ti, isGlowing: r = !1, isClickable: i = !1, children: a, radarProps: o }) {
	let { config: s, isLoading: c, selectedDataKey: l, selectDataKey: u } = X(), d = (0, W.useId)().replace(/:/g, "");
	if (c) return null;
	let f = i && l !== null && l !== e, p = {
		stroke: f ? .2 : 1,
		fill: f ? .1 : 1,
		dot: f ? .2 : 1
	}, m = t === "filled", { dot: h, activeDot: g } = mi(a, d, e, p.dot);
	return /* @__PURE__ */ B(R.Fragment, { children: [/* @__PURE__ */ z(Vr, {
		dataKey: e,
		stroke: `url(#${d}-radar-stroke-${e})`,
		strokeOpacity: p.stroke,
		strokeWidth: ei,
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
	}), /* @__PURE__ */ B("defs", { children: [
		/* @__PURE__ */ z(gi, {
			id: d,
			dataKey: e,
			config: s
		}),
		/* @__PURE__ */ z(_i, {
			id: d,
			dataKey: e,
			config: s
		}),
		m && /* @__PURE__ */ z(vi, {
			id: d,
			dataKey: e,
			config: s
		}),
		r && /* @__PURE__ */ z(yi, {
			id: d,
			dataKey: e
		})
	] })] });
}
var si = () => null, ci = () => null;
function li({ gridType: e = "polygon", stroke: t = "currentColor", strokeOpacity: n = .2, strokeDasharray: r = "3 4", ...i }) {
	return /* @__PURE__ */ z(Mn, {
		gridType: e,
		stroke: t,
		strokeOpacity: n,
		strokeDasharray: r,
		...i
	});
}
function ui({ tick: e = {
	fill: "currentColor",
	fontSize: 12
}, tickLine: t = !1, ...n }) {
	let { isLoading: r } = X();
	return r ? null : /* @__PURE__ */ z(dn, {
		tick: e,
		tickLine: t,
		...n
	});
}
function di({ tick: e = {
	fill: "currentColor",
	fontSize: 10
}, tickLine: t = !1, axisLine: n = !1, ...r }) {
	let { isLoading: i } = X();
	return i ? null : /* @__PURE__ */ z(er, {
		tick: e,
		tickLine: t,
		axisLine: n,
		...r
	});
}
function fi({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, selectedDataKey: i } = X();
	return r ? null : /* @__PURE__ */ z(f, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ z(p, {
			selected: i,
			roundness: t,
			variant: e
		})
	});
}
function pi({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { isLoading: i, selectedDataKey: a, selectDataKey: o } = X();
	return i ? null : /* @__PURE__ */ z(l, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ z(u, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			variant: e
		})
	});
}
var mi = (e, t, n, r) => {
	let i = !1, a = !1;
	return W.Children.forEach(e, (e) => {
		if ((0, W.isValidElement)(e)) {
			if (e.type === si) {
				let { variant: a } = e.props;
				i = /* @__PURE__ */ z(Xr, {
					type: a,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
			if (e.type === ci) {
				let { variant: i } = e.props;
				a = /* @__PURE__ */ z(Xr, {
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
}, hi = ({ dataKey: e, colorsCount: t, opacities: n }) => t === 1 ? /* @__PURE__ */ B(R.Fragment, { children: [/* @__PURE__ */ z("stop", {
	offset: "0%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[0]
}), /* @__PURE__ */ z("stop", {
	offset: "100%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[n.length - 1]
})] }) : /* @__PURE__ */ z(R.Fragment, { children: Array.from({ length: t }, (r, i) => {
	let a = `${i / (t - 1) * 100}%`;
	return /* @__PURE__ */ z("stop", {
		offset: a,
		stopColor: `var(--color-${e}-${i}, var(--color-${e}-0))`,
		stopOpacity: n?.[i]
	}, a);
}) }), gi = ({ id: e, dataKey: t, config: n }) => {
	let r = pe(n[t] ?? {});
	return /* @__PURE__ */ z("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "0",
		children: /* @__PURE__ */ z(hi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, _i = ({ id: e, dataKey: t, config: n }) => {
	let r = pe(n[t] ?? {});
	return /* @__PURE__ */ z("linearGradient", {
		id: `${e}-radar-stroke-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: /* @__PURE__ */ z(hi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, vi = ({ id: e, dataKey: t, config: n }) => {
	let r = pe(n[t] ?? {}), i = r === 1 ? [.8, .3] : Array.from({ length: r }, (e, t) => t === 0 ? .8 : .3);
	return /* @__PURE__ */ z("radialGradient", {
		id: `${e}-radar-fill-${t}`,
		cx: "50%",
		cy: "50%",
		r: "50%",
		children: /* @__PURE__ */ z(hi, {
			dataKey: t,
			colorsCount: r,
			opacities: i
		})
	});
}, yi = ({ id: e, dataKey: t }) => /* @__PURE__ */ B("filter", {
	id: `${e}-radar-glow-${t}`,
	x: "-50%",
	y: "-50%",
	width: "200%",
	height: "200%",
	children: [
		/* @__PURE__ */ z("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "4",
			result: "blur"
		}),
		/* @__PURE__ */ z("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0",
			result: "glow"
		}),
		/* @__PURE__ */ B("feMerge", { children: [/* @__PURE__ */ z("feMergeNode", { in: "glow" }), /* @__PURE__ */ z("feMergeNode", { in: "SourceGraphic" })] })
	]
}), bi = (e) => [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
].slice(0, e).map((e) => ({
	skill: e,
	[ii]: 30 + Math.random() * 70
}));
function xi(e, t = ni) {
	let [n, r] = (0, W.useState)(0);
	return (0, W.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			r((e) => e + 1);
		}, ri);
		return () => clearInterval(t);
	}, [e]), (0, W.useMemo)(() => bi(t), [t, n]);
}
var Si = () => /* @__PURE__ */ z(Vr, {
	dataKey: ii,
	stroke: "currentColor",
	strokeOpacity: .3,
	strokeWidth: 2,
	fill: "currentColor",
	fillOpacity: .1,
	dot: !1,
	isAnimationActive: !0,
	animationDuration: ri,
	animationEasing: "ease-in-out"
});
Z.Radar = oi, Z.Dot = si, Z.ActiveDot = ci, Z.PolarGrid = li, Z.PolarAngleAxis = ui, Z.PolarRadiusAxis = di, Z.Tooltip = fi, Z.Legend = pi;
// src/react/taste/charts.tsx
function Ci(e) {
	let { x: t = 0, cx: n, textAnchor: r, payload: i, ...a } = e, o = String(i?.value ?? ""), s = typeof n == "number" ? n * 2 : 0, c = s ? r === "start" ? s - t : r === "end" ? t : 2 * Math.min(t, s - t) : 56;
	return /* @__PURE__ */ B("g", { children: [/* @__PURE__ */ z("title", { children: o }), /* @__PURE__ */ z(te, {
		...a,
		x: t,
		textAnchor: r,
		fill: "currentColor",
		fontSize: 12,
		children: le(o, c - 4)
	})] });
}
var wi = [
	"stroke-chart-1",
	"stroke-chart-2",
	"stroke-chart-3",
	"stroke-chart-4",
	"stroke-chart-5",
	"stroke-chart-6"
], Ti = [
	"fill-chart-1",
	"fill-chart-2",
	"fill-chart-3",
	"fill-chart-4",
	"fill-chart-5",
	"fill-chart-6"
], Ei = { value: {
	label: "标签出现次数",
	colors: Fe(r[3])
} }, Di = [
	"min-h-24",
	"min-h-24",
	"min-h-24",
	"min-h-32",
	"min-h-40",
	"min-h-48",
	"min-h-52",
	"min-h-60",
	"min-h-64"
], Oi = 26, ki = { radius: Ei.value }, Ai = (e, t) => Math.sqrt(e / t);
function ji({ rows: e, label: t }) {
	let n = Vt(e);
	if (!n.length) return null;
	let r = n[0].value, i = n.map((e) => ({
		...e,
		radius: Ai(e.value, r)
	}));
	return /* @__PURE__ */ z("div", {
		role: "img",
		"aria-label": `${t}：${i.map((e) => e.name).join("，")}`,
		children: /* @__PURE__ */ B(Z, {
			data: i,
			config: ki,
			chartProps: { outerRadius: "58%" },
			className: "aspect-auto h-70 text-text-secondary",
			children: [
				/* @__PURE__ */ z(Z.PolarGrid, {}),
				/* @__PURE__ */ z(Z.PolarAngleAxis, {
					dataKey: "name",
					tick: /* @__PURE__ */ z(Ci, {})
				}),
				/* @__PURE__ */ z(Z.PolarRadiusAxis, {
					domain: [0, 1],
					allowDecimals: !0,
					tick: !1
				}),
				/* @__PURE__ */ z(Z.Radar, { dataKey: "radius" }),
				/* @__PURE__ */ z(d, { valueKey: "value" })
			]
		})
	});
}
function Mi({ rows: e, label: t }) {
	let n = en(e, 8);
	return n.length ? /* @__PURE__ */ z("section", {
		"aria-label": t,
		className: `flex grow flex-col ${Di[n.length]}`,
		children: /* @__PURE__ */ B(g, {
			data: n,
			config: Ei,
			layout: "horizontal",
			barRadius: 4,
			chartProps: {
				maxBarSize: Oi,
				margin: {
					top: 5,
					right: 56,
					bottom: 5,
					left: 5
				}
			},
			className: "aspect-auto text-text-secondary",
			children: [
				/* @__PURE__ */ z(g.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ z(a, { along: "y" }),
					width: ae(n.map((e) => e.name))
				}),
				/* @__PURE__ */ z(g.XAxis, {
					hide: !0,
					domain: ln
				}),
				/* @__PURE__ */ z(g.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: pn("right")
					}
				}),
				/* @__PURE__ */ z(d, {})
			]
		})
	}) : null;
}
function Ni({ flows: e }) {
	let [t, r] = (0, W.useState)(null), i = jt(e);
	if (!i) return null;
	let a = t?.node ?? null, o = (e, n) => t ? a === null ? t.label === n : e.source === a || e.target === a : !0;
	return /* @__PURE__ */ B("section", {
		className: n,
		children: [
			/* @__PURE__ */ z(c, {
				title: "创作者线索来源",
				figure: (t ? t.value : i.total).toLocaleString(),
				note: t ? t.label : "条线索"
			}),
			/* @__PURE__ */ z("ol", {
				"aria-label": "来源网站与创作者线索",
				className: "flex flex-col sm:hidden",
				children: [...i.links].sort((e, t) => t.value - e.value).map((e) => /* @__PURE__ */ B("li", {
					className: "flex items-baseline justify-between gap-3 border-b border-separator-border py-2 text-body-2-regular text-text-primary last:border-b-0",
					children: [/* @__PURE__ */ z("span", {
						className: "min-w-0 wrap-anywhere",
						children: e.label
					}), /* @__PURE__ */ z("b", {
						className: "shrink-0 tabular-nums",
						children: e.value.toLocaleString()
					})]
				}, e.key))
			}),
			/* @__PURE__ */ z("div", {
				className: "min-w-0 max-sm:hidden",
				children: /* @__PURE__ */ B("svg", {
					viewBox: `0 0 ${Ye.width} ${i.height}`,
					fill: "none",
					role: "img",
					"aria-label": "来源网站与创作者线索",
					className: "block h-auto w-full",
					onPointerLeave: () => r(null),
					children: [/* @__PURE__ */ z("g", { children: i.links.map((e) => /* @__PURE__ */ z("path", {
						d: e.d,
						strokeWidth: e.width,
						tabIndex: 0,
						role: "img",
						"aria-label": `${e.label}：${e.value} 条线索`,
						fillOpacity: 0,
						strokeOpacity: o(e, e.label) ? .55 : .08,
						className: `outline-none transition-opacity ${wi[e.color]}`,
						onPointerEnter: () => r({
							value: e.value,
							label: e.label,
							node: null
						}),
						onFocus: () => r({
							value: e.value,
							label: e.label,
							node: null
						}),
						onBlur: () => r(null)
					}, e.key)) }), /* @__PURE__ */ z("g", { children: i.nodes.map((e) => /* @__PURE__ */ B("g", {
						tabIndex: 0,
						role: "img",
						"aria-label": `${e.name}：${e.value} 条线索`,
						className: "outline-none focus-visible:opacity-100",
						onPointerEnter: () => r({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onFocus: () => r({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onBlur: () => r(null),
						children: [/* @__PURE__ */ z("rect", {
							x: e.x,
							y: e.y,
							width: 10,
							height: e.height,
							rx: 5,
							className: e.side === "source" ? Ti[e.color] : "fill-text-secondary"
						}), /* @__PURE__ */ B("text", {
							x: Je[e.side],
							y: e.y + e.height / 2,
							textAnchor: e.side === "source" ? "end" : "start",
							dominantBaseline: "middle",
							className: "fill-text-secondary text-caption-1-regular",
							children: [Mt(e.name), /* @__PURE__ */ z("tspan", {
								x: Je[e.side],
								dy: 15,
								children: e.side === "source" ? e.value.toLocaleString() : `${e.share.toFixed(1)}%`
							})]
						})]
					}, e.id)) })]
				})
			}),
			/* @__PURE__ */ B("footer", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary max-sm:hidden",
				children: [/* @__PURE__ */ z("span", { children: "来源网站" }), /* @__PURE__ */ z("span", { children: "创作者 · 线索占比" })]
			})
		]
	});
}
// src/react/taste/browser-sources.tsx
var Pi = "flex min-w-0 items-center gap-3 rounded-xl bg-background-primary-default p-3";
function Fi({ browsers: e, sources: t, range: n, children: r }) {
	let [i, a] = (0, W.useState)(!1), [o, s] = (0, W.useState)(""), [c, l] = (0, W.useState)(""), u = rn({
		mutationFn: (e) => wt(e, n),
		onSuccess: (e) => {
			V.setQueryData(H(n), e.dashboard), a(!1), s(""), l("");
		}
	});
	return /* @__PURE__ */ B("section", {
		className: `${F()} flex flex-col gap-4`,
		"aria-label": "数据源",
		children: [
			/* @__PURE__ */ B("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ z("h3", {
					className: "text-title-2-medium text-text-primary",
					children: "数据源"
				}), /* @__PURE__ */ z(j, {
					variant: "secondary",
					onClick: () => a(!0),
					disabled: i,
					children: "添加浏览器"
				})]
			}),
			u.error ? /* @__PURE__ */ z(N, {
				tone: "error",
				children: L(u.error)
			}) : null,
			i ? /* @__PURE__ */ B("form", {
				className: "flex flex-col gap-3",
				onSubmit: (e) => {
					e.preventDefault(), u.isPending || u.mutate({
						operation: "add",
						name: o,
						path: c
					});
				},
				children: [
					/* @__PURE__ */ z(Qe, {
						label: "浏览器名称",
						value: o,
						onChange: s,
						maxLength: 80,
						isRequired: !0,
						isDisabled: u.isPending
					}),
					/* @__PURE__ */ z(Qe, {
						label: "资料目录或历史文件",
						value: c,
						onChange: l,
						maxLength: 1024,
						isRequired: !0,
						isDisabled: u.isPending,
						hint: "请选择运行 Peach 的电脑上的浏览器资料。"
					}),
					/* @__PURE__ */ B("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ z(j, {
							variant: "ghost",
							disabled: u.isPending,
							onClick: () => {
								a(!1), u.reset();
							},
							children: "取消"
						}), /* @__PURE__ */ z(j, {
							type: "submit",
							variant: "secondary",
							disabled: !o.trim() || !c.trim(),
							...P(u.isPending),
							children: "添加"
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ B("div", {
				className: "inline-grid w-full min-w-0 gap-2 sm:grid-cols-2",
				children: [r, e.map((e) => {
					let n = t.filter((t) => e.source_keys?.includes(t.source_key)), r = n.reduce((e, t) => e + (t.visits || 0), 0), i = n.reduce((e, t) => e + (t.bookmarks || 0), 0);
					return /* @__PURE__ */ B("div", {
						"data-taste-source": "browser",
						className: Pi,
						children: [
							/* @__PURE__ */ z("span", {
								className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
								children: /* @__PURE__ */ z(hn, { name: e.name })
							}),
							/* @__PURE__ */ B("div", {
								className: "flex min-w-0 grow flex-col gap-0.5",
								children: [
									/* @__PURE__ */ z("b", {
										className: "text-body-2-medium break-words text-text-primary",
										children: e.name
									}),
									/* @__PURE__ */ z("span", {
										className: "break-all text-caption-1-regular text-text-secondary",
										children: e.path
									}),
									/* @__PURE__ */ z("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: e.enabled ? e.available ? `历史与书签 · ${e.profiles} 个资料` : "资料目录不可用" : "已停止读取"
									}),
									n.length ? /* @__PURE__ */ B("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: [
											r.toLocaleString(),
											" 条历史 · ",
											i.toLocaleString(),
											" 枚书签"
										]
									}) : null
								]
							}),
							/* @__PURE__ */ B("span", {
								className: "flex shrink-0 gap-1",
								children: [/* @__PURE__ */ z(j, {
									variant: "secondary",
									size: "small",
									...P(u.isPending),
									iconOnly: !0,
									leadingIcon: e.enabled ? it : Xe,
									"aria-label": `${e.enabled ? "停止读取" : "启用"} ${e.name}`,
									onClick: () => {
										e.enabled ? Tt({
											title: `停止读取 ${e.name}`,
											body: "已导入的历史与书签仍用于口味分析。",
											confirmLabel: "停止读取",
											onConfirm: () => u.mutateAsync({
												operation: "disable",
												id: e.id
											})
										}) : u.mutate({
											operation: "enable",
											id: e.id
										});
									}
								}), /* @__PURE__ */ z(j, {
									variant: "secondary",
									size: "small",
									iconOnly: !0,
									leadingIcon: $e,
									...P(u.isPending),
									"aria-label": `删除 ${e.name}`,
									onClick: () => {
										Tt({
											title: `删除 ${e.name}`,
											body: "移除该浏览器的读取配置和已导入历史、书签，浏览器原文件保留。可以通过添加浏览器重新接入。",
											confirmLabel: "删除浏览器来源",
											danger: !0,
											onConfirm: () => u.mutateAsync({
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
var Ii = 10, Li = Et(et, tt, "text-body-2-medium"), Q = `${F()} flex flex-col gap-4`, Ri = "rounded-xl bg-background-primary-default p-3", zi = "读取运行 Peach 的这台电脑上的浏览历史与书签", Bi = "导入或读取浏览记录后，这里会列出记录来自哪些设备。", Vi = "馆藏中暂时没有与你浏览过的内容相符的标签。", Hi = "读取浏览记录后，这里会按类别汇总你浏览过的内容。", Ui = "这些标签出现在浏览记录中，Peach 的观看或评价记录中尚未出现这些标签", Wi = "采集浏览记录后，这里会列出浏览过的标签。", Gi = "采集浏览记录后，这里会列出浏览过的创作者。", Ki = "采集浏览记录后，这里会列出常访问的网站。", qi = "在 Peach 里播放或评价作品后，这里会列出对应的标签。", Ji = "在 Peach 里播放或评价作品后，这里会列出对应的创作者。", Yi = "在 Peach 里播放或评价作品后，这里会列出对应的女优。", Xi = "在运行 Peach 的电脑上使用浏览器：点上面的「读取浏览器记录」。", Zi = "记录在其他设备上：导出文件后，选择「导入历史文件」或「导入书签文件」。书签支持浏览器导出的 HTML 文件和 Chromium Bookmarks JSON 文件。", Qi = "需要刷新时再次读取或导入；数据源可在页面底部移除。", $i = "删除这个来源的已导入记录，原始文件保留。若浏览器仍启用，下次读取会再次导入。", ea = "peach-taste-guide-dismissed", ta = (0, W.createContext)(/* @__PURE__ */ z(Ge, {
	size: "small",
	href: "/",
	children: "浏览馆藏"
}));
function na() {
	return (0, W.useContext)(ta);
}
function $({ icon: e, term: t, figure: n, detail: r, detailTitle: i, accent: a }) {
	return /* @__PURE__ */ z("div", {
		className: Jt(),
		children: /* @__PURE__ */ z(pt, {
			label: t,
			icon: e,
			accent: a,
			figure: n,
			footer: /* @__PURE__ */ z("span", {
				className: "block min-w-0 truncate",
				title: i || r,
				children: r ?? ""
			})
		})
	});
}
function ra({ name: e, domain: t }) {
	return /* @__PURE__ */ B("span", {
		className: "relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-background-tertiary-default text-caption-1-medium text-text-secondary",
		children: [At(e).toUpperCase(), /* @__PURE__ */ z("img", {
			src: Kt({ domain: t }),
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
	return /* @__PURE__ */ z("span", {
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-medium text-text-secondary ${sn}`,
		dangerouslySetInnerHTML: { __html: e }
	});
}
function aa({ rows: e, kind: t, visual: n, empty: r, onSignal: i }) {
	if (!e.length) return /* @__PURE__ */ z(M, {
		size: "compact",
		icon: zt,
		title: "记录还不够",
		actions: /* @__PURE__ */ z(na, {}),
		children: r
	});
	let a = Ut(e);
	return /* @__PURE__ */ z(un, {
		previewCount: Ii,
		className: "inline-grid w-full gap-x-7 gap-y-2 sm:grid-cols-2",
		children: e.map((e, r) => {
			let o = !!t && !!e.peach_items, s = String(e.source_domain || ""), c = /* @__PURE__ */ B(R.Fragment, { children: [
				/* @__PURE__ */ z("svg", {
					viewBox: "0 0 100 1",
					preserveAspectRatio: "none",
					"aria-hidden": !0,
					className: "absolute inset-0 -z-10 size-full overflow-hidden rounded-lg opacity-15",
					children: /* @__PURE__ */ z("rect", {
						width: a[r],
						height: 1,
						className: "fill-chart-4"
					})
				}),
				/* @__PURE__ */ z("span", {
					className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
					children: r + 1
				}),
				n === "domain" ? /* @__PURE__ */ z(ra, {
					name: e.name,
					domain: e.name
				}) : null,
				n === "creator" && !e.entity_id && !e.has_avatar && s ? /* @__PURE__ */ z(ra, {
					name: e.name,
					domain: s
				}) : null,
				n !== "none" && n !== "domain" && (e.entity_id || e.has_avatar || !s) ? /* @__PURE__ */ z(ia, { html: St(e.name, e.entity_id ? {
					id: e.entity_id,
					has_image: !!e.has_image,
					image_version: e.image_version,
					avatar_focus: e.avatar_focus,
					avatar_stand_in: e.avatar_stand_in
				} : null, e.has_avatar ? e.representative_asset_id ?? null : null, n === "creator" ? "creator" : t || "performer") }) : null,
				/* @__PURE__ */ B("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ z("b", {
						className: "min-w-0 text-body-medium break-words text-text-primary",
						children: e.name
					}), /* @__PURE__ */ z("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: Ht(e)
					})]
				}),
				o ? /* @__PURE__ */ z(Bt, {
					"aria-hidden": !0,
					className: "size-4 shrink-0 text-text-tertiary"
				}) : null
			] }), l = "relative isolate flex min-h-11 w-full min-w-0 items-center gap-2.5 rounded-lg px-3 py-2 text-left";
			return /* @__PURE__ */ z("li", {
				className: "min-w-0",
				children: o ? /* @__PURE__ */ z("button", {
					type: "button",
					onClick: () => i(t, e.name),
					className: `${l} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: c
				}) : /* @__PURE__ */ z("div", {
					className: l,
					children: c
				})
			}, `${e.name}:${r}`);
		})
	});
}
function oa({ label: e, panels: t, onSignal: n }) {
	return /* @__PURE__ */ B(We, {
		className: `${F({ padding: "none" })} flex flex-col`,
		children: [/* @__PURE__ */ z("div", {
			className: "px-4 pt-3",
			children: /* @__PURE__ */ z(ut, {
				"aria-label": e,
				className: ct,
				children: t.map((e) => /* @__PURE__ */ z(Ue, {
					id: e.id,
					className: st,
					children: e.name
				}, e.id))
			})
		}), t.map((e) => /* @__PURE__ */ z(He, {
			id: e.id,
			className: "px-4 pt-3.5 pb-4",
			children: /* @__PURE__ */ z(aa, {
				...e.props,
				onSignal: n
			})
		}, e.id))]
	});
}
function sa({ data: e, onSignal: t, navigate: n }) {
	let r = e.analysis;
	if (!r?.headline) return null;
	let i = r.confidence || {}, a = [...(r.explore || []).map((e) => ({
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
	return /* @__PURE__ */ B("section", {
		className: Q,
		"aria-label": "口味总结",
		children: [
			/* @__PURE__ */ B("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ z("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "口味总结"
					}),
					/* @__PURE__ */ z("p", {
						className: "max-w-prose text-title-2-regular wrap-anywhere text-text-primary",
						children: r.headline
					}),
					/* @__PURE__ */ B("p", {
						className: "flex flex-wrap items-center gap-2 text-body-2-regular text-text-secondary",
						children: [/* @__PURE__ */ z("i", {
							"aria-hidden": !0,
							className: `size-2 shrink-0 rounded-full ${i.level === "high" ? "bg-status-lime-text" : i.level === "medium" ? "bg-status-yellow-text" : "bg-text-tertiary"}`
						}), /* @__PURE__ */ z("span", {
							className: "min-w-0 wrap-anywhere",
							children: i.label || "仍在学习"
						})]
					})
				]
			}),
			r.points?.length ? /* @__PURE__ */ z("div", {
				className: "inline-grid w-full gap-3 sm:grid-cols-2",
				children: r.points.map((e) => /* @__PURE__ */ B("div", {
					className: `flex min-w-0 flex-col gap-1 ${Ri}`,
					children: [/* @__PURE__ */ z("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: e.label
					}), /* @__PURE__ */ z("b", {
						className: "text-body-2-medium break-words text-text-primary",
						children: e.text
					})]
				}, e.label))
			}) : null,
			a.length ? /* @__PURE__ */ z("div", {
				className: "flex flex-col gap-2",
				children: a.map((e) => /* @__PURE__ */ B("button", {
					type: "button",
					onClick: e.act,
					className: `flex w-full min-w-0 cursor-pointer items-center gap-3 ${Ri} text-left outline-none hover:bg-background-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: [/* @__PURE__ */ B("span", {
						className: "flex min-w-0 grow flex-col gap-1",
						children: [/* @__PURE__ */ z("b", {
							className: "text-body-2-medium wrap-anywhere text-text-primary",
							children: e.title
						}), /* @__PURE__ */ z("small", {
							className: "text-caption-1-regular wrap-anywhere text-text-secondary",
							children: e.detail
						})]
					}), /* @__PURE__ */ z(Bt, {
						"aria-hidden": !0,
						className: "size-4 shrink-0 text-text-tertiary"
					})]
				}, e.key))
			}) : /* @__PURE__ */ z(M, {
				size: "compact",
				icon: zt,
				title: "还没有可探索的入口",
				actions: /* @__PURE__ */ z(Ge, {
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
	let [n, r] = (0, W.useState)(() => {
		try {
			return localStorage.getItem(ea) === "1";
		} catch {
			return !1;
		}
	});
	return t || n ? null : /* @__PURE__ */ z("div", {
		className: F({
			padding: "none",
			className: "p-4"
		}),
		children: /* @__PURE__ */ B(Ke, {
			summary: "浏览器历史记录导入指南",
			defaultOpen: e,
			children: [
				/* @__PURE__ */ z("p", {
					className: "text-body-2-regular text-text-secondary",
					children: Xi
				}),
				/* @__PURE__ */ z("p", {
					className: "text-body-2-regular text-text-secondary",
					children: Zi
				}),
				/* @__PURE__ */ B("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [/* @__PURE__ */ B("li", { children: [
						"Chrome：在 ",
						/* @__PURE__ */ B("a", {
							href: "https://takeout.google.com/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-text-primary underline-offset-4 hover:underline",
							children: ["Google Takeout", /* @__PURE__ */ z(_t, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})]
						}),
						" ",
						"选择 Chrome 历史记录，下载 ZIP 后直接导入。"
					] }), /* @__PURE__ */ B("li", { children: [
						"其他浏览器：用 ",
						/* @__PURE__ */ B("a", {
							href: "https://github.com/purarue/browserexport",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-text-primary underline-offset-4 hover:underline",
							children: ["browserexport", /* @__PURE__ */ z(_t, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})]
						}),
						" ",
						"导出历史记录，再导入导出文件。"
					] })]
				}),
				/* @__PURE__ */ z("p", {
					className: "text-body-2-regular text-text-secondary",
					children: Qi
				}),
				/* @__PURE__ */ z("span", {
					className: "self-start",
					children: /* @__PURE__ */ z(j, {
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
function la({ busy: e, onRefresh: t, onImport: n, onImportBookmarks: r }) {
	let i = (0, W.useRef)(null), [a, o] = (0, W.useState)(!1), s = (e) => {
		o(!1), e();
	};
	return /* @__PURE__ */ B(R.Fragment, { children: [/* @__PURE__ */ B("span", {
		"data-guide-target": "history-import",
		"data-button-group": !0,
		"data-split-button": !0,
		"data-variant": "primary",
		children: [/* @__PURE__ */ z(j, {
			leadingIcon: qe,
			title: zi,
			onClick: t,
			...P(e),
			children: "读取浏览器记录"
		}), /* @__PURE__ */ z(j, {
			ref: i,
			iconOnly: !0,
			leadingIcon: Dt,
			"aria-label": "更多取得浏览记录的方式",
			"aria-haspopup": "dialog",
			"aria-expanded": a,
			...P(e),
			onClick: () => {
				e || o(!0);
			}
		})]
	}), /* @__PURE__ */ z(Ve, {
		triggerRef: i,
		isOpen: a,
		onOpenChange: o,
		placement: "bottom end",
		offset: 4,
		className: nt,
		children: /* @__PURE__ */ B(rt, {
			"aria-label": "更多取得浏览记录的方式",
			className: "flex w-52 flex-col gap-1 outline-none",
			children: [
				/* @__PURE__ */ B("button", {
					type: "button",
					className: Li,
					onClick: () => s(t),
					children: [/* @__PURE__ */ z(qe, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "读取浏览器记录"]
				}),
				/* @__PURE__ */ B("button", {
					type: "button",
					className: Li,
					onClick: () => s(n),
					children: [/* @__PURE__ */ z(ot, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "导入历史文件"]
				}),
				/* @__PURE__ */ B("button", {
					type: "button",
					className: Li,
					onClick: () => s(r),
					children: [/* @__PURE__ */ z(Pt, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "导入书签文件"]
				})
			]
		})
	})] });
}
function ua({ sources: e, browsers: t, window: n, toast: r, emptyActions: i }) {
	let a = rn({
		mutationFn: (e) => Wt(e, n),
		onSuccess: (e) => {
			V.setQueryData(H(n), e.dashboard), r("已移除口味数据源");
		}
	});
	return /* @__PURE__ */ B(Fi, {
		browsers: t,
		sources: e,
		range: n,
		children: [a.error ? /* @__PURE__ */ z("div", {
			className: "sm:col-span-2",
			children: /* @__PURE__ */ z(N, {
				tone: "error",
				children: L(a.error)
			})
		}) : null, e.length ? /* @__PURE__ */ z(R.Fragment, { children: e.filter((e) => !t.some((t) => t.source_keys?.includes(e.source_key))).map((e) => /* @__PURE__ */ B("div", {
			"data-taste-source": "import",
			className: Pi,
			children: [
				/* @__PURE__ */ z("span", {
					className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
					children: e.browser === "browserexport" ? /* @__PURE__ */ z(ot, {
						"aria-hidden": !0,
						className: "size-4"
					}) : /* @__PURE__ */ z(yt, {
						"aria-hidden": !0,
						className: "size-4"
					})
				}),
				/* @__PURE__ */ B("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ z("b", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.profile
					}), /* @__PURE__ */ z("small", {
						className: "min-w-0 text-caption-1-regular break-words text-text-secondary",
						children: `导入文件 · ${e.host} · ${Number(e.visits || e.bookmarks || 0).toLocaleString()} ${e.bookmarks ? "枚书签" : "条历史"}`
					})]
				}),
				/* @__PURE__ */ z(j, {
					variant: "secondary",
					size: "small",
					"aria-label": `移除 ${e.profile}`,
					className: "shrink-0",
					iconOnly: !0,
					leadingIcon: $e,
					...P(a.isPending),
					onClick: () => {
						a.isPending || Tt({
							title: "移除口味数据源",
							body: $i,
							confirmLabel: "移除口味数据源",
							onConfirm: () => a.mutateAsync(e.source_key)
						});
					}
				})
			]
		}, e.source_key)) }) : t.length ? null : /* @__PURE__ */ z(M, {
			size: "compact",
			icon: yt,
			title: "还没有数据源",
			actions: i,
			children: Bi
		})]
	});
}
function da(e) {
	let { onSignal: t, navigate: n, toast: r, onboarding: i } = e, [a, o] = (0, W.useState)("all"), [s, c] = (0, W.useState)("browser"), l = (0, W.useRef)(null), u = (0, W.useRef)(null), d = an({
		queryKey: H(a),
		queryFn: ({ signal: e }) => Ot(a, e),
		placeholderData: Lt,
		refetchInterval: (e) => Qt(e.state.data)
	}), { job: f, running: p, outcome: m, start: h } = nn({
		queryKey: mt,
		queryFn: ({ signal: e }) => kt(e),
		start: () => qt(a),
		idlePollMs: Ze,
		onFinish: (e) => {
			e.status !== "failed" && (V.invalidateQueries({ queryKey: ["taste"] }), r(e.warnings?.length ? "部分浏览记录未取得" : "已更新口味分析"));
		}
	}), g = rn({
		mutationFn: (e) => Ot(e, void 0, !0),
		onSuccess: (e, t) => {
			V.setQueryData(H(t), e);
		}
	}), _ = rn({
		mutationFn: (e) => It(e),
		onSuccess: (e) => {
			V.setQueryData(H("all"), e.dashboard), o("all"), r("已导入口味数据");
		}
	}), v = (e) => {
		let t = e.currentTarget.files?.[0];
		e.currentTarget.value = "", t && !_.isPending && (_.reset(), _.mutate(t));
	}, y = () => {
		p || h.isPending || (h.reset(), h.mutate());
	}, b = d.data;
	if (!b) return /* @__PURE__ */ z(on, { children: /* @__PURE__ */ z(N, {
		tone: "error",
		title: "口味分析读取失败",
		children: d.error ? L(d.error) : "读取口味分析失败"
	}) });
	let x = b.summary || {}, S = b.coverage || {}, C = b.rankings || {}, ee = b.storage || {}, w = Xt(C.browser_categories || []), T = Vt(w).length > 0, te = b.gaps || [], E = S.tagged || 0, ne = S.identified || 0, re = h.error ? L(h.error) : _.error ? L(_.error) : g.error ? L(g.error) : m?.status === "failed" ? m.error || "读取未取得" : "", ie = /* @__PURE__ */ B("div", {
		className: "flex flex-wrap justify-center gap-2",
		children: [/* @__PURE__ */ z(j, {
			variant: "secondary",
			...P(p || h.isPending || _.isPending),
			onClick: y,
			children: "读取浏览器记录"
		}), /* @__PURE__ */ z(j, {
			variant: "secondary",
			...P(_.isPending),
			onClick: () => l.current?.click(),
			children: "导入历史文件"
		})]
	});
	return /* @__PURE__ */ z(on, { children: /* @__PURE__ */ B(ta, {
		value: a === "all" ? s === "peach" ? /* @__PURE__ */ z(Ge, {
			size: "small",
			variant: "secondary",
			href: "/",
			children: "浏览馆藏"
		}) : ie : /* @__PURE__ */ z(j, {
			size: "small",
			variant: "secondary",
			onClick: () => o("all"),
			children: "查看全部时间"
		}),
		children: [
			/* @__PURE__ */ B(We, {
				selectedKey: s,
				onSelectionChange: (e) => c(String(e)),
				className: "flex flex-col gap-5",
				children: [
					/* @__PURE__ */ B("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ B(ut, {
							"aria-label": "口味分析的数据来源",
							className: ct,
							children: [/* @__PURE__ */ z(Ue, {
								id: "browser",
								className: st,
								children: "浏览器记录"
							}), /* @__PURE__ */ z(Ue, {
								id: "peach",
								className: st,
								children: "Peach 观看与评价"
							})]
						}), /* @__PURE__ */ B("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ z(dt, {
									"aria-label": "分析范围",
									selectedKey: a,
									onSelectionChange: (e) => {
										e !== null && o(String(e));
									},
									children: ht.map(([e, t]) => /* @__PURE__ */ z(ft, {
										id: e,
										children: t
									}, e))
								}),
								/* @__PURE__ */ z(la, {
									busy: p || h.isPending || _.isPending,
									onRefresh: y,
									onImport: () => l.current?.click(),
									onImportBookmarks: () => u.current?.click()
								}),
								/* @__PURE__ */ z("input", {
									ref: l,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: v
								}),
								/* @__PURE__ */ z("input", {
									ref: u,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									"data-bookmark-import": !0,
									onChange: v
								})
							]
						})]
					}),
					/* @__PURE__ */ z(ca, {
						onboarding: i,
						done: !!(x.history_sources || b.updated_at)
					}),
					/* @__PURE__ */ B("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-3 empty:hidden",
						children: [
							p ? /* @__PURE__ */ z(gt, {
								label: f?.message || "正在读取浏览记录并更新口味分析",
								value: f?.checked,
								total: f?.total
							}) : null,
							_.isPending ? /* @__PURE__ */ z(gt, { label: "正在导入口味数据" }) : null,
							b.stale && b.error ? /* @__PURE__ */ z(N, {
								tone: "error",
								action: /* @__PURE__ */ z(j, {
									variant: "secondary",
									size: "small",
									...P(g.isPending),
									onClick: () => g.mutate(a),
									children: "立即重试"
								}),
								children: `口味分析更新失败，当前显示 ${$t(b.computed_at)} 的结果。${b.error}`
							}) : b.stale ? /* @__PURE__ */ z(gt, { label: `正在更新口味分析，当前显示 ${$t(b.computed_at)} 的结果` }) : null,
							re ? /* @__PURE__ */ z(N, {
								tone: "error",
								children: re
							}) : null,
							m?.warnings?.length ? /* @__PURE__ */ z(N, {
								tone: "warning",
								children: m.warnings.join("；")
							}) : null
						]
					}),
					/* @__PURE__ */ B(He, {
						id: "browser",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ B("div", {
								className: lt,
								children: [
									/* @__PURE__ */ z($, {
										accent: 0,
										icon: tn,
										term: "浏览记录",
										figure: Number(x.history_visits || 0).toLocaleString(),
										detail: Ft(x),
										detailTitle: `${Yt(x.range_start)}—${Yt(x.range_end)}`
									}),
									/* @__PURE__ */ z($, {
										accent: 1,
										icon: Rt,
										term: "口味维度",
										figure: w.length.toLocaleString(),
										detail: w[0]?.name || "尚无主维度"
									}),
									/* @__PURE__ */ z($, {
										accent: 2,
										icon: zt,
										term: "浏览线索",
										figure: te.length.toLocaleString()
									}),
									/* @__PURE__ */ z($, {
										accent: 3,
										icon: Pt,
										term: "浏览器书签",
										figure: Number(x.bookmarks || 0).toLocaleString(),
										detail: `${Number(ee.exports || 0).toLocaleString()} 份私有导出 · ${Nt(ee.bytes || 0)}`
									})
								]
							}),
							/* @__PURE__ */ B("section", {
								className: T ? `${Q} md:flex-row md:gap-6` : Q,
								"aria-label": "浏览器画像",
								children: [/* @__PURE__ */ B("div", {
									className: T ? "flex shrink-0 flex-col gap-2 pb-5 md:w-80 md:pr-6 md:pb-0" : "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
									children: [
										/* @__PURE__ */ z("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: "浏览器画像"
										}),
										T ? /* @__PURE__ */ z(ji, {
											rows: w,
											label: "主要口味维度"
										}) : null,
										/* @__PURE__ */ z("small", {
											className: "text-caption-1-regular text-text-secondary",
											children: b.updated_at ? `更新于 ${Yt(b.updated_at)}` : "尚未采集浏览记录"
										})
									]
								}), /* @__PURE__ */ z("div", {
									className: "flex min-w-0 grow flex-col",
									children: w.length ? /* @__PURE__ */ z(Mi, {
										rows: w,
										label: "口味维度排名"
									}) : /* @__PURE__ */ z(M, {
										size: "compact",
										icon: zt,
										title: "暂无口味维度",
										actions: /* @__PURE__ */ z(na, {}),
										children: Hi
									})
								})]
							}),
							/* @__PURE__ */ z(cn, {
								activity: b.activity,
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
							/* @__PURE__ */ z(Ni, { flows: b.creator_flows }),
							/* @__PURE__ */ z(oa, {
								label: "浏览器口味维度",
								onSignal: t,
								panels: [
									{
										id: "tags",
										name: "标签",
										props: {
											rows: C.browser_tags || [],
											kind: "tag",
											visual: "none",
											empty: Wi
										}
									},
									{
										id: "creators",
										name: "创作者",
										props: {
											rows: C.browser_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Gi
										}
									},
									{
										id: "performers",
										name: "女优",
										props: {
											rows: C.browser_performers || [],
											kind: "performer",
											visual: "entity",
											empty: "还没有与已建档女优关联的浏览记录。"
										}
									},
									{
										id: "domains",
										name: "常访问网站",
										props: {
											rows: C.domains || [],
											kind: "",
											visual: "domain",
											empty: Ki
										}
									},
									{
										id: "gaps",
										name: "浏览线索",
										props: {
											rows: te,
											kind: "",
											visual: "none",
											empty: Ui
										}
									}
								]
							})
						]
					}),
					/* @__PURE__ */ B(He, {
						id: "peach",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ B("div", {
								className: lt,
								children: [
									/* @__PURE__ */ z($, {
										accent: 0,
										icon: vt,
										term: "Peach 看过",
										figure: Number(x.peach_items || 0).toLocaleString(),
										detail: Zt(x.peach_seconds || 0)
									}),
									/* @__PURE__ */ z($, {
										accent: 1,
										icon: xt,
										term: "喜欢",
										figure: Number(x.liked || 0).toLocaleString()
									}),
									/* @__PURE__ */ z($, {
										accent: 2,
										icon: Ct,
										term: "不合口味",
										figure: Number(x.disliked || 0).toLocaleString()
									}),
									/* @__PURE__ */ z($, {
										accent: 3,
										icon: Rt,
										term: "有标签",
										figure: E.toLocaleString()
									})
								]
							}),
							/* @__PURE__ */ B("section", {
								className: `${Q} md:flex-row md:gap-6`,
								"aria-label": "Peach 观看",
								children: [/* @__PURE__ */ B("div", {
									className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-72 md:pr-6 md:pb-0",
									children: [
										/* @__PURE__ */ z("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: "Peach 观看"
										}),
										/* @__PURE__ */ z("b", {
											className: "text-display-4-medium tabular-nums text-text-primary",
											children: Number(x.peach_items || 0).toLocaleString()
										}),
										/* @__PURE__ */ z("span", {
											className: "text-body-2-regular text-text-secondary",
											children: "部作品有观看或评价记录"
										})
									]
								}), /* @__PURE__ */ B("div", {
									className: "flex min-w-0 grow flex-col",
									children: [/* @__PURE__ */ z(fa, {
										term: "有标签",
										value: E,
										rest: S.untagged || 0
									}), /* @__PURE__ */ z(fa, {
										term: "有身份",
										value: ne,
										rest: S.unidentified || 0
									})]
								})]
							}),
							/* @__PURE__ */ z(oa, {
								label: "Peach 口味维度",
								onSignal: t,
								panels: [
									{
										id: "tags",
										name: "标签",
										props: {
											rows: C.peach_tags || [],
											kind: "tag",
											visual: "none",
											empty: qi
										}
									},
									{
										id: "creators",
										name: "创作者",
										props: {
											rows: C.peach_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Ji
										}
									},
									{
										id: "performers",
										name: "女优",
										props: {
											rows: C.peach_performers || [],
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
			/* @__PURE__ */ z(sa, {
				data: b,
				onSignal: t,
				navigate: n
			}),
			/* @__PURE__ */ z(ua, {
				sources: b.sources || [],
				browsers: b.browsers || [],
				window: a,
				toast: r,
				emptyActions: ie
			})
		]
	}) });
}
function fa({ term: e, value: t, rest: n }) {
	let r = Math.max(t + n, 1);
	return /* @__PURE__ */ B("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ B("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ z("span", { children: e }), /* @__PURE__ */ B("b", {
				className: "tabular-nums",
				children: [t.toLocaleString(), /* @__PURE__ */ z("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: `${n.toLocaleString()} 项待补`
				})]
			})]
		}), /* @__PURE__ */ z(at, {
			meter: !0,
			label: `${e}：${t.toLocaleString()} / ${r.toLocaleString()}`,
			value: t,
			max: r
		})]
	});
}
export { ea as TASTE_GUIDE_KEY, da as TastePage };

//# debugId=72e68bfe-f622-4a92-ad68-e3ac9ed7f8f1