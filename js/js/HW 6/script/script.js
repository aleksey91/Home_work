/**
 * Created by Alexey on 23/03/2016.
 */

var hours = 0;
var minutes = 0;
var seconds = 0;
var millis = 0;

function startTime() {
    //hours++;
    //minutes++;
    //seconds++;
    seconds++;
    //if (hours < 10) hours = "0" + hours;
    //if (minutes < 10) minutes = "0" + minutes;
    //if (seconds < 10) seconds = "0" + seconds;
    //if (millis === 1000) {
    //    millis = 0;
    //    seconds++;
    //}
    //if (seconds === 60) {
    //    seconds = 0;
    //    minutes++;
    //}
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    //document.getElementById("milli").innerHTML = millis;
    setTimeout(startTime, 1000);
}

startTime();
