
function URLify(charArr, trueLen){

    // find num of space which will get replace by %20
    let spaceCount = 0;
    for (let i = 0; i < trueLen; i++) {
        if(charArr[i] === ' ') spaceCount++;
    }

    let spacesAtEnd = spaceCount * 2;
    let endIndex = trueLen + spacesAtEnd - 1

    while(trueLen--){
        if(charArr[trueLen] !== ' '){
            charArr[endIndex] = charArr[trueLen];
            endIndex--;
        }else{
            charArr[endIndex] = '0'
            charArr[endIndex - 1] = '2'
            charArr[endIndex - 2] = '%'
            endIndex -= 3
        }
    }

}



let charArr = "Mr John Smith    ".split('');
console.log(charArr.join(''));
URLify(charArr,13);
console.log(charArr.join(''));