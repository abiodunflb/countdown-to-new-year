const year = document.getElementById('year');
const countdown = document.getElementById('countdown');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearDay = new Date(`january 01 ${currentYear + 1} 00:00:00`);

// const nextBirthday = new Date(`june 1 ${currentYear + 1} 00:00:00`);

function updateCountDown(){
    let currentTime = new Date();
    let diff = newYearDay - currentTime;
    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.floor(diff/1000/60/60) % 24;
    let m = Math.floor(diff/1000/60) % 60;
    let s = Math.floor(diff/1000) % 60;
    
    days.innerHTML = d < 10 ? '0' + d : d;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    hours.innerHTML = h < 10 ? '0' + h : h;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

updateCountDown();
setInterval(updateCountDown, 1000);


