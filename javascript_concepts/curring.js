// Currying is when you break down a function that takes multiple arguments into a series of functions that take part of the arguments.

function add(a, b) {
  return a + b;
}

// Curring
function num1(a) {
  return function num2(b) {
    return a + b;
  };
}

console.log(add(10, 20));

console.log(num1(20)(20));
