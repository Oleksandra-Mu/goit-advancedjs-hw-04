function markup(photos) {
  return photos.hits
    .map(
      element =>
        `
        <li class="gallery-item">
            <a class="gallery-link" href="${element.largeImageURL}" > 
              <img class="gallery-image" src="${element.webformatURL}" alt="${element.tags}"/> 
            </a>
            <ul class="statistics">
                <li class="photo-stat">
                <p><b>Likes</b></p>
                <p>${element.likes}</p>
                </li>
                <li class="photo-stat">
                <p><b>Views</b></p> 
                <p>${element.views}</p>
                </li>
                <li class="photo-stat">
                <p><b>Comments</b></p> 
                <p>${element.comments}</p>
                </li>
                <li class="photo-stat">
                <p><b>Downloads</b></p> 
                <p>${element.downloads}</p>
                </li>
            </ul>
            </li>`
    )
    .join('');
}

export { markup };
