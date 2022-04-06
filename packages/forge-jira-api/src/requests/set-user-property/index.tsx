// eslint-disable-next-line import/no-unresolved
import { JsonObject } from 'type-fest';

import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';

type Args = {
    accountId: string;
    propertyKey: string;
    value: JsonObject;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-properties/#api-rest-api-3-user-properties-propertykey-put
 */
export const setUserProperty = async ({ accountId, propertyKey, value }: Args) =>
    request<void>(`/rest/api/3/user/properties/${propertyKey}?${toSearchParams({ accountId })}`, {
        type: 'PUT',
        data: value,
    });
