const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'jhon',
  password: 'jhon123',
  database: 'my-store'
})

// Ya no hay necesidad de conectarnos porque la primera conexión que geenra va a ser la que inicie la conexión para todas las demás

// Exportamos pool porque la vamos a usar en un servicio
module.exports = pool
