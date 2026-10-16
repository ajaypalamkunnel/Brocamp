

class DirectedGraph{

    constructor(){
        this.list = {}
    }


    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = new Set()
        }
    }

    addEdge(from,to){

        if(!this.list[from]){
            this.addVertex(from)
        }


        if(!this.list[to]){
            this.addVertex(to)
        }

        this.list[from].add(to)


    }


    removeEdge(from,to){
        this.list[from]?.delete(to)
    }
}