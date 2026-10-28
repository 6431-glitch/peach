(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "78b10fba-efe9-4dd7-9e9c-0bfbac3b4abe", e._sentryDebugIdIdentifier = "sentry-dbid-78b10fba-efe9-4dd7-9e9c-0bfbac3b4abe");
	} catch {}
})();
import { jsx as e } from "./peach-app.js";
// src/react/components/page.tsx
function t({ children: t }) {
	return /* @__PURE__ */ e("div", {
		className: "mx-auto flex w-full max-w-board flex-col gap-8",
		children: t
	});
}
export { t as Page };

//# debugId=78b10fba-efe9-4dd7-9e9c-0bfbac3b4abe