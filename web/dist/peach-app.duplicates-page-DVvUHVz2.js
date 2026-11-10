(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7baa18cf-51c2-469c-8cd5-8b1f7c1f5065", e._sentryDebugIdIdentifier = "sentry-dbid-7baa18cf-51c2-469c-8cd5-8b1f7c1f5065");
	} catch {}
})();
import { Button as e, CollectionSummary as t, DUPLICATES_KEY as n, EmptyState as r, FilterGlass as i, GlassPill as a, KEEP_LABELS as o, LOC as s, MEDIA_SOURCES_KEY as c, MEDIA_SOURCE_ICONS as l, Note as u, SourceLabel as d, SourceMark as f, TRASH_KEY as p, __toESM as m, batchOperate as h, bulkCloudPreferences as g, busyProps as _, cardClass as v, cloudLocations as y, confirmModal as b, distinctName as x, duplicateVictims as S, errorMessage as C, fetchDuplicates as w, fetchMediaSources as T, fmtDur as E, fmtSize as D, jsx as O, jsxs as k, keepGroup as A, mixedCloudPreferences as j, queryClient as M, require_react as N, sharedNamePrefix as P, spriteGlyph as F, t as I, useMutation as L, useQuery as R, victimBytes as z } from "./peach-app.js";
// src/react/duplicates/duplicates-page.tsx
var B = /* @__PURE__ */ m(N(), 1), V = F("play"), H = F("file-stack"), U = v({
	padding: "none",
	radius: "surface",
	className: "mb-6 overflow-hidden dark:bg-background-primary-default"
}), W = "rounded-sm px-1.5 py-px text-caption-1-regular leading-5", G = "rounded-sm px-2 py-0.5 text-caption-1-regular leading-5", K = "font-mono text-caption-1-regular leading-5 text-text-secondary", q = () => {
	M.invalidateQueries({
		queryKey: n,
		exact: !0
	}), M.invalidateQueries({
		queryKey: p,
		exact: !0
	});
};
function J(e) {
	return e.identical ? /* @__PURE__ */ O("span", {
		className: `${G} text-(--keep)`,
		children: I("cleanup:duplicates.sha1Match")
	}) : /* @__PURE__ */ O("span", {
		className: `${G} text-text-secondary`,
		children: e.evidence === "same_code_short_copy" ? I("cleanup:duplicates.sameCodeShorter") : I("cleanup:duplicates.byDuration")
	});
}
function Y({ file: e, prefix: t, openItem: n }) {
	let r = () => n(e.id), i = s[e.location] || e.location || e.drive;
	return /* @__PURE__ */ k("div", {
		className: "duplicate-row items-center gap-3 border-t border-separator-border px-5 py-4 max-compact:p-4",
		children: [
			/* @__PURE__ */ k("button", {
				type: "button",
				onClick: r,
				"aria-label": I("cleanup:duplicates.previewFile", { name: e.name }),
				className: "relative row-span-2 inline-grid aspect-16/10 w-full cursor-pointer place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default text-text-secondary",
				children: [/* @__PURE__ */ O(V, {
					"aria-hidden": !0,
					className: "size-6"
				}), /* @__PURE__ */ O("img", {
					src: `/thumb?id=${e.id}&c=4`,
					alt: "",
					loading: "lazy",
					onError: (e) => e.currentTarget.remove(),
					className: "absolute inset-0 size-full object-contain"
				})]
			}),
			/* @__PURE__ */ k("span", {
				className: "flex min-w-0 items-center gap-2 max-duplicate-narrow:col-start-2 max-duplicate-narrow:-col-end-1",
				children: [/* @__PURE__ */ O("button", {
					type: "button",
					onClick: r,
					title: e.name,
					"data-middle-truncate": !0,
					"data-middle-truncate-within": !0,
					className: "min-w-0 shrink cursor-pointer truncate text-left text-body-regular hover:text-text-secondary",
					children: x(e.name, t)
				}), e.is_largest || e.is_longest ? /* @__PURE__ */ k("span", {
					className: "flex flex-none gap-1",
					children: [e.is_largest ? /* @__PURE__ */ O("i", {
						className: `${W} not-italic bg-background-primary-hover text-text-secondary`,
						children: I("cleanup:duplicates.largest")
					}) : null, e.is_longest ? /* @__PURE__ */ O("i", {
						className: `${W} not-italic bg-(--keep)/22 text-(--keep)`,
						children: I("cleanup:duplicates.longest")
					}) : null]
				}) : null]
			}),
			/* @__PURE__ */ k("span", {
				className: `${K} flex min-w-0 items-center gap-1.5`,
				children: [/* @__PURE__ */ O(f, { mark: l[e.location] || "database" }), /* @__PURE__ */ O("span", {
					title: i,
					className: "min-w-0 truncate",
					children: i
				})]
			}),
			/* @__PURE__ */ O("span", {
				className: K,
				children: D(e.size || 0)
			}),
			/* @__PURE__ */ O("span", {
				className: K,
				children: E(e.duration)
			}),
			/* @__PURE__ */ O("span", {
				className: `${K} col-start-2 -col-end-1 min-w-0 pt-0.5 wrap-anywhere max-duplicate-narrow:col-span-full`,
				children: e.path ?? ""
			})
		]
	});
}
function X({ openItem: l, toast: f, failure: p }) {
	let m = R({
		queryKey: n,
		queryFn: ({ signal: e }) => w(e)
	}), v = R({
		queryKey: c,
		queryFn: ({ signal: e }) => T(e)
	}), [x, E] = (0, B.useState)(""), M = L({
		mutationFn: (e) => h(e, "dispose"),
		onSuccess: (e, t) => {
			q(), f(I("cleanup:duplicates.movedToTrash", { count: t.length }), { undo: async () => {
				try {
					await h(t, "restore");
				} catch (e) {
					p(I("cleanup:duplicates.undoTrash"), e);
				} finally {
					q();
				}
			} });
		},
		onSettled: () => E("")
	}), N = L({
		mutationFn: (e) => A(e.files.map((e) => e.id), !0),
		onSuccess: (e, t) => {
			q(), f(I("cleanup:duplicates.keptAll", { code: t.code }), { undo: async () => {
				try {
					await A(t.files.map((e) => e.id), !1);
				} catch (e) {
					p(I("cleanup:duplicates.undoKeepAll"), e);
				} finally {
					q();
				}
			} });
		},
		onError: (e) => p(I("cleanup:duplicates.markKeepAll"), e),
		onSettled: () => E("")
	}), F = m.data;
	if (!F) return /* @__PURE__ */ O("div", {
		className: "mx-auto w-full max-w-board",
		children: /* @__PURE__ */ O(u, {
			tone: "error",
			title: I("cleanup:duplicates.loadFailed"),
			children: m.error ? C(m.error) : I("cleanup:duplicates.listUnavailable")
		})
	});
	let V = F.groups ?? [], W = y(v.data), K = ({ groups: e, keep: t, key: n }) => {
		if (M.isPending) return;
		let r = S(e, t);
		r.length && b({
			title: I("cleanup:duplicates.moveToTrash"),
			body: I("cleanup:duplicates.trashBody", {
				count: r.length,
				keep: o[t] ?? o.largest,
				size: D(z(e, r))
			}),
			confirmLabel: I("cleanup:duplicates.moveToTrash"),
			onConfirm: () => (E(n), M.mutateAsync(r))
		});
	}, X = (e) => _(x === e && (M.isPending || N.isPending)), Z = (e, t) => {
		N.isPending || M.isPending || (E(t), N.mutate(e));
	};
	return /* @__PURE__ */ k("div", {
		className: "mx-auto w-full max-w-board pb-10.5",
		children: [
			/* @__PURE__ */ O(t, {
				label: I("cleanup:duplicates.summaryLabel"),
				figure: I("cleanup:duplicates.groupCount", { count: Number(F.total || 0) }),
				detail: I("cleanup:duplicates.summaryDetail", {
					count: Number(F.files || 0),
					size: D(F.reclaimable)
				})
			}),
			V.length ? /* @__PURE__ */ k(i, {
				title: I("cleanup:duplicates.bulkKeep"),
				children: [
					/* @__PURE__ */ O(a, {
						busy: x === "all:largest",
						onPress: () => K({
							groups: V,
							keep: "largest",
							key: "all:largest"
						}),
						children: I("cleanup:duplicates.allKeepLargest")
					}),
					/* @__PURE__ */ O(a, {
						busy: x === "all:longest",
						onPress: () => K({
							groups: V,
							keep: "longest",
							key: "all:longest"
						}),
						children: I("cleanup:duplicates.allKeepLongest")
					}),
					g(V, W).map((e) => /* @__PURE__ */ O(a, {
						busy: x === `all:${e}`,
						onPress: () => K({
							groups: V,
							keep: e,
							key: `all:${e}`
						}),
						children: /* @__PURE__ */ O(d, {
							source: e,
							label: I("cleanup:duplicates.allPreferStorage", { storage: s[e] || e })
						})
					}, e))
				]
			}) : null,
			M.isError ? /* @__PURE__ */ O("div", {
				className: "mb-5",
				children: /* @__PURE__ */ O(u, {
					tone: "error",
					title: I("cleanup:duplicates.trashFailed"),
					children: C(M.error)
				})
			}) : null,
			V.length ? V.map((t, n) => {
				let r = [t], i = P(t.files.map((e) => e.name)), a = (e) => `${n}:${e}`;
				return /* @__PURE__ */ k("section", {
					"aria-label": t.code,
					className: U,
					children: [/* @__PURE__ */ k("div", {
						className: "flex flex-wrap items-center gap-3 bg-background-tertiary-default p-5 max-compact:p-4 dark:bg-background-secondary-default",
						children: [
							/* @__PURE__ */ O("b", {
								className: "text-title-2-medium text-text-primary",
								children: t.code
							}),
							/* @__PURE__ */ O("span", {
								className: "font-mono text-caption-1-regular leading-5 text-text-primary",
								children: I("cleanup:duplicates.groupDetail", {
									count: Number(t.count || 0),
									size: D(t.reclaimable)
								})
							}),
							J(t),
							t.cross_drive ? /* @__PURE__ */ O("span", {
								className: `${G} text-text-secondary`,
								children: I("cleanup:duplicates.crossDrive", { drives: t.drives.join(" ") })
							}) : null,
							/* @__PURE__ */ k("span", {
								className: "ml-auto flex flex-wrap gap-2 max-compact:ml-0 max-compact:w-full",
								children: [
									/* @__PURE__ */ O(e, {
										variant: "secondary",
										size: "small",
										...X(a("largest")),
										onClick: () => K({
											groups: r,
											keep: "largest",
											key: a("largest")
										}),
										children: I("cleanup:duplicates.keepLargest")
									}),
									/* @__PURE__ */ O(e, {
										variant: "secondary",
										size: "small",
										...X(a("longest")),
										onClick: () => K({
											groups: r,
											keep: "longest",
											key: a("longest")
										}),
										children: I("cleanup:duplicates.keepLongest")
									}),
									j(t.files, W).map((t) => /* @__PURE__ */ O(e, {
										variant: "secondary",
										size: "small",
										...X(a(t)),
										onClick: () => K({
											groups: r,
											keep: t,
											key: a(t)
										}),
										children: /* @__PURE__ */ O(d, {
											source: t,
											label: I("cleanup:duplicates.keepStorage", { storage: s[t] || t })
										})
									}, t)),
									/* @__PURE__ */ O(e, {
										variant: "secondary",
										size: "small",
										...X(a("keep")),
										onClick: () => Z(t, a("keep")),
										children: I("cleanup:duplicates.keepAll")
									}),
									/* @__PURE__ */ O(e, {
										variant: "danger",
										size: "small",
										...X(a("all")),
										onClick: () => K({
											groups: r,
											keep: "all",
											key: a("all")
										}),
										children: I("cleanup:duplicates.trashGroup")
									})
								]
							})
						]
					}), /* @__PURE__ */ O("div", { children: t.files.map((e) => /* @__PURE__ */ O(Y, {
						file: e,
						prefix: i,
						openItem: l
					}, e.id)) })]
				}, `${t.code}-${n}`);
			}) : /* @__PURE__ */ O(r, {
				icon: H,
				title: I("cleanup:duplicates.emptyTitle"),
				children: I("cleanup:duplicates.emptyBody")
			}),
			V.length > 0 && F.total > V.length ? /* @__PURE__ */ O("p", {
				className: "text-center text-caption-1-regular text-text-secondary",
				children: I("cleanup:duplicates.topGroups", {
					shown: V.length.toLocaleString(),
					count: Number(F.total)
				})
			}) : null,
			F.kept ? /* @__PURE__ */ O("p", {
				className: "mt-2 text-center text-caption-1-regular text-text-secondary",
				children: I("cleanup:duplicates.keptHidden", { count: F.kept })
			}) : null
		]
	});
}
export { X as DuplicatesPage };

//# debugId=7baa18cf-51c2-469c-8cd5-8b1f7c1f5065