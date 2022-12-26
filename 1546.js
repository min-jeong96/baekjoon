import test from './program.js';

function func(numOfSubjects, scores) {
  const MAX = Math.max(...scores);
  let sum = scores.reduce((a, b) => a + b, 0);
  let avg = sum / MAX * 100 / numOfSubjects;

  console.log(`\n과목 갯수: ${numOfSubjects}`);
  console.log(`각 시험 성적: ${scores}`);
  console.log(avg);
}

await test(func, [3, [40, 80, 60]]);
await test(func, [3, [10, 20, 30]]);
await test(func, [4, [1, 100, 100, 100]]);
await test(func, [5, [1, 2, 4, 8, 16]]);
await test(func, [2, [3, 10]]);