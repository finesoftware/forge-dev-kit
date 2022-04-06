import type { Group } from '../groups';
import type { ProjectBasics } from '../projects';
import type { User } from '../users';

type FilterGlobalPermission = {
    type: 'global';
    id: number;
};

type FilterProjectPermissions = {
    type: 'project';
    id: number;
    project: ProjectBasics;
};

type FilterGroupPermission = {
    type: 'group';
    id: number;
    group: Group;
};

type FilterPermission = FilterGlobalPermission | FilterProjectPermissions | FilterGroupPermission;

export type Filter = {
    id: string; // e.g. '10000';
    name: string; // e.g. 'All Open Bugs';
    description: string; // e.g. 'Lists all open bugs';
    owner: User;
    jql: string; // e.g. 'type = Bug and resolution is empty';
    viewUrl: string; // e.g. 'https://your-domain.atlassian.net/issues/?filter=10000';
    searchUrl: string; // e.g. 'https://your-domain.atlassian.net/rest/api/3/search?jql=type%20%3D%20Bug%20and%20resolutino%20is%20empty';
    favourite: boolean;
    favouritedCount: number;
    sharePermissions: FilterPermission[];
    editPermissions: FilterPermission[];
    // TODO:
    // subscriptions: [];
};
