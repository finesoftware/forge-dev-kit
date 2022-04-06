import { User } from '../users';

export type HistoryEntryItem = {
    field: string; // e.g. resolution
    fieldId?: string; // e.g. 'resolution'; sometimes seems to be missing;
    fieldtype: 'jira' | 'custom';
    from: string | null;
    fromString: string | null;
    to: string | null;
    toString: string | null;
};

export type HistoryEntry = {
    id: string;
    author: User;
    created: string; // iso date/time string
    items: HistoryEntryItem[];
};

export type Changelog = {
    histories: HistoryEntry[];
    maxResults: number;
    startAt: number;
    total: number;
};
