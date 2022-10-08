function checkPermutation(str, permutationStr) {

    const res = []
    // creating a map and putting each char of permutation str with its frequency.
    let permutationStrMap = {}
    for (let i = 0; i < permutationStr.length; i++) {
        if(permutationStrMap[permutationStr[i]]){
            permutationStrMap[permutationStr[i]]++
        }else{
            permutationStrMap[permutationStr[i]] = 1;
        }
    }

    // created a window of permutation string length. sliding this window and checking for a permutation match 
    for (let i = 0; i <= str.length - permutationStr.length; i++) {
        
        let isPermutation = true;
        let _map = {
            ...permutationStrMap
        };

        for (let j = i; j < i + permutationStr.length; j++) {
            if(_map[str[j]]){
                _map[str[j]]--;
            }else{
                isPermutation =  false;
                break;
            }
        } 

        if(isPermutation){
            res.push( str.substring(i,i + permutationStr.length) )
        }
    }

    return res

}

console.log(checkPermutation("cbabadcbbabbcbabaabccbabc", "abbc"));