// Función para mostrar y ocultar imágenes
function toggleImage(imageId) {
    let image = document.getElementById(imageId);
    image.classList.toggle("oculto");
}

// Agregar eventos a botones
document.getElementById("moneyButton").addEventListener("click", () => toggleImage("moneyImage"));
document.getElementById("miamiButton").addEventListener("click", () => toggleImage("miamiImage"));
document.getElementById("maiameeButton").addEventListener("click", () => toggleImage("maiameeImage"));

// Evento para ocultar al hacer clic en las imágenes
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => img.classList.add("oculto"));
});
