const { Sequelize } = require('sequelize')

const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// Gestionamos sequelize
const sequelize = new Sequelize(URI, {
  // Con dialect escogemos la base de datos que estamos usando
  dialect: 'postgres',
  logging: false,
})

module.exports = sequelize
