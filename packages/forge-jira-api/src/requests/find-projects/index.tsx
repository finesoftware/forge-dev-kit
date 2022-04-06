import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { Project } from '../../types/projects';

type ProjectAction = 'view' | 'browse' | 'edit';
type ProjectOrder =
    | 'category'
    | 'issueCount'
    | 'key'
    | 'lastIssueUpdatedTime'
    | 'name'
    | 'owner'
    | 'archivedDate'
    | 'deletedDate'
    | '-category'
    | '-issueCount'
    | '-key'
    | '-lastIssueUpdatedTime'
    | '-name'
    | '-owner'
    | '-archivedDate'
    | '-deletedDate';

type Args = {
    query: string;
    action?: ProjectAction;
    orderBy?: ProjectOrder;
    includeIssueTypes?: boolean;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-search-get
 */
export const findProjects = ({ query, action, orderBy, includeIssueTypes }: Args) =>
    request<{ values: Project[] }>(
        `/rest/api/3/project/search?${toSearchParams({
            query,
            action,
            orderBy,
            expand: [...(includeIssueTypes ? ['issueTypes'] : [])],
        })}`,
    );
