var x = 0;
var speed = 3;
var acc = 0.1;
let bubble1;
var result;
//var db = require('./connection');

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

function setup() {
	createCanvas(windowWidth, windowHeight);
	bubble1 = new Bubble(x,100,100,result);
	//db.con.connect();
}

function mousePressed()
{
	//bubble1.x+=100;
	bubble1.clicked();
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();
	bubble1.show();
	bubble1.move();
	//ellipse(300,x,100,100);
	//speed+= acc;
	/*if(x > height){
		speed = -speed;
	}*/
	//if(x < 0)
	//{
	//	speed = 3;
	//}
	//x = x + speed;
}