const { Item } = require('./Item');
const { Trip } = require('./Trip');
const { sequelize, Sequelize } = require('./db');

Item.belongsTo(Trip, { foreignKey: 'tripId' });
Trip.hasMany(Item);

module.exports = {
  Item,
  Trip,
  sequelize,
  Sequelize,
};