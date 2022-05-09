const videoPlayer = document.querySelector('[data-video-player]');
const playButton = document.querySelector('[data-play]');

function managePlayer() {
  videoPlayer.classList.remove('close');
  videoPlayer.classList.add('play');
}

export {playButton, videoPlayer, managePlayer};
