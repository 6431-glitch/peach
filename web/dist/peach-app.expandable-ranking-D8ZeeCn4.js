(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4b6b78da-6a21-47dc-8dc4-772c615ae37d", e._sentryDebugIdIdentifier = "sentry-dbid-4b6b78da-6a21-47dc-8dc4-772c615ae37d");
	} catch {}
})();
import { CHART_CARD as e, CategoryTick as t, ChartEmpty as n, ChartHead as r, ChartTip as i, Dot as a, EvilBarChart as o, Layer as s, TIP_SURFACE as c, TIP_SWATCH as l, Text as u, TipRow as d, ZIndexLayer as f, adaptEventsOfChild as p, addAngleAxis as m, categoryAxisWidth as h, combineAxisTicks as g, combineCategoricalDomain as _, combineConfiguredScale as v, combineGraphicalItemTicks as y, createSelector as b, defaultPolarAngleAxisProps as x, degreeToRadian as S, getAxisTypeBasedOnLayout as ee, getClassNameFromUnknown as te, noop as ne, pickAxisType as C, polarToCartesian as w, rechartsScaleFactory as re, removeAngleAxis as ie, resolveDefaultProps as ae, roundTemplateLiteral as oe, selectAngleAxis as T, selectAngleAxisRangeWithReversed as se, selectChartLayout as E, selectDuplicateDomain as D, selectPolarAppliedValues as ce, selectPolarAxisCheckedDomain as le, selectPolarNiceTicks as ue, selectPolarViewBox as de, selectRadiusAxis as fe, selectRadiusAxisRangeWithReversed as pe, selectRealScaleType as O, selectRenderableAxisSettings as me, svgPropertiesAndEvents as k, svgPropertiesNoEvents as A, svgPropertiesNoEventsFromUnknown as he, tone as ge, useAppDispatch as _e, useAppSelector as j, useIsPanorama as ve, usePolarChartLayout as ye } from "./peach-app.chart-tip-BGeaXdeB.js";
import { __toESM as be, clsx as M, f1 as xe, import_jsx_runtime as N, jsx as P, jsxs as F, require_react as Se } from "./peach-app.js";
// node_modules/recharts/es6/shape/Polygon.js
var I = /* @__PURE__ */ be(Se()), Ce = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
], we;
function L() {
	return L = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, L.apply(null, arguments);
}
function Te(e, t) {
	if (e == null) return {};
	var n, r, i = Ee(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ee(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function De(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var R = (e) => e != null && e.x === +e.x && e.y === +e.y, Oe = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	e.forEach((e) => {
		var n = t[t.length - 1];
		R(e) ? n && n.push(e) : n && n.length > 0 && t.push([]);
	});
	var n = e[0], r = t[t.length - 1];
	R(n) && r && r.push(n);
	var i = t[t.length - 1];
	return i && i.length <= 0 && (t = t.slice(0, -1)), t;
}, z = (e, t) => {
	var n = Oe(e);
	t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
	var r = n.map((e) => e.reduce((e, t, n) => oe(we ||= De([
		"",
		"",
		"",
		",",
		""
	]), e, n === 0 ? "M" : "L", t.x, t.y), "")).join("");
	return n.length === 1 ? `${r}Z` : r;
}, ke = (e, t, n) => {
	var r = z(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${z(Array.from(t).reverse(), n).slice(1)}`;
}, B = (e) => {
	var t = e.points, n = e.className, r = e.baseLinePoints, i = e.connectNulls, a = Te(e, Ce);
	if (!t || !t.length) return null;
	var o = M("recharts-polygon", n);
	if (r && r.length) {
		var s = a.stroke && a.stroke !== "none", c = ke(t, r, i);
		return /*#__PURE__*/ I.createElement("g", { className: o }, /*#__PURE__*/ I.createElement("path", L({}, k(a), {
			fill: c.slice(-1) === "Z" ? a.fill : "none",
			stroke: "none",
			d: c
		})), s ? /*#__PURE__*/ I.createElement("path", L({}, k(a), {
			fill: "none",
			d: z(t, i)
		})) : null, s ? /*#__PURE__*/ I.createElement("path", L({}, k(a), {
			fill: "none",
			d: z(r, i)
		})) : null);
	}
	var l = z(t, i);
	return /*#__PURE__*/ I.createElement("path", L({}, k(a), {
		fill: l.slice(-1) === "Z" ? a.fill : "none",
		className: o,
		d: l
	}));
}, V = (e, t, n) => {
	switch (t) {
		case "angleAxis": return T(e, n);
		case "radiusAxis": return fe(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, H = (e, t, n) => {
	switch (t) {
		case "angleAxis": return se(e, n);
		case "radiusAxis": return pe(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, Ae = b([
	V,
	O,
	le,
	H
], v), U = b([Ae], re), W = b([
	E,
	ce,
	me,
	C
], _), G = b([
	E,
	V,
	O,
	U,
	ue,
	H,
	D,
	W,
	C
], g), je = b([G], (e) => {
	if (e) {
		var t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			var n = (e.coordinate + 360) % 360;
			t.has(n) || t.set(n, e);
		}), Array.from(t.values());
	}
}), Me = b([
	E,
	V,
	U,
	H,
	D,
	W,
	C
], y), Ne = ["children", "type"], Pe = ["ref"];
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function q(e, t) {
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
		t % 2 ? q(Object(n), !0).forEach(function(t) {
			Fe(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Fe(e, t, n) {
	return (t = Ie(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ie(e) {
	var t = Le(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Le(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Y(e, t) {
	if (e == null) return {};
	var n, r, i = Re(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Re(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var X = 1e-5, ze = Math.cos(S(45)), Be = "angleAxis";
function Ve(e) {
	var t = _e(), n = ye(), r = (0, I.useMemo)(() => {
		e.children;
		var t = e.type, r = Y(e, Ne), i = ee(n, "angleAxis", t);
		if (i != null) return J(J({}, r), {}, { type: i });
	}, [e, n]), i = r === j((e) => T(e, r?.id));
	return (0, I.useEffect)(() => r == null ? ne : (t(m(r)), () => {
		t(ie(r));
	}), [t, r]), i ? e.children : null;
}
var He = (e, t) => {
	var n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = w(n, r, i, e.coordinate), c = w(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
	return {
		x1: s.x,
		y1: s.y,
		x2: c.x,
		y2: c.y
	};
}, Ue = (e, t) => {
	var n = Math.cos(S(-e.coordinate));
	return n > X ? t === "outer" ? "start" : "end" : n < -X ? t === "outer" ? "end" : "start" : "middle";
}, We = (e) => {
	var t = Math.cos(S(-e.coordinate)), n = Math.sin(S(-e.coordinate));
	return Math.abs(t) <= ze ? n > 0 ? "start" : "end" : "middle";
}, Ge = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = e.axisLineType, o = e.axisLine, s = e.ticks;
	if (!o) return null;
	var c = J(J({}, A(e)), {}, { fill: "none" }, A(o));
	if (i === "circle") return /*#__PURE__*/ I.createElement(a, K({ className: "recharts-polar-angle-axis-line" }, c, {
		cx: t,
		cy: n,
		r
	}));
	var l = s.map((e) => w(t, n, r, e.coordinate));
	return /*#__PURE__*/ I.createElement(B, K({ className: "recharts-polar-angle-axis-line" }, c, { points: l }));
}, Ke = (e) => {
	var t = e.tick, n = e.tickProps, r = e.value;
	return t ? /*#__PURE__*/ I.isValidElement(t) ? /*#__PURE__*/ I.cloneElement(t, n) : typeof t == "function" ? t(n) : /*#__PURE__*/ I.createElement(u, K({}, n, { className: "recharts-polar-angle-axis-tick-value" }), r) : null;
}, qe = (e) => {
	var t = e.tick, n = e.tickLine, r = e.tickFormatter, i = e.stroke, a = e.ticks, o = A(e);
	o.ref;
	var c = Y(o, Pe), l = he(t), u = J(J({}, c), {}, { fill: "none" }, A(n)), d = a.map((a, o) => {
		var d = He(a, e), f = Ue(a, e.orientation), m = We(a), h = J(J(J({}, c), {}, {
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
		return /*#__PURE__*/ I.createElement(s, K({
			className: M("recharts-polar-angle-axis-tick", te(t)),
			key: `tick-${a.coordinate}`
		}, p(e, a, o)), n && /*#__PURE__*/ I.createElement("line", K({ className: "recharts-polar-angle-axis-tick-line" }, u, d)), /*#__PURE__*/ I.createElement(Ke, {
			tick: t,
			tickProps: h,
			value: r ? r(a.value, o) : a.value
		}));
	});
	return /*#__PURE__*/ I.createElement(s, { className: "recharts-polar-angle-axis-ticks" }, d);
}, Je = (e) => {
	var t = e.angleAxisId, n = j(de), r = j((e) => U(e, "angleAxis", t)), i = ve(), a = j((e) => je(e, "angleAxis", t, i));
	if (n == null || !a || !a.length || r == null) return null;
	var o = J(J(J({}, e), {}, { scale: r }, n), {}, {
		radius: n.outerRadius,
		ticks: a
	});
	return /*#__PURE__*/ I.createElement(f, { zIndex: o.zIndex }, /*#__PURE__*/ I.createElement(s, { className: M("recharts-polar-angle-axis", Be, o.className) }, /*#__PURE__*/ I.createElement(Ge, o), /*#__PURE__*/ I.createElement(qe, o)));
};
function Z(e) {
	var t = ae(e, x);
	return /*#__PURE__*/ I.createElement(Ve, {
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
	}, /*#__PURE__*/ I.createElement(Je, t));
}
Z.displayName = "PolarAngleAxis";
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
	if (!m) return /* @__PURE__ */ P(n, {
		title: a,
		children: d
	});
	let g = f === "horizontal";
	return /* @__PURE__ */ F("section", {
		className: e,
		"aria-label": a,
		children: [/* @__PURE__ */ P(r, {
			title: a,
			figure: m.toLocaleString(),
			note: s
		}), /* @__PURE__ */ F(o, {
			data: p,
			config: { value: {
				label: c,
				colors: ge(u)
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
				/* @__PURE__ */ P(o.Grid, {}),
				g ? /* @__PURE__ */ P(o.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ P(t, { along: "y" }),
					width: h(p.map((e) => e.name))
				}) : /* @__PURE__ */ P(o.XAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ P(t, { along: "x" })
				}),
				P(g ? o.XAxis : o.YAxis, {
					hide: !0,
					domain: Ye
				}),
				/* @__PURE__ */ P(o.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: Ze(g ? "right" : "top")
					}
				}),
				/* @__PURE__ */ P(i, {})
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
	return /* @__PURE__ */ F("div", {
		"aria-hidden": !0,
		style: {
			left: `${r}%`,
			top: `${i}%`
		},
		className: `pointer-events-none absolute z-10 -mt-2 -translate-y-full ${c} ${it[a]}`,
		children: [/* @__PURE__ */ P("div", {
			className: "font-medium text-foreground",
			children: e.label
		}), /* @__PURE__ */ P(d, {
			name: t,
			value: e.count,
			swatch: /* @__PURE__ */ P("i", { className: `${l} ${rt[n].dot}` })
		})]
	});
}
function ot({ title: t, words: n, cells: i, total: a, columns: o, rows: s, axis: c, footer: l, tone: u }) {
	let [d, f] = (0, I.useState)(-1), p = c ? 30 : 0, m = c ? 18 : 0, h = p + o * $, g = m + s * $, _ = (e) => ({
		x: p + e % o * $,
		y: m + Math.floor(e / o) * $
	}), v = i[d], y = v ? _(d) : null, b = y ? (y.x + Q / 2) / h : 0, x = b < .1 ? "start" : b > .9 ? "end" : "center", S = y ? {
		start: y.x,
		center: y.x + Q / 2,
		end: y.x + Q
	}[x] : 0;
	return /* @__PURE__ */ F("section", {
		className: e,
		children: [
			/* @__PURE__ */ P(r, {
				title: t,
				figure: (v ? v.count : a).toLocaleString(),
				note: v ? v.label : n.unit
			}),
			/* @__PURE__ */ F("div", {
				className: "relative",
				children: [/* @__PURE__ */ P("div", {
					className: "min-w-0 overflow-x-auto",
					children: /* @__PURE__ */ F("svg", {
						role: "img",
						"aria-label": t,
						onPointerLeave: () => f(-1),
						viewBox: `0 0 ${h} ${g}`,
						className: c ? "block h-auto min-w-80 w-full" : "block h-auto w-full",
						children: [c, i.map((e, t) => {
							let { x: r, y: i } = _(t);
							return /* @__PURE__ */ P("rect", {
								tabIndex: 0,
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
								onFocus: () => f(t),
								onBlur: () => f(-1)
							}, e.key);
						})]
					})
				}), v && y ? /* @__PURE__ */ P(at, {
					cell: v,
					series: n.series,
					tone: u,
					anchor: x,
					left: S / h * 100,
					top: y.y / g * 100
				}) : null]
			}),
			/* @__PURE__ */ P("footer", {
				className: "flex flex-wrap justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: l
			})
		]
	});
}
var st = /* @__PURE__ */ F(N.Fragment, { children: [$e.map((e, t) => /* @__PURE__ */ P("text", {
	x: 0,
	y: 18 + t * $ + 7,
	dominantBaseline: "middle",
	className: "fill-text-secondary text-caption-1-regular",
	children: e
}, e)), Array.from({ length: 24 }, (e, t) => t % 2 ? null : /* @__PURE__ */ P("text", {
	x: 30 + t * $,
	y: 8,
	dominantBaseline: "middle",
	className: "fill-text-secondary text-caption-1-regular",
	children: t
}, t))] });
function ct({ activity: e, title: t, dailyTitle: r, words: i, tone: a, empty: o }) {
	let s = tt(e), c = nt(e);
	return c.cells.length ? /* @__PURE__ */ F("div", {
		className: "inline-grid w-full items-start gap-5 lg:grid-cols-2",
		children: [/* @__PURE__ */ P(ot, {
			title: t,
			words: i,
			tone: a,
			cells: s.cells,
			total: s.total,
			columns: 24,
			rows: 7,
			axis: st,
			footer: /* @__PURE__ */ F(N.Fragment, { children: [/* @__PURE__ */ P("span", { children: "星期 × 小时" }), /* @__PURE__ */ P("span", { children: e?.timezone || "UTC+08:00" })] })
		}), /* @__PURE__ */ P(ot, {
			title: r,
			words: i,
			tone: a,
			cells: c.cells,
			total: c.total,
			columns: 13,
			rows: 7,
			footer: /* @__PURE__ */ F(N.Fragment, { children: [/* @__PURE__ */ P("span", { children: c.start }), /* @__PURE__ */ P("span", { children: c.end })] })
		})]
	}) : /* @__PURE__ */ P(n, {
		title: t,
		children: o
	});
}
// src/react/components/expandable-ranking.tsx
function lt({ children: e, className: t = "", previewCount: n = 10 }) {
	let r = (0, I.useId)(), i = (0, I.useRef)(null), [a, o] = (0, I.useState)(!1), [s, c] = (0, I.useState)(!1), l = I.Children.toArray(e), u = l.length > n;
	(0, I.useLayoutEffect)(() => {
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
	let d = l.map((e, t) => !(0, I.isValidElement)(e) || t < n ? e : (0, I.cloneElement)(e, { inert: !a || void 0 }));
	return /* @__PURE__ */ F("div", {
		"data-expandable-ranking": !0,
		"data-expandable": u || void 0,
		"data-expanded": a || void 0,
		"data-animating": s || void 0,
		children: [/* @__PURE__ */ P("ol", {
			id: r,
			ref: i,
			"data-expandable-ranking-list": !0,
			className: t,
			onTransitionEnd: (e) => {
				e.target === i.current && e.propertyName === "max-height" && c(!1);
			},
			children: d
		}), u ? /* @__PURE__ */ P("button", {
			type: "button",
			"data-ranking-toggle": !0,
			"aria-controls": r,
			"aria-expanded": a,
			"aria-label": a ? "收起排名" : "展开更多排名",
			onClick: () => {
				c(!0), o((e) => !e);
			},
			children: /* @__PURE__ */ P(xe, { "aria-hidden": !0 })
		}) : null]
	});
}
export { ct as ActivityHeat, Ye as BAR_DOMAIN, Qe as BarCard, lt as ExpandableRanking, Z as PolarAngleAxis, B as Polygon, Ze as barLabel, U as selectPolarAxisScale, G as selectPolarAxisTicks, Me as selectPolarGraphicalItemAxisTicks };

//# debugId=4b6b78da-6a21-47dc-8dc4-772c615ae37d