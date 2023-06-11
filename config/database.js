const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '34.101.59.151',
    user: 'root',
    password: 'nutrilife-sql2',
    database: 'nutrilife' //isi sesuai dengan nama database
})

module.exports = connection