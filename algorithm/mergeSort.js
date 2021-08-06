/**
 * 归并排序
 * 是稳定排序算法
 * 归并排序不是原地排序，需要额外的空间复杂度
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let n = arr.length
  let middle = parseInt(n/2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  if (left === undefined && right === undefined) {
    return false
  }
  return merge(mergeSort(left), mergeSort(right))
}
function merge (left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while(left.length) {
    result.push(left.shift())
  }
  while(right.length) {
    result.push(right.shift())
  }
  return result
}
let arr = [4, 5, 6, 3, 2, 1]
let sortedArr = mergeSort(arr)
console.log('sortedArr=======', sortedArr)
