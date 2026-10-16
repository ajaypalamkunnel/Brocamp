//without parameter
var greeter = new Function("return 'Hi guys'");
console.log(greeter());
//with parameter
var resFunction = new Function("x", "y", "return x+y");
var res = resFunction(5, 3);
console.log(res);
// Example 3: Creating a function instance from a function expression
var add = new Function("const sum = function (a, b) {return a+ b}; return sum")();
console.log(add(2, 3));
var summ = new Function("const sum = function(a,b){return a+b};return sum")();
console.log(add(3, 6));
