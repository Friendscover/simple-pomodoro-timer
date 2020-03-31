function startTimer()
{   
    minutes = resetMinutes(); 
    seconds = 0;
    timerUpdate = setInterval(updateTimer, 1000);
}

function resetTimer()
{
    timerValue = resetMinutes();
    document.getElementById("timerlabel").innerHTML = timerValue; 
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
    resetTimer()
});

const stopButton = document.getElementById("btnstop");
stopButton.addEventListener("click", () => {
    resetTimer()
    clearInterval(timerUpdate)
});

let seconds = 0
let minutes = resetMinutes();


//timer update

let timerUpdate = setInterval(updateTimer, 1000);

function updateTimer()
{
    if(seconds <= 0 && minutes <= 0)
    {
        alert("Times up");
        minutes = resetMinutes();
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

    document.getElementById("timerlabel").innerText = minutes.toString() + ":" + seconds.toString();
}

clearInterval(timerUpdate);
