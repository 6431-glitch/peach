(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eb3db4e7-95e3-4e12-9477-ffb7a8e7dcb6", e._sentryDebugIdIdentifier = "sentry-dbid-eb3db4e7-95e3-4e12-9477-ffb7a8e7dcb6");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, CHECK_ALL_KEY as a, COVER_JOB_KEY as o, CUSTOM_SOURCES_KEY as s, CUSTOM_SOURCES_URL as c, Checkbox as l, Chip as u, Disclosure as d, ErrorText as f, ExternalLink as p, Fact as m, FactList as h, FieldLabel as g, Footer as _, Help as v, Input as y, IssueRow as b, LinkButton as x, LoadingDots as S, Note as C, Progress as w, Rows as T, SCRAPING_CHECK_ALL_URL as E, SCRAPING_CHECK_URL as D, SCRAPING_COVER_URL as O, SCRAPING_KEY as k, SCRAPING_SETTINGS_URL as A, SEGMENT as j, SEGMENTED_TRACK as M, Section as N, SegmentedRadioGroup as ee, Select$1 as te, SelectField as P, SelectItem as ne, SettingsRow as re, Stack as F, StatusLabel as I, Switch as ie, __toESM as ae, apiGet as L, apiSend as R, busyProps as z, cardClass as oe, checkText as se, composingKey as B, confirmModal as V, errorMessage as H, esc as ce, fetchAmaneBridge as le, fetchCheckAllJob as ue, fetchCoverJob as de, fetchCustomSources as fe, fetchSources as pe, i2 as me, import_jsx_runtime as he, jsx as U, jsxs as W, momentText as ge, queryClient as G, require_react as _e, spinnerHtml as ve, useAction as K, useBackgroundJob as q, useMutation as J, useQuery as Y } from "./peach-app.js";
import { CodeBlock as ye } from "./peach-app.code-block-BbD0jQqq.js";
import { Page as be } from "./peach-app.page-CW3QRN2N.js";
import { SiteMark as X } from "./peach-app.site-mark-B3G3SZCA.js";
import { ConnectionStatus as xe } from "./peach-app.connection-status-BjZE05sg.js";
// src/react/scraping/custom-sources.tsx
var Z = /* @__PURE__ */ ae(_e(), 1), Se = [
	["code", "番号"],
	["title", "标题"],
	["studio", "厂牌"],
	["series", "系列"],
	["release_date", "发行日期"],
	["performers", "演员（文本数组）"],
	["tags", "标签（文本数组）"]
], Ce = [
	["censored", "有码"],
	["amateur", "素人"],
	["uncensored", "无码"],
	["fc2", "FC2"],
	["kmib", "韩国 MIB"],
	["other", "其他"],
	["unsure", "待核番号"],
	["unknown", "未知"]
], we = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function Te({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), r = Y({
		queryKey: s,
		queryFn: ({ signal: e }) => fe(e)
	}), a = K(), o = (e) => G.setQueryData(s, e), l = !!(r.isPending || r.error || r.data?.items.length || a.error), u = /* @__PURE__ */ U(i, {
		variant: "secondary",
		onClick: () => n(we()),
		children: "添加来源"
	});
	return /* @__PURE__ */ W(N, {
		title: "自定义元数据来源",
		children: [
			l ? /* @__PURE__ */ W(F, { children: [
				r.isPending ? /* @__PURE__ */ U("div", {
					"aria-busy": "true",
					"data-skeleton": "",
					"aria-label": "读取自定义来源"
				}) : null,
				r.error ? /* @__PURE__ */ U(f, { children: H(r.error) }) : null,
				r.data?.items.map((t) => /* @__PURE__ */ W("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ U("span", {
							className: "min-w-0 flex-1",
							children: t.name
						}),
						/* @__PURE__ */ U(I, {
							tone: t.enabled ? "success" : "neutral",
							children: t.enabled ? "已启用" : "已停用"
						}),
						/* @__PURE__ */ U(i, {
							variant: "secondary",
							onClick: () => n(t),
							children: "编辑"
						}),
						/* @__PURE__ */ U(i, {
							variant: "secondary",
							...z(a.busy === t.id),
							onClick: () => void a.run(t.id, (e) => R(c, {
								...t,
								enabled: !t.enabled
							}, "POST", e), (n) => {
								o(n), e(t.enabled ? "已停用来源" : "已启用来源");
							}),
							children: t.enabled ? "停用" : "启用"
						}),
						/* @__PURE__ */ U(i, {
							variant: "danger",
							onClick: () => V({
								title: "删除自定义来源",
								body: `删除「${ce(t.name)}」后，采集将不再查询这个来源。`,
								confirmLabel: "删除来源",
								danger: !0,
								onConfirm: async () => {
									o(await R(c, {
										action: "delete",
										id: t.id
									})), n(null), e("已删除来源");
								}
							}),
							children: "删除"
						})
					]
				}, t.id)),
				a.error ? /* @__PURE__ */ U(f, { children: a.error }) : null
			] }) : null,
			t ? null : l ? /* @__PURE__ */ U(_, { children: u }) : /* @__PURE__ */ U(F, { children: /* @__PURE__ */ U("div", {
				className: "flex justify-end",
				children: u
			}) }),
			t ? /* @__PURE__ */ U(Ee, {
				initial: t,
				cancel: () => n(null),
				saved: (t) => {
					o(t), n(null), e("已保存来源");
				}
			}, t.id || "new") : null
		]
	});
}
function Ee({ initial: e, cancel: t, saved: n }) {
	let [r, a] = (0, Z.useState)(e), [o, s] = (0, Z.useState)(""), [u, d] = (0, Z.useState)(""), p = (0, Z.useRef)(0), m = K(), h = (e) => {
		p.current++, a((t) => ({
			...t,
			...e
		})), d("");
	};
	return /* @__PURE__ */ W("form", {
		"aria-label": "元数据来源配置",
		"aria-busy": m.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), m.run("save", (e) => R(c, r, "POST", e), n);
		},
		children: [/* @__PURE__ */ W(F, { children: [
			/* @__PURE__ */ U(y, {
				label: "来源名称",
				value: r.name,
				maxLength: 80,
				onChange: (e) => h({ name: e })
			}),
			/* @__PURE__ */ U(y, {
				label: "JSON 接口地址",
				value: r.endpoint,
				maxLength: 2048,
				placeholder: "https://example.com/api/movies/{code}",
				onChange: (e) => h({ endpoint: e })
			}),
			/* @__PURE__ */ W("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ U(g, { children: "来源连接方式" }), /* @__PURE__ */ U(P, {
					id: "custom-source-network",
					label: "来源连接方式",
					epoch: 0,
					value: r.network || "direct",
					options: [["direct", "直连"], ["peach_proxy", "Peach 代理"]],
					onPick: (e) => h({ network: e })
				})]
			}),
			/* @__PURE__ */ W("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ U(g, { children: "接口番号格式" }), /* @__PURE__ */ U(P, {
					id: "custom-source-code-format",
					label: "接口番号格式",
					epoch: 0,
					value: r.code_format || "original",
					options: [
						["original", "原样"],
						["lowercase", "小写"],
						["compact", "去掉连字符"],
						["underscore", "连字符转下划线"]
					],
					onPick: (e) => h({ code_format: e })
				})]
			}),
			/* @__PURE__ */ U(v, { children: "填写公开 JSON 接口和响应字段路径，例如 data.title。番号字段用于核对作品身份。" }),
			Se.map(([e, t]) => /* @__PURE__ */ U(y, {
				label: `${t}字段路径`,
				value: r.fields[e] || "",
				onChange: (t) => {
					let n = { ...r.fields };
					t ? n[e] = t : delete n[e], h({ fields: n });
				}
			}, e)),
			/* @__PURE__ */ U("div", {
				className: "flex flex-wrap gap-3",
				role: "group",
				"aria-label": "适用内容类型",
				children: Ce.map(([e, t]) => /* @__PURE__ */ U(l, {
					isSelected: r.content_types.includes(e),
					onChange: (t) => h({ content_types: t ? [...r.content_types, e] : r.content_types.filter((t) => t !== e) }),
					children: t
				}, e))
			}),
			/* @__PURE__ */ U(l, {
				isSelected: r.enabled,
				onChange: (e) => h({ enabled: e }),
				children: "启用来源"
			}),
			/* @__PURE__ */ U(y, {
				label: "试查番号（回车查询）",
				value: o,
				onChange: (e) => {
					p.current++, s(e), d("");
				},
				onKeyDown: (e) => {
					if (e.key !== "Enter" || B(e.nativeEvent)) return;
					e.preventDefault();
					let t = p.current;
					m.run("preview", (e) => R(c, {
						...r,
						code: o,
						action: "preview"
					}, "POST", e), (e) => {
						t === p.current && d(JSON.stringify(e.record, null, 2));
					}, (e) => {
						t === p.current && m.setError(H(e));
					});
				}
			}),
			m.busy === "preview" ? /* @__PURE__ */ W(v, {
				role: "status",
				children: [/* @__PURE__ */ U("span", { dangerouslySetInnerHTML: { __html: ve("正在试查来源") } }), "正在试查来源"]
			}) : null,
			u ? /* @__PURE__ */ U(ye, {
				code: u,
				language: "json",
				label: "元数据接口返回"
			}) : null,
			m.error ? /* @__PURE__ */ U(f, { children: m.error }) : null
		] }), /* @__PURE__ */ W(_, { children: [/* @__PURE__ */ U(i, {
			variant: "secondary",
			type: "button",
			onClick: t,
			children: "取消"
		}), /* @__PURE__ */ U(i, {
			type: "submit",
			...z(m.busy === "save"),
			children: "保存来源"
		})] })]
	});
}
// src/react/settings/stashdb-settings.tsx
function De({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(""), [l, p] = (0, Z.useState)([]), [m, h] = (0, Z.useState)(null), [g, _] = (0, Z.useState)(""), [b, x] = (0, Z.useState)(""), [S, C] = (0, Z.useState)(""), [w, T] = (0, Z.useState)(""), [E, D] = (0, Z.useState)(null), [O, k] = (0, Z.useState)([]), A = K();
	function j(e, n, r) {
		V({
			title: "Apply StashDB match",
			confirmLabel: "Apply match",
			body: `${e.label} → ${r.title}. Replace this video's available title, date, studio, cast, and cover with the StashDB match?`,
			onConfirm: async () => {
				let i = await R("/api/configuration/stashdb/apply", {
					asset_id: e.id,
					candidate_id: r.id,
					revision: n.revision
				});
				k((t) => t.filter((t) => t.id !== e.id)), m?.id === e.id && D(null), t(i.image_errors.length ? "Match applied, but some artwork could not be downloaded." : "StashDB match applied");
			}
		});
	}
	function M(e) {
		e.preventDefault(), a.trim() && A.run("save", (e) => R("/api/configuration/stashdb/settings", { api_key: a.trim() }, "POST", e), (e) => {
			r(e), o(""), t("StashDB key saved");
		});
	}
	return /* @__PURE__ */ W(he.Fragment, { children: [/* @__PURE__ */ U(N, {
		title: "Metadata sources",
		children: /* @__PURE__ */ U(F, { children: /* @__PURE__ */ U("div", {
			className: oe({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
			children: /* @__PURE__ */ W("div", {
				className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
				children: [/* @__PURE__ */ W("div", {
					className: "flex min-w-0 flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ U("b", {
						className: "text-body-medium text-text-primary",
						children: "StashDB"
					}), /* @__PURE__ */ U(u, {
						variant: "caption",
						color: n.api_key_set ? "lime" : "neutral",
						children: n.api_key_set ? "Configured" : "Optional"
					})]
				}), /* @__PURE__ */ U(d, {
					summary: n.api_key_set ? "Edit credentials" : "Enter credentials",
					children: /* @__PURE__ */ W("form", {
						onSubmit: M,
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ U(v, { children: "Search StashDB for library videos and apply matches." }),
							/* @__PURE__ */ U(ie, {
								"aria-label": "Search StashDB during metadata scans",
								isSelected: n.enabled,
								isDisabled: !n.api_key_set || !!A.busy,
								onChange: (e) => void A.run("enable", (t) => R("/api/configuration/stashdb/settings", { enabled: e }, "POST", t), (n) => {
									r(n), t(e ? "StashDB scan enabled" : "StashDB scan disabled");
								})
							}),
							/* @__PURE__ */ U(v, { children: "During metadata scans, automatically apply only a unique match with an exact title, studio, and release date from the filename. Other candidates remain available for review." }),
							/* @__PURE__ */ U(y, {
								label: "StashDB API key",
								type: "password",
								autoComplete: "new-password",
								value: a,
								onChange: o,
								placeholder: n.api_key_set ? "Key saved; leave blank to keep it" : "Enter your API key"
							}),
							/* @__PURE__ */ U("a", {
								href: "https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/accessing-stashdb/",
								target: "_blank",
								rel: "noreferrer",
								children: "Get a StashDB API key"
							}),
							A.error ? /* @__PURE__ */ U(f, { children: A.error }) : null,
							/* @__PURE__ */ W("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ U(i, {
										type: "submit",
										disabled: !a.trim(),
										...z(A.busy === "save"),
										children: "Save key"
									}),
									/* @__PURE__ */ U(i, {
										type: "button",
										variant: "secondary",
										disabled: !n.api_key_set,
										...z(A.busy === "check"),
										onClick: () => void A.run("check", (e) => R("/api/configuration/stashdb/check", {}, "POST", e), (e) => {
											if (!e.ok) throw Error("StashDB account access is unavailable.");
											t("StashDB connection successful");
										}),
										children: "Test connection"
									}),
									/* @__PURE__ */ U(i, {
										type: "button",
										variant: "secondary",
										disabled: !n.api_key_set,
										...z(A.busy === "remove"),
										onClick: () => void A.run("remove", (e) => R("/api/configuration/stashdb/settings", {
											api_key: "",
											enabled: !1
										}, "POST", e), (e) => {
											r(e), D(null), t("StashDB key removed");
										}),
										children: "Remove key"
									})
								]
							})
						]
					})
				})]
			})
		}) })
	}), /* @__PURE__ */ U(N, {
		title: "StashDB matches",
		children: /* @__PURE__ */ W(F, { children: [
			/* @__PURE__ */ U(i, {
				type: "button",
				variant: "secondary",
				...z(A.busy === "queue"),
				onClick: () => void A.run("queue", (e) => L("/api/configuration/stashdb/review", e), k),
				children: "Show scan candidates"
			}),
			O.map((e) => /* @__PURE__ */ W("article", {
				className: "flex flex-col gap-2 rounded-lg border border-separator-border p-3",
				children: [
					/* @__PURE__ */ U("strong", {
						"data-i18n-ignore": "",
						children: e.label
					}),
					e.preview.truncated ? /* @__PURE__ */ U(v, { children: "Search results were truncated; verify the source carefully." }) : null,
					e.preview.candidates.map((t) => /* @__PURE__ */ W("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ W("a", {
							href: t.url,
							target: "_blank",
							rel: "noreferrer",
							"data-i18n-ignore": "",
							children: [
								t.title,
								" · ",
								t.studio,
								" · ",
								t.date
							]
						}), /* @__PURE__ */ U(i, {
							type: "button",
							variant: "secondary",
							disabled: !!A.busy,
							onClick: () => j(e, e.preview, t),
							children: "Apply selected match"
						})]
					}, t.id))
				]
			}, e.id)),
			/* @__PURE__ */ U("h3", {
				className: "text-body-medium text-text-primary",
				children: "Manual match"
			}),
			/* @__PURE__ */ U(v, { children: "Find a library video, then search StashDB and choose a match." }),
			/* @__PURE__ */ U(y, {
				label: "Find a library video",
				value: s,
				onChange: c
			}),
			/* @__PURE__ */ U(i, {
				type: "button",
				variant: "secondary",
				...z(A.busy === "library"),
				onClick: () => void A.run("library", (e) => L(`/api/configuration/stashdb/library?query=${encodeURIComponent(s)}`, e), p),
				children: "Find videos"
			}),
			l.map((e) => /* @__PURE__ */ W("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ U("span", {
					"data-i18n-ignore": "",
					children: e.label
				}), /* @__PURE__ */ U(i, {
					type: "button",
					variant: "secondary",
					disabled: !n.api_key_set || !!A.busy,
					onClick: () => {
						h(e), _(""), x(""), C(""), T(""), D(null);
					},
					children: "Manual match"
				})]
			}, e.id)),
			m ? /* @__PURE__ */ W("div", {
				className: "flex flex-col gap-2 rounded-lg border border-separator-border p-3",
				children: [
					/* @__PURE__ */ U("strong", {
						"data-i18n-ignore": "",
						children: m.label
					}),
					/* @__PURE__ */ U(y, {
						label: "Title",
						value: g,
						onChange: _,
						placeholder: "Leave all fields blank to use video details"
					}),
					/* @__PURE__ */ U(y, {
						label: "Actor (optional)",
						value: b,
						onChange: x
					}),
					/* @__PURE__ */ U(y, {
						label: "Producer / studio",
						value: S,
						onChange: C
					}),
					/* @__PURE__ */ U(y, {
						label: "Release date",
						value: w,
						onChange: T,
						placeholder: "YYYY, YYYY/MM, or YYYY/MM/DD"
					}),
					/* @__PURE__ */ U(i, {
						type: "button",
						variant: "secondary",
						...z(A.busy === "preview"),
						onClick: () => void A.run("preview", (e) => R("/api/configuration/stashdb/preview", {
							asset_id: m.id,
							search_fields: {
								title: g.trim(),
								actor: b.trim(),
								studio: S.trim(),
								date: w.trim()
							}
						}, "POST", e), (e) => {
							D(e), k((e) => e.filter((e) => e.id !== m.id));
						}),
						children: "Search StashDB"
					}),
					E ? /* @__PURE__ */ W("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ U(v, { children: E.truncated ? "Some results were omitted. Refine the search before deciding." : "Review the source before using a match." }), E.candidates.length ? E.candidates.map((e) => /* @__PURE__ */ W("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ W("a", {
								href: e.url,
								target: "_blank",
								rel: "noreferrer",
								"data-i18n-ignore": "",
								children: [
									e.title,
									" · ",
									e.studio,
									" · ",
									e.date
								]
							}), /* @__PURE__ */ U(i, {
								type: "button",
								variant: "secondary",
								disabled: !!A.busy,
								onClick: () => j(m, E, e),
								children: "Apply selected match"
							})]
						}, e.id)) : /* @__PURE__ */ U(v, { children: "No candidates found. Try another title." })]
					}) : null
				]
			}) : null,
			A.error ? /* @__PURE__ */ U(f, { children: A.error }) : null
		] })
	})] });
}
// src/react/scraping/scraping-page.tsx
var Q = [["peach", "Peach 代理"], ["direct", "直接连接"]];
function Oe(e) {
	return Q.some(([t]) => t === e) || !e ? [...Q] : [...Q, [e, e]];
}
function ke(e) {
	try {
		return new URL(e).host || e;
	} catch {
		return e;
	}
}
var Ae = [["paste", "粘贴 Cookie"], ["file", "导入文件"]];
function je() {
	return /* @__PURE__ */ U(X, { source: "github" });
}
function Me({ source: t, toast: n }) {
	let [r, a] = (0, Z.useState)(t.network), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(""), [u, d] = (0, Z.useState)(Ae[0][0]), [m, h] = (0, Z.useState)(""), [v, b] = (0, Z.useState)(""), S = (0, Z.useRef)(null);
	function w() {
		s(""), l(""), h(""), b(""), S.current && (S.current.value = "");
	}
	let E = J({
		mutationFn: (e) => R(A, {
			source: t.source,
			network: r,
			cookie: o,
			cookies_text: c,
			revoke: e
		}),
		onSuccess: (e, t) => {
			G.setQueryData(k, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), w(), n(t ? "Cookie 已撤销" : "来源设置已保存");
		}
	}), O = J({ mutationFn: () => R(D, { source: t.source }) }), P = E.isPending || O.isPending, ie = (e) => {
		e.preventDefault(), !P && (O.reset(), E.mutate(!1));
	}, ae = () => {
		P || (O.reset(), E.mutate(!0));
	}, L = () => {
		P || (E.reset(), O.mutate());
	};
	async function oe(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (l(""), b(""), !n) h("");
		else if (n.size > 262144) t.value = "", h(""), b("Cookie 文本超过 256 KiB");
		else try {
			let e = await n.text();
			l(e), h(n.name);
		} catch {
			b("Cookie 文件未读取，请重新选择");
		}
	}
	let B = v || (E.error ? H(E.error) : "") || (O.error ? H(O.error) : ""), V = O.data?.results ?? [], ce = r === "peach" || t.accepts_cookie || t.browser || !!B || V.length > 0;
	return /* @__PURE__ */ W(N, {
		title: t.label,
		onSubmit: ie,
		aside: /* @__PURE__ */ W("span", {
			className: "flex min-w-0 items-center gap-1",
			children: [/* @__PURE__ */ U(X, { source: t.source }), t.login ? /* @__PURE__ */ U(p, {
				href: t.login,
				children: ke(t.login)
			}) : null]
		}),
		children: [
			/* @__PURE__ */ U(T, { children: /* @__PURE__ */ U(re, {
				label: "连接方式",
				children: /* @__PURE__ */ U(te, {
					"aria-label": "连接方式",
					className: "w-44 min-w-0",
					selectedKey: r,
					onSelectionChange: (e) => {
						e !== null && a(String(e));
					},
					children: Oe(r).map(([e, t]) => /* @__PURE__ */ U(ne, {
						id: e,
						children: t
					}, e))
				})
			}) }),
			t.cooldown_until && t.cooldown_until > Date.now() / 1e3 ? /* @__PURE__ */ U(C, {
				tone: "warning",
				children: /* @__PURE__ */ W("span", {
					className: "inline-flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ U(I, {
						tone: "warning",
						children: "冷却中"
					}), /* @__PURE__ */ W("span", { children: [
						"可在 ",
						(/* @__PURE__ */ new Date(t.cooldown_until * 1e3)).toLocaleString("zh-CN"),
						" 后重试。"
					] })]
				})
			}) : null,
			ce ? /* @__PURE__ */ W(F, {
				divided: !0,
				children: [
					r === "peach" ? /* @__PURE__ */ U("span", {
						className: "self-start",
						children: /* @__PURE__ */ U(x, {
							href: "/settings/library#peachProxy",
							size: "small",
							trailingIcon: me,
							children: "配置 Peach 代理"
						})
					}) : null,
					t.browser ? /* @__PURE__ */ U("p", {
						className: "text-body-2-regular text-text-secondary",
						children: "人机验证由本机浏览器自动完成；需要点击时窗口会弹出。这台机器上不需要 Cookie。"
					}) : null,
					t.accepts_cookie && !t.browser ? /* @__PURE__ */ W(he.Fragment, { children: [
						/* @__PURE__ */ W("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ U("span", {
								className: "self-start",
								children: /* @__PURE__ */ U(I, {
									tone: t.cookie_saved ? "success" : "neutral",
									children: t.cookie_saved ? "Cookie 已保存" : "Cookie 未配置"
								})
							}), /* @__PURE__ */ U("p", {
								className: "text-body-2-regular text-text-secondary",
								children: t.cookie_saved ? "登录有效性待验证。" : "需要登录时，任选一种方式提供 Cookie。"
							})]
						}),
						/* @__PURE__ */ U(ee, {
							"aria-label": "提供 Cookie 的方式（二选一）",
							value: u,
							onChange: (e) => {
								d(e), w();
							},
							className: M,
							children: Ae.map(([t, n]) => /* @__PURE__ */ U(e, {
								value: t,
								className: j,
								children: n
							}, t))
						}),
						u === "paste" ? /* @__PURE__ */ U(y, {
							type: "password",
							label: "Cookie",
							autoComplete: "off",
							value: o,
							onChange: s
						}) : /* @__PURE__ */ W("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ U(g, { children: "Netscape Cookie 文件（.txt）" }),
								/* @__PURE__ */ W("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ U(i, {
										variant: "secondary",
										onClick: () => S.current?.click(),
										children: "选择文件"
									}), /* @__PURE__ */ U("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: m || "未选择文件"
									})]
								}),
								/* @__PURE__ */ U("input", {
									ref: S,
									type: "file",
									accept: ".txt",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: (e) => {
										oe(e);
									}
								})
							]
						})
					] }) : null,
					B ? /* @__PURE__ */ U(f, { children: B }) : null,
					V.map((e) => /* @__PURE__ */ U(C, {
						tone: e.ok ? "success" : "error",
						children: /* @__PURE__ */ W("span", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ U(xe, {
								tone: e.ok ? "success" : "error",
								children: e.ok ? "可访问" : "连接失败"
							}), /* @__PURE__ */ U("span", { children: se(e, t.label) })]
						})
					}, e.label))
				]
			}) : null,
			/* @__PURE__ */ W(_, { children: [
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ U(i, {
					variant: "secondary",
					onClick: ae,
					...z(P),
					children: "撤销 Cookie"
				}) : null,
				/* @__PURE__ */ U(i, {
					variant: "secondary",
					onClick: L,
					...z(P),
					children: "检查连接"
				}),
				/* @__PURE__ */ U(i, {
					type: "submit",
					...z(P),
					children: "保存"
				})
			] })
		]
	});
}
var Ne = {
	ok: "success",
	auth: "warning",
	http: "error",
	cooldown: "warning",
	network: "error",
	skipped: "neutral"
}, $ = [
	"ok",
	"auth",
	"cooldown",
	"http",
	"network",
	"skipped"
];
function Pe(e, t) {
	return t.label === "来源页面" ? e.label : `${e.label} 高清图片`;
}
function Fe({ toast: e }) {
	let { job: t, running: n, start: r } = q({
		queryKey: a,
		queryFn: ({ signal: e }) => ue(e),
		start: () => R(E, {}),
		onFinish: (t) => {
			G.invalidateQueries({
				queryKey: k,
				exact: !0
			}), t.status === "complete" && e(t.failed ? `检查完成，${t.failed} 项未通过` : "检查完成，全部可连接");
		}
	}), o = (e) => {
		e.preventDefault(), !(n || r.isPending) && r.mutate();
	}, s = (t?.results ?? []).flatMap((e) => e.results.map((t) => ({
		source: e.source,
		name: Pe(e, t),
		check: t
	}))), c = (e, t) => /* @__PURE__ */ W("span", {
		className: "inline-flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ U(X, { source: e }), t]
	}), l = s.filter(({ check: e }) => e.outcome === "ok"), u = s.filter(({ check: e }) => e.outcome !== "ok").sort((e, t) => $.indexOf(e.check.outcome) - $.indexOf(t.check.outcome)), f = r.error ? H(r.error) : t?.status === "failed" ? t.error || "检查未完成" : "", p = t?.status === "complete" && t.completed_at ? [ge((/* @__PURE__ */ new Date(t.completed_at * 1e3)).toISOString()), t.elapsed_s === void 0 ? "" : `用时 ${t.elapsed_s.toFixed(1)} 秒`].filter(Boolean).join(" · ") : "";
	return /* @__PURE__ */ W(N, {
		id: "check-all",
		title: "连接检查",
		onSubmit: o,
		children: [/* @__PURE__ */ W(F, { children: [
			/* @__PURE__ */ U(v, { children: "检查各来源页面与 DMM 高清图片服务器，最多四个来源同时进行；正在冷却的来源不再请求。可连接只说明检查地址可达，不代表登录有效。" }),
			n ? /* @__PURE__ */ W("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ U(w, {
					label: "连接检查进度",
					value: t?.checked ?? 0,
					max: t?.total ?? 0
				}), /* @__PURE__ */ W(v, {
					role: "status",
					children: [
						"已检查 ",
						t?.checked ?? 0,
						" / ",
						t?.total ?? 0,
						" 个来源"
					]
				})]
			}) : null,
			f ? /* @__PURE__ */ U(C, {
				tone: "error",
				children: f
			}) : null,
			s.length ? /* @__PURE__ */ U("div", {
				className: "flex flex-wrap gap-2",
				children: $.map((e) => {
					let t = s.filter(({ check: t }) => t.outcome === e).length;
					return t ? /* @__PURE__ */ W(I, {
						tone: Ne[e],
						children: [
							s.find(({ check: t }) => t.outcome === e)?.check.outcome_label,
							" ",
							t
						]
					}, e) : null;
				})
			}) : null,
			u.length ? /* @__PURE__ */ U("ul", {
				className: "flex min-w-0 flex-col",
				children: u.map(({ source: e, name: t, check: n }) => /* @__PURE__ */ U(b, {
					title: c(e, t),
					children: /* @__PURE__ */ W("span", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ U(I, {
							tone: Ne[n.outcome],
							children: n.outcome_label
						}), n.message ? /* @__PURE__ */ U("span", {
							className: "text-body-2-regular text-text-secondary",
							children: n.message
						}) : null]
					})
				}, t))
			}) : null,
			l.length ? /* @__PURE__ */ U(d, {
				summary: `可连接的 ${l.length} 项`,
				children: /* @__PURE__ */ U(h, { children: l.map(({ source: e, name: t, check: n }) => /* @__PURE__ */ U(m, {
					term: c(e, t),
					children: [n.width ? `${n.width} × ${n.height}` : "", n.elapsed_s === void 0 ? "" : `${n.elapsed_s.toFixed(2)} 秒`].filter(Boolean).join(" · ")
				}, t)) })
			}) : null
		] }), /* @__PURE__ */ U(_, {
			status: p ? `上次检查 ${p}` : void 0,
			children: /* @__PURE__ */ U(i, {
				type: "submit",
				...z(n || r.isPending),
				children: "全部检查"
			})
		})]
	});
}
function Ie({ toast: e }) {
	let [t, n] = (0, Z.useState)(""), { running: r, outcome: a, start: s } = q({
		queryKey: o,
		queryFn: ({ signal: e }) => de(e),
		start: () => R(O, { code: t }),
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "封面采集完成");
		}
	}), c = (e) => {
		e.preventDefault(), !(r || s.isPending || !t.trim()) && s.mutate();
	}, l = s.error ? H(s.error) : a?.status === "failed" ? a.error || "采集未取得" : "";
	return /* @__PURE__ */ U(N, {
		title: "高清封面",
		onSubmit: c,
		children: /* @__PURE__ */ W(F, { children: [
			/* @__PURE__ */ W("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ U("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ U(y, {
						"aria-label": "馆藏番号",
						isRequired: !0,
						isDisabled: r,
						value: t,
						onChange: n,
						placeholder: "输入馆藏番号，如 ABW-232"
					})
				}), /* @__PURE__ */ U(i, {
					type: "submit",
					disabled: !t.trim(),
					...z(r || s.isPending),
					children: "抓取封面"
				})]
			}),
			r ? /* @__PURE__ */ U(S, { label: "正在抓取封面" }) : null,
			l ? /* @__PURE__ */ U(C, {
				tone: "error",
				children: l
			}) : null,
			a?.status === "complete" ? /* @__PURE__ */ U(C, {
				tone: "success",
				children: a.result || "封面采集完成"
			}) : null
		] })
	});
}
function Le({ toast: e }) {
	let { query: a, running: o, outcome: s, start: c } = q({
		queryKey: n,
		queryFn: ({ signal: e }) => le(e),
		start: () => R(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "amane 桥已重建");
		}
	}), l = J({ mutationFn: () => R(t, {}) }), u = a.data;
	if (!u) return a.error ? /* @__PURE__ */ U(N, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ U(F, { children: /* @__PURE__ */ U(C, {
			tone: "error",
			children: H(a.error)
		}) })
	}) : null;
	let f = o || c.isPending || l.isPending, g = c.error ? H(c.error) : l.error ? H(l.error) : s?.status === "failed" ? s.error || "重建未完成" : "";
	return /* @__PURE__ */ W(N, {
		id: "amane",
		title: "amane",
		aside: /* @__PURE__ */ U(p, {
			href: u.repository,
			leadingIcon: je,
			children: u.repository
		}),
		children: [
			/* @__PURE__ */ W(h, { children: [
				/* @__PURE__ */ U(m, {
					term: "已安装版本",
					children: u.installed_version || "未安装"
				}),
				/* @__PURE__ */ U(m, {
					term: "上游最新版本",
					children: l.data?.latest ?? "尚未检查"
				}),
				/* @__PURE__ */ U(m, {
					term: "运行环境",
					children: u.installed ? "已安装" : "未安装"
				}),
				/* @__PURE__ */ W(m, {
					term: "内置站点",
					children: [u.sites.length.toLocaleString(), " 个"]
				})
			] }),
			/* @__PURE__ */ W(F, {
				divided: !0,
				children: [
					u.sites.length ? /* @__PURE__ */ U(d, {
						summary: "查看内置站点",
						children: /* @__PURE__ */ U("p", {
							className: "text-body-2-regular text-text-secondary",
							children: u.sites.map((e) => e.label).join("、")
						})
					}) : null,
					u.problem ? /* @__PURE__ */ U(C, {
						tone: "error",
						children: u.problem
					}) : /* @__PURE__ */ W(v, { children: [
						"amane（",
						u.license,
						"）提供这些内置站点的解析能力。首次需要时，Peach 会自动准备锁定的 ",
						u.version,
						" 版本；安装包内已有可用环境时直接使用。 手动安装也使用此版本，不随上游自动升级。"
					] }),
					o ? /* @__PURE__ */ U(S, { label: "正在重建运行环境" }) : null,
					g ? /* @__PURE__ */ U(C, {
						tone: "error",
						children: g
					}) : null,
					s?.status === "complete" ? /* @__PURE__ */ U(C, {
						tone: "success",
						children: s.result || "amane 桥已重建"
					}) : null
				]
			}),
			/* @__PURE__ */ W(_, { children: [/* @__PURE__ */ U(i, {
				variant: "secondary",
				onClick: () => {
					f || l.mutate();
				},
				...z(l.isPending),
				children: "检查上游版本"
			}), /* @__PURE__ */ U(i, {
				disabled: !!u.problem,
				onClick: () => {
					f || c.mutate();
				},
				...z(o || c.isPending),
				children: u.installed ? "重新安装" : "安装"
			})] })
		]
	});
}
function Re({ toast: e }) {
	let t = Y({
		queryKey: k,
		queryFn: ({ signal: e }) => pe(e)
	}), n = Y({
		queryKey: ["stashdb-settings"],
		queryFn: ({ signal: e }) => L("/api/configuration/stashdb", e)
	}), r = t.data;
	return r ? /* @__PURE__ */ W(be, { children: [
		/* @__PURE__ */ U("p", {
			className: "text-body-2-regular text-text-secondary",
			children: "高清图片可能要经代理才能下载，先检查连接。"
		}),
		/* @__PURE__ */ U(Fe, { toast: e }),
		/* @__PURE__ */ U(Ie, { toast: e }),
		n.data ? /* @__PURE__ */ U(De, {
			initial: n.data,
			receipt: e
		}) : null,
		n.error ? /* @__PURE__ */ U(C, {
			tone: "error",
			title: "StashDB settings unavailable",
			children: H(n.error)
		}) : null,
		/* @__PURE__ */ U(Te, { receipt: e }),
		(r.sources || []).map((t) => /* @__PURE__ */ U(Me, {
			source: t,
			toast: e
		}, t.source)),
		/* @__PURE__ */ U(Le, { toast: e })
	] }) : /* @__PURE__ */ U(be, { children: /* @__PURE__ */ U(C, {
		tone: "error",
		title: "采集来源读取失败",
		children: t.error ? H(t.error) : "读取采集来源失败"
	}) });
}
export { Re as ScrapingPage, ke as linkHost, Oe as networkOptions };

//# debugId=eb3db4e7-95e3-4e12-9477-ffb7a8e7dcb6