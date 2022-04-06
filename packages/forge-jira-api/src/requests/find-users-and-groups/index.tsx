import { request } from '../../common/request';
import { toSearchParams } from '../../common/search-params';
import { GroupPickerResult } from '../../types/groups';
import { AccountType } from '../../types/users';

type AvatarSize =
    | 'xsmall'
    | 'xsmall@2x'
    | 'xsmall@3x'
    | 'small'
    | 'small@2x'
    | 'small@3x'
    | 'medium'
    | 'medium@2x'
    | 'medium@3x'
    | 'large'
    | 'large@2x'
    | 'large@3x'
    | 'xlarge'
    | 'xlarge@2x'
    | 'xlarge@3x'
    | 'xxlarge'
    | 'xxlarge@2x'
    | 'xxlarge@3x'
    | 'xxxlarge'
    | 'xxxlarge@2x'
    | 'xxxlarge@3x';

type Args = {
    query: string;
    maxResults?: number;
    showAvatar?: boolean;
    fieldId?: string;
    projectId?: string | string[];
    issueTypeId?: string | string[];
    avatarSize?: AvatarSize;
    caseInsensitive?: boolean;
    excludeConnectAddons?: boolean;
};

type Result = {
    users: {
        users: {
            accountId: string; // '5b10a2844c20165700ede21g';
            accountType: AccountType; // 'atlassian';
            html: string; // '<strong>Mi</strong>a Krystof - <strong>mi</strong>a@example.com (<strong>mi</strong>a)';
            displayName: string; // 'Mia Krystof';
            avatarUrl?: string; // 'https://avatar-management--avatars.server-location.prod.public.atl-paas.net/initials/MK-5.png?size=16&s=16';
        }[];
        total: number; // 25;
        header: string; // 'Showing 20 of 25 matching users';
    };
    groups: GroupPickerResult;
};

/**
 * https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-group-and-user-picker/#api-rest-api-3-groupuserpicker-get
 */
export const findUsersAndGroups = (args: Args) =>
    request<Result>(`/rest/api/3/groupuserpicker?${toSearchParams(args)}`);
