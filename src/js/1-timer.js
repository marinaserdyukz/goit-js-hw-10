import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

const startBtn = document.querySelector('[data-start]')
const inputEl = document.querySelector('#datetime-picker')

let intervalId;
let initTime;
 
startBtn.disabled = true;
inputEl.value = '';

startBtn.addEventListener("click", () => {
startBtn.disabled = true;
inputEl.disabled = true;

intervalId = setInterval(() => {
const currentTime = Date.now();
const diff = initTime - currentTime;

if (diff <= 0) {
    clearInterval(intervalId);
    updateTimerDisplay({ d: 0, h: 0, m: 0, s: 0 });
    inputEl.disabled = false; 
    startBtn.disabled = true;
    inputEl.value = '';
    return;
  }

  const time = convertMS(diff);
  updateTimerDisplay(time);
}, 1000);
})

function convertMS(ms) {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return { d: d, h: h, m: m, s: s };
  };


  function updateTimerDisplay({ d, h, m, s }) {
    document.querySelector('[data-days]').textContent = d.toString().padStart(2, '0');
    document.querySelector('[data-hours]').textContent = h.toString().padStart(2, '0');
    document.querySelector('[data-minutes]').textContent = m.toString().padStart(2, '0');
    document.querySelector('[data-seconds]').textContent = s.toString().padStart(2, '0');
  }

  flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      initTime = selectedDates[0];

      if(initTime <= Date.now()) {
        startBtn.disabled = true;
        iziToast.show({
            message: 'Please choose a date in the future',
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'topRight',
            iconColor: 'red',
            close: false,
            closeOnClick: false,
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/4225/4225690.png',
            balloon: false,
          });
      } else {
        startBtn.disabled = false;
      }
      }
    });





