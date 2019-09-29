import Vue from 'vue';
import axios from 'axios';
import App from './App';

import router from './router';
import meta from './router/metaguard';

import WC from './config/woocommerce.config';

Vue.prototype.$WC = WC;

Vue.config.productionTip = false
Vue.config.silent = true

Vue.prototype.$http = axios;

// Vue.prototype.$http = (name, args) => {

// 	this.protoype.get = function(name) {
// 		fetch(wp.root + 'wp-json/v2/' + name).then(function(response) {
// 			return response.json();
// 		}).then(function(json) {
// 			console.log(json);
// 		})
// 	}
// }

new Vue({
	el: '#app',
	router,
	render: h => h(App),
})