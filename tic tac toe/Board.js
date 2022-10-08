class Board{
    constructor(size){

        this.size = size;
        this.placeholderSymbol = ' '
        this.board = (() => {
            let arr = (new Array(size))
            for (let i = 0; i < size; i++) {
                arr[i] = new Array(size).fill(this.placeholderSymbol);
              }
            return arr
        })();
    }

    printBoard(){
        for(let i = 0; i< this.size; i++){

            this.printVoidLine()

            let op = ''
            for(let j = 0; j < this.size; j++){
                op += ( '| ' +  this.board[i][j] + ' |');
            }
            console.log(op);
        }
    }

    printVoidLine(){
        let op = ''
        for (let i = 0; i < this.size; i++) {
            op += ' ___ '
        }
        console.log(op);
    }

    doesBoardHasEmptyCell(){
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if(this.board[i][j] === this.placeholderSymbol){
                    return true;
                }
            }
        }
        return false;
    }
}
module.exports = Board 