const videoPlayer = document.querySelector('[data-video-player]');
const playButton = document.querySelector('[data-play]');


// Добавление атрибута src для iframe
function addSrc() {
  const src = videoPlayer.getAttribute('data-src');
  videoPlayer.setAttribute('src', src);
}

// Добавление класса на кнопку при фокусировке
playButton.onfocus = function () {
  playButton.classList.add('gym__play-video--focus');
};

// Удаление класса на кнопку при потери фокусировки
playButton.onblur = function () {
  playButton.classList.remove('gym__play-video--focus');
};

// Запуск видео с кликом мышки
function managePlayer() {
  addSrc();
  videoPlayer.classList.remove('close');
  videoPlayer.classList.add('play');
}

// Запуск видео с клавиатуры
const managePlayerKeyboard = (evt) => {
  if (playButton.classList.contains('gym__play-video--focus') && evt.which === 13 || playButton.classList.contains('gym__play-video--focus') && evt.which === 32) {
    evt.preventDefault();
    managePlayer();
  }
};


export {playButton, videoPlayer, managePlayer, managePlayerKeyboard, addSrc};
