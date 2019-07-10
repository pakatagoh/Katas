const { Graph, BFsearch } = require('./routeBetweenNodes');

describe('Graph class', () => {
  test('should create a new graph with nodes property', () => {
    const graph = new Graph();

    expect(graph).toHaveProperty('nodes');
  });

  test('should be add a node into the graph', () => {
    const graph = new Graph();

    graph.addNode(1);

    expect(graph.nodes).toEqual({ 1: {} });
  });

  test('should be not be able to add a node into the graph if already exiss', () => {
    const graph = new Graph();

    graph.addNode(1);

    expect(graph.addNode(1)).toBe('node already exists');
  });

  test('should not be able to add edge if node does not exist yet', () => {
    const graph = new Graph();

    graph.addNode(1);
    expect(graph.addEdge(1, 2)).toBe('node 2 does not exist yet');
  });

  test('should be add a edge  into an existing node', () => {
    const graph = new Graph();

    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 2);
    expect(graph.nodes).toEqual({ 1: { 2: true }, 2: {} });
  });

  test('should be not be able to add a edge if it already exists', () => {
    const graph = new Graph();

    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 2);
    expect(graph.addEdge(1, 2)).toBe('edge already exists');
  });

  test('should return true if graph has node', () => {
    const graph = new Graph();

    graph.addNode(1);

    expect(graph.hasNode(1)).toEqual(true);
  });

  test('should return false if graph does not have node', () => {
    const graph = new Graph();

    graph.addNode(1);

    expect(graph.hasNode(3)).toEqual(false);
  });
});

describe('BFsearch algorithim', () => {
  test('should return true for 1-> 2 -> 3 start is 1 and end is 3', () => {
    const graph = new Graph();

    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);

    graph.addEdge(1, 2);
    graph.addEdge(2, 3);

    expect(BFsearch(graph, 1, 3)).toEqual(true);
  });

  test('should return false for 1-> 2 -> 3 start is 3 and end is 1', () => {
    const graph = new Graph();

    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);

    graph.addEdge(1, 2);
    graph.addEdge(2, 3);

    expect(BFsearch(graph, 3, 1)).toEqual(false);
  });
});
