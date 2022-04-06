import type { RequireAtLeastOne } from 'type-fest';

import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { PaginatedResult } from '../../types/paginated-result';
import { User } from '../../types/users';

type Args = RequireAtLeastOne<
    {
        groupId?: string;
        groupName?: string;
        includeInactiveUsers?: boolean;
        startAt?: number;
        maxResults?: number;
    },
    'groupId' | 'groupName'
>;

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-group-member-get
 */
export const getUsersFromGroup = (args: Args) => {
    const { groupName, ...otherArgs } = args;
    return request<PaginatedResult & { values: User[] }>(
        `/rest/api/3/group/member?${toSearchParams({ groupname: groupName, ...otherArgs })}`,
    );
};
