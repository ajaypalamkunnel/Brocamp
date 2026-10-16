class Person{
    name:string;
    age:number;
    gender:string

    constructor(name:string,age:number,gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender
    }

    intoduce():string{
        return `Hi, I am ${this.name}. I am ${this.age} years old, and I am ${this.age}.`
    }

}

let per = new Person('ajay',4,'male')

type Fuel={
    petrol:string,
    diesel:string
}

class Vehicle{
    brand:string;
    model:number;

    getDetails():string{
        return `Brand: ${this.brand}, Model: ${this.model}`
    }
}

class Car extends Vehicle{
    fuelType:Fuel;

    

    getDetails(): string {
        return `Brand: ${this.brand}, Model: ${this.model}, Fuel Type: ${this.fuelType}`
    }

}

