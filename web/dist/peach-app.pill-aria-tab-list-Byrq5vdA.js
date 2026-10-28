(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "89423f63-7a8a-4917-a28a-86b435d32cfc", e._sentryDebugIdIdentifier = "sentry-dbid-89423f63-7a8a-4917-a28a-86b435d32cfc");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$e51a686c67fdaa2d as e, PillTabList as t, __toESM as n, import_jsx_runtime as r, jsx as i, jsxs as a, require_react as o, useHorizontalScroller as s } from "./peach-app.js";
// src/react/components/pill-aria-tab-list.tsx
var c = /* @__PURE__ */ n(o(), 1);
function l({ scrollable: n = !0, ...o }) {
	let [l, u] = (0, c.useState)(null), d = s(u, n);
	return /* @__PURE__ */ a(r.Fragment, { children: [/* @__PURE__ */ i(e, {
		...o,
		ref: d,
		"data-pill-nav": ""
	}), /* @__PURE__ */ i(t, { container: l })] });
}
export { l as PillAriaTabList };

//# debugId=89423f63-7a8a-4917-a28a-86b435d32cfc