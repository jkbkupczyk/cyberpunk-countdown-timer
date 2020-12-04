// DOM
const daysElem = document.querySelector("#daysElem");
const hoursElem = document.querySelector("#hoursElem");
const minutesElem = document.querySelector("#minutesElem");
const secondsElem = document.querySelector("#secondsElem");


const release = "10 Dec 2020";

function validate(arg){
    return arg < 10 ? `0${arg}` : arg;
}

function calcDate(){
    let releaseDate = new Date(release);
    let currentDate = new Date();

    const date = releaseDate - currentDate;

    if(date == 0){
        clearInterval(count);
    }

    const days = Math.floor(date / (1000 * 3600 * 24));
    const hours = Math.floor(date / (1000 * 3600) % 24);
    const minutes = Math.floor(date / (1000 * 60) % 60);
    const seconds = Math.floor(date / 1000 % 60);

    
    daysElem.innerHTML = days;
    hoursElem.innerHTML = validate(hours);
    minutesElem.innerHTML = validate(minutes);
    secondsElem.innerHTML = validate(seconds);
}

calcDate();

let count = setInterval(calcDate, 1000);