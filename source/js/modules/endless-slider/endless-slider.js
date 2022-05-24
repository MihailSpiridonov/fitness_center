let positionEndless = 0;
const SLIDES_TO_SHOW = 1;
const SLIDES_TO_SCROLL = 1;
const containerEndless = document.querySelector('[data-endless-slider]');
const trackEndless = containerEndless.querySelector('[data-endless-slider-track]');
const itemsEndless = containerEndless.querySelectorAll('[data-endless-slider-item]');
const buttonBackEndless = containerEndless.querySelector('[data-endless-slider-button-back]');
const buttonNextEndless = containerEndless.querySelector('[data-endless-slider-button-next]');
const itemsCountEndless = itemsEndless.length;
const itemWidth = containerEndless.offsetWidth / SLIDES_TO_SHOW;
const movePositionEndless = SLIDES_TO_SCROLL * itemWidth;


for (let i = 0; i < itemsEndless.length; i++) {
  const item = itemsEndless[i];
  item.style.minWidth = `${itemWidth}px`;
}

function checkButton() {
  buttonBackEndless.disabled = positionEndless === 0;
  buttonNextEndless.disabled = positionEndless <= -(itemsCountEndless - SLIDES_TO_SHOW) * itemWidth;
}

function seeButtonBack() {
  const itemsLeft = Math.abs(positionEndless) / itemWidth;
  positionEndless += itemsLeft >= SLIDES_TO_SCROLL ? movePositionEndless : itemsLeft * itemWidth;
  trackEndless.style.transform = `translateX(${positionEndless}px)`;
  checkButton();
}

function seeButtonNext() {
  const itemsLeft = itemsCountEndless - (Math.abs(positionEndless) + SLIDES_TO_SHOW * itemWidth) / itemWidth;
  positionEndless -= itemsLeft >= SLIDES_TO_SCROLL ? movePositionEndless : itemsLeft * itemWidth;
  trackEndless.style.transform = `translateX(${positionEndless}px)`;
  checkButton();
}


export {buttonNextEndless, buttonBackEndless, checkButton, seeButtonBack, seeButtonNext};
