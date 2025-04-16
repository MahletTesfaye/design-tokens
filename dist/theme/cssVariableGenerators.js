export const generateColorVariables = (prefix, levels) => {
    return levels.reduce((acc, level) => {
        acc[`${prefix}-${level}`] = `var(--alds-color-${prefix}-${level})`;
        return acc;
    }, {});
};
export const generateCustomVariables = (prefix, keys) => {
    return keys.reduce((acc, key) => {
        acc[key] = `var(--alds-${prefix}-${key})`;
        return acc;
    }, {});
};
