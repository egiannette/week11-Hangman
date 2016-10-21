/* should control whether or 'not a letter appears as a "_" or as itself on-screen. */
// should be a constructor file

var Main = require("./main.js");
var currentWord = Main.currentWord;

module.exports = {
	Letter: function(){
		// do stuff in here for `Letter`
    	var word = '';
    
    	for(var i = 0; i < currentWord.length; i++){
			word += '_ ';  // example: miami would be _ _ _ _ _
		}
		return word;
	},
	updateUnguessedLetters: function(letter){
		for (var i = 0; i<currentWord.length; i++){
			if(currentWord[i] == letter){
				this[i] = letter;
			}
    	}
    	return this;
	}
}
/*
module.exports = function Letter() {
    // do stuff in here for `Letter`
    var word = '';
    
    for(var i = 0; i < currentWord.length; i++){
		word += '_ ';  // example: miami would be _ _ _ _ _
	}
	return word;
}

var updateUnguessedLetters = function(letter){
	
	for (var i = 0; i<currentWord.length; i++){
		if(currentWord[i] == letter){
			this[i] = letter;
		}
    }
    return this;
}
module.exports = updateUnguessedLetters;
*/