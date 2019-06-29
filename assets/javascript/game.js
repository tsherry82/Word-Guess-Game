alert("The guessing game where you can claim your fame, or guess to loose and swing from the noose!")


// variables used for gameplay
var words = ["rattlesnake", "saloon", "revolver"];
var guesses = 7;
var wins = 0

// randonmly select a word
var challenge = words[Math.floor(Math.random() * words.length)];

var answerArray = [""];

for (var i = 0; i < challenge.length; i++) {
  answerArray[i] = "_ "
  // console.log(answerArray[i]);
  document.getElementById("hangman").innerHTML = answerArray
};

var remainingLetters = challenge.length;

// press any button to begin to play the game
document.onkeyup = function (event) {

  var correctGuess = false
  var userGuess = event.key

  for (var j = 0; j < challenge.length; j++) {
    if (challenge[j] == userGuess) {
      answerArray[j] = challenge[j]
      correctGuess = true;
      document.getElementById("letterGuessed").innerHTML += userGuess;
      document.getElementById("hangman").innerHTML = answerArray;
    }
  }
  if (correctGuess === false) {
    guesses--;
    document.getElementById("letterGuessed").innerHTML += userGuess;
  }
  if (guesses === 0) {
    alert("Sheriff Hang That Man!");
  }
  document.getElementById("guessesLeft").innerHTML ="Guesses you have left " + guesses;
}
var filledSpaces = answerArray.join(" ")


document.getElementById("hangman").innerHTML += filledSpaces;

if (filledSpaces == "rattlesnake" || filledSpaces == "saloon" || filledSpaces == "revolver") {
  alert("You live to see another day Cowboy!")
}

// hints

if (challenge == "rattlesnake") {
  document.getElementById("hints").innerHTML = ("HINT: Their bite is deadly!")
}

if (challenge == "saloon") {
  document.getElementById("hints").innerHTML = ("HINT: You come here to wet your whistle")
}

if (challenge == "revolver") {
  document.getElementById("hints").innerHTML = ("HINT: An outlaws iron")
}