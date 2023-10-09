const { Item } = require('./Item');
const { Trip } = require('./Trip');
const { User } = require('./User');

const { sequelize, Sequelize } = require('./db');

Item.belongsTo(Trip, { foreignKey: 'tripId' });
Trip.hasMany(Item);
Trip.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Trip);

module.exports = {
  Item,
  User,
  Trip,
  sequelize,
  Sequelize,
};
