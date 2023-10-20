let totalCalificaciones = 0;
let totalEstudiantes = 0;

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const matricula = document.getElementById('matricula').value;
    const calificacion = parseFloat(document.getElementById('calificacion').value);

    if (isNaN(calificacion) || calificacion < 60) {
        alert("La calificación debe ser un número igual o mayor a 60.");
        return;
    }

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
    cell5.innerHTML = '<button onclick="eliminarEstudiante(this)">Eliminar</button>';

    // Actualizar el promedio total
    totalCalificaciones += calificacion;
    totalEstudiantes++;

    // Calcular el promedio y mostrarlo
    const promedioTotal = totalCalificaciones / totalEstudiantes;
    document.getElementById('promedioTotal').innerText = `Promedio Total: ${promedioTotal.toFixed(2)}`;

    // Limpiar el formulario después de agregar un estudiante
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('calificacion').value = '';
}

function eliminarEstudiante(button) {
    const row = button.parentNode.parentNode;
    const calificacion = parseFloat(row.cells[3].textContent);

    // Actualizar el promedio total al eliminar un estudiante
    totalCalificaciones -= calificacion;
    totalEstudiantes--;

    const table = document.getElementById('studentTable');
    table.deleteRow(row.rowIndex);

    // Calcular el nuevo promedio y mostrarlo
    if (totalEstudiantes > 0) {
        const promedioTotal = totalCalificaciones / totalEstudiantes;
        document.getElementById('promedioTotal').innerText = `Promedio Total: ${promedioTotal.toFixed(2)}`;
    } else {
        // Si no hay estudiantes, el promedio total es 0
        document.getElementById('promedioTotal').innerText = 'Promedio Total: 0.00';
    }
}
