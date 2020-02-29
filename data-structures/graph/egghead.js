function createNode (key) {
  let neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor (node) {
      neighbors.push(node);
    }
  }
}

function createGraph(directed = false) {
  const nodes = [];
  return {
    directed,
    nodes,
    edges,
    
    addNode(key) {
      nodes.push(createNode(key));
    },

    getNode(key) {
      return nodes.find(e => e.key === key);
    },

    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);
      edges.push(`${node1}-${node2}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },

    print() {
      
    }
  }
}