import test from './program.js';

function func(numOfNumbers, numbers) {
  let sum = 0;
  for (let i = 0; i < numOfNumbers; i++) {
    sum+= Number(numbers[i]);
  }
  console.log(`\n숫자 갯수: ${numOfNumbers}`);
  console.log(`공백 없이 주어진 N개 숫자: ${numbers}`);
  console.log(sum);
}

await test(func, [1, '1']);
await test(func, [5, '54321']);
await test(func, [25, '7000000000000000000000000']);
await test(func, [11, '10987654321']);