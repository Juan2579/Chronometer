let showHours = document.querySelector(".hours")
let showMinutes = document.querySelector(".minutes")

let hoursChronometer = document.querySelector(".hoursChronometer")
let minutesChronometer = document.querySelector(".minutesChronometer")
let hoursChronometerValue = 0;
let minutesChronometerValue = 0;

function getDate() {
    let date = new Date();
    let hours = date.getHours()
    let minute = date.getMinutes()

    if(hours > 11){
        showHours.innerText = hours
        if(minute < 10){
            showMinutes.innerText = "0" + minute + " PM"
        }else{
            showMinutes.innerText = minute + " PM"
        }
    }else if(hours <= 11){
        showHours.innerText = hours
        if(minute < 10){
            showMinutes.innerText = "0" + minute + " AM"
        }else{
            showMinutes.innerText = minute + " AM"
        }
    }
    
    
    setTimeout("getDate()", 1000)
}
