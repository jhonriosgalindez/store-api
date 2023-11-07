const { Model, DataTypes, Sequelize } = require('sequelize')

// Primero definimos el nombre de la tabla
const USER_TABLE = 'users'

// Ahora, definimos el schema que definirá la ESTRUCTURA de la base de datos diferente a los schemas que validan la información de entrada que teníamos con joi
const UserSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  }
}

// Extendemos el modelo para tener atributos que nos sirven de métodos (como find) para hacer queries
class User extends Model {
 // Métodos estáticos, con esto no necesito declarar el objeto para acceder a esos métodos
 static associate() {
  //
 }

 static config(sequelize) {
  return {
    sequelize,
    tableName: USER_TABLE,
    modelName: 'User',
    timeStamps: false,
  }
 }
}

module.exports = { USER_TABLE, UserSchema, User }
