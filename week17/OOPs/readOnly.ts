interface Car{
    model:string;
    year:number;
    readonly fuel:string;
}

let car:Car={
    model:"BMW",
    year:2019,
    fuel:'petrol'
}

// car.fuel="diesel" //error 

console.log(car.model);
console.log(car.year);
console.log(car.fuel);