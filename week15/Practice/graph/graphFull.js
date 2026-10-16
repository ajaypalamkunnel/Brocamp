class Graph{
    constructor(){
        this.adjacencylist = {}
    }

    addVertex(vertex){
        if(!vertex){
            return
        }
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencylist[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencylist){
            console.log(vertex ,"=>",[...this.adjacencylist[vertex]]);
            
        }
    }

    dfs(node,visited= new Set(),result=[]){
        
        if(visited.has(node))return

        visited.add(node)
        result.push(node)
        

        for(let neighbour of this.adjacencylist[node]){
            this.dfs(neighbour,visited,result)
        }

        return result
    }

    bfs(start){
        let queue = [start];
        let visited = {}
        let result = []
        let currentVertex
        visited[start] = true

        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencylist[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour]=true
                    queue.push(neighbour)
                }
            })
        }
        return result
     }



     
     bfs2(start){
        let queue = [start]
        let visited = {}
        let result = []
        let currentVertex

        visited[start] = true

        while(queue.length){
            currentVertex = queue.shift()

            result.push(currentVertex)

            this.adjacencylist[currentVertex].forEach(neighbour=>{

                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }

            })
        }
        return result
     }





     defs(node,visited = new Set,result){

        if(visited.has(node))return

        visited.add(node)
        result.push(node)

        for(let neighbour of this.adjacencylist[node]){
            this.defs(neighbour,visited,result)
        }

        return result
     }


     bfs(){

        
     }






    removeEdge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencylist[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencylist[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }

        delete this.adjacencylist[vertex]


    }



    breadthFs(start){
        let queue = [start]
        let visited = {}
        let result;
        let currentVertex
        visited[currentVertex] = tree

        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencylist[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })
            
        }

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
console.log("====DFS====");
console.log(graph.dfs("A"));
console.log("====BFS====");
console.log(graph.bfs("A"));
