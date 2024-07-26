'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
   
    static associate(Category) {
      this.belongsTo(Category, {
        foreignKey: 'catId'
      })
     
    }
  }
  Card.init({
    
    quet: DataTypes.STRING,
    answ: DataTypes.STRING,
    pic: DataTypes.STRING,
    catId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};