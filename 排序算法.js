let title = document.querySelector("title");
title.innerHTML = "排序算法";

/*
    TODO: 两个数字排序, 首先, 用数组表示两个数字; if 来进行判断
*/

// * 自己摸索写的, 很久不写排序了
// let arr = [10, 5];
// let arr2 = [];
// if (arr[1] < arr[0]) {
//   arr2 = [arr[1], arr[0]];
// } else {
//   arr2 = [arr[0], arr[1]];
// }
// console.log(arr2);

// function sort1(arr) {
//   let arr2 = [];
//   if (arr[1] < arr[0]) {
//     arr2 = [arr[1], arr[0]];
//   } else {
//     arr2 = [arr[0], arr[1]];
//   }
//   return arr2;
// }
// console.log(sort1([5, 1]));

// let arr = [10, 5];
// let arr2 = [];
// if (arr[1] < arr[0]) {
//   arr2 = [arr[1], arr[0]];
// } else {
//   arr2 = [arr[0], arr[1]];
// }
// console.log(arr2);

// * 搞错了, 是要两个数中小的那个
// let arr = [10, 5];
// if (arr[0] > arr[1]) {
//   console.log(arr[1]);
// } else {
//   console.log(arr[0]);
// }

// let myMinOf2 = function (arr) {
//   if (arr[0] > arr[1]) {
//     return arr[1];
//   } else {
//     return arr[0];
//   }
// };
// console.log(myMinOf2([20, 3]));

// * 简化
// let myMinOf2 = (arr) => (arr[0] > arr[1] ? arr[1] : arr[0]);
// console.log(myMinOf2([20, 20]));

// * 再优化, 使用到了, 析构赋值, 把 arr 拆开
let minOf2 = ([a, b]) => (a < b ? a : b);
console.log(minOf2([20, 10]));

// * Math 只是一个普通对象,
Math.min(1, 2);
Math.min.call(null, 1, 2);
Math.min.apply(null, [1, 2]);
Math.min.bind(null)(1, 2);

// * 卧槽, 有些像无限套娃, 不断的用 minOf2()
// let minOf3 = ([a, b, c]) => {
//   return minOf2([minOf2([a, b]), c]);
// };
// minOf3.call(null, [3, 2, 1]);
// * 小结, minOf2([a ,b]) , 析构赋值之后, 调用的时候, 中括号不要忘记了

// * 修改一下, 下面这样更加好看一些, 上面的显得太拥挤了
let minOf3 = ([a, b, c]) => {
  return minOf2([a, minOf2([b, c])]);
};
minOf3.call(null, [3, 2, 1]);

// * minOf4(),写一下, 直接举一反三就 OK 了
// let minOf4 = ([a, b, c, d]) => {
//   return minOf2([minOf3([a, b, c]), d]);
// };
// * 我这样写对么? 用了 minOf3 和 minOf2; 是的, 这样写,没问题, 只是可以写的更加美观一下
let minOf4 = ([a, b, c, d]) => {
  return minOf2([a, minOf3([b, c, d])]);
};
minOf4.call(null, [2, 5, 3, 1]);

// * 扩展: 任意长度数组求最小值
// let minOfX = () => {
//   minOf2([a, minOfX()]);
// };
// * 之后咋写呢?
// let min = (numbers) => {
//   return min([numbers[0], min(numbers.slice(1))]);
// };
// * slice(1), 这第一个参数, 表示的是, 下标, 返回的是, 除去第一个元素, 也就是下标为 0 的元素之后, 剩下的全部数组; 注意, 这个参数, 是包括这个下标的
// * 这个没有暂停的点呀, 没有中止条件呀
// * 那就用 if 判断就好了
/* if (长度){
    return min([numbers[0], min(numbers.slice(1))])
}else{
    math.min(numbers)
}
*/
let minOfX = (numbers) => {
  if (numbers.length > 2) {
    return minOfX([numbers[0], minOfX(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
};

// * 那里似乎必须要用 apply, 只有 apply 才接收数组

// TODO: 长度为 2 的数组, 排序
// let arr = [2, 4];
let arr = [3, 2, 1];
let sort2 = ([a, b]) => (a < b ? [a, b] : [b, a]);
// * 写的时候, 思路, 直接用析构赋值呗, 方便快捷, 形参写上, ([a, b]), 一个箭头, if else 思路, 写完了
// * 那么 sort3 怎么写, 思路, 可能是和 求 minOf3 的思路差不多
// ? let sort3 = ([a, b, c]) => sort2([a, sort2([b, c])]);
// * [Array(2), 3] ; 这个结果有些不太对劲哈
// * 对呀, 不应该再用返回单个数字的思路太解题了, 而是应该用返回数组的思路

// TODO:
// let arrCopy = arr.slice(0);
// let minIndex = arr.indexOf(minOfX(arr));
// let arr2 = sort2(arr.splice(minIndex, 1));
// console.log([arrCopy[minIndex]].concat(arr2));

// * 没优化的代码
let sort3 = (numbers) => {
  let newnumbers = numbers.slice(0);
  let index = numbers.indexOf(minOfX(numbers));
  let after = numbers.splice(index, 1);
  console.log(after); // ! 问题就出在这儿, splice 的返回值是, 删除的那个元素或者元素的集合, 并以数组形式返回被修改的内容。此方法会改变原数组。
  console.log(numbers);
  //   sort2(numbers);
  console.log(newnumbers);

  //   [newnumbers[index]].concat(sort2(numbers));
  console.log([newnumbers[index]].concat(sort2(numbers)));

  //   return [numbers[index]].concat(sort2(numbers.splice(index, 1)));
};

// * 优化一下代码
let sort33 = (numbers) => {
  let index = numbers.indexOf(minOfX(numbers));
  let min = numbers[index];
  numbers.splice(index, 1);
  return [min].concat(sort2(numbers));
};
let arrxxx = [3, 2, 1];
console.log(sort33(arrxxx));

// * 那么我就可以写一下 sort4 了
let sort4 = (numbers) => {
  let index = numbers.indexOf(minOfX(numbers));
  let min = numbers[index];
  numbers.splice(index, 1);
  return [min].concat(sort33(numbers));
};
let arrForSort4 = [10, 5, 3, 1];
console.log(sort4(arrForSort4));

// * 按照老师的思路写一下, 1. 问自己, 我要 return 的是什么, return 的后面怎么接代码, return xxx, xxx 应该怎么来; 2. 去给 xxx 创造环境, 要写 xxx , 我需要怎么写其他的地方 ...

let sort44 = (numbers) => {
  let indexOfMin = numbers.indexOf(minOfX(numbers));
  let min = numbers[indexOfMin];
  numbers.splice(indexOfMin, 1);
  return [min].concat(sort33(numbers));
};
let arrForSort44 = [10, 5, 3, 1];
console.log(sort44(arrForSort44));

// * 按照老师的思路写出来就很舒服

// TODO: 那我们可以开始写 递归了么
let sortX = (numbers) => {
  let indexOfMin = numbers.indexOf(minOfX(numbers));
  let min = numbers[indexOfMin];
  numbers.splice(indexOfMin, 1);

  if (numbers.length > 2) {
    return [min].concat(sortX(numbers));
  } else {
    return [min].concat(sort2(numbers));
  }
};
// ? 递归写成这样可以么?
let arrForSortX = [10, 5, 3, 1, 99, 0];
console.log(sortX(arrForSortX));
// ? 这样写,逻辑上有些问题

// * 我看老师是这样写的
let sortXTeacher = (numbers) => {
  if (numbers.length > 2) {
    let indexOfMin = numbers.indexOf(minOfX(numbers));
    let min = numbers[indexOfMin];
    numbers.splice(indexOfMin, 1);
    return [min].concat(sortX(numbers));
  } else {
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  }
};
let arrSortXTeacher = [12, 5, 8, 7, 7];
console.log(sortXTeacher(arrSortXTeacher));
/*
 * 小结: 从 2 个数字, 求最小值, 到 3 个数字求最小值, 接着到 4 个数字, 然后总结出来递归的写法, 求 N 个数字求最小值;
 * 接着是, 2 个数字从小到大排序, 3 个数字排序, 4 个数字排序, 递归总结出, N 个数字从小到大排序, 用到数组的几个 API, concat, splice, slice, indexOf
 */

// * 下半场
// TODO: minIndex
// ? 还记得 minIndex 怎么写的么, 就是返回一个数组中, 最小值的下标;
let minIndexMy1 = (numbers) => {
  return numbers.indexOf(minOfXWithMy(numbers));
};
// minOfXWithMy
/*
let min = (numbers) => {
  if (numbers.length > 2) {
    return min([numbers[0], min(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
};
*/
// ? 可以用 for 循环来写么?
let arrZZZ = [3, 2];
// * 所以还是两个数开始么, 求最小值
// * 直接写函数, 不要怕呀
let minIndexOf2 = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      return i;
    } else {
      return i + 1;
    }
  }
};
console.log(`minIndexOf2: ${minIndexOf2(arrZZZ)}`);
// ? 三个数怎么写呢? 在这个基础上改么?
let arrZZZ3 = [3, 2, 1];
let minIndexOf3My = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1]) {
      if (numbers[i] < numbers[i + 1]) {
        return i;
      } else {
        return i + 1;
      }
    } else {
      return i;
    }
  }
};
console.log(`minIndexOf2My: ${minIndexOf3My(arrZZZ3)}`);

// * 看了老师的答案之后, 感觉根本没那么复杂
let minIndexOf3 = (numbers) => {
  let index = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};
// * 而且这个函数, 完全可以把所以的数组长度都解决了, 所以, 改个名字
let minIndexOfX = (numbers) => {
  let index = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};
let arrMinIndexOfX = [3, 2, 1, 0, -1];
console.log(`minIndexOfX: ${minIndexOfX(arrMinIndexOfX)}`);
// * 注意: 1. 这个算法可以包含一个渣男的故事, 可以作为联想回忆; 2. 循环是从第二元素开始的, 因为你已经有了第一个女朋友了嘛

// TODO: 正式开始用循环来写, 选择排序法
// * 思路: 假设一个循环, 每次循环, 找到数组中, 最小的数字的下标, 然后和当前循环中的数字交换位置

let sortForLoop = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    // * 这里 -1 也关键
    console.log(`----`);
    console.log(`i: ${i}`);

    let index = minIndexOfX(numbers.slice(i)) + i; // * 这句很是关键的
    console.log(`index: ${index}`);
    console.log(`min: ${numbers[index]}`);
    if (index !== i) {
      console.log(`swap ${index}: ${i}`);
      console.log(`swapValue ${numbers[index]}: ${numbers[i]}`);
      swap(numbers, index, i);
    }
    console.log(numbers);
  }
  return numbers;
};

// ? swap() 怎么写呢?
let swap = (numbers, index, i) => {
  let temp = numbers[i];
  numbers[i] = numbers[index];
  numbers[index] = temp;
  // ? return numbers; 不必写这句的, 因为操作的是同一片内存呀
};
let arrForLoop = [40, 30, 20, 10];
// console.log(`sortForLoop: ${sortForLoop(arrForLoop)}`);
console.log(sortForLoop(arrForLoop));

// sortForLoop(arrForLoop)

// * 我想先把代码展开看看, 别了, 这个展开来看还更加的麻烦,别这么搞
/*
let sortForLoop = (numbers) => {
  let index = 0;
  let temp;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[index]) {
        index = j;
      }
    }
    temp = numbers[i];
    numbers[i] = numbers[index];
    numbers[index] = temp;
  }
};
*/

// * 选择排序的循环写法, 你给老子写一遍, 一个主函数, 加上两个辅助函数;
// TODO: 先把填空的部分写出来
// * 思路就是, 1. 找到最小值的下标; 2. 交换两个数字
// * 开始选择排序
/*
let sort = numbers =>{
    for(let i = 0;i<numbers.length-1;i++){
        let index = minIndex(numbers.slice(i))+i
        if(index!==i)
            swap(numbers, index, i)
    }
    return numbers
}
let minIndex = (numbers)=>{
    let index = 0
    for(let i = 1;i<numbers.length;i++){
        if(number[i]<number[index]){
            index = i
        }
    }
    return index
}

let swap = (numbers, index, i)=>{
    let temp = numbers[i]
    numbers[i] = numbers[index]
    numbers[index]  = temp
}
*/
