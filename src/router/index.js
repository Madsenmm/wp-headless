import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [];

for (let key in wp.routes) {
	let route = wp.routes[key];

	routes.push({
		path: wp.base_path + route.slug,
		name: route.name,
		component: require('@/components/' + capitalize(route.type)).default,
		meta: {
			title: route.name,
			id: route.id,
			// metaTags: [
			// 	{
			// 		name: 'description',
			// 		content: route.type,
			// 	},
			// 	{
	  //         property: 'og:description',
	  //         content: route.name,
	  //       }
			// ],
		}
	});
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default new Router({
	hashbang: false,
	mode: 'history',
	routes: routes,
	linkActiveClass: '',
	linkExactActiveClass: 'is-active',
});