Array.prototype.fakeMap = function(fn,context) {
	let arr = this;
  let temp = [];

	for(let i=0;i<arr.length;i++){
    console.log('context=========', context)
		let result = fn.call(context,arr[i],i,arr);
		temp.push(result);
	}
	return temp;
}

var arr = [1, 2, 3]

arr.fakeMap(function(item, index){
  return item + 1
})

Array.prototype.fakeMap = function(fn, context) {
  let arr = this
  let resultArr = []

  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr)
    resultArr.push(result)
  }
  return resultArr
}