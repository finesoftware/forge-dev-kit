import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { PermissionKey, UserPermissions } from '../../types/permissions';

type Args<TAdditionalPermissionKey> = {
    permissions: (PermissionKey | TAdditionalPermissionKey)[];
    projectId?: string | number;
    issueId?: string | number;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permissions/#api-rest-api-3-mypermissions-get
 */
export const getMyPermissions = async <TAdditionalPermissionKey extends string = never>(
    args: Args<TAdditionalPermissionKey>,
) =>
    request<{ permissions: UserPermissions<TAdditionalPermissionKey> }>(
        `/rest/api/3/mypermissions?${toSearchParams(args)}`,
    );
