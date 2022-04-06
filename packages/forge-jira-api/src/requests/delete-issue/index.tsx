import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';

type Args = {
    issueKeyOrId: string | number;
    deleteSubtasks?: boolean;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-delete
 */
export const deleteIssue = async ({ issueKeyOrId, deleteSubtasks }: Args) =>
    request<void>(
        `/rest/api/3/issue/${issueKeyOrId}?${toSearchParams({
            deleteSubtasks,
        })}`,
        { type: 'DELETE' },
    );
