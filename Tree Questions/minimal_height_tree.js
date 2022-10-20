/**
 * Given a sorted ( increasing order) array with unique integer elements,
 * write an algorithm to create a binary search with minimal height.
 */


class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


function getStartIndex(arr){
    return Math.floor(arr.length/2)
}

function creatLeftTree(root, arr, startIndex){
   
    while (startIndex >= 0) {

        root.left = new Node(arr[startIndex]);
        root.left.right =  new Node(arr[startIndex + 1]);
        root = root.left;
        startIndex -= 2;

    }

    if(startIndex === -1){
        root.left = new Node(arr[0]);
    }

  
}

function creatRightTree(root, arr, startIndex){
   
    while (startIndex < arr.length) {
        root.right = new Node(arr[startIndex]);
        root.right.left =  new Node(arr[startIndex - 1]);
        root = root.right;
        startIndex += 2;
    }

    if(startIndex === arr.length){
        root.right = new Node(arr[ arr.length - 1]);
    }
}

function createTreeFromSortedArray(arr) {

    let startIndex = getStartIndex(arr)
    let root = new Node(arr[startIndex]);

    creatLeftTree(root,arr,startIndex - 2)
    creatRightTree(root,arr,startIndex + 2)

    return root;

}

function main(){
    let root  = createTreeFromSortedArray([0,1,2,3,4,5,6,7,8,9])
    console.clear()
    console.log(JSON.stringify(root));
}

main()