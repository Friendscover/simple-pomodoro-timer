function startTimer()
{   
    minutes = resetMinutes(); 
    seconds = 0;
    timerUpdate = setInterval(updateTimer, 1000);
}

function resetTimer()
{
    timerValue = resetMinutes();
    document.getElementById("timerlabel").innerHTML = "Timer: " + timerValue; 
}

function resetBreakTimer()
{
    breakseconds = 0;
    document.getElementById("breaklabel").innerHTML = "Break Time: " + document.getElementById("breaktime").value;
}

function resetSeconds()
{
    seconds = 0;
    return seconds;
}

function resetMinutes()
{
    let minutes = document.getElementById("timer").value;
    return minutes;
}

//button event listener
const startButton = document.getElementById("btnstart");
startButton.addEventListener("click", () => {
    startTimer()
});

const resetButton = document.getElementById("btnreset");
resetButton.addEventListener("click", () => {
    seconds = 60;
    resetTimer()
});

const stopButton = document.getElementById("btnstop");
stopButton.addEventListener("click", () => {
    resetTimer()
    resetBreakTimer()
    stopTimer(timerUpdate)
    stopTimer(breakTimer)
});

//global variabels are bad
let seconds = 0
let minutes = resetMinutes();
let breakseconds = 0;
let breakminutes = document.getElementById("breaktime").value;

//timer update

let timerUpdate = setInterval(updateTimer, 1000);
let breakTimer = setInterval(updateBreakTimer, 1000);
clearInterval(timerUpdate);
clearInterval(breakTimer);

function updateTimer()
{
    if(seconds <= 0 && minutes <= 0)
    {
        alert("Times up");
        minutes = resetMinutes();
        stopTimer(timerUpdate);
        breakminutes = document.getElementById("breaktime").value;
        breakTimer = setInterval(updateBreakTimer, 1000);
    }
    else if(seconds <= 0)
    {
        seconds = 59;
        minutes = minutes - 1;
    }
    else
    {
        seconds = seconds - 1;
    }

    document.getElementById("timerlabel").innerText = "Timer: " + minutes.toString() + ":" + seconds.toString();
}

function updateBreakTimer()
{
    if(breakseconds <= 0 && breakminutes <= 0)
    {
        stopTimer(breakTimer);
        alert("Break is over!");
        startTimer();
    }
    else if(breakseconds <= 0)
    {
        breakseconds = 59;
        breakminutes = breakminutes - 1;
    }
    else
    {
        breakseconds--;
    }

    document.getElementById("breaklabel").innerText = "Break Time " + breakminutes.toString() + ":" + breakseconds.toString();
}

function stopTimer(timervar)
{
    clearInterval(timervar);
}

