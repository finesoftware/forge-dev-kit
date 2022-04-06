import { request } from '../../common/request';

type Args = {
    issueLinkId: string | number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-linkid-delete
 */
export const deleteIssueLink = ({ issueLinkId }: Args) =>
    request<void>(`/rest/api/3/issueLink/${issueLinkId}`, { type: 'DELETE' });
