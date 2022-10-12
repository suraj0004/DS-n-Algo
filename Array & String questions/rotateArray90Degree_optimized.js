function rotate90(arr = [[]]) {

    let rowStart = 0, rowEnd = arr.length - 1;
    let colStart = 0, colEnd = arr.length - 1;

    while (rowStart < rowEnd && colStart < colEnd) {

        rotateBorder90(arr, rowStart, rowEnd, colStart, colEnd)

        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;

    }
}


function rotateBorder90(arr = [[]], rowStart, rowEnd, colStart, colEnd) {

    // first col with last row
    for (let row = rowStart, col = colStart; row < rowEnd && col < colEnd; row++, col++) {
        let temp = arr[row][colStart];
        arr[row][colStart] = arr[rowEnd][col];
        arr[rowEnd][col] = temp;
    }

    // last row with last col
    for (let row = rowEnd, col = colStart; row > rowStart && col < colEnd; row--, col++) {
        let temp = arr[rowEnd][col];
        arr[rowEnd][col] = arr[row][colEnd];
        arr[row][colEnd] = temp;
    }

    // last col with frist row
    for (let row = rowEnd, col = colEnd; row > rowStart && col > colStart; row--, col--) {
        let temp = arr[row][colEnd];
        arr[row][colEnd] = arr[rowStart][col];
        arr[rowStart][col] = temp;
    }
}





let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log("\nInitial array");
printMatrix(arr);
rotate90(arr);

console.log("\n after 90 degrees rotate");
printMatrix(arr);


function printMatrix(arr = [[]]) {
    let N = arr.length;
    let str = []
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            str.push(arr[i][j])
            str.push(" ")
        }
        str.push("\n")
    }
    console.log(str.join(""));
}
