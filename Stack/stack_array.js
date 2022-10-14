class Stack {
    #arr;
    #top;
    constructor(){
        this.#arr = []
        this.#top = -1;
    }

    push(data){
        this.#top++;
        this.#arr[this.#top] = data
    }

    pop(){

        if(this.isEmpty()) return

        let item = this.#arr[this.#top]
        delete this.#arr[this.#top];
        this.#top--;
        return item
    }

    peek(){
        if(this.isEmpty()) return null;
        return this.#arr[this.#top]
    }

    isEmpty(){
        return this.#top === -1
    }

    print(){
        console.log('print strat_________________');
        for(let i = 0; i <= this.#top;i++){
            console.log(this.#arr[i]);
        }
        console.log(' print end_________________');
    }
}

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
