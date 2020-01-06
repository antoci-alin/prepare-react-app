# Quick Overview

Save some time using `prepare-react-project` to clean `create-react-app` default `src` folder configuration and get your react project prepared to development.

## Folder structure

```
src
├── assets
├── components
├── routes
│   └── HomePage.js
├── style
│   ├── components
│   │   └── _components.scss
│   ├── _base.scss
│   └── app.scss
├── utils
├── App.js
└── index.js
```

# Installation

```
npm i -g prepare-react-project
```

`Important note: install this globally`

# User guide

After you installed `prepare-react-project` **globally**, open a terminal widow on your react project folder, where you created it by using `create-react-app` and just use the following command:

```
prepare-react-project
```

Now wait 😄

# Options

-   `--prettier` - add prettier

# What's included?

Running `prepare-react-project` will install `react-router-dom@latest` and \`node-sass@latest`

# License

`prepare-react-project` is open source.

# What's new?

-   `1.2.0` - Prompt to install create-react-app if you don't have it.
-   `1.1.0` - Added Prettier as an option with default rules.
-   `1.0.0` - Initial features.

# What's next on paper?

-   Adding nodejs server option
