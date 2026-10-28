(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "233c757c-71db-4e88-83da-fe94b6534df1", e._sentryDebugIdIdentifier = "sentry-dbid-233c757c-71db-4e88-83da-fe94b6534df1");
	} catch {}
})();
import { Button as e, CollectionSummary as t, DUPLICATES_KEY as n, EmptyState as r, FilterGlass as i, GlassPill as a, KEEP_LABELS as o, LOC as s, MEDIA_SOURCES_KEY as c, MEDIA_SOURCE_ICONS as l, Note as u, SourceLabel as d, SourceMark as f, TRASH_KEY as p, __toESM as m, batchOperate as h, bulkCloudPreferences as g, busyProps as _, cardClass as v, cloudLocations as y, confirmModal as b, distinctName as x, duplicateVictims as S, errorMessage as C, fetchDuplicates as w, fetchMediaSources as T, fmtDur as E, fmtSize as D, jsx as O, jsxs as k, mixedCloudPreferences as A, queryClient as j, require_react as M, sharedNamePrefix as N, spriteGlyph as P, useMutation as F, useQuery as I, victimBytes as L } from "./peach-app.js";
// src/react/duplicates/duplicates-page.tsx
var R = /* @__PURE__ */ m(M(), 1), z = P("play"), B = P("file-stack"), V = v({
	padding: "none",
	radius: "surface",
	className: "mb-6 overflow-hidden dark:bg-background-primary-default"
}), H = "rounded-sm px-1.5 py-px text-caption-1-regular leading-5", U = "rounded-sm px-2 py-0.5 text-caption-1-regular leading-5", W = "font-mono text-caption-1-regular leading-5 text-text-secondary", G = () => {
	j.invalidateQueries({
		queryKey: n,
		exact: !0
	}), j.invalidateQueries({
		queryKey: p,
		exact: !0
	});
};
function K(e) {
	return e.identical ? /* @__PURE__ */ O("span", {
		className: `${U} text-(--keep)`,
		children: "sha1 一致"
	}) : /* @__PURE__ */ O("span", {
		className: `${U} text-text-secondary`,
		children: e.evidence === "same_code_short_copy" ? "同番号短版本" : "时长推断"
	});
}
function q({ file: e, prefix: t, openItem: n }) {
	let r = () => n(e.id), i = s[e.location] || e.location || e.drive;
	return /* @__PURE__ */ k("div", {
		className: "duplicate-row items-center gap-3 border-t border-separator-border px-5 py-4 max-compact:p-4",
		children: [
			/* @__PURE__ */ k("button", {
				type: "button",
				onClick: r,
				"aria-label": `预览 ${e.name}`,
				className: "relative row-span-2 inline-grid aspect-16/10 w-full cursor-pointer place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default text-text-secondary",
				children: [/* @__PURE__ */ O(z, {
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
						className: `${H} not-italic bg-background-primary-hover text-text-secondary`,
						children: "最大"
					}) : null, e.is_longest ? /* @__PURE__ */ O("i", {
						className: `${H} not-italic bg-(--keep)/22 text-(--keep)`,
						children: "最长"
					}) : null]
				}) : null]
			}),
			/* @__PURE__ */ k("span", {
				className: `${W} flex min-w-0 items-center gap-1.5`,
				children: [/* @__PURE__ */ O(f, { mark: l[e.location] || "database" }), /* @__PURE__ */ O("span", {
					title: i,
					className: "min-w-0 truncate",
					children: i
				})]
			}),
			/* @__PURE__ */ O("span", {
				className: W,
				children: D(e.size || 0)
			}),
			/* @__PURE__ */ O("span", {
				className: W,
				children: E(e.duration)
			}),
			/* @__PURE__ */ O("span", {
				className: `${W} col-start-2 -col-end-1 min-w-0 pt-0.5 wrap-anywhere max-duplicate-narrow:col-span-full`,
				children: e.path ?? ""
			})
		]
	});
}
function J({ openItem: l, toast: f, failure: p }) {
	let m = I({
		queryKey: n,
		queryFn: ({ signal: e }) => w(e)
	}), v = I({
		queryKey: c,
		queryFn: ({ signal: e }) => T(e)
	}), [x, E] = (0, R.useState)(""), j = F({
		mutationFn: (e) => h(e, "dispose"),
		onSuccess: (e, t) => {
			G(), f(`已把 ${t.length} 项移入回收站`, { undo: async () => {
				try {
					await h(t, "restore");
				} catch (e) {
					p("撤销移入回收站", e);
				} finally {
					G();
				}
			} });
		},
		onSettled: () => E("")
	}), M = m.data;
	if (!M) return /* @__PURE__ */ O("div", {
		className: "mx-auto w-full max-w-board",
		children: /* @__PURE__ */ O(u, {
			tone: "error",
			title: "重复文件读取失败",
			children: m.error ? C(m.error) : "未取得重复文件列表，请刷新页面重试。"
		})
	});
	let P = M.groups ?? [], z = y(v.data), H = ({ groups: e, keep: t, key: n }) => {
		if (j.isPending) return;
		let r = S(e, t);
		r.length && b({
			title: "移入回收站",
			body: `将把 ${r.length} 个重复文件的馆藏记录移入回收站，每组保留${o[t] ?? o.largest}。文件共 ${D(L(e, r))}，记录可从回收站还原。`,
			confirmLabel: "移入回收站",
			onConfirm: () => (E(n), j.mutateAsync(r))
		});
	}, W = (e) => _(x === e && j.isPending);
	return /* @__PURE__ */ k("div", {
		className: "mx-auto w-full max-w-board pb-10.5",
		children: [
			/* @__PURE__ */ O(t, {
				label: "重复内容",
				figure: `${Number(M.total || 0).toLocaleString()} 组`,
				detail: `${Number(M.files || 0).toLocaleString()} 个文件 · 可回收 ${D(M.reclaimable)}`
			}),
			P.length ? /* @__PURE__ */ k(i, {
				title: "批量保留",
				children: [
					/* @__PURE__ */ O(a, {
						busy: x === "all:largest",
						onPress: () => H({
							groups: P,
							keep: "largest",
							key: "all:largest"
						}),
						children: "全部保留最大"
					}),
					/* @__PURE__ */ O(a, {
						busy: x === "all:longest",
						onPress: () => H({
							groups: P,
							keep: "longest",
							key: "all:longest"
						}),
						children: "全部保留最长"
					}),
					g(P, z).map((e) => /* @__PURE__ */ O(a, {
						busy: x === `all:${e}`,
						onPress: () => H({
							groups: P,
							keep: e,
							key: `all:${e}`
						}),
						children: /* @__PURE__ */ O(d, {
							source: e,
							label: `全部优先 ${s[e] || e}`
						})
					}, e))
				]
			}) : null,
			j.isError ? /* @__PURE__ */ O("div", {
				className: "mb-5",
				children: /* @__PURE__ */ O(u, {
					tone: "error",
					title: "移入回收站失败",
					children: C(j.error)
				})
			}) : null,
			P.length ? P.map((t, n) => {
				let r = [t], i = N(t.files.map((e) => e.name)), a = (e) => `${n}:${e}`;
				return /* @__PURE__ */ k("section", {
					"aria-label": t.code,
					className: V,
					children: [/* @__PURE__ */ k("div", {
						className: "flex flex-wrap items-center gap-3 bg-background-tertiary-default p-5 max-compact:p-4 dark:bg-background-secondary-default",
						children: [
							/* @__PURE__ */ O("b", {
								className: "text-title-2-medium text-text-primary",
								children: t.code
							}),
							/* @__PURE__ */ O("span", {
								className: "font-mono text-caption-1-regular leading-5 text-text-primary",
								children: `${Number(t.count || 0).toLocaleString()} 个 · 可回收 ${D(t.reclaimable)}`
							}),
							K(t),
							t.cross_drive ? /* @__PURE__ */ O("span", {
								className: `${U} text-text-secondary`,
								children: `跨盘 ${t.drives.join(" ")}`
							}) : null,
							/* @__PURE__ */ k("span", {
								className: "ml-auto flex flex-wrap gap-2 max-compact:ml-0 max-compact:w-full",
								children: [
									/* @__PURE__ */ O(e, {
										variant: "secondary",
										size: "small",
										...W(a("largest")),
										onClick: () => H({
											groups: r,
											keep: "largest",
											key: a("largest")
										}),
										children: "留最大"
									}),
									/* @__PURE__ */ O(e, {
										variant: "secondary",
										size: "small",
										...W(a("longest")),
										onClick: () => H({
											groups: r,
											keep: "longest",
											key: a("longest")
										}),
										children: "留最长"
									}),
									A(t.files, z).map((t) => /* @__PURE__ */ O(e, {
										variant: "secondary",
										size: "small",
										...W(a(t)),
										onClick: () => H({
											groups: r,
											keep: t,
											key: a(t)
										}),
										children: /* @__PURE__ */ O(d, {
											source: t,
											label: `留 ${s[t] || t}`
										})
									}, t)),
									/* @__PURE__ */ O(e, {
										variant: "danger",
										size: "small",
										...W(a("all")),
										onClick: () => H({
											groups: r,
											keep: "all",
											key: a("all")
										}),
										children: "整组回收"
									})
								]
							})
						]
					}), /* @__PURE__ */ O("div", { children: t.files.map((e) => /* @__PURE__ */ O(q, {
						file: e,
						prefix: i,
						openItem: l
					}, e.id)) })]
				}, `${t.code}-${n}`);
			}) : /* @__PURE__ */ O(r, {
				icon: B,
				title: "没有找到重复文件",
				children: "所有来源之间没有检测到内容相同的文件。扫描新来源后，这里会自动更新。"
			}),
			P.length > 0 && M.total > P.length ? /* @__PURE__ */ O("p", {
				className: "text-center text-caption-1-regular text-text-secondary",
				children: `显示可回收最多的前 ${P.length.toLocaleString()} 组，共 ${Number(M.total).toLocaleString()} 组；处理掉这些后，其余的会补上来。`
			}) : null
		]
	});
}
export { J as DuplicatesPage };

//# debugId=233c757c-71db-4e88-83da-fe94b6534df1