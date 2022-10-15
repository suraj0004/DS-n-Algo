
class Queue{

    #head;
    #tail;
    #arr;
    constructor(){
        this.#head = 0
        this.#tail = -1;
        this.#arr = new Array()
    }

    add(data){

        this.#tail++;
        this.#arr[this.#tail] = data;

    }

    remove(){

        if(this.isEmpty()) return
        const data = this.#arr[this.#head];
        delete this.#arr[this.#head]
        this.#head++
        return data;
        
    }

    peek(){
        if(this.isEmpty()) return
        return this.#arr[this.#head]
    }



    isEmpty(){
        return this.#head > this.#tail
    }

    print(){
        console.log(this.#arr);
    }
}


let queue = new Queue()

queue.add(1)
queue.add(20)
queue.add(3)
queue.add(5)

queue.print()

console.log(queue.isEmpty());
console.log("peek", queue.peek());
console.log("rem: ",queue.remove());
console.log("rem: ",queue.remove());
console.log("peek", queue.peek());
queue.print()

console.log("rem: ",queue.remove());
console.log("rem: ",queue.remove());
console.log(queue.isEmpty());
queue.add(3)
queue.add(90)
queue.add(3)
queue.add(12)
queue.print()
console.log("peek", queue.peek());
console.log("rem: ",queue.remove());
console.log("peek", queue.peek());
queue.add(6)
queue.print()