const Sequelize = require('sequelize');
const db = require('./db');

const Projects = db.define('projects', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = Projects;