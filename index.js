const randNum = Math.floor(Math.random() * (11 - 1)) + 1;

const getBtn = document.getElementsByTagName("button").onclick(function () {
    const getInput = document.getElementsByTagName("input").value;
    if (getInput == randNum) {
        alert("Hooray, You guessed right");
    } else {
        alert("Maybe another guess");
    }
})