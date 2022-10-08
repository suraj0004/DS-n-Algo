
class ArrayList {

    constructor(size = 0){
        this.size = size;
        this.insertAtIndex = 0;
        this.arr = new Array(this.size)
    }

    push(num){
        if(this.insertAtIndex === this.size){
            this.resize()
        }
        this.arr[this.insertAtIndex] = num
        this.insertAtIndex++
    }

    pop(){
        this.insertAtIndex--
        delete this.arr[this.insertAtIndex];
    }

    print(){
        console.log(this.arr);
    }

    resize(){
        
        if(this.size === 0){
            // edge case
            this.size = 1;
            this.arr = new Array(this.size);
            return
        }

        // create new array with dounle size
        let newSize = this.size * 2;
        let newArr = new Array(newSize);

        // copy old array values to new array
        for(let i = 0; i < this.size; i++){
            newArr[i] = this.arr[i];
        }
        
        this.arr = newArr
        this.size = newSize
    }
}

module.exports = ArrayList