const express = require('express');

const app =  express();
const port = 3000;

const dbConfig = {
    host : 'db' ,
    user : 'root' ,
    password : 'root' ,
    database : 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);

const sql = `INSERT INTO people (name) VALUES ('douglas')`;
connection.query(sql);
connection.end();

app.listen(port , () => console.log(`iniciando na porta ${port}`));
app.get('/', (req, res) => res.send("Hello world!"));