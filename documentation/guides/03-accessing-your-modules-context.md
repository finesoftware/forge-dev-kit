[![image](../assets/jxl-banner-small.png)](https://jxl.app)

<br><br>

<p align="center">
  <a href="../../README.md">
    <img src="../assets/fdk-logo.svg" width=400 />
  </a>
</p>

<br>

⤴️ [Back to quickstart](.../../README.md)

# Accessing your module's _context_

For almost any app, it is crucial to know the _context_ in which it is used. Who is the active user? What entity is that user working on, while using the app? The exact _kind_ of context, of course, depends on the _kind_ of module we're talking about: A module of type `jira:projectPage` exists _within_ a project, and therefore typically needs to know the project's key or ID. A `jira:issuePanel`, in contrast, will need to know the respective issue's key or ID. A `jira:globalPage`, again, exists independently of any entity - but may still care about who is the active user.

Luckily, Forge provides us with this context, and it is particularly easy to access with the Forge Dev Kit.

In any component of your React app, you can import and use the `useContext` hook from `@finesoftware/react-forge-jira`, like so:

```js
import { useContext } from '@finesoftware/react-forge-jira`;

export default () => {
    const { accountId } = useContext();
    return <span>{accountId}</span>;
}
```

Depending on the type of the module of your React app - i.e., `jira:projectPage`, `jira:issuePanel`, etc. - you can also use more specific hooks, like `useProjectContext`:

```js
import { useProjectContext } from '@finesoftware/react-forge-jira`;

export default () => {
    const { id: projectId, key: projectKey, type: projectType } = useProjectContext();
    return <span>{projectKey}</span>;
}
```

Note that these more specific hooks only work if the React app is used for the "correct" module type. If that is not the case, an error is thrown.

Context values - like, in the above example, the `projectKey` - are available immediately and synchronously. This means that you can use them right away; to render them in your UI, or to fetch whatever app data you are interested in (as discussed in the next section).

⏮ Previous: [Recommended project structure](./02-recommended-project-structure.md)

⏭ Next: [Fetching data from Jira](./04-fetching-data-from-jira.md)

<br><br>

[![image](../assets/jxl-banner-large.png)](https://jxl.app)
