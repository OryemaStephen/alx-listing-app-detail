(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s({
    "connect": (()=>connect),
    "setHooks": (()=>setHooks),
    "subscribeToUpdate": (()=>subscribeToUpdate)
});
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}}),
"[project]/components/common/Category.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [client] (ecmascript)");
;
;
const Category = ({ label, active = false, onClick, icon })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `flex flex-col items-center justify-center gap-1 p-1 rounded-lg text-sm font-medium transition-colors ${active ? 'text-[#616161]' : 'text-[#616161] hover:bg-gray-100'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: icon,
                    alt: label,
                    width: 34,
                    height: 34
                }, void 0, false, {
                    fileName: "[project]/components/common/Category.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/Category.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `relative w-full ${active ? 'font-semibold' : 'font-normal'}`,
                children: [
                    label,
                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#34967C]"
                    }, void 0, false, {
                        fileName: "[project]/components/common/Category.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/Category.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/Category.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = Category;
const __TURBOPACK__default__export__ = Category;
var _c;
__turbopack_context__.k.register(_c, "Category");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/common/Pill.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const Pill = ({ label, active = false, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `px-8 py-3 rounded-full text-sm font-medium transition-colors ${active ? 'bg-[#F0FFFB] border border-[#34967C] text-[#34967C]' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/components/common/Pill.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = Pill;
const __TURBOPACK__default__export__ = Pill;
var _c;
__turbopack_context__.k.register(_c, "Pill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/constants/index.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_URL": (()=>API_URL),
    "APP_NAME": (()=>APP_NAME),
    "CATEGORIES": (()=>CATEGORIES),
    "DEFAULT_CURRENCY": (()=>DEFAULT_CURRENCY),
    "HEROSECTION_BG_IMAGE": (()=>HEROSECTION_BG_IMAGE),
    "HOUSE": (()=>HOUSE),
    "PROPERTYLISTINGSAMPLE": (()=>PROPERTYLISTINGSAMPLE),
    "UI_TEXT": (()=>UI_TEXT)
});
const API_URL = 'https://api.example.com/listings';
const APP_NAME = 'ALX Listing App';
const DEFAULT_CURRENCY = 'USD';
const UI_TEXT = {
    BOOK_NOW: 'Book Now',
    DETAILS: 'View Details',
    LOADING: 'Loading...'
};
const HEROSECTION_BG_IMAGE = '/assets/images/homepage_background1.png';
const HOUSE = '/assets/images/house.png';
const PROPERTYLISTINGSAMPLE = [
    {
        name: "Villa Ocean Breeze",
        address: {
            state: "Seminyak",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.89,
        category: [
            "Luxury Villa",
            "Pool",
            "Free Parking"
        ],
        price: 3200,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 2.png",
            "/assets/images/image 6.png",
            "/assets/images/image 7.png",
            "/assets/images/image 12.png"
        ],
        discount: "",
        description: "Experience luxury at Villa Ocean Breeze, a stunning beachfront property in Seminyak. Enjoy a private pool, spacious living areas, and breathtaking ocean views, perfect for a relaxing tropical getaway.",
        reviews: [
            {
                name: "Alice Johnson",
                avatar: "/assets/avatars/alice.jpg",
                rating: 5,
                comment: "An incredible stay! The villa is beautiful, and the staff were so attentive."
            },
            {
                name: "Mark Lee",
                avatar: "/assets/avatars/mark.jpg",
                rating: 4.8,
                comment: "Loved the pool and location. Highly recommend for a luxurious escape."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Mountain Escape Chalet",
        address: {
            state: "Aspen",
            city: "Colorado",
            country: "USA"
        },
        rating: 4.70,
        category: [
            "Mountain View",
            "Fireplace",
            "Self Checkin"
        ],
        price: 1800,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: [
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 11.png",
            "/assets/images/image 17.png"
        ],
        discount: "30",
        description: "Nestled in the heart of Aspen, this cozy chalet offers stunning mountain views and a warm fireplace, ideal for a winter retreat or summer adventure.",
        reviews: [
            {
                name: "Sarah Brown",
                avatar: "/assets/avatars/sarah.jpg",
                rating: 4.5,
                comment: "The chalet was cozy and perfect for our family ski trip."
            },
            {
                name: "David Kim",
                avatar: "/assets/avatars/david.jpg",
                rating: 4.9,
                comment: "Great location and amenities. The fireplace was a highlight!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Cozy Desert Retreat",
        address: {
            state: "Palm Springs",
            city: "California",
            country: "USA"
        },
        rating: 4.92,
        category: [
            "Desert View",
            "Pet Friendly",
            "Self Checkin"
        ],
        price: 1500,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: [
            "/assets/images/image 4.png",
            "/assets/images/image 9.png",
            "/assets/images/image 15.png"
        ],
        discount: "",
        description: "A charming retreat in Palm Springs, surrounded by desert landscapes. Perfect for couples or small families, with pet-friendly accommodations and modern amenities.",
        reviews: [
            {
                name: "Emma Davis",
                avatar: "/assets/avatars/emma.jpg",
                rating: 5,
                comment: "Loved the desert vibes and pet-friendly policy!"
            },
            {
                name: "Liam Wilson",
                avatar: "/assets/avatars/liam.jpg",
                rating: 4.8,
                comment: "Very clean and comfortable. Great for a weekend getaway."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "City Lights Penthouse",
        address: {
            state: "New York",
            city: "New York",
            country: "USA"
        },
        rating: 4.85,
        category: [
            "City View",
            "Free WiFi",
            "24h Checkin"
        ],
        price: 4500,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: [
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 15.png",
            "/assets/images/image 18.png"
        ],
        discount: "15",
        description: "Live the high life in this luxurious penthouse in the heart of NYC, offering panoramic city views and modern amenities for an unforgettable urban experience.",
        reviews: [
            {
                name: "Olivia Martinez",
                avatar: "/assets/avatars/olivia.jpg",
                rating: 4.9,
                comment: "The view was spectacular! Perfect for a city getaway."
            },
            {
                name: "James Taylor",
                avatar: "/assets/avatars/james.jpg",
                rating: 4.7,
                comment: "Very stylish and convenient location. Loved it!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Riverside Cabin",
        address: {
            state: "Queenstown",
            city: "Otago",
            country: "New Zealand"
        },
        rating: 4.77,
        category: [
            "Riverside",
            "Private Dock",
            "Free Kayaks"
        ],
        price: 2800,
        offers: {
            bed: "3",
            shower: "2",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 6.png",
            "/assets/images/image 2.png",
            "/assets/images/image 12.png"
        ],
        discount: "20",
        description: "A serene riverside cabin in Queenstown, offering a private dock and free kayaks for exploring the stunning waterways of Otago.",
        reviews: [
            {
                name: "Sophie Clark",
                avatar: "/assets/avatars/sophie.jpg",
                rating: 4.8,
                comment: "Kayaking was amazing! The cabin is cozy and peaceful."
            },
            {
                name: "Ethan Walker",
                avatar: "/assets/avatars/ethan.jpg",
                rating: 4.7,
                comment: "Perfect for nature lovers. Highly recommend!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Modern Beachfront Villa",
        address: {
            state: "Sidemen",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.95,
        category: [
            "Beachfront",
            "Private Pool",
            "Chef Service"
        ],
        price: 5000,
        offers: {
            bed: "5",
            shower: "4",
            occupants: "8-10"
        },
        image: [
            "/assets/images/image 7.png",
            "/assets/images/image 2.png",
            "/assets/images/image 13.png",
            "/assets/images/image 6.png"
        ],
        discount: "",
        description: "Indulge in luxury at this modern beachfront villa in Sidemen, complete with a private pool and optional chef service for an exquisite dining experience.",
        reviews: [
            {
                name: "Isabella Nguyen",
                avatar: "/assets/avatars/isabella.jpg",
                rating: 5,
                comment: "The chef service was a game-changer! Stunning villa."
            },
            {
                name: "Lucas Brown",
                avatar: "/assets/avatars/lucas.jpg",
                rating: 4.9,
                comment: "Perfect for a large group. The beach access was fantastic."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Lakeside Chalet",
        address: {
            state: "Banff",
            city: "Alberta",
            country: "Canada"
        },
        rating: 4.65,
        category: [
            "Lakeside",
            "Mountain View",
            "Hiking Trails"
        ],
        price: 2300,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: [
            "/assets/images/image 8.png",
            "/assets/images/image 3.png",
            "/assets/images/image 11.png",
            "/assets/images/image 17.png"
        ],
        discount: "10",
        description: "A cozy lakeside chalet in Banff, surrounded by mountains and hiking trails, perfect for outdoor enthusiasts seeking a tranquil retreat.",
        reviews: [
            {
                name: "Mia Thompson",
                avatar: "/assets/avatars/mia.jpg",
                rating: 4.6,
                comment: "The lake views were breathtaking. Great hiking nearby."
            },
            {
                name: "Noah Lee",
                avatar: "/assets/avatars/noah.jpg",
                rating: 4.7,
                comment: "Very comfortable and great location for exploring Banff."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Tropical Garden Villa",
        address: {
            state: "Koh Samui",
            city: "Surat Thani",
            country: "Thailand"
        },
        rating: 4.80,
        category: [
            "Garden",
            "Free Parking",
            "Self Checkin"
        ],
        price: 2750,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "5-6"
        },
        image: [
            "/assets/images/image 9.png",
            "/assets/images/image 4.png",
            "/assets/images/image 13.png"
        ],
        discount: "25",
        description: "Relax in this tropical garden villa in Koh Samui, featuring lush surroundings, free parking, and easy self-check-in for a hassle-free stay.",
        reviews: [
            {
                name: "Ava Garcia",
                avatar: "/assets/avatars/ava.jpg",
                rating: 4.9,
                comment: "The garden was beautiful, and the villa was very spacious."
            },
            {
                name: "William Chen",
                avatar: "/assets/avatars/william.jpg",
                rating: 4.7,
                comment: "Loved the tropical vibe and easy check-in process."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Urban Loft",
        address: {
            state: "Berlin",
            city: "Berlin",
            country: "Germany"
        },
        rating: 4.60,
        category: [
            "City Center",
            "Free WiFi",
            "24h Checkin"
        ],
        price: 2000,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: [
            "/assets/images/image 10.png",
            "/assets/images/image 5.png",
            "/assets/images/image 15.png",
            "/assets/images/image 18.png"
        ],
        discount: "",
        description: "A stylish urban loft in the heart of Berlin, offering free WiFi and 24-hour check-in, perfect for city explorers.",
        reviews: [
            {
                name: "Charlotte Kim",
                avatar: "/assets/avatars/charlotte.jpg",
                rating: 4.5,
                comment: "Great location and modern design. Perfect for a city trip."
            },
            {
                name: "Henry Patel",
                avatar: "/assets/avatars/henry.jpg",
                rating: 4.7,
                comment: "Very convenient and stylish. Loved the WiFi speed!"
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Secluded Forest Cabin",
        address: {
            state: "Whistler",
            city: "British Columbia",
            country: "Canada"
        },
        rating: 4.72,
        category: [
            "Secluded",
            "Hot Tub",
            "Self Checkin"
        ],
        price: 2600,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: [
            "/assets/images/image 11.png",
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 17.png"
        ],
        discount: "40",
        description: "Escape to this secluded forest cabin in Whistler, complete with a hot tub and self-check-in for a peaceful retreat in nature.",
        reviews: [
            {
                name: "Amelia Wright",
                avatar: "/assets/avatars/amelia.jpg",
                rating: 4.8,
                comment: "The hot tub was amazing! Perfect for a quiet getaway."
            },
            {
                name: "Jack Liu",
                avatar: "/assets/avatars/jack.jpg",
                rating: 4.6,
                comment: "Very secluded and relaxing. Great for families."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Cliffside Villa",
        address: {
            state: "Amalfi",
            city: "Salerno",
            country: "Italy"
        },
        rating: 4.93,
        category: [
            "Cliffside",
            "Infinity Pool",
            "Sea View"
        ],
        price: 6000,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 12.png",
            "/assets/images/image 2.png",
            "/assets/images/image 6.png",
            "/assets/images/image 7.png"
        ],
        discount: "50",
        description: "Perched on the cliffs of Amalfi, this villa offers an infinity pool and stunning sea views, ideal for a luxurious Italian escape.",
        reviews: [
            {
                name: "Sophia Rossi",
                avatar: "/assets/avatars/sophia.jpg",
                rating: 5,
                comment: "The infinity pool and views were unforgettable!"
            },
            {
                name: "Mateo Gonzalez",
                avatar: "/assets/avatars/mateo.jpg",
                rating: 4.9,
                comment: "Luxury at its finest. Highly recommend this villa."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Coastal Escape Villa",
        address: {
            state: "Noosa",
            city: "Queensland",
            country: "Australia"
        },
        rating: 4.83,
        category: [
            "Beachfront",
            "Pet Friendly",
            "Free Parking"
        ],
        price: 3400,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: [
            "/assets/images/image 13.png",
            "/assets/images/image 7.png",
            "/assets/images/image 9.png",
            "/assets/images/image 4.png"
        ],
        discount: "",
        description: "A pet-friendly beachfront villa in Noosa, offering direct access to the coast and ample parking for a perfect Australian holiday.",
        reviews: [
            {
                name: "Ella Harris",
                avatar: "/assets/avatars/ella.jpg",
                rating: 4.8,
                comment: "Great for our dog and family. Beach access was perfect."
            },
            {
                name: "Oliver King",
                avatar: "/assets/avatars/oliver.jpg",
                rating: 4.9,
                comment: "Spacious and clean. Loved the coastal location."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Downtown Apartment",
        address: {
            state: "Tokyo",
            city: "Tokyo",
            country: "Japan"
        },
        rating: 4.81,
        category: [
            "City Center",
            "Free WiFi",
            "Public Transport"
        ],
        price: 2200,
        offers: {
            bed: "1",
            shower: "1",
            occupants: "2"
        },
        image: [
            "/assets/images/image 15.png",
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 18.png"
        ],
        discount: "",
        description: "A modern downtown apartment in Tokyo, steps away from public transport and offering fast WiFi for city adventurers.",
        reviews: [
            {
                name: "Hana Sato",
                avatar: "/assets/avatars/hana.jpg",
                rating: 4.8,
                comment: "Perfect location for exploring Tokyo. Very clean."
            },
            {
                name: "Ryan Tanaka",
                avatar: "/assets/avatars/ryan.jpg",
                rating: 4.7,
                comment: "Compact but stylish. Great for a short city stay."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Luxury Safari Lodge",
        address: {
            state: "Serengeti",
            city: "Mara",
            country: "Tanzania"
        },
        rating: 4.97,
        category: [
            "Safari",
            "Guided Tours",
            "Free Breakfast"
        ],
        price: 4500,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 16.png",
            "/assets/images/image 4.png",
            "/assets/images/image 9.png"
        ],
        discount: "20",
        description: "Immerse yourself in the Serengeti with this luxury safari lodge, offering guided tours and complimentary breakfast for an unforgettable adventure.",
        reviews: [
            {
                name: "Zoe Mweupe",
                avatar: "/assets/avatars/zoe.jpg",
                rating: 5,
                comment: "The safari tours were incredible! Amazing lodge."
            },
            {
                name: "Ahmed Khan",
                avatar: "/assets/avatars/ahmed.jpg",
                rating: 4.9,
                comment: "Luxurious and great staff. Breakfast was top-notch."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Countryside Cottage",
        address: {
            state: "Cotswolds",
            city: "Gloucestershire",
            country: "UK"
        },
        rating: 4.58,
        category: [
            "Countryside",
            "Fireplace",
            "Self Checkin"
        ],
        price: 1800,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-4"
        },
        image: [
            "/assets/images/image 17.png",
            "/assets/images/image 3.png",
            "/assets/images/image 8.png",
            "/assets/images/image 11.png"
        ],
        discount: "25",
        description: "A quaint countryside cottage in the Cotswolds, featuring a cozy fireplace and self-check-in for a charming rural escape.",
        reviews: [
            {
                name: "Lily Evans",
                avatar: "/assets/avatars/lily.jpg",
                rating: 4.6,
                comment: "So charming and peaceful. Loved the fireplace."
            },
            {
                name: "George Baker",
                avatar: "/assets/avatars/george.jpg",
                rating: 4.5,
                comment: "Perfect for a quiet weekend in the countryside."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    },
    {
        name: "Riverfront Mansion",
        address: {
            state: "Paris",
            city: "Île-de-France",
            country: "France"
        },
        rating: 4.86,
        category: [
            "Riverfront",
            "Private Garden",
            "Self Checkin"
        ],
        price: 5000,
        offers: {
            bed: "4",
            shower: "3",
            occupants: "6-8"
        },
        image: [
            "/assets/images/image 18.png",
            "/assets/images/image 5.png",
            "/assets/images/image 10.png",
            "/assets/images/image 15.png"
        ],
        discount: "30",
        description: "A grand riverfront mansion in Paris, featuring a private garden and easy self-check-in, perfect for a luxurious French getaway.",
        reviews: [
            {
                name: "Claire Dubois",
                avatar: "/assets/avatars/claire.jpg",
                rating: 4.9,
                comment: "Stunning mansion with a beautiful garden. Loved it!"
            },
            {
                name: "Pierre Martin",
                avatar: "/assets/avatars/pierre.jpg",
                rating: 4.8,
                comment: "Very spacious and elegant. Perfect for our group."
            }
        ],
        host: {
            name: "Putu Widya",
            avatar: "/assets/avatars/putu.jpg",
            bio: "Putu is a Superhost with 10 years of experience in hospitality, passionate about sharing Bali’s beauty with guests.",
            joined: "March 2015"
        }
    }
];
const CATEGORIES = [
    {
        name: "Rooms",
        image: "/assets/icons/living-room 1.svg"
    },
    {
        name: "Mansion",
        image: "/assets/icons/mansion 1.png"
    },
    {
        name: "Countryside",
        image: "/assets/icons/farm 1.png"
    },
    {
        name: "Villa",
        image: "/assets/icons/villa 1.svg"
    },
    {
        name: "Tropical",
        image: "/assets/icons/palm-tree 1.svg"
    },
    {
        name: "New",
        image: "/assets/icons/key-chain 1.svg"
    },
    {
        name: "Amazing pool",
        image: "/assets/icons/swimming-pool 1.svg"
    },
    {
        name: "Beach house",
        image: "/assets/icons/vacations 1.svg"
    },
    {
        name: "Island",
        image: "/assets/icons/island (1) 1.svg"
    },
    {
        name: "Camping",
        image: "/assets/icons/tent 1.svg"
    },
    {
        name: "Apartment",
        image: "/assets/icons/apartment 1.svg"
    },
    {
        name: "House",
        image: "/assets/icons/home 1.svg"
    },
    {
        name: "Lakefront",
        image: "/assets/icons/cottage 1.svg"
    },
    {
        name: "Farm house",
        image: "/assets/icons/barn 1.svg"
    },
    {
        name: "Treehouse",
        image: "/assets/icons/treehouse (1) 1.svg"
    },
    {
        name: "Cabins",
        image: "/assets/icons/cabin 1.svg"
    },
    {
        name: "Castles",
        image: "/assets/icons/castle-tower 1.svg"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/common/Card.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bath.js [client] (ecmascript) <export default as Bath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed.js [client] (ecmascript) <export default as Bed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$squares$2d$subtract$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquaresSubtract$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/squares-subtract.js [client] (ecmascript) <export default as SquaresSubtract>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
;
;
;
;
const Card = ({ property })=>{
    console.log(property);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full cursor-pointer hover:shadow-md hover:rounded-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/property/${property.name}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: property.image[0] || "/images/fallback.jpg",
                    alt: property.name || "house image",
                    width: 400,
                    height: 300,
                    className: "rounded-t-lg",
                    onError: (e)=>{
                        e.currentTarget.src = "/images/fallback.jpg";
                    }
                }, void 0, false, {
                    fileName: "[project]/components/common/Card.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-between p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-start gap-4 mb-4",
                            children: property.category.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded",
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/common/Card.tsx",
                            lineNumber: 30,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between w-full gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-[22px]",
                                            children: property.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 42,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-4 h-4 text-[#FAC02B]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-[17px] ml-2",
                                                    children: property.rating
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 43,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 41,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-[16px]",
                                    children: [
                                        property.address.city,
                                        ", ",
                                        property.address.country
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 48,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/common/Card.tsx",
                            lineNumber: 40,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between gap-1 px-2 bg-gray-200 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                property.offers.bed,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__["Bed"], {
                                                    className: "w-4 h-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 55,
                                            columnNumber: 13
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                property.offers.shower,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__["Bath"], {
                                                    className: "w-4 h-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 58,
                                            columnNumber: 13
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                property.offers.occupants,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/common/Card.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 61,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 54,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4 text-[#FAC02B]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 66,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-[17px] ml-2",
                                            children: property.price
                                        }, void 0, false, {
                                            fileName: "[project]/components/common/Card.tsx",
                                            lineNumber: 67,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/common/Card.tsx",
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/common/Card.tsx",
                            lineNumber: 53,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/common/Card.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this),
                property.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-10 flex items-center justify-between gap-4 bg-green-500 rounded-t-lg rounded-br-lg left-1 top-1 w-fit",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center text-sm font-medium text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$squares$2d$subtract$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquaresSubtract$3e$__["SquaresSubtract"], {
                                className: "w-3 h-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/common/Card.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            property.discount,
                            "% Off"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/common/Card.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/common/Card.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/Card.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/Card.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/index.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Category$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Category.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Pill$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Pill.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/index.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Card.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Home() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [isTabletView, setIsTabletView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleResize = {
                "Home.useEffect.handleResize": ()=>{
                    setIsTabletView(window.innerWidth <= 768);
                }
            }["Home.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const allCategories = [
        "All",
        ...Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PROPERTYLISTINGSAMPLE"].flatMap((property)=>property.category)))
    ];
    const visibleCategories = allCategories.slice(0, 5);
    const mobileVisibleCategories = allCategories.slice(0, 2);
    const hiddenCategories = allCategories.slice(isTabletView ? 2 : 5);
    const filteredProperties = activeFilter === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PROPERTYLISTINGSAMPLE"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PROPERTYLISTINGSAMPLE"].filter((property)=>property.category.includes(activeFilter));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full space-y-4 font-quicksand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2 overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Category$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            label: category.name,
                            icon: category.image,
                            active: activeFilter === category.name,
                            onClick: ()=>setActiveFilter(category.name)
                        }, category.name, false, {
                            fileName: "[project]/pages/index.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative flex items-center justify-center w-full h-full p-4",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["HEROSECTION_BG_IMAGE"]})`,
                    width: "100%",
                    minHeight: "280px",
                    backgroundSize: "cover",
                    borderRadius: "27px",
                    backgroundPosition: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-col items-center justify-center w-full h-full max-w-2xl gap-5 md:max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-bold text-[28.28px] sm:text-[66.63px] text-center text-white lg:text-[94px]",
                            children: "Find your favorite place here!"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "px-4 text-xs font-semibold text-center text-white sm:text-lg lg:text-2xl",
                            children: "The best prices for over 2 million properties worldwide."
                        }, void 0, false, {
                            fileName: "[project]/pages/index.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                        (isTabletView ? mobileVisibleCategories : visibleCategories).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Pill$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                label: category,
                                active: activeFilter === category,
                                onClick: ()=>setActiveFilter(category)
                            }, category, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)),
                        hiddenCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "px-4 py-2 text-sm border rounded-md",
                            onChange: (e)=>setActiveFilter(e.target.value),
                            value: activeFilter,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "More..."
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                hiddenCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: category,
                                        children: category
                                    }, category, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
                children: filteredProperties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Card$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        property: property,
                        title: property.name
                    }, property.name, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Home, "FCdg7yqU7N1qpELBQ83AeTKezYQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.tsx [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/index.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[project]/pages/index (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, m: module } = __turbopack_context__;
{
__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__12799058._.js.map