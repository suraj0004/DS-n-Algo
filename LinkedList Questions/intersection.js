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

    getIntersectingNode(compair_list) {

        if (compair_list.head === null || this.head === null) {
            return false;
        }

        let l1_len = this.length()
        let l2_len = compair_list.length();

        if (!this.isLastNodeEqual(compair_list)) {
            return false
        }

        if (l1_len === l2_len) {

            return this.intersectAt(this.head, compair_list.head)

        } else if (l1_len > l2_len) {

            let start_node = this.nodeAt((l1_len - l2_len) + 1)
            return this.intersectAt(start_node, compair_list.head)

        } else {

            let start_node = compair_list.nodeAt((l2_len - l1_len) + 1)
            return this.intersectAt(this.head, start_node)

        }
    }

    length() {
        let len = 0;
        let p = this.head
        while (p) {
            len++
            p = p.next;
        }
        return len
    }

    isLastNodeEqual(compair_list) {

        let last_node = this.head
        while (last_node.next) {
            last_node = last_node.next
        }

        let compair_list_last_node = compair_list.head
        while (compair_list_last_node.next) {
            compair_list_last_node = compair_list_last_node.next
        }

        return compair_list_last_node === last_node
    }

    intersectAt(l1_head, l2_head) {
        // compare node by node in linear order
        while (l1_head && l2_head) {
            if (l1_head === l2_head) {
                return l1_head
            }

            l1_head = l1_head.next;
            l2_head = l2_head.next
        }

        return null
    }

    nodeAt(index){
        let p = this.head
        while (index > 1 && p !== null) {
            index--;
            p = p.next
        }

        return p;
    }
}



let nodeArr = [
    new Node(0),
    new Node(1),
    new Node(2),
    new Node(3),
    new Node(4),
    new Node(5),
    new Node(6),
]


/**
 * l1: 0 -> 1 -> 2 -> 3 -> 4
 * l2:      5 -> 6 ---^
 * 
 * here 3 is the intersection point.
 * NOTE: intersection is defined based on reference not the value
 */
let l1 = new LinkList()
l1.appendNode(nodeArr[0])
l1.appendNode(nodeArr[1])
l1.appendNode(nodeArr[2])
l1.appendNode(nodeArr[3]) // intersection
l1.appendNode(nodeArr[4])

let l2 = new LinkList()
// l2.appendNode(nodeArr[4])
l2.appendNode(nodeArr[5])
l2.appendNode(nodeArr[6])
l2.appendNode(nodeArr[3]) // intersection

console.log(l1.getIntersectingNode(l2));

