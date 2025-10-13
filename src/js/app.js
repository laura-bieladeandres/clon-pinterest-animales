// src/js/app.js
import { initialPhotos } from './data.js';
import { searchPhotos } from './api/unsplash.js';

export function initApp() {
  console.log("🟢 App inicializada correctamente");

  const form = document.getElementById('search-form');
  const gallery = document.getElementById('gallery');

  // 🔹 Render inicial de las imágenes fijas de initialPhotos
  renderInitialGallery();

  // Función para manejar la búsqueda
  async function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;

    gallery.innerHTML = '<p>🔎 Buscando imágenes...</p>';

    try {
      const data = await searchPhotos(query);
      renderResults(data.results);
    } catch (err) {
      console.error('❌ Error en la búsqueda:', err);
      gallery.innerHTML = `<p>Error: ${err.message}</p>`;
    }
  }

  // 🔹 Render de resultados desde la API de Unsplash
  function renderResults(photos) {
    if (!photos || photos.length === 0) {
      gallery.innerHTML = '<p>No se encontraron resultados 🐾</p>';
      return;
    }

    gallery.innerHTML = photos.map(photo => `
      <div class="image-card">
        <img src="${photo.urls.small}" alt="${photo.alt_description || 'Animal'}">
        <div class="meta">
          <div class="user-info">
            <img class="avatar" src="${photo.user.profile_image.small}" alt="${photo.user.name}">
            <span class="author">${photo.user.name}</span>
          </div>
          <div class="likes">❤️ ${photo.likes}</div>
        </div>
      </div>
    `).join('');
  }

  // 🔹 Render inicial desde initialPhotos
  function renderInitialGallery() {
    gallery.innerHTML = initialPhotos.map(img => `
      <div class="image-card">
        <img src="${img.url}" alt="${img.title}">
        <div class="meta">
          <div class="user-info">
            <img class="avatar" src="https://images.unsplash.com/profile-1600000000000-000000000000example?w=32&h=32&fit=crop" alt="Autor desconocido">
            <span class="author">${img.title}</span>
          </div>
          <div class="likes">❤️ ${Math.floor(Math.random() * 300) + 50}</div>
        </div>
      </div>
    `).join('');
  }

  // Evento submit
  form.addEventListener('submit', handleSearch);
}
