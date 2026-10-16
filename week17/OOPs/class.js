var Car = /** @class */ (function () {
    //constructor
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log('Engine is : ', this.engine);
        return '=-=-=-=--=-=-';
    };
    return Car;
}());
var Hyundai = new Car("kia 1500cc");
console.log(Hyundai.disp());
console.log(Hyundai.engine);
