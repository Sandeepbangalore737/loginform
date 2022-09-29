const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db2 = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Prabas771$",
  database: "orange",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get/", (req, res) => {
  const sqlGet = "SELECT * FROM orange.fulldetails;";
  db2.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get("/", (req, res) => {
  const sqlInserting =
    "INSERT INTO fulldetails (Name, Email, Mobile, Project ) VALUES ('sandy','sandygf','vdfgf','project')";

  db2.query(sqlInserting, (error, result) => {
    console.log("error", error);
    console.log("result", result);

    res.send("Hello Express");
  });
});

app.listen(5002, () => {
  console.log("listening for requests at port 5002");
});
