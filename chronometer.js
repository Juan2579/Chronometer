let hoursChronometer = document.querySelector(".hoursChronometer")
let minutesChronometer = document.querySelector(".minutesChronometer")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")
let hoursChronometerValue = 0;
let minutesChronometerValue = 0;

let currentInterval;
let currentButton;

function startChronometer() {
    currentButton = event.target;
    currentButton.disabled = true;
    currentInterval = setInterval(() =>{
        minutesChronometerValue += 1;

        if (minutesChronometerValue === 60){
            minutesChronometerValue = 0;
            hoursChronometerValue += 1;

            hoursChronometer.textContent = formatValue(hoursChronometerValue)
        }
        minutesChronometer.textContent = formatValue(minutesChronometerValue)
    },1000)

}
function formatValue(value) {
    return ("0" + value).slice(-2);
  }

function stopChronometer(){
    if (currentButton){
        currentButton.disabled = false;
    }
    clearInterval(currentInterval)
    if(minutesChronometerValue > 1){
        start.innerText = "Continue"
    }
    
}
function resetChronometer(){
    hoursChronometerValue = 0;
    minutesChronometerValue = 0;

    minutesChronometer.textContent = "00"
    hoursChronometer.textContent = "00"

    start.innerText = "Start"
}