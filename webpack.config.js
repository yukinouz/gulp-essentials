const node_env = process.env.NODE_ENV ? process.env.NODE_ENV : "production";

module.exports = {
  mode: node_env,
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  target: ["web", "es5"],
};
