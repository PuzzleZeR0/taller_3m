const { pool } = require("../models/db.js");

const gettaller3m = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
};

module.exports = { gettaller3m };

