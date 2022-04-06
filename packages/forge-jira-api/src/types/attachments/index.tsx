import type { User } from '../users';

export type Attachment = {
    id: string;
    content: string;
    filename: string;
    mimeType: string;
    size: number;
    created: string;
    author: User;
};
