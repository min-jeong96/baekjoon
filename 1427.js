import test from './program.js';

function func(numbers) {
  // Selection Sort: O(n^2)
  for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < numbers.length - 1; j++) {
      if (numbers[minIndex] > numbers[j + 1]) {
        minIndex = j + 1;
      }
    }
    let temp = numbers[minIndex];
    numbers[minIndex] = numbers[i];
    numbers[i] = temp;
  }
  
  console.log(numbers);
}

await test(func, [[5, 2, 3, 4, 1]]);
await test(func, [[2, 1, 4, 3]]);