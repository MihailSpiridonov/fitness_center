import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {anchor, toSlide} from './modules/smooth-scroll/smooth-scroll.js';
import {playButton, videoPlayer, managePlayer, managePlayerKeyboard, addSrc} from './modules/video-player/video-player.js';
import {subscriptions, prices, removeActiveClass, getSubscription} from './modules/subscriptions/subscriptions.js';
import {buttonNext, buttonBack, seeCoachButtonBack, seeCoachButtonNext, items} from './modules/slider/slider.js';
import {buttonNextEndless, buttonBackEndless, checkButton, seeButtonBack, seeButtonNext} from './modules/endless-slider/endless-slider.js';
import {form, formSendForm, validateLength} from './modules/form-validation/form-validation.js';
import {phoneInputs, onPhoneKeyDown, onPhoneInput, onPhonePaste} from './modules/mask-input-phone/mask-input-phone.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules

  // Плавный скролл по якорям из навигации
  anchor.addEventListener('click', toSlide);


  // Добвить видео на страницу
  setTimeout(addSrc, 10000);
  videoPlayer.classList.add('close');
  playButton.addEventListener('click', managePlayer);
  playButton.addEventListener('keydown', managePlayerKeyboard);


  // Переключение цены абонементов взависимости от их срока действия
  for (let i = 0; i < subscriptions.length; i++) {
    const subscription = subscriptions[i];
    subscription.addEventListener('click', function (evt) {
      evt.preventDefault();
      removeActiveClass();
      const parentSubscription = subscription.parentNode;
      parentSubscription.classList.add('actived');
      getSubscription();
    });
  }


  // Добавление тени к цене
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    const priceText = price.children[0].textContent;
    price.children[1].textContent = priceText;
  }


  // Слайдер в блоке тренеров
  buttonBack.addEventListener('click', seeCoachButtonBack);
  buttonNext.addEventListener('click', seeCoachButtonNext);


  // Карусель в блоке отзывов
  checkButton();
  buttonBackEndless.addEventListener('click', seeButtonBack);
  buttonNextEndless.addEventListener('click', seeButtonNext);


  // Получить информацию о тренере по клику
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('click', function () {
      item.classList.toggle('hover');
    });
  }


  // Маска для поля ввода телефона
  for (let i = 0; i < phoneInputs.length; i++) {
    const input = phoneInputs[i];
    input.addEventListener('keydown', onPhoneKeyDown);
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('paste', onPhonePaste);
    input.addEventListener('input', validateLength);
  }


  // Проверка форм на валидность
  form.addEventListener('submit', formSendForm);


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
