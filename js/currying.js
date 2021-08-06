/**
 * 把接收多个参数的的函数变换成接收一个单一参数（最初函数的第一个参数）的函数的过程，
 * 每个函数都只接收一个参数
 * 并且返回接收余下的参数而且返回结果的新函数
 * 这些函数不会立即求值，而是通过闭包的方式把传入的参数保存起来，知道真正需要的时候才会去求值
 * 在《Mostly adequate guide》一书中，这样总结了 Currying-
 * 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
 * @param {*} fn 
 * @param  {...any} args 
 */
function currying(fn, ...args) {
  console.log('args==============', args)
  // fn.length 返回的是 fn 的形参的数量
  if(fn.length <= args.length) {
    // 此时真正需要求值
    return fn(...args)
  }
  return function(...args1) {
    console.log('args1========', args1)
    // 此时通过闭包的方式把传入的参数保存起来
    return currying(fn,...args,...args1)
  }
}

function add(a,b,c) {
  return a + b + c
}

add(1,2,3) // 6
var curryingAdd = currying(add);
curryingAdd(1)(2)(3) // 6
