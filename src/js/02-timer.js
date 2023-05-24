// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       console.log(selectedDates[0]);
//     },
//   };

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    
    if (selectedDate < currentDate) {
      window.alert("Please choose a date in the future.");
      return;
    }
  },
};

flatpickr("#datetime-picker", options);



function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Math.floor redondea un numero hacia abajo al entero mas cercano
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let countdownInterval;
//startButton.disabled = true;

startButton.addEventListener("click", () => {
  const selectedDate = flatpickr.parseDate(document.querySelector("#datetime-picker").value);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
      window.alert("Please choose a future date.");
      return;
  }

  startButton.disabled = true;

  let countdown = selectedDate.getTime() - currentDate.getTime();

  countdownInterval = setInterval(() => {
      const remainingTime = convertMs(countdown);

      daysElement.textContent = addLeadingZero(remainingTime.days);
      hoursElement.textContent = addLeadingZero(remainingTime.hours);
      minutesElement.textContent = addLeadingZero(remainingTime.minutes);
      secondsElement.textContent = addLeadingZero(remainingTime.seconds);

      countdown -= 1000;

      if (countdown < 0) {
      clearInterval(countdownInterval);
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";

      Notiflix.Notify.success("Countdown finished!");
      }
  }, 1000);
});

