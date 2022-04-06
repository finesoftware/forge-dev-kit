[![image](../assets/jxl-banner-small.png)](https://jxl.app)

<br><br>

<p align="center">
  <a href="../../README.md">
    <img src="../assets/fdk-logo.svg" width=400 />
  </a>
</p>

<br>

⤴️ [Back to quickstart](.../../README.md)

# Recommended project structure

As mentioned in our [quickstart guide](../../README.md), the Forge Dev Kit doesn't _replace_ the standard Forge tooling, but rather _extends_ it by making the development of powerful Custom UI modules easier.

This means that, when using FDK, you typically operate across two or more directories (or "packages", in `node.js` terms):

- Your actual Forge app, and
- one or more FDK modules, which are then being referenced by the Forge app's `manifest.yml`.

In most cases, you will want these two or more directories to live together, within some overarching "project directory". This way, they can live together in source control, have a combined CI/CD process, etc. For example, an FDK-powered Forge application, featuring two FDK powered modules (`overview-page` and `project-page`) could be structured like this:

```
 📂 file-explorer
 ├ 📦 forge-app
 | ├ 📄 manifest.yml
 | └ 📄 package.json
 ├ 📦 overview-page
 | ├ ...
 | ├ 📂 src
 | | ├ ...
 | | └ 📄 index.tsx
 | └ 📄 package.json
 └ 📦 project-page
   ├ ...
   ├ 📂 src
   | ├ ...
   | └ 📄 index.tsx
   └ 📄 package.json
```

## Monorepo architectures

If you prefer to do so, the above can easily be transformed into a [`yarn workspaces`](https://classic.yarnpkg.com/lang/en/docs/workspaces/)-style monorepo, e.g. like this:

```
 📂 file-explorer
 ├ 📂 packages
 | ├ 📦 forge-app
 | ├ 📦 overview-page
 | └ 📦 project-page
 └ 📄 package.json
```

Please note that neither the Forge CLI nor the FDK CLI natively consider monorepo architectures; for both Forge apps and FDK modules, you will have to make manual changes to the respective `package.json` files.


⏮ Previous: [Understanding your FDK module](./01-understanding-your-fdk-module.md)

⏭ Next: [Accessing your module's _context_](./03-accessing-your-modules-context.md)

<br><br>

[![image](../assets/jxl-banner-large.png)](https://jxl.app)
