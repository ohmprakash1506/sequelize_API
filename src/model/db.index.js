import dbConfig from '../../config/db.config.js';
import { Sequelize } from 'sequelize';
import User from './users.js';

const sequelize = new Sequelize({
    database:dbConfig.DATABASE,
    username:dbConfig.USERNAME,
    password:dbConfig.PASSWORD,
    host:dbConfig.HOST,
    dialect:dbConfig.DIALECT,    
    // dbConfig.POOL.MAX,
    // dbConfig.POOL.MIN,
    // dbConfig.POOL.ACQUIRE,
    // dbConfig.POOL.IDLE
}
)

sequelize.authenticate().then(() => {
    console.log(`Connected : ${sequelize}`)
}).catch(error => {
    console.log(`Error:`,error)
})


const db = {
    sequelize: sequelize,
    user: new User(sequelize)
};

export default db;