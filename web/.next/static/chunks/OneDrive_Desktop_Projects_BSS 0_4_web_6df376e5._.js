(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/data/funds.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"ndf\",\"name\":\"National Defence Fund\",\"slug\":\"national-defence-fund\",\"category\":\"Veterans\",\"shortDescription\":\"Government-administered fund under PMO supporting armed forces families with scholarships and welfare.\",\"logoPath\":\"/images/ndf.png\",\"officialUrl\":\"https://ndf.gov.in\",\"donationUrl\":\"https://ndf.gov.in/en/online-donation\",\"status\":\"active\",\"lastUpdated\":\"2025-10-05\",\"tags\":[\"PMSS\",\"scholarships\",\"welfare\",\"armed forces\"],\"featured\":true},{\"id\":\"affdf\",\"name\":\"Armed Forces Flag Day Fund (AFFDF)\",\"slug\":\"armed-forces-flag-day-fund\",\"category\":\"War Widows\",\"shortDescription\":\"Primary welfare fund managed via KSB for veterans, veer naris, and dependents across India.\",\"logoPath\":\"/images/affdf.png\",\"officialUrl\":\"https://affdf.gov.in\",\"donationUrl\":\"https://affdf.gov.in\",\"status\":\"active\",\"lastUpdated\":\"2025-10-05\",\"tags\":[\"ksb\",\"veterans\",\"medical\",\"education\"],\"featured\":true},{\"id\":\"bkv\",\"name\":\"Bharat Ke Veer\",\"slug\":\"bharat-ke-veer\",\"category\":\"War Widows\",\"shortDescription\":\"Trust under MHA enabling direct support to families of CAPF and Assam Rifles martyrs.\",\"logoPath\":\"/images/bharat-ke-veer.png\",\"officialUrl\":\"https://bharatkeveer.gov.in\",\"donationUrl\":\"https://bharatkeveer.gov.in\",\"status\":\"active\",\"lastUpdated\":\"2025-10-05\",\"tags\":[\"capf\",\"martyrs\",\"direct support\"],\"featured\":true}]"));}),
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$funds$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/data/funds.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/node_modules/next/image.js [app-client] (ecmascript)");
// minimal React import for client component usage
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function normalize(str) {
    return str.toLowerCase();
}
function categories() {
    return [
        "All",
        "Education",
        "Medical Aid",
        "War Widows",
        "Veterans"
    ];
}
function FundCard(param) {
    let { fund } = param;
    var _fund_tags;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border p-4 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    fund.logoPath ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: fund.logoPath,
                        alt: "",
                        width: 40,
                        height: 40,
                        className: "h-10 w-10 object-contain"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: fund.name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: fund.shortDescription
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs rounded bg-gray-100 px-2 py-1 text-gray-700",
                        children: fund.category
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    (_fund_tags = fund.tags) === null || _fund_tags === void 0 ? void 0 : _fund_tags.slice(0, 3).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs rounded bg-gray-50 px-2 py-1 text-gray-500",
                            children: [
                                "#",
                                t
                            ]
                        }, t, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "rounded bg-black px-3 py-2 text-white text-sm",
                        href: "/funds/".concat(fund.slug),
                        children: "View Fund Details"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    fund.officialUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "rounded border px-3 py-2 text-sm",
                        href: fund.officialUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Official Site"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = FundCard;
function FundsDirectoryClient(param) {
    let { initial } = param;
    _s();
    const params = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
    var _params_get;
    const initCat = (_params_get = params === null || params === void 0 ? void 0 : params.get("category")) !== null && _params_get !== void 0 ? _params_get : "All";
    const [q, setQ] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [cat, setCat] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](initCat);
    const filtered = initial.filter((f)=>{
        const matchCat = cat === "All" || f.category === cat;
        const query = normalize(q);
        const matchQ = !query || normalize(f.name).includes(query) || normalize(f.shortDescription).includes(query) || (f.tags || []).some((t)=>normalize(t).includes(query));
        return matchCat && matchQ;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: q,
                        onChange: (e)=>setQ(e.target.value),
                        placeholder: "Search funds, tags...",
                        className: "w-full md:w-1/2 rounded border px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: cat,
                        onChange: (e)=>setCat(e.target.value),
                        className: "w-full md:w-56 rounded border px-3 py-2",
                        children: categories().map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: c,
                                children: c
                            }, c, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
                children: filtered.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FundCard, {
                        fund: f
                    }, f.id, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(FundsDirectoryClient, "zQI12KbomASzUPVPtfMk+h0n6sw=");
_c1 = FundsDirectoryClient;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto max-w-6xl px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold",
                children: "Fund Directory"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-gray-600",
                children: "Search and filter verified funds that support India’s armed forces and their families."
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FundsDirectory, {
                    initial: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$funds$2e$json__$28$json$29$__["default"]
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c2 = Page;
function FundsDirectory(param) {
    let { initial } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FundsDirectoryClient, {
        initial: initial
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/funds/page.tsx",
        lineNumber: 115,
        columnNumber: 10
    }, this);
}
_c3 = FundsDirectory;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FundCard");
__turbopack_context__.k.register(_c1, "FundsDirectoryClient");
__turbopack_context__.k.register(_c2, "Page");
__turbopack_context__.k.register(_c3, "FundsDirectory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Projects_BSS%200_4_web_6df376e5._.js.map