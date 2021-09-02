const Sequelize = require("sequelize");
var express = require("express");
var app = express();
var mysql = require("mysql");
const db = require("./models/index");

app.use(express.json());

const sequelize = new Sequelize("nathandb", "root", "123", {
  host: "localhost",
  port: 3000,
  dialect: "mysql",
});

app.post("/test", function (request, response) {
  return db.studentinfo
    .create({
      name: request.body.name,
      register_number: request.body.register_number,
      email: request.body.email,
      department: request.body.department,
      phone_number: request.body.phone_number,
      father_name: request.body.father_name,
    })
    .then(function (studentinfo) {
      if (studentinfo) {
        response.send(studentinfo);
      } else {
        response.status(400).send("Error in insert new record");
      }
    });
});
app.listen(3000, function () {
  console.log("Server is Running");
});
