# Graph

In computer science, a **graph** is an abstract data type 
that is meant to implement the undirected graph and 
directed graph concepts from mathematics, specifically
the field of graph theory

A graph data structure consists of a finite (and possibly 
mutable) set of vertices or nodes or points, together 
with a set of unordered pairs of these vertices for an 
undirected graph or a set of ordered pairs for a 
directed graph. These pairs are known as edges, arcs, 
or lines for an undirected graph and as arrows, 
directed edges, directed arcs, or directed lines 
for a directed graph. The vertices may be part of 
the graph structure, or may be external entities 
represented by integer indices or references.

![Graph](https://www.tutorialspoint.com/data_structures_algorithms/images/graph.jpg)

## Javascript

See [BFS](/algorithms/2-breadth-first-search.html) and [DFS](/algorithms/3-depth-first-search.html) for this implementation's usage.

```javascript
// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
- [Introduction to Graphs on YouTube](https://www.youtube.com/watch?v=gXgEDyodOJU&index=9&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Graphs representation on YouTube](https://www.youtube.com/watch?v=k1wraWzqtvQ&index=10&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
