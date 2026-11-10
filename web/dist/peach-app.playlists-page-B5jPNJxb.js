(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6fc69b44-9536-4100-991e-ebe59071ad23", e._sentryDebugIdIdentifier = "sentry-dbid-6fc69b44-9536-4100-991e-ebe59071ad23");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, Button as n, EmptyFocusButton as r, EmptyState as i, Input as a, MENU_ITEM as o, MENU_ITEM_INTERACTIVE as s, MENU_POPOVER_SURFACE as c, MenuDialog as l, MixCard as u, ModalFrame as d, ObjectOrderDialog as f, PLAYLISTS_KEY as p, RetryNote as m, __toESM as h, busyProps as g, confirmModal as _, createPlaylist as v, cx as y, deletePlaylist as b, errorMessage as x, fetchPlaylist as S, fetchPlaylists as C, import_jsx_runtime as w, jsx as T, jsxs as E, keepPlaylist as D, posterUrl as O, recreatePlaylist as k, refreshPlaylists as A, renamePlaylist as j, reorderPlaylist as M, require_react as N, resumeAssetId as P, spriteGlyph as F, useMutation as I, useQuery as L } from "./peach-app.js";
// src/react/playlists/playlists-page.tsx
var R = /* @__PURE__ */ h(N(), 1), z = F("ellipsis"), B = F("pencil"), V = F("trash"), H = F("playlist"), U = y(o, s, "text-body-2-medium"), W = "播放列表名称不能为空", G = (e) => async () => {
	try {
		await e();
	} finally {
		A();
	}
};
function K({ toast: e }) {
	let [t, r] = (0, R.useState)(""), [i, o] = (0, R.useState)(""), s = I({
		mutationFn: (e) => v(e),
		onSuccess: (t) => {
			r(""), o(""), A(), e("已新建播放列表", { undo: G(() => b(t.playlist.id)) });
		},
		onError: (e) => o(x(e) || "新建失败")
	});
	return /* @__PURE__ */ E("form", {
		"data-playlist-create": "",
		"aria-label": "新建播放列表",
		onSubmit: (e) => {
			e.preventDefault(), s.isPending || (t.trim() ? s.mutate(t) : o(W));
		},
		className: "flex flex-wrap items-end gap-2",
		children: [/* @__PURE__ */ T("div", {
			className: "min-w-50 max-w-80 flex-1 basis-50 max-board-narrow:min-w-0 max-board-narrow:max-w-none",
			children: /* @__PURE__ */ T(a, {
				label: "新播放列表",
				placeholder: "输入名称",
				maxLength: 80,
				value: t,
				onChange: (e) => {
					r(e), o("");
				},
				validationBehavior: "aria",
				isInvalid: !!i,
				hint: i || void 0
			})
		}), /* @__PURE__ */ T(n, {
			type: "submit",
			...g(s.isPending),
			children: "新建"
		})]
	});
}
function q({ target: t, close: r, toast: i }) {
	let [o, s] = (0, R.useState)(""), [c, l] = (0, R.useState)(""), u = (0, R.useRef)(null);
	(0, R.useEffect)(() => {
		if (!t) return;
		s(t.name), l("");
		let e = requestAnimationFrame(() => {
			u.current?.focus(), u.current?.select();
		});
		return () => cancelAnimationFrame(e);
	}, [t]);
	let f = I({
		mutationFn: ({ row: e, value: t }) => j(e.id, t),
		onSuccess: (e, { row: t }) => {
			r(), A(), i("已重命名播放列表", { undo: G(() => j(t.id, t.name)) });
		},
		onError: (e) => l(x(e))
	});
	return /* @__PURE__ */ T(d, {
		isOpen: !!t,
		onOpenChange: (e) => {
			e || r();
		},
		width: "form",
		children: /* @__PURE__ */ E("form", {
			"data-playlist-rename": "",
			onSubmit: (e) => {
				if (e.preventDefault(), !t || f.isPending) return;
				let n = o.trim();
				n ? f.mutate({
					row: t,
					value: n
				}) : l(W);
			},
			className: "flex min-h-0 flex-col",
			children: [/* @__PURE__ */ E("div", {
				className: "flex flex-col gap-4 p-5",
				children: [/* @__PURE__ */ T(e, {
					slot: "title",
					className: "text-title-2-semibold text-text-primary",
					children: "编辑名称"
				}), /* @__PURE__ */ T(a, {
					ref: u,
					label: "名称",
					placeholder: "输入名称",
					maxLength: 80,
					value: o,
					onChange: (e) => {
						s(e), l("");
					},
					validationBehavior: "aria",
					isInvalid: !!c,
					hint: c || void 0
				})]
			}), /* @__PURE__ */ E("div", {
				className: "flex justify-between gap-4 p-3",
				children: [/* @__PURE__ */ T(n, {
					variant: "secondary",
					onClick: r,
					children: "取消"
				}), /* @__PURE__ */ T(n, {
					type: "submit",
					...g(f.isPending),
					children: "保存名称"
				})]
			})]
		})
	});
}
function J({ name: e, onRename: n, onDelete: r, onSort: i }) {
	let a = (0, R.useRef)(null), [o, s] = (0, R.useState)(!1), u = (e) => {
		s(!1), e();
	};
	return /* @__PURE__ */ E(w.Fragment, { children: [/* @__PURE__ */ T("button", {
		ref: a,
		type: "button",
		title: "更多操作",
		"aria-label": `播放列表操作：${e}`,
		"aria-haspopup": "dialog",
		"aria-expanded": o,
		"data-playlist-menu": "",
		onClick: () => s(!0),
		className: "flex size-7.5 flex-none cursor-pointer items-center justify-center rounded-2lg text-foreground-icon-secondary outline-none transition-colors hover:bg-background-primary-hover hover:text-foreground-icon-primary aria-expanded:bg-background-primary-hover aria-expanded:text-foreground-icon-primary focus-visible:ring-2 focus-visible:ring-border-focus-ring",
		children: /* @__PURE__ */ T(z, {
			"aria-hidden": !0,
			className: "size-4.5"
		})
	}), /* @__PURE__ */ T(t, {
		triggerRef: a,
		isOpen: o,
		onOpenChange: s,
		placement: "bottom end",
		offset: 4,
		className: c,
		children: /* @__PURE__ */ E(l, {
			"aria-label": `播放列表操作：${e}`,
			className: "flex w-37.5 flex-col gap-0.5 outline-none",
			children: [
				/* @__PURE__ */ E("button", {
					type: "button",
					className: U,
					onClick: () => u(n),
					children: [/* @__PURE__ */ T(B, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					}), "编辑名称"]
				}),
				/* @__PURE__ */ E("button", {
					type: "button",
					className: U,
					onClick: () => u(i),
					children: [/* @__PURE__ */ T(H, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					}), "调整播放顺序"]
				}),
				/* @__PURE__ */ E("button", {
					type: "button",
					className: U,
					onClick: () => u(r),
					children: [/* @__PURE__ */ T(V, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					}), "删除播放列表"]
				})
			]
		})
	})] });
}
function Y({ openPlaylist: e, openEntity: t, canFlip: n, toast: a, revision: o }) {
	let s = L({
		queryKey: p,
		queryFn: ({ signal: e }) => C(e)
	}), [c, l] = (0, R.useState)(null), [d, f] = (0, R.useState)(null), h = (0, R.useRef)(o);
	(0, R.useEffect)(() => {
		h.current !== o && (h.current = o, A());
	}, [o]);
	let g = s.data, v = g?.items ?? [], y = (e) => {
		_({
			title: "删除播放列表",
			body: "这个播放列表将被删除，视频文件保留。",
			confirmLabel: "删除播放列表",
			danger: !0,
			onConfirm: async () => {
				let t = await D(e.id);
				await b(e.id), A(), a("已删除播放列表", t ? { undo: G(() => k(t)) } : void 0);
			}
		});
	};
	return /* @__PURE__ */ E("div", {
		className: "w-full pt-1 pb-10.5",
		children: [
			/* @__PURE__ */ E("header", {
				className: "mb-4 flex items-start justify-between gap-4.5 max-board-narrow:flex-col max-board-narrow:items-stretch",
				children: [/* @__PURE__ */ E("div", { children: [/* @__PURE__ */ T("h2", {
					className: "mb-1 text-display-4-medium! text-text-primary",
					children: "播放列表"
				}), /* @__PURE__ */ T("p", {
					className: "text-body-2-regular text-text-secondary",
					children: "保存 Mix，按自己的顺序继续播放。"
				})] }), /* @__PURE__ */ T(K, { toast: a })]
			}),
			/* @__PURE__ */ T("div", {
				className: "mx-auto w-full max-w-board",
				children: g ? v.length ? /* @__PURE__ */ T("div", {
					"data-playlist-grid": "",
					className: "card-grid-cover gap-4.5",
					children: v.map((r) => {
						let i = P(r), a = r.name.trim() || "未命名播放列表";
						return /* @__PURE__ */ T(u, {
							"data-playlist-card": String(r.id),
							name: a,
							caption: r.source_kind === "mix" ? "由 Mix 保存" : "手动播放列表",
							count: r.item_count,
							poster: r.preview_asset_id ? O(r.preview_asset_id) : null,
							flipImages: async () => (r.preview_ids || []).map(O),
							canFlip: n,
							faces: r.faces || [],
							onOpenEntity: t,
							...i ? { onOpen: () => e(r.id, i) } : {},
							openLabel: `打开播放列表 ${a}`,
							menu: /* @__PURE__ */ T(J, {
								name: a,
								onRename: () => l(r),
								onDelete: () => y(r),
								onSort: () => f(r)
							})
						}, r.id);
					})
				}) : /* @__PURE__ */ T(i, {
					icon: H,
					title: "还没有播放列表",
					actions: /* @__PURE__ */ T(r, {
						target: "[data-playlist-create] input",
						children: "新建播放列表"
					}),
					children: "保存 Mix 或新建列表后，会在这里按自己的顺序继续播放。"
				}) : s.isError ? /* @__PURE__ */ T(m, {
					message: x(s.error) || "播放列表读取失败",
					onRetry: () => void s.refetch()
				}) : null
			}),
			/* @__PURE__ */ T(q, {
				target: c,
				close: () => l(null),
				toast: a
			}),
			d ? /* @__PURE__ */ T(X, {
				row: d,
				close: () => f(null),
				toast: a
			}, d.id) : null
		]
	});
}
function X({ row: e, close: t, toast: r }) {
	let i = L({
		queryKey: ["playlist-order", e.id],
		queryFn: ({ signal: t }) => S(e.id, t),
		staleTime: 0,
		refetchOnWindowFocus: !1,
		refetchOnReconnect: !1
	}), a = i.data;
	return !a || i.isFetching ? /* @__PURE__ */ T(d, {
		isOpen: !0,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "调整播放顺序",
		children: /* @__PURE__ */ E("div", {
			className: "p-5",
			children: [i.isError ? /* @__PURE__ */ T(m, {
				message: x(i.error),
				onRetry: () => void i.refetch()
			}) : /* @__PURE__ */ T("p", {
				role: "status",
				children: "正在读取播放列表"
			}), /* @__PURE__ */ T(n, {
				variant: "secondary",
				onClick: t,
				children: "取消"
			})]
		})
	}) : /* @__PURE__ */ T(f, {
		title: `调整播放顺序 · ${e.name}`,
		close: t,
		items: a.items.map((e) => ({
			id: String(e.id),
			name: e.title || e.name || `影片 ${e.id}`
		})),
		save: async (t) => {
			await M(e.id, t.map(Number)), A(), r("播放顺序已保存", { undo: G(() => M(e.id, a.items.map((e) => e.id))) });
		}
	});
}
export { Y as PlaylistsPage };

//# debugId=6fc69b44-9536-4100-991e-ebe59071ad23