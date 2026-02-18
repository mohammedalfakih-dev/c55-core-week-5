// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.

import generateBigArray from "./bigArray.js";

function linear_search(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

function binary_search(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

const target = 123456789;

const array1k = generateBigArray(1000);
const array100k = generateBigArray(100000);
const array10M = generateBigArray(10000000);

console.log("\nSearch Performance Test\n");

console.time("Linear Search 1k");
linear_search(array1k, target);
console.timeEnd("Linear Search 1k");

console.time("Linear Search 100k");
linear_search(array100k, target);
console.timeEnd("Linear Search 100k");

console.time("Linear Search 10M");
linear_search(array10M, target);
console.timeEnd("Linear Search 10M");

console.log("---");

console.time("Binary Search 1k");
binary_search(array1k, target);
console.timeEnd("Binary Search 1k");

console.time("Binary Search 100k");
binary_search(array100k, target);
console.timeEnd("Binary Search 100k");

console.time("Binary Search 10M");
binary_search(array10M, target);
console.timeEnd("Binary Search 10M");

/*
Reflection:

The results show that linear search gets slower as the array size increases, taking 12.5ms for 10 million elements. 
Binary search remains extremely fast even on large arrays taking less than 0.01ms for 10 million elements. 
This shows that binary search is much more efficient on large arrays because it repeatedly halves the search space instead of checking every element.
*/
