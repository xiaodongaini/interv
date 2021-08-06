function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image)
    };

    image.onerror = function() {
      reject(new Error('加载图片失败' + url))
    };

    image.src = url
  })
}

var url = 'https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png'

loadImageAsync(url)
.then(function(image){
  console.log(image.width)
  return image
})
.then(function(image){
  console.log(image.height)
  return image
})
.catch(function(error){
  console.error(error)
})