/**
 * Given a binary tree , design a algorithm which creates a linkedl list of all the nodes at each depth.
 * eg if we have a tree with depth D, then we have to create D linked list.
 * 
 * 
 * return array of linked list
 */

const LinkList  = require('../LinkList/LinkList')
const {  Node, insert, levelOrder } =  require('../Trees/binary_search_tree');

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null
    }
    
}

function createLvlOrderList(root, listArr, level){
    if( root === null){
        return;
    }
    if( listArr.length === level ){
        // current level list is not present in the array
        listArr.push( new LinkedListNode(root.data) )
    }else{
        // append to exsiting list
        let ptr = listArr[level];// head ptr
        while(ptr.next !== null){
            ptr = ptr.next
        }
        ptr.next = new LinkedListNode(root.data)
    }

    createLvlOrderList(root.leftChild, listArr, level + 1)
    createLvlOrderList(root.rightChild, listArr, level + 1)
}

function main(root){

    let listArr = new Array();
    createLvlOrderList(root, listArr, 0);
    return listArr;
}

function printArrayLinkedList(listArr = []){

    listArr.forEach((head, i) => {
        let str = []
       while(head){
        str.push(head.data)
        head = head.next;
       }
       console.log(`Level ${i+1}:     ${str.join("  -> ")} `);
    })
}

( () => {

    console.clear()
    const root = new Node(4);

    insert(root, new Node(2))
    insert(root, new Node(6))
    insert(root, new Node(3))
    insert(root, new Node(1))
    insert(root, new Node(7))
    insert(root, new Node(5))

    let listArr = main(root);
    
    console.log('\n__________________\n');
    printArrayLinkedList(listArr);

})()




