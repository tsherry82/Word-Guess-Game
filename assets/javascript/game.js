// variables used for gameplay
var words = ["Rattlesnake", "Saloon", "Revolver"];
var guesses = 6;

var challenge = words[Math.floor(Math.random() * words.length)];
console.log(challenge);

var answerArray = [""];

for (var i = 0; i < challenge.length; i++) {
    answerArray[i] = "_ "
    console.log(answerArray[i]);
    document.getElementById("hangman")

};


var remainingLetters = challenge.length;
console.log(remainingLetters);





// press any button to begin
document.onkeyup = function(event) {
    
    var userGuess = event.key

    for (var i = 0; i <challenge.length; i++) {
        if (challenge[i] ===userGuess) {
          answerArray[i] = userGuess;
        }
      }
}
