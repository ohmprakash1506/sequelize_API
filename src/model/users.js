import { DataTypes, Sequelize } from 'sequelize';
import dbConfig from '../../config/db.config.js';
const sequelize = new Sequelize({
    database:dbConfig.DATABASE,
    username:dbConfig.USERNAME,
    password:dbConfig.PASSWORD,
    host:dbConfig.HOST,
    dialect:dbConfig.DIALECT,
})

const User = sequelize.define('User',{
    username:{
        type: DataTypes.STRING
    },
    userage:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
});

export default User;