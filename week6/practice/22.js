function resolveAllPromise(promise){
    return Promise.all(promise)
}

const promise1 = Promise.resolve(3)
const promise2 = Promise.resolve(20)
const promise3 = Promise.resolve("hello")


resolveAllPromise([promise1,promise2,promise3])

.then((value)=>{
    console.log(value);
    
})
.catch((err)=>{
    console.error(err)
})