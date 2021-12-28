'use strict';
const Sequelize = require('sequelize');
const config = require('../config/config.json')['dbConfig'];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.DataTypes = Sequelize;

module.exports = db;
