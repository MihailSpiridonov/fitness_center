const anchor = document.querySelector('[data-link-scroll]');

function toSlide(evt) {
  evt.preventDefault();

  const blockID = anchor.getAttribute('href').substr(1);

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export {anchor, toSlide};
