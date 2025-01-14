import axios from 'axios';
export const searchPhotos = async (q, page) => {
  axios.defaults.baseURL = 'https://pixabay.com';
  const params = {
    key: '48208038-3c3ecca5e2ade6beba42f0ed3',
    q: `${q}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: '15',
    page: page,
  };
  const response = await axios.get(`/api/`, { params });
  return response.data;
};
