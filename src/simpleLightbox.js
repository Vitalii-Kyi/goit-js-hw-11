import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default function initializeSimpleLightbox() {
  let lightbox = new SimpleLightbox('.gallery div a', {
    captionsData: 'alt',
    captionsPosition: 'bottom',
    captionsDelay: 350,
    scrollZoom: false,
  });
  return lightbox;
}