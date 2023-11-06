const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres')

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    // Emepzamos a ejecutar la conexión
    const client = await getConnection() // Recordar que getConnection es asíncrono

    // Ahora empezamos a realizar consultas (de nuestra tabla tasks)
    const rta = await client.query('SELECT * FROM tasks')
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
