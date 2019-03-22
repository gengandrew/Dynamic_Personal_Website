/*
  Routers call for all given http requests.
  All listed http request can be obtained from the localhost:5000/api location
    1. All http requests are in reference to a mysql relational backend
    2. All database credientals and informations are obtained form the /config/key file
*/
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();

router.use(bodyParser.json());

let dbConfig = require("../config/keys");
let connection = mysql.createConnection(dbConfig);

/*
  Http Request for Developer side testing tool used to check which database the backend
  is currently working on
*/
router.get("/checkCurrDB", (req, res) => {
  res.send(dbConfig);
  console.log(dbConfig);
});

/*
  Write to a locally hosted csv file.
*/
router.get("/addToCSV", (req, res) => {
  console.log(req.body);
  return;
});

/*
  Posting survey info into the local database.
*/
router.get("/postInfo", (req, res) => {
  console.log("hello");
  let newInsert = {
    InfoName: req.body.name,
    InfoSchool: req.body.school,
    InfoWork: req.body.work,
    InfoSong: req.body.song,
    Info: req.body.info
  }
  console.log(newInsert);
  let query = "INSERT INTO Information SET ?";
  let output = connection.query(query, newInsert, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(newInsert);
    }
  });
});

module.exports = router;
