let title = document.querySelector("title");
title.innerHTML = "JS对象分类";

// todo 目标: 让原型和构造函数紧密的抱在一起
// todo: 原型
// let squarePrototype = {
//   getArea() {
//     return this.width * this.width;
//   },
//   getLength() {
//     return this.width * 4;
//   },
// };`
// todo: 构造函数
// function createSquare(width) {
//   let obj = Object.create(squarePrototype);
//   obj.width = width;
//   return obj;
// }
// todo: 让上面两个抱在一起
// function createSquare(width) {
//   let squarePrototype = {
//     getArea() {
//       return this.width * this.width;
//     },
//     getLength() {
//       return this.width * 4;
//     },
//   };
//   let obj = Object.create(squarePrototype);
//   obj.width = width;
//   return obj;
// }
// ? 上面这么抱在一起不太讲究, 既然函数是对象, 这个原型也是对象, 这个原型是可以成为函数的一个 key : value

// function createSquare(width) {
//   let obj = Object.create(createSquare.squarePrototype);
//   obj.width = width;
//   return obj;
// }
// createSquare.squarePrototype = {
//   getArea() {
//     return this.width * this.width;
//   },
//   getLength() {
//     return this.width * 4;
//   },
//   constructor: createSquare,
// };
// console.log("--xxx--");
// let squareList = [];
// for (let i = 0; i < 12; i++) {
//   squareList[i] = createSquare(5);
//   console.log(squareList[i].constructor);
// }
// * 写到这儿, 这段代码几乎完美, 没有其他余地了

console.log("--yyy--");

function ParentFn(name, age) {
  this.name = name;
  this.age = age;
}

ParentFn.prototype.run = function () {
  console.log(`${this.name} 跑的飞起`);
};
ParentFn.prototype.getAge = function () {
  console.log(`我今年是 ${this.age} 岁`);
};
let child = new ParentFn("肌肉金轮", 20);
child.run();
// ! 是不是不能两个参数呢? 共有属性函数名和自身属性的名字重名了
child.getAge();

// TODO: 搞个长方形, 然后长和宽可以随意传进去
// TODO: 直接搞个原型的继承, new
function chang(x, y) {
  this.x = x;
  this.y = y;
}
chang.prototype.mian = function () {
  return this.x * this.y;
};
chang.prototype.zhou = function () {
  return (this.x + this.y) * 2;
};
let chang1 = new chang(10, 20);

// 答出基于原型的继承
console.log("--基于 原型 的继承--");
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getName = function () {
  console.log(`我是${this.name},我通过原型实例化`);
};
Person.prototype.getAge = function () {
  console.log(`我今年${this.age}岁`);
};

let p1 = new Person("小明", 18);
p1.getName();
p1.getAge();

console.log("--基于 class 的继承--");
class PersonByClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    console.log(`我是${this.name},我通过 Class 实例化`);
  }
  getAge() {
    console.log(`我今年${this.age}岁`);
  }
}
let p2 = new PersonByClass("小红", 20);
p2.getName();
p2.getAge();

// TODO: 写一下, 原型继承, animal eats; rabbit jumps
// function Animal(jumps) {
//   this.jumps = jumps;
// }
// Animal.prototype.eats = true;
// let rabbit = new Animal(true);
// console.log(rabbit);
// console.dir(rabbit);

// * 感觉这样写 __proto__ 非常的不好, 至于哪里不好, 我也说不上来, 就是很不优雅, 用  let rabbit = Object.create(animal), 这样会稍微好一些
// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; // (*)

// // 现在这两个属性我们都能在 rabbit 中找到：
// alert(rabbit.eats); // true (**)
// alert(rabbit.jumps); // true
