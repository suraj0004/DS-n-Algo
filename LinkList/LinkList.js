
const Node = require('./Node')

class LinkList{
    constructor(){
        this.head = null;
    }

    append(num){
        let node = new Node(num)
        if(this.head === null){
            this.head = node
        }else{
            this.#appendNodeAtLast(node)
        }
    }
    
    // Private method
    #appendNodeAtLast(node){
        let ptr = this.head;
        while (ptr.next) {
            ptr = ptr.next            
        }
        ptr.next = node
    }

    print(){
        let ptr = this.head;
        while (ptr) {
            console.log(ptr.data);
            ptr = ptr.next            
        }
    }
}

module.exports = LinkList