const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'roblero14',
  database: 'taller3m',
});

async function verifyConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL');
    connection.release();
  } catch (err) {
    console.error('Error connecting to MySQL', err);
  }
}

verifyConnection();

pool.on('error', (err) => {
  console.error('MySQL error', err);
});

module.exports = { pool };
