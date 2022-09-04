//initializing variables
let seconds = 0
let minutes = getTimerMinutes("timer");
let breakseconds = 0;
let breakminutes = getTimerMinutes("breaktime");

//timer update 
//TODO: check if these are necessary
let timerUpdate = null;
let breakUpdate = null;

function getTimerMinutes(timerLabel)
{
    let minutes = document.getElementById(timerLabel).value;
    return minutes;
}

function resetSeconds()
{
    return 0;
}

function startTimer()
{   
    seconds = resetSeconds();
    minutes = getTimerMinutes("timer"); 
    // this clear the interval timer for each new sessions
    //TODO: update 
    stopTimer(timerUpdate)
    timerUpdate = setInterval(updateTimer, 1000);
}

function resetTimer()
{
    timerValue = getTimerMinutes("timer");
    document.getElementById("timerlabel").innerHTML = "Timer: " + timerValue; 
}

function stopTimer(timervar)
{
    clearInterval(timervar);
}

function resetBreakTimer()
{
    breakseconds = resetSeconds();
    document.getElementById("breaklabel").innerHTML = "Break Time: " + document.getElementById("breaktime").value;
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
    stopTimer(breakUpdate)
});

//main update functions
function updateTimer()
{
    if(seconds <= 0 && minutes <= 0)
    {
        alert("Times up");
        minutes = getTimerMinutes("timer");
        stopTimer(timerUpdate);
        breakminutes = document.getElementById("breaktime").value;
        breakUpdate = setInterval(updateBreakTimer, 1000);
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
        stopTimer(breakUpdate);
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