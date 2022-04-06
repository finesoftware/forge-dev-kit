import type { AvatarUrls } from '../avatars';

export type AccountType = 'atlassian' | 'app' | 'customer';

export type User = {
    accountId: string;
    displayName: string;
    avatarUrls: AvatarUrls;
    active: boolean;
    accountType: AccountType;
    // TODO: not entirely sure about these...
    // emailAddress: string | null;
    // timeZone: string | null;
};
