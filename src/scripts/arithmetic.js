// Start & Reset Elements
const start = document.querySelector('#start-button');
const reset = document.querySelector('#reset-button');

// Incrementing Elements
const addTenSec = document.querySelector('#add-small-10s');
const addThirtySec = document.querySelector('#add-small-30s');
const addOneMin = document.querySelector('#add-small-1m');
const addThreeMin = document.querySelector('#add-small-3m');
const addFiveMin = document.querySelector('#add-large-5m');
const addTenMin = document.querySelector('#add-large-10m');
const addThirtyMin = document.querySelector('#add-large-30m');
const addHour = document.querySelector('#add-large-1h');

// Decrementing Elements
const subtractTenSec = document.querySelector('#subtract-small-10s');
const subtractThirtySec = document.querySelector('#subtract-small-30s');
const subtractOneMin = document.querySelector('#subtract-small-1m');
const subtractThreeMin = document.querySelector('#subtract-small-3m');
const subtractFiveMin = document.querySelector('#subtract-large-5m');
const subtractTenMin = document.querySelector('#subtract-large-10m');
const subtractThirtyMin = document.querySelector('#subtract-large-30m');
const subtractHour = document.querySelector('#subtract-large-1h');

// Display Element
const currentTime = document.querySelector('#display-time');

// Units of Time
let hours = 0;
let minutes = 0;
let seconds = 0;

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

const removeDisplay = () => {
    currentTime.removeChild(currentTime.firstChild);
};

const addDisplay = () => {
    currentTime.appendChild(document.createTextNode(`${hours} : ${minutes} : ${seconds}`));
};

/*** START EVENT ***/
start.addEventListener('click', () => {
    const countdown = setInterval(() => {
        removeDisplay();
        typeof seconds !== Number ? seconds = parseInt(seconds) : console.log(typeof seconds);

        if (seconds >= 1) {
            seconds--;
        } else if (seconds === 0 && minutes >= 1) {
            minutes--;
            seconds = seconds-- + 59;
        } else if (seconds === 0 && minutes === 0 && hours >= 1) {
            hours--;
            seconds = seconds-- + 59;
            minutes = minutes-- + 59;
        } else if (seconds == 0 && minutes == 0 && hours == 0) {
            clearInterval(countdown);
        };

        formatter();
        console.log(seconds);
        addDisplay();
    }, 1000);
    
});

/*** RESET EVENT ***/
reset.addEventListener('click', () => {
    removeDisplay();
    
    hours = 0;
    minutes = 0;
    seconds = 0;

    formatter();
    addDisplay();
});

/*** INCREMENT EVENTS ***/
addTenSec.addEventListener('click', () => {
    removeDisplay();
    typeof seconds !== Number ? seconds = parseInt(seconds) : console.log(typeof seconds); 
    
    if (seconds <= 49) { 
        seconds += 10;
    } else if (seconds === 50 && minutes <= 58) {
        seconds = 0;
        minutes++;
    } else if (seconds === 50 && minutes === 59) {
        seconds = "0" + 0;
        minutes = "0" + 0;
        hours = parseInt(hours);
        hours++;
    };
    
    formatter();
    addDisplay();
});

addThirtySec.addEventListener('click', () => {
    removeDisplay();
    typeof seconds !== Number ? seconds = parseInt(seconds) : console.log(typeof seconds); 
    
    if (seconds <= 29) { 
        seconds += 30;
    } else if (seconds >= 30 && minutes <= 58) {
        seconds = (seconds + 30) - 60;
        minutes++;
    } else if (seconds >= 30 && minutes === 59) {
        seconds = "0" + 0;
        minutes = "0" + 0;
        hours = parseInt(hours);
        hours++;
    };

    formatter();
    addDisplay();
});

addOneMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes <= 58) { 
        minutes++;
    } else if (minutes >= 59) {
        minutes = 0;
        hours++;
    }

    formatter();
    addDisplay();
});

addThreeMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes <= 56) { 
        minutes += 3;
    } else if (minutes >= 57) {
        minutes = (minutes + 3) - 60;
        hours++;
    }

    formatter();
    addDisplay();
});

addFiveMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes <= 54) { 
        minutes += 5;
    } else if (minutes >= 55) {
        minutes = (minutes + 5) - 60;
        hours++;
    }

    formatter();
    addDisplay();
});

addTenMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes <= 49) { 
        minutes += 10;
    } else if (minutes >= 50) {
        minutes = (minutes + 10) - 60;
        hours++;
    };

    formatter();
    addDisplay();
});

addThirtyMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes <= 29) { 
        minutes += 30;
    } else if (minutes >= 30) {
        minutes = (minutes + 30) - 60;
        hours++;
    }

    formatter();
    addDisplay();
});

addHour.addEventListener('click', () => {
    removeDisplay();
    typeof hours !== Number ? hours = parseInt(hours) : console.log(typeof hours); 
    hours += 1;

    formatter();
    addDisplay();
});

/*** DECREMENT EVENTS ***/
subtractTenSec.addEventListener('click', () => {
    removeDisplay();
    typeof seconds !== Number ? seconds = parseInt(seconds) : console.log(typeof seconds); 
    
    if (seconds >= 11) { 
        seconds -= 10;
    } else if ((seconds > 10 || seconds == 0) && minutes >= 2) {
        seconds = (seconds - 10) + 60;
        minutes--;
    } else if (seconds === 10 && minutes >= 2) {
        seconds = 0;
    } else if (seconds === 10 && minutes == 1) {
        seconds -= 10;
        minutes = 1;
    } else if (seconds === 0 && minutes == 1) {
        seconds = (seconds - 10) + 60;
        minutes--;
    } else if (seconds == 10 && minutes == 0) {
        seconds = 0;
    } else if (hours > 0 && seconds == 0 && minutes == 0) {
            hours--;
            minutes = 59;
            seconds = (seconds - 10) + 60;
    };

    formatter();
    addDisplay();
});

subtractThirtySec.addEventListener('click', () => {
    removeDisplay();
    typeof seconds !== Number ? seconds = parseInt(seconds) : console.log(typeof seconds); 
    
    if (seconds >= 31) { 
        seconds -= 30;
    } else if ((seconds > 30 || seconds == 0) && minutes >= 2) {
        seconds = (seconds - 30) + 60;
        minutes--;
    } else if (seconds === 30 && minutes >= 2) {
        seconds = 0;
    } else if (seconds === 30 && minutes == 1) {
        seconds -= 30;
        minutes = 1;
    } else if (seconds === 0 && minutes == 1) {
        seconds = (seconds - 30) + 60;
        minutes--;
    } else if (seconds == 30 && minutes == 0) {
        seconds = 0;
    } else if (hours > 0 && seconds == 0 && minutes == 0) {
        hours--;
        minutes = 59;
        seconds = (seconds - 30) + 60;
    };

    formatter();
    addDisplay();
});

subtractOneMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes >= 2) { 
        minutes--;
    } else if (minutes == 1) {
        minutes = 0;
    } else if (minutes === 0) {
        if (hours >= 1) {
            hours--;
            minutes = 59;
        } else {
            minutes = 59;
        };
    };

    formatter();
    addDisplay();
});

subtractThreeMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes >= 4) { 
        minutes -= 3;
    } else if (minutes == 3) {
        minutes = 0;
    } else if (minutes <= 3) {
        if (hours > 0) {
            minutes = (minutes - 3) + 60;
            hours--;
        } else {
            minutes = 0;
            seconds = 0;
        }
    } else if (minutes == 0 && minutes == 0) {
        if (hours > 0) {
            hours--;
            minutes = 59;
            minutes = (minutes - 30) + 60;
        } else {
            hours = 0;
        };
    };

    formatter();
    addDisplay();
});

subtractFiveMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes >= 6) { 
        minutes -= 5;
    } else if (minutes === 5) {
        minutes = 0;
    } else if (minutes <= 5) {
        if (hours > 0) {
            minutes = (minutes - 5) + 60;
            hours--;
        } else {
            minutes = 0;
            seconds = 0;
        }
    } else if (minutes == 0) {
        if (hours > 0) {
            hours--;
            minutes = 55;
        } else {
            hours = 0;
        };
    };

    formatter();
    addDisplay();
});

subtractTenMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes >= 11) { 
        minutes -= 10;
    } else if (minutes === 10) {
        minutes = 0;
    } else if (minutes < 10) {
        if (hours > 0) {
            minutes = (minutes - 10) + 60;
            hours--;
        } else {
            minutes = 0;
            seconds = 0;
        }
    } else if (minutes === 0) {
        if (hours > 0) {
            hours--;
            minutes = 50;
        } else {
            hours = 0;
        };
    };

    formatter();
    addDisplay();
});

subtractThirtyMin.addEventListener('click', () => {
    removeDisplay();
    typeof minutes !== Number ? minutes = parseInt(minutes) : console.log(typeof minutes); 
    
    if (minutes >= 31) { 
        minutes -= 30;
    } else if (minutes === 30) {
        minutes = 0;
    } else if (minutes < 30) {
        if (hours > 0) {
            minutes = (minutes - 30) + 60;
            hours--;
        } else {
            minutes = 0;
            seconds = 0;
        }
    } else if (minutes === 0) {
        if (hours > 0) {
            hours--;
            minutes = 30;
        } else {
            hours = 0;
        };
    };

    formatter();
    addDisplay();
});

subtractHour.addEventListener('click', () => {
    removeDisplay();
    typeof hours !== Number ? hours = parseInt(hours) : console.log(typeof hours); 
    
    if (hours >= 2) { 
        hours--;
    } else if (hours == 1) {
        hours = 0;
    } else if (hours === 0) {
        minutes = 0;
        seconds = 0;
    };

    formatter();
    addDisplay();
});