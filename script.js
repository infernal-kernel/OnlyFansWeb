// Contador regresivo de 24 horas
function countdown() {
    let targetDate = localStorage.getItem('targetDate');

    if (!targetDate) {
        targetDate = new Date();
        targetDate.setHours(targetDate.getHours() + 24);
        localStorage.setItem('targetDate', targetDate);
    } else {
        targetDate = new Date(targetDate);
    }

    function updateTimer() {
        let now = new Date();
        let difference = targetDate - now;

        if (difference < 0) {
            document.getElementById("timer").innerHTML = "¡La oferta ha terminado!";
            clearInterval(timerInterval);
            return;
        }

        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);

        document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    let timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
}

countdown();
