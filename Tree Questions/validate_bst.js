const {  Node, insert:bstInsert } =  require('../Trees/binary_search_tree');


function isValidBST(root){

    if(root === null){
        return true;
    }

    if(root.leftChild !== null && root.leftChild.data > root.data){
        return false;
    }

    if(root.rightChild !== null && root.rightChild.data <= root.data){
        return false;
    }

    return isValidBST(root.leftChild) && isValidBST(root.rightChild);
}


function main(root){

    console.log(isValidBST(root));
}


( () => {

   
    const root = new Node(4);

    bstInsert(root, new Node(2))
    bstInsert(root, new Node(6))
    bstInsert(root, new Node(3))
    bstInsert(root, new Node(1))
    bstInsert(root, new Node(7))
    bstInsert(root, new Node(5))

    bstInsert(root, new Node(8))
    bstInsert(root, new Node(9))
    console.clear()

    // here tree is valid bst, output should be true
    main(root);


    // adding biger value to left tree, now it is not a valid tree
    root.leftChild.leftChild.leftChild = new Node(100)

    main(root);
})()
