
const prompt = require("prompt-sync")();

class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

function insert(root, node) {
  if (root === null) {
    return;
  } else if (node.data <= root.data) {
    if (root.left === null) {
      node.parent = root;
      root.left = node;
    } else {
      insert(root.left, node);
    }
  } else {
    if (root.right === null) {
      node.parent = root;
      root.right = node;
    } else {
      insert(root.right, node);
    }
  }
}

function findNode(root, data) {
  if (root.data === data) {
    return root;
  } else if (data < root.data) {
    return findNode(root.left, data);
  } else {
    return findNode(root.right, data);
  }
}

function leftmostChild(root){
    if(root.left === null){
        return root;
    }

    return leftmostChild(root.left)
}

function nextInOrderSuccessor(root, node_data){
    let node = findNode(root, node_data);
    if(node.right === null){
        let parent = node.parent;

        // if we are in left sub tree from root, find left most parent.
        while(parent !== null && parent.left !== node){
            node = parent;
            parent = parent.parent
        }
        return parent.data
    }
    const left =  leftmostChild(node.right);
    return left.data
}

function main(root) {
 
  console.log('\n..................\n');
  const input = prompt("Enter node value:");
  console.log('Next In Order Successor is:');
  console.log(nextInOrderSuccessor(root, +input));
}

(() => {
  const root = new Node(4);

  insert(root, new Node(2));
  insert(root, new Node(6));
  insert(root, new Node(3));
  insert(root, new Node(1));
  insert(root, new Node(7));
  insert(root, new Node(5));

  insert(root, new Node(8));
  insert(root, new Node(9));

  console.clear();
  main(root);
})();
