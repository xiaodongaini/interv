/** 冒泡排序
 * 时间复杂度O(n^2)，最好O(n)，最坏O(n^2)
 * 空间复杂度O(1),原地排序算法
 * 相同大小数据前后顺序不变，稳定排序算法
*/
let a1 = [4, 5, 6, 3, 2, 1, 8]
function bubbleSort (arr) {
  let n = arr.length
  if (n <= 1) return
  // i只是计数功能，i的值代表冒泡到最后了i个数
  for (let i = 0; i < n; i++) {
    let flag = false
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // 执行交换操作,空间复杂度O(1)
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = true
      }
    }
    // flag 代表有没有数据交换，flag为false，代表没有数据交换，代表数组有序，不需要再进行排序
    if (!flag) break
  }
}
// bubbleSort(a1)

function bubbleSort2 (arr) {
  let n = arr.length
  if (n < 2) return arr
  for (let i = 0; i < n; i++) {
    let flag = false
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
        flag = true
      }
    }
    if (!flag) return arr
  }
}

let a = bubbleSort2(a1)
console.log('a=============', a)
