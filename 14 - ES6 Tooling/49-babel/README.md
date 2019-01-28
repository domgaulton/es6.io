# Babel Setup

* `npm init`
* `npm install babel-cli babel-preset-es2015 --save` // cli: command line edits (scripts in package) && preset-es2016 is babel plugin
* Add script // run it against app.js and watch for changes and output it to app-complied.js
```json
  "babel": "babel app.js --watch --out-file app-compiled.js"
```
* Can add `.babelrc` file to root or add it to package.json
```json
  "babel": {
    "presets": ["es2015"]
  },
```
* `npm run babel`