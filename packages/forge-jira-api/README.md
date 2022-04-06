# Forge Jira API

`@finesoftware/forge-jira-api` is a fully typed abstraction around [Jira's REST API v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/), for [Atlassian Forge](https://developer.atlassian.com/platform/forge/). It is part of the [Forge Dev Kit](https://fine.software/forge-dev-kit).

## API reference

The following requests are currently available:

- [`addComment`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-post)
- [`createIssue`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post)
- [`createIssueLink`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-post)
- [`createIssueLinkType`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-post)
- [`deleteComment`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-id-delete)
- [`deleteIssue`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-delete)
- [`deleteIssueLink`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-linkid-delete)
- [`deleteIssueLinkType`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-issuelinktypeid-delete)
- [`deleteIssueProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-propertykey-delete)
- [`deleteProjectProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-properties/#api-rest-api-3-project-projectidorkey-properties-propertykey-delete)
- [`deleteUserProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-properties/#api-rest-api-3-user-properties-propertykey-delete)
- [`editIssue`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-put)
- [`findGroups`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-groups-picker-get)
- [`findProjects`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-search-get)
- [`findUsers`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-search/#api-rest-api-3-user-search-get)
- [`findUsersAndGroups`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-group-and-user-picker/#api-rest-api-3-groupuserpicker-get)
- [`findUsersAssignableToIssue`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-search/#api-rest-api-3-user-assignable-search-get)
- [`getBulkPermissions`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permissions/#api-rest-api-3-permissions-check-post)
- [`getConfiguration`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-jira-settings/#api-rest-api-3-configuration-get)
- [`getCreateIssueMetadata`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-createmeta-get)
- [`getFields`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-fields/#api-rest-api-3-field-get)
- [`getGroupsInBulk`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-group-bulk-get)
- [`getIssue`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get)
- [`getIssueLink`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-links/#api-rest-api-3-issuelink-linkid-get)
- [`getIssueLinkType`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-issuelinktypeid-get)
- [`getIssueLinkTypes`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-get)
- [`getIssueProperties`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-get)
- [`getIssueProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-propertykey-get)
- [`getIssueTypes`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-types/#api-rest-api-3-issuetype-get)
- [`getMyPermissions`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permissions/#api-rest-api-3-mypermissions-get)
- [`getPriorities`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-priorities/#api-rest-api-3-priority-get)
- [`getPriority`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-priorities/#api-rest-api-3-priority-id-get)
- [`getProject`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-projectidorkey-get)
- [`getProjectComponents`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-project-projectidorkey-component-get)
- [`getProjectProperties`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-properties/#api-rest-api-3-project-projectidorkey-properties-get)
- [`getProjectProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-properties/#api-rest-api-3-project-projectidorkey-properties-propertykey-get)
- [`getProjectVersions`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-project-projectidorkey-version-get)
- [`getTransitions`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-get)
- [`getUser`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-users/#api-rest-api-3-user-get)
- [`getUserProperties`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-properties/#api-rest-api-3-user-properties-get)
- [`getUserProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-properties/#api-rest-api-3-user-properties-propertykey-get)
- [`getUsersFromGroup`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-group-member-get)
- [`searchIssues`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-post)
- [`setIssueProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-propertykey-put)
- [`setPropertyProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-properties/#api-rest-api-3-project-projectidorkey-properties-propertykey-put)
- [`setUserProperty`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-properties/#api-rest-api-3-user-properties-propertykey-put)
- [`transitionIssue`](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-transitions-post)

The exact signatures of these calls generally follow the REST API; however, in some cases, a slightly different (typically more consistent) API may be offered. In doubt, please refer to the respective type information.

The above list of requests is not complete, however more requests will be added in the future. If you require additional requests or type definitions (or find a bug), please raise an issue against the [Forge Dev Kit](https://fine.software/forge-dev-kit).
