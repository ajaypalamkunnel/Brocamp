class Heap{
    constructor(){
        this.items = []
    }
    
    left(i){
        return 2*i+1
    }
    
    right(i){
        return 2*i+2
    }
    
    parent(i){
        return Math.floor((i-1)/2)
    }
    
    swap(i,j){
        [this.items[i],this.items[j]] = [this.items[j],this.items[i]]
    }
    
    insert(data){
        this.items.push(data)
        this.heapifyUp(this.items.length-1)
    }
    
    heapifyUp(index){
        
        let parent = this.parent(index)
            
        while(index > 0 && this.items[parent] < this.items[index]){
            
            this.swap(parent,index)
            
            index = parent
            parent = this.parent(index) 
            
        }
    }
    
    extractMax(){
        
        if(this.items.length==1)return this.items.pop()
        
        let max = this.items[0]
        this.items[0] = this.items.pop()
        
        this.heapifyDown(0)
        return max
        
    }
    
    heapifyDown(index){
        let length = this.items.length
        let parent = index
        
        let left = this.left(index)
        let right = this.right(index)
        
        if(left < length && this.items[left] > this.items[parent]){
            parent = left
        }
        
        if(right < length && this.items[right] > this.items[parent]){
            parent = right
        }
        
        if(index !== parent){
            this.swap(index,parent)
            this.heapifyDown(parent)
        }
    }
    
    display(){
        console.log(this.items)
    }

    
    
}

let myHeap = new Heap()


myHeap.insert(10)
myHeap.insert(20)
myHeap.insert(990)
myHeap.insert(40)
myHeap.insert(30)
console.log(myHeap.extractMax(30))
myHeap.display()
  