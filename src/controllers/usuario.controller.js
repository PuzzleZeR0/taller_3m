const { pool } = require('../models/db.js');

const insertarUsuario = async (req, res) => {
    const { nombre, email, contraseña } = req.body;

    try {
        const query = "INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?);";
        await pool.query(query, [nombre, email, contraseña]);
        res.send('Usuario registrado correctamente.');
    } catch (error) {
        console.error('Error ejecutando la consulta:', error);
        res.status(500).json({ error: 'Error Interno del Servidor' });
    }
};



const validarUsuario = async (req, res) => {
    const { email, contraseña } = req.body;

    try {
        const query = "SELECT * FROM usuarios WHERE email = ? AND contraseña = ?;";
        const [rows] = await pool.query(query, [email, contraseña]);

        if (rows.length > 0) {
            res.json({ success: true });
        } else {
            res.status(401).json({ error: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error ejecutando la consulta:', error);
        res.status(500).json({ error: 'Error Interno del Servidor' });
    }
};

// Exporta ambas funciones
module.exports = { insertarUsuario, validarUsuario };