import "./assets/main.css";

import { createApp, watch } from "vue";
import { createPinia } from "pinia";

import { useFirestoreStore } from "@/stores/fireStoreDB";

import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiArrowLeft } from "oh-vue-icons/icons";

addIcons(BiArrowLeft);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
