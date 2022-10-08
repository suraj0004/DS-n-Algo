const prompt = require('prompt-sync')()
const StringBuilder = require('./StringBuilder');
(() => {

    const sentence = new StringBuilder();

    console.log('Enter words, when finish press 0 (zero)');
    let input = ''
    while(true){
        input = prompt("Enter: ")
        if(input === '0'){
            break;
        }
        sentence.append(input)
    }
    console.log(sentence.toString());

})()