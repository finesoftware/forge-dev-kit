import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { Component } from '../../types/components';
import { PaginatedResult } from '../../types/paginated-result';

type Args = {
    projectKeyOrId: string | number;
    query?: string;
    startAt?: number;
    maxResults?: number;
    orderBy?:
        | 'description'
        | 'issueCount'
        | 'lead'
        | 'name'
        | '-description'
        | '-issueCount'
        | '-lead'
        | '-name';
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-project-projectidorkey-component-get
 */
export const getProjectComponents = ({
    projectKeyOrId,
    query,
    startAt,
    maxResults,
    orderBy,
}: Args) =>
    request<PaginatedResult & { values: Component[] }>(
        `/rest/api/3/project/${projectKeyOrId}/component?${toSearchParams({
            query,
            startAt,
            maxResults,
            orderBy,
        })}`,
    );
