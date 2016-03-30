/**
 * Created by Alexey on 29/03/2016.
 */

var secondHand = document.getElementById("second-watch");
var millisecondsElement = document.querySelector(".milliseconds");
var traditionalWatchElement = document.querySelector(".traditional-watch");
var timerElement = document.querySelector(".timer");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var pauseButton = document.getElementById("pause");

var TraditionalWatch = {
    tick: function () {
        var x, y;
        Watch.a += 6;
        x = 100 + 100 * Math.cos(Watch.a * Math.PI / 180);
        y = 100 + 100 * Math.sin(Watch.a * Math.PI / 180);
        this.setAttributes(100, 100, x, y);
    },
    setAttributes: function (x1, y1, x2, y2) {
        secondHand.setAttribute("x1", x1);
        secondHand.setAttribute("y1", y1);
        secondHand.setAttribute("x2", x2);
        secondHand.setAttribute("y2", y2);
    }
};

var DigitalWatch = {
    tick: function () {
        Watch.milliseconds += 8;
        if (Watch.milliseconds === 1000) {
            Watch.milliseconds = 0;
            Watch.seconds++;
            TraditionalWatch.tick();
        }
        if (Watch.seconds === 60) {
            Watch.seconds = 0;
            Watch.minutes++;
        }
        if (Watch.minutes === 60) {
            Watch.minutes = 0;
            Watch.hours++;
        }
        this.setTime(Watch.milliseconds, Watch.seconds, Watch.minutes, Watch.hours);
    },
    setTime: function (milliseconds, seconds, minutes, hours) {
        if (hours < 10)hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        millisecondsElement.innerHTML = milliseconds;
        timerElement.innerHTML = hours + ":" + minutes + ":" + seconds;
    },
    setLight: function(style){
        millisecondsElement.style.textShadow = style;
        timerElement.style.textShadow = style;
    }
};
var timer;
var Watch = {
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    a: 270,
    start: function () {
        startButton.style.display = "none";
        pauseButton.style.display = "block";
        traditionalWatchElement.style.boxShadow = "1px 0px 14px 7px rgba(0, 255, 0, 0.75)";
        DigitalWatch.setLight("0px 0px 5px rgba(76, 255, 76, 1)");
        timer = setInterval("DigitalWatch.tick()", 8);
    },
    stop: function () {
        startButton.style.display = "block";
        pauseButton.style.display = "none";
        traditionalWatchElement.style.boxShadow = "1px 0px 14px 7px rgba(255, 21, 10, 0.75)";
        DigitalWatch.setLight("0px 0px 5px rgba(255, 76, 76, 1)");
        Watch.milliseconds = 0;
        Watch.seconds = 0;
        Watch.minutes = 0;
        Watch.hours = 0;
        Watch.a = 270;
        TraditionalWatch.setAttributes(100, 100, 100, 0);
        DigitalWatch.setTime(Watch.milliseconds, Watch.seconds, Watch.minutes, Watch.hours);
        clearInterval(timer);
    },
    pause: function () {
        pauseButton.style.display = "none";
        startButton.style.display = "block";
        traditionalWatchElement.style.boxShadow = "1px 0px 14px 7px rgba(255, 156, 0, 0.75)";
        DigitalWatch.setLight("0px 0px 5px rgba(255, 176, 0, 1)");
        clearInterval(timer);
    }
}
startButton.addEventListener('click', Watch.start);
stopButton.addEventListener('click', Watch.stop);
pauseButton.addEventListener('click', Watch.pause);