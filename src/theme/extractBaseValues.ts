const baseFontFamily = require("!!raw-loader!../../styles/foundations/base/font-family.css").default;
const baseLineHeight = require("!!raw-loader!../../styles/foundations/base/line-height.css").default;
const baseFontWeight = require("!!raw-loader!../../styles/foundations/base/font-weight.css").default;
const baseFontSize = require("!!raw-loader!../../styles/foundations/base/font-size.css").default;
const baseLetterSpacing = require("!!raw-loader!../../styles/foundations/base/letter-spacing.css").default;
const baseParagraphSpacing = require("!!raw-loader!../../styles/foundations/base/paragraph-spacing.css").default;
const baseDimension = require("!!raw-loader!../../styles/foundations/base/dimension.css").default;
const baseString = require("!!raw-loader!../../styles/foundations/base/string.css").default;
const baseTextCase = require("!!raw-loader!../../styles/foundations/base/text-case.css").default;
const baseTextDecoration = require("!!raw-loader!../../styles/foundations/base/text-decoration.css").default;
const baseColor = require("!!raw-loader!../../styles/foundations/base/color.css").default;
const baseShadow = require("!!raw-loader!../../styles/foundations/base/shadow.css").default;
const baseTypography = require("!!raw-loader!../../styles/foundations/base/typography.css").default;
const baseGradient = require("!!raw-loader!../../styles/foundations/base/gradient.css").default;

const lightColor = require("!!raw-loader!../../styles/foundations/light/color.css").default;
const darkColor = require("!!raw-loader!../../styles/foundations/dark/color.css").default;
const desktopDimension = require("!!raw-loader!../../styles/foundations/desktop/dimension.css").default;
const tabletDimension = require("!!raw-loader!../../styles/foundations/tablet/dimension.css").default;
const mobileDimension = require("!!raw-loader!../../styles/foundations/mobile/dimension.css").default;

const cssContent = `
    ${baseFontFamily}
    ${baseLineHeight}
    ${baseFontWeight}
    ${baseFontSize}
    ${baseLetterSpacing}
    ${baseParagraphSpacing}
    ${baseDimension}
    ${baseString}
    ${baseTextCase}
    ${baseTextDecoration}
    ${baseColor}
    ${baseShadow}
    ${baseTypography}
    ${baseGradient}
    ${lightColor}
    ${darkColor}
    ${desktopDimension}
    ${tabletDimension}
    ${mobileDimension}
`;

import postcss from "postcss";

export const extractBaseValues = (token: string): string => {
    const isWrapped = token.trim().startsWith("var(");
    const cleanedToken = isWrapped
        ? token.replace(/^var\(([^)]+)\)$/, "$1").trim()
        : token.trim();

    const root = postcss.parse(cssContent);
    let extracted: string | null = null;

    root.walkRules((rule) => {
        rule.walkDecls((decl) => {
            if (
                decl.prop.includes(cleanedToken) ||
                decl.value.includes(cleanedToken)
            ) {
                extracted = decl.value;
                return false;
            }
        });
        if (extracted) {
            return false;
        }
    });

    return extracted || token;
};

export const getExtractedContent = (
    cleanedToken: string,
    theme: string
): string | null => {
    const themeCssContent = theme === "light" ? lightColor : darkColor;

    const root = postcss.parse(themeCssContent);
    let extracted: string | null = null;
    root.walkRules((rule) => {
        if (rule.selector && rule.selector.includes(`.theme-${theme}`)) {
            rule.walkDecls((decl) => {
                if (
                    decl.prop.includes(cleanedToken) ||
                    decl.value.includes(cleanedToken)
                ) {
                    extracted = decl.value;
                    return false;
                }
            });
            if (extracted) {
                return false;
            }
        }
    });

    return extracted;
};

export const getModeToken = (token: string, theme: string): string => {
    if (typeof document === "undefined") return token;

    const isWrapped = token.trim().startsWith("var(");
    const cleanedToken = isWrapped
        ? token.replace(/^var\(([^)]+)\)$/, "$1").trim()
        : token.trim();

    const themeSpecificValue = getExtractedContent(cleanedToken, theme);

    return themeSpecificValue || extractBaseValues(token);
};