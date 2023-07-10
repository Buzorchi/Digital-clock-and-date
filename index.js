const hoursEl = document. getElementById("hour")
const miuntesEl = document. getElementById("minutes")
const secondsEl = document. getElementById("seconds")
const ampmEl = document. getElementById("ampm")
const dayEl = document.getElementById("day")
const monthEl = document.getElementById("month")
const yearEl = document.getElementById("year")


function updateClock(){
    let h = new Date(). getHours()
    let m = new Date(). getMinutes()
    let s = new Date(). getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursEl.innerText = h;
    miuntesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(function(){
        updateClock()
    },1000)
}

updateClock()

function updateDate(){
    let d = new Date(). getUTCDate()
    let mm = new Date(). getUTCMonth()
    let y = new Date(). getFullYear()

    dayEl.innerText = d;
    monthEl.innerText = mm;
    yearEl.innerText = y;

}
updateDate()