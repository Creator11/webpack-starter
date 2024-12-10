<p align="center">
  <img src="https://github.com/Creator11/webpack-starter/raw/main/src/assets/img/logo.jpg" alt="Logo">
</p>

# Webpack Starter
<p align="center">
  <img src="https://img.shields.io/badge/Webpack-5.96.1-blue.svg" alt="Webpack">
  <img src="https://img.shields.io/badge/JavaScript-ESNext-yellow.svg" alt="JavaScript">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  <a href="https://github.com/Creator11/webpack-starter">
    <img src="https://img.shields.io/github/stars/Creator11/webpack-starter?style=social" alt="GitHub Stars">
  </a>
  <a href="https://github.com/Creator11/webpack-starter">
    <img src="https://hits.dwyl.com/Creator11/webpack-starter.svg?style=flat" alt="Repository views">
  </a>
</p>

A starter kit to quickly **set up** your JavaScript project with Webpack.  
This is a configured Webpack build written in TypeScript for React + TypeScript development.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Production Ready**: Minified and optimized builds.
- **Modern JavaScript**: Write ESNext code with Babel.
- **CSS and SCSS Support**: Import and bundle your styles.
- **Development Server**: Live reloading with webpack-dev-server.
- **Code Splitting**: Improve load times with dynamic imports.
 

## Installation
To get started, clone the repository and install the dependencies:
```sh
git clone https://github.com/Creator11/webpack-starter.git
cd webpack-starter
yarn install
```

## Scripts

Start the server to dev mode

```bash
  yarn start
```

Build development or production mode (defoult build run prod mode)

```bash
  yarn build:dev
```

```bash
  yarn build:prod
```
 
Run bundle analyze (defoult run production mode)

```bash
  yarn analyze
```

Run typeScript type check

```bash
  yarn typecheck
```

Run ESLint or scssLint to lint your code.

```bash
  yarn lint:ts
  yarn lint:scss
```

Lint fix

```bash
  yarn lint:ts:fix
  yarn lint:scss:fix
```
 

## Additional Features/Information

- All unused code is removed from the bundle (Tree shaking)
- Progress plugin added to dev build (helps analyze bundle build speed)
- All main filenames in the bundle are hashed for convenience
- No page reload on code changes in dev server
- Source maps are fully hashed in production bundle
- Depending on the build type (production or development), the type of router is chosen: </br> - in production createBrowserRouter  </br> - in development  createHashRouter
- Relative paths @/... are set (all paths are defined in webpack.config.ts in BuildPaths)
- In dev mode, SCSS is not minified, allowing for better debugging
- Source maps allow debugging in the original source code

 Main plugins:  
  1.ForkTsCheckerWebpackPlugin
  2.ReactRefreshWebpackPlugin
  3.WebpackBar 
  4.MiniCssExtractPlugin
  5.BundleAnalyzerPlugin
  

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are always welcome!

<div align="center" >
  <p>Thanks to all contributors of this package</p>
  <a href="https://github.com/Creator11/webpack-starter/">
    <img src="https://contrib.rocks/image?repo=Creator11/webpack-starter" />
  </a>
</div>

## License

This project is licensed under the MIT License - see the LICENSE file for details.
 
