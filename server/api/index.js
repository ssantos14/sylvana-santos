const router = require('express').Router();

router.use('/projects', require('./projects')); 
router.use('/skills', require('./skills'));
// router.use('/sendEmail', require('./send_email'));

// if a user makes a request to an api route that doesn't exist, send a 404 error
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;