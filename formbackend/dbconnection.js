var mysql = require('mysql'); 
var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'task 8'
});

module.exports=connection;
