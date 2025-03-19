// src/controllers/gete.controller.js
const { pool } = require('../models/db.js');

// Función para obtener datos
const getData = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios'); // Cambia 'usuarios' por la tabla que necesites
        res.json(rows);
    } catch (error) {
        console.error('Error ejecutando la consulta:', error);
        res.status(500).json({ error: 'Error Interno del Servidor' });
    }
};

// Función para borrar un dato
const deleteData = async (req, res) => {
    const { id } = req.params; // Asumiendo que el ID se pasa como parámetro en la URL

    try {
        const query = 'DELETE FROM usuarios WHERE id = ?'; // Cambia 'usuarios' por la tabla que necesites
        const [result] = await pool.query(query, [id]);

        if (result.affectedRows > 0) {
            res.json({ message: 'Usuario eliminado correctamente.' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado.' });
        }
    } catch (error) {
        console.error('Error ejecutando la consulta:', error);
        res.status(500).json({ error: 'Error Interno del Servidor' });
    }
};

// Función para actualizar un dato
const updateData = async (req, res) => {
    const { id } = req.params; // ID del usuario a actualizar
    const { nombre, email, contraseña } = req.body; // Datos a actualizar

    try {
        const query = 'UPDATE usuarios SET nombre = ?, email = ?, contraseña = ? WHERE id = ?'; // Cambia 'usuarios' por la tabla que necesites
        const [result] = await pool.query(query, [nombre, email, contraseña, id]);

        if (result.affectedRows > 0) {
            res.json({ message: 'Usuario actualizado correctamente.' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado.' });
        }
    } catch (error) {
        console.error('Error ejecutando la consulta:', error);
        res.status(500).json({ error: 'Error Interno del Servidor' });
    }
};

module.exports = { getData, deleteData, updateData };