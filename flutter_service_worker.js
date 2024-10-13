'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6caef144d5925581bffa05809b0953c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/04/a02c44c9c0ffecf12ff87efb301e9b688112df": "25f06e4b3674d21683185b06cdd76c01",
".git/objects/06/668db53e64641abdf9b02ac207d531177f6ab8": "ccca7b09a7f89ab36489477b33a3b5a6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/0e/17d02c852b9bcd34e699734b964a588e0b663e": "75a322e9ca29f8b70bc309635ce34ea4",
".git/objects/15/75d33a63218d6c11255688b909d1543b70256e": "c620f3f8f3c9e0934f8ac1219a37b962",
".git/objects/1b/ede3fb92eada34c745bce5f65373701f7ef238": "e8d4b5b7ddae88677a8f927a3a6fb002",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/94c03a7af4fbb2731e2cbc13e45b2cee1907c5": "77802fa1c8588975468b5285b8912c64",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/a9d6943ad034814a3a9d4c6106aed8eb06240f": "9ee9bb31821dc286ce3927ea4f255377",
".git/objects/28/e4af6fe478a95d0a26d87e66dc9260d6803f73": "2ed44abf6f72e8f3f0c936ee4f2ffce2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/42/034f951888b2b1493f60e244996b0b62333fa7": "710ca9a8d4a4b6439191cb51ced86991",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/baab3137c025634bdad3264f77f84a7d0a15b1": "a9381f5cf6fb706b9ea54d20b7269f51",
".git/objects/59/c3564f64c98191d585aff5f3e948221440fb5e": "7e63f5a8c00ab6105c61514d5c4589aa",
".git/objects/62/9b1e34492e3a5eeedcbc418ec359756406437c": "53aaa165b20aad3a8b324f4aceb72ec7",
".git/objects/68/c5528a22bf2f5edd1f00733ea8b8360cd13d5d": "4fdcb9fdec4f228da350be58a57ad6b8",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/c3745804d0e17a1480d0732fd386013f683246": "415b3881b23fbc685f931da667d46be7",
".git/objects/72/7675dfce0c427aed849b011b959d54304b9f57": "0ec2d1caa46f30fbccad61b0aea6bdc4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/6242debdf0f06e0f3a4843e34f794ee78cefc6": "b93dbcee4e90aeb676e56f1fea54532b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a1/46710855a27dd4c24a6e42e859ce000f76f5f9": "e81b6c3e4d87ea3f803602786155b8c8",
".git/objects/ac/724b513486e7fed7dcbcf653afef0640b755c7": "b097c7ad0f89cb019fb311cc1cf4e0d3",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/3f875c62917bc9b5fbf56d971c80b61372a19e": "4358f49c6d09fba21afc89280680bd46",
".git/objects/c4/a863378e263fe2672fa5bbe6e9950ebe69071a": "9debf8546782681b12bf18469dbbcd18",
".git/objects/c8/8864d10ed464c5b7cc1eec8c171309650f93fb": "b315f7dab0b26a3127fd58127ad4a924",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/4f57c85ed1501da50ee75ef68c69a3eb2f5cf6": "6db22ae7c1d66caad3a0385691595116",
".git/objects/dd/0e75d8169e727fda0bcefb01912498a7c99624": "4db6db1690a806eb5c04c0fbffa0185a",
".git/objects/dd/545bb9ede69d188e2217a124f8b77103bf534b": "b530b85ba06b151851a4419aaa499a80",
".git/objects/dd/bab216f43557b3356eae2c7bf99219f5635177": "28cb3cf271bc14782c3c536f35298141",
".git/objects/e9/eb76eef63812fd1ae1654f870b12bc7e3f49a4": "f5718463e62e29aba882cd1033cad4ea",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b2d8d579a856006efe6479f8bedb7040a4a222": "c620c906cf3cddfd5a1fab09dcd58c48",
".git/objects/ed/3f90e23932adcbd79f4672e5e5ecab4c602b44": "ac40181589324db56534d7e997c9fdc9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"assets/AssetManifest.bin": "e482f9dd936c589ed95b690b8e733f1d",
"assets/AssetManifest.bin.json": "26c19056ee86b569e36dba4067129186",
"assets/AssetManifest.json": "6f7075fad05d9f028131f8d0559d358c",
"assets/assets/10.jpg": "fe33be8c2ecd86b13ba675304281b6b2",
"assets/assets/11.jpg": "8b7c19705069b59156d5fa34c715b066",
"assets/assets/12.jpg": "a668d01e5e0611c1f66813e70ca9d781",
"assets/assets/13.jpg": "89e8cdc8e097a3bf42653fddfca7a335",
"assets/assets/14.png": "1c18549436c6fc53aef5b74b2ee3327e",
"assets/assets/2.jpg": "756c80ddee895180c2e6839340352ced",
"assets/assets/3.jpg": "fbf57a38a9b6ca5ac19c4667fcfe3eea",
"assets/assets/4.jpg": "97af19c301a60f6b64224c1722ddccf1",
"assets/assets/5.jpg": "379d076d46294265ee33d023dd174d2d",
"assets/assets/6.jpg": "b4efc3f6546d83985146b5d9d41c5816",
"assets/assets/7.png": "3ef881dc4d8a1dd9d2dfdce66f69b920",
"assets/assets/8.jpg": "48b050f626ef93e75eae5f52e6933803",
"assets/assets/9.jpg": "d5e8ebde004de62a4bf407c89ecf6006",
"assets/assets/kalender.jpg": "c613a61a0be0bd4b37010de445870199",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cffde137a88232c667fa0c61a2a745bf",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3cffdab3b91842556959461bad381608",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7e7d2bab527e47eef84ac8e313731ea9",
"/": "7e7d2bab527e47eef84ac8e313731ea9",
"main.dart.js": "dab2cf1a0cc81c325642a5311f5c4060",
"manifest.json": "8235bc01200fc39aae6763ab7a981617",
"version.json": "52fa384781452460c9124696e15d0de7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
