import test from './program.js';

function func(size, arr, questions) {
  let sumArr = [];

  // index [i][0]부터 [i][j]까지의 합
  for (let row of arr) {
    let sum = 0, sumRow = [];
    for (let num of row) {
      sum += num;
      sumRow.push(sum);
    }
    sumArr.push(sumRow);
  }

  // 행 합산 계산
  for (let question of questions) {
    let Y1j = question[1] - 1, Y2j = question[3] - 1;

    let sum = 0;
    for (let i = question[0] - 1; i <= question[2] - 1; i++) {
      if (Y1j <= 0) {
        sum += sumArr[i][Y2j];
      } else {
        sum += sumArr[i][Y2j] - sumArr[i][Y1j - 1];
      }
    }
    console.log(sum);
  }

}

let input = [
  4,
  [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]],
  [[2, 2, 3, 4], [3, 4, 3, 4], [1, 1, 4, 4]]
];
await test(func, input);

input = [
  2,
  [[1, 2], [3, 4]],
  [[1, 1, 1, 1], [1, 2, 1, 2], [2, 1, 2, 1], [2, 2, 2, 2]]
];
await test(func, input);