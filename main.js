/*contain the logic of your app. Running it in Terminal/Bash will start the game.*/

//DEPENDANCY FOR inquirer NPM PACKAGE
var inquirer = require('inquirer');
// enables us the read or write files on our server
var fs = require('fs');

/*
var Word = require("./game.js");
exports.currentWord = Word.game;
*/
var Game = require("./game.js");
exports.currentWord = Game.game;


//console.log(Word.game);
var unguessedWord = '';

var Letter = require("./letter.js");
var getLetters = Letter.Letter();
console.log("Letter: " + getLetters);

var Word = require("./word.js");
//var getWord = Word();
var getWord = Word.Word();

console.log("Word: " + getWord);

//var isIt = Word.checkWordForLetter('e');
//console.log('IsIt?' + isIt);

/*
var unguessedWord = '';
for(var i = 0; i < length; i++){
	unguessedWord += '_ ';  // example: miami would be _ _ _ _ _
}
*/
var let = '';
var count = 10; // 10 guesses
do{
	console.log(unguessedWord);
	inquirer.prompt([{

		name: "letter",
		message:"Guess a letter"
	}
	]).then(function(answer){ 
		// changed let to var
		let = answer.letter;
		console.log(let);
		let.printInfo();
	});

	//exports.currentLetter = answer.letter;
	//exports.unguessedWord = unguessedWord;
    
	if(Word.checkWordForLetter(let)){
		unguessedWord = Letter.updateUnguessedLetters(let);
	}

	//unguessedWord = Game.game;
	count--;//decrement count as they have used up one of their guesses
}
while( (unguessedWord != Game.game) && (count > 0) );



/*
var Letter = require("./letter.js");
console.log(Letter());
*/