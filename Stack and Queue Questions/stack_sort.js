const Stack = require('../Stack/stack_list')

function sortStack(stack){

    let tempStack = new Stack();

    while(!stack.isEmpty()){
        tempStack.push( stack.pop() )
    }

    while (!tempStack.isEmpty()) {
        let num =  tempStack.pop();
        while( !stack.isEmpty() && stack.peek() < num){
            tempStack.push(stack.pop())
        }
        stack.push(num)
    }
}

let stack = new Stack();

console.clear()
stack.push(7)
stack.push(5)
stack.push(10)

stack.print();
sortStack(stack);
console.log('after sort');
stack.print()
console.log('peek', stack.peek());
