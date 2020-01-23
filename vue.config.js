module.exports = {
  publicPath: process.env.NODE_ENV == "production" ? "/euro-aion/" : "/",
  transpileDependencies: ["vuetify", "vuex-presist"],
  configureWebpack: {
    devtool: "source-map"
  },
  pluginOptions: {
    i18n: {
      locale: "ar",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  }
};
