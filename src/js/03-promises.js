import Notiflix from 'notiflix';

refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name=delay]'),
  stepInput: document.querySelector('input[name=step]'),
  amountInput: document.querySelector('input[name=amount]'),
  submitBtn: document.querySelector('button'),
};

refs.submitBtn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const numOfCreatedPromise = refs.amountInput.value;
  const delayStep = refs.stepInput.value;
  const firstDelay = refs.delayInput.value;
  let delay = firstDelay;

  for (let i = 1; i <= numOfCreatedPromise; i += 1) {
    let position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });

    delay = firstDelay + delayStep;
  }
  refs.form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
