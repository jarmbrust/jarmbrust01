const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();

// create middleware to handle the serving the app
app.use("/", serveStatic ( path.join (__dirname, '/build') ) );
// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
res.sendFile(__dirname + '/build/index.html')
});

// Create default port to serve the app on
const port = process.env.PORT || 3000
app.listen(port);
