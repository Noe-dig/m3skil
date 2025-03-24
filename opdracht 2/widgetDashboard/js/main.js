const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
const saveButton = document.getElementById("js--save");
let seconds = 0;
let minutes = 0;

let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minuteTimer");

// const savedTime = document.getElementById("js--savedTime");

let timer;

//start
startButton.onclick = function(){
    if(running === true){
        return;
    }
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    }, 1000);
};

//stop
stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
};

//reset
resetButton.onclick = function(){
    seconds = 0;
    secondsTimer.innerText = seconds;
    minutes = 0;
    minutesTimer.innerText = seconds;
    clearInterval(timer);
    running = false;
};

//save
const timeSaved = document.getElementById("js--savedTime");

saveButton.onclick = function(){
    let savedTime = minutes + " : " + seconds;
    console.log(savedTime);
    timeSaved.innerText = savedTime;
};

//slider
const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");
slider.value = 2;
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
};

//dynamische content

//data ophalen
const paragraph = document.getElementById("js--text");
const image = document.getElementById("js--image");

fetch("data.json")
    .then(function(binnenGekomenData){
            return binnenGekomenData.json();
        })    
    .then(function(echteData){
            paragraph.innerHTML = echteData.text;
            image.src = echteData.JPCimg;
        });