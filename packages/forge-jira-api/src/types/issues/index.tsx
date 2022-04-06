import type { Attachment } from '../attachments';
import type { Changelog } from '../changelog';
import type { Comment } from '../comments';
import type { Component } from '../components';
import type { DocNode } from '../doc-nodes';
import type { IssueLink } from '../issue-links';
import type { IssueType } from '../issue-types';
import type { EditMeta, EditMetaEntry } from '../meta';
import type { PaginatedResult } from '../paginated-result';
import type { Priority } from '../priorities';
import type { Progress } from '../progress';
import type { ProjectBasics } from '../projects';
import type { Resolution, Status } from '../statuses';
import type { User } from '../users';
import type { Version } from '../versions';

export type StandardFields = {
    aggregateprogress?: Progress;
    aggregatetimeoriginalestimate?: number | null;
    aggregatetimeestimate?: number | null;
    aggregatetimespent?: number | null;
    assignee?: User | null;
    attachment?: Attachment[];
    comment?: {
        comments: Comment[];
        maxResults: number;
        startAt: number;
        total: number;
    };
    components?: Component[];
    created?: string; // 2020-08-21T04:04:24.297+1000
    description?: DocNode;
    duedate?: string | null; // 2020-08-21T04:04:24.297+1000
    environment?: DocNode;
    fixVersions?: Version[];
    issuelinks?: IssueLink[];
    issuetype?: IssueType;
    labels?: string[] | null; // we saw this to be null in some customer instances... no idea how, but :shrug:
    parent?: Issue;
    project?: ProjectBasics;
    priority?: Priority | null; // we saw this to be null in some customer instances... no idea how, but :shrug:
    progress?: Progress;
    reporter?: User | null;
    resolution?: Resolution | null;
    resolutiondate?: string | null; // 2020-08-22T02:33:29.051+1000
    status?: Status;
    statuscategorychangedate?: string | null; // 2020-08-22T02:33:29.051+1000
    subtasks?: Issue[];
    summary?: string;
    timeestimate?: number | null;
    timeoriginalestimate?: number | null;
    timespent?: number | null;
    updated?: string; // 2020-08-22T02:33:29.051+1000
    versions?: Version[];
    votes?: {
        votes: 0;
        hasVoted: boolean;
    };
    workratio?: number;
    watches?: {
        watchCount: number;
        isWatching: boolean;
    };
};

export type Issue = {
    id: string;
    key: string;
    fields?: StandardFields & {
        [key: string]: unknown;
    };
    renderedFields?: {
        [key: string]: string | null;
    };
    editmeta?: {
        fields: EditMeta & {
            [key: string]: EditMetaEntry;
        };
    };
    changelog?: Changelog;
    properties?: Partial<Record<string, unknown>>;
};

export type IssueSearchResult = PaginatedResult & {
    issues: Issue[];
    expand: string;
};

type IssuePickerEntry = {
    id: number;
    img: string;
    key: string;
    summaryText: string;
};

export type IssuePickerResult = {
    sections: [
        {
            id: 'hs';
            issues: IssuePickerEntry[];
        },
        {
            id: 'cs';
            issues: IssuePickerEntry[];
        } | null,
    ];
};
