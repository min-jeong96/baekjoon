import test from './program.js';

function func(numbers) {
  // Bubble Sort: O(n^2)
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  
  console.log(numbers);
}

await test(func, [[5, 2, 3, 4, 1]]);