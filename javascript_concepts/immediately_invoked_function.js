// Reference: https://www.geeksforgeeks.org/immediately-invoked-function-expressions-iife-in-javascript/

// Regular Function.
function Greet() {
  console.log("Welcome to GFG!");
}
// Execution of Regular Function.
Greet();
// IIFE creation and execution.
(function () {
  console.log("Welcome to GFG!");
})();

(function a_plus_b(a, b) {
  console.log(a + b);
})(10, 20);
