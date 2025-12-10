(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/animations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Centralized animation variants and configurations for Framer Motion
 *
 * These utilities provide consistent, reusable animations across the site.
 * All animations use GPU-accelerated properties (transform, opacity) for best performance.
 */ /**
 * Standard fade-in-up animation
 * Elements start slightly below and fade in as they slide up
 */ __turbopack_context__.s([
    "fadeIn",
    ()=>fadeIn,
    "fadeInScale",
    ()=>fadeInScale,
    "fadeInUp",
    ()=>fadeInUp,
    "scrollViewport",
    ()=>scrollViewport,
    "scrollViewportEarly",
    ()=>scrollViewportEarly,
    "staggerContainer",
    ()=>staggerContainer
]);
const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};
const fadeInScale = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1 // Initial delay before children start
        }
    }
};
const scrollViewport = {
    once: true,
    margin: "0px 0px -100px 0px",
    amount: 0.3 // Element must be 30% visible before triggering
};
const scrollViewportEarly = {
    once: true,
    margin: "0px 0px -200px 0px",
    amount: 0.2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AnimatedSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/container/container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$system$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/system/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$animations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/animations.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Create motion-enabled Box using Chakra's chakra factory
const MotionBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$system$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chakra"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div);
_c = MotionBox;
function AnimatedSection({ children, id, variant = "default", animation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$animations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUp"], viewport = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$animations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollViewport"], py, containerProps, noContainer = false, ...rest }) {
    _s();
    // Background colors for each variant - using custom brand greys
    const defaultBg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"])("background.light", "background.dark");
    const altBg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"])("brand.50", "brand.900");
    const darkBg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"])("brand.100", "brand.800");
    // Map variant to background
    const bgMap = {
        default: defaultBg,
        alt: altBg,
        dark: darkBg,
        none: "transparent"
    };
    const bg = bgMap[variant] || defaultBg;
    // Default padding
    const defaultPy = {
        base: 12,
        md: 20
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionBox, {
        as: "section",
        id: id,
        w: "100%",
        py: py ?? defaultPy,
        bg: bg,
        initial: "hidden",
        whileInView: "visible",
        viewport: viewport,
        variants: animation,
        ...rest,
        children: noContainer ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$container$2f$container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            maxW: "container.xl",
            ...containerProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AnimatedSection.jsx",
            lineNumber: 74,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/AnimatedSection.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(AnimatedSection, "/cpC2a2HWeU0aQkRIIRhhWBZUps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"]
    ];
});
_c1 = AnimatedSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionBox");
__turbopack_context__.k.register(_c1, "AnimatedSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ProgramPageLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramPageLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$image$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/image/image.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AnimatedSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AnimatedSection.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProgramPageLayout({ title, tagline, logoLight, logoDark, children }) {
    _s();
    const logoSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"])(logoLight, logoDark);
    const headingColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"])("text.light", "text.dark");
    const subtitleColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"])("text.mutedLight", "text.mutedDark");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AnimatedSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "none",
                py: {
                    base: 16,
                    md: 24
                },
                noContainer: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$v$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VStack"], {
                    spacing: 6,
                    textAlign: "center",
                    px: 4,
                    children: [
                        logoLight && logoDark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$image$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            src: logoSrc,
                            alt: `${title} Logo`,
                            h: {
                                base: 80,
                                md: 100
                            },
                            fallbackSrc: `https://via.placeholder.com/250x100?text=${title.replace(" ", "+")}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ProgramPageLayout.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                            as: "h1",
                            size: {
                                base: "2xl",
                                md: "3xl"
                            },
                            color: headingColor,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ProgramPageLayout.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            fontSize: {
                                base: "lg",
                                md: "xl"
                            },
                            maxW: "3xl",
                            color: subtitleColor,
                            children: tagline
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ProgramPageLayout.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ProgramPageLayout.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ProgramPageLayout.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true);
}
_s(ProgramPageLayout, "8nozcIdKNT5vAsXsHPKHr40n2Io=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$color$2d$mode$2f$color$2d$mode$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorModeValue"]
    ];
});
_c = ProgramPageLayout;
var _c;
__turbopack_context__.k.register(_c, "ProgramPageLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VStack",
    ()=>VStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/stack/stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$system$2f$forward$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@chakra-ui/react/dist/esm/system/forward-ref.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const VStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$system$2f$forward$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        align: "center",
        ...props,
        direction: "column",
        ref
    }));
VStack.displayName = "VStack";
;
}),
]);

//# sourceMappingURL=_029efa05._.js.map