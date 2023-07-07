import axios from "axios";

const BASE_URL = 'https://pixabay.com/';
const API_KEY = '1234567890';
const PER_PAGE = 40;

async function fetchQuery(query, page) {
  const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page,
  });
  return await axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&${params}`)
};

export {
  fetchQuery,
  PER_PAGE,
};