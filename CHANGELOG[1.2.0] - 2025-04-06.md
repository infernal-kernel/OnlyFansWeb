# 📦 CHANGELOG

Todas las actualizaciones y mejoras realizadas en el proyecto.

## [1.2.0] - 2025-04-06
🚀 Mejoras en el Service Worker
- Corregidas rutas de caché para funcionar correctamente en GitHub Pages.
- Añadido manejo de errores en la caché para evitar fallos silenciosos.
- Mejora en la estructura del `sw.js` para robustez.
- Eliminadas fuentes externas del caché inicial para evitar errores CORS.

## [1.1.0] - 2025-04-06
🔥 Añadido soporte PWA (Progressive Web App)
- Creado archivo `manifest.json` con metadatos de la app.
- Añadido `service worker (sw.js)` para caché offline básico.
- Referenciado el `manifest` y `theme-color` en `index.html`.
- Registrado el service worker desde `script.js`.
- Optimizadas las rutas para que funcionen correctamente desde el navegador.

## [1.0.0] - 2025-04-04
🎉 Versión inicial
- Landing page con diseño responsive.
- Inspirada en estética OnlyFans.
- Optimización para móviles.
- Integración de imagen destacada y efectos básicos.
