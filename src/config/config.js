module.exports = {
    serverUrl: 'http://dev.live.qyvideo.net/v2.0/',
    isMock: false,
    version: 1.0,
    // storage前缀
    storagePrefix: 'ksYun-', // 最终缓存key是ksYun-XXX
    storageApiPrefix: 'Api-' // 结合上面前缀使用 最终缓存key是ksYun-Api-XXX
};
