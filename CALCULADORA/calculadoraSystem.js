
const pantalla = document.querySelector(".calculadora__pantalla");
const botones = document.querySelectorAll(".calculadora__boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPresionado = boton.textContent;

        if (pantalla.textContent === "Error!")
        {
            pantalla.textContent = "0";
        }

        if (boton.classList.contains("calculadora__boton--limpiar"))
        {

            pantalla.textContent = "0";
            return;
        }

        if (boton.classList.contains("calculadora__boton--borrar"))
        {
            pantalla.textContent = pantalla.textContent.slice(0,-1);
            if (pantalla.textContent.length === 0)
            {
                pantalla.textContent = "0";
            }
            return;
        }

        if (boton.classList.contains("calculadora__boton--igual"))    
        {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            }
            catch{
                pantalla.textContent = "Error!";
            }
            
            return;
        }


        if (pantalla.textContent === "0")
        {
            pantalla.textContent = botonPresionado
        }
        else
        {
            pantalla.textContent += botonPresionado;
        }
        
    })
})