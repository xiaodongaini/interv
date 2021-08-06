function removeDup(arr) {
  var result = [];
  var hashMap = {};
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    if (!hashMap[temp]) {
      hashMap[temp] = true;
      result.push(temp);
    }
  }
  return result;
}

var a = [1, 2, 3, 2, 2, 3, 4, 2, 1];
var b = removeDup(a);
