const express = require('express');
const app = express();
const path = require('path');

const createApp = () => {
    // static middleware to serve up all files in the public folder
    app.use(express.static(path.join(__dirname, '../public')));

    // for any get requests that do not match our routes, serve up the index.html file
    app.get('*', (req, res, next) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
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