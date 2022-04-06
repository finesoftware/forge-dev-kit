import type { RequireAtLeastOne } from 'type-fest';

import { request } from '../../common/request';

type Args = {
    type: RequireAtLeastOne<{ id: string; name: string }>;
    inwardIssue: RequireAtLeastOne<{ id: string; key: string }>;
    outwardIssue: RequireAtLeastOne<{ id: string; key: string }>;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-post
 */
export const createIssueLink = (args: Args) =>
    request<void>('/rest/api/3/issueLink', { type: 'POST', data: args });
