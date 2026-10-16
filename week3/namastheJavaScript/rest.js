const numbers = [1, 2, 3, 4, 5,[500,600]];

const [...copyOfNumbers] = numbers;


copyOfNumbers[0]=100

console.log(numbers);
console.log(copyOfNumbers);