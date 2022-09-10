class SwGraph {
  constructor(nodes, edges, isDirected = false) {
    // The graph
    this.adjacencyList = new Map();
    this.nodes = [];
    this.edges = [];
    this.isDirected = isDirected;

    // Create the Graph
    nodes.forEach(node => {
      this.addNode(node);
    });
    edges.forEach(edge => this.addEdge(...edge));
  }

  // Add node
  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  // Add edge, undirected
  addEdge(origin, destination) {
    this.adjacencyList.get(origin).push(destination);
    if (!this.isDirected) {
      this.adjacencyList.get(destination).push(origin);
    }
  }
}

const graphTest = graph => {
  console.log(graph);
};

const nodes = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const edges = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"]
];
const newGraph = new SwGraph(nodes, edges);
graphTest(newGraph);

// export default SwGraph;
