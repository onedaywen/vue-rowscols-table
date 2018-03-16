import 'common/js/device_adaptation.js'
import 'babel-polyfill';
import Vue from 'vue';
import router from 'src/router/index.js';
import store from 'src/store/index.js';
import App from 'src/app.vue';
const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});