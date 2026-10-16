let arr = [2, 4, 6, 8, 9, 7, 15];
let newArr = [];

arr.forEach((value) => {
  if (value === 2 || value === 6) {
    let sq = value * value;
    newArr.push(sq);
  } else if (value === 4 || value === 8) {
    let cub = value * value * value;
    newArr.push(cub);
  }
});

console.log(newArr);

