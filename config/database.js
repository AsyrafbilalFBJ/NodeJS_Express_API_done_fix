const mysql = require('mysql')

const connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nutrilife', //isi sesuai dengan nama database
    authPlugins: {
        mysql_native_password: () => ({ // Use mysql_native_password plugin
          password: 'nutrilife',
        }),
      },
})

module.exports = connection