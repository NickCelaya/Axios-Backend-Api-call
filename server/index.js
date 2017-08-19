const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const config = require("./../config.js");


const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());


//connect to front end files.
app.use(express.static(__dirname + "./../dist")) //if using gulp or "build" when using react



// establishing massive connection to db

// massive(config.connection).then( (dbInstance) => {
//   app.set("db", dbInstance);
// })


const mainCtrl = require("./controller.js")

app.get("/api/characters", mainCtrl.getNames);
app.get("/api/planets", mainCtrl.getPlanets);
app.get("/api/vehicles", mainCtrl.getVehicles);






const PORT = 3000;
app.listen(PORT, () => {
  console.log(`War on port: ${PORT}`);
})
