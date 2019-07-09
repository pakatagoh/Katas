class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    if (this.nodes[node]) {
      return 'node already exists';
    }
    this.nodes[node] = {};
  }

  addEdge(node, edge) {
    if (!this.nodes[node]) {
      return 'node does not exist';
    }
    if (!this.nodes[edge]) {
      return `${edge} does not exist yet`;
    }
    if (this.nodes[node][edge]) {
      return 'edge already exists';
    }
    this.nodes[node][edge] = true;
  }

  hasNode(node) {
    if (!this.nodes[node]) {
      return false;
    }
    return true;
  }

  hasEdge(node, edge) {
    if (!this.node[node]) {
      return false;
    }
    if (!this.node[node][edge]) {
      return false;
    }

    return true;
  }

  findEdges(node) {
    if (!this.nodes[node]) {
      return 'node does not exist';
    }
    return this.nodes[node];
  }
}

const BFsearch = (graph, startNode, endNode) => {
  if (!graph.hasNode(startNode) || !graph.hasNode(endNode)) return false;

  if (startNode === endNode) return true;

  const queue = [];
  queue.push(startNode);

  while (queue.length !== 0) {
    const currentNode = queue.shift();
    if (currentNode === endNode) return true;

    const edges = graph.findEdges(curretNode);
    for (edge in edges) {
      queue.push(edge);
    }
  }

  return false;
};

module.exports = {
  Graph,
  BFsearch,
};
