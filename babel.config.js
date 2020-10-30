module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    "@babel/preset-flow",
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "8.10"
        },
        "corejs": "2", // <---
        "useBuiltIns": "entry"
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    "@babel/plugin-transform-typescript",
    ["import", {
      "libraryName": "iview",
      "libraryDirectory": "server/components"
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime"
  ]
}
