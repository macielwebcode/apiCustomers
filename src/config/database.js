require('dotenv').config()


module.exports = {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: false,
        underscoredAll: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
    
}