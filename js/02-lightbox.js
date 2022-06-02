import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryItem(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`;  
    }).join('');
}

const lightboxGallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: '250' });
