(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f8c6e8cb-1fac-4fe4-8237-a6998b58f940", e._sentryDebugIdIdentifier = "sentry-dbid-f8c6e8cb-1fac-4fe4-8237-a6998b58f940");
	} catch {}
})();
import { AnimatedItems as e, CHART_CARD as t, CHART_COLORS as n, Cell as r, ChartBackground as i, ChartContainer as a, ChartEmpty as o, ChartLegend as s, ChartLegendContent as c, ChartTip as l, ChartTooltip as u, ChartTooltipContent as d, DefaultZIndexes as f, LabelListFromLabelProp as p, Layer as m, LoadingIndicator as h, PolarChart as g, PolarLabelListContextProvider as _, RegisterGraphicalItemId as v, Sector as y, SetPolarGraphicalItem as b, SetPolarLegendPayload as x, SetTooltipEntrySettings as S, Shape as C, ZIndexLayer as w, adaptEventsOfChild as T, arrayTooltipSearcher as E, combineAllBarPositions as ee, combineBarPosition as D, combineBarSizeList as te, combineDisplayedStackedData as ne, combineStackGroups as re, combineStackedData as ie, createSelector as O, defaultPolarChartProps as ae, findAllByType as oe, getBandSizeOfAxis as k, getBaseValueOfBar as se, getCateCoordinateOfBar as ce, getColorsCount as le, getNormalizedStackId as ue, getTooltipNameProp as de, getValueByDataKey as fe, getZIndexFromUnknown as pe, interpolate as me, isCategoricalAxis as he, isNullish as ge, isStacked as _e, matchAppend as ve, mathSign as ye, noop as be, resolveDefaultProps as xe, selectActiveTooltipIndex as Se, selectAngleAxis as Ce, selectBarCategoryGap as we, selectBarGap as Te, selectChartDataAndAlwaysIgnoreIndexes as Ee, selectChartDataWithIndexes as De, selectChartLayout as A, selectPolarItemsSettings as Oe, selectPolarViewBox as ke, selectRadiusAxis as Ae, selectReverseStackOrder as je, selectRootBarSize as Me, selectRootMaxBarSize as Ne, selectStackOffsetType as Pe, selectTooltipAxis as Fe, selectUnfilteredPolarItems as Ie, sliceConfig as Le, sliceKey as Re, svgPropertiesNoEvents as ze, svgPropertiesNoEventsFromUnknown as Be, truncateByDomain as Ve, useAnimationCallbacks as He, useAppSelector as Ue, useMouseClickItemDispatch as We, useMouseEnterItemDispatch as Ge, useMouseLeaveItemDispatch as Ke, usePolarChartLayout as qe } from "./peach-app.chart-tip-BGeaXdeB.js";
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as j, $b4f18e3395fe64d7$export$3e41faf802a29e71 as M, $b4f18e3395fe64d7$export$b2539bed5023c21c as Je, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as Ye, ButtonLink as N, EmptyState as P, LOC as Xe, MEDIA_SOURCE_ICONS as Ze, NR as Qe, Note as $e, Progress as F, SEGMENT as et, SEGMENTED_TRACK as tt, STATS_KEY as nt, SegmentedTabList as rt, SourceMark as it, StatusLabel as at, Xc as ot, Xt as st, _8 as ct, __toESM as lt, bandRows as ut, cardClass as dt, clsx as ft, errorMessage as pt, fetchStats as mt, fmtCount as I, fmtSize as L, import_jsx_runtime as R, jsx as z, jsxs as B, known as ht, lengthRows as gt, mM as _t, mediumRows as vt, percentText as yt, playedFor as bt, playedItemUrl as xt, radialArc as St, radialBarSize as Ct, radialCeiling as wt, radialSlices as Tt, reachedShare as Et, replayRows as Dt, require_react as Ot, settingsPath as kt, uo as At, useQuery as jt, watchNote as Mt, watchedShare as Nt } from "./peach-app.js";
import { Page as Pt } from "./peach-app.page-CW3QRN2N.js";
import { STAT_STRIP as Ft, StatCard as It, statCardClass as Lt } from "./peach-app.stat-card-4sRHYGSD.js";
import { ConnectionStatus as Rt } from "./peach-app.connection-status-BjZE05sg.js";
import { ActivityHeat as zt, BarCard as V, ExpandableRanking as Bt, PolarAngleAxis as Vt, selectPolarAxisScale as Ht, selectPolarAxisTicks as Ut, selectPolarGraphicalItemAxisTicks as Wt } from "./peach-app.expandable-ranking-D8ZeeCn4.js";
// node_modules/recharts/es6/util/RadialBarUtils.js
var H = /* @__PURE__ */ lt(Ot()), Gt = ["option"];
function Kt(e, t) {
	if (e == null) return {};
	var n, r, i = qt(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function qt(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Jt = y;
function Yt(e) {
	return typeof e == "string" ? parseInt(e, 10) : e;
}
function Xt(e) {
	var t = e.option, n = Kt(e, Gt);
	return /*#__PURE__*/ H.createElement(C, {
		option: t,
		DefaultShape: Jt,
		shapeProps: n
	});
}
// node_modules/recharts/es6/state/selectors/radialBarSelectors.js
function Zt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function U(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Zt(Object(n), !0).forEach(function(t) {
			Qt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Qt(e, t, n) {
	return (t = $t(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function $t(e) {
	var t = en(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function en(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var W = O([(e, t) => Ae(e, t), (e, t) => Ht(e, "radiusAxis", t)], (e, t) => {
	if (e != null && t != null) return U(U({}, e), {}, { scale: t });
}), tn = (e, t) => Wt(e, "radiusAxis", t, !1), G = O([(e, t, n) => Ce(e, n), (e, t, n) => Ht(e, "angleAxis", n)], (e, t) => {
	if (e != null && t != null) return U(U({}, e), {}, { scale: t });
}), nn = (e, t, n) => Ut(e, "angleAxis", n, !1), rn = O([Ie, (e, t, n, r) => r], (e, t) => {
	if (e.some((e) => e.type === "radialBar" && t.dataKey === e.dataKey && t.stackId === e.stackId)) return t;
}), an = O([
	A,
	W,
	tn,
	G,
	nn
], (e, t, n, r, i) => he(e, "radiusAxis") ? k(t, n, !1) : k(r, i, !1)), on = O([
	G,
	W,
	A
], (e, t, n) => {
	var r = n === "radial" ? e : t;
	if (r != null && r.scale != null) return se({ numericAxis: r });
}), sn = (e, t, n, r, i) => i, cn = (e, t, n, r, i) => n, ln = (e, t, n, r, i) => t, un = (e, t, n, r, i) => r.maxBarSize, dn = (e) => e.type === "radialBar", fn = O([
	A,
	Ie,
	cn,
	ln
], (e, t, n, r) => t.filter((t) => e === "centric" ? t.angleAxisId === n : t.radiusAxisId === r).filter((e) => e.hide === !1).filter(dn)), pn = O([
	fn,
	Me,
	() => void 0
], te), mn = O([
	A,
	Ne,
	G,
	nn,
	W,
	tn,
	un
], (e, t, n, r, i, a, o) => {
	var s = ge(o) ? t : o;
	return e === "centric" ? k(n, r, !0) ?? s ?? 0 : k(i, a, !0) ?? s ?? 0;
}), hn = O([
	pn,
	Ne,
	Te,
	we,
	mn,
	an,
	un
], ee), gn = O([hn, rn], D), _n = O([Oe], (e) => e.filter(dn).filter(_e)), vn = O([
	_n,
	Ee,
	Fe
], ne), yn = O([
	vn,
	_n,
	Pe,
	je
], re), bn = O([(e, t, n) => A(e) === "centric" ? yn(e, "radiusAxis", t) : yn(e, "angleAxis", n), rn], ie), xn = O([
	G,
	nn,
	W,
	tn,
	De,
	rn,
	an,
	A,
	on,
	ke,
	sn,
	gn,
	bn
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = i.chartData, m = i.dataStartIndex, h = i.dataEndIndex;
	if (a == null || n == null || e == null || p == null || o == null || d == null || s !== "centric" && s !== "radial" || r == null || l == null) return [];
	var g = a.dataKey, _ = a.minPointSize, v = l.cx, y = l.cy, b = l.startAngle, x = l.endAngle;
	return Hn({
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
}), Sn = O([Ee, (e, t) => t], (e, t) => {
	var n = e.chartData, r = e.dataStartIndex, i = e.dataEndIndex;
	if (n == null) return [];
	var a = n.slice(r, i + 1);
	return a.length === 0 ? [] : a.map((e) => ({
		type: t,
		value: e.name,
		color: e.fill,
		payload: e
	}));
}), Cn = [
	"shape",
	"activeShape",
	"cornerRadius",
	"id"
], wn = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], Tn = ["value", "background"];
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function En(e, t) {
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
		t % 2 ? En(Object(n), !0).forEach(function(t) {
			Dn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : En(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Dn(e, t, n) {
	return (t = On(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function On(e) {
	var t = kn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function kn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function An(e, t) {
	if (e == null) return {};
	var n, r, i = jn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function jn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Mn = [];
function Nn(e) {
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
	return /*#__PURE__*/ H.createElement(_, { value: t ? i : void 0 }, r);
}
function Pn(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = e.showLabels, i = e.animationElapsedTime, a = e.isAnimating, o = e.isEntrance, s = n.shape, c = n.activeShape, l = n.cornerRadius, u = n.id, d = An(n, Cn), m = ze(d), h = Ue(Se), g = n.onMouseEnter, _ = n.onClick, v = n.onMouseLeave, y = An(n, wn), b = Ge(g, n.dataKey, u), x = Ke(v), S = We(_, n.dataKey, u);
	return t == null ? null : /*#__PURE__*/ H.createElement(Nn, {
		showLabels: r,
		sectors: t
	}, t.map((e, t) => {
		var n = !!(c && h === String(t)), r = b(e, t), u = x(e, t), p = S(e, t), g = q(q(q(q({}, m), {}, { cornerRadius: Yt(l) }, e), T(y, e, t)), {}, {
			onMouseEnter: r,
			onMouseLeave: u,
			onClick: p,
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
		return n ? /*#__PURE__*/ H.createElement(w, {
			zIndex: f.activeBar,
			key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}`
		}, /*#__PURE__*/ H.createElement(Xt, g)) : /*#__PURE__*/ H.createElement(Xt, K({ key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}` }, g));
	}), /*#__PURE__*/ H.createElement(p, { label: n.label }), n.children);
}
var Fn = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [q(q({}, e.next), {}, {
	startAngle: me(e.prev.startAngle, e.next.startAngle, t),
	endAngle: me(e.prev.endAngle, e.next.endAngle, t)
})] : [q(q({}, e.next), {}, { endAngle: me(e.next.startAngle, e.next.endAngle, t) })]);
function In(t) {
	var n = t.props, r = t.previousSectorsRef, i = n.sectors, a = n.isAnimationActive, o = n.animationBegin, s = n.animationDuration, c = n.animationEasing, l = n.onAnimationStart, u = n.onAnimationEnd, d = He(l, u), f = d.isAnimating, p = d.handleAnimationStart, m = d.handleAnimationEnd, h = qe();
	return h == null ? null : /*#__PURE__*/ H.createElement(e, {
		animationInput: n,
		animationIdPrefix: "recharts-radialbar-",
		items: i,
		previousItemsRef: r,
		isAnimationActive: a,
		animationBegin: o,
		animationDuration: s,
		animationEasing: c,
		onAnimationStart: p,
		onAnimationEnd: m,
		animationInterpolateFn: n.animationInterpolateFn,
		animationMatchBy: n.animationMatchBy,
		layout: h
	}, (e, t, r) => /*#__PURE__*/ H.createElement(Pn, {
		sectors: e,
		allOtherRadialBarProps: n,
		showLabels: !f,
		animationElapsedTime: t,
		isAnimating: f || t < 1,
		isEntrance: r
	}));
}
function Ln(e) {
	var t = (0, H.useRef)(null);
	return /*#__PURE__*/ H.createElement(In, {
		props: e,
		previousSectorsRef: t
	});
}
function Rn(e) {
	var t = Ue((t) => Sn(t, e.legendType));
	return /*#__PURE__*/ H.createElement(x, { legendPayload: t ?? [] });
}
var zn = /*#__PURE__*/ H.memo((e) => {
	var t = e.dataKey, n = e.sectors, r = e.stroke, i = e.strokeWidth, a = e.name, o = e.hide, s = e.fill, c = e.tooltipType, l = e.formatter, u = e.id, d = {
		dataDefinedOnItem: n,
		getPosition: be,
		settings: {
			graphicalItemId: u,
			stroke: r,
			strokeWidth: i,
			fill: s,
			nameKey: void 0,
			dataKey: t,
			name: de(a, t),
			hide: o,
			type: c,
			color: s,
			unit: "",
			formatter: l
		}
	};
	return /*#__PURE__*/ H.createElement(S, { tooltipEntrySettings: d });
}), Bn = class extends H.PureComponent {
	renderBackground(e) {
		if (e == null) return null;
		var t = this.props.cornerRadius, n = Be(this.props.background);
		return /*#__PURE__*/ H.createElement(w, { zIndex: pe(this.props.background, f.barBackground) }, e.map((e, r) => {
			e.value;
			var i = e.background, a = An(e, Tn);
			if (!i) return null;
			var o = q(q(q(q(q({ cornerRadius: Yt(t) }, a), {}, { fill: "#eee" }, i), n), T(this.props, e, r)), {}, {
				index: r,
				className: ft("recharts-radial-bar-background-sector", String(n?.className)),
				option: i,
				isActive: !1
			});
			return /*#__PURE__*/ H.createElement(Xt, K({ key: `background-${a.cx}-${a.cy}-${a.innerRadius}-${a.outerRadius}-${a.startAngle}-${a.endAngle}-${r}` }, o));
		}));
	}
	render() {
		var e = this.props, t = e.hide, n = e.sectors, r = e.className, i = e.background;
		if (t) return null;
		var a = ft("recharts-area", r);
		return /*#__PURE__*/ H.createElement(w, { zIndex: this.props.zIndex }, /*#__PURE__*/ H.createElement(m, { className: a }, i && /*#__PURE__*/ H.createElement(m, { className: "recharts-radial-bar-background" }, this.renderBackground(n)), /*#__PURE__*/ H.createElement(m, { className: "recharts-radial-bar-sectors" }, /*#__PURE__*/ H.createElement(Ln, this.props))));
	}
};
function Vn(e) {
	var t = H.useMemo(() => oe(e.children, r), [e.children]), n = H.useMemo(() => ({
		data: void 0,
		hide: !1,
		id: e.id,
		dataKey: e.dataKey,
		minPointSize: e.minPointSize,
		stackId: ue(e.stackId),
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
	]), i = Ue((r) => xn(r, e.radiusAxisId, e.angleAxisId, n, t)) ?? Mn;
	return /*#__PURE__*/ H.createElement(H.Fragment, null, /*#__PURE__*/ H.createElement(zn, {
		dataKey: e.dataKey,
		sectors: i,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		name: e.name,
		hide: e.hide,
		fill: e.fill,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: e.id
	}), /*#__PURE__*/ H.createElement(Bn, K({}, e, { sectors: i })));
}
var J = {
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: ve,
	animationInterpolateFn: Fn,
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
	shape: Jt,
	zIndex: f.bar
};
function Hn(e) {
	var t = e.displayedData, n = e.stackedData, r = e.dataStartIndex, i = e.stackedDomain, a = e.dataKey, o = e.baseValue, s = e.layout, c = e.radiusAxis, l = e.radiusAxisTicks, u = e.bandSize, d = e.pos, f = e.angleAxis, p = e.minPointSize, m = e.cx, h = e.cy, g = e.angleAxisTicks, _ = e.cells, v = e.startAngle, y = e.endAngle;
	return g == null || l == null ? Mn : (t ?? []).map((e, t) => {
		var b, x, S, C, w, T;
		if (n ? b = Ve(n[r + t], i) : (b = fe(e, a), Array.isArray(b) || (b = [o, b])), s === "radial") {
			if (C = f.scale.map(b[0]) ?? v, w = f.scale.map(b[1]) ?? y, x = ce({
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
					var ee = ye(E || p) * (Math.abs(p) - Math.abs(E));
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
		} else if (x = c.scale.map(b[0]), S = c.scale.map(b[1]), C = ce({
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
				var te = ye(D || p) * (Math.abs(p) - Math.abs(D));
				S += te;
			}
		}
		return q(q(q({}, e), T), {}, {
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
function Un(e) {
	var t = xe(e, J);
	return /*#__PURE__*/ H.createElement(v, {
		id: t.id,
		type: "radialBar"
	}, (e) => /*#__PURE__*/ H.createElement(H.Fragment, null, /*#__PURE__*/ H.createElement(b, {
		type: "radialBar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide ?? J.hide,
		angleAxisId: t.angleAxisId ?? J.angleAxisId,
		radiusAxisId: t.radiusAxisId ?? J.radiusAxisId,
		stackId: ue(t.stackId),
		barSize: t.barSize,
		minPointSize: t.minPointSize,
		maxBarSize: t.maxBarSize
	}), /*#__PURE__*/ H.createElement(Rn, t), /*#__PURE__*/ H.createElement(Vn, K({}, t, { id: e }))));
}
Un.displayName = "RadialBar";
// node_modules/recharts/es6/chart/RadialBarChart.js
function Wn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Gn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wn(Object(n), !0).forEach(function(t) {
			Kn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Kn(e, t, n) {
	return (t = qn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function qn(e) {
	var t = Jn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Jn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Yn = ["axis", "item"], Xn = Gn(Gn({}, ae), {}, {
	layout: "radial",
	startAngle: 0,
	endAngle: 360
}), Zn = /*#__PURE__*/ (0, H.forwardRef)((e, t) => {
	var n = xe(e, Xn);
	return /*#__PURE__*/ H.createElement(g, {
		chartName: "RadialBarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Yn,
		tooltipPayloadSearcher: E,
		categoricalChartProps: n,
		ref: t
	});
}), Qn = "30%", $n = "100%", er = 5, tr = 14, nr = 5, rr = 1500, ir = (0, H.createContext)(null);
function ar() {
	let e = (0, H.use)(ir);
	if (!e) throw Error("Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <EvilRadialChart />");
	return e;
}
function Y({ config: e, data: t, nameKey: n, children: r, className: o, chartProps: s, variant: c = "full", max: l, innerRadius: u = Qn, outerRadius: d = $n, defaultSelectedDataKey: f = null, onSelectionChange: p, isLoading: m = !1, backgroundVariant: g }) {
	let _ = (0, H.useId)().replace(/:/g, ""), [v, y] = (0, H.useState)(f), b = fr(m), x = lr(c), S = (0, H.useCallback)((e, t) => {
		y(e), p?.(e === null ? null : {
			dataKey: e,
			value: t ?? 0
		});
	}, [p]), C = (0, H.useMemo)(() => t.map((e) => ({
		...e,
		fill: `url(#${_}-radial-colors-${e[n]})`
	})), [
		t,
		n,
		_
	]), w = (0, H.useMemo)(() => ({
		config: e,
		nameKey: n,
		chartId: _,
		isLoading: m,
		selectedBar: v,
		selectBar: S
	}), [
		e,
		n,
		_,
		m,
		v,
		S
	]);
	return /* @__PURE__ */ z(ir, {
		value: w,
		children: /* @__PURE__ */ B(a, {
			className: o,
			config: e,
			children: [/* @__PURE__ */ z(h, { isLoading: m }), /* @__PURE__ */ B(Zn, {
				id: _,
				data: m ? b : C,
				innerRadius: u,
				outerRadius: d,
				startAngle: x.startAngle,
				endAngle: x.endAngle,
				cx: x.cx,
				cy: x.cy,
				...s,
				children: [
					l != null && l > 0 && /* @__PURE__ */ z(Vt, {
						type: "number",
						domain: [0, l],
						tick: !1,
						axisLine: !1
					}),
					g && /* @__PURE__ */ z(i, { variant: g }),
					r,
					m && /* @__PURE__ */ z(pr, {}),
					/* @__PURE__ */ z("defs", { children: /* @__PURE__ */ z(ur, {
						config: e,
						chartId: _
					}) })
				]
			})]
		})
	});
}
function or({ dataKey: e, cornerRadius: t = er, barSize: n = tr, showBackground: r = !0, isClickable: i = !1, radialBarProps: a }) {
	let { nameKey: o, isLoading: s, selectedBar: c, selectBar: l } = ar();
	return s ? null : /* @__PURE__ */ z(Un, {
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
			return /* @__PURE__ */ z(y, {
				...e,
				opacity: i && !n ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...a
	});
}
function sr({ variant: e, roundness: t, defaultIndex: n }) {
	let { nameKey: r, isLoading: i } = ar();
	return i ? null : /* @__PURE__ */ z(u, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ z(d, {
			nameKey: r,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function cr({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, isLoading: a, selectedBar: o, selectBar: l } = ar();
	return a ? null : /* @__PURE__ */ z(s, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ z(c, {
			selected: o,
			onSelectChange: l,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function lr(e) {
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
var ur = ({ config: e, chartId: t }) => /* @__PURE__ */ z(R.Fragment, { children: Object.entries(e).map(([e, n]) => {
	let r = le(n);
	return /* @__PURE__ */ z("linearGradient", {
		id: `${t}-radial-colors-${e}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ B(R.Fragment, { children: [/* @__PURE__ */ z("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ z("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: r }, (t, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ z("stop", {
				offset: i,
				stopColor: `var(--color-${e}-${n}, var(--color-${e}-0))`
			}, i);
		})
	}, `${t}-radial-colors-${e}`);
}) });
function dr() {
	return Array.from({ length: nr }, (e, t) => ({
		name: `loading${t}`,
		value: 40 + Math.random() * 60
	}));
}
function fr(e) {
	let [t, n] = (0, H.useState)(0);
	return (0, H.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			n((e) => e + 1);
		}, rr);
		return () => clearInterval(t);
	}, [e]), (0, H.useMemo)(() => dr(), [t]);
}
var pr = () => /* @__PURE__ */ z(Un, {
	dataKey: "value",
	cornerRadius: er,
	barSize: tr,
	background: !0,
	isAnimationActive: !0,
	animationDuration: rr,
	animationEasing: "ease-in-out",
	shape: (e) => /* @__PURE__ */ z(y, {
		...e,
		fill: "currentColor",
		fillOpacity: .25
	})
});
Y.RadialBar = or, Y.Tooltip = sr, Y.Legend = cr;
// src/react/stats/radial-card.tsx
var mr = [
	"bg-chart-1",
	"bg-chart-2",
	"bg-chart-3",
	"bg-chart-4",
	"bg-chart-5",
	"bg-chart-6"
], hr = [
	"aria-pressed:bg-chart-1/10 aria-pressed:ring-chart-1",
	"aria-pressed:bg-chart-2/10 aria-pressed:ring-chart-2",
	"aria-pressed:bg-chart-3/10 aria-pressed:ring-chart-3",
	"aria-pressed:bg-chart-4/10 aria-pressed:ring-chart-4",
	"aria-pressed:bg-chart-5/10 aria-pressed:ring-chart-5",
	"aria-pressed:bg-chart-6/10 aria-pressed:ring-chart-6"
];
function gr({ title: e, rows: n, empty: r, unit: i = "个视频" }) {
	let [a, s] = (0, H.useState)(-1), [c, u] = (0, H.useState)(-1), d = Tt(n);
	if (!d.length) return /* @__PURE__ */ z(o, {
		title: e,
		children: r
	});
	let f = c >= 0 ? c : a, p = d.reduce((e, t) => e + t.value, 0), m = d[f], h = (e) => s((t) => t === e ? -1 : e), g = wt(d.map((e) => e.value)), _ = d.map((e, t) => ({
		slice: Re(t),
		value: e.value,
		arc: St(e.value, g)
	}));
	return /* @__PURE__ */ B("section", {
		className: t,
		children: [
			/* @__PURE__ */ B("header", {
				className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ B("span", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ B("h3", {
						className: "flex items-center gap-1.5 text-title-2-medium wrap-anywhere text-text-primary",
						children: [m?.mark ? /* @__PURE__ */ z(it, { mark: m.mark }) : null, m ? m.name : e]
					}), /* @__PURE__ */ z("b", {
						className: "text-display-4-medium tabular-nums text-text-primary",
						children: (m ? m.value : p).toLocaleString()
					})]
				}), /* @__PURE__ */ z("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: i
				})]
			}),
			/* @__PURE__ */ z("div", {
				role: "img",
				"aria-label": e,
				onPointerLeave: () => u(-1),
				children: /* @__PURE__ */ B(Y, {
					data: _,
					nameKey: "slice",
					config: Le(d.map((e) => e.name)),
					max: g,
					innerRadius: "22%",
					className: "aspect-auto h-75 max-sm:h-65",
					children: [/* @__PURE__ */ z(Y.RadialBar, {
						dataKey: "arc",
						barSize: Ct(d.length),
						radialBarProps: {
							shape: (e) => /* @__PURE__ */ z(y, {
								...e,
								opacity: f >= 0 && f !== e.index ? .3 : 1,
								className: "cursor-pointer transition-opacity duration-200"
							}),
							onClick: (e, t) => h(t),
							onMouseEnter: (e, t) => u(t)
						}
					}), /* @__PURE__ */ z(l, {
						nameKey: "slice",
						valueKey: "value",
						hideLabel: !0
					})]
				})
			}),
			/* @__PURE__ */ z("div", {
				className: "inline-grid w-full grid-cols-3 gap-2 max-sm:grid-cols-2",
				children: d.map((e, t) => /* @__PURE__ */ B("button", {
					type: "button",
					"aria-pressed": a === t,
					onClick: () => h(t),
					onPointerEnter: () => u(t),
					onPointerLeave: () => u(-1),
					onFocus: () => u(t),
					onBlur: () => u(-1),
					className: `flex min-w-0 cursor-pointer flex-col items-start gap-1 rounded-xl bg-background-tertiary-default p-2.5 text-left outline-none aria-pressed:ring-1 aria-pressed:ring-inset focus-visible:ring-2 focus-visible:ring-border-focus-ring ${hr[t % 6]}`,
					children: [
						/* @__PURE__ */ B("span", {
							className: "flex min-w-0 max-w-full items-start gap-1.5 text-caption-1-regular text-text-secondary",
							children: [/* @__PURE__ */ z("i", {
								"aria-hidden": !0,
								className: `mt-0.5 size-3 shrink-0 rounded-sm ${mr[t % 6]}`
							}), /* @__PURE__ */ B("span", {
								className: "inline-flex min-w-0 items-start gap-1.5 wrap-anywhere",
								children: [e.mark ? /* @__PURE__ */ z(it, { mark: e.mark }) : null, e.name]
							})]
						}),
						/* @__PURE__ */ z("b", {
							className: "text-title-2-medium tabular-nums text-text-primary",
							children: e.value.toLocaleString()
						}),
						e.bytes == null ? null : /* @__PURE__ */ z("small", {
							className: "text-caption-1-regular text-text-secondary",
							children: L(e.bytes)
						})
					]
				}, Re(t)))
			})
		]
	});
}
// src/react/stats/stats-page.tsx
var _r = kt("媒体库与入库"), vr = 10, X = n[5], yr = n[4], br = `${dt()} flex flex-col gap-4`, xr = "添加媒体目录或关注来源后，这里会显示馆藏统计。", Sr = "补全资料或添加标签后，这里会显示馆藏中的内容标签。", Cr = "开始播放后，这里会显示最近的真实观看证据。", wr = "补充作品资料或手动添加标签后，这里会显示各个标签来源对应的视频数量。", Tr = "添加媒体目录后，这里会显示存储空间。", Er = "把媒体目录归进媒体库后，这里会按库显示视频数。", Dr = "探测时长后，这里会显示时长分布。", Or = "探测画质后，这里会显示画质分布。", kr = "开始播放后，这里会显示播放落在一周的哪些时段。", Ar = "开始播放后，这里会显示每个作品播了几次。", jr = (e, t) => Math.min(Math.max(e, 0), t);
function Z({ term: e, value: t }) {
	return /* @__PURE__ */ B("div", {
		className: "flex min-h-16 min-w-0 flex-col gap-1.5 rounded-2lg bg-background-primary-default p-3",
		children: [/* @__PURE__ */ z("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: e
		}), /* @__PURE__ */ z("b", {
			className: "text-title-3-medium tabular-nums text-text-primary",
			children: I(t)
		})]
	});
}
function Q({ term: e, value: t, total: n }) {
	let r = Math.max(n, 1);
	return /* @__PURE__ */ B("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ B("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ z("span", { children: e }), /* @__PURE__ */ B("b", {
				className: "tabular-nums",
				children: [I(t), ht(t) ? /* @__PURE__ */ z("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: yt(t, n)
				}) : null]
			})]
		}), /* @__PURE__ */ z(F, {
			label: `${e}：${I(t)} / ${n.toLocaleString()}`,
			value: ht(t) ? jr(t, r) : 0,
			max: r
		})]
	});
}
function Mr({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ B("div", {
		className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-64 md:pr-6 md:pb-0",
		children: [
			/* @__PURE__ */ z("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ z("b", {
				className: "text-display-4-medium tabular-nums text-text-primary",
				children: t
			}),
			/* @__PURE__ */ z("span", {
				className: "text-body-2-regular text-text-secondary",
				children: n
			})
		]
	});
}
function Nr({ headline: e, children: t }) {
	return /* @__PURE__ */ B("div", {
		className: `${br} md:flex-row md:gap-6`,
		children: [e, /* @__PURE__ */ z("div", {
			className: "min-w-0 grow",
			children: t
		})]
	});
}
function Pr({ data: e }) {
	return e.by_loc.reduce((e, t) => e + t.videos, 0) ? /* @__PURE__ */ B("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ B("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ z(gr, {
				title: "网盘与本地",
				empty: xr,
				rows: e.by_loc.map((e) => ({
					name: Xe[e.k] ?? e.k,
					value: e.videos,
					bytes: e.bytes,
					mark: Ze[e.k] || "database"
				}))
			}), /* @__PURE__ */ z(gr, {
				title: "媒体库",
				empty: Er,
				rows: e.by_library.map((e) => ({
					name: e.name,
					value: e.videos,
					bytes: e.bytes,
					mark: Ze[e.icon] || e.icon || "database"
				}))
			})]
		}), /* @__PURE__ */ B("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ z(V, {
					title: "时长",
					unit: "个视频",
					series: "视频",
					color: X,
					rows: gt(e.by_length),
					empty: Dr
				}),
				/* @__PURE__ */ z(V, {
					title: "画质",
					unit: "个视频",
					series: "视频",
					color: X,
					rows: ut(e.by_quality),
					empty: Or
				}),
				/* @__PURE__ */ z(V, {
					title: "文件类型",
					unit: "个条目",
					series: "条目",
					color: X,
					layout: "horizontal",
					rows: vt(e.by_medium),
					empty: xr
				})
			]
		})]
	}) : /* @__PURE__ */ z(P, {
		icon: Qe,
		title: "还没有视频",
		actions: /* @__PURE__ */ B(R.Fragment, { children: [/* @__PURE__ */ z(N, {
			variant: "secondary",
			href: "/subscriptions?tab=add",
			size: "small",
			children: "添加关注"
		}), /* @__PURE__ */ z(N, {
			variant: "primary",
			href: _r,
			size: "small",
			children: "添加媒体"
		})] }),
		children: xr
	});
}
function Fr({ data: e }) {
	return /* @__PURE__ */ B(R.Fragment, { children: [/* @__PURE__ */ z(zt, {
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
	}), /* @__PURE__ */ z(V, {
		title: "播放次数",
		unit: "个作品",
		series: "作品",
		color: yr,
		rows: Dt(e.replays),
		empty: Ar
	})] });
}
function Ir({ attribution: e }) {
	let t = e.videos;
	return /* @__PURE__ */ B("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ z(Q, {
				term: "有创作者",
				value: e.creator,
				total: t
			}),
			/* @__PURE__ */ z(Q, {
				term: "有番号",
				value: e.code,
				total: t
			}),
			/* @__PURE__ */ z(Q, {
				term: "有厂牌",
				value: e.studio,
				total: t
			}),
			/* @__PURE__ */ z(Q, {
				term: "已抽帧",
				value: e.thumb,
				total: t
			}),
			/* @__PURE__ */ z(Q, {
				term: "已探测时长",
				value: e.duration,
				total: t
			})
		]
	});
}
function Lr({ volume: e }) {
	let t = e.total, n = e.used ?? 0;
	return /* @__PURE__ */ B("article", {
		className: "flex min-w-0 flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [
			/* @__PURE__ */ B("header", {
				className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
				children: [/* @__PURE__ */ z("h3", {
					className: "min-w-0 break-words",
					children: e.label
				}), t == null ? e.online ? /* @__PURE__ */ z(at, { children: "容量未取得" }) : /* @__PURE__ */ z(Rt, { online: !1 }) : /* @__PURE__ */ B("b", {
					className: "whitespace-nowrap tabular-nums",
					children: [L(n), /* @__PURE__ */ z("span", {
						className: "ml-1.5 text-caption-1-regular text-text-secondary",
						children: yt(n, t)
					})]
				})]
			}),
			t == null ? null : /* @__PURE__ */ z(F, {
				label: `${e.label}空间使用率`,
				value: jr(n, Math.max(t, 1)),
				max: Math.max(t, 1)
			}),
			/* @__PURE__ */ B("p", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: [/* @__PURE__ */ z("span", {
					className: "min-w-0 break-words",
					children: e.root ?? "未映射"
				}), t == null ? null : /* @__PURE__ */ z("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `可用 ${L(e.free ?? 0)} · 共 ${L(t)}`
				})]
			})
		]
	});
}
function Rr({ volumes: e }) {
	return e.length ? /* @__PURE__ */ z("div", {
		className: "flex flex-col",
		children: e.map((e) => /* @__PURE__ */ z(Lr, { volume: e }, `${e.kind}:${e.label}`))
	}) : /* @__PURE__ */ z(P, {
		icon: ot,
		title: "还没有存储来源",
		actions: /* @__PURE__ */ z(N, {
			variant: "primary",
			href: _r,
			size: "small",
			children: "添加媒体"
		}),
		children: Tr
	});
}
function zr({ tags: e, tagLabel: t, onTag: n, hasMedia: r }) {
	return e.length ? /* @__PURE__ */ z(Bt, {
		previewCount: vr,
		className: "inline-grid w-full gap-x-6 gap-y-1 sm:grid-cols-2",
		children: e.map((e, r) => /* @__PURE__ */ z("li", {
			className: "min-w-0",
			children: /* @__PURE__ */ B("button", {
				type: "button",
				onClick: () => n(e.k),
				className: "flex min-h-11 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: [
					/* @__PURE__ */ z("span", {
						className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
						children: r + 1
					}),
					/* @__PURE__ */ z("span", {
						className: "min-w-0 grow text-body-2-regular break-words text-text-primary",
						children: t(e.k)
					}),
					/* @__PURE__ */ z("b", {
						className: "text-body-2-medium tabular-nums text-text-secondary",
						children: e.n.toLocaleString()
					})
				]
			})
		}, `${e.k}:${r}`))
	}) : /* @__PURE__ */ z(P, {
		icon: _t,
		title: "还没有内容标签",
		actions: /* @__PURE__ */ z(N, {
			variant: "secondary",
			href: r ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: r ? "补全资料" : "添加媒体"
		}),
		children: Sr
	});
}
function Br({ rows: e, hasMedia: t }) {
	return e.length ? /* @__PURE__ */ z("div", {
		className: "flex flex-col gap-5",
		children: e.map((e) => {
			let t = Nt(e);
			return /* @__PURE__ */ B("article", {
				className: "flex flex-wrap items-center gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ B("div", {
					className: "min-w-0 grow basis-64",
					children: [/* @__PURE__ */ z("h3", {
						className: "min-w-0 text-body-2-medium text-text-primary",
						children: /* @__PURE__ */ z("a", {
							href: xt(e),
							"data-middle-truncate": !0,
							className: "block max-w-full overflow-hidden whitespace-nowrap hover:underline",
							children: e.name
						})
					}), /* @__PURE__ */ B("p", {
						className: "flex flex-wrap gap-3 text-caption-1-regular text-text-secondary",
						children: [e.creator ? /* @__PURE__ */ z("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.creator
						}) : null, /* @__PURE__ */ z("span", { children: Mt(e) })]
					})]
				}), /* @__PURE__ */ B("div", {
					className: "min-w-0 basis-40",
					children: [/* @__PURE__ */ z(F, {
						label: `真实观看 ${t.toFixed(0)}%`,
						value: t
					}), /* @__PURE__ */ z("small", {
						className: "mt-1.5 block text-caption-1-regular text-text-secondary",
						children: `真实 ${t.toFixed(0)}% · 到达 ${Et(e).toFixed(0)}%`
					})]
				})]
			}, `${e.kind}:${e.id}`);
		})
	}) : /* @__PURE__ */ z(P, {
		icon: At,
		title: "还没有观看记录",
		actions: /* @__PURE__ */ z(N, {
			variant: "secondary",
			href: t ? "/" : "/settings/library",
			size: "small",
			children: t ? "浏览馆藏" : "添加媒体"
		}),
		children: Cr
	});
}
function Vr({ sources: e, videos: t }) {
	return e.length ? /* @__PURE__ */ z("div", {
		className: "inline-grid w-full gap-x-8 gap-y-6 sm:grid-cols-2",
		children: e.map((e) => /* @__PURE__ */ B("article", {
			className: "flex min-w-0 flex-col gap-1.5",
			children: [
				/* @__PURE__ */ B("header", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ z("h3", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.k
					}), /* @__PURE__ */ B("b", {
						className: "text-body-2-medium whitespace-nowrap text-text-primary",
						children: [e.assets.toLocaleString(), /* @__PURE__ */ z("small", {
							className: "ml-1 text-caption-1-regular font-normal text-text-secondary",
							children: "个视频"
						})]
					})]
				}),
				/* @__PURE__ */ z(F, {
					label: `${e.k} 覆盖视频`,
					value: jr(e.assets, Math.max(t, 1)),
					max: Math.max(t, 1)
				}),
				/* @__PURE__ */ B("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: [e.n.toLocaleString(), " 条标签"]
				})
			]
		}, e.k))
	}) : /* @__PURE__ */ z(P, {
		icon: _t,
		title: "还没有标签来源",
		actions: /* @__PURE__ */ z(N, {
			variant: "secondary",
			href: t ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: t ? "补全资料" : "添加媒体"
		}),
		children: wr
	});
}
function $({ id: e, label: t, figure: n, detail: r, icon: i, accent: a }) {
	return /* @__PURE__ */ z(M, {
		id: e,
		className: Lt({
			interactive: !0,
			selectable: !0
		}),
		children: /* @__PURE__ */ z(It, {
			label: t,
			icon: i,
			accent: a,
			figure: n,
			footer: r
		})
	});
}
function Hr(e) {
	let t = jt({
		queryKey: nt,
		queryFn: ({ signal: e }) => mt(e)
	}), n = t.data;
	if (!n) return /* @__PURE__ */ z(Pt, { children: /* @__PURE__ */ z($e, {
		tone: "error",
		title: "馆藏统计读取失败",
		children: t.error ? pt(t.error) : "未取得统计数据，请刷新页面重试。"
	}) });
	let r = n.consumption, i = n.storage_summary, a = n.by_loc.reduce((e, t) => e + t.videos, 0), o = n.by_loc.reduce((e, t) => e + t.bytes, 0), s = ht(n.tag_cov) ? yt(n.tag_cov, n.attribution.videos) : "未取得", c = `${I(n.tag_cov)} / ${n.attribution.videos.toLocaleString()}`;
	return /* @__PURE__ */ B(Pt, { children: [
		/* @__PURE__ */ z("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: `数据库中的当前统计 · ${a.toLocaleString()} 个视频 · ${L(o)}`
		}),
		/* @__PURE__ */ B(Je, {
			defaultSelectedKey: "inventory",
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ B(Ye, {
					"aria-label": "统计视图",
					className: Ft,
					children: [
						/* @__PURE__ */ z($, {
							id: "inventory",
							label: "馆藏视频",
							icon: ct,
							accent: 0,
							figure: a.toLocaleString(),
							detail: L(o)
						}),
						/* @__PURE__ */ z($, {
							id: "viewing",
							label: "看过",
							icon: st,
							accent: 1,
							figure: I(r.played),
							detail: bt(r.play_seconds)
						}),
						/* @__PURE__ */ z($, {
							id: "coverage",
							label: "内容标签",
							icon: _t,
							accent: 2,
							figure: s,
							detail: c
						}),
						/* @__PURE__ */ z($, {
							id: "storage",
							label: "使用空间",
							icon: ot,
							accent: 3,
							figure: `${i.online.toLocaleString()} 个卷`,
							detail: i.measured ? `已用 ${L(i.used)}` : "容量未取得"
						})
					]
				}),
				/* @__PURE__ */ z(j, {
					id: "inventory",
					children: /* @__PURE__ */ z(Pr, {
						data: n,
						...e
					})
				}),
				/* @__PURE__ */ B(j, {
					id: "viewing",
					className: "flex flex-col gap-5",
					children: [/* @__PURE__ */ z(Nr, {
						headline: /* @__PURE__ */ z(Mr, {
							term: "观看",
							figure: I(r.played),
							unit: "个作品有播放记录"
						}),
						children: /* @__PURE__ */ B("div", {
							className: "inline-grid w-full gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ z(Z, {
									term: "馆藏观看",
									value: r.library_played
								}),
								/* @__PURE__ */ z(Z, {
									term: "在线直接观看",
									value: r.online_played
								}),
								/* @__PURE__ */ z(Z, {
									term: "高潮计数",
									value: r.o_total
								}),
								/* @__PURE__ */ z(Z, {
									term: "快进扫过",
									value: r.skimmed
								}),
								/* @__PURE__ */ z(Z, {
									term: "喜欢",
									value: r.liked
								}),
								/* @__PURE__ */ z(Z, {
									term: "明确不喜欢",
									value: r.dislike
								}),
								/* @__PURE__ */ z(Z, {
									term: "看过了",
									value: r.seen
								}),
								/* @__PURE__ */ z(Z, {
									term: "回收站",
									value: r.trash
								})
							]
						})
					}), /* @__PURE__ */ z(Fr, { data: n })]
				}),
				/* @__PURE__ */ z(j, {
					id: "coverage",
					children: /* @__PURE__ */ z(Nr, {
						headline: /* @__PURE__ */ z(Mr, {
							term: "内容标签覆盖",
							figure: s,
							unit: c
						}),
						children: /* @__PURE__ */ z(Ir, { attribution: n.attribution })
					})
				}),
				/* @__PURE__ */ z(j, {
					id: "storage",
					children: /* @__PURE__ */ z(Nr, {
						headline: /* @__PURE__ */ z(Mr, {
							term: "使用空间",
							figure: i.measured.toLocaleString(),
							unit: "个卷已取得容量"
						}),
						children: /* @__PURE__ */ z(Rr, {
							volumes: n.storage_volumes,
							...e
						})
					})
				})
			]
		}),
		/* @__PURE__ */ B(Je, {
			defaultSelectedKey: "tags",
			className: `${dt({ padding: "none" })} flex flex-col`,
			children: [
				/* @__PURE__ */ z("div", {
					className: "px-4 pt-3",
					children: /* @__PURE__ */ B(rt, {
						"aria-label": "统计维度",
						className: tt,
						children: [
							/* @__PURE__ */ z(M, {
								id: "tags",
								className: et,
								children: "内容标签"
							}),
							/* @__PURE__ */ z(M, {
								id: "recent",
								className: et,
								children: "最近看过"
							}),
							/* @__PURE__ */ z(M, {
								id: "sources",
								className: et,
								children: "标签来源"
							})
						]
					})
				}),
				/* @__PURE__ */ z(j, {
					id: "tags",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ z(zr, {
						tags: n.top_tags,
						hasMedia: a > 0,
						...e
					})
				}),
				/* @__PURE__ */ z(j, {
					id: "recent",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ z(Br, {
						rows: n.recent,
						hasMedia: a > 0
					})
				}),
				/* @__PURE__ */ z(j, {
					id: "sources",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ z(Vr, {
						sources: n.tag_source,
						videos: n.attribution.videos
					})
				})
			]
		})
	] });
}
export { Hr as StatsPage };

//# debugId=f8c6e8cb-1fac-4fe4-8237-a6998b58f940