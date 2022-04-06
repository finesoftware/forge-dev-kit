import { AvatarUrls } from '../avatars';
import { IssueType } from '../issue-types';

export type ProjectBasics = {
    id: string;
    key: string;
    name: string;
    projectTypeKey: 'software' | 'service_desk' | 'business';
    avatarUrls: AvatarUrls;
    // cloud only
    simplified?: boolean;
};

export type Project = ProjectBasics & {
    issueTypes?: IssueType[];
    properties?: Record<string, unknown>; // available only if properties=<comma-seperated-list-of-property-keys>
};
