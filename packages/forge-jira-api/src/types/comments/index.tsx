import type { DocNode } from '../doc-nodes';
import type { User } from '../users';

export type Comment = {
    author: User;
    body: DocNode;
    created: string; // iso date/time string
    id: string;
    jsdPublic: boolean;
    updateAuthor: User;
    updated: string; // iso date/time string
};
