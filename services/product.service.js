const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool')

// Sequelize maneja automáticamente una conexión por pool
const sequelize = require('../libs/sequelize')

const { models } = require('../libs/sequelize')

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
    // Con sequelize, ya no es necesario hacerla por pool
    this.pool = pool // traigo "pool"
    this.pool.on('error', (err) => console.error(err)) // Escucho por si sucede un error
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const query = 'SELECT * FROM products'
    const rta = await this.pool.query(query)

    // sequelize nos entrega la información en un array
    const [data] = await sequelize.query(query)
    return {
      data,
      // metadata, // solo queremos la data
    }

    return rta.rows
    return this.products;
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
