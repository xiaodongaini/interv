Function.prototype.bind2 = function () {
  var self = this;    // 保存原函数
  var context = [].shift.call(arguments);   // 保存需要绑定的this上下文
  var args = [].slice.call(arguments);   // 将剩余的参数转化为数组
  reuturn function () {   // 返回一个新函数
    // 把bind的参数和执行时的参数拼接，先使用bind的参数
    self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  }
}

Function.prototype.bind = function () {
  var self = this;
  var context = [].shift.call(arguments);
  var args = [].slice.call(arguments);
  return function () {
    self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  }
}