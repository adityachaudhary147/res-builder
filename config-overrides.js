const webpack = require("webpack");
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        process: require.resolve("process/browser"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util"),
      buffer: require.resolve("buffer"),
      asset: require.resolve("assert"),
    }
    let load=config.plugins
    load=[
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ]
    return config;
  }

// module.exports = {
//   /* ... */

//   resolve: {
//     fallback: {
//       process: require.resolve("process/browser"),
//       zlib: require.resolve("browserify-zlib"),
//       stream: require.resolve("stream-browserify"),
//       util: require.resolve("util"),
//       buffer: require.resolve("buffer"),
//       asset: require.resolve("assert"),
//     }
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       Buffer: ["buffer", "Buffer"],
//       process: "process/browser",
//     }),
//   ]

//   /* ... */
// }