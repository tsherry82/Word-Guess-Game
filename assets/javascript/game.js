// variables used for gameplay
var words = ["rattlesnake", "saloon", "revolver"];
var guesses = 6;

var challenge = words[Math.floor(Math.random() * words.length)];
console.log(challenge);

var answerArray = [""];

for (var i = 0; i < challenge.length; i++) {
  answerArray[i] = "_ "
  console.log(answerArray[i]);
  document.getElementById("hangman").innerHTML = answerArray
};

// for (var i = 0; i < guesses.length; i++) 


var remainingLetters = challenge.length;
// console.log(remainingLetters);


// press any button to begin
document.onkeyup = function (event) {

  var correctGuess = false 
  var userGuess = event.key
  
    for (var j = 0; j < challenge.length; j++) {
      if (challenge[j] == userGuess) {
        answerArray[j] = challenge[j]
        correctGuess = true;
        remainingLetters--;
        console.log(remainingLetters);
      document.getElementById("letterGuessed").innerHTML += userGuess;
      document.getElementById("hangman").innerHTML = answerArray;
  }
}
if (correctGuess === false){
  guesses--
  console.log(guesses)
}
}
var filledSpaces = answerArray.join("")
