import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app
  .use(VueAxios, axios)
  .provide("axios", app.config.globalProperties.axios)
  .use(vuetify)
  .use(router)
  .mount("#app");
