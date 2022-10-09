
String.prototype.sortAlphabets = function() {

    // O(N log N), where N is the length of string
    return this.split('').sort().join('')
    /**
     * split -> O(N)
     * sort -> O( N log N )
     * join -> O( N )
     */
};


function isPermutation(a,b){

    if(a.length !== b.length){
        // permuatation string must have same length, if not the pair is not permutation.
        return false;
    }

    // permutation string has same characters but in different sequence, if we can rearrange them in a same sequence then we can quikly compair permutation.
    a = a.sortAlphabets()
    b = b.sortAlphabets()

    return a === b; // O(N), where N is the length of string


}


function isPermutationOptimized(a,b){

    if(a.length !== b.length){
        // permuatation string must have same length, if not the pair is not permutation.
        return false;
    }

    // length of string a and b is equal, so we can take N as length of the string.

    let charCount = new Array(128);

    // counting char in string a
    for(let i = 0; i < a.length; i++){
        // O(N)

        let index = a[i].charCodeAt()
        if(charCount[index]){
            charCount[index]++;
        }else{
            charCount[index] = 1
        }
    }

    for (let i = 0; i < b.length; i++) {
        // O(N)

        let index = b[i].charCodeAt()
        if( !charCount[index] ){
            // if char of b is not present in a map then it is not a permutation string
            return false;
        }
        charCount[index]--;
        if(charCount[index] < 0){
            // if frequency of any char in string b is more than a then it is not a permutation string.
            return false;
        }
    }

    return true;

}



console.log(isPermutation("Suraj", "jaruS"));
console.log(isPermutationOptimized("Suraj", "jaruS"));