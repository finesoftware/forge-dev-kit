import { request } from '../../common/request';

type Args = {
    issueLinkTypeId: string | number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-issuelinktypeid-delete
 */
export const deleteIssueLinkType = ({ issueLinkTypeId }: Args) =>
    request<void>(`/rest/api/3/issueLinkType/${issueLinkTypeId}`, { type: 'DELETE' });
