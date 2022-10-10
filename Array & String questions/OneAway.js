/**
 * There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
 * Given two string, write a function to check if they are one edit away.
 */


//check If Edit Can Be Done In One Operation
class StringEditor{


    // O(N)
    checkIfEditCanBeDoneInOneOperation(currentStr = '', resultStr = ''){
        
        if( Math.abs(currentStr.length - resultStr.length) > 1 ){
            // if difference between lengths is more than 1 character then it will take more than 1 operations.
            return false;
        }
        
        if(currentStr.length < resultStr.length){
            // insert
            return this.calculateInsertCount(currentStr, resultStr) <= 1;
        }else if(currentStr.length > resultStr.length){
            // remove
            return this.calculateRemoveCount(currentStr, resultStr) <= 1;
        }else{
            // replace
            return this.calculateReplaceCount(currentStr, resultStr) <= 1;
        }
    }

    calculateInsertCount(currentStr, resultStr){
        let count = 0;
        let i = 0,j = 0;
        while(i < currentStr.length && j < resultStr.length){

            if(currentStr[i] != resultStr[j]){
                count++;
                j++;
                continue;
            }

            i++
            j++
        }
        return count
    }

    calculateRemoveCount(currentStr, resultStr){
        let count = 0;
        let i = 0,j = 0;
        while(i < currentStr.length && j < resultStr.length){

            if(currentStr[i] != resultStr[j]){
                count++;
                i++;
                continue;
            }

            i++
            j++
        }
        return count
    }
    
    calculateReplaceCount(currentStr, resultStr){
        let count = 0;
        let i = 0,j = 0;
        while(i < currentStr.length && j < resultStr.length){

            if(currentStr[i] != resultStr[j]){
                count++;
            }

            i++
            j++
        }
        return count
    }
}

const editor = new StringEditor()

console.log(editor.checkIfEditCanBeDoneInOneOperation("ple", "pall"));
console.log(editor.checkIfEditCanBeDoneInOneOperation("pale", "ple"));
console.log(editor.checkIfEditCanBeDoneInOneOperation("pale", "bale"));
console.log(editor.checkIfEditCanBeDoneInOneOperation("pale", "bake"));
console.log(editor.checkIfEditCanBeDoneInOneOperation("pale", "pa"));