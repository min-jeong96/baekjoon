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

await test(func, [6]);  // 4
await test(func, [5]);  // 2