class PriorityQueue{
    constructor(){
       this.values = [] 
    }


    enqueue (val,priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode)
        this.bubbleUp()
    }


    bubbleUp(){
        let newElementIndex = this.values.length-1;

        const newElement = this.values[newElementIndex];

        while(newElementIndex > 0){
            let parentIndex = Math.floor((newElementIndex-1)/2)
            let parentElement = this.values[parentIndex];

            if(newElement.priority <= parentElement.priority)break;

            this.values[parentIndex] = newElement;
            this.values[newElementIndex] = parentElement;

            newElementIndex = parentIndex
        }
    }

}

class Node{
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
        
    }
    
    
}