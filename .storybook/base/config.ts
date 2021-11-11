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
    console.log('config', config);

    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack"],
    // })

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   loader: 'svgo-loader',
    //   exclude: /^node_modules$/,
    //   include: [path.resolve(__dirname, '../../packages/components/icon/svgs')],
    // })

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      exclude: /^node_modules$/,
      include: [path.resolve(__dirname, '../../packages/components/icon/svgs')],
      options: {
        symbolId: 'sx-icon-[name]',
        extract: false
      }
    })

    const rules = [];
    rules.push({
      test: /\.s(a|c)ss$/,
      include: [resolve('packages')],
      use: ['style-loader', 'css-loader', 'sass-loader'],
    })

    config.module.rules.push(...rules);
    return config;
  }
}