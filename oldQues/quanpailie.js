var permute = function(nums) {
  var len = nums.length;
  return perm(len - 1);
  
  function perm(i) {
    if (i == 0) {
        return [[nums[0]]];
    } else if (i == 1) {
        return [[nums[0], nums[1]], [nums[1], nums[0]]]; // 代码运行到此处跳出递归
    }
    var ans1 = perm(i - 1);
    var size = ans1.length;
    var ans2 = [];
    var fixNum = nums[i];
    for (var k = 0; k < size; k++) {
        for (var l = 0; l <= i; l++) {
            console.log('i=========', i)
            var arr = ans1[k].slice(); // 复制数组
            console.log('arr0===========', arr)
            arr.splice(l, 0, fixNum); // 在这个数组每一个位置添加fixNum
            console.log('arr==============', arr)
            ans2.push(arr);
        }
    }
    return ans2;
  }  
};

var a = permute([1, 2, 3])
console.log('a==========', a)
