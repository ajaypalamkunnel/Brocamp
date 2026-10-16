var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Class1 = /** @class */ (function () {
    function Class1() {
    }
    return Class1;
}());
var Class2 = /** @class */ (function (_super) {
    __extends(Class2, _super);
    function Class2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Class2.prototype.method2 = function () {
        console.log("this is method 2");
    };
    return Class2;
}(Class1));
var Class3 = /** @class */ (function (_super) {
    __extends(Class3, _super);
    function Class3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Class3.prototype.method1 = function () {
        console.log("this is method 1 from abstracted");
    };
    return Class3;
}(Class2));
var obj1 = new Class3();
obj1.method1();
obj1.method2();
