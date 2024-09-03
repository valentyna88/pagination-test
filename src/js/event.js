import { fetchData } from './api';

const gallery = document.querySelector('.gallery-events');
const eventsTemplate = arrayEvents => {
  const markup = arrayEvents
    .map(
      ({ name }) =>
        `<li>
        <p>${name}</p>
    </li>`
    )
    .join('');
  gallery.innerHTML = markup;
};

async function renderEvent(page) {
  const arrayEvent = await fetchData(page);
  eventsTemplate(arrayEvent._embedded.events);
}
renderEvent(1);
