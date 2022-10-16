class StackNo {
    static ONE = 'ONE';
    static TWO = 'TWO';
    static THREE = 'THREE';
}

class Stack {

    #one; #two; #three;
    #arr;
    #increment;

    constructor() {
        this.#one = -1;
        this.#two = -2;
        this.#three = -3
        this.#arr = []

        this.#increment = 3;
    }

    push(data, type) {

        switch (type) {

            case StackNo.THREE:
                this.#push_to_3rd_stack(data)
                break;

            case StackNo.TWO:
                this.#push_to_2nd_stack(data)
                break;

            default:
                this.#push_to_1st_stack(data)
                break;
        }
    }

    pop(type) {
        switch (type) {

            case StackNo.THREE:
                return this.#pop_from_3rd_stack()

            case StackNo.TWO:
                return this.#pop_from_2nd_stack()

            default:
                return this.#pop_from_1st_stack()
        }
    }

    peek(type){
        switch (type) {

            case StackNo.THREE:
                return this.#arr[this.#three]

            case StackNo.TWO:
                return this.#arr[this.#two]

            default:
                return this.#arr[this.#one]
        }
    }

    isEmpty(type){
        switch (type) {

            case StackNo.THREE:
                return this.#three < 0

            case StackNo.TWO:
                return this.#two < 0

            default:
                return this.#one < 0
        }
    }

    print(type){

        let startIndex;
        switch (type) {

            case StackNo.THREE:
                startIndex = this.#three;
                break;

            case StackNo.TWO:
                startIndex = this.#two;
                break;

            default:
                startIndex = this.#one;
                break;
        }

        console.log(`___________Print start: stack ${type} ________`);
        while(startIndex >= 0){
            console.log(this.#arr[startIndex]);
            startIndex -= this.#increment
        }
        console.log('___________Print end ________');
    }


    #push_to_1st_stack(d) {
        this.#one += this.#increment
        this.#arr[this.#one] = d
    }

    #push_to_2nd_stack(d) {
        this.#two += this.#increment
        this.#arr[this.#two] = d
    }

    #push_to_3rd_stack(d) {
        this.#three += this.#increment
        this.#arr[this.#three] = d
    }

    #pop_from_1st_stack() {

        if(this.isEmpty(StackNo.ONE)) return

        const data =  this.#arr[this.#one];
        this.#one -= this.#increment
        return data
    }

    #pop_from_2nd_stack() {

        if(this.isEmpty(StackNo.TWO)) return
        
        const data =  this.#arr[this.#two];
        this.#two -= this.#increment
        return data
    }

    #pop_from_3rd_stack() {

        if(this.isEmpty(StackNo.THREE)) return

        const data =  this.#arr[this.#three];
        this.#three -= this.#increment
        return data
    }
}



let stack = new Stack();
console.clear()
stack.push(10, StackNo.ONE)
stack.push(20, StackNo.ONE)
stack.push(30, StackNo.ONE)

stack.push(1, StackNo.TWO)
stack.push(2, StackNo.TWO)
stack.push(3, StackNo.TWO)

stack.push(100, StackNo.THREE)
stack.push(200, StackNo.THREE)
stack.push(300, StackNo.THREE)

stack.print(StackNo.ONE)
stack.print(StackNo.TWO)
stack.print(StackNo.THREE)

console.log( 'peek one ' + stack.peek(StackNo.ONE));
console.log( 'peek TWO ' + stack.peek(StackNo.TWO));
console.log( 'peek THREE ' + stack.peek(StackNo.THREE));

console.log( '\npop one ' + stack.pop(StackNo.ONE));
console.log( 'pop TWO ' + stack.pop(StackNo.TWO));
console.log( 'pop THREE ' + stack.pop(StackNo.THREE));

console.log( '\npop one ' + stack.pop(StackNo.ONE));
console.log( 'pop TWO ' + stack.pop(StackNo.TWO));
console.log( 'pop THREE ' + stack.pop(StackNo.THREE));

stack.print(StackNo.ONE)
stack.print(StackNo.TWO)
stack.print(StackNo.THREE)

stack.push(5, StackNo.ONE)
stack.push(6, StackNo.TWO)
stack.push(7, StackNo.THREE)

stack.print(StackNo.ONE)
stack.print(StackNo.TWO)
stack.print(StackNo.THREE)

console.log( '\nisEmpty one ' + stack.isEmpty(StackNo.ONE));
console.log( 'isEmpty TWO ' + stack.isEmpty(StackNo.TWO));
console.log( 'isEmpty THREE ' + stack.isEmpty(StackNo.THREE));

console.log( '\npop one ' + stack.pop(StackNo.ONE));
console.log( 'pop TWO ' + stack.pop(StackNo.TWO));
console.log( 'pop THREE ' + stack.pop(StackNo.THREE));

console.log( '\npop one ' + stack.pop(StackNo.ONE));
console.log( 'pop TWO ' + stack.pop(StackNo.TWO));
console.log( 'pop THREE ' + stack.pop(StackNo.THREE));

stack.print(StackNo.ONE)
stack.print(StackNo.TWO)
stack.print(StackNo.THREE)

console.log( '\nisEmpty one ' + stack.isEmpty(StackNo.ONE));
console.log( 'isEmpty TWO ' + stack.isEmpty(StackNo.TWO));
console.log( 'isEmpty THREE ' + stack.isEmpty(StackNo.THREE));