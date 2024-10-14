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

// Función para validar el formulario antes de enviarlo
function validarFormulario() {
    let esValido = true;
    let mensajeError = '';

    // Validar que los campos obligatorios no estén vacíos
    const cliente = document.getElementById("cliente").value;
    const tecnico = document.getElementById("tecnico").value;
    const fecha = document.getElementById("fecha").value;
    const modelo = document.getElementById("modelo").value;
    const serie = document.getElementById("serie").value;
    const motivoServicio = document.getElementById("motivo_servicio").value;
    const condicionEquipo = document.getElementById("condicion").value;
    const accionTomada = document.getElementById("accion").value;
    const ubicacionFalla = document.getElementById("ubicacion_falla").value;
    const tipoFalla = document.getElementById("tipo_falla").value;
    const horaInicialViaje = document.getElementById("hora_inicial_viaje").value;
    const horaFinalViaje = document.getElementById("hora_final_viaje").value;
    const horaInicialTrabajo = document.getElementById("hora_inicial_trabajo").value;
    const horaFinalTrabajo = document.getElementById("hora_final_trabajo").value;


    if (!cliente) {
        mensajeError += "El campo Cliente es obligatorio.\n";
        document.getElementById("cliente").classList.add("error"); // Pone las casillas obligatorias en rojo
        esValido = false;
    }
    if (!tecnico) {
        mensajeError += "El campo Técnico es obligatorio.\n";
        document.getElementById("tecnico").classList.add("error");
        esValido = false;
    }
    if (!fecha) {
        mensajeError += "El campo Fecha es obligatorio.\n";
        document.getElementById("fecha").classList.add("error");
        esValido = false;
    }
    if (!modelo) {
        mensajeError += "El campo Modelo es obligatorio.\n";
        document.getElementById("modelo").classList.add("error");
        esValido = false;
    }
    if (!serie) {
        mensajeError += "El campo Serie es obligatorio.\n";
        document.getElementById("serie").classList.add("error");
        esValido = false;
    }
    if (!motivoServicio) {
        mensajeError += "El campo Motivo del Servicio es obligatorio.\n";
        document.getElementById("motivo_servicio").classList.add("error");
        esValido = false;
    }
    if (!condicion) {
        mensajeError += "El campo Condición del equipo es obligatorio.\n";
        document.getElementById("condicion").classList.add("error");
        esValido = false;
    }
    if (!accion) {
        mensajeError += "El campo Acción tomada es obligatorio.\n";
        document.getElementById("accion").classList.add("error");
        esValido = false;
    }
    if (!ubicacionFalla) {
        mensajeError += "El campo Ubicación de la falla es obligatorio.\n";
        document.getElementById("ubicacion_falla").classList.add("error");
        esValido = false;
    }
    if (!tipoFalla) {
        mensajeError += "El campo Tipo de falla es obligatorio.\n";
        document.getElementById("tipo_falla").classList.add("error");
        esValido = false;
    }
    if (!horaInicialViaje) {
        mensajeError += "El campo Hora inicial de viaje es obligatorio.\n";
        document.getElementById("hora_inicial_viaje").classList.add("error");
        esValido = false;
    }
    if (!horaFinalViaje) {
        mensajeError += "El campo Hora final de viaje es obligatorio.\n";
        document.getElementById("hora_final_viaje").classList.add("error");
        esValido = false;
    }
    if (!horaInicialTrabajo) {
        mensajeError += "El campo Hora inicial de trabajo es obligatorio.\n";
        document.getElementById("hora_inicial_trabajo").classList.add("error");
        esValido = false;
    }
    if (!horaFinalTrabajo) {
        mensajeError += "El campo Hora final de trabajo es obligatorio.\n";
        document.getElementById("hora_final_trabajo").classList.add("error");
        esValido = false;
    }

    // Aqui se pueden agregar mas validaciones si quisiera

    // Si hay errores, mostrar el mensaje de error
    if (!esValido) {
        alert(mensajeError);
    }

    return esValido;
}

function enviarFormulario() {
    if (!validarFormulario()) {
        return; // Si la validación falla, no enviamos el formulario
    }

    const boleta = {
        numero_boleta: document.getElementById("numero_boleta").value,
        numero_incidencia: document.getElementById("numero_incidencia").value,
        cliente: document.getElementById("cliente").value,
        tecnico: document.getElementById("tecnico").value,
        fecha: document.getElementById("fecha").value,
        modelo: document.getElementById("modelo").value,
        serie: document.getElementById("serie").value,
        motivo_servicio: document.getElementById("motivo_servicio").value,
        condicion: document.getElementById("condicion").value,
        accion: document.getElementById("accion").value,
        ubicacion_falla: document.getElementById("ubicacion_falla").value,
        tipo_falla: document.getElementById("tipo_falla").value,
        hora_inicial_viaje: document.getElementById("hora_inicial_viaje").value,
        hora_final_viaje: document.getElementById("hora_final_viaje").value,
        hora_inicial_trabajo: document.getElementById("hora_inicial_trabajo").value,
        hora_final_trabajo: document.getElementById("hora_final_trabajo").value,
        contometro_inicial: document.getElementById("contometro_inicial").value,
        contometro_final: document.getElementById("contometro_final").value,
        proformar_repuestos: document.querySelector('input[name="opciones"][value="proformar_repuestos"]').checked,
        facturar_mano_obra: document.querySelector('input[name="opciones"][value="facturar_mano_obra"]').checked,
        maquina_operativa: document.querySelector('input[name="opciones"][value="maquina_operativa"]').checked,
        vn: document.getElementById("vn").value,
        nt: document.getElementById("nt").value,
        vt: document.getElementById("vt").value,
        nombre_cliente: document.getElementById("nombre_cliente").value,
        area_cliente: document.getElementById("area_cliente").value,
        observaciones: document.querySelector('textarea[name="observaciones"]').value,
    };

    fetch('http://localhost:3001/api/boletas', { // Asegúrate de usar el puerto correcto
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(boleta),
    })
    .then(response => {
        if (response.ok) {
            alert('Boleta enviada correctamente');
        } else {
            alert('Error al enviar la boleta');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar la boleta');
    });
}

// Llamar a ambas funciones al cargar la página
window.onload = function() {
    iniciarBoleta();
    iniciarIncidencia();

    // Vincular la función enviarFormulario al evento submit del formulario
    const formulario = document.getElementById("miFormulario");
    formulario.onsubmit = function(e) {
        e.preventDefault(); // Evita el envío normal del formulario
        enviarFormulario(); // Llama a la función para enviar los datos
    };
};

function downloadFormulario()
{
    const cliente = document.getElementById("cliente").value;
    const tecnico = document.getElementById("tecnico").value;
    const fecha = document.getElementById("fecha").value;
    const modelo = document.getElementById("modelo").value;
    const serie = document.getElementById("serie").value;
    const motivoServicio = document.getElementById("motivo_servicio").value;
    const condicionEquipo = document.getElementById("condicion").value;
    const accionTomada = document.getElementById("accion").value;
    const ubicacionFalla = document.getElementById("ubicacion_falla").value;
    const tipoFalla = document.getElementById("tipo_falla").value;
    const horaInicialViaje = document.getElementById("hora_inicial_viaje").value;
    const horaFinalViaje = document.getElementById("hora_final_viaje").value;
    const horaInicialTrabajo = document.getElementById("hora_inicial_trabajo").value;
    const horaFinalTrabajo = document.getElementById("hora_final_trabajo").value;

    const formulario = `Cliente: ${cliente}\nTécnico: ${tecnico}\nFecha: ${fecha}\nModelo: ${modelo}\nSerie: ${serie}
Motivo del Servicio: ${motivoServicio}\nCondición del Equipo: ${condicionEquipo}\nAcción Tomada: ${accionTomada}
Ubicación de la Falla: ${ubicacionFalla}\nTipo de Falla: ${tipoFalla}\nHora Inicial de Viaje: ${horaInicialViaje}
Hora Final de Viaje: ${horaFinalViaje}\nHora Inicial del Trabajo: ${horaInicialTrabajo}\nHora Final del Trabajo: ${horaFinalTrabajo}`

    const blob = new Blob([formulario], {type: "text/plain;charset=utf-8"});

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a')
    a.setAttribute('href', url);
    a.setAttribute('download', "Formulario_Boleta.txt");
    a.click();
}