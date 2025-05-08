document.getElementById("form-editar").addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const curso = document.getElementById("curso").value;

    const alumnoActualizado = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        curso: curso
    };

    fetch(`https://681c31086ae7c794cf70edef.mockapi.io/api/Alumnos/Alumnos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(alumnoActualizado)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("Alumno actualizado con éxito!");
        document.getElementById("form-editar").reset();
    })
    .catch(error => {
        console.error("Hubo un error al actualizar:", error);
        alert("Error al actualizar el alumno. Revisá la consola.");
    });
});
