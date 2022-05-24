let position = 0;
const SLIDES_TO_SHOW = 4;
const SLIDES_TO_SCROLL = 1;
const container = document.querySelector('[data-slider]');
const track = container.querySelector('[data-slider-track]');
const items = container.querySelectorAll('[data-slider-item]');
const buttonBack = container.querySelector('[data-slider-button-back]');
const buttonNext = container.querySelector('[data-slider-button-next]');
const itemsCount = items.length;
const itemWidth = container.offsetWidth / SLIDES_TO_SHOW;
const movePosition = SLIDES_TO_SCROLL * itemWidth;


for (let i = 0; i < items.length; i++) {
  const item = items[i];
  item.style.minWidth = itemWidth;
}

function seeCoachButtonBack() {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= SLIDES_TO_SCROLL ? movePosition : -((itemsCount - SLIDES_TO_SHOW) * itemWidth);
  track.style.transform = `translateX(${position}px)`;
}

function seeCoachButtonNext() {
  const itemsLeft = itemsCount - (Math.abs(position) + SLIDES_TO_SHOW * itemWidth) / itemWidth;
  position -= itemsLeft >= SLIDES_TO_SCROLL ? movePosition : -((itemsCount - SLIDES_TO_SHOW) * itemWidth);
  track.style.transform = `translateX(${position}px)`;
}


export {buttonNext, buttonBack, seeCoachButtonBack, seeCoachButtonNext, items};
