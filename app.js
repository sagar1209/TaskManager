const express = require('express');
const app = express();
const tasks = require('./routes/task');
const mongodb = require('./db/connect');
const notFound = require('./middleware/not_found');
const errorHandlerMiddleware = require('./middleware/error-Handler');
require('dotenv').config();


app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks',tasks); 
app.use(notFound);
app.use(errorHandlerMiddleware);


const start = async()=>{
    try {
        await mongodb(process.env.MONGO_URL);
        app.listen(process.env.PORT,()=>{
            console.log(`server is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();