import { request } from '../../common/request';

type Args = {
    issueKeyOrId: string | number;
    transition: { id: string };
    fields?: Record<string, unknown>;
    update?: Record<string, unknown>;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-post
 */
export const transitionIssue = async ({ issueKeyOrId, transition, fields, update }: Args) =>
    request<void>(`/rest/api/3/issue/${issueKeyOrId}/transitions`, {
        type: 'POST',
        data: { transition, fields, update },
    });
