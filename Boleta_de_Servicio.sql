/**
Tabla Boletas (id (INT, PRIMARY KEY, AUTO_INCREMENT), numero_boleta (INT), numero_incidencia (INT), cliente (VARCHAR), tecnico (VARCHAR), fecha (DATE), 
modelo (VARCHAR), serie (VARCHAR), motivo_servicio (VARCHAR), condicion (VARCHAR), accion (VARCHAR), ubicacion_falla (VARCHAR), tipo_falla (VARCHAR), 
hora_inicial_viaje (TIME), hora_final_viaje (TIME), hora_inicial_trabajo (TIME), hora_inicial_trabajo (TIME), contometro_inicial (INT), contometro_final (INT), 
proformar_repuestos (BOOLEAN), facturar_mano_obra (BOOLEAN), maquina_operativa (BOOLEAN), vn (FLOAT), nt (FLOAT), vt (FLOAT), nombre_cliente (VARCHAR), 
area_cliente (VARCHAR), observaciones (TEXT)) - Tabla Fuerte

Tabla Repuestos (id (INT, PRIMARY KEY, AUTO_INCREMENT), boleta_id (INT, FOREIGN KEY REFERENCES Boletas(id)), codigo (VARCHAR), descripcion (VARCHAR), 
cantidad (INT), estado (VARCHAR)) - Tabla Debil

Tabla Checklist (id (INT, PRIMARY KEY, AUTO_INCREMENT), boleta_id (INT, FOREIGN KEY REFERENCES Boletas(id)), descripcion (VARCHAR), 
seleccionado (BOOLEAN)) - Tabla Debil
**/

-- Crear la base de datos
CREATE DATABASE BOLETA_DE_SERVICIO
GO

-- Usar la base de datos
USE BOLETA_DE_SERVICIO
GO

-- Crear la tabla Boletas
CREATE TABLE Boletas 
(
    id INT PRIMARY KEY IDENTITY(1,1),
    numero_boleta INT,
    numero_incidencia INT,
    cliente VARCHAR(255),
    tecnico VARCHAR(255),
    fecha DATE,
    modelo VARCHAR(255),
    serie VARCHAR(255),
    motivo_servicio VARCHAR(255),
    condicion VARCHAR(255),
    accion VARCHAR(255),
    ubicacion_falla VARCHAR(255),
    tipo_falla VARCHAR(255),
    hora_inicial_viaje TIME,
    hora_final_viaje TIME,
    hora_inicial_trabajo TIME,
    hora_final_trabajo TIME,
    contometro_inicial INT,
    contometro_final INT,
    proformar_repuestos BIT,
    facturar_mano_obra BIT,
    maquina_operativa BIT,
    vn FLOAT,
    nt FLOAT,
    vt FLOAT,
    nombre_cliente VARCHAR(255),
    area_cliente VARCHAR(255),
    observaciones TEXT
)
GO

-- Crear la tabla Repuestos
CREATE TABLE Repuestos 
(
    id INT PRIMARY KEY IDENTITY(1,1),
    boleta_id INT,
    codigo VARCHAR(255),
    descripcion VARCHAR(255),
    cantidad INT,
    estado VARCHAR(255),
    FOREIGN KEY (boleta_id) REFERENCES Boletas(id)
)
GO

-- Crear la tabla Checklist
CREATE TABLE Checklist 
(
    id INT PRIMARY KEY IDENTITY(1,1),
    boleta_id INT,
    descripcion VARCHAR(255),
    seleccionado BIT,
    FOREIGN KEY (boleta_id) REFERENCES Boletas(id)
)
GO
