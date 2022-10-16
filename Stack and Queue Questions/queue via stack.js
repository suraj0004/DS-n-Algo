class MyQueue{

    constructor(){
        this.mainStack = []; // to store data in manner of queue
        this.helperStack = [] // help to manage sequence in our queue stack
    }

    add(data){
        this.emptyMainStack()
        this.mainStack.push(data);
        this.refillMainStack()
    }

    remove(){
        return this.mainStack.pop()
    }

    emptyMainStack(){
        let length = this.mainStack.length;
        while (length) {
            let data = this.mainStack.pop()
            this.helperStack.push(data);
            length--;
        }
    }
    refillMainStack(){
        let length = this.helperStack.length;
        while (length) {
            let data = this.helperStack.pop()
            this.mainStack.push(data);
            length--;
        }
    }

    peek(){
        return this.mainStack[this.mainStack.length - 1]
    }

    print(){
        console.log('\n print______________________');
        let lastIndex = this.mainStack.length - 1;

        while(lastIndex >= 0){
            console.log(this.mainStack[lastIndex]);
            lastIndex--
        }
    }
}


console.clear()
let queue = new MyQueue()

queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
queue.add(5)

queue.print()

console.log('remove: ' + queue.remove());
console.log('remove: ' + queue.remove());

queue.print()

queue.add(6)


queue.print()