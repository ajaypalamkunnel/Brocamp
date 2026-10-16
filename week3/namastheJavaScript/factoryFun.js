function* myFun(){

    yield "hello"
    yield "hi"
    yield "ajay"
    yield "achu"
}
const myobj = myFun()
console.log(myobj.next(),myobj.next());
console.log(myobj.next());
console.log(myobj.next(),myobj.next());
console.log(myobj.next());