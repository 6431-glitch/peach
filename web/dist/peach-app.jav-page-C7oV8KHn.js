(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e19604f0-dfdb-4cf0-8f2f-6350c8940e56", e._sentryDebugIdIdentifier = "sentry-dbid-e19604f0-dfdb-4cf0-8f2f-6350c8940e56");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, ArtSlot as t, Button as n, ButtonLink as r, Bx as i, Chip as a, CloudDownloadDialog as o, DISCOVERY_SORTS as s, DOWNLOADS_KEY as c, DOWNLOADS_URL as l, E3 as u, EmptyFocusButton as d, EmptyState as f, FilterGlassRows as p, FilterIconButton as m, FilterPill as h, GlassPill as g, Help as _, IndexSearch as v, Input as y, JAV_LAYOUTS as ee, JAV_RECOMMENDATION_GRID as te, JavHeader as b, LibraryShortcuts as x, M6 as S, Note as C, PHASES as ne, Pagination as w, RELEASE_SORTS as T, SEGMENT as E, SEGMENTED_TRACK as D, SegmentedRadioGroup as O, Segments as re, Shuffle as ie, SortKeys as ae, SourceAvatar as k, TaskProgress as oe, WANTS_KEY as A, WantMagnets as j, Wt as M, __toESM as N, addWant as se, apiGet as P, appSettingsStore as ce, avatarInner as F, busyProps as I, cachedMagnetStates as L, cardClass as R, cardRatio as le, coverUrl as z, discoveryArtwork as B, discoveryKey as ue, discoveryScore as de, entityDisplayName as V, entityFaceImg as H, entityPath as U, errorMessage as W, esc as fe, facePos as G, fetchDiscoveries as pe, fetchReleases as K, fetchWants as me, firstGrapheme as he, gridLayout as ge, invalidateWants as q, javContentSkeleton as _e, javLayout as ve, javTagSkeleton as ye, keepPreviousData as be, leadingGraphemes as xe, logoUrl as Se, pageWindow as Ce, qE as we, recommendationScore as Te, relayoutCovers as Ee, releaseFilters as De, releaseKey as Oe, removeWants as ke, require_jsx_runtime as Ae, require_react as je, resetWants as Me, searchNote as Ne, spriteGlyph as Pe, storeJavLayout as Fe, textLang as Ie, tierPlaceholdersHtml as Le, useAction as J, useEntityNames as Re, useQuery as Y, wantName as X, wireHorizontalScroller as ze, writeJavQuery as Z } from "./peach-app.js";
import { ErrorLine as Be } from "./peach-app.source-view-DalWfDkm.js";
import "./peach-app.source-list-ri5fRK2E.js";
// src/react/wants/want-list.tsx
var Q = /* @__PURE__ */ N(je(), 1), $ = Ae(), Ve = {
	code: "手动添加",
	feed: "订阅新作",
	follow: "关注"
}, He = [
	["all", "全部"],
	["available", "有磁链"],
	["missing", "没磁链"]
], Ue = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	Ve[e.origin]
].filter(Boolean).join(" · ");
function We({ want: e }) {
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
function Ge({ want: e, readOnly: t, busy: i, onReset: a, onRemove: o, onCloudDownload: s, downloads: c, provider: l, toast: u }) {
	let [d, f] = (0, Q.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, $.jsxs)("li", {
		"data-want-id": e.id,
		className: R({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)(We, { want: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
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
					Ue(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: Ue(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, $.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: Ne(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(Be, {
						text: e.scrape_error,
						prefix: "资料未取得：",
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ (0, $.jsx)(r, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: M,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "来源页"
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(n, {
								variant: "secondary",
								size: "small",
								leadingIcon: S,
								disabled: t,
								...I(i === `remove:${e.id}`),
								onClick: o,
								children: "移除"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(n, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...I(i === `reset:${e.id}`),
								onClick: a,
								children: "重新查找"
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(n, {
								variant: "secondary",
								size: "small",
								onClick: s,
								children: "查找资源"
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(j, {
			want: e,
			readOnly: t,
			downloads: c,
			provider: l,
			toast: u,
			onSource: f
		}) : null]
	});
}
function Ke({ phase: t, label: r, rows: i, row: a }) {
	let [o, s] = (0, Q.useState)(1), [c, l] = (0, Q.useState)("all"), u = L(i), d = (e) => e.has_magnets ?? u.get(e.code || "") ?? !1, p = i.filter(d), m = t !== "searching" || c === "all" ? i : i.filter((e) => d(e) === (c === "available")), h = Ce(m.length, 20, o);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": r,
		"data-want-phase": t,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsxs)("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [r, /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: i.length.toLocaleString()
					})]
				}), t === "searching" ? /* @__PURE__ */ (0, $.jsx)(O, {
					name: "want-magnet-filter",
					"aria-label": "待找磁链筛选",
					orientation: "horizontal",
					value: c,
					className: D,
					onChange: (e) => {
						l(e), s(1);
					},
					children: He.map(([t, n]) => /* @__PURE__ */ (0, $.jsxs)(e, {
						value: t,
						"aria-label": n,
						className: E,
						children: [n, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (t === "all" ? i.length : t === "available" ? p.length : i.length - p.length).toLocaleString()
						})]
					}, t))
				}) : null]
			}),
			m.length ? null : /* @__PURE__ */ (0, $.jsx)(f, {
				size: "compact",
				icon: we,
				title: "暂无符合条件的作品",
				actions: /* @__PURE__ */ (0, $.jsx)(n, {
					size: "small",
					onClick: () => {
						l("all"), s(1);
					},
					children: "查看全部"
				}),
				children: null
			}),
			/* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: m.slice(h.start, h.end).map(a)
			}),
			h.pages > 1 ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-want-pager": "",
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular tabular-nums text-text-secondary",
					children: `${(h.start + 1).toLocaleString()}–${h.end.toLocaleString()} / ${h.total.toLocaleString()} 条`
				}), /* @__PURE__ */ (0, $.jsx)(w, {
					label: `${r}分页`,
					page: h.page,
					pages: h.pages,
					onPage: s
				})]
			}) : null
		]
	});
}
function qe({ readOnly: e, toast: t, query: r = "", clearQuery: i }) {
	let [a, s] = (0, Q.useState)(""), [u, p] = (0, Q.useState)(null), m = J(), h = Y({
		queryKey: A,
		queryFn: ({ signal: e }) => me(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), g = () => {
		let n = a.trim();
		n && !e && m.run("add", (e) => se({ code: n }, e), (e) => {
			t(e.created ? `已加入想要：${X(e.want)}` : `${X(e.want)} 已经在想要里`), s(""), q();
		});
	}, v = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), g());
	}, ee = (e) => {
		m.run(`remove:${e.id}`, (t) => ke([e.id], t), () => {
			t(`已移除：${X(e)}`), q();
		});
	}, te = (e) => {
		m.run(`reset:${e.id}`, (t) => Me([e.id], t), () => {
			t(`${X(e)} 回到待找`), q();
		});
	}, b = h.data, x = (b?.items || []).filter((e) => !r || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase())), S = Y({
		queryKey: c,
		queryFn: ({ signal: e }) => P(`${l}?limit=100`, e),
		enabled: x.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), w = S.data?.providers.filter((e) => e.configured) || [], T = w[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": h.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: R({
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
							children: /* @__PURE__ */ (0, $.jsx)(y, {
								"aria-label": "番号",
								placeholder: "输入番号，例如 SSIS-950",
								value: a,
								isDisabled: e,
								onChange: s,
								onKeyDown: v
							})
						}), /* @__PURE__ */ (0, $.jsx)(n, {
							variant: "primary",
							disabled: e || !a.trim(),
							...I(m.busy === "add"),
							onClick: g,
							children: "添加"
						})]
					}),
					m.error ? /* @__PURE__ */ (0, $.jsx)(C, {
						tone: "error",
						title: "这一次没有完成",
						children: m.error
					}) : null
				]
			}),
			h.error ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				title: "想要清单读取失败",
				children: W(h.error)
			}) : null,
			h.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取想要",
				dangerouslySetInnerHTML: { __html: _e("wants") }
			}) : null,
			b?.scraping ? /* @__PURE__ */ (0, $.jsx)(_, {
				role: "status",
				children: "正在给刚加入的番号取资料与封面。"
			}) : null,
			S.error ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				title: "下载配置未取得",
				children: W(S.error)
			}) : null,
			S.data && !w.length ? /* @__PURE__ */ (0, $.jsxs)(C, {
				tone: "neutral",
				children: ["尚未配置下载渠道。", /* @__PURE__ */ (0, $.jsx)("a", {
					href: "/settings/library?section=%E4%B8%8B%E8%BD%BD%E6%B8%A0%E9%81%93",
					children: "下载渠道设置"
				})]
			}) : null,
			S.data && !S.data.available ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "neutral",
				children: "云下载只在允许修改数据库的设备上可用。"
			}) : null,
			b && !x.length ? /* @__PURE__ */ (0, $.jsx)(f, {
				size: "compact",
				icon: we,
				title: r ? "没有符合条件的作品" : "还没有想要的作品",
				actions: r && i ? /* @__PURE__ */ (0, $.jsx)(n, {
					size: "small",
					onClick: i,
					children: "清除搜索"
				}) : !r && !e ? /* @__PURE__ */ (0, $.jsx)(d, {
					target: "input[aria-label=\"番号\"]",
					children: "添加作品"
				}) : void 0,
				children: r ? "试试其他番号、女优或标题。" : "输入番号，添加想看的作品。"
			}) : null,
			ne.map(([n, r]) => {
				let i = x.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(Ke, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(Ge, {
						want: n,
						readOnly: e,
						busy: m.busy,
						downloads: S.data,
						provider: T,
						toast: t,
						onReset: () => te(n),
						onRemove: () => ee(n),
						onCloudDownload: () => p({
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
			/* @__PURE__ */ (0, $.jsx)(o, {
				prefill: u,
				close: () => p(null),
				receipt: t,
				provider: T
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function Je({ item: e }) {
	Re();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ (0, $.jsx)(k, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: F(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: U("performer", t.name, t.id),
			"aria-label": `打开女优页：${V("performer", t.name, t.id)}`,
			...i
		}, t.name) : /* @__PURE__ */ (0, $.jsx)("span", {
			"data-media-avatar": "",
			style: r,
			title: V("performer", t.name),
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
var Ye = (e) => ({
	...e,
	cover: e.has_cover ? z(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
});
function Xe({ item: e, layout: i, javImage: a, readOnly: o, navigate: s, tag: c, onTag: l, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = e.performer_refs?.length ? e.performer_refs.map((e) => e.name).join("、") : e.performers, h = B(e, i, a), g = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		onClick: (e) => {
			e.target.closest("a,button,input") || s(g);
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("a", {
				href: g,
				"aria-label": `查看 ${e.code} 详情`,
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), s(g));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default",
				children: h ? /* @__PURE__ */ (0, $.jsx)(t, {
					artwork: {
						kind: "cover",
						html: h
					},
					identity: B(e, "small", a),
					relayout: (e) => Ee(e, i)
				}) : /* @__PURE__ */ (0, $.jsx)("span", {
					"data-media-nopic": "",
					children: "无封面"
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(Je, { item: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
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
									lang: Ie(e.title),
									children: e.title
								}) : "标题未取得"
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsxs)("a", {
									"data-media-who": "",
									href: U("performer", e.performer_refs[0].name),
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
								"aria-pressed": c === e,
								onClick: () => l(c === e ? "" : e),
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
					e.link ? /* @__PURE__ */ (0, $.jsx)(r, {
						"data-button-link": "",
						variant: "secondary",
						trailingIcon: M,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "作品来源"
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(n, {
						variant: "ghost",
						disabled: o || e.wanted || !!e.asset_id,
						...I(u),
						onClick: d,
						children: e.asset_id ? "已入库" : e.wanted ? "已加入想要" : "想要"
					}),
					/* @__PURE__ */ (0, $.jsx)(n, {
						variant: "secondary",
						onClick: f,
						children: "查找资源"
					})
				]
			})
		]
	});
}
// src/react/jav/jav-releases.tsx
var Ze = `<div data-catalog-tier="performers" data-skeleton="tiers">${Le("performer")}</div><div data-catalog-tier="studios">${Le("studio")}</div>`, Qe = (e) => `<span data-tier-initial>${fe(he(V("performer", e.name, e.id)))}</span>${H({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: G(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function $e({ value: e }) {
	let t = Te(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: `口味 ${t.score}`,
		children: /* @__PURE__ */ (0, $.jsx)(a, {
			color: t.color,
			children: t.label
		})
	});
}
function et({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: Se(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : xe(e.name, 2)
	});
}
function tt({ readOnly: e, receipt: t, resource: a, query: o, navigate: s, clearText: c }) {
	Re();
	let [l, u] = (0, Q.useState)(() => De(location.search));
	(0, Q.useEffect)(() => {
		o !== l.q && (u((e) => ({
			...e,
			q: o,
			page: 1
		})), Z({ page: "" }));
	}, [o, l.q]);
	let d = (e, t) => {
		let n = l[e] === t ? "" : t;
		u((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Z({
			[e]: n,
			page: ""
		});
	}, m = (0, Q.useRef)(null), _ = (e) => {
		u((t) => ({
			...t,
			page: e
		})), Z({ page: e > 1 ? String(e) : "" }), m.current?.scrollIntoView({ block: "start" });
	}, v = () => {
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
		}), c();
	}, y = (e) => {
		let t = e === l.sort ? l.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc";
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
		let e = [...m.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => ze(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let x = ce();
	(0, Q.useSyncExternalStore)(x.subscribe, x.version, x.version);
	let S = ve(), ne = le(ge({
		active: !0,
		home: !1,
		portrait: !1
	})), E = (0, Q.useRef)(""), D = Y({
		queryKey: Oe(l),
		queryFn: ({ signal: e }) => K(l, e, E.current),
		placeholderData: be,
		retry: !1,
		refetchOnWindowFocus: !1,
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), O = D.data?.metadata_job, k = O?.status === "running", A = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		O?.job_id && (E.current = O.job_id);
	}, [O?.job_id]), (0, Q.useEffect)(() => {
		A.current && !k && D.refetch(), A.current = k;
	}, [k, D]);
	let j = J(), M = D.data, N = D.isPending, P = !!(l.performer || l.studio || l.tag || l.q), F = Math.max(1, Math.ceil((M?.total || 0) / 24));
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: m,
		"aria-label": "订阅新作",
		"aria-busy": N || D.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			N ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: Ze }
			}) : null,
			M && (M.facets.performers.length || M.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [M.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": "按女优筛选",
					children: M.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": l.performer === e.name,
						title: `${V("performer", e.name, e.id)} · ${e.count} 部`,
						onClick: () => d("performer", e.name),
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: Qe(e) }
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-name": "",
							children: V("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, M.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": "按厂牌筛选",
					children: M.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": l.studio === e.name,
						title: `${e.name} · ${e.count} 部`,
						onClick: () => d("studio", e.name),
						children: [
							/* @__PURE__ */ (0, $.jsx)(et, { studio: e }),
							e.name,
							/* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(p, {
				label: "新作筛选",
				topLabel: "新作标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: N,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: N ? { __html: ye() } : void 0,
						children: N ? null : M?.facets.tags.map((e) => /* @__PURE__ */ (0, $.jsxs)(h, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: l.tag === e.name,
							onPress: () => d("tag", e.name),
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
						children: N ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : P ? `${M?.total || 0} / ${M?.candidate_total || 0} 部` : `${M?.total || 0} 部`
					}),
					P ? /* @__PURE__ */ (0, $.jsx)(g, {
						onPress: v,
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(ie, {
								onPress: b,
								busy: l.sort === "random" && D.isFetching
							}),
							/* @__PURE__ */ (0, $.jsx)(re, {
								label: "JAV 卡片版式",
								value: S,
								options: ee,
								onChange: Fe
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								sorts: T.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === l.sort,
									dir: l.dir
								})),
								onSort: (e) => y(e)
							})
						]
					})
				] })
			}),
			N ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取新作",
				dangerouslySetInnerHTML: { __html: _e("discover", S) }
			}) : null,
			D.error ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				title: "新作未取得",
				children: W(D.error)
			}) : null,
			k && O ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(oe, {
					label: `正在读取作品资料 · ${O.completed} / ${O.total} 部`,
					value: O.completed,
					total: O.total
				})
			}) : null,
			!N && !D.error && !M?.items.length ? /* @__PURE__ */ (0, $.jsx)(f, {
				icon: i,
				title: P ? "没有符合条件的新作" : "暂无未入库的新作",
				actions: P ? /* @__PURE__ */ (0, $.jsx)(n, {
					size: "small",
					onClick: v,
					children: "清除筛选"
				}) : /* @__PURE__ */ (0, $.jsx)(r, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: "添加订阅"
				}),
				children: P ? "清除筛选后查看全部新作。" : "订阅女优或厂牌后，还没入库的新作会出现在这里。"
			}) : null,
			j.error ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				children: j.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: te,
				style: { "--card-ratio": ne },
				children: (M?.items || []).map((n) => /* @__PURE__ */ (0, $.jsx)(Xe, {
					item: n,
					layout: S,
					javImage: x.value.javImage,
					readOnly: e,
					navigate: s,
					tag: l.tag,
					onTag: (e) => d("tag", e || l.tag),
					wanting: j.busy === String(n.id),
					onWant: () => {
						j.run(String(n.id), (e) => se({ code: n.code }, e), () => {
							t("已加入想要"), q(), D.refetch();
						});
					},
					onResource: () => a(Ye(n)),
					badge: l.sort === "taste" ? /* @__PURE__ */ (0, $.jsx)($e, { value: n.taste_score }) : void 0
				}, n.id))
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ (0, $.jsx)(w, {
					page: l.page,
					pages: F,
					onPage: _,
					label: "新作分页"
				})
			})
		]
	});
}
// src/react/jav/jav-page.tsx
var nt = Pe("x"), rt = Pe("refresh-cw"), it = {
	releases: "筛选新作",
	discover: "筛选推荐",
	wants: "筛选想要"
};
function at({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [s, c] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), l = (e) => {
		c(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex w-full flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, $.jsx)(b, {
				tab: e,
				navigate: n,
				find: () => a({}),
				search: /* @__PURE__ */ (0, $.jsx)(v, {
					label: it[e] || "筛选",
					value: s,
					onQuery: l
				})
			}),
			e === "releases" ? /* @__PURE__ */ (0, $.jsx)(tt, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: s.trim(),
				navigate: n,
				clearText: () => l("")
			}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(ot, {
				readOnly: t,
				receipt: r,
				resource: a,
				query: s.trim(),
				navigate: n,
				clearText: () => l("")
			}) : /* @__PURE__ */ (0, $.jsx)(qe, {
				readOnly: t,
				toast: r,
				query: s.trim(),
				clearQuery: () => l("")
			}),
			/* @__PURE__ */ (0, $.jsx)(o, {
				prefill: i,
				close: () => a(null),
				receipt: r
			})
		]
	});
}
function ot({ readOnly: e, receipt: t, resource: i, query: o, navigate: c, clearText: l }) {
	let d = new URLSearchParams(location.search), [_, v] = (0, Q.useState)(() => d.get("scope") === "library" ? "library" : "external"), [y, b] = (0, Q.useState)(() => d.get("tag") || ""), [S, ne] = (0, Q.useState)(() => s.some(([e]) => e === d.get("sort")) ? d.get("sort") : "taste"), [w, T] = (0, Q.useState)(() => d.get("dir") === "asc"), E = (e) => {
		v(e), Z({ scope: e === "external" ? "" : e });
	}, D = (e) => {
		b(e), Z({ tag: e });
	}, O = (e) => {
		ne(e), Z({ sort: e === "taste" ? "" : e });
	}, ie = (e) => {
		T(e), Z({ dir: e ? "asc" : "" });
	}, k = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...k.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => ze(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let A = ce();
	(0, Q.useSyncExternalStore)(A.subscribe, A.version, A.version);
	let j = ve(), M = le(ge({
		active: !0,
		home: !1,
		portrait: !1
	})), N = (0, Q.useRef)({}), P = (0, Q.useRef)(!1), F = (0, Q.useRef)(!1), L = w ? "asc" : "desc", R = Y({
		queryKey: ue(_, S, L),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => {
			let t = P.current, n = F.current;
			return P.current = !1, F.current = !1, pe(_, e, {
				sort: S,
				direction: L,
				jobId: t ? void 0 : N.current[_],
				refreshMetadata: t,
				cancelMetadata: n
			});
		},
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), z = R.data?.metadata_job;
	(0, Q.useEffect)(() => {
		z?.job_id && (N.current[_] = z.job_id);
	}, [_, z?.job_id]);
	let B = J(), V = J(), H = (e) => {
		V.run(e, async () => (F.current = e === "stop", P.current = e !== "stop", R.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		})), () => {});
	}, U = R.data?.items || [], fe = [...new Set(U.flatMap((e) => e.tags || []))], G = U.filter((e) => (!y || e.tags?.includes(y)) && (!o || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(o.toLocaleLowerCase()))), K = R.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: k,
		"aria-label": "为你推荐",
		"aria-busy": K,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(p, {
				label: "发现筛选与排序",
				topLabel: "发现范围与标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: K,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-catalog-views": "",
						children: [[["external", "库外发现"], ["library", "馆藏探索"]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(h, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: _ === e,
							onPress: () => {
								E(e), D("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: K ? { __html: ye() } : void 0,
						children: K ? null : fe.map((e) => /* @__PURE__ */ (0, $.jsxs)(h, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: y === e,
							onPress: () => D(y === e ? "" : e),
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
						children: K ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : `${G.length} 部`
					}),
					/* @__PURE__ */ (0, $.jsx)(x, { currentHref: () => location.pathname + location.search }),
					o || y ? /* @__PURE__ */ (0, $.jsx)(g, {
						onPress: () => {
							D(""), l();
						},
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							_ === "external" ? /* @__PURE__ */ (0, $.jsx)(m, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: z?.status === "running" ? "停止读取" : "更新资料",
								disabled: K,
								"data-skeleton-action": K ? "" : void 0,
								busy: !!V.busy,
								icon: z?.status === "running" ? nt : rt,
								onPress: () => H(z?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(re, {
								label: "JAV 卡片版式",
								value: j,
								options: ee,
								onChange: Fe
							}),
							/* @__PURE__ */ (0, $.jsx)(ae, {
								sorts: s.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === S,
									dir: L
								})),
								onSort: (e) => {
									e === S ? ie(!w) : (O(e), ie(e === "code"));
								}
							})
						]
					})
				] })
			}),
			K ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取推荐",
				dangerouslySetInnerHTML: { __html: _e("discover", j) }
			}) : null,
			R.error ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				title: "推荐未取得",
				children: W(R.error)
			}) : null,
			_ === "external" && z?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(oe, {
					embedded: !0,
					label: `正在读取作品资料 · ${z.completed} / ${z.total} 部`,
					value: z.completed,
					total: z.total
				})
			}) : null,
			z && z.status !== "running" && (z.status !== "complete" || z.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(n, {
					variant: "secondary",
					...I(V.busy === "retry"),
					"aria-label": "立即重试读取作品资料",
					onClick: () => H("retry"),
					children: "立即重试"
				}),
				children: z.message || `作品资料 ${z.completed} / ${z.total} 部`
			}) : null,
			V.error ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				children: V.error
			}) : null,
			!K && !R.error && !G.length ? /* @__PURE__ */ (0, $.jsx)(f, {
				icon: u,
				title: o || y ? "没有符合条件的推荐" : "暂无匹配口味的作品",
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(r, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: "查看口味"
				}), o || y ? /* @__PURE__ */ (0, $.jsx)(n, {
					variant: "primary",
					size: "small",
					onClick: () => {
						l(), b(""), Z({
							q: "",
							tag: ""
						});
					},
					children: "清除筛选"
				}) : _ === "library" ? /* @__PURE__ */ (0, $.jsx)(r, {
					variant: "primary",
					size: "small",
					href: "/",
					children: "浏览馆藏"
				}) : /* @__PURE__ */ (0, $.jsx)(n, {
					variant: "primary",
					size: "small",
					onClick: () => i({}),
					children: "查找作品"
				})] }),
				children: o || y ? "清除筛选后查看其他作品。" : _ === "library" ? "观看或标记作品后，可以探索少看的馆藏。" : "可以查找番号，或更新关注来源。"
			}) : null,
			B.error ? /* @__PURE__ */ (0, $.jsx)(C, {
				tone: "error",
				children: B.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: te,
				style: { "--card-ratio": M },
				children: G.map((n) => {
					let r = Te(n.taste_score ?? n.score), o = [
						r.label,
						`口味 ${de(n.taste_score ?? n.score)}`,
						R.data?.ranking_method === "mmr" && n.ranking_score != null ? `排序 ${de(n.ranking_score)}` : "",
						n.source_score == null ? "" : `来源评分 ${n.source_score.toFixed(1)} / 5`,
						...n.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(Xe, {
						item: n,
						layout: j,
						javImage: A.value.javImage,
						readOnly: e,
						navigate: c,
						tag: y,
						onTag: D,
						wanting: B.busy === String(n.id),
						onWant: () => {
							B.run(String(n.id), (e) => se({ code: n.code }, e), () => {
								t("已加入想要"), q(), R.refetch();
							});
						},
						onResource: () => i(Ye(n)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": `推荐分 ${r.score}，${r.label}`,
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(a, {
								color: r.color,
								children: r.label
							})
						})
					}, n.id);
				})
			})
		]
	});
}
export { at as JavPage };

//# debugId=e19604f0-dfdb-4cf0-8f2f-6350c8940e56