const ArrayList = require('../ArrayList/ArrayList')

class StringBuilder extends ArrayList{
    constructor(size = 0){
        super(size)
    }

    append(str){
        // O(1)
        this.push(str)
    }

    toString(){
        // O( (N^2)S ), N: size of the array, S: leght of the largest string
        let str = ''
        for (let i = 0; i < this.size; i++) {
           if(!!this.arr[i]){
            str = str + this.arr[i] + ' '
           }
        }
        return str;
    }
}

module.exports = StringBuilder