var randomNumber = Math.floor(Math.random() * 10) + 1;
var amountGuessed = 1;
var maxGuess = 0;
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
function userGuess() {
  var guessed = document.getElementById("guessedValue").value;
  if (maxGuess >= amountGuessed) {
    if (guessed == randomNumber) {
      document.getElementById("result").innerHTML = "Correct, You Win!";
    } else if (guessed > randomNumber) {
      document.getElementById("result").innerHTML = "Too High~";
    } else if (guessed < randomNumber) {
      document.getElementById("result").innerHTML = "Too Low~";
    } else {
      console.log("Input a correct value");
    }
    document.getElementById("amountGuess").innerHTML = amountGuessed++;
  } else {
    document.getElementById("result").innerHTML =
      "You have ran out of guesses! Play Again.";
  }
}
$(".button").on("click", function () {
  $(".button").removeClass("active");
  $(this).addClass("active");
});
const refresh = () => {
  location.reload();
};
