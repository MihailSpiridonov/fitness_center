const subscriptions = document.querySelectorAll('[data-subscription]');
const prices = document.querySelectorAll('[data-price]');


function getSubscription() {
  for (let i = 0; i < subscriptions.length; i++) {
    const subscription = subscriptions[i];
    const parent = subscription.parentNode;
    if (parent.classList.contains('actived')) {
      for (let j = 0; j < prices.length; j++) {
        const price = prices[j];
        price.classList.remove('active');

        if (parent.classList.contains('one-month') && parent.classList.contains('actived')) {
          if (price.classList.contains('one-month')) {
            price.classList.add('active');
          }
        } else if (parent.classList.contains('six-months') && parent.classList.contains('actived')) {
          if (price.classList.contains('six-months')) {
            price.classList.add('active');
          }
        } else if (parent.classList.contains('one-year') && parent.classList.contains('actived')) {
          if (price.classList.contains('one-year')) {
            price.classList.add('active');
          }
        }
      }
    }
  }
}

function removeActiveClass() {
  for (let i = 0; i < subscriptions.length; i++) {
    const subscription = subscriptions[i];
    const parentSubscription = subscription.parentNode;
    parentSubscription.classList.remove('actived');
  }
}

export {subscriptions, prices, removeActiveClass, getSubscription};
