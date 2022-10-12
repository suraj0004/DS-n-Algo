function zeroMatrix(arr = [ ], rows = 0, cols = 0) {
   
    let valueCheck = new Array(rows);
    for (let i = 0; i < rows; i++) {
        valueCheck[i] = new Array(cols)
        for (let j = 0; j < cols; j++) {
            valueCheck[i][j] = arr[i][j]
        }
    }
    

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(valueCheck[i][j] === 0){
                setRowtoZero(arr,i)
                setColtoZero(arr,j)
            }
        }
    }
}

function setRowtoZero(arr = [], row){
    for (let col = 0; col < arr[row].length; col++) {
        arr[row][col] = 0
    }
}

function setColtoZero(arr = [], col){
    for (let row = 0; row < arr.length; row++) {
        arr[row][col] = 0
    }
}





(() => {
    let arr = [
        [1,0,3],
        [4,5,6],
        [7,8,0]
    ]
    
    console.log("\nInitial array");
    printMatrix(arr);
    zeroMatrix(arr, 3, 3);
    
    console.log("\n after updating 0");
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
    
})();