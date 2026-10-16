// class Graph{
//     constructor(){
//         this.list = {}
//     }

//     addVertex(vertex){

//         if(!this.list[vertex]){
//             this.list[vertex] = new Set()
//         }

//     }

//     addEdge(v1,v2){
//         if(!this.list[v1]){
//             this.addVertex(v1)
//         }

//         if(!this.list[v2]){
//             this.addVertex(v2)
//         }

//         this.list[v1].add(v2)
//         this.list[v2].add(v1)
//     }

//     display(){
//         for(let vertex in this.list){

//             console.log(vertex,"==>",...this.list[vertex]);

//         }
//     }

//     dfs(startVertex){

//         let stack = [startVertex]
//         let visited = new Set()
//         visited.add(startVertex)

//         while(stack.length > 0){

//             let element = stack.pop()

//             console.log(element);

//             for(let neighbour of this.list[element]){
//                 if(!visited.has(neighbour)){
//                     visited.add(neighbour)
//                     stack.push(neighbour)
//                 }
//             }

//         }

//     }

//     bfs(startVertex){

//         let queue = [startVertex]
//         let visited = new Set()

//         visited.add(startVertex)

//         while(queue.length > 0){

//             let element = queue.shift()

//             console.log(element);

//             for(let neighbour of this.list[element]){

//                 if(!visited.shift(neighbour)){
//                     visited.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             }

//         }

//     }

// }

// let graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")

// graph.addEdge("A","B")
// graph.addEdge("C","D")
// graph.addEdge("D","E")

// graph.display()

class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.list[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.list[vertex2]) {
      this.addVertex(vertex2);
    }

    this.list[vertex1].add(vertex2);
    this.list[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.list) {
      console.log(vertex, "==>", ...this.list[vertex]);
    }
  }

  hasEdge(v1, v2) {
    return this.list[v1].has(v2) && this.list[v2].has(v1);
  }

  dfs(startVertex) {
    let stack = [startVertex];
    let visited = new Set();
    visited.add(startVertex);

    while (stack.length > 0) {
      let element = stack.pop();

      console.log(element);

      for (let neighbour of this.list[neighbour]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
          visited.add(neighbour);
        }
      }
    }
  }

  bfs(startVertex) {
    let queue = [startVertex];
    let visited = new Set();

    visited.add(startVertex);

    while (queue.length > 0) {
      const element = queue.shift();

      console.log(element);

      for (let neighbour of this.list[element]) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
  }

  shortestPath(start, end) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);
    let parent = {};
    parent[start] = null;

    while (queue.length > 0) {
      let current = queue.shift();

      if (current === end) {
        let path = [];
        while (current !== null) {
          path.unshift(current);

          current = parent[current];
        }

        console.log("shortest path ", path.join("->"));
        return;
      }

      for (let neighbour in this.list[current]) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);

          parent[neighbour] = current;
          queue.push(neighbour);
        }
      }
    }
  }

  degreeOfVertex(vertex) {
    if (vertex) {
      let items = this.list[vertex];

      return items.size();
    }

    return 0;
  }


  
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

graph.display();
