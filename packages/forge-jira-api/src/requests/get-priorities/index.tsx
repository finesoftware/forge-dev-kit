import { request } from '../../common/request';
import { Priority } from '../../types/priorities';

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-priorities/#api-rest-api-3-priority-get
 */
export const getPriorities = () => request<Priority[]>('/rest/api/3/priority');
