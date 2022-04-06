import { request } from '../../common/request';
import { IssueType } from '../../types/issue-types';

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-types/#api-rest-api-3-issuetype-get
 */
export const getIssueTypes = () => request<IssueType[]>('/rest/api/3/issuetype');
