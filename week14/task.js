// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(value){
//         this.items.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return
//         }

//         return this.items.pop()
//     }


//     reverse(){
//         let temp = [];

//        while(!this.isEmpty()){
//             temp.push(this.pop())
//        }
//        console.log(temp);
       
//        while(temp.length !==0 ){
//             this.items.push(temp.pop())
//        }
//     }


//     isEmpty(){
//         return this.items.push.length === 0
//     }

//     print(){
//         console.log(this.items);
        
//     }

// }


// let st = new Stack()
// st.push(10)
// st.push(20)
// st.push(25)
// st.push(15)
// st.print()

// st.reverse()
// st.print()








// // // i/p  aabbccc
// // // o/p  {a:2,b:2,c:3}



// // function freq(arr){
// //     let value = arr.split("")
// //     let fre = {}

// //     value.forEach((val)=>{
// //         if(fre[val]){
// //             fre[val]++
// //         }else{
// //            fre[val]=1 
// //         }
// //     })


    

    

// //     return fre
// // }


// // console.log( freq("aabbccc"));
// // //freq("aabbccc")



// // function mergeSort(arr){
// //     if(arr.length<2){
// //         return arr
// //     }

// //     let mid = Math.floor(arr.length/2)

// //     let left = arr.slice(0,mid)
// //     let right = arr.slice(mid)


// //     return merge(mergeSort(left),mergeSort(right))
// // }


// // function merge(left,right){

// //     let sorted = []

// //     while(left.length && right.length)
// //     {
// //         if(left[0] <= right[0]){
// //             sorted.push(left.shift())
// //         }else{
// //             sorted.push(right.shift())
// //         }

// //     }

// //     return [...sorted,...left,...right]
// // }


// // console.log(mergeSort([5,37,22,5,22,2]));
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.isEmpty() ? null : this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      console.log(this.items);
    }
  
    // Reverse using a temporary array
    reverse() {
      const tempArray = [];
      while (!this.isEmpty()) {
        tempArray.push(this.pop());
      }
      for (let item of tempArray) {
        this.push(item);
      }
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  
  console.log("Original Stack:");
  stack.printStack();
  
  stack.reverse();
  
  console.log("Reversed Stack:");
  stack.printStack();
  