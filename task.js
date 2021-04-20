import gallerys from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.js-gallery'),
    modal: document.querySelector('.js-lightbox'),
    modalImg: document.querySelector('.lightbox__image'),
    window: document.body
  }
  
const cardsMarkup = createGalleryItem(gallerys);
refs.gallery.insertAdjacentHTML('beforeend', cardsMarkup);
  
  
refs.gallery.addEventListener('click', toOpenModal);
refs.modal.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

function createGalleryItem(gallerys) {
    return gallerys
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />        
            </a>
        </li>`
        })
    .join('');
};

function toOpenModal(event) {
    if(!event.target.classList.contains('gallery__image')) {
      return;
    };
    event.preventDefault()
    refs.modal.classList.add('is-open');
    refs.modalImg.setAttribute('src', event.target.getAttribute('data-source'));
  }
  
  function toCloseModal() {
    refs.modal.classList.remove('is-open');
    refs.modalImg.removeAttribute('src');
  }
  
  function closeModal(event) {
    if(event.target.classList.contains('lightbox__overlay')) {
      toCloseModal();
    };
  
    if(event.target.classList.contains('lightbox__button')) {
      toCloseModal();
    };
  
    if(event.code === 'Escape') {
      toCloseModal();
    };
  }



  





