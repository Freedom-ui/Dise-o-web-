document.getElementById("form-eliminar").addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("id").value;

    if (!confirm(`¿Estás seguro de que querés eliminar al alumno con ID ${id}?`)) {
        return; // Cancela si el usuario dice que no
    }

    fetch(`https://681c31086ae7c794cf70edef.mockapi.io/api/Alumnos/Alumnos/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("Alumno eliminado con éxito!");
        document.getElementById("form-eliminar").reset();
    })
    .catch(error => {
        console.error("Hubo un error al eliminar:", error);
        alert("Error al eliminar el alumno. Revisá la consola.");
    });
});
