const { Pool } = require('pg')

// Traemos a 'config'
const { config } = require('../config/config')

// Protegemos los datos con encodeURIComponent
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

// Creamos la URL de conexión
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
// Pasamos la URI con connectionString
const pool = new Pool({ connectionString: URI })

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'jhon',
//   password: 'jhon123',
//   database: 'my-store'
// })

// Ya no hay necesidad de conectarnos porque la primera conexión que geenra va a ser la que inicie la conexión para todas las demás

// Exportamos pool porque la vamos a usar en un servicio
module.exports = pool
