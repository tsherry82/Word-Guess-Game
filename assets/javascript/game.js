// variables used for gameplay
var words = ["Rattlesnake", "Saloon", "Revolver"]
var guesses = 0;


var challenge = words[Math.floor(Math.random() * words.length)];


var answerArray = [];

for (var i = 0; i < challenge.length; i++) {
    answerArray[i] = "_"
};

var remainingLetters = challenge.length;

// press any button to begin
document.onkeyup = function(event) {
    
    var userGuess = event.key
}
