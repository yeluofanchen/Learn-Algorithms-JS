let title = document.querySelector("title");
title.innerHTML = "快速排序";

/*
TODO: 快速排序, 递归写法 
* 思路: 体育委员, 随机站在一个人面前, 点名, 小于这个数字去左边, 大于这个数字的去右边; 1. 递归的终止条件; 
* 2. 选取一个人, 也就是中心点的, 拿到他的下标, 再从数字中把这个数组 splice 出去; 
* 3. let 左边, 和右边; 
* 4. forLoop, 小于这个中心点的值, push 到左边数组, 同理, 大于的...
* 5. 关键的, return, 左边数组 + 中心点数组 + 右边数组, 这一行是递归的精华所在
*/

let quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
// let arr = [40, 30, 20, 10, -10];
let array = [2, 1, 5, 3, 8, 4, 9, 5];
console.log(quickSort(array));

// * 习惯性的把 numbers 都换成 arr, 这样代码体量看着小一些
