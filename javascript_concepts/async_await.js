// Reference: https://www.geeksforgeeks.org/async-await-function-in-javascript/

let asyncDemo = async () => {
  console.log("Hello 1");

  setTimeout(() => {
    console.log("Hello");
  }, 0);

  console.log("Hello 2");
};

console.log(1);
asyncDemo();
console.log(2);
