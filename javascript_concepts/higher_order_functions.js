// A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result. Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is map, which takes an array and a function as arguments. map then uses this function to transform each item in the array, returning a new array with the transformed data. Other popular examples in JavaScript are forEach, filter, and reduce. A higher-order function doesn't just need to be manipulating arrays as there are many use cases for returning a function from another function. Function.prototype.bind is one such example in JavaScript.

const names = ["name1", "name2", "name3"];

const transformToUpperCase1 = function (names) {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i].toUpperCase());
  }
  return results;
};

const transformToUpperCase2 = function (names) {
  return names.map((item) => item.toUpperCase());
};

console.log(transformToUpperCase1(names));
console.log(transformToUpperCase2(names));
