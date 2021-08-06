function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  // requestQueue 用于记录max个请求
  const requestsQueue = [];
  // 用于记录每个请求返回的结果
  const results = [];
  // 用于记录到哪个请求了
  let i = 0;
  const handleRequest = (url) => {
    const req = fetch(url).then(res => {
      console.log('当前并发： '+requestsQueue);
      const len = results.push(res);
      console.log('i================', i)
      console.log('len===============', len)
      if (len < urlCount && i + 1 < urlCount) {
        requestsQueue.shift();
        console.log('未完全执行完=================')
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        'function' === typeof callback && callback(results)
      }
    }).catch(e => {
      results.push(e)
    });
    console.log('是否每次都执行到这里===============')
    // 每次push之后，requestQueue的长度=max
    if (requestsQueue.push(req) < max) {
      console.log('执行进了push==========')
      handleRequest(urls[++i])
    }
  };
  handleRequest(urls[i])
}


const urls = Array.from({length: 10}, (v, k) => k);
console.log('initUrls=================', urls)
const fetch = function (idx) {
  return new Promise(resolve => {
    console.log(`start request ${idx}`);
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx)
    }, timeout)
  })
};

const max = 4;

const callback = (results) => {
  console.log('run callback==============', results);
};


handleFetchQueue(urls, max, callback);
