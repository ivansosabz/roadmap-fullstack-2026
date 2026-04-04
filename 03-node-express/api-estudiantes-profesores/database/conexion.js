const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hello',
    database: 'cursos',
})
db.connect((err, db) => {
    if (err) {
        throw err;
    }
    console.log("base de datos conectada");
});

module.exports = db;