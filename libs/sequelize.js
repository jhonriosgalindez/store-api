const { Sequelize } = require('sequelize')

const { config } = require('../config/config')

// Traemos los modelos
const setupModels = require('../db/models')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// Gestionamos sequelize
const sequelize = new Sequelize(URI, {
  // Con dialect escogemos la base de datos que estamos usando
  dialect: 'postgres',
  logging: false,
})

// Corremos setupModels justo despues de correr la instancia y le enviamos la conexión
setupModels(sequelize)

// Hacemos una sincronización para que luego cree la tabla con la estructura que se definió en UserSchema
sequelize.sync()

module.exports = sequelize
