# Eat Me

1. Create `app.js` with entry points
2. `npm init` creates package.json (`npm install` reads dependencies and creates app from package.json file)
3. Install packages; 
* `npm install slug -- save` // URL friendly slugs 
* `npm install loadash flickity --save` // Multiple packages at same time
* `npm install insane jquery --save` // HTML sanitiser and jquery
* `npm install jsonp --save` // JSON API needs this
4. Go to `app.js` and import named exports
5. Create `index.html` and reference a `bundle.js` as browsers can't yet read ES6
6. `npm install webpack --save-dev` Saved to development so that we can create the `bundle.js` file above
7. Install babel to convert to ES5 `npm install babel-loader babel-core babel-preset-es2015-native-modules --save-dev`
8. Create webpack config file `touch webpack.config.js` 
```js
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production'; // Production environment

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js' // where to load app from?
  },
  output: {
    filename: '_build/bundle.js' // where to bundle app js?
  },
  module: {
    loaders: [ // How should I handle specific types of files?
      {
        test: /\.js$/, // Test all js files and run the following
        exclude: /node_modules/,
        loader: 'babel-loader', // Load it through and convert
        query: { // Set some presets with javascript
          presets: ['es2015-native-modules']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ // Compress javascript
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({ // Set the environment
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};
```
9. Create build script in package.json

```json
"build": "webpack --progress --watch"
```
10. `npm run build` runs the script above