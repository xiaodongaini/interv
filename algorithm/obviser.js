var salesOffices = {}
salesOffices.clientList = []
salesOffices.listen = function (fn) {
  this.clientList.push(fn)
}
salesOffices.trigger = function () {
  for (let i = 0; i < this.clientList.length; i++) {
    let fn = this.clientList[i]
    fn.apply(this, arguments)
  }
}
salesOffices.listen(function(price, square) {
  console.log('price========', price)
  console.log('square=======', square)
})

salesOffices.trigger(200, 18)
