const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path  = require("path");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public/dist")));

require("./server/config/mongoose");

var routes_setter = require("./server/config/routes")
routes_setter(app)

app.listen(8000, function () {
  console.log("Listen in port 8000")

})
