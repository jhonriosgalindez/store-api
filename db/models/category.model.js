const { Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_TABLE =  'categories'

const CategorySchema = {
  name: {
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

class Category extends Model {
  static associate() {
    //
   }

   static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timeStamps: false,
    }
   }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category }
