/**
 * 常见二分查找变形
 * 可用于二分查找的数组均为排好序的数组
 * 1.查找第一个值等于给定值的元素
 * 2.查找最后一个值等于给定值的元素
 * 3.查找第一个大于给定值的元素
 * 4.查找最后一个小于等于给定值的元素
 */
let arr = [1, 2, 4, 5, 6, 8, 8, 8, 11, 18]
/** 1.查找第一个值等于给定值的元素 */
function bSearch1 (a, value) {
  let low = 0
  let high = a.length - 1
  while (low <= high) {
    let mid = low + parseInt((high - low)/2)
    if (a[mid] > value) {
      high = mid - 1
    } else if (a[mid] < value) {
      low = mid + 1
    } else {
      // 此时a[mid]==value
      // mid等于0或者第mid-1个值不等于value，第mid-1个值肯定小于value，说明mid是第一个等于value的index
      if (mid === 0 || a[mid - 1] !== value) {
        return mid
      } else {
        // mid != 0 而且a[mid - 1] == value，说明前面还有可能存在等于value的值，需要往前找
        high = mid -1
      }
    }
  }
  return -1
}

function bSearch(arr, value) {
  let low = 0
  let high = arr.length - 1
  while(low <= high) {
    let mid = low + parseInt((high-low)/2)
    if (arr[mid] > value) {
      high = mid - 1
    } else if (arr[mid] < value){
      low = mid + 1
    } else {
      if (mid === 0 || arr[mid-1] !== value) {
        return mid
      } else {
        high = mid - 1
      }
    }
  }
  return -1
}

/** 2.查找最后一个值等于给定值的元素 */
function bSearch2 (a, value) {
  let low =0
  let high = a.length - 1
  while (low <= high) {
    let mid = low + parseInt((high - low)/2)
    if (a[mid] > value) {
      high = mid - 1
    } else if (a[mid] < value) {
      low = mid + 1
    } else {
      // 此时a[mid]==value
      // mid等于最后一个或者第mid+1个值不等于value，第mid+1个值肯定大于value，说明mid是最后一个等于value的index
      if (mid === a.length - 1 || a[mid + 1] !== value) {
        return mid
      } else {
        // mid 不是最后一位，而且a[mid + 1] == value, 说明后面还有可能等于value的值，需要往后找
        low = mid + 1
      }
    }
  }
  return -1
}

let last = bSearch2(arr, 8)
let first = bSearch(arr, 8)
console.log('first============', first)
console.log('last==============', last)