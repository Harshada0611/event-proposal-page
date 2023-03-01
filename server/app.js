const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

//serving static files (images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
//importing all the routes
const vendorRoute=require('./routes/vendor');
const proposalRoutes = require('./routes/proposal')
const userRoutes = require('./routes/user');

app.use('/vendor',vendorRoute);
app.use('/proposal', proposalRoutes);
app.use('/user', userRoutes);



module.exports = app;