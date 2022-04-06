[![image](../assets/jxl-banner-small.png)](https://jxl.app)

<br><br>

<p align="center">
  <a href="../../README.md">
    <img src="../assets/fdk-logo.svg" width=400 />
  </a>
</p>

<br>

⤴️ [Back to quickstart](.../../README.md)

# Navigating in Jira

For security reasons, Forge apps need to invoke a dedicated API to navigate to pages within or outside their host application. FDK provides two React-based abstractions around this API, through an `a`-tag-based `Link` component and an `@atlaskit/button`-based `LinkButton` component:

## `Link`

```js
    import type { Issue } from '@finesoftware/jira-forge-api';
    import { Link } from '@finesoftware/react-forge';

    export const IssueCard = ({ issue }: { issue: Issue }) => (
        <Link href={`/browse/${issue.key}`} target="_blank" appearance="plain">
            <div>
                <h3>{issue.key}</h3>
                <p>{issue.fields?.summary ?? 'n/a'}</p>
            </div>
        </Link>
    );
```

By default, the `Link` component is rendered as a simple, natively-styled `a` tag. If any native styling should be removed, a `appearance="plain"` property can be passed. In any case, the `Link` component can be further styled via Emotion's `css` property.

## `LinkButton`

```js
    import { LinkButton } from '@finesoftware/react-forge';

    export const View = ({ issue }: { issue: Issue }) => (
        <LinkButton appearance="primary" href="https://jxl.app">
            Try JXL for Jira
        </LinkButton>
    );
```

`LinkButton` accepts all properties of `@atlaskit/button/standard-button` (except `onClick`), however the `href` property is required.

⏮ Previous: [Updating data in Jira](./05-updating-data-in-jira.md)

<br><br>

[![image](../assets/jxl-banner-large.png)](https://jxl.app)
