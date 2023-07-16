// clock01.js

// Last update: Thu Jul 13 21:38:56 JST 2023

function setZero2(x){
    var ret;
    ret = x;
    if (x < 10) { ret = "0" + ret; }
    return ret;
}
function setZero3(x){
    var ret;
    ret = x;
    if (x < 100) { ret = "0" + ret; }
    if (x < 10) { ret = "0" + ret; } 
    return ret;
}

function showClock() {
    var _nowTime  = new Date();
    var _nowYear  = setZero2(_nowTime.getFullYear());
    var _nowMonth = setZero2(_nowTime.getMonth());
    var _nowdate  = setZero2(_nowTime.getDate());
    var mesg1 = _nowYear + "-" + _nowMonth + "-" + _nowdate;
    var _nowHour  = setZero2(_nowTime.getHours());
    var _nowMin   = setZero2(_nowTime.getMinutes());
    var _nowSec   = setZero2(_nowTime.getSeconds());
    var _nowMsec  = setZero3(_nowTime.getMilliseconds());
    // var mesg2 = _nowHour + ":" + _nowMin + ":" + _nowSec + "." + _nowMsec;
    var mesg2 = _nowHour + ":" + _nowMin + ":" + _nowSec;
    var mesg3 = "." + _nowMsec;
    document.getElementById("RealtimeClockDisplayArea").innerHTML = "現在時刻：" + mesg1 + " " + mesg2;
    // myDate.innerHTML = mesg1;
    // myTime.innerHTML = mesg2;
    // console.log(mesg1);
    // console.log(mesg2);
    document.querySelector(".clock-date").innerText = mesg1;
    document.querySelector(".clock-time").innerText = mesg2;
    document.querySelector(".clock-time2").innerText = mesg3;
}

function startClock() {
    interval = setInterval('showClock()', 1000);
    console.log("Go!")
}

function mouseDown() {
    // console.log("mouseDown()");
    clearInterval(interval);
    console.log("clock stopped.");

}

function mouseUp() {
    // console.log("mouseUp()");
    console.log("clock restarted.");
    syncTime();
}

function buttonClick() {
    // console.log("buttonClick()");
}

function syncTime() {
    var currentTime = new Date();
    var delay_msec = 1000 - currentTime.getMilliseconds();
    if (delay_msec < 50) { delay_msec += 1000; }
    // delay_msec -= 10; // offset
    console.log("Waiting for " + delay_msec + "msec.");
    setTimeout(startClock, delay_msec);
}

var interval;
var button = document.getElementById("button");
button.addEventListener('mousedown', mouseDown);
button.addEventListener('mouseup', mouseUp);
button.addEventListener('click', buttonClick);

showClock();
syncTime();

