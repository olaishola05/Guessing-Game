const randNum = Math.floor(Math.random() * (11 - 1)) + 1;
let counter = 0;
let maxGuess = 5;
let displayNone = document.getElementById("count").innerHTML;

const getBtn = (document.getElementById("getBttn").onclick = function() {
  const getInput = document.getElementById("getInput").value;
  if (counter < maxGuess) {
    if (getInput == 5) {
      alert(
        "Hooray! Congratulation you win!!!!. It took you " +
          "" +
          counter +
          "" +
          " guess to get it right"
      );
      counter = 0;

      displayNone.style.display = "none";
    } else if (getInput > 10) {
      alert("The number you input is Out of range");
    } else if (getInput <= 0) {
      alert("the number you entered is below the range");
    } else if (getInput == "") {
      alert("pls enter a value");
    } else if (getInput != randNum) {
      alert("Another guess is just a click away");
    }
    counter++;
  }
});

document.getElementById("getBttn").addEventListener("click", count);

function count() {
  let equal = maxGuess % counter;
  document.getElementById("count").innerHTML = "Counter: " + counter;
  if (counter == maxGuess) {
    if (equal == 0) {
      alert(
        "You have exhausted your available guesses. You can start all over again"
      );
      counter = 0;
    }
  }
}

document.getElementById("getBttn").addEventListener("click", clearInput);

function clearInput() {
  document.getElementById("getInput").value = "";
}
