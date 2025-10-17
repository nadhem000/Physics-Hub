// Service Worker for Physics Hub PWA
const CACHE_NAME = 'physics-hub-v1.0.0';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately on install
const STATIC_ASSETS = [
	'/',
	'/index.html',
	'/calculators.html',
	'/calculator1.html',
	'/styles/main.css',
	'/styles/dashboard.css',
	'/styles/calculators.css',
	'/styles/calculator1.css',
	'/scripts/main.js',
	'/scripts/translations.js',
	'/scripts/components.js',
	'/scripts/dashboard.js',
	'/scripts/calculators.js',
	'/scripts/calculator1.js',
	'/scripts/pwa.js',
	'/assets/images/logos/logo1-640×640.jpg',
	'/assets/images/logos/logo2-640×640.jpg',
	'/assets/icons/icon-64x64.png',
	'/assets/icons/icon-144x144.png',
	'/assets/icons/icon-192x192.png',
	'/assets/icons/icon-512x512.png',
	'/assets/images/screenshots/periodic-table-screenshot.png',
	'/assets/images/screenshots/calculator-screenshot.png',
	'/manifest.json',
	'/version.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
	console.log('Service Worker: Installing...');
	
	event.waitUntil(
		caches.open(STATIC_CACHE)
		.then((cache) => {
			console.log('Service Worker: Caching static assets');
			return cache.addAll(STATIC_ASSETS);
		})
		.then(() => {
			console.log('Service Worker: Install completed');
			return self.skipWaiting();
		})
		.catch((error) => {
			console.error('Service Worker: Installation failed', error);
		})
	);
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
	console.log('Service Worker: Activating...');
	
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== STATIC_CACHE && cache !== DYNAMIC_CACHE) {
						console.log('Service Worker: Deleting old cache', cache);
						return caches.delete(cache);
					}
				})
			);
		})
		.then(() => {
			console.log('Service Worker: Activate completed');
			return self.clients.claim();
		})
	);
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
	// Skip non-GET requests
	if (event.request.method !== 'GET') return;
	
	// Skip Chrome extensions
	if (event.request.url.startsWith('chrome-extension://')) return;
	
	event.respondWith(
		caches.match(event.request)
		.then((response) => {
			// Return cached version if found
			if (response) {
				return response;
			}
			
			// Clone the request because it's a one-time use stream
			const fetchRequest = event.request.clone();
			
			return fetch(fetchRequest)
			.then((response) => {
				// Check if we received a valid response
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}
				
				// Clone the response because it's a one-time use stream
				const responseToCache = response.clone();
				
				// Cache the new response for future requests
				caches.open(DYNAMIC_CACHE)
				.then((cache) => {
					cache.put(event.request, responseToCache);
				});
				
				return response;
			})
			.catch((error) => {
				console.error('Service Worker: Fetch failed', error);
				
				// For HTML pages, return offline page
				if (event.request.headers.get('accept').includes('text/html')) {
					return caches.match('/index.html');
				}
				
				// You could return a custom offline page here
				return new Response('Network error happened', {
					status: 408,
					headers: { 'Content-Type': 'text/plain' }
				});
			});
		})
	);
});

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
	if (event.tag === 'background-sync') {
		console.log('Service Worker: Background sync triggered');
		// You can implement background sync logic here
	}
});

// Push notification event
self.addEventListener('push', (event) => {
	if (!event.data) return;
	
	const data = event.data.json();
	const options = {
		body: data.body || 'Physics Hub Notification',
		icon: 'assets/icons/icon-64x64.png',
		badge: 'assets/icons/icon-144x144.png',
		vibrate: [100, 50, 100],
		data: {
			url: data.url || '/'
		},
		actions: [
			{
				action: 'open',
				title: 'Open App'
			},
			{
				action: 'close',
				title: 'Close'
			}
		]
	};
	
	event.waitUntil(
		self.registration.showNotification(data.title || 'Physics Hub', options)
	);
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
	event.notification.close();
	
	if (event.action === 'open') {
		event.waitUntil(
			clients.matchAll({ type: 'window' }).then((clientList) => {
				for (const client of clientList) {
					if (client.url === '/' && 'focus' in client) {
						return client.focus();
					}
				}
				if (clients.openWindow) {
					return clients.openWindow('/');
				}
			})
		);
	}
});