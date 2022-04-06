import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';

type Args = {
    accountId: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-properties/#api-rest-api-3-user-properties-get
 */
export const getUserProperties = ({ accountId }: Args) =>
    request<{ keys: { key: string; self: string }[] }>(
        `/rest/api/3/user/properties?${toSearchParams({ accountId })}`,
    );
