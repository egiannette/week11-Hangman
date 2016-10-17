/*randomly select a word for the player*/

var wordList =["pictureit", "pussycat", "miami", "ShadyPines", "Ma", "cheesecake"];

//randomly pick number
var number = Math.floor((Math.random() * 5) + 0);

exports.game = wordList[number];
	
