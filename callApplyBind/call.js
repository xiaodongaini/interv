Function.prototype.call2 = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    // 下面有解释为什么要有一个拼接操作
    args.push('arguments[' + i +']');
  }
  var result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
}
// 20191209
Function.prototype.call = function (context) {
  var context = context || window
  context.fn = this
  var args = []
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

// 对于为什么要有拼接操作的解释
// eval函数接收参数是个字符串
// eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
// 语法：eval(string)
// 最终目的是为了拼出一个参数字符串，我们一步一步看：

// var args = [];
// for(var i = 1, len = arguments.length; i < len; i++) {
//         args.push('arguments[' + i + ']');
// }

// 最终的数组为：

// var args = [arguments[1], arguments[2], ...]

// 然后

// var result = eval('context.fn(' + args +')');

// 在eval中，args 自动调用 args.toString()方法，最终的效果相当于：

// var result = context.fn(arguments[1], arguments[2], ...);

// 这样就做到了把传给call的参数传递给了context.fn函数
