import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
	// url: window.location.origin,
	url: 'http://localhost:8888/importwheels/',
	consumerKey: 'ck_b9d87285960e2f4c7edba0c030bee82e12272137',
	consumerSecret: 'cs_7797480e3887300d14492f586bf6b5f41674581c',
	version: 'wc/v3',
	// queryStringAuth: false,
});

export default api;