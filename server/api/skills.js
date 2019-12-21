const router = require('express').Router();
const Skills = require('../models/skills');

router.get('/', async (req, res, next) => {
    try {
        const skills = await Skills.findAll();
        res.json(skills);    
    } catch (err) {
        next(err)
    }
});

module.exports = router;