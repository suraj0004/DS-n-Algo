function printMatrix(arr = [[]]) {
    let N = arr.length;
    let str = []
    for (let i = 0; i < N ; i++) {
        for (let j = 0; j < N; j++ ) {
            str.push( arr[i][j] )
            str.push(" ")
        }
        str.push("\n")
    }
    console.log(str.join(""));
}


function rotate90(arr = [ [] ]) {
    let N = arr.length;
    let newArr = new Array(N)
    for (let i = 0; i < N; i++) {
        newArr[i] =  new Array(N)
    }


    for (let i = 0,col = N - 1; i < N && col >= 0; i++,col--) {
        for (let j = 0; j < N; j++ ) {
                newArr[j][col] = arr[i][j]
        }
    }
    return newArr
}





let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log("\nInitial array");
printMatrix(arr);
arr = rotate90(arr);

console.log("\n after 90 degrees rotate");
printMatrix(arr);