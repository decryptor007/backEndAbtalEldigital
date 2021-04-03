'use strict';
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  items.associate = function(models) {
    // associations can be defined here
  };
  return items;
};