// Homework Two

/*

Problem 1

Create a loop that starts at 1 and ends at 100. For every number divisible by 3,
log 'Fizz' to the console. For every number divisible by 5, log 'Buzz' to the
console. For every number divisible by both, log 'FizzBuzz' to the console.

*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i + " Fizz");
  }

  if (i % 5 === 0) {
    console.log(i + " Buzz");
  }

  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " Fizz Buzz");
  }
}

/*

Problem 2

Write a function that returns the average
of the given array rounded down to its
nearest integer.

*/

function addArray(first, second) {
  return first + second;
}

function getAverage(set) {
  let sum = set.reduce(addArray);
  let avg = sum / set.length;

  for (let item of set) {
    return Math.floor(avg);
  }
}

console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3
console.log(getAverage([1,1,1,1,1,1,1,2])); //1
console.log(getAverage([5,5])); //5
