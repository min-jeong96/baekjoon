import test from './program.js';

function func(numOfData, numOfSections, numbers, sections) {
  for (let i = 0; i < numOfSections; i++) {
    let startIndex = sections[i][0] - 1;
    let lastIndex = sections[i][1];

    let sum = numbers.slice(startIndex, lastIndex).reduce((a, b) => a + b, 0);
    console.log(sum);
  }
}

await test(func, [5, 3, [5, 4, 3, 2, 1], [[1, 3], [2, 4], [5, 5]]]);