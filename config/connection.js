const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: "burgers_db"
});
}

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

// Export connection for our ORM to use.
module.exports = connection;