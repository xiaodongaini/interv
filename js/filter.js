/**
 * filter 函数的第一个参数为回调函数，接收三个参数，第一个参数为必填参数，后两个为可选参数
 * filter 函数的第二个参数为执行回调函数时的this的值
 */
Array.prototype.filter = function(fn, context) {
  if (typeof fn !== 'function') {
    throw new TypeError('第一个参数不是函数')
  }
  let arr = this;
  let result = [];
  for(var i = 0; i < arr.length; i++) {
    var temp = fn.call(context, arr[i], i, arr);
    if (temp) {
      result.push(arr[i]);
    }
  }
  return result;
}

var arr = [4, 6, 3]

var b = arr.filter(function(item, index) {
  return item > 3
})

/** 2019-11-13 */
Array.prototype.filter = function(fn, context) {
  if (typeof fn !== 'function') {
    throw new TypeError('第一个参数不是函数')
  }
  let arr = this
  let result = []
  for (var i = 0; i < arr.length; i++) {
    var temp = fn.apply(context, arr[i], i, arr)
    if (temp) {
      result.push(arr[i])
    }
  }
  return result
}
