// Selección de botón y agregado de evento
document.getElementById("beepButton").addEventListener("click", seEjecutaEnEvento);

// Función para el evento
function seEjecutaEnEvento() {
    // Añadir párrafo "BEEP" al final del body
    document.body.insertAdjacentHTML("beforeend", "<p>BEEP</p>");
    // Alternar clase de color en el body
    document.body.classList.toggle("color");
}
