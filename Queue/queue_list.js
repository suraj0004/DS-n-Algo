class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue {

    #head;
    #tail;
    constructor(){
        this.#head = null
        this.#tail = null
    }

    add(d){

        let node = new Node(d);

        if(this.isEmpty()){
            this.#head = this.#tail = node;
            return
        }

        this.#tail.next = node;
        this.#tail = node;

    }

    remove(){
        if(this.isEmpty()) return

        let data = this.#head.data
        this.#head = this.#head.next

        if(this.#head === null){
            this.#tail = null
        }

        return data
    }

    peek(){
        if(this.isEmpty()) return
        return this.#head.data
    }

    isEmpty(){
        return this.#head === null;
    }

    print(){
        console.log('print strat_________________');
        let ptr = this.#head;
        while (ptr) {
            console.log(ptr.data);
            ptr = ptr.next            
        }
        console.log(' print end_________________');
    }
}

let queue = new Queue()

queue.add(1)
queue.add(20)
queue.add(3)
queue.add(5)

queue.print()

console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.peek());
queue.print()
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.isEmpty());