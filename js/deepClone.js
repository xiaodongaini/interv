/** 深拷贝-递归遍历 */
function deepClone(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // 保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepClone(obj[key])
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result;
}
/** 20191206 */
function deepClone(obj) {
  var result = Array.isArray(obj) ? [] : {};
  var (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof(obj[key]) === 'object' && obj[key] !== null) {
        result[key] = deepClone(obj[key]);
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}

var a = [
  {
    s: 1,
    d: 2
  },
  4,
  'aaa'
]

var b = deepClone(a)

console.log('b======', b)
/** 深拷贝-JSON.stringify和JSON.parse结合使用 */
var c = JSON.parse(JSON.stringify(a))
console.log('c==============', c)
