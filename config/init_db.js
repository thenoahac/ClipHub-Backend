// const mysql = require("mysql2");

// require('dotenv').config();

// const createDB = async () => {
//     const conn = mysql.createConnection({
//         host: "localhost",
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS 
//     });

//     conn.query(
//         `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
//         function (err, results) {
//             if (err) throw err;
//             console.log(results);
//         }
//     );

//     conn.end();
// }

// createDB();

// module.exports = createDB;