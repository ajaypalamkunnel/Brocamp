//  class Node{
//     constructor(val){
//         this.val = val
//         this.neighbour = []
//     }
//  }

class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vetex) {
    if (!this.list[vetex]) {
      this.list[vetex] = new Set();
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
      console.log(vertex + " -> ", ...this.list[vertex]);
    }
  }

  hasEdge(v1, v2) {
    return this.list[v1].has(v2) && this.list[v2].has(v1);
  }

  removeEdge(v1, v2) {
    this.list[v1].delete(v2);
    this.list[v2].delete(v1);
  }

  removeVertex(vertex) {
    if (!this.list[vertex]) {
      return;
    }

    for (let adjacentVertex of this.list[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.list[vertex];
  }

  dfs(startVertex) {
    let stack = [startVertex];
    let visited = new Set();
    visited.add(startVertex);

    while (stack.length > 0) {
      let element = stack.pop();

      if (!visited.has(element)) {
        console.log(element);
        visited.add(element);

        for (let neighbour of this.list[element]) {
          if (!visited.has(neighbour)) {
            stack.push(neighbour);
          }
        }
      }
    }
  }

  bfs(startVertex) {
    let queue = [startVertex];
    let visited = new Set();

    while (queue.length > 0) {
      let element = queue.shift();

      if (!visited.has(element)) {
        console.log(element);
        visited.add(element);

        for (let neighbour of this.list[element]) {
          if (!visited.has(neighbour)) {
            queue.push(neighbour);
          }
        }
      }
    }
  }

  isCyclic(startVertex) {
    const visited = new Set();

    return this._dfsCyclicCheck(startVertex, -1, visited);
  }

  _dfsCyclicCheck(current, parent, visited) {
    visited.add(current);

    for (let neighbour of this.list[current]) {
      if (!visited.has(neighbour)) {
        if (this._dfsCyclicCheck(neighbour, current, visited)) {
          return true;
        }
      } else if (neighbour !== parent) {
        return true;
      }
    }

    return false;
  }

  shortestPath(start, end) {
    if (!this.list[start] || !this.list[end]) {
      console.log("Start and end vertex does not exist");
      return;
    }

    let queue = [start];
    let visited = new Set();
    let parent = {};
    visited.add(start);
    parent[start] = null;

    while (queue.length > 0) {
      let current = queue.shift();

      if (current === end) {
        let path = [];
        // console.log("->",parent);

        while (current !== null) {
          //adding cf elements to the
          path.unshift(current);
          current = parent[current];
        }

        console.log("shortes path", path.join(" -> "));
        return;
      }

      for (let neighbour of this.list[current]) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          parent[neighbour] = current;
          queue.push(neighbour);
        }
      }
    }
  }

  degreeOfVertex(vertex) {
    if (this.list[vertex]) {
      let items = this.list[vertex];

      return items.size;
    }

    return 0;
  }

  cloneGraph(node) {
    const newGraph = new Graph();

    for (let vertex in this.list) {
      newGraph.addVertex(vertex);
    }

    for (let vertex in this.list) {
      for (let neighbour of this.list[vertex]) {
        if (!newGraph.list[vertex].has(neighbour)) {
          newGraph.addEdge(vertex, neighbour);
        }
      }
    }

    return newGraph;
  }

  isConnectedGraph(vertex) {
    let queue = [vertex];
    let visited = new Set();
    visited.add(vertex);

    while (queue.length > 0) {
      let curr = queue.shift();

      for (let neighbour of this.list[curr]) {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
          visited.add(neighbour);
        }
      }
    }

    let vertexCount = 0;
    for (let vertex in this.list) {
      vertexCount += 1;
    }

    return vertexCount === visited.size();
  }

  hasCycle() {
    let visited = new Set();

    let dfs = (vertex, parent) => {
      visited.add(vertex);

      for (let neighbour of this.list[vertex]) {
        if (!visited.has(neighbour)) {
          if (dfs(neighbour, vertex)) return true;
        } else if (neighbour !== parent) {
          return true;
        }
      }

      return false;
    };

    for (let vertex in this.list) {
      if (!visited.has(vertex)) {
        if (dfs(vertex, null)) { 
          return true;
        }
      }
    }

    return false;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("D", "E");
graph.addEdge("E", "B");
graph.addEdge("F", "E");
graph.addEdge("B", "F");
graph.display();
graph.shortestPath("A", "F");
//  graph.removeEdge("A","B")

//  console.log(graph.hasEdge("A","B"));

console.log(graph.degreeOfVertex("A"));
console.log(graph.isConnectedGraph("A"));

// let newGraph = graph.cloneGraph()

// console.log(newGraph.display());
