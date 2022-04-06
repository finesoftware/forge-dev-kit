import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { PaginatedResult } from '../../types/paginated-result';
import { Version } from '../../types/versions';

type Args = {
    projectKeyOrId: string | number;
    query?: string;
    startAt?: number;
    maxResults?: number;
    orderBy?:
        | 'description'
        | 'name'
        | 'releaseDate'
        | 'sequence'
        | 'startDate'
        | '-description'
        | '-name'
        | '-releaseDate'
        | '-sequence'
        | '-startDate';
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-project-projectidorkey-version-get
 */
export const getProjectVersions = ({ projectKeyOrId, query, startAt, maxResults, orderBy }: Args) =>
    request<PaginatedResult & { values: Version[] }>(
        `/rest/api/3/project/${projectKeyOrId}/version?${toSearchParams({
            query,
            startAt,
            maxResults,
            orderBy,
        })}`,
    );
