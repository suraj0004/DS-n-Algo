/**
 * Design a stack, in addition to push and pop it should has a function min which returns the minimum element? push , pop and min should all operate in O(1) time.
 */

class Node{
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Stack{
    #top;
    #min;
    constructor(){
        this.#top = null
        this.#min = null
    }

    push(data){
        let node =  new Node(data);
        node.next = this.#top;
        this.#top = node;
        this.update_min_on_push(node)
    }

    pop(){
        if(this.isEmpty()) return

        let node = this.#top
        this.#top = this.#top.next

        this.update_min_on_pop(node)

        return node.data;
    }

    isEmpty(){
        return !this.#top
    }

    peek(){
        if(this.isEmpty()) return
        return this.#top.data
    }

    /**
     * return minimun element in O(1) time
     */
    get min(){
        if(this.#min){
            return this.#min.data.data
        }
        return null;
    }

    update_min_on_push(ref){
        /**
         * A stack of pointers, which points to the minimum values in another stack (main stack).
         * This function is get calles, whenever a num get pushed to main stack.
         */
        if( this.#min === null || ref.data < this.#min.data.data ){
            let node =  new Node(ref);
            node.next = this.#min;
            this.#min = node;
        }
    }

    update_min_on_pop(ref){
        /**
         * A stack of pointers, which points to the minimum values in another stack (main stack).
         * This function is get calles, whenever a num get poped out from the main stack.
         */
        if(ref === this.#min.data){
            // if minimum value from stack is getting pop then update min pointer to the 2nd minimum value in O(1) time.
            this.#min = this.#min.next
        }
    }

    print(){
        let ptr = this.#top;
        while (ptr) {
            console.log(ptr.data);
            ptr = ptr.next            
        }
    }
}


console.clear()
let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(0);
stack.push(5);
stack.push(-1);
stack.push(6);

stack.print()

console.log('min: ' + stack.min);
console.log('pop:' +stack.pop());
stack.print()
console.log('min: ' + stack.min);

console.log('pop:' +stack.pop());
stack.print()
console.log('min: ' + stack.min);

console.log('pop:' +stack.pop());
stack.print()
console.log('min: ' + stack.min);

console.log('pop:' +stack.pop());
stack.print()
console.log('min: ' + stack.min);

console.log('pop:' +stack.pop());
stack.print()
console.log('min: ' + stack.min);

