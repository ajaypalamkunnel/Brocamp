
class WeightedGraph{

    constructor() {
        this.list = {}
    }


    addVertex(vertex){

        if(!this.list[vertex]){
            this.list[vertex] = new Map()
        }

    }


    addEdge(from,to,weight=1){

        if(!this.list[from]){
           this.addVertex(from)
        }


        if(!this.list[to]){
            this.addVertex(to)
        }

        this.list[from].set(to,weight)
    }



    




}