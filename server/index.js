const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const createApp = () => {

    // logging middleware
    app.use(morgan('dev'));

    // static middleware to serve up all files in the public folder
    app.use(express.static(path.join(__dirname, '../public')));

    // parsing middleware parses the body of requests so that we can use req.body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // set up all our api routes which are located in the routes folder
    app.use('/api', require('./api'));

    // for any get requests that do not match our routes, serve up the index.html file
    app.get('*', (req, res, next) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // if a request made it this far, we did something wrong, log and send a 500 error 
    app.use(function (err, req, res, next) {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });
};

// in order to serve up files upon requests, we need to listen for them
const PORT = process.env.PORT || 8080; // this can be very useful if you deploy to Heroku!
const startListening = () => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};

const bootApp = async () => {
    await createApp();
    await startListening();
};

bootApp();

module.exports = app;