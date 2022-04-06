import { request } from '../../common/request';
import { Priority } from '../../types/priorities';

type Args = {
    priorityId: string | number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-priorities/#api-rest-api-3-priority-id-get
 */
export const getPriority = ({ priorityId }: Args) =>
    request<Priority>(`/rest/api/3/priority/${priorityId}`);
