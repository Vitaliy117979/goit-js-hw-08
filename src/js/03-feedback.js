import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

updateValue();
refs.form.addEventListener('input', throttle(onHandleInput, 500));
refs.form.addEventListener('submit', onHandleSubmit);

// const jsonParse = JSON.parse(localStorage.getItem('feedback-form-state'));

function onHandleSubmit(element) {
  element.preventDefault();
  const sub = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!(sub.message || sub.email)) return;
  console.log(sub);
  localStorage.removeItem('feedback-form-state');
  updateValue();
}
function onHandleInput({ target: { name, value } }) {
  const all = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  all[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(all));
}

function updateValue() {
  const sub = JSON.parse(localStorage.getItem('feedback-form-state'));
  Object.entries(sub || { email: '', message: '' }).forEach(([name, value]) => {
    refs.form.elements[name].value = value
  });
}
