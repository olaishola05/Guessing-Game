const randNum = Math.floor(Math.random() * (11 - 1)) + 1;
let counter = 0;
let maxGuess = 5;

const getBtn = document.getElementById("getBttn").onclick = function () {
    const getInput = document.getElementById("getInput").value;
    if (counter < maxGuess) {

        if (getInput == randNum) {
            alert("Hooray! Congratulation you win!!!!. It took you " + '' + counter + '' + "guess to get it right");
        }

        if (getInput > 10) {
            alert("Out of range");
        }
        if (getInput <= 0) {
            alert("the number u entered is below range");
        }

        if (getInput != randNum) {
            alert("Another guess is your bestfriend");
        }

        counter++;
    }
    else {
        counter = 0;
        alert("You have exhausted your available guesses. You can start all over again");
    }

    // let countGuess = document.getElementById("getBttn").onclick = function () {
    //     let guessCount = document.getElementById("getInput").value;
    //     if (guessCount > 10) {
    //         alert("the number u entered is too large");
    //     }
    //     if (guessCount <= 0) {
    //         alert("sorry the number you input is too small or out of range");
    //     }
    // };
};


// countGuess();
// let counting = document.getElementById("counter").onclick = function () {
//     count = 0;

//     counting.getBtn.innerHTML = "count: " + count;
//     // let myCounter = document.getElementsByClassName("counter").value;
//     // myCounter.onclick = function () {
//     //     count += 1;
//     //     myCounter.innerHTML = "count: " + count;
//     // };
// };






// function count() {
//     count = document.getElementsByClassName(".counter");
//     counter = count.value;
//     count.innerHTML = counter;
// }

