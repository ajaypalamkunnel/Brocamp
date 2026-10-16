// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }


//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
        
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }


//         this.adjacencyList[vertex1].add(vertex2);
//         this.adjacencyList[vertex2].add(vertex1);
//     }


//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2)&&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }






//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex+ "==>"+[...this.adjacencyList[vertex]]);
            
//         }
//     }


// }

// let graph = new Graph();

// graph.addVertex('PALA')
// graph.addVertex('RAMAPURAM')
// graph.addVertex('KOCHI')
// graph.addVertex('THRISSUR')



// graph.addEdge('PALA','RAMAPURAM')
// graph.addEdge('PALA','KOCHI')
// graph.addEdge('KOLLAM','THRISSUR')

// graph.display()





// class Graph{
//     constructor() {
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(v1,v2){
//         if(!this.adjacencyList[v1]){
//             this.addVertex(v1)
//         }

//         if(!this.adjacencyList[v2]){
//             this.addVertex(v2)
//         }

//         this.adjacencyList[v1].add(v2)
//         this.adjacencyList[v2].add(v1)
//     }


//     display(){
//         for(let vertex in this.adjacencyList){

//             console.log(vertex+" ==> "+[...this.adjacencyList[vertex]]);
            
//         }
//     }

//     hasEdge(v1,v2){
//         return(
//             this.adjacencyList[v1].has(v2) && 
//             this.adjacencyList[v2].has(v1)
//         )
//     }

//     removeEdge(v1,v2){
//         this.adjacencyList[v1].delete(v2)
//         this.adjacencyList[v2].delete(v1)
//     }


//     removeVertex(vertex){

//         if(!this.adjacencyList[vertex]){
//             return
//         }

//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             console.log("----",adjacentVertex,"---------",vertex);
            
//             this.removeEdge(vertex,adjacentVertex)
//         }
        
//         delete this.adjacencyList[vertex]
//     } 
// }







// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }


//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }


//     addEdge(v1,v2){
//         if(!this.adjacencyList[v1]){
//             this.addVertex(v1)
//         }

//         if(!this.adjacencyList[v2]){
//             this.addVertex(v2)
//         }


//         this.adjacencyList[v1].add(v2)
//         this.adjacencyList[v2].add(v1)
//     }

//     removeEdge(v1,v2){
//         this.adjacencyList[v1].delete(v2)
//         this.adjacencyList[v2].delete(v1)
//     }


//     display(){
//         for(let vertex in this.adjacencyList){

//             console.log(vertex+"==>",[...this.adjacencyList[vertex]]);
            
//         }
//     }


//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         //remiovig edges
//         for(let addjacentVertex in this.adjacencyList[vertex]){
//             this.removeEdge(vertex,addjacentVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }


//     dfs(node,visited = new Set()){
        
//         if(visited.has(node))return

//         visited.add(node);
//         console.log(node);

//         for(const neighbour in this.adjacencyList[node]){
//             this.dfs(neighbour,visited)
//         }
        
//     }
// }



// let graph = new Graph();

// graph.addVertex('PALA')
// graph.addVertex('RAMAPURAM')
// graph.addVertex('KOCHI')
// graph.addVertex('THRISSUR')



// graph.addEdge('PALA','RAMAPURAM')
// graph.addEdge('PALA','KOCHI')
// graph.addEdge('KOLLAM','THRISSUR')

// graph.display()
// graph.removeVertex('PALA')

// console.log("-------------");


// graph.removeVertex('KOLLAM')
// graph.display()

// graph.dfs("RAMAPURAM")



// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }


//     addEdge(v1,v2){
//         if(!this.adjacencyList[v1]){
//             this.addVertex(v1)
//         }

//         if(!this.adjacencyList[v2]){
//             this.addVertex(v2)
//         }

//         this.adjacencyList[v1].add(v2)
//         this.adjacencyList[v2].add(v1)

//     }


//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex+"==>"+[...this.adjacencyList[vertex]]);
            
//         }
//     }

//     hasEdge(v1,v2){
//         return (
//             this.adjacencyList[v1].has(v2) &&
//             this.adjacencyList[v2].has(v1)
//         )
//     }

//     removeEdge(v1,v2){
//         this.adjacencyList[v1].delete(v2)
//         this.adjacencyList[v2].delete(v1)
//     }

//     removeVertex(v){
//         if(!this.adjacencyList[v]){
//             return
//         }

//         for(let adjacentVerted of this.adjacencyList[v]){
//             this.removeEdge(v,adjacentVerted)
//         }

//         delete this.adjacencyList[v]

//     }



//     dfs(node,visited = new Set()){

//         if(visited.has(node))return

//             visited.add(node);
//             console.log(node);
           
        

//         for(let neighbour in this.adjacencyList[node]){
//             this.dfs(neighbour,visited)
//         }

//     }


//     bfs(start){
//         let queue = [start];
//         let result = [];
//         let visited = {}

//         let currentVetex;

//         visited[start] = true


//         while(queue.length){
//             currentVetex = queue.shift();

//             result.push(currentVetex);

//             this.adjacencyList[currentVetex].forEach(neighbour=>{
//                 if(!visited[neighbour]){
//                     visited[neighbour] = true
//                     queue.push(neighbour)
//                 }
//             })
//         }
//     }
// }



// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }


//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }


//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjacencyList[vertex1].has(vertex1) &&
//             this.adjacencyList[vertex2].has(vertex2)
//         )
//     }


//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }



//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }


//         for(let addjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,addjacentVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     dfs(node, visited = new Set()){
//         if(!visited.has(node))return

//         visited.add(node);
//         console.log(node);

//         for(let neighbour of this.adjacencyList[node]){
//             this.dfs(neighbour,visited)
//         }
        
//     }


//     bfs(start){
//         let queue = [start]
//         let result = [];
//         let visited = {}

//         let currentVertex;

//         visited[start] = true

//         while(queue.length){
//             currentVertex = queue.shift()

//             result.push(currentVertex);
            
//             this.adjacencyList[currentVertex].forEach(neighbour=>{
//                 if(!visited[neighbour]){
//                     visited[neighbour] = true
//                     queue.push(neighbour)
//                 }
//             })
//         }

//         return result
//     }
// }


class Graph{
    constructor(){
        this.adjacencyList = {}
    }


    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }


    addEdge(v1,v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v1)
        }

        if(!this.adjacencyList[v2]){
            this.addVertex(v2)
        }


        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)
    }


    hasEdge(v1,v2){
        return (
            this.adjacencyList[v1].has(v2) &&
            this.adjacencyList[v2].has(v1)
        )
    }

    display(){

        for(let vertex in this.adjacencyList){
            console.log(vertex+ '-->',[...this.adjacencyList[vertex]]);
            
        }
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


    dfs(node, visited = new Set()){

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

    let currentVertex;

    visited[start] = true

    while(queue.length){
        currentVertex = queue.shift()

        result.push(currentVertex)

        this.adjacencyList[currentVertex].forEach(neighbour=>{
            if(!visited[neighbour]){
                visited[neighbour] = true
                result.push(neighbour)
            }
        })
    }

    return result
    


   }


   
}