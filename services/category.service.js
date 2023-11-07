const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool')
const { models } = require('../libs/sequelize')

class CategoryService {

  constructor() {
    this.pool = pool
    this.pool.on('error', (err) => console.error(err))
  }

  async create(data) {
    return data;
  }

  async find() {
    // const query = 'SELECT * FROM tasks'
    // const rta = await this.pool.query(query)
    // return rta.rows
    const rta = await models.Category.findAll()
    return rta
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

module.exports = CategoryService;
