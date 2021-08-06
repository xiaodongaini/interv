function quickSort(array) {
	// 交换元素位置
	function swap(array, i, k) {
		var temp = array[i];
		array[i] = array[k];
		array[k] = temp;
	}
	// 数组分区，左小右大
	function partition(array, left, right) {
		var storeIndex = left;        
		var pivot = array[right]; // 直接选最右边的元素为基准元素
		for (var i = left; i < right; i++) {
			if (array[i] < pivot) {
				swap(array, storeIndex, i);
				storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
			}
		}
    swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
		return storeIndex;
	}
	function sort(array, left, right) {
    console.log('left===========', left)
    console.log('right==========', right)
		if (left > right) {
			return;
		}
		var storeIndex = partition(array, left, right);
		sort(array, left, storeIndex - 1);
		sort(array, storeIndex + 1, right);
	}
	sort(array, 0, array.length - 1);      
	return array;
}

let arr = [4, 5, 6, 3, 9, 1, 8, 7]
function quickSort2(arr) {
  function swap(arr, i, j) {
    return
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  function partition(arr, left, right) {
    let storeIndex = left
    let pivot = arr[right]
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        swap(arr, i, storeIndex)
        storeIndex++
      }
    }
    swap(arr, right, storeIndex)
    return storeIndex
  }
  function sort(arr, left, right) {
    if (left > right) {
      return
    }
    let storeIndex = partition(arr, left, right)
    sort(arr, left, storeIndex - 1)
    sort(arr, storeIndex + 1, right)
  }
  sort(arr, 0, arr.length - 1)
  return arr
}

let b = quickSort2(arr)
console.log('b==============', b)
