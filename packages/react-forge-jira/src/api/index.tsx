import {
    findGroups,
    findProjects,
    findUsers,
    findUsersAndGroups,
    findUsersAssignableToIssue,
    getBulkPermissions,
    getConfiguration,
    getCreateIssueMetadata,
    getFields,
    getGroupsInBulk,
    getIssue,
    getIssueLink,
    getIssueLinkType,
    getIssueLinkTypes,
    getIssueProperty,
    getIssueTypes,
    getMyPermissions,
    getPriorities,
    getPriority,
    getProject,
    getProjectComponents,
    getProjectProperties,
    getProjectProperty,
    getProjectVersions,
    getTransitions,
    getUser,
    getUserProperties,
    getUserProperty,
    searchIssues,
} from '@finesoftware/forge-jira-api';
import { toSWRHook } from '@finesoftware/swr-utils';

export const useBulkPermissions = toSWRHook(getBulkPermissions);
export const useConfiguration = toSWRHook(getConfiguration);
export const useCreateIssueMetadata = toSWRHook(getCreateIssueMetadata);
export const useFields = toSWRHook(getFields);
export const useGroups = toSWRHook(findGroups);
export const useGroupsInBulk = toSWRHook(getGroupsInBulk);
export const useIssue = toSWRHook(getIssue);
export const useIssueLink = toSWRHook(getIssueLink);
export const useIssueLinkType = toSWRHook(getIssueLinkType);
export const useIssueLinkTypes = toSWRHook(getIssueLinkTypes);
export const useIssueProperty = toSWRHook(getIssueProperty);
export const useIssues = toSWRHook(searchIssues);
export const useIssueTypes = toSWRHook(getIssueTypes);
export const useMyPermissions = toSWRHook(getMyPermissions);
export const usePriorities = toSWRHook(getPriorities);
export const usePriority = toSWRHook(getPriority);
export const useProject = toSWRHook(getProject);
export const useProjectComponents = toSWRHook(getProjectComponents);
export const useProjectProperties = toSWRHook(getProjectProperties);
export const useProjectProperty = toSWRHook(getProjectProperty);
export const useProjects = toSWRHook(findProjects);
export const useProjectVersions = toSWRHook(getProjectVersions);
export const useTransitions = toSWRHook(getTransitions);
export const useUser = toSWRHook(getUser);
export const useUserProperties = toSWRHook(getUserProperties);
export const useUserProperty = toSWRHook(getUserProperty);
export const useUsers = toSWRHook(findUsers);
export const useUsersAndGroups = toSWRHook(findUsersAndGroups);
export const useUsersAssignableToIssues = toSWRHook(findUsersAssignableToIssue);
