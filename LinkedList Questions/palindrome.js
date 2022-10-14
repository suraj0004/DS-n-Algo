const LinkList =  require('./LinkedList')

function isPalindrome(start, end){
    if(end.next === null){
        return end
    }

    let lastNode = isPalindrome(start, end.next);
    if(lastNode === false){
        return false
    }
    if(lastNode.data !== start.head.data){
        // not palindrome
        return false;
    }
    start.head = start.head.next;
    return end;
}

function isListPalindrome(head){

    // using obj for passing head as a ref variable.
    let obj = {
        head: head
    }

    return !!isPalindrome(obj, head)
}

function isPalindrome_simple(head){

    let tail = reversListClone(head);
    let len = Math.floor(length(head) / 2);

    while(len){
        if(tail.data !== head.data){
            return false
        }
        tail = tail.next;
        head =  head.next;
        len--;
    }
    
    return true;
}

function reversListClone(head){
    let revList = new LinkList();
    while(head){
        revList.appendBefore(head.data)
        head = head.next;
    }
    return revList.getHead()
}

function length(head){

   let len = 0;

   while(head){
    len++;
    head = head.next
   }

    return len
}



let list = new LinkList([0,1,2,1,0])
console.log(isListPalindrome(list.getHead()));
console.log(isPalindrome_simple(list.getHead()));