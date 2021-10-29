module.exports = {
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  viteFinal: async (config)=>{
    config.css = {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
        },
      },
    }
    return config;
  }
}