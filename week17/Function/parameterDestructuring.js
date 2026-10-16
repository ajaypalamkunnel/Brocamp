function parDes(_a) {
    var key1 = _a.key1, key2 = _a.key2;
    console.log("The value of key1 is " + key1);
    console.log("The value of key2 is " + key2);
}
parDes({ key1: "hiii", key2: 3 });
function getParams(_a) {
    var param1 = _a.param1, _b = _a.param2, param2 = _b === void 0 ? "default" : _b;
    console.log("The value of param1 is " + param1);
    console.log("The value of param2 is " + param2);
}
getParams({ param1: true, param2: "value" });
getParams({ param1: false });
