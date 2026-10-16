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
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.atri = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Areaa of the circle: " + this.area);
    };
    Circle.prototype.area = function () {
        console.log("circle area : " + 3.14 * (this.atri * this.atri));
    };
    return Circle;
}(Shape));
var obj = new Circle(5);
obj.area();
//Multileve inhertance 
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // Move method
    Animal.prototype.move = function () {
        console.log('This animal moves');
    };
    return Animal;
}());
// Bird class extends Animal class
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Bird can fly
    Bird.prototype.fly = function () {
        console.log('This bird flies');
    };
    return Bird;
}(Animal));
// Parrot class inherits the Bird class
var Parrot = /** @class */ (function (_super) {
    __extends(Parrot, _super);
    function Parrot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Parrot can speak
    Parrot.prototype.speak = function () {
        console.log('The parrot speaks');
    };
    return Parrot;
}(Bird));
// Creating an instance of the Parrot class
var P1 = new Parrot();
P1.speak();
P1.fly();
P1.move();
