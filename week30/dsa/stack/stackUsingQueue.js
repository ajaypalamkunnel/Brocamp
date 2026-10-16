

class StackUsingQueue{

    constructor(){
        this.queue = []
    }

    push(x){
        this.queue.push(x)

        for(let i = 0 ; i < this.queue.length-1;i++){
            this.queue.push(this.queue.shift())
        }
    }


    pop(){

        if(this.queue.length===0){
            console.log("stack is empty");
            return
        }
        return this.queue.shift()
    }

    peek(){
        return this.queue.length > 0 ? this.queue[0] : null
    }

}