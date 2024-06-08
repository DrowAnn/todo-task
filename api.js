var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var query =
  "mongodb+srv://RobertPruebas:RD123456@pruebas.rk73dn5.mongodb.net/Pruebas?retryWrites=true&w=majority";
const db = query;

mongoose.Promise = global.Promise;

mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (error) {
    if (error) {
      console.log("Error!" + error);
    } else {
      console.log("Se ha conectado con la base de datos exitosamente");
    }
  }
);

module.exports = router;
