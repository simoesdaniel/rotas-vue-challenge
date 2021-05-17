import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import BaseDialog from "./components/base/BaseDialog";
import BaseDisplayOptions from "./components/base/BaseDisplayOptions";
import BaseBottomSheet from "./components/base/BaseBottomSheet";
import BaseReadOnlyInput from "./components/base/BaseReadOnlyInput";
import BaseTabSections from "./components/base/BaseTabSections";
import BaseFloatingButton from "./components/base/BaseFloatingButton";

Vue.config.productionTip = false;
Vue.component("base-dialog", BaseDialog);
Vue.component("base-display-options", BaseDisplayOptions);
Vue.component("base-bottom-sheet", BaseBottomSheet);
Vue.component("base-read-only-input", BaseReadOnlyInput);
Vue.component("base-tab-sections", BaseTabSections);
Vue.component("base-floating-button", BaseFloatingButton);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
