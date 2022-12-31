const body = document.querySelector("body");
const timer = document.querySelector("#timer");
const MIN_DURATION = 10;

setInterval(setTimer, 100);

function setTimer() {
  const newyear = new Date("2024-01-01T00:00:00");
  const todayTime = new Date();
  const diff = newyear - todayTime + 1000;
  if (diff < 0) {
    timer.innerText = "Happy New Year 2024!";
    return;
  }

  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  timer.innerText = `${day}일 ${hour}시간 ${min}분 ${sec}초`;
}

function makeSnowflake() {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;
  snowflake.style.animationDelay = `${delay}s`;

  body.appendChild(snowflake);

  setTimeout(() => {
    body.removeChild(snowflake);
    makeSnowflake();
  }, (duration + delay) * 1000);
}

for (let index = 0; index < 50; index++) {
  makeSnowflake();
}
