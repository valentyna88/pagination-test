import axios from 'axios';

const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export async function fetchData(page, value) {
  const asyncParams = {
    params: {
      apikey: API_KEY,
      page,
      keyword: value,
    },
  };
  const response = await axios.get('events.json', asyncParams);
  return response.data;
}
