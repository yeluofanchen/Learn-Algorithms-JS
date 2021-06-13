let title = document.querySelector("title");
title.innerHTML = "SelectSort";

// * 选择排序
let sort = (numbers) => {
  if (numbers.length <= 1) return numbers;
  for (let i = 0; i < numbers.length - 1; i++) {
    let index = minIndex(numbers.slice(i)) + i;
    if (index !== i) swap(numbers, index, i);
  }
  return numbers;
};
let minIndex = (numbers) => {
  let index = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};

let swap = (numbers, index, i) => {
  let temp = numbers[i];
  numbers[i] = numbers[index];
  numbers[index] = temp;
};

let arr = [40, 30, 20];
console.log(sort(arr));
