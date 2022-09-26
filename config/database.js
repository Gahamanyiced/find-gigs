const { Sequelize } = require('sequelize');

module.exports = new Sequelize('codegigs', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});
