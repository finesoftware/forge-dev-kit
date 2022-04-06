import { IssueType } from '../issue-types';
import { Priority } from '../priorities';
import { Status } from '../statuses';

export type IssueLinkType = {
    id: string;
    name: string;
    inward: string;
    outward: string;
};

export type IssueLinkIssue = {
    id: string;
    key: string;
    fields: {
        summary: string;
        issuetype: IssueType;
        priority: Priority;
        status: Status;
    };
};

type BaseIssueLink = {
    id: string;
    type: IssueLinkType;
};

type InwardIssueLink = BaseIssueLink & {
    inwardIssue: IssueLinkIssue;
    outwardIssue?: never;
};

type OutwardIssueLink = BaseIssueLink & {
    outwardIssue: IssueLinkIssue;
    inwardIssue?: never;
};

export type IssueLink = InwardIssueLink | OutwardIssueLink;
