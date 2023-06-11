const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database' //isi sesuai dengan nama database
})

module.exports = connection
