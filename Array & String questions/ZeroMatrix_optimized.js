function zeroMatrix(arr = [ ]) {

    // array for checking in a row contains zero value in it, same for column as well 
   let rowCheck = new Array(arr.length);
   let colCheck =  new Array(arr[0].length);


   // setting rowcheck and colcheck to true if any cell contain zero value
   for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] === 0){
            rowCheck[i] = true;
            colCheck[j] = true;
        }
    }
   }

   setRowstoZero(arr, rowCheck)
   setColstoZero(arr, colCheck)


}

function  setRowstoZero(arr = [], rowCheck = []){
   for (let r = 0; r < rowCheck.length; r++) {
    if(rowCheck[r] === true){
        for (let c = 0; c < arr[r].length; c++) {
            arr[r][c] = 0
        }
    }
   }
}

function  setColstoZero(arr = [], colCheck = []){
    for (let c = 0; c < colCheck.length; c++) {
        if(colCheck[c]){
            for (let r = 0; r < arr.length; r++) {
                arr[r][c] = 0
            }
        }
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
    zeroMatrix(arr);
    
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