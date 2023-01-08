import express from 'express';
const app = express();
const port = 5000;
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const mongoDB = 'mongodb://localhost:27017/perpus';
app.use(bodyParser.urlencoded({ extended: true }));
import router from './src/router/routes.js';

mongoose.set("strictQuery", false);
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
});

app.use(router);

app.listen(port, () => {
    console.log('Rest Api listening at http://localhost:' + port);
});