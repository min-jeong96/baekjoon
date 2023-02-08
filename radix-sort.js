import test from './program.js';

function sort(numbers) {
  let queueSmallDigit = [...numbers];
  let queueBigDigit = Array.from(Array(10), () => new Array());

  let divisor = 1;
  let isSortedAll = false;

  while(!isSortedAll) {
    for (let num of queueSmallDigit) {
      queueBigDigit[(Math.floor(num / divisor) % 10)].push(num);
    }

    isSortedAll = queueBigDigit[0].length === numbers.length;
    queueSmallDigit = queueBigDigit.reduce((arr, cur) => [...arr, ...cur], []);
    divisor *= 10;

    for (let i = 0; i < 10; i++) {
      queueBigDigit[i] = [];
    }
  }

  return queueSmallDigit;
}

await test(sort, [[16, 80, 18, 77, 3, 24, 88, 23]]);
await test(sort, [[11, 215, 15, 344, 372, 294, 100, 8, 145, 24, 198, 831]]);