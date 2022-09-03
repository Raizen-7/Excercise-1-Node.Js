const { Sequelize, DataTypes } = require('sequelize');

// Establish db connection
const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'Ci@002383396',
	port: 5432,
	database: 'Excercise_1',
	logging: false,
});

module.exports = { db, DataTypes }