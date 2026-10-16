let arr = [1, 3, 5, 6];

function sum(num) {
  let res = num.reduce((acc, value) => {
    acc = value + acc;
    return acc;
  }, 0);
  console.log(res);

  return new Promise((resolve, reject) => {
    if (true) {
      resolve(res);
    } else {
      reject("sum failed");
    }
  });
}

sum(arr)
  .then((res) => {
    console.log("sum result = ", res);
  })
  .catch((err) => {
    console.log("Error while calculation");
  });
