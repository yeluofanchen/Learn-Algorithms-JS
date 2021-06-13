// TODO: 选择排序, 递归写法
// * 思路, 关键词: 渣男找最小, splice + 羊肉串
let sort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let index = minIndex(arr);
  let min = arr.splice(index, 1);
  return min.concat(sort(arr));
};

// TODO: 渣男算法, 看到小的就替换
let minIndex = (arr) => {
  let index = 0;
  b;
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
// let arr = [30, 10, 20, 15];
console.log(sort(arr2));

// * 小结: 关键, 就是记得自己总结的关键词, 关键词对应着思路
