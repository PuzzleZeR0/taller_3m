const { Router } = require('express');
const { insertarUsuario, validarUsuario } = require('../controllers/usuario.controller.js'); // Importa ambas funciones
const path = require('path');

const router = Router();

// Ruta para mostrar el formulario de registro
router.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
});

// Ruta para mostrar el formulario de login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../validar.html'));
});

// Ruta para manejar el registro de usuarios
router.post('/usuarios', insertarUsuario);

// Ruta para manejar el login
router.post('/login', validarUsuario);

module.exports = router;