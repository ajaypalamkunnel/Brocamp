var admin = {
    fname: "Ajay",
    lname: "ps",
    sayHai: function () {
        return "hi ".concat(this.fname);
    }
};
console.log(admin.sayHai());
var details = {
    name: "ajay",
    std: 4
};
var ajay = { dbId: 21, email: "ajay@gmail.com", userId: 321,
    // startTrial()={
    //     return ""
    // }
    startTrail2: function () {
        return "trial started";
    }
};
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function () {
        console.log("Printing...");
    };
    Printer.prototype.scan = function () {
        console.log("Scanning...");
    };
    Printer.prototype.copy = function () {
        console.log("Copying...");
    };
    return Printer;
}());
var printer = new Printer();
printer.print();
printer.scan();
printer.copy();
var useme = {
    name: "Ajay",
    greet: function () {
        console.log("Hello my name is ".concat(this.name));
    }
};
useme.greet();
