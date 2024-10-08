// Obtener el número de boleta desde localStorage
let numeroBoleta = localStorage.getItem('numeroBoleta');
// Obtener el número de incidencia desde localStorage
let numeroIncidencia = localStorage.getItem('numeroIncidencia');

function iniciarBoleta() {
    
    if (!numeroBoleta) {
        numeroBoleta = 1;
    } else {
        numeroBoleta = parseInt(numeroBoleta) + 1;
    }

   
    document.getElementById("numero_boleta").value = numeroBoleta;

    // Guardar el número de boleta en localStorage
    localStorage.setItem('numeroBoleta', numeroBoleta);
}

function iniciarIncidencia() {
    
    if (!numeroIncidencia) {
        numeroIncidencia = 1;
    } else {
        numeroIncidencia = parseInt(numeroIncidencia) + 1;
    }
    
    document.getElementById("numero_incidencia").value = numeroIncidencia;

    // Guardar el número de incidencia en localStorage
    localStorage.setItem('numeroIncidencia', numeroIncidencia);
}

// Llamar a ambas funciones al cargar la página
window.onload = function() {
    iniciarBoleta();
    iniciarIncidencia();
};
