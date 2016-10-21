/*should contain all of the methods which will check the letters guessed 
versus the random word selected.*/
// should be a constructor file

var Main = require("./main.js");
//var Letter = require("./letter.js");
//var currentLetter = new Letter();
var currentWord = Main.currentWord;

module.exports = {
	Word : function() {
    	// do stuff in here for `Word`
    	//console.log("inside Word constructor");
    	return currentWord;
	},
	checkWordForLetter : function(let){
		//currentLetter = Main.currentLetter;
		console.log("inside checkWordForLetter");
    	for (var i = 0; i<currentWord.length; i++){
    		if (currentWord[i] == let){
    			//Main.unguessedWord[i] = currentLetter;
    			return true;
    		}
    	}
    	return false;
	}
}

/*
module.exports = function Word() {
    // do stuff in here for `Word`
    //console.log("inside Word constructor");
    return currentWord;
}

var checkWordForLetter = function(let){
	//currentLetter = Main.currentLetter;
	console.log("inside checkWordForLetter");
    for (var i = 0; i<currentWord.length; i++){
    	if (currentWord[i] == let){
    		//Main.unguessedWord[i] = currentLetter;
    		return true;
    	}
    }
    return false;
}
module.exports = checkWordForLetter;
*/