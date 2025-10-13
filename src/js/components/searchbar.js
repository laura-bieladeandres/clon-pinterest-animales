// src/js/components/searchbar.js
import { searchPhotos } from '../api/unsplash.js';

export function initSearchBar() {
  const form = document.querySelector('#search-form');
  const input = document.querySelector('#search-input');
  const gallery = document.querySelector('#gallery');

  if (!form || !input || !gallery) {
    console.error('❌ Elementos de búsqueda no encontrados en el DOM');
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // evita recarga de página

    const query = input.value.trim();
    if (!query) return;

    // Muestra mensaje de carga
    gallery.innerHTML = '<p>🔍 Buscando imágenes...</p>';

    try {
      const data = await searchPhotos(query);
      if (window.renderImages) {
        window.renderImages(data.results);
      }
    } catch (error) {
      console.error('❌ Error en la búsqueda de Unsplash:', error);
      gallery.innerHTML = '<p>⚠️ Error al buscar imágenes.</p>';
    }
  });
}
