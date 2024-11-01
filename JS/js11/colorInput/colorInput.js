let input = document.getElementById("colorInput");

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        document.body.style.backgroundColor = input.value;
    } else if (event.key === "Backspace") {
        document.body.style.backgroundColor = "white";
    }
});
