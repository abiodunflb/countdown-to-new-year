var year = document.getElementById('year');
var countdown = document.getElementById('countdown');
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var loading = document.getElementById('loading');

var currentYear = new Date().getFullYear();

var newYearDay = new Date(`january 01 ${currentYear + 1} 00:00:00`);

// var nextBirthday = new Date(`december 2 ${currentYear} 00:00:00`);

year.innerHTML = currentYear + 1; 

function updateCountDown(){
    var currentTime = new Date();
    var diff = newYearDay - currentTime;
    var d = Math.floor(diff/1000/60/60/24);
    var h = Math.floor(diff/1000/60/60) % 24;
    var m = Math.floor(diff/1000/60) % 60;
    var s = Math.floor(diff/1000) % 60;
    
    days.innerHTML = d < 10 ? '0' + d : d;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    hours.innerHTML = h < 10 ? '0' + h : h;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(() => {
    loading.remove();
    countdown.style.display = "flex";
}, 1000);
setInterval(updateCountDown, 1000);


