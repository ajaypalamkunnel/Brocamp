function* generator(num) {
    let i =1
  let mul = 1;
  while (true) {
    mul = i * num;
    i++

    yield mul;
  }
}

let genrate = generator(3);

console.log(genrate.next().value);
console.log(genrate.next().value);
console.log(genrate.next().value);
console.log(genrate.next().value);
console.log(genrate.next().value);
