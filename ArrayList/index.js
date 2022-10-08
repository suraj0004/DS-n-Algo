const prompt = require('prompt-sync')()
const ArrayList = require('./ArrayList')

function main() {

    const list = new ArrayList();

    console.log('Enter numbers, when finish press Q');
    let input = ''
    while(true){
        input = prompt("Enter number:")
        if(input === 'Q' || input === 'q'){
            break;
        }

        list.push(+input)
    }

    list.print()
    list.pop()
    list.print()
    list.push(10)
    list.print()

}


main()