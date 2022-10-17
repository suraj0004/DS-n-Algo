class Node {
  constructor(data = null) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

function insert(root, node) {
  if (root === null) {
    return;
  } else if (node.data <= root.data) {
    if (root.leftChild === null) {
      root.leftChild = node;
    } else {
      insert(root.leftChild, node);
    }
  } else {
    if (root.rightChild === null) {
      root.rightChild = node;
    } else {
      insert(root.rightChild, node);
    }
  }
}

function main() {
  const root = new Node(8);
  insert(root, new Node(4));
  insert(root, new Node(2));
  insert(root, new Node(10));
  insert(root, new Node(6));
  insert(root, new Node(20));

  console.clear();
  console.log(JSON.stringify(root));
}

main();

/**
     * OP
     * {
  "data": 8,
  "leftChild": {
    "data": 4,
    "leftChild": {
      "data": 2,
      "leftChild": null,
      "rightChild": null
    },
    "rightChild": {
      "data": 6,
      "leftChild": null,
      "rightChild": null
    }
  },
  "rightChild": {
    "data": 10,
    "leftChild": null,
    "rightChild": {
      "data": 20,
      "leftChild": null,
      "rightChild": null
    }
  }
}
     */
