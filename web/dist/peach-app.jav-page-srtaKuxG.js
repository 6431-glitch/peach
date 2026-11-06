(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2fc06de6-1b10-45de-ad63-4c35a41511a9", e._sentryDebugIdIdentifier = "sentry-dbid-2fc06de6-1b10-45de-ad63-4c35a41511a9");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $fe21c36db05242bb$export$d7b12c4107be0d61 as a, ArtSlot as o, Button as s, ButtonLink as c, Bx as l, COVER_STATE_TITLE as u, CatalogViewToggle as d, ChevronSortDown as f, Chip as p, CloudDownloadDialog as m, CoverQueue as h, DISCOVERY_SORTS as g, DOWNLOADS_KEY as _, DOWNLOADS_URL as v, DataTableFooter as y, DataTableFrame as b, E3 as x, EmptyFocusButton as S, EmptyState as C, FilterGlassRows as w, FilterIconButton as T, FilterPill as E, GlassPill as ee, Help as D, IndexSearch as O, Input as k, JAV_LAYOUTS as te, JAV_RECOMMENDATION_GRID as ne, JavHeader as A, LibraryShortcuts as j, M6 as M, Note as N, PHASES as P, RELEASE_COLUMN_VISIBILITY_KEY as F, RELEASE_COLUMN_WIDTHS_KEY as I, RELEASE_PAGE_SIZES as L, RELEASE_SORTS as R, RELEASE_SORT_COLUMNS as z, SEGMENT as B, SEGMENTED_TRACK as V, SegmentedRadioGroup as re, Segments as ie, Shuffle as H, SortKeys as ae, SourceAvatar as oe, Table as se, TableColumnControls as U, TableColumnResizer as ce, TaskProgress as le, WANTS_KEY as ue, WantMagnets as de, Wt as fe, __toESM as pe, addWant as me, apiGet as he, appSettingsStore as ge, avatarInner as _e, busyProps as W, cachedMagnetStates as ve, cardClass as ye, cardRatio as be, catalogListSkeletonCellHtml as xe, composingKey as Se, coverArrived as Ce, coverFetching as we, coverFetchingHtml as Te, coverStateAction as Ee, coverUrl as De, discoveryArtwork as Oe, discoveryKey as ke, discoveryScore as Ae, entityDisplayName as G, entityFaceImg as je, entityPath as Me, errorMessage as K, esc as Ne, facePos as Pe, fetchCoverNow as Fe, fetchDiscoveries as Ie, fetchReleases as Le, fetchWants as Re, firstGrapheme as ze, fmtDur as Be, gridLayout as Ve, invalidateWants as q, javContentSkeleton as He, javLayout as Ue, javTagSkeleton as We, keepPreviousData as Ge, leadingGraphemes as Ke, logoUrl as qe, pageWindow as Je, qE as Ye, recommendationScore as Xe, relayoutCovers as Ze, releaseColumns as Qe, releaseFilters as $e, releaseKey as et, removeWants as tt, require_jsx_runtime as nt, require_react as rt, resetWants as it, searchNote as at, spriteGlyph as ot, storeJavLayout as st, textLang as ct, tierPlaceholdersHtml as lt, useAction as J, useCatalogView as ut, useEntityNames as dt, useQuery as Y, useTablePreferences as ft, wantName as X, wireHorizontalScroller as pt, writeJavQuery as Z } from "./peach-app.js";
import { ErrorLine as mt } from "./peach-app.source-view-DalWfDkm.js";
// src/react/wants/want-list.tsx
var Q = /* @__PURE__ */ pe(rt(), 1), $ = nt(), ht = {
	code: "手动添加",
	feed: "订阅新作",
	follow: "关注"
}, gt = [
	["all", "全部"],
	["available", "有磁链"],
	["missing", "没磁链"]
], _t = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	ht[e.origin]
].filter(Boolean).join(" · ");
function vt({ want: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: "无封面"
		}), e.cover ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function yt({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: l, toast: u }) {
	let [d, f] = (0, Q.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, $.jsxs)("li", {
		"data-want-id": e.id,
		className: ye({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)(vt, { want: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ (0, $.jsx)("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: X(e)
						}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					_t(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: _t(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, $.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: at(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(mt, {
						text: e.scrape_error,
						prefix: "资料未取得：",
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ (0, $.jsx)(c, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: fe,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "来源页"
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(s, {
								variant: "secondary",
								size: "small",
								leadingIcon: M,
								disabled: t,
								...W(n === `remove:${e.id}`),
								onClick: i,
								children: "移除"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(s, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...W(n === `reset:${e.id}`),
								onClick: r,
								children: "重新查找"
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(s, {
								variant: "secondary",
								size: "small",
								onClick: a,
								children: "查找资源"
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(de, {
			want: e,
			readOnly: t,
			downloads: o,
			provider: l,
			toast: u,
			onSource: f
		}) : null]
	});
}
function bt({ phase: e, label: t, rows: n, row: r }) {
	let [i, o] = (0, Q.useState)(1), [c, l] = (0, Q.useState)(20), [u, d] = (0, Q.useState)("all"), f = ve(n), p = (e) => e.has_magnets ?? f.get(e.code || "") ?? !1, m = n.filter(p), h = e !== "searching" || u === "all" ? n : n.filter((e) => p(e) === (u === "available")), g = Je(h.length, c, i);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": t,
		"data-want-phase": e,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsxs)("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: n.length.toLocaleString()
					})]
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(re, {
					name: "want-magnet-filter",
					"aria-label": "待找磁链筛选",
					orientation: "horizontal",
					value: u,
					className: V,
					onChange: (e) => {
						d(e), o(1);
					},
					children: gt.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(a, {
						value: e,
						"aria-label": t,
						className: B,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? m.length : n.length - m.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			h.length ? null : /* @__PURE__ */ (0, $.jsx)(C, {
				size: "compact",
				icon: Ye,
				title: "暂无符合条件的作品",
				actions: /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: () => {
						d("all"), o(1);
					},
					children: "查看全部"
				}),
				children: null
			}),
			/* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: h.slice(g.start, g.end).map(r)
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-want-pager": "",
				children: /* @__PURE__ */ (0, $.jsx)(y, {
					label: t,
					total: g.total,
					pagination: {
						pageIndex: g.page - 1,
						pageSize: c
					},
					onChange: (e) => {
						l(e.pageSize), o(e.pageIndex + 1);
					},
					unit: "条"
				})
			})
		]
	});
}
function xt({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, c] = (0, Q.useState)(null), l = J(), u = Y({
		queryKey: ue,
		queryFn: ({ signal: e }) => Re(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => me({ code: n }, e), (e) => {
			t(e.created ? `已加入想要：${X(e.want)}` : `${X(e.want)} 已经在想要里`), a(""), q();
		});
	}, f = (e) => {
		e.key === "Enter" && !Se(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		l.run(`remove:${e.id}`, (t) => tt([e.id], t), () => {
			t(`已移除：${X(e)}`), q();
		});
	}, h = (e) => {
		l.run(`reset:${e.id}`, (t) => it([e.id], t), () => {
			t(`${X(e)} 回到待找`), q();
		});
	}, g = u.data, y = (g?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), b = Y({
		queryKey: _,
		queryFn: ({ signal: e }) => he(`${v}?limit=100`, e),
		enabled: y.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), x = b.data?.providers.filter((e) => e.configured) || [], w = x[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: ye({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "按番号添加"
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ (0, $.jsx)(k, {
								"aria-label": "番号",
								placeholder: "输入番号，例如 SSIS-950",
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ (0, $.jsx)(s, {
							variant: "primary",
							disabled: e || !i.trim(),
							...W(l.busy === "add"),
							onClick: d,
							children: "添加"
						})]
					}),
					l.error ? /* @__PURE__ */ (0, $.jsx)(N, {
						tone: "error",
						title: "这一次没有完成",
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "想要清单读取失败",
				children: K(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取想要",
				dangerouslySetInnerHTML: { __html: He("wants") }
			}) : null,
			g?.scraping ? /* @__PURE__ */ (0, $.jsx)(D, {
				role: "status",
				children: "正在给刚加入的番号取资料与封面。"
			}) : null,
			b.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "下载配置未取得",
				children: K(b.error)
			}) : null,
			b.data && !x.length ? /* @__PURE__ */ (0, $.jsxs)(N, {
				tone: "neutral",
				children: ["尚未配置下载渠道。", /* @__PURE__ */ (0, $.jsx)("a", {
					href: "/settings/library?section=%E4%B8%8B%E8%BD%BD%E6%B8%A0%E9%81%93",
					children: "下载渠道设置"
				})]
			}) : null,
			b.data && !b.data.available ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "neutral",
				children: "云下载只在允许修改数据库的设备上可用。"
			}) : null,
			g && !y.length ? /* @__PURE__ */ (0, $.jsx)(C, {
				size: "compact",
				icon: Ye,
				title: n ? "没有符合条件的作品" : "还没有想要的作品",
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: r,
					children: "清除搜索"
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(S, {
					target: "input[aria-label=\"番号\"]",
					children: "添加作品"
				}) : void 0,
				children: n ? "试试其他番号、女优或标题。" : "输入番号，添加想看的作品。"
			}) : null,
			P.map(([n, r]) => {
				let i = y.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(bt, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(yt, {
						want: n,
						readOnly: e,
						busy: l.busy,
						downloads: b.data,
						provider: w,
						toast: t,
						onReset: () => h(n),
						onRemove: () => p(n),
						onCloudDownload: () => c({
							code: n.code || "",
							title: n.title || "",
							origin: `wishlist:${n.id}`,
							cover: n.cover || "",
							performers: n.performers || "",
							release_date: n.release_date || "",
							studio: n.studio || ""
						})
					}, n.id)
				}, n) : null;
			}),
			/* @__PURE__ */ (0, $.jsx)(m, {
				prefill: o,
				close: () => c(null),
				receipt: t,
				provider: w
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function St({ item: e }) {
	dt();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ (0, $.jsx)(oe, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: _e(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: Me("performer", t.name, t.id),
			"aria-label": `打开女优页：${G("performer", t.name, t.id)}`,
			...i
		}, t.name) : /* @__PURE__ */ (0, $.jsx)("span", {
			"data-media-avatar": "",
			style: r,
			title: G("performer", t.name),
			...i
		}, t.name);
	});
	return t.length > 1 ? /* @__PURE__ */ (0, $.jsx)("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": Math.min(5, t.length) },
		children: n
	}) : n[0] || null;
}
// src/react/jav/discovery-card.tsx
var Ct = (e) => ({
	...e,
	cover: e.has_cover ? De(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), wt = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function Tt({ item: e, readOnly: t }) {
	let n = J(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(we.subscribe, we.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: "无封面"
	});
	if (a === "fetching" || we.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Te() } });
	let o = () => {
		n.run("cover", (t) => Fe(e.code, t), (t) => {
			t.has_cover ? Ce(e.code, t) : i(t.message || "没有找到可用的官方封面");
		});
	}, c = r || n.error ? "missing" : a, l = n.error || r || e.cover_reason;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-cover-state": c,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"data-media-nopic": "",
				children: u[c]
			}),
			l ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: l,
				children: l
			}) : null,
			t ? null : /* @__PURE__ */ (0, $.jsx)(s, {
				size: "small",
				variant: "secondary",
				className: "mt-1",
				onClick: o,
				children: Ee(c)
			})
		]
	});
}
function Et({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a, onTag: l, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = e.performer_refs?.length ? e.performer_refs.map((e) => e.name).join("、") : e.performers, h = Oe(e, t, n), g = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		onClick: (e) => {
			e.target.closest("a,button,input") || i(g);
		},
		children: [
			h ? /* @__PURE__ */ (0, $.jsx)("a", {
				href: g,
				"aria-label": `查看 ${e.code} 详情`,
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(g));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: wt,
				children: /* @__PURE__ */ (0, $.jsx)(o, {
					artwork: {
						kind: "cover",
						html: h
					},
					identity: Oe(e, "small", n),
					relayout: (e) => Ze(e, t)
				})
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: wt,
				children: /* @__PURE__ */ (0, $.jsx)(Tt, {
					item: e,
					readOnly: r
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(St, { item: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("h3", {
							"data-jav-title": "",
							"data-media-title": "",
							title: `${e.code} · ${e.title || "标题未取得"}`,
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: e.code }),
								" ",
								e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: ct(e.title),
									children: e.title
								}) : "标题未取得"
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsxs)("a", {
									"data-media-who": "",
									href: Me("performer", e.performer_refs[0].name),
									title: m,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs[0].name })]
								}) : /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who": "",
									title: m,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs?.[0]?.name || m })]
								}),
								(e.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who-more": "",
									children: [
										"等 ",
										e.performer_refs.length,
										" 人"
									]
								}) : null,
								e.release_date ? /* @__PURE__ */ (0, $.jsxs)("time", {
									"data-media-release": "",
									dateTime: e.release_date,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-calendar" })
									}), e.release_date]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-jav-tags": "",
							"data-media-tags": "",
							children: [p, (e.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								"data-media-tag": "",
								"aria-pressed": a === e,
								onClick: () => l(a === e ? "" : e),
								children: e
							}, e))]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-jav-actions": "",
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ (0, $.jsx)(c, {
						"data-button-link": "",
						variant: "secondary",
						trailingIcon: fe,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "作品来源"
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(s, {
						variant: "ghost",
						disabled: r || e.wanted || !!e.asset_id,
						...W(u),
						onClick: d,
						children: e.asset_id ? "已入库" : e.wanted ? "已加入想要" : "想要"
					}),
					/* @__PURE__ */ (0, $.jsx)(s, {
						variant: "secondary",
						onClick: f,
						children: "查找资源"
					})
				]
			})
		]
	});
}
// src/react/jav/jav-release-table.tsx
var Dt = {
	widths: I,
	visibility: F
};
function Ot({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: qe(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true",
		children: Ke(e?.name || "", 1)
	});
}
function kt({ items: a, waiting: c, filters: l, studios: d, javImage: p, readOnly: m, navigate: h, onTag: g, onSort: _, wanting: v, onWant: y, onResource: x }) {
	let S = ft("jav-releases", Qe, Dt), C = Qe.filter((e) => e.required || S.visibility[e.id] !== !1), w = Object.entries(z).find(([, e]) => e === l.sort)?.[0], T = new Map(d.map((e) => [e.name, e])), E = (e) => (t) => {
		t.preventDefault(), h(`/works/${encodeURIComponent(e.code)}`);
	}, ee = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = Oe(t, "small", p);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: E(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(o, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => Ze(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: t.cover_reason || void 0,
								children: t.cover_state ? u[t.cover_state] : "无封面"
							})
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || "标题未取得"}`,
							"aria-label": `查看 ${t.code} 详情`,
							onClick: E(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: ct(t.title),
									children: t.title
								}) : "标题未取得"
							]
						})
					})]
				});
			}
			case "people": return n ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-list-people": "",
				children: [
					/* @__PURE__ */ (0, $.jsx)(St, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsx)("a", {
						"data-media-who": "",
						href: Me("performer", n),
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}) : /* @__PURE__ */ (0, $.jsx)("span", {
						"data-media-who": "",
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}),
					(t.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsxs)("span", {
						"data-media-who-more": "",
						children: [
							"等 ",
							t.performer_refs.length,
							" 人"
						]
					}) : null
				]
			}) : "—";
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsxs)("span", {
				"data-list-library": "",
				title: t.studio,
				children: [/* @__PURE__ */ (0, $.jsx)(Ot, { studio: T.get(t.studio) }), /* @__PURE__ */ (0, $.jsx)("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": l.tag === e,
					onClick: () => g(l.tag === e ? "" : e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return Be(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					variant: "ghost",
					disabled: m || t.wanted || !!t.asset_id,
					...W(v(t)),
					onClick: () => y(t),
					children: t.wanted ? "已想要" : "想要"
				}), /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					variant: "secondary",
					onClick: () => x(t),
					children: "查找资源"
				})]
			});
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-catalog-table": "",
		"data-release-table": "",
		className: "flex min-w-0 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-wrap justify-end gap-2",
			role: "toolbar",
			"aria-label": "新作列表工具栏",
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				"data-toolbar-actions": "",
				children: /* @__PURE__ */ (0, $.jsx)(U, {
					preferences: S,
					label: "新作列表"
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(b, {
			follow: !0,
			preferences: S,
			children: /* @__PURE__ */ (0, $.jsxs)(se, {
				"aria-label": "新作列表",
				size: "sm",
				sortDescriptor: w ? {
					column: w,
					direction: l.dir === "asc" ? "ascending" : "descending"
				} : void 0,
				onSortChange: (e) => {
					let t = z[String(e.column)];
					t && _(t, e.direction === "ascending" ? "asc" : "desc");
				},
				children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [C.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
					id: e.id,
					isRowHeader: e.id === "name",
					allowsSorting: e.id in z,
					...S.columnProps(e.id),
					children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex items-center gap-0.5",
						children: [e.label, e.id in z ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-sort-indicator": !0,
							"data-direction": t || void 0,
							children: /* @__PURE__ */ (0, $.jsx)(f, {})
						}) : null]
					}), /* @__PURE__ */ (0, $.jsx)(ce, {
						preferences: S,
						id: e.id
					})] })
				}, e.id)), /* @__PURE__ */ (0, $.jsx)(t, {
					id: "remaining-space",
					"aria-label": "行空白区域",
					"data-table-space": "",
					width: S.spaceWidth,
					minWidth: 0
				})] }), /* @__PURE__ */ (0, $.jsx)(e, {
					renderEmptyState: () => "没有符合条件的新作",
					children: c ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [C.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: xe(e.id) } }) }, e.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, `skeleton-${t}`)) : a.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: String(e.id),
						"data-catalog-row": "",
						"data-release-row": "",
						children: [C.map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: ee(t.id, e) }, t.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/jav-releases.tsx
var At = `<div data-catalog-tier="performers" data-skeleton="tiers">${lt("performer")}</div><div data-catalog-tier="studios">${lt("studio")}</div>`, jt = (e) => `<span data-tier-initial>${Ne(ze(G("performer", e.name, e.id)))}</span>${je({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: Pe(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function Mt({ value: e }) {
	let t = Xe(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: `口味 ${t.score}`,
		children: /* @__PURE__ */ (0, $.jsx)(p, {
			color: t.color,
			children: t.label
		})
	});
}
function Nt({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: qe(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : Ke(e.name, 2)
	});
}
var Pt = (e) => Fe(e).then((t) => (t.has_cover && Ce(e, t), t.has_cover));
function Ft({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	dt();
	let [o, u] = (0, Q.useState)(() => $e(location.search));
	(0, Q.useEffect)(() => {
		r !== o.q && (u((e) => ({
			...e,
			q: r,
			page: 1
		})), Z({ page: "" }));
	}, [r, o.q]);
	let f = (e, t) => {
		let n = o[e] === t ? "" : t;
		u((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Z({
			[e]: n,
			page: ""
		});
	}, p = (0, Q.useRef)(null), m = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1;
		u((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			size: t === 24 ? "" : String(t)
		}), p.current?.scrollIntoView({ block: "start" });
	}, g = () => {
		u((e) => ({
			...e,
			performer: "",
			studio: "",
			tag: "",
			q: "",
			page: 1
		})), Z({
			performer: "",
			studio: "",
			tag: "",
			page: ""
		}), a();
	}, _ = (e) => v(e, e === o.sort ? o.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc"), v = (e, t) => {
		u((n) => ({
			...n,
			sort: e,
			dir: t,
			seed: "",
			page: 1
		})), Z({
			sort: e === "release_date" ? "" : e,
			dir: t === "asc" ? "asc" : "",
			seed: "",
			page: ""
		});
	}, b = () => {
		let e = Math.random().toString(36).slice(2, 10);
		u((t) => ({
			...t,
			sort: "random",
			dir: "desc",
			seed: e,
			page: 1
		})), Z({
			sort: "random",
			dir: "",
			seed: e,
			page: ""
		});
	};
	(0, Q.useEffect)(() => {
		let e = [...p.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => pt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let x = ge();
	(0, Q.useSyncExternalStore)(x.subscribe, x.version, x.version);
	let S = Ue(), T = ut(), D = be(Ve({
		active: !0,
		home: !1,
		portrait: !1
	})), O = (0, Q.useRef)(""), k = Y({
		queryKey: et(o),
		queryFn: ({ signal: e }) => Le(o, e, O.current),
		placeholderData: Ge,
		retry: !1,
		refetchOnWindowFocus: !1,
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), A = k.data?.metadata_job, j = A?.status === "running", M = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		A?.job_id && (O.current = A.job_id);
	}, [A?.job_id]), (0, Q.useEffect)(() => {
		M.current && !j && k.refetch(), M.current = j;
	}, [j, k]);
	let P = J(), F = (e) => {
		P.run(String(e.id), (t) => me({ code: e.code }, t), () => {
			t("已加入想要"), q(), k.refetch();
		});
	}, I = k.data, z = k.isPending, B = !!(o.performer || o.studio || o.tag || o.q), V = Math.max(1, Math.ceil((I?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!I || k.isPlaceholderData || o.page <= V || (u((e) => ({
			...e,
			page: V
		})), Z({ page: V > 1 ? String(V) : "" }));
	}, [
		I,
		k.isPlaceholderData,
		o.page,
		V
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: p,
		"aria-label": "订阅新作",
		"aria-busy": z || k.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			z ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: At }
			}) : null,
			I && (I.facets.performers.length || I.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [I.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": "按女优筛选",
					children: I.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": o.performer === e.name,
						title: `${G("performer", e.name, e.id)} · ${e.count} 部`,
						onClick: () => f("performer", e.name),
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: jt(e) }
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-name": "",
							children: G("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, I.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": "按厂牌筛选",
					children: I.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": o.studio === e.name,
						title: `${e.name} · ${e.count} 部`,
						onClick: () => f("studio", e.name),
						children: [
							/* @__PURE__ */ (0, $.jsx)(Nt, { studio: e }),
							e.name,
							/* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(w, {
				label: "新作筛选",
				topLabel: "新作标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: z,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: z ? { __html: We() } : void 0,
						children: z ? null : I?.facets.tags.map((e) => /* @__PURE__ */ (0, $.jsxs)(E, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: o.tag === e.name,
							onPress: () => f("tag", e.name),
							children: [e.name, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})]
						}, e.name))
					})
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: z ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : B ? `${I?.total || 0} / ${I?.candidate_total || 0} 部` : `${I?.total || 0} 部`
					}),
					B ? /* @__PURE__ */ (0, $.jsx)(ee, {
						onPress: g,
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(H, {
								onPress: b,
								busy: o.sort === "random" && k.isFetching
							}),
							T === "cards" ? /* @__PURE__ */ (0, $.jsx)(ie, {
								label: "JAV 卡片版式",
								value: S,
								options: te,
								onChange: st
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(d, {}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								sorts: R.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === o.sort,
									dir: o.dir
								})),
								onSort: (e) => _(e)
							})
						]
					})
				] })
			}),
			z && T === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取新作",
				dangerouslySetInnerHTML: { __html: He("discover", S) }
			}) : null,
			k.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "新作未取得",
				children: K(k.error)
			}) : null,
			j && A ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(le, {
					label: `正在读取作品资料 · ${A.completed} / ${A.total} 部`,
					value: A.completed,
					total: A.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(h, {
				scope: "本页",
				fetchOne: Pt,
				codes: (I?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? `已取到 ${n} 部封面` : `已取到 ${e} / ${n} 部封面，没取到的在卡上写了原因`), k.refetch();
				}
			}),
			!z && !k.error && !I?.items.length ? /* @__PURE__ */ (0, $.jsx)(C, {
				icon: l,
				title: B ? "没有符合条件的新作" : "暂无未入库的新作",
				actions: B ? /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: g,
					children: "清除筛选"
				}) : /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: "添加订阅"
				}),
				children: B ? "清除筛选后查看全部新作。" : "订阅女优或厂牌后，还没入库的新作会出现在这里。"
			}) : null,
			P.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				children: P.error
			}) : null,
			T === "list" ? z || I?.items.length ? /* @__PURE__ */ (0, $.jsx)(kt, {
				items: I?.items || [],
				waiting: z,
				filters: o,
				studios: I?.facets.studios || [],
				javImage: x.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: (e) => f("tag", e || o.tag),
				onSort: v,
				wanting: (e) => P.busy === String(e.id),
				onWant: F,
				onResource: (e) => n(Ct(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ne,
				style: { "--card-ratio": D },
				children: (I?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(Et, {
					item: t,
					layout: S,
					javImage: x.value.javImage,
					readOnly: e,
					navigate: i,
					tag: o.tag,
					onTag: (e) => f("tag", e || o.tag),
					wanting: P.busy === String(t.id),
					onWant: () => F(t),
					onResource: () => n(Ct(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ (0, $.jsx)(Mt, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			I ? /* @__PURE__ */ (0, $.jsx)(y, {
				label: "新作",
				total: I.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: m,
				unit: "部作品",
				pageUnit: "部",
				pageSizes: L
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var It = ot("x"), Lt = ot("refresh-cw"), Rt = {
	releases: "筛选新作",
	discover: "筛选推荐",
	wants: "筛选想要"
};
function zt({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex w-full flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, $.jsx)(A, {
				tab: e,
				navigate: n,
				find: () => a({}),
				search: /* @__PURE__ */ (0, $.jsx)(O, {
					label: Rt[e] || "筛选",
					value: o,
					onQuery: c
				})
			}),
			e === "releases" ? /* @__PURE__ */ (0, $.jsx)(Ft, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: o.trim(),
				navigate: n,
				clearText: () => c("")
			}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(Bt, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: o.trim(),
				navigate: n,
				clearText: () => c("")
			}) : /* @__PURE__ */ (0, $.jsx)(xt, {
				readOnly: t,
				toast: r,
				query: o.trim(),
				clearQuery: () => c("")
			}),
			/* @__PURE__ */ (0, $.jsx)(m, {
				prefill: i,
				close: () => a(null),
				receipt: r
			})
		]
	});
}
function Bt({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [l, u] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, Q.useState)(() => o.get("tag") || ""), [m, h] = (0, Q.useState)(() => g.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [_, v] = (0, Q.useState)(() => o.get("dir") === "asc"), y = (e) => {
		u(e), Z({ scope: e === "external" ? "" : e });
	}, b = (e) => {
		f(e), Z({ tag: e });
	}, S = (e) => {
		h(e), Z({ sort: e === "taste" ? "" : e });
	}, D = (e) => {
		v(e), Z({ dir: e ? "asc" : "" });
	}, O = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...O.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => pt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let k = ge();
	(0, Q.useSyncExternalStore)(k.subscribe, k.version, k.version);
	let A = Ue(), M = be(Ve({
		active: !0,
		home: !1,
		portrait: !1
	})), P = (0, Q.useRef)({}), F = (0, Q.useRef)(!1), I = (0, Q.useRef)(!1), L = _ ? "asc" : "desc", R = Y({
		queryKey: ke(l, m, L),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => {
			let t = F.current, n = I.current;
			return F.current = !1, I.current = !1, Ie(l, e, {
				sort: m,
				direction: L,
				jobId: t ? void 0 : P.current[l],
				refreshMetadata: t,
				cancelMetadata: n
			});
		},
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), z = R.data?.metadata_job;
	(0, Q.useEffect)(() => {
		z?.job_id && (P.current[l] = z.job_id);
	}, [l, z?.job_id]);
	let B = J(), V = J(), re = (e) => {
		V.run(e, async () => (I.current = e === "stop", F.current = e !== "stop", R.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		})), () => {});
	}, H = R.data?.items || [], oe = [...new Set(H.flatMap((e) => e.tags || []))], se = H.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), U = R.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: O,
		"aria-label": "为你推荐",
		"aria-busy": U,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(w, {
				label: "发现筛选与排序",
				topLabel: "发现范围与标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: U,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-catalog-views": "",
						children: [[["external", "库外发现"], ["library", "馆藏探索"]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(E, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: l === e,
							onPress: () => {
								y(e), b("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: U ? { __html: We() } : void 0,
						children: U ? null : oe.map((e) => /* @__PURE__ */ (0, $.jsxs)(E, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => b(d === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: H.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: U ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : `${se.length} 部`
					}),
					/* @__PURE__ */ (0, $.jsx)(j, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ (0, $.jsx)(ee, {
						onPress: () => {
							b(""), a();
						},
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							l === "external" ? /* @__PURE__ */ (0, $.jsx)(T, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: z?.status === "running" ? "停止读取" : "更新资料",
								disabled: U,
								"data-skeleton-action": U ? "" : void 0,
								busy: !!V.busy,
								icon: z?.status === "running" ? It : Lt,
								onPress: () => re(z?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(ie, {
								label: "JAV 卡片版式",
								value: A,
								options: te,
								onChange: st
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								sorts: g.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === m,
									dir: L
								})),
								onSort: (e) => {
									e === m ? D(!_) : (S(e), D(e === "code"));
								}
							})
						]
					})
				] })
			}),
			U ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取推荐",
				dangerouslySetInnerHTML: { __html: He("discover", A) }
			}) : null,
			R.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "推荐未取得",
				children: K(R.error)
			}) : null,
			l === "external" && z?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(le, {
					label: `正在读取作品资料 · ${z.completed} / ${z.total} 部`,
					value: z.completed,
					total: z.total
				})
			}) : null,
			z && z.status !== "running" && (z.status !== "complete" || z.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(s, {
					variant: "secondary",
					...W(V.busy === "retry"),
					"aria-label": "立即重试读取作品资料",
					onClick: () => re("retry"),
					children: "立即重试"
				}),
				children: z.message || `作品资料 ${z.completed} / ${z.total} 部`
			}) : null,
			V.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				children: V.error
			}) : null,
			!U && !R.error && !se.length ? /* @__PURE__ */ (0, $.jsx)(C, {
				icon: x,
				title: r || d ? "没有符合条件的推荐" : "暂无匹配口味的作品",
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: "查看口味"
				}), r || d ? /* @__PURE__ */ (0, $.jsx)(s, {
					variant: "primary",
					size: "small",
					onClick: () => {
						a(), f(""), Z({
							q: "",
							tag: ""
						});
					},
					children: "清除筛选"
				}) : l === "library" ? /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					href: "/",
					children: "浏览馆藏"
				}) : /* @__PURE__ */ (0, $.jsx)(s, {
					variant: "primary",
					size: "small",
					onClick: () => n({}),
					children: "查找作品"
				})] }),
				children: r || d ? "清除筛选后查看其他作品。" : l === "library" ? "观看或标记作品后，可以探索少看的馆藏。" : "可以查找番号，或更新关注来源。"
			}) : null,
			B.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				children: B.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ne,
				style: { "--card-ratio": M },
				children: se.map((r) => {
					let a = Xe(r.taste_score ?? r.score), o = [
						a.label,
						`口味 ${Ae(r.taste_score ?? r.score)}`,
						R.data?.ranking_method === "mmr" && r.ranking_score != null ? `排序 ${Ae(r.ranking_score)}` : "",
						r.source_score == null ? "" : `来源评分 ${r.source_score.toFixed(1)} / 5`,
						...r.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(Et, {
						item: r,
						layout: A,
						javImage: k.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: b,
						wanting: B.busy === String(r.id),
						onWant: () => {
							B.run(String(r.id), (e) => me({ code: r.code }, e), () => {
								t("已加入想要"), q(), R.refetch();
							});
						},
						onResource: () => n(Ct(r)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": `推荐分 ${a.score}，${a.label}`,
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(p, {
								color: a.color,
								children: a.label
							})
						})
					}, r.id);
				})
			})
		]
	});
}
export { zt as JavPage };

//# debugId=2fc06de6-1b10-45de-ad63-4c35a41511a9