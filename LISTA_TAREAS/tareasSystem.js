const TareasContainer = document.getElementById("TareasContainer");
const nuevaTarea = document.getElementById("addTask");
let numTask = 0;

nuevaTarea.addEventListener("click", () => {
    numTask++;

    const tarea__Element = `<div class="tareas__item" id="task${numTask}">
    <form action="">
        <input type="checkbox" id="check${numTask}">
        <label for="check${numTask}"></label>
        <input id="nameTask${numTask}" type="text" value="">
        <button type="button">
            <box-icon class="buttonDelete__icon" name="trash-alt" type="solid" color="red"></box-icon>
        </button>
    </form>
    </div>`;

    TareasContainer.insertAdjacentHTML('beforeend', tarea__Element);
    let inputName = document.getElementById("nameTask"+numTask);
    inputName.focus();

});

TareasContainer.addEventListener("input", (event) => {
    const tareaElement = event.target.closest('.tareas__item');
    if (event.target.checked) {
        tareaElement.classList.add("tareas__item--completed");
    } else {
        tareaElement.classList.remove("tareas__item--completed");
    }
    
});

TareasContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("buttonDelete__icon"))
    {
        TareasContainer.removeChild(event.target.parentNode.parentNode.parentNode)
    }
    
})


function ajustarTamañoInputs(input)
{

    let longitudContenido = input.value.length;
    if (longitudContenido > 10)
    {
        input.style.fontSize = "12px";
    }
    else
    {
        input.style.fontSize = "20px";
    }
}