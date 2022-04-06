import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { User } from '../../types/users';

type Args = {
    accountId: string;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-users/#api-rest-api-3-user-get
 */
export const getUser = ({ accountId }: Args) =>
    request<User>(`/rest/api/3/user?${toSearchParams({ accountId })}`);
