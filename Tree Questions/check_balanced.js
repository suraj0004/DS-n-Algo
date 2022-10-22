const {  Node, insert, levelOrder } =  require('../Trees/binary_search_tree');


function getHeight(root){
    if(root === null){
        return -1;
    }

    const leftTreeHeight = getHeight(root.leftChild)
    const rightTreeHeight = getHeight(root.rightChild)

    return leftTreeHeight > rightTreeHeight? leftTreeHeight + 1: rightTreeHeight + 1;
}


function checkBalanced(root){

    const leftTreeHeight = getHeight(root.leftChild)
    const rightTreeHeight = getHeight(root.rightChild)

    return Math.abs(leftTreeHeight - rightTreeHeight) <= 1;
}

function main(root){

    console.log(checkBalanced(root));
}


( () => {

   
    const root = new Node(4);

    insert(root, new Node(2))
    insert(root, new Node(6))
    insert(root, new Node(3))
    insert(root, new Node(1))
    insert(root, new Node(7))
    insert(root, new Node(5))

    insert(root, new Node(8))
    insert(root, new Node(9))

    console.clear()
    main(root);
})()

