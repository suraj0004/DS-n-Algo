class Node{
    constructor(data = null){
        this.data = data;
        this.leftChild = null;
        this.rightChild =  null;
    }
}

function main(){

    let root = new Node(0);

    root.leftChild = new Node(1);
    root.rightChild = new Node(2);

    root.leftChild.leftChild = new Node(3)
    root.leftChild.leftChild.leftChild = new Node(4)
    root.leftChild.leftChild.rightChild = new Node(6)

    console.log(root);
}

main()
