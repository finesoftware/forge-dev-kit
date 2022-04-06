import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { Transition } from '../../types/statuses';

type Args = {
    issueKeyOrId: string | number;
    sortByOpsBarAndStatus?: boolean;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-get
 */
export const getTransitions = ({ issueKeyOrId, sortByOpsBarAndStatus }: Args) =>
    request<{ transitions: Transition[] }>(
        `/rest/api/3/issue/${issueKeyOrId}/transitions?${toSearchParams({
            sortByOpsBarAndStatus,
        })}`,
    );
