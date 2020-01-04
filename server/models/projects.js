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
    },
    contributions: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
    },
    technologies: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isUrl: true
        }
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = Projects;