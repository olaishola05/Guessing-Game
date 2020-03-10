const randNum = Math.floor(Math.random() * (11 - 1)) + 1;
let counter = 0;
let maxGuess = 5;


const getBtn = document.getElementById("getBttn").onclick = function () {
    const getInput = document.getElementById("getInput").value;

    if (counter < maxGuess) {
        if (getInput > 10) {
            alert("the number u entered is too large");
        } if (getInput == randNum) {
            alert("Yes! it took you " + counter + "guess to get it right");

        } else {
            alert("Nope, maybe anther try");
        }
        counter++;
    } else {
        // (counter > maxGuess)
        counter = 0;
        alert("You have exhausted your available guesses. You can start all over again");
    }
    if (getInput <= 0) {
        alert("sorry the number you input is too small or out of range");
    }

};

// let getCount = document.querySelector("getBttn").onclick = function () {
//     let val = document.querySelector("h2").innerHTML = counter;
// };

