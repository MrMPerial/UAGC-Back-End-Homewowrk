// JavaScripting //

// Introduction
console.log('hello');

// Variables
var example = 'some string';
console.log(example);

// Strings
var someString = 'this is a string';
console.log(someString);

// String length
var example = 'example string';
console.log(example.length);

// Revising Strings
var pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful');
console.log(pizza);

// Numbers
var example = 123456789;
console.log(example);

// Rounding numbers
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);

// Number to String
var n = 128;
console.log(n.toString());

// If statement
var fruit = 'orange';
if (fruit.length > 5) {
  console.log('The fruit name has more than five characters.');
} else {
  console.log('The fruit name has five characters or less.');
}

// For loop
var total = 0;
var limit = 10;
for (var i = 0; i < limit; i++) {
  total += i;
}

console.log(total);

// Arrays
var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];

console.log(pizzaToppings);

// Array filtering
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(function evenNumbers(number) {
  return number % 2 === 0;
});

console.log(filtered);

// Accessing array values
var food = ['apple', 'pizza', 'pear'];

console.log(food[1]);

// Looping through arrays
var pets = ['cat', 'dog', 'rat'];

for (i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);

// Objects
var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
};

console.log(pizza);

// Object properties
var food = {
  types: 'only pizza'
};

console.log(food.types);

// Functions
function eat(food) {
  return food + ' tasted really good.';
}

console.log(eat('bananas'));

// Function Arguments
function math(first, second, third) {
  return second * third + first;
}

console.log(math(53, 61, 67));

// Scope
var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
             console.log("a: "+a+", b: "+b+", c: "+c);
             (function thirdFunction(){

                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();

// Free Code Camp //

// Factorialize a number
function factorialize(num) {
  var number = 1;
  for (var n = 2; n <= num; n++) {
    number = number * n;
  }
  return number;
}

factorialize(5);

// Check palindromes
function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z|1-9]/g, "");

  if (str.length === 0) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return palindrome(str.slice(1,str.length - 1));
  }
}

palindrome("eye");

// Seek and Destroy
function destroyer(arr) {
  var jack = Array.prototype.slice.call(arguments);
  jack.splice(0, 1);
  return arr.filter(function(element) {
    return jack.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Confirm the Ending
function confirmEnding(str, target) {
  if (str.substr(-target.length) === target)
    return true;
  else
    return false;
}

confirmEnding("Bastian", "n");

// Return largest numbers in arrays
function largestOfFour(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    var bigOne = 0;
    for (var n = 0; n < arr[i].length; n++) {
      if (arr[i][n] > bigOne) {
        bigOne = arr[i][n];
      }
    }

    res[i] = bigOne;
  }

  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
