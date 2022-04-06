export type JQLAutocompleteSuggestions = {
    results?: {
        value: string;
        displayName: string;
    }[];
};

export type JQLFieldName = {
    value: string;
    displayName: string;
    operators: string[];
    types: string[];
    cfid?: string;
    orderable?: 'true';
    searchable?: 'true';
    auto?: 'true';
};

export type JQLFunctionName = {
    value: string;
    displayName: string;
    types: string[];
    isList?: 'true';
};

export type JQLReferenceData = {
    visibleFieldNames: JQLFieldName[];
    visibleFunctionNames: JQLFunctionName[];
    jqlReservedWords: string[];
};
