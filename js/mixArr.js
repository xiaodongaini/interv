function mixArr(arr) {
  return arr.sort(function() {
    return Math.random() - 0.5
  })
}

/** 2019-11-12 */
function mixArr(arr) {
  return arr.sort(function() {
    return Math.random() - 0.5
  })
}

var arr1 = [1, 2, 4, 5, 6, 8, 23, 12, 34]

var arr2 = mixArr(arr1)

console.log('arr2==============', arr2)
