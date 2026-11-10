(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0921d8b5-09e9-414b-9789-fc6eb16deef8", e._sentryDebugIdIdentifier = "sentry-dbid-0921d8b5-09e9-414b-9789-fc6eb16deef8");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $76d00c5a4edb230a$export$76ccd210b9029917 as t, $76d00c5a4edb230a$export$816b5d811295e6bc as n, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as r, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as i, $76d00c5a4edb230a$export$f850895b287ef28e as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ArtSlot as s, Button as c, ButtonLink as l, Bx as u, COVER_STATE_TITLE as d, CatalogViewToggle as f, Checkbox as p, ChevronSortDown as m, Chip as h, CloudDownloadDialog as g, CoverQueue as _, DISCOVERY_METADATA_KEY as v, DISCOVERY_REFRESH_MS as y, DISCOVERY_SORTS as b, DOWNLOADS_KEY as x, DOWNLOADS_URL as S, DataTableFooter as C, DataTableFrame as w, E3 as T, EmptyFocusButton as E, EmptyState as ee, FilterGlassRows as te, FilterIconButton as ne, FilterPill as re, GlassPill as ie, Help as D, IndexSearch as O, Input as ae, JAV_LAYOUTS as oe, JAV_RECOMMENDATION_GRID as se, JAV_SELECTION_EVENT as k, JavHeader as A, LibraryShortcuts as j, M6 as M, ModalFrame as ce, Note as N, P7 as P, PHASES as F, RELEASE_COLUMN_VISIBILITY_KEY as I, RELEASE_COLUMN_WIDTHS_KEY as L, RELEASE_PAGE_SIZES as le, RELEASE_SORTS as ue, RELEASE_SORT_COLUMNS as R, SEGMENT as z, SEGMENTED_TRACK as B, SegmentedRadioGroup as V, Segments as de, SelectionDock as H, Shuffle as fe, SortKeys as pe, SourceAvatar as me, Table as he, TableColumnControls as ge, TableColumnResizer as _e, TaskProgress as ve, WANTS_KEY as U, WantMagnets as ye, Wt as be, __toESM as xe, addWant as Se, apiGet as Ce, appSettingsStore as we, avatarInner as Te, busyProps as W, cachedMagnetStates as Ee, cardClass as De, cardRatio as Oe, catalogListSkeletonCellHtml as ke, composingKey as Ae, controlDiscoveryMetadata as je, controlReleaseMetadata as Me, coverArrived as Ne, coverFetching as Pe, coverFetchingHtml as Fe, coverStateAction as Ie, coverUrl as Le, discoveryArtwork as Re, discoveryKey as ze, discoveryScore as Be, entityDisplayName as Ve, entityFaceImg as He, entityPath as Ue, errorMessage as G, esc as We, facePos as Ge, fetchCoverNow as Ke, fetchDiscoveries as qe, fetchDiscoveryMetadata as Je, fetchReleases as Ye, fetchWants as Xe, firstGrapheme as Ze, fmtDur as Qe, gridLayout as $e, import_jsx_runtime as et, invalidateWants as K, javContentSkeleton as tt, javLayout as nt, javTagSkeleton as rt, jsx as q, jsxs as J, keepPreviousData as it, leadingGraphemes as at, logoUrl as ot, pageWindow as st, qE as ct, queryClient as Y, recommendationScore as lt, relayoutCovers as ut, releaseColumns as dt, releaseFilters as ft, releaseKey as pt, removeWants as mt, require_react as ht, resetWants as gt, searchNote as _t, selectRange as vt, selectionSummary as yt, spriteGlyph as bt, storeJavLayout as xt, suppressShiftTextSelection as St, textLang as Ct, tierPlaceholdersHtml as wt, useAction as X, useCatalogView as Tt, useEntityNames as Et, useQuery as Z, useTablePreferences as Dt, wantName as Ot, wireHorizontalScroller as kt, writeJavQuery as Q } from "./peach-app.js";
import { ErrorLine as At } from "./peach-app.source-view-CRZESleF.js";
// src/react/wants/want-list.tsx
var $ = /* @__PURE__ */ xe(ht(), 1), jt = {
	code: "手动添加",
	feed: "订阅新作",
	follow: "关注"
}, Mt = [
	["all", "全部"],
	["available", "有磁链"],
	["missing", "没磁链"]
], Nt = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	jt[e.origin]
].filter(Boolean).join(" · ");
function Pt({ want: e }) {
	return /* @__PURE__ */ J("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ q("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: "无封面"
		}), e.cover ? /* @__PURE__ */ q("img", {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function Ft({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: u }) {
	let [d, f] = (0, $.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ J("li", {
		"data-want-id": e.id,
		className: De({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ J("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ q(Pt, { want: e }), /* @__PURE__ */ J("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ J("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ q("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: Ot(e)
						}), e.code && e.title ? /* @__PURE__ */ q("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					Nt(e) ? /* @__PURE__ */ q("p", {
						className: "text-body-2-regular text-text-secondary",
						children: Nt(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ q("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: _t(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ q(At, {
						text: e.scrape_error,
						prefix: "资料未取得：",
						tone: "muted"
					}) : null,
					/* @__PURE__ */ J("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ q(l, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: be,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "来源页"
							}) : null,
							/* @__PURE__ */ q(c, {
								variant: "secondary",
								size: "small",
								leadingIcon: M,
								disabled: t,
								...W(n === `remove:${e.id}`),
								onClick: i,
								children: "移除"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ q(c, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...W(n === `reset:${e.id}`),
								onClick: r,
								children: "重新查找"
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ q(c, {
								variant: "secondary",
								size: "small",
								onClick: a,
								children: "查找资源"
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ q(ye, {
			want: e,
			readOnly: t,
			downloads: o,
			provider: s,
			toast: u,
			onSource: f
		}) : null]
	});
}
function It({ phase: e, label: t, rows: n, row: r }) {
	let [i, a] = (0, $.useState)(1), [s, l] = (0, $.useState)(20), [u, d] = (0, $.useState)("all"), f = Ee(n), p = (e) => e.has_magnets ?? f.get(e.code || "") ?? !1, m = n.filter(p), h = e !== "searching" || u === "all" ? n : n.filter((e) => p(e) === (u === "available")), g = st(h.length, s, i);
	return /* @__PURE__ */ J("section", {
		"aria-label": t,
		"data-want-phase": e,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ J("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ J("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [t, /* @__PURE__ */ q("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: n.length.toLocaleString()
					})]
				}), e === "searching" ? /* @__PURE__ */ q(V, {
					name: "want-magnet-filter",
					"aria-label": "待找磁链筛选",
					orientation: "horizontal",
					value: u,
					className: B,
					onChange: (e) => {
						d(e), a(1);
					},
					children: Mt.map(([e, t]) => /* @__PURE__ */ J(o, {
						value: e,
						"aria-label": t,
						className: z,
						children: [t, /* @__PURE__ */ q("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? m.length : n.length - m.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			h.length ? null : /* @__PURE__ */ q(ee, {
				size: "compact",
				icon: ct,
				title: "暂无符合条件的作品",
				actions: /* @__PURE__ */ q(c, {
					size: "small",
					onClick: () => {
						d("all"), a(1);
					},
					children: "查看全部"
				}),
				children: null
			}),
			/* @__PURE__ */ q("ul", {
				className: "flex flex-col gap-4",
				children: h.slice(g.start, g.end).map(r)
			}),
			/* @__PURE__ */ q("div", {
				"data-want-pager": "",
				children: /* @__PURE__ */ q(C, {
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
function Lt({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, $.useState)(""), [o, s] = (0, $.useState)(null), l = X(), u = Z({
		queryKey: U,
		queryFn: ({ signal: e }) => Xe(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => Se({ code: n }, e), (e) => {
			t(e.created ? `已加入想要：${Ot(e.want)}` : `${Ot(e.want)} 已经在想要里`), a(""), K();
		});
	}, f = (e) => {
		e.key === "Enter" && !Ae(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		l.run(`remove:${e.id}`, (t) => mt([e.id], t), () => {
			t(`已移除：${Ot(e)}`), K();
		});
	}, m = (e) => {
		l.run(`reset:${e.id}`, (t) => gt([e.id], t), () => {
			t(`${Ot(e)} 回到待找`), K();
		});
	}, h = u.data, _ = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), v = Z({
		queryKey: x,
		queryFn: ({ signal: e }) => Ce(`${S}?limit=100`, e),
		enabled: _.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), y = v.data?.providers.filter((e) => e.configured) || [], b = y[0]?.key || "";
	return /* @__PURE__ */ J("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ J("div", {
				className: De({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ q("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "按番号添加"
					}),
					/* @__PURE__ */ J("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ q("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ q(ae, {
								"aria-label": "番号",
								placeholder: "输入番号，例如 SSIS-950",
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ q(c, {
							variant: "primary",
							disabled: e || !i.trim(),
							...W(l.busy === "add"),
							onClick: d,
							children: "添加"
						})]
					}),
					l.error ? /* @__PURE__ */ q(N, {
						tone: "error",
						title: "这一次没有完成",
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ q(N, {
				tone: "error",
				title: "想要清单读取失败",
				children: G(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ q("div", {
				role: "status",
				"aria-label": "正在读取想要",
				dangerouslySetInnerHTML: { __html: tt("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ q(D, {
				role: "status",
				children: "正在给刚加入的番号取资料与封面。"
			}) : null,
			v.error ? /* @__PURE__ */ q(N, {
				tone: "error",
				title: "下载配置未取得",
				children: G(v.error)
			}) : null,
			v.data && !y.length ? /* @__PURE__ */ J(N, {
				tone: "neutral",
				children: ["尚未配置下载渠道。", /* @__PURE__ */ q("a", {
					href: "/settings/library?section=%E4%B8%8B%E8%BD%BD%E6%B8%A0%E9%81%93",
					children: "下载渠道设置"
				})]
			}) : null,
			v.data && !v.data.available ? /* @__PURE__ */ q(N, {
				tone: "neutral",
				children: "云下载只在允许修改数据库的设备上可用。"
			}) : null,
			h && !_.length ? /* @__PURE__ */ q(ee, {
				size: "compact",
				icon: ct,
				title: n ? "没有符合条件的作品" : "还没有想要的作品",
				actions: n && r ? /* @__PURE__ */ q(c, {
					size: "small",
					onClick: r,
					children: "清除搜索"
				}) : !n && !e ? /* @__PURE__ */ q(E, {
					target: "input[aria-label=\"番号\"]",
					children: "添加作品"
				}) : void 0,
				children: n ? "试试其他番号、女优或标题。" : "输入番号，添加想看的作品。"
			}) : null,
			F.map(([n, r]) => {
				let i = _.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ q(It, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ q(Ft, {
						want: n,
						readOnly: e,
						busy: l.busy,
						downloads: v.data,
						provider: b,
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
			/* @__PURE__ */ q(g, {
				prefill: o,
				close: () => s(null),
				receipt: t,
				provider: b
			})
		]
	});
}
// src/react/jav/jav-batch-resources.tsx
function Rt({ items: t, close: n, readOnly: r, receipt: i }) {
	let a = Z({
		queryKey: x,
		queryFn: ({ signal: e }) => Ce(`${S}?limit=50`, e),
		enabled: !!t
	}), o = a.data?.providers.find((e) => e.configured)?.key || "";
	return /* @__PURE__ */ J(ce, {
		isOpen: !!t,
		onOpenChange: (e) => {
			e || n();
		},
		width: "collections",
		children: [/* @__PURE__ */ J("div", {
			className: "sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-separator-border bg-background-full px-5 py-4",
			children: [/* @__PURE__ */ J(e, {
				slot: "title",
				className: "text-title-2-medium text-text-primary",
				children: [
					/* @__PURE__ */ q("span", {
						"data-copy-key": "jav.resources.title",
						children: "查找所选资源"
					}),
					" · ",
					t?.length || 0,
					" 部"
				]
			}), /* @__PURE__ */ q(c, {
				iconOnly: !0,
				variant: "ghost",
				leadingIcon: P,
				"aria-label": "关闭批量资源查找",
				onClick: n
			})]
		}), /* @__PURE__ */ J("div", {
			className: "flex min-w-0 flex-col gap-6 p-5",
			children: [a.error ? /* @__PURE__ */ J(N, {
				tone: "error",
				children: ["下载配置未取得：", G(a.error)]
			}) : null, t?.map((e) => /* @__PURE__ */ J("section", {
				"aria-label": e.code,
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ q("h3", {
						className: "text-headline-medium text-text-primary",
						children: e.code
					}),
					e.title ? /* @__PURE__ */ q("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.title
					}) : null,
					/* @__PURE__ */ q(ye, {
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
function zt(e) {
	let t = new MutationObserver(e);
	return t.observe(document.body, {
		attributes: !0,
		attributeFilter: ["data-density"]
	}), () => t.disconnect();
}
var Bt = () => document.body.dataset.density === "dense", Vt = (0, $.createContext)(null), Ht = () => (0, $.useContext)(Vt);
function Ut(e) {
	let t = Ht()?.visible;
	(0, $.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function Wt({ children: e, readOnly: t, receipt: n }) {
	let r = (0, $.useSyncExternalStore)(zt, Bt, () => !1), [i, a] = (0, $.useState)(!1), [o, s] = (0, $.useState)(/* @__PURE__ */ new Map()), [l, u] = (0, $.useState)([]), [d, f] = (0, $.useState)(null), p = (0, $.useRef)(null), m = X(), h = new Set(o.keys()), g = yt(h, l.map((e) => e.code)), _ = (0, $.useCallback)((e) => {
		u((t) => t.length === e.length && t.every((t, n) => t === e[n]) ? t : e), s((t) => {
			let n = e.filter((e) => t.has(e.code) && t.get(e.code) !== e);
			return n.length ? new Map([...t, ...n.map((e) => [e.code, e])]) : t;
		});
	}, []), v = m.cancel, y = (0, $.useCallback)(() => {
		v(), a(!1), s(/* @__PURE__ */ new Map()), p.current = null;
	}, [v]), b = () => s((e) => {
		let t = new Map(e);
		return l.forEach((e) => g.all ? t.delete(e.code) : t.set(e.code, e)), t;
	});
	(0, $.useEffect)(() => {
		let e = () => {
			i ? y() : a(!0);
		};
		return window.addEventListener(k, e), () => window.removeEventListener(k, e);
	}, [i, y]), (0, $.useEffect)(() => (i || (s(/* @__PURE__ */ new Map()), p.current = null), document.getElementById("selectMode")?.setAttribute("aria-pressed", String(i)), () => document.getElementById("selectMode")?.setAttribute("aria-pressed", "false")), [i]), (0, $.useEffect)(() => {
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
			vt(i, l.map((e) => e.code), n, e.code, t);
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
						await Se({ code: n.code }, e);
					} catch (e) {
						throw Error(`已加入 ${t} 部；${n.code} 未完成：${G(e)}`);
					}
					e.throwIfAborted(), t++, s((e) => {
						let t = new Map(e);
						return t.delete(n.code), t;
					});
				}
				return t;
			} finally {
				K();
			}
		}, (e) => n(`已加入想要 ${e} 部`));
	};
	return /* @__PURE__ */ J(Vt.Provider, {
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
			/* @__PURE__ */ q("div", {
				"data-jav-selection": "",
				"data-select-mode": i ? "" : void 0,
				className: "flex min-w-0 flex-col gap-4",
				children: e
			}),
			/* @__PURE__ */ J(H, {
				visible: i,
				count: `已选 ${o.size} 部`,
				label: "作品批量操作",
				children: [
					m.error ? /* @__PURE__ */ q("p", {
						role: "alert",
						className: "w-full px-2 text-caption-1-regular text-text-error-primary",
						children: m.error
					}) : null,
					/* @__PURE__ */ q(c, {
						size: "small",
						variant: "secondary",
						disabled: !l.length || !!m.busy,
						onClick: b,
						children: /* @__PURE__ */ q("span", {
							"data-copy-key": `jav.selection.page.${g.all ? "clear" : "all"}`,
							children: g.all ? "取消本页" : "全选本页"
						})
					}),
					/* @__PURE__ */ q(c, {
						size: "small",
						variant: "secondary",
						disabled: t || !S.length,
						...W(m.busy === "want"),
						onClick: C,
						children: "加入想要"
					}),
					/* @__PURE__ */ q(c, {
						size: "small",
						variant: "secondary",
						disabled: !o.size || !!m.busy,
						onClick: () => f([...o.values()]),
						children: "查找资源"
					}),
					/* @__PURE__ */ q(c, {
						size: "small",
						variant: "ghost",
						onClick: y,
						children: "取消选择"
					})
				]
			}),
			/* @__PURE__ */ q(Rt, {
				items: d,
				close: () => f(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function Gt({ item: e }) {
	Et();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ q(me, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: Te(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ q("a", {
			"data-media-avatar": "",
			style: r,
			href: Ue("performer", t.name, t.id),
			"aria-label": `打开女优页：${Ve("performer", t.name, t.id)}`,
			...i
		}, t.name) : /* @__PURE__ */ q("span", {
			"data-media-avatar": "",
			style: r,
			title: Ve("performer", t.name),
			...i
		}, t.name);
	});
	return t.length > 1 ? /* @__PURE__ */ q("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": Math.min(5, t.length) },
		children: n
	}) : n[0] || null;
}
// src/react/jav/discovery-card.tsx
var Kt = (e) => ({
	...e,
	cover: e.has_cover ? Le(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), qt = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function Jt({ item: e, readOnly: t }) {
	let n = X(), [r, i] = (0, $.useState)("");
	(0, $.useSyncExternalStore)(Pe.subscribe, Pe.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ q("span", {
		"data-media-nopic": "",
		children: "无封面"
	});
	if (a === "fetching" || Pe.has(e.code)) return /* @__PURE__ */ q("span", { dangerouslySetInnerHTML: { __html: Fe() } });
	let o = () => {
		n.run("cover", (t) => Ke(e.code, t), (t) => {
			t.has_cover ? Ne(e.code, t) : i(t.message || "没有找到可用的官方封面");
		});
	}, s = r || n.error ? "missing" : a, l = n.error || r || e.cover_reason;
	return /* @__PURE__ */ J("div", {
		"data-cover-state": s,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			/* @__PURE__ */ q("span", {
				"data-media-nopic": "",
				children: d[s]
			}),
			l ? /* @__PURE__ */ q("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: l,
				children: l
			}) : null,
			t ? null : /* @__PURE__ */ q(c, {
				size: "small",
				variant: "secondary",
				className: "mt-1",
				onClick: o,
				children: Ie(s)
			})
		]
	});
}
function Yt({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a, onTag: o, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = Ht(), h = m?.selected.has(e.code), g = !!m?.dense, _ = e.performer_refs?.length ? e.performer_refs.map((e) => e.name).join("、") : e.performers, v = Re(e, t, n), y = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ J("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-selected": h ? "" : void 0,
		onMouseDown: St,
		onClickCapture: (t) => {
			m && (m.mode || t.shiftKey || t.ctrlKey || t.metaKey) && (t.preventDefault(), t.stopPropagation(), m.toggle(e, t.shiftKey));
		},
		onClick: (e) => {
			e.target.closest("a,button,input") || i(y);
		},
		children: [
			v ? /* @__PURE__ */ q("a", {
				href: y,
				"aria-label": `查看 ${e.code} 详情`,
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(y));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: qt,
				children: /* @__PURE__ */ q(s, {
					artwork: {
						kind: "cover",
						html: v
					},
					identity: Re(e, "small", n),
					relayout: (e) => ut(e, t)
				})
			}) : /* @__PURE__ */ q("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: qt,
				children: /* @__PURE__ */ q(Jt, {
					item: e,
					readOnly: r
				})
			}),
			m?.mode ? /* @__PURE__ */ q("button", {
				type: "button",
				"data-media-check": "",
				"aria-label": `选择 ${e.code}`,
				"aria-pressed": !!h,
				children: /* @__PURE__ */ q("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ q("use", { href: "#i-check" })
				})
			}) : null,
			/* @__PURE__ */ J("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ q(Gt, { item: e }), /* @__PURE__ */ J("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ J("h3", {
							"data-jav-title": "",
							"data-media-title": "",
							title: `${e.code} · ${e.title || "标题未取得"}`,
							children: [
								/* @__PURE__ */ q("b", { children: e.code }),
								" ",
								e.title ? /* @__PURE__ */ q("span", {
									lang: Ct(e.title),
									children: e.title
								}) : "标题未取得"
							]
						}),
						/* @__PURE__ */ J("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ J("a", {
									"data-media-who": "",
									href: Ue("performer", e.performer_refs[0].name),
									title: _,
									children: [/* @__PURE__ */ q("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ q("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ q("span", { children: e.performer_refs[0].name })]
								}) : /* @__PURE__ */ J("span", {
									"data-media-who": "",
									title: _,
									children: [/* @__PURE__ */ q("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ q("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ q("span", { children: e.performer_refs?.[0]?.name || _ })]
								}),
								(e.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ J("span", {
									"data-media-who-more": "",
									children: [
										"等 ",
										e.performer_refs.length,
										" 人"
									]
								}) : null,
								e.release_date ? /* @__PURE__ */ q("span", {
									"data-media-facts": "",
									children: /* @__PURE__ */ J("time", {
										"data-media-release": "",
										dateTime: e.release_date,
										children: [/* @__PURE__ */ q("svg", {
											viewBox: "0 0 24 24",
											"aria-hidden": "true",
											children: /* @__PURE__ */ q("use", { href: "#i-calendar" })
										}), e.release_date]
									})
								}) : null
							]
						}),
						/* @__PURE__ */ J("div", {
							"data-jav-tags": "",
							"data-media-tags": "",
							children: [p, (e.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ q("button", {
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
			m?.mode ? null : /* @__PURE__ */ J("div", {
				"data-jav-actions": "",
				"data-compact": g ? "" : void 0,
				"data-has-source": e.link ? "" : void 0,
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ q(l, {
						"data-button-link": "",
						"data-jav-source": "",
						variant: "secondary",
						size: g ? "small" : "medium",
						iconOnly: g,
						"aria-label": "作品来源",
						title: "作品来源",
						leadingIcon: g ? be : void 0,
						trailingIcon: g ? void 0 : be,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: g ? null : "作品来源"
					}) : null,
					/* @__PURE__ */ q(c, {
						variant: "ghost",
						size: g ? "small" : "medium",
						disabled: r || e.wanted || !!e.asset_id,
						...W(u),
						onClick: d,
						children: e.asset_id ? "已入库" : e.wanted ? "已想要" : "想要"
					}),
					/* @__PURE__ */ q(c, {
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
var Xt = {
	widths: L,
	visibility: I
};
function Zt({ studio: e }) {
	let [t, n] = (0, $.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ q("img", {
		"data-list-studio-mark": "",
		src: ot(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ q("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true",
		children: at(e?.name || "", 1)
	});
}
function Qt({ items: e, waiting: o, filters: l, studios: u, javImage: f, readOnly: h, navigate: g, onTag: _, onSort: v, wanting: y, onWant: b, onResource: x }) {
	let S = Ht(), C = Dt("jav-releases", dt, Xt), T = dt.filter((e) => e.required || C.visibility[e.id] !== !1), E = Object.entries(R).find(([, e]) => e === l.sort)?.[0], ee = new Map(u.map((e) => [e.name, e])), te = (e) => (t) => {
		t.preventDefault(), S?.mode || t.shiftKey || t.ctrlKey || t.metaKey ? S?.toggle(e, t.shiftKey) : g(`/works/${encodeURIComponent(e.code)}`);
	}, ne = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = Re(t, "small", f);
				return /* @__PURE__ */ J("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ q("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: te(t),
						children: /* @__PURE__ */ q("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ q(s, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => ut(e, "small")
							}) : /* @__PURE__ */ q("span", {
								title: t.cover_reason || void 0,
								children: t.cover_state ? d[t.cover_state] : "无封面"
							})
						})
					}), /* @__PURE__ */ q("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ J("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || "标题未取得"}`,
							"aria-label": `查看 ${t.code} 详情`,
							onClick: te(t),
							children: [
								/* @__PURE__ */ q("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ q("span", {
									lang: Ct(t.title),
									children: t.title
								}) : "标题未取得"
							]
						})
					})]
				});
			}
			case "people": return n ? /* @__PURE__ */ J("div", {
				"data-list-people": "",
				children: [
					/* @__PURE__ */ q(Gt, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ q("a", {
						"data-media-who": "",
						href: Ue("performer", n),
						children: /* @__PURE__ */ q("span", { children: n })
					}) : /* @__PURE__ */ q("span", {
						"data-media-who": "",
						children: /* @__PURE__ */ q("span", { children: n })
					}),
					(t.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ J("span", {
						"data-media-who-more": "",
						children: [
							"等 ",
							t.performer_refs.length,
							" 人"
						]
					}) : null
				]
			}) : "—";
			case "studio": return t.studio ? /* @__PURE__ */ J("span", {
				"data-list-library": "",
				title: t.studio,
				children: [/* @__PURE__ */ q(Zt, { studio: ee.get(t.studio) }), /* @__PURE__ */ q("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ q("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ q("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": l.tag === e,
					onClick: () => _(l.tag === e ? "" : e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return Qe(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ J("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ q(c, {
					size: "small",
					variant: "ghost",
					disabled: h || t.wanted || !!t.asset_id,
					...W(y(t)),
					onClick: () => b(t),
					children: t.wanted ? "已想要" : "想要"
				}), /* @__PURE__ */ q(c, {
					size: "small",
					variant: "secondary",
					onClick: () => x(t),
					children: "查找资源"
				})]
			});
		}
	};
	return /* @__PURE__ */ J("div", {
		"data-catalog-table": "",
		"data-release-table": "",
		className: "flex min-w-0 flex-col gap-4",
		children: [/* @__PURE__ */ q("div", {
			className: "flex flex-wrap justify-end gap-2",
			role: "toolbar",
			"aria-label": "新作列表工具栏",
			children: /* @__PURE__ */ q("div", {
				"data-toolbar-actions": "",
				children: /* @__PURE__ */ q(ge, {
					preferences: C,
					label: "新作列表"
				})
			})
		}), /* @__PURE__ */ q(w, {
			follow: !0,
			preferences: C,
			children: /* @__PURE__ */ J(he, {
				"aria-label": "新作列表",
				size: "sm",
				sortDescriptor: E ? {
					column: E,
					direction: l.dir === "asc" ? "ascending" : "descending"
				} : void 0,
				onSortChange: (e) => {
					let t = R[String(e.column)];
					t && v(t, e.direction === "ascending" ? "asc" : "desc");
				},
				children: [/* @__PURE__ */ J(a, { children: [
					S?.mode ? /* @__PURE__ */ q(n, {
						id: "selection",
						width: 44,
						"aria-label": "选择作品",
						children: /* @__PURE__ */ q(p, {
							slot: null,
							"aria-label": "全选本页作品",
							isSelected: S.all,
							isIndeterminate: S.mixed,
							isDisabled: o || !e.length,
							onChange: S.selectPage
						})
					}) : null,
					T.map((e) => /* @__PURE__ */ q(n, {
						id: e.id,
						isRowHeader: e.id === "name",
						allowsSorting: e.id in R,
						...C.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ J(et.Fragment, { children: [/* @__PURE__ */ J("span", {
							className: "flex items-center gap-0.5",
							children: [e.label, e.id in R ? /* @__PURE__ */ q("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ q(m, {})
							}) : null]
						}), /* @__PURE__ */ q(_e, {
							preferences: C,
							id: e.id
						})] })
					}, e.id)),
					/* @__PURE__ */ q(n, {
						id: "remaining-space",
						"aria-label": "行空白区域",
						"data-table-space": "",
						width: C.spaceWidth,
						minWidth: 0
					})
				] }), /* @__PURE__ */ q(t, {
					renderEmptyState: () => "没有符合条件的新作",
					children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ J(r, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [
							S?.mode ? /* @__PURE__ */ q(i, {}) : null,
							T.map((e) => /* @__PURE__ */ q(i, { children: /* @__PURE__ */ q("span", { dangerouslySetInnerHTML: { __html: ke(e.id) } }) }, e.id)),
							/* @__PURE__ */ q(i, { "data-table-space": "" })
						]
					}, `skeleton-${t}`)) : e.map((e) => /* @__PURE__ */ J(r, {
						id: String(e.id),
						"data-catalog-row": "",
						"data-release-row": "",
						children: [
							S?.mode ? /* @__PURE__ */ q(i, { children: /* @__PURE__ */ q(p, {
								slot: null,
								"aria-label": `选择 ${e.code}`,
								isSelected: S.selected.has(e.code),
								onChange: () => S.toggle(e)
							}) }) : null,
							T.map((t) => /* @__PURE__ */ q(i, { children: ne(t.id, e) }, t.id)),
							/* @__PURE__ */ q(i, { "data-table-space": "" })
						]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/jav-releases.tsx
var $t = `<div data-catalog-tier="performers" data-skeleton="tiers">${wt("performer")}</div><div data-catalog-tier="studios">${wt("studio")}</div>`, en = (e) => `<span data-tier-initial>${We(Ze(Ve("performer", e.name, e.id)))}</span>${He({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: Ge(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function tn({ value: e }) {
	let t = lt(e);
	return /* @__PURE__ */ q("span", {
		"data-jav-taste-score": "",
		title: `口味 ${t.score}`,
		children: /* @__PURE__ */ q(h, {
			color: t.color,
			children: t.label
		})
	});
}
function nn({ studio: e }) {
	let [t, n] = (0, $.useState)(!1);
	return /* @__PURE__ */ q("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ q("img", {
			src: ot(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : at(e.name, 2)
	});
}
var rn = (e) => Ke(e).then((t) => (t.has_cover && Ne(e, t), t.has_cover));
function an({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	Et();
	let [o, s] = (0, $.useState)(() => ft(location.search));
	(0, $.useEffect)(() => {
		r !== o.q && (s((e) => ({
			...e,
			q: r,
			page: 1
		})), Q({ page: "" }));
	}, [r, o.q]);
	let d = (e, t) => {
		let n = o[e] === t ? "" : t;
		s((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Q({
			[e]: n,
			page: ""
		});
	}, p = (0, $.useRef)(null), m = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1;
		s((e) => ({
			...e,
			page: n,
			size: t
		})), Q({
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
		})), Q({
			performer: "",
			studio: "",
			tag: "",
			page: ""
		}), a();
	}, g = (e) => b(e, e === o.sort ? o.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc"), b = (e, t) => {
		s((n) => ({
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
	}, x = () => {
		let e = Math.random().toString(36).slice(2, 10);
		s((t) => ({
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
		let e = [...p.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => kt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let S = we();
	(0, $.useSyncExternalStore)(S.subscribe, S.version, S.version);
	let w = nt(), T = Tt(), E = Oe($e({
		active: !0,
		home: !1,
		portrait: !1
	})), ne = (0, $.useRef)(!1), D = Z({
		queryKey: pt(o),
		queryFn: ({ signal: e }) => Ye(o, e),
		placeholderData: it,
		retry: !1,
		refetchOnWindowFocus: !1,
		refetchInterval: () => ne.current ? y : !1
	}), O = D.data?.metadata_job, ae = (0, $.useRef)(!1);
	ae.current = O?.status === "running";
	let k = Y.getQueryData(v)?.metadata_job, A = Z({
		queryKey: v,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: O?.status === "running" || k?.status === "running",
		queryFn: ({ signal: e }) => Je(e),
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" || ae.current ? Math.max(1e3, e.state.data?.poll_after_ms || 3e3) : !1
	}), j = A.data && A.dataUpdatedAt >= D.dataUpdatedAt ? A.data.metadata_job : O, M = j?.status === "running";
	ne.current = M;
	let ce = (0, $.useRef)(!1);
	(0, $.useEffect)(() => {
		ce.current && !M && D.refetch(), ce.current = M;
	}, [M, D]);
	let P = (0, $.useRef)(""), F = JSON.stringify([
		o.performer,
		o.studio,
		o.tag,
		o.q,
		o.sort,
		o.dir,
		o.seed
	]), I = !D.isPlaceholderData && (D.data?.metadata_unread || 0) > 0 && !M;
	(0, $.useEffect)(() => {
		I && P.current !== F && (P.current = F, Me("start", o).then(async (e) => {
			await Y.cancelQueries({ queryKey: v }), Y.setQueryData(v, e);
		}).catch(() => {}));
	}, [I, F]);
	let L = X(), R = (e) => {
		L.run(String(e.id), (t) => Se({ code: e.code }, t), () => {
			t("已加入想要"), K(), D.refetch();
		});
	}, z = D.data;
	Ut(z?.items || []);
	let B = D.isPending, V = !!(o.performer || o.studio || o.tag || o.q), H = Math.max(1, Math.ceil((z?.total || 0) / o.size));
	return (0, $.useEffect)(() => {
		!z || D.isPlaceholderData || o.page <= H || (s((e) => ({
			...e,
			page: H
		})), Q({ page: H > 1 ? String(H) : "" }));
	}, [
		z,
		D.isPlaceholderData,
		o.page,
		H
	]), /* @__PURE__ */ J("section", {
		ref: p,
		"aria-label": "订阅新作",
		"aria-busy": B || D.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			B ? /* @__PURE__ */ q("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: $t }
			}) : null,
			z && (z.facets.performers.length || z.facets.studios.length) ? /* @__PURE__ */ J("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [z.facets.performers.length ? /* @__PURE__ */ q("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": "按女优筛选",
					children: z.facets.performers.map((e) => /* @__PURE__ */ J("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": o.performer === e.name,
						title: `${Ve("performer", e.name, e.id)} · ${e.count} 部`,
						onClick: () => d("performer", e.name),
						children: [/* @__PURE__ */ q("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: en(e) }
						}), /* @__PURE__ */ q("span", {
							"data-tier-name": "",
							children: Ve("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, z.facets.studios.length ? /* @__PURE__ */ q("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": "按厂牌筛选",
					children: z.facets.studios.map((e) => /* @__PURE__ */ J("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": o.studio === e.name,
						title: `${e.name} · ${e.count} 部`,
						onClick: () => d("studio", e.name),
						children: [
							/* @__PURE__ */ q(nn, { studio: e }),
							e.name,
							/* @__PURE__ */ q("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ q(te, {
				label: "新作筛选",
				topLabel: "新作标签",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: B,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ q("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ q("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: B ? { __html: rt() } : void 0,
						children: B ? null : z?.facets.tags.map((e) => /* @__PURE__ */ J(re, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: o.tag === e.name,
							onPress: () => d("tag", e.name),
							children: [e.name, /* @__PURE__ */ q("span", {
								"data-count-badge": "",
								children: e.count
							})]
						}, e.name))
					})
				}),
				bottom: /* @__PURE__ */ J(et.Fragment, { children: [
					/* @__PURE__ */ q("span", {
						"data-catalog-readout": "",
						children: B ? /* @__PURE__ */ q("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : V ? `${z?.total || 0} / ${z?.candidate_total || 0} 部` : `${z?.total || 0} 部`
					}),
					V ? /* @__PURE__ */ q(ie, {
						onPress: h,
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ J("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ q(fe, {
								onPress: x,
								busy: o.sort === "random" && D.isFetching
							}),
							T === "cards" ? /* @__PURE__ */ q(de, {
								label: "JAV 卡片版式",
								value: w,
								options: oe,
								onChange: xt
							}) : null,
							/* @__PURE__ */ q(f, {}),
							/* @__PURE__ */ q(pe, {
								sorts: ue.map(([e, t, n]) => ({
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
			B && T === "cards" ? /* @__PURE__ */ q("div", {
				role: "status",
				"aria-label": "正在读取新作",
				dangerouslySetInnerHTML: { __html: tt("discover", w) }
			}) : null,
			D.error ? /* @__PURE__ */ q(N, {
				tone: "error",
				title: "新作未取得",
				children: G(D.error)
			}) : null,
			M && j ? /* @__PURE__ */ q("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ q(ve, {
					label: `正在读取作品资料 · ${j.completed} / ${j.total} 部`,
					value: j.completed,
					total: j.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ q(_, {
				scope: "本页",
				fetchOne: rn,
				codes: (z?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? `已取到 ${n} 部封面` : `已取到 ${e} / ${n} 部封面，没取到的在卡上写了原因`), D.refetch();
				}
			}),
			!B && !D.error && !z?.items.length ? /* @__PURE__ */ q(ee, {
				icon: u,
				title: V ? "没有符合条件的新作" : "暂无未入库的新作",
				actions: V ? /* @__PURE__ */ q(c, {
					size: "small",
					onClick: h,
					children: "清除筛选"
				}) : /* @__PURE__ */ q(l, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: "添加订阅"
				}),
				children: V ? "清除筛选后查看全部新作。" : "订阅女优或厂牌后，还没入库的新作会出现在这里。"
			}) : null,
			L.error ? /* @__PURE__ */ q(N, {
				tone: "error",
				children: L.error
			}) : null,
			T === "list" ? B || z?.items.length ? /* @__PURE__ */ q(Qt, {
				items: z?.items || [],
				waiting: B,
				filters: o,
				studios: z?.facets.studios || [],
				javImage: S.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: (e) => d("tag", e || o.tag),
				onSort: b,
				wanting: (e) => L.busy === String(e.id),
				onWant: R,
				onResource: (e) => n(Kt(e))
			}) : null : /* @__PURE__ */ q("div", {
				"data-media-grid": "",
				className: se,
				style: { "--card-ratio": E },
				children: (z?.items || []).map((t) => /* @__PURE__ */ q(Yt, {
					item: t,
					layout: w,
					javImage: S.value.javImage,
					readOnly: e,
					navigate: i,
					tag: o.tag,
					onTag: (e) => d("tag", e || o.tag),
					wanting: L.busy === String(t.id),
					onWant: () => R(t),
					onResource: () => n(Kt(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ q(tn, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			z ? /* @__PURE__ */ q(C, {
				label: "新作",
				total: z.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: m,
				unit: "部作品",
				pageUnit: "部",
				pageSizes: le
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var on = bt("x"), sn = bt("refresh-cw"), cn = {
	releases: "筛选新作",
	discover: "筛选推荐",
	wants: "筛选想要"
};
function ln({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, $.useState)(null), [o, s] = (0, $.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Q({ q: e });
	};
	return /* @__PURE__ */ q(Wt, {
		readOnly: t,
		receipt: r,
		children: /* @__PURE__ */ J("div", {
			className: "flex w-full flex-col gap-6",
			children: [
				/* @__PURE__ */ q(A, {
					tab: e,
					navigate: n,
					find: () => a({}),
					search: /* @__PURE__ */ q(O, {
						label: cn[e] || "筛选",
						value: o,
						onQuery: c
					})
				}),
				e === "releases" ? /* @__PURE__ */ q(an, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : e === "discover" ? /* @__PURE__ */ q(un, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : /* @__PURE__ */ q(Lt, {
					readOnly: t,
					toast: r,
					query: o.trim(),
					clearQuery: () => c("")
				}),
				/* @__PURE__ */ q(g, {
					prefill: i,
					close: () => a(null),
					receipt: r
				})
			]
		})
	}, e);
}
function un({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, u] = (0, $.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, $.useState)(() => o.get("tag") || ""), [p, m] = (0, $.useState)(() => b.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [g, _] = (0, $.useState)(() => o.get("dir") === "asc"), x = (e) => {
		u(e), Q({ scope: e === "external" ? "" : e });
	}, S = (e) => {
		f(e), Q({ tag: e });
	}, C = (e) => {
		m(e), Q({ sort: e === "taste" ? "" : e });
	}, w = (e) => {
		_(e), Q({ dir: e ? "asc" : "" });
	}, E = (0, $.useRef)(null);
	(0, $.useEffect)(() => {
		let e = [...E.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => kt(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let D = we();
	(0, $.useSyncExternalStore)(D.subscribe, D.version, D.version);
	let O = nt(), ae = Oe($e({
		active: !0,
		home: !1,
		portrait: !1
	})), k = g ? "asc" : "desc", A = (0, $.useRef)(!1), M = Z({
		queryKey: ze(s, p, k),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => qe(s, e, {
			sort: p,
			direction: k
		}),
		refetchInterval: () => A.current ? y : !1
	}), ce = M.data?.metadata_job, P = (0, $.useRef)(!1);
	P.current = ce?.status === "running";
	let F = Z({
		queryKey: v,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => Je(e),
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" || P.current ? Math.max(1e3, e.state.data?.poll_after_ms || 3e3) : !1
	}), I = F.data && F.dataUpdatedAt >= M.dataUpdatedAt ? F.data.metadata_job : ce;
	A.current = s === "external" && I?.status === "running";
	let L = (e) => e ? `${e.job_id}:${e.status}` : "", le = (0, $.useRef)(""), ue = (0, $.useRef)(""), R = F.data?.metadata_job;
	(0, $.useEffect)(() => {
		let e = L(R), t = ue.current.endsWith(":running") && R && R.status !== "running";
		ue.current = e, t && e !== le.current && M.refetch();
	}, [L(R)]);
	let z = X(), B = X(), V = async (e, t) => {
		let n = await je(e, {
			sort: p,
			direction: k,
			jobId: I?.job_id
		}, t);
		e !== "start" && await M.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await Y.cancelQueries({ queryKey: v }), le.current = L(n.metadata_job), Y.setQueryData(v, n);
	}, H = (e) => {
		B.run(e, (t) => V(e === "stop" ? "cancel" : "refresh", t), () => {});
	}, fe = (0, $.useRef)(!1), me = s === "external" && I?.status !== "running" && (M.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, $.useEffect)(() => {
		me && !fe.current && (fe.current = !0, V("start").catch(() => {}));
	}, [me]);
	let he = M.data?.items || [], ge = [...new Set(he.flatMap((e) => e.tags || []))], _e = he.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), U = M.isPending;
	return Ut(_e), /* @__PURE__ */ J("section", {
		ref: E,
		"aria-label": "为你推荐",
		"aria-busy": U,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ q(te, {
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
				top: /* @__PURE__ */ J("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ J("div", {
						"data-catalog-views": "",
						children: [[["external", "库外发现"], ["library", "馆藏探索"]].map(([e, t]) => /* @__PURE__ */ q(re, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: s === e,
							onPress: () => {
								x(e), S("");
							},
							children: t
						}, e)), /* @__PURE__ */ q("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ q("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: U ? { __html: rt() } : void 0,
						children: U ? null : ge.map((e) => /* @__PURE__ */ J(re, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => S(d === e ? "" : e),
							children: [e, /* @__PURE__ */ q("span", {
								"data-count-badge": "",
								children: he.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ J(et.Fragment, { children: [
					/* @__PURE__ */ q("span", {
						"data-catalog-readout": "",
						children: U ? /* @__PURE__ */ q("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : `${_e.length} 部`
					}),
					/* @__PURE__ */ q(j, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ q(ie, {
						onPress: () => {
							S(""), a();
						},
						children: "清除筛选"
					}) : null,
					/* @__PURE__ */ J("span", {
						"data-entity-sorts": "",
						children: [
							s === "external" ? /* @__PURE__ */ q(ne, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: I?.status === "running" ? "停止读取" : "更新资料",
								disabled: U,
								"data-skeleton-action": U ? "" : void 0,
								busy: !!B.busy,
								icon: I?.status === "running" ? on : sn,
								onPress: () => H(I?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ q(de, {
								label: "JAV 卡片版式",
								value: O,
								options: oe,
								onChange: xt
							}),
							/* @__PURE__ */ q(pe, {
								sorts: b.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === p,
									dir: k
								})),
								onSort: (e) => {
									e === p ? w(!g) : (C(e), w(e === "code"));
								}
							})
						]
					})
				] })
			}),
			U ? /* @__PURE__ */ q("div", {
				role: "status",
				"aria-label": "正在读取推荐",
				dangerouslySetInnerHTML: { __html: tt("discover", O) }
			}) : null,
			M.error ? /* @__PURE__ */ q(N, {
				tone: "error",
				title: "推荐未取得",
				children: G(M.error)
			}) : null,
			s === "external" && I?.status === "running" ? /* @__PURE__ */ q("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ q(ve, {
					label: `正在读取作品资料 · ${I.completed} / ${I.total} 部`,
					value: I.completed,
					total: I.total
				})
			}) : null,
			I && I.status !== "running" && (I.status !== "complete" || I.failed > 0) ? /* @__PURE__ */ q(N, {
				tone: "neutral",
				action: /* @__PURE__ */ q(c, {
					variant: "secondary",
					...W(B.busy === "retry"),
					"aria-label": "立即重试读取作品资料",
					onClick: () => H("retry"),
					children: "立即重试"
				}),
				children: I.message || `作品资料 ${I.completed} / ${I.total} 部`
			}) : null,
			B.error ? /* @__PURE__ */ q(N, {
				tone: "error",
				children: B.error
			}) : null,
			!U && !M.error && !_e.length ? /* @__PURE__ */ q(ee, {
				icon: T,
				title: r || d ? "没有符合条件的推荐" : "暂无匹配口味的作品",
				actions: /* @__PURE__ */ J(et.Fragment, { children: [/* @__PURE__ */ q(l, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: "查看口味"
				}), r || d ? /* @__PURE__ */ q(c, {
					variant: "primary",
					size: "small",
					onClick: () => {
						a(), f(""), Q({
							q: "",
							tag: ""
						});
					},
					children: "清除筛选"
				}) : s === "library" ? /* @__PURE__ */ q(l, {
					variant: "primary",
					size: "small",
					href: "/",
					children: "浏览馆藏"
				}) : /* @__PURE__ */ q(c, {
					variant: "primary",
					size: "small",
					onClick: () => n({}),
					children: "查找作品"
				})] }),
				children: r || d ? "清除筛选后查看其他作品。" : s === "library" ? "观看或标记作品后，可以探索少看的馆藏。" : "可以查找番号，或更新关注来源。"
			}) : null,
			z.error ? /* @__PURE__ */ q(N, {
				tone: "error",
				children: z.error
			}) : null,
			/* @__PURE__ */ q("div", {
				"data-media-grid": "",
				className: se,
				style: { "--card-ratio": ae },
				children: _e.map((r) => {
					let a = lt(r.taste_score ?? r.score), o = [
						a.label,
						`口味 ${Be(r.taste_score ?? r.score)}`,
						M.data?.ranking_method === "mmr" && r.ranking_score != null ? `排序 ${Be(r.ranking_score)}` : "",
						r.source_score == null ? "" : `来源评分 ${r.source_score.toFixed(1)} / 5`,
						...r.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ q(Yt, {
						item: r,
						layout: O,
						javImage: D.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: S,
						wanting: z.busy === String(r.id),
						onWant: () => {
							z.run(String(r.id), (e) => Se({ code: r.code }, e), () => {
								t("已加入想要"), K(), M.refetch();
							});
						},
						onResource: () => n(Kt(r)),
						badge: /* @__PURE__ */ q("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": `推荐分 ${a.score}，${a.label}`,
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ q(h, {
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
export { ln as JavPage };

//# debugId=0921d8b5-09e9-414b-9789-fc6eb16deef8