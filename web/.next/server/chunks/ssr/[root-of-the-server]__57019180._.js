module.exports = [
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/favicon.ico.mjs { IMAGE => \"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/favicon.ico.mjs { IMAGE => \"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/data/funds.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"ndf\",\"name\":\"National Defence Fund\",\"slug\":\"national-defence-fund\",\"category\":\"Veterans\",\"shortDescription\":\"Government-administered fund under PMO supporting armed forces families with scholarships and welfare.\",\"logoPath\":\"/images/ndf.png\",\"officialUrl\":\"https://ndf.gov.in\",\"donationUrl\":\"https://ndf.gov.in/en/online-donation\",\"status\":\"active\",\"lastUpdated\":\"2025-10-05\",\"tags\":[\"PMSS\",\"scholarships\",\"welfare\",\"armed forces\"],\"featured\":true},{\"id\":\"affdf\",\"name\":\"Armed Forces Flag Day Fund (AFFDF)\",\"slug\":\"armed-forces-flag-day-fund\",\"category\":\"War Widows\",\"shortDescription\":\"Primary welfare fund managed via KSB for veterans, veer naris, and dependents across India.\",\"logoPath\":\"/images/affdf.png\",\"officialUrl\":\"https://affdf.gov.in\",\"donationUrl\":\"https://affdf.gov.in\",\"status\":\"active\",\"lastUpdated\":\"2025-10-05\",\"tags\":[\"ksb\",\"veterans\",\"medical\",\"education\"],\"featured\":true},{\"id\":\"bkv\",\"name\":\"Bharat Ke Veer\",\"slug\":\"bharat-ke-veer\",\"category\":\"War Widows\",\"shortDescription\":\"Trust under MHA enabling direct support to families of CAPF and Assam Rifles martyrs.\",\"logoPath\":\"/images/bharat-ke-veer.png\",\"officialUrl\":\"https://bharatkeveer.gov.in\",\"donationUrl\":\"https://bharatkeveer.gov.in\",\"status\":\"active\",\"lastUpdated\":\"2025-10-05\",\"tags\":[\"capf\",\"martyrs\",\"direct support\"],\"featured\":true}]"));}),
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/data/impact.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"yearToDate\":{\"amountDisbursed\":125400000,\"familiesSupported\":5231},\"tiles\":[{\"label\":\"War widows supported\",\"value\":1345},{\"label\":\"Scholarships awarded\",\"value\":2410},{\"label\":\"Veterans rehabilitated\",\"value\":1476}]}"));}),
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/data/news.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"title\":\"Armed Forces Flag Day observed nationwide\",\"source\":\"PIB\",\"date\":\"2024-12-07\",\"url\":\"https://pib.gov.in/\",\"image\":null},{\"title\":\"National Defence Fund publishes latest receipts and expenditure\",\"source\":\"PMO\",\"date\":\"2025-03-31\",\"url\":\"https://pmindia.gov.in/\",\"image\":null},{\"title\":\"Bharat Ke Veer reports disbursements crossing ₹76.97 crore\",\"source\":\"@BharatKeVeer\",\"date\":\"2024-10-15\",\"url\":\"https://bharatkeveer.gov.in\",\"image\":null}]"));}),
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$funds$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/data/funds.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$impact$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/data/impact.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$news$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/data/news.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
function Home() {
    const featured = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$funds$2e$json__$28$json$29$__["default"].filter((f)=>f.featured).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-16 md:py-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-extrabold tracking-tight",
                            children: "Honoring Service, Supporting Heroes"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-2xl text-gray-700",
                            children: "A research-based guide to authentic, government-backed funds for India’s armed forces. Learn, verify, and donate via official portals."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    className: "rounded bg-black px-4 py-2 text-white",
                                    href: "/funds",
                                    children: "Explore Funds"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    className: "rounded border px-4 py-2",
                                    href: "/about",
                                    children: "About the Mission"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-y bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold",
                                    children: "Impact Meter"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-gray-700",
                                    children: [
                                        "₹",
                                        Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$impact$2e$json__$28$json$29$__["default"].yearToDate.amountDisbursed / 100000) / 10,
                                        " crore disbursed · ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$impact$2e$json__$28$json$29$__["default"].yearToDate.familiesSupported,
                                        " families supported this year"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$impact$2e$json__$28$json$29$__["default"].tiles.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded border p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: t.value.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-600",
                                        children: t.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, t.label, true, {
                                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold",
                            children: "Pick Your Cause"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid grid-cols-1 md:grid-cols-4 gap-4",
                            children: [
                                "Education",
                                "Medical Aid",
                                "War Widows",
                                "Veterans"
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/funds?category=${encodeURIComponent(c)}`,
                                    className: "rounded border p-6 hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold",
                                            children: c
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Explore relevant funds"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c, true, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold",
                            children: "Featured Funds"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: featured.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded border bg-white p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold",
                                            children: f.name
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-gray-600 text-sm",
                                            children: f.shortDescription
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "rounded bg-black px-3 py-2 text-white text-sm",
                                                    href: `/funds/${f.slug}`,
                                                    children: "Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "rounded border px-3 py-2 text-sm",
                                                    href: f.officialUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Official"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, f.id, true, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold",
                            children: "News & Highlights"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$data$2f$news$2e$json__$28$json$29$__["default"].slice(0, 3).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: n.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "rounded border p-5 hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500",
                                            children: [
                                                n.source,
                                                " · ",
                                                n.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 font-semibold",
                                            children: n.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, n.title + n.date, true, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            suppressHydrationWarning: true,
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Bhartiya Sena Seva"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:underline",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/funds",
                                    className: "hover:underline",
                                    children: "Funds"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "hover:underline",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2f$BSS__0$2e$4$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "We never accept donations. We link to official portals only."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Desktop/Projects/BSS 0.4/web/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__57019180._.js.map