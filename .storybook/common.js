const path = require('path');
const _ = require('lodash');

function resolve(...dirs) {
  return path.join(__dirname, '..', ...dirs);
}

module.exports = {
  webpackFinal: async (config) => {

    //禁用storybook svg loader
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    //引入svg-sprite-loader
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      exclude: /^node_modules$/,
      include: [path.resolve(__dirname, '../packages/components/icon/svgs')],
      options: {
        symbolId: 'sx-icon-[name]',
        extract: false
      }
    })

    //引入scss
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