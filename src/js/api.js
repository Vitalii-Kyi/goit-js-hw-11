import axios from 'axios';
import Notiflix from 'notiflix';
// Ключ библиотеки axios
const KEY = '38081629-f3deed67400d6b6dc0e964249';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Notiflix.Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  },
);

export async function fetchImages(query, page, perPage) {
  try {
    const response = await axios.get(
      `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error');
  }
};