// Friend-Finder
// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("Friends App listening on PORT: " + PORT);
});