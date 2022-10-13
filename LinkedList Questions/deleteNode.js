const kthLast = require('./kth_last')

class deleteNode extends kthLast{

    constructor(arr = []){
        super(arr)
    }

    // delete node without using head pointer. This function can only delete middle elements
    deleteNode(node){

        if(!node.next) return;

        node.data = node.next.data;
        node.next = node.next.next

    }

}

let list = new deleteNode([
    50, 40, 30, 20, 10
])

console.clear()
list.printList()
let node = list.getKth_optimal(3)
list.deleteNode(node)
list.printList()
