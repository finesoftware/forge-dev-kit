import { request } from '../../common/request';

type Args = {
    projectKeyOrId: string | number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-properties/#api-rest-api-3-project-projectidorkey-properties-get
 */
export const getProjectProperties = ({ projectKeyOrId }: Args) =>
    request<{ keys: { key: string; self: string }[] }>(
        `/rest/api/3/project/${projectKeyOrId}/properties`,
    );
