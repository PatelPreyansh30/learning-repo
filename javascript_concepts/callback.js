// Reference: https://www.w3schools.com/js/js_callback.asp

// A callback is a function passed as an argument to another function.
function myFirst() {
  console.log("First");
}

function mySecond() {
  console.log("Second");
}

mySecond();
myFirst();

function minus(num1, num2) {
  console.log(num1 - num2);
}

function plus(num1, num2) {
  console.log(num1 + num2);
}

function operation(num1, num2, myFunc) {
  myFunc(num1, num2);
}

operation(10, 20, plus);
operation(10, 20, minus);
