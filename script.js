// Contador regresivo de 24 horas
function countdown() {
    let targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24);

    function updateTimer() {
        let now = new Date();
        let difference = targetDate - now;

        if (difference < 0) {
            document.getElementById("timer").innerHTML = "¡La oferta ha terminado!";
            return;
        }

        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);

        document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateTimer, 1000);
}

countdown();
