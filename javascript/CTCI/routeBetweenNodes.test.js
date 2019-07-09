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

  test('should be add a edge  into an existing node', () => {
    const graph = new Graph();

    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(1, 2);
    expect(graph.nodes).toEqual({ 1: { 2: true }, 2: {} });
  });
});
