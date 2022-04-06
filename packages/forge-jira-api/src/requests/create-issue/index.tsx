import type { RequireAtLeastOne } from 'type-fest';

import { request } from '../../common/request';

type Args = RequireAtLeastOne<
    {
        projectId?: string;
        projectKey?: string;
        issueTypeId: string;
        fields?: Record<string, unknown>;
        update?: Record<string, unknown>;
    },
    'projectId' | 'projectKey'
>;

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post
 */
export const createIssue = async ({ projectId, projectKey, issueTypeId, fields, update }: Args) =>
    request<{ id: string; key: string }>('/rest/api/3/issue', {
        type: 'POST',
        data: {
            fields: {
                project: { id: projectId, key: projectKey },
                issuetype: { id: issueTypeId },
                ...fields,
            },
            update,
        },
    });
