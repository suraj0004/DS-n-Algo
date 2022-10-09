function isPermutationPalindrome(str = ''){

    // converting to lower case to avoid case sensitive char.
    str = str.toLowerCase().split(" ").join("");

    // created a char count map to store frequency of all chars
    let charCount = new Map();
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if(charCount.has(char)){
            let count = charCount.get(char)
            charCount.set(char, count + 1)
        }else{
            charCount.set(char,1)
        }

    }


    /**
     * if lenght of string is even and no chars has odd count then string is palindrome.
     * if lenght of string is odd and only one char has odd count then string is palindrom.
     * else string is not palindrome.
     */
    let oddCharCount = 0;
    charCount.forEach((count,key) => {
        if(count % 2 !== 0){
            // odd count
            oddCharCount++;
        }
    })

    if(str.length % 2 === 0 && oddCharCount === 0){
        // if lenght of string is even and no chars has odd count then string is palindrome.
        return true;
    }else if(str.length % 2 !== 0 && oddCharCount === 1){
        // if lenght of string is odd and only one char has odd count then string is palindrom.
        return true;
    }else{
        return false
    }


}



/**
 * 
 * @param {string} str 
 * @returns {boolean}
 * we can check as we go along.
 */
function isPermutationPalindrome_optimized(str = '') {

    // converting to lower case to avoid case sensitive char.
    str = str.toLowerCase().split(" ").join("");


    let charCount = new Map();
    let oddCount = 0;

    for (let i = 0; i < str.length; i++) {

        const char = str[i]

        // setting & updating char count in map
        if(charCount.has(char)){
            charCount.set(char, charCount.get(char) + 1  );
        }else{
            charCount.set(char,1)
        }


        let count = charCount.get(char);
        // simultaneously updating odd char counts
        if(count % 2 !== 0 ){
            oddCount++
        }else{
            oddCount--;
        }
    }

    return oddCount <= 1

}


console.log(isPermutationPalindrome("Tact Coa"));
console.log(isPermutationPalindrome_optimized("Tact Coa"));