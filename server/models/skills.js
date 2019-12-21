const Sequelize = require('sequelize');
const db = require('./db');

const Skills = db.define('skills', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    icon: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = Skills;