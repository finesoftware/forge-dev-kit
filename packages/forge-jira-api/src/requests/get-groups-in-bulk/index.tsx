import type { RequireAtLeastOne } from 'type-fest';

import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { Group } from '../../types/groups';
import { PaginatedResult } from '../../types/paginated-result';

type Args = RequireAtLeastOne<
    {
        groupId?: string | string[];
        groupName?: string | string[];
        startAt?: number;
        maxResults?: number;
    },
    'groupId' | 'groupName'
>;

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-group-bulk-get
 */
export const getGroupsInBulk = (args: Args) =>
    request<PaginatedResult & { values: Group[] }>(
        `/rest/api/3/group/bulk?${toSearchParams(args)}`,
    );
