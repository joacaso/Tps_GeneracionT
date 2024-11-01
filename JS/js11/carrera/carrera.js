// Selecciona los autos por su ID
let autoRojo = document.getElementById("autoRojo");
let autoAzul = document.getElementById("autoAzul");

// Variables para registrar el avance de cada auto
let avanceRojo = 0;
let avanceAzul = 0;

// Ancho de la pista para determinar cuándo un auto ha ganado
const anchoPista = document.getElementById("pista").offsetWidth;
const anchoAuto = autoRojo.offsetWidth;

// Evento para detectar cuando se presiona una tecla
window.addEventListener("keyup", (event) => {
    // Movimiento del auto rojo con la tecla "ArrowRight" (Flecha derecha)
    if (event.key === "ArrowRight") {
        avanceRojo += 10;
        autoRojo.style.left = avanceRojo + "px";

        // Verificar si el auto rojo ha ganado
        if (avanceRojo + anchoAuto >= anchoPista) {
            alert("¡El auto rojo ha ganado!");
            resetGame();
        }
    }

    // Movimiento del auto azul con la tecla "d"
    else if (event.key === "d") {
        avanceAzul += 10;
        autoAzul.style.left = avanceAzul + "px";

        // Verificar si el auto azul ha ganado
        if (avanceAzul + anchoAuto >= anchoPista) {
            alert("¡El auto azul ha ganado!");
            resetGame();
        }
    }
});

// Función para reiniciar el juego
function resetGame() {
    avanceRojo = 0;
    avanceAzul = 0;
    autoRojo.style.left = "0px";
    autoAzul.style.left = "0px";
}
