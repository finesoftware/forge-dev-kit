import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { User } from '../../types/users';

type Args = {
    issueKey: string;
    query: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-search/#api-rest-api-3-user-assignable-search-get
 */
export const findUsersAssignableToIssue = async ({ issueKey, query }: Args) =>
    request<User[]>(`/rest/api/3/user/assignable/search?${toSearchParams({ issueKey, query })}`);
