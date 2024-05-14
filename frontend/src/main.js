import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import {store as userActivitiesStore} from "./store/UserActivities.store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});

console.log("MAIN", userActivitiesStore);

const app = createApp(App); 

app.use(router);
app.use(vuetify)
app.mount("#app")
app.provide('userActivitiesStore',userActivitiesStore) //podłączenie kontekstu
