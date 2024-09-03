import { fetchData } from './api';
import { page, reset } from './pagination';

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

export async function renderEvent(page) {
  const arrayEvent = await fetchData(page);
  if (page === 1) {
    reset(arrayEvent.page.totalElements);
  }
  eventsTemplate(arrayEvent._embedded.events);
}
renderEvent(page);
