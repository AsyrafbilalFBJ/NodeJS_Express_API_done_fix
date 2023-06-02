const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nutrilife' //isi sesuai dengan nama database
})

module.exports = connection