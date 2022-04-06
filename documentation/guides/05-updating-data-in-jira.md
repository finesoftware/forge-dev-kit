[![image](../assets/jxl-banner-small.png)](https://jxl.app)

<br><br>

<p align="center">
  <a href="../../README.md">
    <img src="../assets/fdk-logo.svg" width=400 />
  </a>
</p>

<br>

⤴️ [Back to quickstart](.../../README.md)

# Updating data in Jira

In the [previous section](./04-fetching-data-from-jira.md), we've discussed fetching data from Jira either via a hook-based or a promise-based API. The promise-based API - `@finesoftware/forge-jira-api` - can also be used to update or create data in Jira.

 E.g., you can create a new issue like so:

``` js
import { useState } from 'react';
import Button from '@atlaskit/button/standard-button';
import { createIssue } from '@finesoftware/forge-jira-api';

export default () => {
    const [issueKey, setIssueKey] = useState<string | undefined>(undefined)

    const { key: projectKey } = useProjectContext();
    const handleClick = async () => {
        const { key: issueKey } = await createIssue({
            projectKeyOrId: projectKey,
            issueTypeId: '10000',
            fields: {
                summary: 'New issue'
            }
        });
        setState(issueKey);
    }

    if (issueKey) {
        return <span>Issue {issueKey} created!</span>;
    }

    return <Button onClick={handleClick}>Create issue</Button>;
}
```

:warning: FDK's Jira APIs are not complete, however more requests will be added in the future. If you require additional requests or type definitions (or find a bug), please [raise an issue](https://github.com/finesoftware/forge-dev-kit/issues). For an API reference, please refer to [`@finesoftware/forge-jira-api`](../../packages/forge-jira-api/README.md).

⏮ Previous: [Fetching data from Jira](./04-fetching-data-from-jira.md)

⏭ Next: [Navigating in Jira](./06-navigating-in-jira.md)

<br><br>

[![image](../assets/jxl-banner-large.png)](https://jxl.app)
