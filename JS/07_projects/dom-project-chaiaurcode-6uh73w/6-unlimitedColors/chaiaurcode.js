const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const body = document.querySelector("body");

const changeColor = function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

let intervalId = null;


startButton.addEventListener("click", () => {
    if (intervalId === null) {
        intervalId = setInterval(changeColor, 1000)
    }
});
stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});