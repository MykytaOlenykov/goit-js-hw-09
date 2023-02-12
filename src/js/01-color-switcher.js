const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
let intervalId = null;

btnStopEl.setAttribute('disabled', '');

btnStartEl.addEventListener('click', onClickStart);
btnStopEl.addEventListener('click', onClickStop);

function onClickStart() {
  onToggelBtnActivity();
  changeColorBody();

  intervalId = setInterval(changeColorBody, 1000);
}

function onClickStop() {
  clearInterval(intervalId);

  onToggelBtnActivity();
}

function changeColorBody() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onToggelBtnActivity() {
  btnStartEl.toggleAttribute('disabled');
  btnStopEl.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
