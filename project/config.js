require('dotenv').config();

module.exports = {
    port : process.env.PORT || 3000,
    db :{
        host : process.env.DB_HOST || "localhost",
        port : process.env.DB_PORT || 5432,
        user : process.env.DB_USER || "user",
        password : process.env.DB_PASSWORD || "password",
        database : process.env.DB_NAME || "database"
    },
    env : process.env.NODE_ENV || "development",
}