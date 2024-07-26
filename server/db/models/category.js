'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {


    static associate(Card) {
      this.hasMany(Card, {
        foreignKey: 'catId'
      })

    }
  }
  Category.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};