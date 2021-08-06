// new 实现的原理
// 1.创建一个空对象
// 2.新对象被执行原型链接
// 3.执行构造函数的方法，属性和方法被添加到新对象上
// 4.如果构造函数中没有返回其他对象，那么返回this，即创建的这个新对象，否则，返回构造函数中返回的对象
function mockNew() {
  // 创建空对象 resultObj
  const resultObj = new Object()
  // 拿到构造函数 constructor
  const constructor = Array.prototype.shift.call(arguments)
  if (typeof constructor !== 'function') {
    throw('第一个参数应该为函数！')
  }
  // 新对象被执行原型链接
  resultObj.constructor = constructor
  resultObj.__proto__ = constructor.prototype
  // 执行构造函数方法，属性和方法被添加到新对象上
  const funcObj = constructor.apply(resultObj, arguments)
  // 如果构造函数返回其他对象，则返回这个对象
  if (typeof funcObj === 'object') {
    return funcObj
  }
  // 返回空对象
  return resultObj
}

function Person(name) {
  this.name = name;
}

var person = mockNew(Person, 'jeason');
console.log('person=======', person)
