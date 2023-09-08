
let navbar = document.querySelector('.navbar');

var date = new Date();
const todaydate = document.querySelector('.date');
const todayday = document.querySelector('.day');
const todaytime = document.querySelector('.time');
const noofday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursaday", "Friday", "Saturday"];

function printDay() {
    var date = new Date();
    var today = date.getDay();
    var day = noofday[today];
    todayday.innerHTML = day;
}
printDay();

function printTime() {
    var date = new Date();
    var hour = date.getUTCHours();
    var min = date.getUTCMinutes();
    var sec = date.getUTCSeconds();
    var mili = date.getUTCMilliseconds();

    var period = "Am";
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        period = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    var time = hour + ":" + min + ":" + sec + ":" + mili + " " + period;

    document.querySelector(".time").innerHTML = time;
    setTimeOut (printTime, 1000);
}
printTime();



/* ======= typed JS (multiple text) =======*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer at HNGX'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
