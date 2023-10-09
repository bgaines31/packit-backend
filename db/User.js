const { Sequelize, sequelize } = require('./db');

let User = sequelize.define('user', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your name',
      },
    },
  },
  email: {
    type: Sequelize.TEXT,
    isEmail: true,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: 'Please enter your email',
      },
    },
  },
  password: {
    type: Sequelize.TEXT,
    require: true,
    allowNull: false,
    validate: {
      // len: [12, 50],
      notNull: {
        msg: 'Please enter your password',
      },
    },
  },
});

module.exports = {
  User
};
