function test1(str1, str2) {
  let len1 = str1.length
  let len2 = str2.length
  let flag = true
  let len = len1 > len2 ? len2 : len1
  for (let i = 0; i < len; i++ ) {
    if (str1[i] > str2[i]) {
      flag = false
      return str1
    } else if (str1[i] < str2[i]) {
      flag = false
      return str2
    }
  }
  if (flag) {
    if (len1 == len2) {
      return 0
    }
    return  len1 > len2 ? str1 : str2
  }
}
// 第1次 100次比较
// 第2次 10次比较
// ...
// 第n次 

比较1次 25/26
比较2次 1/26 * 25/26
3      1/26 * 1/26 * 25/26
...
n     
25/26 + 2*1/26*25/26 + 3*1/26*1/26*25/26 + 4*1/26*1/26*1/26*25/26
=25/26 + 2/26 + 


