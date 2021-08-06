Function.prototype.apply2 = function(context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 1; len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
  }
  delete context.fn;
  return result;
}
Function.prototype.apply = function(context, arr) {
  var context = context || window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = i, len = arguments.length; i++) {
      args.push('arguments[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
    delete context.fn;
  }
  return result;
}
function getStr(a) {
  let b = a.split(/\s+/g)
  let len = 0;
  str = ''
  for (let i = 0; i < b.length;  i++) {
    if(b[i].length > len) {
      len = b[i].length
      str = b[i]
    }
    return str
  }
}

