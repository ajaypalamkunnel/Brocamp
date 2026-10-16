var currentStatus = "Pending";
console.log(currentStatus);
var control = "on";
function funcName() {
    // it throws an exception or never returns
    throw new Error("Error message from function with never as return type.");
}
console.log(funcName());
