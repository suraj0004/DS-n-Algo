/**
 * Given a circular linked list, implement an algorithm that returns the node which forms the loop in the list.
 * eg:
 * input: a -> b -> c -> d -> e -> c ( the same c as earlier )
 * output: c
 */

 class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkList {
    constructor() {
        this.head = null
    }

    appendNode(node) {

        if (this.head === null) {
            this.head = node
            return
        }

        let ptr = this.head
        while (ptr.next) {
            ptr = ptr.next
        }
        ptr.next = node

    }

    printList() {
        console.log("\n");
        let p = this.head
        while (p != null) {
            console.log(p.data);
            p = p.next;
        }
    }

    circularNode(){
        if(this.head === null){
            return null
        }

        let slow_ptr = this.head
        let fast_ptr = this.head
        
        while(fast_ptr !== null && slow_ptr !== null){

            slow_ptr = slow_ptr.next // 1x speed

            fast_ptr = fast_ptr?.next?.next? fast_ptr.next.next : null // 2x speed

            if(fast_ptr === slow_ptr){
                break;
            }
        }

        if(fast_ptr === null){
            // Not a circular linked list
            return null;
        }

        slow_ptr = this.head;
        while(slow_ptr != fast_ptr){
            slow_ptr = slow_ptr.next
            fast_ptr = fast_ptr.next
        }

        return fast_ptr;
    }

}



function main(){
    let nodeArr = [
        new Node('a'),
        new Node('b'),
        new Node('c'),
        new Node('d'),
        new Node('e'),
    ]


    /**
     *   a -> b -> c -> d -> e
     *             ^----------
     */
    let list = new LinkList()
    list.appendNode(nodeArr[0])// a
    list.appendNode(nodeArr[1])// b
    list.appendNode(nodeArr[2])// c // circular node
    list.appendNode(nodeArr[3])// d
    list.appendNode(nodeArr[4])// e
    list.appendNode(nodeArr[2])// c

    console.log(list.circularNode());


}

main()