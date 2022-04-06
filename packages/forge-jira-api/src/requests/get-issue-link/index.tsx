import { request } from '../../common/request';
import { IssueLink } from '../../types/issue-links';

type Args = {
    issueLinkId: string | number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-linkid-get
 */
export const getIssueLink = ({ issueLinkId }: Args) =>
    request<IssueLink>(`/rest/api/3/issueLink/${issueLinkId}`);
