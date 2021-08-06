function Pubsub() {
  this.handles={}
}

Pubsub.prototype.on = function(type, handle) {
  if (!this.handles[type]){
    this.handles[type] = []
  }
  this.handles[type].push(handle)
}

Pubsub.prototype.emit = function() {
  var type = Array.prototype.shift.call(arguments)
  if (!this.handles[type]) {
    return false
  }
  for (var i = 0; i < this.handles[type].length; i++) {
    var handle = this.handles[type][i]
    handle.apply(this, arguments)
  }
}

Pubsub.prototype.off = function (type, handle) {
  if (this.handles[type]) {
    if (!handle) {
      // 清空数组
      this.handles[type].length = 0
    } else {
      for (var i = 0; i < this.handles[type].length; i++) {
        var _handle = this.handles[type][i]
        if (_handle === handle) {
          this.handles[type].splice(i, 1)
        }
      }
    }
  }
}

var p1 = new Pubsub();
 p1.on('mm', function (name) {
     console.log('mm: '+ name);
 });
 p1.emit('mm','哈哈哈哈');
console.log('===============');
 var p2 = new Pubsub();
 var fn = function (name) {
     console.log('mm2: '+ name);
 };
 var fn2 = function (name) {
     console.log('mm222: '+ name);
 };
 p2.on('mm2', fn);
 p2.on('mm2', fn2);
 p2.emit('mm2','哈2哈2哈2哈2');
 console.log('-------------');
p2.off('mm2', fn);
 p2.emit('mm2','哈2哈2哈2哈2');
 console.log('-------------');
p2.off('mm2');
 p2.emit('mm2','哈2哈2哈2哈2');
 console.log('-------------');

