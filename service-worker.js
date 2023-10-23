/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a1acd88668edb621794addc2357cc883"
  },
  {
    "url": "assets/css/0.styles.a6d9d519.css",
    "revision": "21a7a08b126dc24fdb5f901e221ccb28"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.2f4bfe26.js",
    "revision": "3f64ee82e9567d81c945f22f9e4be524"
  },
  {
    "url": "assets/js/10.1ce72c42.js",
    "revision": "8dbf18a15c30f9a11edf0940197c6f3d"
  },
  {
    "url": "assets/js/14.07c52f82.js",
    "revision": "0262a8a8cc5fed0678ef5e14b4b1076d"
  },
  {
    "url": "assets/js/15.d69121fa.js",
    "revision": "5b2fab24129ced1e18890c652ef99df7"
  },
  {
    "url": "assets/js/16.a0492024.js",
    "revision": "7ae7e71a03db03d3ef394bf002264777"
  },
  {
    "url": "assets/js/17.a36eba4f.js",
    "revision": "b40bc810732a0daa7f3bf0de2b3e5da3"
  },
  {
    "url": "assets/js/18.12961593.js",
    "revision": "837e4471378340d967e2803dca662995"
  },
  {
    "url": "assets/js/19.8b76ed87.js",
    "revision": "6510aa3ce9df821b170fe02479257d84"
  },
  {
    "url": "assets/js/2.b05a4656.js",
    "revision": "8ae2cf00c0c2bbd790bd0336078bca94"
  },
  {
    "url": "assets/js/20.294abae6.js",
    "revision": "50990a2248b396dfa8fc23731a47a55f"
  },
  {
    "url": "assets/js/21.4cbb108f.js",
    "revision": "c6217209e2a2892947eef769b6fd11b4"
  },
  {
    "url": "assets/js/22.5a6e8307.js",
    "revision": "9949e7cf886e96a770706c431d37a906"
  },
  {
    "url": "assets/js/23.e74673e5.js",
    "revision": "2d994530d971681648342b93c47ab050"
  },
  {
    "url": "assets/js/24.58ddfcef.js",
    "revision": "aca382f9f28821591ce738a2d14bb56c"
  },
  {
    "url": "assets/js/25.00c588ac.js",
    "revision": "0f9babc2caa8d526eb20973ab53c159d"
  },
  {
    "url": "assets/js/26.168d5a10.js",
    "revision": "86fbbed27a24cdb7dfb13ad299f3a65c"
  },
  {
    "url": "assets/js/27.751765ba.js",
    "revision": "eba5901c688fb3a220041ef9be81a466"
  },
  {
    "url": "assets/js/28.6b6c9e93.js",
    "revision": "c87cfe84857825ad6e8516dc3e391a64"
  },
  {
    "url": "assets/js/29.2dc00477.js",
    "revision": "2492328303f67531a3ab72b2cec57b14"
  },
  {
    "url": "assets/js/3.14762120.js",
    "revision": "da825e02c907c269a5a86a0ec3de7b04"
  },
  {
    "url": "assets/js/30.b00c23d8.js",
    "revision": "084c74fa489bb7b1be98c30f09cbfd6a"
  },
  {
    "url": "assets/js/31.6ad7529f.js",
    "revision": "c11734fe6018fee173f1e8b27d900ab3"
  },
  {
    "url": "assets/js/32.68381b00.js",
    "revision": "e25dcafabdf120e4d3c49da9a0533adc"
  },
  {
    "url": "assets/js/33.ef935165.js",
    "revision": "51acdd759543b1481ea989cb5f005395"
  },
  {
    "url": "assets/js/34.fd01d7fc.js",
    "revision": "d6901fcd5a2bc14ce9eff7ceb99b217b"
  },
  {
    "url": "assets/js/35.29b1bea4.js",
    "revision": "2e86f9a9cfdeb88da607b8f2f854fbc7"
  },
  {
    "url": "assets/js/36.8ca98d7c.js",
    "revision": "d5d5cc103b175a2a52b06487b5ee2a1c"
  },
  {
    "url": "assets/js/37.77896ae0.js",
    "revision": "4aabf36fd700e8c5bf3bb847ebb0ffdc"
  },
  {
    "url": "assets/js/38.f1a184ca.js",
    "revision": "6200adccd06d9559ca4d855a34f9b836"
  },
  {
    "url": "assets/js/39.1ecd85e8.js",
    "revision": "c92d01f6fda02eee4773c40c4bdc586d"
  },
  {
    "url": "assets/js/4.d7a88bad.js",
    "revision": "71217e6c9a940ab029676e3547a95949"
  },
  {
    "url": "assets/js/40.946a86c0.js",
    "revision": "c98a1e537075f23c3d7916c9a7fa94f5"
  },
  {
    "url": "assets/js/41.ea7e582d.js",
    "revision": "db223051f5066670e75d51bd95e0a557"
  },
  {
    "url": "assets/js/42.67030c0a.js",
    "revision": "effaa00f22ac08c37e9933c35e566e41"
  },
  {
    "url": "assets/js/43.ca103079.js",
    "revision": "167e0332cb4ca59f270549bb2ce6cc2a"
  },
  {
    "url": "assets/js/44.c334e2a9.js",
    "revision": "3ab668d1dfbdeec8d54bfd0ee1562c9f"
  },
  {
    "url": "assets/js/45.f395efcb.js",
    "revision": "039da61ddb996227f384a949871040fb"
  },
  {
    "url": "assets/js/5.dffbd66f.js",
    "revision": "2789b40cc1211aeadfb1a18212555c57"
  },
  {
    "url": "assets/js/6.0fbd17b3.js",
    "revision": "a4b380567b941f26f3f3ea0150d4c341"
  },
  {
    "url": "assets/js/7.646321b6.js",
    "revision": "c52212f5c392d618a192c2e67851c00a"
  },
  {
    "url": "assets/js/8.08e0f09f.js",
    "revision": "8946d3a2829fb5489fc39b916de74a9c"
  },
  {
    "url": "assets/js/9.420bf033.js",
    "revision": "58c84b7284104d6392786f77ace5e97b"
  },
  {
    "url": "assets/js/app.620ad423.js",
    "revision": "5a4ae0fed226083a0b3d0398fb8ea729"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "47c17db263c214e6b4a977891b3f8868"
  },
  {
    "url": "assets/js/vendors~docsearch.8539314b.js",
    "revision": "f5ddd53d0c15c877b8c6ebf65f2d825c"
  },
  {
    "url": "assets/js/vendors~flowchart.7929a3db.js",
    "revision": "5e3c511ea94272fa0a28ed026f1471da"
  },
  {
    "url": "avatar.jpg",
    "revision": "17ce733f85cbc9f879ffdf26878999ea"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "85aa0048f77c3e52fe101e85e12514c9"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "d3917fd0137254e13977b69b063444d7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5bcee93af3d12787a2a4daff9810e635"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "63606e72323da44e95ffa2f4579b813b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "7936960af535f74689c5b74e03792fc6"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "a26b5e3a5dc725920eb0042fd2a5d174"
  },
  {
    "url": "css/style.css",
    "revision": "db7bb3ff392567b940dc9b6351e45d04"
  },
  {
    "url": "guide/index.html",
    "revision": "d281b84ab86a513a00849c5689a1fae7"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.jpg",
    "revision": "de5975d705530d31c19e5dd8d7f10920"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "index.html",
    "revision": "77be141df4ce64bb9e9f0176164ea2c1"
  },
  {
    "url": "js/custom.js",
    "revision": "0226fcfea4d095a4dd10f02c0331d2c8"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "45000dbf83d9ff2a0eb627d3d5953c7c"
  },
  {
    "url": "tag/index.html",
    "revision": "1d6ef33ba3f757f88c30413a95349f76"
  },
  {
    "url": "tags/study/index.html",
    "revision": "c392226c85d75a9ed5a0bdfcf866079a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "784080e441c08fde9f12e1a5f0890e4f"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "b50698bf5faca91d45f6eccc220f6c08"
  },
  {
    "url": "tags/后端/index.html",
    "revision": "5f098b8e1ed7f13a55a7ca33bd60a868"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "44525ff5bb1059758861f13ba75a08d8"
  },
  {
    "url": "tags/笔记分享/index.html",
    "revision": "eac2f3d84d43eaed0ad37fb9f03c670e"
  },
  {
    "url": "tags/项目/index.html",
    "revision": "ff87969f8ae6ee063c41ea6207d38244"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e6f6cd5b9fd11f8492a9fc88e5cda36"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "eeace98c6e4bcc3a0a27e7c0a072f295"
  },
  {
    "url": "技术文章/前端/前端.html",
    "revision": "ff4da9cf74fc39e06e1012df482d33b7"
  },
  {
    "url": "技术文章/后端/后端.html",
    "revision": "3fe3f2565f8b5685cb8b512f774f3fec"
  },
  {
    "url": "技术文章/项目/项目.html",
    "revision": "f7bad046faaf4e741f9cf2a45a912290"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d5e4980af93edcacb0e7d7ad8b1781d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
