class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
    // this.gender = 'male'
  }
  sayHi() {
    console.log(
      `姓名：${this.name} , 学号： ${this.number}`
    )
  }
  // study() {

  // }
}

class Teacher extends People {
  constructor(name, major){
    super(name)
    this.major = major
  }
  teach() {
    console.log(`${this.name} 教授 ${this.major}`)
  }
}
// 通过类 new 对象/实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()
xialuo.eat()

const madongmei = new Student('马冬梅', 101)
console.log(madongmei.name)
console.log(madongmei.number)
madongmei.sayHi()
madongmei.eat()

const wanglaoshi = new Teacher('王老师', '语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.teach()
wanglaoshi.eat()