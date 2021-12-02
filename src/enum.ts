// 数字枚举
enum Role {
  // Reporter,
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter)
console.log(Role)

// 字符串枚举
enum Message {
  Sucess = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 2  // 定义后不修改
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed    // 需要初始值
  d = Math.random(),
  e = '123'.length
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E {a, b}    // 无初始值
enum F {a =0, b =1}   // 数字
enum G {a = 'apple', b = 'banana'}  // 字符

let e: E = 3 
let f: F = 3
// e === f

let e1: E.a = 1
let e2: E.b
// e1 == e2
let e3: E.a = 1
console.log(e1 === e3)

let g1: G = G.b
let g2: G.a = G.a

// 接口
interface List {
  // 只读属性
  readonly id: number;
  name: string;
  // 字符串格式签名
  // [x: string]: any;
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) =>  {
    console.log(value.id, value.name)
    if(value.age) {
      console.log(value.age)
    }
    // value.id++
  })
}

let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B', age: 10}
  ]
}
render(result)
// 类型断言
// render ({
//   data: [
//     {id:1, name: 'A', sex: 'male'},
//     {id:2, name: 'B'}
//   ]
// }as Result)


// 可索引接口，可以数字，也可以字符
interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['A', 'B', 'C']

interface Names {
  // [x: string]: string
  [x: string]: any
  // y: number;
  [z: number]: string
}

