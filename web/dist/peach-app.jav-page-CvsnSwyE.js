(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ed16b1eb-6616-4023-8b32-d3b319416b68", e._sentryDebugIdIdentifier = "sentry-dbid-ed16b1eb-6616-4023-8b32-d3b319416b68");
	} catch {}
})();
import { $76d00c5a4edb230a$export$76ccd210b9029917 as e, $76d00c5a4edb230a$export$816b5d811295e6bc as t, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as n, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as r, $76d00c5a4edb230a$export$f850895b287ef28e as i, $fe21c36db05242bb$export$d7b12c4107be0d61 as a, ArtSlot as o, Button as s, ButtonLink as c, Bx as l, CatalogViewToggle as u, ChevronSortDown as d, Chip as f, CloudDownloadDialog as p, DISCOVERY_SORTS as m, DOWNLOADS_KEY as h, DOWNLOADS_URL as g, DataTableFrame as _, E3 as v, EmptyFocusButton as y, EmptyState as b, FilterGlassRows as x, FilterIconButton as S, FilterPill as C, GlassPill as w, Help as T, IndexSearch as E, Input as D, JAV_LAYOUTS as ee, JAV_RECOMMENDATION_GRID as te, JavHeader as O, LibraryShortcuts as k, M6 as A, Note as j, PHASES as M, Pagination as N, RELEASE_COLUMN_VISIBILITY_KEY as P, RELEASE_COLUMN_WIDTHS_KEY as F, RELEASE_SORTS as I, RELEASE_SORT_COLUMNS as L, SEGMENT as R, SEGMENTED_TRACK as z, SegmentedRadioGroup as B, Segments as ne, Shuffle as V, SortKeys as re, SourceAvatar as H, Table as ie, TableColumnControls as U, TableColumnResizer as ae, TaskProgress as oe, WANTS_KEY as W, WantMagnets as G, Wt as se, __toESM as ce, addWant as le, apiGet as ue, appSettingsStore as de, avatarInner as fe, busyProps as K, cachedMagnetStates as pe, cardClass as me, cardRatio as he, catalogListSkeletonCellHtml as ge, composingKey as _e, coverUrl as ve, discoveryArtwork as ye, discoveryKey as be, discoveryScore as xe, entityDisplayName as q, entityFaceImg as Se, entityPath as Ce, errorMessage as J, esc as we, facePos as Te, fetchDiscoveries as Ee, fetchReleases as De, fetchWants as Oe, firstGrapheme as ke, fmtDur as Ae, gridLayout as je, invalidateWants as Y, javContentSkeleton as Me, javLayout as Ne, javTagSkeleton as Pe, keepPreviousData as Fe, leadingGraphemes as Ie, logoUrl as Le, pageWindow as Re, qE as ze, recommendationScore as Be, relayoutCovers as Ve, releaseColumns as He, releaseFilters as Ue, releaseKey as We, removeWants as Ge, require_jsx_runtime as Ke, require_react as qe, resetWants as Je, searchNote as Ye, spriteGlyph as Xe, storeJavLayout as Ze, textLang as Qe, tierPlaceholdersHtml as $e, useAction as et, useCatalogView as tt, useEntityNames as nt, useQuery as rt, useTablePreferences as it, wantName as X, wireHorizontalScroller as at, writeJavQuery as Z } from "./peach-app.js";
import { ErrorLine as ot } from "./peach-app.source-view-DalWfDkm.js";
import "./peach-app.source-list-ri5fRK2E.js";
// src/react/wants/want-list.tsx
var Q = /* @__PURE__ */ ce(qe(), 1), $ = Ke(), st = {
	code: "手动添加",
	feed: "订阅新作",
	follow: "关注"
}, ct = [
	["all", "全部"],
	["available", "有磁链"],
	["missing", "没磁链"]
], lt = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	st[e.origin]
].filter(Boolean).join(" · ");
function ut({ want: e }) {
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
function dt({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: l, toast: u }) {
	let [d, f] = (0, Q.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, $.jsxs)("li", {
		"data-want-id": e.id,
		className: me({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)(ut, { want: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
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
					lt(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: lt(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, $.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: Ye(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(ot, {
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
								trailingIcon: se,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "来源页"
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(s, {
								variant: "secondary",
								size: "small",
								leadingIcon: A,
								disabled: t,
								...K(n === `remove:${e.id}`),
								onClick: i,
								children: "移除"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(s, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...K(n === `reset:${e.id}`),
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
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(G, {
			want: e,
			readOnly: t,
			downloads: o,
			provider: l,
			toast: u,
			onSource: f
		}) : null]
	});
}
function ft({ phase: e, label: t, rows: n, row: r }) {
	let [i, o] = (0, Q.useState)(1), [c, l] = (0, Q.useState)("all"), u = pe(n), d = (e) => e.has_magnets ?? u.get(e.code || "") ?? !1, f = n.filter(d), p = e !== "searching" || c === "all" ? n : n.filter((e) => d(e) === (c === "available")), m = Re(p.length, 20, i);
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
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(B, {
					name: "want-magnet-filter",
					"aria-label": "待找磁链筛选",
					orientation: "horizontal",
					value: c,
					className: z,
					onChange: (e) => {
						l(e), o(1);
					},
					children: ct.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(a, {
						value: e,
						"aria-label": t,
						className: R,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? f.length : n.length - f.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			p.length ? null : /* @__PURE__ */ (0, $.jsx)(b, {
				size: "compact",
				icon: ze,
				title: "暂无符合条件的作品",
				actions: /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: () => {
						l("all"), o(1);
					},
					children: "查看全部"
				}),
				children: null
			}),
			/* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: p.slice(m.start, m.end).map(r)
			}),
			m.pages > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-want-pager": "",
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular tabular-nums text-text-secondary",
					children: `${(m.start + 1).toLocaleString()}–${m.end.toLocaleString()} / ${m.total.toLocaleString()} 条`
				}), /* @__PURE__ */ (0, $.jsx)(N, {
					label: `${t}分页`,
					page: m.page,
					pages: m.pages,
					onPage: o
				})]
			}) : null
		]
	});
}
function pt({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, c] = (0, Q.useState)(null), l = et(), u = rt({
		queryKey: W,
		queryFn: ({ signal: e }) => Oe(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => le({ code: n }, e), (e) => {
			t(e.created ? `已加入想要：${X(e.want)}` : `${X(e.want)} 已经在想要里`), a(""), Y();
		});
	}, f = (e) => {
		e.key === "Enter" && !_e(e.nativeEvent) && (e.preventDefault(), d());
	}, m = (e) => {
		l.run(`remove:${e.id}`, (t) => Ge([e.id], t), () => {
			t(`已移除：${X(e)}`), Y();
		});
	}, _ = (e) => {
		l.run(`reset:${e.id}`, (t) => Je([e.id], t), () => {
			t(`${X(e)} 回到待找`), Y();
		});
	}, v = u.data, x = (v?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), S = rt({
		queryKey: h,
		queryFn: ({ signal: e }) => ue(`${g}?limit=100`, e),
		enabled: x.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), C = S.data?.providers.filter((e) => e.configured) || [], w = C[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: me({
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
							children: /* @__PURE__ */ (0, $.jsx)(D, {
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
							...K(l.busy === "add"),
							onClick: d,
							children: "添加"
						})]
					}),
					l.error ? /* @__PURE__ */ (0, $.jsx)(j, {
						tone: "error",
						title: "这一次没有完成",
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				title: "想要清单读取失败",
				children: J(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取想要",
				dangerouslySetInnerHTML: { __html: Me("wants") }
			}) : null,
			v?.scraping ? /* @__PURE__ */ (0, $.jsx)(T, {
				role: "status",
				children: "正在给刚加入的番号取资料与封面。"
			}) : null,
			S.error ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				title: "下载配置未取得",
				children: J(S.error)
			}) : null,
			S.data && !C.length ? /* @__PURE__ */ (0, $.jsxs)(j, {
				tone: "neutral",
				children: ["尚未配置下载渠道。", /* @__PURE__ */ (0, $.jsx)("a", {
					href: "/settings/library?section=%E4%B8%8B%E8%BD%BD%E6%B8%A0%E9%81%93",
					children: "下载渠道设置"
				})]
			}) : null,
			S.data && !S.data.available ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "neutral",
				children: "云下载只在允许修改数据库的设备上可用。"
			}) : null,
			v && !x.length ? /* @__PURE__ */ (0, $.jsx)(b, {
				size: "compact",
				icon: ze,
				title: n ? "没有符合条件的作品" : "还没有想要的作品",
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: r,
					children: "清除搜索"
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(y, {
					target: "input[aria-label=\"番号\"]",
					children: "添加作品"
				}) : void 0,
				children: n ? "试试其他番号、女优或标题。" : "输入番号，添加想看的作品。"
			}) : null,
			M.map(([n, r]) => {
				let i = x.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(ft, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(dt, {
						want: n,
						readOnly: e,
						busy: l.busy,
						downloads: S.data,
						provider: w,
						toast: t,
						onReset: () => _(n),
						onRemove: () => m(n),
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
			/* @__PURE__ */ (0, $.jsx)(p, {
				prefill: o,
				close: () => c(null),
				receipt: t,
				provider: w
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function mt({ item: e }) {
	nt();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ (0, $.jsx)(H, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: fe(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: Ce("performer", t.name, t.id),
			"aria-label": `打开女优页：${q("performer", t.name, t.id)}`,
			...i
		}, t.name) : /* @__PURE__ */ (0, $.jsx)("span", {
			"data-media-avatar": "",
			style: r,
			title: q("performer", t.name),
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
var ht = (e) => ({
	...e,
	cover: e.has_cover ? ve(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
});
function gt({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a, onTag: l, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = e.performer_refs?.length ? e.performer_refs.map((e) => e.name).join("、") : e.performers, h = ye(e, t, n), g = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		onClick: (e) => {
			e.target.closest("a,button,input") || i(g);
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("a", {
				href: g,
				"aria-label": `查看 ${e.code} 详情`,
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(g));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default",
				children: h ? /* @__PURE__ */ (0, $.jsx)(o, {
					artwork: {
						kind: "cover",
						html: h
					},
					identity: ye(e, "small", n),
					relayout: (e) => Ve(e, t)
				}) : /* @__PURE__ */ (0, $.jsx)("span", {
					"data-media-nopic": "",
					children: "无封面"
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(mt, { item: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
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
									lang: Qe(e.title),
									children: e.title
								}) : "标题未取得"
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsxs)("a", {
									"data-media-who": "",
									href: Ce("performer", e.performer_refs[0].name),
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
						trailingIcon: se,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "作品来源"
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(s, {
						variant: "ghost",
						disabled: r || e.wanted || !!e.asset_id,
						...K(u),
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
var _t = {
	widths: F,
	visibility: P
};
function vt({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: Le(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true",
		children: Ie(e?.name || "", 1)
	});
}
function yt({ items: a, waiting: c, filters: l, studios: u, javImage: f, readOnly: p, navigate: m, onTag: h, onSort: g, wanting: v, onWant: y, onResource: b }) {
	let x = it("jav-releases", He, _t), S = He.filter((e) => e.required || x.visibility[e.id] !== !1), C = Object.entries(L).find(([, e]) => e === l.sort)?.[0], w = new Map(u.map((e) => [e.name, e])), T = (e) => (t) => {
		t.preventDefault(), m(`/works/${encodeURIComponent(e.code)}`);
	}, E = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = ye(t, "small", f);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: T(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(o, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => Ve(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", { children: "无封面" })
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || "标题未取得"}`,
							"aria-label": `查看 ${t.code} 详情`,
							onClick: T(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: Qe(t.title),
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
					/* @__PURE__ */ (0, $.jsx)(mt, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsx)("a", {
						"data-media-who": "",
						href: Ce("performer", n),
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
				children: [/* @__PURE__ */ (0, $.jsx)(vt, { studio: w.get(t.studio) }), /* @__PURE__ */ (0, $.jsx)("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": l.tag === e,
					onClick: () => h(l.tag === e ? "" : e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return Ae(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					variant: "ghost",
					disabled: p || t.wanted || !!t.asset_id,
					...K(v(t)),
					onClick: () => y(t),
					children: t.wanted ? "已想要" : "想要"
				}), /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					variant: "secondary",
					onClick: () => b(t),
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
					preferences: x,
					label: "新作列表"
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(_, {
			follow: !0,
			preferences: x,
			children: /* @__PURE__ */ (0, $.jsxs)(ie, {
				"aria-label": "新作列表",
				size: "sm",
				sortDescriptor: C ? {
					column: C,
					direction: l.dir === "asc" ? "ascending" : "descending"
				} : void 0,
				onSortChange: (e) => {
					let t = L[String(e.column)];
					t && g(t, e.direction === "ascending" ? "asc" : "desc");
				},
				children: [/* @__PURE__ */ (0, $.jsxs)(i, { children: [S.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
					id: e.id,
					isRowHeader: e.id === "name",
					allowsSorting: e.id in L,
					...x.columnProps(e.id),
					children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
						className: "flex items-center gap-0.5",
						children: [e.label, e.id in L ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-sort-indicator": !0,
							"data-direction": t || void 0,
							children: /* @__PURE__ */ (0, $.jsx)(d, {})
						}) : null]
					}), /* @__PURE__ */ (0, $.jsx)(ae, {
						preferences: x,
						id: e.id
					})] })
				}, e.id)), /* @__PURE__ */ (0, $.jsx)(t, {
					id: "remaining-space",
					"aria-label": "行空白区域",
					"data-table-space": "",
					width: x.spaceWidth,
					minWidth: 0
				})] }), /* @__PURE__ */ (0, $.jsx)(e, {
					renderEmptyState: () => "没有符合条件的新作",
					children: c ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [S.map((e) => /* @__PURE__ */ (0, $.jsx)(r, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: ge(e.id) } }) }, e.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, `skeleton-${t}`)) : a.map((e) => /* @__PURE__ */ (0, $.jsxs)(n, {
						id: String(e.id),
						"data-catalog-row": "",
						"data-release-row": "",
						children: [S.map((t) => /* @__PURE__ */ (0, $.jsx)(r, { children: E(t.id, e) }, t.id)), /* @__PURE__ */ (0, $.jsx)(r, { "data-table-space": "" })]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/jav-releases.tsx
var bt = `<div data-catalog-tier="performers" data-skeleton="tiers">${$e("performer")}</div><div data-catalog-tier="studios">${$e("studio")}</div>`, xt = (e) => `<span data-tier-initial>${we(ke(q("performer", e.name, e.id)))}</span>${Se({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: Te(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function St({ value: e }) {
	let t = Be(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: `口味 ${t.score}`,
		children: /* @__PURE__ */ (0, $.jsx)(f, {
			color: t.color,
			children: t.label
		})
	});
}
function Ct({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: Le(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : Ie(e.name, 2)
	});
}
function wt({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	nt();
	let [o, d] = (0, Q.useState)(() => Ue(location.search));
	(0, Q.useEffect)(() => {
		r !== o.q && (d((e) => ({
			...e,
			q: r,
			page: 1
		})), Z({ page: "" }));
	}, [r, o.q]);
	let f = (e, t) => {
		let n = o[e] === t ? "" : t;
		d((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Z({
			[e]: n,
			page: ""
		});
	}, p = (0, Q.useRef)(null), m = (e) => {
		d((t) => ({
			...t,
			page: e
		})), Z({ page: e > 1 ? String(e) : "" }), p.current?.scrollIntoView({ block: "start" });
	}, h = () => {
		d((e) => ({
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
	}, g = (e) => _(e, e === o.sort ? o.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc"), _ = (e, t) => {
		d((n) => ({
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
	}, v = () => {
		let e = Math.random().toString(36).slice(2, 10);
		d((t) => ({
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
		let e = [...p.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => at(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let y = de();
	(0, Q.useSyncExternalStore)(y.subscribe, y.version, y.version);
	let S = Ne(), T = tt(), E = he(je({
		active: !0,
		home: !1,
		portrait: !1
	})), D = (0, Q.useRef)(""), O = rt({
		queryKey: We(o),
		queryFn: ({ signal: e }) => De(o, e, D.current),
		placeholderData: Fe,
		retry: !1,
		refetchOnWindowFocus: !1,
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), k = O.data?.metadata_job, A = k?.status === "running", M = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		k?.job_id && (D.current = k.job_id);
	}, [k?.job_id]), (0, Q.useEffect)(() => {
		M.current && !A && O.refetch(), M.current = A;
	}, [A, O]);
	let P = et(), F = (e) => {
		P.run(String(e.id), (t) => le({ code: e.code }, t), () => {
			t("已加入想要"), Y(), O.refetch();
		});
	}, L = O.data, R = O.isPending, z = !!(o.performer || o.studio || o.tag || o.q), B = Math.max(1, Math.ceil((L?.total || 0) / 24));
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: p,
		"aria-label": "订阅新作",
		"aria-busy": R || O.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			R ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: bt }
			}) : null,
			L && (L.facets.performers.length || L.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [L.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": "按女优筛选",
					children: L.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": o.performer === e.name,
						title: `${q("performer", e.name, e.id)} · ${e.count} 部`,
						onClick: () => f("performer", e.name),
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: xt(e) }
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-name": "",
							children: q("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, L.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": "按厂牌筛选",
					children: L.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": o.studio === e.name,
						title: `${e.name} · ${e.count} 部`,
						onClick: () => f("studio", e.name),
						children: [
							/* @__PURE__ */ (0, $.jsx)(Ct, { studio: e }),
							e.name,
							/* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(x, {
				label: "新作筛选",
				topLabel: "新作标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: R,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: R ? { __html: Pe() } : void 0,
						children: R ? null : L?.facets.tags.map((e) => /* @__PURE__ */ (0, $.jsxs)(C, {
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
						children: R ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : z ? `${L?.total || 0} / ${L?.candidate_total || 0} 部` : `${L?.total || 0} 部`
					}),
					z ? /* @__PURE__ */ (0, $.jsx)(w, {
						onPress: h,
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(V, {
								onPress: v,
								busy: o.sort === "random" && O.isFetching
							}),
							T === "cards" ? /* @__PURE__ */ (0, $.jsx)(ne, {
								label: "JAV 卡片版式",
								value: S,
								options: ee,
								onChange: Ze
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(u, {}),
							/* @__PURE__ */ (0, $.jsx)(re, {
								sorts: I.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === o.sort,
									dir: o.dir
								})),
								onSort: (e) => g(e)
							})
						]
					})
				] })
			}),
			R && T === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取新作",
				dangerouslySetInnerHTML: { __html: Me("discover", S) }
			}) : null,
			O.error ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				title: "新作未取得",
				children: J(O.error)
			}) : null,
			A && k ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(oe, {
					label: `正在读取作品资料 · ${k.completed} / ${k.total} 部`,
					value: k.completed,
					total: k.total
				})
			}) : null,
			!R && !O.error && !L?.items.length ? /* @__PURE__ */ (0, $.jsx)(b, {
				icon: l,
				title: z ? "没有符合条件的新作" : "暂无未入库的新作",
				actions: z ? /* @__PURE__ */ (0, $.jsx)(s, {
					size: "small",
					onClick: h,
					children: "清除筛选"
				}) : /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: "添加订阅"
				}),
				children: z ? "清除筛选后查看全部新作。" : "订阅女优或厂牌后，还没入库的新作会出现在这里。"
			}) : null,
			P.error ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				children: P.error
			}) : null,
			T === "list" ? R || L?.items.length ? /* @__PURE__ */ (0, $.jsx)(yt, {
				items: L?.items || [],
				waiting: R,
				filters: o,
				studios: L?.facets.studios || [],
				javImage: y.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: (e) => f("tag", e || o.tag),
				onSort: _,
				wanting: (e) => P.busy === String(e.id),
				onWant: F,
				onResource: (e) => n(ht(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: te,
				style: { "--card-ratio": E },
				children: (L?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(gt, {
					item: t,
					layout: S,
					javImage: y.value.javImage,
					readOnly: e,
					navigate: i,
					tag: o.tag,
					onTag: (e) => f("tag", e || o.tag),
					wanting: P.busy === String(t.id),
					onWant: () => F(t),
					onResource: () => n(ht(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ (0, $.jsx)(St, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ (0, $.jsx)(N, {
					page: o.page,
					pages: B,
					onPage: m,
					label: "新作分页"
				})
			})
		]
	});
}
// src/react/jav/jav-page.tsx
var Tt = Xe("x"), Et = Xe("refresh-cw"), Dt = {
	releases: "筛选新作",
	discover: "筛选推荐",
	wants: "筛选想要"
};
function Ot({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex w-full flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, $.jsx)(O, {
				tab: e,
				navigate: n,
				find: () => a({}),
				search: /* @__PURE__ */ (0, $.jsx)(E, {
					label: Dt[e] || "筛选",
					value: o,
					onQuery: c
				})
			}),
			e === "releases" ? /* @__PURE__ */ (0, $.jsx)(wt, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: o.trim(),
				navigate: n,
				clearText: () => c("")
			}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(kt, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: o.trim(),
				navigate: n,
				clearText: () => c("")
			}) : /* @__PURE__ */ (0, $.jsx)(pt, {
				readOnly: t,
				toast: r,
				query: o.trim(),
				clearQuery: () => c("")
			}),
			/* @__PURE__ */ (0, $.jsx)(p, {
				prefill: i,
				close: () => a(null),
				receipt: r
			})
		]
	});
}
function kt({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [l, u] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, p] = (0, Q.useState)(() => o.get("tag") || ""), [h, g] = (0, Q.useState)(() => m.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [_, y] = (0, Q.useState)(() => o.get("dir") === "asc"), T = (e) => {
		u(e), Z({ scope: e === "external" ? "" : e });
	}, E = (e) => {
		p(e), Z({ tag: e });
	}, D = (e) => {
		g(e), Z({ sort: e === "taste" ? "" : e });
	}, O = (e) => {
		y(e), Z({ dir: e ? "asc" : "" });
	}, A = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...A.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => at(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let M = de();
	(0, Q.useSyncExternalStore)(M.subscribe, M.version, M.version);
	let N = Ne(), P = he(je({
		active: !0,
		home: !1,
		portrait: !1
	})), F = (0, Q.useRef)({}), I = (0, Q.useRef)(!1), L = (0, Q.useRef)(!1), R = _ ? "asc" : "desc", z = rt({
		queryKey: be(l, h, R),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => {
			let t = I.current, n = L.current;
			return I.current = !1, L.current = !1, Ee(l, e, {
				sort: h,
				direction: R,
				jobId: t ? void 0 : F.current[l],
				refreshMetadata: t,
				cancelMetadata: n
			});
		},
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), B = z.data?.metadata_job;
	(0, Q.useEffect)(() => {
		B?.job_id && (F.current[l] = B.job_id);
	}, [l, B?.job_id]);
	let V = et(), H = et(), ie = (e) => {
		H.run(e, async () => (L.current = e === "stop", I.current = e !== "stop", z.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		})), () => {});
	}, U = z.data?.items || [], ae = [...new Set(U.flatMap((e) => e.tags || []))], W = U.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), G = z.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: A,
		"aria-label": "为你推荐",
		"aria-busy": G,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(x, {
				label: "发现筛选与排序",
				topLabel: "发现范围与标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: G,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-catalog-views": "",
						children: [[["external", "库外发现"], ["library", "馆藏探索"]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(C, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: l === e,
							onPress: () => {
								T(e), E("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: G ? { __html: Pe() } : void 0,
						children: G ? null : ae.map((e) => /* @__PURE__ */ (0, $.jsxs)(C, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => E(d === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: U.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: G ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : `${W.length} 部`
					}),
					/* @__PURE__ */ (0, $.jsx)(k, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ (0, $.jsx)(w, {
						onPress: () => {
							E(""), a();
						},
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							l === "external" ? /* @__PURE__ */ (0, $.jsx)(S, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: B?.status === "running" ? "停止读取" : "更新资料",
								disabled: G,
								"data-skeleton-action": G ? "" : void 0,
								busy: !!H.busy,
								icon: B?.status === "running" ? Tt : Et,
								onPress: () => ie(B?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(ne, {
								label: "JAV 卡片版式",
								value: N,
								options: ee,
								onChange: Ze
							}),
							/* @__PURE__ */ (0, $.jsx)(re, {
								sorts: m.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === h,
									dir: R
								})),
								onSort: (e) => {
									e === h ? O(!_) : (D(e), O(e === "code"));
								}
							})
						]
					})
				] })
			}),
			G ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取推荐",
				dangerouslySetInnerHTML: { __html: Me("discover", N) }
			}) : null,
			z.error ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				title: "推荐未取得",
				children: J(z.error)
			}) : null,
			l === "external" && B?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(oe, {
					label: `正在读取作品资料 · ${B.completed} / ${B.total} 部`,
					value: B.completed,
					total: B.total
				})
			}) : null,
			B && B.status !== "running" && (B.status !== "complete" || B.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(s, {
					variant: "secondary",
					...K(H.busy === "retry"),
					"aria-label": "立即重试读取作品资料",
					onClick: () => ie("retry"),
					children: "立即重试"
				}),
				children: B.message || `作品资料 ${B.completed} / ${B.total} 部`
			}) : null,
			H.error ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				children: H.error
			}) : null,
			!G && !z.error && !W.length ? /* @__PURE__ */ (0, $.jsx)(b, {
				icon: v,
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
						a(), p(""), Z({
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
			V.error ? /* @__PURE__ */ (0, $.jsx)(j, {
				tone: "error",
				children: V.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: te,
				style: { "--card-ratio": P },
				children: W.map((r) => {
					let a = Be(r.taste_score ?? r.score), o = [
						a.label,
						`口味 ${xe(r.taste_score ?? r.score)}`,
						z.data?.ranking_method === "mmr" && r.ranking_score != null ? `排序 ${xe(r.ranking_score)}` : "",
						r.source_score == null ? "" : `来源评分 ${r.source_score.toFixed(1)} / 5`,
						...r.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(gt, {
						item: r,
						layout: N,
						javImage: M.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: E,
						wanting: V.busy === String(r.id),
						onWant: () => {
							V.run(String(r.id), (e) => le({ code: r.code }, e), () => {
								t("已加入想要"), Y(), z.refetch();
							});
						},
						onResource: () => n(ht(r)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": `推荐分 ${a.score}，${a.label}`,
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(f, {
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
export { Ot as JavPage };

//# debugId=ed16b1eb-6616-4023-8b32-d3b319416b68