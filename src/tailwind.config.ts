import {
    generateColorVariables,
    generateCustomVariables
} from "./theme/cssVariableGenerators.js";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                ...generateColorVariables("brand", ["yellow-100", "yellow-200", "yellow-300", "yellow-400", "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900"]),
                ...generateColorVariables("neutral", [100, 200, 300, 400, 500, 600, 700, 800, 900, "black", "white"]),
                ...generateColorVariables("utility", ["orange-100", "orange-200", "orange-300", "orange-400", "orange-500", "orange-600", "orange-700", "orange-800", "orange-900", "green-100", "green-200", "green-300", "green-400", "green-500", "green-600", "green-700", "success-800", "success-900", "red-100", "red-200", "red-300", "red-400", "red-500", "red-600", "red-700", "red-800", "red-900", "lime-100", "lime-200", "lime-300", "lime-400", "lime-500", "lime-600", "lime-700", "lime-800", "lime-900", "pink-100", "pink-200", "pink-300", "pink-400", "pink-500", "pink-600", "pink-700", "pink-800", "pink-900", "blue-100", "blue-200", "blue-300", "blue-400", "blue-500", "blue-600", "blue-700", "blue-800", "blue-900", "purple-100", "purple-200", "purple-300", "purple-400", "purple-500", "purple-600", "purple-700", "purple-800", "purple-900", "indigo-100", "indigo-200", "indigo-300", "indigo-400", "indigo-500", "indigo-600", "indigo-700", "indigo-800", "indigo-900", "rose-100", "rose-200", "rose-300", "rose-400", "rose-500", "rose-600", "rose-700", "rose-800", "rose-900", "gray-100", "gray-200", "gray-300", "gray-400", "gray-500", "gray-600", "gray-700", "gray-800", "gray-900"]),
                ...generateColorVariables("gradient", ["orange-100", "orange-200", "yellow-100", "yellow-200", "yellow-300", "black-100", "black-200", "black-300", "black-400"]),
                ...generateColorVariables("transparent-black", [100, 200, 300, 400, 500, 600, 700, 800, 900]),
                ...generateColorVariables("transparent-white", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
                ...generateColorVariables("shadow", ["color-4", "color-8", "color-12", "color-16", "color-20"]),
            },

            backgroundColor: {
                ...generateCustomVariables("color-background", ["default-primary-hover", "default-primary-active", "default-primary-focus", "default-primary-pressed", "default-primary-subtle", "default-secondary-hover", "default-secondary-active", "default-secondary-focus", "default-secondary-pressed", "default-secondary-subtle"]),
                ...generateCustomVariables("color-background", ["secondary-blue", "secondary-lime", "secondary-green", "secondary-pink", "secondary-purple", "secondary-indigo", "secondary-rose"]),
                ...generateCustomVariables("color-background", ["gradient-primary-100", "gradient-primary-200", "gradient-secondary-100", "gradient-secondary-200", "gradient-secondary-300", "gradient-tertiary-100", "gradient-tertiary-200", "gradient-tertiary-300", "gradient-tertiary-400", "gradient-tertiary-500", "gradient-tertiary-600", "gradient-tertiary-700"]),
                ...generateCustomVariables("color-background", ["brand-primary-hover", "brand-primary-active", "brand-primary-focus", "brand-primary-pressed", "brand-primary-subtle", "brand-secondary-hover", "brand-secondary-active", "brand-secondary-focus", "brand-secondary-pressed", "brand-secondary-subtle"]),
                ...generateCustomVariables("color-background", ["disabled-error", "disabled-success", "disabled-warning", "disabled-info", "disabled-default", "disabled-brand"]),
                ...generateCustomVariables("color-background", ["utility-error-hover", "utility-error-active", "utility-error-focus", "utility-error-pressed", "utility-error-subtle", "utility-success-hover", "utility-success-active", "utility-success-focus", "utility-success-pressed", "utility-success-subtle", "utility-warning-hover", "utility-warning-active", "utility-warning-focus", "utility-warning-pressed", "utility-warning-subtle", "utility-info-hover", "utility-info-active", "utility-info-focus", "utility-info-pressed", "utility-info-subtle"]),
                ...generateCustomVariables("color-background", ["transparent-primary", "transparent-secondary", "transparent-tertiary"]),
                ...generateCustomVariables("color-background", ["knockout-white", "knockout-black"]),
                ...generateCustomVariables("color", ["surface-main"]),
            },

            textColor: {
                ...generateCustomVariables("color-content", ["utility-error-hover", "utility-error-active", "utility-error-focus", "utility-error-pressed", "utility-error-subtle", "utility-success-hover", "utility-success-active", "utility-success-focus", "utility-success-pressed", "utility-success-subtle", "utility-warning-hover", "utility-warning-active", "utility-warning-focus", "utility-warning-pressed", "utility-warning-subtle", "utility-info-hover", "utility-info-active", "utility-info-focus", "utility-info-pressed", "utility-info-subtle"]),
                ...generateCustomVariables("color-content", ["secondary-blue", "secondary-lime", "secondary-green", "secondary-pink", "secondary-purple", "secondary-indigo", "secondary-rose"]),
                ...generateCustomVariables("color-content", ["disabled-error", "disabled-success", "disabled-warning", "disabled-info", "disabled-default", "disabled-brand"]),
                ...generateCustomVariables("color-content", ["transparent-primary", "transparent-secondary", "transparent-tertiary"]),
                ...generateCustomVariables("color-content", ["brand-primary-hover", "brand-primary-active", "brand-primary-focus", "brand-primary-pressed", "brand-primary-subtle", "brand-secondary-hover", "brand-secondary-active", "brand-secondary-focus", "brand-secondary-pressed", "brand-secondary-subtle"]),
                ...generateCustomVariables("color-content", ["default-primary-hover", "default-primary-active", "default-primary-focus", "default-primary-pressed", "default-primary-subtle", "default-secondary-hover", "default-secondary-active", "default-secondary-focus", "default-secondary-pressed", "default-secondary-subtle", "default-placeholder-hover", "default-placeholder-active", "default-placeholder-focus", "default-placeholder-pressed"]),
                ...generateCustomVariables("color-content", ["knockout-white", "knockout-black"]),
            },

            borderColor: {
                ...generateCustomVariables("color-border", ["utility-error-hover", "utility-error-active", "utility-error-focus", "utility-error-pressed", "utility-error-subtle", "utility-success-hover", "utility-success-active", "utility-success-focus", "utility-success-pressed", "utility-success-subtle", "utility-warning-hover", "utility-warning-active", "utility-warning-focus", "utility-warning-pressed", "utility-warning-subtle", "utility-info-hover", "utility-info-active", "utility-info-focus", "utility-info-pressed", "utility-info-subtle"]),
                ...generateCustomVariables("color-border", ["disabled-error", "disabled-success", "disabled-warning", "disabled-info", "disabled-default", "disabled-brand"]),
                ...generateCustomVariables("color-border", ["brand-primary-hover", "brand-primary-active", "brand-primary-focus", "brand-primary-pressed", "brand-primary-subtle", "brand-secondary-hover", "brand-secondary-active", "brand-secondary-focus", "brand-secondary-pressed", "brand-secondary-subtle"]),
                ...generateCustomVariables("color-border", ["default-primary-hover", "default-primary-active", "default-primary-focus", "default-primary-pressed", "default-primary-subtle", "default-secondary-hover", "default-secondary-active", "default-secondary-focus", "default-secondary-pressed", "default-secondary-subtle"]),
                ...generateCustomVariables("color-border", ["secondary-blue", "secondary-lime", "secondary-green", "secondary-pink", "secondary-purple", "secondary-indigo", "secondary-rose"]),
                ...generateCustomVariables("color-border", ["knockout-white", "knockout-black"]),
                ...generateCustomVariables("color-background", ["gradient-primary-100", "gradient-primary-200", "gradient-secondary-100", "gradient-secondary-200", "gradient-secondary-300"]),
            },

            boxShadowColor: generateCustomVariables("color", ["color", "xs-color", "sm-color", "md-color", "lg-color", "xl-color", "2xl-color"]),

            fontSize: {
                ...generateCustomVariables("dimension-font-size", [12, 14, 16, 18, 20, 24, 28, 32, 40, 56, 60]),
                ...generateCustomVariables("dimension", ["headline-lg", "headline-md", "headline-sm"]),
                ...generateCustomVariables("dimension", ["title-lg", "title-md", "title-sm"]),
                ...generateCustomVariables("dimension", ["display-lg", "display-md", "display-sm"]),
                ...generateCustomVariables("dimension", ["body-xl", "body-lg", "body-md", "body-sm", "body-xs"]),
                ...generateCustomVariables("dimension", ["label-lg", "label-md", "label-sm"]),
            },
            boxShadow: generateCustomVariables("shadow", ["xs", "sm", "md", "lg", "xl", "2xl"]),

            borderRadius: generateCustomVariables("dimension-radius", ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]),

            borderWidth: generateCustomVariables("dimension-width", ["xs", "sm", "md", "lg", "xl"]),

            spacing: {
                ...generateCustomVariables("dimension-spacing", [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60]),
                ...generateCustomVariables("dimension-spacing", ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl", "10xl", "11xl"]),
            },

            fontWeight: {
                "300": "var(--alds-font-weight-inter-0)",
                "400": "var(--alds-font-weight-inter-1)",
                "500": "var(--alds-font-weight-inter-2)",
                "600": "var(--alds-font-weight-inter-3)",
                "700": "var(--alds-font-weight-inter-4)",
            },

            lineHeight: {
                "0": "var(--alds-line-height-0)",
                "1": "var(--alds-line-height-1)",
                "2": "var(--alds-line-height-2)",
                "3": "var(--alds-line-height-3)",
                "4": "var(--alds-line-height-4)",
                "5": "var(--alds-line-height-5)",
                "6": "var(--alds-line-height-6)",
                "7": "var(--alds-line-height-7)",
                "8": "var(--alds-line-height-8)",
                "9": "var(--alds-line-height-9)",
                "10": "var(--alds-line-height-10)",
            },

            fontFamily: {
                inter: "var(--alds-font-family-inter)"
            },

            backgroundImage: {
                ...generateCustomVariables("gradient", ["border-secondary", "background-primary", "background-secondary", "background-tertiary"]),
            },

            letterSpacing: {
                "0": "var(--alds-letter-spacing-0)",
            },

            blur: {
                ...generateCustomVariables("dimension-blur", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 20, 24, 28, 32, 44, 60]),
            },
            animation: {
                slideIn: 'slideIn 0.3s ease-out',
            },
            keyframes: {
                slideIn: {
                    'from': { transform: 'translateX(100%)', opacity: '0' },
                    'to': { transform: 'translateX(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
