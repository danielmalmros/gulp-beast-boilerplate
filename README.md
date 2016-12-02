Beast Gulp Boilerplate
==========================

Personalized boilerplate based on Harvest...
This boilerplate contains a starting structure for writing ECMAScript 6 applications.

You'll need to have Gulp installed. If you already have Gulp installed, you can skip the following line.
To install gulp simply run the following line in your terminal:
* `npm install -g gulp`

* Run `npm-install.cmd` to install dev dependencies. On mac fire up terminal and type `npm install` use sudo if needed.

During development mode, run the default task so you'll have watchers and browser sync.
* Run `start-beast.cmd` to set fire on this beast!

When project is ready to deploy, simply do the following:
* Run `deploy-beast.cmd`
* All of the files you need will be in /dist with your images optimized, css compressed and js compressed!

Features included
==========================

 * [BrowserSync](https://www.browsersync.io "BrowserSync's Homepage")
 * [CSS - Preprocessor (SASS)](http://sass-lang.com "SASS's Homepage")
 * [PostCSS](http://postcss.org "PostCSS's Homepage")
 * [Lost - Grid framework (based on calc)](https://github.com/peterramsing/lost "Lost's Github")
 * [Autoprefixer](https://github.com/postcss/autoprefixer "Autoprefixer's Github")
 * [Browserify](http://browserify.org/ "Browserify's Homepage")
 * [Babelify](https://github.com/babel/babelify "Babelify's Github")

Update dependencies
==========================

In order to ensure that all dependencies are updated use:

https://www.npmjs.org/package/npm-check-updates

$ `npm install -g npm-check-updates`

$ `npm-check-updates -u`

$ `npm install`

This will automatically adjusts a package.json with the latest version of all dependencies!

Contributing
==========================

Contributions are welcome!
