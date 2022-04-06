import { request } from '../../common/request';
import { IssueLinkType } from '../../types/issue-links';

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-get
 */
export const getIssueLinkTypes = () =>
    request<{ issueLinkTypes: IssueLinkType[] }>('/rest/api/3/issueLinkType');
