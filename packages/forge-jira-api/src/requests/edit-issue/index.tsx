import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';

type Args = {
    issueKeyOrId: string | number;
    fields?: Record<string, unknown>;
    update?: Record<string, unknown>;
    notifyUsers?: boolean;
    overrideScreenSecurity?: boolean;
    overrideEditableFlag?: boolean;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-put
 */
export const editIssue = async ({
    issueKeyOrId,
    fields,
    update,
    notifyUsers,
    overrideScreenSecurity,
    overrideEditableFlag,
}: Args) =>
    request<void>(
        `/rest/api/3/issue/${issueKeyOrId}?${toSearchParams({
            notifyUsers,
            overrideScreenSecurity,
            overrideEditableFlag,
        })}`,
        {
            type: 'PUT',
            data: { fields, update },
        },
    );
