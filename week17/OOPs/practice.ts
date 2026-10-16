abstract class Class1{
    abstract method1():void
}

abstract class Class2 extends Class1{
    method2():void{
        console.log(`this is method 2`);
    }
}

class Class3 extends Class2{
    method1(): void {
        console.log(`this is method 1 from abstracted`);
        
    }
}

let obj1 = new Class3();

obj1.method1()

obj1.method2()