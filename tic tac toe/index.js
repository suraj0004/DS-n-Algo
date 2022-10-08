const Game = require('./Game');
const Player = require('./Player');

let game = new Game();

game.players.push( new Player('suraj', 'X') )
game.players.push( new Player('shivam', 'O') )

game.startGame()
