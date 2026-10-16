class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
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
        //add method available on Set DS
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '-->'+[...this.adjacencyList[vertex]]);
            
        }
    }
    //checke edge 
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
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

        visited.add(node);
        console.log(node);

        for(const neighbour of this.adjacencyList[node]){    
            this.dfs(neighbour,visited)
            //console.log("===",neighbour);   
        }
        
    }


    bfs(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVetex;
        visited[start] = true;

        while(queue.length){
            currentVetex = queue.shift();
            result.push(currentVetex);

            this.adjacencyList[currentVetex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }

        return result
    }

    

}

let graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")


graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.addEdge("B","E")
graph.addEdge("C","E")
graph.addEdge("D","E")
//graph.addEdge("E","E")

console.log(graph.hasEdge('A','C'));
//graph.removeEdge('A','B')

graph.display()

graph.dfs("A")


console.log("BFS==>",graph.bfs('A'));



//    A
// /  |  \
// B  C  D
// \ | /
//   E


// this.adjacencyList = {
//     A: ['B', 'C', 'D'],
//     B: ['A', 'E'],
//     C: ['A', 'E'],
//     D: ['A', 'E'],
//     E: ['B', 'C', 'D']
// };


