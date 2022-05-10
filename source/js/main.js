import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {anchor, toSlide} from './modules/smooth-scroll/smooth-scroll.js';
import {playButton, videoPlayer, managePlayer} from './modules/video-player/video-player.js';
import {subscriptions, prices, manageSubscription} from './modules/subscriptions/subscriptions.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules

  // Плавный скролл по якорям из навигации
  anchor.addEventListener('click', toSlide);


  // Добвить видео на страницу
  videoPlayer.classList.add('close');
  playButton.addEventListener('click', managePlayer);


  // Переключение цены абонементов взависимости от их срока действия
  for (let i = 0; i < subscriptions.length; i++) {
    const subscription = subscriptions[i];
    subscription.addEventListener('click', manageSubscription);
  }


  // Добавление тени к цене
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    const priceText = price.children[0].textContent;
    price.children[1].textContent = priceText;
  }


  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
