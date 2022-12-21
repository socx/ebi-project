const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

const peopleRoutes = require("./app/routes/people");

// Initialise the app
const app = express();

// Configure app for bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;
  res.status(status).json({
    error: {
      message: error.message
    }
  });
  console.error(err);
});

// Set up port for server to listen on
const PORT = process.env.PORT || 3008;

// Send message for default URLs
const appVersion = process.env.npm_package_version;
const appStatus = function (req, res) {
  res.sendFile(__dirname + "/index.html");
}
app.get('/', appStatus);
app.get('/api', appStatus);

// ROUTES
app.use("/api/people", peopleRoutes);
app.use('/images', express.static(__dirname+'/photos/'));

// Launch server
app.listen(PORT, function () {
  console.info("Server listening on port: " + PORT);
});
