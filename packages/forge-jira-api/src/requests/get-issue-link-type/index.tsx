import { request } from '../../common/request';
import { IssueLink } from '../../types/issue-links';

type Args = {
    issueLinkTypeId: string | number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-issuelinktypeid-get
 */
export const getIssueLinkType = ({ issueLinkTypeId }: Args) =>
    request<IssueLink>(`/rest/api/3/issueLinkType/${issueLinkTypeId}`);
