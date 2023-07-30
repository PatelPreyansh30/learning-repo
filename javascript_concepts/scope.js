// Local Scope allows access to everything within the boundaries (inside the box)

// Global Scope is everything outside the boundaries (outside the box). A global scope can not access a variable defined in the local scope because it is enclosed from the outer world, except if you return it.

// Block Scope is everything inside the boundaries but it works only for var and const keywords. It does not work with the var keyword.


// Block scope
{
  let x = 2;
  var y = "hello";
  const z = true;
}
console.log(x);
console.log(y);
console.log(z);


// Local scope
function myFunction() {
  let carName = "Volvo";
}
console.log(carName);

// Reference: https://www.w3schools.com/js/js_scope.asp