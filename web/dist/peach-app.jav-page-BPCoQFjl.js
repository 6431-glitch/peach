(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a17dcb78-9d70-4e44-aad0-9e8a0b569268", e._sentryDebugIdIdentifier = "sentry-dbid-a17dcb78-9d70-4e44-aad0-9e8a0b569268");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, ArtSlot as t, Button as n, ButtonLink as r, Chip as i, CloudDownloadDialog as a, DISCOVERY_SORTS as o, DOWNLOADS_KEY as s, DOWNLOADS_URL as c, E3 as l, EmptyFocusButton as u, EmptyState as d, FilterGlassRows as f, FilterIconButton as p, FilterPill as m, GlassPill as h, Help as g, Input as _, JAV_LAYOUTS as v, JAV_RECOMMENDATION_GRID as ee, JavHeader as y, LibraryShortcuts as te, M6 as b, Note as x, PHASES as S, Pagination as C, SEGMENT as w, SEGMENTED_TRACK as T, SegmentedRadioGroup as E, Segments as ne, SortKeys as re, SourceAvatar as ie, TaskProgress as ae, WANTS_KEY as oe, WantMagnets as D, Wt as se, __toESM as ce, addWant as le, apiGet as O, appSettingsStore as ue, avatarInner as k, busyProps as A, cachedMagnetStates as j, cardClass as M, cardRatio as de, coverUrl as fe, discoveryArtwork as pe, discoveryKey as me, discoveryScore as he, entityDisplayName as N, entityPath as ge, errorMessage as P, fetchDiscoveries as _e, fetchWants as F, gridLayout as ve, import_jsx_runtime as ye, invalidateWants as I, javContentSkeleton as be, javLayout as xe, javTagSkeleton as Se, jsx as L, jsxs as R, pageWindow as z, peachHistory$1 as B, qE as V, recommendationScore as Ce, relayoutCovers as we, removeWants as H, require_react as U, resetWants as W, searchNote as G, shellNavigate as K, spriteGlyph as q, storeJavLayout as Te, textLang as Ee, useAction as J, useEntityNames as De, useQuery as Y, wantName as X, wireHorizontalScroller as Oe } from "./peach-app.js";
import { ErrorLine as Z } from "./peach-app.source-view-CRZESleF.js";
import "./peach-app.source-list-Dg_PaGs6.js";
// src/react/jav/discovery-faces.tsx
var Q = /* @__PURE__ */ ce(U(), 1);
function ke({ item: e }) {
	De();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ L(ie, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: k(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ L("a", {
			"data-media-avatar": "",
			style: r,
			href: ge("performer", t.name, t.id),
			"aria-label": `打开女优页：${N("performer", t.name, t.id)}`,
			...i
		}, t.name) : /* @__PURE__ */ L("span", {
			"data-media-avatar": "",
			style: r,
			title: N("performer", t.name),
			...i
		}, t.name);
	});
	return t.length > 1 ? /* @__PURE__ */ L("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": Math.min(5, t.length) },
		children: n
	}) : n[0] || null;
}
// src/react/wants/want-list.tsx
var Ae = {
	code: "手动添加",
	feed: "订阅新作",
	follow: "关注"
}, je = [
	["all", "全部"],
	["available", "有磁链"],
	["missing", "没磁链"]
], Me = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	Ae[e.origin]
].filter(Boolean).join(" · ");
function Ne({ want: e }) {
	return /* @__PURE__ */ R("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ L("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: "无封面"
		}), e.cover ? /* @__PURE__ */ L("img", {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function Pe({ want: e, readOnly: t, busy: i, onReset: a, onRemove: o, onCloudDownload: s, downloads: c, provider: l, toast: u }) {
	let [d, f] = (0, Q.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ R("li", {
		"data-want-id": e.id,
		className: M({
			bordered: "soft",
			className: "flex flex-col gap-4 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ R("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ L(Ne, { want: e }), /* @__PURE__ */ R("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ R("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ L("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: X(e)
						}), e.code && e.title ? /* @__PURE__ */ L("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					Me(e) ? /* @__PURE__ */ L("p", {
						className: "text-body-2-regular text-text-secondary",
						children: Me(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ L("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: G(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ L(Z, {
						text: e.scrape_error,
						prefix: "资料未取得：",
						tone: "muted"
					}) : null,
					/* @__PURE__ */ R("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ L(r, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: se,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "来源页"
							}) : null,
							/* @__PURE__ */ L(n, {
								variant: "secondary",
								size: "small",
								leadingIcon: b,
								disabled: t,
								...A(i === `remove:${e.id}`),
								onClick: o,
								children: "移除"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ L(n, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...A(i === `reset:${e.id}`),
								onClick: a,
								children: "重新查找"
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ L(n, {
								variant: "secondary",
								size: "small",
								onClick: s,
								children: "查找资源"
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ L(D, {
			want: e,
			readOnly: t,
			downloads: c,
			provider: l,
			toast: u,
			onSource: f
		}) : null]
	});
}
function Fe({ phase: t, label: r, rows: i, row: a }) {
	let [o, s] = (0, Q.useState)(1), [c, l] = (0, Q.useState)("all"), u = j(i), f = (e) => e.has_magnets ?? u.get(e.code || "") ?? !1, p = i.filter(f), m = t !== "searching" || c === "all" ? i : i.filter((e) => f(e) === (c === "available")), h = z(m.length, 20, o);
	return /* @__PURE__ */ R("section", {
		"aria-label": r,
		"data-want-phase": t,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ R("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ R("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [r, /* @__PURE__ */ L("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: i.length.toLocaleString()
					})]
				}), t === "searching" ? /* @__PURE__ */ L(E, {
					name: "want-magnet-filter",
					"aria-label": "待找磁链筛选",
					orientation: "horizontal",
					value: c,
					className: T,
					onChange: (e) => {
						l(e), s(1);
					},
					children: je.map(([t, n]) => /* @__PURE__ */ R(e, {
						value: t,
						"aria-label": n,
						className: w,
						children: [n, /* @__PURE__ */ L("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (t === "all" ? i.length : t === "available" ? p.length : i.length - p.length).toLocaleString()
						})]
					}, t))
				}) : null]
			}),
			m.length ? null : /* @__PURE__ */ L(d, {
				size: "compact",
				icon: V,
				title: "暂无符合条件的作品",
				actions: /* @__PURE__ */ L(n, {
					size: "small",
					onClick: () => {
						l("all"), s(1);
					},
					children: "查看全部"
				}),
				children: null
			}),
			/* @__PURE__ */ L("ul", {
				className: "flex flex-col gap-4",
				children: m.slice(h.start, h.end).map(a)
			}),
			h.pages > 1 ? /* @__PURE__ */ R("div", {
				"data-want-pager": "",
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ L("span", {
					className: "text-body-2-regular tabular-nums text-text-secondary",
					children: `${(h.start + 1).toLocaleString()}–${h.end.toLocaleString()} / ${h.total.toLocaleString()} 条`
				}), /* @__PURE__ */ L(C, {
					label: `${r}分页`,
					page: h.page,
					pages: h.pages,
					onPage: s
				})]
			}) : null
		]
	});
}
function Ie({ readOnly: e, toast: t, query: r = "", clearQuery: i }) {
	let [o, l] = (0, Q.useState)(""), [f, p] = (0, Q.useState)(null), m = J(), h = Y({
		queryKey: oe,
		queryFn: ({ signal: e }) => F(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), v = () => {
		let n = o.trim();
		n && !e && m.run("add", (e) => le({ code: n }, e), (e) => {
			t(e.created ? `已加入想要：${X(e.want)}` : `${X(e.want)} 已经在想要里`), l(""), I();
		});
	}, ee = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), v());
	}, y = (e) => {
		m.run(`remove:${e.id}`, (t) => H([e.id], t), () => {
			t(`已移除：${X(e)}`), I();
		});
	}, te = (e) => {
		m.run(`reset:${e.id}`, (t) => W([e.id], t), () => {
			t(`${X(e)} 回到待找`), I();
		});
	}, b = h.data, C = (b?.items || []).filter((e) => !r || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase())), w = Y({
		queryKey: s,
		queryFn: ({ signal: e }) => O(`${c}?limit=100`, e),
		enabled: C.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), T = w.data?.providers.filter((e) => e.configured) || [], E = T[0]?.key || "";
	return /* @__PURE__ */ R("div", {
		"aria-busy": h.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ R("div", {
				className: M({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ L("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "按番号添加"
					}),
					/* @__PURE__ */ R("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ L("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ L(_, {
								"aria-label": "番号",
								placeholder: "输入番号，例如 SSIS-950",
								value: o,
								isDisabled: e,
								onChange: l,
								onKeyDown: ee
							})
						}), /* @__PURE__ */ L(n, {
							variant: "primary",
							disabled: e || !o.trim(),
							...A(m.busy === "add"),
							onClick: v,
							children: "添加"
						})]
					}),
					m.error ? /* @__PURE__ */ L(x, {
						tone: "error",
						title: "这一次没有完成",
						children: m.error
					}) : null
				]
			}),
			h.error ? /* @__PURE__ */ L(x, {
				tone: "error",
				title: "想要清单读取失败",
				children: P(h.error)
			}) : null,
			h.isPending ? /* @__PURE__ */ L("div", {
				role: "status",
				"aria-label": "正在读取想要",
				dangerouslySetInnerHTML: { __html: be("wants") }
			}) : null,
			b?.scraping ? /* @__PURE__ */ L(g, {
				role: "status",
				children: "正在给刚加入的番号取资料与封面。"
			}) : null,
			w.error ? /* @__PURE__ */ L(x, {
				tone: "error",
				title: "下载配置未取得",
				children: P(w.error)
			}) : null,
			w.data && !T.length ? /* @__PURE__ */ R(x, {
				tone: "neutral",
				children: ["尚未配置下载渠道。", /* @__PURE__ */ L("a", {
					href: "/settings/library?section=%E4%B8%8B%E8%BD%BD%E6%B8%A0%E9%81%93",
					children: "下载渠道设置"
				})]
			}) : null,
			w.data && !w.data.available ? /* @__PURE__ */ L(x, {
				tone: "neutral",
				children: "云下载只在允许修改数据库的设备上可用。"
			}) : null,
			b && !C.length ? /* @__PURE__ */ L(d, {
				size: "compact",
				icon: V,
				title: r ? "没有符合条件的作品" : "还没有想要的作品",
				actions: r && i ? /* @__PURE__ */ L(n, {
					size: "small",
					onClick: i,
					children: "清除搜索"
				}) : !r && !e ? /* @__PURE__ */ L(u, {
					target: "input[aria-label=\"番号\"]",
					children: "添加作品"
				}) : void 0,
				children: r ? "试试其他番号、女优或标题。" : "输入番号，添加想看的作品。"
			}) : null,
			S.map(([n, r]) => {
				let i = C.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ L(Fe, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ L(Pe, {
						want: n,
						readOnly: e,
						busy: m.busy,
						downloads: w.data,
						provider: E,
						toast: t,
						onReset: () => te(n),
						onRemove: () => y(n),
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
			/* @__PURE__ */ L(a, {
				prefill: f,
				close: () => p(null),
				receipt: t,
				provider: E
			})
		]
	});
}
// src/react/jav/jav-page.tsx
var Le = q("search"), Re = q("x"), ze = q("refresh-cw");
function $(e) {
	let t = new URLSearchParams(location.search);
	for (let [n, r] of Object.entries(e)) r ? t.set(n, r) : t.delete(n);
	K(location.pathname + (t.size ? `?${t}` : ""), {
		replace: !0,
		state: B.navigation.location.state
	});
}
function Be({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, o] = (0, Q.useState)(null), [s, c] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), l = (e) => {
		c(e), $({ q: e });
	};
	return /* @__PURE__ */ R("div", {
		className: "flex w-full flex-col gap-6",
		children: [
			/* @__PURE__ */ L(y, {
				tab: e,
				navigate: n,
				find: () => o({})
			}),
			/* @__PURE__ */ L("form", {
				"aria-label": e === "discover" ? "筛选推荐" : "筛选想要",
				onSubmit: (e) => {
					e.preventDefault();
				},
				children: /* @__PURE__ */ L(_, {
					type: "search",
					"aria-label": e === "discover" ? "筛选推荐" : "筛选想要",
					placeholder: "筛选番号、女优或标题",
					leadingIcon: Le,
					value: s,
					onChange: l,
					enterKeyHint: "search"
				})
			}),
			e === "discover" ? /* @__PURE__ */ L(Ve, {
				readOnly: t,
				receipt: r,
				resource: o,
				query: s.trim(),
				navigate: n,
				clearText: () => l("")
			}) : /* @__PURE__ */ L(Ie, {
				readOnly: t,
				toast: r,
				query: s.trim(),
				clearQuery: () => l("")
			}),
			/* @__PURE__ */ L(a, {
				prefill: i,
				close: () => o(null),
				receipt: r
			})
		]
	});
}
function Ve({ readOnly: e, receipt: a, resource: s, query: c, navigate: u, clearText: g }) {
	let _ = new URLSearchParams(location.search), [y, b] = (0, Q.useState)(() => _.get("scope") === "library" ? "library" : "external"), [S, C] = (0, Q.useState)(() => _.get("tag") || ""), [w, T] = (0, Q.useState)(() => o.some(([e]) => e === _.get("sort")) ? _.get("sort") : "taste"), [E, ie] = (0, Q.useState)(() => _.get("dir") === "asc"), oe = (e) => {
		b(e), $({ scope: e === "external" ? "" : e });
	}, D = (e) => {
		C(e), $({ tag: e });
	}, ce = (e) => {
		T(e), $({ sort: e === "taste" ? "" : e });
	}, O = (e) => {
		ie(e), $({ dir: e ? "asc" : "" });
	}, k = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...k.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => Oe(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let j = ue();
	(0, Q.useSyncExternalStore)(j.subscribe, j.version, j.version);
	let M = xe(), N = de(ve({
		active: !0,
		home: !1,
		portrait: !1
	})), F = (0, Q.useRef)({}), z = (0, Q.useRef)(!1), B = (0, Q.useRef)(!1), V = E ? "asc" : "desc", H = Y({
		queryKey: me(y, w, V),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => {
			let t = z.current, n = B.current;
			return z.current = !1, B.current = !1, _e(y, e, {
				sort: w,
				direction: V,
				jobId: t ? void 0 : F.current[y],
				refreshMetadata: t,
				cancelMetadata: n
			});
		},
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), U = H.data?.metadata_job;
	(0, Q.useEffect)(() => {
		U?.job_id && (F.current[y] = U.job_id);
	}, [y, U?.job_id]);
	let W = J(), G = J(), K = (e) => {
		G.run(e, async () => (B.current = e === "stop", z.current = e !== "stop", H.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		})), () => {});
	}, q = H.data?.items || [], De = [...new Set(q.flatMap((e) => e.tags || []))], X = q.filter((e) => (!S || e.tags?.includes(S)) && (!c || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(c.toLocaleLowerCase()))), Z = H.isPending;
	return /* @__PURE__ */ R("section", {
		ref: k,
		"aria-label": "为你推荐",
		"aria-busy": Z,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ L(f, {
				label: "发现筛选与排序",
				topLabel: "发现范围与标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: Z,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ R("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ R("div", {
						"data-catalog-views": "",
						children: [[["external", "库外发现"], ["library", "馆藏探索"]].map(([e, t]) => /* @__PURE__ */ L(m, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: y === e,
							onPress: () => {
								oe(e), D("");
							},
							children: t
						}, e)), /* @__PURE__ */ L("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ L("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: Z ? { __html: Se() } : void 0,
						children: Z ? null : De.map((e) => /* @__PURE__ */ R(m, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: S === e,
							onPress: () => D(S === e ? "" : e),
							children: [e, /* @__PURE__ */ L("span", {
								"data-count-badge": "",
								children: q.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ R(ye.Fragment, { children: [
					/* @__PURE__ */ L("span", {
						"data-catalog-readout": "",
						children: Z ? /* @__PURE__ */ L("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : `${X.length} 部`
					}),
					/* @__PURE__ */ L(te, { currentHref: () => location.pathname + location.search }),
					c || S ? /* @__PURE__ */ L(h, {
						onPress: () => {
							D(""), g();
						},
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ R("span", {
						"data-entity-sorts": "",
						children: [
							y === "external" ? /* @__PURE__ */ L(p, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: U?.status === "running" ? "停止读取" : "更新资料",
								disabled: Z,
								"data-skeleton-action": Z ? "" : void 0,
								busy: !!G.busy,
								icon: U?.status === "running" ? Re : ze,
								onPress: () => K(U?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ L(ne, {
								label: "JAV 卡片版式",
								value: M,
								options: v,
								onChange: Te
							}),
							/* @__PURE__ */ L(re, {
								sorts: o.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === w,
									dir: V
								})),
								onSort: (e) => {
									e === w ? O(!E) : (ce(e), O(e === "code"));
								}
							})
						]
					})
				] })
			}),
			Z ? /* @__PURE__ */ L("div", {
				role: "status",
				"aria-label": "正在读取推荐",
				dangerouslySetInnerHTML: { __html: be("discover", M) }
			}) : null,
			H.error ? /* @__PURE__ */ L(x, {
				tone: "error",
				title: "推荐未取得",
				children: P(H.error)
			}) : null,
			y === "external" && U?.status === "running" ? /* @__PURE__ */ L("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ L(ae, {
					embedded: !0,
					label: `正在读取作品资料 · ${U.completed} / ${U.total} 部`,
					value: U.completed,
					total: U.total
				})
			}) : null,
			U && U.status !== "running" && (U.status !== "complete" || U.failed > 0) ? /* @__PURE__ */ L(x, {
				tone: "neutral",
				action: /* @__PURE__ */ L(n, {
					variant: "secondary",
					...A(G.busy === "retry"),
					"aria-label": "立即重试读取作品资料",
					onClick: () => K("retry"),
					children: "立即重试"
				}),
				children: U.message || `作品资料 ${U.completed} / ${U.total} 部`
			}) : null,
			G.error ? /* @__PURE__ */ L(x, {
				tone: "error",
				children: G.error
			}) : null,
			!Z && !H.error && !X.length ? /* @__PURE__ */ L(d, {
				icon: l,
				title: c || S ? "没有符合条件的推荐" : "暂无匹配口味的作品",
				actions: /* @__PURE__ */ R(ye.Fragment, { children: [/* @__PURE__ */ L(r, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: "查看口味"
				}), c || S ? /* @__PURE__ */ L(n, {
					variant: "primary",
					size: "small",
					onClick: () => {
						g(), C(""), $({
							q: "",
							tag: ""
						});
					},
					children: "清除筛选"
				}) : y === "library" ? /* @__PURE__ */ L(r, {
					variant: "primary",
					size: "small",
					href: "/",
					children: "浏览馆藏"
				}) : /* @__PURE__ */ L(n, {
					variant: "primary",
					size: "small",
					onClick: () => s({}),
					children: "查找作品"
				})] }),
				children: c || S ? "清除筛选后查看其他作品。" : y === "library" ? "观看或标记作品后，可以探索少看的馆藏。" : "可以查找番号，或更新关注来源。"
			}) : null,
			W.error ? /* @__PURE__ */ L(x, {
				tone: "error",
				children: W.error
			}) : null,
			/* @__PURE__ */ L("div", {
				"data-media-grid": "",
				className: ee,
				style: { "--card-ratio": N },
				children: X.map((o) => {
					let c = o.performer_refs?.length ? o.performer_refs.map((e) => e.name).join("、") : o.performers, l = pe(o, M, j.value.javImage), d = Ce(o.taste_score ?? o.score), f = [
						d.label,
						`口味 ${he(o.taste_score ?? o.score)}`,
						H.data?.ranking_method === "mmr" && o.ranking_score != null ? `排序 ${he(o.ranking_score)}` : "",
						o.source_score == null ? "" : `来源评分 ${o.source_score.toFixed(1)} / 5`,
						...o.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ R("article", {
						"data-media-card": "",
						"data-jav-card": "",
						onClick: (e) => {
							e.target.closest("a,button,input") || u(o.asset_id ? `/assets/${o.asset_id}` : `/works/${encodeURIComponent(o.code)}`);
						},
						children: [
							/* @__PURE__ */ L("a", {
								href: o.asset_id ? `/assets/${o.asset_id}` : `/works/${encodeURIComponent(o.code)}`,
								"aria-label": `查看 ${o.code} 详情`,
								onClick: (e) => {
									e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), u(e.currentTarget.getAttribute("href")));
								},
								"data-media-pic": "",
								"data-jav-cover-box": "",
								className: "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default",
								children: l ? /* @__PURE__ */ L(t, {
									artwork: {
										kind: "cover",
										html: l
									},
									identity: pe(o, "small", j.value.javImage),
									relayout: (e) => we(e, M)
								}) : /* @__PURE__ */ L("span", {
									"data-media-nopic": "",
									children: "无封面"
								})
							}),
							/* @__PURE__ */ R("div", {
								"data-media-meta": "",
								children: [/* @__PURE__ */ L(ke, { item: o }), /* @__PURE__ */ R("div", {
									"data-media-text": "",
									children: [
										/* @__PURE__ */ R("h3", {
											"data-jav-title": "",
											"data-media-title": "",
											title: `${o.code} · ${o.title || "标题未取得"}`,
											children: [
												/* @__PURE__ */ L("b", { children: o.code }),
												" ",
												o.title ? /* @__PURE__ */ L("span", {
													lang: Ee(o.title),
													children: o.title
												}) : "标题未取得"
											]
										}),
										/* @__PURE__ */ R("div", {
											"data-media-byline": "",
											children: [
												o.performer_refs?.[0]?.id ? /* @__PURE__ */ R("a", {
													"data-media-who": "",
													href: ge("performer", o.performer_refs[0].name),
													title: c,
													children: [/* @__PURE__ */ L("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ L("use", { href: "#i-user-round" })
													}), /* @__PURE__ */ L("span", { children: o.performer_refs[0].name })]
												}) : /* @__PURE__ */ R("span", {
													"data-media-who": "",
													title: c,
													children: [/* @__PURE__ */ L("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ L("use", { href: "#i-user-round" })
													}), /* @__PURE__ */ L("span", { children: o.performer_refs?.[0]?.name || c })]
												}),
												(o.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ R("span", {
													"data-media-who-more": "",
													children: [
														"等 ",
														o.performer_refs.length,
														" 人"
													]
												}) : null,
												o.release_date ? /* @__PURE__ */ R("time", {
													"data-media-release": "",
													dateTime: o.release_date,
													children: [/* @__PURE__ */ L("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ L("use", { href: "#i-calendar" })
													}), o.release_date]
												}) : null
											]
										}),
										/* @__PURE__ */ R("div", {
											"data-jav-tags": "",
											"data-media-tags": "",
											children: [/* @__PURE__ */ L("button", {
												"data-jav-taste-score": "",
												type: "button",
												title: f,
												"aria-label": `推荐分 ${d.score}，${d.label}`,
												className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
												children: /* @__PURE__ */ L(i, {
													color: d.color,
													children: d.label
												})
											}), (o.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ L("button", {
												type: "button",
												"data-media-tag": "",
												"aria-pressed": S === e,
												onClick: () => D(S === e ? "" : e),
												children: e
											}, e))]
										})
									]
								})]
							}),
							/* @__PURE__ */ R("div", {
								"data-jav-actions": "",
								className: "flex flex-wrap gap-2",
								children: [
									o.link ? /* @__PURE__ */ L(r, {
										"data-button-link": "",
										variant: "secondary",
										trailingIcon: se,
										href: o.link,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "作品来源"
									}) : null,
									/* @__PURE__ */ L(n, {
										variant: "ghost",
										disabled: e || o.wanted || !!o.asset_id,
										...A(W.busy === String(o.id)),
										onClick: () => {
											W.run(String(o.id), (e) => le({ code: o.code }, e), () => {
												a("已加入想要"), I(), H.refetch();
											});
										},
										children: o.asset_id ? "已入库" : o.wanted ? "已加入想要" : "想要"
									}),
									/* @__PURE__ */ L(n, {
										variant: "secondary",
										onClick: () => s({
											...o,
											cover: o.has_cover ? fe(o, !0) : o.cover_url,
											origin: `${o.asset_id ? "asset" : "feed"}:${o.id}`
										}),
										children: "查找资源"
									})
								]
							})
						]
					}, o.id);
				})
			})
		]
	});
}
export { Be as JavPage };

//# debugId=a17dcb78-9d70-4e44-aad0-9e8a0b569268