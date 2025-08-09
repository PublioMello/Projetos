class Stopwatch {
  #elapsedTimeInSeconds = 0;
  intervalId = null;
  start(callback = () => {}) {
    this.intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds++;
      console.log(this.setTime);
      callback();
    }, 1000);
  }

  stop(callback = () => {}) {
    clearInterval(this.intervalId);
    callback();
  }

  reset(callback = () => {}) {
    this.#elapsedTimeInSeconds = 0;
    callback();
  }

  get elapsedTime() {
    return Stopwatch.formatTime(this.#elapsedTimeInSeconds);
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(
      minutes
    )}:${Stopwatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNumber, desiredAmountDigits = 2) {
    let stringNumber = String(originalNumber);
    const zerosRequired = desiredAmountDigits - stringNumber.length;

    if (zerosRequired <= 0) {
      return stringNumber;
    }

    for (let counter = 0; counter < zerosRequired; counter++) {
      stringNumber = `0${stringNumber}`;
    }
    return stringNumber;
  }
}
const sw1 = new Stopwatch();
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");
const stopWatchDisplay = document.getElementById("stopwatch-display");

function updateDisplay() {
  stopWatchDisplay.innerText = sw1.elapsedTime;
}
startbtn.addEventListener("click", () => {
  sw1.start(updateDisplay);
});

stopbtn.addEventListener("click", () => {
  sw1.stop();
});
resetbtn.addEventListener("click", () => {
  sw1.reset();
  updateDisplay();
});
