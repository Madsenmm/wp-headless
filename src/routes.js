import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Register all base templates
// let page = require('./components/Page.vue');
// let Page = require('./components/page.vue');
// Vue.component('Page', Page)

let routes = [];

for (let key in wp.routes) {
	let route = wp.routes[key];

	routes.push({
		path: wp.base_path + route.slug,
		name: route.name,
		//component: () => '@/components/' + capitalize(route.type)
	});
}

// function capitalie = (string) => string.charAt(0).toUpperCase() + string.slice(1);
function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default new VueRouter({
	hashbang: false,
	mode: 'history',
	routes: routes,
	linkActiveClass: '',
	linkExactActiveClass: 'is-active',
});