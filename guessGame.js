var randomNumber = Math.floor(Math.random() * 10) + 1;
var amountGuessed = 1;
var maxGuess = 0;
//Set max guesses for and number range for each level
function level1() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  maxGuess = 4;
}
function level2() {
  randomNumber = Math.floor(Math.random() * 50) + 1;
  maxGuess = 7;
}
function level3() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  maxGuess = 11;
}
function level4() {
  randomNumber = Math.floor(Math.random() * 1000) + 1;
  maxGuess = 15;
}
//function to interpret user guessed value
function userGuess() {
  var guessed = document.getElementById("guessedValue").value;
  if (maxGuess >= amountGuessed) {
    //used to make sure user can't guess more then max guess value
    if (guessed == randomNumber) {
      document.getElementById("result").innerHTML = "Correct, You Win!";
    } else if (guessed > randomNumber) {
      document.getElementById("result").innerHTML = "Too High.";
    } else if (guessed < randomNumber) {
      document.getElementById("result").innerHTML = "Too Low.";
    } else {
      console.log("Input a correct value");
    }
    document.getElementById("amountGuess").innerHTML = amountGuessed++;
  } else {
    document.getElementById("result").innerHTML =
      "You have ran out of guesses! The answer was: " + randomNumber;
  }
}
//Used jQuery to keep button active
$(".button").on("click", function () {
  $(".button").removeClass("active");
  $(this).addClass("active");
});
//used to refresh the page so the user can play again
const refresh = () => {
  location.reload();
};
