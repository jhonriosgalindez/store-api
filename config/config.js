require('dotenv').config()

const config = {
  // variable de entorno para node || valor por defecto
  env: process.env.NODE_ENV || 'dev', // estamos diciendo que si no hay una env, entonces estamos en desarrollo 'dev'
  port: process.env.PORT || 3000, // si no se define un puerto, entonces por defecto es 3000
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
}

module.exports = { config }
