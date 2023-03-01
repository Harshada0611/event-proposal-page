const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
//configuring .env
dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    console.log('connected to DB')
    console.log(error);
})


app.listen(port, () => console.log('Server is running on port:', port));