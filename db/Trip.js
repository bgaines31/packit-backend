const { Sequelize, sequelize } = require('./db');

const Trip = sequelize.define('trip', {
  title: Sequelize.STRING,
  startDate: Sequelize.DATEONLY,
  endDate: Sequelize.DATEONLY,
  coverPhoto: Sequelize.STRING
});

module.exports = { Trip };
