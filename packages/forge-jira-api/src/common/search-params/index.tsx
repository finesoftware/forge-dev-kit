type Value = string | number | boolean;

const toSingleValue = (input: Value) => (typeof input === 'string' ? input : JSON.stringify(input));

export const toSearchParams = (data: Partial<Record<string, Value | Value[]>>) => {
    const stringData: Record<string, string> = {};
    Object.keys(data).forEach((key) => {
        const value = data[key];
        if (value !== undefined) {
            if (Array.isArray(value)) {
                if (value.length > 0) {
                    stringData[key] = value.map(toSingleValue).join(',');
                }
            } else {
                stringData[key] = toSingleValue(value);
            }
        }
    });

    return new URLSearchParams(stringData);
};
