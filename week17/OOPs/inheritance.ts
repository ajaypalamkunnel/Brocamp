class Shape{
    atri:number

    constructor(a:number){
        this.atri = a
    }


}

class Circle extends Shape{
    disp():void{
        console.log("Areaa of the circle: "+this.area);
        
    }
    area():void{
        console.log(`circle area : `+3.14*(this.atri*this.atri));
        
    }
}

let obj = new Circle(5)

obj.area()


//Multileve inhertance 

class Animal {
    // Move method
    move() {
        console.log('This animal moves');
    }
}

// Bird class extends Animal class
class Bird extends Animal {
    // Bird can fly
    fly() {
        console.log('This bird flies');
    }
}

// Parrot class inherits the Bird class
class Parrot extends Bird {
    // Parrot can speak
    speak() {
        console.log('The parrot speaks');
    }
}

// Creating an instance of the Parrot class
let P1 = new Parrot();
P1.speak();
P1.fly()
P1.move()