class Node{
    constructor(data = null){
        this.data = data;
        this.children = []// array of pointers
    }
}

function main(){

    let root = new Node(0)

    let chld1 = addNode(root, 1)
    let chld2 = addNode(root, 2)
    let chld3 = addNode(root, 3)

    let chld4 = addNode(chld1,4)
    let chld5 = addNode(chld2,5)

    printChildren(root);
    printChildren(chld1);
    printChildren(chld2);
    printChildren(chld3);
    printChildren(chld4);
    printChildren(chld5);

    console.log(root);
}

function addNode(root, data) {

    let node = new Node(data);
    root.children.push(node)
    return node;
}

function printChildren(root){
    let op = [];
    for (let i = 0; i < root.children.length; i++) {
        op.push(root.children[i].data)
    }
    console.log( 'root: ' + root.data + ', children: ' +  op.join(" "));
}


main()