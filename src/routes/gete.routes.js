// src/routes/gete.routes.js
const { Router } = require('express');
const { getData, deleteData, updateData } = require('../controllers/gete.controller.js');

const router = Router();

// Ruta para obtener datos
router.get('/gete', getData); // Cambia '/gete' por la ruta que necesites

// Ruta para borrar un dato
router.delete('/gete/:id', deleteData); // Cambia '/gete/:id' por la ruta que necesites

// Ruta para actualizar un dato
router.put('/gete/:id', updateData); // Cambia '/gete/:id' por la ruta que necesites

module.exports = router;