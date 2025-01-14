const API_KEY = '48208038-3c3ecca5e2ade6beba42f0ed3';
const BASE_URL = 'https://pixabay.com/api/';

export function searchPhotos(q) {
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
