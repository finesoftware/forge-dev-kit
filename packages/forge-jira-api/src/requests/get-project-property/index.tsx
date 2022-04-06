import { request } from '../../common/request';

type Args = {
    projectKeyOrId: string | number;
    propertyKey: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-properties/#api-rest-api-3-project-projectidorkey-properties-propertykey-get
 */
export const getProjectProperty = ({ projectKeyOrId, propertyKey }: Args) =>
    request<{ key: string; value: unknown }>(
        `/rest/api/3/project/${projectKeyOrId}/properties/${propertyKey}`,
    );
