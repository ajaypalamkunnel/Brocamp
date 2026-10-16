//  adjacencyList = {
//     'A':['B'],
//     'B':['A','C'],
//     'C':['B']
//  }



class Graph{
    constructor() {
        this.adjecencyList = {}
    }

    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] =  new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }


    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + "=>" + [...this.adjecencyList[vertex]]);
            
        }
    }

    hasEdge(vertex1,vertex2){
        return (
          this.adjecencyList[vertex1].has(vertex2) &&
          this.adjecencyList[vertex2].has(vertex1 )
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjecencyList[vertex]
    }

    dfs(start){
        const stack = [start]
        const results = []
        const visited = {}
        visited[start] = true
        let currentVertex
        while(stack.length){
            currentVertex = stack.pop()
            results.push(currentVertex)

            this.adjecencyList[currentVertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }

        return results
    } 

    bfs(start){
        let queue = [start]
        let results = []
        let visited = {}
        visited[start] = true
         

        while(queue.length){
            let currentVertex = queue.shift()
             results.push(currentVertex)
             this.adjecencyList[currentVertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queue.push(neighbor)
                }
             })
        }

        return results
    }

      
}


let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')


graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','D')
graph.addEdge('C','E')
graph.addEdge('D','E')
graph.addEdge('D','F')
graph.addEdge('E','F')
graph.display()
console.log(graph.hasEdge('A','C'));

graph.removeEdge('A','C')
console.log(graph.hasEdge('A','C'));
console.log("DFS==>",graph.dfs('A'));
console.log("BFS==>",graph.bfs('A'));

