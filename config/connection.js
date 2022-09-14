const Sequelize = require('sequelize');
require('dotenv').config();
// const cloudinary = require('cloudinary').v2;

// require('dotenv').config();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

let sequelize;
console.log(process.env.DB_PASSWORD)

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

//GMS export whichever sequelize we end up using 
module.exports = { sequelize };