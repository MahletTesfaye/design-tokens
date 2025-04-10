export const generateColorVariables = (prefix: string, levels: (number | string)[]) => {
    return levels.reduce((acc, level) => {
        acc[`${prefix}-${level}`] = `var(--alds-color-${prefix}-${level})`;
        return acc;
    }, {} as Record<string, string>);
};

export const generateCustomVariables = (prefix: string, keys: (string | number)[]) => {
    return keys.reduce((acc, key) => {
        acc[key] = `var(--alds-${prefix}-${key})`;
        return acc;
    }, {} as Record<string, string>);
};
