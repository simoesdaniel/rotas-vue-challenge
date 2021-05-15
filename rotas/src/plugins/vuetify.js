import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue,
        secondary: colors.grey.darken1,
        defaultText: colors.grey.darken3,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.indigo.lighten5,
        morning: colors.yellow.lighten2,
        afternoon: colors.orange.lighten1,
      },
      dark: {
        primary: colors.blue.lighten3,
        background: colors.indigo.base,
      },
    },
  },
});
// this.$vuetify.theme.dark
