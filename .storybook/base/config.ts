const path = require('path');
const _ = require('lodash');

function resolve(...dirs) {
  return path.join(__dirname, '../..', ...dirs);
}

module.exports = {
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // "core": {
  //   "builder": "storybook-builder-vite"
  // },
  webpackFinal: async (config) => {
    const rules = [];
    rules.push({
      test: /\.s(a|c)ss$/,
      include: [resolve('packages')],
      use: ['style-loader', 'css-loader', 'sass-loader'],
    })
    config.module.rules.push(...rules);
    // config.css = {
    //   preprocessorOptions: {
    //     scss: {
    //       javascriptEnabled: true,
    //     },
    //   },
    // }
    return config;
  }
}