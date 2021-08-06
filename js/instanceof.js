/** instanceof 主要是用于检测构造函数（right）的prototype属性，是否在实例对象（left）的原型链上 */
function myInstanceof(left, right) {
  var proto = left.__proto__
  var protoType = right.protoType
  while(true) {
    if (proto === null) {
      return false
    }
    if (proto === protoType) {
      return true
    }
    proto = proto.__proto__
  }
}
