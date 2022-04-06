import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { Project } from '../../types/projects';

type Args = {
    projectKeyOrId: string | number;
    includePermissions?: boolean;
    properties?: string[];
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-projectidorkey-get
 */
export const getProject = ({ projectKeyOrId, includePermissions, properties }: Args) =>
    request<Project>(
        `/rest/api/3/project/${projectKeyOrId}?${toSearchParams({
            expand: includePermissions ? ['permissions'] : undefined,
            properties,
        })}`,
    );
