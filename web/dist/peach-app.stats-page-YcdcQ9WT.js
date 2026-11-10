(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5d664257-7419-4241-93cc-80c6292fa21d", e._sentryDebugIdIdentifier = "sentry-dbid-5d664257-7419-4241-93cc-80c6292fa21d");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as e, $b4f18e3395fe64d7$export$3e41faf802a29e71 as t, $b4f18e3395fe64d7$export$b2539bed5023c21c as n, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as r, ButtonLink as i, EmptyState as a, LOC as o, MEDIA_SOURCE_ICONS as s, NR as c, Note as l, Progress as u, SEGMENT as d, SEGMENTED_TRACK as f, STATS_KEY as p, STAT_STRIP as m, SegmentedTabList as h, SourceMark as g, StatCard as _, StatusLabel as v, Xc as y, Xt as b, _8 as x, __toESM as S, bandRows as C, cardClass as w, clsx as T, errorMessage as E, fetchStats as ee, fmtCount as D, fmtSize as O, import_jsx_runtime as k, jsx as A, jsxs as j, known as M, lengthRows as te, mM as ne, mediumRows as re, percentText as ie, playedFor as ae, playedItemUrl as oe, radialArc as se, radialBarSize as ce, radialCeiling as le, radialSlices as ue, reachedShare as de, replayRows as fe, require_react as pe, settingsPath as me, statCardClass as he, uo as ge, useQuery as _e, watchNote as ve, watchedShare as ye } from "./peach-app.js";
import { ActivityHeat as be, BarCard as N, ExpandableRanking as xe, PolarAngleAxis as Se, selectPolarAxisScale as Ce, selectPolarAxisTicks as we, selectPolarGraphicalItemAxisTicks as Te } from "./peach-app.expandable-ranking-CvP4aPgI.js";
import { AnimatedItems as Ee, CHART_CARD as De, CHART_COLORS as Oe, Cell as ke, ChartBackground as Ae, ChartContainer as je, ChartEmpty as Me, ChartLegend as Ne, ChartLegendContent as Pe, ChartTip as Fe, ChartTooltip as Ie, ChartTooltipContent as Le, DefaultZIndexes as Re, LabelListFromLabelProp as ze, Layer as Be, LoadingIndicator as Ve, PolarChart as He, PolarLabelListContextProvider as Ue, RegisterGraphicalItemId as We, Sector as P, SetPolarGraphicalItem as Ge, SetPolarLegendPayload as Ke, SetTooltipEntrySettings as qe, Shape as Je, ZIndexLayer as Ye, adaptEventsOfChild as Xe, arrayTooltipSearcher as Ze, combineAllBarPositions as Qe, combineBarPosition as $e, combineBarSizeList as et, combineDisplayedStackedData as tt, combineStackGroups as nt, combineStackedData as rt, createSelector as F, defaultPolarChartProps as it, findAllByType as at, getBandSizeOfAxis as I, getBaseValueOfBar as ot, getCateCoordinateOfBar as st, getColorsCount as ct, getNormalizedStackId as lt, getTooltipNameProp as ut, getValueByDataKey as dt, getZIndexFromUnknown as ft, interpolate as L, isCategoricalAxis as pt, isNullish as mt, isStacked as ht, matchAppend as gt, mathSign as _t, noop as vt, resolveDefaultProps as yt, selectActiveTooltipIndex as bt, selectAngleAxis as xt, selectBarCategoryGap as St, selectBarGap as Ct, selectChartDataAndAlwaysIgnoreIndexes as wt, selectChartDataWithIndexes as Tt, selectChartLayout as R, selectPolarItemsSettings as Et, selectPolarViewBox as Dt, selectRadiusAxis as Ot, selectReverseStackOrder as kt, selectRootBarSize as At, selectRootMaxBarSize as jt, selectStackOffsetType as Mt, selectTooltipAxis as Nt, selectUnfilteredPolarItems as Pt, sliceConfig as Ft, sliceKey as It, svgPropertiesNoEvents as Lt, svgPropertiesNoEventsFromUnknown as Rt, truncateByDomain as zt, useAnimationCallbacks as Bt, useAppSelector as z, useMouseClickItemDispatch as Vt, useMouseEnterItemDispatch as Ht, useMouseLeaveItemDispatch as Ut, usePolarChartLayout as Wt } from "./peach-app.chart-tip-BGeaXdeB.js";
import { ConnectionStatus as Gt } from "./peach-app.connection-status-BjZE05sg.js";
import { Page as Kt } from "./peach-app.page-CW3QRN2N.js";
// node_modules/recharts/es6/util/RadialBarUtils.js
var B = /* @__PURE__ */ S(pe()), qt = ["option"];
function Jt(e, t) {
	if (e == null) return {};
	var n, r, i = Yt(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Yt(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Xt = P;
function Zt(e) {
	return typeof e == "string" ? parseInt(e, 10) : e;
}
function V(e) {
	var t = e.option, n = Jt(e, qt);
	return /*#__PURE__*/ B.createElement(Je, {
		option: t,
		DefaultShape: Xt,
		shapeProps: n
	});
}
// node_modules/recharts/es6/state/selectors/radialBarSelectors.js
function Qt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function H(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qt(Object(n), !0).forEach(function(t) {
			$t(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function $t(e, t, n) {
	return (t = en(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function en(e) {
	var t = tn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function tn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var U = F([(e, t) => Ot(e, t), (e, t) => Ce(e, "radiusAxis", t)], (e, t) => {
	if (e != null && t != null) return H(H({}, e), {}, { scale: t });
}), W = (e, t) => Te(e, "radiusAxis", t, !1), G = F([(e, t, n) => xt(e, n), (e, t, n) => Ce(e, "angleAxis", n)], (e, t) => {
	if (e != null && t != null) return H(H({}, e), {}, { scale: t });
}), K = (e, t, n) => we(e, "angleAxis", n, !1), nn = F([Pt, (e, t, n, r) => r], (e, t) => {
	if (e.some((e) => e.type === "radialBar" && t.dataKey === e.dataKey && t.stackId === e.stackId)) return t;
}), rn = F([
	R,
	U,
	W,
	G,
	K
], (e, t, n, r, i) => pt(e, "radiusAxis") ? I(t, n, !1) : I(r, i, !1)), an = F([
	G,
	U,
	R
], (e, t, n) => {
	var r = n === "radial" ? e : t;
	if (r != null && r.scale != null) return ot({ numericAxis: r });
}), on = (e, t, n, r, i) => i, sn = (e, t, n, r, i) => n, cn = (e, t, n, r, i) => t, ln = (e, t, n, r, i) => r.maxBarSize, un = (e) => e.type === "radialBar", dn = F([
	R,
	Pt,
	sn,
	cn
], (e, t, n, r) => t.filter((t) => e === "centric" ? t.angleAxisId === n : t.radiusAxisId === r).filter((e) => e.hide === !1).filter(un)), fn = F([
	dn,
	At,
	() => void 0
], et), pn = F([
	R,
	jt,
	G,
	K,
	U,
	W,
	ln
], (e, t, n, r, i, a, o) => {
	var s = mt(o) ? t : o;
	return e === "centric" ? I(n, r, !0) ?? s ?? 0 : I(i, a, !0) ?? s ?? 0;
}), mn = F([
	fn,
	jt,
	Ct,
	St,
	pn,
	rn,
	ln
], Qe), hn = F([mn, nn], $e), gn = F([Et], (e) => e.filter(un).filter(ht)), _n = F([
	gn,
	wt,
	Nt
], tt), vn = F([
	_n,
	gn,
	Mt,
	kt
], nt), yn = F([(e, t, n) => R(e) === "centric" ? vn(e, "radiusAxis", t) : vn(e, "angleAxis", n), nn], rt), bn = F([
	G,
	K,
	U,
	W,
	Tt,
	nn,
	rn,
	R,
	an,
	Dt,
	on,
	hn,
	yn
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = i.chartData, m = i.dataStartIndex, h = i.dataEndIndex;
	if (a == null || n == null || e == null || p == null || o == null || d == null || s !== "centric" && s !== "radial" || r == null || l == null) return [];
	var g = a.dataKey, _ = a.minPointSize, v = l.cx, y = l.cy, b = l.startAngle, x = l.endAngle;
	return Vn({
		angleAxis: e,
		angleAxisTicks: t,
		bandSize: o,
		baseValue: c,
		cells: u,
		cx: v,
		cy: y,
		dataKey: g,
		dataStartIndex: m,
		displayedData: p.slice(m, h + 1),
		endAngle: x,
		layout: s,
		minPointSize: _,
		pos: d,
		radiusAxis: n,
		radiusAxisTicks: r,
		stackedData: f,
		stackedDomain: f ? (s === "centric" ? n : e).scale.domain() : null,
		startAngle: b
	});
}), xn = F([wt, (e, t) => t], (e, t) => {
	var n = e.chartData, r = e.dataStartIndex, i = e.dataEndIndex;
	if (n == null) return [];
	var a = n.slice(r, i + 1);
	return a.length === 0 ? [] : a.map((e) => ({
		type: t,
		value: e.name,
		color: e.fill,
		payload: e
	}));
}), Sn = [
	"shape",
	"activeShape",
	"cornerRadius",
	"id"
], Cn = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], wn = ["value", "background"];
function q() {
	return q = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, q.apply(null, arguments);
}
function Tn(e, t) {
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
		t % 2 ? Tn(Object(n), !0).forEach(function(t) {
			En(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function En(e, t, n) {
	return (t = Dn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Dn(e) {
	var t = On(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function On(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function kn(e, t) {
	if (e == null) return {};
	var n, r, i = An(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function An(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var jn = [];
function Mn(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = n.map((e) => ({
		value: e.value,
		payload: e.payload,
		parentViewBox: void 0,
		clockWise: !1,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	}));
	return /*#__PURE__*/ B.createElement(Ue, { value: t ? i : void 0 }, r);
}
function Nn(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = e.showLabels, i = e.animationElapsedTime, a = e.isAnimating, o = e.isEntrance, s = n.shape, c = n.activeShape, l = n.cornerRadius, u = n.id, d = kn(n, Sn), f = Lt(d), p = z(bt), m = n.onMouseEnter, h = n.onClick, g = n.onMouseLeave, _ = kn(n, Cn), v = Ht(m, n.dataKey, u), y = Ut(g), b = Vt(h, n.dataKey, u);
	return t == null ? null : /*#__PURE__*/ B.createElement(Mn, {
		showLabels: r,
		sectors: t
	}, t.map((e, t) => {
		var n = !!(c && p === String(t)), r = v(e, t), u = y(e, t), m = b(e, t), h = J(J(J(J({}, f), {}, { cornerRadius: Zt(l) }, e), Xe(_, e, t)), {}, {
			onMouseEnter: r,
			onMouseLeave: u,
			onClick: m,
			className: `recharts-radial-bar-sector ${e.className}`,
			forceCornerRadius: d.forceCornerRadius,
			cornerIsExternal: d.cornerIsExternal,
			animationElapsedTime: i,
			isAnimating: a,
			isEntrance: o,
			isActive: n,
			option: n && c != null ? c : s,
			index: t
		});
		return n ? /*#__PURE__*/ B.createElement(Ye, {
			zIndex: Re.activeBar,
			key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}`
		}, /*#__PURE__*/ B.createElement(V, h)) : /*#__PURE__*/ B.createElement(V, q({ key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}` }, h));
	}), /*#__PURE__*/ B.createElement(ze, { label: n.label }), n.children);
}
var Pn = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [J(J({}, e.next), {}, {
	startAngle: L(e.prev.startAngle, e.next.startAngle, t),
	endAngle: L(e.prev.endAngle, e.next.endAngle, t)
})] : [J(J({}, e.next), {}, { endAngle: L(e.next.startAngle, e.next.endAngle, t) })]);
function Fn(e) {
	var t = e.props, n = e.previousSectorsRef, r = t.sectors, i = t.isAnimationActive, a = t.animationBegin, o = t.animationDuration, s = t.animationEasing, c = t.onAnimationStart, l = t.onAnimationEnd, u = Bt(c, l), d = u.isAnimating, f = u.handleAnimationStart, p = u.handleAnimationEnd, m = Wt();
	return m == null ? null : /*#__PURE__*/ B.createElement(Ee, {
		animationInput: t,
		animationIdPrefix: "recharts-radialbar-",
		items: r,
		previousItemsRef: n,
		isAnimationActive: i,
		animationBegin: a,
		animationDuration: o,
		animationEasing: s,
		onAnimationStart: f,
		onAnimationEnd: p,
		animationInterpolateFn: t.animationInterpolateFn,
		animationMatchBy: t.animationMatchBy,
		layout: m
	}, (e, n, r) => /*#__PURE__*/ B.createElement(Nn, {
		sectors: e,
		allOtherRadialBarProps: t,
		showLabels: !d,
		animationElapsedTime: n,
		isAnimating: d || n < 1,
		isEntrance: r
	}));
}
function In(e) {
	var t = (0, B.useRef)(null);
	return /*#__PURE__*/ B.createElement(Fn, {
		props: e,
		previousSectorsRef: t
	});
}
function Ln(e) {
	var t = z((t) => xn(t, e.legendType));
	return /*#__PURE__*/ B.createElement(Ke, { legendPayload: t ?? [] });
}
var Rn = /*#__PURE__*/ B.memo((e) => {
	var t = e.dataKey, n = e.sectors, r = e.stroke, i = e.strokeWidth, a = e.name, o = e.hide, s = e.fill, c = e.tooltipType, l = e.formatter, u = e.id, d = {
		dataDefinedOnItem: n,
		getPosition: vt,
		settings: {
			graphicalItemId: u,
			stroke: r,
			strokeWidth: i,
			fill: s,
			nameKey: void 0,
			dataKey: t,
			name: ut(a, t),
			hide: o,
			type: c,
			color: s,
			unit: "",
			formatter: l
		}
	};
	return /*#__PURE__*/ B.createElement(qe, { tooltipEntrySettings: d });
}), zn = class extends B.PureComponent {
	renderBackground(e) {
		if (e == null) return null;
		var t = this.props.cornerRadius, n = Rt(this.props.background);
		return /*#__PURE__*/ B.createElement(Ye, { zIndex: ft(this.props.background, Re.barBackground) }, e.map((e, r) => {
			e.value;
			var i = e.background, a = kn(e, wn);
			if (!i) return null;
			var o = J(J(J(J(J({ cornerRadius: Zt(t) }, a), {}, { fill: "#eee" }, i), n), Xe(this.props, e, r)), {}, {
				index: r,
				className: T("recharts-radial-bar-background-sector", String(n?.className)),
				option: i,
				isActive: !1
			});
			return /*#__PURE__*/ B.createElement(V, q({ key: `background-${a.cx}-${a.cy}-${a.innerRadius}-${a.outerRadius}-${a.startAngle}-${a.endAngle}-${r}` }, o));
		}));
	}
	render() {
		var e = this.props, t = e.hide, n = e.sectors, r = e.className, i = e.background;
		if (t) return null;
		var a = T("recharts-area", r);
		return /*#__PURE__*/ B.createElement(Ye, { zIndex: this.props.zIndex }, /*#__PURE__*/ B.createElement(Be, { className: a }, i && /*#__PURE__*/ B.createElement(Be, { className: "recharts-radial-bar-background" }, this.renderBackground(n)), /*#__PURE__*/ B.createElement(Be, { className: "recharts-radial-bar-sectors" }, /*#__PURE__*/ B.createElement(In, this.props))));
	}
};
function Bn(e) {
	var t = B.useMemo(() => at(e.children, ke), [e.children]), n = B.useMemo(() => ({
		data: void 0,
		hide: !1,
		id: e.id,
		dataKey: e.dataKey,
		minPointSize: e.minPointSize,
		stackId: lt(e.stackId),
		maxBarSize: e.maxBarSize,
		barSize: e.barSize,
		type: "radialBar",
		angleAxisId: e.angleAxisId,
		radiusAxisId: e.radiusAxisId
	}), [
		e.id,
		e.dataKey,
		e.minPointSize,
		e.stackId,
		e.maxBarSize,
		e.barSize,
		e.angleAxisId,
		e.radiusAxisId
	]), r = z((r) => bn(r, e.radiusAxisId, e.angleAxisId, n, t)) ?? jn;
	return /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(Rn, {
		dataKey: e.dataKey,
		sectors: r,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		name: e.name,
		hide: e.hide,
		fill: e.fill,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: e.id
	}), /*#__PURE__*/ B.createElement(zn, q({}, e, { sectors: r })));
}
var Y = {
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: gt,
	animationInterpolateFn: Pn,
	background: !1,
	cornerIsExternal: !1,
	cornerRadius: 0,
	forceCornerRadius: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	minPointSize: 0,
	radiusAxisId: 0,
	shape: Xt,
	zIndex: Re.bar
};
function Vn(e) {
	var t = e.displayedData, n = e.stackedData, r = e.dataStartIndex, i = e.stackedDomain, a = e.dataKey, o = e.baseValue, s = e.layout, c = e.radiusAxis, l = e.radiusAxisTicks, u = e.bandSize, d = e.pos, f = e.angleAxis, p = e.minPointSize, m = e.cx, h = e.cy, g = e.angleAxisTicks, _ = e.cells, v = e.startAngle, y = e.endAngle;
	return g == null || l == null ? jn : (t ?? []).map((e, t) => {
		var b, x, S, C, w, T;
		if (n ? b = zt(n[r + t], i) : (b = dt(e, a), Array.isArray(b) || (b = [o, b])), s === "radial") {
			if (C = f.scale.map(b[0]) ?? v, w = f.scale.map(b[1]) ?? y, x = st({
				axis: c,
				ticks: l,
				bandSize: u,
				offset: d.offset,
				entry: e,
				index: t
			}), x != null && w != null && C != null) {
				S = x + d.size;
				var E = w - C;
				if (Math.abs(p) > 0 && Math.abs(E) < Math.abs(p)) {
					var ee = _t(E || p) * (Math.abs(p) - Math.abs(E));
					w += ee;
				}
				T = { background: {
					cx: m,
					cy: h,
					innerRadius: x,
					outerRadius: S,
					startAngle: v,
					endAngle: y
				} };
			}
		} else if (x = c.scale.map(b[0]), S = c.scale.map(b[1]), C = st({
			axis: f,
			ticks: g,
			bandSize: u,
			offset: d.offset,
			entry: e,
			index: t
		}), x != null && S != null && C != null) {
			w = C + d.size;
			var D = S - x;
			if (Math.abs(p) > 0 && Math.abs(D) < Math.abs(p)) {
				var O = _t(D || p) * (Math.abs(p) - Math.abs(D));
				S += O;
			}
		}
		return J(J(J({}, e), T), {}, {
			payload: e,
			value: n ? b : b[1],
			cx: m,
			cy: h,
			innerRadius: x,
			outerRadius: S,
			startAngle: C,
			endAngle: w
		}, _ && _[t] && _[t].props);
	});
}
function Hn(e) {
	var t = yt(e, Y);
	return /*#__PURE__*/ B.createElement(We, {
		id: t.id,
		type: "radialBar"
	}, (e) => /*#__PURE__*/ B.createElement(B.Fragment, null, /*#__PURE__*/ B.createElement(Ge, {
		type: "radialBar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide ?? Y.hide,
		angleAxisId: t.angleAxisId ?? Y.angleAxisId,
		radiusAxisId: t.radiusAxisId ?? Y.radiusAxisId,
		stackId: lt(t.stackId),
		barSize: t.barSize,
		minPointSize: t.minPointSize,
		maxBarSize: t.maxBarSize
	}), /*#__PURE__*/ B.createElement(Ln, t), /*#__PURE__*/ B.createElement(Bn, q({}, t, { id: e }))));
}
Hn.displayName = "RadialBar";
// node_modules/recharts/es6/chart/RadialBarChart.js
function Un(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Wn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Un(Object(n), !0).forEach(function(t) {
			Gn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Gn(e, t, n) {
	return (t = Kn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Kn(e) {
	var t = qn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Jn = ["axis", "item"], Yn = Wn(Wn({}, it), {}, {
	layout: "radial",
	startAngle: 0,
	endAngle: 360
}), Xn = /*#__PURE__*/ (0, B.forwardRef)((e, t) => {
	var n = yt(e, Yn);
	return /*#__PURE__*/ B.createElement(He, {
		chartName: "RadialBarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Jn,
		tooltipPayloadSearcher: Ze,
		categoricalChartProps: n,
		ref: t
	});
}), Zn = "30%", Qn = "100%", $n = 5, er = 14, tr = 5, nr = 1500, rr = (0, B.createContext)(null);
function ir() {
	let e = (0, B.use)(rr);
	if (!e) throw Error("Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <EvilRadialChart />");
	return e;
}
function X({ config: e, data: t, nameKey: n, children: r, className: i, chartProps: a, variant: o = "full", max: s, innerRadius: c = Zn, outerRadius: l = Qn, defaultSelectedDataKey: u = null, onSelectionChange: d, isLoading: f = !1, backgroundVariant: p }) {
	let m = (0, B.useId)().replace(/:/g, ""), [h, g] = (0, B.useState)(u), _ = dr(f), v = cr(o), y = (0, B.useCallback)((e, t) => {
		g(e), d?.(e === null ? null : {
			dataKey: e,
			value: t ?? 0
		});
	}, [d]), b = (0, B.useMemo)(() => t.map((e) => ({
		...e,
		fill: `url(#${m}-radial-colors-${e[n]})`
	})), [
		t,
		n,
		m
	]), x = (0, B.useMemo)(() => ({
		config: e,
		nameKey: n,
		chartId: m,
		isLoading: f,
		selectedBar: h,
		selectBar: y
	}), [
		e,
		n,
		m,
		f,
		h,
		y
	]);
	return /* @__PURE__ */ A(rr, {
		value: x,
		children: /* @__PURE__ */ j(je, {
			className: i,
			config: e,
			children: [/* @__PURE__ */ A(Ve, { isLoading: f }), /* @__PURE__ */ j(Xn, {
				id: m,
				data: f ? _ : b,
				innerRadius: c,
				outerRadius: l,
				startAngle: v.startAngle,
				endAngle: v.endAngle,
				cx: v.cx,
				cy: v.cy,
				...a,
				children: [
					s != null && s > 0 && /* @__PURE__ */ A(Se, {
						type: "number",
						domain: [0, s],
						tick: !1,
						axisLine: !1
					}),
					p && /* @__PURE__ */ A(Ae, { variant: p }),
					r,
					f && /* @__PURE__ */ A(fr, {}),
					/* @__PURE__ */ A("defs", { children: /* @__PURE__ */ A(lr, {
						config: e,
						chartId: m
					}) })
				]
			})]
		})
	});
}
function ar({ dataKey: e, cornerRadius: t = $n, barSize: n = er, showBackground: r = !0, isClickable: i = !1, radialBarProps: a }) {
	let { nameKey: o, isLoading: s, selectedBar: c, selectBar: l } = ir();
	return s ? null : /* @__PURE__ */ A(Hn, {
		dataKey: e,
		cornerRadius: t,
		barSize: n,
		background: r,
		className: "drop-shadow-sm",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: (t, n) => {
			if (!i) return;
			let r = t, a = r?.[o] ?? String(n), s = Number(r?.[e] ?? 0);
			l(c === a ? null : a, s);
		},
		shape: (e) => {
			let t = e[o], n = c === null || c === t;
			return /* @__PURE__ */ A(P, {
				...e,
				opacity: i && !n ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...a
	});
}
function or({ variant: e, roundness: t, defaultIndex: n }) {
	let { nameKey: r, isLoading: i } = ir();
	return i ? null : /* @__PURE__ */ A(Ie, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ A(Le, {
			nameKey: r,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function sr({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, isLoading: a, selectedBar: o, selectBar: s } = ir();
	return a ? null : /* @__PURE__ */ A(Ne, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ A(Pe, {
			selected: o,
			onSelectChange: s,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function cr(e) {
	switch (e) {
		case "semi": return {
			startAngle: 180,
			endAngle: 0,
			cx: "50%",
			cy: "70%"
		};
		default: return {
			startAngle: 90,
			endAngle: -270,
			cx: "50%",
			cy: "50%"
		};
	}
}
var lr = ({ config: e, chartId: t }) => /* @__PURE__ */ A(k.Fragment, { children: Object.entries(e).map(([e, n]) => {
	let r = ct(n);
	return /* @__PURE__ */ A("linearGradient", {
		id: `${t}-radial-colors-${e}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ j(k.Fragment, { children: [/* @__PURE__ */ A("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ A("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: r }, (t, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ A("stop", {
				offset: i,
				stopColor: `var(--color-${e}-${n}, var(--color-${e}-0))`
			}, i);
		})
	}, `${t}-radial-colors-${e}`);
}) });
function ur() {
	return Array.from({ length: tr }, (e, t) => ({
		name: `loading${t}`,
		value: 40 + Math.random() * 60
	}));
}
function dr(e) {
	let [t, n] = (0, B.useState)(0);
	return (0, B.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			n((e) => e + 1);
		}, nr);
		return () => clearInterval(t);
	}, [e]), (0, B.useMemo)(() => ur(), [t]);
}
var fr = () => /* @__PURE__ */ A(Hn, {
	dataKey: "value",
	cornerRadius: $n,
	barSize: er,
	background: !0,
	isAnimationActive: !0,
	animationDuration: nr,
	animationEasing: "ease-in-out",
	shape: (e) => /* @__PURE__ */ A(P, {
		...e,
		fill: "currentColor",
		fillOpacity: .25
	})
});
X.RadialBar = ar, X.Tooltip = or, X.Legend = sr;
// src/react/stats/radial-card.tsx
var pr = [
	"bg-chart-1",
	"bg-chart-2",
	"bg-chart-3",
	"bg-chart-4",
	"bg-chart-5",
	"bg-chart-6"
], mr = [
	"aria-pressed:bg-chart-1/10 aria-pressed:ring-chart-1",
	"aria-pressed:bg-chart-2/10 aria-pressed:ring-chart-2",
	"aria-pressed:bg-chart-3/10 aria-pressed:ring-chart-3",
	"aria-pressed:bg-chart-4/10 aria-pressed:ring-chart-4",
	"aria-pressed:bg-chart-5/10 aria-pressed:ring-chart-5",
	"aria-pressed:bg-chart-6/10 aria-pressed:ring-chart-6"
];
function hr({ title: e, rows: t, empty: n, unit: r = "个视频" }) {
	let [i, a] = (0, B.useState)(-1), [o, s] = (0, B.useState)(-1), c = ue(t);
	if (!c.length) return /* @__PURE__ */ A(Me, {
		title: e,
		children: n
	});
	let l = o >= 0 ? o : i, u = c.reduce((e, t) => e + t.value, 0), d = c[l], f = (e) => a((t) => t === e ? -1 : e), p = le(c.map((e) => e.value)), m = c.map((e, t) => ({
		slice: It(t),
		count: e.value,
		arc: se(e.value, p)
	}));
	return /* @__PURE__ */ j("section", {
		className: De,
		children: [
			/* @__PURE__ */ j("header", {
				className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ j("span", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ j("h3", {
						className: "flex items-center gap-1.5 text-title-2-medium wrap-anywhere text-text-primary",
						children: [d?.mark ? /* @__PURE__ */ A(g, { mark: d.mark }) : null, d ? d.name : e]
					}), /* @__PURE__ */ A("b", {
						className: "text-display-4-medium tabular-nums text-text-primary",
						children: (d ? d.value : u).toLocaleString()
					})]
				}), /* @__PURE__ */ A("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: r
				})]
			}),
			/* @__PURE__ */ A("div", {
				role: "img",
				"aria-label": e,
				onPointerLeave: () => s(-1),
				children: /* @__PURE__ */ j(X, {
					data: m,
					nameKey: "slice",
					config: Ft(c.map((e) => e.name)),
					max: p,
					innerRadius: "22%",
					className: "aspect-auto h-75 max-sm:h-65",
					children: [/* @__PURE__ */ A(X.RadialBar, {
						dataKey: "arc",
						barSize: ce(c.length),
						radialBarProps: {
							shape: (e) => /* @__PURE__ */ A(P, {
								...e,
								opacity: l >= 0 && l !== e.index ? .3 : 1,
								className: "cursor-pointer transition-opacity duration-200"
							}),
							onClick: (e, t) => f(t),
							onMouseEnter: (e, t) => s(t)
						}
					}), /* @__PURE__ */ A(Fe, {
						nameKey: "slice",
						valueKey: "count",
						hideLabel: !0
					})]
				})
			}),
			/* @__PURE__ */ A("div", {
				className: "inline-grid w-full grid-cols-3 gap-2 max-sm:grid-cols-2",
				children: c.map((e, t) => /* @__PURE__ */ j("button", {
					type: "button",
					"aria-pressed": i === t,
					onClick: () => f(t),
					onPointerEnter: () => s(t),
					onPointerLeave: () => s(-1),
					onFocus: () => s(t),
					onBlur: () => s(-1),
					className: `flex min-w-0 cursor-pointer flex-col items-start gap-1 rounded-xl bg-background-tertiary-default p-2.5 text-left outline-none aria-pressed:ring-1 aria-pressed:ring-inset focus-visible:ring-2 focus-visible:ring-border-focus-ring ${mr[t % 6]}`,
					children: [
						/* @__PURE__ */ j("span", {
							className: "flex min-w-0 max-w-full items-start gap-1.5 text-caption-1-regular text-text-secondary",
							children: [/* @__PURE__ */ A("i", {
								"aria-hidden": !0,
								className: `mt-0.5 size-3 shrink-0 rounded-sm ${pr[t % 6]}`
							}), /* @__PURE__ */ j("span", {
								className: "inline-flex min-w-0 items-start gap-1.5 wrap-anywhere",
								children: [e.mark ? /* @__PURE__ */ A(g, { mark: e.mark }) : null, e.name]
							})]
						}),
						/* @__PURE__ */ A("b", {
							className: "text-title-2-medium tabular-nums text-text-primary",
							children: e.value.toLocaleString()
						}),
						e.bytes == null ? null : /* @__PURE__ */ A("small", {
							className: "text-caption-1-regular text-text-secondary",
							children: O(e.bytes)
						})
					]
				}, It(t)))
			})
		]
	});
}
// src/react/stats/stats-page.tsx
var gr = me("媒体库与入库"), _r = 10, vr = Oe[5], yr = Oe[4], br = `${w()} flex flex-col gap-4`, xr = "添加媒体目录或关注来源后，这里会显示馆藏统计。", Sr = "补全资料或添加标签后，这里会显示馆藏中的内容标签。", Cr = "开始播放后，这里会显示最近的真实观看证据。", wr = "补充作品资料或手动添加标签后，这里会显示各个标签来源对应的视频数量。", Tr = "添加媒体目录后，这里会显示存储空间。", Er = "把媒体目录归进媒体库后，这里会按库显示视频数。", Dr = "探测时长后，这里会显示时长分布。", Or = "探测画质后，这里会显示画质分布。", kr = "开始播放后，这里会显示播放落在一周的哪些时段。", Ar = "开始播放后，这里会显示每个作品播了几次。", jr = (e, t) => Math.min(Math.max(e, 0), t);
function Z({ term: e, value: t }) {
	return /* @__PURE__ */ j("div", {
		className: "flex min-h-16 min-w-0 flex-col gap-1.5 rounded-2lg bg-background-primary-default p-3",
		children: [/* @__PURE__ */ A("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: e
		}), /* @__PURE__ */ A("b", {
			className: "text-title-3-medium tabular-nums text-text-primary",
			children: D(t)
		})]
	});
}
function Q({ term: e, value: t, total: n }) {
	let r = Math.max(n, 1);
	return /* @__PURE__ */ j("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ j("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ A("span", { children: e }), /* @__PURE__ */ j("b", {
				className: "tabular-nums",
				children: [D(t), M(t) ? /* @__PURE__ */ A("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: ie(t, n)
				}) : null]
			})]
		}), /* @__PURE__ */ A(u, {
			meter: !0,
			label: `${e}：${D(t)} / ${n.toLocaleString()}`,
			value: M(t) ? jr(t, r) : 0,
			max: r
		})]
	});
}
function Mr({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ j("div", {
		className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-64 md:pr-6 md:pb-0",
		children: [
			/* @__PURE__ */ A("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ A("b", {
				className: "text-display-4-medium tabular-nums text-text-primary",
				children: t
			}),
			/* @__PURE__ */ A("span", {
				className: "text-body-2-regular text-text-secondary",
				children: n
			})
		]
	});
}
function Nr({ headline: e, children: t }) {
	return /* @__PURE__ */ j("div", {
		className: `${br} md:flex-row md:gap-6`,
		children: [e, /* @__PURE__ */ A("div", {
			className: "min-w-0 grow",
			children: t
		})]
	});
}
function Pr({ data: e }) {
	return e.by_loc.reduce((e, t) => e + t.videos, 0) ? /* @__PURE__ */ j("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ j("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ A(hr, {
				title: "网盘与本地",
				empty: xr,
				rows: e.by_loc.map((e) => ({
					name: o[e.k] ?? e.k,
					value: e.videos,
					bytes: e.bytes,
					mark: s[e.k] || "database"
				}))
			}), /* @__PURE__ */ A(hr, {
				title: "媒体库",
				empty: Er,
				rows: e.by_library.map((e) => ({
					name: e.name,
					value: e.videos,
					bytes: e.bytes,
					mark: s[e.icon] || e.icon || "database"
				}))
			})]
		}), /* @__PURE__ */ j("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ A(N, {
					title: "时长",
					unit: "个视频",
					series: "视频",
					color: vr,
					rows: te(e.by_length),
					empty: Dr
				}),
				/* @__PURE__ */ A(N, {
					title: "画质",
					unit: "个视频",
					series: "视频",
					color: vr,
					rows: C(e.by_quality),
					empty: Or
				}),
				/* @__PURE__ */ A(N, {
					title: "文件类型",
					unit: "个条目",
					series: "条目",
					color: vr,
					layout: "horizontal",
					rows: re(e.by_medium),
					empty: xr
				})
			]
		})]
	}) : /* @__PURE__ */ A(a, {
		icon: c,
		title: "还没有视频",
		actions: /* @__PURE__ */ j(k.Fragment, { children: [/* @__PURE__ */ A(i, {
			variant: "secondary",
			href: "/subscriptions?tab=add",
			size: "small",
			children: "添加关注"
		}), /* @__PURE__ */ A(i, {
			variant: "primary",
			href: gr,
			size: "small",
			children: "添加媒体"
		})] }),
		children: xr
	});
}
function Fr({ data: e }) {
	return /* @__PURE__ */ j(k.Fragment, { children: [/* @__PURE__ */ A(be, {
		activity: e.play_activity,
		title: "播放时间",
		dailyTitle: "每日播放",
		words: {
			unit: "个作品",
			series: "作品",
			cellUnit: "个作品"
		},
		tone: 5,
		empty: kr
	}), /* @__PURE__ */ A(N, {
		title: "播放次数",
		unit: "个作品",
		series: "作品",
		color: yr,
		rows: fe(e.replays),
		empty: Ar
	})] });
}
function Ir({ attribution: e }) {
	let t = e.videos;
	return /* @__PURE__ */ j("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ A(Q, {
				term: "有创作者",
				value: e.creator,
				total: t
			}),
			/* @__PURE__ */ A(Q, {
				term: "有番号",
				value: e.code,
				total: t
			}),
			/* @__PURE__ */ A(Q, {
				term: "有厂牌",
				value: e.studio,
				total: t
			}),
			/* @__PURE__ */ A(Q, {
				term: "已抽帧",
				value: e.thumb,
				total: t
			}),
			/* @__PURE__ */ A(Q, {
				term: "已探测时长",
				value: e.duration,
				total: t
			})
		]
	});
}
function Lr({ volume: e }) {
	let t = e.total, n = e.used ?? 0;
	return /* @__PURE__ */ j("article", {
		className: "flex min-w-0 flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [
			/* @__PURE__ */ j("header", {
				className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
				children: [/* @__PURE__ */ A("h3", {
					className: "min-w-0 break-words",
					children: e.label
				}), t == null ? e.online ? /* @__PURE__ */ A(v, { children: "容量未取得" }) : /* @__PURE__ */ A(Gt, { online: !1 }) : /* @__PURE__ */ j("b", {
					className: "whitespace-nowrap tabular-nums",
					children: [O(n), /* @__PURE__ */ A("span", {
						className: "ml-1.5 text-caption-1-regular text-text-secondary",
						children: ie(n, t)
					})]
				})]
			}),
			t == null ? null : /* @__PURE__ */ A(u, {
				meter: !0,
				label: `${e.label}空间使用率`,
				value: jr(n, Math.max(t, 1)),
				max: Math.max(t, 1)
			}),
			/* @__PURE__ */ j("p", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: [/* @__PURE__ */ A("span", {
					className: "min-w-0 break-words",
					children: e.root ?? "未映射"
				}), t == null ? null : /* @__PURE__ */ A("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `可用 ${O(e.free ?? 0)} · 共 ${O(t)}`
				})]
			})
		]
	});
}
function Rr({ volumes: e }) {
	return e.length ? /* @__PURE__ */ A("div", {
		className: "flex flex-col",
		children: e.map((e) => /* @__PURE__ */ A(Lr, { volume: e }, `${e.kind}:${e.label}`))
	}) : /* @__PURE__ */ A(a, {
		icon: y,
		title: "还没有存储来源",
		actions: /* @__PURE__ */ A(i, {
			variant: "primary",
			href: gr,
			size: "small",
			children: "添加媒体"
		}),
		children: Tr
	});
}
function zr({ tags: e, tagLabel: t, onTag: n, hasMedia: r }) {
	return e.length ? /* @__PURE__ */ A(xe, {
		previewCount: _r,
		className: "inline-grid w-full gap-x-6 gap-y-1 sm:grid-cols-2",
		children: e.map((e, r) => /* @__PURE__ */ A("li", {
			className: "min-w-0",
			children: /* @__PURE__ */ j("button", {
				type: "button",
				onClick: () => n(e.k),
				className: "flex min-h-11 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: [
					/* @__PURE__ */ A("span", {
						className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
						children: r + 1
					}),
					/* @__PURE__ */ A("span", {
						className: "min-w-0 grow text-body-2-regular break-words text-text-primary",
						children: t(e.k)
					}),
					/* @__PURE__ */ A("b", {
						className: "text-body-2-medium tabular-nums text-text-secondary",
						children: e.n.toLocaleString()
					})
				]
			})
		}, `${e.k}:${r}`))
	}) : /* @__PURE__ */ A(a, {
		icon: ne,
		title: "还没有内容标签",
		actions: /* @__PURE__ */ A(i, {
			variant: "secondary",
			href: r ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: r ? "补全资料" : "添加媒体"
		}),
		children: Sr
	});
}
function Br({ rows: e, hasMedia: t }) {
	return e.length ? /* @__PURE__ */ A("div", {
		className: "flex flex-col gap-5",
		children: e.map((e) => {
			let t = ye(e);
			return /* @__PURE__ */ j("article", {
				className: "flex flex-wrap items-center gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ j("div", {
					className: "min-w-0 grow basis-64",
					children: [/* @__PURE__ */ A("h3", {
						className: "min-w-0 text-body-2-medium text-text-primary",
						children: /* @__PURE__ */ A("a", {
							href: oe(e),
							"data-middle-truncate": !0,
							className: "block max-w-full overflow-hidden whitespace-nowrap hover:underline",
							children: e.name
						})
					}), /* @__PURE__ */ j("p", {
						className: "flex flex-wrap gap-3 text-caption-1-regular text-text-secondary",
						children: [e.creator ? /* @__PURE__ */ A("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.creator
						}) : null, /* @__PURE__ */ A("span", { children: ve(e) })]
					})]
				}), /* @__PURE__ */ j("div", {
					className: "min-w-0 basis-40",
					children: [/* @__PURE__ */ A(u, {
						meter: !0,
						label: `真实观看 ${t.toFixed(0)}%`,
						value: t
					}), /* @__PURE__ */ A("small", {
						className: "mt-1.5 block text-caption-1-regular text-text-secondary",
						children: `真实 ${t.toFixed(0)}% · 到达 ${de(e).toFixed(0)}%`
					})]
				})]
			}, `${e.kind}:${e.id}`);
		})
	}) : /* @__PURE__ */ A(a, {
		icon: ge,
		title: "还没有观看记录",
		actions: /* @__PURE__ */ A(i, {
			variant: "secondary",
			href: t ? "/" : "/settings/library",
			size: "small",
			children: t ? "浏览馆藏" : "添加媒体"
		}),
		children: Cr
	});
}
function Vr({ sources: e, videos: t }) {
	return e.length ? /* @__PURE__ */ A("div", {
		className: "inline-grid w-full gap-x-8 gap-y-6 sm:grid-cols-2",
		children: e.map((e) => /* @__PURE__ */ j("article", {
			className: "flex min-w-0 flex-col gap-1.5",
			children: [
				/* @__PURE__ */ j("header", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ A("h3", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.k
					}), /* @__PURE__ */ j("b", {
						className: "text-body-2-medium whitespace-nowrap text-text-primary",
						children: [e.assets.toLocaleString(), /* @__PURE__ */ A("small", {
							className: "ml-1 text-caption-1-regular font-normal text-text-secondary",
							children: "个视频"
						})]
					})]
				}),
				/* @__PURE__ */ A(u, {
					meter: !0,
					label: `${e.k} 覆盖视频`,
					value: jr(e.assets, Math.max(t, 1)),
					max: Math.max(t, 1)
				}),
				/* @__PURE__ */ j("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: [e.n.toLocaleString(), " 条标签"]
				})
			]
		}, e.k))
	}) : /* @__PURE__ */ A(a, {
		icon: ne,
		title: "还没有标签来源",
		actions: /* @__PURE__ */ A(i, {
			variant: "secondary",
			href: t ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: t ? "补全资料" : "添加媒体"
		}),
		children: wr
	});
}
function $({ id: e, label: n, figure: r, detail: i, icon: a, accent: o }) {
	return /* @__PURE__ */ A(t, {
		id: e,
		className: he({
			interactive: !0,
			selectable: !0
		}),
		children: /* @__PURE__ */ A(_, {
			label: n,
			icon: a,
			accent: o,
			figure: r,
			footer: i
		})
	});
}
function Hr(i) {
	let a = _e({
		queryKey: p,
		queryFn: ({ signal: e }) => ee(e)
	}), o = a.data;
	if (!o) return /* @__PURE__ */ A(Kt, { children: /* @__PURE__ */ A(l, {
		tone: "error",
		title: "馆藏统计读取失败",
		children: a.error ? E(a.error) : "未取得统计数据，请刷新页面重试。"
	}) });
	let s = o.consumption, c = o.storage_summary, u = o.by_loc.reduce((e, t) => e + t.videos, 0), g = o.by_loc.reduce((e, t) => e + t.bytes, 0), _ = M(o.tag_cov) ? ie(o.tag_cov, o.attribution.videos) : "未取得", v = `${D(o.tag_cov)} / ${o.attribution.videos.toLocaleString()}`;
	return /* @__PURE__ */ j(Kt, { children: [/* @__PURE__ */ j(n, {
		defaultSelectedKey: "inventory",
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ j(r, {
				"aria-label": "统计视图",
				className: m,
				children: [
					/* @__PURE__ */ A($, {
						id: "inventory",
						label: "馆藏视频",
						icon: x,
						accent: 0,
						figure: u.toLocaleString(),
						detail: O(g)
					}),
					/* @__PURE__ */ A($, {
						id: "viewing",
						label: "看过",
						icon: b,
						accent: 1,
						figure: D(s.played),
						detail: ae(s.play_seconds)
					}),
					/* @__PURE__ */ A($, {
						id: "coverage",
						label: "内容标签",
						icon: ne,
						accent: 2,
						figure: _,
						detail: v
					}),
					/* @__PURE__ */ A($, {
						id: "storage",
						label: "使用空间",
						icon: y,
						accent: 3,
						figure: `${c.online.toLocaleString()} 个卷`,
						detail: c.measured ? `已用 ${O(c.used)}` : "容量未取得"
					})
				]
			}),
			/* @__PURE__ */ A(e, {
				id: "inventory",
				children: /* @__PURE__ */ A(Pr, {
					data: o,
					...i
				})
			}),
			/* @__PURE__ */ j(e, {
				id: "viewing",
				className: "flex flex-col gap-5",
				children: [/* @__PURE__ */ A(Nr, {
					headline: /* @__PURE__ */ A(Mr, {
						term: "观看",
						figure: D(s.played),
						unit: "个作品有播放记录"
					}),
					children: /* @__PURE__ */ j("div", {
						className: "inline-grid w-full gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ A(Z, {
								term: "馆藏观看",
								value: s.library_played
							}),
							/* @__PURE__ */ A(Z, {
								term: "在线直接观看",
								value: s.online_played
							}),
							/* @__PURE__ */ A(Z, {
								term: "高潮计数",
								value: s.o_total
							}),
							/* @__PURE__ */ A(Z, {
								term: "快进扫过",
								value: s.skimmed
							}),
							/* @__PURE__ */ A(Z, {
								term: "喜欢",
								value: s.liked
							}),
							/* @__PURE__ */ A(Z, {
								term: "明确不喜欢",
								value: s.dislike
							}),
							/* @__PURE__ */ A(Z, {
								term: "看过了",
								value: s.seen
							}),
							/* @__PURE__ */ A(Z, {
								term: "回收站",
								value: s.trash
							})
						]
					})
				}), /* @__PURE__ */ A(Fr, { data: o })]
			}),
			/* @__PURE__ */ A(e, {
				id: "coverage",
				children: /* @__PURE__ */ A(Nr, {
					headline: /* @__PURE__ */ A(Mr, {
						term: "内容标签覆盖",
						figure: _,
						unit: v
					}),
					children: /* @__PURE__ */ A(Ir, { attribution: o.attribution })
				})
			}),
			/* @__PURE__ */ A(e, {
				id: "storage",
				children: /* @__PURE__ */ A(Nr, {
					headline: /* @__PURE__ */ A(Mr, {
						term: "使用空间",
						figure: c.measured.toLocaleString(),
						unit: "个卷已取得容量"
					}),
					children: /* @__PURE__ */ A(Rr, {
						volumes: o.storage_volumes,
						...i
					})
				})
			})
		]
	}), /* @__PURE__ */ j(n, {
		defaultSelectedKey: "tags",
		className: `${w({ padding: "none" })} flex flex-col`,
		children: [
			/* @__PURE__ */ A("div", {
				className: "px-4 pt-3",
				children: /* @__PURE__ */ j(h, {
					"aria-label": "统计维度",
					className: f,
					children: [
						/* @__PURE__ */ A(t, {
							id: "tags",
							className: d,
							children: "内容标签"
						}),
						/* @__PURE__ */ A(t, {
							id: "recent",
							className: d,
							children: "最近看过"
						}),
						/* @__PURE__ */ A(t, {
							id: "sources",
							className: d,
							children: "标签来源"
						})
					]
				})
			}),
			/* @__PURE__ */ A(e, {
				id: "tags",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ A(zr, {
					tags: o.top_tags,
					hasMedia: u > 0,
					...i
				})
			}),
			/* @__PURE__ */ A(e, {
				id: "recent",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ A(Br, {
					rows: o.recent,
					hasMedia: u > 0
				})
			}),
			/* @__PURE__ */ A(e, {
				id: "sources",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ A(Vr, {
					sources: o.tag_source,
					videos: o.attribution.videos
				})
			})
		]
	})] });
}
export { Hr as StatsPage };

//# debugId=5d664257-7419-4241-93cc-80c6292fa21d