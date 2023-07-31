// Reference: https://www.geeksforgeeks.org/closure-in-javascript/

function outerFunc(x) {
  function innerFunc(y) {
    return x + y;
  }
  return innerFunc;
}

let plusOne = outerFunc(1);
let plusTen = outerFunc(10);

console.log(plusOne(10));
console.log(plusTen(10));

// In JavaScript, if you declare a function within another function, then the local variables can remain accessible after returning from the function you called.

// A closure is a stack frame which is allocated when a function starts its execution, and not freed after the function returns (as if a 'stack frame' were allocated on the heap rather than the stack!). In JavaScript, you can think of a function reference variable as having both a pointer to a function as well as a hidden pointer to a closure.
