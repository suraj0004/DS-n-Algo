const Board = require('./Board');
const prompt = require("prompt-sync")();

class Game{
    constructor(){
        this.players = []
        this.board = new Board(3)
    }

    
    startGame(){

        let noWinner = true;
        let noTie = true;

        while(noWinner && noTie){
            this.board.printBoard()
            if(this.isGameOver()){
                break;
            }
            let currentPlayer = this.getCurrentPlayer()
            let move = this.getPlayerMove(currentPlayer)
            this.board.board[move.row][move.col] = currentPlayer.symbol
        }
    }

    getCurrentPlayer(){
        let currentPlayer = this.players[0];
        this.players = this.players.slice(1).concat( this.players.slice(0,1) )

        return currentPlayer
    }

    getPlayerMove(player){
        let input = prompt(`${player.name} turn, please enter your target cell index: `);
        input = input.split(',')
        return {
            row: input[0],
            col: input[1]
        }
    }

    isGameOver(){
        return this.checkForWinner() || !this.board.doesBoardHasEmptyCell()
    }

    checkForWinner(){
        for (let p = 0; p < this.players.length; p++) {
            if(this.isThisPlayerWinner(this.players[p])){
                return true
            }
            
        }
        return false
    }

    isThisPlayerWinner(player){

        // row check
        for (let i = 0; i < this.board.size; i++) {
            let rowCheck = true;
            for (let j = 0; j < this.board.size; j++) {
                if(this.board.board[i][j] !== player.symbol){
                    rowCheck = false;
                    break
                }
            }
            if(rowCheck){
                return true;
            }
        }

        // col check
        for (let i = 0; i < this.board.size; i++) {
            let colCheck = true;
            for (let j = 0; j < this.board.size; j++) {
                if(this.board.board[j][i] !== player.symbol){
                    colCheck = false;
                    break
                }
            }
            if(colCheck){
                return true;
            }
        }

        // diagonal one
        let dCheck = true;
        for(let i = 0; i < this.board.size; i++){
            if(this.board.board[i][i] !== player.symbol){
                dCheck = false;
                break
            }
        }
        if(dCheck){
            return true;
        }


        // diagonal 2
        dCheck = true;
        for (let i = 0; i < this.board.size; i++) {
            for (let j = 0; j < this.board.size; j++) {
                if( i + j === this.board.size - 1 ){
                    if(this.board.board[i][j] !== player.symbol){
                        dCheck = false;
                        break
                    }
                }
            }
          
        }
        if(dCheck){
            return true;
        }


        return false
    }


}

module.exports = Game 