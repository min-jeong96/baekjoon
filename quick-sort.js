import test from './program.js';

async function func(numbers) {
  let quick = await quickSort(numbers);
  console.log('quick: ', quick);
}

function quickSort(numbers) {
  let sortedNumbers = sort(numbers);

  if (sortedNumbers.length < 3) {
    return numbers;
  } else {
    let beforePivotIndex = sortedNumbers.findIndex(value => value === numbers[numbers.length]);
    let left = quickSort(sortedNumbers.slice(0, beforePivotIndex));
    let right = quickSort(sortedNumbers.slice(beforePivotIndex));
    
    let all = left.slice(0);
    all.push(...right);
    return all;
  }
}

function sort(numbers) {
  let array = numbers.slice(0, numbers.length - 1);
  let start = 0;
  let end = array.length - 1;
  let pivot = numbers[numbers.length - 1];

  while (end - start > 0) {
    if (array[start] < pivot) {
      start++;
    }

    if ((array[start] > pivot && array[end] < pivot) ||
        (end - 1 === start && array[start] > array[end])) {
      let temp = array[end];
      array[end] = array[start];
      array[start] = temp;
    }

    if (array[end] > pivot) {
      end--;
    }

    if ((array[start] > pivot && array[end] < pivot) ||
        (end - 1 === start && array[start] > array[end])) {
      let temp = array[end];
      array[end] = array[start];
      array[start] = temp;
    }
  }

  if (array[end] < pivot) {
    array.splice(end + 1, 0, pivot);
  } else {
    array.splice(end, 0, pivot);
  }

  return array;
}

await test(func, [[42, 32, 24, 60, 15, 5, 90, 45]]);
await test(func, [[4, 1, 2, 3, 5]]);
await test(func, [[3, 2, 8, 1, 7, 4, 5, 6]]);