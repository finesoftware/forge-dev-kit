[![image](../assets/jxl-banner-small.png)](https://jxl.app)

<br><br>

<p align="center">
  <a href="../../README.md">
    <img src="../assets/fdk-logo.svg" width=400 />
  </a>
</p>

<br>

⤴️ [Back to quickstart](.../../README.md)

# Understanding your FDK module

In our [quickstart guide](../../README.md), we've created and successfully deployed our first FDK module - awesome! Let's take a closer look at the structure of this module. As we open the module directory in an IDE, we see something that looks more or less like this:

```
 📦 hello-world
 ├ 📂 pages
 | ├ 📄 _app.tsx
 | ├ 📄 _document.tsx
 | └ 📄 index.tsx
 ├ 📂 src
 | └ 📄 index.tsx
 ├ 📄 babel.config.js
 ├ 📄 next-env.d.ts
 ├ 📄 next.config.js
 ├ 📄 package.json
 └ 📄 tsconfig.json
```

Those who are familiar with [`next.js`](https://nextjs.org/) will quickly recognise the above as a `next.js` application - and that's correct: FDK uses `next.js` under the hood as its application framework. However, as `next.js` is preconfigured to work smoothly with Forge, most of the time, you will not even notice that you're using `next.js`. (In future versions of FDK, we may "hide" `next.js` entirely unless you _want_ to see it.)

In the vast majority of cases, you should really only care about the `src` directory and `src/index.tsx` in particular, as well as `package.json`:

### `src/index.tsx` and `src`

`src/index.tsx` is the main entrypoint to your module: It's default export - which must be a React component that doesn't take any props - is rendered when the Forge app is loaded in the user's browser. From your `src/index.tsx`, you can import from other files within your project, like so:

``` js
import { ActionBar } from './action-bar`;
```

While these _other files_ can live anywhere in your module project **except the `pages` directory** ⚠️ it is strongly encouraged to keep them within `src` or sub-directories of `src`.

### `package.json`

There's [a lot to say](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) about a package's `package.json` - but in the case of FDK, you should really only have to care about your module project's `dependencies`. There are, generally, no restrictions on what libraries you can consume, as long as they are compatible with the basic FDK stack (this being TypeScript, React, Emotion, and Next.js). In particular, you should be able to consume any components from the [Atlassian Design System](https://atlassian.design/components). You can add dependencies as usual, like so:

``` console
yarn add <your dependency>
```

You will typically also want to keep your dependencies up to date - i.e., when a new version of e.g. `@atlaskit/button` is released, you likely want to update your dependency to this latest version. You can either do this manually, or - strongly recommended - using tools like [Renovate](https://github.com/marketplace/renovate). While minor or patch version bumps are usually straightforward, `major` require more care, in particular when they affect the FDK stack, as these bumps may affect the various configuration files that otherwise can be ignored. (FDK may introduce a dedicated CLI option for such platform bumps in the future.)

### All other files

All other files - from the `pages` directory to `tsconfig.json` - are preconfigured to make the FDK stack work smoothly with Atlassian Forge. You shouldn't ever have to change them. If you feel otherwise, familiarise yourself with the underlying technology, and proceed at your own risk.

⏭ Next: [A recommended project structure](./02-recommended-project-structure.md)

<br><br>

[![image](../assets/jxl-banner-large.png)](https://jxl.app)
