// 继承的概念：
// ES5的继承方式
// 方式1：借助构造函数实现继承，缺点是父函数prototype上的属性无法被继承
function Parent1 () {
  this.name = 'parent1'
}
Parent1.prototype.say = function () {
  console.log('say something')
}

function Child1 () {
  Parent1.call(this)
  this.type = 'child1'
}

var child = new Child1()
console.log(child.name)
child.say() // TypeError: child.say is not a function

// 方式2：借助原型链实现继承, 缺点是当某一实例修改原型链上的某一个属性时，如果属性的类型是引用类型，
// 那么其他实例上的属性也会被修改
function Parent2 () {
  this.name = 'parent2'
  this.play = [1, 2, 3]
}
Parent2.prototype.say = function () {
  console.log('say something')
}
function Child2 () {
  this.type = 'child2'
}
Child2.prototype = new Parent2()

var c1 = new Child2()
var c2 = new Child2()
console.log(c1.play)  // [1, 2, 3]
c2.play.push(5)
console.log(c1.play) // [1, 2, 3, 5]
console.log(c2.play) // [1, 2, 3, 5]

