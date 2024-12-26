import { createApp }  from "vue";
import App from './App.vue'
import Header from "./components/header_footer/Header.vue";
import { awesome } from "./components/Directives/awesome";

const app = createApp(App);

app.directive('awesome', awesome)
app.component('app-header', Header);
app.mount('#app')
