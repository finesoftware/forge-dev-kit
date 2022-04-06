import { request } from '../../common/request';
import { GlobalPermissionKey, ProjectPermissionKey } from '../../types/permissions';

type Args<
    TAdditionalProjectPermissionKey extends string = never,
    TAdditionalGlobalPermissionKey extends string = never,
> = {
    accountId: string;
    projectPermissions: {
        projects: number[];
        permissions: (ProjectPermissionKey | TAdditionalProjectPermissionKey)[];
    }[];
    globalPermissions?: (GlobalPermissionKey | TAdditionalGlobalPermissionKey)[];
};

type Result<
    TAdditionalProjectPermissionKey extends string = never,
    TAdditionalGlobalPermissionKey extends string = never,
> = {
    projectPermissions: {
        permission: ProjectPermissionKey | TAdditionalProjectPermissionKey;
        projects: number[];
    }[];
    globalPermissions: (GlobalPermissionKey | TAdditionalGlobalPermissionKey)[];
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permissions/#api-rest-api-3-permissions-check-post
 */
export const getBulkPermissions = async <
    TAdditionalProjectPermissionKey extends string = never,
    TAdditionalGlobalPermissionKey extends string = never,
>({
    accountId,
    projectPermissions,
    globalPermissions,
}: Args<TAdditionalProjectPermissionKey, TAdditionalGlobalPermissionKey>) =>
    request<Result<TAdditionalProjectPermissionKey, TAdditionalGlobalPermissionKey>>(
        `/rest/api/3/permissions/check`,
        {
            type: 'POST',
            data: { accountId, projectPermissions, globalPermissions },
        },
    );
