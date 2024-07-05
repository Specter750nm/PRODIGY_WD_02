let timer;
let elapsedTime = 0;
let isRunning = false;
let startTime;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('startStopBtn').textContent = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 1000);
        isRunning = true;
        document.getElementById('startStopBtn').textContent = 'Stop';
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById('display').textContent =
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStopBtn').textContent = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        let lapTime = document.getElementById('display').textContent;
        let li = document.createElement('li');
        li.textContent = lapTime;
        document.getElementById('laps').appendChild(li);
    }
}