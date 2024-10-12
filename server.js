const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const port = 3001;

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a SQL Server
const config = {
    server: 'DESKTOP-F44K4T7\\SQLEXPRESS',
    database: 'BOLETA_DE_SERVICIO',
    options: {
        port: 58855, // Asegúrate de usar el puerto correcto
        encrypt: false, // Deshabilita la encriptación si está causando problemas
        trustedConnection: true,
        requestTimeout: 60000 // Aumenta a 60 segundos
    }
};


// Endpoint para recibir datos de la boleta
app.post('/api/boletas', async (req, res) => {
    try {
        const { 
            numero_boleta,
            numero_incidencia,
            cliente,
            tecnico,
            fecha,
            modelo,
            serie,
            motivo_servicio,
            condicion,
            accion,
            ubicacion_falla,
            tipo_falla,
            hora_inicial_viaje,
            hora_final_viaje,
            hora_inicial_trabajo,
            hora_final_trabajo,
            contometro_inicial,
            contometro_final,
            proformar_repuestos,
            facturar_mano_obra,
            maquina_operativa,
            vn,
            nt,
            vt,
            nombre_cliente,
            area_cliente,
            observaciones
        } = req.body;

        // Conectar a la base de datos
        await sql.connect(config);

        // Insertar en la tabla Boletas
        const result = await sql.query`INSERT INTO Boletas (
            numero_boleta, 
            numero_incidencia, 
            cliente, 
            tecnico, 
            fecha, 
            modelo, 
            serie, 
            motivo_servicio, 
            condicion, 
            accion, 
            ubicacion_falla, 
            tipo_falla, 
            hora_inicial_viaje, 
            hora_final_viaje, 
            hora_inicial_trabajo, 
            hora_final_trabajo, 
            contometro_inicial, 
            contometro_final, 
            proformar_repuestos, 
            facturar_mano_obra, 
            maquina_operativa, 
            vn, 
            nt, 
            vt, 
            nombre_cliente, 
            area_cliente, 
            observaciones
        ) VALUES (
            ${numero_boleta}, 
            ${numero_incidencia}, 
            ${cliente}, 
            ${tecnico}, 
            ${fecha}, 
            ${modelo}, 
            ${serie}, 
            ${motivo_servicio}, 
            ${condicion}, 
            ${accion}, 
            ${ubicacion_falla}, 
            ${tipo_falla}, 
            ${hora_inicial_viaje}, 
            ${hora_final_viaje}, 
            ${hora_inicial_trabajo}, 
            ${hora_final_trabajo}, 
            ${contometro_inicial}, 
            ${contometro_final}, 
            ${proformar_repuestos}, 
            ${facturar_mano_obra}, 
            ${maquina_operativa}, 
            ${vn}, 
            ${nt}, 
            ${vt}, 
            ${nombre_cliente}, 
            ${area_cliente}, 
            ${observaciones}
        )`;

        res.status(200).json({ message: 'Boleta insertada correctamente', id: result.rowsAffected[0] });
    } catch (error) {
        console.error('Error:', error); // Muestra el error en la consola
        res.status(500).json({ message: 'Error al insertar la boleta', error: error.message }); // Devuelve el error específico
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
