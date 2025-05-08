document.getElementById("form-alumno").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const curso = document.getElementById("curso").value;

    const nuevoAlumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        curso: curso
    };

    fetch("https://681c31086ae7c794cf70edef.mockapi.io/api/Alumnos/Alumnos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoAlumno)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("Alumno añadido con éxito!");
        // Limpiar formulario
        document.getElementById("form-alumno").reset();
    })
    .catch(error => {
        console.error("Hubo un error al añadir:", error);
        alert("Error al añadir el alumno. Revisá la consola.");
    });
});
