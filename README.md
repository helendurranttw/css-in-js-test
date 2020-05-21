# CSS in JS Test

This is a simple test demonstrating some components using Emotion.

# Requirements

- Tree-shaking: the consuming library should be able to import only what it needs
- Scoped CSS: there must be a way to scope CSS per component
- Global CSS: there must be a way to use global CSS, alongside scoped CSS
- No CSS imports on Components: Components cannot import CSS files (CSS modules are ok)<sup>\*</sup>
- Shared styles: there must be a way to share CSS across components without duplicating the CSS

<sup>\*</sup> Because we're not sure what order components will be loaded in, unscoped CSS is dangerous to import in an unspecified order. CSS imports will error in the latest version of Next.

# How well did we do?

TODO

# To use

This package isn't published, so clone the repo, build, and link it for use in your project:

```
git clone https://github.com/helendurranttw/css-in-js-test.git
cd css-in-js-test
yarn
yarn build
yarn link
```

In your project, add the following to your dependencies in `package.json`:

`"css-in-js-test": "0.0.1"`

Then run:

`yarn link css-in-js-test`

And you should be good to go. If you run `yarn install` on your repository, the linked pacakage may appear to fail to install, but when you run it should work.

To use a component:

```
import Alert from "css-in-js-test/build/alert/alert";

// ....

  <Alert dismissible={true} size="sm" special={true} type="success" onDismiss={() => alert('dismissed')}>
      <p>Everything went well and life is amazing.</p>
  </Alert>
```
