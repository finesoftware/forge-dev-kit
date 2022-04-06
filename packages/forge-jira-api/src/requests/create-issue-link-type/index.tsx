import { request } from '../../common/request';

type Args = {
    name: string;
    inward: string;
    outward: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-post
 */
export const createIssueLinkType = (args: Args) =>
    request<void>('/rest/api/3/issueLinkType', { type: 'POST', data: args });
