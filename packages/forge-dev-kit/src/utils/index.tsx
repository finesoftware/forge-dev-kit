import { path } from 'zx';

export const removeTemplateExtension = (input: string) => {
    const { dir, name } = path.parse(input);
    return path.resolve(dir, name);
};

export const sortPropertiesAlphabetically = (
    obj: Record<string, string>,
): Record<string, string> => {
    return Object.keys(obj)
        .sort()
        .reduce((acc, val) => {
            // @ts-expect-error
            acc[val] = obj[val];

            return acc;
        }, {});
};
