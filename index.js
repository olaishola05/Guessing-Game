const randNum = Math.floor(Math.random() * (11 - 1)) + 1;
let counter = 0;
let maxGuess = 5;

const getBtn = document.getElementById("getBttn").onclick = function () {
    const getInput = document.getElementById("getInput").value;
    if (counter < maxGuess) {

        if (getInput == randNum) {
            alert("Hooray! Congratulation you win!!!!. It took you " + '' + counter + '' + " guess to get it right");
            counter = 0;
        }

        else if (getInput > 10) {
            alert("The number you input is Out of range");
        }
        else if (getInput <= 0) {
            alert("the number you entered is below the range");
        }

        else if (getInput != randNum) {
            alert("Another guess is your is just a click away");
        }

        counter++;
    }
    else {
        counter = 0;
        alert("You have exhausted your available guesses. You can start all over again");
    }
};

document.getElementById("getBttn").addEventListener("click", count);

function count() {
    document.getElementById("count").innerHTML = "Counter: " + counter;
    if (counter == maxGuess) {
        counter = 0;
    }
}

document.getElementById("getBttn").addEventListener("click", clearInput);


function clearInput() {
    document.getElementById("getInput").value = "";
}






