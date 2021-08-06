// 实现一个函数，判断输入是不是回文字符串
function isHuiwen (input) {
  if (typeof input !== 'string') {
    return false
  }
  return input.split('').reverse().join('') === input
}                                                                                                           
// console.log(isHuiwen('abccba'))
// console.log(isHuiwen('abcabc'))
