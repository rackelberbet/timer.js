const horas = document.querySelector(".hr");
const minutos = document.querySelector(".min");
const segundos = document.querySelector(".sec");

const iniciar = document.querySelector(".start");
const pausar = document.querySelector(".pause");
const zerar = document.querySelector(".reset");
const resumir = document.querySelector(".resume");

let interval;
let hour = 0;
let minutes = 0;
let seconds = 0;

let isPaused = false;

iniciar.addEventListener("click", startTimer);
pausar.addEventListener("click", pauseTimer);
resumir.addEventListener("click", resumeTimer);
zerar.addEventListener("click", resetTimer);

function formatTimer(num) {
  return num >= 10 ? num : `0${num}`;
}

function startTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    if (!isPaused) {
      seconds += 1;

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      if (minutes === 60) {
        hour++;
        minutes = 0;
      }
      horas.innerHTML = formatTimer(hour);
      minutos.innerHTML = formatTimer(minutes);
      segundos.innerHTML = formatTimer(seconds);
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  horas.style.color = "#f7fc8c";
  minutos.style.color = "#f7fc8c";
  segundos.style.color = "#f7fc8c";
}

function resumeTimer() {
  isPaused = false;
  horas.style.color = "#bdbfe4";
  minutos.style.color = "#bdbfe4";
  segundos.style.color = "#bdbfe4";
}

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hour = 0;

  horas.innerHTML = "00";
  minutos.innerHTML = "00";
  segundos.innerHTML = "00";
}
