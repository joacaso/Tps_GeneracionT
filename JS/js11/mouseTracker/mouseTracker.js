document.addEventListener("mousemove", (event) => {
    if (event.buttons === 1) {
        let img = document.querySelector("img");
        img.style.top = event.clientY + "px";
        img.style.left = event.clientX + "px";
    }
});
