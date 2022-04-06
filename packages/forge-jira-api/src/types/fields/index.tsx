import type { PaginatedResult } from '../paginated-result';

export type Field = {
    id: string;
    name: string;
    untranslatedName?: string;
    custom: boolean;
    schema?: {
        type: string;
        system?: string;
        custom?: string;
        // cloud only:
        configuration?: Record<string, unknown>;
        // items?: string;
        // customId?: number;
    };
    // cloud only
    key?: string;
    scope?: {
        type: 'PROJECT' | 'TEMPLATE';
        project?: { id: string };
    };
};

export type FieldInformation = {
    id: string;
    name: string;
    description?: string;
};

export type FieldInformationSearchResult = PaginatedResult & {
    values: FieldInformation[];
};

export type FieldContext = {
    fieldId: string;
    projectId: string;
    issueTypeId: string;
};

export type CustomFieldId = `customfield_${number}`;
