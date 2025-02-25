let milliseconds = 0;
let seconds = 0;
let interval;

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            document.querySelector('.seconds').textContent = String(seconds).padStart(3, '0');
            document.querySelector('.milliseconds').textContent = String(milliseconds).padStart(2, '0');
        }, 10);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    milliseconds = 0;
    seconds = 0;
    document.querySelector('.seconds').textContent = '000';
    document.querySelector('.milliseconds').textContent = '00';
}