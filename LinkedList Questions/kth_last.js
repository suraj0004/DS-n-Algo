const LinkList = require('./LinkedList')

class kthLast extends LinkList {
    constructor(arr) {
        super(arr)
    }

    printKthLast(k) {

        if (k < 1) return

        let p = this.getHead()
        let len = 0;
        while (p) {
            len++;
            p = p.next;
        }

        let target = len - k;
        if (target < 1) return

        let index = 0;
        p = this.getHead()
        while (p) {

            if (index === target) {
                console.log(p.data);
                return;
            }
            p = p.next
            index++;
        }
    }

    printKthLast_recursion(k) {
        this.printK(this.getHead(), k)
    }

    printK(node, k) {

        if (node === null) {
            return 0;
        }

        let index = this.printK(node.next, k) + 1

        if (index === k) {
            console.log(node.data);
        }
        return index;

    }

    getKth_optimal(k) {
        let p1 = this.getHead()
        let p2 = this.getHead();

        for (let i = 1; i <= k; i++) {
            if (p1 === null) return null;
            p1 = p1.next;
        }

        while (p1) {
            p1 = p1.next
            p2 = p2.next;
        }

        return p2
    }
}




let list = new kthLast([
    50, 40, 30, 20, 10
])

console.log(list.getKth_optimal(3));

module.exports = kthLast