let title = document.querySelector("title");
title.innerHTML = "JS对象分类02-圆";

// TODO: 目标, 为甲方爸爸写一个圆
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.getLength = function () {
  return 2 * this.radius * Math.PI;
};

Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

let c1 = new Circle(10);
console.log(c1.getLength());
console.log(c1.getArea());

// TODO: 我想实例化一个和 c1 一样的 对象, 不直接去用 Circle 情况下, 我该你怎么写, 而用 constructor
let c2 = new c1.__proto__.constructor(20);

console.log(c2.getLength());
console.log(c2.getArea());
// * 不过这样的不常常这么写, 似乎是很没必要的

// TODO: 再为尊贵的甲方爸爸写一个长方形
function Rect(width, height) {
  this.width = width;
  this.height = height;
}
Rect.prototype.getLength = function () {
  return (this.width + this.height) * 2;
};
Rect.prototype.getArea = function () {
  return this.width * this.height;
};
let r1 = new Rect(10, 5);
console.log("--长方形 r1--");
console.log(r1.getLength());
console.log(r1.getArea());

// * 小结: 以上写的代码, 都是原型的继承的思想, 实现了两个事情, 写一个圆, 和写一个长方形, 练习了 prototype, 深入学习了 prototype

// TODO: class, 使用 class 重写上面的圆 和 长方形
class CircleByClass {
  constructor(width) {
    this.width = width;
  }
  getLength() {
    return Math.PI * this.width * 2;
  }
  getArea() {
    return Math.pow(this.width, 2) * Math.PI;
  }
}
console.log("--ByClass--");

let circleByClass1 = new CircleByClass(8);
console.log(circleByClass1.width);
console.log(circleByClass1.getLength());
console.log(circleByClass1.getArea());

class RectByClass {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getLength() {
    return (this.width + this.height) * 2;
  }
  getArea() {
    return this.width * this.height;
  }
}
console.log("--rectByClass--");

let rectByClass1 = new RectByClass(20, 10);
console.log(rectByClass1.width);
console.log(rectByClass1.getLength());
console.log(rectByClass1.getArea());

// * 小结: 用 class 改写完成之后, 感觉比 prototype 紧凑一些,

// TODO: 请不要使用 class，写一个 Person 构造函数，要求以下代码运行通过
/* 
function Person(你来补全代码){
    你来补全代码
}

let person = new Person('frank', 18)
person.name === 'frank' // true
person.age === 18 // true
person.sayHi() // 打印出「你好，我叫 frank」

let person2 = new Person('jack', 19)
person2.name === 'jack' // true
person2.age === 19 // true
person2.sayHi() // 打印出「你好，我叫 jack」
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function () {
  console.log(`你好, 我叫 ${this.name}`);
};
console.log("--课后作业 Person--");

let person1 = new Person("自信的我", 29);
console.log(person1.name === "自信的我");
console.log(person1.age === 29);
person1.sayHi();
