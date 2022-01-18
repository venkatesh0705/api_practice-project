import { createApp } from "vue";
import App from "./App.vue";
import Store from "./store/index";
import PrimeVue from "primevue/config";

//primevue css
import "primeflex/primeflex.css"; //flex css
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons css

const app = createApp(App);
app.use(Store);
app.use(PrimeVue);
app.mount("#app");
