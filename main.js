let estudiantes = [];

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const matricula = document.getElementById('matricula').value;
    const calificacion = parseFloat(document.getElementById('calificacion').value);

    if (isNaN(calificacion) || calificacion < 60) {
        alert("La calificación debe ser un número igual o mayor a 60.");
        return;
    }

    const estudiante = {
        nombre: nombre,
        apellido: apellido,
        matricula: matricula,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);

    const table = document.getElementById('studentTable');
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    cell3.innerHTML = matricula;
    cell4.innerHTML = calificacion;
    cell5.innerHTML = `<button onclick="eliminarEstudiante(${estudiantes.length - 1})">Eliminar</button> <button onclick="modificarEstudiante(${estudiantes.length - 1})">Modificar</button>`;

    actualizarPromedioTotal();
    limpiarFormulario();
}

function eliminarEstudiante(index) {
    estudiantes.splice(index, 1);

    const table = document.getElementById('studentTable');
    table.deleteRow(index + 1);

    actualizarPromedioTotal();
}

function modificarEstudiante(index) {
    const estudiante = estudiantes[index];

    document.getElementById('nombre').value = estudiante.nombre;
    document.getElementById('apellido').value = estudiante.apellido;
    document.getElementById('matricula').value = estudiante.matricula;
    document.getElementById('calificacion').value = estudiante.calificacion;

    eliminarEstudiante(index);
}

function actualizarPromedioTotal() {
    const totalCalificaciones = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    const totalEstudiantes = estudiantes.length;

    const promedioTotal = totalCalificaciones / totalEstudiantes;
    document.getElementById('promedioTotal').innerText = `Promedio Total: ${promedioTotal.toFixed(2)}`;
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('calificacion').value = '';
}
