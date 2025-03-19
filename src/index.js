const express = require('express');
const morgan = require('morgan');
const { PORT } = require('./config.js');
const { pool } = require('./models/db.js');
const router = require('./routes/taller3m.routes.js');
const session = require('express-session');
const userRoutes = require('./routes/user.routes');
const geteRoutes = require('./routes/gete.routes'); 

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));
app.get('/a', (req, res) => {
  res.send('Bienvenido a la API de taller3m');
});

app.use('/', userRoutes);
app.use('/api', router);
app.use('/api', geteRoutes);

app.listen(PORT, () => {
  console.log('Servidor corriendo', PORT);
});
