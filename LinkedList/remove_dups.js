class Node {
    // public
    constructor(data) {
        this.next = null
        this.data = data
    }
}

class LinkList {
    #head
    constructor() {
        this.#head = null
    }

    #appendFirstNode(d) {
        let node = new Node(d);
        this.#head = node;
    }

    append(d) {

        if (!this.#head) {
            return this.#appendFirstNode(d)
        }

        let node = new Node(d);
        let p = this.#head;
        while (p.next !== null) {
            p = p.next;
        }
        p.next = node;
    }

    removeDuplicate() {

        if (!this.#head) return;

        let nodeMap = new Map();
        nodeMap.set(this.#head.data)

        let p = this.#head;
        while (p.next) {

            if (nodeMap.has(p.next.data)) {
                p.next = p.next.next
            } else {
                nodeMap.set(p.next.data, 1)
                p = p.next
            }
        }
    }

    removeDuplicate_withoutExtraMemoryBuffer() {
        if (!this.#head) return;

        let p = this.#head;
        while (p) {
            let prev = p;
            let rm = p.next;
            while (rm) {
                if (rm.data === p.data) {
                    prev.next = rm.next
                } else {
                    prev = rm;
                }
                rm = rm.next
            }
            p = p.next
        }
    }

    printList() {
        console.log("\n");
        let p = this.#head
        while (p != null) {
            console.log(p.data);
            p = p.next;
        }
    }
}


function main({ arr = [] }) {

    let list = new LinkList();

    arr.forEach(num => {
        list.append(num);
    })

    list.printList()
    list.removeDuplicate_withoutExtraMemoryBuffer()
    list.printList()
}

main({
    arr: [
        10, 20, 1, 3, 1, 20, 90, 0, 11, 32, 123, 100, 10, 90
    ]
})