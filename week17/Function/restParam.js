function resFunSum() {
    var res = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        res[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, res_1 = res; _a < res_1.length; _a++) {
        var num = res_1[_a];
        sum += num;
    }
    return sum;
}
console.log(resFunSum(4, 6, 323, 543));
