let binaryLiteral: number = 0b1010;  // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;          // 十进制
let hexLiteral: number = 0xf00d;     // 十六进制

console.log('数字类型：', binaryLiteral, octalLiteral, decLiteral, hexLiteral);

let username: string = "Hello";
let years: number = 5;
let words: string = `您好，今年是${ username }发布 ${years + 1}周年`;
console.log('字符串类型：', words);

let flag:boolean = false;
console.log('布尔型：', flag);

let arr1:number[] = [1, 2]
let arr2:Array<number> = [1, 2]  // 泛型
console.log('数组类型：', arr1, arr2)

let x:[string, number];
x = ['World', 1];
// x = [1, 'Runoob'];  // 报错，不能将数字类型分配字符串的值
console.log(x[0]);

