let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud",
    charset  : 'utf8_general_ci'
});

// connection.query("SET NAMES UTF8");

module.exports = connection;