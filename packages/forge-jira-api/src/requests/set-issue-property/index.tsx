import type { JsonObject } from 'type-fest';

import { request } from '../../common/request';

type Args = {
    issueKeyOrId: string | number;
    propertyKey: string;
    value: JsonObject;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-propertykey-put
 */
export const setIssueProperty = async ({ issueKeyOrId, propertyKey, value }: Args) =>
    request<void>(`/rest/api/3/issue/${issueKeyOrId}/properties/${propertyKey}`, {
        type: 'PUT',
        data: value,
    });
