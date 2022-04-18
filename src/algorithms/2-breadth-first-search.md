# Breadth-First Search (BFS)

Breadth-first search (BFS) is an algorithm for traversing 
or searching tree or graph data structures. It starts at
the tree root (or some arbitrary node of a graph, sometimes 
referred to as a 'search key') and explores the neighbor
nodes first, before moving to the next level neighbors.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

## Pseudocode

```text
BFS(root)
  Pre: root is the node of the BST
  Post: the nodes in the BST have been visited in breadth first order
  q ← queue
  while root = ø
    yield root.value
    if root.left = ø
      q.enqueue(root.left)
    end if
    if root.right = ø
      q.enqueue(root.right)
    end if
    if !q.isEmpty()
      root ← q.dequeue()
    else
      root ← ø
    end if
  end while
end BFS
```

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

function bfs(start) {

    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const airport = queue.shift(); // mutates the queue
        const destinations = adjacencyList.get(airport);

        for (const destination of destinations) {
            if (destination === 'BKK')  {
                console.log(`BFS found Bangkok!`)
            }
            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }
        }
    }
}

bfs('PHX')
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
- https://fireship.io/courses/javascript/interview-graphs/
