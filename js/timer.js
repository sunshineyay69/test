let timeStartMeet = new Date(2020, 1, 13, 19);
let timeMeetYet = new Date(new Date() - timeStartMeet);
let timer = document.getElementById("timer");
let timeTik = 1000;

timer.innerText = getTime();

setInterval(() => {
    timer.innerText = getTime();
}, timeTik)

function getTime() {
    timeMeetYet += timeTik;

    let mils = new Date() - timeStartMeet;
    let seconds = mils / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let month = days / (365.25 / 12);

    let year = month / 12;
    month = month % 12;
    days = days % (365.25 / 12);
    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    return `${Math.floor(year)}г. ${Math.floor(month)}м. ${Math.floor(days)}д. ${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(seconds)}`;
}