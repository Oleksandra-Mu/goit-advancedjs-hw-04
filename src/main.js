import { searchPhotos } from './js/pixabay-api.js';
import { markup } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const searchResults = document.querySelector('.search-result');

searchForm.addEventListener('submit', initiateSearch);

function initiateSearch(event) {
  event.preventDefault();
  const q = event.currentTarget.q.value.trim();
  loaderEl.classList.remove('loader-off');
  searchPhotos(q)
    .then(photos => {
      searchResults.innerHTML = '';
      if (photos.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
        loaderEl.classList.add('loader-off');
        return;
      }
      const photosMarkup = markup(photos);

      searchResults.insertAdjacentHTML('beforeend', photosMarkup);
      const lightbox = new SimpleLightbox('.search-result a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
      loaderEl.classList.add('loader-off');
    })
    .catch(e => {
      console.error(e);
      iziToast.show({
        message: `Error occured: ${e}`,
        position: 'topRight',
      });
    })
    .finally(() => searchForm.reset());
}
