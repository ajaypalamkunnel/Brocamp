// let arr = [3,8,4,9,15,6,5,3,8]

// let newArr = arr.filter((num)=>num%3!==0)

// console.log(newArr)



let fun = ()=>{
    console.log(this)
}
fun()


function hello(){
    console.log(this)

}

hello()