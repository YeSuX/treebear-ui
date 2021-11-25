const config = require('./common');

module.exports = {
  ...config,
  "stories": [
    "../packages/components/**/_story/*.stories.mdx",
    "../packages/components/**/_story/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}