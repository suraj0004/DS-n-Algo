class SetOfStack {

    constructor(threshold = 5) {
        this.stacks = [];
        this.threshold = threshold;
    }

    push(data) {

        if (!this.isSetEmpty()) {
            // if top stack has capcity less than threshold
            let topStack = this.peekStack()
            if (topStack.length < this.threshold) {
                topStack.push(data);
                return;
            }

        }


        // if top stack capacity reached to threshold then create new stack in stack
        let stack = new Array();
        stack.push(data);
        this.stacks.push(stack)

    }

    pop(){
        if(!this.isSetEmpty()){
            let topStack = this.peekStack();
            let data = topStack.pop();
            if(topStack.length === 0){
                this.stacks.pop()
            }
            return data;
        }
    }

    popAt(stack_no){
        // stack_no, zero based index
        if(stack_no >= this.stacks.length || stack_no < 0 || this.stacks[stack_no].length <= 0) return;

        let data = this.stacks[stack_no]
        this.stacks[stack_no].pop()

        if(this.stacks[stack_no].length === 0){
            this.stacks = this.leftShift(this.stacks, stack_no)
        }else{
            // shift the plate from bottom of next stack to current stack, do this for each stack to utilize the maximum capacity of each stack
            for(let i = stack_no + 1; i < this.stacks.length; i++){
                let shift_element = this.stacks[i][0];
                this.stacks[i-1].push(shift_element);
                this.stacks[i] = this.leftShift(this.stacks[i], 0)
                if(this.stacks[i].length === 0){
                    this.stacks.pop()
                }
            }
        }
        
        return data;
    }

    leftShift(arr, shift_index){
        let newArr = []

        for(let i = 0; i < shift_index; i++){
            newArr.push(arr[i])
        }

        for(let i = shift_index + 1; i < arr.length; i++){
            newArr.push(arr[i])
        }
        return newArr
    }

    isSetEmpty() {
        return this.stacks.length === 0
    }

    peekStack() {
        return this.stacks[this.stacks.length - 1];
    }

    print(){
        console.log(this.stacks);
    }
}

const stackOfPlates = new SetOfStack(5);

stackOfPlates.push(1)
stackOfPlates.push(2)
stackOfPlates.push(3)
stackOfPlates.push(4)
stackOfPlates.push(5)
stackOfPlates.push(6)
stackOfPlates.push(7)
stackOfPlates.push(9)
stackOfPlates.push(10)
stackOfPlates.push(11)
stackOfPlates.push(12)
stackOfPlates.push(13)

stackOfPlates.print()

stackOfPlates.pop()
stackOfPlates.pop()
stackOfPlates.pop()
stackOfPlates.pop()

stackOfPlates.print()

stackOfPlates.push(100)
stackOfPlates.push(200)
stackOfPlates.push(300)

stackOfPlates.print()

stackOfPlates.popAt(0)
stackOfPlates.popAt(0)

stackOfPlates.print()

stackOfPlates.popAt(2)
stackOfPlates.print()

stackOfPlates.pop()
stackOfPlates.print()

stackOfPlates.popAt(0)
stackOfPlates.print()

stackOfPlates.popAt(1)
stackOfPlates.print()