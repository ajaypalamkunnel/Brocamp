class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!vertex){
            console.log("No vertex");
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

    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }


    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }

        delete this.adjacencyList[vertex]
    }

    dfs(node,visited = new Set()){

        if(visited.has(node))return

        visited.add(node)
        console.log(node);

        for(let neighbour of this.adjacencyList[node]){
            this.dfs(neighbour,visited)
        }
        
    }


    bfs(start){
       
        
        let queue = [start]
        let result = []
        let visited = {}
        let currentVetex
        visited[start] = true

        while(queue.length){
            currentVetex = queue.shift()
            result.push(currentVetex)

            this.adjacencyList[currentVetex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })

        }

        return result
    }



    display(){
        for(let vertex in this.adjacencyList){

            console.log(vertex,"=>",[...this.adjacencyList[vertex]]);
            
        }
    }

    
}


let graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")


graph.addEdge("A","B")
graph.addEdge("B","H")
graph.addEdge("G","C")
graph.addEdge("C","A")
graph.addEdge("D","A")
graph.addEdge("E","A")
graph.display()
console.log("------Removed------");


graph.removeVertex("D")
graph.display()

console.log("------DFS------");

graph.dfs("A")

console.log("------BFS------");

console.log( graph.bfs("A"));

