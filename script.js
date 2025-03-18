// Contador regresivo de 24 horas
function countdown() {
    // Verificamos si ya existe un tiempo de expiración guardado en el localStorage
    let targetDate = localStorage.getItem('targetDate');

    if (!targetDate) {
        // Si no existe, definimos el tiempo de expiración 24 horas desde ahora
        targetDate = new Date();
        targetDate.setHours(targetDate.getHours() + 24);
        localStorage.setItem('targetDate', targetDate); // Guardamos el tiempo de expiración en localStorage
    } else {
        targetDate = new Date(targetDate); // Convertimos el valor guardado en un objeto Date
    }

    function updateTimer() {
        let now = new Date();
        let difference = targetDate - now;

        if (difference < 0) {
            document.getElementById("timer").innerHTML = "¡La oferta ha terminado!";
            clearInterval(timerInterval); // Detenemos el contador cuando termina
            return;
        }

        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);

        document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    // Llamamos a la función para actualizar el contador cada segundo
    let timerInterval = setInterval(updateTimer, 1000);

    // Actualizamos el contador inmediatamente al cargar
    updateTimer();
}

countdown();
