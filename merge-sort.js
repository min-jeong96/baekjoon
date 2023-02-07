import test from './program.js';

async function sort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  } else {
    let set1 = await sort(numbers.slice(0, Math.floor(numbers.length / 2)));
    let set2 = await sort(numbers.slice(Math.floor(numbers.length / 2)))
    let merged = merge(set1, set2);
    return merged;
  }
}

function merge(set1, set2) {
  const merged = [];
  
  let set1Index = 0, set2Index = 0;
  while(merged.length < set1.length + set2.length) {
    if (!set1[set1Index]) {
      merged.push(set2[set2Index++]);
      continue;
    }
    if (!set2[set2Index]) {
      merged.push(set1[set1Index++]);
      continue;
    }

    if (set1[set1Index] < set2[set2Index]) {
      merged.push(set1[set1Index++]);
    } else {
      merged.push(set2[set2Index++]);
    }
  }

  return merged;
}

await test(sort, [[42, 32, 24, 60, 15, 5, 90, 45]]);
await test(sort, [[5, 4, 3, 2, 1]]);