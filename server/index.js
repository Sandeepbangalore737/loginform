const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Prabas771$",
  database: "orange",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM orange.logindata";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO logindata (name, password) VALUES ('Sandeep', 'sandy123')";
  const sqlInsert2 =
    "INSERT INTO logindata (name, password) VALUES ('Sunil', 'suny123')";
  const sqlInsert3 =
    "INSERT INTO logindata (name, password) VALUES ('darshan', 'darshu123')";
  const sqlInsert4 =
    "INSERT INTO logindata (name, password) VALUES ('Yash', 'yash123')";
  const sqlInsert5 =
    "INSERT INTO logindata (name, password) VALUES ('Puneeth', 'puny123')";
  const sqlInsert6 =
    "INSERT INTO logindata (name, password) VALUES ('Ganesh', 'gany123')";

  db.query(
    (sqlInsert, sqlInsert2, sqlInsert3, sqlInsert4, sqlInsert5, sqlInsert6),
    (error, result) => {
      console.log("error", error);
      console.log("result", result);

      res.send("Hello Express");
    }
  );
});

app.listen(6002, () => {
  console.log("listening for requests at port 6002");
});
