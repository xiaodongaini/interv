// 正则表达式
// **** 题目1：把url参数转换成一个对象
let url = 'http://www.zhufeng.cn?name=mabin&age=18&form=zf&addre=hebei';

let params = {};
let reg3 = /([^?=&]+)=([^?=&]+)/g;
url.replace(reg3, (str, key, value) => params[key] = value);
console.log(params);
// params: {name: 'mabin', age: '18'}

// **** 题目2：字符串转换 ab-cd-ef=》ab-Cd-Ef
'ab-cd-ef'.replace(/(-)(\w)(\w)/g, function(match, group1, group2, group3, 
  index, origin){
    console.log('match===========', match)
    return group1 + group2.toUpperCase() + group3;
  })
  
// 其他题目 
// **** 题目3：使用setTimeout模拟setInterval
function simulateInterval(callback, interval) {
  let timerId = null;

  function fn() {
    callback();
    clearTimeout(timerId);
    timerId = setTimeout(fn, interval);
  }

  return setTimeout(fn, interval);
};

simulateInterval(()=>{console.log(1)}, 2000);
// **** 题目4: 如何准确判断一个变量是不是数组，通过原型链
var a = [1, 2, 3]
a instanceof Array
// **** 题目5：DOM性能优化相关，通过DocumentFragment缓存
const frag = document.createDocumentFragment()
const list = document.getElementById('list')
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li')
  li.innerHTML = `List item ${i}`
  // list.appendChild(li)
  // 先插入文档片段中
  frag.appendChild(li)
}
// 都完成之后，再统一插入到list
list.appendChild(frag)
// **** 题目6：解释下Redux的单向数据流的概念
// 答：单向数据流是Flux的概念，Redux = reducer + Flux
  // 用户在View层发送一个Action对象给Dispatcher
  // Dispatcher 收到Action后，要求store做出相应的更新
  // Store 做出相应的更新后，发出一个change事件
  // View接到change事件后，更新页面
// Redux：三个基本原则
  // 1.唯一的store
  // 2.不能直接修改状态(不能直接修改状态，如果想要修改状态，只能通过派发Action来修改)
  // 3.数据改变只能通过纯函数(Reducer)完成, 纯函数：同样的输入只能得到同样的结果
// **** 题目7：css动画
  // 1.transition(过渡) 补间动画,有开头有结尾
    // 位置平移，方位旋转，大小缩放，透明度，其他线性变换
    // transition: width 1s;
  // 2.keyframe 关键帧动画
    // 相当于多个补间动画
    // 与元素变化无关
    // 定义更加灵活
  // 3.逐帧动画 中间没有补间动画，使用steps，控制好大小和时长，否则可能产生性能问题
  // 4.过渡动画和关键帧动画的区别
    // 1.过渡动画需要有状态的变化
    // 2.关键帧动画不需要有状态的变化
    // 3.关键帧动画能控制的更精细
// **** 题目7：Promise和stTimeout和setInterval哪个先执行，Promise会先执行
  // new promise 会立即执行
  // then会分发到微任务
  // 整体宏任务，执行完成，判断是否有微任务，有刚才放到微任务里面的then，执行
  // 第一轮事件执行完成，进行第二轮，刚刚我们放到事件队列的setTimeout函数进入到宏任务
  // 立即执行
// *** 题目8：
var getNums = function(nums, target) {
    const mapObj = {}
    for (let i = 0; i < nums.length; i++) {
      if(mapObj[target - nums[i]] >= 0) {
        return [mapObj[target - nums[i]], i]
      }
      mapObj[nums[i]] = i
    }
  }
