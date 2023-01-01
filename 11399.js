import test from './program.js';

function func(numbers) {
  // Selection Sort: O(n^2)
  let addend = 0, totalSum = 0;

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
    
    addend = addend + numbers[i];
    totalSum += addend;
  }

  addend += numbers[numbers.length - 1];
  totalSum += addend;

  console.log(totalSum);
}

await test(func, [[3, 1, 4, 3, 2]]);