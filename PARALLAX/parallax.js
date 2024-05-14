
const tittle = document.getElementById("titulo");
const ichigo = document.getElementById("IchigoAttack");
const nubes1 = document.getElementById("nubes1");
const nubes2 = document.getElementById("nubes2");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    tittle.style.top = (scroll/2 * 5) - 450 + "px";
    let width = 100 - (scroll * 0.1); // Reducir el ancho conforme se hace scroll
    tittle.style.width = width + "%";

    nubes1.style.top = (scroll/2 * 1.5) - 100 + "px";
    nubes1.style.right = (scroll/2 * 5) - 50 + "px";

    nubes2.style.top = (scroll/2 * 1.5) - 100 + "px";
    nubes2.style.left = (scroll/2 * 5) - 50 + "px";

    ichigo.style.top = (scroll/2 * 1) - 400 + "px";
    let widthichi = 2 + (scroll * 3); // Reducir el ancho conforme se hace scroll
    ichigo.style.width = widthichi + "%";
})
