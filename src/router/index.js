import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Array to populate
let routes = [];

// Loop routes
for (let key in WP.routes) {
	let route = WP.routes[key];

	routes.push({
		path: WP.base_path + route.slug,
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


/**
 * Helper to capitalize based on string
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */

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