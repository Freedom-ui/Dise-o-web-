fetch("https://681c31086ae7c794cf70edef.mockapi.io/api/Alumnos/Alumnos")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then((estudiantes) => {
        const tbody = document.getElementById("tabla-estudiantes");

        estudiantes.forEach((alumno) => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${alumno.id}</td>
                <td>${alumno.nombre}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.edad}</td>
                <td>${alumno.curso}</td>
            
            `;

            tbody.appendChild(fila);
        });
    })
    .catch((error) => {
        console.error("Hubo un error en la consulta:", error);
        alert("Error al consultar la API. Revisá la consola para más detalles.");
    });
