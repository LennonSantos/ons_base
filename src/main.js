import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './assets/css/app.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import Navigator from './Navigator.vue';
import store from './store';

Vue.use(VueOnsen);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Navigator)
}).$mount('#app')
