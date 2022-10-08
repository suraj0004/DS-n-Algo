const LinkList = require('../LinkList/LinkList')

class HashTable {

    #size
    #table
    constructor(size) {
        this.#size = size;
        this.#table = (()=>{
           let table = new Array(this.#size)
           for (let i = 0; i < this.#size; i++) {
            table[i] = new LinkList();
           }
           return table;
        })();
    }

    #hashFunction(key){

        let keySum = 0;

        for(let i = 0; i < key.length; i++){
            keySum += key[i].charCodeAt();
        }

        return keySum % this.#size;
    }

    insert(data){
        let index = this.#hashFunction(data.key)
        this.#table[index].append( data )
    }

    print(){
        for (let i = 0; i < this.#size; i++) {
            if(this.#table[i].hasData()){
                console.log(`\nList at index ${i}`);
                this.#table[i].print()
            }
           
        }
    }

    get(key){
        let index = this.#hashFunction(key)
        if(this.#table[index].hasData()){
            return this.#table[index].find( (node) => {
                return node.key === key
             } )
        }

        return null;
        
    }
}

module.exports = HashTable