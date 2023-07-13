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
    var _nowTime = new Date();
    var _nowHour = setZero2(_nowTime.getHours());
    var _nowMin  = setZero2(_nowTime.getMinutes());
    var _nowSec  = setZero2(_nowTime.getSeconds());
    var _nowMsec = setZero3(_nowTime.getMilliseconds());
    var mesg = "現在時刻："　+ _nowHour + ":" + _nowMin + ":" + _nowSec + "." + _nowMsec;
    message.innerHTML = mesg;
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
var message = document.getElementById("RealtimeClockDisplayArea");
var button = document.getElementById("button");
button.addEventListener('mousedown', mouseDown);
button.addEventListener('mouseup', mouseUp);
button.addEventListener('click', buttonClick);

showClock();
syncTime();

