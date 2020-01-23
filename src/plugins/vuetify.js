import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    dark: true,
    rtl: true,
    themes: {
      light: {
        primary: "#f35b25",
        secondary: "#2a3356",
        accent: "#f35b25",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: "#fdfcfc",
        darkerBackground: "#e8e2e2"
      },
      dark: {
        primary: "#29a19c",
        secondary: "#a3f7bf",
        accent: "#a3f7bf",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: "#393e46",
        darkerBackground: "#222831"
      }
    }
  }
});
