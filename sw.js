importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.3.js');

const staticAssets = [
	'./',
	'/vendor/plugins/datatables/media/js/dataTables.bootstrap.js',
	'/vendor/plugins/datatables/extensions/ColReorder/js/dataTables.colReorder.min.js',
	'/vendor/plugins/datatables/extensions/TableTools/js/dataTables.tableTools.min.js',
	'/assets/js/demo/demo.js',
	'/vendor/jquery/jquery-1.11.1.min.js',
	'/vendor/jquery/jquery_ui/jquery-ui.min.js',
	'/vendor/plugins/datatables/media/js/jquery.dataTables.js',
	'/assets/js/main.js',
	'/vendor/plugins/pnotify/pnotify.js',
	'/assets/js/utility/utility.js',
	'/vendor/plugins/datatables/media/css/dataTables.bootstrap.css',
	'/vendor/plugins/datatables/media/css/dataTables.plugins.css',
	'/assets/skin/default_skin/css/theme.css',
	'./styles.css',
	'./app.js',
	'./fallback.json'
];

//

const wb = new WorkboxSW();

wb.precache(staticAssets);

wb.router.registerRoute('https://www.easy-mock.com/(.*)', wb.strategies.networkFirst());
wb.router.registerRoute(/.*\.(png|jpg|jpeg|gif)/, wb.strategies.cacheFirst({
	cacheName: 'news-images',
	cacheExpiration: {
		maxEntries: 2,
		maxAgeSeconds: 7 * 24 * 60 * 60,
	},
	cacheableResponse: {
		statuses: [0, 200]
	},
}));