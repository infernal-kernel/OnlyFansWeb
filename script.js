// =====================
//  Contador regresivo
// =====================
function iniciarContador(fechaObjetivo) {
  const endDate = new Date(fechaObjetivo).getTime();
  const timerElement = document.getElementById("timer");
  
  if (!timerElement) return;

  function actualizar() {
    const ahora = Date.now();
    const distancia = endDate - ahora;

    if (distancia <= 0) {
      timerElement.textContent = "¡Oferta expirada!";
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Formateo con ceros a la izquierda
    const formato = 
      `${String(dias).padStart(2, '0')}d ` +
      `${String(horas).padStart(2, '0')}h ` +
      `${String(minutos).padStart(2, '0')}m ` +
      `${String(segundos).padStart(2, '0')}s`;

    timerElement.textContent = formato;
  }

  actualizar(); // Primera invocación inmediata
  const intervalo = setInterval(actualizar, 1000);
}

// Inicia el contador hacia 31 marzo 2025 a las 23:59:59
document.addEventListener("DOMContentLoaded", () => {
  iniciarContador("March 31, 2025 23:59:59");
});

// =====================
//  Menú hamburguesa (responsive)
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

// =====================
//  Servicio Worker (ya movido a index.html con defer)
// =====================
// (Se mantiene el registro en index.html)
