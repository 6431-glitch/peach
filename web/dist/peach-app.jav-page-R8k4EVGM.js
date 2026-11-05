(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b434578f-1607-46dc-8b14-02db2ab56cfc", e._sentryDebugIdIdentifier = "sentry-dbid-b434578f-1607-46dc-8b14-02db2ab56cfc");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $fe21c36db05242bb$export$d7b12c4107be0d61 as a, ArtSlot as o, Button as s, ButtonLink as c, Bx as l, COVER_STATE_TITLE as u, CatalogViewToggle as d, ChevronSortDown as f, Chip as p, CloudDownloadDialog as m, CoverQueue as h, DISCOVERY_SORTS as g, DOWNLOADS_KEY as _, DOWNLOADS_URL as v, DataTableFrame as y, E3 as b, EmptyFocusButton as x, EmptyState as S, FilterGlassRows as C, FilterIconButton as w, FilterPill as ee, GlassPill as te, Help as T, IndexSearch as E, Input as D, JAV_LAYOUTS as ne, JAV_RECOMMENDATION_GRID as re, JavHeader as O, LibraryShortcuts as k, M6 as A, Note as j, PHASES as M, Pagination as N, RELEASE_COLUMN_VISIBILITY_KEY as P, RELEASE_COLUMN_WIDTHS_KEY as F, RELEASE_SORTS as ie, RELEASE_SORT_COLUMNS as I, SEGMENT as L, SEGMENTED_TRACK as R, SegmentedRadioGroup as z, Segments as ae, Shuffle as oe, SortKeys as se, SourceAvatar as B, Table as ce, TableColumnControls as V, TableColumnResizer as H, TaskProgress as le, WANTS_KEY as ue, WantMagnets as de, Wt as fe, __toESM as pe, addWant as me, apiGet as he, appSettingsStore as ge, avatarInner as _e, busyProps as U, cachedMagnetStates as ve, cardClass as ye, cardRatio as be, catalogListSkeletonCellHtml as xe, composingKey as Se, coverArrived as Ce, coverFetching as we, coverFetchingHtml as Te, coverStateAction as Ee, coverUrl as De, discoveryArtwork as Oe, discoveryKey as ke, discoveryScore as Ae, entityDisplayName as W, entityFaceImg as je, entityPath as Me, errorMessage as G, esc as Ne, facePos as Pe, fetchCoverNow as Fe, fetchDiscoveries as Ie, fetchReleases as Le, fetchWants as Re, firstGrapheme as ze, fmtDur as Be, gridLayout as Ve, import_jsx_runtime as K, invalidateWants as q, javContentSkeleton as He, javLayout as Ue, javTagSkeleton as We, jsx as J, jsxs as Y, keepPreviousData as Ge, leadingGraphemes as Ke, logoUrl as qe, pageWindow as Je, qE as Ye, recommendationScore as Xe, relayoutCovers as Ze, releaseColumns as Qe, releaseFilters as $e, releaseKey as et, removeWants as tt, require_react as nt, resetWants as rt, searchNote as it, spriteGlyph as at, storeJavLayout as ot, textLang as st, tierPlaceholdersHtml as ct, useAction as X, useCatalogView as lt, useEntityNames as ut, useQuery as dt, useTablePreferences as ft, wantName as Z, wireHorizontalScroller as pt, writeJavQuery as Q } from "./peach-app.js";
import { ErrorLine as mt } from "./peach-app.source-view-CRZESleF.js";
import "./peach-app.source-list-Dg_PaGs6.js";
// src/react/wants/want-list.tsx
var $ = /* @__PURE__ */ pe(nt(), 1), ht = {
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
	return /* @__PURE__ */ Y("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ J("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: "无封面"
		}), e.cover ? /* @__PURE__ */ J("img", {
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
	let [d, f] = (0, $.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ Y("li", {
		"data-want-id": e.id,
		className: ye({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ Y("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ J(vt, { want: e }), /* @__PURE__ */ Y("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ Y("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ J("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: Z(e)
						}), e.code && e.title ? /* @__PURE__ */ J("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					_t(e) ? /* @__PURE__ */ J("p", {
						className: "text-body-2-regular text-text-secondary",
						children: _t(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ J("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: it(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ J(mt, {
						text: e.scrape_error,
						prefix: "资料未取得：",
						tone: "muted"
					}) : null,
					/* @__PURE__ */ Y("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ J(c, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: fe,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "来源页"
							}) : null,
							/* @__PURE__ */ J(s, {
								variant: "secondary",
								size: "small",
								leadingIcon: A,
								disabled: t,
								...U(n === `remove:${e.id}`),
								onClick: i,
								children: "移除"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ J(s, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...U(n === `reset:${e.id}`),
								onClick: r,
								children: "重新查找"
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ J(s, {
								variant: "secondary",
								size: "small",
								onClick: a,
								children: "查找资源"
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ J(de, {
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
	let [i, o] = (0, $.useState)(1), [c, l] = (0, $.useState)("all"), u = ve(n), d = (e) => e.has_magnets ?? u.get(e.code || "") ?? !1, f = n.filter(d), p = e !== "searching" || c === "all" ? n : n.filter((e) => d(e) === (c === "available")), m = Je(p.length, 20, i);
	return /* @__PURE__ */ Y("section", {
		"aria-label": t,
		"data-want-phase": e,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ Y("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ Y("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [t, /* @__PURE__ */ J("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: n.length.toLocaleString()
					})]
				}), e === "searching" ? /* @__PURE__ */ J(z, {
					name: "want-magnet-filter",
					"aria-label": "待找磁链筛选",
					orientation: "horizontal",
					value: c,
					className: R,
					onChange: (e) => {
						l(e), o(1);
					},
					children: gt.map(([e, t]) => /* @__PURE__ */ Y(a, {
						value: e,
						"aria-label": t,
						className: L,
						children: [t, /* @__PURE__ */ J("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? f.length : n.length - f.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			p.length ? null : /* @__PURE__ */ J(S, {
				size: "compact",
				icon: Ye,
				title: "暂无符合条件的作品",
				actions: /* @__PURE__ */ J(s, {
					size: "small",
					onClick: () => {
						l("all"), o(1);
					},
					children: "查看全部"
				}),
				children: null
			}),
			/* @__PURE__ */ J("ul", {
				className: "flex flex-col gap-4",
				children: p.slice(m.start, m.end).map(r)
			}),
			m.pages > 1 ? /* @__PURE__ */ Y("div", {
				"data-want-pager": "",
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ J("span", {
					className: "text-body-2-regular tabular-nums text-text-secondary",
					children: `${(m.start + 1).toLocaleString()}–${m.end.toLocaleString()} / ${m.total.toLocaleString()} 条`
				}), /* @__PURE__ */ J(N, {
					label: `${t}分页`,
					page: m.page,
					pages: m.pages,
					onPage: o
				})]
			}) : null
		]
	});
}
function xt({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, $.useState)(""), [o, c] = (0, $.useState)(null), l = X(), u = dt({
		queryKey: ue,
		queryFn: ({ signal: e }) => Re(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => me({ code: n }, e), (e) => {
			t(e.created ? `已加入想要：${Z(e.want)}` : `${Z(e.want)} 已经在想要里`), a(""), q();
		});
	}, f = (e) => {
		e.key === "Enter" && !Se(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		l.run(`remove:${e.id}`, (t) => tt([e.id], t), () => {
			t(`已移除：${Z(e)}`), q();
		});
	}, h = (e) => {
		l.run(`reset:${e.id}`, (t) => rt([e.id], t), () => {
			t(`${Z(e)} 回到待找`), q();
		});
	}, g = u.data, y = (g?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), b = dt({
		queryKey: _,
		queryFn: ({ signal: e }) => he(`${v}?limit=100`, e),
		enabled: y.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), C = b.data?.providers.filter((e) => e.configured) || [], w = C[0]?.key || "";
	return /* @__PURE__ */ Y("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ Y("div", {
				className: ye({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ J("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "按番号添加"
					}),
					/* @__PURE__ */ Y("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ J("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ J(D, {
								"aria-label": "番号",
								placeholder: "输入番号，例如 SSIS-950",
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ J(s, {
							variant: "primary",
							disabled: e || !i.trim(),
							...U(l.busy === "add"),
							onClick: d,
							children: "添加"
						})]
					}),
					l.error ? /* @__PURE__ */ J(j, {
						tone: "error",
						title: "这一次没有完成",
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ J(j, {
				tone: "error",
				title: "想要清单读取失败",
				children: G(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ J("div", {
				role: "status",
				"aria-label": "正在读取想要",
				dangerouslySetInnerHTML: { __html: He("wants") }
			}) : null,
			g?.scraping ? /* @__PURE__ */ J(T, {
				role: "status",
				children: "正在给刚加入的番号取资料与封面。"
			}) : null,
			b.error ? /* @__PURE__ */ J(j, {
				tone: "error",
				title: "下载配置未取得",
				children: G(b.error)
			}) : null,
			b.data && !C.length ? /* @__PURE__ */ Y(j, {
				tone: "neutral",
				children: ["尚未配置下载渠道。", /* @__PURE__ */ J("a", {
					href: "/settings/library?section=%E4%B8%8B%E8%BD%BD%E6%B8%A0%E9%81%93",
					children: "下载渠道设置"
				})]
			}) : null,
			b.data && !b.data.available ? /* @__PURE__ */ J(j, {
				tone: "neutral",
				children: "云下载只在允许修改数据库的设备上可用。"
			}) : null,
			g && !y.length ? /* @__PURE__ */ J(S, {
				size: "compact",
				icon: Ye,
				title: n ? "没有符合条件的作品" : "还没有想要的作品",
				actions: n && r ? /* @__PURE__ */ J(s, {
					size: "small",
					onClick: r,
					children: "清除搜索"
				}) : !n && !e ? /* @__PURE__ */ J(x, {
					target: "input[aria-label=\"番号\"]",
					children: "添加作品"
				}) : void 0,
				children: n ? "试试其他番号、女优或标题。" : "输入番号，添加想看的作品。"
			}) : null,
			M.map(([n, r]) => {
				let i = y.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ J(bt, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ J(yt, {
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
			/* @__PURE__ */ J(m, {
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
	ut();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ J(B, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: _e(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ J("a", {
			"data-media-avatar": "",
			style: r,
			href: Me("performer", t.name, t.id),
			"aria-label": `打开女优页：${W("performer", t.name, t.id)}`,
			...i
		}, t.name) : /* @__PURE__ */ J("span", {
			"data-media-avatar": "",
			style: r,
			title: W("performer", t.name),
			...i
		}, t.name);
	});
	return t.length > 1 ? /* @__PURE__ */ J("div", {
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
	let n = X(), [r, i] = (0, $.useState)("");
	(0, $.useSyncExternalStore)(we.subscribe, we.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ J("span", {
		"data-media-nopic": "",
		children: "无封面"
	});
	if (a === "fetching" || we.has(e.code)) return /* @__PURE__ */ J("span", { dangerouslySetInnerHTML: { __html: Te() } });
	let o = () => {
		n.run("cover", (t) => Fe(e.code, t), (t) => {
			t.has_cover ? Ce(e.code, t) : i(t.message || "没有找到可用的官方封面");
		});
	}, c = r || n.error ? "missing" : a, l = n.error || r || e.cover_reason;
	return /* @__PURE__ */ Y("div", {
		"data-cover-state": c,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			/* @__PURE__ */ J("span", {
				"data-media-nopic": "",
				children: u[c]
			}),
			l ? /* @__PURE__ */ J("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: l,
				children: l
			}) : null,
			t ? null : /* @__PURE__ */ J(s, {
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
	return /* @__PURE__ */ Y("article", {
		"data-media-card": "",
		"data-jav-card": "",
		onClick: (e) => {
			e.target.closest("a,button,input") || i(g);
		},
		children: [
			h ? /* @__PURE__ */ J("a", {
				href: g,
				"aria-label": `查看 ${e.code} 详情`,
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(g));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: wt,
				children: /* @__PURE__ */ J(o, {
					artwork: {
						kind: "cover",
						html: h
					},
					identity: Oe(e, "small", n),
					relayout: (e) => Ze(e, t)
				})
			}) : /* @__PURE__ */ J("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: wt,
				children: /* @__PURE__ */ J(Tt, {
					item: e,
					readOnly: r
				})
			}),
			/* @__PURE__ */ Y("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ J(St, { item: e }), /* @__PURE__ */ Y("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ Y("h3", {
							"data-jav-title": "",
							"data-media-title": "",
							title: `${e.code} · ${e.title || "标题未取得"}`,
							children: [
								/* @__PURE__ */ J("b", { children: e.code }),
								" ",
								e.title ? /* @__PURE__ */ J("span", {
									lang: st(e.title),
									children: e.title
								}) : "标题未取得"
							]
						}),
						/* @__PURE__ */ Y("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ Y("a", {
									"data-media-who": "",
									href: Me("performer", e.performer_refs[0].name),
									title: m,
									children: [/* @__PURE__ */ J("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ J("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ J("span", { children: e.performer_refs[0].name })]
								}) : /* @__PURE__ */ Y("span", {
									"data-media-who": "",
									title: m,
									children: [/* @__PURE__ */ J("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ J("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ J("span", { children: e.performer_refs?.[0]?.name || m })]
								}),
								(e.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ Y("span", {
									"data-media-who-more": "",
									children: [
										"等 ",
										e.performer_refs.length,
										" 人"
									]
								}) : null,
								e.release_date ? /* @__PURE__ */ Y("time", {
									"data-media-release": "",
									dateTime: e.release_date,
									children: [/* @__PURE__ */ J("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ J("use", { href: "#i-calendar" })
									}), e.release_date]
								}) : null
							]
						}),
						/* @__PURE__ */ Y("div", {
							"data-jav-tags": "",
							"data-media-tags": "",
							children: [p, (e.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ J("button", {
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
			/* @__PURE__ */ Y("div", {
				"data-jav-actions": "",
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ J(c, {
						"data-button-link": "",
						variant: "secondary",
						trailingIcon: fe,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "作品来源"
					}) : null,
					/* @__PURE__ */ J(s, {
						variant: "ghost",
						disabled: r || e.wanted || !!e.asset_id,
						...U(u),
						onClick: d,
						children: e.asset_id ? "已入库" : e.wanted ? "已加入想要" : "想要"
					}),
					/* @__PURE__ */ J(s, {
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
	widths: F,
	visibility: P
};
function Ot({ studio: e }) {
	let [t, n] = (0, $.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ J("img", {
		"data-list-studio-mark": "",
		src: qe(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ J("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true",
		children: Ke(e?.name || "", 1)
	});
}
function kt({ items: a, waiting: c, filters: l, studios: d, javImage: p, readOnly: m, navigate: h, onTag: g, onSort: _, wanting: v, onWant: b, onResource: x }) {
	let S = ft("jav-releases", Qe, Dt), C = Qe.filter((e) => e.required || S.visibility[e.id] !== !1), w = Object.entries(I).find(([, e]) => e === l.sort)?.[0], ee = new Map(d.map((e) => [e.name, e])), te = (e) => (t) => {
		t.preventDefault(), h(`/works/${encodeURIComponent(e.code)}`);
	}, T = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = Oe(t, "small", p);
				return /* @__PURE__ */ Y("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ J("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: te(t),
						children: /* @__PURE__ */ J("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ J(o, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => Ze(e, "small")
							}) : /* @__PURE__ */ J("span", {
								title: t.cover_reason || void 0,
								children: t.cover_state ? u[t.cover_state] : "无封面"
							})
						})
					}), /* @__PURE__ */ J("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ Y("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || "标题未取得"}`,
							"aria-label": `查看 ${t.code} 详情`,
							onClick: te(t),
							children: [
								/* @__PURE__ */ J("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ J("span", {
									lang: st(t.title),
									children: t.title
								}) : "标题未取得"
							]
						})
					})]
				});
			}
			case "people": return n ? /* @__PURE__ */ Y("div", {
				"data-list-people": "",
				children: [
					/* @__PURE__ */ J(St, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ J("a", {
						"data-media-who": "",
						href: Me("performer", n),
						children: /* @__PURE__ */ J("span", { children: n })
					}) : /* @__PURE__ */ J("span", {
						"data-media-who": "",
						children: /* @__PURE__ */ J("span", { children: n })
					}),
					(t.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ Y("span", {
						"data-media-who-more": "",
						children: [
							"等 ",
							t.performer_refs.length,
							" 人"
						]
					}) : null
				]
			}) : "—";
			case "studio": return t.studio ? /* @__PURE__ */ Y("span", {
				"data-list-library": "",
				title: t.studio,
				children: [/* @__PURE__ */ J(Ot, { studio: ee.get(t.studio) }), /* @__PURE__ */ J("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ J("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ J("button", {
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
			default: return /* @__PURE__ */ Y("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ J(s, {
					size: "small",
					variant: "ghost",
					disabled: m || t.wanted || !!t.asset_id,
					...U(v(t)),
					onClick: () => b(t),
					children: t.wanted ? "已想要" : "想要"
				}), /* @__PURE__ */ J(s, {
					size: "small",
					variant: "secondary",
					onClick: () => x(t),
					children: "查找资源"
				})]
			});
		}
	};
	return /* @__PURE__ */ Y("div", {
		"data-catalog-table": "",
		"data-release-table": "",
		className: "flex min-w-0 flex-col gap-4",
		children: [/* @__PURE__ */ J("div", {
			className: "flex flex-wrap justify-end gap-2",
			role: "toolbar",
			"aria-label": "新作列表工具栏",
			children: /* @__PURE__ */ J("div", {
				"data-toolbar-actions": "",
				children: /* @__PURE__ */ J(V, {
					preferences: S,
					label: "新作列表"
				})
			})
		}), /* @__PURE__ */ J(y, {
			follow: !0,
			preferences: S,
			children: /* @__PURE__ */ Y(ce, {
				"aria-label": "新作列表",
				size: "sm",
				sortDescriptor: w ? {
					column: w,
					direction: l.dir === "asc" ? "ascending" : "descending"
				} : void 0,
				onSortChange: (e) => {
					let t = I[String(e.column)];
					t && _(t, e.direction === "ascending" ? "asc" : "desc");
				},
				children: [/* @__PURE__ */ Y(i, { children: [C.map((e) => /* @__PURE__ */ J(t, {
					id: e.id,
					isRowHeader: e.id === "name",
					allowsSorting: e.id in I,
					...S.columnProps(e.id),
					children: ({ sortDirection: t }) => /* @__PURE__ */ Y(K.Fragment, { children: [/* @__PURE__ */ Y("span", {
						className: "flex items-center gap-0.5",
						children: [e.label, e.id in I ? /* @__PURE__ */ J("span", {
							"data-sort-indicator": !0,
							"data-direction": t || void 0,
							children: /* @__PURE__ */ J(f, {})
						}) : null]
					}), /* @__PURE__ */ J(H, {
						preferences: S,
						id: e.id
					})] })
				}, e.id)), /* @__PURE__ */ J(t, {
					id: "remaining-space",
					"aria-label": "行空白区域",
					"data-table-space": "",
					width: S.spaceWidth,
					minWidth: 0
				})] }), /* @__PURE__ */ J(e, {
					renderEmptyState: () => "没有符合条件的新作",
					children: c ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ Y(n, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [C.map((e) => /* @__PURE__ */ J(r, { children: /* @__PURE__ */ J("span", { dangerouslySetInnerHTML: { __html: xe(e.id) } }) }, e.id)), /* @__PURE__ */ J(r, { "data-table-space": "" })]
					}, `skeleton-${t}`)) : a.map((e) => /* @__PURE__ */ Y(n, {
						id: String(e.id),
						"data-catalog-row": "",
						"data-release-row": "",
						children: [C.map((t) => /* @__PURE__ */ J(r, { children: T(t.id, e) }, t.id)), /* @__PURE__ */ J(r, { "data-table-space": "" })]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/jav-releases.tsx
var At = `<div data-catalog-tier="performers" data-skeleton="tiers">${ct("performer")}</div><div data-catalog-tier="studios">${ct("studio")}</div>`, jt = (e) => `<span data-tier-initial>${Ne(ze(W("performer", e.name, e.id)))}</span>${je({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: Pe(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function Mt({ value: e }) {
	let t = Xe(e);
	return /* @__PURE__ */ J("span", {
		"data-jav-taste-score": "",
		title: `口味 ${t.score}`,
		children: /* @__PURE__ */ J(p, {
			color: t.color,
			children: t.label
		})
	});
}
function Nt({ studio: e }) {
	let [t, n] = (0, $.useState)(!1);
	return /* @__PURE__ */ J("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ J("img", {
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
	ut();
	let [o, u] = (0, $.useState)(() => $e(location.search));
	(0, $.useEffect)(() => {
		r !== o.q && (u((e) => ({
			...e,
			q: r,
			page: 1
		})), Q({ page: "" }));
	}, [r, o.q]);
	let f = (e, t) => {
		let n = o[e] === t ? "" : t;
		u((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Q({
			[e]: n,
			page: ""
		});
	}, p = (0, $.useRef)(null), m = (e) => {
		u((t) => ({
			...t,
			page: e
		})), Q({ page: e > 1 ? String(e) : "" }), p.current?.scrollIntoView({ block: "start" });
	}, g = () => {
		u((e) => ({
			...e,
			performer: "",
			studio: "",
			tag: "",
			q: "",
			page: 1
		})), Q({
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
		})), Q({
			sort: e === "release_date" ? "" : e,
			dir: t === "asc" ? "asc" : "",
			seed: "",
			page: ""
		});
	}, y = () => {
		let e = Math.random().toString(36).slice(2, 10);
		u((t) => ({
			...t,
			sort: "random",
			dir: "desc",
			seed: e,
			page: 1
		})), Q({
			sort: "random",
			dir: "",
			seed: e,
			page: ""
		});
	};
	(0, $.useEffect)(() => {
		let e = [...p.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => pt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let b = ge();
	(0, $.useSyncExternalStore)(b.subscribe, b.version, b.version);
	let x = Ue(), w = lt(), T = be(Ve({
		active: !0,
		home: !1,
		portrait: !1
	})), E = (0, $.useRef)(""), D = dt({
		queryKey: et(o),
		queryFn: ({ signal: e }) => Le(o, e, E.current),
		placeholderData: Ge,
		retry: !1,
		refetchOnWindowFocus: !1,
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), O = D.data?.metadata_job, k = O?.status === "running", A = (0, $.useRef)(!1);
	(0, $.useEffect)(() => {
		O?.job_id && (E.current = O.job_id);
	}, [O?.job_id]), (0, $.useEffect)(() => {
		A.current && !k && D.refetch(), A.current = k;
	}, [k, D]);
	let M = X(), P = (e) => {
		M.run(String(e.id), (t) => me({ code: e.code }, t), () => {
			t("已加入想要"), q(), D.refetch();
		});
	}, F = D.data, I = D.isPending, L = !!(o.performer || o.studio || o.tag || o.q), R = Math.max(1, Math.ceil((F?.total || 0) / 24));
	return /* @__PURE__ */ Y("section", {
		ref: p,
		"aria-label": "订阅新作",
		"aria-busy": I || D.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			I ? /* @__PURE__ */ J("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: At }
			}) : null,
			F && (F.facets.performers.length || F.facets.studios.length) ? /* @__PURE__ */ Y("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [F.facets.performers.length ? /* @__PURE__ */ J("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": "按女优筛选",
					children: F.facets.performers.map((e) => /* @__PURE__ */ Y("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": o.performer === e.name,
						title: `${W("performer", e.name, e.id)} · ${e.count} 部`,
						onClick: () => f("performer", e.name),
						children: [/* @__PURE__ */ J("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: jt(e) }
						}), /* @__PURE__ */ J("span", {
							"data-tier-name": "",
							children: W("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, F.facets.studios.length ? /* @__PURE__ */ J("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": "按厂牌筛选",
					children: F.facets.studios.map((e) => /* @__PURE__ */ Y("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": o.studio === e.name,
						title: `${e.name} · ${e.count} 部`,
						onClick: () => f("studio", e.name),
						children: [
							/* @__PURE__ */ J(Nt, { studio: e }),
							e.name,
							/* @__PURE__ */ J("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ J(C, {
				label: "新作筛选",
				topLabel: "新作标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: I,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ J("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ J("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: I ? { __html: We() } : void 0,
						children: I ? null : F?.facets.tags.map((e) => /* @__PURE__ */ Y(ee, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: o.tag === e.name,
							onPress: () => f("tag", e.name),
							children: [e.name, /* @__PURE__ */ J("span", {
								"data-count-badge": "",
								children: e.count
							})]
						}, e.name))
					})
				}),
				bottom: /* @__PURE__ */ Y(K.Fragment, { children: [
					/* @__PURE__ */ J("span", {
						"data-catalog-readout": "",
						children: I ? /* @__PURE__ */ J("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : L ? `${F?.total || 0} / ${F?.candidate_total || 0} 部` : `${F?.total || 0} 部`
					}),
					L ? /* @__PURE__ */ J(te, {
						onPress: g,
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ Y("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ J(oe, {
								onPress: y,
								busy: o.sort === "random" && D.isFetching
							}),
							w === "cards" ? /* @__PURE__ */ J(ae, {
								label: "JAV 卡片版式",
								value: x,
								options: ne,
								onChange: ot
							}) : null,
							/* @__PURE__ */ J(d, {}),
							/* @__PURE__ */ J(se, {
								sorts: ie.map(([e, t, n]) => ({
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
			I && w === "cards" ? /* @__PURE__ */ J("div", {
				role: "status",
				"aria-label": "正在读取新作",
				dangerouslySetInnerHTML: { __html: He("discover", x) }
			}) : null,
			D.error ? /* @__PURE__ */ J(j, {
				tone: "error",
				title: "新作未取得",
				children: G(D.error)
			}) : null,
			k && O ? /* @__PURE__ */ J("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ J(le, {
					label: `正在读取作品资料 · ${O.completed} / ${O.total} 部`,
					value: O.completed,
					total: O.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ J(h, {
				scope: "本页",
				fetchOne: Pt,
				codes: (F?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? `已取到 ${n} 部封面` : `已取到 ${e} / ${n} 部封面，没取到的在卡上写了原因`), D.refetch();
				}
			}),
			!I && !D.error && !F?.items.length ? /* @__PURE__ */ J(S, {
				icon: l,
				title: L ? "没有符合条件的新作" : "暂无未入库的新作",
				actions: L ? /* @__PURE__ */ J(s, {
					size: "small",
					onClick: g,
					children: "清除筛选"
				}) : /* @__PURE__ */ J(c, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: "添加订阅"
				}),
				children: L ? "清除筛选后查看全部新作。" : "订阅女优或厂牌后，还没入库的新作会出现在这里。"
			}) : null,
			M.error ? /* @__PURE__ */ J(j, {
				tone: "error",
				children: M.error
			}) : null,
			w === "list" ? I || F?.items.length ? /* @__PURE__ */ J(kt, {
				items: F?.items || [],
				waiting: I,
				filters: o,
				studios: F?.facets.studios || [],
				javImage: b.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: (e) => f("tag", e || o.tag),
				onSort: v,
				wanting: (e) => M.busy === String(e.id),
				onWant: P,
				onResource: (e) => n(Ct(e))
			}) : null : /* @__PURE__ */ J("div", {
				"data-media-grid": "",
				className: re,
				style: { "--card-ratio": T },
				children: (F?.items || []).map((t) => /* @__PURE__ */ J(Et, {
					item: t,
					layout: x,
					javImage: b.value.javImage,
					readOnly: e,
					navigate: i,
					tag: o.tag,
					onTag: (e) => f("tag", e || o.tag),
					wanting: M.busy === String(t.id),
					onWant: () => P(t),
					onResource: () => n(Ct(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ J(Mt, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			/* @__PURE__ */ J("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ J(N, {
					page: o.page,
					pages: R,
					onPage: m,
					label: "新作分页"
				})
			})
		]
	});
}
// src/react/jav/jav-page.tsx
var It = at("x"), Lt = at("refresh-cw"), Rt = {
	releases: "筛选新作",
	discover: "筛选推荐",
	wants: "筛选想要"
};
function zt({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, $.useState)(null), [o, s] = (0, $.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Q({ q: e });
	};
	return /* @__PURE__ */ Y("div", {
		className: "flex w-full flex-col gap-6",
		children: [
			/* @__PURE__ */ J(O, {
				tab: e,
				navigate: n,
				find: () => a({}),
				search: /* @__PURE__ */ J(E, {
					label: Rt[e] || "筛选",
					value: o,
					onQuery: c
				})
			}),
			e === "releases" ? /* @__PURE__ */ J(Ft, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: o.trim(),
				navigate: n,
				clearText: () => c("")
			}) : e === "discover" ? /* @__PURE__ */ J(Bt, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: o.trim(),
				navigate: n,
				clearText: () => c("")
			}) : /* @__PURE__ */ J(xt, {
				readOnly: t,
				toast: r,
				query: o.trim(),
				clearQuery: () => c("")
			}),
			/* @__PURE__ */ J(m, {
				prefill: i,
				close: () => a(null),
				receipt: r
			})
		]
	});
}
function Bt({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [l, u] = (0, $.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, $.useState)(() => o.get("tag") || ""), [m, h] = (0, $.useState)(() => g.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [_, v] = (0, $.useState)(() => o.get("dir") === "asc"), y = (e) => {
		u(e), Q({ scope: e === "external" ? "" : e });
	}, x = (e) => {
		f(e), Q({ tag: e });
	}, T = (e) => {
		h(e), Q({ sort: e === "taste" ? "" : e });
	}, E = (e) => {
		v(e), Q({ dir: e ? "asc" : "" });
	}, D = (0, $.useRef)(null);
	(0, $.useEffect)(() => {
		let e = [...D.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => pt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let O = ge();
	(0, $.useSyncExternalStore)(O.subscribe, O.version, O.version);
	let A = Ue(), M = be(Ve({
		active: !0,
		home: !1,
		portrait: !1
	})), N = (0, $.useRef)({}), P = (0, $.useRef)(!1), F = (0, $.useRef)(!1), ie = _ ? "asc" : "desc", I = dt({
		queryKey: ke(l, m, ie),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => {
			let t = P.current, n = F.current;
			return P.current = !1, F.current = !1, Ie(l, e, {
				sort: m,
				direction: ie,
				jobId: t ? void 0 : N.current[l],
				refreshMetadata: t,
				cancelMetadata: n
			});
		},
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), L = I.data?.metadata_job;
	(0, $.useEffect)(() => {
		L?.job_id && (N.current[l] = L.job_id);
	}, [l, L?.job_id]);
	let R = X(), z = X(), oe = (e) => {
		z.run(e, async () => (F.current = e === "stop", P.current = e !== "stop", I.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		})), () => {});
	}, B = I.data?.items || [], ce = [...new Set(B.flatMap((e) => e.tags || []))], V = B.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), H = I.isPending;
	return /* @__PURE__ */ Y("section", {
		ref: D,
		"aria-label": "为你推荐",
		"aria-busy": H,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ J(C, {
				label: "发现筛选与排序",
				topLabel: "发现范围与标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: H,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ Y("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ Y("div", {
						"data-catalog-views": "",
						children: [[["external", "库外发现"], ["library", "馆藏探索"]].map(([e, t]) => /* @__PURE__ */ J(ee, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: l === e,
							onPress: () => {
								y(e), x("");
							},
							children: t
						}, e)), /* @__PURE__ */ J("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ J("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: H ? { __html: We() } : void 0,
						children: H ? null : ce.map((e) => /* @__PURE__ */ Y(ee, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => x(d === e ? "" : e),
							children: [e, /* @__PURE__ */ J("span", {
								"data-count-badge": "",
								children: B.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ Y(K.Fragment, { children: [
					/* @__PURE__ */ J("span", {
						"data-catalog-readout": "",
						children: H ? /* @__PURE__ */ J("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : `${V.length} 部`
					}),
					/* @__PURE__ */ J(k, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ J(te, {
						onPress: () => {
							x(""), a();
						},
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ Y("span", {
						"data-entity-sorts": "",
						children: [
							l === "external" ? /* @__PURE__ */ J(w, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: L?.status === "running" ? "停止读取" : "更新资料",
								disabled: H,
								"data-skeleton-action": H ? "" : void 0,
								busy: !!z.busy,
								icon: L?.status === "running" ? It : Lt,
								onPress: () => oe(L?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ J(ae, {
								label: "JAV 卡片版式",
								value: A,
								options: ne,
								onChange: ot
							}),
							/* @__PURE__ */ J(se, {
								sorts: g.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === m,
									dir: ie
								})),
								onSort: (e) => {
									e === m ? E(!_) : (T(e), E(e === "code"));
								}
							})
						]
					})
				] })
			}),
			H ? /* @__PURE__ */ J("div", {
				role: "status",
				"aria-label": "正在读取推荐",
				dangerouslySetInnerHTML: { __html: He("discover", A) }
			}) : null,
			I.error ? /* @__PURE__ */ J(j, {
				tone: "error",
				title: "推荐未取得",
				children: G(I.error)
			}) : null,
			l === "external" && L?.status === "running" ? /* @__PURE__ */ J("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ J(le, {
					label: `正在读取作品资料 · ${L.completed} / ${L.total} 部`,
					value: L.completed,
					total: L.total
				})
			}) : null,
			L && L.status !== "running" && (L.status !== "complete" || L.failed > 0) ? /* @__PURE__ */ J(j, {
				tone: "neutral",
				action: /* @__PURE__ */ J(s, {
					variant: "secondary",
					...U(z.busy === "retry"),
					"aria-label": "立即重试读取作品资料",
					onClick: () => oe("retry"),
					children: "立即重试"
				}),
				children: L.message || `作品资料 ${L.completed} / ${L.total} 部`
			}) : null,
			z.error ? /* @__PURE__ */ J(j, {
				tone: "error",
				children: z.error
			}) : null,
			!H && !I.error && !V.length ? /* @__PURE__ */ J(S, {
				icon: b,
				title: r || d ? "没有符合条件的推荐" : "暂无匹配口味的作品",
				actions: /* @__PURE__ */ Y(K.Fragment, { children: [/* @__PURE__ */ J(c, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: "查看口味"
				}), r || d ? /* @__PURE__ */ J(s, {
					variant: "primary",
					size: "small",
					onClick: () => {
						a(), f(""), Q({
							q: "",
							tag: ""
						});
					},
					children: "清除筛选"
				}) : l === "library" ? /* @__PURE__ */ J(c, {
					variant: "primary",
					size: "small",
					href: "/",
					children: "浏览馆藏"
				}) : /* @__PURE__ */ J(s, {
					variant: "primary",
					size: "small",
					onClick: () => n({}),
					children: "查找作品"
				})] }),
				children: r || d ? "清除筛选后查看其他作品。" : l === "library" ? "观看或标记作品后，可以探索少看的馆藏。" : "可以查找番号，或更新关注来源。"
			}) : null,
			R.error ? /* @__PURE__ */ J(j, {
				tone: "error",
				children: R.error
			}) : null,
			/* @__PURE__ */ J("div", {
				"data-media-grid": "",
				className: re,
				style: { "--card-ratio": M },
				children: V.map((r) => {
					let a = Xe(r.taste_score ?? r.score), o = [
						a.label,
						`口味 ${Ae(r.taste_score ?? r.score)}`,
						I.data?.ranking_method === "mmr" && r.ranking_score != null ? `排序 ${Ae(r.ranking_score)}` : "",
						r.source_score == null ? "" : `来源评分 ${r.source_score.toFixed(1)} / 5`,
						...r.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ J(Et, {
						item: r,
						layout: A,
						javImage: O.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: x,
						wanting: R.busy === String(r.id),
						onWant: () => {
							R.run(String(r.id), (e) => me({ code: r.code }, e), () => {
								t("已加入想要"), q(), I.refetch();
							});
						},
						onResource: () => n(Ct(r)),
						badge: /* @__PURE__ */ J("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": `推荐分 ${a.score}，${a.label}`,
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ J(p, {
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

//# debugId=b434578f-1607-46dc-8b14-02db2ab56cfc