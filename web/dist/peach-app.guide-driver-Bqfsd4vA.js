(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8e425b64-b778-4074-b8b0-04a2998670fc", e._sentryDebugIdIdentifier = "sentry-dbid-8e425b64-b778-4074-b8b0-04a2998670fc");
	} catch {}
})();
import { beginPlayerGuidePreview as e, closeDrawerAfterNav as t, disposeStage as n, peachHistory$1 as r, translate as i } from "./peach-app.js";
// node_modules/driver.js/dist/driver.js.mjs
var a = [
	"pointerdown",
	"mousedown",
	"pointerup",
	"mouseup",
	"click"
], o = /* @__PURE__ */ new WeakMap();
function s(e, t, n) {
	c(e);
	let r = (r) => {
		let i = r.target;
		e.contains(i) && ((!n || n(i)) && (r.preventDefault(), r.stopPropagation(), r.stopImmediatePropagation()), r.type === "click" && t?.(r));
	};
	for (let e of a) document.addEventListener(e, r, !0);
	o.set(e, r);
}
function c(e) {
	let t = o.get(e);
	if (t) {
		for (let e of a) document.removeEventListener(e, t, !0);
		o.delete(e);
	}
}
function l(e, t) {
	let n = e.wrapper.getBoundingClientRect();
	return {
		width: n.width + t,
		height: n.height + t,
		realWidth: n.width,
		realHeight: n.height
	};
}
function u(e, t) {
	let { elementDimensions: n, popoverDimensions: r, popoverPadding: i, popoverArrowDimensions: a } = t;
	return e === "start" ? Math.max(Math.min(n.top - i, window.innerHeight - r.realHeight - a.width), a.width) : e === "end" ? Math.max(Math.min(n.top - r?.realHeight + n.height + i, window.innerHeight - r?.realHeight - a.width), a.width) : e === "center" ? Math.max(Math.min(n.top + n.height / 2 - r?.realHeight / 2, window.innerHeight - r?.realHeight - a.width), a.width) : 0;
}
function d(e, t) {
	let { elementDimensions: n, popoverDimensions: r, popoverPadding: i, popoverArrowDimensions: a } = t;
	return e === "start" ? Math.max(Math.min(n.left - i, window.innerWidth - r.realWidth - a.width), a.width) : e === "end" ? Math.max(Math.min(n.left - r?.realWidth + n.width + i, window.innerWidth - r?.realWidth - a.width), a.width) : e === "center" ? Math.max(Math.min(n.left + n.width / 2 - r?.realWidth / 2, window.innerWidth - r?.realWidth - a.width), a.width) : 0;
}
function f(e, t, n) {
	let { align: r, side: i } = n, a = n.centered ? "over" : i, o = n.padding, s = l(e, n.offset), c = e.arrow.getBoundingClientRect(), f = t.getBoundingClientRect(), p = f.top - s.height, m = p >= 0, h = window.innerHeight - (f.bottom + s.height), _ = h >= 0, v = f.left - s.width, y = v >= 0, b = window.innerWidth - (f.right + s.width), x = b >= 0, S = !m && !_ && !y && !x, C = a;
	if (a === "top" && m ? x = y = _ = !1 : a === "bottom" && _ ? x = y = m = !1 : a === "left" && y ? x = m = _ = !1 : a === "right" && x && (y = m = _ = !1), a === "over") {
		let t = window.innerWidth / 2 - s.realWidth / 2, n = window.innerHeight / 2 - s.realHeight / 2;
		e.wrapper.style.left = `${t}px`, e.wrapper.style.right = "auto", e.wrapper.style.top = `${n}px`, e.wrapper.style.bottom = "auto";
	} else if (S) {
		let t = window.innerWidth / 2 - s?.realWidth / 2;
		e.wrapper.style.left = `${t}px`, e.wrapper.style.right = "auto", e.wrapper.style.bottom = "10px", e.wrapper.style.top = "auto";
	} else if (y) {
		let t = Math.min(v, window.innerWidth - s?.realWidth - c.width), n = u(r, {
			elementDimensions: f,
			popoverDimensions: s,
			popoverPadding: o,
			popoverArrowDimensions: c
		});
		e.wrapper.style.left = `${t}px`, e.wrapper.style.top = `${n}px`, e.wrapper.style.bottom = "auto", e.wrapper.style.right = "auto", C = "left";
	} else if (x) {
		let t = Math.min(b, window.innerWidth - s?.realWidth - c.width), n = u(r, {
			elementDimensions: f,
			popoverDimensions: s,
			popoverPadding: o,
			popoverArrowDimensions: c
		});
		e.wrapper.style.right = `${t}px`, e.wrapper.style.top = `${n}px`, e.wrapper.style.bottom = "auto", e.wrapper.style.left = "auto", C = "right";
	} else if (m) {
		let t = Math.min(p, window.innerHeight - s.realHeight - c.width), n = d(r, {
			elementDimensions: f,
			popoverDimensions: s,
			popoverPadding: o,
			popoverArrowDimensions: c
		});
		e.wrapper.style.top = `${t}px`, e.wrapper.style.left = `${n}px`, e.wrapper.style.bottom = "auto", e.wrapper.style.right = "auto", C = "top";
	} else if (_) {
		let t = Math.min(h, window.innerHeight - s?.realHeight - c.width), n = d(r, {
			elementDimensions: f,
			popoverDimensions: s,
			popoverPadding: o,
			popoverArrowDimensions: c
		});
		e.wrapper.style.left = `${n}px`, e.wrapper.style.bottom = `${t}px`, e.wrapper.style.top = "auto", e.wrapper.style.right = "auto", C = "bottom";
	}
	g(e, S ? "over" : C, r, t), [...e.wrapper.classList].filter((e) => e.startsWith("driver-popover-side-") || e.startsWith("driver-popover-align-")).forEach((t) => e.wrapper.classList.remove(t)), e.wrapper.classList.add(`driver-popover-side-${C}`), e.wrapper.classList.add(`driver-popover-align-${r}`);
}
function p(e, t, n, r, i, a = 10) {
	let o = r - n;
	return e <= n && t >= r ? i === "start" ? 15 + a / 2 : i === "end" ? o - 15 - a / 2 : o / 2 : (Math.min(Math.max(e, n), r) + Math.min(Math.max(t, n), r)) / 2 - n;
}
function m(e, t, n = 10) {
	let r = t - 15 - n;
	if (r < 15) return Math.max(0, (t - n) / 2);
	let i = e - n / 2;
	return Math.min(Math.max(i, 15), r);
}
function h(e, t, n) {
	return e === "left" || e === "right" ? t.bottom > n.top && t.top < n.bottom ? e : t.bottom <= n.top ? "bottom" : "top" : t.right > n.left && t.left < n.right ? e : t.right <= n.left ? "right" : "left";
}
function g(e, t, n, r) {
	let i = e.arrow;
	if (i.className = "driver-popover-arrow", i.style.top = "", i.style.right = "", i.style.bottom = "", i.style.left = "", t === "over") {
		i.classList.add("driver-popover-arrow-none");
		return;
	}
	let a = r.getBoundingClientRect(), o = e.wrapper.getBoundingClientRect(), s = h(t, a, o);
	i.classList.add(`driver-popover-arrow-side-${s}`);
	let c = i.getBoundingClientRect().width || 10;
	if (s === "left" || s === "right") {
		let e = p(a.top, a.bottom, o.top, o.bottom, n, c);
		i.style.top = `${m(e, o.height, c)}px`;
	} else {
		let e = p(a.left, a.right, o.left, o.right, n, c);
		i.style.left = `${m(e, o.width, c)}px`;
	}
}
function _(e) {
	return typeof e == "function" ? e() : typeof e == "string" ? document.querySelector(e) : e;
}
function v(e) {
	let t = window.getComputedStyle(e);
	return [
		t.overflow,
		t.overflowX,
		t.overflowY
	].some((e) => e === "auto" || e === "scroll");
}
function y(e, t, n, r) {
	return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t;
}
function b(e) {
	let t = "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type=\"text\"]:not([disabled]), input[type=\"radio\"]:not([disabled]), input[type=\"checkbox\"]:not([disabled]), select:not([disabled])";
	return e.flatMap((e) => {
		let n = e.matches(t), r = Array.from(e.querySelectorAll(t));
		return [...n ? [e] : [], ...r];
	}).filter((e) => getComputedStyle(e).pointerEvents !== "none" && te(e));
}
function x(e, t) {
	if (!e || C(e)) return;
	let n = e.offsetHeight > window.innerHeight;
	e.scrollIntoView({
		behavior: !t || S(e) ? "auto" : "smooth",
		inline: "center",
		block: n ? "start" : "center"
	});
}
function S(e) {
	if (!e || !e.parentElement) return;
	let t = e.parentElement;
	return t.scrollHeight > t.clientHeight;
}
function C(e) {
	let t = e.getBoundingClientRect();
	return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth) && !ee(e, t);
}
function ee(e, t) {
	let n = e;
	for (; n;) {
		if (getComputedStyle(n).position === "fixed") return !1;
		let e = n.parentElement;
		if (!e || e === document.body || e === document.documentElement) return !1;
		if (v(e)) {
			let n = e.getBoundingClientRect(), r = n.top + e.clientTop, i = n.left + e.clientLeft;
			if (t.top < r || t.left < i || t.bottom > r + (e.clientHeight || n.height) || t.right > i + (e.clientWidth || n.width)) return !0;
		}
		n = e;
	}
	return !1;
}
function te(e) {
	return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}
var w = /* @__PURE__ */ new WeakSet();
function T(e) {
	let t = e.closest("dialog[open]");
	if (!t) return document.body;
	if (!("showPopover" in t)) return t;
	let n = t.querySelector(":scope > .driver-layer");
	return n || (n = document.createElement("div"), n.className = "driver-layer", n.setAttribute("popover", "manual"), t.appendChild(n)), w.has(t) || (w.add(t), t.addEventListener("close", () => {
		t.querySelector(":scope > .driver-layer:popover-open")?.hidePopover();
	})), n.matches(":popover-open") || n.showPopover(), n;
}
function ne(e) {
	let t = e.parentElement;
	e.remove(), t?.classList.contains("driver-layer") && !t.childElementCount && t.remove();
}
function E(e) {
	e && (e.wrapper.style.display = "none");
}
function re(e, t) {
	let n = ae();
	T(e).appendChild(n.wrapper);
	let { title: r, description: i, showButtons: a, disableButtons: o, showProgress: c, nextBtnText: l, prevBtnText: u, progressText: d } = t;
	n.nextButton.innerHTML = l, n.previousButton.innerHTML = u, n.progress.innerHTML = d, n.closeButton.setAttribute("aria-label", t.closeBtnLabel), t.doneButton && n.nextButton.classList.add("driver-popover-done-btn"), r ? (n.title.innerHTML = r, n.title.style.display = "block") : n.title.style.display = "none", i ? (n.description.innerHTML = i, n.description.style.display = "block") : n.description.style.display = "none";
	let p = a.includes("next") || a.includes("previous") || c;
	n.closeButton.style.display = a.includes("close") ? "block" : "none", p ? (n.footer.style.display = "flex", n.progress.style.display = c ? "block" : "none", n.nextButton.style.display = a.includes("next") ? "block" : "none", n.previousButton.style.display = a.includes("previous") ? "block" : "none") : n.footer.style.display = "none", o.includes("next") && (n.nextButton.disabled = !0, n.nextButton.classList.add("driver-popover-btn-disabled")), o.includes("previous") && (n.previousButton.disabled = !0, n.previousButton.classList.add("driver-popover-btn-disabled")), o.includes("close") && (n.closeButton.disabled = !0, n.closeButton.classList.add("driver-popover-btn-disabled"));
	let m = n.wrapper;
	m.style.display = "block", m.style.left = "", m.style.top = "", m.style.bottom = "", m.style.right = "", m.id = "driver-popover-content", m.setAttribute("role", "dialog"), m.setAttribute("aria-labelledby", "driver-popover-title"), m.setAttribute("aria-describedby", "driver-popover-description");
	let h = n.arrow;
	h.className = "driver-popover-arrow", m.className = `driver-popover ${t.popoverClass || ""}`.trim(), s(n.wrapper, (e) => {
		let n = e.target instanceof Element ? e.target : e.target?.parentElement;
		if (n) {
			if (n.closest(".driver-popover-next-btn")) return t.onNextClick?.();
			if (n.closest(".driver-popover-prev-btn")) return t.onPrevClick?.();
			if (n.closest(".driver-popover-close-btn")) return t.onCloseClick?.();
		}
	}, (e) => n.description.contains(e) || n.title.contains(e) ? !1 : !!e.closest(".driver-popover-prev-btn, .driver-popover-next-btn, .driver-popover-close-btn")), t.onRender?.(n), f(n, e, t.position), ie(n, e, t.position), x(m, t.smoothScroll);
	let g = b([m, e]);
	return g.length > 0 && g[0].focus(), n;
}
function ie(e, t, n) {
	e.wrapper.querySelectorAll("img").forEach((r) => {
		if (r.complete) return;
		let i = () => f(e, t, n);
		r.addEventListener("load", i, { once: !0 }), r.addEventListener("error", i, { once: !0 });
	});
}
function ae() {
	let e = document.createElement("div");
	e.classList.add("driver-popover");
	let t = document.createElement("div");
	t.classList.add("driver-popover-arrow");
	let n = document.createElement("div");
	n.id = "driver-popover-title", n.classList.add("driver-popover-title"), n.style.display = "none", n.innerText = "Popover Title";
	let r = document.createElement("div");
	r.id = "driver-popover-description", r.classList.add("driver-popover-description"), r.style.display = "none", r.innerText = "Popover description is here";
	let i = document.createElement("button");
	i.type = "button", i.classList.add("driver-popover-close-btn"), i.innerHTML = "&times;";
	let a = document.createElement("div");
	a.classList.add("driver-popover-footer");
	let o = document.createElement("span");
	o.classList.add("driver-popover-progress-text"), o.innerText = "";
	let s = document.createElement("span");
	s.classList.add("driver-popover-navigation-btns");
	let c = document.createElement("button");
	c.type = "button", c.classList.add("driver-popover-prev-btn", "driver-popover-footer-btn"), c.innerHTML = "Previous";
	let l = document.createElement("button");
	return l.type = "button", l.classList.add("driver-popover-next-btn", "driver-popover-footer-btn"), l.innerHTML = "Next", s.appendChild(c), s.appendChild(l), a.appendChild(o), a.appendChild(s), e.appendChild(i), e.appendChild(t), e.appendChild(n), e.appendChild(r), e.appendChild(a), {
		wrapper: e,
		arrow: t,
		title: n,
		description: r,
		footer: a,
		previousButton: c,
		nextButton: l,
		closeButton: i,
		footerButtons: s,
		progress: o
	};
}
function D(e) {
	e && (c(e.wrapper), ne(e.wrapper));
}
function O(e, t) {
	let n = window.innerWidth, r = window.innerHeight, i = t.padding, a = t.radius, o = e.width + i * 2, s = e.height + i * 2, c = Math.min(a, o / 2, s / 2), l = Math.floor(Math.max(c, 0)), u = e.x - i + l, d = e.y - i, f = o - l * 2, p = s - l * 2;
	return `M${n},0L0,0L0,${r}L${n},${r}L${n},0Z
    M${u},${d} h${f} a${l},${l} 0 0 1 ${l},${l} v${p} a${l},${l} 0 0 1 -${l},${l} h-${f} a${l},${l} 0 0 1 -${l},-${l} v-${p} a${l},${l} 0 0 1 ${l},-${l} z`;
}
function oe(e, t, n, r, i) {
	let a = e.getState("__activeStagePosition"), o = a || r.getBoundingClientRect(), s = i.getBoundingClientRect();
	a = {
		x: y(t, o.x, s.x - o.x, n),
		y: y(t, o.y, s.y - o.y, n),
		width: y(t, o.width, s.width - o.width, n),
		height: y(t, o.height, s.height - o.height, n)
	}, j(e, a), e.setState("__activeStagePosition", a);
}
function k(e, t) {
	if (!t) return;
	let n = t.getBoundingClientRect(), r = {
		x: n.x,
		y: n.y,
		width: n.width,
		height: n.height
	};
	e.setState("__activeStagePosition", r), j(e, r);
}
function se(e) {
	let t = e.getState("__activeStagePosition"), n = e.getState("__overlaySvg");
	if (!t) return;
	if (!n) {
		console.warn("No stage svg found.");
		return;
	}
	let r = window.innerWidth, i = window.innerHeight;
	n.setAttribute("viewBox", `0 0 ${r} ${i}`);
}
function A(e, t) {
	let n = N(e, t);
	document.body.appendChild(n), s(n, (t) => {
		t.target.tagName === "path" && e.emit("overlayClick");
	}), e.setState("__overlaySvg", n);
}
function j(e, t) {
	let n = e.getState("__overlaySvg");
	if (!n) {
		A(e, t);
		return;
	}
	let r = n.firstElementChild;
	if (r?.tagName !== "path") throw Error("no path element found in stage svg");
	r.setAttribute("d", O(t, M(e)));
}
function M(e) {
	return e.getState("activeElement")?.id === "driver-dummy-element" ? {
		padding: 0,
		radius: 0
	} : {
		padding: e.getConfig("stagePadding") || 0,
		radius: e.getConfig("stageRadius") || 0
	};
}
function N(e, t) {
	let n = window.innerWidth, r = window.innerHeight, i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	i.classList.add("driver-overlay", "driver-overlay-animated"), i.setAttribute("viewBox", `0 0 ${n} ${r}`), i.setAttribute("xmlSpace", "preserve"), i.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"), i.setAttribute("version", "1.1"), i.setAttribute("preserveAspectRatio", "xMinYMin slice"), i.style.fillRule = "evenodd", i.style.clipRule = "evenodd", i.style.strokeLinejoin = "round", i.style.strokeMiterlimit = "2", i.style.zIndex = "10000", i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%";
	let a = document.createElementNS("http://www.w3.org/2000/svg", "path");
	return a.setAttribute("d", O(t, M(e))), a.style.fill = e.getConfig("overlayColor") || "rgb(0,0,0)", a.style.opacity = `${e.getConfig("overlayOpacity")}`, a.style.pointerEvents = "auto", a.style.cursor = "auto", i.appendChild(a), i;
}
function P(e) {
	let t = e.getState("__overlaySvg");
	t && (c(t), t.remove());
}
var F = "{{current}} of {{total}}";
function I(e, t) {
	return !(t.skipMissingElement ?? e.getConfig("skipMissingElement")) || !t.element ? !1 : !_(t.element);
}
function L(e, t, n) {
	let r = e.getConfig("steps") || [];
	for (let i = t; i >= 0 && i < r.length; i += n) if (!I(e, r[i])) return i;
}
function R(e, t) {
	let n = e.getState("activeIndex"), r = n !== void 0 && L(e, n + 1, 1) === void 0, i = t?.popover?.onDoneClick || e.getConfig("onDoneClick");
	return r && i ? i : t?.popover?.onNextClick || e.getConfig("onNextClick");
}
function z(e, t) {
	return t?.popover?.onPrevClick || e.getConfig("onPrevClick");
}
function B(e, t) {
	return t?.popover?.onCloseClick || e.getConfig("onCloseClick");
}
function V(e, t, n) {
	let r = e.getConfig("steps") || [], i = r[t], a = i.popover || {}, o = L(e, t + 1, 1) !== void 0, s = L(e, t - 1, -1) !== void 0, c = a.doneBtnText || e.getConfig("doneBtnText") || "Done", l = e.getConfig("allowClose"), u = a.showProgress === void 0 ? e.getConfig("showProgress") : a.showProgress, d = (a.progressText || e.getConfig("progressText") || F).replace("{{current}}", `${t + 1}`).replace("{{total}}", `${r.length}`), f = a.showButtons || e.getConfig("showButtons"), p = [
		"next",
		"previous",
		...l ? ["close"] : []
	].filter((e) => !f?.length || f.includes(e)), m = a.onNextClick || e.getConfig("onNextClick"), h = a.onPrevClick || e.getConfig("onPrevClick"), g = a.onCloseClick || e.getConfig("onCloseClick");
	return {
		...i,
		popover: {
			showButtons: p,
			nextBtnText: o ? void 0 : c,
			disableButtons: [...e.getConfig("disableButtons") || [], ...s ? [] : ["previous"]],
			showProgress: u,
			onNextClick: m || n.onNextClick,
			onPrevClick: h || n.onPrevClick,
			onCloseClick: g || n.onCloseClick,
			...a,
			progressText: d
		}
	};
}
function H(e, t) {
	return {
		showButtons: t?.popover?.showButtons || e.getConfig("showButtons") || [],
		disableButtons: t?.popover?.disableButtons || e.getConfig("disableButtons") || []
	};
}
function U(e, t, n) {
	let r = e.getConfig("stagePadding") || 0;
	return {
		side: n.popover?.side || "bottom",
		align: n.popover?.align || "start",
		offset: r + (e.getConfig("popoverOffset") || 0),
		padding: r,
		centered: t.id === "driver-dummy-element"
	};
}
function W(e, t, n) {
	let r = n.popover || {}, i = e.getState("activeIndex"), a = i !== void 0 && L(e, i + 1, 1) === void 0;
	return {
		title: r.title,
		description: r.description,
		...H(e, n),
		showProgress: r.showProgress || e.getConfig("showProgress") || !1,
		progressText: r.progressText ?? (e.getConfig("progressText") || F),
		nextBtnText: r.nextBtnText ?? (e.getConfig("nextBtnText") || "Next"),
		prevBtnText: r.prevBtnText ?? (e.getConfig("prevBtnText") || "Previous"),
		closeBtnLabel: r.closeBtnLabel ?? (e.getConfig("closeBtnLabel") || "Close"),
		doneButton: a,
		popoverClass: r.popoverClass || e.getConfig("popoverClass") || "",
		smoothScroll: e.getConfig("smoothScroll"),
		onNextClick: () => {
			a && e.setState("__destroyReason", "done");
			let r = R(e, n);
			return r ? r(t, n, e.getHookOpts()) : e.emit("nextClick");
		},
		onPrevClick: () => {
			let r = z(e, n);
			return r ? r(t, n, e.getHookOpts()) : e.emit("prevClick");
		},
		onCloseClick: () => {
			e.setState("__destroyReason", "close");
			let r = B(e, n);
			return r ? r(t, n, e.getHookOpts()) : e.emit("closeClick");
		},
		onRender: (t) => {
			e.setState("popover", t), (r.onPopoverRender || e.getConfig("onPopoverRender"))?.(t, e.getHookOpts());
		},
		position: U(e, t, n)
	};
}
function G(e, t, n) {
	D(e.getState("popover")), re(t, W(e, t, n));
}
function ce(e, t, n) {
	let r = e.getState("popover");
	r && f(r, t, U(e, t, n));
}
var K = {
	"aria-haspopup": "dialog",
	"aria-expanded": "true",
	"aria-controls": "driver-popover-content"
}, q = /* @__PURE__ */ new WeakMap();
function le(e) {
	if (!q.has(e)) {
		let t = Object.fromEntries(Object.keys(K).map((t) => [t, e.getAttribute(t)]));
		q.set(e, t);
	}
	for (let [t, n] of Object.entries(K)) e.setAttribute(t, n);
}
function J(e) {
	let t = q.get(e);
	if (t) {
		for (let [n, r] of Object.entries(t)) r === null ? e.removeAttribute(n) : e.setAttribute(n, r);
		q.delete(e);
	}
}
function ue() {
	let e = document.getElementById("driver-dummy-element");
	if (e) return e;
	let t = document.createElement("div");
	return t.id = "driver-dummy-element", t.style.width = "0", t.style.height = "0", t.style.pointerEvents = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.top = "50%", t.style.left = "50%", document.body.appendChild(t), t;
}
function Y(e, t) {
	let n = _(t.element);
	n ||= ue(), fe(e, n, t);
}
function de(e) {
	let t = e.getState("__activeElement"), n = e.getState("__activeStep");
	t && (k(e, t), se(e), ce(e, t, n));
}
function fe(e, t, n) {
	let r = e.getConfig("duration") || 400, i = Date.now(), a = e.getState("__activeStep"), o = e.getState("__activeElement") || t, s = !o || o === t, c = t.id === "driver-dummy-element", l = o.id === "driver-dummy-element", u = e.getConfig("animate"), d = n.onHighlightStarted || e.getConfig("onHighlightStarted"), f = n?.onHighlighted || e.getConfig("onHighlighted"), p = a?.onDeselected || e.getConfig("onDeselected"), m = e.getHookOpts();
	a && a !== n && p && p(l ? void 0 : o, a, m), d && d(c ? void 0 : t, n, m);
	let h = !s && u, g = !1;
	E(e.getState("popover")), e.setState("previousStep", a), e.setState("previousElement", o), e.setState("activeStep", n), e.setState("activeElement", t);
	let _ = () => {
		if (e.getState("__transitionCallback") !== _) return;
		let s = Date.now() - i, l = r - s <= r / 2;
		n.popover && l && !g && h && (G(e, t, n), g = !0), e.getConfig("animate") && s < r ? oe(e, s, r, o, t) : (k(e, t), f && f(c ? void 0 : t, n, e.getHookOpts()), e.setState("__transitionCallback", void 0), e.setState("__previousStep", a), e.setState("__previousElement", o), e.setState("__activeStep", n), e.setState("__activeElement", t)), window.requestAnimationFrame(_);
	};
	e.setState("__transitionCallback", _), window.requestAnimationFrame(_), document.querySelectorAll(".driver-active-element-parent").forEach((e) => {
		e.classList.remove("driver-active-element-parent", "driver-active-element-parent-no-scroll");
	}), x(t, e.getConfig("smoothScroll")), !h && n.popover && G(e, t, n), document.querySelectorAll(".driver-active-element").forEach((e) => {
		e.classList.remove("driver-active-element", "driver-no-interaction"), J(e);
	}), (n.disableActiveInteraction ?? e.getConfig("disableActiveInteraction")) && t.classList.add("driver-no-interaction");
	let y = t.parentElement;
	y && y !== document.body && (y.classList.add("driver-active-element-parent"), v(y) && y.classList.add("driver-active-element-parent-no-scroll")), t.classList.add("driver-active-element"), t.id !== "driver-dummy-element" && le(t);
}
function pe() {
	document.getElementById("driver-dummy-element")?.remove(), document.querySelectorAll(".driver-active-element").forEach((e) => {
		let t = e.parentElement;
		t && t !== document.body && t.classList.remove("driver-active-element-parent", "driver-active-element-parent-no-scroll"), e.classList.remove("driver-active-element", "driver-no-interaction"), J(e);
	});
}
function X(e) {
	let t = e.getState("__resizeTimeout");
	t && window.cancelAnimationFrame(t), e.setState("__resizeTimeout", window.requestAnimationFrame(() => de(e)));
}
function me(e, t) {
	if (!e.getState("isInitialized") || t.key !== "Tab" && t.keyCode !== 9) return;
	let n = e.getState("__activeElement"), r = e.getState("popover")?.wrapper, i = b([...r ? [r] : [], ...n ? [n] : []]), a = i[0], o = i[i.length - 1];
	t.preventDefault(), t.shiftKey ? (i[i.indexOf(document.activeElement) - 1] || o)?.focus() : (i[i.indexOf(document.activeElement) + 1] || a)?.focus();
}
function he(e, t) {
	(e.getConfig("allowKeyboardControl") ?? !0) && (t.key === "Escape" ? e.emit("escapePress") : t.key === "ArrowRight" ? e.emit("arrowRightPress") : t.key === "ArrowLeft" && e.emit("arrowLeftPress"));
}
function ge(e, t) {
	let n = e.getState("__activeElement"), r = t.target;
	n && r && n.contains(r) && e.emit("activeElementClick");
}
function _e(e) {
	let t = (t) => he(e, t), n = (t) => me(e, t), r = () => X(e), i = () => X(e), a = (t) => ge(e, t);
	e.setState("__events", {
		onKeyup: t,
		onKeydown: n,
		onResize: r,
		onScroll: i,
		onClick: a
	}), window.addEventListener("keyup", t, !1), window.addEventListener("keydown", n, !1), window.addEventListener("resize", r), window.addEventListener("scroll", i), document.addEventListener("click", a, !1);
}
function ve(e) {
	let t = e.getState("__events");
	t && (window.removeEventListener("keyup", t.onKeyup), window.removeEventListener("keydown", t.onKeydown), window.removeEventListener("resize", t.onResize), window.removeEventListener("scroll", t.onScroll), document.removeEventListener("click", t.onClick, !1));
}
function ye() {
	let e = {};
	function t(t = {}) {
		e = {
			animate: !0,
			duration: 400,
			allowClose: !0,
			allowScroll: !0,
			overlayClickBehavior: "close",
			overlayOpacity: .7,
			smoothScroll: !1,
			disableActiveInteraction: !1,
			advanceOnClick: !1,
			skipMissingElement: !1,
			waitForElement: 0,
			showProgress: !1,
			stagePadding: 10,
			stageRadius: 5,
			popoverOffset: 10,
			showButtons: [
				"next",
				"previous",
				"close"
			],
			disableButtons: [],
			overlayColor: "#000",
			...t
		};
	}
	return t(), {
		getConfig: ((t) => t ? e[t] : e),
		configure: t
	};
}
function be() {
	let e = {}, t = ((t) => t ? e[t] : e), n = (t, n) => {
		e[t] = n;
	};
	function r() {
		e = {};
	}
	return {
		getState: t,
		setState: n,
		resetState: r
	};
}
function xe() {
	let e = {};
	function t(t, n) {
		e[t] = n;
	}
	function n(t) {
		e[t]?.();
	}
	function r() {
		e = {};
	}
	return {
		listen: t,
		emit: n,
		reset: r
	};
}
function Se(e = {}) {
	let t = ye();
	t.configure(e);
	let n = be(), r = xe(), i;
	return {
		getConfig: t.getConfig,
		setConfig: t.configure,
		getState: n.getState,
		setState: n.setState,
		resetState: n.resetState,
		listen: r.listen,
		emit: r.emit,
		resetEmitter: r.reset,
		getDriver: () => i,
		setDriver: (e) => {
			i = e;
		},
		getHookOpts: (e, r) => {
			let a = e || n.getState();
			return {
				config: t.getConfig(),
				state: a,
				driver: i,
				index: a.activeIndex,
				...r ? { reason: r } : {}
			};
		}
	};
}
var Z;
function Ce(e = {}) {
	let t = Se(e), n = () => y("replaced", !1);
	function r(e = "close") {
		t.getConfig("allowClose") && y(e);
	}
	function i() {
		let e = t.getState("activeIndex");
		e !== void 0 && L(t, e + 1, 1) === void 0 && t.setState("__destroyReason", "done");
	}
	function a() {
		let { disableButtons: e } = H(t, t.getState("__activeStep"));
		e.includes("close") || r("escape");
	}
	function o(e) {
		let { showButtons: n, disableButtons: r } = H(t, t.getState("__activeStep"));
		return n.includes(e) && !r.includes(e);
	}
	function s() {
		let e = t.getConfig("overlayClickBehavior");
		if (t.getConfig("allowClose") && e === "close") y("overlay");
		else if (typeof e == "function") {
			t.setState("__destroyReason", "overlay");
			let n = t.getState("__activeStep");
			e(t.getState("__activeElement"), n, t.getHookOpts());
		} else if (e === "nextStep") {
			let e = t.getState("activeStep"), n = t.getState("activeElement"), r = R(t, e);
			if (r) {
				i(), r(n, e, t.getHookOpts());
				return;
			}
			c();
		}
	}
	function c() {
		let e = t.getState("activeIndex"), n = t.getConfig("steps") || [];
		if (e === void 0) return;
		let r = e + 1;
		n[r] ? v(r) : y("done");
	}
	function l() {
		let e = t.getState("activeIndex"), n = t.getConfig("steps") || [];
		if (e === void 0) return;
		let r = e - 1;
		n[r] ? v(r) : y("api");
	}
	function u(e) {
		(t.getConfig("steps") || [])[e] ? v(e) : y("api");
	}
	function d() {
		if (t.getState("__transitionCallback")) return;
		let e = t.getState("__activeStep");
		if (!e || !(e.advanceOnClick ?? t.getConfig("advanceOnClick"))) return;
		let n = t.getState("__activeElement"), r = R(t, e);
		r ? (i(), r(n, e, t.getHookOpts())) : c();
	}
	function f() {
		if (t.getState("__transitionCallback")) return;
		let e = t.getState("activeIndex"), n = t.getState("__activeStep"), r = t.getState("__activeElement");
		if (e === void 0 || n === void 0 || !(t.getConfig("steps") || [])[e - 1] || !o("previous")) return;
		let i = z(t, n);
		if (i) return i(r, n, t.getHookOpts());
		l();
	}
	function p() {
		if (t.getState("__transitionCallback")) return;
		let e = t.getState("activeIndex"), n = t.getState("__activeStep"), r = t.getState("__activeElement");
		if (e === void 0 || n === void 0 || !o("next")) return;
		let a = R(t, n);
		if (a) return i(), a(r, n, t.getHookOpts());
		c();
	}
	function m() {
		t.getState("isInitialized") || (Z && Z !== n && Z(), Z = n, t.setState("isInitialized", !0), document.body.classList.add("driver-active", t.getConfig("animate") ? "driver-fade" : "driver-simple"), t.getConfig("allowScroll") || document.body.classList.add("driver-no-scroll"), document.body.style.setProperty("--driver-animation-duration", `${t.getConfig("duration") || 400}ms`), _e(t), t.listen("overlayClick", s), t.listen("activeElementClick", d), t.listen("escapePress", a), t.listen("closeClick", r), t.listen("arrowLeftPress", f), t.listen("arrowRightPress", p));
	}
	function h() {
		let e = t.getState("__pendingWaitCancel");
		e && (t.setState("__pendingWaitCancel", void 0), e());
	}
	function g(e, n, r) {
		let i = () => {
			a.disconnect(), window.clearTimeout(o), t.setState("__pendingWaitCancel", void 0), r();
		}, a = new MutationObserver(() => {
			_(e.element) && i();
		}), o = window.setTimeout(i, n);
		t.setState("__pendingWaitCancel", () => {
			a.disconnect(), window.clearTimeout(o);
		}), a.observe(document.documentElement, {
			childList: !0,
			subtree: !0,
			attributes: !0
		});
	}
	function v(e = 0, n = !1) {
		h(), t.setState("__destroyReason", void 0);
		let r = t.getConfig("steps");
		if (!r) {
			console.error("No steps to drive through"), y("api");
			return;
		}
		if (!r[e]) {
			y("api");
			return;
		}
		let i = r[e], a = i.waitForElement ?? t.getConfig("waitForElement") ?? 0;
		if (!n && a > 0 && i.element && !_(i.element)) {
			E(t.getState("popover")), g(i, a, () => v(e, !0));
			return;
		}
		if (I(t, i)) {
			let n = t.getState("activeIndex"), i = typeof n == "number" && e < n ? -1 : 1;
			r[e + i] ? v(e + i) : i === 1 && y("done");
			return;
		}
		t.setState("__activeOnDestroyed", document.activeElement), t.setState("activeIndex", e);
		let o = r[e + 1];
		Y(t, V(t, e, {
			onNextClick: () => {
				o ? v(e + 1) : y("done");
			},
			onPrevClick: () => {
				v(e - 1);
			},
			onCloseClick: () => {
				y("close");
			}
		}));
	}
	function y(e, r = !0) {
		if (!t.getState("isInitialized")) return;
		e === "api" && (e = t.getState("__destroyReason") ?? "api");
		let i = t.getState("__activeElement"), a = t.getState("__activeStep"), o = t.getState("__activeOnDestroyed"), s = t.getConfig("onDestroyStarted");
		if (r && s) {
			t.setState("__destroyReason", e), s(!i || i?.id === "driver-dummy-element" ? void 0 : i, a, t.getHookOpts(void 0, e));
			return;
		}
		Z === n && (Z = void 0);
		let c = a?.onDeselected || t.getConfig("onDeselected"), l = t.getConfig("onDestroyed");
		document.body.classList.remove("driver-active", "driver-fade", "driver-simple", "driver-no-scroll"), document.body.style.removeProperty("--driver-animation-duration"), h(), ve(t), D(t.getState("popover")), pe(), P(t), t.resetEmitter();
		let u = t.getState();
		if (t.resetState(), i && a) {
			let n = i.id === "driver-dummy-element";
			c && c(n ? void 0 : i, a, t.getHookOpts(u, e)), l && l(n ? void 0 : i, a, t.getHookOpts(u, e));
		}
		o && o.focus();
	}
	let b = {
		isActive: () => t.getState("isInitialized") || !1,
		refresh: () => X(t),
		drive: (e = 0) => {
			m(), v(e);
		},
		setConfig: t.setConfig,
		setSteps: (e) => {
			h(), t.resetState(), t.setConfig({
				...t.getConfig(),
				steps: e
			});
		},
		getConfig: t.getConfig,
		getState: t.getState,
		getActiveIndex: () => t.getState("activeIndex"),
		isFirstStep: () => {
			let e = t.getState("activeIndex");
			return e !== void 0 && L(t, e - 1, -1) === void 0;
		},
		isLastStep: () => {
			let e = t.getState("activeIndex");
			return e !== void 0 && L(t, e + 1, 1) === void 0;
		},
		getActiveStep: () => t.getState("activeStep"),
		getActiveElement: () => t.getState("activeElement"),
		getPreviousElement: () => t.getState("previousElement"),
		getPreviousStep: () => t.getState("previousStep"),
		getNextStep: () => {
			let e = t.getConfig("steps") || [], n = t.getState("activeIndex");
			if (n === void 0) return;
			let r = L(t, n + 1, 1);
			return r === void 0 ? void 0 : e[r];
		},
		moveNext: c,
		movePrevious: l,
		moveTo: u,
		hasNextStep: () => {
			let e = t.getState("activeIndex");
			return e !== void 0 && L(t, e + 1, 1) !== void 0;
		},
		hasPreviousStep: () => {
			let e = t.getState("activeIndex");
			return e !== void 0 && L(t, e - 1, -1) !== void 0;
		},
		highlight: (e) => {
			m(), t.setState("__destroyReason", void 0), Y(t, {
				...e,
				popover: e.popover ? {
					showButtons: [],
					showProgress: !1,
					progressText: "",
					...e.popover
				} : void 0
			});
		},
		destroy: () => {
			y("api", !1);
		}
	};
	return t.setDriver(b), b;
}
// src/onboarding/guide-driver.ts
function we(e) {
	let t = e.getBoundingClientRect();
	if (!e.isConnected || !t.width || !t.height || t.right <= 0 || t.left >= innerWidth || e.closest("[hidden],[inert],[data-skeleton]")) return !1;
	for (let t = e; t; t = t.parentElement) {
		let e = getComputedStyle(t);
		if (e.display === "none" || e.visibility === "hidden" || e.visibility === "collapse" || e.opacity === "0") return !1;
	}
	return ![...e.querySelectorAll("[data-skeleton]")].some((e) => e.getBoundingClientRect().height > 0);
}
function Q(e) {
	if (!e) return;
	let t = e.replace(/(\[aria-label=")([^"]+)("\])/g, (e, t, n, r) => t + i(n).replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + r).split(",").flatMap((e) => [...document.querySelectorAll(e.trim())]).find(we);
	if (t) return t.closest("[data-setting-row], [data-setting-sort-controls]") || t;
}
async function $(e, t, n = 4e3) {
	if (!e) return;
	let r = Date.now();
	for (; !t.aborted;) {
		let t = Q(e);
		if (t) return t;
		if (Date.now() - r >= n) return;
		await new Promise((e) => setTimeout(e, 80));
	}
}
function Te(i) {
	let a = null, o = null, s = !1, c = !1, l, u = 0, d, f, p = () => {
		f &&= (n(!1, !1, { miniplayer: !1 }), f(), void 0);
	}, m = document.activeElement, h = (e) => {
		let t = new URL(e, location.origin);
		if (location.pathname !== t.pathname || t.search && location.search !== t.search || t.hash && location.hash !== t.hash) {
			new URLSearchParams(location.search).has("edit") && t.searchParams.set("edit", ""), s = !0;
			try {
				i.navigate(`${t.pathname}${t.search}${t.hash}`);
			} finally {
				s = !1;
			}
		}
	}, g = (e) => {
		if (e.target instanceof Element && e.target.closest("[data-copy-inline], [data-copy-input]")) return;
		if (e.key === "Escape") {
			e.preventDefault(), e.stopImmediatePropagation(), i.close();
			return;
		}
		let t = document.querySelector(".peach-guide-popover");
		if (!t) return;
		let n = i.invitation && e.target instanceof Element && e.target.closest("#tutorialBtn");
		if (!t.contains(e.target) && !n && e.key !== "Tab") {
			e.preventDefault(), e.stopImmediatePropagation();
			return;
		}
		if (e.key !== "Tab") return;
		let r = [...t.querySelectorAll("button:not([disabled]), summary, a[href], [tabindex=\"0\"]")].filter((e) => e.offsetWidth && e.offsetHeight), a = i.invitation ? document.getElementById("tutorialBtn") : null;
		a && r.unshift(a);
		let o = r.indexOf(document.activeElement);
		e.preventDefault(), e.stopImmediatePropagation(), r[(o + (e.shiftKey ? -1 : 1) + r.length) % r.length]?.focus();
	};
	window.addEventListener("keydown", g, !0), window.addEventListener("resize", t);
	let _ = r.listen(() => {
		s || (i.leave || i.close)();
	}), v = () => {
		o?.abort(), cancelAnimationFrame(u), l?.(), l = void 0, a?.destroy(), a = null;
	};
	return {
		async show(n, r, s) {
			v(), t();
			let m = new AbortController();
			o = m, document.querySelector("#stage .vjs-peach-settings-toggle[aria-expanded=\"true\"]")?.click();
			let g = n.route;
			if (n.surface || p(), n.surface) {
				if (!d) {
					h("/");
					let e = await $("[data-guide-video][data-id]", m.signal), t = Number(e?.dataset.id);
					Number.isSafeInteger(t) && t > 0 && (d = t);
				}
				if (c || m.signal.aborted) return;
				d && (f ||= e(), g = `/assets/${d}`);
			}
			if (g && h(g), n.surface === "subtitles" && d) {
				let e = await $("#stage .vjs-peach-settings-toggle", m.signal);
				!m.signal.aborted && e?.getAttribute("aria-expanded") !== "true" && e?.click();
			}
			let _ = await $(n.target, m.signal);
			if (c || m.signal.aborted) return;
			let y = !_;
			a = Ce({
				animate: !1,
				smoothScroll: !1,
				disableActiveInteraction: !i.invitation,
				allowKeyboardControl: !1,
				allowClose: !0,
				overlayClickBehavior: () => i.close(),
				stagePadding: 6,
				stageRadius: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--control-radius")) || 8,
				popoverClass: "peach-react peach-guide-popover",
				showButtons: [],
				onPopoverRender(e) {
					l?.();
					let t = document.querySelector("#stage[open]");
					if (n.surface && t) {
						t.append(e.wrapper);
						let n = document.querySelector(".driver-overlay");
						n && t.append(n);
					}
					e.wrapper.setAttribute("role", "dialog"), e.wrapper.setAttribute("aria-modal", "true"), l = i.mountPopover(e.wrapper, e.arrow, {
						step: n,
						position: r,
						total: s,
						missing: y,
						...i
					});
				},
				onNextClick: () => i.next(y),
				onDoneClick: () => i.next(y),
				onPrevClick: () => i.previous(),
				onCloseClick: () => i.close()
			});
			let b = () => a?.highlight({
				..._ ? { element: _ } : {},
				popover: {
					side: "bottom",
					align: "center",
					showButtons: []
				}
			});
			b();
			let x = "", S = () => {
				if (c || m.signal.aborted) return;
				let e = n.surface ? document.querySelector("#stage[open]") : null, t = document.querySelector(".driver-overlay");
				e && t && t.parentElement !== e && e.append(t);
				let r = Q(n.target);
				r !== _ && (_ = r, y = !r, b(), x = "");
				let i = _?.getBoundingClientRect(), o = window.visualViewport, s = `${i?.x}:${i?.y}:${i?.width}:${i?.height}:${innerWidth}:${innerHeight}:${o?.height}:${o?.offsetTop}`;
				s !== x && (x = s, a?.refresh()), u = requestAnimationFrame(S);
			};
			u = requestAnimationFrame(S), queueMicrotask(() => {
				m.signal.aborted || document.querySelector(".peach-guide-popover [data-guide-next]")?.focus();
			});
		},
		stop() {
			c = !0, v(), _(), p(), window.removeEventListener("keydown", g, !0), window.removeEventListener("resize", t), m?.isConnected && m.getBoundingClientRect().width && m.focus();
		}
	};
}
export { Te as createGuideSession };

//# debugId=8e425b64-b778-4074-b8b0-04a2998670fc