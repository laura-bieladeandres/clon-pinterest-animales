## Clon Pinterest – Animales de Compañía

Proyecto realizado en **JavaScript Vanilla**, **HTML**, **CSS plano** y **Vite**.  
El objetivo es crear una réplica sencilla del estilo Pinterest que muestre **imágenes de animales de compañía**, obtenidas dinámicamente desde la **API de Unsplash**.  
El usuario puede realizar búsquedas por tipo de animal (gato, perro, loro, etc.) y visualizar una galería de resultados con los datos reales de la API.

---

## Características principales

- **Búsqueda dinámica** de imágenes mediante la API de Unsplash.  
- **Galería inicial** con imágenes precargadas (perros, gatos, pájaros, etc.).  
- **Diseño tipo Pinterest**, con estructura de tarjetas (“cards”) e imágenes adaptables.  

---

## Estructura del proyecto

```
src/
├── assets/
│   ├── icons/
│   └── images/
├── js/
│   ├── api/
│   │   └── unsplash.js
│   ├── components/
│   │   └── searchbar.js
│   ├── utils/
│   │   └── helpers.js
│   ├── app.js
│   └── data.js
├── styles/
│   └── style.css
├── main.js
├── index.html
└── .env.local
```

---

## Requisitos previos

Para ejecutar este proyecto necesitas tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes incluido con Node)

---

## Instalación y ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/laura-bieladeandres/clon-pinterest-animales.git
   cd clon-pinterest-animales
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Crear archivo `.env.local`:**
   En la raíz del proyecto, crea un archivo llamado `.env.local` con tu clave de la API de Unsplash:
   ```
   VITE_UNSPLASH_ACCESS_KEY=tu_clave_aquí
   ```

   > Puedes obtener tu clave registrándote en [Unsplash Developers](https://unsplash.com/developers).

4. **Ejecutar el proyecto:**
   ```bash
   npm run dev
   ```
   Luego abre en tu navegador la dirección indicada (por defecto: [http://localhost:5173](http://localhost:5173)).

---

## Uso

- Al abrir la página, se muestra una **galería inicial** con imágenes de animales.  
- En la parte superior hay una **barra de búsqueda** donde puedes escribir, por ejemplo:  
  ```
  perro
  gato
  loro
  conejo
  ```
- Al pulsar “Buscar”, la app consulta la **API de Unsplash** y muestra los resultados relacionados.  
- Cada tarjeta incluye la imagen y el nombre del autor que la subió a Unsplash.

---

## Diseño propuesto

El diseño de referencia utilizado para este proyecto está disponible en Figma:  
[Diseño Figma – Proyecto Pinterest](https://www.figma.com/design/gLRrcetLfS9KkG2o43qpfB/PROYECTO3?node-id=0-1)

---

## API utilizada

- **API:** [Unsplash Developers](https://unsplash.com/developers)  
- **Endpoint principal utilizado:**
  ```
  https://api.unsplash.com/search/photos
  ```
  Parámetros usados:
  - `query`: término de búsqueda introducido por el usuario  
  - `page`: número de página  
  - `per_page`: cantidad de resultados por página

---

## Autor

**Laura Biela De Andrés**  
Proyecto académico - Curso de JavaScript  
Año: 2025  

---

> Proyecto desarrollado para fines educativos.  
> El código está preparado para su despliegue o subida a GitHub.
