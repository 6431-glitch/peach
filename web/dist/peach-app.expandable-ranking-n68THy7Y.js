(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9f070ed0-0fc6-4b5c-92d7-66f7147e19ad", e._sentryDebugIdIdentifier = "sentry-dbid-9f070ed0-0fc6-4b5c-92d7-66f7147e19ad");
	} catch {}
})();
import { CHART_CARD as e, CategoryTick as t, ChartEmpty as n, ChartHead as r, ChartTip as i, Dot as a, EvilBarChart as o, Layer as s, TIP_SURFACE as c, TIP_SWATCH as l, Text as u, TipRow as d, ZIndexLayer as f, adaptEventsOfChild as p, addAngleAxis as m, categoryAxisWidth as h, combineAxisTicks as g, combineCategoricalDomain as _, combineConfiguredScale as v, combineGraphicalItemTicks as y, createSelector as b, defaultPolarAngleAxisProps as x, degreeToRadian as S, getAxisTypeBasedOnLayout as C, getClassNameFromUnknown as w, noop as T, pickAxisType as E, polarToCartesian as D, rechartsScaleFactory as ee, removeAngleAxis as te, resolveDefaultProps as ne, roundTemplateLiteral as re, selectAngleAxis as O, selectAngleAxisRangeWithReversed as ie, selectChartLayout as k, selectDuplicateDomain as A, selectPolarAppliedValues as ae, selectPolarAxisCheckedDomain as oe, selectPolarNiceTicks as se, selectPolarViewBox as ce, selectRadiusAxis as le, selectRadiusAxisRangeWithReversed as ue, selectRealScaleType as j, selectRenderableAxisSettings as de, svgPropertiesAndEvents as M, svgPropertiesNoEvents as N, svgPropertiesNoEventsFromUnknown as fe, tone as pe, useAppDispatch as me, useAppSelector as P, useIsPanorama as he, usePolarChartLayout as ge } from "./peach-app.chart-tip-BGeaXdeB.js";
import { __toESM as _e, clsx as F, f1 as ve, import_jsx_runtime as I, jsx as L, jsxs as R, require_react as ye } from "./peach-app.js";
// node_modules/recharts/es6/shape/Polygon.js
var z = /* @__PURE__ */ _e(ye()), be = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
], xe;
function B() {
	return B = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, B.apply(null, arguments);
}
function Se(e, t) {
	if (e == null) return {};
	var n, r, i = Ce(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ce(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function we(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var V = (e) => e != null && e.x === +e.x && e.y === +e.y, Te = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	e.forEach((e) => {
		var n = t[t.length - 1];
		V(e) ? n && n.push(e) : n && n.length > 0 && t.push([]);
	});
	var n = e[0], r = t[t.length - 1];
	V(n) && r && r.push(n);
	var i = t[t.length - 1];
	return i && i.length <= 0 && (t = t.slice(0, -1)), t;
}, H = (e, t) => {
	var n = Te(e);
	t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
	var r = n.map((e) => e.reduce((e, t, n) => re(xe ||= we([
		"",
		"",
		"",
		",",
		""
	]), e, n === 0 ? "M" : "L", t.x, t.y), "")).join("");
	return n.length === 1 ? `${r}Z` : r;
}, Ee = (e, t, n) => {
	var r = H(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${H(Array.from(t).reverse(), n).slice(1)}`;
}, U = (e) => {
	var t = e.points, n = e.className, r = e.baseLinePoints, i = e.connectNulls, a = Se(e, be);
	if (!t || !t.length) return null;
	var o = F("recharts-polygon", n);
	if (r && r.length) {
		var s = a.stroke && a.stroke !== "none", c = Ee(t, r, i);
		return /*#__PURE__*/ z.createElement("g", { className: o }, /*#__PURE__*/ z.createElement("path", B({}, M(a), {
			fill: c.slice(-1) === "Z" ? a.fill : "none",
			stroke: "none",
			d: c
		})), s ? /*#__PURE__*/ z.createElement("path", B({}, M(a), {
			fill: "none",
			d: H(t, i)
		})) : null, s ? /*#__PURE__*/ z.createElement("path", B({}, M(a), {
			fill: "none",
			d: H(r, i)
		})) : null);
	}
	var l = H(t, i);
	return /*#__PURE__*/ z.createElement("path", B({}, M(a), {
		fill: l.slice(-1) === "Z" ? a.fill : "none",
		className: o,
		d: l
	}));
}, W = (e, t, n) => {
	switch (t) {
		case "angleAxis": return O(e, n);
		case "radiusAxis": return le(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, G = (e, t, n) => {
	switch (t) {
		case "angleAxis": return ie(e, n);
		case "radiusAxis": return ue(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, De = b([
	W,
	j,
	oe,
	G
], v), K = b([De], ee), q = b([
	k,
	ae,
	de,
	E
], _), J = b([
	k,
	W,
	j,
	K,
	se,
	G,
	A,
	q,
	E
], g), Oe = b([J], (e) => {
	if (e) {
		var t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			var n = (e.coordinate + 360) % 360;
			t.has(n) || t.set(n, e);
		}), Array.from(t.values());
	}
}), ke = b([
	k,
	W,
	K,
	G,
	A,
	q,
	E
], y), Ae = ["children", "type"], je = ["ref"];
function Y() {
	return Y = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Y.apply(null, arguments);
}
function X(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? X(Object(n), !0).forEach(function(t) {
			Me(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Me(e, t, n) {
	return (t = Ne(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ne(e) {
	var t = Pe(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Pe(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Fe(e, t) {
	if (e == null) return {};
	var n, r, i = Ie(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ie(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Le = 1e-5, Re = Math.cos(S(45)), ze = "angleAxis";
function Be(e) {
	var t = me(), n = ge(), r = (0, z.useMemo)(() => {
		e.children;
		var t = e.type, r = Fe(e, Ae), i = C(n, "angleAxis", t);
		if (i != null) return Z(Z({}, r), {}, { type: i });
	}, [e, n]), i = r === P((e) => O(e, r?.id));
	return (0, z.useEffect)(() => r == null ? T : (t(m(r)), () => {
		t(te(r));
	}), [t, r]), i ? e.children : null;
}
var Ve = (e, t) => {
	var n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = D(n, r, i, e.coordinate), c = D(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
	return {
		x1: s.x,
		y1: s.y,
		x2: c.x,
		y2: c.y
	};
}, He = (e, t) => {
	var n = Math.cos(S(-e.coordinate));
	return n > Le ? t === "outer" ? "start" : "end" : n < -Le ? t === "outer" ? "end" : "start" : "middle";
}, Ue = (e) => {
	var t = Math.cos(S(-e.coordinate)), n = Math.sin(S(-e.coordinate));
	return Math.abs(t) <= Re ? n > 0 ? "start" : "end" : "middle";
}, We = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = e.axisLineType, o = e.axisLine, s = e.ticks;
	if (!o) return null;
	var c = Z(Z({}, N(e)), {}, { fill: "none" }, N(o));
	if (i === "circle") return /*#__PURE__*/ z.createElement(a, Y({ className: "recharts-polar-angle-axis-line" }, c, {
		cx: t,
		cy: n,
		r
	}));
	var l = s.map((e) => D(t, n, r, e.coordinate));
	return /*#__PURE__*/ z.createElement(U, Y({ className: "recharts-polar-angle-axis-line" }, c, { points: l }));
}, Ge = (e) => {
	var t = e.tick, n = e.tickProps, r = e.value;
	return t ? /*#__PURE__*/ z.isValidElement(t) ? /*#__PURE__*/ z.cloneElement(t, n) : typeof t == "function" ? t(n) : /*#__PURE__*/ z.createElement(u, Y({}, n, { className: "recharts-polar-angle-axis-tick-value" }), r) : null;
}, Ke = (e) => {
	var t = e.tick, n = e.tickLine, r = e.tickFormatter, i = e.stroke, a = e.ticks, o = N(e);
	o.ref;
	var c = Fe(o, je), l = fe(t), u = Z(Z({}, c), {}, { fill: "none" }, N(n)), d = a.map((a, o) => {
		var d = Ve(a, e), f = He(a, e.orientation), m = Ue(a), h = Z(Z(Z({}, c), {}, {
			textAnchor: f,
			verticalAnchor: m,
			stroke: "none",
			fill: i
		}, l), {}, {
			index: o,
			payload: a,
			x: d.x2,
			y: d.y2
		});
		return /*#__PURE__*/ z.createElement(s, Y({
			className: F("recharts-polar-angle-axis-tick", w(t)),
			key: `tick-${a.coordinate}`
		}, p(e, a, o)), n && /*#__PURE__*/ z.createElement("line", Y({ className: "recharts-polar-angle-axis-tick-line" }, u, d)), /*#__PURE__*/ z.createElement(Ge, {
			tick: t,
			tickProps: h,
			value: r ? r(a.value, o) : a.value
		}));
	});
	return /*#__PURE__*/ z.createElement(s, { className: "recharts-polar-angle-axis-ticks" }, d);
}, qe = (e) => {
	var t = e.angleAxisId, n = P(ce), r = P((e) => K(e, "angleAxis", t)), i = he(), a = P((e) => Oe(e, "angleAxis", t, i));
	if (n == null || !a || !a.length || r == null) return null;
	var o = Z(Z(Z({}, e), {}, { scale: r }, n), {}, {
		radius: n.outerRadius,
		ticks: a
	});
	return /*#__PURE__*/ z.createElement(f, { zIndex: o.zIndex }, /*#__PURE__*/ z.createElement(s, { className: F("recharts-polar-angle-axis", ze, o.className) }, /*#__PURE__*/ z.createElement(We, o), /*#__PURE__*/ z.createElement(Ke, o)));
};
function Je(e) {
	var t = ne(e, x);
	return /*#__PURE__*/ z.createElement(Be, {
		id: t.angleAxisId,
		scale: t.scale,
		type: t.type,
		dataKey: t.dataKey,
		unit: void 0,
		name: t.name,
		allowDuplicatedCategory: !1,
		allowDataOverflow: !1,
		reversed: t.reversed,
		includeHidden: !1,
		allowDecimals: t.allowDecimals,
		tickCount: t.tickCount,
		niceTicks: t.niceTicks ?? "auto",
		ticks: t.ticks,
		tick: t.tick,
		domain: t.domain
	}, /*#__PURE__*/ z.createElement(qe, t));
}
Je.displayName = "PolarAngleAxis";
// src/react/charts/bar-card.tsx
var Ye = [0, (e) => e * 1.2];
function Xe(e) {
	let t = Math.abs(e), n = (t, n) => {
		let r = e / t;
		return `${r.toLocaleString(void 0, { maximumFractionDigits: +(Math.abs(r) < 100) })}${n}`;
	};
	return t >= 1e8 ? n(1e8, "亿") : t >= 1e5 ? n(1e4, "万") : e.toLocaleString();
}
var Ze = (e) => ({
	position: e,
	className: "fill-text-secondary",
	formatter: (e) => Xe(Number(e))
});
function Qe({ title: a, unit: s, series: c, rows: l, color: u, empty: d, layout: f = "vertical" }) {
	let p = l.filter((e) => Number.isFinite(e.value) && e.value >= 0).map((e) => ({
		name: e.name,
		value: e.value
	})), m = p.reduce((e, t) => e + t.value, 0);
	if (!m) return /* @__PURE__ */ L(n, {
		title: a,
		children: d
	});
	let g = f === "horizontal";
	return /* @__PURE__ */ R("section", {
		className: e,
		"aria-label": a,
		children: [/* @__PURE__ */ L(r, {
			title: a,
			figure: m.toLocaleString(),
			note: s
		}), /* @__PURE__ */ R(o, {
			data: p,
			config: { value: {
				label: c,
				colors: pe(u)
			} },
			layout: f,
			barRadius: 4,
			chartProps: g ? { margin: {
				top: 5,
				right: 56,
				bottom: 5,
				left: 5
			} } : void 0,
			className: g ? "aspect-auto h-64 flex-none text-text-secondary" : "aspect-auto h-56 flex-none text-text-secondary",
			children: [
				/* @__PURE__ */ L(o.Grid, {}),
				g ? /* @__PURE__ */ L(o.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ L(t, { along: "y" }),
					width: h(p.map((e) => e.name))
				}) : /* @__PURE__ */ L(o.XAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ L(t, { along: "x" })
				}),
				L(g ? o.XAxis : o.YAxis, {
					hide: !0,
					domain: Ye
				}),
				/* @__PURE__ */ L(o.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: Ze(g ? "right" : "top")
					}
				}),
				/* @__PURE__ */ L(i, {})
			]
		})]
	});
}
// src/react/charts/heat.ts
var $e = [
	"周一",
	"周二",
	"周三",
	"周四",
	"周五",
	"周六",
	"周日"
], et = (e, t) => e ? Math.max(.12, e / t) : 0;
function tt(e) {
	let t = Array.from({ length: 7 }, () => Array(24).fill(0));
	for (let n of e?.hours || []) {
		let { weekday: e, hour: r, count: i } = n;
		!Number.isInteger(e) || e < 0 || e > 6 || !Number.isInteger(r) || r < 0 || r > 23 || !Number.isFinite(i) || i < 0 || (t[e][r] = (t[e][r] || 0) + i);
	}
	let n = t.flat(), r = Math.max(1, ...n);
	return {
		cells: t.flatMap((e, t) => e.map((e, n) => ({
			key: `${t}-${n}`,
			label: `${$e[t]} ${n}:00`,
			count: e,
			share: et(e, r)
		}))),
		total: n.reduce((e, t) => e + t, 0)
	};
}
function nt(e) {
	let t = (e?.days || []).filter((e) => /^\d{4}-\d{2}-\d{2}$/.test(e.date) && Number.isFinite(e.count) && e.count >= 0).slice().sort((e, t) => e.date.localeCompare(t.date)), n = {
		cells: [],
		total: 0,
		start: "",
		end: ""
	};
	if (!t.length) return n;
	let r = /* @__PURE__ */ new Date(`${t.at(-1).date}T00:00:00Z`), i = new Date(r);
	i.setUTCDate(i.getUTCDate() - 90);
	let a = new Map(t.map((e) => [e.date, e.count])), o = Math.max(1, ...t.map((e) => e.count)), s = Array.from({ length: 91 }, (e, t) => {
		let n = new Date(i);
		n.setUTCDate(i.getUTCDate() + t);
		let r = n.toISOString().slice(0, 10), s = a.get(r) || 0;
		return {
			key: r,
			label: r,
			count: s,
			share: et(s, o)
		};
	});
	return {
		cells: s,
		total: s.reduce((e, t) => e + t.count, 0),
		start: i.toISOString().slice(0, 10),
		end: t.at(-1).date
	};
}
// src/react/charts/heat-card.tsx
var Q = 14, $ = 17, rt = {
	4: {
		fill: "fill-chart-4",
		dot: "bg-chart-4"
	},
	5: {
		fill: "fill-chart-5",
		dot: "bg-chart-5"
	}
}, it = {
	start: "translate-x-0",
	center: "-translate-x-1/2",
	end: "-translate-x-full"
};
function at({ cell: e, series: t, tone: n, left: r, top: i, anchor: a }) {
	return /* @__PURE__ */ R("div", {
		"aria-hidden": !0,
		style: {
			left: `${r}%`,
			top: `${i}%`
		},
		className: `pointer-events-none absolute z-10 -mt-2 -translate-y-full ${c} ${it[a]}`,
		children: [/* @__PURE__ */ L("div", {
			className: "font-medium text-foreground",
			children: e.label
		}), /* @__PURE__ */ L(d, {
			name: t,
			value: e.count,
			swatch: /* @__PURE__ */ L("i", { className: `${l} ${rt[n].dot}` })
		})]
	});
}
function ot({ title: t, words: n, cells: i, total: a, columns: o, rows: s, axis: c, footer: l, tone: u }) {
	let [d, f] = (0, z.useState)(-1), [p, m] = (0, z.useState)(0), h = (0, z.useRef)(null), g = p < i.length ? p : 0, _ = c ? 30 : 0, v = c ? 18 : 0, y = _ + o * $, b = v + s * $, x = (e) => ({
		x: _ + e % o * $,
		y: v + Math.floor(e / o) * $
	}), S = i[d], C = S ? x(d) : null, w = C ? (C.x + Q / 2) / y : 0, T = w < .1 ? "start" : w > .9 ? "end" : "center", E = C ? {
		start: C.x,
		center: C.x + Q / 2,
		end: C.x + Q
	}[T] : 0, D = (e, t) => {
		let n = t - t % o, r = {
			ArrowLeft: t - 1,
			ArrowRight: t + 1,
			ArrowUp: t - o,
			ArrowDown: t + o,
			Home: n,
			End: Math.min(n + o, i.length) - 1
		}[e.key];
		r !== void 0 && (e.preventDefault(), !(r < 0 || r >= i.length) && (m(r), h.current?.querySelector(`rect[data-cell="${r}"]`)?.focus()));
	};
	return /* @__PURE__ */ R("section", {
		className: e,
		children: [
			/* @__PURE__ */ L(r, {
				title: t,
				figure: (S ? S.count : a).toLocaleString(),
				note: S ? S.label : n.unit
			}),
			/* @__PURE__ */ R("div", {
				className: "relative",
				children: [/* @__PURE__ */ L("div", {
					className: "min-w-0 overflow-x-auto",
					children: /* @__PURE__ */ R("svg", {
						ref: h,
						role: "img",
						"aria-label": t,
						onPointerLeave: () => f(-1),
						viewBox: `0 0 ${y} ${b}`,
						className: c ? "block h-auto min-w-80 w-full" : "block h-auto w-full",
						children: [c, i.map((e, t) => {
							let { x: r, y: i } = x(t);
							return /* @__PURE__ */ L("rect", {
								"data-cell": t,
								tabIndex: t === g ? 0 : -1,
								role: "img",
								"aria-label": `${e.label}，${e.count} ${n.cellUnit}`,
								x: r,
								y: i,
								width: Q,
								height: Q,
								rx: 3,
								fillOpacity: e.share || 1,
								opacity: d >= 0 && d !== t ? .4 : 1,
								className: e.share ? `outline-none transition-opacity duration-200 focus-visible:stroke-border-focus-ring ${rt[u].fill}` : "fill-chart-track outline-none transition-opacity duration-200 focus-visible:stroke-border-focus-ring",
								onPointerEnter: () => f(t),
								onFocus: () => {
									f(t), m(t);
								},
								onBlur: () => f(-1),
								onKeyDown: (e) => D(e, t)
							}, e.key);
						})]
					})
				}), S && C ? /* @__PURE__ */ L(at, {
					cell: S,
					series: n.series,
					tone: u,
					anchor: T,
					left: E / y * 100,
					top: C.y / b * 100
				}) : null]
			}),
			/* @__PURE__ */ L("footer", {
				className: "flex flex-wrap justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: l
			})
		]
	});
}
var st = /* @__PURE__ */ R(I.Fragment, { children: [$e.map((e, t) => /* @__PURE__ */ L("text", {
	x: 0,
	y: 18 + t * $ + 7,
	dominantBaseline: "middle",
	className: "fill-text-secondary text-caption-1-regular",
	children: e
}, e)), Array.from({ length: 24 }, (e, t) => t % 2 ? null : /* @__PURE__ */ L("text", {
	x: 30 + t * $,
	y: 8,
	dominantBaseline: "middle",
	className: "fill-text-secondary text-caption-1-regular",
	children: t
}, t))] });
function ct({ activity: e, title: t, dailyTitle: r, words: i, tone: a, empty: o }) {
	let s = tt(e), c = nt(e);
	return c.cells.length ? /* @__PURE__ */ R("div", {
		className: "inline-grid w-full items-start gap-5 lg:grid-cols-2",
		children: [/* @__PURE__ */ L(ot, {
			title: t,
			words: i,
			tone: a,
			cells: s.cells,
			total: s.total,
			columns: 24,
			rows: 7,
			axis: st,
			footer: /* @__PURE__ */ R(I.Fragment, { children: [/* @__PURE__ */ L("span", { children: "星期 × 小时" }), /* @__PURE__ */ L("span", { children: e?.timezone || "UTC+08:00" })] })
		}), /* @__PURE__ */ L(ot, {
			title: r,
			words: i,
			tone: a,
			cells: c.cells,
			total: c.total,
			columns: 13,
			rows: 7,
			footer: /* @__PURE__ */ R(I.Fragment, { children: [/* @__PURE__ */ L("span", { children: c.start }), /* @__PURE__ */ L("span", { children: c.end })] })
		})]
	}) : /* @__PURE__ */ L(n, {
		title: t,
		children: o
	});
}
// src/react/components/expandable-ranking.tsx
function lt({ children: e, className: t = "", previewCount: n = 10 }) {
	let r = (0, z.useId)(), i = (0, z.useRef)(null), [a, o] = (0, z.useState)(!1), [s, c] = (0, z.useState)(!1), l = z.Children.toArray(e), u = l.length > n;
	(0, z.useLayoutEffect)(() => {
		let e = i.current;
		if (!e || !u) return;
		let t = () => {
			let t = e.children[Math.min(n, e.children.length) - 1];
			t && e.offsetWidth && (e.style.setProperty("--ranking-collapsed-height", `${t.offsetTop - e.offsetTop + t.offsetHeight}px`), e.style.setProperty("--ranking-expanded-height", `${e.scrollHeight}px`));
		};
		t();
		let r = new ResizeObserver(t);
		return r.observe(e), () => r.disconnect();
	}, [
		u,
		n,
		l.length
	]);
	let d = l.map((e, t) => !(0, z.isValidElement)(e) || t < n ? e : (0, z.cloneElement)(e, { inert: !a || void 0 }));
	return /* @__PURE__ */ R("div", {
		"data-expandable-ranking": !0,
		"data-expandable": u || void 0,
		"data-expanded": a || void 0,
		"data-animating": s || void 0,
		children: [/* @__PURE__ */ L("ol", {
			id: r,
			ref: i,
			"data-expandable-ranking-list": !0,
			className: t,
			onTransitionEnd: (e) => {
				e.target === i.current && e.propertyName === "max-height" && c(!1);
			},
			children: d
		}), u ? /* @__PURE__ */ L("button", {
			type: "button",
			"data-ranking-toggle": !0,
			"aria-controls": r,
			"aria-expanded": a,
			"aria-label": a ? "收起排名" : "展开更多排名",
			onClick: () => {
				c(!0), o((e) => !e);
			},
			children: /* @__PURE__ */ L(ve, { "aria-hidden": !0 })
		}) : null]
	});
}
export { ct as ActivityHeat, Ye as BAR_DOMAIN, Qe as BarCard, lt as ExpandableRanking, Je as PolarAngleAxis, U as Polygon, Ze as barLabel, K as selectPolarAxisScale, J as selectPolarAxisTicks, ke as selectPolarGraphicalItemAxisTicks };

//# debugId=9f070ed0-0fc6-4b5c-92d7-66f7147e19ad