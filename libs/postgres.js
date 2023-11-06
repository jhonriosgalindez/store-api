const { Client } = require('pg')

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'jhon',
    password: 'jhon123',
    database: 'my-store'
  })

  // Client nos retorna una promesa, por eso la podemos correr de forma asíncrona
  await client.connect()

  // Finalmente, retornamos el client para que pueda ser recibido por otro y puedo realizar consultas
  return client
}

// Exportamos getConnection porque la vamos a usar en "service/users.js"
module.exports = getConnection
