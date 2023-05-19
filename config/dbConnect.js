const mongoose = require('mongoose');

require('dotenv').config();


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('database connectioln sucessfull here nowww');
    })
    .catch((err) => {
        console.error(err.message)
        console.log('some eroor occured in db connection please check yhour network and try again');
        process.exit();
    })
}

module.exports = dbConnect;