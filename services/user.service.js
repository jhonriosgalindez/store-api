const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres')
const pool = require('../libs/postgres.pool')
// Cada vez que se ejecuta setupModels, crea un mspace o espacio de nombres reservados llamado "models"
const { models } = require('../libs/sequelize')


class UserService {
  constructor() {
    // this.pool = pool
    // this.pool.on('error', (err) => console.error(err))
  }

  async create(data) {
    // Usamos el ORM para crear y le pasamos la data
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    // Empezamos a ejecutar la conexión
    // Cada vez que llamamos a getConnection, estamos generando una conexión nueva y esto crea y crea más conexiones. Usando "Pool" creamos una sola conexión y la compartimos.
    // const client = await getConnection() // Recordar que getConnection es asíncrono

    // Ahora empezamos a realizar consultas (de nuestra tabla tasks)
    // const query = 'SELECT * FROM tasks'
    // const rta = await this.pool.query(query)
    // return rta.rows
    const rta = await models.User.findAll()
    return rta
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);

    // Validamos si el usuario existe o no
    if (!user) {
      // Si encuentra un error, la capa de routing va a detectarlo y lo envia a los middlwares de tipo error y se hace el procesamiento de dicho error (envía a user.router.js).
      throw boom.notFound('user not found'); // Error de tipo boom
    }
    return user;
    // return { id };
  }

  async update(id, changes) {
    // Necesitamos ir, obtener un id y aplicar los cambios
    const user = await this.findOne(id); // Usamos el método findOne para reusar codigo y obtener desde allí el error.
    const rta = await user.update(changes);
    return rta;
    // return {
    //   id,
    //   changes,
    // };
  }

  async delete(id) {
    // Buscamos el id, y si existe, hacemos un await con el usuario y aplicamos destroy
    const user = await this.findOne(id);
    await user.destroy(); // Hacemos la eliminacion
    return { id };
  }
}

module.exports = UserService;
