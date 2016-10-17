/*contain the logic of your app. Running it in Terminal/Bash will start the game.*/

//DEPENDANCY FOR inquirer NPM PACKAGE
var inquirer = require('inquirer');
// enables us the read or write files on our server
var fs = require('fs');

var Word = require("./game.js");
//console.log(Word.game);

var length = Word.game.length;

var unguessedWord = '';
for(var i = 0; i < length; i++){
	unguessedWord += '_ ';  // example: miami would be _ _ _ _ _
}
console.log(unguessedWord);

inquirer.prompt([{

	name: "letter",
	message:"Guess a letter"
}
]).then(function(answer){
	console.log(answer.letter);
});


exports.currentWord = Word.game;

/*
var Letter = require("./letter.js");
console.log(Letter());
*/