// TODO: 选择排序
// * 关键的是思路, 一个数组中, 找到最小的值, 和一个循环中的数字比较, 比其小, 就交换位置,
// * 不对, 还是得先写一个递归, 递归好写; 思路,
let sort = (arr) => {
  console.log(`----`);

  if (arr.length <= 1) return arr;
  let index = minIndex(arr);
  let min = arr[index];
  arr.splice(index, 1);
  return [min].concat(sort(arr));
};

// * 回想一下渣男算法, 一个寻找数组最小值的下标, 循环算法
let minIndex = (arr) => {
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[index]) {
      index = i;
    }
  }
  return index;
};
let arr = [30, 20, 10];
let arr2 = [20, 10];
let arrX = [12, 5, 8, 7, 66, 100, 101];
console.log(sort(arrX));

// * 以上纯手写, 未参考, 完全按照思路来写, 结果运行正确
// * 这个算法, sort 递归, 有些像, 串羊肉串
/*
 * 小结: sort 递归, 还是比较好写的, 渣男下标 + 羊肉串, 就可以写完这个了
 * 老师的总结: 每次找到最小的数放前面, 然后对后面的数做同样的事情
 */

// function sort(arr) {
//   let value = arr[minIndex(arr)];

//   return xxx;
// }

// * 选择排序的循环写法, 我这里没有写

// TODO: 快速排序
// * 思路: 大概思路, 点名, 点到名字的人, 左边的人, 右边的人, 这个人的位置就定好了
// * 1. 点名, 他的位置, 他的值 2. 从数组中删除 3. 左边的人 push 左边数组, 右边的人 push 进右边数组, 4. 左边数组 + [点名] + [右边数组]
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
let arrqs = [12, 5, 8, 7, 66, 222, 101];
console.log(quickSort(arrqs));
