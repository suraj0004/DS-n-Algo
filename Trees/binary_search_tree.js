

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

function inOrder(root){
    if(root !== null){
        inOrder(root.leftChild);
        console.log(root.data);
        inOrder(root.rightChild)
    }
}

function preOrder(root){
    if(root !== null){
        console.log(root.data);
        preOrder(root.leftChild)
        preOrder(root.rightChild)
    }
}

function postOrder(root){
    if(root !== null){
        postOrder(root.leftChild);
        postOrder(root.rightChild);
        console.log(root.data);
    }
}

function levelOrder(root){
    let queue = []
    queue.push(root)
    while (queue.length) {
        let node = queue.shift()
        console.log(node.data);
        if(node.leftChild !== null){
            queue.push(node.leftChild)
        }
        if(node.rightChild !== null){
            queue.push(node.rightChild)
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

  console.log('in order: ');
  inOrder(root)

  console.log('pre order:');
  preOrder(root);

  console.log('post order:');
  postOrder(root);

  console.log('level Order:');
  levelOrder(root);
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
