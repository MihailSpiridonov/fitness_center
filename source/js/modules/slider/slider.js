let position = 0;
let SLIDES_TO_SHOW;
const MOBILE_WIDTH = 560;
const TABLET_WIDTH = 900;
const DESKTOP_WIDTH = 1160;
const SLIDES_TO_SCROLL = 1;
const container = document.querySelector('[data-slider]');
const track = container.querySelector('[data-slider-track]');
const items = container.querySelectorAll('[data-slider-item]');
const buttonBack = container.querySelector('[data-slider-button-back]');
const buttonNext = container.querySelector('[data-slider-button-next]');
const itemsCount = items.length;

if (container.offsetWidth < MOBILE_WIDTH) {
  SLIDES_TO_SHOW = 1;
  position = -458;
} else if (container.offsetWidth >= MOBILE_WIDTH && container.offsetWidth < TABLET_WIDTH) {
  SLIDES_TO_SHOW = 2;
  position = -610;
} else if (container.offsetWidth >= TABLET_WIDTH && container.offsetWidth < DESKTOP_WIDTH) {
  SLIDES_TO_SHOW = 3;
} else if (container.offsetWidth >= DESKTOP_WIDTH) {
  SLIDES_TO_SHOW = 4;
}

const itemWidth = container.offsetWidth / SLIDES_TO_SHOW;
const movePosition = SLIDES_TO_SCROLL * itemWidth;


for (let i = 0; i < items.length; i++) {
  const item = items[i];
  item.style.minWidth = itemWidth;

  // Добавление класса тренерской карточке при фокусировке
  item.onfocus = function () {
    item.classList.add('coachs__coach--focus');
  };

  // Удаление класса с тренерской карточки при потери фокусировки
  item.onblur = function () {
    item.classList.remove('coachs__coach--focus');
    item.classList.remove('hover');
  };

  // Показ подробной информации о тренере с клавиатуры
  item.addEventListener('keydown', function (evt) {
    if (item.classList.contains('coachs__coach--focus') && evt.which === 13 || item.classList.contains('coachs__coach--focus') && evt.which === 32) {
      evt.preventDefault();
      item.classList.toggle('hover');
    }
  });
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
