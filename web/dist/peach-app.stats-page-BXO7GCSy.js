(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "226aef2e-ff2b-4c12-b19d-68b3123174b7", e._sentryDebugIdIdentifier = "sentry-dbid-226aef2e-ff2b-4c12-b19d-68b3123174b7");
	} catch {}
})();
import { ActivityHeat as e, AnimatedItems as t, BarCard as n, CHART_CARD as r, CHART_COLORS as i, Cell as a, ChartBackground as o, ChartContainer as s, ChartEmpty as c, ChartLegend as l, ChartLegendContent as u, ChartTip as d, ChartTooltip as f, ChartTooltipContent as p, DefaultZIndexes as m, ExpandableRanking as h, LabelListFromLabelProp as g, Layer as _, LoadingIndicator as v, PolarAngleAxis as y, PolarChart as b, PolarLabelListContextProvider as x, RegisterGraphicalItemId as S, Sector as C, SetPolarGraphicalItem as w, SetPolarLegendPayload as T, SetTooltipEntrySettings as E, Shape as ee, ZIndexLayer as D, adaptEventsOfChild as te, arrayTooltipSearcher as ne, combineAllBarPositions as re, combineBarPosition as ie, combineBarSizeList as ae, combineDisplayedStackedData as oe, combineStackGroups as se, combineStackedData as ce, createSelector as O, defaultPolarChartProps as le, findAllByType as ue, getBandSizeOfAxis as k, getBaseValueOfBar as de, getCateCoordinateOfBar as fe, getColorsCount as pe, getNormalizedStackId as me, getTooltipNameProp as he, getValueByDataKey as ge, getZIndexFromUnknown as _e, interpolate as ve, isCategoricalAxis as ye, isNullish as be, isStacked as xe, matchAppend as Se, mathSign as Ce, noop as we, resolveDefaultProps as Te, selectActiveTooltipIndex as Ee, selectAngleAxis as De, selectBarCategoryGap as Oe, selectBarGap as ke, selectChartDataAndAlwaysIgnoreIndexes as Ae, selectChartDataWithIndexes as je, selectChartLayout as A, selectPolarAxisScale as Me, selectPolarAxisTicks as Ne, selectPolarGraphicalItemAxisTicks as Pe, selectPolarItemsSettings as Fe, selectPolarViewBox as Ie, selectRadiusAxis as Le, selectReverseStackOrder as Re, selectRootBarSize as ze, selectRootMaxBarSize as Be, selectStackOffsetType as Ve, selectTooltipAxis as He, selectUnfilteredPolarItems as Ue, sliceConfig as We, sliceKey as Ge, svgPropertiesNoEvents as Ke, svgPropertiesNoEventsFromUnknown as qe, truncateByDomain as Je, useAnimationCallbacks as Ye, useAppSelector as Xe, useMouseClickItemDispatch as Ze, useMouseEnterItemDispatch as Qe, useMouseLeaveItemDispatch as $e, usePolarChartLayout as et } from "./peach-app.expandable-ranking-BzGIcyOL.js";
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as j, $b4f18e3395fe64d7$export$3e41faf802a29e71 as M, $b4f18e3395fe64d7$export$b2539bed5023c21c as tt, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as nt, ButtonLink as N, EmptyState as P, LOC as rt, MEDIA_SOURCE_ICONS as it, NR as at, Note as ot, Progress as F, SEGMENT as st, SEGMENTED_TRACK as ct, STATS_KEY as lt, SegmentedTabList as ut, SourceMark as dt, StatusLabel as ft, Xc as pt, Xt as mt, _8 as ht, __toESM as gt, bandRows as _t, cardClass as vt, clsx as yt, errorMessage as bt, fetchStats as xt, fmtCount as I, fmtSize as L, import_jsx_runtime as R, jsx as z, jsxs as B, known as St, lengthRows as Ct, mM as wt, mediumRows as Tt, percentText as Et, playedFor as Dt, playedItemUrl as Ot, radialArc as kt, radialBarSize as At, radialCeiling as jt, radialSlices as Mt, reachedShare as Nt, replayRows as Pt, require_react as Ft, settingsPath as It, uo as Lt, useQuery as Rt, watchNote as zt, watchedShare as Bt } from "./peach-app.js";
import { Page as Vt } from "./peach-app.page-CW3QRN2N.js";
import { STAT_STRIP as Ht, StatCard as Ut, statCardClass as Wt } from "./peach-app.stat-card-4sRHYGSD.js";
import { ConnectionStatus as Gt } from "./peach-app.connection-status-BjZE05sg.js";
// node_modules/recharts/es6/util/RadialBarUtils.js
var V = /* @__PURE__ */ gt(Ft()), Kt = ["option"];
function qt(e, t) {
	if (e == null) return {};
	var n, r, i = Jt(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Jt(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Yt = C;
function Xt(e) {
	return typeof e == "string" ? parseInt(e, 10) : e;
}
function Zt(e) {
	var t = e.option, n = qt(e, Kt);
	return /*#__PURE__*/ V.createElement(ee, {
		option: t,
		DefaultShape: Yt,
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
var U = O([(e, t) => Le(e, t), (e, t) => Me(e, "radiusAxis", t)], (e, t) => {
	if (e != null && t != null) return H(H({}, e), {}, { scale: t });
}), nn = (e, t) => Pe(e, "radiusAxis", t, !1), W = O([(e, t, n) => De(e, n), (e, t, n) => Me(e, "angleAxis", n)], (e, t) => {
	if (e != null && t != null) return H(H({}, e), {}, { scale: t });
}), rn = (e, t, n) => Ne(e, "angleAxis", n, !1), an = O([Ue, (e, t, n, r) => r], (e, t) => {
	if (e.some((e) => e.type === "radialBar" && t.dataKey === e.dataKey && t.stackId === e.stackId)) return t;
}), on = O([
	A,
	U,
	nn,
	W,
	rn
], (e, t, n, r, i) => ye(e, "radiusAxis") ? k(t, n, !1) : k(r, i, !1)), sn = O([
	W,
	U,
	A
], (e, t, n) => {
	var r = n === "radial" ? e : t;
	if (r != null && r.scale != null) return de({ numericAxis: r });
}), cn = (e, t, n, r, i) => i, ln = (e, t, n, r, i) => n, un = (e, t, n, r, i) => t, dn = (e, t, n, r, i) => r.maxBarSize, fn = (e) => e.type === "radialBar", pn = O([
	A,
	Ue,
	ln,
	un
], (e, t, n, r) => t.filter((t) => e === "centric" ? t.angleAxisId === n : t.radiusAxisId === r).filter((e) => e.hide === !1).filter(fn)), mn = O([
	pn,
	ze,
	() => void 0
], ae), hn = O([
	A,
	Be,
	W,
	rn,
	U,
	nn,
	dn
], (e, t, n, r, i, a, o) => {
	var s = be(o) ? t : o;
	return e === "centric" ? k(n, r, !0) ?? s ?? 0 : k(i, a, !0) ?? s ?? 0;
}), gn = O([
	mn,
	Be,
	ke,
	Oe,
	hn,
	on,
	dn
], re), _n = O([gn, an], ie), vn = O([Fe], (e) => e.filter(fn).filter(xe)), yn = O([
	vn,
	Ae,
	He
], oe), bn = O([
	yn,
	vn,
	Ve,
	Re
], se), xn = O([(e, t, n) => A(e) === "centric" ? bn(e, "radiusAxis", t) : bn(e, "angleAxis", n), an], ce), Sn = O([
	W,
	rn,
	U,
	nn,
	je,
	an,
	on,
	A,
	sn,
	Ie,
	cn,
	_n,
	xn
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = i.chartData, m = i.dataStartIndex, h = i.dataEndIndex;
	if (a == null || n == null || e == null || p == null || o == null || d == null || s !== "centric" && s !== "radial" || r == null || l == null) return [];
	var g = a.dataKey, _ = a.minPointSize, v = l.cx, y = l.cy, b = l.startAngle, x = l.endAngle;
	return Un({
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
}), Cn = O([Ae, (e, t) => t], (e, t) => {
	var n = e.chartData, r = e.dataStartIndex, i = e.dataEndIndex;
	if (n == null) return [];
	var a = n.slice(r, i + 1);
	return a.length === 0 ? [] : a.map((e) => ({
		type: t,
		value: e.name,
		color: e.fill,
		payload: e
	}));
}), wn = [
	"shape",
	"activeShape",
	"cornerRadius",
	"id"
], Tn = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], En = ["value", "background"];
function G() {
	return G = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, G.apply(null, arguments);
}
function Dn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function K(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Dn(Object(n), !0).forEach(function(t) {
			On(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function On(e, t, n) {
	return (t = kn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kn(e) {
	var t = An(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function An(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function jn(e, t) {
	if (e == null) return {};
	var n, r, i = Mn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Mn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Nn = [];
function Pn(e) {
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
	return /*#__PURE__*/ V.createElement(x, { value: t ? i : void 0 }, r);
}
function Fn(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = e.showLabels, i = e.animationElapsedTime, a = e.isAnimating, o = e.isEntrance, s = n.shape, c = n.activeShape, l = n.cornerRadius, u = n.id, d = jn(n, wn), f = Ke(d), p = Xe(Ee), h = n.onMouseEnter, _ = n.onClick, v = n.onMouseLeave, y = jn(n, Tn), b = Qe(h, n.dataKey, u), x = $e(v), S = Ze(_, n.dataKey, u);
	return t == null ? null : /*#__PURE__*/ V.createElement(Pn, {
		showLabels: r,
		sectors: t
	}, t.map((e, t) => {
		var n = !!(c && p === String(t)), r = b(e, t), u = x(e, t), h = S(e, t), g = K(K(K(K({}, f), {}, { cornerRadius: Xt(l) }, e), te(y, e, t)), {}, {
			onMouseEnter: r,
			onMouseLeave: u,
			onClick: h,
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
		return n ? /*#__PURE__*/ V.createElement(D, {
			zIndex: m.activeBar,
			key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}`
		}, /*#__PURE__*/ V.createElement(Zt, g)) : /*#__PURE__*/ V.createElement(Zt, G({ key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}` }, g));
	}), /*#__PURE__*/ V.createElement(g, { label: n.label }), n.children);
}
var In = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [K(K({}, e.next), {}, {
	startAngle: ve(e.prev.startAngle, e.next.startAngle, t),
	endAngle: ve(e.prev.endAngle, e.next.endAngle, t)
})] : [K(K({}, e.next), {}, { endAngle: ve(e.next.startAngle, e.next.endAngle, t) })]);
function Ln(e) {
	var n = e.props, r = e.previousSectorsRef, i = n.sectors, a = n.isAnimationActive, o = n.animationBegin, s = n.animationDuration, c = n.animationEasing, l = n.onAnimationStart, u = n.onAnimationEnd, d = Ye(l, u), f = d.isAnimating, p = d.handleAnimationStart, m = d.handleAnimationEnd, h = et();
	return h == null ? null : /*#__PURE__*/ V.createElement(t, {
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
	}, (e, t, r) => /*#__PURE__*/ V.createElement(Fn, {
		sectors: e,
		allOtherRadialBarProps: n,
		showLabels: !f,
		animationElapsedTime: t,
		isAnimating: f || t < 1,
		isEntrance: r
	}));
}
function Rn(e) {
	var t = (0, V.useRef)(null);
	return /*#__PURE__*/ V.createElement(Ln, {
		props: e,
		previousSectorsRef: t
	});
}
function zn(e) {
	var t = Xe((t) => Cn(t, e.legendType));
	return /*#__PURE__*/ V.createElement(T, { legendPayload: t ?? [] });
}
var Bn = /*#__PURE__*/ V.memo((e) => {
	var t = e.dataKey, n = e.sectors, r = e.stroke, i = e.strokeWidth, a = e.name, o = e.hide, s = e.fill, c = e.tooltipType, l = e.formatter, u = e.id, d = {
		dataDefinedOnItem: n,
		getPosition: we,
		settings: {
			graphicalItemId: u,
			stroke: r,
			strokeWidth: i,
			fill: s,
			nameKey: void 0,
			dataKey: t,
			name: he(a, t),
			hide: o,
			type: c,
			color: s,
			unit: "",
			formatter: l
		}
	};
	return /*#__PURE__*/ V.createElement(E, { tooltipEntrySettings: d });
}), Vn = class extends V.PureComponent {
	renderBackground(e) {
		if (e == null) return null;
		var t = this.props.cornerRadius, n = qe(this.props.background);
		return /*#__PURE__*/ V.createElement(D, { zIndex: _e(this.props.background, m.barBackground) }, e.map((e, r) => {
			e.value;
			var i = e.background, a = jn(e, En);
			if (!i) return null;
			var o = K(K(K(K(K({ cornerRadius: Xt(t) }, a), {}, { fill: "#eee" }, i), n), te(this.props, e, r)), {}, {
				index: r,
				className: yt("recharts-radial-bar-background-sector", String(n?.className)),
				option: i,
				isActive: !1
			});
			return /*#__PURE__*/ V.createElement(Zt, G({ key: `background-${a.cx}-${a.cy}-${a.innerRadius}-${a.outerRadius}-${a.startAngle}-${a.endAngle}-${r}` }, o));
		}));
	}
	render() {
		var e = this.props, t = e.hide, n = e.sectors, r = e.className, i = e.background;
		if (t) return null;
		var a = yt("recharts-area", r);
		return /*#__PURE__*/ V.createElement(D, { zIndex: this.props.zIndex }, /*#__PURE__*/ V.createElement(_, { className: a }, i && /*#__PURE__*/ V.createElement(_, { className: "recharts-radial-bar-background" }, this.renderBackground(n)), /*#__PURE__*/ V.createElement(_, { className: "recharts-radial-bar-sectors" }, /*#__PURE__*/ V.createElement(Rn, this.props))));
	}
};
function Hn(e) {
	var t = V.useMemo(() => ue(e.children, a), [e.children]), n = V.useMemo(() => ({
		data: void 0,
		hide: !1,
		id: e.id,
		dataKey: e.dataKey,
		minPointSize: e.minPointSize,
		stackId: me(e.stackId),
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
	]), r = Xe((r) => Sn(r, e.radiusAxisId, e.angleAxisId, n, t)) ?? Nn;
	return /*#__PURE__*/ V.createElement(V.Fragment, null, /*#__PURE__*/ V.createElement(Bn, {
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
	}), /*#__PURE__*/ V.createElement(Vn, G({}, e, { sectors: r })));
}
var q = {
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: Se,
	animationInterpolateFn: In,
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
	shape: Yt,
	zIndex: m.bar
};
function Un(e) {
	var t = e.displayedData, n = e.stackedData, r = e.dataStartIndex, i = e.stackedDomain, a = e.dataKey, o = e.baseValue, s = e.layout, c = e.radiusAxis, l = e.radiusAxisTicks, u = e.bandSize, d = e.pos, f = e.angleAxis, p = e.minPointSize, m = e.cx, h = e.cy, g = e.angleAxisTicks, _ = e.cells, v = e.startAngle, y = e.endAngle;
	return g == null || l == null ? Nn : (t ?? []).map((e, t) => {
		var b, x, S, C, w, T;
		if (n ? b = Je(n[r + t], i) : (b = ge(e, a), Array.isArray(b) || (b = [o, b])), s === "radial") {
			if (C = f.scale.map(b[0]) ?? v, w = f.scale.map(b[1]) ?? y, x = fe({
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
					var ee = Ce(E || p) * (Math.abs(p) - Math.abs(E));
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
		} else if (x = c.scale.map(b[0]), S = c.scale.map(b[1]), C = fe({
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
				var te = Ce(D || p) * (Math.abs(p) - Math.abs(D));
				S += te;
			}
		}
		return K(K(K({}, e), T), {}, {
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
function Wn(e) {
	var t = Te(e, q);
	return /*#__PURE__*/ V.createElement(S, {
		id: t.id,
		type: "radialBar"
	}, (e) => /*#__PURE__*/ V.createElement(V.Fragment, null, /*#__PURE__*/ V.createElement(w, {
		type: "radialBar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide ?? q.hide,
		angleAxisId: t.angleAxisId ?? q.angleAxisId,
		radiusAxisId: t.radiusAxisId ?? q.radiusAxisId,
		stackId: me(t.stackId),
		barSize: t.barSize,
		minPointSize: t.minPointSize,
		maxBarSize: t.maxBarSize
	}), /*#__PURE__*/ V.createElement(zn, t), /*#__PURE__*/ V.createElement(Hn, G({}, t, { id: e }))));
}
Wn.displayName = "RadialBar";
// node_modules/recharts/es6/chart/RadialBarChart.js
function Gn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Kn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Gn(Object(n), !0).forEach(function(t) {
			qn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function qn(e, t, n) {
	return (t = Jn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Jn(e) {
	var t = Yn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Yn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Xn = ["axis", "item"], Zn = Kn(Kn({}, le), {}, {
	layout: "radial",
	startAngle: 0,
	endAngle: 360
}), Qn = /*#__PURE__*/ (0, V.forwardRef)((e, t) => {
	var n = Te(e, Zn);
	return /*#__PURE__*/ V.createElement(b, {
		chartName: "RadialBarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Xn,
		tooltipPayloadSearcher: ne,
		categoricalChartProps: n,
		ref: t
	});
}), $n = "30%", er = "100%", tr = 5, nr = 14, rr = 5, ir = 1500, ar = (0, V.createContext)(null);
function or() {
	let e = (0, V.use)(ar);
	if (!e) throw Error("Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <EvilRadialChart />");
	return e;
}
function J({ config: e, data: t, nameKey: n, children: r, className: i, chartProps: a, variant: c = "full", max: l, innerRadius: u = $n, outerRadius: d = er, defaultSelectedDataKey: f = null, onSelectionChange: p, isLoading: m = !1, backgroundVariant: h }) {
	let g = (0, V.useId)().replace(/:/g, ""), [_, b] = (0, V.useState)(f), x = pr(m), S = ur(c), C = (0, V.useCallback)((e, t) => {
		b(e), p?.(e === null ? null : {
			dataKey: e,
			value: t ?? 0
		});
	}, [p]), w = (0, V.useMemo)(() => t.map((e) => ({
		...e,
		fill: `url(#${g}-radial-colors-${e[n]})`
	})), [
		t,
		n,
		g
	]), T = (0, V.useMemo)(() => ({
		config: e,
		nameKey: n,
		chartId: g,
		isLoading: m,
		selectedBar: _,
		selectBar: C
	}), [
		e,
		n,
		g,
		m,
		_,
		C
	]);
	return /* @__PURE__ */ z(ar, {
		value: T,
		children: /* @__PURE__ */ B(s, {
			className: i,
			config: e,
			children: [/* @__PURE__ */ z(v, { isLoading: m }), /* @__PURE__ */ B(Qn, {
				id: g,
				data: m ? x : w,
				innerRadius: u,
				outerRadius: d,
				startAngle: S.startAngle,
				endAngle: S.endAngle,
				cx: S.cx,
				cy: S.cy,
				...a,
				children: [
					l != null && l > 0 && /* @__PURE__ */ z(y, {
						type: "number",
						domain: [0, l],
						tick: !1,
						axisLine: !1
					}),
					h && /* @__PURE__ */ z(o, { variant: h }),
					r,
					m && /* @__PURE__ */ z(mr, {}),
					/* @__PURE__ */ z("defs", { children: /* @__PURE__ */ z(dr, {
						config: e,
						chartId: g
					}) })
				]
			})]
		})
	});
}
function sr({ dataKey: e, cornerRadius: t = tr, barSize: n = nr, showBackground: r = !0, isClickable: i = !1, radialBarProps: a }) {
	let { nameKey: o, isLoading: s, selectedBar: c, selectBar: l } = or();
	return s ? null : /* @__PURE__ */ z(Wn, {
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
			return /* @__PURE__ */ z(C, {
				...e,
				opacity: i && !n ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...a
	});
}
function cr({ variant: e, roundness: t, defaultIndex: n }) {
	let { nameKey: r, isLoading: i } = or();
	return i ? null : /* @__PURE__ */ z(f, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ z(p, {
			nameKey: r,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function lr({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, isLoading: a, selectedBar: o, selectBar: s } = or();
	return a ? null : /* @__PURE__ */ z(l, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ z(u, {
			selected: o,
			onSelectChange: s,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function ur(e) {
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
var dr = ({ config: e, chartId: t }) => /* @__PURE__ */ z(R.Fragment, { children: Object.entries(e).map(([e, n]) => {
	let r = pe(n);
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
function fr() {
	return Array.from({ length: rr }, (e, t) => ({
		name: `loading${t}`,
		value: 40 + Math.random() * 60
	}));
}
function pr(e) {
	let [t, n] = (0, V.useState)(0);
	return (0, V.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			n((e) => e + 1);
		}, ir);
		return () => clearInterval(t);
	}, [e]), (0, V.useMemo)(() => fr(), [t]);
}
var mr = () => /* @__PURE__ */ z(Wn, {
	dataKey: "value",
	cornerRadius: tr,
	barSize: nr,
	background: !0,
	isAnimationActive: !0,
	animationDuration: ir,
	animationEasing: "ease-in-out",
	shape: (e) => /* @__PURE__ */ z(C, {
		...e,
		fill: "currentColor",
		fillOpacity: .25
	})
});
J.RadialBar = sr, J.Tooltip = cr, J.Legend = lr;
// src/react/stats/radial-card.tsx
var hr = [
	"bg-chart-1",
	"bg-chart-2",
	"bg-chart-3",
	"bg-chart-4",
	"bg-chart-5",
	"bg-chart-6"
], gr = [
	"aria-pressed:bg-chart-1/10 aria-pressed:ring-chart-1",
	"aria-pressed:bg-chart-2/10 aria-pressed:ring-chart-2",
	"aria-pressed:bg-chart-3/10 aria-pressed:ring-chart-3",
	"aria-pressed:bg-chart-4/10 aria-pressed:ring-chart-4",
	"aria-pressed:bg-chart-5/10 aria-pressed:ring-chart-5",
	"aria-pressed:bg-chart-6/10 aria-pressed:ring-chart-6"
];
function _r({ title: e, rows: t, empty: n, unit: i = "个视频" }) {
	let [a, o] = (0, V.useState)(-1), [s, l] = (0, V.useState)(-1), u = Mt(t);
	if (!u.length) return /* @__PURE__ */ z(c, {
		title: e,
		children: n
	});
	let f = s >= 0 ? s : a, p = u.reduce((e, t) => e + t.value, 0), m = u[f], h = (e) => o((t) => t === e ? -1 : e), g = jt(u.map((e) => e.value)), _ = u.map((e, t) => ({
		slice: Ge(t),
		value: e.value,
		arc: kt(e.value, g)
	}));
	return /* @__PURE__ */ B("section", {
		className: r,
		children: [
			/* @__PURE__ */ B("header", {
				className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ B("span", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ B("h3", {
						className: "flex items-center gap-1.5 text-title-2-medium wrap-anywhere text-text-primary",
						children: [m?.mark ? /* @__PURE__ */ z(dt, { mark: m.mark }) : null, m ? m.name : e]
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
				onPointerLeave: () => l(-1),
				children: /* @__PURE__ */ B(J, {
					data: _,
					nameKey: "slice",
					config: We(u.map((e) => e.name)),
					max: g,
					innerRadius: "22%",
					className: "aspect-auto h-75 max-sm:h-65",
					children: [/* @__PURE__ */ z(J.RadialBar, {
						dataKey: "arc",
						barSize: At(u.length),
						radialBarProps: {
							shape: (e) => /* @__PURE__ */ z(C, {
								...e,
								opacity: f >= 0 && f !== e.index ? .3 : 1,
								className: "cursor-pointer transition-opacity duration-200"
							}),
							onClick: (e, t) => h(t),
							onMouseEnter: (e, t) => l(t)
						}
					}), /* @__PURE__ */ z(d, {
						nameKey: "slice",
						valueKey: "value",
						hideLabel: !0
					})]
				})
			}),
			/* @__PURE__ */ z("div", {
				className: "inline-grid w-full grid-cols-3 gap-2 max-sm:grid-cols-2",
				children: u.map((e, t) => /* @__PURE__ */ B("button", {
					type: "button",
					"aria-pressed": a === t,
					onClick: () => h(t),
					onPointerEnter: () => l(t),
					onPointerLeave: () => l(-1),
					onFocus: () => l(t),
					onBlur: () => l(-1),
					className: `flex min-w-0 cursor-pointer flex-col items-start gap-1 rounded-xl bg-background-tertiary-default p-2.5 text-left outline-none aria-pressed:ring-1 aria-pressed:ring-inset focus-visible:ring-2 focus-visible:ring-border-focus-ring ${gr[t % 6]}`,
					children: [
						/* @__PURE__ */ B("span", {
							className: "flex min-w-0 max-w-full items-start gap-1.5 text-caption-1-regular text-text-secondary",
							children: [/* @__PURE__ */ z("i", {
								"aria-hidden": !0,
								className: `mt-0.5 size-3 shrink-0 rounded-sm ${hr[t % 6]}`
							}), /* @__PURE__ */ B("span", {
								className: "inline-flex min-w-0 items-start gap-1.5 wrap-anywhere",
								children: [e.mark ? /* @__PURE__ */ z(dt, { mark: e.mark }) : null, e.name]
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
				}, Ge(t)))
			})
		]
	});
}
// src/react/stats/stats-page.tsx
var vr = It("媒体库与入库"), yr = 10, Y = i[5], br = i[4], xr = `${vt()} flex flex-col gap-4`, Sr = "添加媒体目录或关注来源后，这里会显示馆藏统计。", Cr = "补全资料或添加标签后，这里会显示馆藏中的内容标签。", wr = "开始播放后，这里会显示最近的真实观看证据。", Tr = "补充作品资料或手动添加标签后，这里会显示各个标签来源对应的视频数量。", Er = "添加媒体目录后，这里会显示存储空间。", Dr = "把媒体目录归进媒体库后，这里会按库显示视频数。", Or = "探测时长后，这里会显示时长分布。", kr = "探测画质后，这里会显示画质分布。", Ar = "开始播放后，这里会显示播放落在一周的哪些时段。", jr = "开始播放后，这里会显示每个作品播了几次。", Mr = (e, t) => Math.min(Math.max(e, 0), t);
function X({ term: e, value: t }) {
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
function Z({ term: e, value: t, total: n }) {
	let r = Math.max(n, 1);
	return /* @__PURE__ */ B("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ B("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ z("span", { children: e }), /* @__PURE__ */ B("b", {
				className: "tabular-nums",
				children: [I(t), St(t) ? /* @__PURE__ */ z("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: Et(t, n)
				}) : null]
			})]
		}), /* @__PURE__ */ z(F, {
			label: `${e}：${I(t)} / ${n.toLocaleString()}`,
			value: St(t) ? Mr(t, r) : 0,
			max: r
		})]
	});
}
function Nr({ term: e, figure: t, unit: n }) {
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
function Q({ headline: e, children: t }) {
	return /* @__PURE__ */ B("div", {
		className: `${xr} md:flex-row md:gap-6`,
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
			children: [/* @__PURE__ */ z(_r, {
				title: "网盘与本地",
				empty: Sr,
				rows: e.by_loc.map((e) => ({
					name: rt[e.k] ?? e.k,
					value: e.videos,
					bytes: e.bytes,
					mark: it[e.k] || "database"
				}))
			}), /* @__PURE__ */ z(_r, {
				title: "媒体库",
				empty: Dr,
				rows: e.by_library.map((e) => ({
					name: e.name,
					value: e.videos,
					bytes: e.bytes,
					mark: it[e.icon] || e.icon || "database"
				}))
			})]
		}), /* @__PURE__ */ B("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ z(n, {
					title: "时长",
					unit: "个视频",
					series: "视频",
					color: Y,
					rows: Ct(e.by_length),
					empty: Or
				}),
				/* @__PURE__ */ z(n, {
					title: "画质",
					unit: "个视频",
					series: "视频",
					color: Y,
					rows: _t(e.by_quality),
					empty: kr
				}),
				/* @__PURE__ */ z(n, {
					title: "文件类型",
					unit: "个条目",
					series: "条目",
					color: Y,
					layout: "horizontal",
					rows: Tt(e.by_medium),
					empty: Sr
				})
			]
		})]
	}) : /* @__PURE__ */ z(P, {
		icon: at,
		title: "还没有视频",
		actions: /* @__PURE__ */ B(R.Fragment, { children: [/* @__PURE__ */ z(N, {
			variant: "secondary",
			href: "/subscriptions?tab=add",
			size: "small",
			children: "添加关注"
		}), /* @__PURE__ */ z(N, {
			variant: "primary",
			href: vr,
			size: "small",
			children: "添加媒体"
		})] }),
		children: Sr
	});
}
function Fr({ data: t }) {
	return /* @__PURE__ */ B(R.Fragment, { children: [/* @__PURE__ */ z(e, {
		activity: t.play_activity,
		title: "播放时间",
		dailyTitle: "每日播放",
		words: {
			unit: "个作品",
			series: "作品",
			cellUnit: "个作品"
		},
		tone: 5,
		empty: Ar
	}), /* @__PURE__ */ z(n, {
		title: "播放次数",
		unit: "个作品",
		series: "作品",
		color: br,
		rows: Pt(t.replays),
		empty: jr
	})] });
}
function Ir({ attribution: e }) {
	let t = e.videos;
	return /* @__PURE__ */ B("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ z(Z, {
				term: "有创作者",
				value: e.creator,
				total: t
			}),
			/* @__PURE__ */ z(Z, {
				term: "有番号",
				value: e.code,
				total: t
			}),
			/* @__PURE__ */ z(Z, {
				term: "有厂牌",
				value: e.studio,
				total: t
			}),
			/* @__PURE__ */ z(Z, {
				term: "已抽帧",
				value: e.thumb,
				total: t
			}),
			/* @__PURE__ */ z(Z, {
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
				}), t == null ? e.online ? /* @__PURE__ */ z(ft, { children: "容量未取得" }) : /* @__PURE__ */ z(Gt, { online: !1 }) : /* @__PURE__ */ B("b", {
					className: "whitespace-nowrap tabular-nums",
					children: [L(n), /* @__PURE__ */ z("span", {
						className: "ml-1.5 text-caption-1-regular text-text-secondary",
						children: Et(n, t)
					})]
				})]
			}),
			t == null ? null : /* @__PURE__ */ z(F, {
				label: `${e.label}空间使用率`,
				value: Mr(n, Math.max(t, 1)),
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
		icon: pt,
		title: "还没有存储来源",
		actions: /* @__PURE__ */ z(N, {
			variant: "primary",
			href: vr,
			size: "small",
			children: "添加媒体"
		}),
		children: Er
	});
}
function zr({ tags: e, tagLabel: t, onTag: n, hasMedia: r }) {
	return e.length ? /* @__PURE__ */ z(h, {
		previewCount: yr,
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
		icon: wt,
		title: "还没有内容标签",
		actions: /* @__PURE__ */ z(N, {
			variant: "secondary",
			href: r ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: r ? "补全资料" : "添加媒体"
		}),
		children: Cr
	});
}
function Br({ rows: e, hasMedia: t }) {
	return e.length ? /* @__PURE__ */ z("div", {
		className: "flex flex-col gap-5",
		children: e.map((e) => {
			let t = Bt(e);
			return /* @__PURE__ */ B("article", {
				className: "flex flex-wrap items-center gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ B("div", {
					className: "min-w-0 grow basis-64",
					children: [/* @__PURE__ */ z("h3", {
						className: "min-w-0 text-body-2-medium text-text-primary",
						children: /* @__PURE__ */ z("a", {
							href: Ot(e),
							"data-middle-truncate": !0,
							className: "block max-w-full overflow-hidden whitespace-nowrap hover:underline",
							children: e.name
						})
					}), /* @__PURE__ */ B("p", {
						className: "flex flex-wrap gap-3 text-caption-1-regular text-text-secondary",
						children: [e.creator ? /* @__PURE__ */ z("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.creator
						}) : null, /* @__PURE__ */ z("span", { children: zt(e) })]
					})]
				}), /* @__PURE__ */ B("div", {
					className: "min-w-0 basis-40",
					children: [/* @__PURE__ */ z(F, {
						label: `真实观看 ${t.toFixed(0)}%`,
						value: t
					}), /* @__PURE__ */ z("small", {
						className: "mt-1.5 block text-caption-1-regular text-text-secondary",
						children: `真实 ${t.toFixed(0)}% · 到达 ${Nt(e).toFixed(0)}%`
					})]
				})]
			}, `${e.kind}:${e.id}`);
		})
	}) : /* @__PURE__ */ z(P, {
		icon: Lt,
		title: "还没有观看记录",
		actions: /* @__PURE__ */ z(N, {
			variant: "secondary",
			href: t ? "/" : "/settings/library",
			size: "small",
			children: t ? "浏览馆藏" : "添加媒体"
		}),
		children: wr
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
					value: Mr(e.assets, Math.max(t, 1)),
					max: Math.max(t, 1)
				}),
				/* @__PURE__ */ B("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: [e.n.toLocaleString(), " 条标签"]
				})
			]
		}, e.k))
	}) : /* @__PURE__ */ z(P, {
		icon: wt,
		title: "还没有标签来源",
		actions: /* @__PURE__ */ z(N, {
			variant: "secondary",
			href: t ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: t ? "补全资料" : "添加媒体"
		}),
		children: Tr
	});
}
function $({ id: e, label: t, figure: n, detail: r, icon: i, accent: a }) {
	return /* @__PURE__ */ z(M, {
		id: e,
		className: Wt({
			interactive: !0,
			selectable: !0
		}),
		children: /* @__PURE__ */ z(Ut, {
			label: t,
			icon: i,
			accent: a,
			figure: n,
			footer: r
		})
	});
}
function Hr(e) {
	let t = Rt({
		queryKey: lt,
		queryFn: ({ signal: e }) => xt(e)
	}), n = t.data;
	if (!n) return /* @__PURE__ */ z(Vt, { children: /* @__PURE__ */ z(ot, {
		tone: "error",
		title: "馆藏统计读取失败",
		children: t.error ? bt(t.error) : "未取得统计数据，请刷新页面重试。"
	}) });
	let r = n.consumption, i = n.storage_summary, a = n.by_loc.reduce((e, t) => e + t.videos, 0), o = n.by_loc.reduce((e, t) => e + t.bytes, 0), s = St(n.tag_cov) ? Et(n.tag_cov, n.attribution.videos) : "未取得", c = `${I(n.tag_cov)} / ${n.attribution.videos.toLocaleString()}`;
	return /* @__PURE__ */ B(Vt, { children: [
		/* @__PURE__ */ z("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: `数据库中的当前统计 · ${a.toLocaleString()} 个视频 · ${L(o)}`
		}),
		/* @__PURE__ */ B(tt, {
			defaultSelectedKey: "inventory",
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ B(nt, {
					"aria-label": "统计视图",
					className: Ht,
					children: [
						/* @__PURE__ */ z($, {
							id: "inventory",
							label: "馆藏视频",
							icon: ht,
							accent: 0,
							figure: a.toLocaleString(),
							detail: L(o)
						}),
						/* @__PURE__ */ z($, {
							id: "viewing",
							label: "看过",
							icon: mt,
							accent: 1,
							figure: I(r.played),
							detail: Dt(r.play_seconds)
						}),
						/* @__PURE__ */ z($, {
							id: "coverage",
							label: "内容标签",
							icon: wt,
							accent: 2,
							figure: s,
							detail: c
						}),
						/* @__PURE__ */ z($, {
							id: "storage",
							label: "使用空间",
							icon: pt,
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
					children: [/* @__PURE__ */ z(Q, {
						headline: /* @__PURE__ */ z(Nr, {
							term: "观看",
							figure: I(r.played),
							unit: "个作品有播放记录"
						}),
						children: /* @__PURE__ */ B("div", {
							className: "inline-grid w-full gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ z(X, {
									term: "馆藏观看",
									value: r.library_played
								}),
								/* @__PURE__ */ z(X, {
									term: "在线直接观看",
									value: r.online_played
								}),
								/* @__PURE__ */ z(X, {
									term: "高潮计数",
									value: r.o_total
								}),
								/* @__PURE__ */ z(X, {
									term: "快进扫过",
									value: r.skimmed
								}),
								/* @__PURE__ */ z(X, {
									term: "喜欢",
									value: r.liked
								}),
								/* @__PURE__ */ z(X, {
									term: "明确不喜欢",
									value: r.dislike
								}),
								/* @__PURE__ */ z(X, {
									term: "看过了",
									value: r.seen
								}),
								/* @__PURE__ */ z(X, {
									term: "回收站",
									value: r.trash
								})
							]
						})
					}), /* @__PURE__ */ z(Fr, { data: n })]
				}),
				/* @__PURE__ */ z(j, {
					id: "coverage",
					children: /* @__PURE__ */ z(Q, {
						headline: /* @__PURE__ */ z(Nr, {
							term: "内容标签覆盖",
							figure: s,
							unit: c
						}),
						children: /* @__PURE__ */ z(Ir, { attribution: n.attribution })
					})
				}),
				/* @__PURE__ */ z(j, {
					id: "storage",
					children: /* @__PURE__ */ z(Q, {
						headline: /* @__PURE__ */ z(Nr, {
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
		/* @__PURE__ */ B(tt, {
			defaultSelectedKey: "tags",
			className: `${vt({ padding: "none" })} flex flex-col`,
			children: [
				/* @__PURE__ */ z("div", {
					className: "px-4 pt-3",
					children: /* @__PURE__ */ B(ut, {
						"aria-label": "统计维度",
						className: ct,
						children: [
							/* @__PURE__ */ z(M, {
								id: "tags",
								className: st,
								children: "内容标签"
							}),
							/* @__PURE__ */ z(M, {
								id: "recent",
								className: st,
								children: "最近看过"
							}),
							/* @__PURE__ */ z(M, {
								id: "sources",
								className: st,
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

//# debugId=226aef2e-ff2b-4c12-b19d-68b3123174b7