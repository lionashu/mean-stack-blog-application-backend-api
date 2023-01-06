const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const mongoose = require('./db.js');
const app = express();
const router = require('../Backend/routes.js');
const  route  = require('../Backend/routes.js');
app.use(bodyParser.json());


app.use(cors({origin: 'http://localhost:4200'}));
app.listen(3000, ()=> console.log('Server is started on port 3000'));

app.use('/post',route)