const prompt = require("prompt-sync")({ sigint: true });

// ARRAY para almacenar todas las tareas
let tareas = [];

// FUNCION para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
    tareas.push({
        nombre: nombreRecibido,
        completada: false,
        fechaLimite: fechaLimiteRecibida
    });
}

// ELIMINAR una tarea
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {  // Condición corregida
        tareas.splice(indice, 1);
        console.log("Tarea eliminada correctamente");
    } else {
        console.log("Índice de tarea inválido");
    }
}

// FUNCION para marcar tarea como completada
function completarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea completada");
    } else {
        console.log("Índice de tarea inválido");
    }
}

// FUNCION para modificar una tarea específica
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].nombre = nuevoNombre;
        if (nuevaFechaLimite !== null) {
            tareas[indice].fechaLimite = nuevaFechaLimite;  // Nombre de variable corregido
        }
        console.log("Tarea modificada con éxito");
    } else {
        console.log("Índice de tarea inválido");
    }
}

// Crear función para mostrar el menú de opciones
function mostrarMenu() {
    console.log("--- Menú ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("0. Salir");
}

// Función para poder interactuar con el usuario
function interactuarConUsuario() {
    let opcion = -1;
    while (opcion != 0) {
        mostrarMenu();
        opcion = parseInt(prompt("Ingresa la opción seleccionada: "));

        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese la tarea a cargar: ");
                let fechaLimite = prompt("Ingrese la fecha límite (o presione enter para ninguna): ");
                agregarTarea(nombreTareaNueva, fechaLimite || null);
                break;
            case 2:
                let tareaEliminada = parseInt(prompt("Índice de la tarea a eliminar: "));
                eliminarTarea(tareaEliminada);
                break;
            case 3:
                let tareaCompletada = parseInt(prompt("Índice de la tarea a completar: "));
                completarTarea(tareaCompletada);
                break;
            case 4:
                let indice = parseInt(prompt("Ingrese el índice a modificar: "));
                let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea: ");  // Corrección: obtener el nombre como string
                let nuevaFechaLimite = prompt("Ingrese la nueva fecha límite (o presione enter para mantener la actual): ");
                modificarTarea(indice, nuevoNombre, nuevaFechaLimite || null);
                break;
            case 5:
                console.log("--- LISTA DE TAREAS ---");
                console.log(tareas);
                break;
            case 0:
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción inválida");
                break;
        }
    }
}

interactuarConUsuario();
