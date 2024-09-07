/// finding the max value from this array

const numbers = [20, 30, 55, 60, 12, 40, 99];

function getMax(num) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const max = getMax(numbers);
console.log("Max value is ", max);
