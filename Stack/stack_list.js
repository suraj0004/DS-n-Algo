class Node{
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Stack{
    #top;
    constructor(){
        this.#top = null
    }

    push(data){
        let node =  new Node(data);
        node.next = this.#top;
        this.#top = node;
    }

    pop(){
        if(this.isEmpty()) return

        let node = this.#top
        this.#top = this.#top.next

        return node.data;
    }

    isEmpty(){
        return !this.#top
    }

    peek(){
        if(this.isEmpty()) return
        return this.#top.data
    }

    print(){
        let ptr = this.#top;
        while (ptr) {
            console.log(ptr.data);
            ptr = ptr.next            
        }
    }
}

module.exports = Stack;

let stack = new Stack();

stack.push(1);
stack.push(3);
stack.push(-4);

stack.print()

console.log('peek = ',stack.peek());

console.log('is empty', stack.isEmpty());

console.log('pop() ' , stack.pop())

stack.print()

console.log('pop() ' , stack.pop())
console.log('pop() ' , stack.pop())
console.log('is empty', stack.isEmpty());
stack.print()