// Reference: https://www.geeksforgeeks.org/javascript-promise/

let promise = new Promise(function (resolve, reject) {
  let x = "hello1";
  let y = "hello1";

  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Reject");
  });
