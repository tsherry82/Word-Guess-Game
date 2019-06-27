// variables used for gameplay
var words = ["Rattlesnake", "Saloon", "Revolver"];
var guesses = 6;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var challenge = words[Math.floor(Math.random() * words.length)];


var answerArray = [];

for (var i = 0; i < challenge.length; i++) {
    answerArray[i] = "_"
};

var remainingLetters = challenge.length;

// press any button to begin
document.onkeyup = function(event) {
    
    var userGuess = event.key

    for (var i = 0; i <challenge.length; i++) {
        if (challenge[i] ===userGuess) {
          answerArray[i] = userGuess;
        }
     
        document.getElementById("hangman").innerHTML = answerArray.join(" ");
      }
}
