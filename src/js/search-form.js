import { renderEvent } from './event';
import { page } from './pagination';

const gallery = document.querySelector('.gallery-events');
const form = document.querySelector('.form');
export let value = '';

const handleSubmit = event => {
  event.preventDefault();
  gallery.innerHTML = '';
  value = event.target.elements.input.value;
  renderEvent(page, value);
  form.reset();
};

form.addEventListener('submit', handleSubmit);
