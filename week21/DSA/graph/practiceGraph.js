class Graph{
    constructor(){
        this.adjacencyList = {}

    }


    addvertex(vertex){
        if(!this.adjacencyList[value]){
            this.adjacencyList[value] = new Set()
        }
    }

    addEdge(v1,v2){
        if(!this.adjacencyList[v1]){
            this.addvertex(v1)
        }
        if(!this.adjacencyList[v2]){
            this.addvertex(v2)
        }

        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }

    
}

