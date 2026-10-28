(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "20593b43-f2fe-4003-a681-7469e31503d1", e._sentryDebugIdIdentifier = "sentry-dbid-20593b43-f2fe-4003-a681-7469e31503d1");
	} catch {}
})();
import { __toESM as e, cc as t, jsx as n, require_react as r, s5 as i, siteMarkUrl as a } from "./peach-app.js";
// src/react/components/site-mark.tsx
var o = /* @__PURE__ */ e(r(), 1), s = "size-(--icon-inline) shrink-0";
function c({ src: e }) {
	let [r, i] = (0, o.useState)("");
	return !e || r === e ? /* @__PURE__ */ n(t, {
		"aria-hidden": !0,
		className: s
	}) : /* @__PURE__ */ n("img", {
		src: e,
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		onError: () => i(e),
		className: `${s} rounded-none object-contain`
	});
}
function l({ source: e, linkId: t }) {
	if (e === "makers") return /* @__PURE__ */ n(i, {
		"aria-hidden": !0,
		className: s
	});
	if (t === void 0 && !e) return /* @__PURE__ */ n(c, { src: "" });
	let r = e && [
		"javten",
		"fc2ppvdb",
		"avwikidb",
		"minnano-av",
		"github"
	].includes(e);
	return /* @__PURE__ */ n(c, { src: t === void 0 ? r ? `/site-icon/${e}.png` : a({ source: e }) : `/link-mark?id=${t}` });
}
export { c as MarkImage, l as SiteMark };

//# debugId=20593b43-f2fe-4003-a681-7469e31503d1