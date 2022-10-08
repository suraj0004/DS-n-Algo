
String.prototype.isUnique = function(){
    let charMap = new Map()
    for (let i = 0; i < this.length - 1; i++) {
        if(charMap.has(this[i])){
            return false
        }
        charMap.set(this[i],1)
    }

    return true
}



// determine is a string has all unique characters . what if you cannot use additional data structures.
String.prototype.sortAlphabets = function() {
    return this.split('').sort().join('')
};
String.prototype.isUniqueWithoutAdditionalDataStructure = function(){
    
    let str = this;
    str = str.sortAlphabets()

    for (let i = 0; i < this.length - 1; i++) {
        if(this[i] === this[i+1]){
            return false
        }
    }

    return true

}


function main(){
    let str = 'Sooraj'
    console.log(str.isUniqueWithoutAdditionalDataStructure());
    console.log(str.isUnique());
}

main()