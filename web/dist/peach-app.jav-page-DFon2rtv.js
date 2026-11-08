(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "129a002d-9110-4165-bf68-50d66140f091", e._sentryDebugIdIdentifier = "sentry-dbid-129a002d-9110-4165-bf68-50d66140f091");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $76d00c5a4edb230a$export$76ccd210b9029917 as t, $76d00c5a4edb230a$export$816b5d811295e6bc as n, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as r, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as i, $76d00c5a4edb230a$export$f850895b287ef28e as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ArtSlot as s, Button as c, ButtonLink as l, Bx as u, COVER_STATE_TITLE as d, CatalogViewToggle as f, Checkbox as p, ChevronSortDown as m, Chip as h, CloudDownloadDialog as g, CoverQueue as _, DISCOVERY_METADATA_KEY as v, DISCOVERY_SORTS as y, DOWNLOADS_KEY as b, DOWNLOADS_URL as x, DataTableFooter as S, DataTableFrame as C, E3 as w, EmptyFocusButton as T, EmptyState as E, FilterGlassRows as ee, FilterIconButton as D, FilterPill as te, GlassPill as ne, Help as O, IndexSearch as k, Input as re, JAV_LAYOUTS as ie, JAV_RECOMMENDATION_GRID as ae, JAV_SELECTION_EVENT as A, JavHeader as j, LibraryShortcuts as M, M6 as N, ModalFrame as P, Note as F, P7 as I, PHASES as L, RELEASE_COLUMN_VISIBILITY_KEY as R, RELEASE_COLUMN_WIDTHS_KEY as oe, RELEASE_PAGE_SIZES as se, RELEASE_SORTS as ce, RELEASE_SORT_COLUMNS as z, SEGMENT as B, SEGMENTED_TRACK as V, SegmentedRadioGroup as le, Segments as ue, SelectionDock as de, Shuffle as fe, SortKeys as pe, SourceAvatar as me, Table as he, TableColumnControls as ge, TableColumnResizer as H, TaskProgress as _e, WANTS_KEY as U, WantMagnets as ve, Wt as ye, __toESM as be, addWant as xe, apiGet as Se, appSettingsStore as Ce, avatarInner as we, busyProps as W, cachedMagnetStates as Te, cardClass as Ee, cardRatio as De, catalogListSkeletonCellHtml as Oe, composingKey as ke, controlDiscoveryMetadata as Ae, coverArrived as je, coverFetching as Me, coverFetchingHtml as Ne, coverStateAction as Pe, coverUrl as Fe, discoveryArtwork as Ie, discoveryKey as Le, discoveryScore as Re, entityDisplayName as G, entityFaceImg as ze, entityPath as Be, errorMessage as K, esc as Ve, facePos as He, fetchCoverNow as Ue, fetchDiscoveries as We, fetchDiscoveryMetadata as Ge, fetchReleases as Ke, fetchWants as qe, firstGrapheme as Je, fmtDur as Ye, gridLayout as Xe, invalidateWants as q, javContentSkeleton as Ze, javLayout as Qe, javTagSkeleton as $e, keepPreviousData as et, leadingGraphemes as tt, logoUrl as nt, pageWindow as rt, qE as it, queryClient as at, recommendationScore as ot, relayoutCovers as st, releaseColumns as ct, releaseFilters as lt, releaseKey as ut, removeWants as dt, require_jsx_runtime as ft, require_react as pt, resetWants as mt, searchNote as ht, selectRange as gt, selectionSummary as _t, spriteGlyph as vt, storeJavLayout as yt, suppressShiftTextSelection as bt, textLang as xt, tierPlaceholdersHtml as St, useAction as J, useCatalogView as Ct, useEntityNames as wt, useQuery as Y, useTablePreferences as Tt, wantName as X, wireHorizontalScroller as Et, writeJavQuery as Z } from "./peach-app.js";
import { ErrorLine as Dt } from "./peach-app.source-view-DalWfDkm.js";
// src/react/wants/want-list.tsx
var Q = /* @__PURE__ */ be(pt(), 1), $ = ft(), Ot = {
	code: "手动添加",
	feed: "订阅新作",
	follow: "关注"
}, kt = [
	["all", "全部"],
	["available", "有磁链"],
	["missing", "没磁链"]
], At = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	Ot[e.origin]
].filter(Boolean).join(" · ");
function jt({ want: e }) {
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
function Mt({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: u }) {
	let [d, f] = (0, Q.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, $.jsxs)("li", {
		"data-want-id": e.id,
		className: Ee({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)(jt, { want: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
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
					At(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: At(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, $.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: ht(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(Dt, {
						text: e.scrape_error,
						prefix: "资料未取得：",
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ (0, $.jsx)(l, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: ye,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "来源页"
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								leadingIcon: N,
								disabled: t,
								...W(n === `remove:${e.id}`),
								onClick: i,
								children: "移除"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...W(n === `reset:${e.id}`),
								onClick: r,
								children: "重新查找"
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								onClick: a,
								children: "查找资源"
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(ve, {
			want: e,
			readOnly: t,
			downloads: o,
			provider: s,
			toast: u,
			onSource: f
		}) : null]
	});
}
function Nt({ phase: e, label: t, rows: n, row: r }) {
	let [i, a] = (0, Q.useState)(1), [s, l] = (0, Q.useState)(20), [u, d] = (0, Q.useState)("all"), f = Te(n), p = (e) => e.has_magnets ?? f.get(e.code || "") ?? !1, m = n.filter(p), h = e !== "searching" || u === "all" ? n : n.filter((e) => p(e) === (u === "available")), g = rt(h.length, s, i);
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
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(le, {
					name: "want-magnet-filter",
					"aria-label": "待找磁链筛选",
					orientation: "horizontal",
					value: u,
					className: V,
					onChange: (e) => {
						d(e), a(1);
					},
					children: kt.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(o, {
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
			h.length ? null : /* @__PURE__ */ (0, $.jsx)(E, {
				size: "compact",
				icon: it,
				title: "暂无符合条件的作品",
				actions: /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: () => {
						d("all"), a(1);
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
				children: /* @__PURE__ */ (0, $.jsx)(S, {
					label: t,
					total: g.total,
					pagination: {
						pageIndex: g.page - 1,
						pageSize: s
					},
					onChange: (e) => {
						l(e.pageSize), a(e.pageIndex + 1);
					},
					unit: "条"
				})
			})
		]
	});
}
function Pt({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(null), l = J(), u = Y({
		queryKey: U,
		queryFn: ({ signal: e }) => qe(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => xe({ code: n }, e), (e) => {
			t(e.created ? `已加入想要：${X(e.want)}` : `${X(e.want)} 已经在想要里`), a(""), q();
		});
	}, f = (e) => {
		e.key === "Enter" && !ke(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		l.run(`remove:${e.id}`, (t) => dt([e.id], t), () => {
			t(`已移除：${X(e)}`), q();
		});
	}, m = (e) => {
		l.run(`reset:${e.id}`, (t) => mt([e.id], t), () => {
			t(`${X(e)} 回到待找`), q();
		});
	}, h = u.data, _ = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), v = Y({
		queryKey: b,
		queryFn: ({ signal: e }) => Se(`${x}?limit=100`, e),
		enabled: _.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), y = v.data?.providers.filter((e) => e.configured) || [], S = y[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: Ee({
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
							children: /* @__PURE__ */ (0, $.jsx)(re, {
								"aria-label": "番号",
								placeholder: "输入番号，例如 SSIS-950",
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ (0, $.jsx)(c, {
							variant: "primary",
							disabled: e || !i.trim(),
							...W(l.busy === "add"),
							onClick: d,
							children: "添加"
						})]
					}),
					l.error ? /* @__PURE__ */ (0, $.jsx)(F, {
						tone: "error",
						title: "这一次没有完成",
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: "想要清单读取失败",
				children: K(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取想要",
				dangerouslySetInnerHTML: { __html: Ze("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ (0, $.jsx)(O, {
				role: "status",
				children: "正在给刚加入的番号取资料与封面。"
			}) : null,
			v.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: "下载配置未取得",
				children: K(v.error)
			}) : null,
			v.data && !y.length ? /* @__PURE__ */ (0, $.jsxs)(F, {
				tone: "neutral",
				children: ["尚未配置下载渠道。", /* @__PURE__ */ (0, $.jsx)("a", {
					href: "/settings/library?section=%E4%B8%8B%E8%BD%BD%E6%B8%A0%E9%81%93",
					children: "下载渠道设置"
				})]
			}) : null,
			v.data && !v.data.available ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "neutral",
				children: "云下载只在允许修改数据库的设备上可用。"
			}) : null,
			h && !_.length ? /* @__PURE__ */ (0, $.jsx)(E, {
				size: "compact",
				icon: it,
				title: n ? "没有符合条件的作品" : "还没有想要的作品",
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: r,
					children: "清除搜索"
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(T, {
					target: "input[aria-label=\"番号\"]",
					children: "添加作品"
				}) : void 0,
				children: n ? "试试其他番号、女优或标题。" : "输入番号，添加想看的作品。"
			}) : null,
			L.map(([n, r]) => {
				let i = _.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(Nt, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(Mt, {
						want: n,
						readOnly: e,
						busy: l.busy,
						downloads: v.data,
						provider: S,
						toast: t,
						onReset: () => m(n),
						onRemove: () => p(n),
						onCloudDownload: () => s({
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
			/* @__PURE__ */ (0, $.jsx)(g, {
				prefill: o,
				close: () => s(null),
				receipt: t,
				provider: S
			})
		]
	});
}
// src/react/jav/jav-batch-resources.tsx
function Ft({ items: t, close: n, readOnly: r, receipt: i }) {
	let a = Y({
		queryKey: b,
		queryFn: ({ signal: e }) => Se(`${x}?limit=50`, e),
		enabled: !!t
	}), o = a.data?.providers.find((e) => e.configured)?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)(P, {
		isOpen: !!t,
		onOpenChange: (e) => {
			e || n();
		},
		width: "collections",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-separator-border bg-background-full px-5 py-4",
			children: [/* @__PURE__ */ (0, $.jsxs)(e, {
				slot: "title",
				className: "text-title-2-medium text-text-primary",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": "jav.resources.title",
						children: "查找所选资源"
					}),
					" · ",
					t?.length || 0,
					" 部"
				]
			}), /* @__PURE__ */ (0, $.jsx)(c, {
				iconOnly: !0,
				variant: "ghost",
				leadingIcon: I,
				"aria-label": "关闭批量资源查找",
				onClick: n
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-6 p-5",
			children: [a.error ? /* @__PURE__ */ (0, $.jsxs)(F, {
				tone: "error",
				children: ["下载配置未取得：", K(a.error)]
			}) : null, t?.map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
				"aria-label": e.code,
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-headline-medium text-text-primary",
						children: e.code
					}),
					e.title ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.title
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(ve, {
						want: {
							id: e.id,
							code: e.code,
							title: e.title,
							release_date: e.release_date || null
						},
						queryUrl: `/api/jav/resources?code=${encodeURIComponent(e.code)}`,
						eager: !0,
						readOnly: r,
						downloads: a.data,
						provider: o,
						toast: i
					})
				]
			}, e.code))]
		})]
	});
}
// src/react/jav/jav-selection.tsx
function It(e) {
	let t = new MutationObserver(e);
	return t.observe(document.body, {
		attributes: !0,
		attributeFilter: ["data-density"]
	}), () => t.disconnect();
}
var Lt = () => document.body.dataset.density === "dense", Rt = (0, Q.createContext)(null), zt = () => (0, Q.useContext)(Rt);
function Bt(e) {
	let t = zt()?.visible;
	(0, Q.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function Vt({ children: e, readOnly: t, receipt: n }) {
	let r = (0, Q.useSyncExternalStore)(It, Lt, () => !1), [i, a] = (0, Q.useState)(!1), [o, s] = (0, Q.useState)(/* @__PURE__ */ new Map()), [l, u] = (0, Q.useState)([]), [d, f] = (0, Q.useState)(null), p = (0, Q.useRef)(null), m = J(), h = new Set(o.keys()), g = _t(h, l.map((e) => e.code)), _ = (0, Q.useCallback)((e) => {
		u((t) => t.length === e.length && t.every((t, n) => t === e[n]) ? t : e), s((t) => {
			let n = e.filter((e) => t.has(e.code) && t.get(e.code) !== e);
			return n.length ? new Map([...t, ...n.map((e) => [e.code, e])]) : t;
		});
	}, []), v = m.cancel, y = (0, Q.useCallback)(() => {
		v(), a(!1), s(/* @__PURE__ */ new Map()), p.current = null;
	}, [v]), b = () => s((e) => {
		let t = new Map(e);
		return l.forEach((e) => g.all ? t.delete(e.code) : t.set(e.code, e)), t;
	});
	(0, Q.useEffect)(() => {
		let e = () => {
			i ? y() : a(!0);
		};
		return window.addEventListener(A, e), () => window.removeEventListener(A, e);
	}, [i, y]), (0, Q.useEffect)(() => (i || (s(/* @__PURE__ */ new Map()), p.current = null), document.getElementById("selectMode")?.setAttribute("aria-pressed", String(i)), () => document.getElementById("selectMode")?.setAttribute("aria-pressed", "false")), [i]), (0, Q.useEffect)(() => {
		if (!i) return;
		let e = (e) => {
			e.target.closest("input,textarea,[contenteditable]:not([contenteditable=\"false\"]),[role=\"dialog\"]") || (e.key === "Escape" && (e.preventDefault(), y()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && (e.preventDefault(), s((e) => new Map([...e, ...l.map((e) => [e.code, e])]))));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		i,
		y,
		l
	]);
	let x = (e, t = !1) => {
		a(!0);
		let n = p.current;
		p.current = e.code, s((r) => {
			let i = new Set(r.keys());
			gt(i, l.map((e) => e.code), n, e.code, t);
			let a = new Map([
				...r,
				...l.map((e) => [e.code, e]),
				[e.code, e]
			]);
			return new Map([...i].map((e) => [e, a.get(e)]));
		});
	}, S = [...o.values()].filter((e) => !e.wanted && !e.asset_id), C = () => {
		m.run("want", async (e) => {
			let t = 0;
			try {
				for (let n of S) {
					e.throwIfAborted();
					try {
						await xe({ code: n.code }, e);
					} catch (e) {
						throw Error(`已加入 ${t} 部；${n.code} 未完成：${K(e)}`);
					}
					e.throwIfAborted(), t++, s((e) => {
						let t = new Map(e);
						return t.delete(n.code), t;
					});
				}
				return t;
			} finally {
				q();
			}
		}, (e) => n(`已加入想要 ${e} 部`));
	};
	return /* @__PURE__ */ (0, $.jsxs)(Rt.Provider, {
		value: {
			dense: r,
			mode: i,
			selected: h,
			toggle: x,
			visible: _,
			selectPage: b,
			all: g.all,
			mixed: g.mixed
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-selection": "",
				"data-select-mode": i ? "" : void 0,
				className: "flex min-w-0 flex-col gap-4",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsxs)(de, {
				visible: i,
				count: `已选 ${o.size} 部`,
				label: "作品批量操作",
				children: [
					m.error ? /* @__PURE__ */ (0, $.jsx)("p", {
						role: "alert",
						className: "w-full px-2 text-caption-1-regular text-text-error-primary",
						children: m.error
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: !l.length || !!m.busy,
						onClick: b,
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": `jav.selection.page.${g.all ? "clear" : "all"}`,
							children: g.all ? "取消本页" : "全选本页"
						})
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: t || !S.length,
						...W(m.busy === "want"),
						onClick: C,
						children: "加入想要"
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: !o.size || !!m.busy,
						onClick: () => f([...o.values()]),
						children: "查找资源"
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "ghost",
						onClick: y,
						children: "取消选择"
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(Ft, {
				items: d,
				close: () => f(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function Ht({ item: e }) {
	wt();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ (0, $.jsx)(me, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: we(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: Be("performer", t.name, t.id),
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
var Ut = (e) => ({
	...e,
	cover: e.has_cover ? Fe(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), Wt = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function Gt({ item: e, readOnly: t }) {
	let n = J(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(Me.subscribe, Me.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: "无封面"
	});
	if (a === "fetching" || Me.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Ne() } });
	let o = () => {
		n.run("cover", (t) => Ue(e.code, t), (t) => {
			t.has_cover ? je(e.code, t) : i(t.message || "没有找到可用的官方封面");
		});
	}, s = r || n.error ? "missing" : a, l = n.error || r || e.cover_reason;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-cover-state": s,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"data-media-nopic": "",
				children: d[s]
			}),
			l ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: l,
				children: l
			}) : null,
			t ? null : /* @__PURE__ */ (0, $.jsx)(c, {
				size: "small",
				variant: "secondary",
				className: "mt-1",
				onClick: o,
				children: Pe(s)
			})
		]
	});
}
function Kt({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a, onTag: o, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = zt(), h = m?.selected.has(e.code), g = !!m?.dense, _ = e.performer_refs?.length ? e.performer_refs.map((e) => e.name).join("、") : e.performers, v = Ie(e, t, n), y = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-selected": h ? "" : void 0,
		onMouseDown: bt,
		onClickCapture: (t) => {
			m && (m.mode || t.shiftKey || t.ctrlKey || t.metaKey) && (t.preventDefault(), t.stopPropagation(), m.toggle(e, t.shiftKey));
		},
		onClick: (e) => {
			e.target.closest("a,button,input") || i(y);
		},
		children: [
			v ? /* @__PURE__ */ (0, $.jsx)("a", {
				href: y,
				"aria-label": `查看 ${e.code} 详情`,
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(y));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Wt,
				children: /* @__PURE__ */ (0, $.jsx)(s, {
					artwork: {
						kind: "cover",
						html: v
					},
					identity: Ie(e, "small", n),
					relayout: (e) => st(e, t)
				})
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Wt,
				children: /* @__PURE__ */ (0, $.jsx)(Gt, {
					item: e,
					readOnly: r
				})
			}),
			m?.mode ? /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				"data-media-check": "",
				"aria-label": `选择 ${e.code}`,
				"aria-pressed": !!h,
				children: /* @__PURE__ */ (0, $.jsx)("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-check" })
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(Ht, { item: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
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
									lang: xt(e.title),
									children: e.title
								}) : "标题未取得"
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsxs)("a", {
									"data-media-who": "",
									href: Be("performer", e.performer_refs[0].name),
									title: _,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs[0].name })]
								}) : /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who": "",
									title: _,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs?.[0]?.name || _ })]
								}),
								(e.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who-more": "",
									children: [
										"等 ",
										e.performer_refs.length,
										" 人"
									]
								}) : null,
								e.release_date ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-media-facts": "",
									children: /* @__PURE__ */ (0, $.jsxs)("time", {
										"data-media-release": "",
										dateTime: e.release_date,
										children: [/* @__PURE__ */ (0, $.jsx)("svg", {
											viewBox: "0 0 24 24",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-calendar" })
										}), e.release_date]
									})
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
								onClick: () => o(a === e ? "" : e),
								children: e
							}, e))]
						})
					]
				})]
			}),
			m?.mode ? null : /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-jav-actions": "",
				"data-compact": g ? "" : void 0,
				"data-has-source": e.link ? "" : void 0,
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ (0, $.jsx)(l, {
						"data-button-link": "",
						"data-jav-source": "",
						variant: "secondary",
						size: g ? "small" : "medium",
						iconOnly: g,
						"aria-label": "作品来源",
						title: "作品来源",
						leadingIcon: g ? ye : void 0,
						trailingIcon: g ? void 0 : ye,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: g ? null : "作品来源"
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(c, {
						variant: "ghost",
						size: g ? "small" : "medium",
						disabled: r || e.wanted || !!e.asset_id,
						...W(u),
						onClick: d,
						children: e.asset_id ? "已入库" : e.wanted ? "已想要" : "想要"
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						variant: "secondary",
						size: g ? "small" : "medium",
						onClick: f,
						children: "查找资源"
					})
				]
			})
		]
	});
}
// src/react/jav/jav-release-table.tsx
var qt = {
	widths: oe,
	visibility: R
};
function Jt({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: nt(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true",
		children: tt(e?.name || "", 1)
	});
}
function Yt({ items: e, waiting: o, filters: l, studios: u, javImage: f, readOnly: h, navigate: g, onTag: _, onSort: v, wanting: y, onWant: b, onResource: x }) {
	let S = zt(), w = Tt("jav-releases", ct, qt), T = ct.filter((e) => e.required || w.visibility[e.id] !== !1), E = Object.entries(z).find(([, e]) => e === l.sort)?.[0], ee = new Map(u.map((e) => [e.name, e])), D = (e) => (t) => {
		t.preventDefault(), S?.mode || t.shiftKey || t.ctrlKey || t.metaKey ? S?.toggle(e, t.shiftKey) : g(`/works/${encodeURIComponent(e.code)}`);
	}, te = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = Ie(t, "small", f);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: D(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(s, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => st(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: t.cover_reason || void 0,
								children: t.cover_state ? d[t.cover_state] : "无封面"
							})
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || "标题未取得"}`,
							"aria-label": `查看 ${t.code} 详情`,
							onClick: D(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: xt(t.title),
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
					/* @__PURE__ */ (0, $.jsx)(Ht, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsx)("a", {
						"data-media-who": "",
						href: Be("performer", n),
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
				children: [/* @__PURE__ */ (0, $.jsx)(Jt, { studio: ee.get(t.studio) }), /* @__PURE__ */ (0, $.jsx)("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": l.tag === e,
					onClick: () => _(l.tag === e ? "" : e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return Ye(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "ghost",
					disabled: h || t.wanted || !!t.asset_id,
					...W(y(t)),
					onClick: () => b(t),
					children: t.wanted ? "已想要" : "想要"
				}), /* @__PURE__ */ (0, $.jsx)(c, {
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
				children: /* @__PURE__ */ (0, $.jsx)(ge, {
					preferences: w,
					label: "新作列表"
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(C, {
			follow: !0,
			preferences: w,
			children: /* @__PURE__ */ (0, $.jsxs)(he, {
				"aria-label": "新作列表",
				size: "sm",
				sortDescriptor: E ? {
					column: E,
					direction: l.dir === "asc" ? "ascending" : "descending"
				} : void 0,
				onSortChange: (e) => {
					let t = z[String(e.column)];
					t && v(t, e.direction === "ascending" ? "asc" : "desc");
				},
				children: [/* @__PURE__ */ (0, $.jsxs)(a, { children: [
					S?.mode ? /* @__PURE__ */ (0, $.jsx)(n, {
						id: "selection",
						width: 44,
						"aria-label": "选择作品",
						children: /* @__PURE__ */ (0, $.jsx)(p, {
							slot: null,
							"aria-label": "全选本页作品",
							isSelected: S.all,
							isIndeterminate: S.mixed,
							isDisabled: o || !e.length,
							onChange: S.selectPage
						})
					}) : null,
					T.map((e) => /* @__PURE__ */ (0, $.jsx)(n, {
						id: e.id,
						isRowHeader: e.id === "name",
						allowsSorting: e.id in z,
						...w.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
							className: "flex items-center gap-0.5",
							children: [e.label, e.id in z ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ (0, $.jsx)(m, {})
							}) : null]
						}), /* @__PURE__ */ (0, $.jsx)(H, {
							preferences: w,
							id: e.id
						})] })
					}, e.id)),
					/* @__PURE__ */ (0, $.jsx)(n, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: w.spaceWidth,
						minWidth: 0
					})
				] }), /* @__PURE__ */ (0, $.jsx)(t, {
					renderEmptyState: () => "没有符合条件的新作",
					children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(r, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [
							S?.mode ? /* @__PURE__ */ (0, $.jsx)(i, {}) : null,
							T.map((e) => /* @__PURE__ */ (0, $.jsx)(i, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Oe(e.id) } }) }, e.id)),
							/* @__PURE__ */ (0, $.jsx)(i, { "data-table-space": "" })
						]
					}, `skeleton-${t}`)) : e.map((e) => /* @__PURE__ */ (0, $.jsxs)(r, {
						id: String(e.id),
						"data-catalog-row": "",
						"data-release-row": "",
						children: [
							S?.mode ? /* @__PURE__ */ (0, $.jsx)(i, { children: /* @__PURE__ */ (0, $.jsx)(p, {
								slot: null,
								"aria-label": `选择 ${e.code}`,
								isSelected: S.selected.has(e.code),
								onChange: () => S.toggle(e)
							}) }) : null,
							T.map((t) => /* @__PURE__ */ (0, $.jsx)(i, { children: te(t.id, e) }, t.id)),
							/* @__PURE__ */ (0, $.jsx)(i, { "data-table-space": "" })
						]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/jav-releases.tsx
var Xt = `<div data-catalog-tier="performers" data-skeleton="tiers">${St("performer")}</div><div data-catalog-tier="studios">${St("studio")}</div>`, Zt = (e) => `<span data-tier-initial>${Ve(Je(G("performer", e.name, e.id)))}</span>${ze({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: He(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function Qt({ value: e }) {
	let t = ot(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: `口味 ${t.score}`,
		children: /* @__PURE__ */ (0, $.jsx)(h, {
			color: t.color,
			children: t.label
		})
	});
}
function $t({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: nt(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : tt(e.name, 2)
	});
}
var en = (e) => Ue(e).then((t) => (t.has_cover && je(e, t), t.has_cover));
function tn({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	wt();
	let [o, s] = (0, Q.useState)(() => lt(location.search));
	(0, Q.useEffect)(() => {
		r !== o.q && (s((e) => ({
			...e,
			q: r,
			page: 1
		})), Z({ page: "" }));
	}, [r, o.q]);
	let d = (e, t) => {
		let n = o[e] === t ? "" : t;
		s((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Z({
			[e]: n,
			page: ""
		});
	}, p = (0, Q.useRef)(null), m = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1;
		s((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			size: t === 24 ? "" : String(t)
		}), p.current?.scrollIntoView({ block: "start" });
	}, h = () => {
		s((e) => ({
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
	}, g = (e) => v(e, e === o.sort ? o.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc"), v = (e, t) => {
		s((n) => ({
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
	}, y = () => {
		let e = Math.random().toString(36).slice(2, 10);
		s((t) => ({
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
		let e = [...p.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => Et(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let b = Ce();
	(0, Q.useSyncExternalStore)(b.subscribe, b.version, b.version);
	let x = Qe(), C = Ct(), w = De(Xe({
		active: !0,
		home: !1,
		portrait: !1
	})), T = (0, Q.useRef)(""), D = Y({
		queryKey: ut(o),
		queryFn: ({ signal: e }) => Ke(o, e, T.current),
		placeholderData: et,
		retry: !1,
		refetchOnWindowFocus: !1,
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), O = D.data?.metadata_job, k = O?.status === "running", re = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		O?.job_id && (T.current = O.job_id);
	}, [O?.job_id]), (0, Q.useEffect)(() => {
		re.current && !k && D.refetch(), re.current = k;
	}, [k, D]);
	let A = J(), j = (e) => {
		A.run(String(e.id), (t) => xe({ code: e.code }, t), () => {
			t("已加入想要"), q(), D.refetch();
		});
	}, M = D.data;
	Bt(M?.items || []);
	let N = D.isPending, P = !!(o.performer || o.studio || o.tag || o.q), I = Math.max(1, Math.ceil((M?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!M || D.isPlaceholderData || o.page <= I || (s((e) => ({
			...e,
			page: I
		})), Z({ page: I > 1 ? String(I) : "" }));
	}, [
		M,
		D.isPlaceholderData,
		o.page,
		I
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: p,
		"aria-label": "订阅新作",
		"aria-busy": N || D.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			N ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: Xt }
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
						"aria-pressed": o.performer === e.name,
						title: `${G("performer", e.name, e.id)} · ${e.count} 部`,
						onClick: () => d("performer", e.name),
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: Zt(e) }
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-name": "",
							children: G("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, M.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": "按厂牌筛选",
					children: M.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": o.studio === e.name,
						title: `${e.name} · ${e.count} 部`,
						onClick: () => d("studio", e.name),
						children: [
							/* @__PURE__ */ (0, $.jsx)($t, { studio: e }),
							e.name,
							/* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(ee, {
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
						dangerouslySetInnerHTML: N ? { __html: $e() } : void 0,
						children: N ? null : M?.facets.tags.map((e) => /* @__PURE__ */ (0, $.jsxs)(te, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: o.tag === e.name,
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
					P ? /* @__PURE__ */ (0, $.jsx)(ne, {
						onPress: h,
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(fe, {
								onPress: y,
								busy: o.sort === "random" && D.isFetching
							}),
							C === "cards" ? /* @__PURE__ */ (0, $.jsx)(ue, {
								label: "JAV 卡片版式",
								value: x,
								options: ie,
								onChange: yt
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(f, {}),
							/* @__PURE__ */ (0, $.jsx)(pe, {
								sorts: ce.map(([e, t, n]) => ({
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
			N && C === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取新作",
				dangerouslySetInnerHTML: { __html: Ze("discover", x) }
			}) : null,
			D.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: "新作未取得",
				children: K(D.error)
			}) : null,
			k && O ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(_e, {
					label: `正在读取作品资料 · ${O.completed} / ${O.total} 部`,
					value: O.completed,
					total: O.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(_, {
				scope: "本页",
				fetchOne: en,
				codes: (M?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? `已取到 ${n} 部封面` : `已取到 ${e} / ${n} 部封面，没取到的在卡上写了原因`), D.refetch();
				}
			}),
			!N && !D.error && !M?.items.length ? /* @__PURE__ */ (0, $.jsx)(E, {
				icon: u,
				title: P ? "没有符合条件的新作" : "暂无未入库的新作",
				actions: P ? /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: h,
					children: "清除筛选"
				}) : /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: "添加订阅"
				}),
				children: P ? "清除筛选后查看全部新作。" : "订阅女优或厂牌后，还没入库的新作会出现在这里。"
			}) : null,
			A.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				children: A.error
			}) : null,
			C === "list" ? N || M?.items.length ? /* @__PURE__ */ (0, $.jsx)(Yt, {
				items: M?.items || [],
				waiting: N,
				filters: o,
				studios: M?.facets.studios || [],
				javImage: b.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: (e) => d("tag", e || o.tag),
				onSort: v,
				wanting: (e) => A.busy === String(e.id),
				onWant: j,
				onResource: (e) => n(Ut(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ae,
				style: { "--card-ratio": w },
				children: (M?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(Kt, {
					item: t,
					layout: x,
					javImage: b.value.javImage,
					readOnly: e,
					navigate: i,
					tag: o.tag,
					onTag: (e) => d("tag", e || o.tag),
					wanting: A.busy === String(t.id),
					onWant: () => j(t),
					onResource: () => n(Ut(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ (0, $.jsx)(Qt, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			M ? /* @__PURE__ */ (0, $.jsx)(S, {
				label: "新作",
				total: M.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: m,
				unit: "部作品",
				pageUnit: "部",
				pageSizes: se
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var nn = vt("x"), rn = vt("refresh-cw"), an = {
	releases: "筛选新作",
	discover: "筛选推荐",
	wants: "筛选想要"
}, on = 15e3;
function sn({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsx)(Vt, {
		readOnly: t,
		receipt: r,
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex w-full flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, $.jsx)(j, {
					tab: e,
					navigate: n,
					find: () => a({}),
					search: /* @__PURE__ */ (0, $.jsx)(k, {
						label: an[e] || "筛选",
						value: o,
						onQuery: c
					})
				}),
				e === "releases" ? /* @__PURE__ */ (0, $.jsx)(tn, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(cn, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : /* @__PURE__ */ (0, $.jsx)(Pt, {
					readOnly: t,
					toast: r,
					query: o.trim(),
					clearQuery: () => c("")
				}),
				/* @__PURE__ */ (0, $.jsx)(g, {
					prefill: i,
					close: () => a(null),
					receipt: r
				})
			]
		})
	}, e);
}
function cn({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, u] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, Q.useState)(() => o.get("tag") || ""), [p, m] = (0, Q.useState)(() => y.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [g, _] = (0, Q.useState)(() => o.get("dir") === "asc"), b = (e) => {
		u(e), Z({ scope: e === "external" ? "" : e });
	}, x = (e) => {
		f(e), Z({ tag: e });
	}, S = (e) => {
		m(e), Z({ sort: e === "taste" ? "" : e });
	}, C = (e) => {
		_(e), Z({ dir: e ? "asc" : "" });
	}, T = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...T.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => Et(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let O = Ce();
	(0, Q.useSyncExternalStore)(O.subscribe, O.version, O.version);
	let k = Qe(), re = De(Xe({
		active: !0,
		home: !1,
		portrait: !1
	})), A = g ? "asc" : "desc", j = (0, Q.useRef)(!1), N = Y({
		queryKey: Le(s, p, A),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => We(s, e, {
			sort: p,
			direction: A
		}),
		refetchInterval: () => j.current ? on : !1
	}), P = N.data?.metadata_job, I = (0, Q.useRef)(!1);
	I.current = P?.status === "running";
	let L = Y({
		queryKey: v,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => Ge(e),
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" || I.current ? Math.max(1e3, e.state.data?.poll_after_ms || 3e3) : !1
	}), R = L.data && L.dataUpdatedAt >= N.dataUpdatedAt ? L.data.metadata_job : P;
	j.current = s === "external" && R?.status === "running";
	let oe = (e) => e ? `${e.job_id}:${e.status}` : "", se = (0, Q.useRef)(""), ce = (0, Q.useRef)(""), z = L.data?.metadata_job;
	(0, Q.useEffect)(() => {
		let e = oe(z), t = ce.current.endsWith(":running") && z && z.status !== "running";
		ce.current = e, t && e !== se.current && N.refetch();
	}, [oe(z)]);
	let B = J(), V = J(), le = async (e, t) => {
		let n = await Ae(e, {
			sort: p,
			direction: A,
			jobId: R?.job_id
		}, t);
		e !== "start" && await N.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await at.cancelQueries({ queryKey: v }), se.current = oe(n.metadata_job), at.setQueryData(v, n);
	}, de = (e) => {
		V.run(e, (t) => le(e === "stop" ? "cancel" : "refresh", t), () => {});
	}, fe = (0, Q.useRef)(!1), me = s === "external" && R?.status !== "running" && (N.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, Q.useEffect)(() => {
		me && !fe.current && (fe.current = !0, le("start").catch(() => {}));
	}, [me]);
	let he = N.data?.items || [], ge = [...new Set(he.flatMap((e) => e.tags || []))], H = he.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), U = N.isPending;
	return Bt(H), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: T,
		"aria-label": "为你推荐",
		"aria-busy": U,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(ee, {
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
						children: [[["external", "库外发现"], ["library", "馆藏探索"]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(te, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: s === e,
							onPress: () => {
								b(e), x("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: U ? { __html: $e() } : void 0,
						children: U ? null : ge.map((e) => /* @__PURE__ */ (0, $.jsxs)(te, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => x(d === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: he.filter((t) => t.tags?.includes(e)).length
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
						}) : `${H.length} 部`
					}),
					/* @__PURE__ */ (0, $.jsx)(M, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ (0, $.jsx)(ne, {
						onPress: () => {
							x(""), a();
						},
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							s === "external" ? /* @__PURE__ */ (0, $.jsx)(D, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: R?.status === "running" ? "停止读取" : "更新资料",
								disabled: U,
								"data-skeleton-action": U ? "" : void 0,
								busy: !!V.busy,
								icon: R?.status === "running" ? nn : rn,
								onPress: () => de(R?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(ue, {
								label: "JAV 卡片版式",
								value: k,
								options: ie,
								onChange: yt
							}),
							/* @__PURE__ */ (0, $.jsx)(pe, {
								sorts: y.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === p,
									dir: A
								})),
								onSort: (e) => {
									e === p ? C(!g) : (S(e), C(e === "code"));
								}
							})
						]
					})
				] })
			}),
			U ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": "正在读取推荐",
				dangerouslySetInnerHTML: { __html: Ze("discover", k) }
			}) : null,
			N.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				title: "推荐未取得",
				children: K(N.error)
			}) : null,
			s === "external" && R?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(_e, {
					label: `正在读取作品资料 · ${R.completed} / ${R.total} 部`,
					value: R.completed,
					total: R.total
				})
			}) : null,
			R && R.status !== "running" && (R.status !== "complete" || R.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "secondary",
					...W(V.busy === "retry"),
					"aria-label": "立即重试读取作品资料",
					onClick: () => de("retry"),
					children: "立即重试"
				}),
				children: R.message || `作品资料 ${R.completed} / ${R.total} 部`
			}) : null,
			V.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				children: V.error
			}) : null,
			!U && !N.error && !H.length ? /* @__PURE__ */ (0, $.jsx)(E, {
				icon: w,
				title: r || d ? "没有符合条件的推荐" : "暂无匹配口味的作品",
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: "查看口味"
				}), r || d ? /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					onClick: () => {
						a(), f(""), Z({
							q: "",
							tag: ""
						});
					},
					children: "清除筛选"
				}) : s === "library" ? /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "primary",
					size: "small",
					href: "/",
					children: "浏览馆藏"
				}) : /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					onClick: () => n({}),
					children: "查找作品"
				})] }),
				children: r || d ? "清除筛选后查看其他作品。" : s === "library" ? "观看或标记作品后，可以探索少看的馆藏。" : "可以查找番号，或更新关注来源。"
			}) : null,
			B.error ? /* @__PURE__ */ (0, $.jsx)(F, {
				tone: "error",
				children: B.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: ae,
				style: { "--card-ratio": re },
				children: H.map((r) => {
					let a = ot(r.taste_score ?? r.score), o = [
						a.label,
						`口味 ${Re(r.taste_score ?? r.score)}`,
						N.data?.ranking_method === "mmr" && r.ranking_score != null ? `排序 ${Re(r.ranking_score)}` : "",
						r.source_score == null ? "" : `来源评分 ${r.source_score.toFixed(1)} / 5`,
						...r.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(Kt, {
						item: r,
						layout: k,
						javImage: O.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: x,
						wanting: B.busy === String(r.id),
						onWant: () => {
							B.run(String(r.id), (e) => xe({ code: r.code }, e), () => {
								t("已加入想要"), q(), N.refetch();
							});
						},
						onResource: () => n(Ut(r)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": `推荐分 ${a.score}，${a.label}`,
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(h, {
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
export { sn as JavPage };

//# debugId=129a002d-9110-4165-bf68-50d66140f091