export type PermissionContext = 'PROJECT' | 'GLOBAL';

const globalPermissionKeys = [
    'ADMINISTER',
    'BULK_CHANGE',
    'CREATE_SHARED_OBJECTS',
    'MANAGE_GROUP_FILTER_SUBSCRIPTIONS',
    'SYSTEM_ADMIN',
    'USER_PICKER',
] as const;

export type GlobalPermissionKey = typeof globalPermissionKeys[number];

const projectPermissionKeys = [
    'ADD_COMMENTS',
    'ADMINISTER_PROJECTS',
    'ASSIGNABLE_USER',
    'ASSIGN_ISSUES',
    'BROWSE_PROJECTS',
    'CLOSE_ISSUES',
    'CREATE_ATTACHMENTS',
    'CREATE_ISSUES',
    'CREATE_PROJECT',
    'DELETE_ALL_ATTACHMENTS',
    'DELETE_ALL_COMMENTS',
    'DELETE_ALL_WORKLOGS',
    'DELETE_ISSUES',
    'DELETE_OWN_ATTACHMENTS',
    'DELETE_OWN_COMMENTS',
    'DELETE_OWN_WORKLOGS',
    'EDIT_ALL_COMMENTS',
    'EDIT_ALL_WORKLOGS',
    'EDIT_ISSUES',
    'EDIT_OWN_COMMENTS',
    'EDIT_OWN_WORKLOGS',
    'LINK_ISSUES',
    'MANAGE_SPRINTS_PERMISSION',
    'MANAGE_WATCHERS',
    'MODIFY_REPORTER',
    'MOVE_ISSUES',
    'RESOLVE_ISSUES',
    'SCHEDULE_ISSUES',
    'SET_ISSUE_SECURITY',
    'SERVICEDESK_AGENT',
    'TRANSITION_ISSUES',
    'VIEW_DEV_TOOLS',
    'VIEW_READONLY_WORKFLOW',
    'VIEW_VOTERS_AND_WATCHERS',
    'WORK_ON_ISSUES',
] as const;

export type ProjectPermissionKey = typeof projectPermissionKeys[number];

export type PermissionKey = GlobalPermissionKey | ProjectPermissionKey;

export type UserPermissions<TAdditionalPermissionKey extends string = never> = Record<
    PermissionKey | TAdditionalPermissionKey,
    {
        id: string;
        key: PermissionKey | TAdditionalPermissionKey;
        name: string;
        type: PermissionContext;
        description: string;
        havePermission: boolean;
    }
>;
