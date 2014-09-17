#Famous-Slideshow-Webpack
> A demo slideshow with Webpack and Famo.us. 

###Features

* This is the original slideshow from Famo.us wrapped in Webpack
* Built using the [famous-webpack-seed](https://github.com/talves/famous-webpack-seed)

---

### Getting started with Famo.us and webpack

####Installation

```bash
npm install -g webpack webpack-dev-server # install webpack
git clone https://github.com/talves/famous-slideshow-webpack # clone this repository
# rm -rf .git # optionally remove git history
npm install # install dependencies
```

####Development

```bash
webpack-dev-server --reload=localhost
```

Now navigate to:

* [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html) (uses index.html)
* [http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server) (list the bundle)


####Production
```bash
webpack --minify --env=production
```
puts the build into the dist folder

* The optional `--minify` flag minifies the output.
* The optional `--env=xxx` flag sets a global `ENV` variable (default: `window.TARGET='dev'`).

## Contributors

Like it? Show some love and star this project!
