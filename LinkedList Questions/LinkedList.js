class Node {
    // public
    constructor(data) {
        this.next = null
        this.data = data
    }
}

class LinkList {
    #head
    constructor(arr = []) {
        this.#head = null
        if (arr?.length) {
            arr.forEach(num => {
                this.append(num);
            })
        }

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

    printList() {
        console.log("\n");
        let p = this.#head
        while (p != null) {
            console.log(p.data);
            p = p.next;
        }
    }

    getHead(){
        return this.#head
    }
}



module.exports = LinkList;