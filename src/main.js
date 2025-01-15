import { searchPhotos } from './js/pixabay-api.js';
import { markup } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const searchResults = document.querySelector('.search-result');
const loadMoreBtn = document.querySelector('.js-load-more');

searchForm.addEventListener('submit', initiateSearch);

let page = 1;
let q = '';
let lightbox;
let totalPages;

function initiateSearch(event) {
  event.preventDefault();
  q = event.currentTarget.q.value.trim();
  page = 1;
  loaderEl.classList.remove('loader-off');

  searchPhotos(q, page)
    .then(photos => {
      searchResults.innerHTML = '';
      loadMoreBtn.classList.add('is-hidden');
      if (photos.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topCenter',
        });
        loaderEl.classList.add('loader-off');
        return;
      }
      const photosMarkup = markup(photos);

      searchResults.insertAdjacentHTML('beforeend', photosMarkup);

      totalPages = Math.ceil(photos.totalHits / 15);

      if (totalPages > 1) {
        loadMoreBtn.classList.remove('is-hidden');
        loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
        loaderEl.classList.add('loader-off');
      }

      lightbox = new SimpleLightbox('.search-result a', {
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

const onLoadMoreBtnClick = async event => {
  try {
    loaderEl.classList.remove('loader-off');
    page++;

    const data = await searchPhotos(q, page);

    const photosMarkup = markup(data);
    searchResults.insertAdjacentHTML('beforeend', photosMarkup);
    lightbox.refresh();

    if (page === totalPages) {
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
      setTimeout(() => {
        iziToast.show({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'bottomCenter',
          color: 'blue',
        });
      }, 300);
    }
    smoothScroll();
  } catch (err) {
    console.log(err);
  } finally {
    loaderEl.classList.add('loader-off');
  }
};

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const height = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
