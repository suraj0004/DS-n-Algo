/**
 * given 2 linked list.
 * here list represent a number where each node in linked list is a digit of a number in reverse order
 * eg: 251 = 1 -> 5 -> 2.
 * 
 * We are given two linked list, we have to form a new linked list represent the sum of given linked list
 * .
 * eg:
 * Inpput
 * 1 -> 5 -> 2               ( 251 )
 * 9 -> 2 -> 1               ( 129 )
 * 
 * Output:
 *  0 -> 8 -> 3              ( 380 )
 *  
 *
 */


function sumRevList(l1, l2) {

    let num1 = getRevNumFromList(l1.getHead())
    let num2 = getRevNumFromList(l2.getHead())

    let list = new LinkList();
    let sum = num1 + num2;
    console.log(sum);

    while(sum > 0){
        let digit = sum % 10;
        list.append(digit);
        sum =  Math.floor(sum / 10);
    }

    return list;
}

function getRevNumFromList(head){
    
    if(head === null){
        return 0;
    }

    return (getRevNumFromList(head.next) * 10) + head.data

}


function sumForwardList(l1, l2){
    let num1 = getFrwNumFromList(l1.getHead())
    let num2 = getFrwNumFromList(l2.getHead())

    let list = new LinkList();
    let sum = num1 + num2;

    insertInRevOrder(list, sum)

    return list;
}

function getFrwNumFromList(head){
    let num = 0;
    while(head){
        num = (num * 10) + head.data
        head = head.next;
    }
    return num
}

function insertInRevOrder(list, sum){
    if(sum === 0){
        return;
    }

    let dig = sum % 10;
    insertInRevOrder(list, Math.floor(sum / 10));
    list.append(dig)

}


const LinkList = require('./LinkedList')

const l1 = new LinkList([ 1, 5, 2 ]);
const l2 = new LinkList([ 9, 2, 1 ]);

// const l3 = sumRevList(l1, l2);
// l3.printList()

/**
 * 152 = 1 -> 5 -> 2
 */
const l4 = sumForwardList(l1, l2);
l4.printList()

