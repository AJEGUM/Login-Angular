const mysql = require('mysql2/promise');
require('dotenv').config();

// Tu variable tal cual me la pediste
const db = mysql.createPool({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Función de apoyo para que el backend no muera mientras MySQL arranca
async function connectWithRetry() {
  console.log('🔄 Verificando conexión a la base de datos...');
  try {
    const connection = await db.getConnection();
    console.log('✅ Conexión exitosa a MySQL');
    connection.release();
  } catch (err) {
    console.error('❌ DB no lista, reintentando en 5 segundos...', err.message);
    setTimeout(connectWithRetry, 5000);
  }
}

connectWithRetry();

// Exportación para tus Models y consultas parametrizadas (db.execute)
module.exports = db;