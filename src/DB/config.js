const dotenv = require('dotenv');
dotenv.config();

const configDB = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.BBDD_NAME
}

module.exports = {configDB}