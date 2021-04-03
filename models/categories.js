'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};