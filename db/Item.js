const { Sequelize, sequelize } = require('./db');

const Item = sequelize.define('item', {
    name: Sequelize.STRING,
    packed: Sequelize.BOOLEAN,
});

module.exports = { Item };