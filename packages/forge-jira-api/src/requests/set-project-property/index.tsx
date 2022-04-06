import type { JsonObject } from 'type-fest';

import { request } from '../../common/request';

type Args = {
    projectKeyOrId: string | number;
    propertyKey: string;
    value: JsonObject;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-properties/#api-rest-api-3-project-projectidorkey-properties-propertykey-put
 */
export const setProjectProperty = async ({ projectKeyOrId, propertyKey, value }: Args) =>
    request<void>(`/rest/api/3/project/${projectKeyOrId}/properties/${propertyKey}`, {
        type: 'PUT',
        data: value,
    });
