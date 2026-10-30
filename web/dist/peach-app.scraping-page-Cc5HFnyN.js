(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4bc9f8d7-5765-4342-a8b0-0132c06bef10", e._sentryDebugIdIdentifier = "sentry-dbid-4bc9f8d7-5765-4342-a8b0-0132c06bef10");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, COVER_JOB_KEY as a, CUSTOM_SOURCES_KEY as o, CUSTOM_SOURCES_URL as s, Checkbox as c, Chip as l, Disclosure as u, ErrorText as d, ExternalLink as f, Fact as p, FactList as m, FieldLabel as h, Footer as g, Help as _, Input as v, LinkButton as y, LoadingDots as b, Note as x, Rows as S, SCRAPING_CHECK_URL as C, SCRAPING_COVER_URL as w, SCRAPING_KEY as T, SCRAPING_SETTINGS_URL as E, SEGMENT as D, SEGMENTED_TRACK as ee, Section as O, SegmentedRadioGroup as k, Select$1 as A, SelectField as j, SelectItem as te, SettingsRow as ne, Stack as M, StatusLabel as N, Switch as P, __toESM as F, apiGet as I, apiSend as L, busyProps as R, cardClass as z, checkText as re, confirmModal as B, errorMessage as V, esc as H, fetchAmaneBridge as U, fetchCoverJob as W, fetchCustomSources as G, fetchSources as K, i2 as ie, import_jsx_runtime as ae, jsx as q, jsxs as J, queryClient as oe, require_react as se, spinnerHtml as ce, useAction as Y, useBackgroundJob as le, useMutation as X, useQuery as Z } from "./peach-app.js";
import { CodeBlock as ue } from "./peach-app.code-block-BbD0jQqq.js";
import { Page as de } from "./peach-app.page-CW3QRN2N.js";
import { SiteMark as fe } from "./peach-app.site-mark-B3G3SZCA.js";
import { ConnectionStatus as pe } from "./peach-app.connection-status-BjZE05sg.js";
// src/react/scraping/custom-sources.tsx
var Q = /* @__PURE__ */ F(se(), 1), me = [
	["code", "番号"],
	["title", "标题"],
	["studio", "厂牌"],
	["series", "系列"],
	["release_date", "发行日期"],
	["performers", "演员（文本数组）"],
	["tags", "标签（文本数组）"]
], he = [
	["censored", "有码"],
	["amateur", "素人"],
	["uncensored", "无码"],
	["fc2", "FC2"],
	["kmib", "韩国 MIB"],
	["other", "其他"],
	["unsure", "待核番号"],
	["unknown", "未知"]
], ge = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function _e({ receipt: e }) {
	let [t, n] = (0, Q.useState)(null), r = Z({
		queryKey: o,
		queryFn: ({ signal: e }) => G(e)
	}), a = Y(), c = (e) => oe.setQueryData(o, e), l = !!(r.isPending || r.error || r.data?.items.length || a.error), u = /* @__PURE__ */ q(i, {
		variant: "secondary",
		onClick: () => n(ge()),
		children: "添加来源"
	});
	return /* @__PURE__ */ J(O, {
		title: "自定义元数据来源",
		children: [
			l ? /* @__PURE__ */ J(M, { children: [
				r.isPending ? /* @__PURE__ */ q("div", {
					"aria-busy": "true",
					"data-skeleton": "",
					"aria-label": "读取自定义来源"
				}) : null,
				r.error ? /* @__PURE__ */ q(d, { children: V(r.error) }) : null,
				r.data?.items.map((t) => /* @__PURE__ */ J("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ q("span", {
							className: "min-w-0 flex-1",
							children: t.name
						}),
						/* @__PURE__ */ q(N, {
							tone: t.enabled ? "success" : "neutral",
							children: t.enabled ? "已启用" : "已停用"
						}),
						/* @__PURE__ */ q(i, {
							variant: "secondary",
							onClick: () => n(t),
							children: "编辑"
						}),
						/* @__PURE__ */ q(i, {
							variant: "secondary",
							...R(a.busy === t.id),
							onClick: () => void a.run(t.id, (e) => L(s, {
								...t,
								enabled: !t.enabled
							}, "POST", e), (n) => {
								c(n), e(t.enabled ? "已停用来源" : "已启用来源");
							}),
							children: t.enabled ? "停用" : "启用"
						}),
						/* @__PURE__ */ q(i, {
							variant: "danger",
							onClick: () => B({
								title: "删除自定义来源",
								body: `删除「${H(t.name)}」后，采集将不再查询这个来源。`,
								confirmLabel: "删除来源",
								danger: !0,
								onConfirm: async () => {
									c(await L(s, {
										action: "delete",
										id: t.id
									})), n(null), e("已删除来源");
								}
							}),
							children: "删除"
						})
					]
				}, t.id)),
				a.error ? /* @__PURE__ */ q(d, { children: a.error }) : null
			] }) : null,
			t ? null : l ? /* @__PURE__ */ q(g, { children: u }) : /* @__PURE__ */ q(M, { children: /* @__PURE__ */ q("div", {
				className: "flex justify-end",
				children: u
			}) }),
			t ? /* @__PURE__ */ q(ve, {
				initial: t,
				cancel: () => n(null),
				saved: (t) => {
					c(t), n(null), e("已保存来源");
				}
			}, t.id || "new") : null
		]
	});
}
function ve({ initial: e, cancel: t, saved: n }) {
	let [r, a] = (0, Q.useState)(e), [o, l] = (0, Q.useState)(""), [u, f] = (0, Q.useState)(""), p = (0, Q.useRef)(0), m = Y(), y = (e) => {
		p.current++, a((t) => ({
			...t,
			...e
		})), f("");
	};
	return /* @__PURE__ */ J("form", {
		"aria-label": "元数据来源配置",
		"aria-busy": m.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), m.run("save", (e) => L(s, r, "POST", e), n);
		},
		children: [/* @__PURE__ */ J(M, { children: [
			/* @__PURE__ */ q(v, {
				label: "来源名称",
				value: r.name,
				maxLength: 80,
				onChange: (e) => y({ name: e })
			}),
			/* @__PURE__ */ q(v, {
				label: "JSON 接口地址",
				value: r.endpoint,
				maxLength: 2048,
				placeholder: "https://example.com/api/movies/{code}",
				onChange: (e) => y({ endpoint: e })
			}),
			/* @__PURE__ */ J("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ q(h, { children: "来源连接方式" }), /* @__PURE__ */ q(j, {
					id: "custom-source-network",
					label: "来源连接方式",
					epoch: 0,
					value: r.network || "direct",
					options: [["direct", "直连"], ["peach_proxy", "Peach 代理"]],
					onPick: (e) => y({ network: e })
				})]
			}),
			/* @__PURE__ */ J("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ q(h, { children: "接口番号格式" }), /* @__PURE__ */ q(j, {
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
					onPick: (e) => y({ code_format: e })
				})]
			}),
			/* @__PURE__ */ q(_, { children: "填写公开 JSON 接口和响应字段路径，例如 data.title。番号字段用于核对作品身份。" }),
			me.map(([e, t]) => /* @__PURE__ */ q(v, {
				label: `${t}字段路径`,
				value: r.fields[e] || "",
				onChange: (t) => {
					let n = { ...r.fields };
					t ? n[e] = t : delete n[e], y({ fields: n });
				}
			}, e)),
			/* @__PURE__ */ q("div", {
				className: "flex flex-wrap gap-3",
				role: "group",
				"aria-label": "适用内容类型",
				children: he.map(([e, t]) => /* @__PURE__ */ q(c, {
					isSelected: r.content_types.includes(e),
					onChange: (t) => y({ content_types: t ? [...r.content_types, e] : r.content_types.filter((t) => t !== e) }),
					children: t
				}, e))
			}),
			/* @__PURE__ */ q(c, {
				isSelected: r.enabled,
				onChange: (e) => y({ enabled: e }),
				children: "启用来源"
			}),
			/* @__PURE__ */ q(v, {
				label: "试查番号（回车查询）",
				value: o,
				onChange: (e) => {
					p.current++, l(e), f("");
				},
				onKeyDown: (e) => {
					if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
					e.preventDefault();
					let t = p.current;
					m.run("preview", (e) => L(s, {
						...r,
						code: o,
						action: "preview"
					}, "POST", e), (e) => {
						t === p.current && f(JSON.stringify(e.record, null, 2));
					}, (e) => {
						t === p.current && m.setError(V(e));
					});
				}
			}),
			m.busy === "preview" ? /* @__PURE__ */ J(_, {
				role: "status",
				children: [/* @__PURE__ */ q("span", { dangerouslySetInnerHTML: { __html: ce("正在试查来源") } }), "正在试查来源"]
			}) : null,
			u ? /* @__PURE__ */ q(ue, {
				code: u,
				language: "json",
				label: "元数据接口返回"
			}) : null,
			m.error ? /* @__PURE__ */ q(d, { children: m.error }) : null
		] }), /* @__PURE__ */ J(g, { children: [/* @__PURE__ */ q(i, {
			variant: "secondary",
			type: "button",
			onClick: t,
			children: "取消"
		}), /* @__PURE__ */ q(i, {
			type: "submit",
			...R(m.busy === "save"),
			children: "保存来源"
		})] })]
	});
}
// src/react/settings/stashdb-settings.tsx
function ye({ initial: e, receipt: t }) {
	let [n, r] = (0, Q.useState)(e), [a, o] = (0, Q.useState)(""), [s, c] = (0, Q.useState)(""), [f, p] = (0, Q.useState)([]), [m, h] = (0, Q.useState)(null), [g, y] = (0, Q.useState)(""), [b, x] = (0, Q.useState)(""), [S, C] = (0, Q.useState)(""), [w, T] = (0, Q.useState)(""), [E, D] = (0, Q.useState)(null), [ee, k] = (0, Q.useState)([]), A = Y();
	function j(e, n, r) {
		B({
			title: "Apply StashDB match",
			confirmLabel: "Apply match",
			body: `${e.label} → ${r.title}. Replace this video's available title, date, studio, cast, and cover with the StashDB match?`,
			onConfirm: async () => {
				let i = await L("/api/configuration/stashdb/apply", {
					asset_id: e.id,
					candidate_id: r.id,
					revision: n.revision
				});
				k((t) => t.filter((t) => t.id !== e.id)), m?.id === e.id && D(null), t(i.image_errors.length ? "Match applied, but some artwork could not be downloaded." : "StashDB match applied");
			}
		});
	}
	function te(e) {
		e.preventDefault(), a.trim() && A.run("save", (e) => L("/api/configuration/stashdb/settings", { api_key: a.trim() }, "POST", e), (e) => {
			r(e), o(""), t("StashDB key saved");
		});
	}
	return /* @__PURE__ */ J(ae.Fragment, { children: [/* @__PURE__ */ q(O, {
		title: "Metadata sources",
		children: /* @__PURE__ */ q(M, { children: /* @__PURE__ */ q("div", {
			className: z({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
			children: /* @__PURE__ */ J("div", {
				className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
				children: [/* @__PURE__ */ J("div", {
					className: "flex min-w-0 flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ q("b", {
						className: "text-body-medium text-text-primary",
						children: "StashDB"
					}), /* @__PURE__ */ q(l, {
						variant: "caption",
						color: n.api_key_set ? "lime" : "neutral",
						children: n.api_key_set ? "Configured" : "Optional"
					})]
				}), /* @__PURE__ */ q(u, {
					summary: n.api_key_set ? "Edit credentials" : "Enter credentials",
					children: /* @__PURE__ */ J("form", {
						onSubmit: te,
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ q(_, { children: "Search StashDB for library videos and apply matches." }),
							/* @__PURE__ */ q(P, {
								"aria-label": "Search StashDB during metadata scans",
								isSelected: n.enabled,
								isDisabled: !n.api_key_set || !!A.busy,
								onChange: (e) => void A.run("enable", (t) => L("/api/configuration/stashdb/settings", { enabled: e }, "POST", t), (n) => {
									r(n), t(e ? "StashDB scan enabled" : "StashDB scan disabled");
								})
							}),
							/* @__PURE__ */ q(_, { children: "During metadata scans, automatically apply only a unique match with an exact title, studio, and release date from the filename. Other candidates remain available for review." }),
							/* @__PURE__ */ q(v, {
								label: "StashDB API key",
								type: "password",
								autoComplete: "new-password",
								value: a,
								onChange: o,
								placeholder: n.api_key_set ? "Key saved; leave blank to keep it" : "Enter your API key"
							}),
							/* @__PURE__ */ q("a", {
								href: "https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/accessing-stashdb/",
								target: "_blank",
								rel: "noreferrer",
								children: "Get a StashDB API key"
							}),
							A.error ? /* @__PURE__ */ q(d, { children: A.error }) : null,
							/* @__PURE__ */ J("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ q(i, {
										type: "submit",
										disabled: !a.trim(),
										...R(A.busy === "save"),
										children: "Save key"
									}),
									/* @__PURE__ */ q(i, {
										type: "button",
										variant: "secondary",
										disabled: !n.api_key_set,
										...R(A.busy === "check"),
										onClick: () => void A.run("check", (e) => L("/api/configuration/stashdb/check", {}, "POST", e), (e) => {
											if (!e.ok) throw Error("StashDB account access is unavailable.");
											t("StashDB connection successful");
										}),
										children: "Test connection"
									}),
									/* @__PURE__ */ q(i, {
										type: "button",
										variant: "secondary",
										disabled: !n.api_key_set,
										...R(A.busy === "remove"),
										onClick: () => void A.run("remove", (e) => L("/api/configuration/stashdb/settings", {
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
	}), /* @__PURE__ */ q(O, {
		title: "StashDB matches",
		children: /* @__PURE__ */ J(M, { children: [
			/* @__PURE__ */ q(i, {
				type: "button",
				variant: "secondary",
				...R(A.busy === "queue"),
				onClick: () => void A.run("queue", (e) => I("/api/configuration/stashdb/review", e), k),
				children: "Show scan candidates"
			}),
			ee.map((e) => /* @__PURE__ */ J("article", {
				className: "flex flex-col gap-2 rounded-lg border border-separator-border p-3",
				children: [
					/* @__PURE__ */ q("strong", {
						"data-i18n-ignore": "",
						children: e.label
					}),
					e.preview.truncated ? /* @__PURE__ */ q(_, { children: "Search results were truncated; verify the source carefully." }) : null,
					e.preview.candidates.map((t) => /* @__PURE__ */ J("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ J("a", {
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
						}), /* @__PURE__ */ q(i, {
							type: "button",
							variant: "secondary",
							disabled: !!A.busy,
							onClick: () => j(e, e.preview, t),
							children: "Apply selected match"
						})]
					}, t.id))
				]
			}, e.id)),
			/* @__PURE__ */ q("h3", {
				className: "text-body-medium text-text-primary",
				children: "Manual match"
			}),
			/* @__PURE__ */ q(_, { children: "Find a library video, then search StashDB and choose a match." }),
			/* @__PURE__ */ q(v, {
				label: "Find a library video",
				value: s,
				onChange: c
			}),
			/* @__PURE__ */ q(i, {
				type: "button",
				variant: "secondary",
				...R(A.busy === "library"),
				onClick: () => void A.run("library", (e) => I(`/api/configuration/stashdb/library?query=${encodeURIComponent(s)}`, e), p),
				children: "Find videos"
			}),
			f.map((e) => /* @__PURE__ */ J("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ q("span", {
					"data-i18n-ignore": "",
					children: e.label
				}), /* @__PURE__ */ q(i, {
					type: "button",
					variant: "secondary",
					disabled: !n.api_key_set || !!A.busy,
					onClick: () => {
						h(e), y(""), x(""), C(""), T(""), D(null);
					},
					children: "Manual match"
				})]
			}, e.id)),
			m ? /* @__PURE__ */ J("div", {
				className: "flex flex-col gap-2 rounded-lg border border-separator-border p-3",
				children: [
					/* @__PURE__ */ q("strong", {
						"data-i18n-ignore": "",
						children: m.label
					}),
					/* @__PURE__ */ q(v, {
						label: "Title",
						value: g,
						onChange: y,
						placeholder: "Leave all fields blank to use video details"
					}),
					/* @__PURE__ */ q(v, {
						label: "Actor (optional)",
						value: b,
						onChange: x
					}),
					/* @__PURE__ */ q(v, {
						label: "Producer / studio",
						value: S,
						onChange: C
					}),
					/* @__PURE__ */ q(v, {
						label: "Release date",
						value: w,
						onChange: T,
						placeholder: "YYYY, YYYY/MM, or YYYY/MM/DD"
					}),
					/* @__PURE__ */ q(i, {
						type: "button",
						variant: "secondary",
						...R(A.busy === "preview"),
						onClick: () => void A.run("preview", (e) => L("/api/configuration/stashdb/preview", {
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
					E ? /* @__PURE__ */ J("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ q(_, { children: E.truncated ? "Some results were omitted. Refine the search before deciding." : "Review the source before using a match." }), E.candidates.length ? E.candidates.map((e) => /* @__PURE__ */ J("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ J("a", {
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
							}), /* @__PURE__ */ q(i, {
								type: "button",
								variant: "secondary",
								disabled: !!A.busy,
								onClick: () => j(m, E, e),
								children: "Apply selected match"
							})]
						}, e.id)) : /* @__PURE__ */ q(_, { children: "No candidates found. Try another title." })]
					}) : null
				]
			}) : null,
			A.error ? /* @__PURE__ */ q(d, { children: A.error }) : null
		] })
	})] });
}
// src/react/scraping/scraping-page.tsx
var $ = [["peach", "Peach 代理"], ["direct", "直接连接"]];
function be(e) {
	return $.some(([t]) => t === e) || !e ? [...$] : [...$, [e, e]];
}
function xe(e) {
	try {
		return new URL(e).host || e;
	} catch {
		return e;
	}
}
var Se = [["paste", "粘贴 Cookie"], ["file", "导入文件"]];
function Ce() {
	return /* @__PURE__ */ q(fe, { source: "github" });
}
function we({ source: t, toast: n }) {
	let [r, a] = (0, Q.useState)(t.network), [o, s] = (0, Q.useState)(""), [c, l] = (0, Q.useState)(""), [u, p] = (0, Q.useState)(Se[0][0]), [m, _] = (0, Q.useState)(""), [b, w] = (0, Q.useState)(""), j = (0, Q.useRef)(null);
	function P() {
		s(""), l(""), _(""), w(""), j.current && (j.current.value = "");
	}
	let F = X({
		mutationFn: (e) => L(E, {
			source: t.source,
			network: r,
			cookie: o,
			cookies_text: c,
			revoke: e
		}),
		onSuccess: (e, t) => {
			oe.setQueryData(T, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), P(), n(t ? "Cookie 已撤销" : "来源设置已保存");
		}
	}), I = X({ mutationFn: () => L(C, { source: t.source }) }), z = F.isPending || I.isPending, B = (e) => {
		e.preventDefault(), !z && (I.reset(), F.mutate(!1));
	}, H = () => {
		z || (I.reset(), F.mutate(!0));
	}, U = () => {
		z || (F.reset(), I.mutate());
	};
	async function W(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (l(""), w(""), !n) _("");
		else if (n.size > 262144) t.value = "", _(""), w("Cookie 文本超过 256 KiB");
		else try {
			let e = await n.text();
			l(e), _(n.name);
		} catch {
			w("Cookie 文件未读取，请重新选择");
		}
	}
	let G = b || (F.error ? V(F.error) : "") || (I.error ? V(I.error) : ""), K = I.data?.results ?? [], se = r === "peach" || t.accepts_cookie || t.browser || !!G || K.length > 0;
	return /* @__PURE__ */ J(O, {
		title: t.label,
		onSubmit: B,
		aside: /* @__PURE__ */ J("span", {
			className: "flex min-w-0 items-center gap-1",
			children: [/* @__PURE__ */ q(fe, { source: t.source }), t.login ? /* @__PURE__ */ q(f, {
				href: t.login,
				children: xe(t.login)
			}) : null]
		}),
		children: [
			/* @__PURE__ */ q(S, { children: /* @__PURE__ */ q(ne, {
				label: "连接方式",
				children: /* @__PURE__ */ q(A, {
					"aria-label": "连接方式",
					className: "w-44 min-w-0",
					selectedKey: r,
					onSelectionChange: (e) => {
						e !== null && a(String(e));
					},
					children: be(r).map(([e, t]) => /* @__PURE__ */ q(te, {
						id: e,
						children: t
					}, e))
				})
			}) }),
			t.cooldown_until && t.cooldown_until > Date.now() / 1e3 ? /* @__PURE__ */ q(x, {
				tone: "warning",
				children: /* @__PURE__ */ J("span", {
					className: "inline-flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ q(N, {
						tone: "warning",
						children: "冷却中"
					}), /* @__PURE__ */ J("span", { children: [
						"可在 ",
						(/* @__PURE__ */ new Date(t.cooldown_until * 1e3)).toLocaleString("zh-CN"),
						" 后重试。"
					] })]
				})
			}) : null,
			se ? /* @__PURE__ */ J(M, {
				divided: !0,
				children: [
					r === "peach" ? /* @__PURE__ */ q("span", {
						className: "self-start",
						children: /* @__PURE__ */ q(y, {
							href: "/settings/library#peachProxy",
							size: "small",
							trailingIcon: ie,
							children: "配置 Peach 代理"
						})
					}) : null,
					t.browser ? /* @__PURE__ */ q("p", {
						className: "text-body-2-regular text-text-secondary",
						children: "人机验证由本机浏览器自动完成；需要点击时窗口会弹出。这台机器上不需要 Cookie。"
					}) : null,
					t.accepts_cookie && !t.browser ? /* @__PURE__ */ J(ae.Fragment, { children: [
						/* @__PURE__ */ J("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ q("span", {
								className: "self-start",
								children: /* @__PURE__ */ q(N, {
									tone: t.cookie_saved ? "success" : "neutral",
									children: t.cookie_saved ? "Cookie 已保存" : "Cookie 未配置"
								})
							}), /* @__PURE__ */ q("p", {
								className: "text-body-2-regular text-text-secondary",
								children: t.cookie_saved ? "登录有效性待验证。" : "需要登录时，任选一种方式提供 Cookie。"
							})]
						}),
						/* @__PURE__ */ q(k, {
							"aria-label": "提供 Cookie 的方式（二选一）",
							value: u,
							onChange: (e) => {
								p(e), P();
							},
							className: ee,
							children: Se.map(([t, n]) => /* @__PURE__ */ q(e, {
								value: t,
								className: D,
								children: n
							}, t))
						}),
						u === "paste" ? /* @__PURE__ */ q(v, {
							type: "password",
							label: "Cookie",
							autoComplete: "off",
							value: o,
							onChange: s
						}) : /* @__PURE__ */ J("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ q(h, { children: "Netscape Cookie 文件（.txt）" }),
								/* @__PURE__ */ J("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ q(i, {
										variant: "secondary",
										onClick: () => j.current?.click(),
										children: "选择文件"
									}), /* @__PURE__ */ q("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: m || "未选择文件"
									})]
								}),
								/* @__PURE__ */ q("input", {
									ref: j,
									type: "file",
									accept: ".txt",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: (e) => {
										W(e);
									}
								})
							]
						})
					] }) : null,
					G ? /* @__PURE__ */ q(d, { children: G }) : null,
					K.map((e) => /* @__PURE__ */ q(x, {
						tone: e.ok ? "success" : "error",
						children: /* @__PURE__ */ J("span", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ q(pe, {
								tone: e.ok ? "success" : "error",
								children: e.ok ? "可访问" : "连接失败"
							}), /* @__PURE__ */ q("span", { children: re(e, t.label) })]
						})
					}, e.label))
				]
			}) : null,
			/* @__PURE__ */ J(g, { children: [
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ q(i, {
					variant: "secondary",
					onClick: H,
					...R(z),
					children: "撤销 Cookie"
				}) : null,
				/* @__PURE__ */ q(i, {
					variant: "secondary",
					onClick: U,
					...R(z),
					children: "检查连接"
				}),
				/* @__PURE__ */ q(i, {
					type: "submit",
					...R(z),
					children: "保存"
				})
			] })
		]
	});
}
function Te({ toast: e }) {
	let [t, n] = (0, Q.useState)(""), { running: r, outcome: o, start: s } = le({
		queryKey: a,
		queryFn: ({ signal: e }) => W(e),
		start: () => L(w, { code: t }),
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "封面采集完成");
		}
	}), c = (e) => {
		e.preventDefault(), !(r || s.isPending || !t.trim()) && s.mutate();
	}, l = s.error ? V(s.error) : o?.status === "failed" ? o.error || "采集未取得" : "";
	return /* @__PURE__ */ q(O, {
		title: "高清封面",
		onSubmit: c,
		children: /* @__PURE__ */ J(M, { children: [
			/* @__PURE__ */ J("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ q("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ q(v, {
						"aria-label": "馆藏番号",
						isRequired: !0,
						isDisabled: r,
						value: t,
						onChange: n,
						placeholder: "输入馆藏番号，如 ABW-232"
					})
				}), /* @__PURE__ */ q(i, {
					type: "submit",
					disabled: !t.trim(),
					...R(r || s.isPending),
					children: "抓取封面"
				})]
			}),
			r ? /* @__PURE__ */ q(b, { label: "正在抓取封面" }) : null,
			l ? /* @__PURE__ */ q(x, {
				tone: "error",
				children: l
			}) : null,
			o?.status === "complete" ? /* @__PURE__ */ q(x, {
				tone: "success",
				children: o.result || "封面采集完成"
			}) : null
		] })
	});
}
function Ee({ toast: e }) {
	let { query: a, running: o, outcome: s, start: c } = le({
		queryKey: n,
		queryFn: ({ signal: e }) => U(e),
		start: () => L(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "amane 桥已重建");
		}
	}), l = X({ mutationFn: () => L(t, {}) }), d = a.data;
	if (!d) return a.error ? /* @__PURE__ */ q(O, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ q(M, { children: /* @__PURE__ */ q(x, {
			tone: "error",
			children: V(a.error)
		}) })
	}) : null;
	let h = o || c.isPending || l.isPending, v = c.error ? V(c.error) : l.error ? V(l.error) : s?.status === "failed" ? s.error || "重建未完成" : "";
	return /* @__PURE__ */ J(O, {
		id: "amane",
		title: "amane",
		aside: /* @__PURE__ */ q(f, {
			href: d.repository,
			leadingIcon: Ce,
			children: d.repository
		}),
		children: [
			/* @__PURE__ */ J(m, { children: [
				/* @__PURE__ */ q(p, {
					term: "已安装版本",
					children: d.installed_version || "未安装"
				}),
				/* @__PURE__ */ q(p, {
					term: "上游最新版本",
					children: l.data?.latest ?? "尚未检查"
				}),
				/* @__PURE__ */ q(p, {
					term: "运行环境",
					children: d.installed ? "已安装" : "未安装"
				}),
				/* @__PURE__ */ J(p, {
					term: "内置站点",
					children: [d.sites.length.toLocaleString(), " 个"]
				})
			] }),
			/* @__PURE__ */ J(M, {
				divided: !0,
				children: [
					d.sites.length ? /* @__PURE__ */ q(u, {
						summary: "查看内置站点",
						children: /* @__PURE__ */ q("p", {
							className: "text-body-2-regular text-text-secondary",
							children: d.sites.map((e) => e.label).join("、")
						})
					}) : null,
					d.problem ? /* @__PURE__ */ q(x, {
						tone: "error",
						children: d.problem
					}) : /* @__PURE__ */ J(_, { children: [
						"amane（",
						d.license,
						"）提供这些内置站点的解析能力。首次需要时，Peach 会自动准备锁定的 ",
						d.version,
						" 版本；安装包内已有可用环境时直接使用。 手动安装也使用此版本，不随上游自动升级。"
					] }),
					o ? /* @__PURE__ */ q(b, { label: "正在重建运行环境" }) : null,
					v ? /* @__PURE__ */ q(x, {
						tone: "error",
						children: v
					}) : null,
					s?.status === "complete" ? /* @__PURE__ */ q(x, {
						tone: "success",
						children: s.result || "amane 桥已重建"
					}) : null
				]
			}),
			/* @__PURE__ */ J(g, { children: [/* @__PURE__ */ q(i, {
				variant: "secondary",
				onClick: () => {
					h || l.mutate();
				},
				...R(l.isPending),
				children: "检查上游版本"
			}), /* @__PURE__ */ q(i, {
				disabled: !!d.problem,
				onClick: () => {
					h || c.mutate();
				},
				...R(o || c.isPending),
				children: d.installed ? "重新安装" : "安装"
			})] })
		]
	});
}
function De({ toast: e }) {
	let t = Z({
		queryKey: T,
		queryFn: ({ signal: e }) => K(e)
	}), n = Z({
		queryKey: ["stashdb-settings"],
		queryFn: ({ signal: e }) => I("/api/configuration/stashdb", e)
	}), r = t.data;
	return r ? /* @__PURE__ */ J(de, { children: [
		/* @__PURE__ */ q("p", {
			className: "text-body-2-regular text-text-secondary",
			children: "高清图片可能要经代理才能下载，先检查连接。"
		}),
		/* @__PURE__ */ q(Te, { toast: e }),
		n.data ? /* @__PURE__ */ q(ye, {
			initial: n.data,
			receipt: e
		}) : null,
		n.error ? /* @__PURE__ */ q(x, {
			tone: "error",
			title: "StashDB settings unavailable",
			children: V(n.error)
		}) : null,
		/* @__PURE__ */ q(_e, { receipt: e }),
		(r.sources || []).map((t) => /* @__PURE__ */ q(we, {
			source: t,
			toast: e
		}, t.source)),
		/* @__PURE__ */ q(Ee, { toast: e })
	] }) : /* @__PURE__ */ q(de, { children: /* @__PURE__ */ q(x, {
		tone: "error",
		title: "采集来源读取失败",
		children: t.error ? V(t.error) : "读取采集来源失败"
	}) });
}
export { De as ScrapingPage, xe as linkHost, be as networkOptions };

//# debugId=4bc9f8d7-5765-4342-a8b0-0132c06bef10