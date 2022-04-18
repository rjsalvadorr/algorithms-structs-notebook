# Depth-First Search (DFS)

Depth-first search (DFS) is an algorithm for traversing or 
searching tree or graph data structures. One starts at 
the root (selecting some arbitrary node as the root in 
the case of a graph) and explores as far as possible 
along each branch before backtracking.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

## Javascript

```javascript
// const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// const routes = [
//     ['PHX', 'LAX'],
//     ['PHX', 'JFK'],
//     ['JFK', 'OKC'],
//     ['JFK', 'HEL'],
//     ['JFK', 'LOS'],
//     ['MEX', 'LAX'],
//     ['MEX', 'BKK'],
//     ['MEX', 'LIM'],
//     ['MEX', 'EZE'],
//     ['LIM', 'BKK'],
// ];

// // The graph
// const adjacencyList = new Map();

// // Add node
// function addNode(airport) {
//     adjacencyList.set(airport, []);
// }

// // Add edge, undirected
// function addEdge(origin, destination) {
//     adjacencyList.get(origin).push(destination);
//     adjacencyList.get(destination).push(origin);
// }

// // Create the Graph
// airports.forEach(addNode);
// routes.forEach(route => addEdge(...route))

function dfs(start, visited = new Set()) {
    visited.add(start);
    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        if (destination === 'BKK') { 
            console.log(`DFS found Bangkok`)
            return;
        }
        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
}

dfs('PHX')
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
- https://fireship.io/courses/javascript/interview-graphs/
