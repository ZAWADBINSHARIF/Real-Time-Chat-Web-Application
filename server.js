// external imports
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');

// internal imports
const dbConnection = require('./config/DatabaseConnection');
const errorHandler = require('./middleware/common/ErrorHandler');

require('dotenv').config();

const PORT = process.env.PORT || 3500;

// connect to mongodb
dbConnection.connectDB();

// json parser
app.use(express.json());

// url parser
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// cookie parser middleware
app.use(cookieParser());

// route setup
app.use("/", loginRoute);
app.use("/users", userRoute);
app.use("/index", indexRoute);

// 404 not found page
app.use(errorHandler.notFoundHandler);

// default error handler
app.use(errorHandler.defaultErrorHandler);

// when the database connection is established then run the server.
mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server listenning on PORT http://localhost:${PORT}`));
    console.log('database connection is successfull');
});