const start = document.querySelector('#start-button');
const currentTime = document.querySelector('#display-time');

let hours = currentTime.textContent[0] + currentTime.textContent[1];
let minutes = currentTime.textContent[5] + currentTime.textContent[6];
let seconds = currentTime.textContent[10] + currentTime.textContent[11];

const formatter = () => {
    if (seconds.toString().length === undefined || seconds.toString().length < 2) {
        seconds = "0" + seconds;
    };
    if (minutes.toString().length === undefined || minutes.toString().length < 2) {
        minutes = "0" + minutes;
    };
    if (hours.toString().length === undefined || hours.toString().length < 2) {
        hours = "0" + hours;
    };
};

start.addEventListener('click', () => {
    setInterval(() => {
        currentTime.firstChild ? currentTime.removeChild(currentTime.firstChild) : console.log(currentTime.firstChild);
        typeof seconds !== Number ? seconds = parseInt(seconds) : console.log(typeof seconds); 

        if (seconds >= 1) {
            seconds--;
        };
        
        formatter();
        currentTime.appendChild(document.createTextNode(`${hours} : ${minutes} : ${seconds}`));
    }, 1000);
});