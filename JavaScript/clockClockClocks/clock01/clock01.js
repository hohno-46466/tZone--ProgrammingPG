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
    var nowTime = new Date();
    var nowHour = setZero2(nowTime.getHours());
    var nowMin  = setZero2(nowTime.getMinutes());
    var nowSec  = setZero2(nowTime.getSeconds());
    var nowMsec = setZero3(nowTime.getMilliseconds());
    var mesg = "現在時刻："　+ nowHour + ":" + nowMin + ":" + nowSec + "." + nowMsec;
    document.getElementById("RealtimeClockArea").innerHTML = mesg;
}

function hello() {
    console.log("Go!");
    setInterval('showClock()', 1000);
}
var nowTime = new Date();
var msec = 1000 - nowTime.getMilliseconds();
// console.log(msec);
setTimeout(hello, msec-10);
