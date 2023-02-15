import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'flatpickr/dist/flatpickr.min.css';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', e => {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let currentDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, currentDelay)
      .then(value => Notify.success(value))
      .catch(error => Notify.failure(error));

    currentDelay += Number(step.value);
  }
});
