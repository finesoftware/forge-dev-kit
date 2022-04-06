import { request } from '../../common/request';

type Args = {
    issueKeyOrId: string | number;
    propertyKey: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-propertykey-get
 */
export const getIssueProperty = async ({ issueKeyOrId, propertyKey }: Args) =>
    request<{ key: string; value: unknown }>(
        `/rest/api/3/issue/${issueKeyOrId}/properties/${propertyKey}`,
    );
