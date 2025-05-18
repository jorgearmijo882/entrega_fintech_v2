
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'fintechdb',
  port: 5432
});

app.post('/registro', async (req, res) => {
  const { nombre, apellido } = req.body;
  try {
    await pool.query('INSERT INTO personas (nombre, apellido) VALUES ($1, $2)', [nombre, apellido]);
    res.status(201).send('Registro guardado');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al guardar');
  }
});

app.listen(port, () => {
  console.log(`Backend escuchando en puerto ${port}`);
});
