const targetDate = "16 Sep 2022";

function countdown() {
    const totalSeconds = (new Date(targetDate) - new Date()) / 1000;
    document.getElementById("days").innerHTML = formatCountElement(Math.floor(totalSeconds / 86400));
    document.getElementById("hours").innerHTML = formatCountElement(Math.floor(totalSeconds / 3600) % 24);
    document.getElementById("minutes").innerHTML = formatCountElement(Math.floor(totalSeconds / 60) % 60);
    document.getElementById("seconds").innerHTML = formatCountElement(Math.floor(totalSeconds) % 60);
}

function formatCountElement(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();
setInterval(countdown, 1000)