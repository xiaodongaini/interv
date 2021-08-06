/**
 * 插入排序
 * 时间复杂度O(n^2)，最好O(n)，最坏O(n^2)
 * 原地排序算法空间复杂度O(1)
 * 稳定排序算法
 */
function insertSort (a) {
  const n = a.length
  for (let i = 1; i < n; i++) {
    let value = a[i]
    let j = i - 1
    while (j >= 0 && a[j] > value) {
      a[j + 1] = a[j]
      j--
    }
    // 最后把value放在它应该在的地方
    a[j+1] = value
  }
}

let arr = [4, 5, 6, 3, 2, 1, 9]
// let result = insertSort(arr)
// console.log('arr=========', arr)

function insertSort2(arr) {
  if (arr.length < 2) {
    return arr
  }
  const n = arr.length
  for (let i = 1; i < n; i++) {
    let value = arr[i]
    let j = i-1
    while (j >= 0 && arr[j] > value) {
      console.log('j==============', j)
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = value
  }
  return arr
}

let result = insertSort2(arr)
console.log('result=========', result)
