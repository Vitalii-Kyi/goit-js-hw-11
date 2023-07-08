import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '38081629-f3deed67400d6b6dc0e964249';
const PER_PAGE = 40;

async function fetchQuery (query, page) {
    const params = new URLSearchParams ({
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: PER_PAGE,
        page,
    });
    return await axios.get (`${BASE_URL}?key=${KEY}&q=${query}&${params}`)
};

export {
    fetchQuery,
    PER_PAGE,
};