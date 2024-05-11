const TareasContainer = document.getElementById("TareasContainer");
const nuevaTarea = document.getElementById("addTask");
let numTask = 0;
let tareas = [{
    
}];

CargarTareas();

console.log(numTask);

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
    
    tareas.push({
        id: numTask,
        ischeck: false,
        name: ""
    });

    console.log(tareas);
    GuardarTareas();
});

TareasContainer.addEventListener("input", (event) => {
    if (event.target.type === "checkbox") {
        const tareaElement = event.target.closest('.tareas__item');
        if (event.target.checked) {
            tareaElement.classList.add("tareas__item--completed");
        } else {
            tareaElement.classList.remove("tareas__item--completed");
        }
    }
    let tareaModificada = event.target.closest('.tareas__item');
    let tareaModificadaIndex = tareaModificada.id.replace("task","");
    
    let index = -1; // Inicializamos el índice en -1

    for (let i = 0; i < tareas.length; i++) {
        if (parseInt(tareas[i].id) === parseInt(tareaModificadaIndex)) {
            index = i; // Almacenamos el índice cuando se cumple la condición
            break; // Salimos del bucle una vez que se encuentra el índice
        }
    }
    console.log(index);
    tareas[index] = {
        id: parseInt(tareaModificadaIndex) ,
        ischeck: tareaModificada.querySelector('input[type="checkbox"]').checked,
        name: tareaModificada.querySelector('input[type="text"]').value
    };
    console.log(event);
    GuardarTareas();
});

TareasContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("buttonDelete__icon"))
    {
        let tareaModificada = event.target.closest('.tareas__item');
        let tareaModificadaIndex = tareaModificada.id.replace("task","");
        let index = -1; // Inicializamos el índice en -1

        for (let i = 0; i < tareas.length; i++) {
            if (parseInt(tareas[i].id) === parseInt(tareaModificadaIndex)) {
                index = i; // Almacenamos el índice cuando se cumple la condición
                break; // Salimos del bucle una vez que se encuentra el índice
            }
        }
        tareas.splice(index,1);
        TareasContainer.removeChild(event.target.parentNode.parentNode.parentNode)
    }
    GuardarTareas();
})

function GuardarTareas()
{
    console.log(tareas);
    localStorage.setItem("numTask",JSON.stringify(numTask));
    localStorage.setItem("tareas",JSON.stringify(tareas));
}


function CargarTareas() {
    numTask = JSON.parse(localStorage.getItem("numTask"));
    tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.forEach((tarea) => {
        const tareaHTML = `
            <div class="tareas__item ${tarea.ischeck ? 'tareas__item--completed' : ''}" id="task${tarea.id}">
                <form action="">
                    <input type="checkbox" id="check${tarea.id}" ${tarea.ischeck ? 'checked' : ''}>
                    <label for="check${tarea.id}"></label>
                    <input id="nameTask${tarea.id}" type="text" value="${tarea.name}">
                    <button type="button">
                        <box-icon class="buttonDelete__icon" name="trash-alt" type="solid" color="red"></box-icon>
                    </button>
                </form>
            </div>`;
        TareasContainer.insertAdjacentHTML('beforeend', tareaHTML);
    });
}

function BorrarDatos()
{
    localStorage.setItem("numTask",JSON.stringify(0));
    localStorage.setItem("tareas",JSON.stringify([]));
}




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