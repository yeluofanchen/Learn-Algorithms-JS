let title = document.querySelector("title");
title.innerHTML = "继承-猫狗大战";

// TODO: 实现一个关于继承的想法, 动物-猫,动物-狗; 先写动物; 看了网道的课程后, 我学会了
/*
function Animal(name) {
  this.name = name;
}
Animal.prototype.run = function () {
  console.log(`${this.name}正在跑`);
};

function Dog(name) {
  this.name = name;
}
Dog.prototype.wang = function () {
  console.log("汪汪~");
};
// ? 难道不能这么实现么?
// Dog.__proto__ = Animal.prototype;
// * 换成这个
Object.setPrototypeOf(Dog, Animal);

function Cat(name) {
  this.name = name;
}
Cat.prototype.miao = function () {
  console.log("喵喵~");
};

let dog1 = new Dog("旺财");
dog1.wang();

// dog1.run();
console.dir(dog1);

let cat1 = new Cat("花喵");
cat1.miao();
// cat1.run();
*/
// TODO: 拆解目标, 先字面量两个对象, 然后用 Object.setPrototypeOf() 方法来设置继承
// * 自定义对象的原型设置, 后盾人-继承
/*
let child = { name: "child" };
let parent = {
  name: "parent",
  show() {
    console.log("parent method:" + this.name);
  },
};

console.log(child);
console.log(child.__proto__ === Object.prototype);

Object.setPrototypeOf(child, parent);
console.log(child);
console.log(child.__proto__ === Object.prototype);
console.log(child.__proto__ === parent); // ! 这里是不是没有实现真正的继承, 因为 child.__proto__ 居然是 parent
child.show();
parent.show();
console.log(Object.getPrototypeOf(child));
*/
// * 这里只是 JS 原型的最原始的方法
// ? 不过这个方法似乎用不到最开始的猫狗大战

// TODO: 构造函数的继承
// 父类
function Shape(value) {
  this.x = 0;
  this.y = 0;
}
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape move.");
};
function Rect() {
  Shape.call(this);
}
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;

let rect = new Rect();

//
function Animal(value) {
  this.x = 0;
  this.y = 0;
}
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape move.");
};
function Rect() {
  Shape.call(this);
}
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;

let rect = new Rect();
