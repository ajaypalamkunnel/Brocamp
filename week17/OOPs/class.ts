class Car{
    engine:string;

    //constructor

    constructor(engine:string){
        this.engine = engine
    }

    disp():string{
        console.log('Engine is : ',this.engine);
        return '=-=-=-=--=-=-'
    }
}



let Hyundai = new Car("kia 1500cc")

console.log(Hyundai.disp());
console.log(Hyundai.engine);

