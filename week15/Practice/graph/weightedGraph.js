class Graph{
    constructor(){
        this.adjacencyList = {}
    }


    addVertex(vertex){
        if(!vertex){
            console.log("No vertex ");
            return    
        }

        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Map()
        }
    }

    addEdge(vertex1,vertex2,weight){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].set(vertex2, weight);
        this.adjacencyList[vertex2].set(vertex1, weight);

    }


    display(){
        for(let vertex in this.adjacencyList){
            const edges = [...this.adjacencyList[vertex]]
            .map(([adjacentVertex,weight])=> `${adjacentVertex} (${weight})`)
            console.log(vertex, "=>", edges);
        }
        
        
    }
}


let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 5); // Adding weights
graph.addEdge("B", "C", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 4);
graph.addEdge("E", "A", 1);

graph.display();