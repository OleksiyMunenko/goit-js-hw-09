import Notiflix from 'notiflix';

refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name=delay]'),
  stepInput: document.querySelector('input[name=step]'),
  amountInput: document.querySelector('input[name=amount]'),
  submitBtn: document.querySelector('button'),
};

 const numOfCreatedPromise = Number(refs.amountInput.value);
 const delayStep = Number(refs.stepInput.value);
let delay = Number(refs.delayInput.value);
 
refs.submitBtn.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
	
	for (let position = 1; position <= numOfCreatedPromise; position += 1) {
			  createPromise({ position, delay }).then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
		delay += delayStep;	
  }
  refs.form.reset();
}

function createPromise({ position, delay }) {
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
