// Contador regresivo de 24 horas
function countdown() {
    const endDate = new Date("March 31, 2025 23:59:59").getTime();
    let now = new Date().getTime();
    let distance = endDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "¡Oferta expirada!";
    }
}
setInterval(countdown, 1000);
