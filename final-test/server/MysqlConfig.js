const mysql = require('mysql');

connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'exam'
});

connection.connect();
module.exports = connection;