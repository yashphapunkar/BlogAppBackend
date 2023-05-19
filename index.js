const express = require('express');
const  app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;


app.use(express.json());

const blog = require('./routes/blog');
app.use('/api/v1', blog);


const dbConnect = require('./config/dbConnect');
dbConnect();

app.get('/', (req, res) => {
    res.send('<h1>JHey this is your server for the blog app</h1>');
})

app.listen( PORT, () => {
    console.log(`server started at port number ${PORT}`);
})

