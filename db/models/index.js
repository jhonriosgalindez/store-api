// Este archivo se va a encargar de enviar la conexión hacia los modelos y con esto se podrá hacer todo el mapeo y serialización de datos
const { User, UserSchema } = require('./user.model')
const { Product, ProductSchema } = require('./product.model')
const { Category, CategorySchema } = require('./category.model')
const { Order, OrderSchema } = require('./order.model')

// sequelize es la conexión
const setupModels = (sequelize) => {
  // Hacemos un init el cual debe seguir el schema "UserSchema" y la configuración "User" con su método estático y le enviamos la conexión
  User.init(UserSchema, User.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
  Order.init(OrderSchema, Order.config(sequelize))
}

module.exports = setupModels
