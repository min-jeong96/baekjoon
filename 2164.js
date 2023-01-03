import test from './program.js';

function func(num) {
  let cards = [];
  for (let i = 1; i <= num; i++) {
    cards.push(i);
  }

  while (cards.length > 1) {
    let twoCards = cards.splice(0, 2);
    cards.push(twoCards[1]);
  }

  console.log(cards[0]);
}

await test(func, [17]); // 2
await test(func, [16]); // 16
await test(func, [15]); // 14
await test(func, [14]); // 12
await test(func, [13]); // 10
await test(func, [12]); // 8
await test(func, [11]); // 6
await test(func, [10]); // 4
await test(func, [9]);  // 2
await test(func, [8]);  // 8
await test(func, [7]);  // 6
await test(func, [6]);  // 4
await test(func, [5]);  // 2
await test(func, [4]);  // 4
await test(func, [3]);  // 2
await test(func, [2]);  // 2
await test(func, [1]);  // 1