var Ke = Object.defineProperty,
    Xe = Object.defineProperties;
var Je = Object.getOwnPropertyDescriptors;
var Be = Object.getOwnPropertySymbols;
var et = Object.prototype.hasOwnProperty,
    tt = Object.prototype.propertyIsEnumerable;
var _e = (n, r, c) =>
        r in n
            ? Ke(n, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: c,
              })
            : (n[r] = c),
    W = (n, r) => {
        for (var c in r || (r = {})) et.call(r, c) && _e(n, c, r[c]);
        if (Be) for (var c of Be(r)) tt.call(r, c) && _e(n, c, r[c]);
        return n;
    },
    G = (n, r) => Xe(n, Je(r));
import {
    c as at,
    a as rt,
    b as nt,
    d as st,
    t as ot,
    u as q,
    e as P,
    r as t,
    R as e,
    L as ce,
    M as ie,
    g as T,
    U as lt,
    f as ct,
    s as it,
    A as mt,
    I as dt,
    h as B,
    i as se,
    j as U,
    n as O,
    T as ke,
    S as Ne,
    B as X,
    k as le,
    l as De,
    m as ne,
    o as ge,
    p as he,
    D as ut,
    q as gt,
    v as pe,
    w as xe,
    x as ht,
    y as Pe,
    z as Q,
    C as pt,
    P as xt,
    E as ft,
    F as Et,
    G as vt,
    H as wt,
} from "./vendor.2c2efbea.js";
const bt = function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
        i(g);
    new MutationObserver((g) => {
        for (const u of g)
            if (u.type === "childList")
                for (const w of u.addedNodes)
                    w.tagName === "LINK" && w.rel === "modulepreload" && i(w);
    }).observe(document, { childList: !0, subtree: !0 });
    function c(g) {
        const u = {};
        return (
            g.integrity && (u.integrity = g.integrity),
            g.referrerpolicy && (u.referrerPolicy = g.referrerpolicy),
            g.crossorigin === "use-credentials"
                ? (u.credentials = "include")
                : g.crossorigin === "anonymous"
                ? (u.credentials = "omit")
                : (u.credentials = "same-origin"),
            u
        );
    }
    function i(g) {
        if (g.ep) return;
        g.ep = !0;
        const u = c(g);
        fetch(g.href, u);
    }
};
bt();
const Y = {
        login: "[Auth] Login",
        logout: "[Auth] Logout",
        sideBarState: "[UI]  Side Bar State Changed",
        uiSetError: "[UI] Set Error",
        uiRemoveError: "[UI] Remove Error",
        uiStartLoading: "[UI] Start loading",
        uiFinishLoading: "[UI] Finish loading",
    },
    yt = (n = {}, r) => {
        switch (r.type) {
            case Y.login:
                return {
                    token: r.payload.token,
                    name: r.payload.name,
                    email: r.payload.email,
                    photo: r.payload.photo,
                };
            case Y.logout:
                return {};
            default:
                return n;
        }
    },
    kt = { loading: !1, msgError: null, sideBarSate: !1 },
    Nt = (n = kt, r) => {
        switch (r.type) {
            case Y.sideBarState:
                return G(W({}, n), { sideBarSate: r.payload });
            case Y.uiSetError:
                return G(W({}, n), { msgError: r.payload });
            case Y.uiRemoveError:
                return G(W({}, n), { msgError: null });
            case Y.uiStartLoading:
                return G(W({}, n), { loading: !0 });
            case Y.uiFinishLoading:
                return G(W({}, n), { loading: !1 });
            default:
                return n;
        }
    },
    Ct =
        (typeof window != "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        st,
    St = at({ auth: yt, ui: Nt }),
    Lt = rt(St, Ct(nt(ot))),
    Ce = (n) => ({ type: Y.sideBarState, payload: n }),
    j = () => ({ type: Y.uiStartLoading }),
    A = () => ({ type: Y.uiFinishLoading }),
    fe = "https://liveinspired.herokuapp.com/",
    It = () => {
        const n = q(),
            { sideBarSate: r } = P((b) => b.ui);
        P((b) => b.auth), P((b) => b.auth);
        const { photo: c } = P((b) => b.auth),
            [i, g] = t.exports.useState(),
            u = () => {
                n(Ce(!r));
            };
        t.exports.useEffect(() => {
            g(c);
        }, []);
        const w = () => {
                n(Ce(!1));
            },
            x = (b) => {
                const f = document.getElementById("sidebar");
                b
                    ? (f.classList.remove("-translate-x-full"),
                      f.classList.remove("ease-in"),
                      f.classList.add("translate-x-0"),
                      f.classList.add("ease-out"))
                    : (f.classList.remove("translate-x-0"),
                      f.classList.remove("ease-out"),
                      f.classList.add("-translate-x-full"),
                      f.classList.add("ease-in"));
            };
        return (
            t.exports.useEffect(() => {
                x(r);
            }, [r]),
            e.createElement(
                e.Fragment,
                null,
                e.createElement(
                    "div",
                    {
                        id: "sidebar",
                        className:
                            "border-r border-gray-200 fixed z-30 inset-y-0 left-0 w-64 transition duration-700 transform flex flex-col h-screen py-8 bg-white  dark:bg-gray-800 dark:border-gray-600 overflow-y-auto overflow-x-hidden rounded-lg ",
                        onClick: u,
                        onMouseLeave: w,
                    },
                    e.createElement(
                        "div",
                        { className: "flex flex-col items-center mt-6 -mx-2" },
                        e.createElement(
                            "div",
                            null,
                            e.createElement("img", {
                                className:
                                    "w-32 h-32 mx-auto content-center my-auto rounded-full ",
                                src: `${fe}assets/images/logo.png`,
                                alt: "brand",
                            }),
                            e.createElement("hr", { className: "my-4 " })
                        )
                    ),
                    e.createElement(
                        "div",
                        {
                            className:
                                "flex flex-col justify-between flex-1 mt-6",
                        },
                        e.createElement(
                            "nav",
                            null,
                            e.createElement(
                                ce,
                                {
                                    to: "/dashboard",
                                    className:
                                        "flex items-center px-4 border-l-4 border-transparent hover:border-blue-500 hover:bg-gray-100 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-blue-600",
                                    href: "#",
                                },
                                e.createElement(
                                    "svg",
                                    {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                    },
                                    e.createElement("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                                    })
                                ),
                                e.createElement(
                                    "span",
                                    { className: "mx-4 font-medium" },
                                    "Inicio"
                                )
                            ),
                            e.createElement(
                                ce,
                                {
                                    to: "/dashboard/search",
                                    className:
                                        "flex items-center border-l-4 border-transparent hover:border-blue-500 px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-blue-600",
                                    href: "#",
                                },
                                e.createElement(
                                    "svg",
                                    {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                    },
                                    e.createElement("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                    })
                                ),
                                e.createElement(
                                    "span",
                                    { className: "mx-4 font-medium" },
                                    "B\xFAsquedas"
                                )
                            ),
                            e.createElement(
                                ce,
                                {
                                    to: "/dashboard/phrases",
                                    className:
                                        "flex items-center border-l-4 border-transparent hover:border-blue-500 px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-blue-600",
                                    href: "#",
                                },
                                e.createElement(
                                    "svg",
                                    {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                    },
                                    e.createElement("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
                                    }),
                                    e.createElement("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z",
                                    })
                                ),
                                e.createElement(
                                    "span",
                                    { className: "mx-4 font-medium" },
                                    "Frases"
                                )
                            ),
                            e.createElement(
                                ce,
                                {
                                    className:
                                        "border-l-4 border-transparent hover:border-blue-500 flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-blue-700",
                                    to: "/dashboard/notes",
                                },
                                e.createElement(
                                    "svg",
                                    {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                    },
                                    e.createElement("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                                    })
                                ),
                                e.createElement(
                                    "span",
                                    { className: "mx-4 font-medium" },
                                    "Notas"
                                )
                            ),
                            e.createElement(
                                ce,
                                {
                                    to: "/dashboard/tags",
                                    className:
                                        "flex items-center border-l-4 border-transparent hover:border-blue-500 px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-blue-700",
                                    href: "#",
                                },
                                e.createElement(
                                    "svg",
                                    {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                    },
                                    e.createElement("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                                    })
                                ),
                                e.createElement(
                                    "span",
                                    { className: "mx-4 font-medium" },
                                    "Etiquetas"
                                )
                            )
                        )
                    )
                )
            )
        );
    },
    Se = (n, r, c, i) => (g) => {
        g(Tt(n, r, c, i));
    },
    Tt = (n, r, c, i) => ({
        type: Y.login,
        payload: { token: n, name: r, email: c, photo: i },
    }),
    Ft = () => (n) => {
        n(At()), localStorage.removeItem("_token");
    },
    At = () => ({ type: Y.logout }),
    Mt = ({ showHelpModal: n, setShowHelpModal: r }) => {
        const [c, i] = t.exports.useState(!1);
        t.exports.useState("");
        const [g, u] = t.exports.useState(
                `Live Inspired ${new Date().getFullYear()}`
            ),
            w = () => {
                i(!0);
            },
            x = () => {
                i(!1), r(!1);
            },
            b = () => {
                i(!1), r(!1);
            };
        return (
            t.exports.useEffect(() => {
                n && w();
            }, [n]),
            e.createElement(
                e.Fragment,
                null,
                e.createElement(
                    ie,
                    {
                        title: g,
                        visible: c,
                        onOk: x,
                        onCancel: b,
                        footer: [
                            e.createElement(
                                "div",
                                null,
                                e.createElement(
                                    "h1",
                                    { className: "text-md text-center" },
                                    "Duda o Sugerencia a:",
                                    " ",
                                    e.createElement(
                                        "a",
                                        {
                                            className:
                                                "text-blue-700 hover:underline hover:text-blue-500",
                                        },
                                        "gabry95g@gmail.com"
                                    )
                                )
                            ),
                        ],
                        style: { textAlign: "center" },
                    },
                    e.createElement(
                        "div",
                        null,
                        e.createElement("img", {
                            className:
                                "w-32 h-32 mx-auto content-center my-auto rounded-full cursor-pointer",
                            src: `${fe}assets/images/logo.png`,
                            alt: "brand",
                        })
                    )
                )
            )
        );
    },
    Le = T`
  query me {
    me {
      id
      name
      email
      images {
        id
        name
      }
    }
  }
`,
    $t = T`
  mutation deleteImage($id: Int!) {
    deleteImage(id: $id) {
      name
    }
  }
`,
    Bt = T`
  mutation uploadImgB64($name: String!) {
    storeImage(name: $name) {
      id
    }
  }
`,
    _t = ({ setPhoto: n, action: r, selectedImage: c }) => {
        const i = {
                previewVisible: !1,
                previewImage: "",
                previewTitle: "",
                fileList: [],
            },
            [g, u] = t.exports.useState(i),
            w = (a) =>
                new Promise((l, d) => {
                    const v = new FileReader();
                    v.readAsDataURL(a),
                        (v.onload = () => l(v.result)),
                        (v.onerror = (L) => d(L));
                }),
            x = () => u({ previewVisible: !1, fileList: N }),
            b = async (a) => {
                a.preview === void 0 && a.url === void 0
                    ? ((a.preview = await w(a.originFileObj)),
                      u({
                          previewImage: a.preview,
                          previewVisible: !0,
                          previewTitle: "Foto",
                          fileList: [a],
                      }))
                    : a.preview !== void 0 && a.url === void 0
                    ? u({
                          previewImage: a.preview,
                          previewVisible: !0,
                          previewTitle: "Foto",
                          fileList: [a],
                      })
                    : a.url !== void 0 &&
                      u({
                          previewImage: a.url,
                          previewVisible: !0,
                          previewTitle: "Foto",
                          fileList: [a],
                      });
            },
            f = ({ fileList: a }) => {
                if (a !== void 0 && a.length !== 0) {
                    u({ fileList: a });
                    const { originFileObj: l } = a[0];
                    n(l);
                }
                u({ fileList: a });
            },
            m = (a) => {
                if (a !== void 0) {
                    const { id: l, name: d } = a;
                    u({
                        fileList: [
                            { uid: "-1", name: "", status: "done", url: d },
                        ],
                    });
                }
            },
            {
                previewVisible: p,
                previewImage: C,
                previewTitle: h,
                fileList: N,
            } = g,
            k = () => {
                N !== void 0 && N.length !== 0 && (N[0].status = "done");
            };
        t.exports.useEffect(() => {
            k();
        }, [g]),
            t.exports.useEffect(() => {
                r === "update" && c !== void 0 && m(c);
            }, [c]);
        const s = e.createElement(
            "div",
            null,
            e.createElement(
                "svg",
                {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                },
                e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z",
                }),
                e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z",
                })
            )
        );
        return e.createElement(
            "div",
            null,
            e.createElement(
                lt,
                {
                    action: "",
                    listType: "picture-card",
                    fileList: N,
                    onPreview: b,
                    onChange: f,
                    style: { borderRadius: "10px" },
                },
                N !== void 0 && N.length >= 1 ? null : s
            ),
            e.createElement(
                ie,
                {
                    visible: p,
                    title: h,
                    footer: null,
                    onCancel: x,
                    style: { borderRadius: "10px" },
                },
                e.createElement("img", {
                    alt: "example",
                    style: {
                        width: "100%",
                        height: "400px",
                        borderRadius: "10px",
                    },
                    src: C,
                })
            )
        );
    },
    Dt = T`
  mutation LogIn($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      access_token
      user {
        name
        email
        images {
          id
          name
        }
      }
    }
  }
`,
    Pt = T`
  mutation logout {
    logout {
      status
      message
    }
  }
`,
    zt = T`
  mutation changePassword(
    $old_password: String!
    $password: String!
    $password_confirmation: String!
  ) {
    updatePassword(
      input: {
        old_password: $old_password
        password: $password
        password_confirmation: $password_confirmation
      }
    ) {
      status
      message
    }
  }
`,
    Rt = T`
  mutation updateUser($id: ID!, $name: String, $images: [ID!]) {
    updateUser(input: { id: $id, name: $name, images: { connect: $images } }) {
      name
      images {
        id
        name
      }
    }
  }
`,
    jt = T`
  mutation updateImageUser($id: ID!, $images: [ID!]) {
    updateUser(input: { id: $id, images: { connect: $images } }) {
      images {
        id
        name
      }
    }
  }
`,
    Vt = ct({ uri: `${fe}graphql` }),
    Ht = it((n, { headers: r }) => {
        const c = localStorage.getItem("_token");
        return {
            headers: G(W({}, r), { authorization: c ? `Bearer ${c}` : "" }),
        };
    }),
    ae = new mt({ link: Ht.concat(Vt), cache: new dt() });
const K = () =>
        e.createElement(
            e.Fragment,
            null,
            e.createElement(
                "div",
                { className: "sk-chase content-center mx-auto my-8" },
                e.createElement("div", { className: "sk-chase-dot" }),
                e.createElement("div", { className: "sk-chase-dot" }),
                e.createElement("div", { className: "sk-chase-dot" }),
                e.createElement("div", { className: "sk-chase-dot" }),
                e.createElement("div", { className: "sk-chase-dot" }),
                e.createElement("div", { className: "sk-chase-dot" })
            )
        ),
    Ot = ({
        showProfileModal: n,
        setShowProfileModal: r,
        setAvatar: c,
        setProfileName: i,
    }) => {
        const g = q(),
            [u] = B($t),
            [w] = B(Bt),
            [x] = B(Rt),
            [b, { error: f }] = B(jt),
            [m, { error: p }] = B(zt),
            { data: C } = se(Le),
            { loading: h } = P(($) => $.ui),
            [N, k] = t.exports.useState(!1),
            [s, a] = t.exports.useState("Perfil de Usuario"),
            [l, d] = t.exports.useState(""),
            [v, L] = t.exports.useState(""),
            [_, V] = t.exports.useState(""),
            [I, E] = t.exports.useState(""),
            [o, S] = t.exports.useState(""),
            [M, D] = t.exports.useState(),
            [y, F] = t.exports.useState([]),
            [R, J] = t.exports.useState(""),
            [Z, Ve] = t.exports.useState(""),
            [de, Fe] = t.exports.useState(""),
            [ue, Ae] = t.exports.useState(""),
            [re, we] = t.exports.useState("view"),
            [be, Me] = t.exports.useState(!1),
            He = () => {
                k(!0);
            },
            Oe = () => {
                k(!1), r(!1);
            },
            oe = ($, ee, H) => {
                O[$]({ message: ee, description: H });
            },
            $e = () => {
                k(!1), r(!1);
            },
            We = ({ target: $ }) => {
                L($.value);
            },
            qe = ({ target: $ }) => {
                J($.value);
            },
            Ue = ({ target: $ }) => {
                Fe($.value);
            },
            Ge = ({ target: $ }) => {
                Ae($.value);
            },
            ye = async () => {
                await ae.refetchQueries({ include: [Le] });
            },
            Qe = ($) =>
                new Promise((ee, H) => {
                    const z = new FileReader();
                    z.readAsDataURL($),
                        (z.onload = () => ee(z.result)),
                        (z.onerror = (te) => H(te));
                }),
            Ze = async () => {
                g(j());
                let $ = !1,
                    ee = "";
                try {
                    try {
                        be === !0 &&
                            (R !== "" && de !== "" && ue !== ""
                                ? de === ue
                                    ? await m({
                                          variables: {
                                              old_password: R,
                                              password: de,
                                              password_confirmation: ue,
                                          },
                                      }).then((H) => {
                                          const { status: z, message: te } =
                                              H.data.updatePassword;
                                      })
                                    : (($ = !0),
                                      oe(
                                          "warning",
                                          "Atencion",
                                          "No coinciden las contrase\xF1as!!"
                                      ))
                                : (oe(
                                      "warning",
                                      "Atenci\xF3n",
                                      "Debe llenar las campos de las contrase\xF1as!"
                                  ),
                                  ($ = !0)));
                    } catch (H) {
                        console.log(H),
                            ($ = !0),
                            oe(
                                "error",
                                "Error",
                                "La actual contrase\xF1a no es v\xE1lida!!"
                            );
                    }
                    if ($ === !1 && o !== "") {
                        if (Z !== null && Z !== "") {
                            const z = parseInt(Z !== "" && Z);
                            await u({ variables: { id: z } });
                        }
                        const H = await Qe(o);
                        await w({ variables: { name: H } }).then((z) => {
                            if (z !== null) {
                                const { id: te } = z.data.storeImage;
                                ee = parseInt(te);
                            }
                        });
                    }
                    $ === !1 &&
                        ee !== "" &&
                        ee !== null &&
                        (await b({ variables: { id: l, images: [ee] } }).then(
                            (H) => {
                                const { images: z } = H.data.updateUser;
                                ye();
                                const te = localStorage.getItem("_token");
                                z !== void 0 && z.length !== 0 && c(z[0].name);
                            }
                        )),
                        $ === !1 &&
                            (v !== ""
                                ? await x({
                                      variables: { id: l, name: v },
                                  }).then(async (H) => {
                                      ye(), i(v);
                                  })
                                : (($ = !0),
                                  g(A()),
                                  oe(
                                      "warning",
                                      "Atenci\xF3n",
                                      "Debe llenar el nombre!"
                                  )));
                } catch (H) {
                    console.log(H), oe("error", "Error", H.message);
                }
                $ === !1 &&
                    (oe(
                        "success",
                        "Usuario Modificado",
                        "Su usuario fue modificado correctamente"
                    ),
                    we("view")),
                    g(A());
            };
        return (
            t.exports.useEffect(() => {
                n && He(), ye();
            }, [n]),
            t.exports.useEffect(() => {}, [p]),
            t.exports.useEffect(() => {
                J(""), Fe(""), Ae("");
            }, [re]),
            t.exports.useEffect(() => {
                if (C != null) {
                    const {
                        id: $,
                        name: ee,
                        email: H,
                        images: z,
                        roles: te,
                    } = C.me;
                    if (
                        (d($),
                        L(ee),
                        V(H),
                        te != null && te.length !== 0 && E(te),
                        z != null && z.length !== 0)
                    ) {
                        const { id: Ye } = z[0];
                        Ve(Ye), F(z);
                    }
                }
            }, [C]),
            e.createElement(
                e.Fragment,
                null,
                e.createElement(
                    ie,
                    {
                        title: s,
                        visible: N,
                        onOk: Oe,
                        onCancel: $e,
                        footer: [
                            e.createElement(
                                "div",
                                {
                                    className:
                                        "my-5 flex content-center w-full ",
                                },
                                h === !1
                                    ? e.createElement(
                                          "div",
                                          { className: "flex mx-auto" },
                                          re === "view" &&
                                              e.createElement(
                                                  "button",
                                                  {
                                                      onClick: () => {
                                                          we("update"), Me(!1);
                                                      },
                                                      className:
                                                          "bg-gradient-to-r from-green-700 to-green-400 flex  w-full mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none hover:bg-green-400 text-white",
                                                      type: "button",
                                                  },
                                                  e.createElement(
                                                      "svg",
                                                      {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          className:
                                                              "mx-2 h-6 w-6",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          stroke: "currentColor",
                                                      },
                                                      e.createElement("path", {
                                                          strokeLinecap:
                                                              "round",
                                                          strokeLinejoin:
                                                              "round",
                                                          strokeWidth: "2",
                                                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                                      })
                                                  ),
                                                  e.createElement(
                                                      "span",
                                                      { className: "mx-1" },
                                                      "Editar"
                                                  )
                                              ),
                                          re === "update" &&
                                              e.createElement(
                                                  "button",
                                                  {
                                                      onClick: Ze,
                                                      className:
                                                          "bg-gradient-to-r from-green-600 to-green-400 flex  w-full mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none hover:bg-green-400 text-white",
                                                      type: "button",
                                                  },
                                                  e.createElement(
                                                      "svg",
                                                      {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          className:
                                                              "mx-2 h-6 w-6",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          stroke: "currentColor",
                                                      },
                                                      e.createElement("path", {
                                                          strokeLinecap:
                                                              "round",
                                                          strokeLinejoin:
                                                              "round",
                                                          strokeWidth: "2",
                                                          d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4",
                                                      })
                                                  ),
                                                  e.createElement(
                                                      "span",
                                                      { className: "mx-1" },
                                                      "Editar"
                                                  )
                                              ),
                                          re === "view" &&
                                              e.createElement(
                                                  "button",
                                                  {
                                                      onClick: $e,
                                                      className:
                                                          "bg-gradient-to-r from-red-600 to-red-400 flex w-full mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none hover:bg-red-400 text-white",
                                                      type: "button",
                                                  },
                                                  e.createElement(
                                                      "svg",
                                                      {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          className:
                                                              "mx-2 h-6 w-6",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          stroke: "currentColor",
                                                      },
                                                      e.createElement("path", {
                                                          strokeLinecap:
                                                              "round",
                                                          strokeLinejoin:
                                                              "round",
                                                          strokeWidth: "2",
                                                          d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
                                                      })
                                                  ),
                                                  e.createElement(
                                                      "span",
                                                      { className: "mx-1" },
                                                      "Cerrar"
                                                  )
                                              ),
                                          re === "update" &&
                                              e.createElement(
                                                  "button",
                                                  {
                                                      onClick: () => {
                                                          Me(!be);
                                                      },
                                                      className:
                                                          "bg-gradient-to-r from-indigo-600 to-indigo-400 flex w-full mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none hover:bg-indigo-400 text-white",
                                                      type: "button",
                                                  },
                                                  e.createElement(
                                                      "svg",
                                                      {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          className:
                                                              "mx-2 h-6 w-6",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          stroke: "currentColor",
                                                      },
                                                      e.createElement("path", {
                                                          strokeLinecap:
                                                              "round",
                                                          strokeLinejoin:
                                                              "round",
                                                          strokeWidth: "2",
                                                          d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                                      })
                                                  ),
                                                  e.createElement(
                                                      "span",
                                                      { className: "mx-1" },
                                                      " Contrase\xF1a"
                                                  )
                                              ),
                                          re === "update" &&
                                              e.createElement(
                                                  "button",
                                                  {
                                                      onClick: () => {
                                                          we("view");
                                                      },
                                                      className:
                                                          "bg-gradient-to-r from-red-600 to-red-400 flex w-full mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent focus:outline-none hover:bg-red-400 text-white",
                                                      type: "button",
                                                  },
                                                  e.createElement(
                                                      "svg",
                                                      {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          className:
                                                              "mx-2 h-6 w-6",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          stroke: "currentColor",
                                                      },
                                                      e.createElement("path", {
                                                          strokeLinecap:
                                                              "round",
                                                          strokeLinejoin:
                                                              "round",
                                                          strokeWidth: "2",
                                                          d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
                                                      })
                                                  ),
                                                  e.createElement(
                                                      "span",
                                                      { className: "mx-1" },
                                                      "Cancelar"
                                                  )
                                              )
                                      )
                                    : e.createElement(K, { className: "my-10" })
                            ),
                        ],
                        style: { textAlign: "center" },
                    },
                    re === "view" &&
                        e.createElement(
                            "div",
                            null,
                            y.length !== 0 &&
                                e.createElement(
                                    "div",
                                    null,
                                    e.createElement("img", {
                                        className:
                                            "w-32 h-32 mx-auto content-center my-auto rounded-full ",
                                        src: y[0].name,
                                        alt: "brand",
                                    }),
                                    e.createElement("hr", {
                                        className: "my-4 ",
                                    })
                                ),
                            e.createElement(
                                e.Fragment,
                                null,
                                e.createElement(
                                    "div",
                                    { className: "flex content-center " },
                                    e.createElement(
                                        "div",
                                        {
                                            className:
                                                "flex mx-auto cursor-default",
                                        },
                                        e.createElement(
                                            "h1",
                                            {
                                                className:
                                                    " text-md my-1 mx-1 text-center",
                                            },
                                            "Nombre: "
                                        ),
                                        e.createElement(
                                            "h1",
                                            {
                                                className:
                                                    "text-blue-700 text-md my-1 mx-1 text-center",
                                            },
                                            `${v}`
                                        )
                                    )
                                ),
                                e.createElement("hr", {
                                    className: "my-4 mx-auto text-center",
                                }),
                                e.createElement(
                                    "div",
                                    { className: "flex content-center " },
                                    e.createElement(
                                        "div",
                                        {
                                            className:
                                                "flex mx-auto cursor-default",
                                        },
                                        e.createElement(
                                            "h1",
                                            {
                                                className:
                                                    " text-md my-1 mx-1 text-center",
                                            },
                                            "Email: "
                                        ),
                                        e.createElement(
                                            "h1",
                                            {
                                                className:
                                                    "text-blue-700 text-md my-1 mx-1 text-center",
                                            },
                                            `${_}`
                                        )
                                    )
                                )
                            )
                        ),
                    re === "update" &&
                        h === !1 &&
                        e.createElement(
                            "div",
                            null,
                            e.createElement(_t, {
                                setPhoto: S,
                                action: re,
                                selectedImage: M,
                            }),
                            e.createElement("hr", {
                                className: "my-4 mx-auto text-center",
                            }),
                            e.createElement(
                                "div",
                                { className: "my-5  " },
                                e.createElement(
                                    "div",
                                    { className: "my-8 " },
                                    e.createElement(
                                        "label",
                                        { className: "text-md mx-4" },
                                        "Nombre:"
                                    ),
                                    e.createElement("br", null),
                                    e.createElement(U, {
                                        value: v,
                                        onChange: We,
                                        placeholder: "Nombre",
                                        style: {
                                            width: "300px",
                                            borderRadius: "10px",
                                        },
                                    })
                                ),
                                e.createElement("hr", {
                                    className: "my-4 mx-auto text-center",
                                }),
                                be === !0 &&
                                    h === !1 &&
                                    e.createElement(
                                        "div",
                                        null,
                                        e.createElement(
                                            "div",
                                            { className: "my-8 " },
                                            e.createElement(
                                                "label",
                                                { className: "text-md mx-4" },
                                                "Contrase\xF1a anterior:"
                                            ),
                                            e.createElement("br", null),
                                            e.createElement(U.Password, {
                                                value: R,
                                                onChange: qe,
                                                placeholder:
                                                    "Contrase\xF1a anterior",
                                                style: {
                                                    width: "300px",
                                                    borderRadius: "10px",
                                                },
                                            })
                                        ),
                                        e.createElement(
                                            "div",
                                            { className: "my-8 " },
                                            e.createElement(
                                                "label",
                                                { className: "text-md mx-4" },
                                                "Nueva Contrase\xF1a:"
                                            ),
                                            e.createElement("br", null),
                                            e.createElement(U.Password, {
                                                value: de,
                                                onChange: Ue,
                                                placeholder:
                                                    "Nueva contrase\xF1a",
                                                style: {
                                                    width: "300px",
                                                    borderRadius: "10px",
                                                },
                                            })
                                        ),
                                        e.createElement(
                                            "div",
                                            { className: "my-8 " },
                                            e.createElement(
                                                "label",
                                                { className: "text-md mx-4" },
                                                "Confirmar Contrase\xF1a:"
                                            ),
                                            e.createElement("br", null),
                                            e.createElement(U.Password, {
                                                value: ue,
                                                onChange: Ge,
                                                placeholder:
                                                    "Confirmar contrase\xF1a",
                                                style: {
                                                    width: "300px",
                                                    borderRadius: "10px",
                                                },
                                            })
                                        )
                                    )
                            )
                        )
                )
            )
        );
    },
    Wt = T`
  mutation BackupData($dir: String) {
    backupData(dir: $dir) {
      result
    }
  }
`,
    qt = T`
  mutation ($backup: String) {
    restoreData(backup: $backup) {
      result
    }
  }
`,
    Ut = ({
        showConfigModal: n,
        setShowConfigModal: r,
        history: c,
        handleLogout: i,
    }) => {
        const [g, u] = t.exports.useState(!1),
            [w, x] = t.exports.useState(""),
            [b] = B(Wt),
            [f] = B(qt),
            { loading: m } = P((d) => d.ui),
            p = q();
        t.exports.useState(!1);
        const C = () => {
                u(!0);
            },
            h = () => {
                u(!1), r(!1), x("");
            },
            N = async () => {
                let d = w;
                d !== ""
                    ? (p(j()),
                      await b({ variables: { dir: d } }).then((v) => {
                          const { result: L } =
                              v.data.backupData !== void 0
                                  ? v.data.backupData
                                  : "";
                          L === "0"
                              ? (s(
                                    "success",
                                    "Backup",
                                    "Backup realizado de forma satisfactoria!"
                                ),
                                h(),
                                p(A()))
                              : (s(
                                    "error",
                                    "Error",
                                    "Ocurri\xF3 alg\xFAn error, revise la ruta del directorio o backup!"
                                ),
                                p(A()));
                      }))
                    : s(
                          "warning",
                          "Atenci\xF3n",
                          "Llene el directorio o backup SQL!"
                      );
            },
            k = async () => {
                let d = w;
                d !== ""
                    ? (p(j()),
                      await f({ variables: { backup: d } }).then((v) => {
                          const { result: L } =
                              v.data.restoreData !== void 0
                                  ? v.data.restoreData
                                  : "";
                          L === "0"
                              ? (s(
                                    "success",
                                    "Respaldo",
                                    "Datos restaurados de forma satisfactoria!"
                                ),
                                h(),
                                p(A()),
                                c.push("/auth/login"),
                                i())
                              : (s(
                                    "error",
                                    "Error",
                                    "Ocurri\xF3 alg\xFAn error, revise la ruta del directorio o backup!"
                                ),
                                p(A()));
                      }))
                    : s(
                          "warning",
                          "Atenci\xF3n",
                          "Llene el directorio o backup SQL!"
                      );
            },
            s = (d, v, L) => {
                O[d]({ message: v, description: L });
            },
            a = () => {
                u(!1), r(!1);
            },
            l = ({ target: d }) => {
                x(d.value);
            };
        return (
            t.exports.useEffect(() => {
                n && C();
            }, [n]),
            e.createElement(
                e.Fragment,
                null,
                e.createElement(
                    ie,
                    {
                        title: "Backup o Restauraci\xF3n de los Datos",
                        visible: g,
                        onOk: h,
                        onCancel: a,
                        footer: [
                            e.createElement(
                                "div",
                                {
                                    className:
                                        "flex content-center text-center ",
                                },
                                !m &&
                                    e.createElement(
                                        "div",
                                        {
                                            className:
                                                "mx-auto flex text-center ",
                                        },
                                        e.createElement(
                                            "button",
                                            {
                                                onClick: N,
                                                className:
                                                    "bg-gradient-to-r from-blue-700 to-blue-400 flex w-44 mx-auto px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none hover:bg-blue-400 text-white",
                                                type: "button",
                                            },
                                            e.createElement(
                                                "svg",
                                                {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-6 w-6 mx-2",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                },
                                                e.createElement("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                                                })
                                            ),
                                            e.createElement(
                                                "span",
                                                { className: "mx-1" },
                                                "Backup"
                                            )
                                        ),
                                        e.createElement(
                                            "button",
                                            {
                                                onClick: k,
                                                className:
                                                    "bg-gradient-to-r from-indigo-600 to-indigo-400  flex w-44 mx-auto px-4 py-2 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none hover:bg-indigo-400 text-white",
                                                type: "button",
                                            },
                                            e.createElement(
                                                "svg",
                                                {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-6 w-6 mx-2",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                },
                                                e.createElement("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
                                                })
                                            ),
                                            e.createElement(
                                                "span",
                                                { className: "mx-1" },
                                                "Restaurar"
                                            )
                                        )
                                    )
                            ),
                        ],
                        style: { textAlign: "center" },
                    },
                    e.createElement(
                        "div",
                        { className: "my-8 " },
                        m
                            ? e.createElement(
                                  "div",
                                  { className: "flex content-center" },
                                  e.createElement(K, { className: "my-8" })
                              )
                            : e.createElement(
                                  e.Fragment,
                                  null,
                                  e.createElement(
                                      "label",
                                      { className: "font-semibold mx-4 " },
                                      "Directorio ( \\ ) o Backup SQL:"
                                  ),
                                  e.createElement("br", null),
                                  e.createElement(U, {
                                      value: w,
                                      onChange: l,
                                      placeholder:
                                          "Ej. C:\\Users\\gabry\\Desktop\\",
                                      style: {
                                          width: "450px",
                                          borderRadius: "10px",
                                      },
                                  })
                              )
                    ),
                    e.createElement("div", null)
                )
            )
        );
    },
    Gt = ({ history: n }) => {
        const [r] = B(Pt),
            c = q();
        P((I) => I.ui);
        const { email: i } = P((I) => I.auth),
            { name: g } = P((I) => I.auth),
            { photo: u } = P((I) => I.auth),
            [w, x] = t.exports.useState(),
            [b, f] = t.exports.useState(""),
            [m, p] = t.exports.useState(!1),
            [C, h] = t.exports.useState(!1),
            [N, k] = t.exports.useState(!1);
        t.exports.useEffect(() => {
            x(u), f(g);
        }, []);
        const [s, a] = t.exports.useState(!1),
            l = async () => {
                await r().then((I) => {}),
                    c(Ft()),
                    localStorage.removeItem("_token");
            },
            d = () => {
                a(!s);
            },
            v = () => {
                c(Ce(!0));
            },
            L = () => {
                p(!0);
            },
            _ = () => {
                h(!0);
            },
            V = () => {
                k(!0);
            };
        return e.createElement(
            e.Fragment,
            null,
            e.createElement(
                "nav",
                {
                    className:
                        " dark:bg-gray-800 border-b-4 border-gray-200 bg-gradient-to-r from-indigo-600 to-blue-600",
                },
                e.createElement(
                    "div",
                    { className: "container px-35 py-4 mx-auto " },
                    e.createElement(
                        "div",
                        { className: "flex md:justify-between" },
                        e.createElement(
                            "div",
                            { className: "flex float-left w-12", onClick: v },
                            e.createElement(
                                "div",
                                { className: "flex " },
                                e.createElement(
                                    "button",
                                    {
                                        type: "button",
                                        className:
                                            "font-bold text-white hover:text-gray-300 dark:hover:text-gray-400 focus:outline-none  dark:focus:text-gray-400",
                                        "aria-label": "toggle menu",
                                    },
                                    e.createElement(
                                        "svg",
                                        {
                                            className: "h-6 w-6 font-bold",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                        },
                                        e.createElement("path", {
                                            d: "M4 6H20M4 12H20M4 18H11",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        })
                                    )
                                )
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "flex  float-right ml-auto " },
                            e.createElement(
                                "div",
                                { className: "flex " },
                                e.createElement(
                                    "div",
                                    { className: "relative " },
                                    e.createElement(
                                        "div",
                                        {
                                            onClick: d,
                                            className:
                                                "bg-transparent relative z-10 flex items-center p-2 text-sm text-gray-600 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none cursor-pointer",
                                        },
                                        e.createElement(
                                            "button",
                                            {
                                                className:
                                                    " flex mx-auto my-auto hover:text-blue-600  font-semibold outline-none ",
                                            },
                                            w !== ""
                                                ? e.createElement("img", {
                                                      className:
                                                          "flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9",
                                                      src: w,
                                                      alt: "avatar",
                                                  })
                                                : e.createElement(
                                                      "svg",
                                                      {
                                                          xmlns: "http://www.w3.org/2000/svg",
                                                          className:
                                                              "mx-1 h-6 w-6",
                                                          fill: "none",
                                                          viewBox: "0 0 24 24",
                                                          stroke: "currentColor",
                                                      },
                                                      e.createElement("path", {
                                                          strokeLinecap:
                                                              "round",
                                                          strokeLinejoin:
                                                              "round",
                                                          strokeWidth: "2",
                                                          d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                                      })
                                                  )
                                        )
                                    ),
                                    s &&
                                        e.createElement(
                                            "div",
                                            {
                                                onMouseLeave: d,
                                                onClick: d,
                                                className:
                                                    "border-2 border-gray-50 animate__animated animate__fadeIn  absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800",
                                            },
                                            e.createElement(
                                                "a",
                                                {
                                                    href: "#",
                                                    className:
                                                        "flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white",
                                                },
                                                w !== ""
                                                    ? e.createElement("img", {
                                                          className:
                                                              "flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9",
                                                          src: w,
                                                          alt: "avatar",
                                                      })
                                                    : e.createElement(
                                                          "svg",
                                                          {
                                                              xmlns: "http://www.w3.org/2000/svg",
                                                              className:
                                                                  "mx-1 h-6 w-6",
                                                              fill: "none",
                                                              viewBox:
                                                                  "0 0 24 24",
                                                              stroke: "currentColor",
                                                          },
                                                          e.createElement(
                                                              "path",
                                                              {
                                                                  strokeLinecap:
                                                                      "round",
                                                                  strokeLinejoin:
                                                                      "round",
                                                                  strokeWidth:
                                                                      "2",
                                                                  d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                                              }
                                                          )
                                                      ),
                                                e.createElement(
                                                    "div",
                                                    { className: "mx-1 " },
                                                    e.createElement(
                                                        "h1",
                                                        {
                                                            className:
                                                                "text-sm font-semibold text-gray-700 dark:text-gray-200",
                                                        },
                                                        b !== void 0
                                                            ? b
                                                            : "User"
                                                    ),
                                                    e.createElement(
                                                        "p",
                                                        {
                                                            className:
                                                                "text-sm text-gray-500 dark:text-gray-400",
                                                        },
                                                        i !== void 0 ? i : ""
                                                    )
                                                )
                                            ),
                                            e.createElement("hr", {
                                                className:
                                                    "border-gray-200 dark:border-gray-700 ",
                                            }),
                                            e.createElement(
                                                "a",
                                                {
                                                    onClick: _,
                                                    href: "#",
                                                    className:
                                                        "border-l-4 border-transparent hover:border-blue-500 hover:text-blue-600  flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white",
                                                },
                                                e.createElement(
                                                    "svg",
                                                    {
                                                        className:
                                                            "w-5 h-5 mx-1",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                    },
                                                    e.createElement("path", {
                                                        d: "M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z",
                                                        fill: "currentColor",
                                                    }),
                                                    e.createElement("path", {
                                                        d: "M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z",
                                                        fill: "currentColor",
                                                    })
                                                ),
                                                e.createElement(
                                                    "span",
                                                    { className: "mx-1 " },
                                                    "Ver Perfil"
                                                )
                                            ),
                                            e.createElement(
                                                "a",
                                                {
                                                    onClick: L,
                                                    href: "#",
                                                    className:
                                                        "border-l-4 border-transparent hover:border-blue-500 hover:text-blue-600 flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white",
                                                },
                                                e.createElement(
                                                    "svg",
                                                    {
                                                        className:
                                                            "w-5 h-5 mx-1",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                    },
                                                    e.createElement("path", {
                                                        d: "M12 22C6.47967 21.9939 2.00606 17.5203 2 12V11.8C2.10993 6.30452 6.63459 1.92794 12.1307 2.00087C17.6268 2.07379 22.0337 6.56887 21.9978 12.0653C21.9619 17.5618 17.4966 21.9989 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57928 16.4087 3.99999 11.992 3.99999C7.57528 3.99999 3.99421 7.57928 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM13 18H11V16H13V18ZM13 15H11C10.9684 13.6977 11.6461 12.4808 12.77 11.822C13.43 11.316 14 10.88 14 9.99999C14 8.89542 13.1046 7.99999 12 7.99999C10.8954 7.99999 10 8.89542 10 9.99999H8V9.90999C8.01608 8.48093 8.79333 7.16899 10.039 6.46839C11.2846 5.76778 12.8094 5.78493 14.039 6.51339C15.2685 7.24184 16.0161 8.57093 16 9.99999C15.9284 11.079 15.3497 12.0602 14.44 12.645C13.6177 13.1612 13.0847 14.0328 13 15Z",
                                                        fill: "currentColor",
                                                    })
                                                ),
                                                e.createElement(
                                                    "span",
                                                    { className: "mx-1" },
                                                    "Ayuda"
                                                )
                                            ),
                                            e.createElement(
                                                "a",
                                                {
                                                    onClick: V,
                                                    href: "#",
                                                    className:
                                                        "border-l-4 border-transparent hover:border-blue-500 hover:text-blue-600 flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white",
                                                },
                                                e.createElement(
                                                    "svg",
                                                    {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className:
                                                            "h-5 w-5 mx-1",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                    },
                                                    e.createElement("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                                                    })
                                                ),
                                                e.createElement(
                                                    "span",
                                                    { className: "mx-1" },
                                                    "Backup"
                                                )
                                            ),
                                            e.createElement("hr", {
                                                className:
                                                    "border-gray-200 dark:border-gray-700 ",
                                            }),
                                            e.createElement(
                                                "a",
                                                {
                                                    href: "#",
                                                    onClick: l,
                                                    className:
                                                        "border-l-4 border-transparent hover:border-blue-500 hover:text-blue-600 flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white",
                                                },
                                                e.createElement(
                                                    "svg",
                                                    {
                                                        className:
                                                            "w-5 h-5 mx-1",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                    },
                                                    e.createElement("path", {
                                                        d: "M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z",
                                                        fill: "currentColor",
                                                    })
                                                ),
                                                e.createElement(
                                                    "span",
                                                    { className: "mx-1" },
                                                    "Salir"
                                                )
                                            )
                                        )
                                )
                            )
                        ),
                        e.createElement(Mt, {
                            showHelpModal: m,
                            setShowHelpModal: p,
                        }),
                        e.createElement(Ot, {
                            showProfileModal: C,
                            setShowProfileModal: h,
                            setAvatar: x,
                            setProfileName: f,
                        }),
                        e.createElement(Ut, {
                            showConfigModal: N,
                            setShowConfigModal: k,
                            history: n,
                            handleLogout: l,
                        })
                    )
                )
            )
        );
    },
    Ee = T`
    query getNotes {
        Notes {
            id
            date
            text
            tags {
                id
                name
            }
        }
    }
`,
    Ie = T`
    query getNoteById($id: ID!) {
        Note(id: $id) {
            date
            text
            tags {
                id
                name
            }
        }
    }
`,
    Qt = T`
    query noteByTag($tags: Mixed) {
        NoteByTag(
            tags: { column: ID, operator: IN, value: $tags }
        ) {
            id
            date
            text
            tags {
                id
                name
            }
        }
    }
`,
    Zt = T`
  mutation ($date: Date, $text: String!, $tags: [ID]) {
    createNote(input: { date: $date, text: $text, tags: { connect: $tags } }) {
      id
    }
  }
`,
    Yt = T`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`,
    Kt = T`
  mutation deleteNotes($ids: [Int]) {
    deleteNotes(ids: $ids) {
      id
    }
  }
`,
    Xt = T`
  mutation disconnectForeignKeys($id: ID!, $tags: [ID]) {
    updateNote(input: { id: $id, tags: { disconnect: $tags } }) {
      id
    }
  }
`,
    Jt = T`
  mutation updateNote($id: ID!, $date: Date, $text: String, $tags: [ID]) {
    updateNote(
      input: { id: $id, date: $date, text: $text, tags: { connect: $tags } }
    ) {
      id
    }
  }
`,
    me = T`
  query Tags {
    tags {
      id
      name
    }
  }
`,
    ea = ({ noteList: n, setSelectedIds: r, tagFilter: c }) => {
        let i = "";
        const g = (s) => ({
                filterDropdown: ({
                    setSelectedKeys: a,
                    selectedKeys: l,
                    confirm: d,
                    clearFilters: v,
                }) =>
                    e.createElement(
                        "div",
                        { style: { padding: 8 } },
                        e.createElement(U, {
                            ref: (L) => {
                                i = L;
                            },
                            placeholder: "B\xFAsqueda",
                            value: l[0],
                            onChange: (L) =>
                                a(L.target.value ? [L.target.value] : []),
                            onPressEnter: () => h(l, d, s),
                            style: { marginBottom: 8, display: "block" },
                        }),
                        e.createElement(
                            Ne,
                            null,
                            e.createElement(
                                X,
                                {
                                    type: "primary",
                                    onClick: () => h(l, d, s),
                                    icon: e.createElement(le, null),
                                    size: "small",
                                    style: { width: 90 },
                                },
                                "Buscar"
                            ),
                            e.createElement(
                                X,
                                {
                                    onClick: () => N(v),
                                    size: "small",
                                    style: { width: 90 },
                                },
                                "Limpiar"
                            )
                        )
                    ),
                filterIcon: (a) =>
                    e.createElement(le, {
                        style: { color: a ? "#1890ff" : void 0 },
                    }),
                onFilter: (a, l) =>
                    l[s]
                        ? l[s]
                              .toString()
                              .toLowerCase()
                              .includes(a.toLowerCase())
                        : "",
                onFilterDropdownVisibleChange: (a) => {
                    a && setTimeout(() => i.select(), 100);
                },
                render: (a) => a,
            }),
            u = [
                G(W({ title: "Fecha", dataIndex: "date" }, g("date")), {
                    width: "15%",
                }),
                G(W({ title: "Nota", dataIndex: "text" }, g("text")), {
                    width: "50%",
                }),
                {
                    title: "Etiquetas",
                    dataIndex: "tags",
                    filters: c,
                    onFilter: (s, a) => a.tags.includes(s),
                    width: "35%",
                    filterSearch: !0,
                    render: (s) =>
                        e.createElement(
                            e.Fragment,
                            null,
                            s !== void 0 &&
                                s.length !== 0 &&
                                s.map((a) => {
                                    let l = "";
                                    return (
                                        a.includes("A")
                                            ? (l = "blue")
                                            : a.startsWith("A")
                                            ? (l = "volcano")
                                            : a.startsWith("O")
                                            ? (l = "green")
                                            : a.startsWith("E")
                                            ? (l = "cyan")
                                            : a.startsWith("S")
                                            ? (l = "purple")
                                            : a.startsWith("R") && (l = "gold"),
                                        e.createElement(
                                            De,
                                            { color: l, key: a },
                                            a
                                        )
                                    );
                                })
                        ),
                },
            ],
            [w, x] = t.exports.useState([]),
            b = {
                onChange: (s, a) => {
                    if (a.length !== 0) {
                        let l = [];
                        a.forEach((d) => {
                            const { key: v } = d;
                            l.push(parseInt(v));
                        }),
                            r(l);
                    }
                },
                getCheckboxProps: (s) => ({
                    disabled: s.name === "Disabled User",
                    name: s.name,
                }),
            },
            f = "checkbox",
            m = { searchText: "", searchedColumn: "" },
            [p, C] = t.exports.useState(m),
            h = (s, a, l) => {
                a(), C({ searchText: s[0], searchedColumn: l });
            },
            N = (s) => {
                s(), C({ searchText: "" });
            };
        function k(s, a, l, d) {}
        return (
            t.exports.useEffect(
                () => (
                    n !== void 0 && x(n),
                    () => {
                        x([]);
                    }
                ),
                [n]
            ),
            e.createElement(
                "div",
                { className: "overflow-hidden" },
                e.createElement(ke, {
                    rowSelection: W({ type: f }, b),
                    columns: u,
                    dataSource: w,
                    onChange: k,
                })
            )
        );
    },
    ta = ({ history: n }) => {
        const { data: r } = se(Ee),
            [c] = B(Yt),
            [i] = B(Kt),
            [g, { data: u }] = ne(me),
            [w, x] = t.exports.useState([]),
            [b, f] = t.exports.useState([]),
            [m, p] = t.exports.useState([]),
            [C, h] = t.exports.useState([]),
            N = q(),
            { loading: k } = P((E) => E.ui),
            s = (E) => {
                x([]),
                    E.forEach((o) => {
                        const { tags: S } = o,
                            M = {
                                key: o.id,
                                text: o.text,
                                date: o.date,
                                tags:
                                    S.length !== 0 ? S.map((D) => D.name) : "",
                            };
                        x((D) => [...D, M]);
                    });
            },
            a = async () => {
                if ((N(j()), O.destroy(), m.length === 1))
                    try {
                        await c({ variables: { id: m[0] } }).then((E) => {
                            I(
                                "success",
                                "Informaci\xF3n",
                                "Nota eliminada satisfactoriamente!"
                            ),
                                l();
                        });
                    } catch (E) {
                        console.log(E.name),
                            I(
                                "error",
                                "Error!",
                                `Ocurri\xF3 una error: ${E.name}`
                            );
                    }
                else if (m.length > 1)
                    try {
                        await i({ variables: { ids: m } }).then((E) => {
                            I(
                                "success",
                                "Informaci\xF3n",
                                "Notas eliminadas satisfactoriamente!"
                            ),
                                l();
                        });
                    } catch (E) {
                        console.log(E);
                    }
                else
                    I(
                        "warning",
                        "Atenci\xF3n!",
                        "Debe seleccionar al menos una nota!"
                    );
            },
            l = () => {
                p([]), x([]), f([]), L();
            },
            d = () => {
                if (m.length !== 0) {
                    const E = `open${Date.now()}`,
                        o = e.createElement(
                            X,
                            {
                                type: "danger",
                                onClick: a,
                                style: { borderRadius: "100px" },
                            },
                            "Confirmar"
                        );
                    O.open({
                        message: "Atenci\xF3n!",
                        description: "Esta seguro que desea eliminar la nota?",
                        btn: o,
                        key: E,
                    });
                } else
                    I(
                        "warning",
                        "Atenci\xF3n!",
                        "Debe seleccionar al menos una nota!"
                    );
            },
            v = () => {
                n.push("/dashboard/notes/form");
            },
            L = async () => {
                await ae.refetchQueries({ include: [Ee] }), N(A());
            },
            _ = () => {
                if (m.length !== 0) {
                    const E = m[0];
                    E !== void 0 &&
                        E !== "" &&
                        n.replace(`/dashboard/notes/view/${E}`);
                } else
                    I(
                        "warning",
                        "Atenci\xF3n!",
                        "Debe seleccionar al menos una nota!"
                    );
            },
            V = () => {
                if (m.length !== 0) {
                    const E = m[0];
                    E !== void 0 &&
                        E !== "" &&
                        n.replace(`/dashboard/notes/form/${E}`);
                } else
                    I(
                        "warning",
                        "Atenci\xF3n!",
                        "Debe seleccionar al menos una nota!"
                    );
            },
            I = (E, o, S) => {
                O[E]({ message: o, description: S });
            };
        return (
            t.exports.useEffect(() => {
                if (r !== void 0) {
                    const { Notes: E } = r;
                    E != null && s(E);
                }
            }, [r]),
            t.exports.useEffect(() => {
                if (u !== void 0) {
                    const { tags: E } = u;
                    let o = [];
                    E.forEach((S) => {
                        const M = { text: S.name, value: S.name };
                        o.push(M);
                    }),
                        h(o);
                }
            }, [u]),
            t.exports.useEffect(() => {
                w.length !== 0 && f(w);
            }, [w]),
            t.exports.useEffect(() => {
                N(j()), g(), L();
            }, []),
            e.createElement(
                "div",
                {
                    className:
                        " overflow-hidden animate__animated animate__fadeIn container px-8 py-4 mx-auto bg-white rounded-lg  dark:bg-gray-800",
                },
                k === !1
                    ? e.createElement(
                          "div",
                          { className: "overflow-hidden " },
                          e.createElement(
                              "div",
                              null,
                              e.createElement(
                                  "h1",
                                  { className: "flex text-2xl my-1" },
                                  e.createElement(
                                      "p",
                                      { className: "mx-2 " },
                                      "Lista de las notas"
                                  ),
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "h-6 w-6 my-2",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                                      })
                                  )
                              ),
                              e.createElement("hr", { className: "w-1/4" })
                          ),
                          e.createElement(
                              "div",
                              { className: "flex mx-auto my-8" },
                              e.createElement(
                                  "button",
                                  {
                                      onClick: v,
                                      className:
                                          "flex mx-1 px-4 py-2 hover:bg-green-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent bg-gradient-to-r from-green-600 to-green-400 focus:outline-none text-white",
                                      type: "button",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "A\xF1adir"
                                  )
                              ),
                              e.createElement(
                                  "button",
                                  {
                                      onClick: V,
                                      className:
                                          "bg-gradient-to-r from-blue-600 to-blue-400 flex mx-1 px-4 py-2 hover:bg-blue-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none outline-none text-white",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "Editar"
                                  )
                              ),
                              e.createElement(
                                  "button",
                                  {
                                      onClick: _,
                                      className:
                                          "bg-gradient-to-r from-indigo-600 to-indigo-400 flex mx-1 px-4 py-2 hover:bg-indigo-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none text-white",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                      }),
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "Ver"
                                  )
                              ),
                              e.createElement(
                                  "button",
                                  {
                                      onClick: d,
                                      className:
                                          "flex mx-1 px-4 py-2 hover:bg-red-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent bg-gradient-to-r from-red-600 to-red-400 focus:outline-none text-white",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "Eliminar"
                                  )
                              )
                          ),
                          e.createElement("hr", { className: "my-8" }),
                          e.createElement(
                              "div",
                              null,
                              b.length !== 0
                                  ? e.createElement(ea, {
                                        noteList: b,
                                        setSelectedIds: p,
                                        tagFilter: C,
                                        className: "my-6",
                                    })
                                  : e.createElement(
                                        "div",
                                        {
                                            className:
                                                "mx-auto my-6 content-center text-center animate__animated animate__fadeIn",
                                        },
                                        e.createElement(
                                            "h1",
                                            {
                                                className:
                                                    " text-xl text-center my-4",
                                            },
                                            "No hay notas en la base de datos aun."
                                        ),
                                        e.createElement(
                                            "p",
                                            {
                                                onClick: v,
                                                className:
                                                    "animate-pulse font-semibold text-2xl cursor-pointer text-md text-blue-700 text-center content-center my-4  hover:underline",
                                            },
                                            "Agregar Nota +"
                                        )
                                    )
                          )
                      )
                    : e.createElement(K, { className: "my-10" })
            )
        );
    },
    ze = ({ setTags: n, selectedTags: r }) => {
        const [c, { data: i }] = ne(me);
        let g = i !== void 0 ? i.tags : [];
        const [u, w] = t.exports.useState([]),
            x = (m) => {
                w(m);
            },
            b = g.filter((m) => !u.includes(m)),
            f = (m) => {
                let p = [];
                return (
                    m.forEach((C) => {
                        g.forEach((h) => {
                            h.name === C && p.push(h.id);
                        });
                    }),
                    p
                );
            };
        return (
            t.exports.useEffect(() => {
                const m = f(u);
                n(m);
            }, [u]),
            t.exports.useEffect(() => {
                c();
            }, []),
            t.exports.useEffect(() => {
                const m = r.map((p) => p.name);
                w(m);
            }, [r]),
            t.exports.useEffect(() => {
                i !== void 0 && (g = i.tags);
            }, [i]),
            e.createElement(
                "div",
                null,
                e.createElement(
                    ge,
                    {
                        mode: "multiple",
                        placeholder: "Seleccione las Etiquetas",
                        value: u,
                        onChange: x,
                        style: { borderRadius: "10px", width: "350px" },
                    },
                    b.map((m) =>
                        e.createElement(
                            ge.Option,
                            { key: m.id, value: m.name },
                            m.name
                        )
                    )
                )
            )
        );
    },
    { TextArea: aa } = U,
    Re = ({ history: n }) => {
        const { id: r } = he(),
            [c] = B(Zt),
            [i] = B(Xt),
            [g] = B(Jt),
            [u, { data: w }] = ne(Ie),
            x = q(),
            { loading: b } = P((y) => y.ui),
            [f, m] = t.exports.useState(""),
            [p, C] = t.exports.useState(""),
            [h, N] = t.exports.useState(""),
            [k, s] = t.exports.useState([]),
            [a, l] = t.exports.useState([]),
            [d, v] = t.exports.useState([]),
            L = (y, F) => {
                console.log(y, F), C(F);
            },
            _ = ({ target: y }) => {
                N(y.value);
            },
            V = async () => {
                await ae.clearStore({ include: [Ie] });
            },
            I = async () => {
                E() &&
                    (x(j()), f === "save" ? await M() : (await V(), await D()));
            },
            E = () => {
                let y = !0;
                return (
                    pe.isEmpty(p) &&
                        (o("warning", "Atenci\xF3n", "Llene la fecha!"),
                        (y = !1)),
                    pe.isEmpty(h) &&
                        (o(
                            "warning",
                            "Atenci\xF3n",
                            "Escriba algo en la nota!"
                        ),
                        (y = !1)),
                    a.length === 0 &&
                        k.length === 0 &&
                        (o(
                            "warning",
                            "Atenci\xF3n",
                            "Seleccione al menos una etiqueta!"
                        ),
                        (y = !1)),
                    y
                );
            },
            o = (y, F, R) => {
                O[y]({ message: F, description: R });
            },
            S = () => {
                n.push("/dashboard/notes");
            },
            M = async () => {
                try {
                    await c({ variables: { date: p, text: h, tags: a } }).then(
                        (y) => {
                            const { id: F } = y.data.createNote;
                            o(
                                "success",
                                "Nota Guardada",
                                "La nota se guard\xF3 de forma satisfactoria!"
                            ),
                                x(A()),
                                n.push("/dashboard/notes");
                        }
                    );
                } catch (y) {
                    console.log(y.message),
                        x(A()),
                        o(
                            "error",
                            "Error",
                            `Ocurri\xF3 algun error: ${y.message} !`
                        );
                }
            },
            D = async () => {
                const y = r;
                try {
                    a.length === 0
                        ? await i({ variables: { id: y, tags: [] } }).then(
                              (F) => {}
                          )
                        : await i({ variables: { id: y, tags: d } }).then(
                              (F) => {}
                          ),
                        await g({
                            variables: { id: y, date: p, text: h, tags: a },
                        }).then((F) => {
                            v([]),
                                o(
                                    "success",
                                    "Nota Editada",
                                    "La nota se ha modificado de forma satisfactoria!"
                                ),
                                x(A()),
                                n.push("/dashboard/notes");
                        });
                } catch (F) {
                    x(A()),
                        o(
                            "error",
                            "Error",
                            `Ocurri\xF3 algun error: ${F.message} !`
                        );
                }
            };
        return (
            t.exports.useEffect(() => {
                r !== void 0 ? (x(j()), m("update")) : m("save");
            }, []),
            t.exports.useEffect(async () => {
                f === "update" && u({ variables: { id: r } });
            }, [f]),
            t.exports.useEffect(() => {
                if (w !== void 0)
                    try {
                        const { date: y, text: F, tags: R } = w.Note;
                        C(y), N(F), s(R), x(A()), v(R.map((J) => J.id));
                    } catch (y) {
                        console.log(y.message);
                    }
            }, [w]),
            e.createElement(
                "div",
                {
                    className:
                        " overflow-hidden animate__animated animate__fadeIn container px-8 py-4 mx-auto bg-white rounded-lg  dark:bg-gray-800",
                },
                b
                    ? e.createElement("div", null, e.createElement(K, null))
                    : e.createElement(
                          "div",
                          null,
                          e.createElement(
                              "div",
                              { className: "text-center my-6 " },
                              f === "save"
                                  ? e.createElement(
                                        "div",
                                        { className: "content-center" },
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-flex items-center",
                                            },
                                            e.createElement(
                                                "h1",
                                                { className: "text-2xl mx-3 " },
                                                "Guardar Nota"
                                            ),
                                            e.createElement(
                                                "h1",
                                                {
                                                    className:
                                                        "  text-2xl font-semibold text-blue-700 mx-1 ",
                                                },
                                                `${p}`
                                            )
                                        )
                                    )
                                  : e.createElement(
                                        "div",
                                        { className: "content-center" },
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-flex items-center",
                                            },
                                            e.createElement(
                                                "h1",
                                                { className: "text-2xl mx-3 " },
                                                "Modificar Nota"
                                            ),
                                            e.createElement(
                                                "h1",
                                                {
                                                    className:
                                                        "  text-2xl font-semibold text-blue-700 mx-1 ",
                                                },
                                                `${p}`
                                            )
                                        )
                                    )
                          ),
                          e.createElement("hr", null),
                          e.createElement(
                              "div",
                              {
                                  className:
                                      "animate__animated animate__fadeIn",
                              },
                              e.createElement(
                                  "div",
                                  { className: "content-center text-center " },
                                  e.createElement(
                                      "div",
                                      { className: "mx-auto my-10" },
                                      e.createElement(ut, {
                                          style: {
                                              width: "350px",
                                              borderRadius: "10px",
                                          },
                                          value: p !== "" && gt(p),
                                          onChange: L,
                                      })
                                  ),
                                  e.createElement("hr", null),
                                  e.createElement(
                                      "div",
                                      { className: "my-6" },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-auto h-7 w-7 my-2",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              strokeWidth: "2",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                                          })
                                      ),
                                      e.createElement(aa, {
                                          value: h,
                                          onChange: _,
                                          placeholder: "Escriba la nota ... ",
                                          style: {
                                              width: "550px",
                                              borderRadius: "10px",
                                              paddingTop: "15px",
                                              paddingBottom: "15px",
                                              paddingLeft: "20px",
                                              paddingRight: "20px",
                                          },
                                          autoSize: !0,
                                      })
                                  ),
                                  e.createElement(
                                      "div",
                                      { className: "my-8" },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "h-7 w-7 mx-auto my-2",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                                          })
                                      ),
                                      e.createElement(ze, {
                                          selectedTags: k,
                                          setTags: l,
                                      })
                                  )
                              )
                          ),
                          e.createElement("hr", null),
                          e.createElement(
                              "div",
                              {
                                  className:
                                      "my-10 flex content-center w-full ",
                              },
                              e.createElement(
                                  "div",
                                  { className: "flex mx-auto" },
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: I,
                                          className:
                                              "bg-gradient-to-r from-green-600 to-green-400 flex w-48 mx-1 px-4 py-2 hover:bg-green-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none text-white",
                                          type: "button",
                                      },
                                      f === "save"
                                          ? e.createElement(
                                                e.Fragment,
                                                null,
                                                e.createElement(
                                                    "svg",
                                                    {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className:
                                                            "mx-4 h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                    },
                                                    e.createElement("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4",
                                                    })
                                                ),
                                                e.createElement(
                                                    "span",
                                                    { className: "mx-1" },
                                                    "Guardar"
                                                )
                                            )
                                          : e.createElement(
                                                e.Fragment,
                                                null,
                                                e.createElement(
                                                    "svg",
                                                    {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className:
                                                            "mx-4 h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                    },
                                                    e.createElement("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                                    })
                                                ),
                                                e.createElement(
                                                    "span",
                                                    { className: "mx-1" },
                                                    "Editar"
                                                )
                                            )
                                  ),
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: S,
                                          className:
                                              "bg-gradient-to-r from-blue-600 to-blue-400 flex  w-48 mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none hover:bg-blue-400 text-white",
                                          type: "button",
                                      },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-4 h-6 w-6",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
                                          })
                                      ),
                                      e.createElement(
                                          "span",
                                          { className: "mx-1" },
                                          "Regresar"
                                      )
                                  )
                              )
                          )
                      )
            )
        );
    },
    { TextArea: ra } = U,
    na = ({ history: n }) => {
        const { id: r } = he(),
            [c, { data: i }] = ne(Ie),
            [g, u] = t.exports.useState(""),
            [w, x] = t.exports.useState(""),
            [b, f] = t.exports.useState([]),
            m = q(),
            { loading: p } = P((h) => h.ui);
        t.exports.useEffect(() => {
            c({ variables: { id: r } }), m(j());
        }, []),
            t.exports.useEffect(() => {
                if (!i) return e.createElement(xe, { to: "/dashboard/notes" });
                const h = i.Note;
                if (h !== null) {
                    const { date: N, text: k, tags: s } = h;
                    u(N), x(k);
                    const a = s.length !== 0 ? s.map((l) => l.name) : [];
                    f(a), m(A());
                }
            }, [i]);
        const C = () => {
            n.push("/dashboard/notes");
        };
        return e.createElement(
            "div",
            null,
            e.createElement(
                "div",
                {
                    className:
                        " container px-8 py-4 mx-auto bg-white rounded-xl  dark:bg-gray-800",
                },
                p
                    ? e.createElement(
                          "div",
                          { className: "flex content-center" },
                          e.createElement(K, { className: "my-8" })
                      )
                    : e.createElement(
                          "div",
                          { className: "animate__animated animate__fadeIn" },
                          e.createElement(
                              "div",
                              { className: "content-center text-center my-6 " },
                              e.createElement(
                                  "div",
                                  { className: "inline-flex items-center " },
                                  e.createElement(
                                      "h1",
                                      { className: "text-2xl mx-3 " },
                                      "Ver nota "
                                  ),
                                  e.createElement(
                                      "h1",
                                      {
                                          className:
                                              "  text-2xl font-semibold text-blue-700 mx-1 ",
                                      },
                                      `${g}`
                                  )
                              )
                          ),
                          e.createElement("hr", null),
                          e.createElement(
                              "div",
                              null,
                              e.createElement(
                                  "div",
                                  null,
                                  e.createElement(
                                      "blockquote",
                                      { className: "my-5 mx-5 px-5 py-5 " },
                                      e.createElement(
                                          "div",
                                          {
                                              className:
                                                  "content-center flex text-center",
                                          },
                                          e.createElement(
                                              "svg",
                                              {
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  className:
                                                      "mx-auto my-1 h-8 w-8",
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                              },
                                              e.createElement("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                                              })
                                          )
                                      ),
                                      e.createElement("br", null),
                                      e.createElement(
                                          "div",
                                          {
                                              className:
                                                  "mx-auto text-center content-center",
                                          },
                                          e.createElement(ra, {
                                              value: w,
                                              style: {
                                                  width: "550px",
                                                  borderRadius: "10px",
                                                  paddingTop: "15px",
                                                  paddingBottom: "15px",
                                                  paddingLeft: "20px",
                                                  paddingRight: "20px",
                                                  disabled: !0,
                                              },
                                              autoSize: !0,
                                          })
                                      )
                                  )
                              ),
                              e.createElement("hr", null),
                              e.createElement(
                                  "div",
                                  { className: "" },
                                  e.createElement(
                                      "blockquote",
                                      { className: "my-5 mx-5 px-5 py-5" },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "h-8 w-8 mx-auto my-1",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                                          })
                                      ),
                                      e.createElement(
                                          "div",
                                          {
                                              className:
                                                  "text-md font-semibold text-center",
                                          },
                                          b.map((h, N) =>
                                              e.createElement(
                                                  "p",
                                                  {
                                                      key: N,
                                                      className:
                                                          "text-blue-700 inline-block mx-2 text-xl",
                                                  },
                                                  `#${h}`
                                              )
                                          )
                                      )
                                  )
                              )
                          ),
                          e.createElement("hr", null),
                          e.createElement(
                              "div",
                              {
                                  className:
                                      "my-10 flex content-center w-full ",
                              },
                              e.createElement(
                                  "div",
                                  { className: "flex mx-auto " },
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: C,
                                          className:
                                              "bg-gradient-to-r from-indigo-600 to-indigo-400 flex w-48 h-11 mx-1 px-4 py-2 rounded-full border text-white border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  hover:bg-indigo-400  focus:outline-none ",
                                          type: "button",
                                      },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-4 h-6 w-6",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
                                          })
                                      ),
                                      e.createElement(
                                          "span",
                                          { className: "mx-1" },
                                          "Regresar"
                                      )
                                  ),
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: () => {
                                              n.push("/dashboard/search");
                                          },
                                          className:
                                              "bg-gradient-to-r from-blue-600 to-blue-400 flex w-48 h-11 mx-1 px-4 py-2 rounded-full border text-white border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  hover:bg-blue-400  focus:outline-none ",
                                          type: "button",
                                      },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-4 h-6 w-6",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                          })
                                      ),
                                      e.createElement(
                                          "span",
                                          { className: "mx-1" },
                                          "Buscar"
                                      )
                                  )
                              )
                          )
                      )
            )
        );
    },
    sa = T`
  mutation updateTag($id: ID!, $name: String!) {
    updateTag(id: $id, name: $name) {
      name
    }
  }
`,
    oa = T`
  mutation deleteTag($id: ID!) {
    deleteTag(id: $id) {
      name
    }
  }
`,
    la = T`
  mutation deleteTags($ids: [Int]) {
    deleteTags(ids: $ids) {
      id
    }
  }
`,
    ca = T`
  mutation createTag($name: String!) {
    createTag(name: $name) {
      id
    }
  }
`,
    ia = ({ tagsList: n, setSelectedIds: r }) => {
        let c = "";
        const i = (k) => {
                k(), C({ searchText: "" });
            },
            u = [
                G(
                    W(
                        { title: "#Etiqueta", dataIndex: "name" },
                        ((k) => ({
                            filterDropdown: ({
                                setSelectedKeys: s,
                                selectedKeys: a,
                                confirm: l,
                                clearFilters: d,
                            }) =>
                                e.createElement(
                                    "div",
                                    { style: { padding: 8 } },
                                    e.createElement(U, {
                                        ref: (v) => {
                                            c = v;
                                        },
                                        placeholder: "Busqueda",
                                        value: a[0],
                                        onChange: (v) =>
                                            s(
                                                v.target.value
                                                    ? [v.target.value]
                                                    : []
                                            ),
                                        onPressEnter: () => h(a, l, k),
                                        style: {
                                            marginBottom: 8,
                                            display: "block",
                                        },
                                    }),
                                    e.createElement(
                                        Ne,
                                        null,
                                        e.createElement(
                                            X,
                                            {
                                                type: "primary",
                                                onClick: () => h(a, l, k),
                                                icon: e.createElement(le, null),
                                                size: "small",
                                                style: { width: 90 },
                                            },
                                            "Buscar"
                                        ),
                                        e.createElement(
                                            X,
                                            {
                                                onClick: () => i(d),
                                                size: "small",
                                                style: { width: 90 },
                                            },
                                            "Limpiar"
                                        )
                                    )
                                ),
                            filterIcon: (s) =>
                                e.createElement(le, {
                                    style: { color: s ? "#1890ff" : void 0 },
                                }),
                            onFilter: (s, a) =>
                                a[k]
                                    ? a[k]
                                          .toString()
                                          .toLowerCase()
                                          .includes(s.toLowerCase())
                                    : "",
                            onFilterDropdownVisibleChange: (s) => {
                                s && setTimeout(() => c.select(), 100);
                            },
                            render: (s) => s,
                        }))("name")
                    ),
                    {
                        defaultSortOrder: "descend",
                        sorter: (k, s) => k.name.length - s.name.length,
                    }
                ),
            ],
            [w, x] = t.exports.useState([]),
            b = {
                onChange: (k, s) => {
                    if (s.length !== 0) {
                        let a = [];
                        s.forEach((l) => {
                            const { key: d } = l;
                            a.push(parseInt(d));
                        }),
                            r(a);
                    }
                },
                getCheckboxProps: (k) => ({
                    disabled: k.name === "Disabled User",
                    name: k.name,
                }),
            },
            f = "checkbox",
            m = { searchText: "", searchedColumn: "" },
            [p, C] = t.exports.useState(m),
            h = (k, s, a) => {
                s(), C({ searchText: k[0], searchedColumn: a });
            };
        function N(k, s, a, l) {}
        return (
            t.exports.useEffect(
                () => (
                    n !== void 0 && x(n),
                    () => {
                        x([]);
                    }
                ),
                [n]
            ),
            e.createElement(
                "div",
                null,
                e.createElement(ke, {
                    rowSelection: W({ type: f }, b),
                    columns: u,
                    dataSource: w,
                    onChange: N,
                })
            )
        );
    },
    ma = ({
        action: n,
        show: r,
        setShowModal: c,
        setTagName: i,
        tag: g,
        saveTag: u,
        modifyTag: w,
    }) => {
        const [x, b] = t.exports.useState(!1),
            [f, m] = t.exports.useState(""),
            [p, C] = t.exports.useState(""),
            h = () => {
                b(!0);
            },
            N = () => {
                b(!1),
                    c(!1),
                    n === "save" &&
                        (f !== ""
                            ? (u(f), m(""))
                            : k("warning", "Atencion", "Llene la Etiqueta!!")),
                    n === "update" &&
                        (f !== ""
                            ? (w(f), m(""))
                            : k("warning", "Atencion", "Llene la Etiqueta!!"));
            },
            k = (l, d, v) => {
                O[l]({ message: d, description: v });
            },
            s = () => {
                m(""), i(""), b(!1), c(!1);
            },
            a = ({ target: l }) => {
                m(l.value), i(f);
            };
        return (
            t.exports.useEffect(() => {
                n !== void 0 &&
                    (n === "save"
                        ? C("Agregar Etiqueta")
                        : (C("Editar Etiqueta"), m(g)));
            }, [n]),
            t.exports.useEffect(() => {
                r !== void 0 &&
                    (r
                        ? (n === "update" && (C("Editar Etiqueta"), m(g)), h())
                        : b(!1));
            }, [r]),
            e.createElement(
                e.Fragment,
                null,
                e.createElement(
                    ie,
                    {
                        title: p,
                        visible: x,
                        onOk: N,
                        onCancel: s,
                        footer: [
                            e.createElement(
                                X,
                                {
                                    key: "submit",
                                    type: "primary",
                                    onClick: N,
                                    style: { borderRadius: "100px" },
                                },
                                n === "save" ? "Agregar" : "Editar"
                            ),
                            e.createElement(
                                X,
                                {
                                    key: "back",
                                    type: "danger",
                                    onClick: s,
                                    style: { borderRadius: "100px" },
                                },
                                "Cancelar"
                            ),
                        ],
                    },
                    e.createElement(U, {
                        placeholder: "Etiqueta",
                        value: f,
                        onChange: a,
                        onPressEnter: N,
                        style: { borderRadius: "10px" },
                    })
                )
            )
        );
    },
    da = ({ history: n }) => {
        const [r, c] = t.exports.useState([]),
            [i, g] = t.exports.useState([]),
            [u, w] = t.exports.useState(""),
            [x, b] = t.exports.useState(""),
            [f, m] = t.exports.useState(!1),
            p = q(),
            { loading: C } = P((o) => o.ui),
            { data: h } = se(me),
            [N] = B(sa),
            [k] = B(oa),
            [s] = B(la),
            [a] = B(ca),
            l = async () => {
                await ae.refetchQueries({ include: "active" }), p(A());
            },
            d = (o, S, M) => {
                O[o]({ message: S, description: M });
            },
            v = (o) => {
                c([]),
                    o.forEach((S) => {
                        const M = { key: S.id, name: S.name };
                        c((D) => [...D, M]);
                    });
            },
            L = async (o) => {
                if (o !== "")
                    try {
                        await a({ variables: { name: o } }).then((S) => {
                            l(),
                                d(
                                    "success",
                                    "Etiqueta agregada",
                                    `La Etiqueta ${o} fue agregada satisfactoriamente`
                                );
                        });
                    } catch (S) {
                        console.log(S.message);
                    }
            },
            _ = async (o) => {
                if (i.length !== 0) {
                    if (o !== "")
                        try {
                            await N({ variables: { id: i[0], name: o } }).then(
                                (S) => {
                                    l(),
                                        d(
                                            "success",
                                            "Etiqueta editada",
                                            `La Etiqueta ${o} fue editada satisfactoriamente`
                                        );
                                }
                            );
                        } catch (S) {
                            console.log(S.message);
                        }
                } else
                    d("success", "Atenci\xF3n!", "Selecione una Etiqueta!!!");
            },
            V = async () => {
                if ((O.destroy(), i.length === 1))
                    p(j()),
                        await k({ variables: { id: i[0] } }).then((o) => {
                            l(),
                                d(
                                    "success",
                                    "Etiqueta eliminada",
                                    "La Etiqueta fue eliminada satisfactoriamente"
                                );
                        });
                else if (i.length > 1) {
                    p(j());
                    try {
                        await s({ variables: { ids: i } }).then((o) => {
                            d(
                                "success",
                                "Etiqueta eliminada",
                                "Las etiquetas fueron eliminadas satisfactoriamente"
                            ),
                                I();
                        });
                    } catch (o) {
                        console.log(o.name),
                            d(
                                "error",
                                "Error!",
                                `Ocurri\xF3 un error: ${o.name}`
                            );
                    }
                } else
                    d("warning", "Atenci\xF3n!!", "Seleccione una Etiqueta!");
            },
            I = () => {
                g([]), c([]), l();
            },
            E = () => {
                if (i.length !== 0) {
                    const o = `open${Date.now()}`,
                        S = e.createElement(
                            X,
                            {
                                type: "danger",
                                onClick: V,
                                style: { borderRadius: "100px" },
                            },
                            "Confirmar"
                        );
                    O.open({
                        message: "Atenci\xF3n!",
                        description:
                            "Esta seguro que desea eliminar la Etiqueta?",
                        btn: S,
                        key: o,
                    });
                } else
                    d(
                        "warning",
                        "Atenci\xF3n!",
                        "Debe seleccionar al menos una Etiqueta!"
                    );
            };
        return (
            t.exports.useEffect(() => {
                p(j()), l();
            }, []),
            t.exports.useEffect(() => {
                if (h !== void 0) {
                    const { tags: o } = h;
                    v(o);
                }
            }, [h]),
            e.createElement(
                "div",
                {
                    className:
                        " overflow-hidden animate__animated animate__fadeIn container px-8 py-4 mx-auto bg-white rounded-lg  dark:bg-gray-800",
                },
                C === !1
                    ? e.createElement(
                          "div",
                          null,
                          e.createElement(
                              "h1",
                              { className: "flex text-2xl my-2" },
                              e.createElement(
                                  "p",
                                  { className: "mx-2 " },
                                  "Lista de etiquetas"
                              ),
                              e.createElement(
                                  "svg",
                                  {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: " my-2 h-6 w-6",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                  },
                                  e.createElement("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                                  })
                              )
                          ),
                          e.createElement("hr", { className: "w-1/4" }),
                          e.createElement(
                              "div",
                              { className: "flex mx-auto my-8" },
                              e.createElement(
                                  "button",
                                  {
                                      className:
                                          "bg-gradient-to-r from-green-600 to-green-400 flex mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  hover:bg-green-400  focus:outline-none text-white",
                                      type: "button",
                                      onClick: () => {
                                          m(!0), b("save");
                                      },
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "A\xF1adir"
                                  )
                              ),
                              e.createElement(
                                  "button",
                                  {
                                      onClick: () => {
                                          if (i.length !== 0) {
                                              if (r.length !== 0) {
                                                  const o = r.filter(
                                                      (S) => S.key == i[0]
                                                  );
                                                  if (o.length !== 0) {
                                                      const { name: S } = o[0];
                                                      w(S), b("update"), m(!0);
                                                  }
                                              }
                                          } else
                                              d(
                                                  "warning",
                                                  "Atenci\xF3n!",
                                                  "Debe seleccionar una Etiqueta!"
                                              );
                                      },
                                      className:
                                          "bg-gradient-to-r from-blue-600 to-blue-400 flex mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent hover:bg-blue-400  focus:outline-none outline-none text-white",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "Editar"
                                  )
                              ),
                              e.createElement(
                                  "button",
                                  {
                                      onClick: () => {
                                          E();
                                      },
                                      className:
                                          "bg-gradient-to-r from-red-600 to-red-400 flex mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  hover:bg-red-400 focus:outline-none text-white",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "Eliminar"
                                  )
                              )
                          ),
                          e.createElement("hr", { className: "my-8" }),
                          e.createElement(
                              "div",
                              null,
                              r.length !== 0
                                  ? e.createElement(ia, {
                                        tagsList: r,
                                        setSelectedIds: g,
                                        className: "my-6",
                                    })
                                  : e.createElement(
                                        "div",
                                        {
                                            className:
                                                "mx-auto my-6 content-center text-center animate__animated animate__fadeIn",
                                        },
                                        e.createElement(
                                            "h1",
                                            {
                                                className:
                                                    " text-xl text-center my-4",
                                            },
                                            "No hay etiquetas en la base de datos aun."
                                        ),
                                        e.createElement(
                                            "p",
                                            {
                                                onClick: () => {
                                                    m(!0), b("save");
                                                },
                                                className:
                                                    "animate-pulse font-semibold text-2xl cursor-pointer text-md text-blue-700 text-center content-center my-4  hover:underline",
                                            },
                                            "Agregar Etiqueta +"
                                        )
                                    )
                          )
                      )
                    : e.createElement(K, { className: "my-10" }),
                e.createElement(ma, {
                    action: x,
                    show: f,
                    setTagName: w,
                    tag: u,
                    setShowModal: m,
                    saveTag: L,
                    modifyTag: _,
                })
            )
        );
    },
    ve = T`
  query getPhrases {
    Phrases {
      id
      text
      author
      tags {
        id
        name
      }
    }
  }
`,
    Te = T`
  query getPhraseByID($id: ID!) {
    Phrase(id: $id) {
      id
      text
      author
      tags {
        id
        name
      }
    }
  }
`,
    ua = T`
  query noteByTag($tags: Mixed) {
    PhraseByTag(tags: { column: ID, operator: IN, value: $tags }) {
      id
      text
      author
      tags {
        id
        name
      }
    }
  }
`,
    ga = T`
  mutation ($text: String!, $author: String, $tags: [ID]) {
    createPhrase(
      input: { text: $text, author: $author, tags: { connect: $tags } }
    ) {
      id
    }
  }
`,
    ha = T`
  mutation deletePhrase($id: ID!) {
    deletePhrase(id: $id) {
      id
    }
  }
`,
    pa = T`
  mutation deletePhrases($ids: [Int]) {
    deletePhrases(ids: $ids) {
      id
    }
  }
`,
    xa = T`
  mutation disconnectForeignKeys($id: ID!, $tags: [ID]) {
    updatePhrase(input: { id: $id, tags: { disconnect: $tags } }) {
      id
    }
  }
`,
    fa = T`
  mutation updatePhrase($id: ID!, $text: String, $author: String, $tags: [ID]) {
    updatePhrase(
      input: { id: $id, text: $text, author: $author, tags: { connect: $tags } }
    ) {
      id
    }
  }
`,
    Ea = ({ phraseList: n, setSelectedIds: r, tagFilter: c }) => {
        let i = "";
        const g = (s) => ({
                filterDropdown: ({
                    setSelectedKeys: a,
                    selectedKeys: l,
                    confirm: d,
                    clearFilters: v,
                }) =>
                    e.createElement(
                        "div",
                        { style: { padding: 8 } },
                        e.createElement(U, {
                            ref: (L) => {
                                i = L;
                            },
                            placeholder: "B\xFAsqueda",
                            value: l[0],
                            onChange: (L) =>
                                a(L.target.value ? [L.target.value] : []),
                            onPressEnter: () => h(l, d, s),
                            style: { marginBottom: 8, display: "block" },
                        }),
                        e.createElement(
                            Ne,
                            null,
                            e.createElement(
                                X,
                                {
                                    type: "primary",
                                    onClick: () => h(l, d, s),
                                    icon: e.createElement(le, null),
                                    size: "small",
                                    style: { width: 90 },
                                },
                                "Buscar"
                            ),
                            e.createElement(
                                X,
                                {
                                    onClick: () => N(v),
                                    size: "small",
                                    style: { width: 90 },
                                },
                                "Limpiar"
                            )
                        )
                    ),
                filterIcon: (a) =>
                    e.createElement(le, {
                        style: { color: a ? "#1890ff" : void 0 },
                    }),
                onFilter: (a, l) =>
                    l[s]
                        ? l[s]
                              .toString()
                              .toLowerCase()
                              .includes(a.toLowerCase())
                        : "",
                onFilterDropdownVisibleChange: (a) => {
                    a && setTimeout(() => i.select(), 100);
                },
                render: (a) => a,
            }),
            u = [
                G(W({ title: "Frase", dataIndex: "text" }, g("text")), {
                    width: "40%",
                }),
                G(W({ title: "Autor", dataIndex: "author" }, g("author")), {
                    width: "20%",
                    defaultSortOrder: "descend",
                    sorter: (s, a) => s.author.length - a.author.length,
                }),
                {
                    title: "Etiquetas",
                    dataIndex: "tags",
                    filters: c,
                    onFilter: (s, a) => a.tags.includes(s),
                    width: "35%",
                    filterSearch: !0,
                    render: (s) =>
                        e.createElement(
                            e.Fragment,
                            null,
                            s !== void 0 &&
                                s.length !== 0 &&
                                s.map((a) => {
                                    let l = "";
                                    return (
                                        a.includes("A")
                                            ? (l = "blue")
                                            : a.startsWith("A")
                                            ? (l = "volcano")
                                            : a.startsWith("O")
                                            ? (l = "green")
                                            : a.startsWith("E")
                                            ? (l = "cyan")
                                            : a.startsWith("S")
                                            ? (l = "purple")
                                            : a.startsWith("R") && (l = "gold"),
                                        e.createElement(
                                            De,
                                            { color: l, key: a },
                                            a
                                        )
                                    );
                                })
                        ),
                },
            ],
            [w, x] = t.exports.useState([]),
            b = {
                onChange: (s, a) => {
                    if (a.length !== 0) {
                        let l = [];
                        a.forEach((d) => {
                            const { key: v } = d;
                            l.push(parseInt(v));
                        }),
                            r(l);
                    }
                },
                getCheckboxProps: (s) => ({
                    disabled: s.name === "Disabled User",
                    name: s.name,
                }),
            },
            f = "checkbox",
            m = { searchText: "", searchedColumn: "" },
            [p, C] = t.exports.useState(m),
            h = (s, a, l) => {
                a(), C({ searchText: s[0], searchedColumn: l });
            },
            N = (s) => {
                s(), C({ searchText: "" });
            };
        function k(s, a, l, d) {}
        return (
            t.exports.useEffect(
                () => (
                    n !== void 0 && x(n),
                    () => {
                        x([]);
                    }
                ),
                [n]
            ),
            e.createElement(
                "div",
                { className: "overflow-hidden" },
                e.createElement(ke, {
                    rowSelection: W({ type: f }, b),
                    columns: u,
                    dataSource: w,
                    onChange: k,
                })
            )
        );
    },
    va = ({ history: n }) => {
        const { data: r } = se(ve),
            [c] = B(ha),
            [i] = B(pa),
            [g, { data: u }] = ne(me),
            [w, x] = t.exports.useState([]),
            [b, f] = t.exports.useState([]),
            [m, p] = t.exports.useState([]),
            [C, h] = t.exports.useState([]),
            N = q(),
            { loading: k } = P((E) => E.ui),
            s = (E) => {
                x([]),
                    E.forEach((o) => {
                        const { tags: S } = o,
                            M = {
                                key: o.id,
                                text: o.text,
                                author: o.author,
                                tags:
                                    S.length !== 0 ? S.map((D) => D.name) : "",
                            };
                        x((D) => [...D, M]);
                    });
            },
            a = async () => {
                if ((N(j()), O.destroy(), m.length === 1))
                    try {
                        await c({ variables: { id: m[0] } }).then((E) => {
                            I(
                                "success",
                                "Informaci\xF3n",
                                "Frase eliminada satisfactoriamente!"
                            ),
                                l();
                        });
                    } catch (E) {
                        console.log(E.name),
                            I(
                                "error",
                                "Error!",
                                `Ocurri\xF3 una error: ${E.name}`
                            );
                    }
                else if (m.length > 1)
                    try {
                        await i({ variables: { ids: m } }).then((E) => {
                            I(
                                "success",
                                "Informaci\xF3n",
                                "Frases eliminadas satisfactoriamente!"
                            ),
                                l();
                        });
                    } catch (E) {
                        console.log(E);
                    }
                else
                    I(
                        "warning",
                        "Atencion!",
                        "Debe seleccionar al menos una frase!"
                    );
            },
            l = () => {
                p([]), x([]), f([]), L();
            },
            d = () => {
                if (m.length !== 0) {
                    const E = `open${Date.now()}`,
                        o = e.createElement(
                            X,
                            {
                                type: "danger",
                                onClick: a,
                                style: { borderRadius: "100px" },
                            },
                            "Confirmar"
                        );
                    O.open({
                        message: "Atencion!",
                        description: "Esta seguro que desea eliminar la frase?",
                        btn: o,
                        key: E,
                    });
                } else
                    I(
                        "warning",
                        "Atencion!",
                        "Debe seleccionar al menos una frase!"
                    );
            },
            v = () => {
                n.push("/dashboard/phrases/form");
            },
            L = async () => {
                await ae.refetchQueries({ include: [ve] }), N(A());
            },
            _ = () => {
                if (m.length !== 0) {
                    const E = m[0];
                    E !== void 0 &&
                        E !== "" &&
                        n.replace(`/dashboard/phrases/view/${E}`);
                } else
                    I(
                        "warning",
                        "Atencion!",
                        "Debe seleccionar al menos una frase!"
                    );
            },
            V = () => {
                if (m.length !== 0) {
                    const E = m[0];
                    E !== void 0 &&
                        E !== "" &&
                        n.replace(`/dashboard/phrases/form/${E}`);
                } else
                    I(
                        "warning",
                        "Atencion!",
                        "Debe seleccionar al menos una frase!"
                    );
            },
            I = (E, o, S) => {
                O[E]({ message: o, description: S });
            };
        return (
            t.exports.useEffect(() => {
                if (r !== void 0) {
                    const { Phrases: E } = r;
                    E != null && s(E);
                }
            }, [r]),
            t.exports.useEffect(() => {
                if (u !== void 0) {
                    const { tags: E } = u;
                    let o = [];
                    E.forEach((S) => {
                        const M = { text: S.name, value: S.name };
                        o.push(M);
                    }),
                        h(o);
                }
            }, [u]),
            t.exports.useEffect(() => {
                w.length !== 0 && f(w);
            }, [w]),
            t.exports.useEffect(() => {
                N(j()), g(), L();
            }, []),
            e.createElement(
                "div",
                {
                    className:
                        " overflow-hidden animate__animated animate__fadeIn container px-8 py-4 mx-auto bg-white rounded-lg dark:bg-gray-800",
                },
                k === !1
                    ? e.createElement(
                          "div",
                          { className: "overflow-hidden " },
                          e.createElement(
                              "div",
                              null,
                              e.createElement(
                                  "h1",
                                  { className: "flex text-2xl my-1" },
                                  e.createElement(
                                      "p",
                                      { className: "mx-2 " },
                                      "Lista de las frases"
                                  ),
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "h-6 w-6 my-2",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          d: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
                                      }),
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          d: "M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z",
                                      })
                                  )
                              ),
                              e.createElement("hr", { className: "w-1/4" })
                          ),
                          e.createElement(
                              "div",
                              { className: "flex mx-auto my-8" },
                              e.createElement(
                                  "button",
                                  {
                                      onClick: v,
                                      className:
                                          "bg-gradient-to-r from-green-600 to-green-400 flex mx-1 px-4 py-2 hover:bg-green-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent focus:outline-none text-white",
                                      type: "button",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "A\xF1adir"
                                  )
                              ),
                              e.createElement(
                                  "button",
                                  {
                                      onClick: V,
                                      className:
                                          "bg-gradient-to-r from-blue-600 to-blue-400 flex mx-1 px-4 py-2 hover:bg-blue-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent bg-blue-500 focus:outline-none outline-none text-white",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "Editar"
                                  )
                              ),
                              e.createElement(
                                  "button",
                                  {
                                      onClick: _,
                                      className:
                                          "bg-gradient-to-r from-indigo-600 to-indigo-400 flex mx-1 px-4 py-2 hover:bg-indigo-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none text-white",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                      }),
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "Ver"
                                  )
                              ),
                              e.createElement(
                                  "button",
                                  {
                                      onClick: d,
                                      className:
                                          "bg-gradient-to-r from-red-600 to-red-400 flex mx-1 px-4 py-2 hover:bg-red-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none text-white",
                                  },
                                  e.createElement(
                                      "svg",
                                      {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "mx-2 h-6 w-6",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                      },
                                      e.createElement("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                      })
                                  ),
                                  e.createElement(
                                      "span",
                                      { className: "mx-1" },
                                      "Eliminar"
                                  )
                              )
                          ),
                          e.createElement("hr", { className: "my-8" }),
                          e.createElement(
                              "div",
                              null,
                              b.length !== 0
                                  ? e.createElement(Ea, {
                                        phraseList: b,
                                        setSelectedIds: p,
                                        tagFilter: C,
                                        className: "my-6",
                                    })
                                  : e.createElement(
                                        "div",
                                        {
                                            className:
                                                "mx-auto my-6 content-center text-center animate__animated animate__fadeIn",
                                        },
                                        e.createElement(
                                            "h1",
                                            {
                                                className:
                                                    " text-xl text-center my-4",
                                            },
                                            "No hay frases en la base de datos aun."
                                        ),
                                        e.createElement(
                                            "p",
                                            {
                                                onClick: v,
                                                className:
                                                    "animate-pulse font-semibold text-2xl cursor-pointer text-md text-blue-700 text-center content-center my-4  hover:underline",
                                            },
                                            "Agregar Frase +"
                                        )
                                    )
                          )
                      )
                    : e.createElement(K, { className: "my-10" })
            )
        );
    },
    { TextArea: wa } = U,
    je = ({ history: n }) => {
        const { id: r } = he(),
            [c] = B(ga),
            [i] = B(xa),
            [g] = B(fa),
            [u, { data: w }] = ne(Te),
            x = q(),
            { loading: b } = P((y) => y.ui),
            [f, m] = t.exports.useState(""),
            [p, C] = t.exports.useState(""),
            [h, N] = t.exports.useState(""),
            [k, s] = t.exports.useState([]),
            [a, l] = t.exports.useState([]),
            [d, v] = t.exports.useState([]),
            L = ({ target: y }) => {
                C(y.value);
            },
            _ = ({ target: y }) => {
                N(y.value);
            },
            V = async () => {
                await ae.clearStore({ include: [Te] });
            },
            I = async () => {
                E() &&
                    (x(j()), f === "save" ? await M() : (await V(), await D()));
            },
            E = () => {
                let y = !0;
                return (
                    pe.isEmpty(p) &&
                        (o("warning", "Atenci\xF3n", "Llene el autor!"),
                        (y = !1)),
                    pe.isEmpty(h) &&
                        (o(
                            "warning",
                            "Atenci\xF3n",
                            "Escriba algo en la frase!"
                        ),
                        (y = !1)),
                    a.length === 0 &&
                        k.length === 0 &&
                        (o(
                            "warning",
                            "Atenci\xF3n",
                            "Seleccione al menos una etiqueta!"
                        ),
                        (y = !1)),
                    y
                );
            },
            o = (y, F, R) => {
                O[y]({ message: F, description: R });
            },
            S = () => {
                n.push("/dashboard/phrases");
            },
            M = async () => {
                try {
                    await c({
                        variables: { text: h, author: p, tags: a },
                    }).then((y) => {
                        const { id: F } = y.data.createPhrase;
                        o(
                            "success",
                            "Frase Guardada",
                            "La frase se guard\xF3 de forma satisfactoria!"
                        ),
                            x(A()),
                            n.push("/dashboard/phrases");
                    });
                } catch (y) {
                    console.log(y.message),
                        x(A()),
                        o(
                            "error",
                            "Error",
                            `Ocurri\xF3 algun error: ${y.message} !`
                        );
                }
            },
            D = async () => {
                const y = r;
                try {
                    a.length === 0
                        ? await i({ variables: { id: y, tags: [] } }).then(
                              (F) => {}
                          )
                        : await i({ variables: { id: y, tags: d } }).then(
                              (F) => {}
                          ),
                        await g({
                            variables: { id: y, text: h, author: p, tags: a },
                        }).then((F) => {
                            v([]),
                                o(
                                    "success",
                                    "Frase Editada",
                                    "La frase se ha modificado de forma satisfactoria!"
                                ),
                                x(A()),
                                n.push("/dashboard/phrases");
                        });
                } catch (F) {
                    x(A()),
                        o(
                            "error",
                            "Error",
                            `Ocurri\xF3 algun error: ${F.message} !`
                        );
                }
            };
        return (
            t.exports.useEffect(() => {
                r !== void 0 ? (x(j()), m("update")) : m("save");
            }, []),
            t.exports.useEffect(async () => {
                f === "update" && u({ variables: { id: r } });
            }, [f]),
            t.exports.useEffect(() => {
                if (w !== void 0)
                    try {
                        const { author: y, text: F, tags: R } = w.Phrase;
                        C(y), N(F), s(R), x(A()), v(R.map((J) => J.id));
                    } catch (y) {
                        console.log(y.message);
                    }
            }, [w]),
            e.createElement(
                "div",
                {
                    className:
                        " overflow-hidden animate__animated animate__fadeIn container px-8 py-4 mx-auto bg-white rounded-lg  dark:bg-gray-800",
                },
                b
                    ? e.createElement("div", null, e.createElement(K, null))
                    : e.createElement(
                          "div",
                          null,
                          e.createElement(
                              "div",
                              { className: "text-center my-6 " },
                              f === "save"
                                  ? e.createElement(
                                        "div",
                                        { className: "content-center" },
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-flex items-center",
                                            },
                                            e.createElement(
                                                "h1",
                                                { className: "text-2xl mx-3 " },
                                                "Guardar frase de "
                                            ),
                                            e.createElement(
                                                "h1",
                                                {
                                                    className:
                                                        "  text-2xl font-semibold text-blue-700 mx-1 ",
                                                },
                                                ` ${p}`
                                            )
                                        )
                                    )
                                  : e.createElement(
                                        "div",
                                        { className: "content-center" },
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-flex items-center",
                                            },
                                            e.createElement(
                                                "h1",
                                                { className: "text-2xl mx-3 " },
                                                "Editar frase de "
                                            ),
                                            e.createElement(
                                                "h1",
                                                {
                                                    className:
                                                        "  text-2xl font-semibold text-blue-700 mx-1 ",
                                                },
                                                ` ${p}`
                                            )
                                        )
                                    )
                          ),
                          e.createElement("hr", null),
                          e.createElement(
                              "div",
                              {
                                  className:
                                      "animate__animated animate__fadeIn",
                              },
                              e.createElement(
                                  "div",
                                  { className: "content-center text-center " },
                                  e.createElement(
                                      "div",
                                      { className: "mx-auto my-10" },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-auto h-7 w-7 my-2",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              strokeWidth: "2",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                          })
                                      ),
                                      e.createElement(U, {
                                          placeholder: "Autor",
                                          value: p,
                                          onChange: L,
                                          style: {
                                              width: "350px",
                                              borderRadius: "10px",
                                          },
                                      })
                                  ),
                                  e.createElement("hr", null),
                                  e.createElement(
                                      "div",
                                      { className: "my-6" },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-auto h-7 w-7 my-2",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              strokeWidth: "2",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
                                          }),
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z",
                                          })
                                      ),
                                      e.createElement(wa, {
                                          value: h,
                                          onChange: _,
                                          placeholder: "Escriba la frase ... ",
                                          style: {
                                              width: "350px",
                                              borderRadius: "10px",
                                              paddingTop: "15px",
                                              paddingBottom: "15px",
                                              paddingLeft: "20px",
                                              paddingRight: "20px",
                                          },
                                          autoSize: !0,
                                      })
                                  ),
                                  e.createElement(
                                      "div",
                                      { className: "my-8" },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "h-7 w-7 mx-auto my-2",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                                          })
                                      ),
                                      e.createElement(ze, {
                                          selectedTags: k,
                                          setTags: l,
                                      })
                                  )
                              )
                          ),
                          e.createElement("hr", null),
                          e.createElement(
                              "div",
                              {
                                  className:
                                      "my-10 flex content-center w-full ",
                              },
                              e.createElement(
                                  "div",
                                  { className: "flex mx-auto" },
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: I,
                                          className:
                                              "bg-gradient-to-r from-green-600 to-green-400 flex w-48 mx-1 px-4 py-2 hover:bg-green-400 rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  focus:outline-none text-white",
                                          type: "button",
                                      },
                                      f === "save"
                                          ? e.createElement(
                                                e.Fragment,
                                                null,
                                                e.createElement(
                                                    "svg",
                                                    {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className:
                                                            "mx-4 h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                    },
                                                    e.createElement("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4",
                                                    })
                                                ),
                                                e.createElement(
                                                    "span",
                                                    { className: "mx-1" },
                                                    "Guardar"
                                                )
                                            )
                                          : e.createElement(
                                                e.Fragment,
                                                null,
                                                e.createElement(
                                                    "svg",
                                                    {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className:
                                                            "mx-4 h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                    },
                                                    e.createElement("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                                    })
                                                ),
                                                e.createElement(
                                                    "span",
                                                    { className: "mx-1" },
                                                    "Editar"
                                                )
                                            )
                                  ),
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: S,
                                          className:
                                              "bg-gradient-to-r from-blue-600 to-blue-400 flex  w-48 mx-1 px-4 py-2  rounded-full border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent focus:outline-none hover:bg-blue-400 text-white",
                                          type: "button",
                                      },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-4 h-6 w-6",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
                                          })
                                      ),
                                      e.createElement(
                                          "span",
                                          { className: "mx-1" },
                                          "Regresar"
                                      )
                                  )
                              )
                          )
                      )
            )
        );
    },
    { TextArea: ba } = U,
    ya = ({ history: n }) => {
        const { id: r } = he(),
            [c, { data: i }] = ne(Te),
            [g, u] = t.exports.useState(""),
            [w, x] = t.exports.useState(""),
            [b, f] = t.exports.useState([]),
            m = q(),
            { loading: p } = P((h) => h.ui);
        t.exports.useEffect(() => {
            c({ variables: { id: r } }), m(j());
        }, []),
            t.exports.useEffect(() => {
                if (!i)
                    return e.createElement(xe, { to: "/dashboard/phrases" });
                const h = i.Phrase;
                if (h !== null) {
                    const { author: N, text: k, tags: s } = h;
                    u(N), x(k);
                    const a = s.length !== 0 ? s.map((l) => l.name) : [];
                    f(a), m(A());
                }
            }, [i]);
        const C = () => {
            n.push("/dashboard/phrases");
        };
        return e.createElement(
            "div",
            null,
            e.createElement(
                "div",
                {
                    className:
                        "container px-8 py-4 mx-auto bg-white rounded-xl  dark:bg-gray-800",
                },
                p
                    ? e.createElement(
                          "div",
                          { className: "flex content-center" },
                          e.createElement(K, { className: "my-8" })
                      )
                    : e.createElement(
                          "div",
                          { className: "animate__animated animate__fadeIn" },
                          e.createElement(
                              "div",
                              { className: "content-center text-center my-6 " },
                              e.createElement(
                                  "div",
                                  { className: "inline-flex items-center " },
                                  e.createElement(
                                      "h1",
                                      { className: "text-2xl mx-3 " },
                                      "Ver frase de "
                                  ),
                                  e.createElement(
                                      "h1",
                                      {
                                          className:
                                              "  text-2xl font-semibold text-blue-700 mx-1 ",
                                      },
                                      ` ${g}`
                                  )
                              )
                          ),
                          e.createElement("hr", null),
                          e.createElement(
                              "div",
                              null,
                              e.createElement(
                                  "div",
                                  null,
                                  e.createElement(
                                      "blockquote",
                                      { className: "my-5 mx-5 px-5 py-5 " },
                                      e.createElement(
                                          "div",
                                          { className: "content-center flex" },
                                          e.createElement(
                                              "svg",
                                              {
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  className:
                                                      "mx-auto my-1 h-8 w-8",
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                              },
                                              e.createElement("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                                              })
                                          )
                                      ),
                                      e.createElement("br", null),
                                      e.createElement(
                                          "div",
                                          {
                                              className:
                                                  "mx-auto text-center content-center",
                                          },
                                          e.createElement(ba, {
                                              value: w,
                                              style: {
                                                  width: "550px",
                                                  borderRadius: "10px",
                                                  paddingTop: "15px",
                                                  paddingBottom: "15px",
                                                  paddingLeft: "20px",
                                                  paddingRight: "20px",
                                                  disabled: !0,
                                              },
                                              autoSize: !0,
                                          })
                                      )
                                  )
                              ),
                              e.createElement("hr", null),
                              e.createElement(
                                  "div",
                                  { className: "" },
                                  e.createElement(
                                      "blockquote",
                                      { className: "my-5 mx-5 px-5 py-5" },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "h-8 w-8 mx-auto my-1",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                                          })
                                      ),
                                      e.createElement(
                                          "div",
                                          {
                                              className:
                                                  "text-md font-semibold text-center",
                                          },
                                          b.map((h, N) =>
                                              e.createElement(
                                                  "p",
                                                  {
                                                      key: N,
                                                      className:
                                                          "text-blue-700 inline-block mx-2 text-xl",
                                                  },
                                                  `#${h}`
                                              )
                                          )
                                      )
                                  )
                              )
                          ),
                          e.createElement("hr", null),
                          e.createElement(
                              "div",
                              {
                                  className:
                                      "my-10 flex content-center w-full ",
                              },
                              e.createElement(
                                  "div",
                                  { className: "flex mx-auto " },
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: C,
                                          className:
                                              "bg-gradient-to-r from-indigo-600 to-indigo-400 flex w-48 h-11 mx-1 px-4 py-2 rounded-full border text-white border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  hover:bg-indigo-400  focus:outline-none ",
                                          type: "button",
                                      },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-4 h-6 w-6",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
                                          })
                                      ),
                                      e.createElement(
                                          "span",
                                          { className: "mx-1" },
                                          "Regresar"
                                      )
                                  ),
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: () => {
                                              n.push("/dashboard/search");
                                          },
                                          className:
                                              "bg-gradient-to-r from-blue-600 to-blue-400 flex w-48 h-11 mx-1 px-4 py-2 rounded-full border text-white border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent  hover:bg-blue-400  focus:outline-none ",
                                          type: "button",
                                      },
                                      e.createElement(
                                          "svg",
                                          {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              className: "mx-4 h-6 w-6",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                          },
                                          e.createElement("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: "2",
                                              d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                          })
                                      ),
                                      e.createElement(
                                          "span",
                                          { className: "mx-1" },
                                          "Buscar"
                                      )
                                  )
                              )
                          )
                      )
            )
        );
    };
const ka = ({ history: n }) => {
        const [r, c] = t.exports.useState(""),
            [i, g] = t.exports.useState(""),
            [u, w] = t.exports.useState(""),
            [x, b] = t.exports.useState("");
        t.exports.useState(!1);
        const [f, m] = t.exports.useState({ value: "", copied: !1 });
        se(Ee);
        const { data: p } = se(ve),
            C = q(),
            { loading: h } = P((d) => d.ui),
            N = async () => {
                await ae.refetchQueries({ include: [Ee, ve] }), C(A());
            },
            k = (d, v) => (
                (d = Math.ceil(d)),
                (v = Math.floor(v)),
                Math.floor(Math.random() * (v - d) + d)
            ),
            s = (d) => {
                let v = null,
                    L = d.length;
                if (L !== 0) {
                    let _ = k(0, L - 1);
                    v = d[_];
                }
                if (v !== null) {
                    const { text: _, author: V, tags: I } = v;
                    g(_), w(V), b(I);
                }
            },
            a = (d, v, L) => {
                O[d]({ message: v, description: L });
            },
            l = () => {
                let d = document.getElementById("phrase").innerText,
                    v = document.getElementById("author").innerText,
                    L = " " + d + "   " + v;
                m({ value: L, copied: !0 });
                const { copied: _ } = f;
                _ === !0 &&
                    a(
                        "success",
                        "Frase Copiada",
                        "Frase copiada al portapapeles."
                    );
            };
        return (
            t.exports.useEffect(() => {
                if (p != null) {
                    const { Phrases: d } = p;
                    s(d), d !== null && d.length !== 0 && c(d.length);
                }
            }, [p]),
            t.exports.useEffect(() => {
                C(j()), N(), m({ value: "", copied: !1 });
            }, []),
            e.createElement(
                "div",
                null,
                e.createElement(
                    "div",
                    { className: "mt-0" },
                    e.createElement(
                        "div",
                        { className: "flex flex-col mt-0" },
                        " ",
                        e.createElement("div", {
                            className:
                                "my-1 align-middle inline-block min-w-full shadow overflow-hidden rounded-lg sm:rounded-lg ",
                        })
                    ),
                    h
                        ? e.createElement(
                              "div",
                              { className: "flex content-center" },
                              e.createElement(K, { className: "my-8" })
                          )
                        : e.createElement(
                              "div",
                              {
                                  className:
                                      "border-b-4 border-t-4 border-r-4 border-l-4 border-indigo-500 max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-2xl dark:bg-gray-800",
                              },
                              e.createElement(
                                  "div",
                                  {
                                      className:
                                          "flex items-center justify-between",
                                  },
                                  e.createElement(
                                      "span",
                                      {
                                          className:
                                              "text-sm font-light text-gray-600 dark:text-gray-400 my-2",
                                      },
                                      new Date().toLocaleDateString("es-es", {
                                          weekday: "long",
                                          year: "numeric",
                                          month: "short",
                                          day: "numeric",
                                      })
                                  ),
                                  p !== void 0 &&
                                      p.Phrases.length !== 0 &&
                                      e.createElement(
                                          ht.CopyToClipboard,
                                          { text: f.value, onCopy: l },
                                          e.createElement(
                                              "span",
                                              null,
                                              e.createElement(
                                                  "svg",
                                                  {
                                                      xmlns: "http://www.w3.org/2000/svg",
                                                      className:
                                                          "h-6 w-6 cursor-pointer hover:text-blue-600",
                                                      fill: "none",
                                                      viewBox: "0 0 24 24",
                                                      stroke: "currentColor",
                                                      strokeWidth: "2",
                                                  },
                                                  e.createElement("path", {
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
                                                  })
                                              )
                                          )
                                      )
                              ),
                              e.createElement(
                                  "div",
                                  { className: "mt-2" },
                                  p !== void 0 && p.Phrases.length !== 0
                                      ? e.createElement(
                                            e.Fragment,
                                            null,
                                            e.createElement(
                                                "h1",
                                                {
                                                    className:
                                                        "text-2xl font-bold cursor-pointer text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:no-underline",
                                                },
                                                "Frase de Impacto del d\xEDa"
                                            ),
                                            e.createElement(
                                                "p",
                                                {
                                                    id: "phrase",
                                                    className:
                                                        "mt-2 text-lg text-gray-600 dark:text-gray-300",
                                                },
                                                i
                                            )
                                        )
                                      : e.createElement(
                                            e.Fragment,
                                            null,
                                            e.createElement(
                                                "h1",
                                                {
                                                    className:
                                                        "text-2xl font-bold cursor-pointer text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:no-underline",
                                                },
                                                "No hay frases que mostrar."
                                            )
                                        )
                              ),
                              e.createElement(
                                  "div",
                                  {
                                      className:
                                          "flex items-center justify-between mt-4",
                                  },
                                  e.createElement(
                                      "p",
                                      {
                                          id: "author",
                                          className:
                                              "text-blue-700 text-lg font-semibold cursor-pointer dark:text-blue-400 hover:no-underline",
                                      },
                                      u
                                  )
                              ),
                              e.createElement(
                                  "div",
                                  {
                                      className:
                                          "text-md font-semibold text-left cursor-pointer",
                                  },
                                  x.length !== 0 &&
                                      x.map((d, v) =>
                                          e.createElement(
                                              "p",
                                              {
                                                  key: v,
                                                  className:
                                                      "text-blue-700  inline-block mx-2",
                                              },
                                              `#${d.name}`
                                          )
                                      )
                              )
                          ),
                    e.createElement("br", null),
                    e.createElement("br", null),
                    e.createElement("br", null),
                    e.createElement("br", null),
                    e.createElement("br", null)
                )
            )
        );
    },
    Na = ({ history: n, note: r }) => (
        t.exports.useEffect(() => {}, []),
        e.createElement(
            "div",
            {
                className:
                    "animate__animated animate__fadeIn inline-block mx-3 border-2 border-gray-50 max-w-sm p-6 m-auto my-5 bg-white rounded-md shadow-lg dark:bg-gray-800",
            },
            e.createElement(
                "p",
                {
                    className:
                        "text-lg dark:text-gray-300 text-justify cursor-pointer hover:text-blue-700",
                    onClick: () => {
                        if (r.id !== void 0) {
                            const { id: c } = r;
                            n.push(`/dashboard/notes/view/${c}`);
                        }
                    },
                },
                r !== void 0 && r.text
            ),
            e.createElement(
                "div",
                { className: "text-md font-semibold text-center" },
                (r !== void 0 && r.tags.length) !== 0 &&
                    r.tags.map((c, i) =>
                        e.createElement(
                            "p",
                            {
                                key: i,
                                className:
                                    "text-blue-700 text-lg inline-block mx-2",
                            },
                            `${c}`
                        )
                    )
            )
        )
    ),
    Ca = ({ showNotesSection: n, showNoteSectionChange: r }) =>
        e.createElement(
            "div",
            { className: "flex" },
            n === !0
                ? e.createElement(
                      e.Fragment,
                      null,
                      e.createElement(
                          "button",
                          {
                              onClick: r,
                              className: `\r
      border-b-2 border-indigo-500 w-24 text-indigo-600 py-4 px-1 block hover:border-indigo-500 hover:text-indigo-500 focus:outline-none hover:font-medium`,
                          },
                          "Notas"
                      ),
                      e.createElement(
                          "button",
                          {
                              onClick: r,
                              className: `\r
   border-b-2  w-24 text-gray-600 py-4 px-1 block  hover:border-indigo-500 hover:text-indigo-500 focus:outline-none hover:font-medium`,
                          },
                          "Frases"
                      )
                  )
                : e.createElement(
                      e.Fragment,
                      null,
                      e.createElement(
                          "button",
                          {
                              onClick: r,
                              className: `\r
    w-24 text-gray-600 py-4 px-1 block border-b-2 hover:border-indigo-500 hover:text-indigo-500 focus:outline-none hover:font-medium`,
                          },
                          "Notas"
                      ),
                      e.createElement(
                          "button",
                          {
                              onClick: r,
                              className: `\r
    border-b-2 border-indigo-500 w-24 text-gray-600 py-4 px-1 block  hover:border-indigo-500 hover:text-indigo-500 focus:outline-none hover:font-medium`,
                          },
                          "Frases"
                      )
                  )
        ),
    Sa = ({ history: n, phrase: r }) => (
        t.exports.useEffect(() => {}, []),
        e.createElement(
            "div",
            {
                className:
                    "animate__animated animate__fadeIn inline-block mx-3 border-2 border-gray-50 max-w-sm p-6 m-auto my-5 bg-white rounded-md shadow-lg dark:bg-gray-800",
            },
            e.createElement(
                "p",
                {
                    className:
                        "text-lg dark:text-gray-300  text-justify cursor-pointer hover:text-blue-700",
                    onClick: () => {
                        if (r.id !== void 0) {
                            const { id: c } = r;
                            n.push(`/dashboard/phrases/view/${c}`);
                        }
                    },
                },
                r !== void 0 && r.text
            ),
            e.createElement(
                "div",
                { className: "text-md font-semibold text-center" },
                (r !== void 0 && r.tags.length) !== 0 &&
                    r.tags.map((c, i) =>
                        e.createElement(
                            "p",
                            {
                                key: i,
                                className:
                                    "text-blue-700 text-lg inline-block mx-2",
                            },
                            `${c}`
                        )
                    )
            )
        )
    ),
    La = ({ history: n }) => {
        const r = q(),
            { loading: c } = P((o) => o.ui),
            { data: i } = se(me),
            [g, { data: u }] = ne(Qt),
            [w, { data: x }] = ne(ua);
        let b = i !== void 0 ? i.tags : [];
        const [f, m] = t.exports.useState([]),
            [p, C] = t.exports.useState([]),
            [h, N] = t.exports.useState([]),
            [k, s] = t.exports.useState(!0),
            [a, l] = t.exports.useState(!1),
            d = (o) => {
                m(o);
            },
            v = b.filter((o) => !f.includes(o)),
            L = (o) => {
                let S = [];
                return (
                    o.forEach((M) => {
                        b.forEach((D) => {
                            D.name === M && S.push(D.id);
                        });
                    }),
                    S
                );
            },
            _ = () => {
                r(j()),
                    f.length !== 0
                        ? k
                            ? (N([]), I(), g({ variables: { tags: p } }))
                            : (N([]), I(), w({ variables: { tags: p } }))
                        : (r(A()),
                          V(
                              "warning",
                              "Atenci\xF3n",
                              "Seleccione las Etiquetas"
                          ));
            },
            V = (o, S, M) => {
                O[o]({ message: S, description: M });
            },
            I = async () => {
                await ae.refetchQueries({ include: "active" });
            },
            E = () => {
                s(!k), m([]);
            };
        return (
            t.exports.useEffect(() => {}, [h]),
            t.exports.useEffect(() => {
                if (u !== void 0) {
                    const o = u.NoteByTag,
                        S = o.length !== 0 ? o : [];
                    S.length !== 0
                        ? S.forEach((M) => {
                              const { id: D, text: y, tags: F } = M;
                              let R = [];
                              F.length !== 0 &&
                                  F.forEach((Z) => {
                                      R.push(`#${Z.name}`);
                                  });
                              const J = { id: D, text: y, tags: R };
                              N((Z) => [...Z, J]);
                          })
                        : l(!0),
                        r(A());
                }
                r(A());
            }, [u]),
            t.exports.useEffect(() => {
                if (x !== void 0) {
                    const o = x.PhraseByTag,
                        S = o.length !== 0 ? o : [];
                    S.length !== 0
                        ? S.forEach((M) => {
                              const { id: D, text: y, tags: F } = M;
                              let R = [];
                              F.length !== 0 &&
                                  F.forEach((Z) => {
                                      R.push(`#${Z.name}`);
                                  });
                              const J = { id: D, text: y, tags: R };
                              N((Z) => [...Z, J]);
                          })
                        : l(!0),
                        r(A());
                }
                r(A());
            }, [x]),
            t.exports.useEffect(() => {
                const o = L(f);
                C(o), N([]), l(!1);
            }, [f]),
            t.exports.useEffect(() => {
                s(!0), I();
            }, []),
            t.exports.useEffect(() => {
                i !== void 0 && (b = i.tags);
            }, [i]),
            e.createElement(
                "div",
                {
                    className:
                        " overflow-hidden animate__animated animate__fadeIn container px-8 py-4 mx-auto bg-white rounded-lg dark:bg-gray-800",
                },
                e.createElement(
                    "div",
                    { className: "text-center content-center text-lg my-4 " },
                    e.createElement(
                        "nav",
                        { className: "flex " },
                        e.createElement(
                            "div",
                            { className: "mx-auto flex" },
                            e.createElement(Ca, {
                                showNotesSection: k,
                                showNoteSectionChange: E,
                            })
                        )
                    )
                ),
                e.createElement("br", null),
                e.createElement("hr", null),
                e.createElement(
                    "div",
                    { className: " flex content-center my-8" },
                    e.createElement(
                        "div",
                        { className: "flex mx-auto" },
                        e.createElement(
                            ge,
                            {
                                mode: "multiple",
                                placeholder: "Seleccione las etiquetas",
                                value: f,
                                onChange: d,
                                style: { width: "350px", borderRadius: "10px" },
                                dropdownStyle: { borderRadius: "10px" },
                            },
                            v.map((o) =>
                                e.createElement(
                                    ge.Option,
                                    { key: o.id, value: o.name },
                                    o.name
                                )
                            )
                        ),
                        e.createElement(
                            "button",
                            {
                                onClick: _,
                                className:
                                    "bg-gradient-to-r from-indigo-600 to-indigo-400 flex w-16 mx-auto h-8 px-1 py-1 text-center hover:bg-indigo-400  border border-gray-300 font-medium tracking-wide capitalize transition-colors duration-200 transform bg-transparent focus:outline-none text-white",
                                type: "button",
                            },
                            e.createElement(
                                "svg",
                                {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6 content-center mx-auto",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                },
                                e.createElement("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                })
                            )
                        )
                    )
                ),
                e.createElement("br", null),
                c
                    ? e.createElement(K, { className: "my-5" })
                    : e.createElement(
                          "div",
                          { className: "card-columns" },
                          h.length !== 0 && k === !0
                              ? h.map((o) =>
                                    e.createElement(Na, {
                                        key: o.id,
                                        note: o,
                                        history: n,
                                    })
                                )
                              : h.map((o) =>
                                    e.createElement(Sa, {
                                        key: o.id,
                                        phrase: o,
                                        history: n,
                                    })
                                ),
                          a === !0
                              ? e.createElement(
                                    "div",
                                    null,
                                    e.createElement(
                                        "p",
                                        { className: "text-center text-xl" },
                                        "No se encontraron resultados"
                                    )
                                )
                              : h.length !== 0 &&
                                    e.createElement(
                                        "div",
                                        { className: "flex content-center " },
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "flex mx-auto cursor-default",
                                            },
                                            e.createElement(
                                                "p",
                                                {
                                                    className:
                                                        " text-xl my-7 mx-1 text-center",
                                                },
                                                "Se encontraron"
                                            ),
                                            e.createElement(
                                                "p",
                                                {
                                                    className:
                                                        "text-blue-700 text-xl my-7 mx-1 text-center",
                                                },
                                                `${h.length}`
                                            ),
                                            e.createElement(
                                                "p",
                                                {
                                                    className:
                                                        "text-xl my-7 mx-1 text-center",
                                                },
                                                "resultados"
                                            )
                                        )
                                    )
                      ),
                e.createElement("br", null),
                e.createElement("br", null)
            )
        );
    },
    Ia = () =>
        e.createElement(
            Pe,
            null,
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/notes",
                component: ta,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/notes/form",
                component: Re,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/notes/form/:id",
                component: Re,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/notes/view/:id",
                component: na,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/phrases",
                component: va,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/phrases/form",
                component: je,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/phrases/form/:id",
                component: je,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/phrases/view/:id",
                component: ya,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/search",
                component: La,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard",
                component: ka,
            }),
            e.createElement(Q, {
                exact: !0,
                path: "/dashboard/tags",
                component: da,
            }),
            e.createElement(xe, { to: "/dashboard" })
        ),
    Ta = ({ history: n }) =>
        e.createElement(
            e.Fragment,
            null,
            e.createElement(
                "div",
                { className: "flex h-screen bg-white font-roboto " },
                e.createElement(It, null),
                e.createElement(
                    "div",
                    { className: "flex-1 flex flex-col overflow-hidden " },
                    e.createElement(Gt, { history: n }),
                    e.createElement(
                        "main",
                        {
                            className:
                                "flex-1 overflow-x-hidden overflow-y-auto ",
                        },
                        e.createElement(
                            "div",
                            { className: "container mx-auto px-6 py-8" },
                            e.createElement(Ia, null)
                        )
                    )
                )
            )
        ),
    Fa = (n = {}) => {
        const [r, c] = t.exports.useState(n);
        return [
            r,
            ({ target: u }) => {
                c(G(W({}, r), { [u.name]: u.value }));
            },
            (u = n) => {
                c(u);
            },
        ];
    };
const Aa = () =>
        e.createElement(
            e.Fragment,
            null,
            e.createElement(
                "div",
                { class: "spinner" },
                e.createElement("div", { class: "bounce1" }),
                e.createElement("div", { class: "bounce2" }),
                e.createElement("div", { class: "bounce3" })
            )
        ),
    Ma = Dt,
    $a = ({ history: n }) => {
        const [r] = B(Ma),
            c = q(),
            { loading: i } = P((p) => p.ui),
            [g, u] = Fa({ username: "", password: "" }),
            { username: w, password: x } = g,
            b = (p, C, h) => {
                O[p]({ message: C, description: h });
            },
            f = (p) => {
                document.getElementById("image");
            },
            m = async (p) => {
                if ((p.preventDefault(), w !== "" && x !== "")) {
                    c(j()), f();
                    try {
                        await r({
                            variables: { username: w, password: x },
                        }).then((C) => {
                            if (C.data.login !== void 0) {
                                const { access_token: h, user: N } =
                                        C.data.login,
                                    { name: k, email: s, images: a } = N;
                                a !== void 0 && a.length !== 0
                                    ? c(Se(h, k, s, a[0].name))
                                    : c(Se(h, k, s, "")),
                                    localStorage.setItem("_token", h),
                                    f(!1);
                            }
                            c(A()), n.push("/dashboard");
                        });
                    } catch (C) {
                        C.message === "invalid_grant" &&
                            b(
                                "error",
                                "Error!",
                                "No se reconoce usuario o contrase\xF1a!"
                            ),
                            c(A()),
                            f();
                    }
                } else b("warning", "Atenci\xF3n!", "Llene los campos!");
            };
        return e.createElement(
            "div",
            null,
            e.createElement(
                "div",
                {
                    className:
                        "bg-gradient-to-r from-indigo-700 to-indigo-400 focus:border-2 border-gray-50 w-full max-w-sm p-6 m-auto my-20  rounded-md shadow-lg dark:bg-gray-800",
                },
                e.createElement("img", {
                    id: "image",
                    src: `${fe}assets/images/logo.png`,
                    className: "w-40 h-40 mx-auto content-center my-auto",
                }),
                e.createElement(
                    "form",
                    { className: "mt-6" },
                    i === !1
                        ? e.createElement(
                              "div",
                              null,
                              e.createElement(
                                  "div",
                                  null,
                                  e.createElement(
                                      "label",
                                      {
                                          htmlFor: "username",
                                          className:
                                              "block text-sm text-white dark:text-gray-200",
                                      },
                                      "Usuario"
                                  ),
                                  e.createElement("input", {
                                      type: "text",
                                      value: w,
                                      name: "username",
                                      onChange: u,
                                      className:
                                          "block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-blue-500 focus:outline-none focus:ring",
                                  })
                              ),
                              e.createElement(
                                  "div",
                                  { className: "mt-4" },
                                  e.createElement(
                                      "div",
                                      {
                                          className:
                                              "flex items-center justify-between",
                                      },
                                      e.createElement(
                                          "label",
                                          {
                                              htmlFor: "password",
                                              className:
                                                  "block text-sm text-white dark:text-gray-200",
                                          },
                                          "Contrase\xF1a"
                                      )
                                  ),
                                  e.createElement("input", {
                                      type: "password",
                                      value: x,
                                      name: "password",
                                      onChange: u,
                                      className:
                                          " block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-blue-500 focus:outline-none focus:ring",
                                  })
                              ),
                              e.createElement("br", null),
                              e.createElement(
                                  "div",
                                  { className: "mt-6" },
                                  e.createElement(
                                      "button",
                                      {
                                          onClick: m,
                                          className:
                                              "bg-gradient-to-r from-blue-700 to-blue-400 w-full px-4 py-2 tracking-wide text-white text-lg font-bold transition-colors duration-200 transform rounded-full hover:bg-indigo-600 focus:outline-none focus:bg-blue-600",
                                      },
                                      "Login"
                                  )
                              ),
                              e.createElement("br", null),
                              e.createElement(
                                  "div",
                                  {
                                      className:
                                          "flex items-center justify-between mt-4",
                                  },
                                  e.createElement("span", {
                                      className:
                                          "w-1/5 border-b dark:border-gray-600 lg:w-1/5",
                                  }),
                                  e.createElement(
                                      "p",
                                      {
                                          href: "#",
                                          className:
                                              "font-bold cursor-pointer text-xs hover:text-gray-300 text-center text-white uppercase dark:text-gray-400",
                                      },
                                      `Live Inspired ${new Date().getFullYear()}`
                                  ),
                                  e.createElement("span", {
                                      className:
                                          "w-1/5 border-b dark:border-gray-400 lg:w-1/5",
                                  })
                              )
                          )
                        : e.createElement(
                              e.Fragment,
                              null,
                              e.createElement(Aa, null),
                              e.createElement("br", null)
                          )
                )
            )
        );
    },
    Ba = () => {
        const n = q(),
            [r, c] = t.exports.useState(""),
            { token: i } = P((g) => g.auth);
        return (
            t.exports.useEffect(async () => {
                c(i !== void 0);
            }, [i]),
            t.exports.useEffect(() => {}, [r]),
            t.exports.useEffect(
                () => () => {
                    c("");
                },
                []
            ),
            t.exports.useEffect(() => {
                if (i !== void 0)
                    try {
                        ae.query({ query: Le }).then((g) => {
                            console.log(g.data.me);
                            const u = i,
                                { name: w, email: x, images: b } = g.data.me;
                            n(Se(u, w, x, b[0].name)), c(!0);
                        });
                    } catch (g) {
                        console.log(g.message);
                    }
                else c(!1);
            }, []),
            e.createElement(
                "div",
                null,
                e.createElement(
                    pt,
                    null,
                    r === ""
                        ? e.createElement(
                              "div",
                              { className: "my-64" },
                              e.createElement(K, null)
                          )
                        : e.createElement(
                              "div",
                              { className: "my-auto " },
                              e.createElement(
                                  Pe,
                                  null,
                                  (r === !1 || r === !0) &&
                                      e.createElement(Q, {
                                          exact: !0,
                                          path: "/auth/login",
                                          component: $a,
                                      }),
                                  r === !0
                                      ? e.createElement(Q, {
                                            path: "/dashboard",
                                            component: Ta,
                                        })
                                      : e.createElement(xe, {
                                            to: "/auth/login",
                                        })
                              )
                          )
                )
            )
        );
    },
    _a = () =>
        e.createElement(
            xt,
            { store: Lt },
            e.createElement(ft, { locale: Et }, e.createElement(Ba, null))
        );
vt.render(
    e.createElement(wt, { client: ae }, e.createElement(_a, null), ","),
    document.getElementById("root")
);
