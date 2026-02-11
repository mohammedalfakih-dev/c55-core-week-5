//Your code here
function countAboveThreshold(numbers, threshold) {
  if (!Array.isArray(numbers)) return 0;
  return numbers.reduce(
    (count, n) => (typeof n === "number" && n > threshold ? count + 1 : count),
    0,
  );
}

module.exports = { countAboveThreshold };

//Example Usage
countAboveThreshold([1, 5, 10, 3], 4); // returns 2
countAboveThreshold([7, 8, 9], 10); // returns 0
countAboveThreshold([], 5); // returns 0
