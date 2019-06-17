var mysql = require('mysql');

var con = mysql.createConnection({
  host: "prueba10lab4.ciucggetnozt.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "k4k4tu4123."
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, puntuacion FROM MovieCrud.Movies", function (err, result, fields) {
      if (err) throw err;
      return result;
    });
  });