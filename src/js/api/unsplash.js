// src/js/api/unsplash.js
const BASE = 'https://api.unsplash.com';

function getAuthHeaders() {
  const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  if (!key) throw new Error('VITE_UNSPLASH_ACCESS_KEY no está definido. Usa .env.local');
  return { Authorization: `Client-ID ${key}` };
}

export async function searchPhotos(query, page = 1, perPage = 20) {
  const url = `${BASE}/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;
  const res = await fetch(url, { headers: getAuthHeaders() });
  if (!res.ok) throw new Error(`Unsplash API error ${res.status}`);
  return res.json(); // { total, total_pages, results: [...] }
}
