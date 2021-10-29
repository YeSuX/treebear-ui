const config = require('./base/config');

module.exports = {
  ...config,
  "stories": [
    "../packages/components/**/_story/*.stories.@(ts|tsx)"
  ],
}