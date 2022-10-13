const LinkList = require('./LinkedList')


function partition(head, x){

    let beforeList = new LinkList();
    let afterList = new LinkList()

    while(head){
        
        if(head.data < x){
            // insert to before list
            beforeList.append(head.data)

        }else{
            // insert to after list
            afterList.append(head.data)
        }
        head = head.next
    }

    if(!beforeList.getHead()){
        return afterList.getHead()
    }

    return mergeList(beforeList, afterList)
}

function mergeList(list1, list2){
    
    let p = list1.getHead()

    while(p.next){
        p = p.next;
    }
    p.next = list2.getHead()
    return list1;
}

const list = new LinkList([
    3,5,8,5,10,2,1
])

list.printList()
const partitinList = partition(list.getHead(),5)
partitinList.printList()