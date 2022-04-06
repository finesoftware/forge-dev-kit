import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';

type Args = {
    accountId: string;
    propertyKey: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-properties/#api-rest-api-3-user-properties-propertykey-get
 */
export const getUserProperty = ({ accountId, propertyKey }: Args) =>
    request<{ key: string; value: unknown }>(
        `/rest/api/3/user/properties/${propertyKey}?${toSearchParams({ accountId })}`,
    );
