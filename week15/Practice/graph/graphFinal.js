class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!vertex){
            console.log("No vertex!!");  
            return
        }

        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }

    }


    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,"==>",[...this.adjacencyList[vertex]]);
            
        }
    }


    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    dfs(node, visited = new Set(),result=[])
    {
        if(visited.had(node))return 

        visited.add(node)
        result.push(node)

        for(let neighbour of this.adjacencyList[node]){
            this.dfs(neighbour,visited,result)
        }
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(adjacentVertex,vertex)
        }
        delete this.adjacencyList[vertex]
    }
}


let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","E")
graph.addEdge("B","D")
graph.addEdge("D","F")
graph.addEdge("F","G")
graph.addEdge("G","C")
graph.addEdge("E","D")

graph.display()