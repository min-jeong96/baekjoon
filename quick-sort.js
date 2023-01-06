import test from './program.js';

function quickSort(numbers, start, end) {
  if (numbers.length === 1) {
    return numbers;
  } else {
    let array = sort(numbers);
    console.log(array);
    return array;
  }
}

function sort(numbers) {
  let array = numbers.slice(0, numbers.length - 1);
  let start = 0;
  let end = array.length - 1;
  let pivot = numbers[numbers.length - 1];

  while (end - start > 0) {
    console.log(array[start], array[end]);
    if (array[start] >= pivot && array[end] < pivot) {
      let temp = array[end];
      array[end] = array[start];
      array[start] = temp;
    }

    start++;
    end--;
  }

  if (end < start) {
    end++;
  }

  if (array[end] > pivot) {
    array.splice(end, 0, pivot);
  } else if (array[start] > pivot) {
    array.splice(start, 0, pivot);
  } else {
    array.push(pivot);
  }

  return array;
}

await test(quickSort, [[42, 32, 24, 60, 15, 5, 90, 45]]);