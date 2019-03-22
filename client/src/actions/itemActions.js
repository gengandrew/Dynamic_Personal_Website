import axios from "axios";

/*
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("out.csv");
const serverHostID = "http://localhost:5000/api/";
*/

export const addToCSV = item => {
  console.log("hello world");
  //fastcsv.write(item, { headers: true }).pipe(ws);
};

export const addInfoToDB = item => dispatch => {
  console.log("has reached here");
  axios.post("https://localhost:5000/api/postInfo", item).then(res => [
    console.log("Has been pushed to database.")
  ])
}
