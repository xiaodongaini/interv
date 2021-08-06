/** 按属性对object分类 */
// 最后要的结果是
// {
//   21: [
//     {name: 'Alice', age: 21}
//   ],
//   20: [
//     {name: 'Max', age: 20},
//     {name: 'jane', age: 20}
//   ]
// }
// property 传递的是 'age'
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property];
    // key = 21
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

var groupedPeople = groupBy(people, 'age')

/** 使用扩展运算符和initialValue绑定包含在对象数组中的数组 */
// 要得到的结果如下
// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];
var allbooks = friends.reduce(function(pre, curr) {
  return [...pre, ...curr.books]
}, ['Alphabet'])

/** 数组去重 */
var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
var myOrderedArray = myArray.reduce(function (pre, curr) {
  if (pre.indexOf(curr) === -1) {
    pre.push(curr)
  }
  return pre
}, [])
