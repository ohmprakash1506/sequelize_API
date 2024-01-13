import express from 'express';
import router from './route/router.js';
import db from './model/db.index.js';
import 'dotenv/config.js'

const app = express();
const port = process.env.PORT

app.use(express.json());

db.sequelize.sync();

app.listen(port , () => {
    console.log(`Server running on port : ${port}`)
})

app.use('/api/v1',router);