const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.json());


function getDbConnection() {
    return mysql.createConnection({     
        host     : '124.222.124.103',       
        user     : 'root',              
        password : 'password',        
        database: 'aibo' 
    }); 
}

function createTableReservations(connection) {
    return new Promise((resolve, reject) => {
        const addTableSql = 'CREATE TABLE IF NOT EXISTS reservations (name VARCHAR(255), phone VARCHAR(255), date VARCHAR(255), course_key VARCHAR(255));'
        connection.query(addTableSql, (err, result) => {
           console.log(result);
           resolve();
           console.log(err)
           console.log(result)
        });
    });
}

app.get("/setr", (req, res) => {
    let connection = getDbConnection();
    connection.connect();
    createTableReservations(connection).then(res => {
        var  addSql = 'INSERT INTO reservations(name, phone, date, course_key) VALUES(?,?,?,?)';
        const queryParams = req.query || {};
        var  addSqlParams = [queryParams.name, queryParams.phone, queryParams.date, queryParams.course_key];
        connection.query(addSql,addSqlParams,function (err, result) {
               
            if(err) return console.log(err.message);
            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);        
            console.log('INSERT ID:',result);        
            console.log('-----------------------------------------------------------------\n\n'); 
            return res.json(result);
        });
    }).then(() => {
        connection.end();
    }).catch(() => {
        connection.end();
    });
});

app.get("/getr", (req, res) => {
    let connection = getDbConnection();
    connection.connect();
    createTableReservations(connection).then(() => {
        connection.query('select * from reservations', function (err, results, fields) {
            if(err) return console.log(err.message);
            console.log(results);
            return res.json(results);
        });
        connection.end();
    }).catch(() => {
        connection.end();
    });
});

app.listen(81, () => {
    console.log("server running on http://127.0.0.1:81")
});
