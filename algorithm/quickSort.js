/**
 * 快速排序，快排
 * 不是稳定排序，因为pivot可能是重复的元素，把他前面的会排到right数组中，排到它的后面
 * 这种方法不是原地排序,需要额外的O(n)的存储空间
 * 时间复杂度O(nlogn)
 */
function quickSort (arr) {
  if (arr.length < 2) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length/2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

let arr = [4, 5, 6, 3, 9, 1, 8, 7]
// let result = quickSort(arr)


function quickSort2 (arr) {
  if (arr.length < 2) {
    return arr
  }
  let pivotIndex = 0
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort2(left).concat([pivot], quickSort2(right))
}

var a = quickSort2(arr)
console.log('a===========', a)
