const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

const hrInput = document.getElementById("hr-input");
const mnInput = document.getElementById("mn-input");
const scInput = document.getElementById("sc-input");

let countdownTimer;

startBtn.addEventListener("click", async () => {
  let hours = hrInput.value;
  let mins = mnInput.value;
  let seconds = scInput.value;

  hours == "" ? 0 : hours;
  mins == "" ? 0 : mins;
  seconds == "" ? 0 : seconds;

  if (seconds >= 60) {
    mins += seconds / 60;
    seconds = 0;
  }

  if (mins >= 60) {
    hours++;
    mins = 59;
  }

  if(hours > 99) {
    hours--;
  }
  countdownTimer = setInterval(() => {
    if (hours == 0 && mins == 0 && seconds == 0) return;

    if (seconds == 0) {
      seconds = 60;
      if (mins > 0) {
        mins--;
      } else if (mins == 0 && hours > 0) {
        hours--;
        mins = 59;
      }
    }
    seconds--;

    hrInput.value = hours;
    mnInput.value = mins;
    scInput.value = seconds;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(countdownTimer);
});

resetBtn.addEventListener("click", () => {
  hrInput.value = "";
  mnInput.value = "";
  scInput.value = "";
  clearInterval(countdownTimer);
});
