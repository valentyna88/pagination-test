import { fetchData } from './api';
import { page, reset } from './pagination';
import { value } from './search-form';

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

export async function renderEvent(page, value) {
  try {
    const arrayEvent = await fetchData(page, value);
    if (!arrayEvent.page.totalElements) {
      alert('Try again!');
      return;
    }

    if (page === 1) {
      reset(arrayEvent.page.totalElements);
    }
    eventsTemplate(arrayEvent._embedded.events);
  } catch (error) {
    console.log(error);
  }
}
renderEvent(page, value);
