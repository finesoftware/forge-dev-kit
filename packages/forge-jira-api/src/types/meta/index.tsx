import type { IssueType } from '../issue-types';
import type { ProjectBasics } from '../projects';

type BaseMeta<T extends unknown> = {
    assignee?: T;
    components?: T;
    description?: T;
    duedate?: T;
    environment?: T;
    fixVersions?: T;
    issuelinks?: T;
    issuetype: T;
    labels?: T;
    priority: T;
    reporter?: T;
    summary?: T;
    timetracking?: T;
    versions?: T;
};

export type EditMetaEntry = {
    key?: string; // only seems to be available in cloud
    name: string; // translated field name
    operations: ('set' | 'add' | 'remove')[]; // can be empty
    required: boolean;
    schema: unknown;
    autoCompleteUrl?: string;
    allowedValues?: unknown;
};

export type EditMeta = BaseMeta<EditMetaEntry>;

export type CreateMetaEntry = EditMetaEntry & {
    hasDefaultValue: boolean;
    defaultValue?: unknown;
};

export type CreateMeta = BaseMeta<CreateMetaEntry>;

type CreateIssueMetadataFields = CreateMeta & {
    [key: string]: CreateMetaEntry;
};

export type CreateIssueMetadata = {
    projects: (ProjectBasics & {
        issuetypes: (IssueType & {
            fields: CreateIssueMetadataFields;
        })[];
    })[];
};
