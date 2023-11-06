const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres')
const pool = require('../libs/postgres.pool')

class UserService {
  constructor() {
    this.pool = pool
    this.pool.on('error', (err) => console.error(err))
  }

  async create(data) {
    return data;
  }

  async find() {
    // Empezamos a ejecutar la conexión
    // Cada vez que llamamos a getConnection, estamos generando una conexión nueva y esto crea y crea más conexiones. Usando "Pool" creamos una sola conexión y la compartimos.
    const client = await getConnection() // Recordar que getConnection es asíncrono

    // Ahora empezamos a realizar consultas (de nuestra tabla tasks)
    const query = 'SELECT * FROM tasks'
    const rta = await this.pool.query(query)
    return rta.rows
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
