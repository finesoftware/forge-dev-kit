import { request } from '../../common/request';

type Args = {
    issueKeyOrId: string | number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-get
 */
export const getIssueProperties = async ({ issueKeyOrId }: Args) =>
    request<{ keys: { key: string; self: string }[] }>(
        `/rest/api/3/issue/${issueKeyOrId}/properties`,
    );
