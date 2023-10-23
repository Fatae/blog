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
    "revision": "cae97677ae4c3a4caaee26ca6c25c5ea"
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
    "url": "assets/js/41.90c55159.js",
    "revision": "285a2f306bf0f8d4e14be1121901abf0"
  },
  {
    "url": "assets/js/42.63021029.js",
    "revision": "f29e632abed97b3e6c9b5aa8803b6246"
  },
  {
    "url": "assets/js/43.c516b8bf.js",
    "revision": "f38530f52ad8aaaffd7df49796eed21c"
  },
  {
    "url": "assets/js/44.a38aa556.js",
    "revision": "a300d82a370b7c9c5845fad823677d64"
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
    "url": "assets/js/app.cd8406cc.js",
    "revision": "592b6e77e6b0a1ec9f70ae0853346d19"
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
    "revision": "d880f4e7cd1ec081bc234cf32f22c8b7"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "af4d38763b072f04909b0b0483c9befc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "02f2d6ed3ec4ab878c4ae0506dae6ab4"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "56a519c3d22e42d4ac444257a3298bb7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5b73e0c82f726c9a8f66fd6f9d8537f5"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "31f585ea82b427c7edfb11b2fc95bb58"
  },
  {
    "url": "css/style.css",
    "revision": "db7bb3ff392567b940dc9b6351e45d04"
  },
  {
    "url": "guide/index.html",
    "revision": "71f362a112f87d72486ee33fdecceefa"
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
    "revision": "d969f7ca8e7bfd5a38e44f075c2660ca"
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
    "revision": "e42ec74765f1c5d479a21bcf28a59742"
  },
  {
    "url": "tags/study/index.html",
    "revision": "b187984a51d95689406e940623ed1f85"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "21119d37dfcf61b0ca99fb90a0f12dad"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "affbb9fc546091458ca6e1d6418f7a5d"
  },
  {
    "url": "tags/后端/index.html",
    "revision": "2eefe3d344d79ce40d5015df65843cf2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "64a1b4d8e523ae08b147a2c2c25580ce"
  },
  {
    "url": "tags/笔记分享/index.html",
    "revision": "f42f01d89527d1d9978365819200fae8"
  },
  {
    "url": "tags/项目/index.html",
    "revision": "18b84db15016b9dc2b51a45fc91e5b4d"
  },
  {
    "url": "timeline/index.html",
    "revision": "bcefa8296500637f6e329509aee1939f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e528e3f37c94d1e27881be922f5d4b14"
  },
  {
    "url": "技术文章/前端/前端.html",
    "revision": "9d20c3be98ffb0492560d9a95eb1426c"
  },
  {
    "url": "技术文章/后端/后端.html",
    "revision": "46f3b0dfb2754c84a49725dcde668177"
  },
  {
    "url": "技术文章/项目/项目.html",
    "revision": "97724e130c0c3637e0096d432bdf99b9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "129ec320a511a1409cc8e2b5fc582176"
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
