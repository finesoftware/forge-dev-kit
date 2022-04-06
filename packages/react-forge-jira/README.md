# react-forge-jira

`@finesoftware/react-forge-jira` is a fully typed abstraction around various [Atlassian Forge](https://developer.atlassian.com/platform/forge/) capabilities, for React. It is part of the [Forge Dev Kit](https://fine.software/forge-dev-kit).

## Hook-based Jira API

`@finesoftware/react-forge-jira` provides a [Hook](https://reactjs.org/docs/hooks-intro.html)-based abstraction around [`@finesoftware/forge-jira-api`](https://github.com/finesoftware/forge-dev-kit/tree/master/packages/forge-jira-api). E.g., the issues of fix version `v1` can be loaded like so:

``` js
import { useContext } from '@finesoftware/react-forge-jira`;

export default () => {
    const { data: issues, error } = useIssues({ jql: 'fixVersion = v1' });

    if (!issues) {
        return <span>Loading...</span>;
    }

    return <span>{issues.issues.length} issues found</span>;
}
```

This API is based on [SWR](https://swr.vercel.app/). All [SWR options](https://swr.vercel.app/docs/options) (except for `fetcher`) can be passed as an optional second argument, e.g. like so:

``` js
useIssues({ jql: 'fixVersion = v1' }, { shouldRetryOnError: false  });
```

In addition to the standard SWR options, a `skip` flag can be provided to enable [conditional fetching](https://swr.vercel.app/docs/conditional-fetching).

``` js
useIssues({ jql: 'fixVersion = v1' }, { skip: true  });
```

Please refer to the [SWR documentation](https://swr.vercel.app) for the full API reference and usage patterns.

The following requests are current available:

- `useBulkPermissions` (based on `getBulkPermissions`)
- `useConfiguration` (based on `getConfiguration`)
- `useCreateIssueMetadata` (based on `getCreateIssueMetadata`)
- `useFields` (based on `getFields`)
- `useGroups` (based on `findGroups`)
- `useGroupsInBulk` (based on `getGroupsInBulk`)
- `useIssue` (based on `getIssue`)
- `useIssueLink` (based on `getIssueLink`)
- `useIssueLinkType` (based on `getIssueLinkType`)
- `useIssueLinkTypes` (based on `getIssueLinkTypes`)
- `useIssueProperty` (based on `getIssueProperty`)
- `useIssues` (based on `searchIssues`)
- `useIssueTypes` (based on `getIssueTypes`)
- `useMyPermissions` (based on `getMyPermissions`)
- `usePriorities` (based on `getPriorities`)
- `usePriority` (based on `getPriority`)
- `useProject` (based on `getProject`)
- `useProjectComponents` (based on `getProjectComponents`)
- `useProjectProperties` (based on `getProjectProperties`)
- `useProjectProperty` (based on `getProjectProperty`)
- `useProjects` (based on `findProjects`)
- `useProjectVersions` (based on `getProjectVersions`)
- `useTransitions` (based on `getTransitions`)
- `useUser` (based on `getUser`)
- `useUserProperties` (based on `getUserProperties`)
- `useUserProperty` (based on `getUserProperty`)
- `useUsers` (based on `findUsers`)
- `useUsersAndGroups` (based on `findUsersAndGroups`)
- `useUsersAssignableToIssues` (based on `findUsersAssignableToIssue`)

The above list of requests is not complete, however more requests will be added in the future. If you require additional requests (or find a bug), please raise an issue against the [Forge Dev Kit](https://fine.software/forge-dev-kit).
