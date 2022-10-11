/**
 * implement a method  to perform basic string compression using the counts of repeated characters.
 * for example , the string aabcccccaaa would become a2b1c5a3.
 * if the compressed string would not become smaller than the original string, your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a-z)
 */


String.prototype.compress = function(){

    let charCount = new Map()
    let compressedStrArr = [], prevChar = ''

    for (let i = 0; i < this.length; i++) {

        if(prevChar && this[i] != prevChar){
            compressedStrArr.push(prevChar)
            compressedStrArr.push(charCount.get(prevChar))
            charCount.delete(prevChar)
        }

        if(charCount.has( this[i] )){
            charCount.set( this[i], charCount.get(this[i]) + 1 )
        }else{
            charCount.set(this[i], 1)
        }
        prevChar = this[i]
        
    }

    compressedStrArr.push(prevChar)
    compressedStrArr.push(charCount.get(prevChar))

    return this.length < compressedStrArr.length ? this : compressedStrArr.join("")
}


console.log( "aaaaaaaaaaaabcccccaaa".compress() );